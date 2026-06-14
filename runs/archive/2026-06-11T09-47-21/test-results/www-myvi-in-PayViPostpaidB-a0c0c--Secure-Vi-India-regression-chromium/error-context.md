# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\PayViPostpaidBillOnlineQuickSecureViIndia.spec.ts >> https://www.myvi.in/ - Pay Vi Postpaid Bill Online - Quick & Secure | Vi India - Regression Tests >> Verify that 3 Menus are present on Pay Vi Postpaid Bill Online - Quick & Secure | Vi India @regression
- Location: tests\generated\www-myvi-in\PayViPostpaidBillOnlineQuickSecureViIndia.spec.ts:252:3

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: getByRole('navigation', { name: 'PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service' }).first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for getByRole('navigation', { name: 'PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service' }).first()

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
- navigation "breadcrumb":
  - list:
    - listitem:
      - link "Home":
        - /url: /
    - listitem:
      - link "Postpaid":
        - /url: /postpaid/quick-online-bill-payment
    - listitem:
      - link "Mobile bill payment":
        - /url: /
- img "post_billPay_imgBox"
- heading "Vi Postpaid Bill Payment" [level=1]
- heading "quick and easy bill payments in a few steps!" [level=3]
- textbox
- text: enter mobile number*
- textbox "enter amount" [disabled]
- text: fetch bill
- button "pay now" [disabled]
- img "icon-left"
- paragraph: manage auto pay
- img "icon-right"
- img "icon-left"
- paragraph: pay bill for inactive number
- img "icon-right"
- img "Bill Payment Desktop"
- img "backline_img"
- img "semicircle_img"
- img "left-icon"
- heading "get a new postpaid connection or MNP" [level=3]
- paragraph: easily pay bill online and stay worry-free.
- link "view more":
  - /url: https://www.myvi.in/new-connection/buy-postpaid-sim-connection-online
- img "left-icon"
- heading "pay and manage your utility bills" [level=3]
- paragraph: now pay and manage electricity and other bills easily, all in one place
- link "view more":
  - /url: https://www.myvi.in/account/login
- heading "frequently asked questions" [level=2]
- heading "How to do postpaid bill payments online?" [level=3]
- img "Collapse"
- heading "How to check my postpaid mobile bill/view my current outstanding postpaid bill amount?" [level=3]
- img "Collapse"
- heading "Will there be any charges for delayed postpaid phone bill payment?" [level=3]
- img "Collapse"
- heading "Can I enable autopay for postpaid mobile bill payments?" [level=3]
- img "Collapse"
- heading "How long does it take to process the postpaid bill payment?" [level=3]
- img "Collapse"
- button "See More"
- contentinfo:
  - img "Vi Logo"
  - heading "Vodafone Idea Limited" [level=3]
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
  - heading "about Vi" [level=4]
  - link "About Us":
    - /url: https://www.myvi.in/about-us/home
  - link "Vodafone Idea Corp":
    - /url: https://www.vodafoneidea.com/
  - link "Vi Foundation":
    - /url: https://www.myvi.in/about-us/vodafoneidea-foundation
  - link "Vodafone Group":
    - /url: https://www.vodafone.com/
  - link "Aditya Birla Group":
    - /url: https://adityabirla.com/home
  - link "Investor Relations":
    - /url: https://www.myvi.in/investors/investors-support
  - link "News & Media":
    - /url: https://www.myvi.in/vodafone-idea/press-releases
  - link "Career":
    - /url: https://www.myvi.in/careers
  - link "Vi App":
    - /url: https://viapp.onelink.me/bSC3/viapp1
  - link "Vi Stores Near Me":
    - /url: https://stores.myvi.in/?UTM_SOURCE=myviHome
  - link "Vi Business":
    - /url: https://www.myvi.in/business
  - link "Home Broadband":
    - /url: https://youbroadband.in/?soc_id=194&campaign_source=%3Cweb%3E&campaign_name=%3CVi%3E
  - link "GIGAnet":
    - /url: https://www.myvi.in/giganet
  - link "Vi VoLTE":
    - /url: https://www.myvi.in/vi-volte-4g-hd-voice-calls
  - link "Go Green":
    - /url: https://www.myvi.in/online-ebill-registration
  - link "eSIM":
    - /url: https://www.myvi.in/esim-activation
  - link "WiFi Calling":
    - /url: https://www.myvi.in/vi-wifi-calling
  - link "5G":
    - /url: https://www.myvi.in/5g-network
  - link "Blog":
    - /url: /blog
  - heading "more from Vi" [level=4]
  - link "Postpaid Connection":
    - /url: https://www.myvi.in/new-connection/buy-new-4g-sim-card-online
  - link "Prepaid Connection":
    - /url: https://www.myvi.in/new-connection/buy-prepaid-sim-connection-online
  - link "Port Number to Vi / MNP":
    - /url: https://www.myvi.in/new-connection/mobile-number-portability-mnp-online
  - link "Free SIM Delivery":
    - /url: https://www.myvi.in/new-connection/vi-free-sim-home-delivery
  - link "Track your SIM Delivery":
    - /url: https://www.myvi.in/new-connection/track-your-sim-online
  - link "Fancy Number":
    - /url: https://www.myvi.in/new-connection/choose-your-fancy-mobile-numbers-online
  - link "Individual Plans":
    - /url: https://www.myvi.in/postpaid/vi-postpaid-plans
  - link "Family Plans":
    - /url: https://www.myvi.in/postpaid/family-postpaid-plans
  - link "Prepaid to Postpaid":
    - /url: https://www.myvi.in/new-connection/buy-postpaid-sim-connection-online?utm_source=Myviweb&utm_campaign=MainMenu
  - link "Best Postpaid Plans":
    - /url: https://www.myvi.in/postpaid/vi-postpaid-plans
  - link "Best Prepaid Plans":
    - /url: /prepaid/best-prepaid-plans
  - link "Hero Unlimited Plans":
    - /url: /prepaid/hero-unlimited-and-weekend-data-rollover
  - link "Unlimited Plans":
    - /url: /prepaid/unlimited-calls-and-data-plans
  - link "Talktime Plans":
    - /url: /prepaid/recharge-talktime-top-up-plans
  - link "Data Plans":
    - /url: /prepaid/mobile-data-packs
  - link "SMS Packs":
    - /url: /prepaid/sms-packs
  - link "Caller Tunes Packs":
    - /url: /prepaid/caller-tunes
  - link "Value Added Services":
    - /url: https://www.myvi.in/value-added-services
  - link "Service Validity Plans":
    - /url: /prepaid/service-validity-recharge-plans
  - link "JioHotstar Plans":
    - /url: prepaid/jiohotstar-subscription-recharge-plans
  - link "Amazon Prime Plans":
    - /url: /prepaid/amazon-prime-membership-recharge
  - link "Sony LIV offers":
    - /url: /prepaid/sonyliv-subscription-recharge-plans
  - link "Online Recharge":
    - /url: /prepaid/online-mobile-recharge
  - link "Postpaid Bill Payment":
    - /url: https://www.myvi.in/postpaid/quick-online-bill-payment
  - link "Vi Shop - Seller Portal":
    - /url: https://www.vishop.myvi.in/
  - link "Vi Video Vault":
    - /url: https://www.myvi.in/videos
  - heading "explore on Vi app" [level=4]
  - link "Vi Games":
    - /url: https://www.myvi.in/vi-games-app
  - link "Vi Movies & TV":
    - /url: https://viapp.onelink.me/bSC3/viappmtv
  - link "Vi Hero Unlimited":
    - /url: /prepaid/hero-unlimited-and-weekend-data-rollover
  - link "Vi WiFi Calling":
    - /url: https://www.myvi.in/vi-wifi-calling
  - link "International Roaming":
    - /url: https://www.myvi.in/international-roaming-packs
  - link "Callertunes":
    - /url: https://viapp.onelink.me/bSC3/viapp1
  - link "Order Prepaid SIM":
    - /url: https://www.myvi.in/new-connection/buy-prepaid-sim-connection-online
  - link "Order Postpaid SIM":
    - /url: https://www.myvi.in/new-connection/buy-postpaid-sim-connection-online
  - link "Order VIP Number":
    - /url: https://www.myvi.in/new-connection/choose-your-fancy-mobile-numbers-online
  - link "Port to Vi":
    - /url: https://www.myvi.in/new-connection/mobile-number-portability-mnp-online
  - link "Recharge for Self/Others":
    - /url: /prepaid/online-mobile-recharge
  - link "Pay Bill for Self/Others":
    - /url: https://www.myvi.in/postpaid/quick-online-bill-payment
  - link "Cashback Offers":
    - /url: /prepaid/recharge-cashback-offers
  - link "Help & Support":
    - /url: https://www.myvi.in/help-support/faqs
  - link "My Account":
    - /url: https://www.myvi.in/vi-app
  - link "Vi Shop":
    - /url: https://www.myvi.in/vi-shop-offers
  - link "Vi Prepaid Autopay":
    - /url: https://www.myvi.in/auto-pay-recharge
  - heading "regulatory & quick access" [level=4]
  - link "Telemarketing Registration":
    - /url: https://www.myvi.in/tele-marketing
  - link "Privacy Policy":
    - /url: https://www.myvi.in/privacy-policy
  - link "Terms of Service":
    - /url: https://www.myvi.in/terms-of-use
  - link "Notices":
    - /url: https://www.myvi.in/regulatory-notices
  - link "Prepaid TRAI mandate":
    - /url: https://www.myvi.in/prepaid/tariff
  - link "Postpaid TRAI mandate":
    - /url: https://www.myvi.in/postpaid/tariff
  - link "Warning & Fraudulent":
    - /url: https://www.myvi.in/about-us/warning-and-fraudulent
  - link "Security Awareness":
    - /url: https://www.myvi.in/parental-control
  - link "DND Complaints":
    - /url: https://www.myvi.in/dnd-complaints
  - link "DND Registration":
    - /url: https://www.myvi.in/dnd
  - link "Disaster Management":
    - /url: https://www.myvi.in/content/dam/vodafoneideadigital/StaticPages/consumerimages/misc/Disaster_Management.pdf
  - link "Responsible Disclosure Policy":
    - /url: https://www.myvi.in/Responsible-Disclosure-Policy
  - link "Network Coverage":
    - /url: https://www.myvi.in/vicoverage/
  - link "Register for Online Refund":
    - /url: https://www.myvi.in/postpaid/neft-details-for-refund
  - link "Network Troubleshooting":
    - /url: https://www.myvi.in/help-support/basic-mobile-network-troubleshooting-steps
  - link "Block SIM Online":
    - /url: https://www.myvi.in/block-your-sim
  - link "UPI Recharge":
    - /url: /prepaid/upi-recharge
  - link "Postpaid ISD Call Rates":
    - /url: https://www.myvi.in/Postpaid/isd-call-rates
  - link "Prepaid ISD Call Rates":
    - /url: /prepaid/isd-call-rates
  - link "Mobile Internet":
    - /url: https://www.myvi.in/mobile-internet
  - link "Sitemap":
    - /url: https://www.myvi.in/sitemap
  - link "VIBSL":
    - /url: https://www.myvi.in/vibsl
  - link "Terms & Conditions - Prepaid":
    - /url: https://www.myvi.in/prepaid-tnc
  - text: This website uses own third-party cookies.Find out more about usage in our
  - link "Privacy Policy":
    - /url: https://www.myvi.in/privacy-policy
  - text: "page. Copyright Reserved with Vodafone Idea Limited (formerly Idea Cellular Limited). Vodafone Idea Limited (Formerly Idea Cellular Limited), An Aditya Birla Group & Vodafone partnership, Suman Towers, Plot No.18, Sector 11, Gandhinagar – 382011, Gujarat.CIN L32100GJ1996PLC030976, T: +91-79 6671 4000, F: +91-79 2323 2251"
- alert
```

# Test source

```ts
  171 |       evidence.screenshots.push(screenshotPath);
  172 |     });
  173 | 
  174 |     await attachExecutionSummary(evidence, page, testInfo);
  175 |   });
  176 |   test("Verify that 4 Inputs are present on Pay Vi Postpaid Bill Online - Quick & Secure | Vi India @regression", async ({ page }, testInfo) => {
  177 |     await label('suite', "Regression Test Suite");
  178 |     await label('url', "https://www.myvi.in/");
  179 |     await label('domain', "www.myvi.in");
  180 |     await feature("Pay Vi Postpaid Bill Online - Quick & Secure | Vi India");
  181 |     await story("Verify Input elements are present");
  182 |     await severity("minor");
  183 |     await tag("regression");
  184 | 
  185 |     const evidence = createEvidence({
  186 |       application: "www.myvi.in",
  187 |       suite: "Regression Test Suite",
  188 |       browser: testInfo.project.name || 'chromium',
  189 |       pageName: "Pay Vi Postpaid Bill Online - Quick & Secure | Vi India",
  190 |       pageUrl: "https://www.myvi.in/postpaid/quick-online-bill-payment",
  191 |       testObjective: "Verify Input elements are present",
  192 |     });
  193 | 
  194 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  195 |       await expect(appPage.inputParamdetails.first()).toBeAttached({ timeout: 5000 });
  196 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  197 |     });
  198 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  199 |       await expect(appPage.inputMobile.first()).toBeAttached({ timeout: 5000 });
  200 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  201 |     });
  202 |     await test.step("Verify that the input 'enter amount' exists in the DOM", async () => {
  203 |       await expect(appPage.inputEnterAmount.first()).toBeAttached({ timeout: 5000 });
  204 |       evidence.validationsPerformed.push("Verify that the input 'enter amount' exists in the DOM");
  205 |     });
  206 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  207 |       await expect(appPage.inputParamdetails1.first()).toBeAttached({ timeout: 5000 });
  208 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  209 |     });
  210 | 
  211 |     await test.step("Capture screenshot evidence", async () => {
  212 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Pay Vi Postpaid Bill Online - Quick & Secure | Vi India - Input Verification", "www.myvi.in");
  213 |       evidence.screenshots.push(screenshotPath);
  214 |     });
  215 | 
  216 |     await attachExecutionSummary(evidence, page, testInfo);
  217 |   });
  218 |   test("Verify that 2 Forms are present on Pay Vi Postpaid Bill Online - Quick & Secure | Vi India @regression", async ({ page }, testInfo) => {
  219 |     await label('suite', "Regression Test Suite");
  220 |     await label('url', "https://www.myvi.in/");
  221 |     await label('domain', "www.myvi.in");
  222 |     await feature("Pay Vi Postpaid Bill Online - Quick & Secure | Vi India");
  223 |     await story("Verify Form elements are present");
  224 |     await severity("minor");
  225 |     await tag("regression");
  226 | 
  227 |     const evidence = createEvidence({
  228 |       application: "www.myvi.in",
  229 |       suite: "Regression Test Suite",
  230 |       browser: testInfo.project.name || 'chromium',
  231 |       pageName: "Pay Vi Postpaid Bill Online - Quick & Secure | Vi India",
  232 |       pageUrl: "https://www.myvi.in/postpaid/quick-online-bill-payment",
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
  246 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Pay Vi Postpaid Bill Online - Quick & Secure | Vi India - Form Verification", "www.myvi.in");
  247 |       evidence.screenshots.push(screenshotPath);
  248 |     });
  249 | 
  250 |     await attachExecutionSummary(evidence, page, testInfo);
  251 |   });
  252 |   test("Verify that 3 Menus are present on Pay Vi Postpaid Bill Online - Quick & Secure | Vi India @regression", async ({ page }, testInfo) => {
  253 |     await label('suite', "Regression Test Suite");
  254 |     await label('url', "https://www.myvi.in/");
  255 |     await label('domain', "www.myvi.in");
  256 |     await feature("Pay Vi Postpaid Bill Online - Quick & Secure | Vi India");
  257 |     await story("Verify Menu elements are present");
  258 |     await severity("minor");
  259 |     await tag("regression");
  260 | 
  261 |     const evidence = createEvidence({
  262 |       application: "www.myvi.in",
  263 |       suite: "Regression Test Suite",
  264 |       browser: testInfo.project.name || 'chromium',
  265 |       pageName: "Pay Vi Postpaid Bill Online - Quick & Secure | Vi India",
  266 |       pageUrl: "https://www.myvi.in/postpaid/quick-online-bill-payment",
  267 |       testObjective: "Verify Menu elements are present",
  268 |     });
  269 | 
  270 |     await test.step("Verify that the menu 'PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service' exists in the DOM", async () => {
> 271 |       await expect(appPage.menuPrepaidpostpaidnewConnectioninternationalRoaming5gottsMor.first()).toBeAttached({ timeout: 5000 });
      |                                                                                                   ^ Error: expect(locator).toBeAttached() failed
  272 |       evidence.validationsPerformed.push("Verify that the menu 'PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service' exists in the DOM");
  273 |     });
  274 |     await test.step("Verify that the menu 'BusinessInvestorsSign in' exists in the DOM", async () => {
  275 |       await expect(appPage.menuBusinessinvestorssignIn.first()).toBeAttached({ timeout: 5000 });
  276 |       evidence.validationsPerformed.push("Verify that the menu 'BusinessInvestorsSign in' exists in the DOM");
  277 |     });
  278 |     await test.step("Verify that the menu 'HomePostpaidMobile bill payment' exists in the DOM", async () => {
  279 |       await expect(appPage.menuHomepostpaidmobileBillPayment.first()).toBeAttached({ timeout: 5000 });
  280 |       evidence.validationsPerformed.push("Verify that the menu 'HomePostpaidMobile bill payment' exists in the DOM");
  281 |     });
  282 | 
  283 |     await test.step("Capture screenshot evidence", async () => {
  284 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Pay Vi Postpaid Bill Online - Quick & Secure | Vi India - Menu Verification", "www.myvi.in");
  285 |       evidence.screenshots.push(screenshotPath);
  286 |     });
  287 | 
  288 |     await attachExecutionSummary(evidence, page, testInfo);
  289 |   });
  290 | });
  291 | 
```