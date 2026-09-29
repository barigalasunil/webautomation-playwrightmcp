/**
 * PDF export worker for adhoc-audit.
 *
 * Exporting the PDF from a fresh node subprocess (instead of the long-lived
 * CLI process) sidesteps a Windows chromium-launch failure (STATUS_DLL_INIT_
 * FAILED / 0xC0000142) that occurs when chromium is launched from a process
 * that has just spawnSync'ed a long-running framework child. A fresh process
 * launches the same chromium reliably (verified), so the CLI hands this one
 * job to the worker and reads back a JSON result.
 *
 * Usage:
 *   node pdfExportWorker.mjs <reportHtmlPath> <outPdfPath>
 *
 * Prints a single JSON line to stdout:
 *   { "ok": true, "file": "report.pdf", "durationMs": 1234 }
 *   { "ok": false, "error": "...", "durationMs": 1234 }
 */
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

// Playwright resolves relative to this worker file inside the package tree,
// regardless of the caller's cwd (NODE_PATH is set by the launcher as backup).
const { chromium } = await import('playwright');

const reportHtmlPath = process.argv[2];
const outPdfPath = process.argv[3];
const started = Date.now();

if (!reportHtmlPath || !outPdfPath) {
  console.log(JSON.stringify({ ok: false, error: 'usage: pdfExportWorker <reportHtmlPath> <outPdfPath>', durationMs: 0 }));
  process.exit(0);
}

let browser = null;
try {
  if (!fs.existsSync(reportHtmlPath)) {
    console.log(JSON.stringify({ ok: false, error: `report.html not found at ${reportHtmlPath}`, durationMs: Date.now() - started }));
    process.exit(0);
  }

  browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  // file:// URL so the report must be truly self-contained (offline) to render.
  await page.goto(pathToFileURL(path.resolve(reportHtmlPath)).href, { waitUntil: 'load', timeout: 60_000 });
  await page.emulateMedia({ media: 'print' });

  fs.mkdirSync(path.dirname(outPdfPath), { recursive: true });
  await page.pdf({
    path: outPdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '10mm', bottom: '10mm', left: '8mm', right: '8mm' },
  });

  if (!fs.existsSync(outPdfPath) || fs.statSync(outPdfPath).size === 0) {
    console.log(JSON.stringify({ ok: false, error: 'PDF file missing or empty after export', durationMs: Date.now() - started }));
  } else {
    console.log(JSON.stringify({ ok: true, file: path.basename(outPdfPath), durationMs: Date.now() - started }));
  }
} catch (err) {
  console.log(JSON.stringify({ ok: false, error: err?.message || String(err), durationMs: Date.now() - started }));
} finally {
  if (browser) {
    try {
      await browser.close();
    } catch {
      // best-effort cleanup
    }
  }
  process.exit(0);
}
