/**
 * Shared Playwright browser sessions for ad-hoc audits.
 * One Chromium instance, two contexts (desktop 1366x900, mobile 390x844 iPhone-13-ish).
 * Console/network listeners are attached per-context before navigation so nothing is missed.
 */
import { chromium, Browser, BrowserContext, ConsoleMessage, Request, Response } from 'playwright';

export interface ConsoleErrorEntry {
  text: string;
  pageUrl: string;
  timestamp: string;
}

export interface FailedRequestEntry {
  url: string;
  method: string;
  status: number;
  statusText: string;
  resourceType: string;
}

export interface AdhocSessions {
  browser: Browser;
  desktop: { context: BrowserContext; page: import('playwright').Page };
  mobile: { context: BrowserContext; page: import('playwright').Page };
  consoleErrors: ConsoleErrorEntry[];
  failedRequests: FailedRequestEntry[];
}

/** 4xx/5xx responses count as failed network requests. */
function isFailedStatus(status: number): boolean {
  return status >= 400;
}

function attachConsoleListener(page: import('playwright').Page, sink: ConsoleErrorEntry[]): void {
  page.on('console', (msg: ConsoleMessage) => {
    if (msg.type() === 'error') {
      sink.push({
        text: msg.text(),
        pageUrl: page.url(),
        timestamp: new Date().toISOString(),
      });
    }
  });
  page.on('pageerror', (err: Error) => {
    sink.push({
      text: `pageerror: ${err.message}`,
      pageUrl: page.url(),
      timestamp: new Date().toISOString(),
    });
  });
}

function attachNetworkListener(context: BrowserContext, sink: FailedRequestEntry[]): void {
  context.on('response', (response: Response) => {
    if (isFailedStatus(response.status())) {
      const req: Request = response.request();
      sink.push({
        url: response.url(),
        method: req.method(),
        status: response.status(),
        statusText: response.statusText(),
        resourceType: req.resourceType(),
      });
    }
  });
  context.on('requestfailed', (request: Request) => {
    const failure = request.failure();
    sink.push({
      url: request.url(),
      method: request.method(),
      status: 0, // no HTTP response at all (DNS, TLS, aborted, ...)
      statusText: failure?.errorText ?? 'request failed',
      resourceType: request.resourceType(),
    });
  });
}

/**
 * Launch Chromium once and open desktop + mobile contexts, both already
 * listening for console errors and failed network requests, and navigate
 * both pages to `url`.
 */
export async function createSessions(url: string): Promise<AdhocSessions> {
  const browser = await chromium.launch({ headless: true });

  const consoleErrors: ConsoleErrorEntry[] = [];
  const failedRequests: FailedRequestEntry[] = [];

  // tsx/esbuild keepNames polyfill — see note in cli.ts. Prevents
  // "ReferenceError: __name is not defined" inside Playwright's injected
  // UtilityScript on pages evaluated through the tsx-loaded process.
  const contextPolyfill = (): void => {
    const w = window as any;
    if (typeof w.__name !== 'function') {
      w.__name = (target: any, value?: string) => {
        try {
          if (value) Object.defineProperty(target, 'name', { value, configurable: true });
        } catch {
          // non-configurable name — nothing to do
        }
        return target;
      };
    }
  };

  const desktopContext = await browser.newContext({
    viewport: { width: 1366, height: 900 },
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  });
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 3,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  });
  await desktopContext.addInitScript(contextPolyfill);
  await mobileContext.addInitScript(contextPolyfill);

  const desktopPage = await desktopContext.newPage();
  const mobilePage = await mobileContext.newPage();

  attachConsoleListener(desktopPage, consoleErrors);
  attachConsoleListener(mobilePage, consoleErrors);
  attachNetworkListener(desktopContext, failedRequests);
  attachNetworkListener(mobileContext, failedRequests);

  await Promise.all([
    desktopPage.goto(url, { waitUntil: 'domcontentloaded', timeout: 60_000 }),
    mobilePage.goto(url, { waitUntil: 'domcontentloaded', timeout: 60_000 }),
  ]);
  // Give lazy-loaded content, fonts and analytics a moment to settle.
  await Promise.all([
    desktopPage.waitForLoadState('networkidle', { timeout: 15_000 }).catch(() => undefined),
    mobilePage.waitForLoadState('networkidle', { timeout: 15_000 }).catch(() => undefined),
  ]);

  return {
    browser,
    desktop: { context: desktopContext, page: desktopPage },
    mobile: { context: mobileContext, page: mobilePage },
    consoleErrors,
    failedRequests,
  };
}
