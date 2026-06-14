# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\ViLoanEmiPaymentQuickSecureOnlinePayment.spec.ts >> https://www.myvi.in/ - Vi Loan EMI Payment | Quick & Secure Online Payment - Regression Tests >> Verify that 1 Menu is present on Vi Loan EMI Payment | Quick & Secure Online Payment @regression
- Location: tests\generated\www-myvi-in\ViLoanEmiPaymentQuickSecureOnlinePayment.spec.ts:252:3

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: getByRole('navigation', { name: 'open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs' }).first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for getByRole('navigation', { name: 'open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs' }).first()

```

```yaml
- banner:
  - navigation:
    - link "Vi":
      - /url: https://www.myvi.in/
      - img "Vi"
    - list:
      - listitem:
        - button "Prepaid"
      - listitem:
        - button "Postpaid"
      - listitem:
        - button "New Connection"
      - listitem:
        - link "International Roaming":
          - /url: https://www.myvi.in/international-roaming-packs
      - listitem:
        - link "5G":
          - /url: https://www.myvi.in/5g-network
      - listitem:
        - button "OTTs & More"
      - listitem:
        - button "Help"
      - listitem:
        - button "DND & Service Quality"
      - img "search"
    - link "Business":
      - /url: https://www.myvi.in/business
    - link "Investors":
      - /url: https://www.myvi.in/investors/annual-reports
    - link "Sign In":
      - /url: https://www.myvi.in/account/login
- img "back-arrow"
- paragraph: pay loan EMI
- img "question mark"
- img "question mark"
- main:
  - heading "pay your loan EMI in seconds" [level=1]
  - textbox "enter mobile number"
  - text: enter mobile number
  - button "proceed to add bill details" [disabled]
  - img "banner image"
- contentinfo:
  - img "Vi"
  - paragraph: Vodafone Idea Limited
  - paragraph: Vodafone Idea Limited, a partnership between the Aditya Birla Group & Vodafone Group, provides pan-India voice and data services using the latest communication technologies
  - link "Facebook":
    - /url: https://www.facebook.com/ViOfficialFanWorld/
    - img "Facebook"
  - link "Instagram":
    - /url: https://instagram.com/viofficialfanworld
    - img "Instagram"
  - link "Twitter":
    - /url: https://twitter.com/ViCustomerCare
    - img "Twitter"
  - link "Youtube":
    - /url: https://www.youtube.com/channel/UCHLTL1DEP_zelqLvUlYaV8Q
    - img "Youtube"
  - link "LinkedIn":
    - /url: https://www.linkedin.com/company/vodafone-idea-limited
    - img "LinkedIn"
  - paragraph:
    - button "about Vi" [expanded]:
      - paragraph: about Vi
  - list:
    - listitem:
      - link "About Us":
        - /url: /about-us/home
    - listitem:
      - link "Vodafone Idea Corp":
        - /url: https://www.vodafoneidea.com/
    - listitem:
      - link "Vi Foundation":
        - /url: https://www.myvi.in/about-us/vodafoneidea-foundation
    - listitem:
      - link "Vodafone Group":
        - /url: https://www.vodafone.com/
    - listitem:
      - link "Aditya Birla Group":
        - /url: https://www.adityabirla.com/
    - listitem:
      - link "Investor Relations":
        - /url: https://www.myvi.in/investors/investors-support
    - listitem:
      - link "News & Media":
        - /url: https://www.myvi.in/vodafone-idea/press-releases
    - listitem:
      - link "Career":
        - /url: https://www.myvi.in/careers
    - listitem:
      - link "Vi App":
        - /url: https://viapp.onelink.me/bSC3/viapp1
    - listitem:
      - link "Vi Stores Near Me":
        - /url: https://stores.myvi.in/?UTM_SOURCE=myviHome
    - listitem:
      - link "Vi Business":
        - /url: https://www.myvi.in/business
    - listitem:
      - link "Home Broadband":
        - /url: https://youbroadband.in/?soc_id=194&campaign_source=%3Cweb%3E&campaign_name=%3CVi%3E
    - listitem:
      - link "GIGAnet":
        - /url: https://www.myvi.in/giganet
    - listitem:
      - link "Vi VoLTE":
        - /url: /vi-volte-4g-hd-voice-calls
    - listitem:
      - link "Go Green":
        - /url: https://www.myvi.in/online-ebill-registration
    - listitem:
      - link "eSIM":
        - /url: https://www.myvi.in/esim-activation
    - listitem:
      - link "WiFi Calling":
        - /url: https://www.myvi.in/vi-wifi-calling
    - listitem:
      - link "5G":
        - /url: https://www.myvi.in/5g-network
    - listitem:
      - link "Blog":
        - /url: /blog
  - paragraph:
    - button "more from Vi" [expanded]:
      - paragraph: more from Vi
  - list:
    - listitem:
      - link "Postpaid Connection":
        - /url: https://www.myvi.in/new-connection/buy-new-4g-sim-card-online
    - listitem:
      - link "Prepaid Connection":
        - /url: https://www.myvi.in/new-connection/buy-prepaid-sim-connection-online
    - listitem:
      - link "Port Number to Vi / MNP":
        - /url: https://www.myvi.in/new-connection/mobile-number-portability-mnp-online
    - listitem:
      - link "Free SIM Delivery":
        - /url: https://www.myvi.in/new-connection/vi-free-sim-home-delivery
    - listitem:
      - link "Track your SIM Delivery":
        - /url: https://www.myvi.in/new-connection/track-your-sim-online
    - listitem:
      - link "Fancy Number":
        - /url: https://www.myvi.in/new-connection/choose-your-fancy-mobile-numbers-online
    - listitem:
      - link "Individual Plans":
        - /url: https://www.myvi.in/postpaid/vi-postpaid-plans
    - listitem:
      - link "Family Plans":
        - /url: https://www.myvi.in/postpaid/family-postpaid-plans
    - listitem:
      - link "Prepaid to Postpaid":
        - /url: https://www.myvi.in/new-connection/buy-postpaid-sim-connection-online?utm_source=Myviweb&utm_campaign=MainMenu
    - listitem:
      - link "Best Postpaid Plans":
        - /url: https://www.myvi.in/postpaid/vi-postpaid-plans
    - listitem:
      - link "Best Prepaid Plans":
        - /url: https://www.myvi.in/prepaid/best-prepaid-plans
    - listitem:
      - link "Hero Unlimited Plans":
        - /url: https://www.myvi.in/prepaid/hero-unlimited-and-weekend-data-rollover
    - listitem:
      - link "Unlimited Plans":
        - /url: https://www.myvi.in/prepaid/unlimited-calls-and-data-plans
    - listitem:
      - link "Talktime Plans":
        - /url: https://www.myvi.in/prepaid/recharge-talktime-top-up-plans
    - listitem:
      - link "Data Plans":
        - /url: https://www.myvi.in/prepaid/mobile-data-packs
    - listitem:
      - link "SMS Packs":
        - /url: https://www.myvi.in/prepaid/sms-packs
    - listitem:
      - link "Caller Tunes Packs":
        - /url: https://www.myvi.in/prepaid/caller-tunes
    - listitem:
      - link "Value Added Services":
        - /url: https://www.myvi.in/value-added-services
    - listitem:
      - link "Service Validity Plans":
        - /url: https://www.myvi.in/prepaid/service-validity-recharge-plans
    - listitem:
      - link "JioHotstar Plans":
        - /url: https://www.myvi.in/prepaid/jiohotstar-subscription-recharge
    - listitem:
      - link "Amazon Prime Plans":
        - /url: https://www.myvi.in/prepaid/amazon-prime-membership-recharge
    - listitem:
      - link "SonyLIV Plans":
        - /url: https://www.myvi.in/prepaid/sonyliv-subscription-recharge-plans
    - listitem:
      - link "Online Recharge":
        - /url: https://www.myvi.in/prepaid/online-mobile-recharge
    - listitem:
      - link "Postpaid Bill Payment":
        - /url: https://www.myvi.in/postpaid/quick-online-bill-payment
    - listitem:
      - link "Vi Shop - Seller Portal":
        - /url: https://www.vishop.myvi.in/
    - listitem:
      - link "Vi Video Vault":
        - /url: https://www.myvi.in/videos
  - paragraph:
    - button "explore on Vi app":
      - paragraph: explore on Vi app
  - list:
    - listitem:
      - link "Vi Games":
        - /url: https://www.myvi.in/vi-games-app
    - listitem:
      - link "Vi Movies & TV":
        - /url: https://viapp.onelink.me/bSC3/viappmtv
    - listitem:
      - link "Vi Hero Unlimited":
        - /url: https://www.myvi.in/prepaid/hero-unlimited-and-weekend-data-rollover
    - listitem:
      - link "Vi WiFi Calling":
        - /url: https://www.myvi.in/vi-wifi-calling
    - listitem:
      - link "International Roaming":
        - /url: https://www.myvi.in/international-roaming-packs
    - listitem:
      - link "Callertunes":
        - /url: https://viapp.onelink.me/bSC3/viapp1
    - listitem:
      - link "Order Prepaid SIM":
        - /url: https://www.myvi.in/new-connection/buy-prepaid-sim-connection-online
    - listitem:
      - link "Order Postpaid SIM":
        - /url: https://www.myvi.in/new-connection/buy-postpaid-sim-connection-online
    - listitem:
      - link "Order VIP Number":
        - /url: https://www.myvi.in/new-connection/choose-your-fancy-mobile-numbers-online
    - listitem:
      - link "Port to Vi":
        - /url: https://www.myvi.in/new-connection/mobile-number-portability-mnp-online
    - listitem:
      - link "Recharge for Self/Others":
        - /url: https://www.myvi.in/prepaid/online-mobile-recharge
    - listitem:
      - link "Pay Bill for Self/Others":
        - /url: https://www.myvi.in/postpaid/quick-online-bill-payment
    - listitem:
      - link "Cashback Offers":
        - /url: https://www.myvi.in/prepaid/recharge-cashback-offers
    - listitem:
      - link "Help & Support":
        - /url: https://www.myvi.in/help-support/faqs
    - listitem:
      - link "My Account":
        - /url: https://www.myvi.in/vi-app
    - listitem:
      - link "Vi Shop":
        - /url: https://www.myvi.in/vi-shop-offers
    - listitem:
      - link "Vi Prepaid Autopay":
        - /url: https://www.myvi.in/auto-pay-recharge
  - paragraph:
    - button "regulatory & quick access":
      - paragraph: regulatory & quick access
  - list:
    - listitem:
      - link "Telemarketing Registration":
        - /url: /tele-marketing
    - listitem:
      - link "Privacy Policy":
        - /url: /privacy-policy
    - listitem:
      - link "Terms of Service":
        - /url: /terms-of-use
    - listitem:
      - link "Notices":
        - /url: /regulatory-notices
    - listitem:
      - link "Prepaid TRAI mandate":
        - /url: /prepaid/tariff
    - listitem:
      - link "Postpaid TRAI mandate":
        - /url: /postpaid/tariff
    - listitem:
      - link "Warning & Fraudulent":
        - /url: /about-us/warning-and-fraudulent
    - listitem:
      - link "Security Awareness":
        - /url: /parental-control
    - listitem:
      - link "DND Complaints":
        - /url: /dnd-complaints
    - listitem:
      - link "DND Registration":
        - /url: https://www.myvi.in/dnd
    - listitem:
      - link "Disaster Management":
        - /url: /content/dam/vodafoneideadigital/StaticPages/consumerimages/misc/Disaster_Management.pdf
    - listitem:
      - link "Responsible Disclosure Policy":
        - /url: https://www.myvi.in/Responsible-Disclosure-Policy
    - listitem:
      - link "Network Coverage":
        - /url: https://www.myvi.in/vicoverage/
    - listitem:
      - link "Register for Online Refund":
        - /url: https://www.myvi.in/postpaid/neft-details-for-refund
    - listitem:
      - link "Network Troubleshooting":
        - /url: https://www.myvi.in/help-support/basic-mobile-network-troubleshooting-steps
    - listitem:
      - link "Block SIM Online":
        - /url: https://www.myvi.in/block-your-sim
    - listitem:
      - link "UPI Recharge":
        - /url: https://www.myvi.in/prepaid/upi-recharge
    - listitem:
      - link "Postpaid ISD Call Rates":
        - /url: https://www.myvi.in/Postpaid/isd-call-rates
    - listitem:
      - link "Prepaid ISD Call Rates":
        - /url: https://www.myvi.in/prepaid/isd-call-rates
    - listitem:
      - link "Mobile Internet":
        - /url: https://www.myvi.in/mobile-internet
    - listitem:
      - link "Sitemap":
        - /url: https://www.myvi.in/sitemap
    - listitem:
      - link "VIBSL":
        - /url: https://www.myvi.in/vibsl
    - listitem:
      - link "Terms & Conditions - Prepaid":
        - /url: https://www.myvi.in/prepaid-tnc
  - paragraph:
    - text: This website uses own third-party cookies.Find out more about usage in our
    - link "Privacy Policy":
      - /url: https://www.myvi.in/privacy-policy
    - text: page. Copyright Reserved with Vodafone Idea Limited (formerly Idea Cellular Limited).
  - paragraph: "Vodafone Idea Limited (Formerly Idea Cellular Limited), An Aditya Birla Group & Vodafone partnership, Suman Towers, Plot No.18, Sector 11, Gandhinagar – 382011, Gujarat.CIN L32100GJ1996PLC030976, T: +91-79 6671 4000, F: +91-79 2323 2251"
```

# Test source

```ts
  171 |   });
  172 |   test("Verify that 37 Inputs are present on Vi Loan EMI Payment | Quick & Secure Online Payment @regression", async ({ page }, testInfo) => {
  173 |     await label('suite', "Regression Test Suite");
  174 |     await label('url', "https://www.myvi.in/");
  175 |     await label('domain', "www.myvi.in");
  176 |     await feature("Vi Loan EMI Payment | Quick & Secure Online Payment");
  177 |     await story("Verify Input elements are present");
  178 |     await severity("minor");
  179 |     await tag("regression");
  180 | 
  181 |     const evidence = createEvidence({
  182 |       application: "www.myvi.in",
  183 |       suite: "Regression Test Suite",
  184 |       browser: testInfo.project.name || 'chromium',
  185 |       pageName: "Vi Loan EMI Payment | Quick & Secure Online Payment",
  186 |       pageUrl: "https://www.myvi.in/utilities/loan-payment",
  187 |       testObjective: "Verify Input elements are present",
  188 |     });
  189 | 
  190 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  191 |       await expect(appPage.inputCookiepopupselect.first()).toBeAttached({ timeout: 5000 });
  192 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  193 |     });
  194 |     await test.step("Verify that the input 'Search' exists in the DOM", async () => {
  195 |       await expect(appPage.inputSearch.first()).toBeAttached({ timeout: 5000 });
  196 |       evidence.validationsPerformed.push("Verify that the input 'Search' exists in the DOM");
  197 |     });
  198 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  199 |       await expect(appPage.inputQ.first()).toBeAttached({ timeout: 5000 });
  200 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  201 |     });
  202 |     await test.step("Verify that the input 'Search' exists in the DOM", async () => {
  203 |       await expect(appPage.inputSearch1.first()).toBeAttached({ timeout: 5000 });
  204 |       evidence.validationsPerformed.push("Verify that the input 'Search' exists in the DOM");
  205 |     });
  206 |     await test.step("Verify that the input 'Search' exists in the DOM", async () => {
  207 |       await expect(appPage.inputSearch2.first()).toBeAttached({ timeout: 5000 });
  208 |       evidence.validationsPerformed.push("Verify that the input 'Search' exists in the DOM");
  209 |     });
  210 | 
  211 |     await test.step("Capture screenshot evidence", async () => {
  212 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Loan EMI Payment | Quick & Secure Online Payment - Input Verification", "www.myvi.in");
  213 |       evidence.screenshots.push(screenshotPath);
  214 |     });
  215 | 
  216 |     await attachExecutionSummary(evidence, page, testInfo);
  217 |   });
  218 |   test("Verify that 2 Forms are present on Vi Loan EMI Payment | Quick & Secure Online Payment @regression", async ({ page }, testInfo) => {
  219 |     await label('suite', "Regression Test Suite");
  220 |     await label('url', "https://www.myvi.in/");
  221 |     await label('domain', "www.myvi.in");
  222 |     await feature("Vi Loan EMI Payment | Quick & Secure Online Payment");
  223 |     await story("Verify Form elements are present");
  224 |     await severity("minor");
  225 |     await tag("regression");
  226 | 
  227 |     const evidence = createEvidence({
  228 |       application: "www.myvi.in",
  229 |       suite: "Regression Test Suite",
  230 |       browser: testInfo.project.name || 'chromium',
  231 |       pageName: "Vi Loan EMI Payment | Quick & Secure Online Payment",
  232 |       pageUrl: "https://www.myvi.in/utilities/loan-payment",
  233 |       testObjective: "Verify Form elements are present",
  234 |     });
  235 | 
  236 |     await test.step("Verify that the form 'Form' exists in the DOM", async () => {
  237 |       await expect(appPage.form0.first()).toBeAttached({ timeout: 5000 });
  238 |       evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
  239 |     });
  240 |     await test.step("Verify that the form 'Form' exists in the DOM", async () => {
  241 |       await expect(appPage.form1.first()).toBeAttached({ timeout: 5000 });
  242 |       evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
  243 |     });
  244 | 
  245 |     await test.step("Capture screenshot evidence", async () => {
  246 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Loan EMI Payment | Quick & Secure Online Payment - Form Verification", "www.myvi.in");
  247 |       evidence.screenshots.push(screenshotPath);
  248 |     });
  249 | 
  250 |     await attachExecutionSummary(evidence, page, testInfo);
  251 |   });
  252 |   test("Verify that 1 Menu is present on Vi Loan EMI Payment | Quick & Secure Online Payment @regression", async ({ page }, testInfo) => {
  253 |     await label('suite', "Regression Test Suite");
  254 |     await label('url', "https://www.myvi.in/");
  255 |     await label('domain', "www.myvi.in");
  256 |     await feature("Vi Loan EMI Payment | Quick & Secure Online Payment");
  257 |     await story("Verify Menu elements are present");
  258 |     await severity("minor");
  259 |     await tag("regression");
  260 | 
  261 |     const evidence = createEvidence({
  262 |       application: "www.myvi.in",
  263 |       suite: "Regression Test Suite",
  264 |       browser: testInfo.project.name || 'chromium',
  265 |       pageName: "Vi Loan EMI Payment | Quick & Secure Online Payment",
  266 |       pageUrl: "https://www.myvi.in/utilities/loan-payment",
  267 |       testObjective: "Verify Menu elements are present",
  268 |     });
  269 | 
  270 |     await test.step("Verify that the menu 'open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs' exists in the DOM", async () => {
> 271 |       await expect(appPage.menuOpenInViAppSignInSignInDashboardMyAccountPrepaid.first()).toBeAttached({ timeout: 5000 });
      |                                                                                          ^ Error: expect(locator).toBeAttached() failed
  272 |       evidence.validationsPerformed.push("Verify that the menu 'open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs' exists in the DOM");
  273 |     });
  274 | 
  275 |     await test.step("Capture screenshot evidence", async () => {
  276 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Loan EMI Payment | Quick & Secure Online Payment - Menu Verification", "www.myvi.in");
  277 |       evidence.screenshots.push(screenshotPath);
  278 |     });
  279 | 
  280 |     await attachExecutionSummary(evidence, page, testInfo);
  281 |   });
  282 | });
  283 | 
```