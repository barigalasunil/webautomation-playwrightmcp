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

test.describe('Example Smoke Tests @smoke', () => {
  test('Verify page loads successfully @smoke', async ({ page }) => {
    const baseUrl = getBaseUrl();
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
    expect(page.url()).toContain(new URL(baseUrl).hostname);
    const title = await page.title();
    expect(title).toBeTruthy();
  });

  test('Verify page title is not empty @smoke', async ({ page }) => {
    const baseUrl = getBaseUrl();
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
    const title = await page.title();
    expect(title.length).toBeGreaterThan(0);
  });
});
