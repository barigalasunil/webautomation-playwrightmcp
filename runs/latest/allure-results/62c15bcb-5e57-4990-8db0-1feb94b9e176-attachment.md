# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\AllOttInOneAppOttSubscriptionPlansViMoviesTv.spec.ts >> https://www.myvi.in/ - All OTT in One App - OTT Subscription Plans | Vi Movies & TV - Regression Tests >> Verify that 2 Menus are present on All OTT in One App - OTT Subscription Plans | Vi Movies & TV @regression
- Location: tests\generated\www-myvi-in\AllOttInOneAppOttSubscriptionPlansViMoviesTv.spec.ts:302:3

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
- img "shadow-img"
- img "OTT Bundle Subscription"
- img "OTT Bundle Subscription"
- img "OTT Bundle Subscription"
- img "vimtv-logo"
- heading "All in One OTT App - unlock and watch 13+ OTTs in just one app!" [level=1]
- button "Explore plans starting @ 154"
- heading "latest releases at your fingertips" [level=2]
- button "Previous"
- listbox:
  - option "Maharani S4":
    - img "Maharani S4"
  - option "Lokah":
    - img "Lokah"
  - 'option "Rangbaaz: The Bihar Chapter"':
    - 'img "Rangbaaz: The Bihar Chapter"'
- button "Next"
- heading "trending OTT content recommendations" [level=2]
- toolbar:
  - listbox:
    - 'option "count Lokah (JioHotstar) count {properties.mainimagealt2} count {properties.mainimagealt3} count {properties.mainimagealt4}"':
      - img "count"
      - img "Lokah (JioHotstar)"
      - img "count"
      - 'img "{properties.mainimagealt2}"'
      - img "count"
      - 'img "{properties.mainimagealt3}"'
      - img "count"
      - 'img "{properties.mainimagealt4}"'
  - tablist:
    - listitem:
      - button "1"
- heading "catch the latest on 400+ live channels" [level=2]
- heading "watch content in 16+ languages" [level=2]
- tablist:
  - listitem:
    - link "हिंदी":
      - /url: "#mtvtab1"
  - listitem:
    - link "தமிழ்":
      - /url: "#mtvtab2"
  - listitem:
    - link "한국인":
      - /url: "#mtvtab3"
  - listitem:
    - link "English":
      - /url: "#mtvtab4"
  - listitem: +12 more
- tabpanel:
  - img "language-image"
  - img "language-image"
  - img "language-image"
  - img "language-image"
  - img "language-image"
- heading "watch anywhere, on any device" [level=2]
- img "All OTT Platforms in One App"
- heading "with one sign-in for 13+ OTTs" [level=2]
- img "OTT Bundle"
- img "Lottie animation":
  - img
- heading "cheaper than a movie ticket !" [level=2]
- list:
  - listitem:
    - link "Prepaid":
      - /url: "#mtvPrepaidBox"
  - listitem:
    - link "Postpaid":
      - /url: "#mtvPostpaidBox"
- toolbar:
  - button "Previous"
  - listbox:
    - option "20 OTTs + 6GB Data with ViMTV Plus vi-movies&tv ₹ 248 6 GB data 1 month validity Icon_Desktop TV + Mobiledevices Icon_Call no servicevalidity JioHotstar Zee5 Sony LIV Lionsgate Play Fancode + 15 icon-info Buy Now":
      - paragraph: 20 OTTs + 6GB Data with ViMTV Plus
      - img "vi-movies&tv"
      - paragraph: ₹ 248
      - paragraph: 6 GB data
      - paragraph: 1 month validity
      - img "Icon_Desktop"
      - paragraph: TV + Mobiledevices
      - img "Icon_Call"
      - paragraph: no servicevalidity
      - img "JioHotstar"
      - img "Zee5"
      - img "Sony LIV"
      - img "Lionsgate Play"
      - img "Fancode"
      - paragraph: + 15
      - img "icon-info"
      - button "Buy Now"
    - option "19 OTTs + 10GB Data with ViMTV Super vi-movies&tv ₹ 175 10 GB data 28 days validity Icon_Desktop TV + Mobiledevices Icon_Call no servicevalidity Sony LIV Zee5 ManoramaMAX Lionsgate Play Fancode + 14 icon-info Buy Now":
      - paragraph: 19 OTTs + 10GB Data with ViMTV Super
      - img "vi-movies&tv"
      - paragraph: ₹ 175
      - paragraph: 10 GB data
      - paragraph: 28 days validity
      - img "Icon_Desktop"
      - paragraph: TV + Mobiledevices
      - img "Icon_Call"
      - paragraph: no servicevalidity
      - img "Sony LIV"
      - img "Zee5"
      - img "ManoramaMAX"
      - img "Lionsgate Play"
      - img "Fancode"
      - paragraph: + 14
      - img "icon-info"
      - button "Buy Now"
  - button "Next"
  - tablist:
    - listitem:
      - button "1"
- img "close"
- img "close"
- img "mtv-logo"
- paragraph
- paragraph
- text: ₹
- paragraph
- paragraph
- img "no-service-validity"
- paragraph: terms of use
- paragraph
- button "Buy Now"
- img "close"
- img "close"
- img "connectedTV"
- paragraph: Activate ViMTV
- paragraph: Enter your mobile number to continue
- textbox "Enter your mobile number":
  - /placeholder: "Enter your mobile number "
- button "buy now" [disabled]
- paragraph: switch to postpaid
- img "connectedTV"
- paragraph: Activate ViMTV
- paragraph: Enter your mobile number to continue
- textbox "enter your mobile number"
- button "proceed" [disabled]
- paragraph: switch to prepaid
- heading "Frequently Asked Questions (FAQs)" [level=2]
- heading "General" [level=3]
- heading "What is Vi Movies & TV?" [level=3]
- heading "Where can I watch Vi Movies & TV?" [level=3]
- heading "How many devices can I log in at a time?" [level=3]
- heading "On how many devices / screens can I watch the same content at a time?" [level=3]
- heading "What are the charges to watch content on Vi Movies & TV?" [level=3]
- heading "Why do I get redirected outside the app when clicking some particular content?" [level=3]
- heading "Do I need to download 3rd partner OTT apps separately for content available on Vi Movies & TV" [level=3]
- heading "Can I login on third party apps directly?" [level=3]
- heading "What are the benefits that, as a user, I will get from the Vi Movies & TV service?" [level=3]
- heading "How many Live TV channels are there on Vi Movies & TV?" [level=3]
- heading "Where can I find Vi Movies & TV app?" [level=3]
- heading "What are the applicable Terms & Conditions for this service?" [level=3]
- heading "Additional FAQ" [level=3]
- button "see more"
- heading "Vi Movies & TV - All in One OTT App" [level=2]
- navigation "breadcrumb":
  - list:
    - listitem:
      - link "Home":
        - /url: https://www.myvi.in/
    - listitem:
      - link "Vi Movies & TV":
        - /url: https://www.myvi.in/vi-movies-and-tv
    - listitem:
      - link "All OTT in One App":
        - /url: https://www.myvi.in/vi-movies-and-tv/all-ott-in-one-app
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
  221 |     });
  222 |     await test.step("Verify that the input 'Search' exists in the DOM", async () => {
  223 |       await expect(appPage.inputSearch2.first()).toBeAttached({ timeout: 5000 });
  224 |       evidence.validationsPerformed.push("Verify that the input 'Search' exists in the DOM");
  225 |     });
  226 | 
  227 |     await test.step("Capture screenshot evidence", async () => {
  228 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "All OTT in One App - OTT Subscription Plans | Vi Movies & TV - Input Verification", "www.myvi.in");
  229 |       evidence.screenshots.push(screenshotPath);
  230 |     });
  231 | 
  232 |     await attachExecutionSummary(evidence, page, testInfo);
  233 |   });
  234 |   test("Verify that 1 Form is present on All OTT in One App - OTT Subscription Plans | Vi Movies & TV @regression", async ({ page }, testInfo) => {
  235 |     await label('suite', "Regression Test Suite");
  236 |     await label('url', "https://www.myvi.in/");
  237 |     await label('domain', "www.myvi.in");
  238 |     await feature("All OTT in One App - OTT Subscription Plans | Vi Movies & TV");
  239 |     await story("Verify Form elements are present");
  240 |     await severity("minor");
  241 |     await tag("regression");
  242 | 
  243 |     const evidence = createEvidence({
  244 |       application: "www.myvi.in",
  245 |       suite: "Regression Test Suite",
  246 |       browser: testInfo.project.name || 'chromium',
  247 |       pageName: "All OTT in One App - OTT Subscription Plans | Vi Movies & TV",
  248 |       pageUrl: "https://www.myvi.in/vi-movies-and-tv/all-ott-in-one-app",
  249 |       testObjective: "Verify Form elements are present",
  250 |     });
  251 | 
  252 |     await test.step("Verify that the form 'Form' exists in the DOM", async () => {
  253 |       await expect(appPage.form0.first()).toBeAttached({ timeout: 5000 });
  254 |       evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
  255 |     });
  256 | 
  257 |     await test.step("Capture screenshot evidence", async () => {
  258 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "All OTT in One App - OTT Subscription Plans | Vi Movies & TV - Form Verification", "www.myvi.in");
  259 |       evidence.screenshots.push(screenshotPath);
  260 |     });
  261 | 
  262 |     await attachExecutionSummary(evidence, page, testInfo);
  263 |   });
  264 |   test("Verify that 3 Tables are present on All OTT in One App - OTT Subscription Plans | Vi Movies & TV @regression", async ({ page }, testInfo) => {
  265 |     await label('suite', "Regression Test Suite");
  266 |     await label('url', "https://www.myvi.in/");
  267 |     await label('domain', "www.myvi.in");
  268 |     await feature("All OTT in One App - OTT Subscription Plans | Vi Movies & TV");
  269 |     await story("Verify Table elements are present");
  270 |     await severity("minor");
  271 |     await tag("regression");
  272 | 
  273 |     const evidence = createEvidence({
  274 |       application: "www.myvi.in",
  275 |       suite: "Regression Test Suite",
  276 |       browser: testInfo.project.name || 'chromium',
  277 |       pageName: "All OTT in One App - OTT Subscription Plans | Vi Movies & TV",
  278 |       pageUrl: "https://www.myvi.in/vi-movies-and-tv/all-ott-in-one-app",
  279 |       testObjective: "Verify Table elements are present",
  280 |     });
  281 | 
  282 |     await test.step("Verify that the table 'Data table' exists in the DOM", async () => {
  283 |       await expect(appPage.table0.first()).toBeAttached({ timeout: 5000 });
  284 |       evidence.validationsPerformed.push("Verify that the table 'Data table' exists in the DOM");
  285 |     });
  286 |     await test.step("Verify that the table 'Data table' exists in the DOM", async () => {
  287 |       await expect(appPage.table1.first()).toBeAttached({ timeout: 5000 });
  288 |       evidence.validationsPerformed.push("Verify that the table 'Data table' exists in the DOM");
  289 |     });
  290 |     await test.step("Verify that the table 'Data table' exists in the DOM", async () => {
  291 |       await expect(appPage.table2.first()).toBeAttached({ timeout: 5000 });
  292 |       evidence.validationsPerformed.push("Verify that the table 'Data table' exists in the DOM");
  293 |     });
  294 | 
  295 |     await test.step("Capture screenshot evidence", async () => {
  296 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "All OTT in One App - OTT Subscription Plans | Vi Movies & TV - Table Verification", "www.myvi.in");
  297 |       evidence.screenshots.push(screenshotPath);
  298 |     });
  299 | 
  300 |     await attachExecutionSummary(evidence, page, testInfo);
  301 |   });
  302 |   test("Verify that 2 Menus are present on All OTT in One App - OTT Subscription Plans | Vi Movies & TV @regression", async ({ page }, testInfo) => {
  303 |     await label('suite', "Regression Test Suite");
  304 |     await label('url', "https://www.myvi.in/");
  305 |     await label('domain', "www.myvi.in");
  306 |     await feature("All OTT in One App - OTT Subscription Plans | Vi Movies & TV");
  307 |     await story("Verify Menu elements are present");
  308 |     await severity("minor");
  309 |     await tag("regression");
  310 | 
  311 |     const evidence = createEvidence({
  312 |       application: "www.myvi.in",
  313 |       suite: "Regression Test Suite",
  314 |       browser: testInfo.project.name || 'chromium',
  315 |       pageName: "All OTT in One App - OTT Subscription Plans | Vi Movies & TV",
  316 |       pageUrl: "https://www.myvi.in/vi-movies-and-tv/all-ott-in-one-app",
  317 |       testObjective: "Verify Menu elements are present",
  318 |     });
  319 | 
  320 |     await test.step("Verify that the menu 'open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs' exists in the DOM", async () => {
> 321 |       await expect(appPage.menuOpenInViAppSignInSignInDashboardMyAccountPrepaid.first()).toBeAttached({ timeout: 5000 });
      |                                                                                          ^ Error: expect(locator).toBeAttached() failed
  322 |       evidence.validationsPerformed.push("Verify that the menu 'open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs' exists in the DOM");
  323 |     });
  324 |     await test.step("Verify that the menu 'Home Vi Movies & TV All OTT in One App' exists in the DOM", async () => {
  325 |       await expect(appPage.menuHomeViMoviesTvAllOttInOneApp.first()).toBeAttached({ timeout: 5000 });
  326 |       evidence.validationsPerformed.push("Verify that the menu 'Home Vi Movies & TV All OTT in One App' exists in the DOM");
  327 |     });
  328 | 
  329 |     await test.step("Capture screenshot evidence", async () => {
  330 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "All OTT in One App - OTT Subscription Plans | Vi Movies & TV - Menu Verification", "www.myvi.in");
  331 |       evidence.screenshots.push(screenshotPath);
  332 |     });
  333 | 
  334 |     await attachExecutionSummary(evidence, page, testInfo);
  335 |   });
  336 | });
  337 | 
```