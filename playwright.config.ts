import { defineConfig, devices } from '@playwright/test';
import os from 'os';
import path from 'path';
import { resolveActiveRunFolder } from './src/core/runner/runFolder';

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

// All artifacts land inside the per-run folder: test-reports_<datetime>_<url-name>/
// (FRAMEWORK_RUN_DIR is set by runFramework.ts; fall back to the newest
// test-reports_* folder so bare `npx playwright test` also stays contained).
const runFolder = resolveActiveRunFolder();

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
    ['html', { outputFolder: path.join(runFolder, 'playwright-report'), open: 'never' }],
    // NOTE: allure-playwright's option is `resultsDir` (it silently ignores
    // `outputFolder` and falls back to ./allure-results in cwd).
    ['allure-playwright', { resultsDir: path.join(runFolder, 'allure-results') }],
    ['./src/core/reporting/frameworkReporter.ts'],
    ['./src/core/reporting/dashboardProgressReporter.ts'],
  ],
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    actionTimeout: 15000,
    navigationTimeout: 60000,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  },
  outputDir: path.join(runFolder, 'test-results'),
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
