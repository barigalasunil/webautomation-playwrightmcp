# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\CheckViSimStatusOnlineTrackYourConnectionOrders.spec.ts >> https://www.myvi.in/ - Check Vi SIM Status Online | Track Your Connection & Orders - Regression Tests >> Verify that 25 Headings are present on Check Vi SIM Status Online | Track Your Connection & Orders @regression
- Location: tests\generated\www-myvi-in\CheckViSimStatusOnlineTrackYourConnectionOrders.spec.ts:50:3

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: getByRole('heading', { name: 'showing all orders' }).first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'showing all orders' }).first()

```

```yaml
- navigation:
  - link "Vi":
    - /url: https://www.myvi.in
    - img "Vi"
- alert:
  - img "error mark"
  - paragraph: No existing orders found.
  - img "img"
- heading "track your Vi SIM and connection status" [level=1]
- paragraph: Get the status of your order using your mobile number.
- textbox "enter your mobile number"
- text: enter your mobile number
- img "img"
- paragraph: Enter the mobile number you gave us while placing order.
- button "send OTP" [disabled]
- img "img"
- navigation "breadcrumb":
  - list:
    - listitem:
      - link "home":
        - /url: https://www.myvi.in/
    - listitem:
      - link "new connection":
        - /url: /new-connection/buy-postpaid-sim-connection-online
    - listitem:
      - link "track your SIM delivery":
        - /url: /new-connection/track-your-sim-online
- contentinfo:
  - link "Postpaid Connection":
    - /url: /new-connection/buy-postpaid-sim-connection-online
  - link "Privacy Policy":
    - /url: https://www.myvi.in/privacy-policy
  - link "MNP":
    - /url: /new-connection/mobile-number-portability-mnp-online
  - link "Premium Number":
    - /url: /new-connection/choose-your-fancy-mobile-numbers-online
  - link "Prepaid Connection":
    - /url: /new-connection/buy-prepaid-sim-connection-online
  - link "Track Your SIM":
    - /url: /new-connection/track-your-sim-online
  - link "SIM Card Home Delivery":
    - /url: /new-connection/vi-free-sim-home-delivery
  - link "Best Postpaid Plans":
    - /url: https://www.myvi.in/postpaid/vi-postpaid-plans
  - link "New SIM Card":
    - /url: https://www.myvi.in/new-connection/buy-new-4g-sim-card-online
  - link "Family Plans":
    - /url: https://www.myvi.in/postpaid/family-postpaid-plans
  - link "Vanity Number":
    - /url: https://www.myvi.in/new-connection/buy-vanity-or-gold-number-online
  - paragraph: This website uses own third-party cookies. Find out more about usage in our Privacy Policy page. Copyright Reserved with Vodafone Idea Limited (formerly Idea Cellular Limited).
  - paragraph: "Vodafone Idea Limited (Formerly Idea Cellular Limited), An Aditya Birla Group & Vodafone partnership, Suman Towers, Plot No.18, Sector 11, Gandhinagar – 382011, Gujarat.CIN L32100GJ1996PLC030976, T: +91-79 6671 4000, F: +91-79 2323 2251"
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { label, severity, feature, story, tag } from 'allure-js-commons';
  3   | import { CheckViSimStatusOnlineTrackYourConnectionOrders } from '../../../pages/generated/www-myvi-in/CheckViSimStatusOnlineTrackYourConnectionOrders.page';
  4   | import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
  5   | import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';
  6   | 
  7   | test.describe("https://www.myvi.in/ - Check Vi SIM Status Online | Track Your Connection & Orders - Regression Tests", () => {
  8   |   let appPage: CheckViSimStatusOnlineTrackYourConnectionOrders;
  9   | 
  10  |   test.beforeEach(async ({ page }) => {
  11  |     appPage = new CheckViSimStatusOnlineTrackYourConnectionOrders(page);
  12  |     await appPage.open();
  13  |   });
  14  | 
  15  |   test("Verify that Check Vi SIM Status Online | Track Your Connection & Orders loads successfully @regression", async ({ page }, testInfo) => {
  16  |     await label('suite', "Regression Test Suite");
  17  |     await label('url', "https://www.myvi.in/");
  18  |     await label('domain', "www.myvi.in");
  19  |     await feature("Check Vi SIM Status Online | Track Your Connection & Orders");
  20  |     await story("Verify page loads for regression");
  21  |     await severity("minor");
  22  |     await tag("regression");
  23  | 
  24  |     const evidence = createEvidence({
  25  |       application: "www.myvi.in",
  26  |       suite: "Regression Test Suite",
  27  |       browser: testInfo.project.name || 'chromium',
  28  |       pageName: "Check Vi SIM Status Online | Track Your Connection & Orders",
  29  |       pageUrl: "https://www.myvi.in/new-connection/track-your-sim-online",
  30  |       testObjective: "Verify page loads for regression",
  31  |     });
  32  | 
  33  |     await test.step("Open URL: https://www.myvi.in/", async () => {
  34  |       await appPage.open();
  35  |       evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
  36  |     });
  37  | 
  38  |     await test.step("Verify the URL is correct", async () => {
  39  |       await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/new\-connection\/track\-your\-sim\-online/);
  40  |       evidence.validationsPerformed.push("Verified URL is correct");
  41  |     });
  42  | 
  43  |     await test.step("Capture screenshot evidence", async () => {
  44  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Check Vi SIM Status Online | Track Your Connection & Orders - Final Evidence", "www.myvi.in");
  45  |       evidence.screenshots.push(screenshotPath);
  46  |     });
  47  | 
  48  |     await attachExecutionSummary(evidence, page, testInfo);
  49  |   });
  50  |   test("Verify that 25 Headings are present on Check Vi SIM Status Online | Track Your Connection & Orders @regression", async ({ page }, testInfo) => {
  51  |     await label('suite', "Regression Test Suite");
  52  |     await label('url', "https://www.myvi.in/");
  53  |     await label('domain', "www.myvi.in");
  54  |     await feature("Check Vi SIM Status Online | Track Your Connection & Orders");
  55  |     await story("Verify Heading elements are present");
  56  |     await severity("minor");
  57  |     await tag("regression");
  58  | 
  59  |     const evidence = createEvidence({
  60  |       application: "www.myvi.in",
  61  |       suite: "Regression Test Suite",
  62  |       browser: testInfo.project.name || 'chromium',
  63  |       pageName: "Check Vi SIM Status Online | Track Your Connection & Orders",
  64  |       pageUrl: "https://www.myvi.in/new-connection/track-your-sim-online",
  65  |       testObjective: "Verify Heading elements are present",
  66  |     });
  67  | 
  68  |     await test.step("Verify that the heading 'track your Vi SIM and connection status' exists in the DOM", async () => {
  69  |       await expect(appPage.headingTrackYourViSimAndConnectionStatus.first()).toBeAttached({ timeout: 5000 });
  70  |       evidence.validationsPerformed.push("Verify that the heading 'track your Vi SIM and connection status' exists in the DOM");
  71  |     });
  72  |     await test.step("Verify that the heading 'showing all orders' exists in the DOM", async () => {
> 73  |       await expect(appPage.headingShowingAllOrders.first()).toBeAttached({ timeout: 5000 });
      |                                                             ^ Error: expect(locator).toBeAttached() failed
  74  |       evidence.validationsPerformed.push("Verify that the heading 'showing all orders' exists in the DOM");
  75  |     });
  76  |     await test.step("Verify that the heading 'order details' exists in the DOM", async () => {
  77  |       await expect(appPage.headingOrderDetails.first()).toBeAttached({ timeout: 5000 });
  78  |       evidence.validationsPerformed.push("Verify that the heading 'order details' exists in the DOM");
  79  |     });
  80  |     await test.step("Verify that the heading 'cheers! your SIM is active now' exists in the DOM", async () => {
  81  |       await expect(appPage.headingCheersYourSimIsActiveNow.first()).toBeAttached({ timeout: 5000 });
  82  |       evidence.validationsPerformed.push("Verify that the heading 'cheers! your SIM is active now' exists in the DOM");
  83  |     });
  84  |     await test.step("Verify that the heading 'cheers! your SIM is active now' exists in the DOM", async () => {
  85  |       await expect(appPage.headingCheersYourSimIsActiveNow1.first()).toBeAttached({ timeout: 5000 });
  86  |       evidence.validationsPerformed.push("Verify that the heading 'cheers! your SIM is active now' exists in the DOM");
  87  |     });
  88  | 
  89  |     await test.step("Capture screenshot evidence", async () => {
  90  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Check Vi SIM Status Online | Track Your Connection & Orders - Heading Verification", "www.myvi.in");
  91  |       evidence.screenshots.push(screenshotPath);
  92  |     });
  93  | 
  94  |     await attachExecutionSummary(evidence, page, testInfo);
  95  |   });
  96  |   test("Verify that 25 Links are present on Check Vi SIM Status Online | Track Your Connection & Orders @regression", async ({ page }, testInfo) => {
  97  |     await label('suite', "Regression Test Suite");
  98  |     await label('url', "https://www.myvi.in/");
  99  |     await label('domain', "www.myvi.in");
  100 |     await feature("Check Vi SIM Status Online | Track Your Connection & Orders");
  101 |     await story("Verify Link elements are present");
  102 |     await severity("minor");
  103 |     await tag("regression");
  104 | 
  105 |     const evidence = createEvidence({
  106 |       application: "www.myvi.in",
  107 |       suite: "Regression Test Suite",
  108 |       browser: testInfo.project.name || 'chromium',
  109 |       pageName: "Check Vi SIM Status Online | Track Your Connection & Orders",
  110 |       pageUrl: "https://www.myvi.in/new-connection/track-your-sim-online",
  111 |       testObjective: "Verify Link elements are present",
  112 |     });
  113 | 
  114 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  115 |       await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
  116 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  117 |     });
  118 |     await test.step("Verify that the link 'go back to order tracking' exists in the DOM", async () => {
  119 |       await expect(appPage.linkGoBackToOrderTracking.first()).toBeAttached({ timeout: 5000 });
  120 |       evidence.validationsPerformed.push("Verify that the link 'go back to order tracking' exists in the DOM");
  121 |     });
  122 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  123 |       await expect(appPage.link2.first()).toBeAttached({ timeout: 5000 });
  124 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  125 |     });
  126 |     await test.step("Verify that the link 'go back' exists in the DOM", async () => {
  127 |       await expect(appPage.linkGoBack.first()).toBeAttached({ timeout: 5000 });
  128 |       evidence.validationsPerformed.push("Verify that the link 'go back' exists in the DOM");
  129 |     });
  130 |     await test.step("Verify that the link 'explore all our offerings' exists in the DOM", async () => {
  131 |       await expect(appPage.linkExploreAllOurOfferings.first()).toBeAttached({ timeout: 5000 });
  132 |       evidence.validationsPerformed.push("Verify that the link 'explore all our offerings' exists in the DOM");
  133 |     });
  134 | 
  135 |     await test.step("Capture screenshot evidence", async () => {
  136 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Check Vi SIM Status Online | Track Your Connection & Orders - Link Verification", "www.myvi.in");
  137 |       evidence.screenshots.push(screenshotPath);
  138 |     });
  139 | 
  140 |     await attachExecutionSummary(evidence, page, testInfo);
  141 |   });
  142 |   test("Verify that 9 Buttons are present on Check Vi SIM Status Online | Track Your Connection & Orders @regression", async ({ page }, testInfo) => {
  143 |     await label('suite', "Regression Test Suite");
  144 |     await label('url', "https://www.myvi.in/");
  145 |     await label('domain', "www.myvi.in");
  146 |     await feature("Check Vi SIM Status Online | Track Your Connection & Orders");
  147 |     await story("Verify Button elements are present");
  148 |     await severity("minor");
  149 |     await tag("regression");
  150 | 
  151 |     const evidence = createEvidence({
  152 |       application: "www.myvi.in",
  153 |       suite: "Regression Test Suite",
  154 |       browser: testInfo.project.name || 'chromium',
  155 |       pageName: "Check Vi SIM Status Online | Track Your Connection & Orders",
  156 |       pageUrl: "https://www.myvi.in/new-connection/track-your-sim-online",
  157 |       testObjective: "Verify Button elements are present",
  158 |     });
  159 | 
  160 |     await test.step("Verify that the button 'send OTP' exists in the DOM", async () => {
  161 |       await expect(appPage.buttonSendOtp.first()).toBeAttached({ timeout: 5000 });
  162 |       evidence.validationsPerformed.push("Verify that the button 'send OTP' exists in the DOM");
  163 |     });
  164 |     await test.step("Verify that the button 'show' exists in the DOM", async () => {
  165 |       await expect(appPage.buttonShow.first()).toBeAttached({ timeout: 5000 });
  166 |       evidence.validationsPerformed.push("Verify that the button 'show' exists in the DOM");
  167 |     });
  168 |     await test.step("Verify that the button 'view all updates' exists in the DOM", async () => {
  169 |       await expect(appPage.buttonViewAllUpdates.first()).toBeAttached({ timeout: 5000 });
  170 |       evidence.validationsPerformed.push("Verify that the button 'view all updates' exists in the DOM");
  171 |     });
  172 |     await test.step("Verify that the button 'live track' exists in the DOM", async () => {
  173 |       await expect(appPage.buttonLiveTrack.first()).toBeAttached({ timeout: 5000 });
```