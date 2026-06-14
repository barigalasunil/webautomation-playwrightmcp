# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\GetANewViPrepaidSimCardIn3SimpleStepsBuyNewSim.spec.ts >> https://www.myvi.in/ - Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim - Regression Tests >> Verify that 25 Headings are present on Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim @regression
- Location: tests\generated\www-myvi-in\GetANewViPrepaidSimCardIn3SimpleStepsBuyNewSim.spec.ts:50:3

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: getByRole('heading', { name: 'select a pack to start' }).first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'select a pack to start' }).first()

```

```yaml
- navigation:
  - link "Vi":
    - /url: https://www.myvi.in
    - img "Vi"
- paragraph:
  - img
  - text: Strong network. Sabka haq. Join Vi today!
- tablist:
  - listitem:
    - tab "postpaid plans" [selected]
  - listitem:
    - tab "family plans" [selected]
  - listitem:
    - img
    - tab "prepaid packs"
    - img
- paragraph: Please enter your pincode to view packs
- textbox
- text: please enter pincode
- heading "get a new Vi prepaid SIM Card in 3 simple steps" [level=1]
- img "Select Prepaid SIM Plan"
- paragraph: select a pack
- img "Choose Prepaid Number"
- paragraph: choose your number
- img "Prepaid SIM Card Delivery"
- paragraph: Prepaid SIM confirmed
- toolbar:
  - listbox:
    - option "carry forward unused daily data of weekdays to weekend Buy a prepaid connection now and grab this benefit. know more >>":
      - heading "carry forward unused daily data of weekdays to weekend" [level=2]
      - paragraph: Buy a prepaid connection now and grab this benefit.
      - paragraph: know more
      - text: ">>"
      - img
  - tablist:
    - listitem:
      - button "2"
- heading "why join Vi?" [level=2]
- paragraph: We believe that reliable connectivity is everyone’s right and not a premium privilege. A great network should simply work – for everyone, everywhere, every time Vi’s network is designed for all your needs, whether you’re on the move, working remotely, at a concert or a match, creating or just chilling at home, Vi has you covered with the use of AI-based self optimizing network technology
- img "icon"
- link "Switch to the Vi 5G experience":
  - /url: /new-connection/mobile-number-portability-mnp-online
  - paragraph: Switch to the Vi 5G experience
- img "icon"
- link "Port to unlimited data+calls+ entertainment..":
  - /url: /new-connection/mobile-number-portability-mnp-online
  - paragraph: Port to unlimited data+calls+ entertainment..
- img "icon"
- link "Join Vi without changing your number":
  - /url: /new-connection/mobile-number-portability-mnp-online
  - paragraph: Join Vi without changing your number
- img "icon"
- link "Choose a number of your choice":
  - /url: /new-connection/choose-your-fancy-mobile-numbers-online
  - paragraph: Choose a number of your choice
- img
- img
- heading "contactless Prepaid SIM at your Doorstep" [level=2]
- paragraph: We will get your Prepaid Connection safely
- img
- heading "trusted across the nation" [level=2]
- paragraph: Know why our customers love us
- toolbar:
  - listbox:
    - option "user image Ordering my Vi postpaid SIM online was extremely easy. The delivery was right on time and completely hassle-free. Activating the SIM was smooth, and I was pleasantly surprised by the OTT benefits like JioHotstar and more. Overall, it was a seamless and satisfying experience — highly recommended! Rajashree Sathe Mumbai":
      - img "user image"
      - paragraph: Ordering my Vi postpaid SIM online was extremely easy. The delivery was right on time and completely hassle-free. Activating the SIM was smooth, and I was pleasantly surprised by the OTT benefits like JioHotstar and more. Overall, it was a seamless and satisfying experience — highly recommended!
      - text: Rajashree Sathe
      - paragraph: Mumbai
  - tablist:
    - listitem:
      - button "1"
- heading "Prepaid SIM Connection FAQs" [level=2]
- heading "How do I get free Vi prepaid SIM?" [level=3]:
  - button "How do I get free Vi prepaid SIM?" [expanded]
- separator
- heading "What are the new SIM offers on Vi Prepaid connection?" [level=3]:
  - button "What are the new SIM offers on Vi Prepaid connection?" [expanded]
- separator
- heading "What is the price of a new Vi SIM?" [level=3]:
  - button "What is the price of a new Vi SIM?" [expanded]
- separator
- heading "How long will my new prepaid connection take to get activated?" [level=3]:
  - button "How long will my new prepaid connection take to get activated?" [expanded]
- separator
- heading "Which documents would I require while buying a prepaid connection?" [level=3]:
  - button "Which documents would I require while buying a prepaid connection?" [expanded]
- separator
- heading "Do I need to pay any activation charges while I buy a new prepaid SIM online?" [level=3]:
  - button "Do I need to pay any activation charges while I buy a new prepaid SIM online?" [expanded]
- separator
- heading "How can I buy a new connection without losing my current number?" [level=3]:
  - button "How can I buy a new connection without losing my current number?" [expanded]
- separator
- heading "How can I track my new prepaid SIM card after placing the order?" [level=3]:
  - button "How can I track my new prepaid SIM card after placing the order?" [expanded]
- separator
- heading "Do I need to be present while the prepaid SIM card is handed over to me?" [level=3]:
  - button "Do I need to be present while the prepaid SIM card is handed over to me?" [expanded]
- separator
- heading "How can I buy a new Vodafone or Idea Prepaid SIM connection?" [level=3]:
  - button "How can I buy a new Vodafone or Idea Prepaid SIM connection?" [expanded]
- separator
- heading "Is doorstep delivery available for Vi prepaid SIM?" [level=3]:
  - button "Is doorstep delivery available for Vi prepaid SIM?" [expanded]
- separator
- heading "Can I complete Vi prepaid SIM activation through eKYC?" [level=3]:
  - button "Can I complete Vi prepaid SIM activation through eKYC?" [expanded]
- navigation "breadcrumb":
  - list:
    - listitem:
      - link "home":
        - /url: https://www.myvi.in/
    - listitem:
      - link "new connection":
        - /url: https://www.myvi.in/new-connection/buy-postpaid-sim-connection-online
    - listitem:
      - link "prepaid connection":
        - /url: https://www.myvi.in/new-connection/buy-prepaid-sim-connection-online
- contentinfo:
  - heading "buy prepaid SIM card online" [level=2]:
    - button "buy prepaid SIM card online"
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
  3   | import { GetANewViPrepaidSimCardIn3SimpleStepsBuyNewSim } from '../../../pages/generated/www-myvi-in/GetANewViPrepaidSimCardIn3SimpleStepsBuyNewSim.page';
  4   | import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
  5   | import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';
  6   | 
  7   | test.describe("https://www.myvi.in/ - Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim - Regression Tests", () => {
  8   |   let appPage: GetANewViPrepaidSimCardIn3SimpleStepsBuyNewSim;
  9   | 
  10  |   test.beforeEach(async ({ page }) => {
  11  |     appPage = new GetANewViPrepaidSimCardIn3SimpleStepsBuyNewSim(page);
  12  |     await appPage.open();
  13  |   });
  14  | 
  15  |   test("Verify that Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim loads successfully @regression", async ({ page }, testInfo) => {
  16  |     await label('suite', "Regression Test Suite");
  17  |     await label('url', "https://www.myvi.in/");
  18  |     await label('domain', "www.myvi.in");
  19  |     await feature("Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim");
  20  |     await story("Verify page loads for regression");
  21  |     await severity("minor");
  22  |     await tag("regression");
  23  | 
  24  |     const evidence = createEvidence({
  25  |       application: "www.myvi.in",
  26  |       suite: "Regression Test Suite",
  27  |       browser: testInfo.project.name || 'chromium',
  28  |       pageName: "Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim",
  29  |       pageUrl: "https://www.myvi.in/new-connection/buy-prepaid-sim-connection-online",
  30  |       testObjective: "Verify page loads for regression",
  31  |     });
  32  | 
  33  |     await test.step("Open URL: https://www.myvi.in/", async () => {
  34  |       await appPage.open();
  35  |       evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
  36  |     });
  37  | 
  38  |     await test.step("Verify the URL is correct", async () => {
  39  |       await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/new\-connection\/buy\-prepaid\-sim\-connection\-online/);
  40  |       evidence.validationsPerformed.push("Verified URL is correct");
  41  |     });
  42  | 
  43  |     await test.step("Capture screenshot evidence", async () => {
  44  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim - Final Evidence", "www.myvi.in");
  45  |       evidence.screenshots.push(screenshotPath);
  46  |     });
  47  | 
  48  |     await attachExecutionSummary(evidence, page, testInfo);
  49  |   });
  50  |   test("Verify that 25 Headings are present on Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim @regression", async ({ page }, testInfo) => {
  51  |     await label('suite', "Regression Test Suite");
  52  |     await label('url', "https://www.myvi.in/");
  53  |     await label('domain', "www.myvi.in");
  54  |     await feature("Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim");
  55  |     await story("Verify Heading elements are present");
  56  |     await severity("minor");
  57  |     await tag("regression");
  58  | 
  59  |     const evidence = createEvidence({
  60  |       application: "www.myvi.in",
  61  |       suite: "Regression Test Suite",
  62  |       browser: testInfo.project.name || 'chromium',
  63  |       pageName: "Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim",
  64  |       pageUrl: "https://www.myvi.in/new-connection/buy-prepaid-sim-connection-online",
  65  |       testObjective: "Verify Heading elements are present",
  66  |     });
  67  | 
  68  |     await test.step("Verify that the heading 'select a pack to start' exists in the DOM", async () => {
> 69  |       await expect(appPage.headingSelectAPackToStart.first()).toBeAttached({ timeout: 5000 });
      |                                                               ^ Error: expect(locator).toBeAttached() failed
  70  |       evidence.validationsPerformed.push("Verify that the heading 'select a pack to start' exists in the DOM");
  71  |     });
  72  |     await test.step("Verify that the heading 'get a new Vi prepaid SIM Card in 3 simple steps' exists in the DOM", async () => {
  73  |       await expect(appPage.headingGetANewViPrepaidSimCardIn3SimpleSteps.first()).toBeAttached({ timeout: 5000 });
  74  |       evidence.validationsPerformed.push("Verify that the heading 'get a new Vi prepaid SIM Card in 3 simple steps' exists in the DOM");
  75  |     });
  76  |     await test.step("Verify that the heading 'carry forward unuseddaily data of weekdays to weekend' exists in the DOM", async () => {
  77  |       await expect(appPage.headingCarryForwardUnuseddailyDataOfWeekdaysToWeekend.first()).toBeAttached({ timeout: 5000 });
  78  |       evidence.validationsPerformed.push("Verify that the heading 'carry forward unuseddaily data of weekdays to weekend' exists in the DOM");
  79  |     });
  80  |     await test.step("Verify that the heading 'the future isexciting. Ready?' exists in the DOM", async () => {
  81  |       await expect(appPage.headingTheFutureIsexcitingReady.first()).toBeAttached({ timeout: 5000 });
  82  |       evidence.validationsPerformed.push("Verify that the heading 'the future isexciting. Ready?' exists in the DOM");
  83  |     });
  84  |     await test.step("Verify that the heading 'carry forward unuseddaily data of weekdays to weekend' exists in the DOM", async () => {
  85  |       await expect(appPage.headingCarryForwardUnuseddailyDataOfWeekdaysToWeekend1.first()).toBeAttached({ timeout: 5000 });
  86  |       evidence.validationsPerformed.push("Verify that the heading 'carry forward unuseddaily data of weekdays to weekend' exists in the DOM");
  87  |     });
  88  | 
  89  |     await test.step("Capture screenshot evidence", async () => {
  90  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim - Heading Verification", "www.myvi.in");
  91  |       evidence.screenshots.push(screenshotPath);
  92  |     });
  93  | 
  94  |     await attachExecutionSummary(evidence, page, testInfo);
  95  |   });
  96  |   test("Verify that 37 Links are present on Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim @regression", async ({ page }, testInfo) => {
  97  |     await label('suite', "Regression Test Suite");
  98  |     await label('url', "https://www.myvi.in/");
  99  |     await label('domain', "www.myvi.in");
  100 |     await feature("Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim");
  101 |     await story("Verify Link elements are present");
  102 |     await severity("minor");
  103 |     await tag("regression");
  104 | 
  105 |     const evidence = createEvidence({
  106 |       application: "www.myvi.in",
  107 |       suite: "Regression Test Suite",
  108 |       browser: testInfo.project.name || 'chromium',
  109 |       pageName: "Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim",
  110 |       pageUrl: "https://www.myvi.in/new-connection/buy-prepaid-sim-connection-online",
  111 |       testObjective: "Verify Link elements are present",
  112 |     });
  113 | 
  114 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  115 |       await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
  116 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  117 |     });
  118 |     await test.step("Verify that the link 'postpaid plans' exists in the DOM", async () => {
  119 |       await expect(appPage.linkPostpaidPlans.first()).toBeAttached({ timeout: 5000 });
  120 |       evidence.validationsPerformed.push("Verify that the link 'postpaid plans' exists in the DOM");
  121 |     });
  122 |     await test.step("Verify that the link 'family plans' exists in the DOM", async () => {
  123 |       await expect(appPage.linkFamilyPlans.first()).toBeAttached({ timeout: 5000 });
  124 |       evidence.validationsPerformed.push("Verify that the link 'family plans' exists in the DOM");
  125 |     });
  126 |     await test.step("Verify that the link 'prepaid packs' exists in the DOM", async () => {
  127 |       await expect(appPage.linkPrepaidPacks.first()).toBeAttached({ timeout: 5000 });
  128 |       evidence.validationsPerformed.push("Verify that the link 'prepaid packs' exists in the DOM");
  129 |     });
  130 |     await test.step("Verify that the link 'view details' exists in the DOM", async () => {
  131 |       await expect(appPage.linkViewDetails.first()).toBeAttached({ timeout: 5000 });
  132 |       evidence.validationsPerformed.push("Verify that the link 'view details' exists in the DOM");
  133 |     });
  134 | 
  135 |     await test.step("Capture screenshot evidence", async () => {
  136 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim - Link Verification", "www.myvi.in");
  137 |       evidence.screenshots.push(screenshotPath);
  138 |     });
  139 | 
  140 |     await attachExecutionSummary(evidence, page, testInfo);
  141 |   });
  142 |   test("Verify that 29 Buttons are present on Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim @regression", async ({ page }, testInfo) => {
  143 |     await label('suite', "Regression Test Suite");
  144 |     await label('url', "https://www.myvi.in/");
  145 |     await label('domain', "www.myvi.in");
  146 |     await feature("Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim");
  147 |     await story("Verify Button elements are present");
  148 |     await severity("minor");
  149 |     await tag("regression");
  150 | 
  151 |     const evidence = createEvidence({
  152 |       application: "www.myvi.in",
  153 |       suite: "Regression Test Suite",
  154 |       browser: testInfo.project.name || 'chromium',
  155 |       pageName: "Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim",
  156 |       pageUrl: "https://www.myvi.in/new-connection/buy-prepaid-sim-connection-online",
  157 |       testObjective: "Verify Button elements are present",
  158 |     });
  159 | 
  160 |     await test.step("Verify that the button 'select your VIP number now' exists in the DOM", async () => {
  161 |       await expect(appPage.buttonSelectYourVipNumberNow.first()).toBeAttached({ timeout: 5000 });
  162 |       evidence.validationsPerformed.push("Verify that the button 'select your VIP number now' exists in the DOM");
  163 |     });
  164 |     await test.step("Verify that the button 'show all plans' exists in the DOM", async () => {
  165 |       await expect(appPage.buttonShowAllPlans.first()).toBeAttached({ timeout: 5000 });
  166 |       evidence.validationsPerformed.push("Verify that the button 'show all plans' exists in the DOM");
  167 |     });
  168 |     await test.step("Verify that the button '×' exists in the DOM", async () => {
  169 |       await expect(appPage.button.first()).toBeAttached({ timeout: 5000 });
```