import fs from "fs/promises";
import path from "path";
import { chromium, BrowserType, Page } from "playwright";
import { analyzePage } from "../utils/siteAnalyzer";

const DEFAULT_DEPTH = 3;
const DEFAULT_MAX_PAGES = 50;

const appName = process.env.APP_NAME || 'default';
const siteUrl = process.env.APP_URL || '';
const explorationDepth = Number(process.env.EXPLORE_DEPTH || DEFAULT_DEPTH);
const maxPages = Number(process.env.EXPLORE_MAX_PAGES || DEFAULT_MAX_PAGES);
const tempDir = path.resolve(process.cwd(), 'temp', 'generated', appName);
const runsDir = path.resolve(process.cwd(), 'runs', 'latest', appName);

interface SiteMapPage {
  title: string;
  url: string;
  depth: number;
  headings: { text: string; level: string }[];
  links: { text: string; href: string; internal: boolean }[];
  buttons: { text: string; type: string }[];
  inputs: { name: string; type: string; placeholder: string; ariaLabel: string; label: string }[];
  forms: { name: string; id: string; action: string; method: string; fieldCount: number }[];
  tables: { headers: string[]; rowCount: number; summary: string }[];
  menus: { text: string; role: string }[];
  dropdowns: { label: string; name: string; optionCount: number }[];
}

interface SiteMapData {
  application: string;
  baseUrl: string;
  pages: SiteMapPage[];
}

async function collectInternalLinks(pageUrl: string, page: Page): Promise<string[]> {
  const hrefs = await page.$$eval("a[href]", (elements) =>
    elements
      .map((element) => (element as HTMLAnchorElement).href)
      .filter((href) => !!href)
  );
  const base = new URL(pageUrl);
  const internal: Set<string> = new Set();
  for (const href of hrefs) {
    try {
      const url = new URL(href);
      if (url.hostname === base.hostname) {
        url.hash = "";
        internal.add(url.href);
      }
    } catch {}
  }
  return Array.from(internal);
}

async function explorePage(page: Page, url: string, depth: number): Promise<SiteMapPage | null> {
  try {
    console.log(`[explore] Visiting (${depth}) ${url}`);
    await page.goto(url, { waitUntil: "load", timeout: 30000 });
    await page.waitForLoadState("networkidle", { timeout: 5000 }).catch(() => {
      console.log(`[analyze] networkidle timeout, continuing anyway`);
    });
    const analysis = await analyzePage(page);
    const pageTitle = await page.title().catch(() => '');
    return {
      title: pageTitle || page.url(),
      url: page.url(),
      depth,
      headings: analysis.headings || [],
      links: analysis.links || [],
      buttons: analysis.buttons || [],
      inputs: analysis.inputs || [],
      forms: analysis.forms || [],
      tables: analysis.tables || [],
      menus: analysis.menus || [],
      dropdowns: analysis.dropdowns || [],
    };
  } catch (error: any) {
    const msg = error?.message || String(error);
    if (msg.includes('net::ERR_CONNECTION_RESET') || msg.includes('net::ERR_NAME_NOT_RESOLVED') || msg.includes('net::ERR_DNS_FAIL')) {
      console.log(`[explore] Failed to explore ${url}: connection error - ${error instanceof Error ? error.message : error}`);
    } else if (msg.includes('Download is starting')) {
      console.log(`[explore] Skipping ${url}: triggers file download`);
    } else {
      console.log(`[explore] Failed to explore ${url}: ${error instanceof Error ? error.message : error}`);
    }
    return null;
  }
}

async function exploreSite(): Promise<void> {
  if (!siteUrl) {
    console.error('[explore] Error: APP_URL environment variable is required.');
    process.exit(1);
  }

  console.log(`[explore] Exploring ${siteUrl} for application '${appName}'`);
  console.log(`[explore] Depth: ${explorationDepth}, Max pages: ${maxPages}, Headless: true`);

  const browserType: BrowserType<unknown> = chromium;
  const browser = await browserType.launch({ headless: true });

  try {
    const context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      viewport: { width: 1280, height: 720 },
    });
    const page = await context.newPage();

    const visited = new Set<string>();
    const queue: { url: string; depth: number }[] = [{ url: siteUrl, depth: 0 }];
    const siteMapPages: SiteMapPage[] = [];
    let pagesExplored = 0;

    while (queue.length > 0 && pagesExplored < maxPages) {
      const item = queue.shift()!;
      const normalizedUrl = item.url.replace(/\/$/, '');
      if (visited.has(normalizedUrl)) continue;
      visited.add(normalizedUrl);

      if (item.depth > explorationDepth) continue;

      const pageData = await explorePage(page, item.url, item.depth);
      if (pageData) {
        siteMapPages.push(pageData);
        pagesExplored++;

        if (item.depth < explorationDepth) {
          const internalLinks = await collectInternalLinks(item.url, page);
          console.log(`[explore] Discovered ${internalLinks.length} internal links from ${item.url}`);
          for (const link of internalLinks) {
            const normalizedLink = link.replace(/\/$/, '');
            if (!visited.has(normalizedLink)) {
              queue.push({ url: link, depth: item.depth + 1 });
            }
          }
        }
      }
    }

    const siteMapData: SiteMapData = {
      application: appName,
      baseUrl: siteUrl,
      pages: siteMapPages,
    };

    await fs.mkdir(tempDir, { recursive: true });
    const siteMapPath = path.join(tempDir, 'site-map.json');
    await fs.writeFile(siteMapPath, JSON.stringify(siteMapData, null, 2), 'utf-8');
    console.log(`[explore] Site map written to ${siteMapPath}`);

    await fs.mkdir(path.join(runsDir, 'site-map'), { recursive: true });
    const runsSiteMap = path.join(runsDir, 'site-map', 'site-map.json');
    await fs.copyFile(siteMapPath, runsSiteMap);
    console.log(`[explore] Site map copied to ${runsSiteMap}`);

    console.log(`[explore] Explored ${siteMapPages.length} pages out of ${visited.size} discovered URLs`);
  } finally {
    await browser.close();
  }
}

exploreSite().catch((error) => {
  console.error('[explore] Fatal error:', error instanceof Error ? error.message : error);
  process.exit(1);
});
