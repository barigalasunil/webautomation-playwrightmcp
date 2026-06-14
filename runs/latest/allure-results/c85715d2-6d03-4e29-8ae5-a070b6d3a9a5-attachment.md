# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\CheckViSimStatusOnlineTrackYourConnectionOrders.spec.ts >> https://www.myvi.in/ - Check Vi SIM Status Online | Track Your Connection & Orders - Regression Tests >> Verify that 2 Menus are present on Check Vi SIM Status Online | Track Your Connection & Orders @regression
- Location: tests\generated\www-myvi-in\CheckViSimStatusOnlineTrackYourConnectionOrders.spec.ts:234:3

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: getByRole('navigation', { name: 'home new connection track your SIM delivery' }).first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for getByRole('navigation', { name: 'home new connection track your SIM delivery' }).first()

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
  174 |       evidence.validationsPerformed.push("Verify that the button 'live track' exists in the DOM");
  175 |     });
  176 |     await test.step("Verify that the button 'live track' exists in the DOM", async () => {
  177 |       await expect(appPage.buttonLiveTrack1.first()).toBeAttached({ timeout: 5000 });
  178 |       evidence.validationsPerformed.push("Verify that the button 'live track' exists in the DOM");
  179 |     });
  180 | 
  181 |     await test.step("Capture screenshot evidence", async () => {
  182 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Check Vi SIM Status Online | Track Your Connection & Orders - Button Verification", "www.myvi.in");
  183 |       evidence.screenshots.push(screenshotPath);
  184 |     });
  185 | 
  186 |     await attachExecutionSummary(evidence, page, testInfo);
  187 |   });
  188 |   test("Verify that 55 Inputs are present on Check Vi SIM Status Online | Track Your Connection & Orders @regression", async ({ page }, testInfo) => {
  189 |     await label('suite', "Regression Test Suite");
  190 |     await label('url', "https://www.myvi.in/");
  191 |     await label('domain', "www.myvi.in");
  192 |     await feature("Check Vi SIM Status Online | Track Your Connection & Orders");
  193 |     await story("Verify Input elements are present");
  194 |     await severity("minor");
  195 |     await tag("regression");
  196 | 
  197 |     const evidence = createEvidence({
  198 |       application: "www.myvi.in",
  199 |       suite: "Regression Test Suite",
  200 |       browser: testInfo.project.name || 'chromium',
  201 |       pageName: "Check Vi SIM Status Online | Track Your Connection & Orders",
  202 |       pageUrl: "https://www.myvi.in/new-connection/track-your-sim-online",
  203 |       testObjective: "Verify Input elements are present",
  204 |     });
  205 | 
  206 |     await test.step("Verify that the input 'enter 4 digit OTP' exists in the DOM", async () => {
  207 |       await expect(appPage.inputEnter4DigitOtp.first()).toBeAttached({ timeout: 5000 });
  208 |       evidence.validationsPerformed.push("Verify that the input 'enter 4 digit OTP' exists in the DOM");
  209 |     });
  210 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  211 |       await expect(appPage.inputOtpstatus.first()).toBeAttached({ timeout: 5000 });
  212 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  213 |     });
  214 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  215 |       await expect(appPage.inputOneattemptleft.first()).toBeAttached({ timeout: 5000 });
  216 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  217 |     });
  218 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  219 |       await expect(appPage.inputResentattemptexhausted.first()).toBeAttached({ timeout: 5000 });
  220 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  221 |     });
  222 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  223 |       await expect(appPage.inputResendlocked.first()).toBeAttached({ timeout: 5000 });
  224 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  225 |     });
  226 | 
  227 |     await test.step("Capture screenshot evidence", async () => {
  228 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Check Vi SIM Status Online | Track Your Connection & Orders - Input Verification", "www.myvi.in");
  229 |       evidence.screenshots.push(screenshotPath);
  230 |     });
  231 | 
  232 |     await attachExecutionSummary(evidence, page, testInfo);
  233 |   });
  234 |   test("Verify that 2 Menus are present on Check Vi SIM Status Online | Track Your Connection & Orders @regression", async ({ page }, testInfo) => {
  235 |     await label('suite', "Regression Test Suite");
  236 |     await label('url', "https://www.myvi.in/");
  237 |     await label('domain', "www.myvi.in");
  238 |     await feature("Check Vi SIM Status Online | Track Your Connection & Orders");
  239 |     await story("Verify Menu elements are present");
  240 |     await severity("minor");
  241 |     await tag("regression");
  242 | 
  243 |     const evidence = createEvidence({
  244 |       application: "www.myvi.in",
  245 |       suite: "Regression Test Suite",
  246 |       browser: testInfo.project.name || 'chromium',
  247 |       pageName: "Check Vi SIM Status Online | Track Your Connection & Orders",
  248 |       pageUrl: "https://www.myvi.in/new-connection/track-your-sim-online",
  249 |       testObjective: "Verify Menu elements are present",
  250 |     });
  251 | 
  252 |     await test.step("Verify that the menu 'Navigation menu' exists in the DOM", async () => {
  253 |       await expect(appPage.menu0.first()).toBeAttached({ timeout: 5000 });
  254 |       evidence.validationsPerformed.push("Verify that the menu 'Navigation menu' exists in the DOM");
  255 |     });
  256 |     await test.step("Verify that the menu 'home new connection track your SIM delivery' exists in the DOM", async () => {
> 257 |       await expect(appPage.menuHomeNewConnectionTrackYourSimDelivery.first()).toBeAttached({ timeout: 5000 });
      |                                                                               ^ Error: expect(locator).toBeAttached() failed
  258 |       evidence.validationsPerformed.push("Verify that the menu 'home new connection track your SIM delivery' exists in the DOM");
  259 |     });
  260 | 
  261 |     await test.step("Capture screenshot evidence", async () => {
  262 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Check Vi SIM Status Online | Track Your Connection & Orders - Menu Verification", "www.myvi.in");
  263 |       evidence.screenshots.push(screenshotPath);
  264 |     });
  265 | 
  266 |     await attachExecutionSummary(evidence, page, testInfo);
  267 |   });
  268 | });
  269 | 
```