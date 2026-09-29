#!/usr/bin/env node
/**
 * Global bin launcher for adhoc-audit.
 *
 * npm link points the global `adhoc-audit` command at this file. Because it is
 * plain JavaScript, Node can execute it directly from any directory; it then
 * bundles the TypeScript CLI on the fly with the esbuild that ships in this
 * repo's own node_modules and executes the bundle with plain Node — so the
 * audit code (and Playwright itself) never runs through the tsx loader.
 *
 * Why not `tsx cli.ts`? tsx 3.x (esbuild keepNames) injects `__name(...)`
 * helpers into Playwright's own injected browser scripts; Playwright then
 * stringifies and evals those scripts inside the page, which crashes with
 * "ReferenceError: __name is not defined" (the framework documented the same
 * class of bug in src/core/explorer/siteAnalyzer.ts). Bundling sidesteps the
 * loader entirely.
 *
 * Path discipline: esbuild + entry file resolve relative to this file's
 * location (package root) — never process.cwd() — so the command works from
 * any directory once the repo is cloned + `npm install`ed + `npm link`ed.
 *
 * Process discipline: spawnSync with an args array — no shell string
 * interpolation anywhere.
 */
import fs from 'fs';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawnSync } from 'child_process';
import { createRequire } from 'module';

const PKG_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const CLI_TS = path.join(PKG_ROOT, 'src', 'adhoc', 'cli.ts');

const require = createRequire(import.meta.url);
const esbuildPath = path.join(PKG_ROOT, 'node_modules', 'esbuild', 'lib', 'main.js');

if (!fs.existsSync(CLI_TS)) {
  console.error('adhoc-audit: framework sources not found under ' + PKG_ROOT);
  console.error('Clone the yt-tc repo and run `npm install` inside it before using `npm link`.');
  process.exit(1);
}

let esbuild;
try {
  esbuild = require(esbuildPath);
} catch (err) {
  console.error('adhoc-audit: esbuild not found in the framework installation (' + esbuildPath + ').');
  console.error('Run `npm install` inside the repo, then `npm link`.');
  process.exit(1);
}

async function main() {
  const bundleTmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'adhoc-audit-'));
  const outfile = path.join(bundleTmpDir, 'cli.cjs');

  try {
    await esbuild.build({
      entryPoints: [CLI_TS],
      outfile,
      bundle: true,
      platform: 'node',
      format: 'cjs',
      target: 'node18',
      sourcemap: 'inline',
      packages: 'external', // keep node_modules (playwright, @axe-core, chalk) external — resolved from PKG_ROOT at runtime
      logLevel: 'silent',
      absWorkingDir: PKG_ROOT,
    });
  } catch (err) {
    console.error('adhoc-audit: failed to build CLI bundle:', err?.message || err);
    process.exit(1);
  }

  // Module resolution from the bundle must find PKG_ROOT/node_modules. The bundle
  // lives in a tmp dir, so NODE_PATH (honored by CJS resolution for bare
  // specifiers) points Node at the framework's own node_modules. ADHOC_PKG_ROOT
  // tells the bundled CLI where the package root is (esbuild rewrites __dirname
  // to the temp bundle location, so it cannot be trusted there).
  const env = { ...process.env, ADHOC_PKG_ROOT: PKG_ROOT };
  const nm = path.join(PKG_ROOT, 'node_modules');
  if (!String(env.NODE_PATH || '').split(path.delimiter).includes(nm)) {
    env.NODE_PATH = env.NODE_PATH ? `${env.NODE_PATH}${path.delimiter}${nm}` : nm;
  }

  const result = spawnSync(process.execPath, [outfile, '--run-adhoc-cli', ...process.argv.slice(2)], {
    stdio: 'inherit',
    env,
    windowsHide: true,
    shell: false,
  });

  // Best-effort cleanup of the temp bundle.
  try {
    fs.rmSync(bundleTmpDir, { recursive: true, force: true });
  } catch {
    // temp dir cleanup is best-effort
  }

  process.exit(result.status ?? 1);
}

main().catch(err => {
  console.error('adhoc-audit: launcher failed:', err?.message || err);
  process.exit(1);
});
