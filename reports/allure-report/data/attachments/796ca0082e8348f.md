# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\RegisterForPostpaidEbillOnlineVi.spec.ts >> https://www.myvi.in/ - Register for Postpaid EBill Online | Vi - Regression Tests >> Verify that 3 Headings are present on Register for Postpaid EBill Online | Vi @regression
- Location: tests\generated\www-myvi-in\RegisterForPostpaidEbillOnlineVi.spec.ts:50:3

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: getByRole('heading', { name: 'hey, just to make sure it’s you' }).first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'hey, just to make sure it’s you' }).first()

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
- heading "E-bill registration" [level=1]
- heading "Activate Ebill. Go Paperless, Go Green" [level=2]
- textbox "Postpaid Mobile Number"
- img "img"
- paragraph: You'll be joining more than 1 million people in saving trees
- button "register" [disabled]
- navigation "breadcrumb":
  - list:
    - listitem:
      - link "Home":
        - /url: https://www.myvi.in
    - listitem:
      - link "Online E-Bill Registration Form":
        - /url: /online-ebill-registration
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
  1   | import { test, expect } from '@playwright/test';
  2   | import { label, severity, feature, story, tag } from 'allure-js-commons';
  3   | import { RegisterForPostpaidEbillOnlineVi } from '../../../pages/generated/www-myvi-in/RegisterForPostpaidEbillOnlineVi.page';
  4   | import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
  5   | import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';
  6   | 
  7   | test.describe("https://www.myvi.in/ - Register for Postpaid EBill Online | Vi - Regression Tests", () => {
  8   |   let appPage: RegisterForPostpaidEbillOnlineVi;
  9   | 
  10  |   test.beforeEach(async ({ page }) => {
  11  |     appPage = new RegisterForPostpaidEbillOnlineVi(page);
  12  |     await appPage.open();
  13  |   });
  14  | 
  15  |   test("Verify that Register for Postpaid EBill Online | Vi loads successfully @regression", async ({ page }, testInfo) => {
  16  |     await label('suite', "Regression Test Suite");
  17  |     await label('url', "https://www.myvi.in/");
  18  |     await label('domain', "www.myvi.in");
  19  |     await feature("Register for Postpaid EBill Online | Vi");
  20  |     await story("Verify page loads for regression");
  21  |     await severity("minor");
  22  |     await tag("regression");
  23  | 
  24  |     const evidence = createEvidence({
  25  |       application: "www.myvi.in",
  26  |       suite: "Regression Test Suite",
  27  |       browser: testInfo.project.name || 'chromium',
  28  |       pageName: "Register for Postpaid EBill Online | Vi",
  29  |       pageUrl: "https://www.myvi.in/online-ebill-registration",
  30  |       testObjective: "Verify page loads for regression",
  31  |     });
  32  | 
  33  |     await test.step("Open URL: https://www.myvi.in/", async () => {
  34  |       await appPage.open();
  35  |       evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
  36  |     });
  37  | 
  38  |     await test.step("Verify the URL is correct", async () => {
  39  |       await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/online\-ebill\-registration/);
  40  |       evidence.validationsPerformed.push("Verified URL is correct");
  41  |     });
  42  | 
  43  |     await test.step("Capture screenshot evidence", async () => {
  44  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Register for Postpaid EBill Online | Vi - Final Evidence", "www.myvi.in");
  45  |       evidence.screenshots.push(screenshotPath);
  46  |     });
  47  | 
  48  |     await attachExecutionSummary(evidence, page, testInfo);
  49  |   });
  50  |   test("Verify that 3 Headings are present on Register for Postpaid EBill Online | Vi @regression", async ({ page }, testInfo) => {
  51  |     await label('suite', "Regression Test Suite");
  52  |     await label('url', "https://www.myvi.in/");
  53  |     await label('domain', "www.myvi.in");
  54  |     await feature("Register for Postpaid EBill Online | Vi");
  55  |     await story("Verify Heading elements are present");
  56  |     await severity("minor");
  57  |     await tag("regression");
  58  | 
  59  |     const evidence = createEvidence({
  60  |       application: "www.myvi.in",
  61  |       suite: "Regression Test Suite",
  62  |       browser: testInfo.project.name || 'chromium',
  63  |       pageName: "Register for Postpaid EBill Online | Vi",
  64  |       pageUrl: "https://www.myvi.in/online-ebill-registration",
  65  |       testObjective: "Verify Heading elements are present",
  66  |     });
  67  | 
  68  |     await test.step("Verify that the heading 'E-bill registration' exists in the DOM", async () => {
  69  |       await expect(appPage.headingEBillRegistration.first()).toBeAttached({ timeout: 5000 });
  70  |       evidence.validationsPerformed.push("Verify that the heading 'E-bill registration' exists in the DOM");
  71  |     });
  72  |     await test.step("Verify that the heading 'Activate Ebill. Go Paperless, Go Green' exists in the DOM", async () => {
  73  |       await expect(appPage.headingActivateEbillGoPaperlessGoGreen.first()).toBeAttached({ timeout: 5000 });
  74  |       evidence.validationsPerformed.push("Verify that the heading 'Activate Ebill. Go Paperless, Go Green' exists in the DOM");
  75  |     });
  76  |     await test.step("Verify that the heading 'hey, just to make sure it’s you' exists in the DOM", async () => {
> 77  |       await expect(appPage.headingHeyJustToMakeSureItSYou.first()).toBeAttached({ timeout: 5000 });
      |                                                                    ^ Error: expect(locator).toBeAttached() failed
  78  |       evidence.validationsPerformed.push("Verify that the heading 'hey, just to make sure it’s you' exists in the DOM");
  79  |     });
  80  | 
  81  |     await test.step("Capture screenshot evidence", async () => {
  82  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Register for Postpaid EBill Online | Vi - Heading Verification", "www.myvi.in");
  83  |       evidence.screenshots.push(screenshotPath);
  84  |     });
  85  | 
  86  |     await attachExecutionSummary(evidence, page, testInfo);
  87  |   });
  88  |   test("Verify that 161 Links are present on Register for Postpaid EBill Online | Vi @regression", async ({ page }, testInfo) => {
  89  |     await label('suite', "Regression Test Suite");
  90  |     await label('url', "https://www.myvi.in/");
  91  |     await label('domain', "www.myvi.in");
  92  |     await feature("Register for Postpaid EBill Online | Vi");
  93  |     await story("Verify Link elements are present");
  94  |     await severity("minor");
  95  |     await tag("regression");
  96  | 
  97  |     const evidence = createEvidence({
  98  |       application: "www.myvi.in",
  99  |       suite: "Regression Test Suite",
  100 |       browser: testInfo.project.name || 'chromium',
  101 |       pageName: "Register for Postpaid EBill Online | Vi",
  102 |       pageUrl: "https://www.myvi.in/online-ebill-registration",
  103 |       testObjective: "Verify Link elements are present",
  104 |     });
  105 | 
  106 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  107 |       await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
  108 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  109 |     });
  110 |     await test.step("Verify that the link 'Recharge' exists in the DOM", async () => {
  111 |       await expect(appPage.linkRecharge.first()).toBeAttached({ timeout: 5000 });
  112 |       evidence.validationsPerformed.push("Verify that the link 'Recharge' exists in the DOM");
  113 |     });
  114 |     await test.step("Verify that the link 'Bill Pay' exists in the DOM", async () => {
  115 |       await expect(appPage.linkBillPay.first()).toBeAttached({ timeout: 5000 });
  116 |       evidence.validationsPerformed.push("Verify that the link 'Bill Pay' exists in the DOM");
  117 |     });
  118 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  119 |       await expect(appPage.link3.first()).toBeAttached({ timeout: 5000 });
  120 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  121 |     });
  122 |     await test.step("Verify that the link 'open in Vi app' exists in the DOM", async () => {
  123 |       await expect(appPage.linkOpenInViApp.first()).toBeAttached({ timeout: 5000 });
  124 |       evidence.validationsPerformed.push("Verify that the link 'open in Vi app' exists in the DOM");
  125 |     });
  126 | 
  127 |     await test.step("Capture screenshot evidence", async () => {
  128 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Register for Postpaid EBill Online | Vi - Link Verification", "www.myvi.in");
  129 |       evidence.screenshots.push(screenshotPath);
  130 |     });
  131 | 
  132 |     await attachExecutionSummary(evidence, page, testInfo);
  133 |   });
  134 |   test("Verify that 16 Buttons are present on Register for Postpaid EBill Online | Vi @regression", async ({ page }, testInfo) => {
  135 |     await label('suite', "Regression Test Suite");
  136 |     await label('url', "https://www.myvi.in/");
  137 |     await label('domain', "www.myvi.in");
  138 |     await feature("Register for Postpaid EBill Online | Vi");
  139 |     await story("Verify Button elements are present");
  140 |     await severity("minor");
  141 |     await tag("regression");
  142 | 
  143 |     const evidence = createEvidence({
  144 |       application: "www.myvi.in",
  145 |       suite: "Regression Test Suite",
  146 |       browser: testInfo.project.name || 'chromium',
  147 |       pageName: "Register for Postpaid EBill Online | Vi",
  148 |       pageUrl: "https://www.myvi.in/online-ebill-registration",
  149 |       testObjective: "Verify Button elements are present",
  150 |     });
  151 | 
  152 |     await test.step("Verify that the button 'Prepaid' exists in the DOM", async () => {
  153 |       await expect(appPage.buttonPrepaid.first()).toBeAttached({ timeout: 5000 });
  154 |       evidence.validationsPerformed.push("Verify that the button 'Prepaid' exists in the DOM");
  155 |     });
  156 |     await test.step("Verify that the button 'Postpaid' exists in the DOM", async () => {
  157 |       await expect(appPage.buttonPostpaid.first()).toBeAttached({ timeout: 5000 });
  158 |       evidence.validationsPerformed.push("Verify that the button 'Postpaid' exists in the DOM");
  159 |     });
  160 |     await test.step("Verify that the button 'New Connection' exists in the DOM", async () => {
  161 |       await expect(appPage.buttonNewConnection.first()).toBeAttached({ timeout: 5000 });
  162 |       evidence.validationsPerformed.push("Verify that the button 'New Connection' exists in the DOM");
  163 |     });
  164 |     await test.step("Verify that the button 'OTTs & More' exists in the DOM", async () => {
  165 |       await expect(appPage.buttonOttsMore.first()).toBeAttached({ timeout: 5000 });
  166 |       evidence.validationsPerformed.push("Verify that the button 'OTTs & More' exists in the DOM");
  167 |     });
  168 |     await test.step("Verify that the button 'Help' exists in the DOM", async () => {
  169 |       await expect(appPage.buttonHelp.first()).toBeAttached({ timeout: 5000 });
  170 |       evidence.validationsPerformed.push("Verify that the button 'Help' exists in the DOM");
  171 |     });
  172 | 
  173 |     await test.step("Capture screenshot evidence", async () => {
  174 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Register for Postpaid EBill Online | Vi - Button Verification", "www.myvi.in");
  175 |       evidence.screenshots.push(screenshotPath);
  176 |     });
  177 | 
```