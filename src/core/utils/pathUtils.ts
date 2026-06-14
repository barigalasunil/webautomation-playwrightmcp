import path from 'path';

export const ROOT = process.cwd();

export function getAllureResultsDir(): string {
  return path.resolve(ROOT, 'allure-results');
}

export function getAllureReportDir(): string {
  return path.resolve(ROOT, 'allure-report');
}

export function getPlaywrightReportDir(): string {
  return path.resolve(ROOT, 'playwright-report');
}

export function getTestResultsDir(): string {
  return path.resolve(ROOT, 'test-results');
}

export function getScreenshotsDir(): string {
  return path.resolve(ROOT, 'screenshots');
}

export function getLogsDir(): string {
  return path.resolve(ROOT, 'logs');
}

export function getLogFilePath(): string {
  return path.resolve(ROOT, 'logs', 'test.logs');
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
