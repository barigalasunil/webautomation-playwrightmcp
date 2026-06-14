import fs from "fs/promises";
import path from "path";

export interface CredentialsConfig {
  username: string;
  password: string;
}

export interface ApplicationInputs {
  searchText: string;
  formData: Record<string, string>;
}

export interface ApplicationConfig {
  name: string;
  url: string;
  requiresAuthentication: boolean;
  credentials: CredentialsConfig;
  inputs?: ApplicationInputs;
}

export interface ExplorationConfig {
  headless: boolean;
  depth: number;
  maxPagesToExplore: number;
}

export interface BrowserModeConfig {
  chromium?: string;
  firefox?: string;
  webkit?: string;
}

export interface ExecutionConfig {
  suite?: string;
  targetApplications?: string[];
  browsers?: string[];
  browserMode?: BrowserModeConfig;
}

export interface RunSettings {
  cleanBeforeRun?: boolean;
  archivePreviousRun?: boolean;
  attachScreenshotForEveryTest?: boolean;
  generateAllureReport?: boolean;
  generatePlaywrightHtmlReport?: boolean;
}

export interface TestInputConfig {
  projectName: string;
  exploration?: ExplorationConfig;
  applications: ApplicationConfig[];
  execution: ExecutionConfig;
  runSettings?: RunSettings;
}

const DEFAULT_CONFIG_PATH = path.resolve(process.cwd(), "config", "test-input.json");
const ALLOWED_BROWSERS = ["chromium", "firefox", "webkit"];
const ALLOWED_SUITES = ["smoke", "sanity", "regression"];

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

export async function loadConfig(configPath = DEFAULT_CONFIG_PATH): Promise<TestInputConfig> {
  try {
    const raw = await fs.readFile(configPath, "utf-8");
    const config = JSON.parse(raw) as TestInputConfig;
    validateConfig(config, configPath);
    return config;
  } catch (error: unknown) {
    if (error instanceof SyntaxError) {
      throw new Error(`Invalid JSON in configuration file: ${configPath}. ${error.message}`);
    }
    const nodeError = error as NodeJS.ErrnoException;
    if (nodeError?.code === "ENOENT") {
      throw new Error(`Configuration file not found: ${configPath}`);
    }
    throw error;
  }
}

export function validateConfig(config: TestInputConfig, configPath: string): void {
  assert(config !== null && typeof config === "object", "Configuration must be a valid JSON object.");
  assert(typeof config.projectName === "string" && config.projectName.trim().length > 0, "Missing or invalid projectName in configuration.");
  assert(Array.isArray(config.applications) && config.applications.length > 0, "At least one application must be configured.");
  assert(typeof config.execution === "object" && config.execution !== null, "Missing execution configuration.");

  config.applications.forEach((application, index) => {
    assert(typeof application.name === "string" && application.name.trim().length > 0, `applications[${index}].name is required.`);
    assert(typeof application.url === "string" && application.url.trim().length > 0, `applications[${index}].url is required.`);
    try {
      new URL(application.url);
    } catch {
      throw new Error(`applications[${index}].url must be a valid URL: ${application.url}`);
    }
    assert(typeof application.requiresAuthentication === "boolean", `applications[${index}].requiresAuthentication must be boolean.`);
    assert(typeof application.credentials === "object" && application.credentials !== null, `applications[${index}].credentials is required.`);
    assert(typeof application.credentials.username === "string", `applications[${index}].credentials.username must be a string.`);
    assert(typeof application.credentials.password === "string", `applications[${index}].credentials.password must be a string.`);
  });

  if (config.execution.targetApplications && config.execution.targetApplications.length > 0) {
    for (const appName of config.execution.targetApplications) {
      const found = config.applications.find(a => a.name === appName);
      assert(found, `Target application '${appName}' not found in applications list.`);
    }
  }

  if (config.execution.browsers && config.execution.browsers.length > 0) {
    for (const browser of config.execution.browsers) {
      assert(ALLOWED_BROWSERS.includes(browser), `Browser '${browser}' is not supported. Must be one of: ${ALLOWED_BROWSERS.join(", ")}`);
    }
  }
}

export function getTargetApplications(config: TestInputConfig, cliApps?: string[]): ApplicationConfig[] {
  let appNames: string[];
  if (cliApps && cliApps.length > 0) {
    appNames = cliApps;
  } else if (config.execution.targetApplications && config.execution.targetApplications.length > 0) {
    appNames = config.execution.targetApplications;
  } else {
    return [...config.applications];
  }

  const apps: ApplicationConfig[] = [];
  for (const name of appNames) {
    const app = config.applications.find(a => a.name === name);
    if (!app) {
      console.warn(`[config] Warning: Application '${name}' not found in config. Skipping.`);
      continue;
    }
    apps.push(app);
  }
  return apps;
}

export function resolveSuite(cliSuite?: string, configSuite?: string): string {
  const suite = (cliSuite || configSuite || 'smoke').toLowerCase().trim();
  if (!ALLOWED_SUITES.includes(suite)) {
    throw new Error(`Invalid suite '${suite}'. Must be one of: ${ALLOWED_SUITES.join(", ")}`);
  }
  return suite;
}

export function resolveBrowsers(cliBrowsers?: string, configBrowsers?: string[]): string[] {
  if (cliBrowsers) {
    return cliBrowsers.split(',').map(b => b.trim().toLowerCase()).filter(b => b.length > 0);
  }
  if (configBrowsers && configBrowsers.length > 0) {
    return configBrowsers.map(b => b.trim().toLowerCase());
  }
  return ['chromium'];
}

export function validateBrowsers(browsers: string[]): void {
  for (const browser of browsers) {
    if (!ALLOWED_BROWSERS.includes(browser)) {
      throw new Error(`Browser '${browser}' is not supported. Must be one of: ${ALLOWED_BROWSERS.join(", ")}`);
    }
  }
}

export function getBrowserMode(config: TestInputConfig, browser: string): string {
  const mode = config.execution?.browserMode?.[browser as keyof BrowserModeConfig];
  if (mode) return mode;
  const defaults: Record<string, string> = { chromium: 'headed', firefox: 'headless', webkit: 'headless' };
  return defaults[browser] || 'headless';
}

export function getExplorationDepth(config: TestInputConfig): number {
  return config.exploration?.depth ?? 3;
}

export function getExplorationMaxPages(config: TestInputConfig): number {
  return config.exploration?.maxPagesToExplore ?? 50;
}
