import fs from 'fs';
import path from 'path';

const appName = process.env.APP_NAME || 'default';
const suite = (process.env.SUITE || 'smoke').toLowerCase().trim();
const tempDir = path.resolve(process.cwd(), 'temp', 'generated', appName);
const runsDir = path.resolve(process.cwd(), 'runs', 'latest', appName);

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

interface TestCase {
  id: string;
  title: string;
  description: string;
  pageTitle: string;
  pageUrl: string;
  steps: string[];
  expectedResult: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  tag: string;
}

function generateTestCases(): void {
  console.log(`[generateTestCases] App: ${appName}, Suite: @${suite}`);

  const siteMapPath = path.join(tempDir, 'site-map.json');

  if (!fs.existsSync(siteMapPath)) {
    console.error(`[generateTestCases] Error: site-map.json not found at ${siteMapPath}`);
    process.exit(1);
  }

  const raw = fs.readFileSync(siteMapPath, 'utf-8');
  const siteMap: SiteMapData = JSON.parse(raw);

  console.log(`[generateTestCases] Generating test cases for ${siteMap.application}`);
  console.log(`[generateTestCases] Pages: ${siteMap.pages.length}`);

  const allTestCases: TestCase[] = [];
  let tcCounter = 0;

  for (const page of siteMap.pages) {
    const pageTitle = page.title || page.url;

    if (suite === 'smoke') {
      tcCounter++;
      allTestCases.push({
        id: `TC-${String(tcCounter).padStart(3, '0')}`,
        title: `Verify that ${pageTitle} opens successfully`,
        description: `Open ${pageTitle} and verify it loads correctly.`,
        pageTitle: page.title,
        pageUrl: page.url,
        steps: [
          `Navigate to ${page.url}`,
          `Confirm the URL is correct`,
          `Confirm the page title is: ${page.title}`,
          `Capture a screenshot for evidence`,
        ],
        expectedResult: `${pageTitle} should open with correct URL and title.`,
        severity: 'critical',
        tag: '@smoke',
      });
    }

    if (suite === 'sanity') {
      tcCounter++;
      allTestCases.push({
        id: `TC-${String(tcCounter).padStart(3, '0')}`,
        title: `Verify that ${pageTitle} loads correctly`,
        description: `Open ${pageTitle} and verify it loads correctly.`,
        pageTitle: page.title,
        pageUrl: page.url,
        steps: [
          `Navigate to ${page.url}`,
          `Confirm the URL is correct`,
          `Capture a screenshot`,
        ],
        expectedResult: `${pageTitle} should load correctly.`,
        severity: 'high',
        tag: '@sanity',
      });

      if (page.headings.length > 0) {
        tcCounter++;
        allTestCases.push({
          id: `TC-${String(tcCounter).padStart(3, '0')}`,
          title: `Verify headings on ${pageTitle}`,
          description: `Check that ${page.headings.length} heading(s) are visible.`,
          pageTitle: page.title,
          pageUrl: page.url,
          steps: [
            `Navigate to ${page.url}`,
            ...page.headings.slice(0, 8).map((h: any) => `Verify heading "${h.text}" is visible`),
            `Capture a screenshot`,
          ],
          expectedResult: `All ${page.headings.length} heading(s) should be visible.`,
          severity: 'high',
          tag: '@sanity',
        });
      }

      if (page.links.length > 0) {
        tcCounter++;
        allTestCases.push({
          id: `TC-${String(tcCounter).padStart(3, '0')}`,
          title: `Verify links on ${pageTitle}`,
          description: `Check that ${page.links.length} link(s) are present.`,
          pageTitle: page.title,
          pageUrl: page.url,
          steps: [
            `Navigate to ${page.url}`,
            ...page.links.slice(0, 8).map((l: any) => `Verify link "${l.text || l.href || 'link'}" is visible`),
            `Capture a screenshot`,
          ],
          expectedResult: `All ${page.links.length} link(s) should be visible.`,
          severity: 'high',
          tag: '@sanity',
        });
      }

      if (page.buttons.length > 0) {
        tcCounter++;
        allTestCases.push({
          id: `TC-${String(tcCounter).padStart(3, '0')}`,
          title: `Verify buttons on ${pageTitle}`,
          description: `Check that ${page.buttons.length} button(s) are visible.`,
          pageTitle: page.title,
          pageUrl: page.url,
          steps: [
            `Navigate to ${page.url}`,
            ...page.buttons.slice(0, 8).map((b: any) => `Verify button "${b.text || 'button'}" is visible`),
            `Capture a screenshot`,
          ],
          expectedResult: `All ${page.buttons.length} button(s) should be visible.`,
          severity: 'medium',
          tag: '@sanity',
        });
      }

      if (page.inputs.length > 0) {
        tcCounter++;
        allTestCases.push({
          id: `TC-${String(tcCounter).padStart(3, '0')}`,
          title: `Verify input fields on ${pageTitle}`,
          description: `Check that ${page.inputs.length} input field(s) are present.`,
          pageTitle: page.title,
          pageUrl: page.url,
          steps: [
            `Navigate to ${page.url}`,
            ...page.inputs.slice(0, 8).map((i: any) => `Verify input "${i.name || i.placeholder || i.type || 'input'}" is present`),
            `Capture a screenshot`,
          ],
          expectedResult: `All ${page.inputs.length} input field(s) should be present.`,
          severity: 'medium',
          tag: '@sanity',
        });
      }
    }

    if (suite === 'regression') {
      tcCounter++;
      allTestCases.push({
        id: `TC-${String(tcCounter).padStart(3, '0')}`,
        title: `Verify that ${pageTitle} loads for regression`,
        description: `Open ${pageTitle} and verify for regression testing.`,
        pageTitle: page.title,
        pageUrl: page.url,
        steps: [
          `Navigate to ${page.url}`,
          `Confirm the URL is correct`,
          `Capture a screenshot`,
        ],
        expectedResult: `${pageTitle} should open correctly.`,
        severity: 'low',
        tag: '@regression',
      });

      if (page.headings.length > 0) {
        tcCounter++;
        allTestCases.push({
          id: `TC-${String(tcCounter).padStart(3, '0')}`,
          title: `Verify all headings on ${pageTitle}`,
          description: `Check that ${page.headings.length} heading(s) are present.`,
          pageTitle: page.title,
          pageUrl: page.url,
          steps: [
            `Navigate to ${page.url}`,
            ...page.headings.slice(0, 8).map((h: any) => `Verify heading "${h.text}" is visible`),
            `Capture a screenshot`,
          ],
          expectedResult: `All ${page.headings.length} heading(s) should be visible.`,
          severity: 'low',
          tag: '@regression',
        });
      }

      if (page.links.length > 0) {
        tcCounter++;
        allTestCases.push({
          id: `TC-${String(tcCounter).padStart(3, '0')}`,
          title: `Verify all links on ${pageTitle}`,
          description: `Check that ${page.links.length} link(s) are present.`,
          pageTitle: page.title,
          pageUrl: page.url,
          steps: [
            `Navigate to ${page.url}`,
            ...page.links.slice(0, 8).map((l: any) => `Verify link "${l.text || l.href || 'link'}" is visible`),
            `Capture a screenshot`,
          ],
          expectedResult: `All ${page.links.length} link(s) should be visible.`,
          severity: 'low',
          tag: '@regression',
        });
      }

      if (page.buttons.length > 0) {
        tcCounter++;
        allTestCases.push({
          id: `TC-${String(tcCounter).padStart(3, '0')}`,
          title: `Verify all buttons on ${pageTitle}`,
          description: `Check that ${page.buttons.length} button(s) are visible.`,
          pageTitle: page.title,
          pageUrl: page.url,
          steps: [
            `Navigate to ${page.url}`,
            ...page.buttons.slice(0, 8).map((b: any) => `Verify button "${b.text || 'button'}" is visible`),
            `Capture a screenshot`,
          ],
          expectedResult: `All ${page.buttons.length} button(s) should be visible.`,
          severity: 'low',
          tag: '@regression',
        });
      }

      if (page.inputs.length > 0) {
        tcCounter++;
        allTestCases.push({
          id: `TC-${String(tcCounter).padStart(3, '0')}`,
          title: `Verify input fields on ${pageTitle}`,
          description: `Check that ${page.inputs.length} input field(s) are present.`,
          pageTitle: page.title,
          pageUrl: page.url,
          steps: [
            `Navigate to ${page.url}`,
            ...page.inputs.slice(0, 8).map((i: any) => `Verify input "${i.name || i.placeholder || i.type || 'input'}" is present`),
            `Capture a screenshot`,
          ],
          expectedResult: `All ${page.inputs.length} input field(s) should be present.`,
          severity: 'low',
          tag: '@regression',
        });
      }

      if (page.forms.length > 0) {
        tcCounter++;
        allTestCases.push({
          id: `TC-${String(tcCounter).padStart(3, '0')}`,
          title: `Verify forms on ${pageTitle}`,
          description: `Check that form(s) are displayed with fields.`,
          pageTitle: page.title,
          pageUrl: page.url,
          steps: [
            `Navigate to ${page.url}`,
            ...page.forms.map((f: any) => `Verify form "${f.name || f.id || 'form'}" is displayed`),
            `Capture a screenshot`,
          ],
          expectedResult: `Forms should be displayed correctly.`,
          severity: 'low',
          tag: '@regression',
        });
      }

      if (page.tables.length > 0) {
        tcCounter++;
        allTestCases.push({
          id: `TC-${String(tcCounter).padStart(3, '0')}`,
          title: `Verify tables on ${pageTitle}`,
          description: `Check that ${page.tables.length} table(s) are rendered.`,
          pageTitle: page.title,
          pageUrl: page.url,
          steps: [
            `Navigate to ${page.url}`,
            ...page.tables.slice(0, 3).map((t: any) => `Verify table with headers [${(t.headers || []).join(', ')}] is displayed`),
            `Capture a screenshot`,
          ],
          expectedResult: `Tables should render with proper headers and data.`,
          severity: 'low',
          tag: '@regression',
        });
      }

      if (page.menus.length > 0) {
        tcCounter++;
        allTestCases.push({
          id: `TC-${String(tcCounter).padStart(3, '0')}`,
          title: `Verify navigation menus on ${pageTitle}`,
          description: `Check that ${page.menus.length} menu(s) are visible.`,
          pageTitle: page.title,
          pageUrl: page.url,
          steps: [
            `Navigate to ${page.url}`,
            ...page.menus.map((m: any) => `Verify menu "${m.text || m.role || 'menu'}" is visible`),
            `Capture a screenshot`,
          ],
          expectedResult: `Navigation menus should be visible.`,
          severity: 'low',
          tag: '@regression',
        });
      }

      if (page.dropdowns.length > 0) {
        tcCounter++;
        allTestCases.push({
          id: `TC-${String(tcCounter).padStart(3, '0')}`,
          title: `Verify dropdowns on ${pageTitle}`,
          description: `Check that ${page.dropdowns.length} dropdown(s) are accessible.`,
          pageTitle: page.title,
          pageUrl: page.url,
          steps: [
            `Navigate to ${page.url}`,
            ...page.dropdowns.map((d: any) => `Verify dropdown "${d.label || d.name || 'dropdown'}" is visible`),
            `Capture a screenshot`,
          ],
          expectedResult: `Dropdowns should be accessible with options.`,
          severity: 'low',
          tag: '@regression',
        });
      }
    }
  }

  console.log(`[generateTestCases] Generated ${allTestCases.length} test cases for @${suite}`);

  const reportsDir = path.join(runsDir, 'reports');
  fs.mkdirSync(reportsDir, { recursive: true });

  const tcJsonPath = path.join(reportsDir, 'generated-testcases.json');
  fs.writeFileSync(tcJsonPath, JSON.stringify(allTestCases, null, 2), 'utf-8');
  console.log(`[generateTestCases] Test cases JSON written to ${tcJsonPath}`);

  const csvLines = ['ID,Title,Description,Page Title,Page URL,Severity,Tag,Steps,Expected Result'];
  for (const tc of allTestCases) {
    const steps = tc.steps.join('; ');
    csvLines.push(`"${tc.id}","${tc.title}","${tc.description}","${tc.pageTitle}","${tc.pageUrl}","${tc.severity}","${tc.tag}","${steps}","${tc.expectedResult}"`);
  }
  const csvPath = path.join(reportsDir, 'generated-testcases.csv');
  fs.writeFileSync(csvPath, csvLines.join('\n'), 'utf-8');
  console.log(`[generateTestCases] CSV written to ${csvPath}`);

  const xlsxPath = path.join(reportsDir, 'generated-testcases.xlsx');
  try {
    const xlsxContent = '\uFEFF' + csvLines.join('\n');
    fs.writeFileSync(xlsxPath, xlsxContent, 'utf-8');
    console.log(`[generateTestCases] XLSX written to ${xlsxPath}`);
  } catch {
    console.log('[generateTestCases] XLSX uses CSV format');
  }

  console.log(`[generateTestCases] Total: ${allTestCases.length} test cases for ${siteMap.pages.length} pages`);
}

generateTestCases();
