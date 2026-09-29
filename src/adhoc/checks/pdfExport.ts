/**
 * PDF export for ad-hoc audits (Smoke/E2E presets).
 *
 * Renders the already-generated report.html itself to report.pdf (A4) using a
 * local headless Chromium page. The actual rendering happens in a dedicated
 * fresh node subprocess (pdfExportWorker.mjs): launching chromium from the
 * long-lived CLI process right after it spawned the heavy framework pipeline
 * fails on Windows with STATUS_DLL_INIT_FAILED (0xC0000142), while a fresh
 * process launches the same chromium reliably.
 *
 * Every path — including a failed launch() — cleans the browser up in the
 * worker's `finally`, and a failed export degrades to a "PDF failed" badge in
 * the report instead of crashing the run.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawnSync } from 'child_process';

export interface PdfExportResult {
  ok: boolean;
  file?: string;
  error?: string;
  durationMs: number;
}

function workerPath(): string {
  // Bundle-safe: esbuild rewrites __dirname to the temp bundle dir, so prefer
  // the env-provided package root when present (set by adhoc-audit.mjs).
  const pkgRoot = process.env.ADHOC_PKG_ROOT ||
    (typeof __dirname !== 'undefined' && __dirname && fs.existsSync(path.join(__dirname, '..', '..', 'src', 'adhoc'))
      ? path.resolve(__dirname, '..', '..')
      : path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..', '..'));
  return path.join(pkgRoot, 'src', 'adhoc', 'checks', 'pdfExportWorker.mjs');
}

function exportViaWorker(reportHtmlPath: string, outPdfPath: string): PdfExportResult {
  const started = Date.now();
  const worker = workerPath();
  if (!fs.existsSync(worker)) {
    return { ok: false, error: `PDF worker not found at ${worker}`, durationMs: Date.now() - started };
  }

  // spawnSync with an args array — never shell-interpolated.
  const result = spawnSync(process.execPath, [worker, reportHtmlPath, outPdfPath], {
    stdio: ['ignore', 'pipe', 'pipe'],
    timeout: 180_000,
    windowsHide: true,
    shell: false,
    env: { ...process.env, ADHOC_PKG_ROOT: process.env.ADHOC_PKG_ROOT || '' },
  });

  const stdout = (result.stdout || '').toString().trim();
  const jsonLine = stdout.split('\n').filter(l => l.trim().startsWith('{')).pop();

  if (jsonLine) {
    try {
      const parsed = JSON.parse(jsonLine) as PdfExportResult;
      if (typeof parsed.ok === 'boolean') return parsed;
    } catch {
      // fall through to generic failure below
    }
  }

  const error = result.error?.message || (result.stderr || '').toString().split('\n')[0] || `worker exited with ${result.status}`;
  return { ok: false, error, durationMs: Date.now() - started };
}

/**
 * In-process fallback (used when NODE_PATH-resolved playwright is available in
 * this process — e.g. running via tsx from the repo). Kept identical in
 * behavior: every failure path returns a result, never throws.
 */
async function exportInProcess(reportHtmlPath: string, outPdfPath: string): Promise<PdfExportResult> {
  const started = Date.now();
  const maxAttempts = 2;
  let lastError = '';

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    let browser: import('playwright').Browser | null = null;
    try {
      if (!fs.existsSync(reportHtmlPath)) {
        return { ok: false, error: `report.html not found at ${reportHtmlPath}`, durationMs: Date.now() - started };
      }

      const { chromium } = await import('playwright');
      browser = await chromium.launch({ headless: true });
      const page = await browser.newPage();
      await page.goto(`file:///${path.resolve(reportHtmlPath).replace(/\\/g, '/')}`, { waitUntil: 'load', timeout: 60_000 });
      await page.emulateMedia({ media: 'print' });

      fs.mkdirSync(path.dirname(outPdfPath), { recursive: true });
      await page.pdf({
        path: outPdfPath,
        format: 'A4',
        printBackground: true,
        margin: { top: '10mm', bottom: '10mm', left: '8mm', right: '8mm' },
      });

      if (!fs.existsSync(outPdfPath) || fs.statSync(outPdfPath).size === 0) {
        lastError = 'PDF file missing or empty after export';
      } else {
        return { ok: true, file: path.basename(outPdfPath), durationMs: Date.now() - started };
      }
    } catch (err: any) {
      lastError = err?.message || String(err);
    } finally {
      if (browser) {
        try {
          await browser.close();
        } catch {
          // best-effort cleanup
        }
      }
    }
  }

  return { ok: false, error: lastError, durationMs: Date.now() - started };
}

export async function exportReportPdf(reportHtmlPath: string, outPdfPath: string): Promise<PdfExportResult> {
  // Preferred: fresh subprocess (robust against the post-pipeline launch issue).
  const viaWorker = exportViaWorker(reportHtmlPath, outPdfPath);
  if (viaWorker.ok) return viaWorker;

  // Fallback: in-process with one retry (covers worker/launch env issues).
  const inProcess = await exportInProcess(reportHtmlPath, outPdfPath);
  if (inProcess.ok) return inProcess;

  return {
    ok: false,
    error: `worker: ${viaWorker.error ?? 'unknown'}; in-process: ${inProcess.error ?? 'unknown'}`,
    durationMs: (viaWorker.durationMs || 0) + (inProcess.durationMs || 0),
  };
}
