import fs from 'fs';
import path from 'path';
import { createRunManager, archivePreviousRun, ensureRunDirs } from '../utils/runManager';

function removeDir(dir: string): void {
  if (!fs.existsSync(dir)) return;
  console.log(`[cleanRun] Removing ${dir}`);
  fs.rmSync(dir, { recursive: true, force: true });
}

function cleanRun(): void {
  const configPath = path.resolve(process.cwd(), 'config', 'test-input.json');
  let archivePrevious = true;

  try {
    const raw = fs.readFileSync(configPath, 'utf-8');
    const config = JSON.parse(raw);
    if (config.runSettings?.archivePreviousRun === false) {
      archivePrevious = false;
    }
  } catch {
    console.log('[cleanRun] Could not read config, using defaults');
  }

  const context = createRunManager();

  if (archivePrevious) {
    console.log('[cleanRun] Archiving previous run...');
    archivePreviousRun();
  }

  removeDir(context.paths.root);
  removeDir(context.tempDir);

  removeDir(path.resolve(process.cwd(), 'generated'));
  removeDir(path.resolve(process.cwd(), 'pages', 'GeneratedPages'));
  removeDir(path.resolve(process.cwd(), 'tests', 'generated'));
  removeDir(path.resolve(process.cwd(), 'tests', 'generated-flows'));

  removeDir(path.resolve(process.cwd(), 'allure-results'));
  removeDir(path.resolve(process.cwd(), 'allure-report'));
  removeDir(path.resolve(process.cwd(), 'playwright-report'));
  removeDir(path.resolve(process.cwd(), 'test-results'));

  console.log('[cleanRun] Creating fresh directories...');
  ensureRunDirs(context);

  console.log(`[cleanRun] Run ID: ${context.runId}`);
  console.log(`[cleanRun] Run directory: ${context.paths.root}`);
  console.log('[cleanRun] Clean run setup complete.');
}

cleanRun();
