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

test('page loads successfully', async ({ page }) => {
  const baseUrl = getBaseUrl();
  await page.goto(baseUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
  const title = await page.title();
  expect(title).toBeTruthy();
  expect(page.url()).toContain(new URL(baseUrl).hostname);
});

test('page has no console errors', async ({ page }) => {
  const baseUrl = getBaseUrl();
  const errors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  await page.goto(baseUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  expect(errors).toEqual([]);
});
