/**
 * Broken-link check for ad-hoc audits.
 * Collects up to 20 unique <a href> URLs from the page (same-origin first,
 * capped for bounded runtime) and issues GET requests to check status codes.
 */
import { Page } from 'playwright';

export interface LinkCheck {
  url: string;
  status: number; // 0 = connection-level failure
  ok: boolean;
  redirectedTo?: string;
  error?: string;
  durationMs: number;
}

export interface BrokenLinksResult {
  checked: number;
  broken: LinkCheck[];
  all: LinkCheck[];
  capped: boolean;
}

const MAX_LINKS = 20;
const REQUEST_TIMEOUT_MS = 15_000;

/**
 * NOTE: the callback passed to page.evaluate is serialized and re-executed in the
 * browser. tsx (esbuild keepNames) injects `__name(...)` around named functions
 * declared inside the callback, which then throws "ReferenceError: __name is not
 * defined" in the page (the framework hit this before — see siteAnalyzer.ts).
 * The callback therefore contains only anonymous arrows and data literals.
 */
async function collectHrefs(page: Page, baseUrl: string): Promise<{ hrefs: string[]; capped: boolean }> {
  const hrefs = await page.evaluate((base) => {
    const origin = new URL(base).origin;
    const seen = new Set<string>();
    const sameOrigin: string[] = [];
    const external: string[] = [];
    const anchorList = Array.from(document.querySelectorAll('a[href]'));
    for (const anchor of anchorList) {
      const raw = anchor.getAttribute('href') || '';
      if (!raw || raw.startsWith('#') || raw.startsWith('javascript:') || raw.startsWith('mailto:') || raw.startsWith('tel:')) continue;
      let abs: string;
      try {
        abs = new URL(raw, base).href;
      } catch {
        continue;
      }
      if (!/^https?:/.test(abs)) continue;
      if (seen.has(abs)) continue;
      seen.add(abs);
      if (new URL(abs).origin === origin) sameOrigin.push(abs);
      else external.push(abs);
    }
    return { sameOrigin, external };
  }, baseUrl);

  // Same-origin links first (more actionable), then externals to fill the cap.
  const ordered = [...hrefs.sameOrigin, ...hrefs.external].slice(0, MAX_LINKS);
  return { hrefs: ordered, capped: hrefs.sameOrigin.length + hrefs.external.length > MAX_LINKS };
}

export async function crawlBrokenLinks(page: Page, baseUrl: string): Promise<BrokenLinksResult> {
  const { hrefs, capped } = await collectHrefs(page, baseUrl);

  const results: LinkCheck[] = await Promise.all(
    hrefs.map(async (url): Promise<LinkCheck> => {
      const started = Date.now();
      try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
        const response = await fetch(url, {
          method: 'GET',
          redirect: 'follow',
          signal: controller.signal,
          headers: {
            'User-Agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          },
        });
        clearTimeout(timer);
        return {
          url,
          status: response.status,
          ok: response.status < 400,
          redirectedTo: response.redirected ? response.url : undefined,
          durationMs: Date.now() - started,
        };
      } catch (err: any) {
        return {
          url,
          status: 0,
          ok: false,
          error: err?.message || String(err),
          durationMs: Date.now() - started,
        };
      }
    })
  );

  results.sort((a, b) => {
    if (a.ok !== b.ok) return a.ok ? 1 : -1; // broken first
    return a.status - b.status;
  });

  return {
    checked: results.length,
    broken: results.filter(r => !r.ok),
    all: results,
    capped,
  };
}
