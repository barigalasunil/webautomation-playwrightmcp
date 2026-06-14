import path from 'node:path';
import fs from 'node:fs';
import { Page, TestInfo } from '@playwright/test';
import { attachment } from 'allure-js-commons';

export interface Evidence {
  application: string;
  suite: string;
  browser: string;
  pageName: string;
  pageUrl: string;
  testObjective: string;
  actionsPerformed: string[];
  validationsPerformed: string[];
  screenshots: string[];
  status: string;
  errorMessage?: string;
}

export function createEvidence(params: {
  application: string;
  suite: string;
  browser: string;
  pageName: string;
  pageUrl: string;
  testObjective: string;
}): Evidence {
  return {
    application: params.application,
    suite: params.suite,
    browser: params.browser,
    pageName: params.pageName,
    pageUrl: params.pageUrl,
    testObjective: params.testObjective,
    actionsPerformed: [],
    validationsPerformed: [],
    screenshots: [],
    status: 'unknown',
  };
}

export async function attachExecutionSummary(
  evidence: Evidence,
  page: Page,
  testInfo: TestInfo
): Promise<void> {
  evidence.status = testInfo.status || 'unknown';

  if (testInfo.status === 'failed' || testInfo.status === 'timedOut') {
    evidence.errorMessage = testInfo.error?.message || 'Unknown error';
    try {
      const screenshotBuf = await page.screenshot({ fullPage: true, type: 'png' });
      try { attachment('Failure Screenshot', screenshotBuf, 'image/png'); } catch {}
    } catch {
      try {
        const screenshotBuf = await page.screenshot({ type: 'png' });
        try { attachment('Failure Screenshot', screenshotBuf, 'image/png'); } catch {}
      } catch {}
    }
  }

  try {
    const currentUrl = page.url();
    try { attachment('Page URL', currentUrl, 'text/plain'); } catch {}
    evidence.pageUrl = currentUrl;
  } catch {}

  try {
    const title = await page.title().catch(() => '');
    if (title) try { attachment('Page Title', title, 'text/plain'); } catch {}
  } catch {}

  try {
    attachment('Execution Evidence', JSON.stringify(evidence, null, 2), 'application/json');
  } catch {}

  saveEvidenceToDisk(evidence, testInfo);
}

export function saveEvidenceToDisk(evidence: Evidence, testInfo: TestInfo): void {
  try {
    const appName = evidence.application || process.env.APP_NAME || 'default';
    const rawTitle = testInfo.title || 'unknown';
    const safeTestName = rawTitle
      .replace(/@\w+/g, '')
      .replace(/[^a-zA-Z0-9_\- ]/g, '_')
      .trim()
      .replace(/\s+/g, '_')
      .replace(/_+/g, '_')
      .replace(/^_|_$/g, '')
      .substring(0, 100);
    const evidenceDir = path.resolve(process.cwd(), 'runs', 'latest', appName, 'evidence');
    fs.mkdirSync(evidenceDir, { recursive: true });
    const filePath = path.join(evidenceDir, `${safeTestName}.json`);
    fs.writeFileSync(filePath, JSON.stringify(evidence, null, 2), 'utf-8');
  } catch {}
}
