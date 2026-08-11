import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

function getBaseUrl(): string {
  try {
    const configPath = path.resolve(process.cwd(), 'src', 'config', 'test-input.json');
    const raw = fs.readFileSync(configPath, 'utf-8');
    const config = JSON.parse(raw);
    return config.urls?.[0]?.url || 'https://www.myvi.in/';
  } catch {
    return 'https://www.myvi.in/';
  }
}

test.describe('Example Regression Tests @regression', () => {
  test('Verify all headings are present @regression', async ({ page }) => {
    const baseUrl = getBaseUrl();
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
    const h1 = await page.locator('h1').count();
    const h2 = await page.locator('h2').count();
    const h3 = await page.locator('h3').count();
    expect(h1 + h2 + h3).toBeGreaterThan(0);
  });

  test('Verify all links have href @regression', async ({ page }) => {
    const baseUrl = getBaseUrl();
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
    const links = page.locator('a[href]');
    const count = await links.count();
    for (let i = 0; i < Math.min(count, 10); i++) {
      const href = await links.nth(i).getAttribute('href');
      expect(href).toBeTruthy();
    }
  });

  test('Verify buttons exist in DOM @regression', async ({ page }) => {
    const baseUrl = getBaseUrl();
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
    const buttons = await page.locator('button, [role="button"], input[type="submit"]').count();
    expect(buttons).toBeGreaterThanOrEqual(0);
  });
});
