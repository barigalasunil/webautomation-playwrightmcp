import { Page, TestInfo } from '@playwright/test';
import { attachment } from 'allure-js-commons';
import { Evidence, createEvidence, attachExecutionSummary } from './executionEvidence';
import { captureTestScreenshot } from './screenshotHelper';
import { toReadableElementName, toReadablePageName } from './readableNameBuilder';

export function createTestEvidence(params: {
  application: string; suite: string; browser: string; pageName: string; pageUrl: string; testObjective: string;
}): Evidence {
  return createEvidence(params);
}

export function stepOpenUrl(url: string, evidence: Evidence): string {
  const stepName = `Open URL: ${url}`;
  evidence.actionsPerformed.push(`Opened URL: ${url}`);
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

export function stepValidateLink(linkText: string, evidence: Evidence): string {
  const elemName = toReadableElementName('link', linkText, 'Navigation link');
  const desc = linkText ? `Verify that the navigation link ${elemName} is visible and available for the user` : `Verify that the navigation link is visible and available for the user`;
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

export function stepCaptureEvidence(name: string, evidence: Evidence): string {
  const stepName = `Capture screenshot: ${name}`;
  evidence.actionsPerformed.push(stepName);
  return stepName;
}

export async function attachPageInfo(page: Page, testInfo: TestInfo): Promise<void> {
  try {
    const url = page.url();
    try { attachment('Page URL', url, 'text/plain'); } catch {}
    await testInfo.attach('Page URL', { body: url, contentType: 'text/plain' });
    const title = await page.title().catch(() => '');
    if (title) {
      try { attachment('Page Title', title, 'text/plain'); } catch {}
      await testInfo.attach('Page Title', { body: title, contentType: 'text/plain' });
    }
  } catch {}
}

export async function attachScreenshot(page: Page, name: string, testInfo: TestInfo): Promise<string> {
  try {
    const buf = await page.screenshot({ fullPage: true, type: 'png' });
    try { attachment(`Screenshot - ${name}`, buf, 'image/png'); } catch {}
    await testInfo.attach(`Screenshot - ${name}`, { body: buf, contentType: 'image/png' });
  } catch {
    try {
      const buf = await page.screenshot({ type: 'png' });
      try { attachment(`Screenshot - ${name}`, buf, 'image/png'); } catch {}
      await testInfo.attach(`Screenshot - ${name}`, { body: buf, contentType: 'image/png' });
    } catch {}
  }
  return name;
}

export async function attachFinalEvidence(evidence: Evidence, page: Page, testInfo: TestInfo): Promise<void> {
  await attachExecutionSummary(evidence, page, testInfo);
}
