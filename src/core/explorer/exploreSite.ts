import fs from "fs/promises";
import path from "path";
import { chromium, BrowserType, Page } from "playwright";
import { analyzePage } from "./siteAnalyzer";
import { autoScrollToBottom } from "./scrollExplorer";
import { logger } from "../utils/logger";
import { ensureDir, writeJsonFile } from "../utils/fileUtils";
import { getSiteMapPath, getUrlRunDir, getTempUrlDir } from "../utils/pathUtils";

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
  cards: { title: string; text: string }[];
  dropdowns: { label: string; name: string; optionCount: number }[];
}

interface SiteMapData {
  application: string;
  baseUrl: string;
  safeFolder: string;
  pages: SiteMapPage[];
}

async function collectInternalLinks(pageUrl: string, page: Page): Promise<string[]> {
  const hrefs = await page.$$eval("a[href]", (elements) =>
    elements.map((element) => (element as HTMLAnchorElement).href).filter((href) => !!href)
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
    logger.debug(`Visiting (depth ${depth}): ${url}`);
    await page.goto(url, { waitUntil: "load", timeout: 30000 });
    await page.waitForLoadState("networkidle", { timeout: 5000 }).catch(() => {});
    const analysis = await analyzePage(page);
    const pageTitle = await page.title().catch(() => '');

    await autoScrollToBottom(page);

    const scrolledAnalysis = await analyzePage(page);

    for (const link of analysis.links) {
      if (link.text) {
        logger.link(`Found link: ${link.text} -> ${link.href}`);
      }
    }
    for (const heading of analysis.headings) {
      if (heading.text) {
        logger.verify(`Found heading (${heading.level}): ${heading.text}`);
      }
    }
    for (const button of analysis.buttons) {
      if (button.text) {
        logger.step(`Found button: ${button.text} (type: ${button.type})`);
      }
    }
    for (const input of analysis.inputs) {
      const label = input.label || input.placeholder || input.ariaLabel || input.name;
      if (label) {
        logger.step(`Found input: ${label} (type: ${input.type})`);
      }
    }
    for (const form of analysis.forms) {
      const formName = form.name || form.id || 'unknown';
      logger.step(`Found form: ${formName} (${form.fieldCount} fields)`);
    }
    for (const table of analysis.tables) {
      if (table.summary || table.headers.length > 0) {
        logger.step(`Found table: ${table.summary || table.headers.join(', ')} (${table.rowCount} rows)`);
      }
    }
    for (const menu of analysis.menus) {
      if (menu.text) {
        logger.step(`Found menu: ${menu.text}`);
      }
    }
    for (const dropdown of analysis.dropdowns) {
      if (dropdown.label) {
        logger.step(`Found dropdown: ${dropdown.label} (${dropdown.optionCount} options)`);
      }
    }

    function mergeUnique<T>(a: T[], b: T[], keyFn: (item: T) => string): T[] {
      const map = new Map<string, T>();
      for (const item of [...a, ...b]) {
        const key = keyFn(item);
        if (!map.has(key)) map.set(key, item);
      }
      return Array.from(map.values());
    }

    const merged = {
      title: pageTitle || page.url(),
      url: page.url(),
      depth,
      headings: mergeUnique(analysis.headings || [], scrolledAnalysis.headings || [], h => h.text || ''),
      links: mergeUnique(analysis.links || [], scrolledAnalysis.links || [], l => `${l.text}|${l.href}`),
      buttons: mergeUnique(analysis.buttons || [], scrolledAnalysis.buttons || [], b => b.text || ''),
      inputs: mergeUnique(analysis.inputs || [], scrolledAnalysis.inputs || [], i => `${i.name}|${i.type}`),
      forms: mergeUnique(analysis.forms || [], scrolledAnalysis.forms || [], f => `${f.name}|${f.action}`),
      tables: mergeUnique(analysis.tables || [], scrolledAnalysis.tables || [], t => t.summary || t.headers.join(',')),
      menus: mergeUnique(analysis.menus || [], scrolledAnalysis.menus || [], m => m.text || ''),
      cards: mergeUnique(analysis.cards || [], scrolledAnalysis.cards || [], c => c.title || c.text || ''),
      dropdowns: mergeUnique(analysis.dropdowns || [], scrolledAnalysis.dropdowns || [], d => d.label || d.name || ''),
    };

    return merged;
  } catch (error: any) {
    const msg = error?.message || String(error);
    if (msg.includes('net::ERR_CONNECTION_RESET') || msg.includes('net::ERR_NAME_NOT_RESOLVED') || msg.includes('net::ERR_DNS_FAIL')) {
      logger.warn(`Connection error exploring ${url}: ${msg}`);
    } else if (msg.includes('Download is starting')) {
      logger.warn(`Skipping ${url}: triggers file download`);
    } else {
      logger.warn(`Failed to explore ${url}: ${msg}`);
    }
    return null;
  }
}

export async function exploreSite(siteUrl: string, safeFolder: string, depth: number, maxPages: number): Promise<void> {
  if (!siteUrl) {
    throw new Error('URL is required for exploration.');
  }

  logger.info(`Exploring: ${siteUrl}`);
  logger.debug(`Depth: ${depth}, Max pages: ${maxPages}`);

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
      if (item.depth > depth) continue;

      const pageData = await explorePage(page, item.url, item.depth);
      if (pageData) {
        siteMapPages.push(pageData);
        pagesExplored++;
        if (item.depth < depth) {
          const internalLinks = await collectInternalLinks(item.url, page);
          logger.debug(`Discovered ${internalLinks.length} internal links`);
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
      application: safeFolder,
      baseUrl: siteUrl,
      safeFolder,
      pages: siteMapPages,
    };

    const tempDir = getTempUrlDir(safeFolder);
    ensureDir(tempDir);
    const siteMapPath = path.join(tempDir, 'site-map.json');
    await fs.writeFile(siteMapPath, JSON.stringify(siteMapData, null, 2), 'utf-8');
    logger.debug(`Site map saved to ${siteMapPath}`);

    const urlRunDir = getUrlRunDir(safeFolder);
    ensureDir(urlRunDir);
    await fs.copyFile(siteMapPath, path.join(urlRunDir, 'site-map.json'));

    logger.success(`${siteMapPages.length} pages explored`);
  } finally {
    await browser.close();
  }
}
