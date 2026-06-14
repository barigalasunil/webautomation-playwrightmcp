import { Page, Locator } from '@playwright/test';
import { waitForPageReady } from '../src/core/explorer/pageWaitHelper';

export class BasePage {
  readonly page: Page;
  readonly url: string = '';

  constructor(page: Page) {
    this.page = page;
  }

  async open(): Promise<void> {
    await this.page.goto(this.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
  }

  async goto(url: string): Promise<void> {
    await this.page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
  }

  async waitForPageLoad(): Promise<void> {
    await waitForPageReady(this.page);
  }

  async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  async fill(locator: Locator, value: string): Promise<void> {
    await locator.fill(value);
  }

  async getText(locator: Locator): Promise<string> {
    return await locator.textContent() ?? '';
  }

  async isVisible(locator: Locator): Promise<boolean> {
    return await locator.isVisible();
  }

  async takeScreenshot(name: string): Promise<void> {
    const { writeFileSync, mkdirSync } = await import('node:fs');
    const path = await import('node:path');
    const dir = path.resolve('reports');
    mkdirSync(dir, { recursive: true });
    await this.page.screenshot({ path: path.join(dir, `${name}-${Date.now()}.png`), fullPage: true });
  }

  async selectDropdown(locator: Locator, value: string): Promise<void> {
    await locator.selectOption(value);
  }

  async getElementCount(locator: Locator): Promise<number> {
    return await locator.count();
  }
}
