import { spawn, SpawnOptions } from 'child_process';
import path from 'path';
import fs from 'fs';
import { logger } from '../utils/logger';
import { getLogFilePath } from '../utils/pathUtils';

export interface RunCommandResult {
  command: string;
  exitCode: number | null;
  signal: NodeJS.Signals | null;
  stdout: string;
  stderr: string;
  durationMs: number;
}

export interface RunCommandOptions {
  cwd?: string;
  env?: Record<string, string>;
  timeoutMs?: number;
  label?: string;
  heartbeatLabel?: string;
  logFile?: string;
}

function formatDuration(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  if (minutes > 0) {
    return `${minutes}m ${seconds}s`;
  }
  return `${seconds}s`;
}

function appendToLogFile(filePath: string, text: string): void {
  try {
    fs.appendFileSync(filePath, text, 'utf-8');
  } catch {
    // best effort
  }
}

export function runCommand(
  command: string,
  args: string[],
  options: RunCommandOptions = {}
): Promise<RunCommandResult> {
  return new Promise((resolve) => {
    const startTime = Date.now();
    const label = options.label || command;
    const logFile = options.logFile || getLogFilePath();
    const displayCommand = `${command} ${args.join(' ')}`;

    logger.step(`Running command: ${displayCommand}`);
    appendToLogFile(logFile, `[STEP] Running command: ${displayCommand}\n`);

    const spawnOptions: SpawnOptions = {
      cwd: options.cwd || process.cwd(),
      env: { ...process.env, ...options.env },
      stdio: ['pipe', 'pipe', 'pipe'],
      shell: true,
      windowsHide: true,
    };

    const child = spawn(`${command} ${args.join(' ')}`, [], spawnOptions);

    let stdout = '';
    let stderr = '';

    const stdoutStream = fs.createWriteStream(logFile, { flags: 'a' });
    const stderrStream = fs.createWriteStream(logFile, { flags: 'a' });

    child.stdout?.on('data', (data: Buffer) => {
      const text = data.toString('utf-8');
      stdout += text;
      process.stdout.write(text);
      stdoutStream.write(text);
    });

    child.stderr?.on('data', (data: Buffer) => {
      const text = data.toString('utf-8');
      stderr += text;
      process.stderr.write(text);
      stderrStream.write(text);
    });

    let heartbeatInterval: ReturnType<typeof setInterval> | null = null;
    let timeoutHandle: ReturnType<typeof setTimeout> | null = null;
    let finished = false;

    function startHeartbeat(): void {
      const start = Date.now();
      heartbeatInterval = setInterval(() => {
        if (finished) return;
        const elapsed = Date.now() - start;
        const elapsedFormatted = formatDuration(elapsed);
        const hbLabel = options.heartbeatLabel || 'Test execution';
        const msg = `${hbLabel} still running... elapsed ${elapsedFormatted}`;
        logger.progress(msg);
        appendToLogFile(logFile, `[PROGRESS] ${msg}\n`);
      }, 30000);
    }

    function stopHeartbeat(): void {
      if (heartbeatInterval) {
        clearInterval(heartbeatInterval);
        heartbeatInterval = null;
      }
    }

    if (options.timeoutMs && options.timeoutMs > 0) {
      timeoutHandle = setTimeout(() => {
        if (finished) return;
        finished = true;
        stopHeartbeat();
        const elapsed = Date.now() - startTime;
        const timeoutMinutes = Math.floor(options.timeoutMs! / 60000);
        const msg = `Command timed out after ${timeoutMinutes} minutes`;
        logger.error(msg);
        appendToLogFile(logFile, `[ERROR] ${msg}\n`);
        child.kill('SIGTERM');
        setTimeout(() => {
          if (!child.killed) {
            child.kill('SIGKILL');
          }
        }, 5000);
        resolve({
          command: displayCommand,
          exitCode: null,
          signal: 'SIGTERM' as NodeJS.Signals,
          stdout,
          stderr,
          durationMs: elapsed,
        });
      }, options.timeoutMs);
    }

    startHeartbeat();

    child.on('error', (err) => {
      if (finished) return;
      finished = true;
      stopHeartbeat();
      if (timeoutHandle) clearTimeout(timeoutHandle);
      stdoutStream.end();
      stderrStream.end();
      const elapsed = Date.now() - startTime;
      const msg = `Command failed to start: ${err.message}`;
      logger.error(msg);
      appendToLogFile(logFile, `[ERROR] ${msg}\n`);
      resolve({
        command: displayCommand,
        exitCode: null,
        signal: null,
        stdout,
        stderr,
        durationMs: elapsed,
      });
    });

    child.on('close', (code, signal) => {
      if (finished) return;
      finished = true;
      stopHeartbeat();
      if (timeoutHandle) clearTimeout(timeoutHandle);
      stdoutStream.end();
      stderrStream.end();
      const elapsed = Date.now() - startTime;

      if (signal) {
        const msg = `Command was interrupted by signal: ${signal}`;
        logger.error(msg);
        appendToLogFile(logFile, `[ERROR] ${msg}\n`);
      } else if (code === 0) {
        const msg = `Command completed: ${label}`;
        logger.pass(msg);
        appendToLogFile(logFile, `[PASS] ${msg}\n`);
      } else {
        const msg = `Command failed with exit code: ${code}`;
        logger.fail(msg);
        appendToLogFile(logFile, `[FAIL] ${msg}\n`);
      }

      resolve({
        command: displayCommand,
        exitCode: code,
        signal: signal as NodeJS.Signals | null,
        stdout,
        stderr,
        durationMs: elapsed,
      });
    });
  });
}
