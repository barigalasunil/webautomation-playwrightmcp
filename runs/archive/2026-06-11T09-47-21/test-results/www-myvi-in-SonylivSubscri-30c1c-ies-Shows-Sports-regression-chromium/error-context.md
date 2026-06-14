# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\SonylivSubscriptionPlansWithViWatchMoviesShowsSports.spec.ts >> https://www.myvi.in/ - SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports - Regression Tests >> Verify that 2 Links are present on SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports @regression
- Location: tests\generated\www-myvi-in\SonylivSubscriptionPlansWithViWatchMoviesShowsSports.spec.ts:92:3

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: locator('a[href="https://www.myvi.in/"]').first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for locator('a[href="https://www.myvi.in/"]').first()

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
  11  |     appPage = new SonylivSubscriptionPlansWithViWatchMoviesShowsSports(page);
  12  |     await appPage.open();
  13  |   });
  14  | 
  15  |   test("Verify that SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports loads successfully @regression", async ({ page }, testInfo) => {
  16  |     await label('suite', "Regression Test Suite");
  17  |     await label('url', "https://www.myvi.in/");
  18  |     await label('domain', "www.myvi.in");
  19  |     await feature("SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports");
  20  |     await story("Verify page loads for regression");
  21  |     await severity("minor");
  22  |     await tag("regression");
  23  | 
  24  |     const evidence = createEvidence({
  25  |       application: "www.myvi.in",
  26  |       suite: "Regression Test Suite",
  27  |       browser: testInfo.project.name || 'chromium',
  28  |       pageName: "SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports",
  29  |       pageUrl: "https://www.myvi.in/prepaid/sonyliv-subscription-recharge-plans",
  30  |       testObjective: "Verify page loads for regression",
  31  |     });
  32  | 
  33  |     await test.step("Open URL: https://www.myvi.in/", async () => {
  34  |       await appPage.open();
  35  |       evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
  36  |     });
  37  | 
  38  |     await test.step("Verify the URL is correct", async () => {
  39  |       await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/prepaid\/sonyliv\-subscription\-recharge\-plans/);
  40  |       evidence.validationsPerformed.push("Verified URL is correct");
  41  |     });
  42  | 
  43  |     await test.step("Capture screenshot evidence", async () => {
  44  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports - Final Evidence", "www.myvi.in");
  45  |       evidence.screenshots.push(screenshotPath);
  46  |     });
  47  | 
  48  |     await attachExecutionSummary(evidence, page, testInfo);
  49  |   });
  50  |   test("Verify that 4 Headings are present on SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports @regression", async ({ page }, testInfo) => {
  51  |     await label('suite', "Regression Test Suite");
  52  |     await label('url', "https://www.myvi.in/");
  53  |     await label('domain', "www.myvi.in");
  54  |     await feature("SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports");
  55  |     await story("Verify Heading elements are present");
  56  |     await severity("minor");
  57  |     await tag("regression");
  58  | 
  59  |     const evidence = createEvidence({
  60  |       application: "www.myvi.in",
  61  |       suite: "Regression Test Suite",
  62  |       browser: testInfo.project.name || 'chromium',
  63  |       pageName: "SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports",
  64  |       pageUrl: "https://www.myvi.in/prepaid/sonyliv-subscription-recharge-plans",
  65  |       testObjective: "Verify Heading elements are present",
  66  |     });
  67  | 
  68  |     await test.step("Verify that the heading 'stream in 10+ Languages and get exciting data benefits starting at just ₹408 wit' exists in the DOM", async () => {
  69  |       await expect(appPage.headingStreamIn10LanguagesAndGetExcitingDataBenefitsStarti.first()).toBeAttached({ timeout: 5000 });
  70  |       evidence.validationsPerformed.push("Verify that the heading 'stream in 10+ Languages and get exciting data benefits starting at just ₹408 wit' exists in the DOM");
  71  |     });
  72  |     await test.step("Verify that the heading 'it’s very simple to get started' exists in the DOM", async () => {
  73  |       await expect(appPage.headingItSVerySimpleToGetStarted.first()).toBeAttached({ timeout: 5000 });
  74  |       evidence.validationsPerformed.push("Verify that the heading 'it’s very simple to get started' exists in the DOM");
  75  |     });
  76  |     await test.step("Verify that the heading 'watch exclusive SonyLiv specials' exists in the DOM", async () => {
  77  |       await expect(appPage.headingWatchExclusiveSonylivSpecials.first()).toBeAttached({ timeout: 5000 });
  78  |       evidence.validationsPerformed.push("Verify that the heading 'watch exclusive SonyLiv specials' exists in the DOM");
  79  |     });
  80  |     await test.step("Verify that the heading 'Frequently Asked Questions (FAQs)' exists in the DOM", async () => {
  81  |       await expect(appPage.headingFrequentlyAskedQuestionsFaqs.first()).toBeAttached({ timeout: 5000 });
  82  |       evidence.validationsPerformed.push("Verify that the heading 'Frequently Asked Questions (FAQs)' exists in the DOM");
  83  |     });
  84  | 
  85  |     await test.step("Capture screenshot evidence", async () => {
  86  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports - Heading Verification", "www.myvi.in");
  87  |       evidence.screenshots.push(screenshotPath);
  88  |     });
  89  | 
  90  |     await attachExecutionSummary(evidence, page, testInfo);
  91  |   });
  92  |   test("Verify that 2 Links are present on SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports @regression", async ({ page }, testInfo) => {
  93  |     await label('suite', "Regression Test Suite");
  94  |     await label('url', "https://www.myvi.in/");
  95  |     await label('domain', "www.myvi.in");
  96  |     await feature("SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports");
  97  |     await story("Verify Link elements are present");
  98  |     await severity("minor");
  99  |     await tag("regression");
  100 | 
  101 |     const evidence = createEvidence({
  102 |       application: "www.myvi.in",
  103 |       suite: "Regression Test Suite",
  104 |       browser: testInfo.project.name || 'chromium',
  105 |       pageName: "SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports",
  106 |       pageUrl: "https://www.myvi.in/prepaid/sonyliv-subscription-recharge-plans",
  107 |       testObjective: "Verify Link elements are present",
  108 |     });
  109 | 
  110 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
> 111 |       await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      |                                           ^ Error: expect(locator).toBeAttached() failed
  112 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  113 |     });
  114 |     await test.step("Verify that the link 'Vi app' exists in the DOM", async () => {
  115 |       await expect(appPage.linkViApp.first()).toBeAttached({ timeout: 5000 });
  116 |       evidence.validationsPerformed.push("Verify that the link 'Vi app' exists in the DOM");
  117 |     });
  118 |     await test.step("Verify that the link 'recharge now' exists in the DOM", async () => {
  119 |       await expect(appPage.linkRechargeNow.first()).toBeAttached({ timeout: 5000 });
  120 |       evidence.validationsPerformed.push("Verify that the link 'recharge now' exists in the DOM");
  121 |     });
  122 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  123 |       await expect(appPage.link3.first()).toBeAttached({ timeout: 5000 });
  124 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  125 |     });
  126 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  127 |       await expect(appPage.link4.first()).toBeAttached({ timeout: 5000 });
  128 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  129 |     });
  130 | 
  131 |     await test.step("Capture screenshot evidence", async () => {
  132 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports - Link Verification", "www.myvi.in");
  133 |       evidence.screenshots.push(screenshotPath);
  134 |     });
  135 | 
  136 |     await attachExecutionSummary(evidence, page, testInfo);
  137 |   });
  138 |   test("Verify that 4 Buttons are present on SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports @regression", async ({ page }, testInfo) => {
  139 |     await label('suite', "Regression Test Suite");
  140 |     await label('url', "https://www.myvi.in/");
  141 |     await label('domain', "www.myvi.in");
  142 |     await feature("SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports");
  143 |     await story("Verify Button elements are present");
  144 |     await severity("minor");
  145 |     await tag("regression");
  146 | 
  147 |     const evidence = createEvidence({
  148 |       application: "www.myvi.in",
  149 |       suite: "Regression Test Suite",
  150 |       browser: testInfo.project.name || 'chromium',
  151 |       pageName: "SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports",
  152 |       pageUrl: "https://www.myvi.in/prepaid/sonyliv-subscription-recharge-plans",
  153 |       testObjective: "Verify Button elements are present",
  154 |     });
  155 | 
  156 |     await test.step("Verify that the button 'Maharashtra & Goa' exists in the DOM", async () => {
  157 |       await expect(appPage.buttonMaharashtraGoa.first()).toBeAttached({ timeout: 5000 });
  158 |       evidence.validationsPerformed.push("Verify that the button 'Maharashtra & Goa' exists in the DOM");
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
```