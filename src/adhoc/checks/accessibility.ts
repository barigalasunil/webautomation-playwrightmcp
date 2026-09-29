/**
 * Accessibility audit for ad-hoc audits, powered by @axe-core/playwright.
 * Violations are grouped by severity; the report shows the most serious ones
 * with target-element snippets.
 */
import { AxeBuilder } from '@axe-core/playwright';
import { Page } from 'playwright';

export interface A11yViolation {
  id: string;
  impact: 'minor' | 'moderate' | 'serious' | 'critical' | null;
  help: string;
  description: string;
  tags: string[];
  nodes: { target: string[]; html: string; failureSummary?: string }[];
}

export interface AccessibilityResult {
  violations: A11yViolation[];
  passesCount: number;
  inapplicableCount: number;
  incompleteCount: number;
}

const IMPACT_ORDER: Record<string, number> = {
  critical: 0,
  serious: 1,
  moderate: 2,
  minor: 3,
};

export async function runAccessibilityAudit(page: Page): Promise<AccessibilityResult> {
  const builder = new AxeBuilder({ page }).withTags([
    'wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa',
  ]);
  const results = await builder.analyze();

  const violations: A11yViolation[] = (results.violations ?? []).map(v => ({
    id: v.id,
    impact: (v.impact as A11yViolation['impact']) ?? null,
    help: v.help,
    description: v.description,
    tags: v.tags ?? [],
    nodes: (v.nodes ?? []).slice(0, 5).map(n => ({
      // axe targets can contain shadow-DOM selectors; stringify the whole chain.
      target: (n.target ?? []).map(part => (typeof part === 'string' ? part : JSON.stringify(part))),
      html: n.html ?? '',
      failureSummary: n.failureSummary,
    })),
  }));

  // Most severe first, then by node count (bigger blast radius first).
  violations.sort((a, b) => {
    const ia = a.impact ? IMPACT_ORDER[a.impact] ?? 99 : 99;
    const ib = b.impact ? IMPACT_ORDER[b.impact] ?? 99 : 99;
    if (ia !== ib) return ia - ib;
    return b.nodes.length - a.nodes.length;
  });

  return {
    violations,
    passesCount: results.passes?.length ?? 0,
    inapplicableCount: results.inapplicable?.length ?? 0,
    incompleteCount: results.incomplete?.length ?? 0,
  };
}
