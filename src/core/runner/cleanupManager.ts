import fs from 'fs';
import path from 'path';
import { removeDir, ensureDir } from '../utils/fileUtils';
import { logger } from '../utils/logger';
import { ROOT } from '../utils/pathUtils';

/**
 * Cleanup: old run output lives in one folder per run —
 * test-reports_<datetime>_<url-name>/ — plus legacy flat dirs from earlier
 * versions (reports/, runs/, allure-report/, ...). Delete ALL of them so a
 * fresh run starts clean; the next run creates a brand-new test-reports_*
 * folder via runFramework.ts.
 */
const LEGACY_DIRS = [
  'allure-results',
  'allure-report',
  'playwright-report',
  'test-results',
  'screenshots',
  'logs',
  'reports',
  'runs',
];

function cleanup(): void {
  logger.section('Framework Cleanup');

  // Remove every previous per-run folder and any legacy flat dirs.
  for (const entry of fs.readdirSync(ROOT, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const isRunFolder = entry.name.startsWith('test-reports_');
    const isLegacy = LEGACY_DIRS.includes(entry.name);
    if (!isRunFolder && !isLegacy) continue;
    const fullPath = path.join(ROOT, entry.name);
    logger.debug(`Removing: ${entry.name}`);
    removeDir(fullPath);
  }

  logger.success('Cleanup completed.');
  logger.info('Update URLs in src/config/test-input.json');
  logger.info('Then run: npm run ai:smoke');
}

cleanup();
