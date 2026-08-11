# yt-tc — AI-Powered Playwright Test Framework

> Automatically explore any website, generate Page Objects and tagged test suites, execute them across Chromium, Firefox, and WebKit in parallel, and report results through Allure, Playwright HTML, and a live web dashboard.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=flat&logo=node.js&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat&logo=playwright&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=flat&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-blue)

---

## Overview

`yt-tc` is an end-to-end test pipeline that turns a target URL into a full browser test suite with zero manual authoring:

1. **Explore** — Crawls the target site and analyzes headings, links, buttons, inputs, forms, tables, menus, cards, dropdowns, and text blocks.
2. **Generate** — Discovers user journeys, ranks clickables, and produces Page Object Models (POMs) plus tagged Playwright specs.
3. **Execute** — Validates the generated TypeScript and runs the suite across Chromium, Firefox, and WebKit with CPU-aware parallel workers.
4. **Report** — Produces Allure, Playwright HTML, and list reports, with screenshots, videos, and traces retained on failure.

The generation logic itself is **rule-based and makes no AI/LLM calls at runtime** — "AI-powered" refers to the AI coding assistants (via MCP servers) used to author and maintain the framework and its generated assets. Runs can be launched from the CLI or from a local web dashboard that streams live progress over SSE.

## Key Features

- **Site Exploration** — Crawls up to `maxPagesToExplore` pages (default 50, depth 3) and builds a structured site map for analysis.
- **Journey Discovery** — Ranks clickable elements, filters unsafe actions, and maps smoke/sanity/regression journeys.
- **Page Object Generation** — Self-contained POMs written to `pages/generated/<domain>/`.
- **Test Generation** — Specs tagged `@smoke`, `@sanity`, and `@regression` written to `tests/generated/<domain>/`.
- **Multi-Browser Execution** — Chromium, Firefox, and WebKit projects; headed/headless per browser via `CHROMIUM_MODE` / `FIREFOX_MODE` / `WEBKIT_MODE` env vars.
- **Parallel Workers** — Auto-derived from CPU count (capped at 4); `WORKERS` env var or `--workers` CLI flag overrides.
- **Type-Safe Generation** — Automatic `tsc --noEmit` validation gate before any Playwright run.
- **Rich Reporting** — Allure, Playwright HTML, list reporter, plus custom `frameworkReporter` and `dashboardProgressReporter`; single-file Allure generation and ZIP packaging.
- **Web Dashboard** — Trigger runs, watch phases in real time via SSE, review results, and download report bundles.
- **CLI Overrides** — `--suite`, `--browsers`, `--urls`, `--mode`, `--runMode`, `--workers`, `--debug`.
- **CI Ready** — GitHub Actions workflow runs the smoke suite on push/PR and uploads reports as artifacts.

## Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Language** | TypeScript (strict mode, ESM, ES2022 target) |
| **Runtime** | Node.js 18+ (LTS) |
| **Test Automation** | Playwright / @playwright/test |
| **Orchestration** | `tsx`-based pipeline scripts |
| **Reporting** | Allure (`allure-playwright` + `allure-commandline`), Playwright HTML |
| **Dashboard Backend** | Express + CORS + SSE (port 4000) |
| **Dashboard Frontend** | React 18 + Vite + Tailwind CSS (dev server port 5173) |
| **CI/CD** | GitHub Actions |
| **Authoring** | MCP servers (Playwright / Playwright test / GitHub Copilot) |

## Project Structure

```
yt-tc/
├── src/
│   ├── config/                 # Config loading/validation + test-input.json
│   │   └── test-input.json     # Main config: URL, suite, browsers, timeouts
│   └── core/
│       ├── explorer/           # exploreSite, siteAnalyzer, journeyDiscovery, clickableRanker
│       ├── generator/          # pomGenerator, testCaseGenerator, testGenerator, selectorBuilder
│       ├── runner/             # runFramework (orchestrator), cliArgs, browserManager, runManager
│       ├── reporting/          # frameworkReporter, dashboardProgressReporter, allureNarrator
│       └── utils/              # logger, fileUtils, pathUtils, environmentInfo, dashboardProgress
├── dashboard/
│   ├── server/                 # Express API: POST /api/run, SSE progress, report downloads
│   └── client/                 # React + Vite + Tailwind UI (RunForm, ProgressPanel, ResultsBento)
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
npm run fresh                    # Clean previous run artifacts
```

### Web Dashboard

```bash
npm run dashboard          # install + build + serve on http://localhost:4000
npm run dashboard:dev      # dev mode (server 4000, client 5173)
```

The dashboard lets you kick off runs, select URL/mode/browsers/suite, watch real-time progress via SSE, and download packaged reports.

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
                        Allure + Playwright HTML + Dashboard SSE
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
