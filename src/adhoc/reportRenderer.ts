/**
 * Premium self-contained HTML report renderer for ad-hoc audits.
 *
 * Offline contract (enforced by design here):
 *   - inline CSS only, inline SVG charts, system font stack, zero CDN
 *     <script>/<link>/@import/Google-Fonts references.
 *   - the only external references are the local relative screenshot files
 *     written next to report.html in the run folder.
 */
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import { ensureDir } from '../core/utils/fileUtils';
import type { ScreenshotEntry } from './checks/screenshots';
import type { ConsoleErrorEntry, FailedRequestEntry } from './browserSessions';
import type { AccessibilityResult, A11yViolation } from './checks/accessibility';
import type { BrokenLinksResult } from './checks/brokenLinks';
import type { ChaosResult } from './checks/chaosInteraction';
import type { PdfExportResult } from './checks/pdfExport';
import type { FrameworkPipelineResult } from './frameworkPipeline';

export interface ReportData {
  keyword: string;
  url: string;
  domain: string;
  hostname: string;
  startedAt: string;
  finishedAt: string;
  timeline: { label: string; detail: string; at: string }[];
  screenshots: ScreenshotEntry[];
  consoleErrors: ConsoleErrorEntry[];
  failedRequests: FailedRequestEntry[];
  accessibility: AccessibilityResult | null;
  brokenLinks: BrokenLinksResult | null;
  chaos: ChaosResult | null;
  framework: FrameworkPipelineResult | null;
  pdf: PdfExportResult | null;
  runDir: string;
}

const IMPACT_COLORS: Record<string, string> = {
  critical: '#dc2626',
  serious: '#ea580c',
  moderate: '#d97706',
  minor: '#65a30d',
  unknown: '#64748b',
};

function esc(s: string | undefined | null): string {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function fmtDuration(ms: number): string {
  if (ms < 1000) return `${ms}ms`;
  const s = ms / 1000;
  if (s < 60) return `${s.toFixed(1)}s`;
  const m = Math.floor(s / 60);
  return `${m}m ${Math.round(s - m * 60)}s`;
}

function fmtTime(iso: string): string {
  try {
    return new Date(iso).toLocaleTimeString('en-GB', { hour12: false });
  } catch {
    return iso;
  }
}

/** Inline SVG donut chart — pass/fail style counts, no external assets. */
function donutChartSvg(segments: { label: string; value: number; color: string }[], centerLabel: string): string {
  const total = segments.reduce((acc, s) => acc + s.value, 0);
  if (total === 0) {
    return `<svg viewBox="0 0 120 120" width="150" height="150" role="img" aria-label="no data">
      <circle cx="60" cy="60" r="44" fill="none" stroke="#e2e8f0" stroke-width="16"/>
      <text x="60" y="58" text-anchor="middle" font-size="11" fill="#64748b">${esc(centerLabel)}</text>
      <text x="60" y="74" text-anchor="middle" font-size="14" fill="#94a3b8">no data</text>
    </svg>`;
  }
  const circumference = 2 * Math.PI * 44;
  let offset = 0;
  const arcs = segments
    .filter(s => s.value > 0)
    .map(s => {
      const frac = s.value / total;
      const dash = frac * circumference;
      const seg = `<circle cx="60" cy="60" r="44" fill="none" stroke="${s.color}" stroke-width="16"
        stroke-dasharray="${dash.toFixed(2)} ${(circumference - dash).toFixed(2)}"
        stroke-dashoffset="${(-offset).toFixed(2)}" transform="rotate(-90 60 60)"/>`;
      offset += dash;
      return seg;
    })
    .join('\n');
  return `<svg viewBox="0 0 120 120" width="150" height="150" role="img" aria-label="${esc(centerLabel)}">
    ${arcs}
    <text x="60" y="58" text-anchor="middle" font-size="11" fill="#64748b">${esc(centerLabel)}</text>
    <text x="60" y="76" text-anchor="middle" font-size="18" font-weight="700" fill="#0f172a">${total}</text>
  </svg>`;
}

function legend(segments: { label: string; value: number; color: string }[]): string {
  return segments
    .map(s => `<div class="legend-item"><span class="dot" style="background:${s.color}"></span>${esc(s.label)} <b>${s.value}</b></div>`)
    .join('');
}

function badge(text: string, cls: string): string {
  return `<span class="badge ${cls}">${esc(text)}</span>`;
}

/** Absolute local paths become clickable file:// URIs (Windows-safe); relative paths pass through. */
function linkHref(p: string): string {
  if (/^https?:/i.test(p) || p.startsWith('file:')) return p;
  if (path.isAbsolute(p)) {
    return pathToFileURL(p).href;
  }
  return p;
}

function renderConsoleSection(errors: ConsoleErrorEntry[]): string {
  if (errors.length === 0) {
    return `<p class="ok-line">No JS console errors captured.</p>`;
  }
  const rows = errors.slice(0, 100).map(e => `
    <tr>
      <td class="mono small">${esc(fmtTime(e.timestamp))}</td>
      <td class="mono small err-text">${esc(e.text.length > 300 ? e.text.slice(0, 300) + '…' : e.text)}</td>
      <td class="mono small">${esc(e.pageUrl.length > 80 ? e.pageUrl.slice(0, 80) + '…' : e.pageUrl)}</td>
    </tr>`).join('');
  return `<table><thead><tr><th>Time</th><th>Message</th><th>Page</th></tr></thead><tbody>${rows}</tbody></table>
    ${errors.length > 100 ? `<p class="muted small">Showing first 100 of ${errors.length} errors.</p>` : ''}`;
}

function renderNetworkSection(reqs: FailedRequestEntry[]): string {
  if (reqs.length === 0) {
    return `<p class="ok-line">No failed (4xx/5xx or aborted) network requests captured.</p>`;
  }
  const rows = reqs.slice(0, 100).map(r => `
    <tr>
      <td><span class="badge ${r.status >= 500 ? 'b-red' : r.status >= 400 ? 'b-orange' : 'b-gray'}">${r.status || 'ERR'}</span></td>
      <td class="mono small">${esc(r.method)}</td>
      <td class="mono small url-cell">${esc(r.url.length > 110 ? r.url.slice(0, 110) + '…' : r.url)}</td>
      <td class="small">${esc(r.resourceType)}</td>
    </tr>`).join('');
  return `<table><thead><tr><th>Status</th><th>Method</th><th>URL</th><th>Type</th></tr></thead><tbody>${rows}</tbody></table>
    ${reqs.length > 100 ? `<p class="muted small">Showing first 100 of ${reqs.length} failed requests.</p>` : ''}`;
}

function renderA11ySection(a11y: AccessibilityResult | null): string {
  if (!a11y) return '';
  const byImpact: Record<string, number> = { critical: 0, serious: 0, moderate: 0, minor: 0 };
  for (const v of a11y.violations) {
    if (v.impact && byImpact[v.impact] !== undefined) byImpact[v.impact] += v.nodes.length;
  }
  const chart = donutChartSvg(
    [
      { label: 'Critical', value: byImpact.critical, color: IMPACT_COLORS.critical },
      { label: 'Serious', value: byImpact.serious, color: IMPACT_COLORS.serious },
      { label: 'Moderate', value: byImpact.moderate, color: IMPACT_COLORS.moderate },
      { label: 'Minor', value: byImpact.minor, color: IMPACT_COLORS.minor },
    ],
    'violations'
  );

  const topRows = a11y.violations.slice(0, 8).map(v => {
    const color = IMPACT_COLORS[v.impact ?? 'unknown'] ?? IMPACT_COLORS.unknown;
    const nodes = v.nodes.map(n => `
      <div class="node-snippet">
        <div class="mono tiny target">${esc(n.target.join(' > ').slice(0, 160))}</div>
        <pre class="mono tiny">${esc(n.html.length > 220 ? n.html.slice(0, 220) + '…' : n.html)}</pre>
      </div>`).join('');
    return `<div class="a11y-violation">
      <div class="a11y-head">
        ${badge((v.impact ?? 'unknown').toUpperCase(), v.impact === 'critical' ? 'b-red' : v.impact === 'serious' ? 'b-orange' : 'b-gray')}
        <b>${esc(v.help)}</b>
        <span class="muted small">(${esc(v.id)} · ${v.nodes.length} node(s))</span>
      </div>
      ${nodes}
    </div>`;
  }).join('');

  return `
  <div class="split">
    <div class="chart-box">${chart}</div>
    <div class="legend">
      <div class="legend-item"><span class="dot" style="background:${IMPACT_COLORS.critical}"></span>Critical <b>${byImpact.critical}</b></div>
      <div class="legend-item"><span class="dot" style="background:${IMPACT_COLORS.serious}"></span>Serious <b>${byImpact.serious}</b></div>
      <div class="legend-item"><span class="dot" style="background:${IMPACT_COLORS.moderate}"></span>Moderate <b>${byImpact.moderate}</b></div>
      <div class="legend-item"><span class="dot" style="background:${IMPACT_COLORS.minor}"></span>Minor <b>${byImpact.minor}</b></div>
    </div>
  </div>
  <p class="small muted">Rule sets: WCAG 2.0/2.1/2.2 A+AA · ${a11y.passesCount} checks passed · ${a11y.incompleteCount} incomplete · ${a11y.inapplicableCount} not applicable</p>
  ${topRows || '<p class="ok-line">No accessibility violations found. 🎉</p>'}`;
}

function renderLinksSection(links: BrokenLinksResult | null): string {
  if (!links) return '';
  const rows = links.all.slice(0, 25).map(l => `
    <tr>
      <td><span class="badge ${l.ok ? 'b-green' : 'b-red'}">${l.status || 'ERR'}</span></td>
      <td class="mono small url-cell">${esc(l.url.length > 100 ? l.url.slice(0, 100) + '…' : l.url)}</td>
      <td class="small">${l.error ? esc(l.error) : `${l.durationMs}ms`}</td>
    </tr>`).join('');
  return `
  <div class="stat-row">
    <div class="stat"><span class="stat-num">${links.checked}</span> links checked</div>
    <div class="stat"><span class="stat-num stat-bad">${links.broken.length}</span> broken</div>
    ${links.capped ? `<div class="stat muted small">capped at 20 for bounded runtime</div>` : ''}
  </div>
  <table><thead><tr><th>Status</th><th>URL</th><th>Detail</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function renderChaosSection(chaos: ChaosResult | null): string {
  if (!chaos) return '';
  const kinds: Record<string, number> = {};
  for (const a of chaos.actions) kinds[a.kind] = (kinds[a.kind] || 0) + 1;

  const chart = donutChartSvg([
    { label: 'Clicks', value: kinds.click || 0, color: '#2563eb' },
    { label: 'Scrolls', value: kinds.scroll || 0, color: '#0891b2' },
    { label: 'Types', value: kinds.type || 0, color: '#7c3aed' },
    { label: 'Hovers', value: kinds.hover || 0, color: '#db2777' },
  ], 'actions');

  const actionRows = chaos.actions.slice(0, 60).map(a => `
    <tr>
      <td class="small">${esc(fmtTime(a.at))}</td>
      <td>${badge(a.kind.toUpperCase(), 'b-blue')}</td>
      <td class="small">${esc(a.detail)}${a.error ? ` <span class="err-text">— ${esc(a.error)}</span>` : ''}</td>
    </tr>`).join('');

  return `
  <div class="split">
    <div class="chart-box">${chart}</div>
    <div class="legend">
      <div class="legend-item"><span class="dot" style="background:#2563eb"></span>Clicks <b>${kinds.click || 0}</b></div>
      <div class="legend-item"><span class="dot" style="background:#0891b2"></span>Scrolls <b>${kinds.scroll || 0}</b></div>
      <div class="legend-item"><span class="dot" style="background:#7c3aed"></span>Text inputs <b>${kinds.type || 0}</b></div>
      <div class="legend-item"><span class="dot" style="background:#db2777"></span>Hovers <b>${kinds.hover || 0}</b></div>
    </div>
  </div>
  <div class="stat-row">
    <div class="stat"><span class="stat-num">${fmtDuration(chaos.durationMs)}</span> measured duration</div>
    <div class="stat"><span class="stat-num">${chaos.actions.length}</span> actions</div>
    <div class="stat"><span class="stat-num ${chaos.errors.length ? 'stat-bad' : ''}">${chaos.errors.length}</span> JS errors surfaced</div>
    ${chaos.completedNormally ? '' : badge('CHAOS INTERRUPTED', 'b-red')}
  </div>
  <table><thead><tr><th>Time</th><th>Action</th><th>Detail</th></tr></thead><tbody>${actionRows}</tbody></table>`;
}

function renderFrameworkSection(fw: FrameworkPipelineResult | null, domain: string): string {
  if (!fw) return '';
  if (!fw.triggered) {
    return `<p class="err-text">Framework pipeline could not be started: ${esc(fw.error ?? 'unknown error')}</p>`;
  }
  const s = fw.summary;
  const chart = donutChartSvg(
    [
      { label: 'Passed', value: s?.passed ?? 0, color: '#16a34a' },
      { label: 'Failed', value: s?.failed ?? 0, color: '#dc2626' },
      { label: 'Skipped', value: s?.skipped ?? 0, color: '#d97706' },
    ],
    'tests'
  );

  const allureHref = fw.allureReportPath
    ? `<a class="report-link" href="${esc(linkHref(fw.allureReportPath))}">Allure report (index.html)</a>`
    : `<span class="muted">Allure report not found</span>`;
  const pwHref = fw.playwrightReportPath
    ? `<a class="report-link" href="${esc(linkHref(fw.playwrightReportPath))}">Playwright HTML report (index.html)</a>`
    : `<span class="muted">Playwright HTML report not found</span>`;

  return `
  <div class="split">
    <div class="chart-box">${chart}</div>
    <div class="legend">
      <div class="legend-item"><span class="dot" style="background:#16a34a"></span>Passed <b>${s?.passed ?? 0}</b></div>
      <div class="legend-item"><span class="dot" style="background:#dc2626"></span>Failed <b>${s?.failed ?? 0}</b></div>
      <div class="legend-item"><span class="dot" style="background:#d97706"></span>Skipped <b>${s?.skipped ?? 0}</b></div>
    </div>
  </div>
  <div class="stat-row">
    <div class="stat"><span class="stat-num">${s ? s.total : '—'}</span> generated tests</div>
    <div class="stat"><span class="stat-num">${fmtDuration(fw.durationMs)}</span> pipeline duration</div>
    <div class="stat">${badge(`exit ${fw.exitCode ?? '??'}`, (fw.exitCode ?? 1) === 0 ? 'b-green' : 'b-red')}</div>
  </div>
  <p class="small muted">
    The existing framework pipeline (explore → generate → validate → run) was triggered for
    <span class="mono">${esc(domain)}</span> as part of this audit. Its own complete reports
    (unchanged, generated exactly as in a normal <span class="mono">ai:smoke</span> run):
  </p>
  <ul class="report-links">
    <li>${allureHref}</li>
    <li>${pwHref}</li>
    ${fw.logPath ? `<li><a class="report-link" href="${esc(linkHref(fw.logPath))}">Framework execution log (test.logs)</a></li>` : ''}
  </ul>`;
}

function renderTimeline(timeline: ReportData['timeline']): string {
  if (timeline.length === 0) return '';
  const items = timeline.map(t => `
    <div class="tl-item">
      <div class="tl-time mono small">${esc(fmtTime(t.at))}</div>
      <div class="tl-body"><b>${esc(t.label)}</b> <span class="small muted">— ${esc(t.detail)}</span></div>
    </div>`).join('');
  return `<div class="timeline">${items}</div>`;
}

function renderScreenshots(shots: ScreenshotEntry[]): string {
  if (shots.length === 0) return '';
  return shots.map(s => `
    <figure class="shot">
      <figcaption><b>${esc(s.label)}</b> <span class="muted small">(${esc(s.viewport)} · full page)</span></figcaption>
      <img src="${esc(s.file)}" alt="${esc(s.label)} full-page screenshot" loading="lazy"/>
    </figure>`).join('');
}

function renderPdfBadge(pdf: PdfExportResult | null): string {
  if (!pdf) return '';
  return pdf.ok
    ? badge('PDF EXPORTED', 'b-green')
    : badge(`PDF FAILED — ${pdf.error ?? 'unknown error'}`, 'b-red');
}

export function renderReport(data: ReportData, runDir: string): string {
  const hasSmokeExtras = data.accessibility !== null || data.brokenLinks !== null;
  const hasFramework = data.framework !== null;

  const durationMs = Math.max(0, new Date(data.finishedAt).getTime() - new Date(data.startedAt).getTime());

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>adhoc-audit · ${esc(data.keyword)} · ${esc(data.domain)}</title>
<style>
  :root {
    --bg: #f1f5f9; --card: #ffffff; --ink: #0f172a; --muted: #64748b;
    --accent: #2563eb; --good: #16a34a; --bad: #dc2626; --warn: #d97706;
    --border: #e2e8f0;
  }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
         background: var(--bg); color: var(--ink); line-height: 1.5; }
  .mono { font-family: ui-monospace, 'Cascadia Code', Consolas, 'Courier New', monospace; }
  .wrap { max-width: 1080px; margin: 0 auto; padding: 24px 20px 60px; }
  header.hero { background: linear-gradient(135deg, #0f172a, #1e3a8a); color: #fff; border-radius: 14px;
                padding: 26px 28px; margin-bottom: 22px; }
  header.hero h1 { margin: 0 0 6px; font-size: 24px; }
  header.hero .sub { color: #cbd5e1; font-size: 14px; }
  header.hero .badges { margin-top: 10px; display: flex; gap: 8px; flex-wrap: wrap; }
  .badge { display: inline-block; padding: 2px 10px; border-radius: 999px; font-size: 11px;
           font-weight: 700; letter-spacing: .4px; }
  .b-green { background: #dcfce7; color: #166534; }
  .b-red   { background: #fee2e2; color: #991b1b; }
  .b-orange{ background: #ffedd5; color: #9a3412; }
  .b-blue  { background: #dbeafe; color: #1e40af; }
  .b-gray  { background: #e2e8f0; color: #334155; }
  section.card { background: var(--card); border: 1px solid var(--border); border-radius: 12px;
                 padding: 20px 22px; margin-bottom: 18px; }
  section.card > h2 { margin: 0 0 12px; font-size: 17px; border-bottom: 2px solid var(--border);
                      padding-bottom: 8px; }
  .split { display: flex; gap: 24px; align-items: center; flex-wrap: wrap; margin-bottom: 10px; }
  .chart-box { flex: 0 0 auto; }
  .legend { display: flex; flex-direction: column; gap: 6px; }
  .legend-item { font-size: 14px; display: flex; align-items: center; gap: 8px; }
  .dot { width: 10px; height: 10px; border-radius: 3px; display: inline-block; }
  table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 13px; }
  th { text-align: left; background: #f8fafc; border-bottom: 2px solid var(--border);
       padding: 7px 9px; font-size: 12px; text-transform: uppercase; letter-spacing: .5px; color: var(--muted); }
  td { border-bottom: 1px solid var(--border); padding: 7px 9px; vertical-align: top; }
  .small { font-size: 12.5px; } .tiny { font-size: 11px; } .muted { color: var(--muted); }
  .ok-line { color: var(--good); font-weight: 600; }
  .err-text { color: var(--bad); }
  .url-cell { word-break: break-all; max-width: 480px; }
  .stat-row { display: flex; gap: 26px; flex-wrap: wrap; margin: 10px 0; }
  .stat { font-size: 13px; color: var(--muted); }
  .stat-num { font-size: 22px; font-weight: 800; color: var(--ink); margin-right: 6px; }
  .stat-num.stat-bad { color: var(--bad); }
  .node-snippet { margin: 8px 0 4px 14px; border-left: 3px solid var(--border); padding-left: 10px; }
  pre { margin: 4px 0; background: #f8fafc; border: 1px solid var(--border); border-radius: 6px;
        padding: 6px 8px; overflow-x: auto; white-space: pre-wrap; word-break: break-all; }
  .a11y-violation { margin-bottom: 14px; }
  .a11y-head { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
  .timeline { border-left: 3px solid var(--border); margin-left: 8px; padding-left: 16px; }
  .tl-item { display: flex; gap: 12px; margin-bottom: 8px; }
  .tl-time { flex: 0 0 90px; color: var(--muted); }
  figure.shot { margin: 14px 0; }
  figure.shot img { width: 100%; height: auto; border: 1px solid var(--border); border-radius: 8px; }
  figure.shot figcaption { margin-bottom: 6px; }
  .report-links { list-style: none; padding: 0; }
  .report-links li { margin: 6px 0; }
  .report-link { color: var(--accent); font-weight: 600; }
  footer { text-align: center; color: var(--muted); font-size: 12px; margin-top: 26px; }
  @media print { body { background: #fff; } section.card { break-inside: avoid; } }
</style>
</head>
<body>
<div class="wrap">

  <header class="hero">
    <h1>Ad-hoc Audit Report — ${esc(data.keyword)}</h1>
    <div class="sub">
      ${esc(data.url)} &nbsp;·&nbsp; run on ${esc(data.hostname)} &nbsp;·&nbsp;
      started ${esc(fmtTime(data.startedAt))} &nbsp;·&nbsp; duration ${fmtDuration(durationMs)}
    </div>
    <div class="badges">
      ${badge(data.keyword.toUpperCase(), 'b-blue')}
      ${data.consoleErrors.length === 0 ? badge('CONSOLE CLEAN', 'b-green') : badge(`${data.consoleErrors.length} CONSOLE ERROR(S)`, 'b-red')}
      ${data.failedRequests.length === 0 ? badge('NETWORK CLEAN', 'b-green') : badge(`${data.failedRequests.length} FAILED REQUEST(S)`, 'b-orange')}
      ${hasSmokeExtras && data.accessibility ? (data.accessibility.violations.length === 0 ? badge('A11Y CLEAN', 'b-green') : badge(`${data.accessibility.violations.length} A11Y RULE(S) VIOLATED`, 'b-orange')) : ''}
      ${hasSmokeExtras && data.brokenLinks ? (data.brokenLinks.broken.length === 0 ? badge('LINKS OK', 'b-green') : badge(`${data.brokenLinks.broken.length} BROKEN LINK(S)`, 'b-red')) : ''}
      ${hasFramework ? badge('FRAMEWORK RUN FOLDED IN', 'b-blue') : ''}
      ${renderPdfBadge(data.pdf)}
    </div>
  </header>

  <section class="card">
    <h2>Execution Timeline</h2>
    ${renderTimeline(data.timeline)}
  </section>

  <section class="card">
    <h2>Screenshots</h2>
    ${renderScreenshots(data.screenshots) || '<p class="muted">No screenshots captured.</p>'}
  </section>

  <section class="card">
    <h2>JS Console Errors (${data.consoleErrors.length})</h2>
    ${renderConsoleSection(data.consoleErrors)}
  </section>

  <section class="card">
    <h2>Failed Network Requests (${data.failedRequests.length})</h2>
    ${renderNetworkSection(data.failedRequests)}
  </section>

  ${hasSmokeExtras ? `
  <section class="card">
    <h2>Accessibility Audit (axe-core)</h2>
    ${renderA11ySection(data.accessibility)}
  </section>` : ''}

  ${hasSmokeExtras ? `
  <section class="card">
    <h2>Broken Links</h2>
    ${renderLinksSection(data.brokenLinks)}
  </section>` : ''}

  ${hasFramework ? `
  <section class="card">
    <h2>Framework Smoke Run</h2>
    ${renderFrameworkSection(data.framework, data.domain)}
  </section>` : ''}

  ${data.chaos ? `
  <section class="card">
    <h2>Chaos Interaction (Mobile)</h2>
    ${renderChaosSection(data.chaos)}
  </section>` : ''}

  <footer>
    Generated by adhoc-audit (${esc(data.keyword)} preset) at ${esc(new Date().toISOString())} ·
    fully self-contained offline report — no external assets, no external fonts, no external scripts.
  </footer>

</div>
</body>
</html>`;

  ensureDir(runDir);
  const outPath = path.join(runDir, 'report.html');
  fs.writeFileSync(outPath, html, 'utf-8');
  return outPath;
}
