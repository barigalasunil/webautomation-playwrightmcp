import fs from 'fs';
import path from 'path';

const appName = process.env.APP_NAME || 'default';
const tempDir = path.resolve(process.cwd(), 'temp', 'generated', appName);
const runsDir = path.resolve(process.cwd(), 'runs', 'latest', appName);

interface SiteMapPage {
  title: string;
  url: string;
  depth: number;
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

interface ElementCounts {
  totalHeadings: number;
  totalLinks: number;
  totalButtons: number;
  totalInputs: number;
  totalForms: number;
  totalTables: number;
  totalMenus: number;
  totalDropdowns: number;
  totalElements: number;
}

interface PageSummary {
  title: string;
  url: string;
  depth: number;
  headingCount: number;
  linkCount: number;
  buttonCount: number;
  inputCount: number;
  formCount: number;
  tableCount: number;
  menuCount: number;
  dropdownCount: number;
  hasLoginForm: boolean;
  hasSearch: boolean;
  hasTables: boolean;
  hasForms: boolean;
  hasMenus: boolean;
  hasDropdowns: boolean;
}

interface AnalysisReport {
  application: string;
  baseUrl: string;
  totalPages: number;
  totalElements: ElementCounts;
  pagesWithLogin: number;
  pagesWithSearch: number;
  pageSummaries: PageSummary[];
  recommendations: string[];
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

function analyzeSite(): void {
  const siteMapPath = path.join(tempDir, 'site-map.json');

  if (!fs.existsSync(siteMapPath)) {
    console.error(`[analyze] Error: site-map.json not found at ${siteMapPath}`);
    process.exit(1);
  }

  const raw = fs.readFileSync(siteMapPath, 'utf-8');
  const siteMap: SiteMapData = JSON.parse(raw);

  console.log(`[analyze] Analyzing site: ${siteMap.application}`);
  console.log(`[analyze] Total pages discovered: ${siteMap.pages.length}`);

  const elementCounts: ElementCounts = {
    totalHeadings: 0, totalLinks: 0, totalButtons: 0, totalInputs: 0,
    totalForms: 0, totalTables: 0, totalMenus: 0, totalDropdowns: 0,
    totalElements: 0,
  };

  const pageSummaries: PageSummary[] = [];
  let pagesWithLogin = 0;
  let pagesWithSearch = 0;

  for (const page of siteMap.pages) {
    const hasLogin = detectLoginPattern(page);
    const hasSearch = detectSearchPattern(page);

    if (hasLogin) pagesWithLogin++;
    if (hasSearch) pagesWithSearch++;

    elementCounts.totalHeadings += page.headings.length;
    elementCounts.totalLinks += page.links.length;
    elementCounts.totalButtons += page.buttons.length;
    elementCounts.totalInputs += page.inputs.length;
    elementCounts.totalForms += page.forms.length;
    elementCounts.totalTables += page.tables.length;
    elementCounts.totalMenus += page.menus.length;
    elementCounts.totalDropdowns += page.dropdowns.length;

    pageSummaries.push({
      title: page.title,
      url: page.url,
      depth: page.depth,
      headingCount: page.headings.length,
      linkCount: page.links.length,
      buttonCount: page.buttons.length,
      inputCount: page.inputs.length,
      formCount: page.forms.length,
      tableCount: page.tables.length,
      menuCount: page.menus.length,
      dropdownCount: page.dropdowns.length,
      hasLoginForm: hasLogin,
      hasSearch: hasSearch,
      hasTables: page.tables.length > 0,
      hasForms: page.forms.length > 0,
      hasMenus: page.menus.length > 0,
      hasDropdowns: page.dropdowns.length > 0,
    });
  }

  elementCounts.totalElements =
    elementCounts.totalHeadings + elementCounts.totalLinks + elementCounts.totalButtons +
    elementCounts.totalInputs + elementCounts.totalForms + elementCounts.totalTables +
    elementCounts.totalMenus + elementCounts.totalDropdowns;

  const recommendations: string[] = [];
  if (pagesWithLogin > 0 && elementCounts.totalForms > 0) {
    recommendations.push('Login forms detected - credentials may be needed for full coverage');
  }
  if (pagesWithSearch > 0) {
    recommendations.push('Search functionality detected - provide search queries for deeper testing');
  }
  if (elementCounts.totalTables > 0) {
    recommendations.push('Tables detected - consider data validation tests');
  }
  if (elementCounts.totalDropdowns > 0) {
    recommendations.push('Dropdowns detected - consider option selection tests');
  }

  const report: AnalysisReport = {
    application: siteMap.application,
    baseUrl: siteMap.baseUrl,
    totalPages: siteMap.pages.length,
    totalElements: elementCounts,
    pagesWithLogin,
    pagesWithSearch,
    pageSummaries,
    recommendations,
  };

  const reportDir = path.join(runsDir, 'reports');
  fs.mkdirSync(reportDir, { recursive: true });
  const reportPath = path.join(reportDir, 'site-analysis.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf-8');

  console.log(`[analyze] Analysis report written to ${reportPath}`);
  console.log(`[analyze] Total elements across all pages: ${elementCounts.totalElements}`);
  console.log(`[analyze] Pages with login forms: ${pagesWithLogin}`);
  console.log(`[analyze] Pages with search: ${pagesWithSearch}`);
}

analyzeSite();
