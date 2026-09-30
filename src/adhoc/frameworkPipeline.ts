/**
 * Bridge to the existing framework pipeline (src/core/runner/runFramework.ts).
 *
 * For Smoke/E2E presets we trigger the REAL pipeline — explore → generate →
 * validate → run — via `tsx`, exactly like `npm run ai:smoke`, and then fold
 * the framework's own pass/fail counts (test-results/test-summary.json) and
 * its Allure + Playwright HTML report locations into the ad-hoc report.
 *
 * Path discipline: everything the pipeline needs resolves relative to the
 * package root (PKG_ROOT, derived from this module's import.meta.url) — never
 * process.cwd(), so the command works from any directory once npm-linked.
 *
 * Process discipline: spawnSync with an args array (no shell string
 * interpolation), matching the framework's processRunner conventions.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawnSync } from 'child_process';
import { resolveActiveRunFolder } from '../core/runner/runFolder';

/**
 * Repo root. When running as the bundled CJS CLI, esbuild rewrites __dirname to
 * the temp bundle location — useless — so the launcher (adhoc-audit.mjs) passes
 * the true package root via ADHOC_PKG_ROOT. Under ESM (tsx/tests) we derive it
 * from this file's location. Always package-relative, never process.cwd().
 */
function derivePkgRoot(): string {
  const fromEnv = process.env.ADHOC_PKG_ROOT;
  if (fromEnv && fs.existsSync(path.join(fromEnv, 'src', 'core', 'runner', 'runFramework.ts'))) {
    return path.resolve(fromEnv);
  }
  if (typeof __dirname !== 'undefined' && __dirname &&
      fs.existsSync(path.join(__dirname, '..', '..', 'src', 'core', 'runner', 'runFramework.ts'))) {
    return path.resolve(__dirname, '..', '..');
  }
  return path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
}

const PKG_ROOT = derivePkgRoot();

export interface FrameworkPipelineResult {
  triggered: boolean;
  exitCode: number | null;
  durationMs: number;
  summary: { total: number; passed: number; failed: number; skipped: number } | null;
  allureReportPath: string | null;
  playwrightReportPath: string | null;
  logPath: string | null;
  error?: string;
}

/** Locate the framework's tsx binary (package-relative, OS-aware). */
function resolveTsxCommand(): { cmd: string; useShell: boolean } {
  const isWindows = process.platform === 'win32';
  const tsxCli = isWindows
    ? path.join(PKG_ROOT, 'node_modules', 'tsx', 'dist', 'cli.mjs')
    : path.join(PKG_ROOT, 'node_modules', '.bin', 'tsx');
  // Node itself runs the tsx CLI module — no shell needed, args stay an array.
  return { cmd: process.execPath, useShell: false, tsxCli } as any;
}

function readTestSummary(): { total: number; passed: number; failed: number; skipped: number } | null {
  try {
    const summaryPath = path.join(getRunFolder(), 'test-results', 'test-summary.json');
    if (!fs.existsSync(summaryPath)) return null;
    const raw = fs.readFileSync(summaryPath, 'utf-8');
    const data = JSON.parse(raw);
    return {
      total: data.total ?? (data.passed || 0) + (data.failed || 0) + (data.skipped || 0),
      passed: data.passed || 0,
      failed: data.failed || 0,
      skipped: data.skipped || 0,
    };
  } catch {
    return null;
  }
}

/**
 * This run's consolidated output folder (test-reports_<datetime>_<url>).
 * The pipeline subprocess inherits FRAMEWORK_RUN_DIR, so resolution here must
 * match how the pipeline itself resolves it — env first, newest-folder
 * fallback second. Never a bare PKG_ROOT path (that was the pre-consolidation
 * layout and now 404s).
 */
function getRunFolder(): string {
  return resolveActiveRunFolder(PKG_ROOT);
}

function firstExisting(candidates: string[]): string | null {
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  return null;
}

/**
 * Trigger the existing framework pipeline for the smoke suite against `url`.
 * Returns the pipeline's real counts and report locations (or an error) —
 * the ad-hoc report links to the framework's own reports for this same run.
 */
export async function triggerFrameworkPipeline(url: string): Promise<FrameworkPipelineResult> {
  const started = Date.now();

  try {
    const tsxInfo = resolveTsxCommand() as any;
    const runnerPath = path.join(PKG_ROOT, 'src', 'core', 'runner', 'runFramework.ts');

    if (!fs.existsSync(runnerPath)) {
      return {
        triggered: false, exitCode: null, durationMs: Date.now() - started, summary: null,
        allureReportPath: null, playwrightReportPath: null, logPath: null,
        error: `Framework runner not found at ${runnerPath}`,
      };
    }

    // Args array only — never a shell-interpolated command string.
    // ADHOC_PKG_ROOT lets the pipeline resolve the package; FRAMEWORK_RUN_DIR
    // (already exported by the CLI's runFolder helper) makes the pipeline
    // write all its artifacts into the SAME test-reports_* folder as the
    // ad-hoc report.
    const spawnArgs = [tsxInfo.tsxCli, runnerPath, '--suite=smoke', `--urls=${url}`];
    console.log(`  [framework] ${path.basename(process.execPath)} ${path.join('src', 'core', 'runner', 'runFramework.ts')} --suite=smoke --urls=${url}`);
    console.log('  [framework] streaming framework output (explore → generate → validate → run)…');

    const result = spawnSync(process.execPath, spawnArgs, {
      cwd: PKG_ROOT, // pipeline expects to run from the repo root (its own ROOT)
      env: {
        ...process.env,
        TEST_TAG: '@smoke',
        // Keep generated specs headless even if the repo config defaults to headed.
        CHROMIUM_MODE: 'headless',
        FIREFOX_MODE: 'headless',
        WEBKIT_MODE: 'headless',
        // Route the pipeline's artifacts into the ad-hoc run's folder
        // (FRAMEWORK_RUN_DIR is set by the CLI's runFolder helper).
        FRAMEWORK_RUN_DIR: process.env.FRAMEWORK_RUN_DIR || '',
      },
      stdio: ['ignore', 'inherit', 'inherit'],
      // The real pipeline (explore → generate → validate → run across 3 browsers)
      // is unmodified and can legitimately take 1-2 hours on large sites — this
      // bound only protects against a hung subprocess, not against honest slowness.
      timeout: 120 * 60 * 1000,
      windowsHide: true,
      shell: false,
    });

    const exitCode = result.status ?? (result.error ? -1 : 0);

    // The pipeline writes every artifact into the run folder published via
    // FRAMEWORK_RUN_DIR (inherited by this spawned process); resolve all
    // report paths through the same helper the pipeline uses.
    const runFolder = getRunFolder();
    const summary = readTestSummary();
    const allureReportPath = firstExisting([
      path.join(runFolder, 'allure-report', 'index.html'),
    ]);
    const playwrightReportPath = firstExisting([
      path.join(runFolder, 'playwright-report', 'index.html'),
    ]);

    return {
      triggered: true,
      exitCode,
      durationMs: Date.now() - started,
      summary,
      allureReportPath,
      playwrightReportPath,
      logPath: fs.existsSync(path.join(runFolder, 'logs', 'test.logs'))
        ? path.join(runFolder, 'logs', 'test.logs')
        : null,
      error: result.error ? String(result.error) : undefined,
    };
  } catch (err: any) {
    return {
      triggered: false,
      exitCode: null,
      durationMs: Date.now() - started,
      summary: null,
      allureReportPath: null,
      playwrightReportPath: null,
      logPath: null,
      error: err?.message || String(err),
    };
  }
}
