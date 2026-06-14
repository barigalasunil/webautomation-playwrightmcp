import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

type LogMethod = 'info' | 'success' | 'warn' | 'error' | 'debug' | 'step' | 'link' | 'verify' | 'pass' | 'fail' | 'skip' | 'report' | 'progress' | 'action' | 'section';

const LABEL_COLORS: Record<LogMethod, (msg: string) => string> = {
  info: (m) => `${chalk.cyan('[INFO]')} ${m}`,
  success: (m) => `${chalk.green('[SUCCESS]')} ${m}`,
  warn: (m) => `${chalk.yellow('[WARN]')} ${m}`,
  error: (m) => `${chalk.red('[ERROR]')} ${m}`,
  debug: (m) => `${chalk.gray('[DEBUG]')} ${m}`,
  step: (m) => `${chalk.blue('[STEP]')} ${m}`,
  link: (m) => `${chalk.magenta('[LINK]')} ${m}`,
  verify: (m) => `${chalk.cyanBright('[VERIFY]')} ${m}`,
  pass: (m) => `${chalk.green('[PASS]')} ${m}`,
  fail: (m) => `${chalk.red('[FAIL]')} ${m}`,
  skip: (m) => `${chalk.yellow('[SKIP]')} ${m}`,
  report: (m) => `${chalk.blueBright('[REPORT]')} ${m}`,
  progress: (m) => `${chalk.white('[PROGRESS]')} ${m}`,
  action: (m) => `${chalk.blueBright('[ACTION]')} ${m}`,
  section: (m) => chalk.bold(m),
};

const PLAIN_LABELS: Record<LogMethod, string> = {
  info: '[INFO]', success: '[SUCCESS]', warn: '[WARN]', error: '[ERROR]',
  debug: '[DEBUG]', step: '[STEP]', link: '[LINK]', verify: '[VERIFY]',
  pass: '[PASS]', fail: '[FAIL]', skip: '[SKIP]', report: '[REPORT]',
  progress: '[PROGRESS]', action: '[ACTION]', section: '',
};

function getIstTimestamp(): string {
  const now = new Date();
  const ist = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false,
  }).formatToParts(now);
  const get = (t: string): string => {
    const found = ist.find(p => p.type === t);
    return found?.value || '';
  };
  return `${get('year')}-${get('month')}-${get('day')} ${get('hour')}:${get('minute')}:${get('second')} IST`;
}

function stripAnsi(s: string): string {
  return s.replace(/\x1B\[[0-9;]*m/g, '');
}

export interface LoggingConfig {
  writeToFile: boolean;
  logFile: string;
  timezone: string;
  clearLogBeforeRun: boolean;
  debug: boolean;
}

class Logger {
  private debugEnabled = false;
  private config: LoggingConfig = {
    writeToFile: true,
    logFile: 'logs/test.logs',
    timezone: 'Asia/Kolkata',
    clearLogBeforeRun: true,
    debug: false,
  };
  private initialized = false;

  configure(cfg: Partial<LoggingConfig>): void {
    this.config = { ...this.config, ...cfg };
    this.debugEnabled = this.config.debug;
    if (!this.initialized) {
      this.initialized = true;
      if (this.config.clearLogBeforeRun) {
        const logDir = path.dirname(this.config.logFile);
        if (!fs.existsSync(logDir)) {
          fs.mkdirSync(logDir, { recursive: true });
        }
        fs.writeFileSync(this.config.logFile, '', 'utf-8');
      }
    }
    const logDir = path.dirname(this.config.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  getLogFile(): string {
    return this.config.logFile;
  }

  setDebug(enabled: boolean): void {
    this.debugEnabled = enabled;
  }

  isDebugEnabled(): boolean {
    return this.debugEnabled;
  }

  private log(method: LogMethod, message: string): void {
    if (method === 'debug' && !this.debugEnabled) return;

    const colored = LABEL_COLORS[method](message);
    console.log(colored);

    if (this.config.writeToFile) {
      const ts = getIstTimestamp();
      const plainLabel = PLAIN_LABELS[method];
      const plainMsg = plainLabel ? `${plainLabel} ${message}` : message;
      const stripped = stripAnsi(plainMsg);
      try {
        fs.appendFileSync(this.config.logFile, `[${ts}] ${stripped}\n`, 'utf-8');
      } catch {}
    }
  }

  info(message: string): void { this.log('info', message); }
  success(message: string): void { this.log('success', message); }
  warn(message: string): void { this.log('warn', message); }
  error(message: string, error?: unknown): void {
    this.log('error', message);
    if (error && this.debugEnabled) {
      const detail = error instanceof Error ? (error.stack || error.message || String(error)) : String(error);
      this.log('error', detail);
    }
  }
  debug(message: string): void { this.log('debug', message); }
  step(message: string): void { this.log('step', message); }
  link(message: string): void { this.log('link', message); }
  verify(message: string): void { this.log('verify', message); }
  pass(message: string): void { this.log('pass', message); }
  fail(message: string): void { this.log('fail', message); }
  skip(message: string): void { this.log('skip', message); }
  report(message: string): void { this.log('report', message); }
  progress(message: string): void { this.log('progress', message); }
  action(message: string): void { this.log('action', message); }

  section(title: string): void {
    const line = '='.repeat(70);
    console.log(`\n${chalk.bold(line)}`);
    console.log(chalk.bold(`  ${title}`));
    console.log(`${chalk.bold(line)}\n`);

    if (this.config.writeToFile) {
      const ts = getIstTimestamp();
      try {
        fs.appendFileSync(this.config.logFile, `\n[${ts}] ${line}\n`, 'utf-8');
        fs.appendFileSync(this.config.logFile, `[${ts}]   ${title}\n`, 'utf-8');
        fs.appendFileSync(this.config.logFile, `[${ts}] ${line}\n`, 'utf-8');
      } catch {}
    }
  }

  subsection(title: string): void {
    const line = '-'.repeat(50);
    console.log(`\n${chalk.bold(line)}`);
    console.log(chalk.bold(`  ${title}`));
    console.log(`${chalk.bold(line)}`);

    if (this.config.writeToFile) {
      const ts = getIstTimestamp();
      try {
        fs.appendFileSync(this.config.logFile, `\n[${ts}] ${line}\n`, 'utf-8');
        fs.appendFileSync(this.config.logFile, `[${ts}]   ${title}\n`, 'utf-8');
        fs.appendFileSync(this.config.logFile, `[${ts}] ${line}\n`, 'utf-8');
      } catch {}
    }
  }

  summary(label: string, value: string | number): void {
    this.info(`${label}: ${value}`);
  }
}

export const logger = new Logger();

export const log = (message: string): void => logger.info(message);
export const info = (message: string): void => logger.info(message);
export const debug = (message: string): void => logger.debug(message);
export const warn = (message: string): void => logger.warn(message);
export const error = (message: string, err?: unknown): void => logger.error(message, err);
export const success = (message: string): void => logger.success(message);
export const step = (message: string): void => logger.step(message);
export const link = (message: string): void => logger.link(message);
export const verify = (message: string): void => logger.verify(message);
export const pass = (message: string): void => logger.pass(message);
export const fail = (message: string): void => logger.fail(message);
export const skip = (message: string): void => logger.skip(message);
export const report = (message: string): void => logger.report(message);
export const progress = (message: string): void => logger.progress(message);
export const action = (message: string): void => logger.action(message);
export const section = (title: string): void => logger.section(title);
export const subsection = (title: string): void => logger.subsection(title);
export const summary = (label: string, value: string | number): void => logger.summary(label, value);
export const setDebugEnabled = (enabled: boolean): void => logger.setDebug(enabled);
export const isDebugEnabled = (): boolean => logger.isDebugEnabled();

export const configureLogger = (cfg: Partial<LoggingConfig>): void => logger.configure(cfg);
export const getLogFile = (): string => logger.getLogFile();
