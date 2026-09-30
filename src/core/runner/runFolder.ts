/**
 * Shared run-folder naming and resolution for all report/screenshot output.
 *
 * Every run — framework (ai:smoke/ai:sanity/ai:regression) and ad-hoc audit —
 * creates exactly one folder named:
 *
 *   test-reports_<datetime>_<name-of-the-url>
 *   e.g. test-reports_2026-09-30_14-05-12_www-myvi-in
 *
 * All reports and screenshots for that run live inside it:
 *   allure-results/  allure-report/  playwright-report/  screenshots/
 *   test-results/    logs/           (ad-hoc: report.html + report.pdf)
 *
 * The folder is created in the current working directory (framework runs:
 * the repo root; ad-hoc runs: wherever the user invoked the CLI from, or the
 * --out base folder if given).
 *
 * The active run folder is published via the ADHOC_RUN_DIR / FRAMEWORK_RUN_DIR
 * env var so worker processes (Playwright reporters, the ad-hoc launcher
 * bundle, the framework pipeline subprocess) resolve the SAME folder.
 */
import fs from 'fs';
import os from 'os';
import path from 'path';

export const RUN_DIR_ENV = 'FRAMEWORK_RUN_DIR';

/** Derive a filesystem-safe name from a URL, e.g. https://www.myvi.in/ → www-myvi-in */
function deriveUrlName(url: string): string {
  try {
    const parsed = new URL(url);
    const name = `${parsed.hostname}${parsed.pathname !== '/' ? '-' + parsed.pathname : ''}`;
    return name
      .replace(/[^a-zA-Z0-9-]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
      .substring(0, 60) || 'site';
  } catch {
    return url.replace(/[^a-zA-Z0-9-]+/g, '-').replace(/^-|-$/g, '').substring(0, 60) || 'site';
  }
}

function timestampSlug(): string {
  const d = new Date();
  const p = (n: number): string => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}_${p(d.getHours())}-${p(d.getMinutes())}-${p(d.getSeconds())}`;
}

function hostnameSlug(): string {
  return os.hostname().toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '') || 'localhost';
}

/** The exact folder name for a run: test-reports_<datetime>_<url-name> */
export function buildRunFolderName(url: string): string {
  return `test-reports_${timestampSlug()}_${deriveUrlName(url)}`;
}

/**
 * Create (or reuse) the run folder for `url` inside `baseDir` and publish it
 * via env so child processes resolve the same folder. Never overwrites an
 * existing folder — same-second collisions get a numeric suffix.
 */
export function createRunFolder(url: string, baseDir?: string): string {
  const base = baseDir ? path.resolve(baseDir) : process.cwd();
  const runDir = path.join(base, buildRunFolderName(url));
  const finalDir = fs.existsSync(runDir)
    ? (() => {
        let i = 2;
        while (fs.existsSync(`${runDir}-${i}`)) i++;
        return `${runDir}-${i}`;
      })()
    : runDir;
  fs.mkdirSync(finalDir, { recursive: true });
  process.env[RUN_DIR_ENV] = finalDir;
  return finalDir;
}

/**
 * Reuse the run folder published via env (ad-hoc CLI → pipeline hand-off:
 * framework artifacts must land in the SAME test-reports_* folder as the
 * ad-hoc report), or create a fresh one for standalone framework runs.
 */
export function resolveOrCreateRunFolder(url: string, baseDir?: string): string {
  const fromEnv = process.env[RUN_DIR_ENV];
  if (fromEnv && fs.existsSync(fromEnv)) return path.resolve(fromEnv);
  return createRunFolder(url, baseDir);
}

/**
 * The active run folder. Resolution order:
 *   1. FRAMEWORK_RUN_DIR env (set by createRunFolder, propagated to workers)
 *   2. The newest test-reports_* folder in baseDir (processes that can't
 *      receive env, e.g. Playwright's config reload)
 *   3. baseDir itself (safe legacy fallback)
 */
export function resolveActiveRunFolder(baseDir?: string): string {
  const fromEnv = process.env[RUN_DIR_ENV];
  if (fromEnv && fs.existsSync(fromEnv)) return path.resolve(fromEnv);

  const base = baseDir ? path.resolve(baseDir) : process.cwd();
  try {
    const candidates = fs.readdirSync(base)
      .filter(name => name.startsWith('test-reports_') && fs.statSync(path.join(base, name)).isDirectory())
      .map(name => ({ name, fullPath: path.join(base, name), mtime: fs.statSync(path.join(base, name)).mtimeMs }))
      .sort((a, b) => b.mtime - a.mtime);
    if (candidates.length > 0) return candidates[0].fullPath;
  } catch {
    // fall through
  }
  return base;
}
