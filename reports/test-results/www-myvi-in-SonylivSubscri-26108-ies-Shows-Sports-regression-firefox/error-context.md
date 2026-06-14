# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\SonylivSubscriptionPlansWithViWatchMoviesShowsSports.spec.ts >> https://www.myvi.in/ - SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports - Regression Tests >> Verify that 2 Menus are present on SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports @regression
- Location: tests\generated\www-myvi-in\SonylivSubscriptionPlansWithViWatchMoviesShowsSports.spec.ts:240:3

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: getByRole('navigation', { name: 'PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service' }).first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for getByRole('navigation', { name: 'PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service' }).first()

```

```yaml
- banner:
  - link "vi-logo":
    - /url: /
    - img "vi-logo"
  - navigation:
    - list:
      - listitem:
        - text: Prepaid
        - img "down-arrow"
      - listitem:
        - text: Postpaid
        - img "down-arrow"
      - listitem:
        - text: New Connection
        - img "down-arrow"
      - listitem:
        - link "International Roaming"
      - listitem:
        - link "5G"
      - listitem:
        - text: OTTs & More
        - img "down-arrow"
      - listitem:
        - text: Help
        - img "down-arrow"
      - listitem:
        - text: DND & Service Quality
        - img "down-arrow"
      - listitem:
        - button "search":
          - img "search"
  - navigation:
    - list:
      - listitem: Business
      - listitem: Investors
      - listitem: Sign in
- img "SonyLiv"
- heading "stream in 10+ Languages and get exciting data benefits starting at just ₹408 with SonyLIV Prepaid Recharge" [level=1]
- text: Postpaid Prepaid Choose Circle
- button "Maharashtra & Goa toggle":
  - text: Maharashtra & Goa
  - img "toggle"
- text: Premium Pack - Includes Sony Liv ₹ 95
- paragraph: "4"
- paragraph: GB
- paragraph: data
- paragraph: "14"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- text: •
- strong: Data + OTT Pack
- text: • 28 days of SonyLIV mobile • no service validity+...see more
- img "Card Title"
- text: ₹ 998
- paragraph: "2"
- paragraph: GB/day
- paragraph: data
- paragraph: "84"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G Data
- text: • 12am-12pm Unlimited Data • Sony LIV Subscriptio+...see more
- img "Card Title"
- text: ₹ 408
- paragraph: "2"
- paragraph: GB/day
- paragraph: data
- paragraph: "28"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G Data
- text: • 12am-12pm Unlimited Data • Sony LIV Subscriptio+...see more
- heading "it’s very simple to get started" [level=2]
- text: "1"
- paragraph: upgrade to SonyLiv with Vi recharge
- text: "2"
- paragraph:
  - text: claim your SONY liv benefit on
  - link "Vi app":
    - /url: https://www.myvi.in/vi-app
- text: "3"
- paragraph: open SONY liv on your device & enjoy!
- heading "watch exclusive SonyLiv specials" [level=1]
- img "Slide 0"
- img "Slide 1"
- img
- img
- heading "Frequently Asked Questions (FAQs)" [level=2]
- text: Prepaid I have a Vi prepaid number. how do I avail the offer?
- img "Collapse"
- text: what is a SonyLIV Premium Mobile only subscription bundled prepaid pack?
- img "Collapse"
- text: I have recharged with Rs.95 SonyLIV Premium Mobile only subscription valid for 28 days. how do I activate the SonyLIV Premium Mobile only subscription now?
- img "Collapse"
- text: Are there any additional costs/subscription charges that I need to pay for SonyLIV Premium Mobile only subscription valid for 28 days?
- img "Collapse"
- text: I cannot find the recharge SMS. how do I login to SonyLIV Mobile App now?
- img "Collapse"
- text: What is Sony Liv Mobile bundled prepaid pack?
- img "Collapse"
- text: Are there any additional costs/subscription charges that I need to pay for Sony Liv Mobile/TV monthly subscription?
- img "Collapse"
- text: Can I use Sony LIV Mobile subscription on my smart TV or Laptop?
- img "Collapse"
- text: If I recharge again with the Sony Liv Mobile bundle pack, will I get the offer again?
- img "Collapse"
- text: Can I use Sony LIV Mobile subscription on my smart TV or Laptop?
- img "Collapse"
- text: I do not have a Vi connection. Can I avail the offer?
- img "Collapse"
- text: I’m an existing Sony Liv annual subscriber. Will I get the offer if I recharge with the designated prepaid bundled recharge denominations for the first time?
- img "Collapse"
- contentinfo:
  - heading [level=3]
  - paragraph
- alert
- paragraph:
  - text: Zero Platform Fee
  - img
```

# Test source

```ts
  159 |     });
  160 |     await test.step("Verify that the button 'buy' exists in the DOM", async () => {
  161 |       await expect(appPage.buttonBuy.first()).toBeAttached({ timeout: 5000 });
  162 |       evidence.validationsPerformed.push("Verify that the button 'buy' exists in the DOM");
  163 |     });
  164 |     await test.step("Verify that the button 'buy' exists in the DOM", async () => {
  165 |       await expect(appPage.buttonBuy1.first()).toBeAttached({ timeout: 5000 });
  166 |       evidence.validationsPerformed.push("Verify that the button 'buy' exists in the DOM");
  167 |     });
  168 |     await test.step("Verify that the button 'buy' exists in the DOM", async () => {
  169 |       await expect(appPage.buttonBuy2.first()).toBeAttached({ timeout: 5000 });
  170 |       evidence.validationsPerformed.push("Verify that the button 'buy' exists in the DOM");
  171 |     });
  172 | 
  173 |     await test.step("Capture screenshot evidence", async () => {
  174 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports - Button Verification", "www.myvi.in");
  175 |       evidence.screenshots.push(screenshotPath);
  176 |     });
  177 | 
  178 |     await attachExecutionSummary(evidence, page, testInfo);
  179 |   });
  180 |   test("Verify that 1 Input is present on SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports @regression", async ({ page }, testInfo) => {
  181 |     await label('suite', "Regression Test Suite");
  182 |     await label('url', "https://www.myvi.in/");
  183 |     await label('domain', "www.myvi.in");
  184 |     await feature("SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports");
  185 |     await story("Verify Input elements are present");
  186 |     await severity("minor");
  187 |     await tag("regression");
  188 | 
  189 |     const evidence = createEvidence({
  190 |       application: "www.myvi.in",
  191 |       suite: "Regression Test Suite",
  192 |       browser: testInfo.project.name || 'chromium',
  193 |       pageName: "SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports",
  194 |       pageUrl: "https://www.myvi.in/prepaid/sonyliv-subscription-recharge-plans",
  195 |       testObjective: "Verify Input elements are present",
  196 |     });
  197 | 
  198 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  199 |       await expect(appPage.inputParamdetails.first()).toBeAttached({ timeout: 5000 });
  200 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  201 |     });
  202 | 
  203 |     await test.step("Capture screenshot evidence", async () => {
  204 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports - Input Verification", "www.myvi.in");
  205 |       evidence.screenshots.push(screenshotPath);
  206 |     });
  207 | 
  208 |     await attachExecutionSummary(evidence, page, testInfo);
  209 |   });
  210 |   test("Verify that 1 Form is present on SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports @regression", async ({ page }, testInfo) => {
  211 |     await label('suite', "Regression Test Suite");
  212 |     await label('url', "https://www.myvi.in/");
  213 |     await label('domain', "www.myvi.in");
  214 |     await feature("SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports");
  215 |     await story("Verify Form elements are present");
  216 |     await severity("minor");
  217 |     await tag("regression");
  218 | 
  219 |     const evidence = createEvidence({
  220 |       application: "www.myvi.in",
  221 |       suite: "Regression Test Suite",
  222 |       browser: testInfo.project.name || 'chromium',
  223 |       pageName: "SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports",
  224 |       pageUrl: "https://www.myvi.in/prepaid/sonyliv-subscription-recharge-plans",
  225 |       testObjective: "Verify Form elements are present",
  226 |     });
  227 | 
  228 |     await test.step("Verify that the form 'Form' exists in the DOM", async () => {
  229 |       await expect(appPage.form0.first()).toBeAttached({ timeout: 5000 });
  230 |       evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
  231 |     });
  232 | 
  233 |     await test.step("Capture screenshot evidence", async () => {
  234 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports - Form Verification", "www.myvi.in");
  235 |       evidence.screenshots.push(screenshotPath);
  236 |     });
  237 | 
  238 |     await attachExecutionSummary(evidence, page, testInfo);
  239 |   });
  240 |   test("Verify that 2 Menus are present on SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports @regression", async ({ page }, testInfo) => {
  241 |     await label('suite', "Regression Test Suite");
  242 |     await label('url', "https://www.myvi.in/");
  243 |     await label('domain', "www.myvi.in");
  244 |     await feature("SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports");
  245 |     await story("Verify Menu elements are present");
  246 |     await severity("minor");
  247 |     await tag("regression");
  248 | 
  249 |     const evidence = createEvidence({
  250 |       application: "www.myvi.in",
  251 |       suite: "Regression Test Suite",
  252 |       browser: testInfo.project.name || 'chromium',
  253 |       pageName: "SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports",
  254 |       pageUrl: "https://www.myvi.in/prepaid/sonyliv-subscription-recharge-plans",
  255 |       testObjective: "Verify Menu elements are present",
  256 |     });
  257 | 
  258 |     await test.step("Verify that the menu 'PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service' exists in the DOM", async () => {
> 259 |       await expect(appPage.menuPrepaidpostpaidnewConnectioninternationalRoaming5gottsMor.first()).toBeAttached({ timeout: 5000 });
      |                                                                                                   ^ Error: expect(locator).toBeAttached() failed
  260 |       evidence.validationsPerformed.push("Verify that the menu 'PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service' exists in the DOM");
  261 |     });
  262 |     await test.step("Verify that the menu 'BusinessInvestorsSign in' exists in the DOM", async () => {
  263 |       await expect(appPage.menuBusinessinvestorssignIn.first()).toBeAttached({ timeout: 5000 });
  264 |       evidence.validationsPerformed.push("Verify that the menu 'BusinessInvestorsSign in' exists in the DOM");
  265 |     });
  266 | 
  267 |     await test.step("Capture screenshot evidence", async () => {
  268 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports - Menu Verification", "www.myvi.in");
  269 |       evidence.screenshots.push(screenshotPath);
  270 |     });
  271 | 
  272 |     await attachExecutionSummary(evidence, page, testInfo);
  273 |   });
  274 | });
  275 | 
```