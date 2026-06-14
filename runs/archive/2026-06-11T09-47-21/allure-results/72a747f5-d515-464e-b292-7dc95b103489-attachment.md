# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\PlanSelectionPage.spec.ts >> https://www.myvi.in/ - Plan Selection Page - Regression Tests >> Verify that 5 Buttons are present on Plan Selection Page @regression
- Location: tests\generated\www-myvi-in\PlanSelectionPage.spec.ts:130:3

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: getByRole('button', { name: 'verify' }).first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for getByRole('button', { name: 'verify' }).first()

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
  57  |     await tag("regression");
  58  | 
  59  |     const evidence = createEvidence({
  60  |       application: "www.myvi.in",
  61  |       suite: "Regression Test Suite",
  62  |       browser: testInfo.project.name || 'chromium',
  63  |       pageName: "Plan Selection Page",
  64  |       pageUrl: "https://www.myvi.in/pre-to-post/plan?mrp=451&utm_source=MyVi&utm_campaign=MainMenu",
  65  |       testObjective: "Verify Heading elements are present",
  66  |     });
  67  | 
  68  |     await test.step("Verify that the heading 'great! you can now switch from prepaid to postpaid with just an OTP' exists in the DOM", async () => {
  69  |       await expect(appPage.headingGreatYouCanNowSwitchFromPrepaidToPostpaidWithJust.first()).toBeAttached({ timeout: 5000 });
  70  |       evidence.validationsPerformed.push("Verify that the heading 'great! you can now switch from prepaid to postpaid with just an OTP' exists in the DOM");
  71  |     });
  72  |     await test.step("Verify that the heading 'great! you can now switch from prepaid to postpaid with just an OTP' exists in the DOM", async () => {
  73  |       await expect(appPage.headingGreatYouCanNowSwitchFromPrepaidToPostpaidWithJust1.first()).toBeAttached({ timeout: 5000 });
  74  |       evidence.validationsPerformed.push("Verify that the heading 'great! you can now switch from prepaid to postpaid with just an OTP' exists in the DOM");
  75  |     });
  76  | 
  77  |     await test.step("Capture screenshot evidence", async () => {
  78  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Plan Selection Page - Heading Verification", "www.myvi.in");
  79  |       evidence.screenshots.push(screenshotPath);
  80  |     });
  81  | 
  82  |     await attachExecutionSummary(evidence, page, testInfo);
  83  |   });
  84  |   test("Verify that 13 Links are present on Plan Selection Page @regression", async ({ page }, testInfo) => {
  85  |     await label('suite', "Regression Test Suite");
  86  |     await label('url', "https://www.myvi.in/");
  87  |     await label('domain', "www.myvi.in");
  88  |     await feature("Plan Selection Page");
  89  |     await story("Verify Link elements are present");
  90  |     await severity("minor");
  91  |     await tag("regression");
  92  | 
  93  |     const evidence = createEvidence({
  94  |       application: "www.myvi.in",
  95  |       suite: "Regression Test Suite",
  96  |       browser: testInfo.project.name || 'chromium',
  97  |       pageName: "Plan Selection Page",
  98  |       pageUrl: "https://www.myvi.in/pre-to-post/plan?mrp=451&utm_source=MyVi&utm_campaign=MainMenu",
  99  |       testObjective: "Verify Link elements are present",
  100 |     });
  101 | 
  102 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  103 |       await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
  104 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  105 |     });
  106 |     await test.step("Verify that the link 'Back to CallCenter' exists in the DOM", async () => {
  107 |       await expect(appPage.linkBackToCallcenter.first()).toBeAttached({ timeout: 5000 });
  108 |       evidence.validationsPerformed.push("Verify that the link 'Back to CallCenter' exists in the DOM");
  109 |     });
  110 |     await test.step("Verify that the link 'resend' exists in the DOM", async () => {
  111 |       await expect(appPage.linkResend.first()).toBeAttached({ timeout: 5000 });
  112 |       evidence.validationsPerformed.push("Verify that the link 'resend' exists in the DOM");
  113 |     });
  114 |     await test.step("Verify that the link 'continue with doorstep delivery' exists in the DOM", async () => {
  115 |       await expect(appPage.linkContinueWithDoorstepDelivery.first()).toBeAttached({ timeout: 5000 });
  116 |       evidence.validationsPerformed.push("Verify that the link 'continue with doorstep delivery' exists in the DOM");
  117 |     });
  118 |     await test.step("Verify that the link 'proceed' exists in the DOM", async () => {
  119 |       await expect(appPage.linkProceed.first()).toBeAttached({ timeout: 5000 });
  120 |       evidence.validationsPerformed.push("Verify that the link 'proceed' exists in the DOM");
  121 |     });
  122 | 
  123 |     await test.step("Capture screenshot evidence", async () => {
  124 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Plan Selection Page - Link Verification", "www.myvi.in");
  125 |       evidence.screenshots.push(screenshotPath);
  126 |     });
  127 | 
  128 |     await attachExecutionSummary(evidence, page, testInfo);
  129 |   });
  130 |   test("Verify that 5 Buttons are present on Plan Selection Page @regression", async ({ page }, testInfo) => {
  131 |     await label('suite', "Regression Test Suite");
  132 |     await label('url', "https://www.myvi.in/");
  133 |     await label('domain', "www.myvi.in");
  134 |     await feature("Plan Selection Page");
  135 |     await story("Verify Button elements are present");
  136 |     await severity("minor");
  137 |     await tag("regression");
  138 | 
  139 |     const evidence = createEvidence({
  140 |       application: "www.myvi.in",
  141 |       suite: "Regression Test Suite",
  142 |       browser: testInfo.project.name || 'chromium',
  143 |       pageName: "Plan Selection Page",
  144 |       pageUrl: "https://www.myvi.in/pre-to-post/plan?mrp=451&utm_source=MyVi&utm_campaign=MainMenu",
  145 |       testObjective: "Verify Button elements are present",
  146 |     });
  147 | 
  148 |     await test.step("Verify that the button 'get OTP' exists in the DOM", async () => {
  149 |       await expect(appPage.buttonGetOtp.first()).toBeAttached({ timeout: 5000 });
  150 |       evidence.validationsPerformed.push("Verify that the button 'get OTP' exists in the DOM");
  151 |     });
  152 |     await test.step("Verify that the button 'get OTP' exists in the DOM", async () => {
  153 |       await expect(appPage.buttonGetOtp1.first()).toBeAttached({ timeout: 5000 });
  154 |       evidence.validationsPerformed.push("Verify that the button 'get OTP' exists in the DOM");
  155 |     });
  156 |     await test.step("Verify that the button 'verify' exists in the DOM", async () => {
> 157 |       await expect(appPage.buttonVerify.first()).toBeAttached({ timeout: 5000 });
      |                                                  ^ Error: expect(locator).toBeAttached() failed
  158 |       evidence.validationsPerformed.push("Verify that the button 'verify' exists in the DOM");
  159 |     });
  160 |     await test.step("Verify that the button 'proceed' exists in the DOM", async () => {
  161 |       await expect(appPage.buttonProceed.first()).toBeAttached({ timeout: 5000 });
  162 |       evidence.validationsPerformed.push("Verify that the button 'proceed' exists in the DOM");
  163 |     });
  164 |     await test.step("Verify that the button 'proceed' exists in the DOM", async () => {
  165 |       await expect(appPage.buttonProceed1.first()).toBeAttached({ timeout: 5000 });
  166 |       evidence.validationsPerformed.push("Verify that the button 'proceed' exists in the DOM");
  167 |     });
  168 | 
  169 |     await test.step("Capture screenshot evidence", async () => {
  170 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Plan Selection Page - Button Verification", "www.myvi.in");
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
```