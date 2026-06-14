import fs from "fs";
import path from "path";
import { parseUserFlow, saveFlowPlan, FlowStep } from "../utils/flowParser";
import { mapFlowSteps, MappedStep } from "../utils/flowToPomMapper";
import {
  loadAiFlowConfig,
  checkActionSafety,
  getDefaultAiFlowConfig,
} from "../utils/safeActionGuard";
import { loadConfig, getTargetApplications } from "../utils/configReader";

const GENERATED_FLOW_DIR = path.resolve(process.cwd(), "tests", "generated-flows");
const FLOW_PLAN_PATH = path.resolve(process.cwd(), "temp", "generated", "flow-plan.json");
const INPUT_FLOW_PATH = path.resolve(process.cwd(), "input", "user-flow.txt");
const SITE_MAP_PATH = path.resolve(process.cwd(), "temp", "generated", "site-map.json");

function sanitizeFileName(name: string): string {
  return name
    .replace(/[^a-zA-Z0-9_\-]/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_|_$/g, "")
    .toLowerCase() || "user_flow";
}

function generateStepCode(step: FlowStep, mapped: MappedStep, indent: string): string[] {
  const lines: string[] = [];
  const comment = `// Step ${step.id}: ${step.raw}`;

  if (!step.safe && step.safetyReason) {
    lines.push(`${indent}${comment}`);
      lines.push(`${indent}await test.step('${escapeStepText(step.raw)}', async () => {`);
      lines.push(`${indent}  // BLOCKED: ${step.safetyReason}`);
      lines.push(`${indent}  test.info().annotations.push({ type: 'blocked', description: ${JSON.stringify(step.safetyReason)} });`);
      lines.push(`${indent}  throw new Error(${JSON.stringify(step.safetyReason)});`);
      lines.push(`${indent}});`);
    return lines;
  }

  if (step.needsExploration && (!mapped.pomPage || !mapped.pomLocator) && step.actionType !== "open") {
    lines.push(`${indent}${comment}`);
    lines.push(`${indent}await test.step('${escapeStepText(step.raw)}', async () => {`);
    lines.push(`${indent}  // NEEDS EXPLORATION: No POM mapping found for this step.`);
    lines.push(`${indent}  test.info().annotations.push({ type: 'needs_exploration', description: ${JSON.stringify(`Step "${step.raw}" could not be mapped to a POM. Run exploration first.`)} });`);
    if (mapped.mappingNotes) {
      lines.push(`${indent}  // ${mapped.mappingNotes}`);
    }
    lines.push(`${indent}});`);
    return lines;
  }

  lines.push(`${indent}${comment}`);

  switch (step.actionType) {
    case "open": {
      lines.push(`${indent}await test.step('Open application', async () => {`);
      if (mapped.pomPage) {
        lines.push(`${indent}  await page.goto(appPage.url, { waitUntil: 'domcontentloaded' });`);
      } else {
        lines.push(`${indent}  await page.goto('${getApplicationUrl()}', { waitUntil: 'domcontentloaded' });`);
      }
      lines.push(`${indent}});`);
      break;
    }

    case "click": {
      lines.push(`${indent}await test.step('${escapeStepText(step.raw)}', async () => {`);
      if (mapped.pomPage && mapped.pomLocator) {
        const clickMethod = `click${mapped.pomLocator.propertyName.charAt(0).toUpperCase() + mapped.pomLocator.propertyName.slice(1)}`;
        if (mapped.pomLocator.hasClickMethod) {
          lines.push(`${indent}  await appPage.${clickMethod}();`);
        } else {
          lines.push(`${indent}  await appPage.${mapped.pomLocator.propertyName}.click();`);
        }
      } else {
        lines.push(`${indent}  // Element not mapped - needs exploration`);
      }
      lines.push(`${indent}});`);
      break;
    }

    case "fill": {
      lines.push(`${indent}await test.step('${escapeStepText(step.raw)}', async () => {`);
      if (mapped.pomPage && mapped.pomLocator) {
        const value = step.value ?? "test-value";
        lines.push(`${indent}  await appPage.${mapped.pomLocator.propertyName}.fill(${JSON.stringify(value)});`);
      } else {
        lines.push(`${indent}  // Element not mapped - needs exploration`);
      }
      lines.push(`${indent}});`);
      break;
    }

    case "select": {
      lines.push(`${indent}await test.step('${escapeStepText(step.raw)}', async () => {`);
      if (mapped.pomPage && mapped.pomLocator) {
        const value = step.value ?? "";
        lines.push(`${indent}  await appPage.${mapped.pomLocator.propertyName}.selectOption(${JSON.stringify(value || 'option')});`);
      } else {
        lines.push(`${indent}  // Element not mapped - needs exploration`);
      }
      lines.push(`${indent}});`);
      break;
    }

    case "verify_visible": {
      lines.push(`${indent}await test.step('${escapeStepText(step.raw)}', async () => {`);
      if (mapped.pomPage && mapped.pomLocator) {
        const visibleMethod = `is${mapped.pomLocator.propertyName.charAt(0).toUpperCase() + mapped.pomLocator.propertyName.slice(1)}Visible`;
        if (mapped.pomLocator.hasVisibilityMethod) {
          lines.push(`${indent}  const visible = await appPage.${visibleMethod}();`);
          lines.push(`${indent}  expect(visible).toBe(true);`);
        } else {
          lines.push(`${indent}  await expect(appPage.${mapped.pomLocator.propertyName}).toBeVisible();`);
        }
      } else {
        lines.push(`${indent}  // Element not mapped - needs exploration`);
      }
      lines.push(`${indent}});`);
      break;
    }

    case "verify_text": {
      lines.push(`${indent}await test.step('${escapeStepText(step.raw)}', async () => {`);
      if (mapped.pomPage && mapped.pomLocator) {
        lines.push(`${indent}  await expect(appPage.${mapped.pomLocator.propertyName}).toBeVisible();`);
        if (step.value) {
          lines.push(`${indent}  await expect(appPage.${mapped.pomLocator.propertyName}).toContainText(${JSON.stringify(step.value)});`);
        }
      } else {
        lines.push(`${indent}  // Element not mapped - needs exploration`);
      }
      lines.push(`${indent}});`);
      break;
    }

    case "login": {
      lines.push(`${indent}test.step('Login', async () => {`);
      lines.push(`${indent}  // Login step detected. Credentials from config are used if available.`);
      lines.push(`${indent}  const usernameInput = page.locator('input[type="email"], input[type="text"][name*="user"], input[type="text"][name*="email"]').first();`);
      lines.push(`${indent}  const passwordInput = page.locator('input[type="password"]').first();`);
      lines.push(`${indent}  if (await usernameInput.isVisible()) {`);
      lines.push(`${indent}    await usernameInput.fill(process.env.TEST_USERNAME || 'testuser');`);
      lines.push(`${indent}    await passwordInput.fill(process.env.TEST_PASSWORD || 'testpass');`);
      lines.push(`${indent}    await page.locator('button[type="submit"], [role="button"]').filter({ hasText: /sign\\s*in|login|submit/i }).first().click();`);
      lines.push(`${indent}  }`);
      lines.push(`${indent}});`);
      break;
    }

    case "wait": {
      lines.push(`${indent}test.step('${escapeStepText(step.raw)}', async () => {`);
      lines.push(`${indent}  await page.waitForTimeout(2000);`);
      lines.push(`${indent}});`);
      break;
    }

    case "scroll": {
      lines.push(`${indent}test.step('${escapeStepText(step.raw)}', async () => {`);
      lines.push(`${indent}  await page.evaluate(() => window.scrollBy(0, window.innerHeight));`);
      lines.push(`${indent}});`);
      break;
    }

    default: {
      lines.push(`${indent}test.step('${escapeStepText(step.raw)}', async () => {`);
      lines.push(`${indent}  // Unrecognized step type: ${step.actionType}`);
      lines.push(`${indent}  // Raw: ${step.raw}`);
      lines.push(`${indent}});`);
      break;
    }
  }

  return lines;
}

function escapeStepText(text: string): string {
  return text.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/"/g, '\\"');
}

function getApplicationUrl(): string {
  try {
    const configPath = path.resolve(process.cwd(), "config", "test-input.json");
    const raw = fs.readFileSync(configPath, "utf-8");
    const config = JSON.parse(raw);
    if (config.execution?.targetApplication && config.applications) {
      const app = config.applications.find(
        (a: any) => a.name === config.execution.targetApplication
      );
      if (app?.url) return app.url;
    }
  } catch {
    // ignored
  }
  return "https://example.com";
}

function getApplicationName(): string {
  try {
    const configPath = path.resolve(process.cwd(), "config", "test-input.json");
    const raw = fs.readFileSync(configPath, "utf-8");
    const config = JSON.parse(raw);
    if (config.execution?.targetApplication) return config.execution.targetApplication;
    if (config.projectName) return config.projectName;
  } catch {
    // ignored
  }
  return "Application";
}

async function generateFlowTests(): Promise<void> {
  console.log("[generateFlowTests] Loading configuration...");

  const aiFlowConfig = loadAiFlowConfig();
  const suite = aiFlowConfig.defaultSuite;
  const tags = aiFlowConfig.defaultTags;
  const allowDestructive = aiFlowConfig.allowDestructiveActions;

  if (!fs.existsSync(INPUT_FLOW_PATH)) {
    console.error(`[generateFlowTests] Input file not found: ${INPUT_FLOW_PATH}`);
    console.error("[generateFlowTests] Create input/user-flow.txt with your test steps.");
    process.exit(1);
  }

  console.log("[generateFlowTests] Parsing user flow...");
  const flowPlan = parseUserFlow(INPUT_FLOW_PATH, suite, tags);

  console.log(`[generateFlowTests] Found ${flowPlan.steps.length} steps`);

  for (const step of flowPlan.steps) {
    const guardResult = checkActionSafety(step.raw, allowDestructive);
    step.safe = guardResult.allowed;
    step.safetyReason = guardResult.reason;
  }

  console.log("[generateFlowTests] Mapping flow steps to existing POMs...");
  const mappedSteps = mapFlowSteps(flowPlan.steps, {
    pomsDir: "pages/GeneratedPages",
    siteMapPath: SITE_MAP_PATH,
  });

  const needsExploration = mappedSteps.filter((m) => m.needsExploration);
  if (needsExploration.length > 0) {
    console.log(`[generateFlowTests] WARNING: ${needsExploration.length} step(s) need exploration (no POM mapping found):`);
    for (const m of needsExploration) {
      console.log(`  - Step ${m.step.id}: "${m.step.raw}" -> ${m.mappingNotes || "No mapping"}`);
    }
  }

  const blockedSteps = flowPlan.steps.filter((s) => !s.safe);
  if (blockedSteps.length > 0) {
    console.log(`[generateFlowTests] WARNING: ${blockedSteps.length} step(s) blocked by safe-action guard:`);
    for (const s of blockedSteps) {
      console.log(`  - Step ${s.id}: "${s.raw}" -> ${s.safetyReason}`);
    }
  }

  console.log("[generateFlowTests] Saving flow plan...");
  saveFlowPlan(flowPlan, FLOW_PLAN_PATH);
  console.log(`[generateFlowTests] Flow plan saved to ${FLOW_PLAN_PATH}`);

  const testFileName = `flow_${sanitizeFileName(getApplicationName())}_${sanitizeFileName(suite)}.spec.ts`;
  const testFilePath = path.join(GENERATED_FLOW_DIR, testFileName);

  console.log(`[generateFlowTests] Generating test file: ${testFilePath}`);

  const lines: string[] = [];
  lines.push(`import { test, expect } from '@playwright/test';`);

  const usedPoms = new Set<string>();
  for (const m of mappedSteps) {
    if (m.pomPage) usedPoms.add(m.pomPage.className);
  }

  const appName = getApplicationName();
  const defaultUrl = getApplicationUrl();

  if (usedPoms.size > 0) {
    const importPaths = Array.from(usedPoms).map((className) => {
      const pomFileName = mappedSteps.find((m) => m.pomPage?.className === className)?.pomPage?.fileName;
      if (pomFileName) {
        return `import { ${className} } from '../../pages/GeneratedPages/${pomFileName.replace(/\.ts$/, '')}';`;
      }
      return `import { ${className} } from '../../pages/GeneratedPages/${className}.page';`;
    });
    lines.push(...importPaths);
  } else {
    lines.push(`import { BasePage } from '../../pages/BasePage';`);
  }

  lines.push(``);
  lines.push(`test.describe('${appName} - ${suite} flow', () => {`);

  const tagsStr = tags.map((t) => `'${t}'`).join(", ");

  if (usedPoms.size > 0) {
    const firstPomClass = Array.from(usedPoms)[0];
    lines.push(`  let appPage: ${firstPomClass};`);
  } else {
    lines.push(`  let appPage: BasePage;`);
  }

  lines.push(``);
  lines.push(`  test.beforeEach(async ({ page }) => {`);

  if (usedPoms.size > 0) {
    const firstPomClass = Array.from(usedPoms)[0];
    lines.push(`    appPage = new ${firstPomClass}(page);`);
  } else {
    lines.push(`    appPage = new BasePage(page);`);
  }

  lines.push(`  });`);
  lines.push(``);

  const testName = `User flow: ${appName} - ${suite}`;
  lines.push(`  test('${escapeStepText(testName)}', async ({ page }) => {`);

  for (let i = 0; i < mappedSteps.length; i++) {
    const mapped = mappedSteps[i];
    const stepLines = generateStepCode(mapped.step, mapped, "    ");
    lines.push(...stepLines);
    if (i < mappedSteps.length - 1) {
      lines.push(``);
    }
  }

  lines.push(`  });`);
  lines.push(`});`);
  lines.push(``);

  if (!fs.existsSync(GENERATED_FLOW_DIR)) {
    fs.mkdirSync(GENERATED_FLOW_DIR, { recursive: true });
  }

  fs.writeFileSync(testFilePath, lines.join("\n"), "utf-8");
  console.log(`[generateFlowTests] Test file generated: ${testFilePath}`);
  console.log("[generateFlowTests] Done.");
}

generateFlowTests().catch((error) => {
  console.error("[generateFlowTests] Fatal error:", error instanceof Error ? error.message : error);
  process.exit(1);
});
