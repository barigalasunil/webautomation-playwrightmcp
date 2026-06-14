# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\ViPostpaidPlansWithUnlimitedCallsDataViIndia.spec.ts >> https://www.myvi.in/ - Vi Postpaid Plans with Unlimited Calls & Data | Vi India - Regression Tests >> Verify that 2 Menus are present on Vi Postpaid Plans with Unlimited Calls & Data | Vi India @regression
- Location: tests\generated\www-myvi-in\ViPostpaidPlansWithUnlimitedCallsDataViIndia.spec.ts:298:3

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
- img "close-icon"
- img "select-location"
- text: your current location choose circle
- heading "Mumbai down-arrow-icon" [level=5]:
  - button "Mumbai" [expanded]
  - img "down-arrow-icon"
- button "PROCEED"
- heading "Best Postpaid Plans" [level=1]
- paragraph: "All Vi max postpaid plans include : Unlimited Calls | National Roaming | 3000 SMS per month"
- paragraph:
  - text: postpaid plans for
  - img "location-icon"
  - text: Mumbai
- list:
  - listitem:
    - link "Individual plans":
      - /url: "#cb_tab1"
  - listitem:
    - link "Family plans":
      - /url: "#cb_tab2"
- listbox:
  - option "unlimited 5G Vi Max 451 451 /month 50 GB data select choice of any 1 complimentary benefits view details icon-info":
    - paragraph: unlimited 5G
    - paragraph: Vi Max 451 451 /month
    - paragraph: 50 GB
    - text: data
    - button "select"
    - paragraph: choice of any 1
    - paragraph: complimentary benefits
    - paragraph: view details
    - img "icon-info"
  - option "unlimited 5G Vi Max 551 551 /month 90 GB data select choice of any 2 complimentary benefits view details icon-info":
    - paragraph: unlimited 5G
    - paragraph: Vi Max 551 551 /month
    - paragraph: 90 GB
    - text: data
    - button "select"
    - paragraph: choice of any 2
    - paragraph: complimentary benefits
    - paragraph: view details
    - img "icon-info"
- toolbar:
  - button "Prev"
  - button "Next"
  - tablist:
    - listitem:
      - button "• 1"
- main:
  - paragraph:
    - text: Vi Max Postpaid Plans
    - link "TnC":
      - /url: /content/dam/vodafoneideadigital/documents/PostpaidTnC.pdf
  - paragraph:
    - link "Click here":
      - /url: https://www.myvi.in/postpaid/plans-and-packs
    - text: to change your existing postpaid plan and activate postpaid packs
- heading "Vi Postpaid Plans FAQ’s" [level=2]
- heading "What is a postpaid plan?" [level=3]
- heading "How to buy postpaid plans?" [level=3]
- heading "What benefits do I get with Vi Max postpaid Plans?" [level=3]
- heading "Which Postpaid Plan is best in Vi Max?" [level=3]
- heading "What are the individual postpaid plans available with Vi Max Postpaid?" [level=3]
- button "see more"
- heading "Vi Max Postpaid Mobile Plans" [level=2]
- navigation "breadcrumb":
  - list:
    - listitem:
      - link "Home":
        - /url: https://www.myvi.in
    - listitem:
      - link "Postpaid":
        - /url: https://www.myvi.in/postpaid
    - listitem:
      - link "Postpaid Plans":
        - /url: https://www.myvi.in/postpaid/vi-postpaid-plans
- link:
  - /url: https://viapp.onelink.me/bSC3/viapp1
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
  217 |     });
  218 |     await test.step("Verify that the input 'Search' exists in the DOM", async () => {
  219 |       await expect(appPage.inputSearch1.first()).toBeAttached({ timeout: 5000 });
  220 |       evidence.validationsPerformed.push("Verify that the input 'Search' exists in the DOM");
  221 |     });
  222 |     await test.step("Verify that the input 'Search' exists in the DOM", async () => {
  223 |       await expect(appPage.inputSearch2.first()).toBeAttached({ timeout: 5000 });
  224 |       evidence.validationsPerformed.push("Verify that the input 'Search' exists in the DOM");
  225 |     });
  226 | 
  227 |     await test.step("Capture screenshot evidence", async () => {
  228 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Postpaid Plans with Unlimited Calls & Data | Vi India - Input Verification", "www.myvi.in");
  229 |       evidence.screenshots.push(screenshotPath);
  230 |     });
  231 | 
  232 |     await attachExecutionSummary(evidence, page, testInfo);
  233 |   });
  234 |   test("Verify that 2 Forms are present on Vi Postpaid Plans with Unlimited Calls & Data | Vi India @regression", async ({ page }, testInfo) => {
  235 |     await label('suite', "Regression Test Suite");
  236 |     await label('url', "https://www.myvi.in/");
  237 |     await label('domain', "www.myvi.in");
  238 |     await feature("Vi Postpaid Plans with Unlimited Calls & Data | Vi India");
  239 |     await story("Verify Form elements are present");
  240 |     await severity("minor");
  241 |     await tag("regression");
  242 | 
  243 |     const evidence = createEvidence({
  244 |       application: "www.myvi.in",
  245 |       suite: "Regression Test Suite",
  246 |       browser: testInfo.project.name || 'chromium',
  247 |       pageName: "Vi Postpaid Plans with Unlimited Calls & Data | Vi India",
  248 |       pageUrl: "https://www.myvi.in/postpaid/vi-postpaid-plans",
  249 |       testObjective: "Verify Form elements are present",
  250 |     });
  251 | 
  252 |     await test.step("Verify that the form 'Form' exists in the DOM", async () => {
  253 |       await expect(appPage.form0.first()).toBeAttached({ timeout: 5000 });
  254 |       evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
  255 |     });
  256 |     await test.step("Verify that the form 'Form' exists in the DOM", async () => {
  257 |       await expect(appPage.form1.first()).toBeAttached({ timeout: 5000 });
  258 |       evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
  259 |     });
  260 | 
  261 |     await test.step("Capture screenshot evidence", async () => {
  262 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Postpaid Plans with Unlimited Calls & Data | Vi India - Form Verification", "www.myvi.in");
  263 |       evidence.screenshots.push(screenshotPath);
  264 |     });
  265 | 
  266 |     await attachExecutionSummary(evidence, page, testInfo);
  267 |   });
  268 |   test("Verify that 1 Table is present on Vi Postpaid Plans with Unlimited Calls & Data | Vi India @regression", async ({ page }, testInfo) => {
  269 |     await label('suite', "Regression Test Suite");
  270 |     await label('url', "https://www.myvi.in/");
  271 |     await label('domain', "www.myvi.in");
  272 |     await feature("Vi Postpaid Plans with Unlimited Calls & Data | Vi India");
  273 |     await story("Verify Table elements are present");
  274 |     await severity("minor");
  275 |     await tag("regression");
  276 | 
  277 |     const evidence = createEvidence({
  278 |       application: "www.myvi.in",
  279 |       suite: "Regression Test Suite",
  280 |       browser: testInfo.project.name || 'chromium',
  281 |       pageName: "Vi Postpaid Plans with Unlimited Calls & Data | Vi India",
  282 |       pageUrl: "https://www.myvi.in/postpaid/vi-postpaid-plans",
  283 |       testObjective: "Verify Table elements are present",
  284 |     });
  285 | 
  286 |     await test.step("Verify that the table 'Data table' exists in the DOM", async () => {
  287 |       await expect(appPage.table0.first()).toBeAttached({ timeout: 5000 });
  288 |       evidence.validationsPerformed.push("Verify that the table 'Data table' exists in the DOM");
  289 |     });
  290 | 
  291 |     await test.step("Capture screenshot evidence", async () => {
  292 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Postpaid Plans with Unlimited Calls & Data | Vi India - Table Verification", "www.myvi.in");
  293 |       evidence.screenshots.push(screenshotPath);
  294 |     });
  295 | 
  296 |     await attachExecutionSummary(evidence, page, testInfo);
  297 |   });
  298 |   test("Verify that 2 Menus are present on Vi Postpaid Plans with Unlimited Calls & Data | Vi India @regression", async ({ page }, testInfo) => {
  299 |     await label('suite', "Regression Test Suite");
  300 |     await label('url', "https://www.myvi.in/");
  301 |     await label('domain', "www.myvi.in");
  302 |     await feature("Vi Postpaid Plans with Unlimited Calls & Data | Vi India");
  303 |     await story("Verify Menu elements are present");
  304 |     await severity("minor");
  305 |     await tag("regression");
  306 | 
  307 |     const evidence = createEvidence({
  308 |       application: "www.myvi.in",
  309 |       suite: "Regression Test Suite",
  310 |       browser: testInfo.project.name || 'chromium',
  311 |       pageName: "Vi Postpaid Plans with Unlimited Calls & Data | Vi India",
  312 |       pageUrl: "https://www.myvi.in/postpaid/vi-postpaid-plans",
  313 |       testObjective: "Verify Menu elements are present",
  314 |     });
  315 | 
  316 |     await test.step("Verify that the menu 'open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs' exists in the DOM", async () => {
> 317 |       await expect(appPage.menuOpenInViAppSignInSignInDashboardMyAccountPrepaid.first()).toBeAttached({ timeout: 5000 });
      |                                                                                          ^ Error: expect(locator).toBeAttached() failed
  318 |       evidence.validationsPerformed.push("Verify that the menu 'open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs' exists in the DOM");
  319 |     });
  320 |     await test.step("Verify that the menu 'Home Postpaid Postpaid Plans' exists in the DOM", async () => {
  321 |       await expect(appPage.menuHomePostpaidPostpaidPlans.first()).toBeAttached({ timeout: 5000 });
  322 |       evidence.validationsPerformed.push("Verify that the menu 'Home Postpaid Postpaid Plans' exists in the DOM");
  323 |     });
  324 | 
  325 |     await test.step("Capture screenshot evidence", async () => {
  326 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Postpaid Plans with Unlimited Calls & Data | Vi India - Menu Verification", "www.myvi.in");
  327 |       evidence.screenshots.push(screenshotPath);
  328 |     });
  329 | 
  330 |     await attachExecutionSummary(evidence, page, testInfo);
  331 |   });
  332 | });
  333 | 
```