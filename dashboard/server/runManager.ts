import { spawn, ChildProcess } from 'child_process';
import fs from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';
import { fileURLToPath } from 'url';
import { createServerRoot } from './paths.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..', '..');

export interface RunRequest {
  url: string;
  mode: 'headed' | 'headless';
  browsers: string[];
  suite: 'smoke' | 'sanity' | 'regression';
}

export interface RunState {
  id: string;
  request: RunRequest;
  status: 'pending' | 'running' | 'done' | 'error';
  process: ChildProcess | null;
  listeners: Set<(event: ProgressEvent) => void>;
  startTime: number;
  endTime?: number;
  summary?: RunSummary;
  error?: string;
}

export interface RunSummary {
  total: number;
  passed: number;
  failed: number;
  skipped: number;
  flaky: number;
  durationMs: number;
  browsers: string[];
  suite: string;
  url: string;
}

export type ProgressEvent =
  | { phase: 'exploring'; url: string; domain: string; message?: string }
  | { phase: 'generating'; suite: string; domain: string; testsFound?: number; message?: string }
  | { phase: 'running'; total: number; completed: number; passed: number; failed: number; suite: string; browsers: string[]; message?: string }
  | { phase: 'done'; summary: RunSummary; message?: string }
  | { phase: 'error'; message: string; log?: string };

interface DebugInfo {
  runId: string;
  command: string;
  args: string[];
  cwd: string;
  startTime: string;
  endTime?: string;
  exitCode?: number;
  events: Array<{ timestamp: string; phase: string; data: any }>;
  summaryReading: {
    attempted: boolean;
    path?: string;
    fileExists?: boolean;
    rawContent?: string;
    parsedData?: any;
    error?: string;
  };
  frameworkEmittedDone: boolean;
  frameworkDoneSummary?: RunSummary;
}

const runs = new Map<string, RunState>();
let activeRun: string | null = null;

export function getActiveRunId(): string | null {
  return activeRun;
}

export function getRun(id: string): RunState | undefined {
  return runs.get(id);
}

export function createRun(request: RunRequest): string {
  if (activeRun) {
    throw new Error('A run is already in progress');
  }

  const id = randomUUID().slice(0, 8);
  const state: RunState = {
    id,
    request,
    status: 'pending',
    process: null,
    listeners: new Set(),
    startTime: Date.now(),
  };

  runs.set(id, state);
  activeRun = id;
  return id;
}

export function subscribeToRun(id: string, callback: (event: ProgressEvent) => void): () => void {
  const state = runs.get(id);
  if (!state) throw new Error(`Run ${id} not found`);

  state.listeners.add(callback);
  return () => state.listeners.delete(callback);
}

function emit(id: string, event: ProgressEvent): void {
  const state = runs.get(id);
  if (!state) return;
  const stamped = { ...event, timestamp: Date.now() } as ProgressEvent & { timestamp: number };
  state.listeners.forEach(cb => cb(stamped));
}

function getRunDir(runId: string): string {
  const reportDir = createServerRoot();
  const runDir = path.join(reportDir, runId);
  fs.mkdirSync(runDir, { recursive: true });
  return runDir;
}

function buildRunMarkdown(runId: string, request: RunRequest, startTime: string, endTime: string, phaseOutput: Map<string, string[]>, rawOutput: string[], debugInfo: DebugInfo, state: RunState): string {
  const lines: string[] = [];

  lines.push(`# Run Log: ${runId}`);
  lines.push('');

  lines.push('## Configuration');
  lines.push('');
  lines.push(`- **Suite:** ${request.suite}`);
  lines.push(`- **URL:** ${request.url}`);
  lines.push(`- **Browsers:** ${request.browsers.join(', ')}`);
  lines.push(`- **Mode:** ${request.mode}`);
  lines.push(`- **Started:** ${startTime}`);
  lines.push(`- **Ended:** ${endTime}`);
  if (state.endTime && state.startTime) {
    const durationMs = state.endTime - state.startTime;
    const seconds = Math.floor(durationMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    lines.push(`- **Duration:** ${minutes > 0 ? `${minutes}m ${secs}s` : `${secs}s`}`);
  }
  lines.push('');

  const phaseOrder = ['exploring', 'generating', 'running', 'done', 'error'];
  for (const phase of phaseOrder) {
    const output = phaseOutput.get(phase);
    if (output && output.length > 0) {
      const title = phase.charAt(0).toUpperCase() + phase.slice(1);
      lines.push(`## ${title}`);
      lines.push('');
      lines.push('```');
      lines.push(output.join('\n'));
      lines.push('```');
      lines.push('');
    }
  }

  if (rawOutput.length > 0) {
    lines.push('## Raw Output');
    lines.push('');
    lines.push('```');
    lines.push(rawOutput.join('\n'));
    lines.push('```');
    lines.push('');
  }

  return lines.join('\n');
}

export function startRun(id: string): void {
  const state = runs.get(id);
  if (!state) throw new Error(`Run ${id} not found`);

  state.status = 'running';
  state.startTime = Date.now();

  const { url, mode, browsers, suite } = state.request;
  const args = [
    'tsx', 'src/core/runner/runFramework.ts',
    `--suite=${suite}`,
    `--urls=${url}`,
    `--mode=${mode}`,
    `--browsers=${browsers.join(',')}`,
  ];

  const child = spawn('npx', args, {
    cwd: REPO_ROOT,
    shell: true,
    env: { ...process.env },
    stdio: ['pipe', 'pipe', 'pipe'],
  });

  state.process = child;

  const runDir = getRunDir(id);
  const runLogPath = path.join(runDir, 'run-log.md');
  const debugPath = path.join(runDir, 'run-debug.json');

  const debugInfo: DebugInfo = {
    runId: id,
    command: 'npx',
    args,
    cwd: REPO_ROOT,
    startTime: new Date().toISOString(),
    events: [],
    summaryReading: { attempted: false },
    frameworkEmittedDone: false,
  };

  const phaseOutput = new Map<string, string[]>();
  const rawOutput: string[] = [];
  let buffer = '';

  const appendPhase = (phase: string, line: string) => {
    if (!phaseOutput.has(phase)) phaseOutput.set(phase, []);
    phaseOutput.get(phase)!.push(line);
  };

  const processLine = (line: string) => {
    const trimmed = line.trim();
    if (!trimmed) return;

    rawOutput.push(trimmed);

    const progressMatch = trimmed.match(/^__PROGRESS__(.+)$/);
    if (progressMatch) {
      try {
        const event = JSON.parse(progressMatch[1]) as ProgressEvent;

        debugInfo.events.push({
          timestamp: new Date().toISOString(),
          phase: event.phase,
          data: event,
        });

        if (event.phase === 'done') {
          state.status = 'done';
          state.summary = event.summary;
          state.endTime = Date.now();
          debugInfo.endTime = new Date().toISOString();
          debugInfo.frameworkEmittedDone = true;
          debugInfo.frameworkDoneSummary = event.summary;
          activeRun = null;
          copyReports(id);
          appendPhase('done', `Passed: ${event.summary.passed}, Failed: ${event.summary.failed}, Skipped: ${event.summary.skipped}`);
        } else if (event.phase === 'error') {
          state.status = 'error';
          state.error = event.message;
          state.endTime = Date.now();
          debugInfo.endTime = new Date().toISOString();
          activeRun = null;
          appendPhase('error', event.message);
        }
        emit(id, event);
      } catch (e: any) {
        debugInfo.events.push({
          timestamp: new Date().toISOString(),
          phase: 'parse_error',
          data: { raw: progressMatch[1], error: e.message },
        });
      }
      return;
    }

    // Categorize non-progress output by current state
    let phase = 'running';
    if (state.status === 'pending' || state.status === 'running') {
      // Heuristic: exploring lines mention domain/URL, generating mention test files
      const lower = trimmed.toLowerCase();
      if (lower.includes('exploring') || lower.includes('domain') || lower.includes('sitemap')) {
        phase = 'exploring';
      } else if (lower.includes('generat') || lower.includes('test case') || lower.includes('pom')) {
        phase = 'generating';
      }
    }
    appendPhase(phase, trimmed);

    const currentPhase = state.status === 'running' ? 'running' : 'generating';
    emit(id, { phase: currentPhase, total: 0, completed: 0, passed: 0, failed: 0, suite, browsers, message: trimmed } as any);
  };

  child.stdout?.on('data', (data: Buffer) => {
    const text = data.toString('utf-8');
    buffer += text;
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';
    lines.forEach(processLine);
  });

  child.stderr?.on('data', (data: Buffer) => {
    const text = data.toString('utf-8');
    buffer += text;
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';
    lines.forEach(processLine);
  });

  child.on('close', (code) => {
    if (buffer.trim()) processLine(buffer);

    debugInfo.exitCode = code ?? undefined;
    debugInfo.endTime = new Date().toISOString();

    if (state.status === 'running') {
      state.status = code === 0 ? 'done' : 'error';
      state.endTime = Date.now();
      activeRun = null;

      if (code === 0) {
        const summaryResult = readTestSummaryWithDebug(id);
        debugInfo.summaryReading = summaryResult.debug;

        state.summary = {
          total: summaryResult.passed + summaryResult.failed + summaryResult.skipped,
          passed: summaryResult.passed,
          failed: summaryResult.failed,
          skipped: summaryResult.skipped,
          flaky: 0,
          durationMs: state.endTime - state.startTime,
          browsers,
          suite,
          url,
        };
        appendPhase('done', `Passed: ${state.summary.passed}, Failed: ${state.summary.failed}, Skipped: ${state.summary.skipped}`);
        emit(id, { phase: 'done', summary: state.summary });
        copyReports(id);
      } else {
        const errorMsg = `Process exited with code ${code}`;
        state.error = errorMsg;
        appendPhase('error', errorMsg);
        emit(id, { phase: 'error', message: errorMsg, log: rawOutput.join('\n') });
      }
    }

    // Write run-log.md
    const startTimeStr = debugInfo.startTime;
    const endTimeStr = debugInfo.endTime || new Date().toISOString();
    const markdown = buildRunMarkdown(id, state.request, startTimeStr, endTimeStr, phaseOutput, rawOutput, debugInfo, state);
    fs.writeFileSync(runLogPath, markdown, 'utf-8');

    // Write run-debug.json
    fs.writeFileSync(debugPath, JSON.stringify(debugInfo, null, 2), 'utf-8');

    state.process = null;
  });

  child.on('error', (err) => {
    state.status = 'error';
    state.error = err.message;
    state.endTime = Date.now();
    activeRun = null;
    state.process = null;
    debugInfo.endTime = new Date().toISOString();
    debugInfo.events.push({
      timestamp: new Date().toISOString(),
      phase: 'process_error',
      data: { error: err.message },
    });

    appendPhase('error', err.message);

    // Write run-log.md even on error
    const markdown = buildRunMarkdown(id, state.request, debugInfo.startTime, debugInfo.endTime, phaseOutput, rawOutput, debugInfo, state);
    fs.writeFileSync(runLogPath, markdown, 'utf-8');

    fs.writeFileSync(debugPath, JSON.stringify(debugInfo, null, 2), 'utf-8');
    emit(id, { phase: 'error', message: err.message });
  });
}

function readTestSummaryWithDebug(runId: string): {
  passed: number; failed: number; skipped: number;
  debug: DebugInfo['summaryReading'];
} {
  const summaryPath = path.resolve(REPO_ROOT, 'test-results', 'test-summary.json');
  const debug: DebugInfo['summaryReading'] = {
    attempted: true,
    path: summaryPath,
  };

  try {
    if (!fs.existsSync(summaryPath)) {
      debug.fileExists = false;
      debug.error = 'File does not exist';
      return { passed: 0, failed: 0, skipped: 0, debug };
    }

    debug.fileExists = true;
    const raw = fs.readFileSync(summaryPath, 'utf-8');
    debug.rawContent = raw.substring(0, 2000);

    if (!raw.trim()) {
      debug.error = 'File is empty';
      return { passed: 0, failed: 0, skipped: 0, debug };
    }

    const data = JSON.parse(raw);
    debug.parsedData = data;

    return {
      passed: data.passed || 0,
      failed: data.failed || 0,
      skipped: data.skipped || 0,
      debug,
    };
  } catch (e: any) {
    debug.error = e.message;
    return { passed: 0, failed: 0, skipped: 0, debug };
  }
}

function copyReports(runId: string): void {
  const reportDir = createServerRoot();
  const runReportDir = path.join(reportDir, runId);
  fs.mkdirSync(runReportDir, { recursive: true });

  const allureReportSrc = path.resolve(REPO_ROOT, 'allure-report');
  const allureReportDest = path.join(runReportDir, 'allure-report');
  copyDirIfExists(allureReportSrc, allureReportDest);

  const pwReportSrc = path.resolve(REPO_ROOT, 'playwright-report');
  const pwReportDest = path.join(runReportDir, 'playwright-report');
  copyDirIfExists(pwReportSrc, pwReportDest);

  const allureResultsSrc = path.resolve(REPO_ROOT, 'allure-results');
  const allureResultsDest = path.join(runReportDir, 'allure-results');
  copyDirIfExists(allureResultsSrc, allureResultsDest);
}

function copyDirIfExists(src: string, dest: string): void {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });

  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirIfExists(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

export function getReportPath(runId: string, type: 'allure' | 'playwright'): string | null {
  const reportDir = createServerRoot();
  const runReportDir = path.join(reportDir, runId);

  if (type === 'allure') {
    const singleFile = path.join(runReportDir, 'allure-report', 'index.html');
    if (fs.existsSync(singleFile)) return singleFile;

    const allureResults = path.join(runReportDir, 'allure-results');
    if (fs.existsSync(allureResults)) return allureResults;
  }

  if (type === 'playwright') {
    const pwReport = path.join(runReportDir, 'playwright-report');
    if (fs.existsSync(pwReport)) return pwReport;
  }

  return null;
}

export function getLogsPath(runId: string): string | null {
  const reportDir = createServerRoot();
  const runReportDir = path.join(reportDir, runId);
  const logPath = path.join(runReportDir, 'run-log.md');
  if (!fs.existsSync(logPath)) return null;
  if (fs.statSync(logPath).size === 0) return null;
  return logPath;
}

export function getDebugPath(runId: string): string | null {
  const reportDir = createServerRoot();
  const runReportDir = path.join(reportDir, runId);
  const debugPath = path.join(runReportDir, 'run-debug.json');
  if (!fs.existsSync(debugPath)) return null;
  if (fs.statSync(debugPath).size === 0) return null;
  return debugPath;
}
