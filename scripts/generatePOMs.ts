import fs from 'fs';
import fsSync from 'fs';
import path from 'path';
import { normalizeVisibleText } from '../utils/textNormalizer';
import { toTsStringLiteral } from '../utils/codeStringEscaper';

const appName = process.env.APP_NAME || 'default';
const tempDir = path.resolve(process.cwd(), 'temp', 'generated', appName);
const GENERATED_POMS_DIR = path.resolve(process.cwd(), 'pages', 'GeneratedPages', appName);
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

function buildPOMClassName(title: string): string {
  const cleaned = title.replace(/[^a-zA-Z0-9 ]/g, ' ').trim();
  const words = cleaned.split(/\s+/).filter(Boolean);
  if (words.length === 0) return 'AppPage';
  const className = words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
  return className.replace(/[^a-zA-Z0-9]/g, '');
}

function buildSafeFileName(className: string): string {
  return className.replace(/[^a-zA-Z0-9]/g, '') + '.page.ts';
}

function buildReadablePropertyName(type: string, element: any, index: number, usedPropNames: Set<string>): string {
  const text = normalizeVisibleText(
    element.text || element.label || element.ariaLabel || element.placeholder || element.name || ''
  );
  let baseName: string;
  if (text && text.length > 0) {
    const textSlug = text
      .replace(/[^a-zA-Z0-9\s]/g, ' ')
      .replace(/\s+/g, '_')
      .toLowerCase()
      .replace(/^_|_$/g, '')
      .substring(0, 60);
    baseName = `${type}_${textSlug}`;
  } else {
    baseName = `${type}_${index}`;
  }
  let finalName = baseName;
  let counter = 1;
  while (usedPropNames.has(finalName)) {
    finalName = `${baseName}_${counter}`;
    counter++;
  }
  usedPropNames.add(finalName);
  return finalName;
}

function generatePOMCode(page: SiteMapPage, usedNames: Set<string>): string | null {
  const className = buildPOMClassName(page.title);
  const fileName = buildSafeFileName(className);
  const url = page.url;

  if (usedNames.has(className)) return null;
  usedNames.add(className);

  const lines: string[] = [];
  lines.push("import { Page, Locator } from 'playwright';");
  lines.push('');
  lines.push(`export class ${className} {`);
  lines.push('  readonly page: Page;');
  lines.push(`  readonly url = ${toTsStringLiteral(url)};`);
  lines.push('');

  const allElements: { name: string; strategy: string }[] = [];
  const usedPropNames = new Set<string>();

  function addElements(type: string, elements: any[], strategy: (element: any, index: number) => string | null): void {
    elements.forEach((element, index) => {
      const s = strategy(element, index);
      if (s) {
        const readableName = buildReadablePropertyName(type, element, index, usedPropNames);
        allElements.push({ name: readableName, strategy: s });
      }
    });
  }

  addElements('heading', page.headings, (h, i) => {
    const text = normalizeVisibleText(h.text || '');
    if (text) {
      return `getByRole('heading', { name: ${toTsStringLiteral(text)} })`;
    }
    return null;
  });

  addElements('link', page.links, (l, i) => {
    const text = normalizeVisibleText(l.text || '');
    if (text && text.length < 80) {
      return `getByRole('link', { name: ${toTsStringLiteral(text)} })`;
    }
    if (l.href && l.href.length < 120) {
      return `locator('a[href="${l.href.replace(/"/g, '\\"')}"]')`;
    }
    return `getByRole('link').nth(${i})`;
  });

  addElements('button', page.buttons, (b, i) => {
    const text = normalizeVisibleText(b.text || '');
    if (text && text.length < 80) {
      return `getByRole('button', { name: ${toTsStringLiteral(text)} })`;
    }
    if (b.ariaLabel) {
      const ariaLabel = normalizeVisibleText(b.ariaLabel);
      if (ariaLabel && ariaLabel.length < 80) {
        return `getByRole('button', { name: ${toTsStringLiteral(ariaLabel)} })`;
      }
    }
    return `locator('button')`;
  });

  addElements('input', page.inputs, (input, i) => {
    if (input.placeholder) {
      const placeholder = normalizeVisibleText(input.placeholder);
      if (placeholder) {
        return `getByPlaceholder(${toTsStringLiteral(placeholder)})`;
      }
    }
    if (input.ariaLabel) {
      const ariaLabel = normalizeVisibleText(input.ariaLabel);
      if (ariaLabel) {
        return `getByLabel(${toTsStringLiteral(ariaLabel)})`;
      }
    }
    if (input.name && input.name.trim()) {
      return `locator('input[name="${input.name.replace(/"/g, '\\"')}"]')`;
    }
    return `locator('input')`;
  });

  addElements('form', page.forms, (form, i) => {
    if (form.name) return `locator('form[name="${form.name.replace(/"/g, '\\"')}"]')`;
    if (form.id) return `locator('form#${form.id.replace(/"/g, '\\"')}')`;
    return `locator('form')`;
  });

  addElements('table', page.tables, (table, i) => {
    return `locator('table')`;
  });

  addElements('menu', page.menus, (menu, i) => {
    const text = normalizeVisibleText(menu.text || '');
    if (menu.role === 'menu') return `getByRole('menu')`;
    if (text && text.length <= 80) {
      return `getByRole('navigation', { name: ${toTsStringLiteral(text)} })`;
    }
    if (text && text.length > 80) {
      return `  // Accessible name was too long/noisy, using role-based nth locator.\n    getByRole('navigation').nth(${i})`;
    }
    return `getByRole('navigation').nth(${i})`;
  });

  addElements('dropdown', page.dropdowns, (dropdown, i) => {
    if (dropdown.label) {
      const label = normalizeVisibleText(dropdown.label);
      if (label) {
        return `getByLabel(${toTsStringLiteral(label)})`;
      }
    }
    if (dropdown.name && dropdown.name.trim()) {
      return `locator('select[name="${dropdown.name.replace(/"/g, '\\"')}"]')`;
    }
    return `getByRole('combobox')`;
  });

  lines.push('  // All element locators are generated dynamically using locator strategies');
  lines.push('');

  const usedPropNamesFinal = new Set<string>();
  for (const element of allElements) {
    let propName = buildPOMClassName(element.name).replace(/^(\d)/, 'e$1');
    let lowerProp = propName.charAt(0).toLowerCase() + propName.slice(1);
    let propCounter = 1;
    while (usedPropNamesFinal.has(lowerProp)) {
      const altName = `${propName}${propCounter}`;
      lowerProp = altName.charAt(0).toLowerCase() + altName.slice(1);
      propCounter++;
    }
    usedPropNamesFinal.add(lowerProp);
    const strategyLines = element.strategy.split('\n');
    if (strategyLines.length > 1) {
      lines.push(`  get ${lowerProp}(): Locator {`);
      for (const sl of strategyLines) {
        const trimmed = sl.trim();
        if (trimmed.startsWith('//')) {
          lines.push(`    ${trimmed}`);
        } else {
          lines.push(`    return this.page.${trimmed};`);
        }
      }
      lines.push('  }');
      lines.push('');
    } else {
      lines.push(`  get ${lowerProp}(): Locator {`);
      lines.push(`    return this.page.${element.strategy};`);
      lines.push('  }');
      lines.push('');
    }
  }

  lines.push('  constructor(page: Page) {');
  lines.push('    this.page = page;');
  lines.push('  }');
  lines.push('');
  lines.push('  async open(): Promise<void> {');
  lines.push('    await this.page.goto(this.url, { waitUntil: "load", timeout: 30000 });');
  lines.push('  }');
  lines.push('');
  lines.push('  async waitForPageLoad(): Promise<void> {');
  lines.push('    await this.page.waitForLoadState("networkidle", { timeout: 15000 }).catch(() => {});');
  lines.push('  }');
  lines.push('}');
  lines.push('');

  return lines.join('\n');
}

function generatePOMs(): void {
  const siteMapPath = path.join(tempDir, 'site-map.json');

  if (!fsSync.existsSync(siteMapPath)) {
    console.error(`[generate-poms] Error: site-map.json not found at ${siteMapPath}`);
    process.exit(1);
  }

  const raw = fsSync.readFileSync(siteMapPath, 'utf-8');
  const siteMap: SiteMapData = JSON.parse(raw);

  console.log(`[generate-poms] Found ${siteMap.pages.length} pages for application: ${siteMap.application}`);

  fsSync.mkdirSync(GENERATED_POMS_DIR, { recursive: true });

  const usedClassNames = new Set<string>();
  const createdFiles: string[] = [];

  for (const page of siteMap.pages) {
    const code = generatePOMCode(page, usedClassNames);
    if (!code) continue;

    const className = buildPOMClassName(page.title);
    const fileName = buildSafeFileName(className);
    const filePath = path.join(GENERATED_POMS_DIR, fileName);

    fsSync.writeFileSync(filePath, code, 'utf-8');
    console.log(`[generate-poms] Created: ${fileName}`);
    createdFiles.push(fileName);
  }

  const pagesDir = path.join(runsDir, 'pages');
  fsSync.mkdirSync(pagesDir, { recursive: true });
  for (const file of createdFiles) {
    const src = path.join(GENERATED_POMS_DIR, file);
    const dest = path.join(pagesDir, file);
    fsSync.copyFileSync(src, dest);
  }

  console.log(`[generate-poms] Generated ${createdFiles.length} POM files in ${GENERATED_POMS_DIR}`);
  if (createdFiles.length > 0) {
    console.log(`[generate-poms] Files: ${createdFiles.join(', ')}`);
  }
}

generatePOMs();
