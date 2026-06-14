const UNSAFE_PATTERNS: RegExp[] = [
  /delete/i,
  /remove/i,
  /cancel.*order/i,
  /pay/i,
  /payment/i,
  /proceed.*to.*pay/i,
  /submit.*payment/i,
  /transfer/i,
  /logout/i,
  /sign.*out/i,
  /deactivate/i,
  /close.*account/i,
  /unsubscribe/i,
  /confirm.*(?:order|payment|delete|remove)/i,
  /final.*submit/i,
  /place.*order/i,
  /complete.*order/i,
  /cancel.*subscription/i,
  /terminate/i,
  /disconnect/i,
];

export function isUnsafeAction(text: string): boolean {
  if (!text || text.trim().length === 0) return false;
  return UNSAFE_PATTERNS.some(pattern => pattern.test(text));
}

export function filterSafeClickables<T extends { text?: string }>(items: T[]): T[] {
  return items.filter(item => !isUnsafeAction(item.text || ''));
}

export function getUnsafeTexts(items: { text?: string }[]): string[] {
  return items
    .filter(item => isUnsafeAction(item.text || ''))
    .map(item => item.text || '')
    .filter(Boolean);
}
