import fs from "fs";
import path from "path";
import { FlowStep } from "./flowParser";

export interface SiteMapData {
  application: string;
  pages: SiteMapPage[];
}

export interface SiteMapPage {
  title: string;
  url: string;
  headings: { text: string; level: string }[];
  links: { text: string; href: string; internal: boolean }[];
  buttons: { text: string; type: string }[];
  inputs: { name: string; type: string; placeholder: string; label: string; ariaLabel: string }[];
  forms: { id: string; name: string; method: string; action: string; fieldCount: number }[];
  tables: { summary: string; headers: string[]; rowCount: number }[];
  menus: { text: string; role: string }[];
}

export interface PomPageInfo {
  className: string;
  fileName: string;
  url: string;
  pageTitle: string;
  locators: PomLocatorInfo[];
}

export interface PomLocatorInfo {
  propertyName: string;
  text: string;
  type: string;
  hasClickMethod: boolean;
  hasVisibilityMethod: boolean;
}

export interface MappedStep {
  step: FlowStep;
  pomPage?: PomPageInfo;
  pomLocator?: PomLocatorInfo;
  needsExploration: boolean;
  mappingNotes?: string;
}

function normalizeText(t: string): string {
  return t.trim().toLowerCase().replace(/\s+/g, " ");
}

function findBestMatchingPage(
  step: FlowStep,
  siteMap: SiteMapData,
  poms: PomPageInfo[]
): PomPageInfo | undefined {
  if (step.actionType === "open" && poms.length > 0) {
    if (step.pageIdentifier === "home") {
      const homeUrl = siteMap.pages.length > 0 ? siteMap.pages[0].url : "";
      const homePom = poms.find((p) => p.url === homeUrl);
      return homePom || poms[0];
    }
    const rawLower = step.raw.toLowerCase();
    if (
      rawLower.includes("application") ||
      rawLower.includes("app") ||
      rawLower.includes("site") ||
      rawLower.includes("home") ||
      rawLower.includes("main") ||
      rawLower.includes("landing")
    ) {
      const homeUrl = siteMap.pages.length > 0 ? siteMap.pages[0].url : "";
      const homePom = poms.find((p) => p.url === homeUrl);
      return homePom || poms[0];
    }
  }

  const targetLower = normalizeText(step.target ?? "");
  const rawLower = normalizeText(step.raw);

  for (const pom of poms) {
    const titleNorm = normalizeText(pom.pageTitle);
    const urlNorm = pom.url.toLowerCase();
    if (
      (targetLower && (titleNorm.includes(targetLower) || urlNorm.includes(targetLower))) ||
      (rawLower.includes(titleNorm.substring(0, 20)))
    ) {
      return pom;
    }
  }

  for (const page of siteMap.pages) {
    const titleNorm = normalizeText(page.title);
    const urlNorm = page.url.toLowerCase();
    if (
      (targetLower && (titleNorm.includes(targetLower) || urlNorm.includes(targetLower)))
    ) {
      return poms.find((p) => p.url === page.url || normalizeText(p.pageTitle) === titleNorm);
    }
  }

  return undefined;
}

function findBestMatchingLocator(
  step: FlowStep,
  pomPage: PomPageInfo,
  siteMapPage: SiteMapPage | undefined
): PomLocatorInfo | undefined {
  const targetLower = normalizeText(step.target ?? "");
  const rawLower = normalizeText(step.raw);

  const searchTexts: string[] = [];
  if (targetLower) searchTexts.push(targetLower);
  const words = targetLower.split(/\s+/).filter((w) => w.length > 2);
  searchTexts.push(...words);
  searchTexts.push(...rawLower.split(/\s+/).filter((w) => w.length > 3));

  const visited = new Set<string>();

  for (const searchText of searchTexts) {
    if (visited.has(searchText)) continue;
    visited.add(searchText);

    for (const locator of pomPage.locators) {
      const locatorText = normalizeText(locator.text);
      if (!locatorText) continue;

      if (locatorText.includes(searchText) || searchText.includes(locatorText)) {
        const actionMatch =
          (step.actionType === "click" && locator.hasClickMethod) ||
          (step.actionType === "verify_visible" && locator.hasVisibilityMethod) ||
          step.actionType === "fill" ||
          step.actionType === "select" ||
          true;
        if (actionMatch) return locator;
      }
    }
  }

  if (siteMapPage) {
    const allElements: { text: string; type: string }[] = [
      ...siteMapPage.headings.map((h) => ({ text: h.text, type: "heading" as const })),
      ...siteMapPage.buttons.map((b) => ({ text: b.text, type: "button" as const })),
      ...siteMapPage.links.map((l) => ({ text: l.text, type: "link" as const })),
    ];

    for (const searchText of searchTexts) {
      for (const el of allElements) {
        const elText = normalizeText(el.text);
        if (!elText) continue;
        if (elText.includes(searchText) || searchText.includes(elText)) {
          const match = pomPage.locators.find((l) => normalizeText(l.text) === elText);
          if (match) return match;
        }
      }
    }
  }

  return undefined;
}

function findSiteMapPage(step: FlowStep, siteMap: SiteMapData): SiteMapPage | undefined {
  if (step.actionType === "open") {
    return siteMap.pages[0];
  }
  const targetLower = step.target?.toLowerCase() ?? "";
  const rawLower = step.raw.toLowerCase();
  for (const page of siteMap.pages) {
    const titleNorm = normalizeText(page.title);
    const urlNorm = page.url.toLowerCase();
    if (
      (targetLower && (titleNorm.includes(targetLower) || urlNorm.includes(targetLower))) ||
      rawLower.includes(titleNorm.substring(0, 30))
    ) {
      return page;
    }
  }
  return siteMap.pages[0];
}

function loadExistingPoms(pomsDir: string): PomPageInfo[] {
  const dir = path.resolve(process.cwd(), pomsDir);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".page.ts"));
  const poms: PomPageInfo[] = [];

  for (const file of files) {
    const content = fs.readFileSync(path.join(dir, file), "utf-8");
    const classNameMatch = content.match(/export class (\w+) extends BasePage/);
    const urlMatch = content.match(/readonly url\s*=\s*['"]([^'"]+)['"]/);

    const locators: PomLocatorInfo[] = [];

    const propRegex = /get (\w+)\(\): Locator/g;
    let propMatch;
    const props = new Set<string>();
    while ((propMatch = propRegex.exec(content)) !== null) {
      props.add(propMatch[1]);
    }

    for (const prop of props) {
      const capProp = prop.charAt(0).toUpperCase() + prop.slice(1);
      const hasClick = content.includes(`async click${capProp}`);
      const hasVisible = content.includes(`async is${capProp}Visible`);

      const strategyBlock = content.match(
        new RegExp(`private _${prop}Strategies:[\\s\\S]*?(?=\\n\\s*(private|get|async|\\}))`)
      );
      let text = prop;
      if (strategyBlock) {
        const nameMatch = strategyBlock[0].match(/name:\s*([^,\}]+)/);
        if (nameMatch) text = nameMatch[1].trim().replace(/^['"`]|['"`]$/g, "");
      }

      locators.push({
        propertyName: prop,
        text,
        type: "locator",
        hasClickMethod: hasClick,
        hasVisibilityMethod: hasVisible,
      });
    }

    poms.push({
      className: classNameMatch ? classNameMatch[1] : "UnknownPage",
      fileName: file,
      url: urlMatch ? urlMatch[1] : "",
      pageTitle: classNameMatch
        ? classNameMatch[1].replace(/([A-Z])/g, " $1").trim()
        : "",
      locators,
    });
  }

  return poms;
}

function loadSiteMap(siteMapPath?: string): SiteMapData {
  const resolvedPath = siteMapPath ?? path.resolve(process.cwd(), "generated", "site-map.json");
  if (!fs.existsSync(resolvedPath)) {
    return { application: "", pages: [] };
  }
  try {
    const raw = fs.readFileSync(resolvedPath, "utf-8");
    return JSON.parse(raw) as SiteMapData;
  } catch {
    return { application: "", pages: [] };
  }
}

export function mapFlowSteps(
  steps: FlowStep[],
  options?: { pomsDir?: string; siteMapPath?: string }
): MappedStep[] {
  const pomsDir = options?.pomsDir ?? "pages/GeneratedPages";
  const siteMap = loadSiteMap(options?.siteMapPath);
  const poms = loadExistingPoms(pomsDir);

  let lastMappedPage: PomPageInfo | undefined;

  return steps.map((step) => {
    const result: MappedStep = {
      step,
      needsExploration: false,
    };

    const pomPage = findBestMatchingPage(step, siteMap, poms) || lastMappedPage || poms[0];
    if (pomPage) {
      lastMappedPage = pomPage;
      result.pomPage = pomPage;
      const siteMapPage = findSiteMapPage(step, siteMap);
      const locator = findBestMatchingLocator(step, pomPage, siteMapPage);
      if (locator) {
        result.pomLocator = locator;
        step.mapped = true;
        step.mappedElement = locator.propertyName;
        step.mappedPage = pomPage.className;
        step.locatorStrategy = "SmartLocator";
      } else {
        if (step.actionType !== "open" && step.actionType !== "navigate") {
          step.needsExploration = true;
          result.needsExploration = true;
          result.mappingNotes = `Element matching "${step.target || step.raw}" not found in POM "${pomPage.className}". Needs exploration.`;
        }
      }
    } else {
      step.needsExploration = true;
      result.needsExploration = true;
      result.mappingNotes = `Page matching "${step.target || step.raw}" not found in existing POMs. Needs exploration.`;
    }

    return result;
  });
}
