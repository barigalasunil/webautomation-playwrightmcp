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
  const escaped = normalized.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/[.*+?^${}()|[\]\/]/g, '\\$&');
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
    if (elementType === 'heading') return `this.page.getByRole('heading', { name: ${escapeRegexStr(text)} })`;
    if (elementType === 'button') return `this.page.getByRole('button', { name: ${escapeRegexStr(text)} })`;
    if (elementType === 'link') return `this.page.getByRole('link', { name: ${escapeRegexStr(text)} })`;
    if (role === 'button' || role === 'link') return `this.page.getByRole('${role}', { name: ${escapeRegexStr(text)} })`;
  }
  if (label.length > 0) return `this.page.getByLabel(${escapeRegexStr(label)})`;
  if (ariaLabel.length > 0) return `this.page.getByLabel(${escapeRegexStr(ariaLabel)})`;
  if (placeholder.length > 0) return `this.page.getByPlaceholder(${escapeRegexStr(placeholder)})`;
  if (text.length > 0) return `this.page.getByText(${escapeRegexStr(text)})`;
  if (id.length > 0) return `this.page.locator('#${sanitizeCssValue(id)}')`;
  if (name.length > 0) return `this.page.locator('[name="${sanitizeCssValue(name)}"]')`;
  if (elementType === 'link' && href.length > 0) return `this.page.locator('a[href="${sanitizeCssValue(href)}"]')`;
  if (elementType === 'button' && type.length > 0) return `this.page.locator('button[type="${sanitizeCssValue(type)}"], input[type="${sanitizeCssValue(type)}"]')`;
  if (elementType === 'input' && type.length > 0) return `this.page.locator('input[type="${sanitizeCssValue(type)}"], textarea, select')`;
  if (elementType === 'heading' && level.length > 0) return `this.page.locator('${level}')`;

  const tagMap: Record<string, string> = {
    heading: 'h1, h2, h3, h4, h5, h6', link: 'a[href]',
    button: 'button, [role="button"], input[type="button"], input[type="submit"]',
    input: 'input, textarea, select', form: 'form', table: 'table',
    menu: 'nav, [role="menubar"], [role="menu"]', dropdown: 'select, [role="combobox"]',
  };
  const tagSelector = tagMap[elementType] || '*';
  if (index > 0) return `this.page.locator('${tagSelector}').nth(${index})`;
  return `this.page.locator('${tagSelector}')`;
}
