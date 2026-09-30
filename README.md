# yt-tc — AI-Powered Playwright Test Framework

> Automatically explore any website, generate Page Objects and tagged test suites, execute them across Chromium, Firefox, and WebKit in parallel, and report results through Allure, Playwright HTML, and the global `adhoc-audit` CLI.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=flat&logo=node.js&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat&logo=playwright&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-blue)

---

## Overview

`yt-tc` is an end-to-end test pipeline that turns a target URL into a full browser test suite with zero manual authoring:

1. **Explore** — Crawls the target site and analyzes headings, links, buttons, inputs, forms, tables, menus, cards, dropdowns, and text blocks.
2. **Generate** — Discovers user journeys, ranks clickables, and produces Page Object Models (POMs) plus tagged Playwright specs.
3. **Execute** — Validates the generated TypeScript and runs the suite across Chromium, Firefox, and WebKit with CPU-aware parallel workers.
4. **Report** — Produces Allure, Playwright HTML, and list reports, with screenshots, videos, and traces retained on failure. All output for a run is written into one folder: `test-reports_<datetime>_<url-name>/`.

The generation logic itself is **rule-based and makes no AI/LLM calls at runtime** — "AI-powered" refers to the AI coding assistants (via MCP servers) used to author and maintain the framework and its generated assets. Runs are launched from the CLI.

## Key Features

- **Site Exploration** — Crawls up to `maxPagesToExplore` pages (default 50, depth 3) and builds a structured site map for analysis.
- **Journey Discovery** — Ranks clickable elements, filters unsafe actions, and maps smoke/sanity/regression journeys.
- **Page Object Generation** — Self-contained POMs written to `pages/generated/<domain>/`.
- **Test Generation** — Specs tagged `@smoke`, `@sanity`, and `@regression` written to `tests/generated/<domain>/`.
- **Multi-Browser Execution** — Chromium, Firefox, and WebKit projects; headed/headless per browser via `CHROMIUM_MODE` / `FIREFOX_MODE` / `WEBKIT_MODE` env vars.
- **Parallel Workers** — Auto-derived from CPU count (capped at 4); `WORKERS` env var or `--workers` CLI flag overrides.
- **Type-Safe Generation** — Automatic `tsc --noEmit` validation gate before any Playwright run.
- **Rich Reporting** — Allure, Playwright HTML, list reporter, plus custom `frameworkReporter` and `dashboardProgressReporter`; single-file Allure generation and ZIP packaging.
- **CLI Overrides** — `--suite`, `--browsers`, `--urls`, `--mode`, `--runMode`, `--workers`, `--debug`.
- **Ad-hoc Audit** — global `adhoc-audit` CLI (`npm link` once) with HighSmoke/Smoke/E2E presets, premium self-contained HTML/PDF reports, axe-core a11y audit, broken-link crawl, 10s mobile chaos pass behind an explicit-risk gate, and folding of the real framework run's results.
- **CI Ready** — GitHub Actions workflow runs the smoke suite on push/PR and uploads reports as artifacts.

## Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Language** | TypeScript (strict mode, ESM, ES2022 target) |
| **Runtime** | Node.js 18+ (LTS) |
| **Test Automation** | Playwright / @playwright/test |
| **Orchestration** | `tsx`-based pipeline scripts |
| **Reporting** | Allure (`allure-playwright` + `allure-commandline`), Playwright HTML |
| **CI/CD** | GitHub Actions |
| **Authoring** | MCP servers (Playwright / Playwright test / GitHub Copilot) |

## Project Structure

```
yt-tc/
├── src/
│   ├── config/                 # Config loading/validation + test-input.json
│   │   └── test-input.json     # Main config: URL, suite, browsers, timeouts
│   ├── adhoc/                  # adhoc-audit global CLI (HighSmoke/Smoke/E2E presets,
│   │   │                       #   self-contained premium report, E2E chaos + safety gate)
│   └── core/
│       ├── explorer/           # exploreSite, siteAnalyzer, journeyDiscovery, clickableRanker
│       ├── generator/          # pomGenerator, testCaseGenerator, testGenerator, selectorBuilder
│       ├── runner/             # runFramework (orchestrator), cliArgs, browserManager, runManager
│       ├── reporting/          # frameworkReporter, dashboardProgressReporter, allureNarrator
│       └── utils/              # logger, fileUtils, pathUtils, environmentInfo, dashboardProgress
├── pages/
│   ├── BasePage.ts             # Base page object (goto, click, fill, selectDropdown, ...)
│   ├── generated/              # Auto-generated POMs per domain (gitignored)
│   └── GeneratedPages/         # Older-style generated POMs (app1/app2, legacy)
├── tests/
│   ├── examples/               # Hand-written smoke/sanity/regression example specs
│   ├── generated/              # Auto-generated specs per domain (gitignored)
│   └── seed.spec.ts            # Example scratch spec
├── scripts/                    # Legacy generators (generateTests, generatePOMs, ...)
├── specs/                      # Directory for test plans
├── input/user-flow.txt         # Sample user-flow input
├── generated/                  # Exploration output (siteMap-*.json, journeys.json)
├── runs/                       # Per-run artifacts (screenshots, logs)
├── reports/                    # Packaged run reports
├── playwright.config.ts        # Playwright configuration (grep TEST_TAG, reporters, projects)
├── tsconfig.json
├── package.json                # NPM scripts
└── .github/
    ├── workflows/              # playwright.yml CI + copilot-setup-steps.yml
    └── agents/                 # GitHub agent definitions (planner, generator, healer)
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later (LTS recommended)
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/barigalasunil/webautomation-playwrightmcp.git
cd webautomation-playwrightmcp

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install chromium firefox webkit
```

> **Note:** `.npmrc` restricts post-install scripts (only specific `esbuild` versions are allowed). If `npm install` fails on another package's post-install script, allow it via your `allow-scripts` configuration.

### Environment Configuration

Point the framework at your target site by editing `src/config/test-input.json` (default: `https://www.myvi.in/`):

```json
{
  "projectName": "ai-playwright-framework",
  "urls": [{ "url": "https://www.myvi.in/" }],
  "exploration": { "headless": true, "depth": 3, "maxPagesToExplore": 50 },
  "execution": {
    "suite": "smoke",
    "browsers": ["chromium", "firefox", "webkit"],
    "browserMode": {
      "chromium": "headed",
      "firefox": "headless",
      "webkit": "headless"
    },
    "runMode": "parallel-by-cpu",
    "workers": "auto",
    "maxWorkers": 4
  },
  "reporting": {
    "allureMode": "single-file",
    "generateAllure": true,
    "generatePlaywrightHtml": true
  }
}
```

## Usage & Scripts

Run the full pipeline (explore → generate → execute → report) for a suite:

```bash
npm run ai:smoke       # smoke suite
npm run ai:sanity      # sanity suite
npm run ai:regression  # regression suite
npm run ai:test        # default suite from config
```

### CLI Overrides

```bash
npm run ai:smoke -- --urls=https://staging.example.com/
npm run ai:smoke -- --browsers=chromium,firefox
npm run ai:smoke -- --mode=headed
npm run ai:smoke -- --runMode=sequential
npm run ai:smoke -- --workers=2
npm run ai:smoke -- --debug
```

### Run Pre-Generated Tests Directly

If tests are already generated, skip the pipeline and run Playwright directly:

```bash
npm run test:smoke:headless
npm run test:smoke:headed
npm run test:sanity:headless
npm run test:sanity:headed
npm run test:regression:headless
npm run test:regression:headed
npm test
```

Environment variables: `TEST_TAG` (suite tag regex), `WORKERS`, and `CHROMIUM_MODE` / `FIREFOX_MODE` / `WEBKIT_MODE` (headed|headless).

### Reporting

```bash
npm run report:allure:generate   # single-file Allure report
npm run report:allure:open
npm run report:playwright:open
npm run package-report           # ZIP all reports
```

### Cleanup

```bash
npm run fresh                    # Delete all previous test-reports_* run folders + legacy output dirs
```

### Ad-hoc Audit CLI (`adhoc-audit`)

A standalone, CLI-only audit command that audits any URL on demand and produces a **premium self-contained HTML report** (`report.html`, plus `report.pdf` on Smoke/E2E) in a timestamped, hostname-tagged run folder. Three preset bundles:

| Preset | What it runs |
|--------|--------------|
| `HighSmoke` | Desktop + mobile full-page screenshots, JS console errors, failed network requests (4xx/5xx). Fast, non-destructive, production-safe. |
| `Smoke` | Everything in `HighSmoke`, plus: axe-core accessibility audit (violations grouped by severity with element snippets), broken-link crawl (up to 20 hrefs with status codes), PDF export of the report (A4), and the **real framework smoke pipeline** (explore → generate → validate → run) against the same URL — its pass/fail counts are folded into the ad-hoc report, which links to that run's Allure + Playwright HTML reports. |
| `E2E` | Everything in `Smoke`, plus a **10-second random chaos-interaction pass** (random clicks, scrolls, text input) on the mobile context. **Destructive** — requires `--i-understand-the-risk`. |

#### One-time global install

From this repo (after `npm install`):

```bash
npm link
```

This registers `adhoc-audit` as a **global command** on that machine. Anyone who clones this repo can do the same — the command resolves the framework's own code relative to the repo's installed location (never the current directory), so it works from anywhere.

#### Usage (from any directory)

```bash
# Run folder created directly in the current directory (default):
adhoc-audit --keyword=HighSmoke --url=https://www.myvi.in/

# Or nested inside an explicit base folder:
adhoc-audit --keyword=Smoke     --url=https://www.myvi.in/ --out=./adhoc-reports

# E2E refuses to run without the explicit risk flag:
adhoc-audit --keyword=E2E       --url=https://www.myvi.in/   # → warns and exits (exit code 1)

# Only with the flag does the 10s chaos pass run:
adhoc-audit --keyword=E2E       --url=https://www.myvi.in/ --i-understand-the-risk
```

- `--keyword` (required): `HighSmoke` | `Smoke` | `E2E` (case-insensitive).
- `--url` (required): target URL to audit.
- `--out` (optional): base output folder. **Default: the current directory** — each run creates a fresh subfolder named `test-reports_<datetime>_<url-name>/` (e.g. `test-reports_2026-09-29_14-05-12_www-myvi-in/`) directly in it (previous runs are never overwritten). When `--out=<dir>` is given, the same run folder is created inside that folder instead.

#### Dual reporting on Smoke/E2E

A `Smoke`/`E2E` run produces **two complete, separate report sets**:

1. The framework's own reports — Allure and Playwright HTML — generated exactly as in a normal `npm run ai:smoke` run, inside the same `test-reports_*` run folder.
2. The premium ad-hoc report — `report.html` (+ `report.pdf`) in the same run folder — desktop/mobile screenshots (under `screenshots/`), console/network error lists, inline SVG pass/fail charts, an execution timeline, the a11y/broken-links/chaos sections, and clickable `file://` links to that same run's Allure/Playwright reports.

#### Run folder layout

Every run — framework (`ai:smoke`) or ad-hoc audit — writes everything into a single folder created next to where the command runs:

```
test-reports_2026-09-30_14-05-12_www-myvi-in/
├── allure-results/        # raw Allure results
├── allure-report/         # single-file Allure report (index.html)
├── playwright-report/     # Playwright HTML report (index.html)
├── screenshots/           # full-page + evidence screenshots
├── test-results/          # raw Playwright output, evidence, test-summary.json
├── logs/test.logs         # framework execution log
└── report.html/.pdf       # ad-hoc premium report (Smoke/E2E ad-hoc runs)
```

`npm run fresh` deletes all previous `test-reports_*` folders (plus legacy flat dirs from older versions) before a new run.

The ad-hoc report is **fully self-contained and offline**: inline CSS, inline SVG charts, system font stack only — zero CDN scripts, links, or fonts (the only external references are the local screenshot files next to it).

#### E2E safety gate

The `E2E` chaos pass clicks, scrolls and types on the **real** site — it can submit real forms, trigger checkout/payment flows, send real emails, or mutate real backend data. Without `--i-understand-the-risk` the command prints a clear warning and exits without running anything. Only pass the flag when the target URL is safe to mutate (e.g. a test environment) or the random interaction risk is acceptable.

#### Implementation notes

- Framework subprocesses are invoked with `spawnSync` and an **args array** (no shell string interpolation).
- PDF export runs in a dedicated fresh node subprocess (`src/adhoc/checks/pdfExportWorker.mjs`) — a failed PDF degrades to a "PDF failed" badge in the report and never crashes the run.
- Framework-internal paths resolve relative to the package location (`import.meta.url`/env from the launcher), never `process.cwd()`; only `--out` resolves against `process.cwd()`.
- The `Smoke`/`E2E` framework pipeline is the real, unmodified `ai:smoke` pipeline and can take a long time on large sites (exploration of ~50 pages plus a 3-browser run); the ad-hoc report renders as soon as it finishes. On this repo's default config against `www.myvi.in`, expect roughly 25–50 minutes for Smoke/E2E.

## Test Suites

| Suite | Tag | Typical checks |
|-------|-----|----------------|
| Smoke | `@smoke` | Page loads, title, URL |
| Sanity | `@sanity` | Key element visibility (headings, links, buttons, inputs) |
| Regression | `@regression` | Comprehensive DOM verification |

## How It Works

```
Target URL ──> Explore ──> Site Map / Journeys ──> Generate POMs + Specs
                                                  │
                                                  ▼
                          tsc --noEmit validation (type-safe gate)
                                                  │
                                                  ▼
                       Playwright run (Chromium | Firefox | WebKit)
                                                  │
                                                  ▼
                        Allure + Playwright HTML reports
```

## CI/CD

`.github/workflows/playwright.yml` runs on push/PR to `main`/`master`:

1. Checks out the repo and sets up Node.js LTS.
2. Installs dependencies (`npm ci`) and Playwright browsers (`--with-deps`).
3. Runs `npm run ai:smoke` with `CI=true`.
4. Generates the Allure report and uploads Playwright HTML, Allure report, and Allure results as artifacts (30-day retention).

## Contributing

Contributions are welcome! To get started:

1. **Fork** the repository and create a feature branch (`git checkout -b feature/your-feature`).
2. **Develop** — add or fix functionality, following the existing `src/core/` architecture and strict TypeScript conventions.
3. **Verify** — run `npm run ai:smoke` and confirm the generated tests pass with `npm run test:smoke:headless`.
4. **Commit** with a clear, descriptive message and open a **Pull Request** describing your change.

Please keep generated artifacts out of commits (`tests/generated/`, `pages/generated/`, reports, and logs are gitignored).

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC) (see `package.json`).
