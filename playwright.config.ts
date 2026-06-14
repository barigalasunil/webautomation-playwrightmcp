import { defineConfig, devices } from '@playwright/test';
import os from 'os';

const suiteTag = process.env.TEST_TAG || '@smoke|@sanity|@regression';
const workersOverride = process.env.WORKERS;

function getWorkers(): number {
  if (workersOverride) return parseInt(workersOverride, 10);
  return Math.max(1, Math.min(os.cpus().length - 1, 4));
}

function getBrowserMode(browser: string): boolean {
  const mode = process.env[`${browser.toUpperCase()}_MODE`];
  return mode !== 'headed';
}

export default defineConfig({
  testDir: './tests/generated',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: getWorkers(),
  timeout: 60000,
  expect: {
    timeout: 10000,
  },
  grep: [new RegExp(suiteTag)],
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright', { outputFolder: 'allure-results' }],
  ],
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    actionTimeout: 15000,
    navigationTimeout: 30000,
  },
  outputDir: 'test-results',
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        headless: getBrowserMode('chromium'),
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
        headless: getBrowserMode('firefox'),
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'webkit',
      use: {
        browserName: 'webkit',
        headless: getBrowserMode('webkit'),
        viewport: { width: 1280, height: 720 },
      },
    },
  ],
});
