import type { Page } from 'playwright';

export async function autoScrollToBottom(page: Page): Promise<void> {
  console.log('[STEP] Scrolling page to discover lazy-loaded content');

  const scrollStep = 600;
  const scrollDelay = 300;

  let prevHeight = 0;
  let sameHeightCount = 0;
  const maxSameHeight = 3;

  try {
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(200);

    while (sameHeightCount < maxSameHeight) {
      const currentHeight = await page.evaluate(() => document.body.scrollHeight);
      if (currentHeight === prevHeight) {
        sameHeightCount++;
      } else {
        sameHeightCount = 0;
      }
      if (sameHeightCount >= maxSameHeight) break;

      prevHeight = currentHeight;
      await page.evaluate(() => window.scrollBy(0, window.innerHeight));
      await page.waitForTimeout(scrollDelay);
    }

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);

    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(200);

    console.log('[PASS] Page scroll discovery completed');
  } catch {
    console.log('[WARN] Scroll discovery encountered an issue, continuing...');
    try { await page.evaluate(() => window.scrollTo(0, 0)); } catch {}
  }
}
