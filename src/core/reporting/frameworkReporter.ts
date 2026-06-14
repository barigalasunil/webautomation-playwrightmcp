import type { Reporter, TestCase, TestResult, Suite, FullConfig, FullResult } from '@playwright/test/reporter';
import { logger } from '../utils/logger';
import fs from 'fs';
import path from 'path';

let totalTests = 0;
let completedTests = 0;
let passedCount = 0;
let failedCount = 0;
let skippedCount = 0;
const browserCounts: Map<string, { total: number; passed: number; failed: number; skipped: number; current: number }> = new Map();

const results: { test: string; status: string; error?: string; duration: number; browser: string }[] = [];

class FrameworkReporter implements Reporter {
  onBegin(config: FullConfig, suite: Suite): void {
    try {
      totalTests = 0;
      completedTests = 0;
      passedCount = 0;
      failedCount = 0;
      skippedCount = 0;
      results.length = 0;
      browserCounts.clear();

      const allTests = this.collectTests(suite);
      totalTests = allTests.length;

      for (const test of allTests) {
        const browser = test.parent?.project()?.name || 'unknown';
        if (!browserCounts.has(browser)) {
          browserCounts.set(browser, { total: 0, passed: 0, failed: 0, skipped: 0, current: 0 });
        }
        browserCounts.get(browser)!.total++;
      }

      const browserList = config.projects.map(p => p.name).join(', ');

      logger.progress(`Starting test execution: ${totalTests} tests discovered`);
      logger.debug(`Projects: ${browserList}`);
      logger.debug(`Workers: ${config.workers}`);
    } catch (err: any) {
      logger.warn(`Reporter onBegin error: ${err.message}`);
    }
  }

  onTestBegin(test: TestCase): void {
    try {
      completedTests++;
      const browser = test.parent?.project()?.name || 'unknown';
      const title = test.title;
      const counts = browserCounts.get(browser);
      if (counts) {
        counts.current++;
      }

      const hasMultipleBrowsers = browserCounts.size > 1;
      if (hasMultipleBrowsers) {
        const bc = browserCounts.get(browser);
        logger.progress(`${browser}: Test ${counts?.current || completedTests}/${bc?.total || totalTests} running: ${title}`);
      } else {
        logger.progress(`Test ${completedTests}/${totalTests} running: ${title}`);
      }
    } catch (err: any) {
      logger.warn(`Reporter onTestBegin error: ${err.message}`);
    }
  }

  onStepBegin(test: TestCase, result: TestResult, step: any): void {
    try {
      if (step.category === 'test.step') {
        const title = step.title;
        const lower = title.toLowerCase();

        if (lower.startsWith('verify') || lower.startsWith('check') || lower.startsWith('validate')) {
          logger.verify(title);
        } else if (lower.startsWith('open ') || lower.startsWith('click ') || lower.startsWith('navigate') || lower.startsWith('capture')) {
          logger.step(title);
        } else if (lower.includes('link') || lower.includes('href') || lower.includes('navigation')) {
          logger.link(title);
        } else {
          logger.step(title);
        }
      }
    } catch {
      // ignore step logging errors
    }
  }

  onTestEnd(test: TestCase, result: TestResult): void {
    try {
      const browser = test.parent?.project()?.name || 'unknown';
      const title = test.title;
      const duration = result.duration;

      const counts = browserCounts.get(browser);

      if (result.status === 'passed') {
        passedCount++;
        if (counts) counts.passed++;
        logger.pass(`Test ${completedTests}/${totalTests} passed: ${title}`);
      } else if (result.status === 'failed' || result.status === 'timedOut') {
        failedCount++;
        if (counts) counts.failed++;
        logger.fail(`Test ${completedTests}/${totalTests} failed: ${title}`);
        if (result.error) {
          logger.error(`Failure reason: ${result.error.message}`);
        }
      } else if (result.status === 'skipped') {
        skippedCount++;
        if (counts) counts.skipped++;
        logger.skip(`Test ${completedTests}/${totalTests} skipped: ${title}`);
      }

      results.push({
        test: title,
        status: result.status || 'unknown',
        error: result.error?.message,
        duration,
        browser,
      });

      this.attachLogToTest(test, result);
    } catch (err: any) {
      logger.warn(`Reporter onTestEnd error: ${err.message}`);
    }
  }

  private attachLogToTest(test: TestCase, result: TestResult): void {
    try {
      const logPath = path.resolve(process.cwd(), 'logs', 'test.logs');
      if (fs.existsSync(logPath)) {
        const logContent = fs.readFileSync(logPath, 'utf-8');
        const lines = logContent.split('\n').filter(l => l.trim());
        const tailLines = lines.slice(-100);
        const tail = tailLines.join('\n');
        if (tail) {
          try {
            result.attachments.push({
              name: 'Framework Execution Log (tail)',
              contentType: 'text/plain',
              body: Buffer.from(tail, 'utf-8'),
            });
          } catch {
            // ignore attachment errors
          }
        }
      }
    } catch {
      // ignore log attach errors
    }
  }

  onEnd(result: FullResult): void {
    try {
      logger.progress(`Test execution completed: Passed ${passedCount}, Failed ${failedCount}, Skipped ${skippedCount}`);

      logger.section('Run Completed');
      logger.info('Results:');

      if (passedCount > 0) logger.pass(`Passed: ${passedCount}`);
      if (failedCount > 0) logger.fail(`Failed: ${failedCount}`);
      if (skippedCount > 0) logger.skip(`Skipped: ${skippedCount}`);

      if (browserCounts.size > 1) {
        logger.info('');
        logger.info('Results by browser:');
        for (const [browser, counts] of browserCounts) {
          const bLabel = browser.charAt(0).toUpperCase() + browser.slice(1);
          const parts: string[] = [];
          if (counts.passed > 0) parts.push(`Passed: ${counts.passed}`);
          if (counts.failed > 0) parts.push(`Failed: ${counts.failed}`);
          if (counts.skipped > 0) parts.push(`Skipped: ${counts.skipped}`);
          logger.info(`  ${bLabel}: ${parts.join(', ')}`);
        }
      }

      if (failedCount > 0) {
        logger.info('');
        logger.info('Failed Tests:');
        for (const r of results) {
          if (r.status === 'failed' || r.status === 'timedOut') {
            logger.fail(`  ${r.test}${r.error ? ` - ${r.error}` : ''}`);
          }
        }
      }

      this.saveTestSummary();
    } catch (err: any) {
      logger.warn(`Reporter onEnd error: ${err.message}`);
    }
  }

  private saveTestSummary(): void {
    try {
      const summaryPath = path.resolve(process.cwd(), 'test-results', 'test-summary.json');
      const summary = {
        total: totalTests,
        passed: passedCount,
        failed: failedCount,
        skipped: skippedCount,
        status: failedCount > 0 ? 'failed' : passedCount > 0 ? 'passed' : 'skipped',
      };
      fs.mkdirSync(path.dirname(summaryPath), { recursive: true });
      fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2), 'utf-8');
    } catch {
      // best effort
    }
  }

  private collectTests(suite: Suite): TestCase[] {
    const tests: TestCase[] = [];
    try {
      for (const item of suite.suites) {
        tests.push(...this.collectTests(item));
      }
      for (const test of suite.tests) {
        tests.push(test);
      }
    } catch {
      // ignore collect errors
    }
    return tests;
  }
}

export default FrameworkReporter;
