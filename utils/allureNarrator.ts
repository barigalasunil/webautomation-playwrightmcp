import { Page, TestInfo } from '@playwright/test';
import { attachment } from 'allure-js-commons';
import { Evidence, createEvidence, attachExecutionSummary } from './executionEvidence';
import { captureTestScreenshot } from './screenshotHelper';
import {
  toReadableElementName,
  toReadablePageName,
} from './readableNameBuilder';

export function createTestEvidence(params: {
  application: string;
  suite: string;
  browser: string;
  pageName: string;
  pageUrl: string;
  testObjective: string;
}): Evidence {
  return createEvidence(params);
}

export function stepOpenPage(url: string, pageName: string, evidence: Evidence): string {
  const stepName = `Open application URL: ${url}`;
  evidence.actionsPerformed.push(`Opened application URL: ${url}`);
  return stepName;
}

export function stepWaitForPageReady(pageName: string, evidence: Evidence): string {
  const readablePage = toReadablePageName(pageName);
  const stepName = `Wait for ${readablePage} to be ready`;
  evidence.validationsPerformed.push(`Waited for ${readablePage} to load completely`);
  return stepName;
}

export function stepValidateHeading(headingText: string, evidence: Evidence): string {
  const elemName = toReadableElementName('heading', headingText, 'Page heading');
  const stepName = `Verify that the heading ${elemName} is visible on the page`;
  evidence.validationsPerformed.push(stepName);
  return stepName;
}

export function stepValidateLink(linkText: string, href: string, evidence: Evidence): string {
  const elemName = toReadableElementName('link', linkText, 'Navigation link');
  const desc = linkText
    ? `Verify that the navigation link ${elemName} is visible and available for the user`
    : `Verify that the navigation link is visible and available for the user`;
  evidence.validationsPerformed.push(desc);
  return desc;
}

export function stepValidateButton(buttonText: string, evidence: Evidence): string {
  const elemName = toReadableElementName('button', buttonText, 'Primary button');
  const stepName = `Verify that the button ${elemName} is clickable and functional`;
  evidence.validationsPerformed.push(stepName);
  return stepName;
}

export function stepValidateInput(inputName: string, evidence: Evidence): string {
  const elemName = toReadableElementName('input', inputName, 'Input field');
  const stepName = `Verify that the input field ${elemName} accepts user input`;
  evidence.validationsPerformed.push(stepName);
  return stepName;
}

export function stepClickLink(linkText: string, expectedBehavior: string, evidence: Evidence): string {
  const elemName = toReadableElementName('link', linkText, 'Navigation link');
  const stepName = `Click the link ${elemName} and verify ${expectedBehavior}`;
  evidence.actionsPerformed.push(stepName);
  return stepName;
}

export function stepClickButton(buttonText: string, expectedBehavior: string, evidence: Evidence): string {
  const elemName = toReadableElementName('button', buttonText, 'Primary button');
  const stepName = `Click the button ${elemName} and verify ${expectedBehavior}`;
  evidence.actionsPerformed.push(stepName);
  return stepName;
}

export function stepValidateNavigation(fromUrl: string, toUrl: string, evidence: Evidence): string {
  const stepName = `Verify navigation completed successfully from ${fromUrl} to ${toUrl}`;
  evidence.validationsPerformed.push(stepName);
  return stepName;
}

export function stepCaptureEvidence(name: string, evidence: Evidence): string {
  const stepName = `Capture screenshot evidence: ${name}`;
  evidence.actionsPerformed.push(stepName);
  return stepName;
}

export async function attachPageInfo(page: Page): Promise<void> {
  try {
    const url = page.url();
    try { attachment('Page URL', url, 'text/plain'); } catch {}
    const title = await page.title().catch(() => '');
    if (title) try { attachment('Page Title', title, 'text/plain'); } catch {}
  } catch {}
}

export async function attachScreenshot(page: Page, name: string): Promise<string> {
  try {
    const buf = await page.screenshot({ fullPage: true, type: 'png' });
    try { attachment(`Screenshot - ${name}`, buf, 'image/png'); } catch {}
  } catch {
    try {
      const buf = await page.screenshot({ type: 'png' });
      try { attachment(`Screenshot - ${name}`, buf, 'image/png'); } catch {}
    } catch {}
  }
  return name;
}

export async function attachFinalEvidence(
  evidence: Evidence,
  page: Page,
  testInfo: TestInfo
): Promise<void> {
  await attachExecutionSummary(evidence, page, testInfo);
}
