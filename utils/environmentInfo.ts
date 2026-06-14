import * as os from 'node:os';
import { createRequire } from 'node:module';
const _require = createRequire(import.meta.url);

export interface EnvironmentInfo {
  applicationName: string;
  targetUrl: string;
  browser: string;
  headless: boolean;
  os: string;
  osVersion: string;
  nodeVersion: string;
  playwrightVersion: string;
  executionTimestamp: string;
  cwd: string;
}

let cachedInfo: EnvironmentInfo | null = null;

export function collectEnvironmentInfo(overrides?: Partial<EnvironmentInfo>): EnvironmentInfo {
  if (cachedInfo && !overrides) return cachedInfo;

  let pwVersion = '';
  try {
    pwVersion = _require('@playwright/test/package.json').version || '';
  } catch {
    pwVersion = 'unknown';
  }

  const info: EnvironmentInfo = {
    applicationName: process.env.APPLICATION_NAME || overrides?.applicationName || 'unknown',
    targetUrl: process.env.TARGET_URL || overrides?.targetUrl || '',
    browser: process.env.BROWSER || overrides?.browser || 'chromium',
    headless: process.env.HEADLESS !== 'false',
    os: os.platform(),
    osVersion: os.release(),
    nodeVersion: process.version,
    playwrightVersion: pwVersion,
    executionTimestamp: new Date().toISOString(),
    cwd: process.cwd(),
    ...overrides,
  };

  cachedInfo = info;
  return info;
}

export function resetEnvironmentCache(): void {
  cachedInfo = null;
}

export function formatEnvironmentInfo(info: EnvironmentInfo): string {
  return [
    `Application: ${info.applicationName}`,
    `Target URL: ${info.targetUrl}`,
    `Browser: ${info.browser}`,
    `Headless: ${info.headless}`,
    `OS: ${info.os} ${info.osVersion}`,
    `Node: ${info.nodeVersion}`,
    `Playwright: ${info.playwrightVersion}`,
    `Timestamp: ${info.executionTimestamp}`,
    `CWD: ${info.cwd}`,
  ].join('\n');
}

export function writeAllureEnvironmentProperties(info: EnvironmentInfo, outputPath?: string): string {
  const lines = [
    `Application=${info.applicationName}`,
    `Target.URL=${info.targetUrl}`,
    `Browser=${info.browser}`,
    `Headless=${info.headless}`,
    `OS=${info.os}`,
    `OS.Version=${info.osVersion}`,
    `Node.Version=${info.nodeVersion}`,
    `Playwright.Version=${info.playwrightVersion}`,
    `Execution.Timestamp=${info.executionTimestamp}`,
  ];
  return lines.join('\n');
}
