# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\WifiCallingOnViChooseVowifiForBetterVoiceQuality.spec.ts >> https://www.myvi.in/ - WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality - Regression Tests >> Verify that 3 Inputs are present on WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality @regression
- Location: tests\generated\www-myvi-in\WifiCallingOnViChooseVowifiForBetterVoiceQuality.spec.ts:142:3

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: locator('input[name="mobileviapp"]').first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for locator('input[name="mobileviapp"]').first()

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
- main:
  - 'heading "Vi WiFi Calling (VoWiFi): Make Crystal Clear Calls Over WiFi" [level=1]'
  - paragraph: Vi WiFi calling service is available to all Vi prepaid and postpaid customers in Delhi, Kolkata, Gujarat, Rajasthan, UP East, UP West, Punjab, Maharashtra & Goa, Mumbai, Haryana, West Bengal, Kerala, Karnataka,Tamil Nadu, Bihar, Andhra Pradesh, Telangana, and madhya pradesh & chhattisgarh.
  - img "Vi WiFi Calling"
- heading "Why Choose Vi WiFi Calling?" [level=2]
- img "always connected"
- heading "always connected" [level=6]
- paragraph: Get seamless and extended INDOOR coverage
- img "better voice quality"
- heading "better voice quality" [level=6]
- paragraph: Get clear call quality with no call drops at home or office while connected to a WiFi
- img "call anywhere"
- heading "call anywhere" [level=6]
- paragraph: Make calls anywhere as long as your have WiFi connectivity
- img "no app required"
- heading "no app required" [level=6]
- paragraph: Simply use your Vi mobile to make or receive voice calls while connected on any WiFi
- heading "How to Set Up Vi WiFi Calling" [level=2]
- paragraph: "Make sure you have the following enabled to enjoy VI WiFi Calling:"
- list:
  - listitem: Upgrade your mobile OS to the latest version
  - listitem: Working WiFi.
  - listitem: Supported handset.
  - listitem: Active Vi 5G-Ready SIM (4G SIM is 5G-Ready).
  - listitem: Voice over WiFi enabled in your phone settings
- heading "compatible handsets" [level=3]
- text: select brand
- combobox:
  - option "select brand"
  - option "Apple"
  - option "Oneplus"
  - option "OPPO"
  - option "Realme"
  - option "Samsung"
  - option "Vivo"
  - option "Xiaomi"
  - option "Tecno"
  - option "Asus"
  - option "Nothing"
  - option "Nokia"
  - option "Motorola"
  - option "Micromax"
  - option "Lava"
  - option "Itel"
  - option "Infinix"
- heading "Vi WiFi Calling frequently asked questions" [level=2]
- text: who can avail the Vi Wifi Calling service?
- img "Expand"
- paragraph: This service is currently available to all Vi prepaid and postpaid customers in Delhi, Kolkata, Gujarat, Rajasthan, UP East, UP West, Punjab, Maharashtra & Goa, Mumbai, Haryana, West Bengal, Kerala, Karnataka, Tamil Nadu, Bihar, and madhya pradesh & chhattisgarh.. We will be extending this service in other states shortly.
- text: what are the charges applicable for using the Vi wifi calling service?
- img "Expand"
- paragraph: Voice Calls made with Vi Wifi Calling will be charged as per your tariff plan.
- paragraph
- paragraph:
  - text: "For Example : If you are on an"
  - link "unlimited plan":
    - /url: https://www.myvi.in/prepaid/unlimited-calls-and-data-plans
  - text: /pack then you will not be charged for voice call. However if you are on a non–unlimited plan/pack then the charging will be as per the base tariff of your plan/pack.
- paragraph: Pls note - the calls made with Vi wifi calling will use WiFi data from your broadband provider.
- text: how do I know if my device is compatible for vi wifi calling?
- img "Expand"
- paragraph: Please refer to the list of devices mentioned above in the “compatible handsets” section. We are continuously adding more devices to make Vi Wifi Calling more accessible.
- text: how do I know that my Vi Wifi Calling is activated?
- img "Expand"
- paragraph: If you have Volte service then Vi Wifi Calling is already enabled for your connection.
- paragraph
- paragraph: While making a voice call, you will see Vi Wifi Calling icon on the top bar of the screen, indicating Vi Wifi Calling is activated. Pls note that your Handset needs to support Vi Wifi Calling
- text: what do I need to do to start using Vi Wifi Calling services?
- img "Expand"
- list:
  - listitem: Connect to WiFi with high-speed internet connection
  - listitem: A WiFi enabled smartphone with latest software updated
  - listitem:
    - link "5G-Ready SIM (4G SIM is 5G-Ready)":
      - /url: https://www.myvi.in/new-connection/buy-prepaid-sim-connection-online
    - text: with Volte Service enabled
  - listitem: Wi-Fi Calling switch should be on
  - listitem: For a seamless experience pls keep both VoLTE and Wi-Fi Calling switched on.
- text: do I need to keep VoLTE switched on to make a Wi-Fi Call?
- img "Expand"
- paragraph:
  - text: Yes, You need to keep both
  - link "VoLTE":
    - /url: https://www.myvi.in/vi-volte-4g-hd-voice-calls
  - text: and Wi-Fi Calling switched on.
- text: my friend does not have a phone that supports Vi WiFi calls. can I still make calls to him/her using Vi WiFi calling service?
- img "Expand"
- paragraph: Yes, you can make voice calls using Vi WiFi Calling service to any local, National, international number
- text: can I use Vi WiFi Calling while on national or international roaming?
- img "Expand"
- paragraph: No. Currently Vi WiFi Calling service is available only in Delhi, Kolkata, Gujarat, Rajasthan, UP East, UP West, Punjab, Maharashtra & Goa, Mumbai, Haryana, West Bengal, Kerala, Karnataka, Tamil Nadu, Bihar., and madhya pradesh & chhattisgarh. Hence roaming calls are also restricted to these regions only
- text: i am a Dual SIM customer. can I still use Vi Wifi Calling?
- img "Expand"
- paragraph: Yes, You can. All you need to do is enable Vi Wifi Calling on the Vi SIM via the phone settings.
- text: will I be able to use Vi Wifi Calling if I put the handset on Airplane mode?
- img "Expand"
- paragraph: No. VI Wi-Fi Calling service will not work if the phone on airplane mode.
- text: is signal strength critical to Vi Wifi Calling services?
- img "Expand"
- paragraph: Vi Wifi Calling service is dependent on the WiFi strength, so network signal strength would not be critical for using the services
- text: can I use Vi Wifi Calling calling for making International calls (ISD)?
- img "Expand"
- paragraph: Yes, Vi Wifi Calling Calling can be used to make an international call to a foreign country.
- paragraph:
  - text: Vi WiFi
  - link "Terms and Conditions":
    - /url: https://www.myvi.in/content/dam/vodafoneideadigital/StaticPages/consumerimages/Vi-WiFi/Terms_and_Conditions_Wifi_Calling_19Nov.docx
- navigation "breadcrumb":
  - list:
    - listitem:
      - link "Home":
        - /url: /
    - listitem:
      - link "Vi WiFi Calling":
        - /url: /vi-wifi-calling
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
- paragraph:
  - text: Explore Vi App
  - img
```

# Test source

```ts
  61  |       suite: "Regression Test Suite",
  62  |       browser: testInfo.project.name || 'chromium',
  63  |       pageName: "WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality",
  64  |       pageUrl: "https://www.myvi.in/vi-wifi-calling",
  65  |       testObjective: "Verify Heading elements are present",
  66  |     });
  67  | 
  68  |     await test.step("Verify that the heading 'Vi WiFi Calling (VoWiFi): Make Crystal Clear Calls Over WiFi' exists in the DOM", async () => {
  69  |       await expect(appPage.headingViWifiCallingVowifiMakeCrystalClearCallsOverWifi.first()).toBeAttached({ timeout: 5000 });
  70  |       evidence.validationsPerformed.push("Verify that the heading 'Vi WiFi Calling (VoWiFi): Make Crystal Clear Calls Over WiFi' exists in the DOM");
  71  |     });
  72  |     await test.step("Verify that the heading 'Why Choose Vi WiFi Calling?' exists in the DOM", async () => {
  73  |       await expect(appPage.headingWhyChooseViWifiCalling.first()).toBeAttached({ timeout: 5000 });
  74  |       evidence.validationsPerformed.push("Verify that the heading 'Why Choose Vi WiFi Calling?' exists in the DOM");
  75  |     });
  76  |     await test.step("Verify that the heading 'always connected' exists in the DOM", async () => {
  77  |       await expect(appPage.headingAlwaysConnected.first()).toBeAttached({ timeout: 5000 });
  78  |       evidence.validationsPerformed.push("Verify that the heading 'always connected' exists in the DOM");
  79  |     });
  80  |     await test.step("Verify that the heading 'better voice quality' exists in the DOM", async () => {
  81  |       await expect(appPage.headingBetterVoiceQuality.first()).toBeAttached({ timeout: 5000 });
  82  |       evidence.validationsPerformed.push("Verify that the heading 'better voice quality' exists in the DOM");
  83  |     });
  84  |     await test.step("Verify that the heading 'call anywhere' exists in the DOM", async () => {
  85  |       await expect(appPage.headingCallAnywhere.first()).toBeAttached({ timeout: 5000 });
  86  |       evidence.validationsPerformed.push("Verify that the heading 'call anywhere' exists in the DOM");
  87  |     });
  88  | 
  89  |     await test.step("Capture screenshot evidence", async () => {
  90  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality - Heading Verification", "www.myvi.in");
  91  |       evidence.screenshots.push(screenshotPath);
  92  |     });
  93  | 
  94  |     await attachExecutionSummary(evidence, page, testInfo);
  95  |   });
  96  |   test("Verify that 93 Links are present on WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality @regression", async ({ page }, testInfo) => {
  97  |     await label('suite', "Regression Test Suite");
  98  |     await label('url', "https://www.myvi.in/");
  99  |     await label('domain', "www.myvi.in");
  100 |     await feature("WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality");
  101 |     await story("Verify Link elements are present");
  102 |     await severity("minor");
  103 |     await tag("regression");
  104 | 
  105 |     const evidence = createEvidence({
  106 |       application: "www.myvi.in",
  107 |       suite: "Regression Test Suite",
  108 |       browser: testInfo.project.name || 'chromium',
  109 |       pageName: "WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality",
  110 |       pageUrl: "https://www.myvi.in/vi-wifi-calling",
  111 |       testObjective: "Verify Link elements are present",
  112 |     });
  113 | 
  114 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  115 |       await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
  116 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  117 |     });
  118 |     await test.step("Verify that the link 'unlimited plan' exists in the DOM", async () => {
  119 |       await expect(appPage.linkUnlimitedPlan.first()).toBeAttached({ timeout: 5000 });
  120 |       evidence.validationsPerformed.push("Verify that the link 'unlimited plan' exists in the DOM");
  121 |     });
  122 |     await test.step("Verify that the link '5G-Ready SIM (4G SIM is 5G-Ready)' exists in the DOM", async () => {
  123 |       await expect(appPage.link5gReadySim4gSimIs5gReady.first()).toBeAttached({ timeout: 5000 });
  124 |       evidence.validationsPerformed.push("Verify that the link '5G-Ready SIM (4G SIM is 5G-Ready)' exists in the DOM");
  125 |     });
  126 |     await test.step("Verify that the link 'VoLTE' exists in the DOM", async () => {
  127 |       await expect(appPage.linkVolte.first()).toBeAttached({ timeout: 5000 });
  128 |       evidence.validationsPerformed.push("Verify that the link 'VoLTE' exists in the DOM");
  129 |     });
  130 |     await test.step("Verify that the link 'Terms and Conditions' exists in the DOM", async () => {
  131 |       await expect(appPage.linkTermsAndConditions.first()).toBeAttached({ timeout: 5000 });
  132 |       evidence.validationsPerformed.push("Verify that the link 'Terms and Conditions' exists in the DOM");
  133 |     });
  134 | 
  135 |     await test.step("Capture screenshot evidence", async () => {
  136 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality - Link Verification", "www.myvi.in");
  137 |       evidence.screenshots.push(screenshotPath);
  138 |     });
  139 | 
  140 |     await attachExecutionSummary(evidence, page, testInfo);
  141 |   });
  142 |   test("Verify that 3 Inputs are present on WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality @regression", async ({ page }, testInfo) => {
  143 |     await label('suite', "Regression Test Suite");
  144 |     await label('url', "https://www.myvi.in/");
  145 |     await label('domain', "www.myvi.in");
  146 |     await feature("WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality");
  147 |     await story("Verify Input elements are present");
  148 |     await severity("minor");
  149 |     await tag("regression");
  150 | 
  151 |     const evidence = createEvidence({
  152 |       application: "www.myvi.in",
  153 |       suite: "Regression Test Suite",
  154 |       browser: testInfo.project.name || 'chromium',
  155 |       pageName: "WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality",
  156 |       pageUrl: "https://www.myvi.in/vi-wifi-calling",
  157 |       testObjective: "Verify Input elements are present",
  158 |     });
  159 | 
  160 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
> 161 |       await expect(appPage.inputMobileviapp.first()).toBeAttached({ timeout: 5000 });
      |                                                      ^ Error: expect(locator).toBeAttached() failed
  162 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  163 |     });
  164 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  165 |       await expect(appPage.inputDeskviapp.first()).toBeAttached({ timeout: 5000 });
  166 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  167 |     });
  168 | 
  169 |     await test.step("Capture screenshot evidence", async () => {
  170 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality - Input Verification", "www.myvi.in");
  171 |       evidence.screenshots.push(screenshotPath);
  172 |     });
  173 | 
  174 |     await attachExecutionSummary(evidence, page, testInfo);
  175 |   });
  176 |   test("Verify that 3 Menus are present on WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality @regression", async ({ page }, testInfo) => {
  177 |     await label('suite', "Regression Test Suite");
  178 |     await label('url', "https://www.myvi.in/");
  179 |     await label('domain', "www.myvi.in");
  180 |     await feature("WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality");
  181 |     await story("Verify Menu elements are present");
  182 |     await severity("minor");
  183 |     await tag("regression");
  184 | 
  185 |     const evidence = createEvidence({
  186 |       application: "www.myvi.in",
  187 |       suite: "Regression Test Suite",
  188 |       browser: testInfo.project.name || 'chromium',
  189 |       pageName: "WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality",
  190 |       pageUrl: "https://www.myvi.in/vi-wifi-calling",
  191 |       testObjective: "Verify Menu elements are present",
  192 |     });
  193 | 
  194 |     await test.step("Verify that the menu 'PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service' exists in the DOM", async () => {
  195 |       await expect(appPage.menuPrepaidpostpaidnewConnectioninternationalRoaming5gottsMor.first()).toBeAttached({ timeout: 5000 });
  196 |       evidence.validationsPerformed.push("Verify that the menu 'PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service' exists in the DOM");
  197 |     });
  198 |     await test.step("Verify that the menu 'BusinessInvestorsSign in' exists in the DOM", async () => {
  199 |       await expect(appPage.menuBusinessinvestorssignIn.first()).toBeAttached({ timeout: 5000 });
  200 |       evidence.validationsPerformed.push("Verify that the menu 'BusinessInvestorsSign in' exists in the DOM");
  201 |     });
  202 |     await test.step("Verify that the menu 'HomeVi WiFi Calling' exists in the DOM", async () => {
  203 |       await expect(appPage.menuHomeviWifiCalling.first()).toBeAttached({ timeout: 5000 });
  204 |       evidence.validationsPerformed.push("Verify that the menu 'HomeVi WiFi Calling' exists in the DOM");
  205 |     });
  206 | 
  207 |     await test.step("Capture screenshot evidence", async () => {
  208 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality - Menu Verification", "www.myvi.in");
  209 |       evidence.screenshots.push(screenshotPath);
  210 |     });
  211 | 
  212 |     await attachExecutionSummary(evidence, page, testInfo);
  213 |   });
  214 | });
  215 | 
```