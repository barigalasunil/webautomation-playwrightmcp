/**
 * Report utilities for the ACTIVE run folder (test-reports_<datetime>_<url>/).
 *
 *   tsx src/core/runner/reports.ts generate        — Allure report from <run>/allure-results
 *   tsx src/core/runner/reports.ts open:allure     — serve <run>/allure-report
 *   tsx src/core/runner/reports.ts open:playwright — serve <run>/playwright-report
 *
 * Replaces the old root-level (allure-results/, allure-report/) script paths,
 * which no longer exist now that every run writes into one test-reports_* folder.
 */
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { ROOT } from '../utils/pathUtils';
import { resolveActiveRunFolder } from './runFolder';

const runFolder = resolveActiveRunFolder(ROOT);
const cmd = process.argv[2];

function die(msg: string): never {
  console.error(`[ERROR] ${msg}`);
  process.exit(1);
}

function hasResultFiles(dir: string): boolean {
  try {
    return fs.readdirSync(dir).some(
      f => f.endsWith('-result.json') || f.endsWith('-container.json')
    );
  } catch {
    return false;
  }
}

switch (cmd) {
  case 'generate': {
    const resultsDir = path.join(runFolder, 'allure-results');
    const reportDir = path.join(runFolder, 'allure-report');
    if (!fs.existsSync(resultsDir)) {
      die(`No allure-results directory in ${runFolder}. Run the tests first.`);
    }
    if (!hasResultFiles(resultsDir)) {
      die(`No Allure result JSON files in ${path.relative(ROOT, resultsDir)}.`);
    }
    console.log(`Generating Allure report for ${path.relative(ROOT, runFolder) || runFolder} ...`);
    const res = spawnSync(
      'npx',
      ['allure', 'generate', resultsDir, '--single-file', '--clean', '-o', reportDir],
      { stdio: 'inherit', shell: true, cwd: ROOT }
    );
    if ((res.status ?? 1) === 0 && fs.existsSync(path.join(reportDir, 'index.html'))) {
      console.log(`Allure report: ${path.join(path.relative(ROOT, runFolder), 'allure-report', 'index.html')}`);
    } else {
      die('Allure report generation failed. Ensure allure-commandline is installed.');
    }
    process.exit(res.status ?? 1);
    break; // unreachable; satisfies no-fallthrough
  }

  case 'open:allure': {
    const reportDir = path.join(runFolder, 'allure-report');
    if (!fs.existsSync(path.join(reportDir, 'index.html'))) {
      die(`No Allure report in ${runFolder}. Run: npm run report:allure:generate`);
    }
    spawnSync('npx', ['allure', 'open', reportDir], { stdio: 'inherit', shell: true, cwd: ROOT });
    process.exit(0);
    break;
  }

  case 'open:playwright': {
    const reportDir = path.join(runFolder, 'playwright-report');
    if (!fs.existsSync(path.join(reportDir, 'index.html'))) {
      die(`No Playwright HTML report in ${runFolder}. Run the tests first.`);
    }
    spawnSync('npx', ['playwright', 'show-report', reportDir], { stdio: 'inherit', shell: true, cwd: ROOT });
    process.exit(0);
    break;
  }

  default:
    die('Usage: tsx src/core/runner/reports.ts generate|open:allure|open:playwright');
}
