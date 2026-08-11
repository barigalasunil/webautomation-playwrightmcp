import { Reporter, TestCase, TestResult, FullResult } from '@playwright/test/reporter';

/**
 * Custom Playwright reporter that emits __PROGRESS__ JSON lines to stdout.
 * These are parsed by the dashboard backend (runManager.ts) for real-time
 * test-level progress updates.
 */
export default class DashboardProgressReporter implements Reporter {
  private total = 0;
  private completed = 0;
  private passed = 0;
  private failed = 0;
  private skipped = 0;

  onTestBegin(test: TestCase): void {
    this.total++;
    this.emit({
      phase: 'running',
      total: this.total,
      completed: this.completed,
      passed: this.passed,
      failed: this.failed,
      message: `Running: ${test.title}`,
    });
  }

  onTestEnd(test: TestCase, result: TestResult): void {
    this.completed++;
    if (result.status === 'passed') this.passed++;
    else if (result.status === 'failed' || result.status === 'timedOut') this.failed++;
    else if (result.status === 'skipped') this.skipped++;

    const icon = result.status === 'passed' ? 'PASS' : result.status === 'failed' || result.status === 'timedOut' ? 'FAIL' : 'SKIP';
    this.emit({
      phase: 'running',
      total: this.total,
      completed: this.completed,
      passed: this.passed,
      failed: this.failed,
      message: `[${icon}] ${test.title}`,
    });
  }

  onEnd(result: FullResult): Promise<void> | void {
    this.emit({
      phase: 'running',
      total: this.total,
      completed: this.completed,
      passed: this.passed,
      failed: this.failed,
      message: `Tests finished: ${this.passed} passed, ${this.failed} failed, ${this.skipped} skipped`,
    });
  }

  private emit(event: Record<string, unknown>): void {
    console.log(`__PROGRESS__${JSON.stringify(event)}`);
  }
}
