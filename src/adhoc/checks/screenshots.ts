/**
 * Full-page screenshot capture for ad-hoc audits (desktop + mobile).
 * Screenshots are written into the run folder and referenced by the report
 * via relative paths only (keeps the report self-contained and offline).
 */
import path from 'path';
import { AdhocSessions } from '../browserSessions';

export interface ScreenshotEntry {
  label: string; // e.g. "Desktop (1366x900)"
  file: string; // file name inside the run folder
  viewport: string;
}

export interface ScreenshotResult {
  entries: ScreenshotEntry[];
}

function timestamp(): string {
  const d = new Date();
  const p = (n: number): string => String(n).padStart(2, '0');
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}_${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`;
}

export async function captureAllScreenshots(
  sessions: AdhocSessions,
  runDir: string
): Promise<ScreenshotResult> {
  const entries: ScreenshotEntry[] = [];
  const ts = timestamp();

  const shots: { key: 'desktop' | 'mobile'; label: string; viewport: string }[] = [
    { key: 'desktop', label: 'Desktop', viewport: '1366x900' },
    { key: 'mobile', label: 'Mobile', viewport: '390x844' },
  ];

  for (const shot of shots) {
    const page = sessions[shot.key].page;
    const file = `${shot.label.toLowerCase()}_${ts}.png`;
    const absPath = path.join(runDir, file);
    await page.screenshot({ path: absPath, fullPage: true });
    entries.push({ label: shot.label, file, viewport: shot.viewport });
  }

  return { entries };
}
