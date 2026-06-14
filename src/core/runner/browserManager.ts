import { execSync } from 'child_process';
import { cpus } from 'node:os';
import { logger } from '../utils/logger';

export function calculateWorkers(selectedWorkers: number, maxWorkers: number): number {
  const cpuCount = cpus().length;
  const capped = Math.max(1, Math.min(selectedWorkers, maxWorkers));
  logger.debug(`CPU Cores Detected: ${cpuCount}`);
  logger.debug(`Maximum Workers Allowed: ${maxWorkers}`);
  logger.debug(`Workers Selected: ${capped}`);
  return capped;
}

const BROWSER_ORDER = ['chromium', 'firefox', 'webkit'];

export function checkBrowsers(requestedBrowsers: string[]): { available: string[]; skipped: string[] } {
  const available: string[] = [];
  const skipped: string[] = [];

  for (const browser of BROWSER_ORDER) {
    if (!requestedBrowsers.includes(browser)) continue;

    if (browser === 'chromium') {
      try {
        execSync('npx playwright install --dry-run chromium 2>&1', { stdio: 'pipe' });
        available.push(browser);
      } catch {
        try {
          execSync('npx playwright install --list 2>&1 | findstr chromium', { stdio: 'pipe' });
          available.push(browser);
        } catch {
          logger.error('Chromium is required. Run: npx playwright install chromium');
          throw new Error('Chromium is not installed. This browser is required.');
        }
      }
    } else {
      try {
        execSync(`npx playwright install --list 2>&1 | findstr ${browser}`, { stdio: 'pipe' });
        available.push(browser);
      } catch {
        logger.warn(`${browser} is not installed. Skipping. To install: npx playwright install ${browser}`);
        skipped.push(browser);
      }
    }
  }

  return { available, skipped };
}

export function getBrowsersForConfig(availableBrowsers: string[]): string[] {
  return BROWSER_ORDER.filter(b => availableBrowsers.includes(b));
}
