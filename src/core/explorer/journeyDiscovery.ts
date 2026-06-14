import fs from 'fs';
import path from 'path';
import { logger } from '../utils/logger';
import { writeJsonFile, ensureDir } from '../utils/fileUtils';
import { getUrlRunDir, getGeneratedDir, getSiteMapPath } from '../utils/pathUtils';
import { rankClickables, getTopClickables, type RankedClickable } from './clickableRanker';
import { isUnsafeAction, filterSafeClickables } from './safeClickGuard';

export interface DiscoveredJourney {
  id: string;
  name: string;
  startPage: string;
  startUrl: string;
  action: string;
  actionType: 'link' | 'button';
  targetUrl: string;
  expectedResult: string;
  riskLevel: 'safe' | 'caution';
  suite: string[];
}

export interface JourneyDiscoveryResult {
  url: string;
  domain: string;
  journeys: DiscoveredJourney[];
  stats: {
    totalDiscovered: number;
    safeCount: number;
    unsafeSkipped: number;
  };
}

export async function discoverJourneys(
  safeFolder: string,
  baseUrl: string,
  domain: string,
  config: {
    maxSmokeJourneys: number;
    maxSanityJourneys: number;
    maxRegressionJourneys: number;
    clickInternalLinks: boolean;
    clickButtons: boolean;
    skipExternalLinks: boolean;
  }
): Promise<JourneyDiscoveryResult> {
  const urlRunDir = getUrlRunDir(safeFolder);
  const siteMapPath = getSiteMapPath(safeFolder);

  if (!fs.existsSync(siteMapPath)) {
    logger.warn(`Site map not found at ${siteMapPath}, skipping journey discovery`);
    return { url: baseUrl, domain, journeys: [], stats: { totalDiscovered: 0, safeCount: 0, unsafeSkipped: 0 } };
  }

  logger.section('Discovering User Journeys');

  const raw = fs.readFileSync(siteMapPath, 'utf-8');
  const siteMap = JSON.parse(raw);

  const pages = siteMap.pages || [];
  logger.info(`Analyzing ${pages.length} pages for journey discovery`);

  const allClickables: RankedClickable[] = [];
  const pageMap = new Map<string, string>();

  for (const pageData of pages) {
    const pageUrl = pageData.url || '';
    const pageTitle = pageData.title || 'Untitled';
    pageMap.set(pageUrl, pageTitle);

    const links: { text?: string; href?: string }[] = (pageData.links || []).map((l: any) => ({
      text: l.text,
      href: l.href,
    }));

    const allLinks = config.clickInternalLinks ? links : [];
    const buttons = config.clickButtons ? (pageData.buttons || []).map((b: any) => ({ text: b.text })) : [];

    const ranked = rankClickables(allLinks, buttons);
    allClickables.push(...ranked.map(r => ({ ...r, pageUrl, pageTitle })) as any);
  }

  const uniqueByText = new Map<string, any>();
  for (const c of allClickables) {
    const key = `${(c as any).pageUrl}|${c.text}`;
    if (!uniqueByText.has(key)) {
      uniqueByText.set(key, c);
    }
  }

  const uniqueClickables = Array.from(uniqueByText.values());

  const safeClickables = filterSafeClickables(uniqueClickables);

  const unsafeCount = uniqueClickables.length - safeClickables.length;
  if (unsafeCount > 0) {
    logger.debug(`Skipped ${unsafeCount} unsafe clickables`);
  }

  const baseUrlParsed = (() => {
    try { return new URL(baseUrl).origin; } catch { return baseUrl; }
  })();

  const smokeJourneys = buildJourneys(
    getTopClickables(safeClickables, config.maxSmokeJourneys, config.skipExternalLinks, baseUrlParsed),
    baseUrl, domain, pageMap, ['smoke', 'sanity', 'regression']
  );

  const sanityJourneys = buildJourneys(
    getTopClickables(safeClickables, config.maxSanityJourneys, config.skipExternalLinks, baseUrlParsed),
    baseUrl, domain, pageMap, ['sanity', 'regression']
  );

  const regressionJourneys = buildJourneys(
    getTopClickables(safeClickables, config.maxRegressionJourneys, config.skipExternalLinks, baseUrlParsed),
    baseUrl, domain, pageMap, ['regression']
  );

  const allJourneys = mergeJourneys(smokeJourneys, sanityJourneys, regressionJourneys);

  const result: JourneyDiscoveryResult = {
    url: baseUrl,
    domain,
    journeys: allJourneys,
    stats: {
      totalDiscovered: uniqueClickables.length,
      safeCount: safeClickables.length,
      unsafeSkipped: unsafeCount,
    },
  };

  const journeysDir = getGeneratedDir();
  ensureDir(journeysDir);
  const journeysPath = path.join(journeysDir, 'journeys.json');
  writeJsonFile(journeysPath, result);
  logger.success(`Journey discovery complete: ${allJourneys.length} journeys mapped`);

  return result;
}

function buildJourneys(
  clickables: RankedClickable[],
  baseUrl: string,
  domain: string,
  pageMap: Map<string, string>,
  suiteTags: string[]
): DiscoveredJourney[] {
  return clickables.map((c, index) => {
    const pageTitle = (c as any).pageTitle || 'Unknown Page';
    const startPage = (c as any).pageUrl || baseUrl;
    const startName = pageMap.get(startPage) || pageTitle;

    const targetUrl = (c.type === 'link' && c.href)
      ? (c.href.startsWith('http') ? c.href : new URL(c.href, baseUrl).href)
      : startPage;

    const expectedPath = (() => {
      try { return new URL(targetUrl).pathname; } catch { return targetUrl; }
    })();

    const name = `${startName} to ${pageTitle} via ${c.text}`;

    return {
      id: `J${String(index + 1).padStart(3, '0')}`,
      name,
      startPage,
      startUrl: startPage,
      action: `Click ${c.text}`,
      actionType: c.type,
      targetUrl,
      expectedResult: `User navigates to ${expectedPath} successfully`,
      riskLevel: 'safe' as const,
      suite: suiteTags,
    };
  });
}

function mergeJourneys(
  smoke: DiscoveredJourney[],
  sanity: DiscoveredJourney[],
  regression: DiscoveredJourney[]
): DiscoveredJourney[] {
  const seen = new Set<string>();
  const result: DiscoveredJourney[] = [];

  for (const j of smoke) {
    const key = `${j.startUrl}|${j.action}`;
    if (!seen.has(key)) {
      seen.add(key);
      result.push(j);
    }
  }

  for (const j of sanity) {
    const key = `${j.startUrl}|${j.action}`;
    if (!seen.has(key)) {
      seen.add(key);
      result.push(j);
    }
  }

  for (const j of regression) {
    const key = `${j.startUrl}|${j.action}`;
    if (!seen.has(key)) {
      seen.add(key);
      result.push(j);
    }
  }

  return result;
}
