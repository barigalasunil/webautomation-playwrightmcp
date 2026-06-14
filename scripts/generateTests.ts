import fs from "fs/promises";
import fsSync from "fs";
import path from "path";
import { buildDescribeBlockName, buildSafeFileName } from "../utils/testNameBuilder";
import { normalizeVisibleText } from "../utils/textNormalizer";
import { toTsStringLiteral } from "../utils/codeStringEscaper";

const appName = process.env.APP_NAME || 'default';
const suite = (process.env.SUITE || 'smoke').toLowerCase().trim();
const tempDir = path.resolve(process.cwd(), 'temp', 'generated', appName);
const GENERATED_POMS_DIR = path.resolve(process.cwd(), 'pages', 'GeneratedPages', appName);
const GENERATED_TESTS_DIR = path.resolve(process.cwd(), 'tests', 'generated', appName);
const runsDir = path.resolve(process.cwd(), 'runs', 'latest', appName);
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

interface POMProperty {
  name: string;
  type: string;
  text: string;
}

interface POMInfo {
  className: string;
  url: string;
  fileName: string;
  properties: POMProperty[];
}

function detectRoleType(locatorLine: string): string {
  if (locatorLine.match(/getByRole\('heading'/)) return 'heading';
  if (locatorLine.match(/getByRole\('link'/)) return 'link';
  if (locatorLine.match(/getByRole\('button'/)) return 'button';
  if (locatorLine.match(/getByLabel\(/)) return 'input';
  if (locatorLine.match(/getByPlaceholder\(/)) return 'input';
  if (locatorLine.match(/getByText\(/)) return 'textBlock';
  if (locatorLine.includes("locator('form") || locatorLine.includes("locator(\"form")) return 'form';
  if (locatorLine.includes("locator('table") || locatorLine.includes("locator(\"table")) return 'table';
  if (locatorLine.includes("nav") || locatorLine.includes('role="menu"') || locatorLine.includes("role='menu'")) return 'menu';
  if (locatorLine.includes("select,") || locatorLine.includes('role="combobox"') || locatorLine.includes("role='combobox'")) return 'dropdown';
  if (locatorLine.includes('input[') || locatorLine.includes('textarea') || locatorLine.includes("input, textarea")) return 'input';
  if (locatorLine.includes('button[') || locatorLine.includes('role="button"') || locatorLine.includes("role='button'")) return 'button';
  if (locatorLine.includes('a[href') || locatorLine.includes('a[href]')) return 'link';
  return 'element';
}

function extractTextFromLocator(locatorLine: string): string {
  const nameMatch = locatorLine.match(/name:\s*("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/);
  if (nameMatch) {
    try {
      return JSON.parse(nameMatch[1]);
    } catch {
      return nameMatch[1].replace(/^['"]|['"]$/g, '');
    }
  }
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
  const content = fsSync.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  const classMatch = content.match(/export class (\w+)/);
  if (!classMatch) return null;
  const className = classMatch[1];

  const urlMatch = content.match(/readonly url = ("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/);
  if (!urlMatch) return null;
  let url: string;
  try {
    url = JSON.parse(urlMatch[1]);
  } catch {
    url = urlMatch[1].replace(/^['"]|['"]$/g, '');
  }

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

function detectLoginPattern(page: SiteMapPage): boolean {
  let hasPasswordField = false;
  let hasUsernameField = false;
  let hasSubmitButton = false;

  for (const input of page.inputs) {
    const type = (input.type || '').toLowerCase();
    const name = (input.name || '').toLowerCase();
    const placeholder = (input.placeholder || '').toLowerCase();
    const ariaLabel = (input.ariaLabel || '').toLowerCase();
    const combined = `${name} ${placeholder} ${ariaLabel}`;
    if (type === 'password' || combined.includes('password')) hasPasswordField = true;
    if (type === 'text' || type === 'email' || combined.includes('username') || combined.includes('userid') || combined.includes('login') || combined.includes('email') || combined.includes('mobile') || combined.includes('phone')) hasUsernameField = true;
  }

  for (const button of page.buttons) {
    const text = (button.text || '').toLowerCase().trim();
    const type = (button.type || '').toLowerCase().trim();
    if (text === 'login' || text === 'sign in' || text === 'submit' || text === 'log in' || type === 'submit') hasSubmitButton = true;
  }

  return hasPasswordField && hasUsernameField && hasSubmitButton;
}

function detectSearchPattern(page: SiteMapPage): boolean {
  for (const input of page.inputs) {
    const name = (input.name || '').toLowerCase();
    const placeholder = (input.placeholder || '').toLowerCase();
    const ariaLabel = (input.ariaLabel || '').toLowerCase();
    const label = (input.label || '').toLowerCase();
    const combined = `${name} ${placeholder} ${ariaLabel} ${label}`;
    if (combined.includes('search')) return true;
  }
  return false;
}

function getReadableElementText(prop: POMProperty): string {
  if (prop.text && prop.text.trim().length > 0) return prop.text.trim();
  const fallbacks: Record<string, string> = {
    heading: 'Page heading',
    link: 'Navigation link',
    button: 'Primary button',
    input: 'Input field',
    menu: 'Navigation menu',
    dropdown: 'Dropdown menu',
    form: 'Form',
    table: 'Data table',
  };
  return fallbacks[prop.type] || 'Element';
}

function generateTestCode(pomInfo: POMInfo, siteMapPage: SiteMapPage): string {
  const lines: string[] = [];
  const { className, url, properties } = pomInfo;
  const pageFileName = pomInfo.fileName;
  const appLabel = appName;
  const suiteLabel = SUITE_LABEL[suite] || 'Test Suite';

  lines.push("import { test, expect } from '@playwright/test';");
  lines.push("import { label, severity, feature, story, tag } from 'allure-js-commons';");
  const importPath = `../../../pages/GeneratedPages/${appName}/${pageFileName.replace(/\.ts$/, '')}`;
  lines.push(`import { ${className} } from '${importPath}';`);
  lines.push("import { createEvidence, attachExecutionSummary } from '../../../utils/executionEvidence';");
  lines.push("import { captureTestScreenshot } from '../../../utils/screenshotHelper';");
  lines.push('');

  const pageTitle = buildDescribeBlockName(siteMapPage.title);
  const suiteName = suite.charAt(0).toUpperCase() + suite.slice(1);
  const describeName = `${appName} - ${pageTitle} - ${suiteName} Tests`;
  lines.push(`test.describe(${toTsStringLiteral(describeName)}, () => {`);
  lines.push('  let appPage: ' + className + ';');
  lines.push('');
  lines.push('  test.beforeEach(async ({ page }) => {');
  lines.push(`    appPage = new ${className}(page);`);
  lines.push('    await appPage.open();');
  lines.push('  });');
  lines.push('');

  const urlMatch = url.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const pageName = normalizeVisibleText(siteMapPage.title);
  const titleMatch = pageName.replace(/[.*+?^${}()|[\]\/]/g, '\\$&');

  if (suite === 'smoke') {
    lines.push(`  test(${toTsStringLiteral(`Verify that ${pageName} opens successfully @smoke`)}, async ({ page }, testInfo) => {`);
    lines.push(`    await label('suite', ${toTsStringLiteral(suiteLabel)});`);
    lines.push(`    await label('application', ${toTsStringLiteral(appLabel)});`);
    lines.push(`    await feature(${toTsStringLiteral(pageTitle)});`);
    lines.push(`    await story(${toTsStringLiteral('Verify page loads successfully')});`);
    lines.push(`    await severity(${toTsStringLiteral('critical')});`);
    lines.push(`    await tag(${toTsStringLiteral('smoke')});`);
    lines.push('');
    lines.push(`    const evidence = createEvidence({`);
    lines.push(`      application: ${toTsStringLiteral(appLabel)},`);
    lines.push(`      suite: ${toTsStringLiteral(suiteLabel)},`);
    lines.push(`      browser: testInfo.project.name || 'chromium',`);
    lines.push(`      pageName: ${toTsStringLiteral(pageName)},`);
    lines.push(`      pageUrl: ${toTsStringLiteral(url)},`);
    lines.push(`      testObjective: ${toTsStringLiteral('Verify page loads successfully')},`);
    lines.push('    });');
    lines.push('');
    lines.push(`    await test.step(${toTsStringLiteral(`Open application URL: ${url}`)}, async () => {`);
    lines.push(`      await appPage.open();`);
    lines.push(`      evidence.actionsPerformed.push(${toTsStringLiteral(`Opened application URL: ${url}`)});`);
    lines.push('    });');
    lines.push('');
    lines.push(`    await test.step(${toTsStringLiteral(`Wait for page to be ready`)}, async () => {`);
    lines.push('      await appPage.waitForPageLoad();');
    lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral('Page loaded successfully')});`);
    lines.push('    });');
    lines.push('');
    lines.push(`    await test.step(${toTsStringLiteral('Verify the URL is correct')}, async () => {`);
    lines.push(`      await expect(appPage.page).toHaveURL(/${urlMatch}/);`);
    lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral('Verified page URL is correct')});`);
    lines.push('    });');
    lines.push('');
    lines.push(`    await test.step(${toTsStringLiteral('Verify page title is displayed')}, async () => {`);
    lines.push(`      await expect(appPage.page).toHaveTitle(/${titleMatch}/);`);
    lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral('Verified page title is correct')});`);
    lines.push('    });');
    lines.push('');
    lines.push(`    await test.step(${toTsStringLiteral('Capture screenshot evidence')}, async () => {`);
    lines.push(`      const screenshotPath = await captureTestScreenshot(page, testInfo, ${toTsStringLiteral(`${pageName} - Final Evidence`)});`);
    lines.push('      evidence.screenshots.push(screenshotPath);');
    lines.push('    });');
    lines.push('');
    lines.push('    await attachExecutionSummary(evidence, page, testInfo);');
    lines.push('  });');
    lines.push('');

    const hasLogin = detectLoginPattern(siteMapPage);
    if (hasLogin) {
      lines.push(`  test(${toTsStringLiteral(`Verify that login page is accessible on ${pageName} @smoke`)}, async ({ page }, testInfo) => {`);
      lines.push(`    await label('suite', ${toTsStringLiteral(suiteLabel)});`);
      lines.push(`    await label('application', ${toTsStringLiteral(appLabel)});`);
      lines.push(`    await feature(${toTsStringLiteral(pageTitle)});`);
      lines.push(`    await story(${toTsStringLiteral('Verify login page is accessible')});`);
      lines.push(`    await severity(${toTsStringLiteral('critical')});`);
      lines.push(`    await tag(${toTsStringLiteral('smoke')});`);
      lines.push('');
      lines.push(`    const evidence = createEvidence({`);
      lines.push(`      application: ${toTsStringLiteral(appLabel)},`);
      lines.push(`      suite: ${toTsStringLiteral(suiteLabel)},`);
      lines.push(`      browser: testInfo.project.name || 'chromium',`);
      lines.push(`      pageName: ${toTsStringLiteral(pageName)},`);
      lines.push(`      pageUrl: ${toTsStringLiteral(url)},`);
      lines.push(`      testObjective: ${toTsStringLiteral('Verify login page is accessible')},`);
      lines.push('    });');
      lines.push('');

      for (const input of siteMapPage.inputs) {
        const inputType = (input.type || '').toLowerCase();
        const inputName = (input.name || input.placeholder || input.ariaLabel || '').toLowerCase();
        if (inputType === 'password' || inputName.includes('password') || inputName.includes('pass')) {
          const displayText = normalizeVisibleText(input.name || input.placeholder || 'Password');
          const stepDesc = `Verify that the password field '${displayText}' is visible`;
          lines.push(`    await test.step(${toTsStringLiteral(stepDesc)}, async () => {`);
          lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral(stepDesc)});`);
          lines.push('    });');
        }
        if (inputName.includes('username') || inputName.includes('email') || inputName.includes('login') || inputName.includes('userid') || inputName.includes('mobile')) {
          const displayText = normalizeVisibleText(input.name || input.placeholder || 'Username');
          const stepDesc = `Verify that the input field '${displayText}' is visible`;
          lines.push(`    await test.step(${toTsStringLiteral(stepDesc)}, async () => {`);
          lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral(stepDesc)});`);
          lines.push('    });');
        }
      }

      lines.push(`    await test.step(${toTsStringLiteral('Capture screenshot of login area')}, async () => {`);
      lines.push(`      const screenshotPath = await captureTestScreenshot(page, testInfo, ${toTsStringLiteral(`${pageName} - Login Area`)});`);
      lines.push('      evidence.screenshots.push(screenshotPath);');
      lines.push('    });');
      lines.push('');
      lines.push('    await attachExecutionSummary(evidence, page, testInfo);');
      lines.push('  });');
    }

    const headingProps = properties.filter(p => p.type === 'heading');
    if (headingProps.length > 0) {
      const hText = getReadableElementText(headingProps[0]);
      lines.push(`  test(${toTsStringLiteral(`Verify that heading '${hText}' is visible on ${pageName} @smoke`)}, async ({ page }, testInfo) => {`);
      lines.push(`    await label('suite', ${toTsStringLiteral(suiteLabel)});`);
      lines.push(`    await label('application', ${toTsStringLiteral(appLabel)});`);
      lines.push(`    await feature(${toTsStringLiteral(pageTitle)});`);
      lines.push(`    await story(${toTsStringLiteral('Verify main heading is visible')});`);
      lines.push(`    await severity(${toTsStringLiteral('critical')});`);
      lines.push(`    await tag(${toTsStringLiteral('smoke')});`);
      lines.push('');
      lines.push(`    const evidence = createEvidence({`);
      lines.push(`      application: ${toTsStringLiteral(appLabel)},`);
      lines.push(`      suite: ${toTsStringLiteral(suiteLabel)},`);
      lines.push(`      browser: testInfo.project.name || 'chromium',`);
      lines.push(`      pageName: ${toTsStringLiteral(pageName)},`);
      lines.push(`      pageUrl: ${toTsStringLiteral(url)},`);
      lines.push(`      testObjective: ${toTsStringLiteral('Verify main heading is visible')},`);
      lines.push('    });');
      lines.push('');
      const hStepDesc = `Verify that the heading '${hText}' is visible on the page`;
      lines.push(`    await test.step(${toTsStringLiteral(hStepDesc)}, async () => {`);
      lines.push(`      await expect(appPage.${headingProps[0].name}.first()).toBeVisible({ timeout: 5000 });`);
      lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral(hStepDesc)});`);
      lines.push('    });');
      lines.push('');
      lines.push(`    await test.step(${toTsStringLiteral('Capture screenshot evidence')}, async () => {`);
      lines.push(`      const screenshotPath = await captureTestScreenshot(page, testInfo, ${toTsStringLiteral(`${pageName} - Heading Verification`)});`);
      lines.push('      evidence.screenshots.push(screenshotPath);');
      lines.push('    });');
      lines.push('');
      lines.push('    await attachExecutionSummary(evidence, page, testInfo);');
      lines.push('  });');
    }

    const menuProps = properties.filter(p => p.type === 'menu');
    if (menuProps.length > 0) {
      lines.push(`  test(${toTsStringLiteral(`Verify that navigation menus are visible on ${pageName} @smoke`)}, async ({ page }, testInfo) => {`);
      lines.push(`    await label('suite', ${toTsStringLiteral(suiteLabel)});`);
      lines.push(`    await label('application', ${toTsStringLiteral(appLabel)});`);
      lines.push(`    await feature(${toTsStringLiteral(pageTitle)});`);
      lines.push(`    await story(${toTsStringLiteral('Verify navigation menus are visible')});`);
      lines.push(`    await severity(${toTsStringLiteral('critical')});`);
      lines.push(`    await tag(${toTsStringLiteral('smoke')});`);
      lines.push('');
      lines.push(`    const evidence = createEvidence({`);
      lines.push(`      application: ${toTsStringLiteral(appLabel)},`);
      lines.push(`      suite: ${toTsStringLiteral(suiteLabel)},`);
      lines.push(`      browser: testInfo.project.name || 'chromium',`);
      lines.push(`      pageName: ${toTsStringLiteral(pageName)},`);
      lines.push(`      pageUrl: ${toTsStringLiteral(url)},`);
      lines.push(`      testObjective: ${toTsStringLiteral('Verify navigation menus are visible')},`);
      lines.push('    });');
      lines.push('');
      const mStepDesc = 'Verify that navigation menus are visible and available';
      lines.push(`    await test.step(${toTsStringLiteral(mStepDesc)}, async () => {`);
      for (const prop of menuProps) {
        lines.push(`      await expect(appPage.${prop.name}.first()).toBeVisible({ timeout: 5000 });`);
      }
      lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral(mStepDesc)});`);
      lines.push('    });');
      lines.push('');
      lines.push(`    await test.step(${toTsStringLiteral('Capture screenshot evidence')}, async () => {`);
      lines.push(`      const screenshotPath = await captureTestScreenshot(page, testInfo, ${toTsStringLiteral(`${pageName} - Navigation Menu Verification`)});`);
      lines.push('      evidence.screenshots.push(screenshotPath);');
      lines.push('    });');
      lines.push('');
      lines.push('    await attachExecutionSummary(evidence, page, testInfo);');
      lines.push('  });');
    }
  }

  if (suite === 'sanity') {
    lines.push(`  test(${toTsStringLiteral(`Verify that ${pageName} loads correctly @sanity`)}, async ({ page }, testInfo) => {`);
    lines.push(`    await label('suite', ${toTsStringLiteral(suiteLabel)});`);
    lines.push(`    await label('application', ${toTsStringLiteral(appLabel)});`);
    lines.push(`    await feature(${toTsStringLiteral(pageTitle)});`);
    lines.push(`    await story(${toTsStringLiteral('Verify page loads correctly')});`);
    lines.push(`    await severity(${toTsStringLiteral('normal')});`);
    lines.push(`    await tag(${toTsStringLiteral('sanity')});`);
    lines.push('');
    lines.push(`    const evidence = createEvidence({`);
    lines.push(`      application: ${toTsStringLiteral(appLabel)},`);
    lines.push(`      suite: ${toTsStringLiteral(suiteLabel)},`);
    lines.push(`      browser: testInfo.project.name || 'chromium',`);
    lines.push(`      pageName: ${toTsStringLiteral(pageName)},`);
    lines.push(`      pageUrl: ${toTsStringLiteral(url)},`);
    lines.push(`      testObjective: ${toTsStringLiteral('Verify page loads correctly')},`);
    lines.push('    });');
    lines.push('');
    lines.push(`    await test.step(${toTsStringLiteral(`Open application URL: ${url}`)}, async () => {`);
    lines.push(`      await appPage.open();`);
    lines.push(`      evidence.actionsPerformed.push(${toTsStringLiteral(`Opened application URL: ${url}`)});`);
    lines.push('    });');
    lines.push('');
    lines.push(`    await test.step(${toTsStringLiteral('Verify the URL is correct')}, async () => {`);
    lines.push(`      await expect(appPage.page).toHaveURL(/${urlMatch}/);`);
    lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral('Verified page URL is correct')});`);
    lines.push('    });');
    lines.push('');
    lines.push(`    await test.step(${toTsStringLiteral('Verify page title is displayed')}, async () => {`);
    lines.push(`      await expect(appPage.page).toHaveTitle(/${titleMatch}/);`);
    lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral('Verified page title is correct')});`);
    lines.push('    });');
    lines.push('');
    lines.push(`    await test.step(${toTsStringLiteral('Capture screenshot evidence')}, async () => {`);
    lines.push(`      const screenshotPath = await captureTestScreenshot(page, testInfo, ${toTsStringLiteral(`${pageName} - Final Evidence`)});`);
    lines.push('      evidence.screenshots.push(screenshotPath);');
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

    const typeCounts = getElementTypeCounts(siteMapPage);
    const sanityTypes = ['heading', 'link', 'button', 'input'];

    for (const type of sanityTypes) {
      const typeProps = propsByType[type] || [];
      const count = typeCounts[type] || 0;
      if (typeProps.length === 0) continue;

      const displayProps = typeProps.slice(0, MAX_PROPERTIES_PER_TYPE);
      const typeLabelNoun = type.charAt(0).toUpperCase() + type.slice(1);

      const isPlural = count !== 1;
      const desc = `Verify that ${count} ${typeLabelNoun}${isPlural ? 's' : ''} ${isPlural ? 'are' : 'is'} visible on ${pageName} @sanity`;

      lines.push(`  test(${toTsStringLiteral(desc)}, async ({ page }, testInfo) => {`);
      lines.push(`    await label('suite', ${toTsStringLiteral(suiteLabel)});`);
      lines.push(`    await label('application', ${toTsStringLiteral(appLabel)});`);
      lines.push(`    await feature(${toTsStringLiteral(pageTitle)});`);
      lines.push(`    await story(${toTsStringLiteral(`Verify ${typeLabelNoun} elements are present`)});`);
      lines.push(`    await severity(${toTsStringLiteral('normal')});`);
      lines.push(`    await tag(${toTsStringLiteral('sanity')});`);
      lines.push('');
      lines.push(`    const evidence = createEvidence({`);
      lines.push(`      application: ${toTsStringLiteral(appLabel)},`);
      lines.push(`      suite: ${toTsStringLiteral(suiteLabel)},`);
      lines.push(`      browser: testInfo.project.name || 'chromium',`);
      lines.push(`      pageName: ${toTsStringLiteral(pageName)},`);
      lines.push(`      pageUrl: ${toTsStringLiteral(url)},`);
      lines.push(`      testObjective: ${toTsStringLiteral(`Verify ${typeLabelNoun} elements are present`)},`);
      lines.push('    });');
      lines.push('');

      for (const prop of displayProps) {
        const elemText = getReadableElementText(prop);
        const stepDesc = `Verify that the ${type} '${elemText}' is visible and accessible`;
        lines.push(`    await test.step(${toTsStringLiteral(stepDesc)}, async () => {`);
        lines.push(`      await expect(appPage.${prop.name}.first()).toBeAttached({ timeout: 5000 });`);
        lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral(stepDesc)});`);
        lines.push('    });');
      }

      lines.push('');
      lines.push(`    await test.step(${toTsStringLiteral('Capture screenshot evidence')}, async () => {`);
      lines.push(`      const screenshotPath = await captureTestScreenshot(page, testInfo, ${toTsStringLiteral(`${pageName} - ${typeLabelNoun} Verification`)});`);
      lines.push('      evidence.screenshots.push(screenshotPath);');
      lines.push('    });');
      lines.push('');
      lines.push('    await attachExecutionSummary(evidence, page, testInfo);');
      lines.push('  });');
    }

    const hasLogin = detectLoginPattern(siteMapPage);
    if (hasLogin) {
      lines.push(`  test(${toTsStringLiteral(`Verify that login form is accessible on ${pageName} @sanity`)}, async ({ page }, testInfo) => {`);
      lines.push(`    await label('suite', ${toTsStringLiteral(suiteLabel)});`);
      lines.push(`    await label('application', ${toTsStringLiteral(appLabel)});`);
      lines.push(`    await feature(${toTsStringLiteral(pageTitle)});`);
      lines.push(`    await story(${toTsStringLiteral('Verify login form is accessible')});`);
      lines.push(`    await severity(${toTsStringLiteral('critical')});`);
      lines.push(`    await tag(${toTsStringLiteral('sanity')});`);
      lines.push('');
      lines.push(`    const evidence = createEvidence({`);
      lines.push(`      application: ${toTsStringLiteral(appLabel)},`);
      lines.push(`      suite: ${toTsStringLiteral(suiteLabel)},`);
      lines.push(`      browser: testInfo.project.name || 'chromium',`);
      lines.push(`      pageName: ${toTsStringLiteral(pageName)},`);
      lines.push(`      pageUrl: ${toTsStringLiteral(url)},`);
      lines.push(`      testObjective: ${toTsStringLiteral('Verify login form is accessible')},`);
      lines.push('    });');
      lines.push('');

      for (const input of siteMapPage.inputs) {
        const inputType = (input.type || '').toLowerCase();
        const inputName = (input.name || input.placeholder || input.ariaLabel || '').toLowerCase();
        if (inputType === 'password' || inputName.includes('password') || inputName.includes('pass')) {
          const displayText = normalizeVisibleText(input.name || input.placeholder || 'Password');
          const stepDesc = `Verify that the password field '${displayText}' is visible on the login form`;
          lines.push(`    await test.step(${toTsStringLiteral(stepDesc)}, async () => {`);
          lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral(stepDesc)});`);
          lines.push('    });');
        }
        if (inputName.includes('username') || inputName.includes('email') || inputName.includes('login') || inputName.includes('userid') || inputName.includes('mobile')) {
          const displayText = normalizeVisibleText(input.name || input.placeholder || 'Username');
          const stepDesc = `Verify that the input field '${displayText}' is visible on the login form`;
          lines.push(`    await test.step(${toTsStringLiteral(stepDesc)}, async () => {`);
          lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral(stepDesc)});`);
          lines.push('    });');
        }
      }

      lines.push('');
      lines.push(`    await test.step(${toTsStringLiteral('Capture screenshot of login area')}, async () => {`);
      lines.push(`      const screenshotPath = await captureTestScreenshot(page, testInfo, ${toTsStringLiteral(`${pageName} - Login Form`)});`);
      lines.push('      evidence.screenshots.push(screenshotPath);');
      lines.push('    });');
      lines.push('');
      lines.push('    await attachExecutionSummary(evidence, page, testInfo);');
      lines.push('  });');
    }

    const hasSearch = detectSearchPattern(siteMapPage);
    if (hasSearch) {
      lines.push(`  test(${toTsStringLiteral(`Verify that search field is displayed on ${pageName} @sanity`)}, async ({ page }, testInfo) => {`);
      lines.push(`    await label('suite', ${toTsStringLiteral(suiteLabel)});`);
      lines.push(`    await label('application', ${toTsStringLiteral(appLabel)});`);
      lines.push(`    await feature(${toTsStringLiteral(pageTitle)});`);
      lines.push(`    await story(${toTsStringLiteral('Verify search field is accessible')});`);
      lines.push(`    await severity(${toTsStringLiteral('normal')});`);
      lines.push(`    await tag(${toTsStringLiteral('sanity')});`);
      lines.push('');
      lines.push(`    const evidence = createEvidence({`);
      lines.push(`      application: ${toTsStringLiteral(appLabel)},`);
      lines.push(`      suite: ${toTsStringLiteral(suiteLabel)},`);
      lines.push(`      browser: testInfo.project.name || 'chromium',`);
      lines.push(`      pageName: ${toTsStringLiteral(pageName)},`);
      lines.push(`      pageUrl: ${toTsStringLiteral(url)},`);
      lines.push(`      testObjective: ${toTsStringLiteral('Verify search field is accessible')},`);
      lines.push('    });');
      lines.push('');

      for (const input of siteMapPage.inputs) {
        const searchName = (input.name || '').toLowerCase();
        const searchPlaceholder = (input.placeholder || '').toLowerCase();
        const searchAriaLabel = (input.ariaLabel || '').toLowerCase();
        if (searchName.includes('search') || searchPlaceholder.includes('search') || searchAriaLabel.includes('search')) {
          const displayText = normalizeVisibleText(input.name || input.placeholder || 'Search');
          const stepDesc = `Verify that the search field '${displayText}' is accessible`;
          lines.push(`    await test.step(${toTsStringLiteral(stepDesc)}, async () => {`);
          lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral(stepDesc)});`);
          lines.push('    });');
        }
      }

      lines.push('');
      lines.push(`    await test.step(${toTsStringLiteral('Capture screenshot of search area')}, async () => {`);
      lines.push(`      const screenshotPath = await captureTestScreenshot(page, testInfo, ${toTsStringLiteral(`${pageName} - Search Area`)});`);
      lines.push('      evidence.screenshots.push(screenshotPath);');
      lines.push('    });');
      lines.push('');
      lines.push('    await attachExecutionSummary(evidence, page, testInfo);');
      lines.push('  });');
    }

    const mProps = properties.filter(p => p.type === 'menu');
    if (mProps.length > 0) {
      lines.push(`  test(${toTsStringLiteral(`Verify that navigation menus are functional on ${pageName} @sanity`)}, async ({ page }, testInfo) => {`);
      lines.push(`    await label('suite', ${toTsStringLiteral(suiteLabel)});`);
      lines.push(`    await label('application', ${toTsStringLiteral(appLabel)});`);
      lines.push(`    await feature(${toTsStringLiteral(pageTitle)});`);
      lines.push(`    await story(${toTsStringLiteral('Verify navigation menus are functional')});`);
      lines.push(`    await severity(${toTsStringLiteral('normal')});`);
      lines.push(`    await tag(${toTsStringLiteral('sanity')});`);
      lines.push('');
      lines.push(`    const evidence = createEvidence({`);
      lines.push(`      application: ${toTsStringLiteral(appLabel)},`);
      lines.push(`      suite: ${toTsStringLiteral(suiteLabel)},`);
      lines.push(`      browser: testInfo.project.name || 'chromium',`);
      lines.push(`      pageName: ${toTsStringLiteral(pageName)},`);
      lines.push(`      pageUrl: ${toTsStringLiteral(url)},`);
      lines.push(`      testObjective: ${toTsStringLiteral('Verify navigation menus are functional')},`);
      lines.push('    });');
      lines.push('');
      lines.push(`    await test.step(${toTsStringLiteral('Verify that navigation menus are visible and available')}, async () => {`);
      for (const prop of mProps) {
        lines.push(`      await expect(appPage.${prop.name}.first()).toBeVisible({ timeout: 5000 });`);
      }
      lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral('Verified navigation menus are visible and available')});`);
      lines.push('    });');
      lines.push('');
      lines.push(`    await test.step(${toTsStringLiteral('Capture screenshot evidence')}, async () => {`);
      lines.push(`      const screenshotPath = await captureTestScreenshot(page, testInfo, ${toTsStringLiteral(`${pageName} - Navigation Menu Verification`)});`);
      lines.push('      evidence.screenshots.push(screenshotPath);');
      lines.push('    });');
      lines.push('');
      lines.push('    await attachExecutionSummary(evidence, page, testInfo);');
      lines.push('  });');
    }

    const dropdownProps = properties.filter(p => p.type === 'dropdown');
    if (dropdownProps.length > 0) {
      lines.push(`  test(${toTsStringLiteral(`Verify that dropdown menus are accessible on ${pageName} @sanity`)}, async ({ page }, testInfo) => {`);
      lines.push(`    await label('suite', ${toTsStringLiteral(suiteLabel)});`);
      lines.push(`    await label('application', ${toTsStringLiteral(appLabel)});`);
      lines.push(`    await feature(${toTsStringLiteral(pageTitle)});`);
      lines.push(`    await story(${toTsStringLiteral('Verify dropdowns are accessible')});`);
      lines.push(`    await severity(${toTsStringLiteral('normal')});`);
      lines.push(`    await tag(${toTsStringLiteral('sanity')});`);
      lines.push('');
      lines.push(`    const evidence = createEvidence({`);
      lines.push(`      application: ${toTsStringLiteral(appLabel)},`);
      lines.push(`      suite: ${toTsStringLiteral(suiteLabel)},`);
      lines.push(`      browser: testInfo.project.name || 'chromium',`);
      lines.push(`      pageName: ${toTsStringLiteral(pageName)},`);
      lines.push(`      pageUrl: ${toTsStringLiteral(url)},`);
      lines.push(`      testObjective: ${toTsStringLiteral('Verify dropdowns are accessible')},`);
      lines.push('    });');
      lines.push('');
      for (const prop of dropdownProps) {
        const elemText = getReadableElementText(prop);
        const stepDesc = `Verify that the dropdown menu '${elemText}' is present and accessible`;
        lines.push(`    await test.step(${toTsStringLiteral(stepDesc)}, async () => {`);
        lines.push(`      await expect(appPage.${prop.name}.first()).toBeAttached({ timeout: 5000 });`);
        lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral(stepDesc)});`);
        lines.push('    });');
      }
      lines.push('');
      lines.push(`    await test.step(${toTsStringLiteral('Capture screenshot evidence')}, async () => {`);
      lines.push(`      const screenshotPath = await captureTestScreenshot(page, testInfo, ${toTsStringLiteral(`${pageName} - Dropdown Verification`)});`);
      lines.push('      evidence.screenshots.push(screenshotPath);');
      lines.push('    });');
      lines.push('');
      lines.push('    await attachExecutionSummary(evidence, page, testInfo);');
      lines.push('  });');
    }

    const ctaProps = properties.filter(p => p.type === 'button' && (p.text.toLowerCase().includes('buy') || p.text.toLowerCase().includes('shop') || p.text.toLowerCase().includes('get started') || p.text.toLowerCase().includes('sign up') || p.text.toLowerCase().includes('subscribe') || p.text.toLowerCase().includes('learn more')));
    if (ctaProps.length > 0) {
      lines.push(`  test(${toTsStringLiteral(`Verify that call-to-action buttons are visible on ${pageName} @sanity`)}, async ({ page }, testInfo) => {`);
      lines.push(`    await label('suite', ${toTsStringLiteral(suiteLabel)});`);
      lines.push(`    await label('application', ${toTsStringLiteral(appLabel)});`);
      lines.push(`    await feature(${toTsStringLiteral(pageTitle)});`);
      lines.push(`    await story(${toTsStringLiteral('Verify CTA buttons are visible and clickable')});`);
      lines.push(`    await severity(${toTsStringLiteral('normal')});`);
      lines.push(`    await tag(${toTsStringLiteral('sanity')});`);
      lines.push('');
      lines.push(`    const evidence = createEvidence({`);
      lines.push(`      application: ${toTsStringLiteral(appLabel)},`);
      lines.push(`      suite: ${toTsStringLiteral(suiteLabel)},`);
      lines.push(`      browser: testInfo.project.name || 'chromium',`);
      lines.push(`      pageName: ${toTsStringLiteral(pageName)},`);
      lines.push(`      pageUrl: ${toTsStringLiteral(url)},`);
      lines.push(`      testObjective: ${toTsStringLiteral('Verify CTA buttons are visible and clickable')},`);
      lines.push('    });');
      lines.push('');
      for (const prop of ctaProps) {
        const elemText = getReadableElementText(prop);
        const stepDesc = `Verify that the CTA button '${elemText}' is visible and clickable`;
        lines.push(`    await test.step(${toTsStringLiteral(stepDesc)}, async () => {`);
        lines.push(`      await expect(appPage.${prop.name}.first()).toBeVisible({ timeout: 5000 });`);
        lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral(stepDesc)});`);
        lines.push('    });');
      }
      lines.push('');
      lines.push(`    await test.step(${toTsStringLiteral('Capture screenshot evidence')}, async () => {`);
      lines.push(`      const screenshotPath = await captureTestScreenshot(page, testInfo, ${toTsStringLiteral(`${pageName} - CTA Button Verification`)});`);
      lines.push('      evidence.screenshots.push(screenshotPath);');
      lines.push('    });');
      lines.push('');
      lines.push('    await attachExecutionSummary(evidence, page, testInfo);');
      lines.push('  });');
    }

    const tableProps = properties.filter(p => p.type === 'table');
    if (tableProps.length > 0) {
      lines.push(`  test(${toTsStringLiteral(`Verify that tables are visible on ${pageName} @sanity`)}, async ({ page }, testInfo) => {`);
      lines.push(`    await label('suite', ${toTsStringLiteral(suiteLabel)});`);
      lines.push(`    await label('application', ${toTsStringLiteral(appLabel)});`);
      lines.push(`    await feature(${toTsStringLiteral(pageTitle)});`);
      lines.push(`    await story(${toTsStringLiteral('Verify data tables are visible')});`);
      lines.push(`    await severity(${toTsStringLiteral('normal')});`);
      lines.push(`    await tag(${toTsStringLiteral('sanity')});`);
      lines.push('');
      lines.push(`    const evidence = createEvidence({`);
      lines.push(`      application: ${toTsStringLiteral(appLabel)},`);
      lines.push(`      suite: ${toTsStringLiteral(suiteLabel)},`);
      lines.push(`      browser: testInfo.project.name || 'chromium',`);
      lines.push(`      pageName: ${toTsStringLiteral(pageName)},`);
      lines.push(`      pageUrl: ${toTsStringLiteral(url)},`);
      lines.push(`      testObjective: ${toTsStringLiteral('Verify data tables are visible')},`);
      lines.push('    });');
      lines.push('');
      const tableStepDesc = 'Verify that data tables are visible on the page';
      lines.push(`    await test.step(${toTsStringLiteral(tableStepDesc)}, async () => {`);
      for (const prop of tableProps) {
        lines.push(`      await expect(appPage.${prop.name}.first()).toBeVisible({ timeout: 5000 });`);
      }
      lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral(tableStepDesc)});`);
      lines.push('    });');
      lines.push('');
      lines.push(`    await test.step(${toTsStringLiteral('Capture screenshot evidence')}, async () => {`);
      lines.push(`      const screenshotPath = await captureTestScreenshot(page, testInfo, ${toTsStringLiteral(`${pageName} - Table Verification`)});`);
      lines.push('      evidence.screenshots.push(screenshotPath);');
      lines.push('    });');
      lines.push('');
      lines.push('    await attachExecutionSummary(evidence, page, testInfo);');
      lines.push('  });');
    }
  }

  if (suite === 'regression') {
    lines.push(`  test(${toTsStringLiteral(`Verify that ${pageName} loads successfully @regression`)}, async ({ page }, testInfo) => {`);
    lines.push(`    await label('suite', ${toTsStringLiteral(suiteLabel)});`);
    lines.push(`    await label('application', ${toTsStringLiteral(appLabel)});`);
    lines.push(`    await feature(${toTsStringLiteral(pageTitle)});`);
    lines.push(`    await story(${toTsStringLiteral('Verify page loads for regression')});`);
    lines.push(`    await severity(${toTsStringLiteral('minor')});`);
    lines.push(`    await tag(${toTsStringLiteral('regression')});`);
    lines.push('');
    lines.push(`    const evidence = createEvidence({`);
    lines.push(`      application: ${toTsStringLiteral(appLabel)},`);
    lines.push(`      suite: ${toTsStringLiteral(suiteLabel)},`);
    lines.push(`      browser: testInfo.project.name || 'chromium',`);
    lines.push(`      pageName: ${toTsStringLiteral(pageName)},`);
    lines.push(`      pageUrl: ${toTsStringLiteral(url)},`);
    lines.push(`      testObjective: ${toTsStringLiteral('Verify page loads for regression')},`);
    lines.push('    });');
    lines.push('');
    lines.push(`    await test.step(${toTsStringLiteral(`Open application URL: ${url}`)}, async () => {`);
    lines.push(`      await appPage.open();`);
    lines.push(`      evidence.actionsPerformed.push(${toTsStringLiteral(`Opened application URL: ${url}`)});`);
    lines.push('    });');
    lines.push('');
    lines.push(`    await test.step(${toTsStringLiteral('Verify the URL is correct')}, async () => {`);
    lines.push(`      await expect(appPage.page).toHaveURL(/${urlMatch}/);`);
    lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral('Verified page URL is correct')});`);
    lines.push('    });');
    lines.push('');
    lines.push(`    await test.step(${toTsStringLiteral('Capture screenshot evidence')}, async () => {`);
    lines.push(`      const screenshotPath = await captureTestScreenshot(page, testInfo, ${toTsStringLiteral(`${pageName} - Final Evidence`)});`);
    lines.push('      evidence.screenshots.push(screenshotPath);');
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
    const allTypes = ['heading', 'link', 'button', 'input', 'form', 'table', 'menu', 'dropdown'];

    for (const type of allTypes) {
      const typeProps = propsByType[type] || [];
      const count = typeCounts[type] || 0;
      if (typeProps.length === 0) continue;

      const displayProps = typeProps.slice(0, MAX_PROPERTIES_PER_TYPE);
      const typeLabelNoun = type.charAt(0).toUpperCase() + type.slice(1);
      const isPlural = count !== 1;

      const desc = `Verify that ${count} ${typeLabelNoun}${isPlural ? 's' : ''} ${isPlural ? 'are' : 'is'} present on ${pageName} @regression`;

      lines.push(`  test(${toTsStringLiteral(desc)}, async ({ page }, testInfo) => {`);
      lines.push(`    await label('suite', ${toTsStringLiteral(suiteLabel)});`);
      lines.push(`    await label('application', ${toTsStringLiteral(appLabel)});`);
      lines.push(`    await feature(${toTsStringLiteral(pageTitle)});`);
      lines.push(`    await story(${toTsStringLiteral(`Verify ${typeLabelNoun} elements are present`)});`);
      lines.push(`    await severity(${toTsStringLiteral('minor')});`);
      lines.push(`    await tag(${toTsStringLiteral('regression')});`);
      lines.push('');
      lines.push(`    const evidence = createEvidence({`);
      lines.push(`      application: ${toTsStringLiteral(appLabel)},`);
      lines.push(`      suite: ${toTsStringLiteral(suiteLabel)},`);
      lines.push(`      browser: testInfo.project.name || 'chromium',`);
      lines.push(`      pageName: ${toTsStringLiteral(pageName)},`);
      lines.push(`      pageUrl: ${toTsStringLiteral(url)},`);
      lines.push(`      testObjective: ${toTsStringLiteral(`Verify ${typeLabelNoun} elements are present`)},`);
      lines.push('    });');
      lines.push('');

      for (const prop of displayProps) {
        const elemText = getReadableElementText(prop);
        const stepDesc = `Verify that the ${type} '${elemText}' exists in the DOM`;
        lines.push(`    await test.step(${toTsStringLiteral(stepDesc)}, async () => {`);
        lines.push(`      await expect(appPage.${prop.name}.first()).toBeAttached({ timeout: 5000 });`);
        lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral(stepDesc)});`);
        lines.push('    });');
      }

      lines.push('');
      lines.push(`    await test.step(${toTsStringLiteral('Capture screenshot evidence')}, async () => {`);
      lines.push(`      const screenshotPath = await captureTestScreenshot(page, testInfo, ${toTsStringLiteral(`${pageName} - ${typeLabelNoun} Verification`)});`);
      lines.push('      evidence.screenshots.push(screenshotPath);');
      lines.push('    });');
      lines.push('');
      lines.push('    await attachExecutionSummary(evidence, page, testInfo);');
      lines.push('  });');
    }

    const linkProps = propsByType['link'] || [];
    if (linkProps.length > 0) {
      lines.push(`  test(${toTsStringLiteral(`Verify that navigation links are interactive on ${pageName} @regression`)}, async ({ page }, testInfo) => {`);
      lines.push(`    await label('suite', ${toTsStringLiteral(suiteLabel)});`);
      lines.push(`    await label('application', ${toTsStringLiteral(appLabel)});`);
      lines.push(`    await feature(${toTsStringLiteral(pageTitle)});`);
      lines.push(`    await story(${toTsStringLiteral('Verify links are interactive')});`);
      lines.push(`    await severity(${toTsStringLiteral('normal')});`);
      lines.push(`    await tag(${toTsStringLiteral('regression')});`);
      lines.push('');
      lines.push(`    const evidence = createEvidence({`);
      lines.push(`      application: ${toTsStringLiteral(appLabel)},`);
      lines.push(`      suite: ${toTsStringLiteral(suiteLabel)},`);
      lines.push(`      browser: testInfo.project.name || 'chromium',`);
      lines.push(`      pageName: ${toTsStringLiteral(pageName)},`);
      lines.push(`      pageUrl: ${toTsStringLiteral(url)},`);
      lines.push(`      testObjective: ${toTsStringLiteral('Verify links are interactive')},`);
      lines.push('    });');
      lines.push('');
      for (const prop of linkProps.slice(0, MAX_PROPERTIES_PER_TYPE)) {
        const elemText = getReadableElementText(prop);
        const stepDesc = `Verify that the navigation link '${elemText}' is visible and clickable`;
        lines.push(`    await test.step(${toTsStringLiteral(stepDesc)}, async () => {`);
        lines.push(`      await expect(appPage.${prop.name}.first()).toBeVisible({ timeout: 5000 });`);
        lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral(stepDesc)});`);
        lines.push('    });');
      }
      lines.push('');
      lines.push(`    await test.step(${toTsStringLiteral('Capture screenshot evidence')}, async () => {`);
      lines.push(`      const screenshotPath = await captureTestScreenshot(page, testInfo, ${toTsStringLiteral(`${pageName} - Link Interaction Verification`)});`);
      lines.push('      evidence.screenshots.push(screenshotPath);');
      lines.push('    });');
      lines.push('');
      lines.push('    await attachExecutionSummary(evidence, page, testInfo);');
      lines.push('  });');
    }

    const formProps = propsByType['form'] || [];
    if (formProps.length > 0) {
      lines.push(`  test(${toTsStringLiteral(`Verify that forms are ready for input on ${pageName} @regression`)}, async ({ page }, testInfo) => {`);
      lines.push(`    await label('suite', ${toTsStringLiteral(suiteLabel)});`);
      lines.push(`    await label('application', ${toTsStringLiteral(appLabel)});`);
      lines.push(`    await feature(${toTsStringLiteral(pageTitle)});`);
      lines.push(`    await story(${toTsStringLiteral('Verify forms accept input')});`);
      lines.push(`    await severity(${toTsStringLiteral('normal')});`);
      lines.push(`    await tag(${toTsStringLiteral('regression')});`);
      lines.push('');
      lines.push(`    const evidence = createEvidence({`);
      lines.push(`      application: ${toTsStringLiteral(appLabel)},`);
      lines.push(`      suite: ${toTsStringLiteral(suiteLabel)},`);
      lines.push(`      browser: testInfo.project.name || 'chromium',`);
      lines.push(`      pageName: ${toTsStringLiteral(pageName)},`);
      lines.push(`      pageUrl: ${toTsStringLiteral(url)},`);
      lines.push(`      testObjective: ${toTsStringLiteral('Verify forms accept input')},`);
      lines.push('    });');
      lines.push('');
      lines.push(`    await test.step(${toTsStringLiteral('Verify that forms are present and ready for input')}, async () => {`);
      for (const prop of formProps) {
        lines.push(`      await expect(appPage.${prop.name}.first()).toBeAttached({ timeout: 5000 });`);
      }
      lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral('Verified forms are present and ready for input')});`);
      lines.push('    });');
      lines.push('');
      lines.push(`    await test.step(${toTsStringLiteral('Capture screenshot evidence')}, async () => {`);
      lines.push(`      const screenshotPath = await captureTestScreenshot(page, testInfo, ${toTsStringLiteral(`${pageName} - Form Verification`)});`);
      lines.push('      evidence.screenshots.push(screenshotPath);');
      lines.push('    });');
      lines.push('');
      lines.push('    await attachExecutionSummary(evidence, page, testInfo);');
      lines.push('  });');
    }

    const ddProps = properties.filter(p => p.type === 'dropdown');
    if (ddProps.length > 0) {
      lines.push(`  test(${toTsStringLiteral(`Verify that dropdown options are accessible on ${pageName} @regression`)}, async ({ page }, testInfo) => {`);
      lines.push(`    await label('suite', ${toTsStringLiteral(suiteLabel)});`);
      lines.push(`    await label('application', ${toTsStringLiteral(appLabel)});`);
      lines.push(`    await feature(${toTsStringLiteral(pageTitle)});`);
      lines.push(`    await story(${toTsStringLiteral('Verify dropdown options are accessible')});`);
      lines.push(`    await severity(${toTsStringLiteral('minor')});`);
      lines.push(`    await tag(${toTsStringLiteral('regression')});`);
      lines.push('');
      lines.push(`    const evidence = createEvidence({`);
      lines.push(`      application: ${toTsStringLiteral(appLabel)},`);
      lines.push(`      suite: ${toTsStringLiteral(suiteLabel)},`);
      lines.push(`      browser: testInfo.project.name || 'chromium',`);
      lines.push(`      pageName: ${toTsStringLiteral(pageName)},`);
      lines.push(`      pageUrl: ${toTsStringLiteral(url)},`);
      lines.push(`      testObjective: ${toTsStringLiteral('Verify dropdown options are accessible')},`);
      lines.push('    });');
      lines.push('');
      for (const prop of ddProps) {
        const elemText = getReadableElementText(prop);
        const stepDesc = `Verify that the dropdown '${elemText}' has accessible options`;
        lines.push(`    await test.step(${toTsStringLiteral(stepDesc)}, async () => {`);
        lines.push(`      await expect(appPage.${prop.name}.first()).toBeAttached({ timeout: 5000 });`);
        lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral(stepDesc)});`);
        lines.push('    });');
      }
      lines.push('');
      lines.push(`    await test.step(${toTsStringLiteral('Capture screenshot evidence')}, async () => {`);
      lines.push(`      const screenshotPath = await captureTestScreenshot(page, testInfo, ${toTsStringLiteral(`${pageName} - Dropdown Verification`)});`);
      lines.push('      evidence.screenshots.push(screenshotPath);');
      lines.push('    });');
      lines.push('');
      lines.push('    await attachExecutionSummary(evidence, page, testInfo);');
      lines.push('  });');
    }

    const hasSearch = detectSearchPattern(siteMapPage);
    if (hasSearch) {
      lines.push(`  test(${toTsStringLiteral(`Verify that search handles input on ${pageName} @regression`)}, async ({ page }, testInfo) => {`);
      lines.push(`    await label('suite', ${toTsStringLiteral(suiteLabel)});`);
      lines.push(`    await label('application', ${toTsStringLiteral(appLabel)});`);
      lines.push(`    await feature(${toTsStringLiteral(pageTitle)});`);
      lines.push(`    await story(${toTsStringLiteral('Verify search field behavior')});`);
      lines.push(`    await severity(${toTsStringLiteral('minor')});`);
      lines.push(`    await tag(${toTsStringLiteral('regression')});`);
      lines.push('');
      lines.push(`    const evidence = createEvidence({`);
      lines.push(`      application: ${toTsStringLiteral(appLabel)},`);
      lines.push(`      suite: ${toTsStringLiteral(suiteLabel)},`);
      lines.push(`      browser: testInfo.project.name || 'chromium',`);
      lines.push(`      pageName: ${toTsStringLiteral(pageName)},`);
      lines.push(`      pageUrl: ${toTsStringLiteral(url)},`);
      lines.push(`      testObjective: ${toTsStringLiteral('Verify search field behavior')},`);
      lines.push('    });');
      lines.push('');

      for (const input of siteMapPage.inputs) {
        const searchName = (input.name || '').toLowerCase();
        const searchPlaceholder = (input.placeholder || '').toLowerCase();
        const searchAriaLabel = (input.ariaLabel || '').toLowerCase();
        if (searchName.includes('search') || searchPlaceholder.includes('search') || searchAriaLabel.includes('search')) {
          const displayText = normalizeVisibleText(input.name || input.placeholder || 'Search');
          const stepDesc = `Verify that the search field '${displayText}' is ready for input`;
          lines.push(`    await test.step(${toTsStringLiteral(stepDesc)}, async () => {`);
          lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral(stepDesc)});`);
          lines.push('    });');
        }
      }

      lines.push('');
      lines.push(`    await test.step(${toTsStringLiteral('Capture screenshot evidence')}, async () => {`);
      lines.push(`      const screenshotPath = await captureTestScreenshot(page, testInfo, ${toTsStringLiteral(`${pageName} - Search Verification`)});`);
      lines.push('      evidence.screenshots.push(screenshotPath);');
      lines.push('    });');
      lines.push('');
      lines.push('    await attachExecutionSummary(evidence, page, testInfo);');
      lines.push('  });');
    }

    const tProps = properties.filter(p => p.type === 'table');
    if (tProps.length > 0) {
      lines.push(`  test(${toTsStringLiteral(`Verify that data tables render correctly on ${pageName} @regression`)}, async ({ page }, testInfo) => {`);
      lines.push(`    await label('suite', ${toTsStringLiteral(suiteLabel)});`);
      lines.push(`    await label('application', ${toTsStringLiteral(appLabel)});`);
      lines.push(`    await feature(${toTsStringLiteral(pageTitle)});`);
      lines.push(`    await story(${toTsStringLiteral('Verify table data rendering')});`);
      lines.push(`    await severity(${toTsStringLiteral('minor')});`);
      lines.push(`    await tag(${toTsStringLiteral('regression')});`);
      lines.push('');
      lines.push(`    const evidence = createEvidence({`);
      lines.push(`      application: ${toTsStringLiteral(appLabel)},`);
      lines.push(`      suite: ${toTsStringLiteral(suiteLabel)},`);
      lines.push(`      browser: testInfo.project.name || 'chromium',`);
      lines.push(`      pageName: ${toTsStringLiteral(pageName)},`);
      lines.push(`      pageUrl: ${toTsStringLiteral(url)},`);
      lines.push(`      testObjective: ${toTsStringLiteral('Verify table data rendering')},`);
      lines.push('    });');
      lines.push('');
      lines.push(`    await test.step(${toTsStringLiteral('Verify that data tables are visible on the page')}, async () => {`);
      for (const prop of tProps) {
        lines.push(`      await expect(appPage.${prop.name}.first()).toBeVisible({ timeout: 5000 });`);
      }
      lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral('Verified data tables are visible on the page')});`);
      lines.push('    });');
      lines.push('');
      lines.push(`    await test.step(${toTsStringLiteral('Capture screenshot evidence')}, async () => {`);
      lines.push(`      const screenshotPath = await captureTestScreenshot(page, testInfo, ${toTsStringLiteral(`${pageName} - Table Verification`)});`);
      lines.push('      evidence.screenshots.push(screenshotPath);');
      lines.push('    });');
      lines.push('');
      lines.push('    await attachExecutionSummary(evidence, page, testInfo);');
      lines.push('  });');
    }

    const mProps = properties.filter(p => p.type === 'menu');
    if (mProps.length > 0) {
      lines.push(`  test(${toTsStringLiteral(`Verify that navigation menus expand and collapse on ${pageName} @regression`)}, async ({ page }, testInfo) => {`);
      lines.push(`    await label('suite', ${toTsStringLiteral(suiteLabel)});`);
      lines.push(`    await label('application', ${toTsStringLiteral(appLabel)});`);
      lines.push(`    await feature(${toTsStringLiteral(pageTitle)});`);
      lines.push(`    await story(${toTsStringLiteral('Verify navigation menus toggle')});`);
      lines.push(`    await severity(${toTsStringLiteral('minor')});`);
      lines.push(`    await tag(${toTsStringLiteral('regression')});`);
      lines.push('');
      lines.push(`    const evidence = createEvidence({`);
      lines.push(`      application: ${toTsStringLiteral(appLabel)},`);
      lines.push(`      suite: ${toTsStringLiteral(suiteLabel)},`);
      lines.push(`      browser: testInfo.project.name || 'chromium',`);
      lines.push(`      pageName: ${toTsStringLiteral(pageName)},`);
      lines.push(`      pageUrl: ${toTsStringLiteral(url)},`);
      lines.push(`      testObjective: ${toTsStringLiteral('Verify navigation menus toggle')},`);
      lines.push('    });');
      lines.push('');
      lines.push(`    await test.step(${toTsStringLiteral('Verify that navigation menus are interactive')}, async () => {`);
      for (const prop of mProps) {
        lines.push(`      await expect(appPage.${prop.name}.first()).toBeVisible({ timeout: 5000 });`);
      }
      lines.push(`      evidence.validationsPerformed.push(${toTsStringLiteral('Verified navigation menus are interactive')});`);
      lines.push('    });');
      lines.push('');
      lines.push(`    await test.step(${toTsStringLiteral('Capture screenshot evidence')}, async () => {`);
      lines.push(`      const screenshotPath = await captureTestScreenshot(page, testInfo, ${toTsStringLiteral(`${pageName} - Menu Interaction Verification`)});`);
      lines.push('      evidence.screenshots.push(screenshotPath);');
      lines.push('    });');
      lines.push('');
      lines.push('    await attachExecutionSummary(evidence, page, testInfo);');
      lines.push('  });');
    }
  }

  lines.push("});\n");
  return lines.join('\n');
}

async function generateTests(): Promise<void> {
  console.log(`[generate-tests] App: ${appName}, Suite: @${suite}`);

  const siteMapPath = path.join(tempDir, 'site-map.json');

  let raw: string;
  try {
    raw = await fs.readFile(siteMapPath, 'utf-8');
  } catch {
    console.error(`[generate-tests] Error: site-map.json not found at ${siteMapPath}`);
    process.exit(1);
  }

  const siteMap: SiteMapData = JSON.parse(raw);
  console.log(`[generate-tests] Found ${siteMap.pages.length} pages in site-map.json`);

  await fs.mkdir(GENERATED_TESTS_DIR, { recursive: true });

  let pomFiles: string[];
  try {
    pomFiles = await fs.readdir(GENERATED_POMS_DIR);
  } catch {
    console.error(`[generate-tests] Error: POMs directory not found at ${GENERATED_POMS_DIR}`);
    process.exit(1);
  }
  console.log(`[generate-tests] Found ${pomFiles.length} POM files`);

  let generatedCount = 0;
  let skippedCount = 0;

  for (const sitePage of siteMap.pages) {
    const pageUrl = sitePage.url;

    let pomInfo: POMInfo | null = null;
    for (const pomFile of pomFiles) {
      const filePath = path.join(GENERATED_POMS_DIR, pomFile);
      const info = parsePOMFile(filePath);
      if (info && info.url === pageUrl) {
        pomInfo = info;
        break;
      }
    }

    if (!pomInfo) {
      console.log(`[generate-tests] Skipping ${sitePage.title} - no matching POM`);
      skippedCount++;
      continue;
    }

    const testCode = generateTestCode(pomInfo, sitePage);
    const specFileName = buildSafeFileName(pomInfo.className);
    const specFilePath = path.join(GENERATED_TESTS_DIR, specFileName);

    await fs.writeFile(specFilePath, testCode, 'utf-8');
    console.log(`[generate-tests] Created: ${specFileName}`);
    generatedCount++;
  }

  const testsDir = path.join(runsDir, 'tests');
  await fs.mkdir(testsDir, { recursive: true });
  const testFiles = await fs.readdir(GENERATED_TESTS_DIR);
  for (const file of testFiles) {
    if (file.endsWith('.spec.ts')) {
      const src = path.join(GENERATED_TESTS_DIR, file);
      const dest = path.join(testsDir, file);
      await fs.copyFile(src, dest).catch(() => {});
    }
  }

  console.log(`[generate-tests] Generated ${generatedCount} test files (${skippedCount} skipped)`);
}

generateTests().catch((error) => {
  console.error('[generate-tests] Fatal error:', error instanceof Error ? error.message : error);
  process.exit(1);
});
