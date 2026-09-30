import fs from 'fs';
import { ensureDir } from '../utils/fileUtils';
import {
  getAllureResultsDir, getAllureReportDir, getPlaywrightReportDir,
  getTestResultsDir, getScreenshotsDir, getLogsDir,
} from '../utils/pathUtils';
import { logger } from '../utils/logger';

/**
 * Prepare the artifact subfolders inside the active run folder
 * (test-reports_<datetime>_<url-name>/). The run folder itself was just
 * created by runFramework.ts, so nothing is deleted here — all output for
 * this run is fresh.
 */
export function cleanAndPrepareDirs(): void {
  logger.section('Preparing directories');

  const dirsToCreate = [
    getAllureResultsDir(),
    getAllureReportDir(),
    getPlaywrightReportDir(),
    getTestResultsDir(),
    getScreenshotsDir(),
    getLogsDir(),
  ];

  for (const dir of dirsToCreate) {
    ensureDir(dir);
  }

  logger.debug('All directories prepared');
}
