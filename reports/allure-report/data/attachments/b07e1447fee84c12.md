# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\BuyANewVi4gSimCardOnlineAndGetAFreeDelivery.spec.ts >> https://www.myvi.in/ - Buy a New Vi 4g SIM Card Online and Get a Free Delivery - Regression Tests >> Verify that 66 Inputs are present on Buy a New Vi 4g SIM Card Online and Get a Free Delivery @regression
- Location: tests\generated\www-myvi-in\BuyANewVi4gSimCardOnlineAndGetAFreeDelivery.spec.ts:188:3

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: locator('input[name="sAltNo"]').first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for locator('input[name="sAltNo"]').first()

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
  119 |       await expect(appPage.linkStoreNearYou.first()).toBeAttached({ timeout: 5000 });
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
> 207 |       await expect(appPage.inputEnterYourAlternateNumber.first()).toBeAttached({ timeout: 5000 });
      |                                                                   ^ Error: expect(locator).toBeAttached() failed
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
  220 |       evidence.validationsPerformed.push("Verify that the input 'Enter a location' exists in the DOM");
  221 |     });
  222 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  223 |       await expect(appPage.inputFlatHouseNo.first()).toBeAttached({ timeout: 5000 });
  224 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  225 |     });
  226 | 
  227 |     await test.step("Capture screenshot evidence", async () => {
  228 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Buy a New Vi 4g SIM Card Online and Get a Free Delivery - Input Verification", "www.myvi.in");
  229 |       evidence.screenshots.push(screenshotPath);
  230 |     });
  231 | 
  232 |     await attachExecutionSummary(evidence, page, testInfo);
  233 |   });
  234 |   test("Verify that 1 Form is present on Buy a New Vi 4g SIM Card Online and Get a Free Delivery @regression", async ({ page }, testInfo) => {
  235 |     await label('suite', "Regression Test Suite");
  236 |     await label('url', "https://www.myvi.in/");
  237 |     await label('domain', "www.myvi.in");
  238 |     await feature("Buy a New Vi 4g SIM Card Online and Get a Free Delivery");
  239 |     await story("Verify Form elements are present");
  240 |     await severity("minor");
  241 |     await tag("regression");
  242 | 
  243 |     const evidence = createEvidence({
  244 |       application: "www.myvi.in",
  245 |       suite: "Regression Test Suite",
  246 |       browser: testInfo.project.name || 'chromium',
  247 |       pageName: "Buy a New Vi 4g SIM Card Online and Get a Free Delivery",
  248 |       pageUrl: "https://www.myvi.in/new-connection/buy-new-4g-sim-card-online",
  249 |       testObjective: "Verify Form elements are present",
  250 |     });
  251 | 
  252 |     await test.step("Verify that the form 'Form' exists in the DOM", async () => {
  253 |       await expect(appPage.form0.first()).toBeAttached({ timeout: 5000 });
  254 |       evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
  255 |     });
  256 | 
  257 |     await test.step("Capture screenshot evidence", async () => {
  258 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Buy a New Vi 4g SIM Card Online and Get a Free Delivery - Form Verification", "www.myvi.in");
  259 |       evidence.screenshots.push(screenshotPath);
  260 |     });
  261 | 
  262 |     await attachExecutionSummary(evidence, page, testInfo);
  263 |   });
  264 |   test("Verify that 2 Menus are present on Buy a New Vi 4g SIM Card Online and Get a Free Delivery @regression", async ({ page }, testInfo) => {
  265 |     await label('suite', "Regression Test Suite");
  266 |     await label('url', "https://www.myvi.in/");
  267 |     await label('domain', "www.myvi.in");
  268 |     await feature("Buy a New Vi 4g SIM Card Online and Get a Free Delivery");
  269 |     await story("Verify Menu elements are present");
  270 |     await severity("minor");
  271 |     await tag("regression");
  272 | 
  273 |     const evidence = createEvidence({
  274 |       application: "www.myvi.in",
  275 |       suite: "Regression Test Suite",
  276 |       browser: testInfo.project.name || 'chromium',
  277 |       pageName: "Buy a New Vi 4g SIM Card Online and Get a Free Delivery",
  278 |       pageUrl: "https://www.myvi.in/new-connection/buy-new-4g-sim-card-online",
  279 |       testObjective: "Verify Menu elements are present",
  280 |     });
  281 | 
  282 |     await test.step("Verify that the menu 'Navigation menu' exists in the DOM", async () => {
  283 |       await expect(appPage.menu0.first()).toBeAttached({ timeout: 5000 });
  284 |       evidence.validationsPerformed.push("Verify that the menu 'Navigation menu' exists in the DOM");
  285 |     });
  286 |     await test.step("Verify that the menu 'Home New Connection Buy New 4G SIM Online' exists in the DOM", async () => {
  287 |       await expect(appPage.menuHomeNewConnectionBuyNew4gSimOnline.first()).toBeAttached({ timeout: 5000 });
  288 |       evidence.validationsPerformed.push("Verify that the menu 'Home New Connection Buy New 4G SIM Online' exists in the DOM");
  289 |     });
  290 | 
  291 |     await test.step("Capture screenshot evidence", async () => {
  292 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Buy a New Vi 4g SIM Card Online and Get a Free Delivery - Menu Verification", "www.myvi.in");
  293 |       evidence.screenshots.push(screenshotPath);
  294 |     });
  295 | 
  296 |     await attachExecutionSummary(evidence, page, testInfo);
  297 |   });
  298 | });
  299 | 
```