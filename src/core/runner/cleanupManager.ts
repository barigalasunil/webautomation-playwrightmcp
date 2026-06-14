import fs from 'fs';
import { removeDir, ensureDir } from '../utils/fileUtils';
import { logger } from '../utils/logger';
import {
  getAllureResultsDir, getAllureReportDir, getPlaywrightReportDir,
  getTestResultsDir, getScreenshotsDir, getLogsDir,
} from '../utils/pathUtils';

const ROOT = process.cwd();

const dirsToDelete = [
  { path: getAllureResultsDir(), description: 'Allure Results' },
  { path: getAllureReportDir(), description: 'Allure Report' },
  { path: getPlaywrightReportDir(), description: 'Playwright HTML Report' },
  { path: getTestResultsDir(), description: 'Test Results' },
  { path: getScreenshotsDir(), description: 'Screenshots' },
  { path: getLogsDir(), description: 'Logs' },
];

const dirsToCreate = [
  getAllureResultsDir(),
  getAllureReportDir(),
  getPlaywrightReportDir(),
  getTestResultsDir(),
  getScreenshotsDir(),
  getLogsDir(),
];

function cleanup(): void {
  logger.section('Framework Cleanup');

  for (const entry of dirsToDelete) {
    if (!fs.existsSync(entry.path)) continue;
    logger.debug(`Removing ${entry.description}: ${entry.path}`);
    removeDir(entry.path);
  }

  for (const dir of dirsToCreate) {
    ensureDir(dir);
    logger.debug(`Created ${dir}`);
  }

  logger.success('Cleanup completed.');
  logger.info('Update URLs in src/config/test-input.json');
  logger.info('Then run: npm run ai:smoke');
}

cleanup();
