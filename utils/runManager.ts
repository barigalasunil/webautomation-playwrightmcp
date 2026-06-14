import path from 'path';
import fs from 'fs';

export interface RunPaths {
  root: string;
  allureResults: string;
  allureReport: string;
  playwrightReport: string;
  testResults: string;
}

export interface RunContext {
  runId: string;
  timestamp: string;
  paths: RunPaths;
  tempDir: string;
}

export interface AppPaths {
  root: string;
  pages: string;
  tests: string;
  screenshots: string;
  reports: string;
  siteMapFile: string;
}

export function createRunManager(config?: {
  runsDir?: string;
  tempDir?: string;
}): RunContext {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const runId = `run-${timestamp}`;
  const rootDir = config?.runsDir ?? path.resolve(process.cwd(), 'runs', 'latest');
  const tempDir = config?.tempDir ?? path.resolve(process.cwd(), 'temp', 'generated');

  const paths: RunPaths = {
    root: rootDir,
    allureResults: path.join(rootDir, 'allure-results'),
    allureReport: path.join(rootDir, 'allure-report'),
    playwrightReport: path.join(rootDir, 'playwright-report'),
    testResults: path.join(rootDir, 'test-results'),
  };

  return { runId, timestamp, paths, tempDir };
}

export function createAppPaths(runDir: string, appName: string): AppPaths {
  const appRoot = path.join(runDir, appName);
  return {
    root: appRoot,
    pages: path.join(appRoot, 'pages'),
    tests: path.join(appRoot, 'tests'),
    screenshots: path.join(appRoot, 'screenshots'),
    reports: path.join(appRoot, 'reports'),
    siteMapFile: path.join(appRoot, 'site-map.json'),
  };
}

export function ensureRunDirs(context: RunContext): void {
  const dirs = [
    context.paths.root,
    context.paths.allureResults,
    context.paths.allureReport,
    context.paths.playwrightReport,
    context.paths.testResults,
    context.tempDir,
  ];
  for (const dir of dirs) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

export function ensureAppDirs(appPaths: AppPaths): void {
  const dirs = [
    appPaths.root,
    appPaths.pages,
    appPaths.tests,
    appPaths.screenshots,
    appPaths.reports,
  ];
  for (const dir of dirs) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

export function archivePreviousRun(archiveDir?: string): void {
  const runsLatest = path.resolve(process.cwd(), 'runs', 'latest');
  if (!fs.existsSync(runsLatest)) return;
  if (fs.readdirSync(runsLatest).length === 0) {
    return;
  }
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const archiveRoot = archiveDir ?? path.resolve(process.cwd(), 'runs', 'archive');
  const dest = path.join(archiveRoot, timestamp);
  fs.mkdirSync(dest, { recursive: true });
  copyRecursiveSync(runsLatest, dest);
  console.log(`[runManager] Archived previous run to ${dest}`);
}

function copyRecursiveSync(src: string, dest: string): void {
  if (!fs.existsSync(src)) return;
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyRecursiveSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
