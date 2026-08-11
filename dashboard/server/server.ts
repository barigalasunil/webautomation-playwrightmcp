import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import path from 'path';
import fs from 'fs';
import archiver from 'archiver';
import { fileURLToPath } from 'url';
import {
  createRun,
  startRun,
  getRun,
  subscribeToRun,
  getReportPath,
  getLogsPath,
  getDebugPath,
  RunRequest,
} from './runManager.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Serve static frontend files (built Vite app)
// __dirname = dashboard/server, so ../client/dist = dashboard/client/dist
const clientDist = path.resolve(__dirname, '..', 'client', 'dist');
if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist));
}

// POST /api/run - Start a new framework run
app.post('/api/run', (req, res) => {
  try {
    const { url, mode, browsers, suite } = req.body;

    // Validate input
    if (!url || typeof url !== 'string') {
      return res.status(400).json({ error: 'URL is required' });
    }

    try {
      new URL(url);
    } catch {
      return res.status(400).json({ error: 'Invalid URL format' });
    }

    if (!['headed', 'headless'].includes(mode)) {
      return res.status(400).json({ error: 'Mode must be "headed" or "headless"' });
    }

    if (!Array.isArray(browsers) || browsers.length === 0) {
      return res.status(400).json({ error: 'At least one browser must be selected' });
    }

    if (browsers.length > 4) {
      return res.status(400).json({ error: 'Maximum 4 browsers allowed' });
    }

    const validBrowsers = ['chromium', 'firefox', 'webkit'];
    for (const b of browsers) {
      if (!validBrowsers.includes(b)) {
        return res.status(400).json({ error: `Invalid browser: ${b}` });
      }
    }

    if (!['smoke', 'sanity', 'regression'].includes(suite)) {
      return res.status(400).json({ error: 'Suite must be "smoke", "sanity", or "regression"' });
    }

    const request: RunRequest = { url, mode, browsers, suite };
    const runId = createRun(request);
    startRun(runId);

    res.json({ runId });
  } catch (err: any) {
    res.status(409).json({ error: err.message });
  }
});

// GET /api/run/:runId/progress - SSE stream for progress events
app.get('/api/run/:runId/progress', (req, res) => {
  const { runId } = req.params;

  const state = getRun(runId);
  if (!state) {
    return res.status(404).json({ error: 'Run not found' });
  }

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  });

  // Send current state immediately
  if (state.status === 'done' && state.summary) {
    res.write(`data: ${JSON.stringify({ phase: 'done', summary: state.summary })}\n\n`);
  } else if (state.status === 'error' && state.error) {
    res.write(`data: ${JSON.stringify({ phase: 'error', message: state.error })}\n\n`);
  }

  // Subscribe to future events
  const unsubscribe = subscribeToRun(runId, (event) => {
    res.write(`data: ${JSON.stringify(event)}\n\n`);
  });

  req.on('close', () => {
    unsubscribe();
  });
});

// GET /api/run/:runId/report/allure - Download Allure report
app.get('/api/run/:runId/report/allure', (req, res) => {
  const { runId } = req.params;
  const reportPath = getReportPath(runId, 'allure');

  if (!reportPath) {
    return res.status(404).json({ error: 'Allure report not found' });
  }

  // If it's a single HTML file, serve it directly
  if (reportPath.endsWith('index.html')) {
    return res.download(reportPath, 'allure-report.html');
  }

  // Otherwise, zip the directory
  res.writeHead(200, {
    'Content-Type': 'application/zip',
    'Content-Disposition': `attachment; filename="allure-report-${runId}.zip"`,
  });

  const archive = archiver('zip', { zlib: { level: 9 } });
  archive.pipe(res);
  archive.directory(reportPath, false);
  archive.finalize();
});

// GET /api/run/:runId/report/playwright - Download Playwright report as single HTML
app.get('/api/run/:runId/report/playwright', (req, res) => {
  const { runId } = req.params;
  const reportPath = getReportPath(runId, 'playwright');

  if (!reportPath) {
    return res.status(404).json({ error: 'Playwright report not found' });
  }

  // If it's a directory, serve the index.html directly (Playwright inlines assets by default)
  if (fs.existsSync(reportPath) && fs.statSync(reportPath).isDirectory()) {
    const indexPath = path.join(reportPath, 'index.html');
    if (fs.existsSync(indexPath)) {
      return res.download(indexPath, `playwright-report-${runId}.html`);
    }
  }

  // If it's already a single HTML file
  if (reportPath.endsWith('.html') || reportPath.endsWith('index.html')) {
    return res.download(reportPath, `playwright-report-${runId}.html`);
  }

  // Fallback: zip the directory
  res.writeHead(200, {
    'Content-Type': 'application/zip',
    'Content-Disposition': `attachment; filename="playwright-report-${runId}.zip"`,
  });

  const archive = archiver('zip', { zlib: { level: 9 } });
  archive.pipe(res);
  archive.directory(reportPath, false);
  archive.finalize();
});

// GET /api/run/:runId/logs - Download run log as Markdown
app.get('/api/run/:runId/logs', (req, res) => {
  const { runId } = req.params;
  const logsPath = getLogsPath(runId);

  if (!logsPath) {
    return res.status(404).json({ error: 'Run log not found. The run may not have completed yet.' });
  }

  res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
  res.setHeader('Content-Disposition', `attachment; filename="run-log-${runId}.md"`);
  res.sendFile(logsPath);
});

// GET /api/run/:runId/debug - Download run debug JSON
app.get('/api/run/:runId/debug', (req, res) => {
  const { runId } = req.params;
  const debugPath = getDebugPath(runId);

  if (!debugPath) {
    return res.status(404).json({ error: 'Debug info not found. The run may not have completed yet.' });
  }

  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Content-Disposition', `attachment; filename="run-debug-${runId}.json"`);
  res.sendFile(debugPath);
});

// Catch-all: serve index.html for SPA routing
app.get('*', (req, res) => {
  const indexPath = path.join(clientDist, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).json({ error: 'Frontend not built. Run: cd dashboard/client && npm run build' });
  }
});

const server = createServer(app);

server.listen(PORT, () => {
  console.log(`Dashboard server running at http://localhost:${PORT}`);
});
