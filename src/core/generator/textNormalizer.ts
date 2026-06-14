const INVISIBLE_CONTROL_CHARS = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g;

export function normalizeVisibleText(input: string): string {
  if (!input) return '';
  let result = input
    .replace(/\r?\n/g, ' ')
    .replace(/\r/g, ' ')
    .replace(/\t/g, ' ')
    .replace(INVISIBLE_CONTROL_CHARS, '')
    .replace(/\u00A0/g, ' ')
    .replace(/\u200B/g, '')
    .replace(/\u2028/g, ' ')
    .replace(/\u2029/g, ' ')
    .replace(/  +/g, ' ')
    .trim();
  if (result.length > 80) {
    result = result.substring(0, 80).trim();
  }
  return result;
}

export function normalizeTextForComment(input: string): string {
  if (!input) return '';
  const normalized = normalizeVisibleText(input);
  if (normalized.length > 60) {
    return normalized.substring(0, 60).trim() + '...';
  }
  return normalized;
}
