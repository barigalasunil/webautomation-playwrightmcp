import { Page, Locator } from '@playwright/test';

export interface LocatorStrategy {
  build: () => Locator;
  name: string;
}

const RESOLVE_TIMEOUT = 2000;

let logResolved = true;

export function setSmartLocatorLogging(enabled: boolean): void {
  logResolved = enabled;
}

function log(...args: any[]): void {
  if (logResolved) {
    const prefix = '[SmartLocator]';
    const msg = args.map(a => typeof a === 'string' ? a : JSON.stringify(a)).join(' ');
    console.log(`${prefix} ${msg}`);
  }
}

export class SmartLocator {
  static create(page: Page, strategies: LocatorStrategy[]): Locator {
    if (strategies.length === 0) {
      throw new Error('[SmartLocator] No locator strategies provided');
    }

    let result = strategies[0].build();
    for (let i = 1; i < strategies.length; i++) {
      result = result.or(strategies[i].build());
    }
    return result;
  }

  static async resolve(
    page: Page,
    strategies: LocatorStrategy[],
    options?: { timeout?: number }
  ): Promise<Locator> {
    if (strategies.length === 0) {
      throw new Error('[SmartLocator] No locator strategies provided');
    }

    const timeout = options?.timeout ?? RESOLVE_TIMEOUT;
    const errors: string[] = [];

    for (const strategy of strategies) {
      const locator = strategy.build().first();
      try {
        await locator.waitFor({ state: 'attached', timeout });
        log(`Resolved with: ${strategy.name}`);
        return locator;
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        errors.push(`  ${strategy.name}: ${msg}`);
      }
    }

    const errorMsg = `[SmartLocator] All ${strategies.length} strategies failed:\n${errors.join('\n')}`;
    log(errorMsg);
    throw new Error(errorMsg);
  }

  static async click(
    page: Page,
    strategies: LocatorStrategy[],
    options?: { timeout?: number }
  ): Promise<void> {
    const locator = await SmartLocator.resolve(page, strategies, options);
    await locator.first().click();
  }

  static async fill(
    page: Page,
    strategies: LocatorStrategy[],
    value: string,
    options?: { timeout?: number }
  ): Promise<void> {
    const locator = await SmartLocator.resolve(page, strategies, options);
    await locator.first().fill(value);
  }

  static async selectOption(
    page: Page,
    strategies: LocatorStrategy[],
    value: string,
    options?: { timeout?: number }
  ): Promise<void> {
    const locator = await SmartLocator.resolve(page, strategies, options);
    await locator.first().selectOption(value);
  }

  static async isVisible(
    page: Page,
    strategies: LocatorStrategy[],
    options?: { timeout?: number }
  ): Promise<boolean> {
    try {
      const locator = await SmartLocator.resolve(page, strategies, options);
      return await locator.isVisible();
    } catch {
      return false;
    }
  }

  static async getText(
    page: Page,
    strategies: LocatorStrategy[],
    options?: { timeout?: number }
  ): Promise<string> {
    const locator = await SmartLocator.resolve(page, strategies, options);
    return (await locator.textContent()) ?? '';
  }

  static async getCount(
    page: Page,
    strategies: LocatorStrategy[],
    options?: { timeout?: number }
  ): Promise<number> {
    const locator = await SmartLocator.resolve(page, strategies, options);
    return await locator.count();
  }
}
