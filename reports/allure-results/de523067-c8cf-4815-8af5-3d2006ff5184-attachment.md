# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\ViUtilityBillPaymentsWaterGasElectricityMore.spec.ts >> https://www.myvi.in/ - Vi Utility Bill Payments | Water, Gas, Electricity & More - Regression Tests >> Verify that 172 Links are present on Vi Utility Bill Payments | Water, Gas, Electricity & More @regression
- Location: tests\generated\www-myvi-in\ViUtilityBillPaymentsWaterGasElectricityMore.spec.ts:92:3

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: locator('a[href="https://www.myvi.in/utilities#"]').first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for locator('a[href="https://www.myvi.in/utilities#"]').first()

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
- heading "pay bills & recharges in seconds" [level=1]
- paragraph: safe, fast & rewarding!
- img
- heading "bill pay" [level=2]
- paragraph: zero platform fees!
- link "Electricity":
  - /url: javascript:selfcareLoginPopup('/selfcare/utility/electricity','/utilities/electricity-bill-payment')
  - img
  - paragraph: Electricity
- link "Water":
  - /url: javascript:selfcareLoginPopup('/selfcare/utility/water','/utilities/water-bill-payment')
  - img
  - paragraph: Water
- link "Piped Gas":
  - /url: javascript:selfcareLoginPopup('/selfcare/utility/piped-gas','/utilities/gas-bill-payment')
  - img
  - paragraph: Piped Gas
- link "Broadband":
  - /url: javascript:selfcareLoginPopup('/selfcare/utility/broadband','/utilities/broadband-bill-payment')
  - img
  - paragraph: Broadband
- link "Insurance":
  - /url: javascript:selfcareLoginPopup('/selfcare/utility/insurance','/utilities/pay-insurance-bill')
  - img
  - paragraph: Insurance
- link "Landline":
  - /url: javascript:selfcareLoginPopup('/selfcare/utility/landline','/utilities/landline-bill-payment')
  - img
  - paragraph: Landline
- link "Loan Repayment":
  - /url: javascript:selfcareLoginPopup('/selfcare/utility/loan-repayment','/utilities/loan-payment')
  - img
  - paragraph: Loan Repayment
- link "LPG Cylinder":
  - /url: javascript:selfcareLoginPopup('/selfcare/utility/lpg-cylinder','/utilities/lpg-gas-cylinder-booking')
  - img
  - paragraph: LPG Cylinder
- link "Postpaid Bill Pay":
  - /url: javascript:selfcareLoginPopup('/selfcare/utility/mobile-postpaid','/utilities/mobile-postpaid-bill-payment')
  - img
  - paragraph: Postpaid Bill Pay
- link "Credit Card":
  - /url: javascript:selfcareLoginPopup('/selfcare/utility/credit-card','/utilities/credit-card-bill-payment')
  - img
  - paragraph: Credit Card
- heading "recharges" [level=2]
- paragraph: super fast recharges
- link "FASTag":
  - /url: javascript:selfcareLoginPopup('/selfcare/utility/fastag','/utilities/fastag-recharge')
  - img
  - paragraph: FASTag
- link "Vi Prepaid":
  - /url: /prepaid/online-mobile-recharge
  - img
  - paragraph: Vi Prepaid
- link "DTH":
  - /url: javascript:selfcareLoginPopup('/selfcare/utility/dth','/utilities/dth-recharge')
  - img
  - paragraph: DTH
- separator
- heading "get the Vi benefit with bill payment and recharges" [level=2]
- img "benefit_icon"
- paragraph: convenient payments anytime anywhere
- img "benefit_icon"
- paragraph: wide range of services
- img "benefit_icon"
- paragraph: secureand fast transactions
- img
- paragraph: get exciting offers & benefits with Vi app
- link "download Vi app":
  - /url: https://vil.onelink.me/ugIF/eec1b4c0
  - button "download Vi app"
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
  11  |     appPage = new ViUtilityBillPaymentsWaterGasElectricityMore(page);
  12  |     await appPage.open();
  13  |   });
  14  | 
  15  |   test("Verify that Vi Utility Bill Payments | Water, Gas, Electricity & More loads successfully @regression", async ({ page }, testInfo) => {
  16  |     await label('suite', "Regression Test Suite");
  17  |     await label('url', "https://www.myvi.in/");
  18  |     await label('domain', "www.myvi.in");
  19  |     await feature("Vi Utility Bill Payments | Water, Gas, Electricity & More");
  20  |     await story("Verify page loads for regression");
  21  |     await severity("minor");
  22  |     await tag("regression");
  23  | 
  24  |     const evidence = createEvidence({
  25  |       application: "www.myvi.in",
  26  |       suite: "Regression Test Suite",
  27  |       browser: testInfo.project.name || 'chromium',
  28  |       pageName: "Vi Utility Bill Payments | Water, Gas, Electricity & More",
  29  |       pageUrl: "https://www.myvi.in/utilities",
  30  |       testObjective: "Verify page loads for regression",
  31  |     });
  32  | 
  33  |     await test.step("Open URL: https://www.myvi.in/", async () => {
  34  |       await appPage.open();
  35  |       evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
  36  |     });
  37  | 
  38  |     await test.step("Verify the URL is correct", async () => {
  39  |       await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/utilities/);
  40  |       evidence.validationsPerformed.push("Verified URL is correct");
  41  |     });
  42  | 
  43  |     await test.step("Capture screenshot evidence", async () => {
  44  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Utility Bill Payments | Water, Gas, Electricity & More - Final Evidence", "www.myvi.in");
  45  |       evidence.screenshots.push(screenshotPath);
  46  |     });
  47  | 
  48  |     await attachExecutionSummary(evidence, page, testInfo);
  49  |   });
  50  |   test("Verify that 4 Headings are present on Vi Utility Bill Payments | Water, Gas, Electricity & More @regression", async ({ page }, testInfo) => {
  51  |     await label('suite', "Regression Test Suite");
  52  |     await label('url', "https://www.myvi.in/");
  53  |     await label('domain', "www.myvi.in");
  54  |     await feature("Vi Utility Bill Payments | Water, Gas, Electricity & More");
  55  |     await story("Verify Heading elements are present");
  56  |     await severity("minor");
  57  |     await tag("regression");
  58  | 
  59  |     const evidence = createEvidence({
  60  |       application: "www.myvi.in",
  61  |       suite: "Regression Test Suite",
  62  |       browser: testInfo.project.name || 'chromium',
  63  |       pageName: "Vi Utility Bill Payments | Water, Gas, Electricity & More",
  64  |       pageUrl: "https://www.myvi.in/utilities",
  65  |       testObjective: "Verify Heading elements are present",
  66  |     });
  67  | 
  68  |     await test.step("Verify that the heading 'pay bills & recharges in seconds' exists in the DOM", async () => {
  69  |       await expect(appPage.headingPayBillsRechargesInSeconds.first()).toBeAttached({ timeout: 5000 });
  70  |       evidence.validationsPerformed.push("Verify that the heading 'pay bills & recharges in seconds' exists in the DOM");
  71  |     });
  72  |     await test.step("Verify that the heading 'bill pay' exists in the DOM", async () => {
  73  |       await expect(appPage.headingBillPay.first()).toBeAttached({ timeout: 5000 });
  74  |       evidence.validationsPerformed.push("Verify that the heading 'bill pay' exists in the DOM");
  75  |     });
  76  |     await test.step("Verify that the heading 'recharges' exists in the DOM", async () => {
  77  |       await expect(appPage.headingRecharges.first()).toBeAttached({ timeout: 5000 });
  78  |       evidence.validationsPerformed.push("Verify that the heading 'recharges' exists in the DOM");
  79  |     });
  80  |     await test.step("Verify that the heading 'get the Vi benefit with bill payment and recharges' exists in the DOM", async () => {
  81  |       await expect(appPage.headingGetTheViBenefitWithBillPaymentAndRecharges.first()).toBeAttached({ timeout: 5000 });
  82  |       evidence.validationsPerformed.push("Verify that the heading 'get the Vi benefit with bill payment and recharges' exists in the DOM");
  83  |     });
  84  | 
  85  |     await test.step("Capture screenshot evidence", async () => {
  86  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Utility Bill Payments | Water, Gas, Electricity & More - Heading Verification", "www.myvi.in");
  87  |       evidence.screenshots.push(screenshotPath);
  88  |     });
  89  | 
  90  |     await attachExecutionSummary(evidence, page, testInfo);
  91  |   });
  92  |   test("Verify that 172 Links are present on Vi Utility Bill Payments | Water, Gas, Electricity & More @regression", async ({ page }, testInfo) => {
  93  |     await label('suite', "Regression Test Suite");
  94  |     await label('url', "https://www.myvi.in/");
  95  |     await label('domain', "www.myvi.in");
  96  |     await feature("Vi Utility Bill Payments | Water, Gas, Electricity & More");
  97  |     await story("Verify Link elements are present");
  98  |     await severity("minor");
  99  |     await tag("regression");
  100 | 
  101 |     const evidence = createEvidence({
  102 |       application: "www.myvi.in",
  103 |       suite: "Regression Test Suite",
  104 |       browser: testInfo.project.name || 'chromium',
  105 |       pageName: "Vi Utility Bill Payments | Water, Gas, Electricity & More",
  106 |       pageUrl: "https://www.myvi.in/utilities",
  107 |       testObjective: "Verify Link elements are present",
  108 |     });
  109 | 
  110 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
> 111 |       await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      |                                           ^ Error: expect(locator).toBeAttached() failed
  112 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  113 |     });
  114 |     await test.step("Verify that the link 'Recharge' exists in the DOM", async () => {
  115 |       await expect(appPage.linkRecharge.first()).toBeAttached({ timeout: 5000 });
  116 |       evidence.validationsPerformed.push("Verify that the link 'Recharge' exists in the DOM");
  117 |     });
  118 |     await test.step("Verify that the link 'Bill Pay' exists in the DOM", async () => {
  119 |       await expect(appPage.linkBillPay.first()).toBeAttached({ timeout: 5000 });
  120 |       evidence.validationsPerformed.push("Verify that the link 'Bill Pay' exists in the DOM");
  121 |     });
  122 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  123 |       await expect(appPage.link3.first()).toBeAttached({ timeout: 5000 });
  124 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  125 |     });
  126 |     await test.step("Verify that the link 'open in Vi app' exists in the DOM", async () => {
  127 |       await expect(appPage.linkOpenInViApp.first()).toBeAttached({ timeout: 5000 });
  128 |       evidence.validationsPerformed.push("Verify that the link 'open in Vi app' exists in the DOM");
  129 |     });
  130 | 
  131 |     await test.step("Capture screenshot evidence", async () => {
  132 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Utility Bill Payments | Water, Gas, Electricity & More - Link Verification", "www.myvi.in");
  133 |       evidence.screenshots.push(screenshotPath);
  134 |     });
  135 | 
  136 |     await attachExecutionSummary(evidence, page, testInfo);
  137 |   });
  138 |   test("Verify that 15 Buttons are present on Vi Utility Bill Payments | Water, Gas, Electricity & More @regression", async ({ page }, testInfo) => {
  139 |     await label('suite', "Regression Test Suite");
  140 |     await label('url', "https://www.myvi.in/");
  141 |     await label('domain', "www.myvi.in");
  142 |     await feature("Vi Utility Bill Payments | Water, Gas, Electricity & More");
  143 |     await story("Verify Button elements are present");
  144 |     await severity("minor");
  145 |     await tag("regression");
  146 | 
  147 |     const evidence = createEvidence({
  148 |       application: "www.myvi.in",
  149 |       suite: "Regression Test Suite",
  150 |       browser: testInfo.project.name || 'chromium',
  151 |       pageName: "Vi Utility Bill Payments | Water, Gas, Electricity & More",
  152 |       pageUrl: "https://www.myvi.in/utilities",
  153 |       testObjective: "Verify Button elements are present",
  154 |     });
  155 | 
  156 |     await test.step("Verify that the button 'Prepaid' exists in the DOM", async () => {
  157 |       await expect(appPage.buttonPrepaid.first()).toBeAttached({ timeout: 5000 });
  158 |       evidence.validationsPerformed.push("Verify that the button 'Prepaid' exists in the DOM");
  159 |     });
  160 |     await test.step("Verify that the button 'Postpaid' exists in the DOM", async () => {
  161 |       await expect(appPage.buttonPostpaid.first()).toBeAttached({ timeout: 5000 });
  162 |       evidence.validationsPerformed.push("Verify that the button 'Postpaid' exists in the DOM");
  163 |     });
  164 |     await test.step("Verify that the button 'New Connection' exists in the DOM", async () => {
  165 |       await expect(appPage.buttonNewConnection.first()).toBeAttached({ timeout: 5000 });
  166 |       evidence.validationsPerformed.push("Verify that the button 'New Connection' exists in the DOM");
  167 |     });
  168 |     await test.step("Verify that the button 'OTTs & More' exists in the DOM", async () => {
  169 |       await expect(appPage.buttonOttsMore.first()).toBeAttached({ timeout: 5000 });
  170 |       evidence.validationsPerformed.push("Verify that the button 'OTTs & More' exists in the DOM");
  171 |     });
  172 |     await test.step("Verify that the button 'Help' exists in the DOM", async () => {
  173 |       await expect(appPage.buttonHelp.first()).toBeAttached({ timeout: 5000 });
  174 |       evidence.validationsPerformed.push("Verify that the button 'Help' exists in the DOM");
  175 |     });
  176 | 
  177 |     await test.step("Capture screenshot evidence", async () => {
  178 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Utility Bill Payments | Water, Gas, Electricity & More - Button Verification", "www.myvi.in");
  179 |       evidence.screenshots.push(screenshotPath);
  180 |     });
  181 | 
  182 |     await attachExecutionSummary(evidence, page, testInfo);
  183 |   });
  184 |   test("Verify that 12 Inputs are present on Vi Utility Bill Payments | Water, Gas, Electricity & More @regression", async ({ page }, testInfo) => {
  185 |     await label('suite', "Regression Test Suite");
  186 |     await label('url', "https://www.myvi.in/");
  187 |     await label('domain', "www.myvi.in");
  188 |     await feature("Vi Utility Bill Payments | Water, Gas, Electricity & More");
  189 |     await story("Verify Input elements are present");
  190 |     await severity("minor");
  191 |     await tag("regression");
  192 | 
  193 |     const evidence = createEvidence({
  194 |       application: "www.myvi.in",
  195 |       suite: "Regression Test Suite",
  196 |       browser: testInfo.project.name || 'chromium',
  197 |       pageName: "Vi Utility Bill Payments | Water, Gas, Electricity & More",
  198 |       pageUrl: "https://www.myvi.in/utilities",
  199 |       testObjective: "Verify Input elements are present",
  200 |     });
  201 | 
  202 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  203 |       await expect(appPage.inputCookiepopupselect.first()).toBeAttached({ timeout: 5000 });
  204 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  205 |     });
  206 |     await test.step("Verify that the input 'Search' exists in the DOM", async () => {
  207 |       await expect(appPage.inputSearch.first()).toBeAttached({ timeout: 5000 });
  208 |       evidence.validationsPerformed.push("Verify that the input 'Search' exists in the DOM");
  209 |     });
  210 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  211 |       await expect(appPage.inputQ.first()).toBeAttached({ timeout: 5000 });
```