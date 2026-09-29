/**
 * Chaos interaction for E2E preset.
 * Performs random clicks, scrolls and text input on the mobile page for a
 * fixed wall-clock duration, recording every action taken and any crashes
 * or JS errors surfaced. Gated upstream by the --i-understand-the-risk flag.
 */
import { Page } from 'playwright';

export interface ChaosAction {
  kind: 'click' | 'scroll' | 'type' | 'hover';
  detail: string;
  at: string; // ISO timestamp
  error?: string;
}

export interface ChaosResult {
  actions: ChaosAction[];
  errors: string[];
  durationMs: number;
  requestedDurationMs: number;
  completedNormally: boolean;
}

const CHAOS_TEXTS = ['hello', 'test', 'abc', '12345', 'xyz'];

export async function runChaosInteraction(
  page: Page,
  _url: string,
  durationMs: number
): Promise<ChaosResult> {
  const actions: ChaosAction[] = [];
  const errors: string[] = [];

  // JS errors during chaos are surfaced in the report.
  const onError = (err: Error): void => {
    errors.push(`pageerror: ${err.message}`);
  };
  page.on('pageerror', onError);

  let completedNormally = true;
  const startedAt = Date.now();
  const deadline = startedAt + durationMs;
  let round = 0;

  const record = (kind: ChaosAction['kind'], detail: string, error?: string): void => {
    actions.push({ kind, detail, at: new Date().toISOString(), error });
  };

  try {
    while (Date.now() < deadline) {
      round++;
      const remaining = deadline - Date.now();
      if (remaining < 1000) break;

      const roll = Math.floor(Math.random() * 6);

      if (roll === 0) {
        // Random scroll
        try {
          const dy = 200 + Math.floor(Math.random() * 800);
          await page.mouse.wheel(0, dy);
          record('scroll', `scrolled ${dy}px (round ${round})`);
        } catch (err: any) {
          record('scroll', `scroll attempt (round ${round})`, err?.message);
        }
      } else if (roll === 1) {
        // Click a random visible button
        try {
          const handles = await page.$$('button:visible');
          const filtered: { handle: any; text: string }[] = [];
          for (const h of handles) {
            try {
              const box = await h.boundingBox();
              if (box && box.width > 0 && box.height > 0) {
                filtered.push({ handle: h, text: (await h.textContent())?.trim().slice(0, 40) || '(button)' });
              }
            } catch { /* detached mid-scan */ }
          }
          if (filtered.length > 0) {
            const pick = filtered[Math.floor(Math.random() * filtered.length)];
            await pick.handle.click({ timeout: 3000 }).catch(async () => {
              await pick.handle.click({ timeout: 3000, force: true }).catch(() => undefined);
            });
            record('click', `clicked button "${pick.text}" (round ${round})`);
          } else {
            record('click', 'no visible buttons found (round ' + round + ')');
          }
        } catch (err: any) {
          record('click', `click attempt (round ${round})`, err?.message);
        }
      } else if (roll === 2) {
        // Click a random visible link
        try {
          const handles = await page.$$('a:visible');
          const filtered: { handle: any; text: string }[] = [];
          for (const h of handles) {
            try {
              const box = await h.boundingBox();
              if (box && box.width > 0 && box.height > 0) {
                filtered.push({ handle: h, text: (await h.textContent())?.trim().slice(0, 40) || '(link)' });
              }
            } catch { /* detached mid-scan */ }
          }
          if (filtered.length > 0) {
            const pick = filtered[Math.floor(Math.random() * filtered.length)];
            await pick.handle.click({ timeout: 3000 }).catch(() => undefined);
            record('click', `clicked link "${pick.text}" (round ${round})`);
          } else {
            record('click', 'no visible links found (round ' + round + ')');
          }
        } catch (err: any) {
          record('click', `link click attempt (round ${round})`, err?.message);
        }
      } else if (roll === 3) {
        // Type into a random visible text input
        try {
          const handles = await page.$$('input[type="text"]:visible, input[type="search"]:visible, input:not([type]):visible');
          const usable: any[] = [];
          for (const h of handles) {
            try {
              const box = await h.boundingBox();
              const disabled = await h.getAttribute('disabled');
              const readonly = await h.getAttribute('readonly');
              if (box && box.width > 0 && !disabled && !readonly) usable.push(h);
            } catch { /* detached mid-scan */ }
          }
          if (usable.length > 0) {
            const pick = usable[Math.floor(Math.random() * usable.length)];
            const text = CHAOS_TEXTS[Math.floor(Math.random() * CHAOS_TEXTS.length)];
            await pick.fill(text, { timeout: 3000 }).catch(() => undefined);
            record('type', `typed "${text}" into input (round ${round})`);
          } else {
            record('type', 'no usable text inputs found (round ' + round + ')');
          }
        } catch (err: any) {
          record('type', `type attempt (round ${round})`, err?.message);
        }
      } else if (roll === 4) {
        // Hover a random visible element
        try {
          const handles = await page.$$('a:visible, button:visible');
          if (handles.length > 0) {
            const pick = handles[Math.floor(Math.random() * handles.length)];
            await pick.hover({ timeout: 2000 }).catch(() => undefined);
            record('hover', `hovered element (round ${round})`);
          }
        } catch (err: any) {
          record('hover', `hover attempt (round ${round})`, err?.message);
        }
      } else {
        // Idle beat — gives SPA transitions time to react to previous actions.
        record('scroll', 'idle beat (round ' + round + ')');
      }

      // Small pause between rounds so actions stay distinguishable.
      await new Promise(r => setTimeout(r, 400));
    }
  } catch (err: any) {
    // A crash mid-chaos should not lose the actions collected so far.
    completedNormally = false;
    errors.push(err?.message || String(err));
  } finally {
    page.off('pageerror', onError);
  }

  const durationMsActual = Date.now() - startedAt;
  return {
    actions,
    errors,
    durationMs: durationMsActual,
    requestedDurationMs: durationMs,
    completedNormally,
  };
}
