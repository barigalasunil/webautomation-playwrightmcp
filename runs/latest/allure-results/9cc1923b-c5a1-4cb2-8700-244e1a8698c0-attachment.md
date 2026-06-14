# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\PortSimNumberToViEnjoyViBenefitsWithEasyMnpProcess.spec.ts >> https://www.myvi.in/ - Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process - Regression Tests >> Verify that 138 Inputs are present on Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process @regression
- Location: tests\generated\www-myvi-in\PortSimNumberToViEnjoyViBenefitsWithEasyMnpProcess.spec.ts:188:3

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: locator('input[name="faq-drawer"]').first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for locator('input[name="faq-drawer"]').first()

```

```yaml
- img "banner-image"
- heading [level=1]
- heading "enter basic details to port mobile number online" [level=2]:
  - button "enter basic details to port mobile number online" [expanded]
- radio "Postpaid" [checked]
- text: Postpaid
- radio "Prepaid"
- text: Prepaid
- textbox "enter pincode"
- text: enter pincode
- textbox "enter your full name enter your full name"
- text: enter your full name
- textbox "enter number you wish to port"
- text: enter number you wish to port
- heading "enter address to place order" [level=2]:
  - button "enter address to place order" [expanded]
- button "get OTP to complete order" [disabled]
- heading "FAQs on Mobile Number Portability (MNP)" [level=2]
- heading "Who can avail MNP service?" [level=3]:
  - button "Who can avail MNP service?" [expanded]
- separator
- heading "How to port SIM online to Vi?" [level=3]:
  - button "How to port SIM online to Vi?" [expanded]
- separator
- heading "What are the offers available if I wish to port to Vi Postpaid?" [level=3]:
  - button "What are the offers available if I wish to port to Vi Postpaid?" [expanded]
- separator
- heading "Can I port to Vi Prepaid?" [level=3]:
  - button "Can I port to Vi Prepaid?" [expanded]
- separator
- heading "How do I get the unique porting code online while switching to Vi?" [level=3]:
  - button "How do I get the unique porting code online while switching to Vi?" [expanded]
- separator
- heading "If I port my number to Vi, will I get an Amazon Prime Membership?" [level=3]:
  - button "If I port my number to Vi, will I get an Amazon Prime Membership?" [expanded]
- separator
- heading "How to port mobile number to a new network without changing my mobile number?" [level=3]:
  - button "How to port mobile number to a new network without changing my mobile number?" [expanded]
- separator
- heading "What are the documents required for Mobile Number Portability?" [level=3]:
  - button "What are the documents required for Mobile Number Portability?" [expanded]
- separator
- heading "How much time will it take for my number to get ported?" [level=3]:
  - button "How much time will it take for my number to get ported?" [expanded]
- separator
- heading "Will there be any charges to port my mobile number to Vi?" [level=3]:
  - button "Will there be any charges to port my mobile number to Vi?" [expanded]
- separator
- heading "Is there a discount offer available for new Postpaid connection?" [level=3]:
  - button "Is there a discount offer available for new Postpaid connection?" [expanded]
- navigation "breadcrumb":
  - list:
    - listitem:
      - link "home":
        - /url: https://www.myvi.in/
    - listitem:
      - link "new connection":
        - /url: https://www.myvi.in/new-connection/buy-postpaid-sim-connection-online
    - listitem:
      - link "mobile number portability (MNP)":
        - /url: https://www.myvi.in/new-connection/mobile-number-portability-mnp-online
- heading "Port Mobile Number to Vi" [level=2]:
  - button "Port Mobile Number to Vi"
- separator
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
  109 |       pageName: "Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process",
  110 |       pageUrl: "https://www.myvi.in/new-connection/mobile-number-portability-mnp-online",
  111 |       testObjective: "Verify Link elements are present",
  112 |     });
  113 | 
  114 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  115 |       await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
  116 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  117 |     });
  118 |     await test.step("Verify that the link 'view details' exists in the DOM", async () => {
  119 |       await expect(appPage.linkViewDetails.first()).toBeAttached({ timeout: 5000 });
  120 |       evidence.validationsPerformed.push("Verify that the link 'view details' exists in the DOM");
  121 |     });
  122 |     await test.step("Verify that the link 'terms & conditions' exists in the DOM", async () => {
  123 |       await expect(appPage.linkTermsConditions.first()).toBeAttached({ timeout: 5000 });
  124 |       evidence.validationsPerformed.push("Verify that the link 'terms & conditions' exists in the DOM");
  125 |     });
  126 |     await test.step("Verify that the link 'a store near you' exists in the DOM", async () => {
  127 |       await expect(appPage.linkAStoreNearYou.first()).toBeAttached({ timeout: 5000 });
  128 |       evidence.validationsPerformed.push("Verify that the link 'a store near you' exists in the DOM");
  129 |     });
  130 |     await test.step("Verify that the link 'stores near you' exists in the DOM", async () => {
  131 |       await expect(appPage.linkStoresNearYou.first()).toBeAttached({ timeout: 5000 });
  132 |       evidence.validationsPerformed.push("Verify that the link 'stores near you' exists in the DOM");
  133 |     });
  134 | 
  135 |     await test.step("Capture screenshot evidence", async () => {
  136 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process - Link Verification", "www.myvi.in");
  137 |       evidence.screenshots.push(screenshotPath);
  138 |     });
  139 | 
  140 |     await attachExecutionSummary(evidence, page, testInfo);
  141 |   });
  142 |   test("Verify that 46 Buttons are present on Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process @regression", async ({ page }, testInfo) => {
  143 |     await label('suite', "Regression Test Suite");
  144 |     await label('url', "https://www.myvi.in/");
  145 |     await label('domain', "www.myvi.in");
  146 |     await feature("Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process");
  147 |     await story("Verify Button elements are present");
  148 |     await severity("minor");
  149 |     await tag("regression");
  150 | 
  151 |     const evidence = createEvidence({
  152 |       application: "www.myvi.in",
  153 |       suite: "Regression Test Suite",
  154 |       browser: testInfo.project.name || 'chromium',
  155 |       pageName: "Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process",
  156 |       pageUrl: "https://www.myvi.in/new-connection/mobile-number-portability-mnp-online",
  157 |       testObjective: "Verify Button elements are present",
  158 |     });
  159 | 
  160 |     await test.step("Verify that the button 'Previous' exists in the DOM", async () => {
  161 |       await expect(appPage.buttonPrevious.first()).toBeAttached({ timeout: 5000 });
  162 |       evidence.validationsPerformed.push("Verify that the button 'Previous' exists in the DOM");
  163 |     });
  164 |     await test.step("Verify that the button 'proceed with 551 plan' exists in the DOM", async () => {
  165 |       await expect(appPage.buttonProceedWith551Plan.first()).toBeAttached({ timeout: 5000 });
  166 |       evidence.validationsPerformed.push("Verify that the button 'proceed with 551 plan' exists in the DOM");
  167 |     });
  168 |     await test.step("Verify that the button 'proceed with 451 plan' exists in the DOM", async () => {
  169 |       await expect(appPage.buttonProceedWith451Plan.first()).toBeAttached({ timeout: 5000 });
  170 |       evidence.validationsPerformed.push("Verify that the button 'proceed with 451 plan' exists in the DOM");
  171 |     });
  172 |     await test.step("Verify that the button 'proceed with 1201 plan' exists in the DOM", async () => {
  173 |       await expect(appPage.buttonProceedWith1201Plan.first()).toBeAttached({ timeout: 5000 });
  174 |       evidence.validationsPerformed.push("Verify that the button 'proceed with 1201 plan' exists in the DOM");
  175 |     });
  176 |     await test.step("Verify that the button 'proceed with 751 plan' exists in the DOM", async () => {
  177 |       await expect(appPage.buttonProceedWith751Plan.first()).toBeAttached({ timeout: 5000 });
  178 |       evidence.validationsPerformed.push("Verify that the button 'proceed with 751 plan' exists in the DOM");
  179 |     });
  180 | 
  181 |     await test.step("Capture screenshot evidence", async () => {
  182 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process - Button Verification", "www.myvi.in");
  183 |       evidence.screenshots.push(screenshotPath);
  184 |     });
  185 | 
  186 |     await attachExecutionSummary(evidence, page, testInfo);
  187 |   });
  188 |   test("Verify that 138 Inputs are present on Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process @regression", async ({ page }, testInfo) => {
  189 |     await label('suite', "Regression Test Suite");
  190 |     await label('url', "https://www.myvi.in/");
  191 |     await label('domain', "www.myvi.in");
  192 |     await feature("Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process");
  193 |     await story("Verify Input elements are present");
  194 |     await severity("minor");
  195 |     await tag("regression");
  196 | 
  197 |     const evidence = createEvidence({
  198 |       application: "www.myvi.in",
  199 |       suite: "Regression Test Suite",
  200 |       browser: testInfo.project.name || 'chromium',
  201 |       pageName: "Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process",
  202 |       pageUrl: "https://www.myvi.in/new-connection/mobile-number-portability-mnp-online",
  203 |       testObjective: "Verify Input elements are present",
  204 |     });
  205 | 
  206 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
> 207 |       await expect(appPage.inputFaqDrawer.first()).toBeAttached({ timeout: 5000 });
      |                                                    ^ Error: expect(locator).toBeAttached() failed
  208 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  209 |     });
  210 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  211 |       await expect(appPage.inputFaqDrawer1.first()).toBeAttached({ timeout: 5000 });
  212 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  213 |     });
  214 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  215 |       await expect(appPage.inputFaqDrawer2.first()).toBeAttached({ timeout: 5000 });
  216 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  217 |     });
  218 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  219 |       await expect(appPage.inputFaqDrawer3.first()).toBeAttached({ timeout: 5000 });
  220 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  221 |     });
  222 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  223 |       await expect(appPage.inputFaqDrawer4.first()).toBeAttached({ timeout: 5000 });
  224 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  225 |     });
  226 | 
  227 |     await test.step("Capture screenshot evidence", async () => {
  228 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process - Input Verification", "www.myvi.in");
  229 |       evidence.screenshots.push(screenshotPath);
  230 |     });
  231 | 
  232 |     await attachExecutionSummary(evidence, page, testInfo);
  233 |   });
  234 |   test("Verify that 1 Form is present on Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process @regression", async ({ page }, testInfo) => {
  235 |     await label('suite', "Regression Test Suite");
  236 |     await label('url', "https://www.myvi.in/");
  237 |     await label('domain', "www.myvi.in");
  238 |     await feature("Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process");
  239 |     await story("Verify Form elements are present");
  240 |     await severity("minor");
  241 |     await tag("regression");
  242 | 
  243 |     const evidence = createEvidence({
  244 |       application: "www.myvi.in",
  245 |       suite: "Regression Test Suite",
  246 |       browser: testInfo.project.name || 'chromium',
  247 |       pageName: "Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process",
  248 |       pageUrl: "https://www.myvi.in/new-connection/mobile-number-portability-mnp-online",
  249 |       testObjective: "Verify Form elements are present",
  250 |     });
  251 | 
  252 |     await test.step("Verify that the form 'Form' exists in the DOM", async () => {
  253 |       await expect(appPage.form0.first()).toBeAttached({ timeout: 5000 });
  254 |       evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
  255 |     });
  256 | 
  257 |     await test.step("Capture screenshot evidence", async () => {
  258 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process - Form Verification", "www.myvi.in");
  259 |       evidence.screenshots.push(screenshotPath);
  260 |     });
  261 | 
  262 |     await attachExecutionSummary(evidence, page, testInfo);
  263 |   });
  264 |   test("Verify that 2 Menus are present on Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process @regression", async ({ page }, testInfo) => {
  265 |     await label('suite', "Regression Test Suite");
  266 |     await label('url', "https://www.myvi.in/");
  267 |     await label('domain', "www.myvi.in");
  268 |     await feature("Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process");
  269 |     await story("Verify Menu elements are present");
  270 |     await severity("minor");
  271 |     await tag("regression");
  272 | 
  273 |     const evidence = createEvidence({
  274 |       application: "www.myvi.in",
  275 |       suite: "Regression Test Suite",
  276 |       browser: testInfo.project.name || 'chromium',
  277 |       pageName: "Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process",
  278 |       pageUrl: "https://www.myvi.in/new-connection/mobile-number-portability-mnp-online",
  279 |       testObjective: "Verify Menu elements are present",
  280 |     });
  281 | 
  282 |     await test.step("Verify that the menu 'Navigation menu' exists in the DOM", async () => {
  283 |       await expect(appPage.menu0.first()).toBeAttached({ timeout: 5000 });
  284 |       evidence.validationsPerformed.push("Verify that the menu 'Navigation menu' exists in the DOM");
  285 |     });
  286 |     await test.step("Verify that the menu 'home new connection mobile number portability (MNP)' exists in the DOM", async () => {
  287 |       await expect(appPage.menuHomeNewConnectionMobileNumberPortabilityMnp.first()).toBeAttached({ timeout: 5000 });
  288 |       evidence.validationsPerformed.push("Verify that the menu 'home new connection mobile number portability (MNP)' exists in the DOM");
  289 |     });
  290 | 
  291 |     await test.step("Capture screenshot evidence", async () => {
  292 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process - Menu Verification", "www.myvi.in");
  293 |       evidence.screenshots.push(screenshotPath);
  294 |     });
  295 | 
  296 |     await attachExecutionSummary(evidence, page, testInfo);
  297 |   });
  298 | });
  299 | 
```