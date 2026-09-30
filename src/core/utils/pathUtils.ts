import path from 'path';
import { resolveActiveRunFolder } from '../runner/runFolder';

export const ROOT = process.cwd();

/**
 * All run artifacts (results, reports, screenshots, logs) live inside the
 * single per-run folder: test-reports_<datetime>_<url-name>/.
 * resolveActiveRunFolder() prefers FRAMEWORK_RUN_DIR (set by the orchestrator
 * for this exact run) and falls back to the newest test-reports_* folder.
 */
function runDir(): string {
  return resolveActiveRunFolder(ROOT);
}

export function getAllureResultsDir(): string {
  return path.join(runDir(), 'allure-results');
}

export function getAllureReportDir(): string {
  return path.join(runDir(), 'allure-report');
}

export function getPlaywrightReportDir(): string {
  return path.join(runDir(), 'playwright-report');
}

export function getTestResultsDir(): string {
  return path.join(runDir(), 'test-results');
}

export function getScreenshotsDir(): string {
  return path.join(runDir(), 'screenshots');
}

export function getLogsDir(): string {
  return path.join(runDir(), 'logs');
}

export function getLogFilePath(): string {
  return path.join(runDir(), 'logs', 'test.logs');
}

export function getTempDir(): string {
  return path.resolve(ROOT, 'temp');
}

export function getGeneratedDir(): string {
  return path.resolve(ROOT, 'generated');
}

export function getUrlRunDir(safeFolder: string): string {
  return path.resolve(getTestResultsDir(), 'urls', safeFolder);
}

export function getGeneratedPagesDir(safeFolder: string): string {
  return path.resolve(ROOT, 'pages', 'generated', safeFolder);
}

export function getGeneratedTestsDir(safeFolder: string): string {
  return path.resolve(ROOT, 'tests', 'generated', safeFolder);
}

export function getTempUrlDir(safeFolder: string): string {
  return path.resolve(getTempDir(), 'generated', safeFolder);
}

export function getSiteMapPath(safeFolder: string): string {
  return path.resolve(getTempUrlDir(safeFolder), 'site-map.json');
}

export function getDiscoveredElementsPath(safeFolder: string): string {
  return path.resolve(getUrlRunDir(safeFolder), 'discovered-elements.json');
}

export function getTestCasesJsonPath(safeFolder: string): string {
  return path.resolve(getUrlRunDir(safeFolder), 'generated-testcases.json');
}

export function getTestCasesCsvPath(safeFolder: string): string {
  return path.resolve(getUrlRunDir(safeFolder), 'generated-testcases.csv');
}

export function getUrlPagesDir(safeFolder: string): string {
  return path.resolve(getUrlRunDir(safeFolder), 'pages');
}

export function getUrlTestsDir(safeFolder: string): string {
  return path.resolve(getUrlRunDir(safeFolder), 'tests');
}

export function getUrlScreenshotsDir(safeFolder: string): string {
  return path.resolve(getScreenshotsDir(), safeFolder);
}

export function getUrlEvidenceDir(safeFolder: string): string {
  return path.resolve(getUrlRunDir(safeFolder), 'evidence');
}
