/**
 * Emits structured progress breadcrumbs for the dashboard.
 * These JSON lines are prefixed with __PROGRESS__ and parsed by the
 * dashboard backend's stdout listener in runManager.ts.
 */
export function emitDashboardProgress(event: Record<string, unknown>): void {
  console.log(`__PROGRESS__${JSON.stringify(event)}`);
}
