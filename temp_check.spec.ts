import { test } from '@playwright/test';
test('check myvi page load', async ({ page }) => {
  await page.goto('https://www.myvi.in/', { timeout: 30000 });
  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  console.log('Title:', await page.title());
  console.log('URL:', page.url());
});
