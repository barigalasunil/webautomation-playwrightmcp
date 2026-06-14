# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\BuyANewVi4gSimCardOnlineAndGetAFreeDelivery.spec.ts >> https://www.myvi.in/ - Buy a New Vi 4g SIM Card Online and Get a Free Delivery - Regression Tests >> Verify that 26 Links are present on Buy a New Vi 4g SIM Card Online and Get a Free Delivery @regression
- Location: tests\generated\www-myvi-in\BuyANewVi4gSimCardOnlineAndGetAFreeDelivery.spec.ts:96:3

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: getByRole('link', { name: 'store near you' }).first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for getByRole('link', { name: 'store near you' }).first()

```

```yaml
- navigation:
  - link "Vi":
    - /url: https://www.myvi.in
    - img "Vi"
- heading "Buy New SIM Card Online" [level=1]
- paragraph
- paragraph: see all plans
- paragraph: postpaid
- paragraph: ₹451
- paragraph: per month
- paragraph: 50GB + Unlimited Night Data 12 AM to 6 AM, upto 200GB roll over
- paragraph: Data
- img "Vi Movies & TV"
- img "JioHotstar"
- img "Sony LIV"
- paragraph: details
- img "Free SIM Delivery"
- paragraph: Free SIM Delivery
- heading "basic details" [level=5]
- textbox "enter your alternate number"
- text: enter your alternate number
- paragraph: This gives consent to Vil partners to contact you
- textbox "enter your full name"
- text: enter your full name
- heading "delivery details" [level=5]
- textbox "enter pincode"
- text: enter pincode
- paragraph: We need to check serviceability in your area
- textbox "enter street/building name":
  - /placeholder: Enter a location
- text: enter street/building name
- img "img"
- paragraph: or detect my current location
- textbox "flat/house no"
- text: flat/house no
- button "get OTP to complete order" [disabled]
- heading "FAQ for Order a New SIM Card Online" [level=2]
- button "Can we order sim card online?":
  - heading "Can we order sim card online?" [level=3]
- paragraph
- paragraph: Yes, with Vi it is now convenient to buy an online SIM card. Just visit the buy SIM card online page on the Vi website, select a plan and complete your order to get a new SIM card online. After you order a SIM card online, you can even track your free SIM home delivery status.
- separator
- button "What is the new sim card price?":
  - heading "What is the new sim card price?" [level=3]
- paragraph
- paragraph: The new SIM card price is zero. When you buy SIM online, the phone SIM card is provided absolutely free of cost.
- separator
- button "What are the different new sim card offers with Vi?":
  - heading "What are the different new sim card offers with Vi?" [level=3]
- paragraph:
  - text: Depending on the opted Vi Max plan, you can avail different offers such as unlimited night data, weekend data rollover, power of choice to choose preferred OTT platforms/lifestyle benefits, and much more. Select a pack from the range of Vi prepaid or Vi Max
  - link "postpaid plans":
    - /url: https://www.myvi.in/postpaid/vi-postpaid-plans
  - text: and buy SIM online today to enjoy all the benefits.
- separator
- button "What are the documents required to apply for a new mobile sim card online?":
  - heading "What are the documents required to apply for a new mobile sim card online?" [level=3]
- paragraph
- paragraph: The documents required to buy an online sim card are Proof of Address (POA) and Proof of Identity (POI). The documents valid are an original copy of Aadhar card, Passport, Voter ID or Driving License.
- separator
- button "What are the different sim card plans available in Vi?":
  - heading "What are the different sim card plans available in Vi?" [level=3]
- paragraph:
  - text: Vi offers a wide variety of SIM card plans. Choose from
  - link "prepaid recharge packs":
    - /url: https://www.myvi.in/prepaid/best-prepaid-plans
  - text: like
  - link "unlimited plans":
    - /url: https://www.myvi.in/prepaid/unlimited-calls-and-data-plans
  - text: ", talktime plans, data plans or opt for individual or Vi Max"
  - link "family postpaid plans":
    - /url: https://www.myvi.in/postpaid/family-postpaid-plans
  - text: . Enjoy the exclusive flexibility to choose your benefits basis your preferences with Vi Max plans. Visit the buy SIM card online page to learn more and order a phone sim card online.
- separator
- button "How can I buy a new Vodafone or Idea SIM card online?":
  - heading "How can I buy a new Vodafone or Idea SIM card online?" [level=3]
- paragraph
- paragraph:
  - text: Vodafone and Idea are now Vi. Subscribers looking to purchase a Vodafone or Idea online SIM card can visit the Vi
  - link "Buy SIM online":
    - /url: https://www.myvi.in/new-connection/buy-new-4g-sim-card-online
  - text: page and order a new SIM card.
- separator
- navigation "breadcrumb":
  - list:
    - listitem:
      - link "Home":
        - /url: https://www.myvi.in/
    - listitem:
      - link "New Connection":
        - /url: /new-connection/buy-postpaid-sim-connection-online
    - listitem:
      - link "Buy New 4G SIM Online":
        - /url: /new-connection/buy-new-4g-sim-card-online
- contentinfo:
  - heading "Order a New SIM Card Online" [level=2]:
    - button "Order a New SIM Card Online"
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
  19  |     await feature("Buy a New Vi 4g SIM Card Online and Get a Free Delivery");
  20  |     await story("Verify page loads for regression");
  21  |     await severity("minor");
  22  |     await tag("regression");
  23  | 
  24  |     const evidence = createEvidence({
  25  |       application: "www.myvi.in",
  26  |       suite: "Regression Test Suite",
  27  |       browser: testInfo.project.name || 'chromium',
  28  |       pageName: "Buy a New Vi 4g SIM Card Online and Get a Free Delivery",
  29  |       pageUrl: "https://www.myvi.in/new-connection/buy-new-4g-sim-card-online",
  30  |       testObjective: "Verify page loads for regression",
  31  |     });
  32  | 
  33  |     await test.step("Open URL: https://www.myvi.in/", async () => {
  34  |       await appPage.open();
  35  |       evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
  36  |     });
  37  | 
  38  |     await test.step("Verify the URL is correct", async () => {
  39  |       await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/new\-connection\/buy\-new\-4g\-sim\-card\-online/);
  40  |       evidence.validationsPerformed.push("Verified URL is correct");
  41  |     });
  42  | 
  43  |     await test.step("Capture screenshot evidence", async () => {
  44  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Buy a New Vi 4g SIM Card Online and Get a Free Delivery - Final Evidence", "www.myvi.in");
  45  |       evidence.screenshots.push(screenshotPath);
  46  |     });
  47  | 
  48  |     await attachExecutionSummary(evidence, page, testInfo);
  49  |   });
  50  |   test("Verify that 16 Headings are present on Buy a New Vi 4g SIM Card Online and Get a Free Delivery @regression", async ({ page }, testInfo) => {
  51  |     await label('suite', "Regression Test Suite");
  52  |     await label('url', "https://www.myvi.in/");
  53  |     await label('domain', "www.myvi.in");
  54  |     await feature("Buy a New Vi 4g SIM Card Online and Get a Free Delivery");
  55  |     await story("Verify Heading elements are present");
  56  |     await severity("minor");
  57  |     await tag("regression");
  58  | 
  59  |     const evidence = createEvidence({
  60  |       application: "www.myvi.in",
  61  |       suite: "Regression Test Suite",
  62  |       browser: testInfo.project.name || 'chromium',
  63  |       pageName: "Buy a New Vi 4g SIM Card Online and Get a Free Delivery",
  64  |       pageUrl: "https://www.myvi.in/new-connection/buy-new-4g-sim-card-online",
  65  |       testObjective: "Verify Heading elements are present",
  66  |     });
  67  | 
  68  |     await test.step("Verify that the heading 'Buy New SIM Card Online' exists in the DOM", async () => {
  69  |       await expect(appPage.headingBuyNewSimCardOnline.first()).toBeAttached({ timeout: 5000 });
  70  |       evidence.validationsPerformed.push("Verify that the heading 'Buy New SIM Card Online' exists in the DOM");
  71  |     });
  72  |     await test.step("Verify that the heading 'basic details' exists in the DOM", async () => {
  73  |       await expect(appPage.headingBasicDetails.first()).toBeAttached({ timeout: 5000 });
  74  |       evidence.validationsPerformed.push("Verify that the heading 'basic details' exists in the DOM");
  75  |     });
  76  |     await test.step("Verify that the heading 'delivery details' exists in the DOM", async () => {
  77  |       await expect(appPage.headingDeliveryDetails.first()).toBeAttached({ timeout: 5000 });
  78  |       evidence.validationsPerformed.push("Verify that the heading 'delivery details' exists in the DOM");
  79  |     });
  80  |     await test.step("Verify that the heading 'individual plan' exists in the DOM", async () => {
  81  |       await expect(appPage.headingIndividualPlan.first()).toBeAttached({ timeout: 5000 });
  82  |       evidence.validationsPerformed.push("Verify that the heading 'individual plan' exists in the DOM");
  83  |     });
  84  |     await test.step("Verify that the heading 'attention' exists in the DOM", async () => {
  85  |       await expect(appPage.headingAttention.first()).toBeAttached({ timeout: 5000 });
  86  |       evidence.validationsPerformed.push("Verify that the heading 'attention' exists in the DOM");
  87  |     });
  88  | 
  89  |     await test.step("Capture screenshot evidence", async () => {
  90  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Buy a New Vi 4g SIM Card Online and Get a Free Delivery - Heading Verification", "www.myvi.in");
  91  |       evidence.screenshots.push(screenshotPath);
  92  |     });
  93  | 
  94  |     await attachExecutionSummary(evidence, page, testInfo);
  95  |   });
  96  |   test("Verify that 26 Links are present on Buy a New Vi 4g SIM Card Online and Get a Free Delivery @regression", async ({ page }, testInfo) => {
  97  |     await label('suite', "Regression Test Suite");
  98  |     await label('url', "https://www.myvi.in/");
  99  |     await label('domain', "www.myvi.in");
  100 |     await feature("Buy a New Vi 4g SIM Card Online and Get a Free Delivery");
  101 |     await story("Verify Link elements are present");
  102 |     await severity("minor");
  103 |     await tag("regression");
  104 | 
  105 |     const evidence = createEvidence({
  106 |       application: "www.myvi.in",
  107 |       suite: "Regression Test Suite",
  108 |       browser: testInfo.project.name || 'chromium',
  109 |       pageName: "Buy a New Vi 4g SIM Card Online and Get a Free Delivery",
  110 |       pageUrl: "https://www.myvi.in/new-connection/buy-new-4g-sim-card-online",
  111 |       testObjective: "Verify Link elements are present",
  112 |     });
  113 | 
  114 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  115 |       await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
  116 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  117 |     });
  118 |     await test.step("Verify that the link 'store near you' exists in the DOM", async () => {
> 119 |       await expect(appPage.linkStoreNearYou.first()).toBeAttached({ timeout: 5000 });
      |                                                      ^ Error: expect(locator).toBeAttached() failed
  120 |       evidence.validationsPerformed.push("Verify that the link 'store near you' exists in the DOM");
  121 |     });
  122 |     await test.step("Verify that the link 'stores near you' exists in the DOM", async () => {
  123 |       await expect(appPage.linkStoresNearYou.first()).toBeAttached({ timeout: 5000 });
  124 |       evidence.validationsPerformed.push("Verify that the link 'stores near you' exists in the DOM");
  125 |     });
  126 |     await test.step("Verify that the link 'track order' exists in the DOM", async () => {
  127 |       await expect(appPage.linkTrackOrder.first()).toBeAttached({ timeout: 5000 });
  128 |       evidence.validationsPerformed.push("Verify that the link 'track order' exists in the DOM");
  129 |     });
  130 |     await test.step("Verify that the link 'postpaid plans' exists in the DOM", async () => {
  131 |       await expect(appPage.linkPostpaidPlans.first()).toBeAttached({ timeout: 5000 });
  132 |       evidence.validationsPerformed.push("Verify that the link 'postpaid plans' exists in the DOM");
  133 |     });
  134 | 
  135 |     await test.step("Capture screenshot evidence", async () => {
  136 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Buy a New Vi 4g SIM Card Online and Get a Free Delivery - Link Verification", "www.myvi.in");
  137 |       evidence.screenshots.push(screenshotPath);
  138 |     });
  139 | 
  140 |     await attachExecutionSummary(evidence, page, testInfo);
  141 |   });
  142 |   test("Verify that 28 Buttons are present on Buy a New Vi 4g SIM Card Online and Get a Free Delivery @regression", async ({ page }, testInfo) => {
  143 |     await label('suite', "Regression Test Suite");
  144 |     await label('url', "https://www.myvi.in/");
  145 |     await label('domain', "www.myvi.in");
  146 |     await feature("Buy a New Vi 4g SIM Card Online and Get a Free Delivery");
  147 |     await story("Verify Button elements are present");
  148 |     await severity("minor");
  149 |     await tag("regression");
  150 | 
  151 |     const evidence = createEvidence({
  152 |       application: "www.myvi.in",
  153 |       suite: "Regression Test Suite",
  154 |       browser: testInfo.project.name || 'chromium',
  155 |       pageName: "Buy a New Vi 4g SIM Card Online and Get a Free Delivery",
  156 |       pageUrl: "https://www.myvi.in/new-connection/buy-new-4g-sim-card-online",
  157 |       testObjective: "Verify Button elements are present",
  158 |     });
  159 | 
  160 |     await test.step("Verify that the button 'get OTP to complete order' exists in the DOM", async () => {
  161 |       await expect(appPage.buttonGetOtpToCompleteOrder.first()).toBeAttached({ timeout: 5000 });
  162 |       evidence.validationsPerformed.push("Verify that the button 'get OTP to complete order' exists in the DOM");
  163 |     });
  164 |     await test.step("Verify that the button 'Previous' exists in the DOM", async () => {
  165 |       await expect(appPage.buttonPrevious.first()).toBeAttached({ timeout: 5000 });
  166 |       evidence.validationsPerformed.push("Verify that the button 'Previous' exists in the DOM");
  167 |     });
  168 |     await test.step("Verify that the button 'Proceed with ₹551 plan' exists in the DOM", async () => {
  169 |       await expect(appPage.buttonProceedWith551Plan.first()).toBeAttached({ timeout: 5000 });
  170 |       evidence.validationsPerformed.push("Verify that the button 'Proceed with ₹551 plan' exists in the DOM");
  171 |     });
  172 |     await test.step("Verify that the button 'Proceed with ₹451 plan' exists in the DOM", async () => {
  173 |       await expect(appPage.buttonProceedWith451Plan.first()).toBeAttached({ timeout: 5000 });
  174 |       evidence.validationsPerformed.push("Verify that the button 'Proceed with ₹451 plan' exists in the DOM");
  175 |     });
  176 |     await test.step("Verify that the button 'Proceed with ₹1201 plan' exists in the DOM", async () => {
  177 |       await expect(appPage.buttonProceedWith1201Plan.first()).toBeAttached({ timeout: 5000 });
  178 |       evidence.validationsPerformed.push("Verify that the button 'Proceed with ₹1201 plan' exists in the DOM");
  179 |     });
  180 | 
  181 |     await test.step("Capture screenshot evidence", async () => {
  182 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Buy a New Vi 4g SIM Card Online and Get a Free Delivery - Button Verification", "www.myvi.in");
  183 |       evidence.screenshots.push(screenshotPath);
  184 |     });
  185 | 
  186 |     await attachExecutionSummary(evidence, page, testInfo);
  187 |   });
  188 |   test("Verify that 66 Inputs are present on Buy a New Vi 4g SIM Card Online and Get a Free Delivery @regression", async ({ page }, testInfo) => {
  189 |     await label('suite', "Regression Test Suite");
  190 |     await label('url', "https://www.myvi.in/");
  191 |     await label('domain', "www.myvi.in");
  192 |     await feature("Buy a New Vi 4g SIM Card Online and Get a Free Delivery");
  193 |     await story("Verify Input elements are present");
  194 |     await severity("minor");
  195 |     await tag("regression");
  196 | 
  197 |     const evidence = createEvidence({
  198 |       application: "www.myvi.in",
  199 |       suite: "Regression Test Suite",
  200 |       browser: testInfo.project.name || 'chromium',
  201 |       pageName: "Buy a New Vi 4g SIM Card Online and Get a Free Delivery",
  202 |       pageUrl: "https://www.myvi.in/new-connection/buy-new-4g-sim-card-online",
  203 |       testObjective: "Verify Input elements are present",
  204 |     });
  205 | 
  206 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  207 |       await expect(appPage.inputEnterYourAlternateNumber.first()).toBeAttached({ timeout: 5000 });
  208 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  209 |     });
  210 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  211 |       await expect(appPage.inputEnterYourFullName.first()).toBeAttached({ timeout: 5000 });
  212 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  213 |     });
  214 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  215 |       await expect(appPage.inputEnterPincode.first()).toBeAttached({ timeout: 5000 });
  216 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  217 |     });
  218 |     await test.step("Verify that the input 'Enter a location' exists in the DOM", async () => {
  219 |       await expect(appPage.inputEnterStreetBuildingName.first()).toBeAttached({ timeout: 5000 });
```