# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\PlanSelectionPage.spec.ts >> https://www.myvi.in/ - Plan Selection Page - Regression Tests >> Verify that 2 Menus are present on Plan Selection Page @regression
- Location: tests\generated\www-myvi-in\PlanSelectionPage.spec.ts:252:3

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: getByRole('navigation', { name: 'Back to CallCenter' }).first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for getByRole('navigation', { name: 'Back to CallCenter' }).first()

```

```yaml
- navigation:
  - link "Vi":
    - /url: https://www.myvi.in
    - img "Vi"
- heading "great! you can now switch from prepaid to postpaid with just an OTP" [level=1]
- paragraph:
  - img "ribbon-img"
- paragraph: your chosen plan
- paragraph: switch to postpaid
- text: 1 choose a plan 2 verify details 3 place request postpaid ₹ 451 per month 50GB (Unlimited 12 AM to 6 AM) 200GB roll over Data
- img "Vi Movies & TV"
- img "JioHotstar"
- img "Sony LIV"
- text: more benefits
- img
- paragraph: "Mobile benefits:"
- list:
  - listitem: Unlimited Calls Local, STD, National Roaming
  - listitem: 50GB (Unlimited 12 AM to 6 AM)
  - listitem: 3000 SMS/Month
  - listitem: 200GB roll over
- paragraph: "Additional benefits:"
- list:
  - listitem: Play Esports, Multiplayer games & More for free on Vi App
- paragraph: "Plus 1 from below:"
- list:
  - img "Vi Movies & TV"
  - img "JioHotstar"
  - img "Sony LIV"
  - img "Norton"
- paragraph: enter the Vi prepaid number you wish to switch to postpaid
- textbox "enter mobile number"
- button "get OTP" [disabled]
- navigation "breadcrumb":
  - list:
    - listitem:
      - link "Home":
        - /url: https://www.myvi.in/
    - listitem:
      - link "New Connection":
        - /url: https://www.myvi.in/new-connection/buy-postpaid-sim-connection-online
    - listitem:
      - link "Convert Prepaid to Postpaid":
        - /url: /content/lobswitch/en/landing-page.html
- contentinfo:
  - img "Free SIM Delivery"
  - text: Free SIM delivery
  - img "Contactless SIM Delivery"
  - text: Contactless delivery
  - img "Great Network"
  - text: Great network
  - paragraph: This website uses own third-party cookies. Find out more about usage in our Privacy Policy page. Copyright Reserved with Vodafone Idea Limited (formerly Idea Cellular Limited).
  - paragraph: "Vodafone Idea Limited (Formerly Idea Cellular Limited), An Aditya Birla Group & Vodafone partnership, Suman Towers, Plot No.18, Sector 11, Gandhinagar – 382011, Gujarat.CIN L32100GJ1996PLC030976, T: +91-79 6671 4000, F: +91-79 2323 2251"
```

# Test source

```ts
  171 |       evidence.screenshots.push(screenshotPath);
  172 |     });
  173 | 
  174 |     await attachExecutionSummary(evidence, page, testInfo);
  175 |   });
  176 |   test("Verify that 101 Inputs are present on Plan Selection Page @regression", async ({ page }, testInfo) => {
  177 |     await label('suite', "Regression Test Suite");
  178 |     await label('url', "https://www.myvi.in/");
  179 |     await label('domain', "www.myvi.in");
  180 |     await feature("Plan Selection Page");
  181 |     await story("Verify Input elements are present");
  182 |     await severity("minor");
  183 |     await tag("regression");
  184 | 
  185 |     const evidence = createEvidence({
  186 |       application: "www.myvi.in",
  187 |       suite: "Regression Test Suite",
  188 |       browser: testInfo.project.name || 'chromium',
  189 |       pageName: "Plan Selection Page",
  190 |       pageUrl: "https://www.myvi.in/pre-to-post/plan?mrp=451&utm_source=MyVi&utm_campaign=MainMenu",
  191 |       testObjective: "Verify Input elements are present",
  192 |     });
  193 | 
  194 |     await test.step("Verify that the input 'enter mobile number' exists in the DOM", async () => {
  195 |       await expect(appPage.inputEnterMobileNumber.first()).toBeAttached({ timeout: 5000 });
  196 |       evidence.validationsPerformed.push("Verify that the input 'enter mobile number' exists in the DOM");
  197 |     });
  198 |     await test.step("Verify that the input 'enter otp' exists in the DOM", async () => {
  199 |       await expect(appPage.inputEnterYourOtp.first()).toBeAttached({ timeout: 5000 });
  200 |       evidence.validationsPerformed.push("Verify that the input 'enter otp' exists in the DOM");
  201 |     });
  202 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  203 |       await expect(appPage.inputPtopemail.first()).toBeAttached({ timeout: 5000 });
  204 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  205 |     });
  206 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  207 |       await expect(appPage.inputPtopaltnumber.first()).toBeAttached({ timeout: 5000 });
  208 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  209 |     });
  210 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  211 |       await expect(appPage.inputPtopfname.first()).toBeAttached({ timeout: 5000 });
  212 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  213 |     });
  214 | 
  215 |     await test.step("Capture screenshot evidence", async () => {
  216 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Plan Selection Page - Input Verification", "www.myvi.in");
  217 |       evidence.screenshots.push(screenshotPath);
  218 |     });
  219 | 
  220 |     await attachExecutionSummary(evidence, page, testInfo);
  221 |   });
  222 |   test("Verify that 1 Form is present on Plan Selection Page @regression", async ({ page }, testInfo) => {
  223 |     await label('suite', "Regression Test Suite");
  224 |     await label('url', "https://www.myvi.in/");
  225 |     await label('domain', "www.myvi.in");
  226 |     await feature("Plan Selection Page");
  227 |     await story("Verify Form elements are present");
  228 |     await severity("minor");
  229 |     await tag("regression");
  230 | 
  231 |     const evidence = createEvidence({
  232 |       application: "www.myvi.in",
  233 |       suite: "Regression Test Suite",
  234 |       browser: testInfo.project.name || 'chromium',
  235 |       pageName: "Plan Selection Page",
  236 |       pageUrl: "https://www.myvi.in/pre-to-post/plan?mrp=451&utm_source=MyVi&utm_campaign=MainMenu",
  237 |       testObjective: "Verify Form elements are present",
  238 |     });
  239 | 
  240 |     await test.step("Verify that the form 'Form' exists in the DOM", async () => {
  241 |       await expect(appPage.form0.first()).toBeAttached({ timeout: 5000 });
  242 |       evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
  243 |     });
  244 | 
  245 |     await test.step("Capture screenshot evidence", async () => {
  246 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Plan Selection Page - Form Verification", "www.myvi.in");
  247 |       evidence.screenshots.push(screenshotPath);
  248 |     });
  249 | 
  250 |     await attachExecutionSummary(evidence, page, testInfo);
  251 |   });
  252 |   test("Verify that 2 Menus are present on Plan Selection Page @regression", async ({ page }, testInfo) => {
  253 |     await label('suite', "Regression Test Suite");
  254 |     await label('url', "https://www.myvi.in/");
  255 |     await label('domain', "www.myvi.in");
  256 |     await feature("Plan Selection Page");
  257 |     await story("Verify Menu elements are present");
  258 |     await severity("minor");
  259 |     await tag("regression");
  260 | 
  261 |     const evidence = createEvidence({
  262 |       application: "www.myvi.in",
  263 |       suite: "Regression Test Suite",
  264 |       browser: testInfo.project.name || 'chromium',
  265 |       pageName: "Plan Selection Page",
  266 |       pageUrl: "https://www.myvi.in/pre-to-post/plan?mrp=451&utm_source=MyVi&utm_campaign=MainMenu",
  267 |       testObjective: "Verify Menu elements are present",
  268 |     });
  269 | 
  270 |     await test.step("Verify that the menu 'Back to CallCenter' exists in the DOM", async () => {
> 271 |       await expect(appPage.menuBackToCallcenter.first()).toBeAttached({ timeout: 5000 });
      |                                                          ^ Error: expect(locator).toBeAttached() failed
  272 |       evidence.validationsPerformed.push("Verify that the menu 'Back to CallCenter' exists in the DOM");
  273 |     });
  274 |     await test.step("Verify that the menu 'Home New Connection Convert Prepaid to Postpaid' exists in the DOM", async () => {
  275 |       await expect(appPage.menuHomeNewConnectionConvertPrepaidToPostpaid.first()).toBeAttached({ timeout: 5000 });
  276 |       evidence.validationsPerformed.push("Verify that the menu 'Home New Connection Convert Prepaid to Postpaid' exists in the DOM");
  277 |     });
  278 | 
  279 |     await test.step("Capture screenshot evidence", async () => {
  280 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Plan Selection Page - Menu Verification", "www.myvi.in");
  281 |       evidence.screenshots.push(screenshotPath);
  282 |     });
  283 | 
  284 |     await attachExecutionSummary(evidence, page, testInfo);
  285 |   });
  286 | });
  287 | 
```