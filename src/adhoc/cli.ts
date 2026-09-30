#!/usr/bin/env node
/**
 * adhoc-audit — CLI-only ad-hoc site audit command.
 *
 * Usage:
 *   adhoc-audit --keyword=<HighSmoke|Smoke|E2E> --url=<url> [--out=<dir>] [--i-understand-the-risk]
 *
 * Presets:
 *   HighSmoke — desktop + mobile full-page screenshots, JS console errors, failed network requests (4xx/5xx)
 *   Smoke     — HighSmoke + accessibility audit + broken-link crawl + PDF export + real framework smoke run
 *   E2E       — Smoke + 10-second random chaos-interaction pass (mobile context), gated by --i-understand-the-risk
 *
 * Global install (one time, from this repo):
 *   npm link
 *
 * Path discipline:
 *   - Framework-internal paths (config, sources, node_modules) resolve relative to this
 *     package's installed location (PKG_ROOT, from import.meta.url) — never process.cwd().
 *   - User-facing --out paths resolve relative to process.cwd().
 */
import fs from 'fs';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
import { buildRunFolderName, RUN_DIR_ENV } from '../core/runner/runFolder.js';
import { captureAllScreenshots, ScreenshotResult } from './checks/screenshots.js';
import { captureConsoleAndNetwork } from './checks/consoleNetwork.js';
import { runAccessibilityAudit, AccessibilityResult } from './checks/accessibility.js';
import { crawlBrokenLinks, BrokenLinksResult } from './checks/brokenLinks.js';
import { runChaosInteraction, ChaosResult } from './checks/chaosInteraction.js';
import { exportReportPdf, PdfExportResult } from './checks/pdfExport.js';
import { renderReport, ReportData } from './reportRenderer.js';
import { triggerFrameworkPipeline } from './frameworkPipeline.js';
import { createSessions } from './browserSessions.js';

/**
 * Repo root. Derived from this file's location when run as ESM (tsx, tests),
 * or from the __dirname of the bundled launcher when run as the bundled CJS
 * global command (import.meta is unavailable there). Both resolve package-
 * relative — never process.cwd().
 */
function derivePkgRoot(): string {
  // Bundled CJS path: launcher passes the true package root via env — esbuild
  // rewrites __dirname to the temp bundle location, so it can't be trusted.
  const fromEnv = process.env.ADHOC_PKG_ROOT;
  if (fromEnv && fs.existsSync(path.join(fromEnv, 'src', 'adhoc', 'cli.ts'))) {
    return path.resolve(fromEnv);
  }
  try {
    // ESM path (tsx / direct TS execution)
    if (typeof import.meta.url === 'string') {
      return path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
    }
  } catch {
    // fall through to CJS path
  }
  const here = typeof __dirname !== 'undefined' ? __dirname : '';
  if (here && fs.existsSync(path.join(here, 'adhoc'))) {
    return path.resolve(here, '..', '..');
  }
  // Last resort: env var set by the launcher (adhoc-audit.mjs).
  return process.env.ADHOC_PKG_ROOT || process.cwd();
}

const PKG_ROOT = derivePkgRoot();

/**
 * Polyfill for tsx 3.x + Playwright interop: tsx's esbuild transform (keepNames)
 * can inject `__name(...)` helper calls into code that Playwright later evaluates
 * inside the browser (UtilityScript/injected script), crashing with
 * "ReferenceError: __name is not defined" (same class of bug the framework hit
 * in siteAnalyzer.ts). Define the helper in the Node process; browser contexts
 * get the same polyfill via addInitScript in browserSessions.ts.
 */
(globalThis as any).__name = (globalThis as any).__name || ((target: any, value?: string) => {
  try {
    if (value) Object.defineProperty(target, 'name', { value, configurable: true });
  } catch {
    // non-configurable name — nothing to do
  }
  return target;
});

export interface AdhocArgs {
  keyword: string;
  url: string;
  out: string;
  iUnderstandTheRisk: boolean;
}

const CANONICAL_KEYWORDS = ['HighSmoke', 'Smoke', 'E2E'] as const;
type Keyword = (typeof CANONICAL_KEYWORDS)[number];

function printUsage(exitCode: number): void {
  const lines = [
    '',
    'adhoc-audit — ad-hoc site audit CLI (yt-tc framework)',
    '',
    'Usage:',
    '  adhoc-audit --keyword=<HighSmoke|Smoke|E2E> --url=<url> [--out=<dir>] [--i-understand-the-risk]',
    '',
    'Presets:',
    '  HighSmoke  desktop+mobile screenshots, console + network errors (fast, production-safe)',
    '  Smoke      HighSmoke + a11y audit + broken links + PDF + real framework smoke run',
    '  E2E        Smoke + 10s mobile chaos interaction (DESTRUCTIVE — requires --i-understand-the-risk)',
    '',
    'Options:',
    '  --keyword                preset bundle to run (required)',
    '  --url                    target URL to audit (required)',
    '  --out                    base output folder (optional). Default: the current directory —\n                           the timestamped run folder is created directly in it. When given,\n                           the run folder is created inside that folder instead.',
    '  --i-understand-the-risk  required for E2E: acknowledges random clicking can mutate real data',
    '  --help                   show this help',
    '',
  ];
  console.log(lines.join('\n'));
  process.exit(exitCode);
}

function parseArgs(argv: string[]): AdhocArgs {
  const args: Partial<AdhocArgs> = {};
  let sawHelp = false;

  for (const raw of argv) {
    if (raw === '--help' || raw === '-h') {
      sawHelp = true;
      continue;
    }
    if (!raw.startsWith('--')) continue;
    const eq = raw.indexOf('=');
    const key = (eq > 0 ? raw.slice(2, eq) : raw.slice(2)).trim();
    const value = eq > 0 ? raw.slice(eq + 1) : '';
    switch (key) {
      case 'keyword': args.keyword = value; break;
      case 'url': args.url = value; break;
      case 'out': args.out = value; break;
      case 'i-understand-the-risk': args.iUnderstandTheRisk = true; break;
      default: console.warn(`Unknown option ignored: --${key}`);
    }
  }

  if (sawHelp) printUsage(0);
  return {
    keyword: args.keyword ?? '',
    url: args.url ?? '',
    out: args.out ?? '.', // default: current working directory (run folder created directly in it)
    iUnderstandTheRisk: args.iUnderstandTheRisk ?? false,
  };
}

/** Case-insensitive canonical match against HighSmoke / Smoke / E2E. */
function canonicalizeKeyword(raw: string): Keyword | null {
  const lowered = raw.toLowerCase();
  return CANONICAL_KEYWORDS.find(k => k.toLowerCase() === lowered) || null;
}

function validateArgs(args: AdhocArgs): { keyword: Keyword; url: string } {
  if (!args.keyword) {
    console.error('ERROR: --keyword is required (HighSmoke | Smoke | E2E). Use --help for usage.');
    process.exit(1);
  }
  const keyword = canonicalizeKeyword(args.keyword);
  if (!keyword) {
    console.error(`ERROR: unknown keyword '${args.keyword}'. Must be one of: ${CANONICAL_KEYWORDS.join(', ')}.`);
    process.exit(1);
  }
  if (!args.url) {
    console.error('ERROR: --url is required (e.g. --url=https://www.myvi.in/).');
    process.exit(1);
  }
  try {
    const parsed = new URL(args.url);
    if (!['http:', 'https:'].includes(parsed.protocol)) throw new Error('protocol must be http/https');
  } catch {
    console.error(`ERROR: --url must be a valid http(s) URL, got '${args.url}'.`);
    process.exit(1);
  }
  return { keyword, url: args.url };
}

/**
 * Resolve the run folder. User-facing output: always relative to process.cwd().
 * The folder is named test-reports_<datetime>_<url-name> (shared with the
 * framework's runFolder helper). Default (no --out): created directly in the
 * current directory. With --out: created inside that base folder. Same-second
 * collisions get a numeric suffix — never overwrite a previous run.
 */
function resolveRunDir(outArg: string, url: string): string {
  const outBase = path.isAbsolute(outArg) ? outArg : path.resolve(process.cwd(), outArg);
  const runDir = path.join(outBase, buildRunFolderName(url));
  if (fs.existsSync(runDir)) {
    // Same-second collision: add a numeric suffix, never overwrite a previous run.
    let i = 2;
    while (fs.existsSync(`${runDir}-${i}`)) i++;
    const suffixed = `${runDir}-${i}`;
    fs.mkdirSync(suffixed, { recursive: true });
    process.env[RUN_DIR_ENV] = suffixed;
    return suffixed;
  }
  fs.mkdirSync(runDir, { recursive: true });
  process.env[RUN_DIR_ENV] = runDir;
  return runDir;
}

function deriveDomain(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return url.replace(/[^a-zA-Z0-9]/g, '-');
  }
}

function printSummary(keyword: Keyword, url: string, runDir: string, startedAt: Date): void {
  const line = '='.repeat(60);
  console.log(`\n${line}`);
  console.log(`  adhoc-audit completed — preset: ${keyword}`);
  console.log(line);
  console.log(`  URL:      ${url}`);
  console.log(`  Duration: ${((Date.now() - startedAt.getTime()) / 1000).toFixed(1)}s`);
  console.log(`  Report:   ${path.join(runDir, 'report.html')}`);
  if (keyword === 'HighSmoke') {
    console.log('  PDF:      not included in HighSmoke preset (Smoke/E2E only)');
  } else {
    console.log(`  PDF:      ${path.join(runDir, 'report.pdf')}`);
  }
  console.log(`${line}\n`);
}

async function main(): Promise<void> {
  const startedAt = new Date();
  const args = parseArgs(process.argv.slice(2));
  const { keyword, url } = validateArgs(args);

  // Safety gate: E2E without --i-understand-the-risk warns and exits — never proceeds.
  if (keyword === 'E2E' && !args.iUnderstandTheRisk) {
    console.warn('');
    console.warn('============================================================');
    console.warn('  WARNING: The E2E preset includes a random chaos-interaction');
    console.warn('  pass that clicks, scrolls and types on the REAL site.');
    console.warn('');
    console.warn('  This can submit real forms, trigger checkout/payment flows,');
    console.warn('  send real emails, or mutate real backend data.');
    console.warn('');
    console.warn('  Re-run with --i-understand-the-risk to acknowledge the risk.');
    console.warn('============================================================');
    console.warn('');
    process.exit(1);
  }

  const runDir = resolveRunDir(args.out, url);
  const domain = deriveDomain(url);

  console.log('');
  console.log('adhoc-audit');
  console.log(`  Keyword: ${keyword}`);
  console.log(`  URL:     ${url}`);
  console.log(`  Output:  ${runDir}`);
  console.log('');

  const timeline: ReportData['timeline'] = [];
  const mark = (label: string, detail: string): void => {
    timeline.push({ label, detail, at: new Date().toISOString() });
  };

  mark('Session', `Opening browser sessions for ${domain}`);
  const sessions = await createSessions(url);

  const screenshots: ScreenshotResult = { entries: [] };
  let consoleNetwork: Awaited<ReturnType<typeof captureConsoleAndNetwork>> = { consoleErrors: [], failedRequests: [] };
  let accessibility: AccessibilityResult | null = null;
  let brokenLinks: BrokenLinksResult | null = null;
  let chaos: ChaosResult | null = null;
  let framework: Awaited<ReturnType<typeof triggerFrameworkPipeline>> | null = null;
  let pdf: PdfExportResult | null = null;

  try {
    // ---- 1. Screenshots (all presets) --------------------------------------
    console.log('--- Screenshots (desktop + mobile, full page) ---');
    screenshots.entries = (await captureAllScreenshots(sessions, runDir)).entries;
    mark('Screenshots', `Captured ${screenshots.entries.length} full-page screenshot(s)`);

    // ---- 2. Console + network (all presets) ---------------------------------
    console.log('--- Console & network capture ---');
    consoleNetwork = await captureConsoleAndNetwork(sessions);
    mark('Console/Network',
      `${consoleNetwork.consoleErrors.length} console error(s), ${consoleNetwork.failedRequests.length} failed request(s)`);

    const includeSmokeExtras = keyword === 'Smoke' || keyword === 'E2E';

    // ---- 3. Accessibility audit (Smoke/E2E) ---------------------------------
    if (includeSmokeExtras) {
      console.log('--- Accessibility audit (axe-core) ---');
      accessibility = await runAccessibilityAudit(sessions.desktop.page);
      mark('Accessibility', `${accessibility.violations.length} axe violation rule(s)`);
    }

    // ---- 4. Broken-link crawl (Smoke/E2E) ------------------------------------
    if (includeSmokeExtras) {
      console.log('--- Broken links (cap 20) ---');
      brokenLinks = await crawlBrokenLinks(sessions.desktop.page, url);
      mark('Broken links', `${brokenLinks.broken.length} broken of ${brokenLinks.checked} checked`);
    }

    // ---- 5. Real framework smoke run (Smoke/E2E) ------------------------------
    if (includeSmokeExtras) {
      console.log('--- Framework smoke-test pipeline (explore → generate → run) ---');
      framework = await triggerFrameworkPipeline(url);
      mark('Framework run', framework.triggered
        ? `exit=${framework.exitCode}, passed=${framework.summary?.passed ?? 0}, failed=${framework.summary?.failed ?? 0}, skipped=${framework.summary?.skipped ?? 0}`
        : `failed to start: ${framework.error ?? 'unknown'}`);
    }

    // ---- 6. Chaos interaction (E2E only) --------------------------------------
    if (keyword === 'E2E') {
      console.log('--- Chaos interaction (10s, mobile context) ---');
      chaos = await runChaosInteraction(sessions.mobile.page, url, 10_000);
      mark('Chaos interaction', `${chaos.actions.length} action(s) in ${(chaos.durationMs / 1000).toFixed(1)}s measured`);
    }
  } finally {
    try {
      await sessions.browser.close();
    } catch {
      // best-effort cleanup
    }
  }

  // ---- 7. Render the premium self-contained report ---------------------------
  mark('Report', 'Rendering self-contained HTML report');
  const reportData: ReportData = {
    keyword,
    url,
    domain,
    hostname: os.hostname(),
    startedAt: startedAt.toISOString(),
    finishedAt: new Date().toISOString(),
    timeline,
    screenshots: screenshots.entries,
    consoleErrors: consoleNetwork.consoleErrors,
    failedRequests: consoleNetwork.failedRequests,
    accessibility,
    brokenLinks,
    chaos,
    framework,
    pdf, // first render: PDF not attempted yet (null → badge omitted)
    runDir,
  };
  const htmlPath = renderReport(reportData, runDir);
  console.log(`Report written: ${htmlPath}`);

  // ---- 8. PDF export (Smoke/E2E) ----------------------------------------------
  if (keyword === 'Smoke' || keyword === 'E2E') {
    console.log('--- PDF export (report.html → report.pdf, A4) ---');
    pdf = await exportReportPdf(htmlPath, path.join(runDir, 'report.pdf'));
    mark('PDF export', pdf.ok ? `report.pdf generated in ${fmtSecs(pdf.durationMs)}` : `FAILED: ${pdf.error ?? 'unknown'}`);
    // Re-render so the report carries the real PDF outcome (success or degraded badge).
    renderReport({ ...reportData, pdf }, runDir);
    console.log(pdf.ok ? `PDF written: ${path.join(runDir, 'report.pdf')}` : `PDF export failed (report still valid): ${pdf.error}`);
  }

  printSummary(keyword, url, runDir, startedAt);
}

function fmtSecs(ms: number): string {
  return `${(ms / 1000).toFixed(1)}s`;
}

// Fail fast on unsupported Node versions.
const nodeMajor = Number(process.versions.node.split('.')[0]);
if (nodeMajor < 18) {
  console.error(`adhoc-audit requires Node.js 18+, found ${process.versions.node}`);
  process.exit(1);
}

// Run main() when executed as the CLI (bundled or via tsx). The bundled launcher
// passes --run-adhoc-cli so the bundle knows it is the entry; under tsx the
// ESM direct-run check applies.
const isBundledEntry = process.argv.includes('--run-adhoc-cli');
let isDirectEsmEntry = false;
try {
  const entryPath = process.argv[1] ? fs.realpathSync(process.argv[1]) : '';
  isDirectEsmEntry = entryPath === fileURLToPath(import.meta.url);
} catch {
  isDirectEsmEntry = false;
}

if (isBundledEntry || isDirectEsmEntry) {
  if (isBundledEntry) {
    process.argv = process.argv.filter(a => a !== '--run-adhoc-cli');
  }
  main().catch(err => {
    console.error('adhoc-audit failed:', err?.message || err);
    if (err?.stack) console.error(err.stack);
    process.exit(1);
  });
}
