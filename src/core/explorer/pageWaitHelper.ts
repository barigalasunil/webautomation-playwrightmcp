import type { Page } from 'playwright';

export async function waitForPageReady(page: Page, label?: string): Promise<void> {
  const timeout = 20000;

  try {
    await page.waitForLoadState('domcontentloaded', { timeout: 15000 });
  } catch {
    // domcontentloaded timeout - continue
  }

  try {
    await page.waitForLoadState('load', { timeout: 10000 });
  } catch {
    // load timeout - continue
  }

  try {
    await page.waitForLoadState('networkidle', { timeout: 3000 });
  } catch {
    // networkidle timeout - not critical, continue
  }

  try {
    await page.waitForSelector('body', { state: 'visible', timeout: 5000 });
  } catch {
    // body not visible - continue anyway
  }

  await page.waitForTimeout(500);
}
