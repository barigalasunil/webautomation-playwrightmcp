import { normalizeVisibleText } from './textNormalizer';
import { toTsStringLiteral } from './codeStringEscaper';

export interface ElementMetadata {
  text?: string;
  href?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  ariaLabel?: string;
  id?: string;
  role?: string;
  level?: string;
  optionCount?: number;
}

function escapeRegexStr(value: string): string {
  const normalized = normalizeVisibleText(value);
  const escaped = normalized
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/[.*+?^${}()|[\]\/]/g, '\\$&');
  return `'${escaped}'`;
}

function sanitizeCssValue(value: string): string {
  return value.replace(/"/g, '\\"').replace(/'/g, "\\'");
}

export function generateLocatorString(metadata: ElementMetadata, elementType: string, index: number): string {
  const text = normalizeVisibleText(metadata.text || '');
  const label = normalizeVisibleText(metadata.label || '');
  const ariaLabel = normalizeVisibleText(metadata.ariaLabel || '');
  const placeholder = normalizeVisibleText(metadata.placeholder || '');
  const name = normalizeVisibleText(metadata.name || '');
  const level = normalizeVisibleText(metadata.level || '');
  const href = normalizeVisibleText(metadata.href || '');
  const id = normalizeVisibleText(metadata.id || '');
  const type = normalizeVisibleText(metadata.type || '');
  const role = normalizeVisibleText(metadata.role || '');

  if (text.length > 0) {
    if (elementType === 'heading') {
      return `this.page.getByRole('heading', { name: ${escapeRegexStr(text)} })`;
    }

    if (elementType === 'button') {
      return `this.page.getByRole('button', { name: ${escapeRegexStr(text)} })`;
    }

    if (elementType === 'link') {
      return `this.page.getByRole('link', { name: ${escapeRegexStr(text)} })`;
    }

    if (role === 'button' || role === 'link') {
      return `this.page.getByRole('${role}', { name: ${escapeRegexStr(text)} })`;
    }
  }

  if (label.length > 0) {
    return `this.page.getByLabel(${escapeRegexStr(label)})`;
  }

  if (ariaLabel.length > 0) {
    return `this.page.getByLabel(${escapeRegexStr(ariaLabel)})`;
  }

  if (placeholder.length > 0) {
    return `this.page.getByPlaceholder(${escapeRegexStr(placeholder)})`;
  }

  if (text.length > 0) {
    return `this.page.getByText(${escapeRegexStr(text)})`;
  }

  if (id.length > 0) {
    return `this.page.locator('#${sanitizeCssValue(id)}')`;
  }

  if (name.length > 0) {
    return `this.page.locator('[name="${sanitizeCssValue(name)}"]')`;
  }

  if (elementType === 'link' && href.length > 0) {
    return `this.page.locator('a[href="${sanitizeCssValue(href)}"]')`;
  }

  if (elementType === 'button' && type.length > 0) {
    return `this.page.locator('button[type="${sanitizeCssValue(type)}"], input[type="${sanitizeCssValue(type)}"]')`;
  }

  if (elementType === 'input' && type.length > 0) {
    return `this.page.locator('input[type="${sanitizeCssValue(type)}"], textarea, select')`;
  }

  if (elementType === 'heading' && level.length > 0) {
    return `this.page.locator('${level}')`;
  }

  const tagMap: Record<string, string> = {
    heading: 'h1, h2, h3, h4, h5, h6',
    link: 'a[href]',
    button: 'button, [role="button"], input[type="button"], input[type="submit"]',
    input: 'input, textarea, select',
    form: 'form',
    table: 'table',
    menu: 'nav, [role="menubar"], [role="menu"]',
    dropdown: 'select, [role="combobox"]',
  };

  const tagSelector = tagMap[elementType] || '*';
  if (index > 0) {
    return `this.page.locator('${tagSelector}').nth(${index})`;
  }
  return `this.page.locator('${tagSelector}')`;
}

function generateFallbackLocators(metadata: ElementMetadata, elementType: string): string[] {
  const text = normalizeVisibleText(metadata.text || '');
  const label = normalizeVisibleText(metadata.label || '');
  const ariaLabel = normalizeVisibleText(metadata.ariaLabel || '');
  const placeholder = normalizeVisibleText(metadata.placeholder || '');
  const fallbacks: string[] = [];

  if (text.length > 0) {
    fallbacks.push(`this.page.getByText(${escapeRegexStr(text)})`);
  }

  const tagMap: Record<string, string> = {
    heading: 'h1, h2, h3, h4, h5, h6',
    link: 'a[href]',
    button: 'button, [role="button"], input[type="button"], input[type="submit"]',
  };

  if (text.length > 0) {
    const tagSelector = tagMap[elementType];
    if (tagSelector) {
      fallbacks.push(`this.page.locator('${tagSelector}').filter({ hasText: ${escapeRegexStr(text)} })`);
    }
  }

  if (label.length > 0) {
    fallbacks.push(`this.page.getByLabel(${escapeRegexStr(label)})`);
  }

  if (ariaLabel.length > 0) {
    fallbacks.push(`this.page.getByLabel(${escapeRegexStr(ariaLabel)})`);
  }

  if (placeholder.length > 0) {
    fallbacks.push(`this.page.getByPlaceholder(${escapeRegexStr(placeholder)})`);
  }

  const id = normalizeVisibleText(metadata.id || '');
  if (id.length > 0) {
    fallbacks.push(`this.page.locator('#${sanitizeCssValue(id)}')`);
  }

  const name = normalizeVisibleText(metadata.name || '');
  if (name.length > 0) {
    fallbacks.push(`this.page.locator('[name="${sanitizeCssValue(name)}"]')`);
  }

  const tagMapAll: Record<string, string> = {
    heading: 'h1, h2, h3, h4, h5, h6',
    link: 'a[href]',
    button: 'button, [role="button"], input[type="button"], input[type="submit"]',
    input: 'input, textarea, select',
    form: 'form',
    table: 'table',
    menu: 'nav, [role="menubar"], [role="menu"]',
    dropdown: 'select, [role="combobox"]',
  };
  const tagSelector = tagMapAll[elementType];
  if (tagSelector && !fallbacks.some(fb => fb.includes(tagSelector))) {
    fallbacks.push(`this.page.locator('${tagSelector}')`);
  }

  return fallbacks;
}

export function generateSelfHealingLocatorString(metadata: ElementMetadata, elementType: string, index: number): string {
  const primary = generateLocatorString(metadata, elementType, index);
  const fallbacks = generateFallbackLocators(metadata, elementType);

  const seen = new Set<string>();
  seen.add(primary);
  const allLocators: string[] = [primary];
  for (const fb of fallbacks) {
    if (seen.has(fb)) continue;
    seen.add(fb);
    allLocators.push(fb);
  }

  if (allLocators.length === 1) return primary;

  return allLocators[0] + allLocators.slice(1).map(fb => `\n      .or(${fb})`).join('');
}

export function generateSmartLocatorCode(metadata: ElementMetadata, elementType: string, index: number): string {
  const text = normalizeVisibleText(metadata.text || '');
  const label = normalizeVisibleText(metadata.label || '');
  const ariaLabel = normalizeVisibleText(metadata.ariaLabel || '');
  const placeholder = normalizeVisibleText(metadata.placeholder || '');
  const id = normalizeVisibleText(metadata.id || '');
  const name = normalizeVisibleText(metadata.name || '');
  const href = normalizeVisibleText(metadata.href || '');
  const type = normalizeVisibleText(metadata.type || '');
  const role = normalizeVisibleText(metadata.role || '');
  const level = normalizeVisibleText(metadata.level || '');

  const strategies: string[] = [];

  function addStrategy(locatorExpr: string, desc: string): void {
    const safeDesc = toTsStringLiteral(normalizeVisibleText(desc));
    strategies.push(`    { build: () => ${locatorExpr}, name: ${safeDesc} }`);
  }

  if (text.length > 0) {
    if (elementType === 'heading') {
      addStrategy(
        `this.page.getByRole('heading', { name: ${escapeRegexStr(text)} })`,
        `getByRole(heading, name=${text})`
      );
    } else if (elementType === 'button') {
      addStrategy(
        `this.page.getByRole('button', { name: ${escapeRegexStr(text)} })`,
        `getByRole(button, name=${text})`
      );
    } else if (elementType === 'link') {
      addStrategy(
        `this.page.getByRole('link', { name: ${escapeRegexStr(text)} })`,
        `getByRole(link, name=${text})`
      );
    } else if (role === 'button' || role === 'link') {
      addStrategy(
        `this.page.getByRole('${role}', { name: ${escapeRegexStr(text)} })`,
        `getByRole(${role}, name=${text})`
      );
    }
  }

  if (label.length > 0) {
    addStrategy(
      `this.page.getByLabel(${escapeRegexStr(label)})`,
      `getByLabel(${label})`
    );
  }

  if (ariaLabel.length > 0) {
    addStrategy(
      `this.page.getByLabel(${escapeRegexStr(ariaLabel)})`,
      `getByLabel(ariaLabel=${ariaLabel})`
    );
  }

  if (placeholder.length > 0) {
    addStrategy(
      `this.page.getByPlaceholder(${escapeRegexStr(placeholder)})`,
      `getByPlaceholder(${placeholder})`
    );
  }

  if (text.length > 0) {
    addStrategy(
      `this.page.getByText(${escapeRegexStr(text)})`,
      `getByText(${text})`
    );
  }

  if (id.length > 0) {
    addStrategy(
      `this.page.getByTestId(${escapeRegexStr(id)})`,
      `getByTestId(${id})`
    );
  }
  if (text.length > 0) {
    const testId = text.replace(/[^a-zA-Z0-9_-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') || text;
    if (testId !== id) {
      addStrategy(
        `this.page.getByTestId(${escapeRegexStr(testId)})`,
        `getByTestId(${testId})`
      );
    }
  }

  if (id.length > 0) {
    addStrategy(
      `this.page.locator('#${sanitizeCssValue(id)}')`,
      `CSS(#${id})`
    );
  }

  if (name.length > 0) {
    addStrategy(
      `this.page.locator('[name="${sanitizeCssValue(name)}"]')`,
      `CSS([name=${name}])`
    );
  }

  if (elementType === 'link' && href.length > 0) {
    addStrategy(
      `this.page.locator('a[href="${sanitizeCssValue(href)}"]')`,
      `CSS(a[href=${href}])`
    );
  }

  if (elementType === 'button' && type.length > 0) {
    addStrategy(
      `this.page.locator('button[type="${sanitizeCssValue(type)}"], input[type="${sanitizeCssValue(type)}"]')`,
      `CSS(button[type=${type}])`
    );
  }

  if (elementType === 'input') {
    if (type.length > 0) {
      addStrategy(
        `this.page.locator('input[type="${sanitizeCssValue(type)}"], textarea, select')`,
        `CSS(input[type=${type}])`
      );
    }
    if (placeholder.length > 0) {
      addStrategy(
        `this.page.locator('[placeholder="${sanitizeCssValue(placeholder)}"]')`,
        `CSS([placeholder=${placeholder}])`
      );
    }
  }

  if (elementType === 'heading' && level.length > 0) {
    addStrategy(
      `this.page.locator('${level}')`,
      `CSS(${level})`
    );
  }

  const tagMap: Record<string, string> = {
    heading: 'h1, h2, h3, h4, h5, h6',
    link: 'a[href]',
    button: 'button, [role="button"], input[type="button"], input[type="submit"]',
    input: 'input, textarea, select',
    form: 'form',
    table: 'table',
    menu: 'nav, [role="menubar"], [role="menu"]',
    dropdown: 'select, [role="combobox"]',
  };
  const tagSelector = tagMap[elementType];
  if (tagSelector) {
    const alreadyHasTag = strategies.some(s => s.includes(toTsStringLiteral(tagSelector)));
    if (!alreadyHasTag) {
      addStrategy(
        `this.page.locator('${tagSelector}')`,
        `CSS(${tagSelector})`
      );
    }
  }

  if (text.length > 0 && tagSelector) {
    addStrategy(
      `this.page.locator('${tagSelector}').filter({ hasText: ${escapeRegexStr(text)} })`,
      `CSS(${tagSelector}, hasText=${text})`
    );
  }

  if (text.length > 0) {
    addStrategy(
      `this.page.locator('//*[contains(text(), ${escapeXPathStr(text)})]')`,
      `XPath(contains(text(), ${text}))`
    );
  }

  const deduped = removeDuplicateEntries(strategies);
  const strategiesStr = deduped.join(',\n');
  return `SmartLocator.create(this.page, [\n${strategiesStr},\n    ])`;
}

function escapeXPathStr(value: string): string {
  const normalized = normalizeVisibleText(value);
  const escJS = (s: string) => s
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t');

  if (normalized.includes('"') && normalized.includes("'")) {
    const parts: string[] = [];
    let buf = '';
    for (const ch of normalized) {
      if (ch === '"' || ch === "'") {
        if (buf) { parts.push(`"${escJS(buf)}"`); buf = ''; }
        parts.push(ch === '"' ? `'"'` : `"'"`);
      } else {
        buf += ch;
      }
    }
    if (buf) parts.push(`"${escJS(buf)}"`);
    return `concat(${parts.join(',')})`;
  }
  if (normalized.includes('"')) {
    return `'${normalized}'`;
  }
  return `"${escJS(normalized)}"`;
}

export function generateSmartLocatorStrategiesCode(metadata: ElementMetadata, elementType: string, index: number): string {
  const text = normalizeVisibleText(metadata.text || '');
  const label = normalizeVisibleText(metadata.label || '');
  const ariaLabel = normalizeVisibleText(metadata.ariaLabel || '');
  const placeholder = normalizeVisibleText(metadata.placeholder || '');
  const id = normalizeVisibleText(metadata.id || '');
  const name = normalizeVisibleText(metadata.name || '');
  const href = normalizeVisibleText(metadata.href || '');
  const type = normalizeVisibleText(metadata.type || '');
  const role = normalizeVisibleText(metadata.role || '');
  const level = normalizeVisibleText(metadata.level || '');

  const strategies: string[] = [];

  function addStrategy(locatorExpr: string, desc: string): void {
    const safeDesc = toTsStringLiteral(normalizeVisibleText(desc));
    strategies.push(`    { build: () => ${locatorExpr}, name: ${safeDesc} }`);
  }

  if (text.length > 0) {
    if (elementType === 'heading') {
      addStrategy(`this.page.getByRole('heading', { name: ${escapeRegexStr(text)} })`, `getByRole(heading, name=${text})`);
    } else if (elementType === 'button') {
      addStrategy(`this.page.getByRole('button', { name: ${escapeRegexStr(text)} })`, `getByRole(button, name=${text})`);
    } else if (elementType === 'link') {
      addStrategy(`this.page.getByRole('link', { name: ${escapeRegexStr(text)} })`, `getByRole(link, name=${text})`);
    } else if (role === 'button' || role === 'link') {
      addStrategy(`this.page.getByRole('${role}', { name: ${escapeRegexStr(text)} })`, `getByRole(${role}, name=${text})`);
    }
  }

  if (label.length > 0) addStrategy(`this.page.getByLabel(${escapeRegexStr(label)})`, `getByLabel(${label})`);
  if (ariaLabel.length > 0) addStrategy(`this.page.getByLabel(${escapeRegexStr(ariaLabel)})`, `getByLabel(ariaLabel=${ariaLabel})`);
  if (placeholder.length > 0) addStrategy(`this.page.getByPlaceholder(${escapeRegexStr(placeholder)})`, `getByPlaceholder(${placeholder})`);
  if (text.length > 0) addStrategy(`this.page.getByText(${escapeRegexStr(text)})`, `getByText(${text})`);
  if (id.length > 0) addStrategy(`this.page.getByTestId(${escapeRegexStr(id)})`, `getByTestId(${id})`);
  if (text.length > 0) {
    const testId = text.replace(/[^a-zA-Z0-9_-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') || text;
    if (testId !== (id || '')) {
      addStrategy(`this.page.getByTestId(${escapeRegexStr(testId)})`, `getByTestId(${testId})`);
    }
  }
  if (id.length > 0) addStrategy(`this.page.locator('#${sanitizeCssValue(id)}')`, `CSS(#${id})`);
  if (name.length > 0) addStrategy(`this.page.locator('[name="${sanitizeCssValue(name)}"]')`, `CSS([name=${name}])`);

  if (elementType === 'link' && href.length > 0) {
    addStrategy(`this.page.locator('a[href="${sanitizeCssValue(href)}"]')`, `CSS(a[href=${href}])`);
  }

  if (elementType === 'button' && type.length > 0) {
    addStrategy(`this.page.locator('button[type="${sanitizeCssValue(type)}"], input[type="${sanitizeCssValue(type)}"]')`, `CSS(button[type=${type}])`);
  }

  if (elementType === 'input') {
    if (type.length > 0) addStrategy(`this.page.locator('input[type="${sanitizeCssValue(type)}"], textarea, select')`, `CSS(input[type=${type}])`);
    if (placeholder.length > 0) addStrategy(`this.page.locator('[placeholder="${sanitizeCssValue(placeholder)}"]')`, `CSS([placeholder=${placeholder}])`);
  }

  if (elementType === 'heading' && level.length > 0) {
    addStrategy(`this.page.locator('${level}')`, `CSS(${level})`);
  }

  const tagMap: Record<string, string> = {
    heading: 'h1, h2, h3, h4, h5, h6',
    link: 'a[href]',
    button: 'button, [role="button"], input[type="button"], input[type="submit"]',
    input: 'input, textarea, select',
    form: 'form',
    table: 'table',
    menu: 'nav, [role="menubar"], [role="menu"]',
    dropdown: 'select, [role="combobox"]',
  };
  const tagSelector = tagMap[elementType];
  if (tagSelector) {
    const alreadyHasTag = strategies.some(s => s.includes(toTsStringLiteral(tagSelector)));
    if (!alreadyHasTag) {
      addStrategy(`this.page.locator('${tagSelector}')`, `CSS(${tagSelector})`);
    }
  }

  if (text.length > 0 && tagSelector) {
    addStrategy(`this.page.locator('${tagSelector}').filter({ hasText: ${escapeRegexStr(text)} })`, `CSS(${tagSelector}, hasText=${text})`);
  }

  if (text.length > 0) {
    addStrategy(`this.page.locator('//*[contains(text(), ${escapeXPathStr(text)})]')`, `XPath(contains(text(), ${text}))`);
  }

  const deduped = removeDuplicateEntries(strategies);
  return deduped.join(',\n');
}

function removeDuplicateEntries(entries: string[]): string[] {
  const seen = new Set<string>();
  return entries.filter(e => {
    const normal = e.replace(/\s+/g, ' ').trim();
    if (seen.has(normal)) return false;
    seen.add(normal);
    return true;
  });
}

export function buildCSSSelector(metadata: ElementMetadata, elementType: string): string {
  const name = normalizeVisibleText(metadata.name || '');
  const id = normalizeVisibleText(metadata.id || '');
  const type = normalizeVisibleText(metadata.type || '');
  const href = normalizeVisibleText(metadata.href || '');

  if (id) return `#${sanitizeCssValue(id)}`;
  if (name) return `[name="${sanitizeCssValue(name)}"]`;

  switch (elementType) {
    case 'link':
      if (href) return `a[href="${sanitizeCssValue(href)}"]`;
      return 'a[href]';
    case 'button':
      if (type) return `button[type="${sanitizeCssValue(type)}"], input[type="${sanitizeCssValue(type)}"]`;
      return 'button, [role="button"], input[type="button"], input[type="submit"]';
    case 'input':
      if (type) return `input[type="${sanitizeCssValue(type)}"], textarea, select`;
      return 'input, textarea, select';
    case 'heading': return 'h1, h2, h3, h4, h5, h6';
    case 'form': return 'form';
    case 'table': return 'table';
    case 'menu': return 'nav, [role="menubar"], [role="menu"]';
    case 'dropdown': return 'select, [role="combobox"]';
    default: return '*';
  }
}
