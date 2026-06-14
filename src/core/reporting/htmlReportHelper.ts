import { Page, TestInfo } from '@playwright/test';

export async function attachPlaywrightEvidence(testInfo: TestInfo, label: string, content: string, contentType: string): Promise<void> {
  try {
    await testInfo.attach(label, { body: content, contentType });
  } catch {}
}

export async function attachPlaywrightScreenshot(testInfo: TestInfo, page: Page, label: string): Promise<void> {
  try {
    const buf = await page.screenshot({ fullPage: true, type: 'png' });
    await testInfo.attach(`Screenshot - ${label}`, { body: buf, contentType: 'image/png' });
  } catch {}
}
