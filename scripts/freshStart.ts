import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();

const dirsToDelete: string[] = [
  'runs',
  'temp',
  'generated',
  'reports',
  'allure-results',
  'allure-report',
  'playwright-report',
  'test-results',
  'screenshots',
  path.join('pages', 'GeneratedPages'),
  path.join('tests', 'generated'),
  path.join('tests', 'generated-flows'),
  path.join('tests', 'csv-generated'),
];

const dirsToCreate: string[] = [
  'runs',
  'temp',
  'generated',
  'reports',
  'screenshots',
  path.join('pages', 'GeneratedPages'),
  path.join('tests', 'generated'),
];

const protectedExactPaths: string[] = [
  'config',
  'config/test-input.json',
  'package.json',
  'playwright.config.ts',
  'tsconfig.json',
  'node_modules',
  '.git',
  '.env',
  path.join('pages', 'BasePage.ts'),
];

function isProtected(absolutePath: string): boolean {
  const normalized = path.resolve(absolutePath);
  if (normalized === ROOT) return true;
  for (const p of protectedExactPaths) {
    const protectedAbs = path.resolve(ROOT, p);
    if (normalized === protectedAbs) return true;
  }
  return false;
}

function removeDir(dirPath: string): void {
  const absolutePath = path.resolve(ROOT, dirPath);
  if (!fs.existsSync(absolutePath)) {
    console.log(`[freshStart] Skipping ${dirPath} - does not exist`);
    return;
  }
  if (isProtected(absolutePath)) {
    console.error(`[freshStart] ERROR: Refusing to delete protected path: ${dirPath}`);
    return;
  }
  console.log(`[freshStart] Deleting ${dirPath}`);
  fs.rmSync(absolutePath, { recursive: true, force: true });
}

function createDir(dirPath: string): void {
  const absolutePath = path.resolve(ROOT, dirPath);
  if (fs.existsSync(absolutePath)) return;
  console.log(`[freshStart] Creating ${dirPath}`);
  fs.mkdirSync(absolutePath, { recursive: true });
}

function freshStart(): void {
  console.log('='.repeat(70));
  console.log('  Framework Cleanup');
  console.log('='.repeat(70));

  for (const dir of dirsToDelete) {
    removeDir(dir);
  }

  for (const dir of dirsToCreate) {
    createDir(dir);
  }

  console.log('');
  console.log('Framework cleanup completed.');
  console.log('');
  console.log('You can now update:');
  console.log('  config/test-input.json');
  console.log('');
  console.log('Next commands:');
  console.log('  npm run ai:smoke');
  console.log('  npm run ai:sanity');
  console.log('  npm run ai:regression');
  console.log('='.repeat(70));
}

freshStart();
