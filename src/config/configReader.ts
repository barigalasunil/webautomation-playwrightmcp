import fs from "fs/promises";
import path from "path";
import { cpus } from "node:os";
import { validateSuite, validateBrowsers, validateUrls, validateRunMode, assert } from "./configValidator";
import type { LoggingConfig } from "../core/utils/logger";

export interface CredentialsConfig {
  username: string;
  password: string;
}

export interface UrlInputs {
  searchText: string;
  formData: Record<string, string>;
}

export interface UrlConfig {
  url: string;
  requiresAuthentication: boolean;
  credentials: CredentialsConfig;
  inputs: UrlInputs;
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
  suite: string;
  browsers: string[];
  browserMode: BrowserModeConfig;
  runMode: string;
  workers: string;
  maxWorkers?: number;
}

export interface RunSettings {
  attachScreenshotForEveryTest: boolean;
  generateAllureReport: boolean;
  generatePlaywrightHtmlReport: boolean;
}

export interface ReportingConfig {
  allureMode: string;
  generateAllure: boolean;
  generatePlaywrightHtml: boolean;
}

export interface TimeoutsConfig {
  testTimeoutMs: number;
  expectTimeoutMs: number;
  actionTimeoutMs: number;
  navigationTimeoutMs: number;
  pageReadyTimeoutMs: number;
}

export interface LinkValidationConfig {
  verifyHrefOnly: boolean;
  maxLinksToClick: number;
  skipExternalLinks: boolean;
}

export interface JourneyDiscoveryConfig {
  enabled: boolean;
  autoScroll: boolean;
  maxSmokeJourneys: number;
  maxSanityJourneys: number;
  maxRegressionJourneys: number;
  clickInternalLinks: boolean;
  clickButtons: boolean;
  skipExternalLinks: boolean;
}

export interface TestInputConfig {
  projectName: string;
  exploration: ExplorationConfig;
  urls: UrlConfig[];
  execution: ExecutionConfig;
  runSettings?: RunSettings;
  reporting?: ReportingConfig;
  timeouts?: TimeoutsConfig;
  linkValidation?: LinkValidationConfig;
  logging?: LoggingConfig;
}

export function getLoggingConfig(config: TestInputConfig): LoggingConfig {
  return {
    writeToFile: true,
    logFile: "logs/test.logs",
    timezone: "Asia/Kolkata",
    clearLogBeforeRun: true,
    debug: false,
    ...(config.logging || {}),
  };
}

export function deriveDomain(urlStr: string): string {
  try {
    const url = new URL(urlStr);
    return url.hostname;
  } catch {
    return urlStr.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
  }
}

export function deriveSafeFolderName(domain: string): string {
  return domain.replace(/[^a-zA-Z0-9-]/g, '-').toLowerCase().replace(/^-+|-+$/g, '');
}

export function makeUniqueFolderNames(urls: { url: string; domain: string; safeFolder: string }[]): { url: string; domain: string; safeFolder: string }[] {
  const counts = new Map<string, number>();
  const result: { url: string; domain: string; safeFolder: string }[] = [];
  for (const item of urls) {
    const count = counts.get(item.safeFolder) || 0;
    if (count === 0) {
      result.push(item);
      counts.set(item.safeFolder, 1);
    } else {
      result.push({ ...item, safeFolder: `${item.safeFolder}-${count}` });
      counts.set(item.safeFolder, count + 1);
    }
  }
  return result;
}

export function resolveUrls(config: TestInputConfig, cliUrls?: string[]): UrlConfig[] {
  if (cliUrls && cliUrls.length > 0) {
    return cliUrls.map(u => ({
      url: u,
      requiresAuthentication: false,
      credentials: { username: "", password: "" },
      inputs: { searchText: "", formData: {} },
    }));
  }
  return config.urls || [];
}

export function resolveSuite(cliSuite?: string, configSuite?: string): string {
  const suite = (cliSuite || configSuite || 'smoke').toLowerCase().trim();
  validateSuite(suite);
  return suite;
}

export function resolveBrowsers(cliBrowsers?: string, configBrowsers?: string[]): string[] {
  if (cliBrowsers) {
    const browsers = cliBrowsers.split(',').map(b => b.trim().toLowerCase()).filter(b => b.length > 0);
    validateBrowsers(browsers);
    return browsers;
  }
  const browsers = (configBrowsers && configBrowsers.length > 0) ? configBrowsers.map(b => b.trim().toLowerCase()) : ['chromium'];
  validateBrowsers(browsers);
  return browsers;
}

export function resolveRunMode(cliMode?: string, configMode?: string): string {
  const mode = (cliMode || configMode || 'parallel-by-cpu').toLowerCase().trim();
  validateRunMode(mode);
  return mode;
}

export function resolveMode(cliMode?: string): string | undefined {
  if (cliMode) {
    return cliMode.toLowerCase().trim();
  }
  return undefined;
}

const DEFAULT_MAX_WORKERS = 4;

export function resolveMaxWorkers(configMaxWorkers?: number): number {
  return configMaxWorkers ?? DEFAULT_MAX_WORKERS;
}

export function resolveWorkers(cliWorkers?: string, configWorkers?: string, maxWorkers?: number): number {
  const cap = maxWorkers ?? DEFAULT_MAX_WORKERS;
  if (cliWorkers && cliWorkers !== 'auto') {
    return Math.min(parseInt(cliWorkers, 10), cap);
  }
  if (configWorkers && configWorkers !== 'auto') {
    return Math.min(parseInt(configWorkers, 10), cap);
  }
  return Math.max(1, Math.min(cpus().length - 1, cap));
}

export function getCpuCount(): number {
  return cpus().length;
}

export function getBrowserMode(config: TestInputConfig, browser: string, globalMode?: string): string {
  if (globalMode) return globalMode;
  const mode = config.execution?.browserMode?.[browser as keyof BrowserModeConfig];
  if (mode) return mode;
  const defaults: Record<string, string> = { chromium: 'headed', firefox: 'headless', webkit: 'headless' };
  return defaults[browser] || 'headless';
}

export function getReportingConfig(config: TestInputConfig): ReportingConfig {
  return {
    allureMode: "single-file",
    generateAllure: true,
    generatePlaywrightHtml: true,
    ...(config.reporting || {}),
  };
}

export function getTimeoutsConfig(config: TestInputConfig): TimeoutsConfig {
  return {
    testTimeoutMs: 60000,
    expectTimeoutMs: 10000,
    actionTimeoutMs: 15000,
    navigationTimeoutMs: 30000,
    pageReadyTimeoutMs: 20000,
    ...(config.timeouts || {}),
  };
}

export function getJourneyDiscoveryConfig(config: TestInputConfig): JourneyDiscoveryConfig {
  return {
    enabled: true,
    autoScroll: true,
    maxSmokeJourneys: 5,
    maxSanityJourneys: 10,
    maxRegressionJourneys: 25,
    clickInternalLinks: true,
    clickButtons: true,
    skipExternalLinks: true,
    ...((config as any).journeyDiscovery || {}),
  };
}

export function getLinkValidationConfig(config: TestInputConfig): LinkValidationConfig {
  return {
    verifyHrefOnly: true,
    maxLinksToClick: 5,
    skipExternalLinks: true,
    ...(config.linkValidation || {}),
  };
}

export function getExplorationDepth(config: TestInputConfig): number {
  return config.exploration?.depth ?? 3;
}

export function getExplorationMaxPages(config: TestInputConfig): number {
  return config.exploration?.maxPagesToExplore ?? 50;
}

const DEFAULT_CONFIG_PATH = path.resolve(process.cwd(), "src", "config", "test-input.json");

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
  assert(typeof config.projectName === "string" && config.projectName.trim().length > 0, "Missing or invalid projectName.");
  validateUrls(config.urls || []);
  assert(typeof config.execution === "object" && config.execution !== null, "Missing execution configuration.");
  validateSuite(config.execution?.suite || 'smoke');
  validateBrowsers(config.execution?.browsers || ['chromium']);
  validateRunMode(config.execution?.runMode || 'parallel-by-cpu');
}
