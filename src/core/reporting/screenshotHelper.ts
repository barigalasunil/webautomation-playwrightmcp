import path from 'node:path';
import fs from 'node:fs';
import { Page, TestInfo } from '@playwright/test';
import { attachment } from 'allure-js-commons';
import { ensureDir } from '../utils/fileUtils';
import { getUrlScreenshotsDir } from '../utils/pathUtils';

export async function captureTestScreenshot(page: Page, testInfo: TestInfo, label: string, appName?: string): Promise<string> {
  const browser = testInfo.project?.name || process.env.BROWSER || 'chromium';
  const safeTestName = (testInfo.title || 'test').replace(/@\w+/g, '').replace(/[^a-zA-Z0-9_\- ]/g, '_').trim().replace(/\s+/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '').substring(0, 100);

  const appDir = appName || process.env.APP_NAME || 'default';
  const safeFolder = process.env.SAFE_FOLDER || 'default';
  const screenshotDir = getUrlScreenshotsDir(safeFolder);
  const browserScreenshotDir = path.join(screenshotDir, browser);
  ensureDir(browserScreenshotDir);

  const timestamp = Date.now();
  const safeLabel = label.replace(/[^a-zA-Z0-9_\- ]/g, '_').replace(/\s+/g, '_').substring(0, 50);
  const fileName = `${safeTestName}_${safeLabel}_${timestamp}.png`;
  const filePath = path.join(browserScreenshotDir, fileName);

  try {
    await page.screenshot({ path: filePath, fullPage: true, type: 'png' });
  } catch {
    try { await page.screenshot({ path: filePath, type: 'png' }); } catch {}
  }

  try {
    const buf = fs.readFileSync(filePath);
    try { attachment(`Screenshot - ${label}`, buf, 'image/png'); } catch {}
  } catch {}

  try {
    const buf = fs.readFileSync(filePath);
    await testInfo.attach(`Screenshot - ${label}`, { body: buf, contentType: 'image/png' });
  } catch {}

  return filePath;
}

export async function captureScreenshotOnFailure(page: Page, testInfo: TestInfo, appName?: string): Promise<string | null> {
  if (testInfo.status !== 'failed' && testInfo.status !== 'timedOut') return null;
  return captureTestScreenshot(page, testInfo, 'FAILURE', appName);
}
