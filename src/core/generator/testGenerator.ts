import fs from "fs";
import path from "path";
import { normalizeVisibleText } from "./textNormalizer";
import { toTsStringLiteral } from "./codeStringEscaper";
import { ensureDir } from "../utils/fileUtils";
import { ROOT, getTempUrlDir, getUrlRunDir, getGeneratedPagesDir, getGeneratedTestsDir, getGeneratedDir } from "../utils/pathUtils";
import { buildRelativeImportPath } from "../utils/importPathBuilder";
import { logger } from "../utils/logger";
import { emitDashboardProgress } from "../utils/dashboardProgress";

const MAX_PROPERTIES_PER_TYPE = 5;

const SUITE_LABEL: Record<string, string> = {
  smoke: 'Smoke Test Suite',
  sanity: 'Sanity Test Suite',
  regression: 'Regression Test Suite',
};

interface SiteMapPage {
  title: string;
  url: string;
  headings: any[];
  links: any[];
  buttons: any[];
  inputs: any[];
  forms: any[];
  tables: any[];
  menus: any[];
  dropdowns: any[];
}

interface SiteMapData {
  application: string;
  baseUrl: string;
  pages: SiteMapPage[];
}

interface POMProperty { name: string; type: string; text: string }
interface POMInfo { className: string; url: string; fileName: string; properties: POMProperty[] }

function detectRoleType(locatorLine: string): string {
  if (locatorLine.match(/getByRole\('heading'/)) return 'heading';
  if (locatorLine.match(/getByRole\('link'/)) return 'link';
  if (locatorLine.match(/getByRole\('button'/)) return 'button';
  if (locatorLine.match(/getByLabel\(/)) return 'input';
  if (locatorLine.match(/getByPlaceholder\(/)) return 'input';
  if (locatorLine.match(/getByText\(/)) return 'textBlock';
  if (locatorLine.includes("locator('form") || locatorLine.includes('locator("form')) return 'form';
  if (locatorLine.includes("locator('table") || locatorLine.includes('locator("table')) return 'table';
  if (locatorLine.includes("nav") || locatorLine.includes('role="menu"') || locatorLine.includes("role='menu'")) return 'menu';
  if (locatorLine.includes("select,") || locatorLine.includes('role="combobox"') || locatorLine.includes("role='combobox'")) return 'dropdown';
  if (locatorLine.includes('input[') || locatorLine.includes('textarea') || locatorLine.includes("input, textarea")) return 'input';
  if (locatorLine.includes('button[') || locatorLine.includes('role="button"') || locatorLine.includes("role='button'")) return 'button';
  if (locatorLine.includes('a[href') || locatorLine.includes('a[href]')) return 'link';
  return 'element';
}

function extractTextFromLocator(locatorLine: string): string {
  const nameMatch = locatorLine.match(/name:\s*("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/);
  if (nameMatch) { try { return JSON.parse(nameMatch[1]); } catch { return nameMatch[1].replace(/^['"]|['"]$/g, ''); } }
  const labelMatch = locatorLine.match(/getByLabel\("([^"\\]*(?:\\.[^"\\]*)*)"\)/);
  if (labelMatch) return labelMatch[1].replace(/\\(.)/g, '$1');
  const labelSingleMatch = locatorLine.match(/getByLabel\('([^'\\]*(?:\\.[^'\\]*)*)'\)/);
  if (labelSingleMatch) return labelSingleMatch[1].replace(/\\(.)/g, '$1');
  const placeholderMatch = locatorLine.match(/getByPlaceholder\("([^"\\]*(?:\\.[^"\\]*)*)"\)/);
  if (placeholderMatch) return placeholderMatch[1].replace(/\\(.)/g, '$1');
  const placeholderSingleMatch = locatorLine.match(/getByPlaceholder\('([^'\\]*(?:\\.[^'\\]*)*)'\)/);
  if (placeholderSingleMatch) return placeholderSingleMatch[1].replace(/\\(.)/g, '$1');
  const textMatch = locatorLine.match(/getByText\("([^"\\]*(?:\\.[^"\\]*)*)"\)/);
  if (textMatch) return textMatch[1].replace(/\\(.)/g, '$1');
  const textSingleMatch = locatorLine.match(/getByText\('([^'\\]*(?:\\.[^'\\]*)*)'\)/);
  if (textSingleMatch) return textSingleMatch[1].replace(/\\(.)/g, '$1');
  return '';
}

function parsePOMFile(filePath: string): POMInfo | null {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const classMatch = content.match(/export class (\w+)/);
  if (!classMatch) return null;
  const className = classMatch[1];
  const urlMatch = content.match(/readonly url = ("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/);
  if (!urlMatch) return null;
  let url: string;
  try { url = JSON.parse(urlMatch[1]); } catch { url = urlMatch[1].replace(/^['"]|['"]$/g, ''); }
  const properties: POMProperty[] = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const getterMatch = line.match(/^\s+get (\w+)\(\): Locator/);
    if (!getterMatch) continue;
    const propName = getterMatch[1];
    if (propName === 'page') continue;
    const returnLine = i + 1 < lines.length ? lines[i + 1] : '';
    if (!returnLine.includes('this.page.')) continue;
    const type = detectRoleType(returnLine);
    const text = extractTextFromLocator(returnLine);
    properties.push({ name: propName, type, text });
  }
  const fileName = path.basename(filePath);
  return { className, url, fileName, properties };
}

function getElementTypeCounts(page: SiteMapPage): Record<string, number> {
  return {
    heading: page.headings.filter(h => normalizeVisibleText(h.text || '').length > 0).length,
    link: page.links.filter(l => normalizeVisibleText(l.text || '').length > 0).length,
    button: page.buttons.filter(b => normalizeVisibleText(b.text || '').length > 0).length,
    input: page.inputs.length,
    form: page.forms.length,
    table: page.tables.length,
    menu: page.menus.length,
    dropdown: page.dropdowns.length,
  };
}

function getReadableElementText(prop: POMProperty): string {
  if (prop.text && prop.text.trim().length > 0) return prop.text.trim();
  const fallbacks: Record<string, string> = { heading: 'Page heading', link: 'Navigation link', button: 'Primary button', input: 'Input field', menu: 'Navigation menu', dropdown: 'Dropdown menu', form: 'Form', table: 'Data table' };
  return fallbacks[prop.type] || 'Element';
}

function generateBeforeEach(className: string): string[] {
  const lines: string[] = [];
  lines.push('  test.beforeEach(async ({ page }, testInfo) => {');
  lines.push(`    logProgress('Running test: ' + testInfo.title);`);
  lines.push('    try {');
  lines.push(`      await test.step('Preparing page for test', async () => {`);
  lines.push(`        appPage = new ${className}(page);`);
  lines.push('        await appPage.open();');
  lines.push('        await appPage.waitForPageLoad();');
  lines.push('      });');
  lines.push(`      logPass('Prepared: ' + testInfo.title);`);
  lines.push('    } catch (e: any) {');
  lines.push(`      logFail('Failed to prepare: ' + testInfo.title);`);
  lines.push(`      logError('Current URL: ' + page.url());`);
  lines.push(`      try { const t = await page.title(); logError('Page title: ' + t); } catch {}`);
  lines.push('      try { await testInfo.attach(\'beforeEach-failure\', { body: await page.screenshot(), contentType: \'image/png\' }); } catch {}');
  lines.push('      throw e;');
  lines.push('    }');
  lines.push('  });');
  return lines;
}

function generateAfterEach(): string[] {
  const lines: string[] = [];
  lines.push('  test.afterEach(async ({ page }, testInfo) => {');
  lines.push('    if (testInfo.status === \'passed\') {');
  lines.push('      logPass(\'Passed: \' + testInfo.title);');
  lines.push('    } else if (testInfo.status === \'failed\' || testInfo.status === \'timedOut\') {');
  lines.push('      logFail(\'Failed: \' + testInfo.title);');
  lines.push('      if (testInfo.error?.message) {');
  lines.push('        logError(\'Reason: \' + testInfo.error.message);');
  lines.push('      }');
  lines.push('    } else if (testInfo.status === \'skipped\') {');
  lines.push('      logSkip(\'Skipped: \' + testInfo.title);');
  lines.push('    }');
  lines.push('  });');
  return lines;
}

function generateAllureAnnotations(lines: string[], suiteLabel: string, siteUrl: string, domain: string, pageName: string, storyText: string, severityText: string, tagText: string): void {
  lines.push(`    await label('suite', ${toTsStringLiteral(suiteLabel)});`);
  lines.push(`    await label('url', ${toTsStringLiteral(siteUrl)});`);
  lines.push(`    await label('domain', ${toTsStringLiteral(domain)});`);
  lines.push(`    await feature(${toTsStringLiteral(pageName)});`);
  lines.push(`    await story(${toTsStringLiteral(storyText)});`);
  lines.push(`    await severity(${toTsStringLiteral(severityText)});`);
  lines.push(`    await tag(${toTsStringLiteral(tagText)});`);
}

function generateEvidenceObject(lines: string[], appNameReadable: string, suiteLabel: string, pageName: string, url: string, testObjective: string, usePageFromFixture: boolean): void {
  lines.push(`    const evidence = createEvidence({`);
  lines.push(`      application: ${toTsStringLiteral(appNameReadable)},`);
  lines.push(`      suite: ${toTsStringLiteral(suiteLabel)},`);
  lines.push(`      browser: testInfo.project.name || 'chromium',`);
  lines.push(`      pageName: ${toTsStringLiteral(pageName)},`);
  lines.push(`      pageUrl: ${toTsStringLiteral(url)},`);
  lines.push(`      testObjective: ${toTsStringLiteral(testObjective)},`);
  lines.push('    });');
}

function generateTestCode(pomInfo: POMInfo, siteMapPage: SiteMapPage, safeFolder: string, domain: string, suite: string, siteUrl: string, appNameReadable: string, testFilePath: string, pomFilePath: string): string {
  const lines: string[] = [];
  const { className, url, properties } = pomInfo;
  const suiteLabel = SUITE_LABEL[suite] || 'Test Suite';

  lines.push("import { test, expect } from '@playwright/test';");
  lines.push("import { label, severity, feature, story, tag } from 'allure-js-commons';");
  const pomImport = buildRelativeImportPath(testFilePath, pomFilePath);
  lines.push(`import { ${className} } from '${pomImport}';`);
  const evidenceImport = buildRelativeImportPath(testFilePath, path.join(ROOT, 'src', 'core', 'reporting', 'executionEvidence.ts'));
  lines.push(`import { createEvidence, attachExecutionSummary } from '${evidenceImport}';`);
  const progressImport = buildRelativeImportPath(testFilePath, path.join(ROOT, 'src', 'core', 'reporting', 'testProgressLogger.ts'));
  lines.push(`import { logProgress, logPass, logFail, logSkip, logError, logAction, logValidation } from '${progressImport}';`);
  lines.push('');

  const pageTitle = siteMapPage.title || 'Untitled Page';
  const pageName = normalizeVisibleText(pageTitle);
  const titleMatch = pageName.replace(/[.*+?^${}()|[\]\/]/g, '\\$&');
  const urlMatch = url.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

  const describeName = `${pageName} (${siteUrl}) — ${suite.charAt(0).toUpperCase() + suite.slice(1)}`;
  lines.push(`test.describe(${toTsStringLiteral(describeName)}, () => {`);
  lines.push('  let appPage: ' + className + ';');
  lines.push('');

  const beforeEachLines = generateBeforeEach(className);
  lines.push(...beforeEachLines);
  lines.push('');

  const afterEachLines = generateAfterEach();
  lines.push(...afterEachLines);
  lines.push('');

  if (suite === 'smoke') {
    generateSmokeTests(lines, className, siteMapPage, properties, appNameReadable, suiteLabel, siteUrl, domain, pageName, url, urlMatch, titleMatch);
  } else if (suite === 'sanity') {
    generateSanityTests(lines, className, siteMapPage, properties, appNameReadable, suiteLabel, siteUrl, domain, pageName, url, urlMatch, titleMatch);
  } else if (suite === 'regression') {
    generateRegressionTests(lines, className, siteMapPage, properties, appNameReadable, suiteLabel, siteUrl, domain, pageName, url, urlMatch, titleMatch);
  }

  lines.push("});\n");
  return lines.join('\n');
}

function generateSmokeTests(
  lines: string[], className: string, siteMapPage: SiteMapPage, properties: POMProperty[],
  appNameReadable: string, suiteLabel: string, siteUrl: string, domain: string, pageName: string, url: string, urlMatch: string, titleMatch: string
): void {
  const pageLoadDesc = `${pageName} — Verify ${pageName} (${siteUrl}) @smoke`;
  lines.push(`  test(${toTsStringLiteral(pageLoadDesc)}, async ({ page }, testInfo) => {`);
  generateAllureAnnotations(lines, suiteLabel, siteUrl, domain, pageName, 'Verify page loads successfully', 'critical', 'smoke');
  generateEvidenceObject(lines, appNameReadable, suiteLabel, pageName, url, 'Verify page loads successfully', true);
  lines.push('');
  lines.push(`    await logValidation('Verify page URL is correct');`);
  lines.push(`    await test.step(${toTsStringLiteral('Verify the page URL is correct')}, async () => {`);
  lines.push(`      await expect(appPage.page).toHaveURL(/${urlMatch}/);`);
  lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral('Verified URL is correct')});`);
  lines.push('    });');
  lines.push('');
  lines.push(`    await logValidation('Verify page title is displayed');`);
  lines.push(`    await test.step(${toTsStringLiteral('Verify the page title is displayed')}, async () => {`);
  lines.push(`      await expect(appPage.page).toHaveTitle(/${titleMatch}/);`);
  lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral('Verified title is correct')});`);
  lines.push('    });');
  lines.push('');
  lines.push('    await attachExecutionSummary(evidence, page, testInfo);');
  lines.push('  });');
  lines.push('');

  const headingProps = properties.filter(p => p.type === 'heading');
  if (headingProps.length > 0) {
    const hText = getReadableElementText(headingProps[0]);
    lines.push(`  test(${toTsStringLiteral(`${pageName} — Verify heading '${hText}' on ${pageName} (${siteUrl}) @smoke`)}, async ({ page }, testInfo) => {`);
    generateAllureAnnotations(lines, suiteLabel, siteUrl, domain, pageName, 'Verify main heading is visible', 'critical', 'smoke');
    generateEvidenceObject(lines, appNameReadable, suiteLabel, pageName, url, 'Verify main heading is visible', true);
    lines.push('');
    lines.push(`    await logValidation(${toTsStringLiteral(`Verify heading '${hText}' is visible`)});`);
    lines.push(`    await test.step(${toTsStringLiteral(`Verify heading '${hText}' is visible`)}, async () => {`);
    lines.push(`      await expect(appPage.${headingProps[0].name}.first()).toBeVisible({ timeout: 5000 });`);
    lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral(`Verified heading is visible`)});`);
    lines.push('    });');
    lines.push('');
    lines.push('    await attachExecutionSummary(evidence, page, testInfo);');
    lines.push('  });');
  }
}

function generateSanityTests(
  lines: string[], className: string, siteMapPage: SiteMapPage, properties: POMProperty[],
  appNameReadable: string, suiteLabel: string, siteUrl: string, domain: string, pageName: string, url: string, urlMatch: string, titleMatch: string
): void {
  lines.push(`  test(${toTsStringLiteral(`${pageName} — Verify ${pageName} (${siteUrl}) @sanity`)}, async ({ page }, testInfo) => {`);
  generateAllureAnnotations(lines, suiteLabel, siteUrl, domain, pageName, 'Verify page loads correctly', 'normal', 'sanity');
  generateEvidenceObject(lines, appNameReadable, suiteLabel, pageName, url, 'Verify page loads correctly', true);
  lines.push('');
  lines.push(`    await logValidation('Verify URL is correct');`);
  lines.push(`    await test.step(${toTsStringLiteral('Verify the URL is correct')}, async () => {`);
  lines.push(`      await expect(appPage.page).toHaveURL(/${urlMatch}/);`);
  lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral('Verified URL is correct')});`);
  lines.push('    });');
  lines.push('');
  lines.push(`    await logValidation('Verify page title is displayed');`);
  lines.push(`    await test.step(${toTsStringLiteral('Verify page title is displayed')}, async () => {`);
  lines.push(`      await expect(appPage.page).toHaveTitle(/${titleMatch}/);`);
  lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral('Verified title is correct')});`);
  lines.push('    });');
  lines.push('');
  lines.push('    await attachExecutionSummary(evidence, page, testInfo);');
  lines.push('  });');

  const propsByType: Record<string, POMProperty[]> = {};
  for (const prop of properties) {
    if (!propsByType[prop.type]) propsByType[prop.type] = [];
    propsByType[prop.type].push(prop);
  }

  const typeCounts = getElementTypeCounts(siteMapPage);
  const sanityTypes = ['heading', 'link', 'button', 'input'];

  for (const type of sanityTypes) {
    const typeProps = propsByType[type] || [];
    const count = typeCounts[type] || 0;
    if (typeProps.length === 0) continue;
    const displayProps = typeProps.slice(0, MAX_PROPERTIES_PER_TYPE);
    const typeLabelNoun = type.charAt(0).toUpperCase() + type.slice(1);
    const isPlural = count !== 1;
    const desc = `${pageName} — Verify ${count} ${typeLabelNoun}${isPlural ? 's' : ''} on ${pageName} (${siteUrl}) @sanity`;

    lines.push(`  test(${toTsStringLiteral(desc)}, async ({ page }, testInfo) => {`);
    generateAllureAnnotations(lines, suiteLabel, siteUrl, domain, pageName, `Verify ${typeLabelNoun} elements are present`, 'normal', 'sanity');
    generateEvidenceObject(lines, appNameReadable, suiteLabel, pageName, url, `Verify ${typeLabelNoun} elements are present`, true);
    lines.push('');
    for (const prop of displayProps) {
      const elemText = getReadableElementText(prop);
      const stepDesc = `Verify that the ${type} '${elemText}' is visible and accessible`;
      lines.push(`    await logValidation(${toTsStringLiteral(`Verify ${type} '${elemText}' is accessible`)});`);
      lines.push(`    await test.step(${toTsStringLiteral(stepDesc)}, async () => {`);
      lines.push(`      await expect(appPage.${prop.name}.first()).toBeAttached({ timeout: 5000 });`);
      lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral(stepDesc)});`);
      lines.push('    });');
    }
    lines.push('');
    lines.push('    await attachExecutionSummary(evidence, page, testInfo);');
    lines.push('  });');
    lines.push('');
  }
}

function generateRegressionTests(
  lines: string[], className: string, siteMapPage: SiteMapPage, properties: POMProperty[],
  appNameReadable: string, suiteLabel: string, siteUrl: string, domain: string, pageName: string, url: string, urlMatch: string, titleMatch: string
): void {
  lines.push(`  test(${toTsStringLiteral(`${pageName} — Verify ${pageName} (${siteUrl}) @regression`)}, async ({ page }, testInfo) => {`);
  generateAllureAnnotations(lines, suiteLabel, siteUrl, domain, pageName, 'Verify page loads for regression', 'minor', 'regression');
  generateEvidenceObject(lines, appNameReadable, suiteLabel, pageName, url, 'Verify page loads for regression', true);
  lines.push('');
  lines.push(`    await logValidation('Verify URL is correct');`);
  lines.push(`    await test.step(${toTsStringLiteral('Verify the URL is correct')}, async () => {`);
  lines.push(`      await expect(appPage.page).toHaveURL(/${urlMatch}/);`);
  lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral('Verified URL is correct')});`);
  lines.push('    });');
  lines.push('');
  lines.push('    await attachExecutionSummary(evidence, page, testInfo);');
  lines.push('  });');
  lines.push('');

  const propsByType: Record<string, POMProperty[]> = {};
  for (const prop of properties) {
    if (!propsByType[prop.type]) propsByType[prop.type] = [];
    propsByType[prop.type].push(prop);
  }

  const typeConfigs: { type: string; story: string; severity: string; isLink?: boolean }[] = [
    { type: 'heading', story: 'Verify headings are present', severity: 'minor' },
    { type: 'link', story: 'Verify navigation links are present', severity: 'minor', isLink: true },
    { type: 'button', story: 'Verify buttons are present', severity: 'minor' },
    { type: 'input', story: 'Verify input fields are present', severity: 'minor' },
    { type: 'form', story: 'Verify forms are present', severity: 'minor' },
    { type: 'table', story: 'Verify tables are present', severity: 'minor' },
    { type: 'menu', story: 'Verify navigation menus are present', severity: 'minor' },
    { type: 'dropdown', story: 'Verify dropdowns are present', severity: 'minor' },
  ];

  for (const cfg of typeConfigs) {
    const { type, story, severity: sev, isLink } = cfg;
    const typeProps = propsByType[type] || [];
    const typeCount = (siteMapPage as any)[type + 's']?.length || typeProps.length;
    if (typeProps.length === 0) continue;
    const displayProps = typeProps.slice(0, MAX_PROPERTIES_PER_TYPE);
    const typeLabelNoun = type.charAt(0).toUpperCase() + type.slice(1);
    const isPlural = typeCount !== 1;
    const desc = `${pageName} — Verify ${typeCount} ${typeLabelNoun}${isPlural ? 's' : ''} on ${pageName} (${siteUrl}) @regression`;

    lines.push(`  test(${toTsStringLiteral(desc)}, async ({ page }, testInfo) => {`);
    generateAllureAnnotations(lines, suiteLabel, siteUrl, domain, pageName, story, sev, 'regression');
    generateEvidenceObject(lines, appNameReadable, suiteLabel, pageName, url, `Verify ${typeLabelNoun} elements are present`, true);
    lines.push('');
    for (const prop of displayProps) {
      const elemText = getReadableElementText(prop);
      if (isLink) {
        const stepDesc = `Verify that the ${type} '${elemText}' exists with valid href`;
        lines.push(`    await logValidation(${toTsStringLiteral(`Verify ${type} '${elemText}' has valid href`)});`);
        lines.push(`    await test.step(${toTsStringLiteral(stepDesc)}, async () => {`);
        lines.push(`      await expect(appPage.${prop.name}.first()).toBeAttached({ timeout: 5000 });`);
        lines.push(`      const href = await appPage.${prop.name}.first().getAttribute('href');`);
        lines.push(`      expect(href).toBeTruthy();`);
        lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral(stepDesc)});`);
        lines.push('    });');
      } else {
        const stepDesc = `Verify that the ${type} '${elemText}' exists in the DOM`;
        lines.push(`    await logValidation(${toTsStringLiteral(`Verify ${type} '${elemText}' exists`)});`);
        lines.push(`    await test.step(${toTsStringLiteral(stepDesc)}, async () => {`);
        lines.push(`      await expect(appPage.${prop.name}.first()).toBeAttached({ timeout: 5000 });`);
        lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral(stepDesc)});`);
        lines.push('    });');
      }
    }
    lines.push('');
    lines.push('    await attachExecutionSummary(evidence, page, testInfo);');
    lines.push('  });');
    lines.push('');
  }
}

export function generateTests(safeFolder: string, domain: string, suite: string, siteUrl: string, appNameReadable: string): void {
  logger.info(`Generating tests for ${domain}, suite: @${suite}`);

  const tempDir = getTempUrlDir(safeFolder);
  const siteMapPath = path.join(tempDir, 'site-map.json');

  if (!fs.existsSync(siteMapPath)) {
    logger.error(`site-map.json not found at ${siteMapPath}`);
    return;
  }

  const raw = fs.readFileSync(siteMapPath, 'utf-8');
  const siteMap: SiteMapData = JSON.parse(raw);
  logger.debug(`Found ${siteMap.pages.length} pages`);

  const generatedTestsDir = getGeneratedTestsDir(safeFolder);
  ensureDir(generatedTestsDir);

  let generatedCount = 0;
  let skippedCount = 0;

  // Generate journey-based tests first (doesn't need POMs)
  const journeyCount = generateJourneyTestFile(safeFolder, generatedTestsDir, suite, siteUrl, domain);
  if (journeyCount > 0) {
    generatedCount += journeyCount;
    logger.info(`Generated ${journeyCount} journey test(s)`);
  }

  // Generate page-based element tests
  const generatedPomsDir = getGeneratedPagesDir(safeFolder);
  let pomFiles: string[];
  try {
    pomFiles = fs.readdirSync(generatedPomsDir);
  } catch {
    logger.warn(`POMs directory not found at ${generatedPomsDir}, skipping page-based tests`);
    logger.success(`Generated ${generatedCount} test file(s) total`);
    return;
  }
  logger.debug(`Found ${pomFiles.length} POM files`);

  for (const sitePage of siteMap.pages) {
    const pageUrl = sitePage.url;
    let pomInfo: POMInfo | null = null;
    for (const pomFile of pomFiles) {
      const filePath = path.join(generatedPomsDir, pomFile);
      const info = parsePOMFile(filePath);
      if (info && info.url === pageUrl) {
        pomInfo = info;
        break;
      }
    }
    if (!pomInfo) {
      logger.warn(`Skipping ${sitePage.title} - no matching POM`);
      skippedCount++;
      continue;
    }

    const className = pomInfo.className;
    const specFileName = className.replace(/[^a-zA-Z0-9]/g, '') + '.spec.ts';
    const specFilePath = path.join(generatedTestsDir, specFileName);
    const pomFilePath = path.join(generatedPomsDir, pomInfo.fileName);
    const testCode = generateTestCode(pomInfo, sitePage, safeFolder, domain, suite, siteUrl, appNameReadable, specFilePath, pomFilePath);
    fs.writeFileSync(specFilePath, testCode, 'utf-8');
    logger.debug(`Created: ${specFileName}`);
    generatedCount++;
    emitDashboardProgress({ phase: 'generating', suite, domain, message: `Created test: ${specFileName}` });
  }

  logger.success(`Generated ${generatedCount} test files (${skippedCount} skipped)`);
  emitDashboardProgress({ phase: 'generating', suite, domain, message: `Created ${generatedCount} test file(s) (${skippedCount} skipped)` });

  validateGeneratedImports(generatedTestsDir);

  const urlRunDir = getUrlRunDir(safeFolder);
  const testsDir = path.join(urlRunDir, 'tests');
  ensureDir(testsDir);
  const testFiles = fs.readdirSync(generatedTestsDir);
  for (const file of testFiles) {
    if (file.endsWith('.spec.ts')) {
      const src = path.join(generatedTestsDir, file);
      const dest = path.join(testsDir, file);
      fs.copyFileSync(src, dest);
    }
  }
}

function generateJourneyTestFile(
  safeFolder: string,
  testDir: string,
  suite: string,
  siteUrl: string,
  domain: string
): number {
  const journeysPath = path.resolve(getGeneratedDir(), 'journeys.json');
  if (!fs.existsSync(journeysPath)) return 0;

  let journeyData: any;
  try {
    const raw = fs.readFileSync(journeysPath, 'utf-8');
    journeyData = JSON.parse(raw);
  } catch {
    return 0;
  }

  const journeys = (journeyData.journeys || []).filter((j: any) =>
    j.suite && j.suite.includes(suite)
  );

  if (journeys.length === 0) return 0;

  const lines: string[] = [];
  lines.push("import { test, expect } from '@playwright/test';");
  lines.push("import { label, severity, feature, story, tag } from 'allure-js-commons';");
  const specFilePath = path.join(testDir, 'journeys.spec.ts');
  const progressImport = buildRelativeImportPath(specFilePath, path.join(ROOT, 'src', 'core', 'reporting', 'testProgressLogger.ts'));
  lines.push(`import { logProgress, logPass, logFail, logSkip, logError, logAction, logValidation } from '${progressImport}';`);
  lines.push('');

  lines.push(`test.describe(${toTsStringLiteral(`Journeys — ${siteUrl} — ${suite.charAt(0).toUpperCase() + suite.slice(1)}`)}, () => {`);
  lines.push('');

  for (let i = 0; i < journeys.length; i++) {
    const j = journeys[i];
    const targetDomain = j.targetUrl ? new URL(j.targetUrl).hostname : 'unknown';
    const testName = `${j.action} → ${targetDomain} @${suite}`;
    const targetText = j.action.replace(/^Click\s+/i, '').trim();

    lines.push(`  test(${toTsStringLiteral(testName)}, async ({ page }, testInfo) => {`);
    lines.push(`    await label('suite', ${toTsStringLiteral(`${suite.charAt(0).toUpperCase() + suite.slice(1)} Test Suite`)});`);
    lines.push(`    await label('url', ${toTsStringLiteral(siteUrl)});`);
    lines.push(`    await label('domain', ${toTsStringLiteral(domain)});`);
    lines.push(`    await feature(${toTsStringLiteral('Journey: ' + j.action)});`);
    lines.push(`    await story(${toTsStringLiteral(j.expectedResult)});`);
    lines.push(`    await severity(${toTsStringLiteral('normal')});`);
    lines.push(`    await tag(${toTsStringLiteral(suite)});`);
    lines.push('');

    const startLabel = `Open starting page: ${j.startPage || siteUrl}`;
    lines.push(`    await logAction(${toTsStringLiteral(startLabel)});`);
    lines.push(`    await test.step(${toTsStringLiteral(startLabel)}, async () => {`);
    lines.push(`      await page.goto(${toTsStringLiteral(j.startUrl || siteUrl)}, { waitUntil: 'domcontentloaded' });`);
    lines.push('    });');

    lines.push(`    await logAction('Scroll page to discover content');`);
    lines.push(`    await test.step(${toTsStringLiteral('Scroll page to discover content')}, async () => {`);
    lines.push(`      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));`);
    lines.push(`      await page.waitForTimeout(500);`);
    lines.push(`      await page.evaluate(() => window.scrollTo(0, 0));`);
    lines.push('    });');
    lines.push('');

    lines.push(`    await logAction(${toTsStringLiteral(j.action)});`);
    lines.push(`    await test.step(${toTsStringLiteral(j.action)}, async () => {`);
    if (j.actionType === 'link') {
      lines.push(`      const link = page.getByRole('link', { name: ${toTsStringLiteral(targetText)} }).first();`);
      lines.push('      await link.click();');
    } else {
      lines.push(`      const btn = page.getByRole('button', { name: ${toTsStringLiteral(targetText)} }).first();`);
      lines.push('      await btn.click();');
    }
    lines.push('    });');
    lines.push('');

    lines.push(`    await logValidation('Verify navigation completed successfully');`);
    lines.push(`    await test.step(${toTsStringLiteral('Verify navigation completed successfully')}, async () => {`);
    lines.push(`      await page.waitForLoadState('domcontentloaded', { timeout: 15000 });`);
    lines.push(`      const currentUrl = page.url();`);
    lines.push(`      expect(currentUrl).toBeTruthy();`);
    lines.push(`      expect(currentUrl).not.toBe('about:blank');`);
    lines.push('    });');
    lines.push('');

    lines.push(`    await logAction('Capture screenshot evidence');`);
    lines.push(`    await test.step(${toTsStringLiteral('Capture screenshot evidence')}, async () => {`);
    lines.push(`      try {`);
    lines.push(`        const buf = await page.screenshot({ type: 'png' });`);
    lines.push(`        await testInfo.attach('Journey - ' + ${toTsStringLiteral(j.name)}, { body: buf, contentType: 'image/png' });`);
    lines.push(`      } catch {}`);
    lines.push('    });');
    lines.push('');

    lines.push(`    logPass('Journey passed: ' + ${toTsStringLiteral(j.name)});`);
    lines.push('  });');
    lines.push('');
  }

  lines.push('});\n');

  const specFileName = 'journeys.spec.ts';
  fs.writeFileSync(specFilePath, lines.join('\n'), 'utf-8');
  logger.debug(`Created journey test file: ${specFileName}`);

  return journeys.length;
}

function validateGeneratedImports(testsDir: string): void {
  const importRegex = /from\s+['"]([^'"]+)['"]/g;
  const files = fs.readdirSync(testsDir).filter(f => f.endsWith('.spec.ts'));
  for (const file of files) {
    const filePath = path.join(testsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    let match: RegExpExecArray | null;
    importRegex.lastIndex = 0;
    while ((match = importRegex.exec(content)) !== null) {
      const importPath = match[1];
      if (importPath.startsWith('.')) {
        const resolved = path.resolve(path.dirname(filePath), importPath);
        const targetFile = fs.existsSync(resolved) ? resolved :
          fs.existsSync(resolved + '.ts') ? resolved + '.ts' : null;
        if (!targetFile) {
          logger.error(`Missing generated import target: ${importPath} from file: ${filePath}`);
        }
      }
    }
  }
}
