import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import {
  loadConfig,
  getTargetApplications,
  resolveSuite,
  resolveBrowsers,
  validateBrowsers,
  getBrowserMode,
} from '../utils/configReader';

function run(cmd: string, label: string, ignoreError: boolean = false): number {
  console.log(`\n${'='.repeat(70)}`);
  console.log(`[framework] ${label}`);
  console.log(`${'='.repeat(70)}`);
  try {
    execSync(cmd, { stdio: 'inherit', cwd: process.cwd(), env: { ...process.env } });
    return 0;
  } catch (error: any) {
    if (ignoreError) {
      console.warn(`[framework] Step completed with warnings: ${label} (exit code: ${error.status || 1})`);
      return error.status || 1;
    }
    console.error(`[framework] Step failed: ${label}`);
    console.error(`[framework] Command: ${cmd}`);
    if (error.status) console.error(`[framework] Exit code: ${error.status}`);
    throw new Error(`Step "${label}" failed with exit code ${error.status || 1}`);
  }
}

function runWithEnv(cmd: string, label: string, envVars: Record<string, string>, ignoreError: boolean = false): number {
  console.log(`\n${'='.repeat(70)}`);
  console.log(`[framework] ${label}`);
  console.log(`${'='.repeat(70)}`);
  try {
    execSync(cmd, { stdio: 'inherit', cwd: process.cwd(), env: { ...process.env, ...envVars } });
    return 0;
  } catch (error: any) {
    if (ignoreError) {
      console.warn(`[framework] Step completed with warnings: ${label} (exit code: ${error.status || 1})`);
      return error.status || 1;
    }
    console.error(`[framework] Step failed: ${label}`);
    console.error(`[framework] Command: ${cmd}`);
    if (error.status) console.error(`[framework] Exit code: ${error.status}`);
    throw new Error(`Step "${label}" failed with exit code ${error.status || 1}`);
  }
}

function runAllureGenerate(): void {
  console.log(`\n${'='.repeat(70)}`);
  console.log('[framework] Generate Allure report');
  console.log(`${'='.repeat(70)}`);

  const allureResultsDir = path.resolve(process.cwd(), 'runs', 'latest', 'allure-results');

  if (!fs.existsSync(allureResultsDir)) {
    console.warn('[framework] No allure-results directory found. Skipping Allure report generation.');
    return;
  }

  const entries = fs.readdirSync(allureResultsDir);
  if (entries.length === 0) {
    console.warn('[framework] No Allure results were generated. Check reporter config.');
    return;
  }

  try {
    execSync('npx allure generate runs/latest/allure-results --clean -o runs/latest/allure-report', {
      stdio: 'inherit',
      cwd: process.cwd(),
      env: { ...process.env },
    });
  } catch {
    console.warn('[framework] Allure report generation failed. Ensure allure-commandline is installed.');
    console.warn('[framework] To install: npm install -D allure-commandline');
  }
}

function parseArgs(): Record<string, string> {
  const args: Record<string, string> = {};
  for (const arg of process.argv.slice(2)) {
    if (arg.startsWith('--')) {
      const eqIndex = arg.indexOf('=');
      if (eqIndex > 0) {
        args[arg.slice(2, eqIndex)] = arg.slice(eqIndex + 1);
      } else {
        args[arg.slice(2)] = 'true';
      }
    }
  }
  return args;
}

async function runFramework(): Promise<void> {
  const args = parseArgs();
  const config = await loadConfig();

  const cliSuite = args['suite'];
  const configSuite = config.execution?.suite;
  const suite = resolveSuite(cliSuite, configSuite);

  const cliBrowsers = args['browsers'];
  const configBrowsers = config.execution?.browsers;
  const browsers = resolveBrowsers(cliBrowsers, configBrowsers);
  validateBrowsers(browsers);

  const cliApps = args['apps'] ? args['apps'].split(',').map(a => a.trim()).filter(Boolean) : undefined;
  const apps = getTargetApplications(config, cliApps);

  if (apps.length === 0) {
    console.error('[framework] No applications selected for execution.');
    process.exit(1);
  }

  const appNames = apps.map(a => a.name);
  const suiteLabel = suite.charAt(0).toUpperCase() + suite.slice(1);

  console.log('='.repeat(70));
  console.log('  AI-Powered Test Framework');
  console.log('='.repeat(70));
  console.log(`  Suite:       @${suite}`);
  console.log(`  Applications: ${appNames.join(', ')}`);
  console.log(`  Browsers:    ${browsers.join(', ')}`);
  console.log('='.repeat(70));

  // Check Chromium availability - required
  try {
    execSync('npx playwright install --dry-run chromium 2>&1', { stdio: 'pipe' });
  } catch {
    try {
      execSync('npx playwright install --list 2>&1 | findstr chromium', { stdio: 'pipe' });
    } catch {
      console.error('[framework] Chromium is required. Please run: npx playwright install chromium');
      process.exit(1);
    }
  }

  // Check other selected browsers
  const availableBrowsers: string[] = ['chromium'];
  const skippedBrowsers: string[] = [];

  for (const browser of browsers) {
    if (browser === 'chromium') continue;
    try {
      execSync(`npx playwright install --list 2>&1 | findstr ${browser}`, { stdio: 'pipe' });
      availableBrowsers.push(browser);
    } catch {
      console.warn(`[framework] Warning: ${browser} is not installed. Skipping.`);
      console.warn(`[framework] To install, run: npx playwright install ${browser}`);
      skippedBrowsers.push(browser);
    }
  }

  const selectedBrowsers = availableBrowsers;

  if (selectedBrowsers.length === 0) {
    console.error('[framework] No browsers available for execution.');
    process.exit(1);
  }

  const runSettings = config.runSettings || {};
  const cleanBeforeRun = runSettings.cleanBeforeRun !== false;

  if (cleanBeforeRun) {
    run('npx tsx scripts/cleanRun.ts', 'Clean previous run');
  }

  // Process each application
  for (const app of apps) {
    console.log(`\n${'='.repeat(70)}`);
    console.log(`Processing application: ${app.name} (${app.url})`);
    console.log(`${'='.repeat(70)}`);

    const appEnv = {
      APP_NAME: app.name,
      APP_URL: app.url,
      SUITE: suite,
      EXPLORE_DEPTH: String(config.exploration?.depth ?? 3),
      EXPLORE_MAX_PAGES: String(config.exploration?.maxPagesToExplore ?? 50),
    };

    const appDir = path.resolve(process.cwd(), 'runs', 'latest', app.name);
    fs.mkdirSync(path.join(appDir, 'reports'), { recursive: true });
    fs.mkdirSync(path.join(appDir, 'pages'), { recursive: true });
    fs.mkdirSync(path.join(appDir, 'tests'), { recursive: true });
    fs.mkdirSync(path.join(appDir, 'screenshots'), { recursive: true });

    runWithEnv(
      'npx tsx scripts/exploreSite.ts',
      `Explore site: ${app.name}`,
      appEnv
    );

    runWithEnv(
      'npx tsx scripts/analyzeSite.ts',
      `Analyze site: ${app.name}`,
      appEnv
    );

    runWithEnv(
      'npx tsx scripts/generateTestCases.ts',
      `Generate test cases: ${app.name} (@${suite})`,
      appEnv
    );

    runWithEnv(
      'npx tsx scripts/generatePOMs.ts',
      `Generate POMs: ${app.name}`,
      appEnv
    );

    runWithEnv(
      'npx tsx scripts/generateTests.ts',
      `Generate tests: ${app.name} (@${suite})`,
      appEnv
    );
  }

  // TypeScript validation before running tests
  run('npx tsc --noEmit', 'TypeScript validation');

  // Clean allure directories once before first browser run
  const allureResultsDir = path.resolve(process.cwd(), 'runs', 'latest', 'allure-results');
  const allureReportDir = path.resolve(process.cwd(), 'runs', 'latest', 'allure-report');
  if (fs.existsSync(allureResultsDir)) {
    fs.rmSync(allureResultsDir, { recursive: true });
  }
  if (fs.existsSync(allureReportDir)) {
    fs.rmSync(allureReportDir, { recursive: true });
  }
  fs.mkdirSync(allureResultsDir, { recursive: true });

  // Sort browsers in fixed order: chromium, firefox, webkit
  const browserOrder = ['chromium', 'firefox', 'webkit'];
  const orderedBrowsers = browserOrder.filter(b => selectedBrowsers.includes(b));

  console.log(`\n${'='.repeat(70)}`);
  console.log(`[framework] Browsers selected: ${orderedBrowsers.join(', ')}`);
  console.log(`${'='.repeat(70)}`);

  const browserResults: { browser: string; status: string; exitCode: number }[] = [];
  let hasFailures = false;

  for (const browser of orderedBrowsers) {
    const mode = getBrowserMode(config, browser);
    const browserLabel = browser.charAt(0).toUpperCase() + browser.slice(1);

    for (const app of apps) {
      console.log(`\n${'='.repeat(70)}`);
      console.log(`[framework] Running ${suite} suite on ${browserLabel} for ${app.name}...`);
      console.log(`${'='.repeat(70)}`);

      const testEnv: Record<string, string> = {
        SUITE: suite,
        TEST_TAG: `@${suite}`,
        APP_NAME: app.name,
        [`${browser.toUpperCase()}_MODE`]: mode,
      };

      const pwCmd = `npx playwright test tests/generated/${app.name} --project=${browser} --grep @${suite}`;
      const exitCode = runWithEnv(
        pwCmd,
        `Run Playwright tests on ${browserLabel} for ${app.name} (${mode})`,
        testEnv,
        true
      );

      if (exitCode !== 0) {
        browserResults.push({ browser: `${browser} (${app.name})`, status: 'Failed', exitCode });
        hasFailures = true;
      } else {
        browserResults.push({ browser: `${browser} (${app.name})`, status: 'Passed', exitCode: 0 });
      }
    }
  }

  // Copy screenshots from test results to each app folder
  const testResultsDir = path.resolve(process.cwd(), 'runs', 'latest', 'test-results');
  if (fs.existsSync(testResultsDir)) {
    for (const app of apps) {
      const screenshotsDir = path.resolve(process.cwd(), 'runs', 'latest', app.name, 'screenshots');
      if (!fs.existsSync(screenshotsDir)) {
        fs.mkdirSync(screenshotsDir, { recursive: true });
      }
      let count = 0;
      const entries = fs.readdirSync(testResultsDir, { withFileTypes: true });
      for (const entry of entries) {
        if (!entry.isDirectory()) continue;
        const testDir = path.join(testResultsDir, entry.name);
        try {
          const files = fs.readdirSync(testDir);
          for (const file of files) {
            if (file.endsWith('.png') || file.endsWith('.webm') || file.endsWith('.mp4')) {
              const src = path.join(testDir, file);
              const dest = path.join(screenshotsDir, `${entry.name}_${file}`);
              fs.copyFileSync(src, dest);
              count++;
            }
          }
        } catch {}
      }
      if (count > 0) {
        console.log(`[framework] Copied ${count} screenshot(s) to ${screenshotsDir}`);
      }
    }
  }

  // Always generate Allure report once, regardless of test exit codes
  runAllureGenerate();

  // Print final summary
  printFinalSummary(suite, appNames, browserResults, skippedBrowsers);

  // Exit with code 1 if any browser failed
  if (hasFailures) {
    process.exit(1);
  }
}

function printFinalSummary(
  suite: string,
  appNames: string[],
  browserResults: { browser: string; status: string; exitCode: number }[],
  skippedBrowsers: string[]
): void {
  console.log(`\n${'='.repeat(70)}`);
  console.log('Run completed.');
  console.log(`${'='.repeat(70)}`);
  console.log(`Suite: ${suite}`);
  console.log('');
  console.log('Browser Results:');
  for (const br of browserResults) {
    const label = br.browser.charAt(0).toUpperCase() + br.browser.slice(1);
    console.log(`  - ${label}: ${br.status}`);
  }
  if (skippedBrowsers.length > 0) {
    for (const b of skippedBrowsers) {
      const label = b.charAt(0).toUpperCase() + b.slice(1);
      console.log(`  - ${label}: Skipped (not installed)`);
    }
  }
  console.log('');
  console.log('Reports:');
  console.log('  Allure Report:             runs/latest/allure-report/index.html');
  console.log('  Playwright HTML Report:    runs/latest/playwright-report/index.html');
  console.log('');
  console.log('Application outputs:');
  for (const appName of appNames) {
    console.log(`  ${appName}: runs/latest/${appName}`);
  }
  console.log(`${'='.repeat(70)}`);
}

runFramework().catch((error: any) => {
  console.error(`\n[framework] Framework execution failed:`);
  console.error(`  ${error.message}`);
  process.exit(1);
});
