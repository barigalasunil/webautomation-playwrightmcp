import path from 'node:path';
import fs from 'node:fs';
import { Page, TestInfo } from '@playwright/test';
import { label, step, attachment } from 'allure-js-commons';

function safeAttachment(name: string, content: string | Buffer, type: string): void {
  try { attachment(name, content, type); } catch {}
}

export function addAllureLabels(options: {
  suite?: string;
  module?: string;
  severity?: string;
  testType?: string;
  applicationName?: string;
  environment?: string;
}): void {
  if (options.suite) try { label('suite', options.suite); } catch {}
  if (options.module) try { label('parentSuite', options.module); } catch {}
  if (options.severity) try { label('severity', options.severity); } catch {}
  if (options.testType) try { label('testType', options.testType); } catch {}
  if (options.applicationName) try { label('application', options.applicationName); } catch {}
  if (options.environment) try { label('environment', options.environment); } catch {}
}

export async function attachPageInfo(page: Page, labelName?: string): Promise<void> {
  const prefix = labelName ? `[${labelName}] ` : '';
  const url = page.url();
  const title = await page.title().catch(() => '');
  safeAttachment(`${prefix}Page URL`, url, 'text/plain');
  if (title) {
    safeAttachment(`${prefix}Page Title`, title, 'text/plain');
  }
}

export async function attachScreenshot(page: Page, name: string): Promise<void> {
  await step(`Attach screenshot: ${name}`, async () => {
    const screenshotBuf = await page.screenshot({ fullPage: true, type: 'png' });
    safeAttachment(`Screenshot - ${name}`, screenshotBuf, 'image/png');
  });
}

export async function attachScreenshotOnFailure(page: Page, testInfo: TestInfo): Promise<void> {
  if (testInfo.status !== 'failed' && testInfo.status !== 'timedOut') return;
  await step('Attach failure screenshot', async () => {
    const screenshotBuf = await page.screenshot({ fullPage: true, type: 'png' });
    safeAttachment(`Failure Screenshot - ${testInfo.title}`, screenshotBuf, 'image/png');
  });
}

export function attachJsonContent(name: string, content: unknown): void {
  try {
    const json = typeof content === 'string' ? content : JSON.stringify(content, null, 2);
    safeAttachment(name, json, 'application/json');
  } catch {}
}

export function attachTextContent(name: string, content: string): void {
  safeAttachment(name, content, 'text/plain');
}

export function writeAllureEnvironment(envProps: Record<string, string>, outputDir: string): void {
  const lines = Object.entries(envProps).map(([k, v]) => `${k}=${v}`);
  const envPath = path.join(outputDir, 'environment.properties');
  fs.mkdirSync(path.dirname(envPath), { recursive: true });
  fs.writeFileSync(envPath, lines.join('\n'), 'utf-8');
  console.log(`[allureHelper] Wrote environment.properties to ${envPath}`);
}

export async function attachTestArtifacts(
  page: Page,
  testInfo: TestInfo,
  options?: {
    siteMapPath?: string;
    testCaseJsonPath?: string;
  }
): Promise<void> {
  await attachPageInfo(page, testInfo.title);

  const siteMapPath = options?.siteMapPath ?? path.resolve(process.cwd(), 'temp', 'generated', 'site-map.json');
  if (fs.existsSync(siteMapPath)) {
    const content = fs.readFileSync(siteMapPath, 'utf-8');
    safeAttachment('site-map.json', content, 'application/json');
  }

  const tcPath = options?.testCaseJsonPath ?? path.resolve(process.cwd(), 'temp', 'generated', 'test-cases.json');
  if (fs.existsSync(tcPath)) {
    const content = fs.readFileSync(tcPath, 'utf-8');
    safeAttachment('test-cases.json', content, 'application/json');
  }

  if (testInfo.status === 'failed' || testInfo.status === 'timedOut') {
    await attachScreenshotOnFailure(page, testInfo);
  }
}
