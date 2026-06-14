const HIGH_PRIORITY_KEYWORDS = [
  'login', 'sign in', 'signin', 'search', 'recharge', 'buy', 'plans',
  'products', 'services', 'support', 'contact', 'help', 'new connection',
  'offers', 'cart', 'account', 'my account', 'register', 'sign up',
  'get started', 'explore', 'view all', 'see all', 'shop now',
  'learn more', 'read more', 'get offer', 'activate', 'start',
];

const LOW_PRIORITY_KEYWORDS = [
  'facebook', 'twitter', 'instagram', 'linkedin', 'youtube',
  'privacy policy', 'terms', 'terms of service', 'terms of use',
  'cookie', 'copyright', 'all rights reserved', 'sitemap',
  'rss', 'feedback', 'share',
];

export interface RankedClickable {
  text: string;
  href?: string;
  type: 'link' | 'button';
  priority: number;
  category: 'high' | 'medium' | 'low';
}

export function rankClickables(
  links: { text?: string; href?: string }[],
  buttons: { text?: string }[]
): RankedClickable[] {
  const ranked: RankedClickable[] = [];

  for (const link of links) {
    const text = (link.text || '').trim();
    if (!text) continue;
    const score = scoreImportance(text);
    ranked.push({
      text,
      href: link.href,
      type: 'link',
      priority: score,
      category: score >= 10 ? 'high' : score >= 5 ? 'medium' : 'low',
    });
  }

  for (const button of buttons) {
    const text = (button.text || '').trim();
    if (!text) continue;
    const score = scoreImportance(text);
    ranked.push({
      text,
      type: 'button',
      priority: score,
      category: score >= 10 ? 'high' : score >= 5 ? 'medium' : 'low',
    });
  }

  ranked.sort((a, b) => b.priority - a.priority);
  return ranked;
}

function scoreImportance(text: string): number {
  const lower = text.toLowerCase().trim();
  let score = 0;

  for (const keyword of HIGH_PRIORITY_KEYWORDS) {
    if (lower.includes(keyword)) {
      score += 10;
    }
  }

  for (const keyword of LOW_PRIORITY_KEYWORDS) {
    if (lower.includes(keyword)) {
      score -= 5;
    }
  }

  if (lower.length <= 30) score += 3;
  if (/^[A-Z]/.test(text)) score += 2;

  return Math.max(0, score);
}

export function getTopClickables(
  ranked: RankedClickable[],
  maxCount: number,
  skipExternal: boolean,
  baseUrl: string
): RankedClickable[] {
  let filtered = ranked;
  if (skipExternal && baseUrl) {
    try {
      const base = new URL(baseUrl);
      filtered = ranked.filter(r => {
        if (r.type === 'button') return true;
        if (!r.href) return true;
        try {
          const u = new URL(r.href, baseUrl);
          return u.hostname === base.hostname;
        } catch {
          return true;
        }
      });
    } catch {}
  }

  return filtered.slice(0, maxCount);
}
