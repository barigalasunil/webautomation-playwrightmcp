import path from 'node:path';
import fs from 'node:fs';
import { Page, TestInfo } from '@playwright/test';
import { attachment } from 'allure-js-commons';

export async function captureTestScreenshot(
  page: Page,
  testInfo: TestInfo,
  label: string,
  appName?: string
): Promise<string> {
  const browser = testInfo.project?.name || process.env.BROWSER || 'chromium';
  const safeTestName = (testInfo.title || 'test')
    .replace(/@\w+/g, '')
    .replace(/[^a-zA-Z0-9_\- ]/g, '_')
    .trim()
    .replace(/\s+/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '')
    .substring(0, 100);

  const appDir = appName || process.env.APP_NAME || 'default';
  const screenshotDir = path.resolve(process.cwd(), 'runs', 'latest', appDir, 'screenshots', browser);
  fs.mkdirSync(screenshotDir, { recursive: true });

  const timestamp = Date.now();
  const safeLabel = label.replace(/[^a-zA-Z0-9_\- ]/g, '_').replace(/\s+/g, '_').substring(0, 50);
  const fileName = `${safeTestName}_${safeLabel}_${timestamp}.png`;
  const filePath = path.join(screenshotDir, fileName);

  try {
    await page.screenshot({ path: filePath, fullPage: true, type: 'png' });
  } catch {
    try {
      await page.screenshot({ path: filePath, type: 'png' });
    } catch {}
  }

  try {
    const buf = fs.readFileSync(filePath);
    try { attachment(`Screenshot - ${label}`, buf, 'image/png'); } catch {}
  } catch {}

  return filePath;
}

export async function captureScreenshotOnFailure(page: Page, testInfo: TestInfo, appName?: string): Promise<string | null> {
  if (testInfo.status !== 'failed' && testInfo.status !== 'timedOut') return null;
  return captureTestScreenshot(page, testInfo, 'FAILURE', appName);
}

let screenshotCounter = 0;

export function resetScreenshotCounter(): void {
  screenshotCounter = 0;
}

export function getScreenshotDir(): string {
  return path.resolve(process.cwd(), 'runs', 'latest', 'screenshots');
}

export function ensureScreenshotDir(): string {
  const dir = getScreenshotDir();
  fs.mkdirSync(dir, { recursive: true });
  return dir;
}

export async function captureScreenshot(page: Page, label: string, testInfo?: TestInfo): Promise<string> {
  screenshotCounter++;
  const dir = ensureScreenshotDir();
  const timestamp = Date.now();
  const testName = testInfo?.title?.replace(/[^a-zA-Z0-9]/g, '_') || 'screenshot';
  const fileName = `${screenshotCounter}_${testName}_${label}_${timestamp}.png`;
  const filePath = path.join(dir, fileName);
  await page.screenshot({ path: filePath, fullPage: true, type: 'png' });
  return filePath;
}

export async function captureScreenshotAndAttach(
  page: Page,
  label: string,
  testInfo?: TestInfo
): Promise<string> {
  const filePath = await captureScreenshot(page, label, testInfo);
  try {
    const buf = fs.readFileSync(filePath);
    try { attachment(`Screenshot - ${label}`, buf, 'image/png'); } catch {}
  } catch {}
  return filePath;
}
