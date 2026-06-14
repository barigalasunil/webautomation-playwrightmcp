import { Page, TestInfo } from '@playwright/test';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { step, attachment } from 'allure-js-commons';
import { collectEnvironmentInfo, formatEnvironmentInfo, writeAllureEnvironmentProperties } from './environmentInfo';
import type { EnvironmentInfo } from './environmentInfo';

function allureStep(name: string, body: () => Promise<void>): Promise<void> {
  try { return step(name, body); } catch { return body(); }
}

function allureAttachment(name: string, content: string | Buffer, type: string): void {
  try { attachment(name, content, type); } catch {}
}

export async function attachPageInfo(page: Page, label?: string): Promise<void> {
  const prefix = label ? `[${label}] ` : '';
  const url = page.url();
  const title = await page.title().catch(() => '');

  allureAttachment(`${prefix}Page URL`, url, 'text/plain');
  if (title) {
    allureAttachment(`${prefix}Page Title`, title, 'text/plain');
  }
}

export async function attachScreenshotOnFailure(page: Page, testInfo: TestInfo): Promise<void> {
  if (testInfo.status !== 'failed' && testInfo.status !== 'timedOut') return;

  await allureStep('Attach failure screenshot', async () => {
    const screenshot = await page.screenshot({ fullPage: true, type: 'png' });
    allureAttachment(`Failure Screenshot - ${testInfo.title}`, screenshot, 'image/png');
  });
}

export async function attachEnvironmentInfo(envInfo?: EnvironmentInfo): Promise<void> {
  const info = envInfo ?? collectEnvironmentInfo();
  await allureStep('Attach environment info', async () => {
    allureAttachment('Environment Info', formatEnvironmentInfo(info), 'text/plain');
    allureAttachment('environment.properties', writeAllureEnvironmentProperties(info), 'text/plain');
  });
}

export async function attachSiteMap(siteMapPath?: string): Promise<void> {
  const resolvedPath = siteMapPath ?? path.resolve(process.cwd(), 'generated', 'site-map.json');
  if (!fs.existsSync(resolvedPath)) return;

  await allureStep('Attach site-map.json', async () => {
    const content = fs.readFileSync(resolvedPath, 'utf-8');
    allureAttachment('site-map.json', content, 'application/json');
  });
}

export async function attachTestArtifacts(
  page: Page,
  testInfo: TestInfo,
  options?: { siteMapPath?: string; envInfo?: EnvironmentInfo }
): Promise<void> {
  await attachPageInfo(page, testInfo.title);

  if (testInfo.status === 'failed' || testInfo.status === 'timedOut') {
    await attachScreenshotOnFailure(page, testInfo);
  }

  await attachEnvironmentInfo(options?.envInfo);
  await attachSiteMap(options?.siteMapPath);
}
