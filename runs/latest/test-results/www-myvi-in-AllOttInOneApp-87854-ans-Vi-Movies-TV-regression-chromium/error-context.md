# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\AllOttInOneAppOttSubscriptionPlansViMoviesTv.spec.ts >> https://www.myvi.in/ - All OTT in One App - OTT Subscription Plans | Vi Movies & TV - Regression Tests >> Verify that 177 Links are present on All OTT in One App - OTT Subscription Plans | Vi Movies & TV @regression
- Location: tests\generated\www-myvi-in\AllOttInOneAppOttSubscriptionPlansViMoviesTv.spec.ts:96:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeAttached() failed

Locator: locator('a[href="https://www.myvi.in/vi-movies-and-tv/all-ott-in-one-app#"]').first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for locator('a[href="https://www.myvi.in/vi-movies-and-tv/all-ott-in-one-app#"]').first()

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
    - 'option "count {properties.mainimagealt5} count {properties.mainimagealt6} count {properties.mainimagealt7} count {properties.mainimagealt8}"':
      - img "count"
      - 'img "{properties.mainimagealt5}"'
      - img "count"
      - 'img "{properties.mainimagealt6}"'
      - img "count"
      - 'img "{properties.mainimagealt7}"'
      - img "count"
      - 'img "{properties.mainimagealt8}"'
  - tablist:
    - listitem:
      - button "2"
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
- iframe
```

# Test source

```ts
  15  |   test("Verify that All OTT in One App - OTT Subscription Plans | Vi Movies & TV loads successfully @regression", async ({ page }, testInfo) => {
  16  |     await label('suite', "Regression Test Suite");
  17  |     await label('url', "https://www.myvi.in/");
  18  |     await label('domain', "www.myvi.in");
  19  |     await feature("All OTT in One App - OTT Subscription Plans | Vi Movies & TV");
  20  |     await story("Verify page loads for regression");
  21  |     await severity("minor");
  22  |     await tag("regression");
  23  | 
  24  |     const evidence = createEvidence({
  25  |       application: "www.myvi.in",
  26  |       suite: "Regression Test Suite",
  27  |       browser: testInfo.project.name || 'chromium',
  28  |       pageName: "All OTT in One App - OTT Subscription Plans | Vi Movies & TV",
  29  |       pageUrl: "https://www.myvi.in/vi-movies-and-tv/all-ott-in-one-app",
  30  |       testObjective: "Verify page loads for regression",
  31  |     });
  32  | 
  33  |     await test.step("Open URL: https://www.myvi.in/", async () => {
  34  |       await appPage.open();
  35  |       evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
  36  |     });
  37  | 
  38  |     await test.step("Verify the URL is correct", async () => {
  39  |       await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/vi\-movies\-and\-tv\/all\-ott\-in\-one\-app/);
  40  |       evidence.validationsPerformed.push("Verified URL is correct");
  41  |     });
  42  | 
  43  |     await test.step("Capture screenshot evidence", async () => {
  44  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "All OTT in One App - OTT Subscription Plans | Vi Movies & TV - Final Evidence", "www.myvi.in");
  45  |       evidence.screenshots.push(screenshotPath);
  46  |     });
  47  | 
  48  |     await attachExecutionSummary(evidence, page, testInfo);
  49  |   });
  50  |   test("Verify that 75 Headings are present on All OTT in One App - OTT Subscription Plans | Vi Movies & TV @regression", async ({ page }, testInfo) => {
  51  |     await label('suite', "Regression Test Suite");
  52  |     await label('url', "https://www.myvi.in/");
  53  |     await label('domain', "www.myvi.in");
  54  |     await feature("All OTT in One App - OTT Subscription Plans | Vi Movies & TV");
  55  |     await story("Verify Heading elements are present");
  56  |     await severity("minor");
  57  |     await tag("regression");
  58  | 
  59  |     const evidence = createEvidence({
  60  |       application: "www.myvi.in",
  61  |       suite: "Regression Test Suite",
  62  |       browser: testInfo.project.name || 'chromium',
  63  |       pageName: "All OTT in One App - OTT Subscription Plans | Vi Movies & TV",
  64  |       pageUrl: "https://www.myvi.in/vi-movies-and-tv/all-ott-in-one-app",
  65  |       testObjective: "Verify Heading elements are present",
  66  |     });
  67  | 
  68  |     await test.step("Verify that the heading 'All in One OTT App - unlock and watch 13+ OTTs in just one app!' exists in the DOM", async () => {
  69  |       await expect(appPage.headingAllInOneOttAppUnlockAndWatch13OttsInJustOneApp.first()).toBeAttached({ timeout: 5000 });
  70  |       evidence.validationsPerformed.push("Verify that the heading 'All in One OTT App - unlock and watch 13+ OTTs in just one app!' exists in the DOM");
  71  |     });
  72  |     await test.step("Verify that the heading 'latest releases at your fingertips' exists in the DOM", async () => {
  73  |       await expect(appPage.headingLatestReleasesAtYourFingertips.first()).toBeAttached({ timeout: 5000 });
  74  |       evidence.validationsPerformed.push("Verify that the heading 'latest releases at your fingertips' exists in the DOM");
  75  |     });
  76  |     await test.step("Verify that the heading 'trending OTT content recommendations' exists in the DOM", async () => {
  77  |       await expect(appPage.headingTrendingOttContentRecommendations.first()).toBeAttached({ timeout: 5000 });
  78  |       evidence.validationsPerformed.push("Verify that the heading 'trending OTT content recommendations' exists in the DOM");
  79  |     });
  80  |     await test.step("Verify that the heading 'catch the latest on 400+ live channels' exists in the DOM", async () => {
  81  |       await expect(appPage.headingCatchTheLatestOn400LiveChannels.first()).toBeAttached({ timeout: 5000 });
  82  |       evidence.validationsPerformed.push("Verify that the heading 'catch the latest on 400+ live channels' exists in the DOM");
  83  |     });
  84  |     await test.step("Verify that the heading 'watch content in 16+ languages' exists in the DOM", async () => {
  85  |       await expect(appPage.headingWatchContentIn16Languages.first()).toBeAttached({ timeout: 5000 });
  86  |       evidence.validationsPerformed.push("Verify that the heading 'watch content in 16+ languages' exists in the DOM");
  87  |     });
  88  | 
  89  |     await test.step("Capture screenshot evidence", async () => {
  90  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "All OTT in One App - OTT Subscription Plans | Vi Movies & TV - Heading Verification", "www.myvi.in");
  91  |       evidence.screenshots.push(screenshotPath);
  92  |     });
  93  | 
  94  |     await attachExecutionSummary(evidence, page, testInfo);
  95  |   });
  96  |   test("Verify that 177 Links are present on All OTT in One App - OTT Subscription Plans | Vi Movies & TV @regression", async ({ page }, testInfo) => {
  97  |     await label('suite', "Regression Test Suite");
  98  |     await label('url', "https://www.myvi.in/");
  99  |     await label('domain', "www.myvi.in");
  100 |     await feature("All OTT in One App - OTT Subscription Plans | Vi Movies & TV");
  101 |     await story("Verify Link elements are present");
  102 |     await severity("minor");
  103 |     await tag("regression");
  104 | 
  105 |     const evidence = createEvidence({
  106 |       application: "www.myvi.in",
  107 |       suite: "Regression Test Suite",
  108 |       browser: testInfo.project.name || 'chromium',
  109 |       pageName: "All OTT in One App - OTT Subscription Plans | Vi Movies & TV",
  110 |       pageUrl: "https://www.myvi.in/vi-movies-and-tv/all-ott-in-one-app",
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
  136 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "All OTT in One App - OTT Subscription Plans | Vi Movies & TV - Link Verification", "www.myvi.in");
  137 |       evidence.screenshots.push(screenshotPath);
  138 |     });
  139 | 
  140 |     await attachExecutionSummary(evidence, page, testInfo);
  141 |   });
  142 |   test("Verify that 58 Buttons are present on All OTT in One App - OTT Subscription Plans | Vi Movies & TV @regression", async ({ page }, testInfo) => {
  143 |     await label('suite', "Regression Test Suite");
  144 |     await label('url', "https://www.myvi.in/");
  145 |     await label('domain', "www.myvi.in");
  146 |     await feature("All OTT in One App - OTT Subscription Plans | Vi Movies & TV");
  147 |     await story("Verify Button elements are present");
  148 |     await severity("minor");
  149 |     await tag("regression");
  150 | 
  151 |     const evidence = createEvidence({
  152 |       application: "www.myvi.in",
  153 |       suite: "Regression Test Suite",
  154 |       browser: testInfo.project.name || 'chromium',
  155 |       pageName: "All OTT in One App - OTT Subscription Plans | Vi Movies & TV",
  156 |       pageUrl: "https://www.myvi.in/vi-movies-and-tv/all-ott-in-one-app",
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
  182 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "All OTT in One App - OTT Subscription Plans | Vi Movies & TV - Button Verification", "www.myvi.in");
  183 |       evidence.screenshots.push(screenshotPath);
  184 |     });
  185 | 
  186 |     await attachExecutionSummary(evidence, page, testInfo);
  187 |   });
  188 |   test("Verify that 236 Inputs are present on All OTT in One App - OTT Subscription Plans | Vi Movies & TV @regression", async ({ page }, testInfo) => {
  189 |     await label('suite', "Regression Test Suite");
  190 |     await label('url', "https://www.myvi.in/");
  191 |     await label('domain', "www.myvi.in");
  192 |     await feature("All OTT in One App - OTT Subscription Plans | Vi Movies & TV");
  193 |     await story("Verify Input elements are present");
  194 |     await severity("minor");
  195 |     await tag("regression");
  196 | 
  197 |     const evidence = createEvidence({
  198 |       application: "www.myvi.in",
  199 |       suite: "Regression Test Suite",
  200 |       browser: testInfo.project.name || 'chromium',
  201 |       pageName: "All OTT in One App - OTT Subscription Plans | Vi Movies & TV",
  202 |       pageUrl: "https://www.myvi.in/vi-movies-and-tv/all-ott-in-one-app",
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