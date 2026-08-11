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

test.describe('Example Sanity Tests @sanity', () => {
  test('Verify page has visible heading @sanity', async ({ page }) => {
    const baseUrl = getBaseUrl();
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
    const headings = await page.locator('h1, h2, h3').count();
    expect(headings).toBeGreaterThan(0);
  });

  test('Verify page has navigation links @sanity', async ({ page }) => {
    const baseUrl = getBaseUrl();
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
    const links = await page.locator('a[href]').count();
    expect(links).toBeGreaterThan(0);
  });
});
