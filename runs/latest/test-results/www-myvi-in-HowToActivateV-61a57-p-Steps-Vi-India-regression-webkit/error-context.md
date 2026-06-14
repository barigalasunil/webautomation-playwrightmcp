# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\HowToActivateViEsimCardEasyOnlineSetupStepsViIndia.spec.ts >> https://www.myvi.in/ - How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India - Regression Tests >> Verify that 1 Menu is present on How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India @regression
- Location: tests\generated\www-myvi-in\HowToActivateViEsimCardEasyOnlineSetupStepsViIndia.spec.ts:294:3

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
- toolbar:
  - listbox:
    - option "selfcare-features smart usage, connect with smart watch directly":
      - img "selfcare-features"
      - paragraph: smart usage, connect with smart watch directly
  - tablist:
    - listitem:
      - button "4"
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
  213 |     });
  214 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  215 |       await expect(appPage.inputQ.first()).toBeAttached({ timeout: 5000 });
  216 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
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
  228 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India - Input Verification", "www.myvi.in");
  229 |       evidence.screenshots.push(screenshotPath);
  230 |     });
  231 | 
  232 |     await attachExecutionSummary(evidence, page, testInfo);
  233 |   });
  234 |   test("Verify that 1 Form is present on How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India @regression", async ({ page }, testInfo) => {
  235 |     await label('suite', "Regression Test Suite");
  236 |     await label('url', "https://www.myvi.in/");
  237 |     await label('domain', "www.myvi.in");
  238 |     await feature("How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India");
  239 |     await story("Verify Form elements are present");
  240 |     await severity("minor");
  241 |     await tag("regression");
  242 | 
  243 |     const evidence = createEvidence({
  244 |       application: "www.myvi.in",
  245 |       suite: "Regression Test Suite",
  246 |       browser: testInfo.project.name || 'chromium',
  247 |       pageName: "How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India",
  248 |       pageUrl: "https://www.myvi.in/esim-activation",
  249 |       testObjective: "Verify Form elements are present",
  250 |     });
  251 | 
  252 |     await test.step("Verify that the form 'Form' exists in the DOM", async () => {
  253 |       await expect(appPage.form0.first()).toBeAttached({ timeout: 5000 });
  254 |       evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
  255 |     });
  256 | 
  257 |     await test.step("Capture screenshot evidence", async () => {
  258 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India - Form Verification", "www.myvi.in");
  259 |       evidence.screenshots.push(screenshotPath);
  260 |     });
  261 | 
  262 |     await attachExecutionSummary(evidence, page, testInfo);
  263 |   });
  264 |   test("Verify that 1 Table is present on How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India @regression", async ({ page }, testInfo) => {
  265 |     await label('suite', "Regression Test Suite");
  266 |     await label('url', "https://www.myvi.in/");
  267 |     await label('domain', "www.myvi.in");
  268 |     await feature("How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India");
  269 |     await story("Verify Table elements are present");
  270 |     await severity("minor");
  271 |     await tag("regression");
  272 | 
  273 |     const evidence = createEvidence({
  274 |       application: "www.myvi.in",
  275 |       suite: "Regression Test Suite",
  276 |       browser: testInfo.project.name || 'chromium',
  277 |       pageName: "How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India",
  278 |       pageUrl: "https://www.myvi.in/esim-activation",
  279 |       testObjective: "Verify Table elements are present",
  280 |     });
  281 | 
  282 |     await test.step("Verify that the table 'Data table' exists in the DOM", async () => {
  283 |       await expect(appPage.table0.first()).toBeAttached({ timeout: 5000 });
  284 |       evidence.validationsPerformed.push("Verify that the table 'Data table' exists in the DOM");
  285 |     });
  286 | 
  287 |     await test.step("Capture screenshot evidence", async () => {
  288 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India - Table Verification", "www.myvi.in");
  289 |       evidence.screenshots.push(screenshotPath);
  290 |     });
  291 | 
  292 |     await attachExecutionSummary(evidence, page, testInfo);
  293 |   });
  294 |   test("Verify that 1 Menu is present on How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India @regression", async ({ page }, testInfo) => {
  295 |     await label('suite', "Regression Test Suite");
  296 |     await label('url', "https://www.myvi.in/");
  297 |     await label('domain', "www.myvi.in");
  298 |     await feature("How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India");
  299 |     await story("Verify Menu elements are present");
  300 |     await severity("minor");
  301 |     await tag("regression");
  302 | 
  303 |     const evidence = createEvidence({
  304 |       application: "www.myvi.in",
  305 |       suite: "Regression Test Suite",
  306 |       browser: testInfo.project.name || 'chromium',
  307 |       pageName: "How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India",
  308 |       pageUrl: "https://www.myvi.in/esim-activation",
  309 |       testObjective: "Verify Menu elements are present",
  310 |     });
  311 | 
  312 |     await test.step("Verify that the menu 'open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs' exists in the DOM", async () => {
> 313 |       await expect(appPage.menuOpenInViAppSignInSignInDashboardMyAccountPrepaid.first()).toBeAttached({ timeout: 5000 });
      |                                                                                          ^ Error: expect(locator).toBeAttached() failed
  314 |       evidence.validationsPerformed.push("Verify that the menu 'open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs' exists in the DOM");
  315 |     });
  316 | 
  317 |     await test.step("Capture screenshot evidence", async () => {
  318 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India - Menu Verification", "www.myvi.in");
  319 |       evidence.screenshots.push(screenshotPath);
  320 |     });
  321 | 
  322 |     await attachExecutionSummary(evidence, page, testInfo);
  323 |   });
  324 | });
  325 | 
```