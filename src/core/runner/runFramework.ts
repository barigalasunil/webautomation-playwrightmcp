import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import {
  loadConfig,
  resolveSuite,
  resolveBrowsers,
  resolveRunMode,
  resolveMode,
  resolveWorkers,
  resolveMaxWorkers,
  getBrowserMode,
  resolveUrls,
  deriveDomain,
  deriveSafeFolderName,
  makeUniqueFolderNames,
  getExplorationDepth as getDepth,
  getExplorationMaxPages as getMaxPages,
  getLoggingConfig,
  getReportingConfig,
} from '../../config/configReader';
import { parseCliArgs } from './cliArgs';
import { checkBrowsers, getBrowsersForConfig, calculateWorkers } from './browserManager';
import { cleanAndPrepareDirs } from './runManager';
import { exploreSite } from '../explorer/exploreSite';
import { generateTestCases } from '../generator/testCaseGenerator';
import { generatePOMs } from '../generator/pomGenerator';
import { generateTests } from '../generator/testGenerator';
import { setDebugEnabled, configureLogger, section, info, debug, warn, error as logError, report, pass, fail, step, success } from '../utils/logger';
import { ensureDir } from '../utils/fileUtils';
import { ROOT, getAllureResultsDir, getAllureReportDir, getPlaywrightReportDir, getLogFilePath } from '../utils/pathUtils';
import { runCommand } from './processRunner';

let frameworkExiting = false;

interface RunState {
  suite: string;
  mode: string | undefined;
  browsers: string[];
  skippedBrowsers: string[];
  urlInfos: { url: string; domain: string; safeFolder: string }[];
  tscExitCode: number | null;
  playwrightExitCode: number | null;
  allureGenerated: boolean;
  hasFailures: boolean;
  passed: number;
  failed: number;
  skipped: number;
}

const runState: RunState = {
  suite: '',
  mode: undefined,
  browsers: [],
  skippedBrowsers: [],
  urlInfos: [],
  tscExitCode: null,
  playwrightExitCode: null,
  allureGenerated: false,
  hasFailures: false,
  passed: 0,
  failed: 0,
  skipped: 0,
};

function setProcessHandlers(allureMode: string): void {
  process.on('uncaughtException', (err: Error) => {
    if (frameworkExiting) return;
    frameworkExiting = true;
    logError(`Uncaught Exception: ${err.message}`);
    logError(err.stack || '');
    attemptInterruptRecovery(allureMode);
    process.exit(1);
  });

  process.on('unhandledRejection', (reason: unknown) => {
    if (frameworkExiting) return;
    frameworkExiting = true;
    const msg = reason instanceof Error ? reason.message : String(reason);
    logError(`Unhandled Rejection: ${msg}`);
    attemptInterruptRecovery(allureMode);
    process.exit(1);
  });

  process.on('SIGINT', () => {
    if (frameworkExiting) return;
    frameworkExiting = true;
    logError('Received SIGINT - Interrupting...');
    attemptInterruptRecovery(allureMode);
    process.exit(130);
  });

  process.on('SIGTERM', () => {
    if (frameworkExiting) return;
    frameworkExiting = true;
    logError('Received SIGTERM - Interrupting...');
    attemptInterruptRecovery(allureMode);
    process.exit(143);
  });
}

function attemptInterruptRecovery(allureMode: string): void {
  try {
    const allureResultsDir = getAllureResultsDir();
    if (fs.existsSync(allureResultsDir)) {
      const files = fs.readdirSync(allureResultsDir).filter(
        f => f.endsWith('-result.json') || f.endsWith('-container.json')
      );
      if (files.length > 0) {
        info(`Found ${files.length} Allure result files - attempting report generation...`);
        runAllureGenerateSync(allureMode);
      }
    }
  } catch {
    // best effort during interrupt recovery
  }
  printRunSummary(allureMode);
}

function readTestSummary(): { passed: number; failed: number; skipped: number } {
  try {
    const summaryPath = path.resolve(ROOT, 'test-results', 'test-summary.json');
    if (fs.existsSync(summaryPath)) {
      const raw = fs.readFileSync(summaryPath, 'utf-8');
      const data = JSON.parse(raw);
      return {
        passed: data.passed || 0,
        failed: data.failed || 0,
        skipped: data.skipped || 0,
      };
    }
  } catch {
    // best effort
  }
  return { passed: 0, failed: 0, skipped: 0 };
}

function printRunSummary(allureMode: string): void {
  const line = '='.repeat(50);
  console.log(`\n${line}`);
  console.log(`  Run Completed`);
  console.log(`${line}\n`);

  const suiteLabel = runState.suite.charAt(0).toUpperCase() + runState.suite.slice(1);
  const modeLabel = runState.mode ? runState.mode.charAt(0).toUpperCase() + runState.mode.slice(1) : 'Headless';

  console.log(`  Suite: ${suiteLabel}`);
  console.log(`  Mode: ${modeLabel}`);
  console.log(`  Browsers:`);
  for (const b of runState.browsers) {
    console.log(`    - ${b.charAt(0).toUpperCase() + b.slice(1)}`);
  }

  const urls = runState.urlInfos;
  if (urls.length > 0) {
    console.log(`  URLs Tested:`);
    for (const u of urls) {
      console.log(`    - ${u.url}`);
    }
  }

  const summary = readTestSummary();
  runState.passed = summary.passed;
  runState.failed = summary.failed;
  runState.skipped = summary.skipped;

  console.log('');
  console.log('  Reports:');
  const pwReport = path.join(getPlaywrightReportDir(), 'index.html');
  const alReport = path.join(getAllureReportDir(), 'index.html');
  const logFile = getLogFilePath();
  report(`Playwright HTML: playwright-report/index.html${fs.existsSync(pwReport) ? '' : ' (NOT FOUND)'}`);
  report(`Allure Single File: allure-report/index.html${fs.existsSync(alReport) ? '' : ' (NOT FOUND)'}`);
  report(`Logs: logs/test.logs${fs.existsSync(logFile) ? '' : ' (NOT FOUND)'}`);

  console.log(`\n${line}\n`);
}

function copyLogsToReports(): void {
  const logFile = getLogFilePath();
  if (!fs.existsSync(logFile)) {
    warn('Log file not found, skipping log copy to reports');
    return;
  }

  const allureReportDir = getAllureReportDir();
  const playwrightReportDir = getPlaywrightReportDir();

  if (fs.existsSync(allureReportDir)) {
    try {
      fs.copyFileSync(logFile, path.join(allureReportDir, 'test.logs'));
      debug('Copied test.logs to allure-report');
    } catch (err: any) {
      debug(`Could not copy logs to allure-report: ${err.message}`);
    }
  }

  if (fs.existsSync(playwrightReportDir)) {
    try {
      fs.copyFileSync(logFile, path.join(playwrightReportDir, 'test.logs'));
      debug('Copied test.logs to playwright-report');
    } catch (err: any) {
      debug(`Could not copy logs to playwright-report: ${err.message}`);
    }
  }
}

function runAllureGenerateSync(allureMode: string): void {
  const allureResultsDir = getAllureResultsDir();
  const allureReportDir = getAllureReportDir();

  if (!fs.existsSync(allureResultsDir)) {
    logError('No allure-results directory found. Skipping Allure report generation.');
    return;
  }

  const resultFiles = fs.readdirSync(allureResultsDir).filter(
    f => f.endsWith('-result.json') || f.endsWith('-container.json')
  );
  const totalFiles = fs.readdirSync(allureResultsDir).length;

  report(`Allure result files found: ${resultFiles.length} result/container files, ${totalFiles} total`);

  if (resultFiles.length === 0) {
    logError('No Allure result JSON files found. Single-file report generation skipped.');
    logError('Check that tests executed using playwright.config.ts and allure-playwright reporter is installed.');
    return;
  }

  const singleFileFlag = allureMode === 'single-file' ? '--single-file' : '';
  const cmd = `npx allure generate "${allureResultsDir}" ${singleFileFlag} --clean -o "${allureReportDir}"`.replace(/\s+/g, ' ').trim();

  try {
    execSync(cmd, {
      stdio: 'pipe',
      cwd: process.cwd(),
      env: { ...process.env },
    });
    runState.allureGenerated = true;

    const indexHtml = path.join(allureReportDir, 'index.html');
    if (fs.existsSync(indexHtml)) {
      const reportLabel = allureMode === 'single-file' ? 'Single File Allure Report' : 'Allure Report';
      report(`${reportLabel} generated: allure-report/index.html`);
    } else {
      logError('Allure index.html was not generated.');
      logError('Single-file Allure Report generation failed.');
    }
  } catch (e: any) {
    logError(`Allure report generation failed: ${e.message}`);
    logError('Ensure allure-commandline is installed: npm install -D allure-commandline');
  }
}

async function runFramework(): Promise<number> {
  const args = parseCliArgs();
  const config = await loadConfig();

  const reportingCfg = getReportingConfig(config);
  const allureMode = reportingCfg.allureMode || 'single-file';

  setProcessHandlers(allureMode);

  const loggingCfg = getLoggingConfig(config);
  if (args.debug) {
    loggingCfg.debug = true;
  }
  configureLogger(loggingCfg);
  setDebugEnabled(loggingCfg.debug);

  section('AI-Powered Test Framework');

  const suite = resolveSuite(args.suite, config.execution?.suite);
  const browsers = resolveBrowsers(args.browsers, config.execution?.browsers);
  const cliMode = resolveMode(args.mode);
  const runMode = resolveRunMode(args.runMode, config.execution?.runMode);
  const maxWorkers = resolveMaxWorkers(config.execution?.maxWorkers);
  const resolvedWorkers = resolveWorkers(args.workers, config.execution?.workers, maxWorkers);
  const workers = calculateWorkers(resolvedWorkers, maxWorkers);

  const urlConfigs = resolveUrls(config, args.urls ? args.urls.split(',').map(u => u.trim()).filter(Boolean) : undefined);

  if (urlConfigs.length === 0) {
    logError('No URLs configured for execution.');
    return 1;
  }

  const urlInfos = makeUniqueFolderNames(urlConfigs.map((uc: { url: string }) => {
    const domain = deriveDomain(uc.url);
    const safeFolder = deriveSafeFolderName(domain);
    return { url: uc.url, domain, safeFolder };
  }));

  runState.suite = suite;
  runState.mode = cliMode;
  runState.browsers = browsers;
  runState.urlInfos = urlInfos;

  const modeDisplay = cliMode || 'per-browser config';
  info(`Suite: ${suite}`);
  info(`Mode: ${modeDisplay}`);
  info(`Target URL: ${urlInfos.map(u => u.url).join(', ')}`);
  info(`Browsers: ${browsers.map(b => b.charAt(0).toUpperCase() + b.slice(1)).join(', ')}`);
  debug(`Run Mode: ${runMode}`);
  debug(`Workers: ${workers}`);

  const { available, skipped } = checkBrowsers(browsers);
  runState.skippedBrowsers = skipped;

  if (skipped.length > 0) {
    for (const b of skipped) {
      warn(`${b}: Skipped (not installed)`);
    }
  }
  if (available.length === 0) {
    logError('No browsers available for execution.');
    printRunSummary(allureMode);
    return 1;
  }

  step('Preparing fresh run');
  cleanAndPrepareDirs();

  const pagesGenerated = path.resolve(ROOT, 'pages', 'generated');
  const testsGenerated = path.resolve(ROOT, 'tests', 'generated');
  ensureDir(pagesGenerated);
  ensureDir(testsGenerated);

  for (let i = 0; i < urlInfos.length; i++) {
    const urlInfo = urlInfos[i];
    const urlConfig = urlConfigs[i] || urlConfigs[0];
    const { url, domain, safeFolder } = urlInfo;

    section(`Processing URL: ${domain} (${url})`);

    const depth = getDepth(config);
    const maxPages = getMaxPages(config);

    step(`Exploring URL: ${url}`);
    await exploreSite(url, safeFolder, depth, maxPages);
    success('Exploration completed');

    step(`Generating tests for suite: ${suite}`);
    generateTestCases(safeFolder, domain, suite, url);

    generatePOMs(safeFolder, domain, url);

    const appNameReadable = domain;
    generateTests(safeFolder, domain, suite, url, appNameReadable);
  }
  success('Test generation completed');

  step('Running TypeScript validation');
  const tscResult = await runCommand('npx', ['tsc', '--noEmit'], {
    label: 'TypeScript validation',
    timeoutMs: 120000,
  });
  runState.tscExitCode = tscResult.exitCode;

  if (tscResult.exitCode !== 0) {
    logError('TypeScript validation failed. Skipping Playwright test execution.');
    runState.hasFailures = true;
    printRunSummary(allureMode);
    return runState.tscExitCode || 2;
  }
  success('TypeScript validation completed');

  const allureResultsDir = getAllureResultsDir();
  if (fs.existsSync(allureResultsDir)) {
    fs.rmSync(allureResultsDir, { recursive: true, force: true });
  }
  ensureDir(allureResultsDir);

  const orderedBrowsers = getBrowsersForConfig(available);
  const suiteTag = `@${suite}`;

  const modeDisplayForPw = runState.mode ? runState.mode.charAt(0).toUpperCase() + runState.mode.slice(1) : 'Headless';
  const browserDisplay = orderedBrowsers.map(b => b.charAt(0).toUpperCase() + b.slice(1)).join(', ');
  step('Running Playwright tests');
  info(`Suite: ${suite.charAt(0).toUpperCase() + suite.slice(1)}`);
  info(`Mode: ${modeDisplayForPw}`);
  info(`Browsers: ${browserDisplay}`);

  let playwrightExitCode: number | null = 0;

  if (runMode === 'sequential') {
    for (const browser of orderedBrowsers) {
      const mode = getBrowserMode(config, browser, cliMode);
      const browserLabel = browser.charAt(0).toUpperCase() + browser.slice(1);
      section(`Running ${suite} suite on ${browserLabel} (${mode})`);

      const testEnv: Record<string, string> = {
        TEST_TAG: suiteTag,
        BROWSER: browser,
        WORKERS: '1',
      };
      testEnv[`${browser.toUpperCase()}_MODE`] = mode;

      const result = await runCommand(
        'npx',
        [
          'playwright', 'test',
          'tests/generated',
          '--config=playwright.config.ts',
          `--grep="${suiteTag}"`,
          `--project=${browser}`,
          '--workers=1',
        ],
        {
          label: `Playwright ${browserLabel}`,
          env: testEnv,
          heartbeatLabel: `${suite} execution on ${browserLabel}`,
          timeoutMs: 1800000,
        }
      );

      if (result.exitCode !== 0 && playwrightExitCode === 0) {
        playwrightExitCode = result.exitCode;
      }
    }
  } else {
    section(`Running ${suite} suite across ${orderedBrowsers.join(', ')} (workers: ${workers})`);

    const testEnv: Record<string, string> = {
      TEST_TAG: suiteTag,
      WORKERS: String(workers),
    };

    for (const browser of orderedBrowsers) {
      const mode = getBrowserMode(config, browser, cliMode);
      testEnv[`${browser.toUpperCase()}_MODE`] = mode;
    }

    const result = await runCommand(
      'npx',
      [
        'playwright', 'test',
        'tests/generated',
        '--config=playwright.config.ts',
        `--grep="${suiteTag}"`,
        ...orderedBrowsers.map(b => `--project=${b}`),
        `--workers=${workers}`,
      ],
      {
        label: `Playwright parallel (${orderedBrowsers.join(', ')}, ${workers} workers)`,
        env: testEnv,
        heartbeatLabel: `${suite} execution across ${orderedBrowsers.join(', ')}`,
        timeoutMs: 3600000,
      }
    );

    playwrightExitCode = result.exitCode;
  }

  runState.playwrightExitCode = playwrightExitCode;
  if (playwrightExitCode !== 0) {
    runState.hasFailures = true;
    fail('Playwright execution completed with failures');
  } else {
    pass('Playwright execution completed');
  }

  report('Playwright test execution completed.');

  report('Playwright HTML Report: playwright-report/index.html');
  const playwrightReportIndex = path.join(getPlaywrightReportDir(), 'index.html');
  if (!fs.existsSync(playwrightReportIndex)) {
    logError('Playwright HTML Report not generated.');
    logError('Check reporter config and Playwright command.');
  }

  const allureReportIndex = path.join(getAllureReportDir(), 'index.html');
  if (fs.existsSync(allureReportIndex)) {
    report('Allure Report: allure-report/index.html');
  } else {
    const allureResultsDir = getAllureResultsDir();
    if (fs.existsSync(allureResultsDir)) {
      const resultFiles = fs.readdirSync(allureResultsDir).filter(
        f => f.endsWith('-result.json') || f.endsWith('-container.json')
      );
      if (resultFiles.length > 0) {
        step('Generating single-file Allure report');
        const singleFileFlag = allureMode === 'single-file' ? '--single-file' : '';
        const result = await runCommand('npx', [
          'allure', 'generate', allureResultsDir,
          singleFileFlag, '--clean', '-o', getAllureReportDir(),
        ].filter(Boolean), {
          label: 'Allure report generation',
          timeoutMs: 120000,
        });
        if (result.exitCode === 0) {
          runState.allureGenerated = true;
          if (fs.existsSync(allureReportIndex)) {
            report('Allure Report: allure-report/index.html');
          }
        } else {
          logError('Allure report generation failed.');
        }
      } else {
        logError('No Allure result JSON files found in allure-results.');
      }
    } else {
      logError('Allure results directory not found: allure-results');
    }
  }

  copyLogsToReports();

  printRunSummary(allureMode);

  if (!runState.allureGenerated) {
    logError('Allure report was not generated.');
  }

  return playwrightExitCode || (runState.allureGenerated ? 0 : 1);
}

runFramework()
  .then((exitCode: number) => {
    process.exit(exitCode);
  })
  .catch((error: any) => {
    logError(`Framework execution failed: ${error.message}`);
    logError(error.stack || '');
    printRunSummary('single-file');
    process.exit(1);
  });
