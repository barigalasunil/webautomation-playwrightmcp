# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\HowToActivateViEsimCardEasyOnlineSetupStepsViIndia.spec.ts >> https://www.myvi.in/ - How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India - Regression Tests >> Verify that 170 Links are present on How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India @regression
- Location: tests\generated\www-myvi-in\HowToActivateViEsimCardEasyOnlineSetupStepsViIndia.spec.ts:96:3

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: locator('a[href="https://www.myvi.in/esim-activation#"]').first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for locator('a[href="https://www.myvi.in/esim-activation#"]').first()

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
- toolbar:
  - listbox:
    - option "selfcare-features enhanced security, cannot get misplaced or stolen":
      - img "selfcare-features"
      - paragraph: enhanced security, cannot get misplaced or stolen
  - tablist:
    - listitem:
      - button "3"
- paragraph: experience the power of the Vi eSIM
- paragraph: going SIM less is seamless
- button "How to get started?"
- paragraph
- heading "how to get started?" [level=2]
- paragraph: check device compatibility
- paragraph
- paragraph: smartphone
- paragraph: smartwatch
- paragraph: tablet
- paragraph
- paragraph: select brand
- paragraph: select model
- paragraph: request eSIM for smartphone
- iframe
- text: request eSIM via Vi app 1
- paragraph: Initiate your eSIM request via Vi app
- paragraph: Login to the Vi app
- paragraph: Navigate to Help > Raise a service request > Activate eSIM
- text: "2"
- paragraph: Select device type (Android / iOS) and Enter EID
- paragraph: Select "Same device " / "another device"
- paragraph: Incase of another device select "Android/ios" and incase of same device enter the 32 digit EID
- paragraph: Locate your 32-digit EID from device settings or dial *#06#. input of 32 digit EID number should be for the device on which you wish to activate eSIM.
- paragraph: "** Ensure EID entered is correct as a wrong EID will lead to failure of profile activation"
- text: "3"
- paragraph: Verify the OTP on your registered phone number
- paragraph: Enter the OTP received to proceed with the request.
- text: "4"
- paragraph: Share confirmation SMS “eSIMY” to 199 within 15 min
- paragraph: This step has been added to avoid all forms of fraud and safeguard your eSIM
- text: "5"
- paragraph: Download eSIM profile
- paragraph: Upon successful positive consent via SMS, an eSIM profile will be triggered on your device.
- paragraph: You can download the eSIM profile after 15 minutes by going to your device Settings>Add eSIM option and choose “VI INDIA” plan. (Refer to FAQ section for handset-wise steps)
- paragraph: Before downloading the profile or Scanning the QR, ensure the phone is connected to stable/strong Wi-Fi
- paragraph: After switching from a physical SIM to an eSIM, activate the new eSIM profile, remove the physical SIM and restart your device.
- text: "6"
- paragraph: Exclusions
- paragraph: Vi eSIM is not yet available for customers in HP,JK,OR,NE and ASSAM
- button "request eSIM via Vi app"
- text: request eSIM via SMS eSIM device to device transfer via Vi app things to know while getting eSIM
- heading "what is Vi eSIM?" [level=3]
- img
- paragraph: The smarter SIM for digital lifestyles. eSIM is a digital SIM in your device.
- img
- paragraph: no more handling tiny chips or physical cards.
- img
- paragraph: Activate, switch, and manage your number seamlessly.
- heading "frequently asked questions" [level=2]
- heading "what is eSIM?" [level=3]
- heading "what does it mean when a device has a dual SIM with an eSIM?" [level=3]
- heading "will the customer be required to take any specific plan for eSIM?" [level=3]
- heading "what are the benefits if I move to eSIM?" [level=3]
- heading "which are the eligible devices on eSIM?" [level=3]
- button "see more"
- link "live-chat-icon":
  - /url: /help-support/faqs?chatbotopen=true
  - img "live-chat-icon"
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
  15  |   test("Verify that How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India loads successfully @regression", async ({ page }, testInfo) => {
  16  |     await label('suite', "Regression Test Suite");
  17  |     await label('url', "https://www.myvi.in/");
  18  |     await label('domain', "www.myvi.in");
  19  |     await feature("How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India");
  20  |     await story("Verify page loads for regression");
  21  |     await severity("minor");
  22  |     await tag("regression");
  23  | 
  24  |     const evidence = createEvidence({
  25  |       application: "www.myvi.in",
  26  |       suite: "Regression Test Suite",
  27  |       browser: testInfo.project.name || 'chromium',
  28  |       pageName: "How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India",
  29  |       pageUrl: "https://www.myvi.in/esim-activation",
  30  |       testObjective: "Verify page loads for regression",
  31  |     });
  32  | 
  33  |     await test.step("Open URL: https://www.myvi.in/", async () => {
  34  |       await appPage.open();
  35  |       evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
  36  |     });
  37  | 
  38  |     await test.step("Verify the URL is correct", async () => {
  39  |       await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/esim\-activation/);
  40  |       evidence.validationsPerformed.push("Verified URL is correct");
  41  |     });
  42  | 
  43  |     await test.step("Capture screenshot evidence", async () => {
  44  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India - Final Evidence", "www.myvi.in");
  45  |       evidence.screenshots.push(screenshotPath);
  46  |     });
  47  | 
  48  |     await attachExecutionSummary(evidence, page, testInfo);
  49  |   });
  50  |   test("Verify that 53 Headings are present on How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India @regression", async ({ page }, testInfo) => {
  51  |     await label('suite', "Regression Test Suite");
  52  |     await label('url', "https://www.myvi.in/");
  53  |     await label('domain', "www.myvi.in");
  54  |     await feature("How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India");
  55  |     await story("Verify Heading elements are present");
  56  |     await severity("minor");
  57  |     await tag("regression");
  58  | 
  59  |     const evidence = createEvidence({
  60  |       application: "www.myvi.in",
  61  |       suite: "Regression Test Suite",
  62  |       browser: testInfo.project.name || 'chromium',
  63  |       pageName: "How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India",
  64  |       pageUrl: "https://www.myvi.in/esim-activation",
  65  |       testObjective: "Verify Heading elements are present",
  66  |     });
  67  | 
  68  |     await test.step("Verify that the heading 'how to get started?' exists in the DOM", async () => {
  69  |       await expect(appPage.headingHowToGetStarted.first()).toBeAttached({ timeout: 5000 });
  70  |       evidence.validationsPerformed.push("Verify that the heading 'how to get started?' exists in the DOM");
  71  |     });
  72  |     await test.step("Verify that the heading 'what is Vi eSIM?' exists in the DOM", async () => {
  73  |       await expect(appPage.headingWhatIsViEsim.first()).toBeAttached({ timeout: 5000 });
  74  |       evidence.validationsPerformed.push("Verify that the heading 'what is Vi eSIM?' exists in the DOM");
  75  |     });
  76  |     await test.step("Verify that the heading 'frequently asked questions' exists in the DOM", async () => {
  77  |       await expect(appPage.headingFrequentlyAskedQuestions.first()).toBeAttached({ timeout: 5000 });
  78  |       evidence.validationsPerformed.push("Verify that the heading 'frequently asked questions' exists in the DOM");
  79  |     });
  80  |     await test.step("Verify that the heading 'what is eSIM?' exists in the DOM", async () => {
  81  |       await expect(appPage.headingWhatIsEsim.first()).toBeAttached({ timeout: 5000 });
  82  |       evidence.validationsPerformed.push("Verify that the heading 'what is eSIM?' exists in the DOM");
  83  |     });
  84  |     await test.step("Verify that the heading 'what does it mean when a device has a dual SIM with an eSIM?' exists in the DOM", async () => {
  85  |       await expect(appPage.headingWhatDoesItMeanWhenADeviceHasADualSimWithAnEsim.first()).toBeAttached({ timeout: 5000 });
  86  |       evidence.validationsPerformed.push("Verify that the heading 'what does it mean when a device has a dual SIM with an eSIM?' exists in the DOM");
  87  |     });
  88  | 
  89  |     await test.step("Capture screenshot evidence", async () => {
  90  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India - Heading Verification", "www.myvi.in");
  91  |       evidence.screenshots.push(screenshotPath);
  92  |     });
  93  | 
  94  |     await attachExecutionSummary(evidence, page, testInfo);
  95  |   });
  96  |   test("Verify that 170 Links are present on How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India @regression", async ({ page }, testInfo) => {
  97  |     await label('suite', "Regression Test Suite");
  98  |     await label('url', "https://www.myvi.in/");
  99  |     await label('domain', "www.myvi.in");
  100 |     await feature("How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India");
  101 |     await story("Verify Link elements are present");
  102 |     await severity("minor");
  103 |     await tag("regression");
  104 | 
  105 |     const evidence = createEvidence({
  106 |       application: "www.myvi.in",
  107 |       suite: "Regression Test Suite",
  108 |       browser: testInfo.project.name || 'chromium',
  109 |       pageName: "How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India",
  110 |       pageUrl: "https://www.myvi.in/esim-activation",
  111 |       testObjective: "Verify Link elements are present",
  112 |     });
  113 | 
  114 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
> 115 |       await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      |                                           ^ Error: expect(locator).toBeAttached() failed
  116 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  117 |     });
  118 |     await test.step("Verify that the link 'Recharge' exists in the DOM", async () => {
  119 |       await expect(appPage.linkRecharge.first()).toBeAttached({ timeout: 5000 });
  120 |       evidence.validationsPerformed.push("Verify that the link 'Recharge' exists in the DOM");
  121 |     });
  122 |     await test.step("Verify that the link 'Bill Pay' exists in the DOM", async () => {
  123 |       await expect(appPage.linkBillPay.first()).toBeAttached({ timeout: 5000 });
  124 |       evidence.validationsPerformed.push("Verify that the link 'Bill Pay' exists in the DOM");
  125 |     });
  126 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  127 |       await expect(appPage.link3.first()).toBeAttached({ timeout: 5000 });
  128 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  129 |     });
  130 |     await test.step("Verify that the link 'open in Vi app' exists in the DOM", async () => {
  131 |       await expect(appPage.linkOpenInViApp.first()).toBeAttached({ timeout: 5000 });
  132 |       evidence.validationsPerformed.push("Verify that the link 'open in Vi app' exists in the DOM");
  133 |     });
  134 | 
  135 |     await test.step("Capture screenshot evidence", async () => {
  136 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India - Link Verification", "www.myvi.in");
  137 |       evidence.screenshots.push(screenshotPath);
  138 |     });
  139 | 
  140 |     await attachExecutionSummary(evidence, page, testInfo);
  141 |   });
  142 |   test("Verify that 25 Buttons are present on How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India @regression", async ({ page }, testInfo) => {
  143 |     await label('suite', "Regression Test Suite");
  144 |     await label('url', "https://www.myvi.in/");
  145 |     await label('domain', "www.myvi.in");
  146 |     await feature("How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India");
  147 |     await story("Verify Button elements are present");
  148 |     await severity("minor");
  149 |     await tag("regression");
  150 | 
  151 |     const evidence = createEvidence({
  152 |       application: "www.myvi.in",
  153 |       suite: "Regression Test Suite",
  154 |       browser: testInfo.project.name || 'chromium',
  155 |       pageName: "How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India",
  156 |       pageUrl: "https://www.myvi.in/esim-activation",
  157 |       testObjective: "Verify Button elements are present",
  158 |     });
  159 | 
  160 |     await test.step("Verify that the button 'Prepaid' exists in the DOM", async () => {
  161 |       await expect(appPage.buttonPrepaid.first()).toBeAttached({ timeout: 5000 });
  162 |       evidence.validationsPerformed.push("Verify that the button 'Prepaid' exists in the DOM");
  163 |     });
  164 |     await test.step("Verify that the button 'Postpaid' exists in the DOM", async () => {
  165 |       await expect(appPage.buttonPostpaid.first()).toBeAttached({ timeout: 5000 });
  166 |       evidence.validationsPerformed.push("Verify that the button 'Postpaid' exists in the DOM");
  167 |     });
  168 |     await test.step("Verify that the button 'New Connection' exists in the DOM", async () => {
  169 |       await expect(appPage.buttonNewConnection.first()).toBeAttached({ timeout: 5000 });
  170 |       evidence.validationsPerformed.push("Verify that the button 'New Connection' exists in the DOM");
  171 |     });
  172 |     await test.step("Verify that the button 'OTTs & More' exists in the DOM", async () => {
  173 |       await expect(appPage.buttonOttsMore.first()).toBeAttached({ timeout: 5000 });
  174 |       evidence.validationsPerformed.push("Verify that the button 'OTTs & More' exists in the DOM");
  175 |     });
  176 |     await test.step("Verify that the button 'Help' exists in the DOM", async () => {
  177 |       await expect(appPage.buttonHelp.first()).toBeAttached({ timeout: 5000 });
  178 |       evidence.validationsPerformed.push("Verify that the button 'Help' exists in the DOM");
  179 |     });
  180 | 
  181 |     await test.step("Capture screenshot evidence", async () => {
  182 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India - Button Verification", "www.myvi.in");
  183 |       evidence.screenshots.push(screenshotPath);
  184 |     });
  185 | 
  186 |     await attachExecutionSummary(evidence, page, testInfo);
  187 |   });
  188 |   test("Verify that 40 Inputs are present on How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India @regression", async ({ page }, testInfo) => {
  189 |     await label('suite', "Regression Test Suite");
  190 |     await label('url', "https://www.myvi.in/");
  191 |     await label('domain', "www.myvi.in");
  192 |     await feature("How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India");
  193 |     await story("Verify Input elements are present");
  194 |     await severity("minor");
  195 |     await tag("regression");
  196 | 
  197 |     const evidence = createEvidence({
  198 |       application: "www.myvi.in",
  199 |       suite: "Regression Test Suite",
  200 |       browser: testInfo.project.name || 'chromium',
  201 |       pageName: "How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India",
  202 |       pageUrl: "https://www.myvi.in/esim-activation",
  203 |       testObjective: "Verify Input elements are present",
  204 |     });
  205 | 
  206 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  207 |       await expect(appPage.inputCookiepopupselect.first()).toBeAttached({ timeout: 5000 });
  208 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  209 |     });
  210 |     await test.step("Verify that the input 'Search' exists in the DOM", async () => {
  211 |       await expect(appPage.inputSearch.first()).toBeAttached({ timeout: 5000 });
  212 |       evidence.validationsPerformed.push("Verify that the input 'Search' exists in the DOM");
  213 |     });
  214 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  215 |       await expect(appPage.inputQ.first()).toBeAttached({ timeout: 5000 });
```