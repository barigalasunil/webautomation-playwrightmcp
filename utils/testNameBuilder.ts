import { sanitizePropertyName } from './nameSanitizer';

export function buildTestName(elementText: string, elementType: string): string {
  if (!elementText || elementText.trim().length === 0) {
    return `should display ${elementType}`;
  }

  const sanitized = elementText
    .trim()
    .replace(/[^a-zA-Z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (sanitized.length === 0) {
    return `should display ${elementType}`;
  }

  const truncated = sanitized.length > 60 ? sanitized.substring(0, 60).trim() + '...' : sanitized;
  return `should display ${elementType}: "${truncated}"`;
}

export function buildDescribeBlockName(pageTitle: string): string {
  if (!pageTitle || pageTitle.trim().length === 0) {
    return 'Unknown Page';
  }

  const sanitized = pageTitle
    .trim()
    .replace(/[^a-zA-Z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (sanitized.length === 0) {
    return 'Unknown Page';
  }

  const truncated = sanitized.length > 80 ? sanitized.substring(0, 80).trim() + '...' : sanitized;
  return truncated;
}

export function buildTypeTestName(elementType: string, count: number): string {
  const label = elementType.charAt(0).toUpperCase() + elementType.slice(1);
  if (count === 0) return `should display ${elementType} if present`;
  return `should display discovered ${label} (${count} found)`;
}

export function buildSafeFileName(className: string): string {
  return className.replace(/[^a-zA-Z0-9]/g, '') + '.spec.ts';
}

export function formatElementTextForComment(text: string): string {
  if (!text || text.trim().length === 0) return '';
  const truncated = text.length > 80 ? text.substring(0, 80) + '...' : text;
  return truncated.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
}
