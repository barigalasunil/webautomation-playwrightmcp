import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { ROOT, getAllureReportDir, getPlaywrightReportDir, getLogFilePath } from '../utils/pathUtils';

function getTimestamp(): string {
  const now = new Date();
  const pad = (n: number) => n.toString().padStart(2, '0');
  return `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
}

function packageReport(): void {
  console.log('='.repeat(50));
  console.log('  Package Execution Report');
  console.log('='.repeat(50));
  console.log('');

  const timestamp = getTimestamp();
  const zipName = `ExecutionReport_${timestamp}.zip`;
  const zipPath = path.resolve(ROOT, zipName);

  const itemsToInclude: string[] = [];

  const allureReportIndex = path.join(getAllureReportDir(), 'index.html');
  if (fs.existsSync(allureReportIndex)) {
    itemsToInclude.push(getAllureReportDir());
    console.log(`  [FOUND] Allure Report: allure-report/`);
  } else {
    console.log(`  [SKIP]  Allure Report not found`);
  }

  const playwrightIndex = path.join(getPlaywrightReportDir(), 'index.html');
  if (fs.existsSync(playwrightIndex)) {
    itemsToInclude.push(getPlaywrightReportDir());
    console.log(`  [FOUND] Playwright HTML Report: playwright-report/`);
  } else {
    console.log(`  [SKIP]  Playwright HTML Report not found`);
  }

  if (fs.existsSync(getLogFilePath())) {
    itemsToInclude.push(getLogFilePath());
    console.log(`  [FOUND] Test Logs: logs/test.logs`);
  } else {
    console.log(`  [SKIP]  Test Logs not found`);
  }

  if (itemsToInclude.length === 0) {
    console.log('');
    console.log('  [ERROR] No reports found to package.');
    console.log('  Run tests first, then run: npm run package-report');
    console.log('');
    process.exit(1);
  }

  console.log('');
  console.log(`  Creating: ${zipName}`);
  console.log('');

  try {
    const itemsArg = itemsToInclude.map(i => `"${i}"`).join(', ');
    execSync(
      `powershell -Command "Compress-Archive -Path ${itemsArg} -DestinationPath '${zipPath}' -Force"`,
      { stdio: 'pipe', cwd: ROOT }
    );
    console.log(`  [DONE] Report packaged:`);
    console.log(`  ${zipPath}`);
    console.log('');
    console.log('  Share this file via:');
    console.log('  - Email attachment');
    console.log('  - Jira attachment');
    console.log('  - Teams / SharePoint');
    console.log('  - Client delivery');
    console.log('');
    console.log('  Contents:');
    for (const item of itemsToInclude) {
      console.log(`    - ${path.relative(ROOT, item)}`);
    }
    console.log('');
    console.log('='.repeat(50));
  } catch (e: any) {
    console.log(`  [ERROR] Failed to create zip: ${e.message}`);
    process.exit(1);
  }
}

packageReport();
