# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\ViUtilityBillPaymentsWaterGasElectricityMore.spec.ts >> https://www.myvi.in/ - Vi Utility Bill Payments | Water, Gas, Electricity & More - Regression Tests >> Verify that Vi Utility Bill Payments | Water, Gas, Electricity & More loads successfully @regression
- Location: tests\generated\www-myvi-in\ViUtilityBillPaymentsWaterGasElectricityMore.spec.ts:15:3

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://www.myvi.in/utilities", waiting until "load"

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class BasePage {
  4  |   readonly page: Page;
  5  |   readonly url: string = '';
  6  | 
  7  |   constructor(page: Page) {
  8  |     this.page = page;
  9  |   }
  10 | 
  11 |   async open(): Promise<void> {
> 12 |     await this.page.goto(this.url, { waitUntil: 'load', timeout: 30000 });
     |                     ^ Error: page.goto: Target page, context or browser has been closed
  13 |   }
  14 | 
  15 |   async goto(url: string): Promise<void> {
  16 |     await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  17 |   }
  18 | 
  19 |   async waitForPageLoad(): Promise<void> {
  20 |     await this.page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  21 |   }
  22 | 
  23 |   async click(locator: Locator): Promise<void> {
  24 |     await locator.click();
  25 |   }
  26 | 
  27 |   async fill(locator: Locator, value: string): Promise<void> {
  28 |     await locator.fill(value);
  29 |   }
  30 | 
  31 |   async getText(locator: Locator): Promise<string> {
  32 |     return await locator.textContent() ?? '';
  33 |   }
  34 | 
  35 |   async isVisible(locator: Locator): Promise<boolean> {
  36 |     return await locator.isVisible();
  37 |   }
  38 | 
  39 |   async takeScreenshot(name: string): Promise<void> {
  40 |     const { writeFileSync, mkdirSync } = await import('node:fs');
  41 |     const path = await import('node:path');
  42 |     const dir = path.resolve('reports');
  43 |     mkdirSync(dir, { recursive: true });
  44 |     await this.page.screenshot({ path: path.join(dir, `${name}-${Date.now()}.png`), fullPage: true });
  45 |   }
  46 | 
  47 |   async selectDropdown(locator: Locator, value: string): Promise<void> {
  48 |     await locator.selectOption(value);
  49 |   }
  50 | 
  51 |   async getElementCount(locator: Locator): Promise<number> {
  52 |     return await locator.count();
  53 |   }
  54 | }
  55 | 
```