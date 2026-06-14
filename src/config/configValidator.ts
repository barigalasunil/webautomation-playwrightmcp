export const ALLOWED_BROWSERS = ["chromium", "firefox", "webkit"];
export const ALLOWED_SUITES = ["smoke", "sanity", "regression"];
export const ALLOWED_RUN_MODES = ["parallel-by-cpu", "sequential"];
export const ALLOWED_MODES = ["headed", "headless"];

export function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

export function validateSuite(suite: string): void {
  const s = suite.toLowerCase().trim();
  assert(ALLOWED_SUITES.includes(s), `Invalid suite '${suite}'. Must be one of: ${ALLOWED_SUITES.join(", ")}`);
}

export function validateBrowsers(browsers: string[]): void {
  for (const browser of browsers) {
    assert(ALLOWED_BROWSERS.includes(browser), `Browser '${browser}' is not supported. Must be one of: ${ALLOWED_BROWSERS.join(", ")}`);
  }
}

export function validateUrls(urls: { url: string }[]): void {
  assert(Array.isArray(urls) && urls.length > 0, "At least one URL must be configured.");
  for (let i = 0; i < urls.length; i++) {
    assert(typeof urls[i].url === "string" && urls[i].url.trim().length > 0, `urls[${i}].url is required.`);
    try {
      new URL(urls[i].url);
    } catch {
      throw new Error(`urls[${i}].url must be a valid URL: ${urls[i].url}`);
    }
  }
}

export function validateRunMode(mode: string): void {
  assert(ALLOWED_RUN_MODES.includes(mode), `Invalid runMode '${mode}'. Must be one of: ${ALLOWED_RUN_MODES.join(", ")}`);
}

export function validateMode(mode: string): void {
  assert(ALLOWED_MODES.includes(mode), `Invalid mode '${mode}'. Must be one of: ${ALLOWED_MODES.join(", ")}`);
}
