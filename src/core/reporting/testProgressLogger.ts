import { logger } from '../utils/logger';

export async function logProgress(message: string): Promise<void> {
  try { logger.progress(message); } catch {}
}

export async function logPass(message: string): Promise<void> {
  try { logger.pass(message); } catch {}
}

export async function logFail(message: string): Promise<void> {
  try { logger.fail(message); } catch {}
}

export async function logError(message: string): Promise<void> {
  try { logger.error(message); } catch {}
}

export async function logSkip(message: string): Promise<void> {
  try { logger.skip(message); } catch {}
}

export async function logAction(message: string): Promise<void> {
  try { logger.action(message); } catch {}
}

export async function logValidation(message: string): Promise<void> {
  try { logger.verify(message); } catch {}
}

export async function logTestStart(testTitle: string, browserName?: string, suite?: string): Promise<void> {
  try {
    let msg = `Running test: ${testTitle}`;
    if (browserName) msg += ` [${browserName}]`;
    if (suite) msg += ` (${suite})`;
    logger.progress(msg);
  } catch {}
}

export async function logTestPass(testTitle: string, duration?: string): Promise<void> {
  try {
    let msg = `Passed: ${testTitle}`;
    if (duration) msg += ` (${duration}s)`;
    logger.pass(msg);
  } catch {}
}

export async function logTestFail(testTitle: string, errorMessage?: string): Promise<void> {
  try {
    logger.fail(`Failed: ${testTitle}`);
    if (errorMessage) logger.error(`Reason: ${errorMessage}`);
  } catch {}
}

export async function logTestSkip(testTitle: string, reason?: string): Promise<void> {
  try {
    let msg = `Skipped: ${testTitle}`;
    if (reason) msg += ` - ${reason}`;
    logger.skip(msg);
  } catch {}
}
