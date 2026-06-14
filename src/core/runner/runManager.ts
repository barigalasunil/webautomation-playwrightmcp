import fs from 'fs';
import { ensureDir, removeDir } from '../utils/fileUtils';
import {
  getAllureResultsDir, getAllureReportDir, getPlaywrightReportDir,
  getTestResultsDir, getScreenshotsDir, getLogsDir, getLogFilePath,
} from '../utils/pathUtils';
import { logger } from '../utils/logger';

const ROOT = process.cwd();

export function cleanAndPrepareDirs(): void {
  logger.section('Preparing directories');

  const dirsToDelete = [
    getAllureResultsDir(),
    getAllureReportDir(),
    getPlaywrightReportDir(),
    getTestResultsDir(),
    getScreenshotsDir(),
  ];

  for (const dir of dirsToDelete) {
    try {
      if (fs.existsSync(dir)) {
        removeDir(dir);
        logger.debug(`Deleted: ${dir}`);
      }
    } catch (err: any) {
      logger.debug(`Could not delete ${dir}: ${err.message}`);
    }
  }

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
