# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\Vi5gNetworkInIndiaExplorePlansSimCoverageMapViIndia.spec.ts >> https://www.myvi.in/ - Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India - Regression Tests >> Verify that 86 Links are present on Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India @regression
- Location: tests\generated\www-myvi-in\Vi5gNetworkInIndiaExplorePlansSimCoverageMapViIndia.spec.ts:96:3

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: locator('a[href="https://www.myvi.in/"]').first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for locator('a[href="https://www.myvi.in/"]').first()

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
- region "5G hero banner":
  - paragraph: say hello to
  - img "Vi 5G Logo"
  - button "get a new connection"
  - button "port to Vi"
- main:
  - heading "experience the Vi 5G way of life" [level=2]
  - img "vi-5g-video-thumbnail"
  - button "Play video":
    - img "Play Button"
- heading "think future, think Vi 5G" [level=2]
- paragraph: unlock a world of unlimited possibilities
- img "image1"
- img "image2"
- img "image3"
- img "Vi logo"
- paragraph: made for the limitless you
- paragraph: Experience lightning-fast speeds like never before, so you can learn, work, play, stream, binge, repeat.
- img "image4"
- heading "explore Vi 5G packs" [level=2]
- button "Prepaid" [pressed]
- button "Postpaid"
- text: Prepaid packs for
- button "Mumbai"
- text: Includes Vi Movies & TV access 349 28 Days validity
- button "Buy": buy
- separator
- img "5G icon"
- text: + unlimited 4G (12am-6am) 1.5 GB 4G per day (6am-12am) weekend data rollover
- separator
- text: Unlimited call
- img "benefit-icon-0"
- img "benefit-icon-1"
- button
- text: Includes Vi Movies & TV access 365 28 Days validity
- button "Buy": buy
- separator
- img "5G icon"
- text: + unlimited 4G (12am-12pm) 2 GB 4G per day (12pm-12am) weekend data rollover
- separator
- text: Unlimited call
- img "benefit-icon-0"
- img "benefit-icon-1"
- button
- text: Includes Vi Movies & TV access 579 56 Days validity
- button "Buy": buy
- separator
- img "5G icon"
- text: + unlimited 4G (12am-6am) 1.5 GB 4G per day (6am-12am) weekend data rollover
- separator
- text: Unlimited call
- img "benefit-icon-0"
- img "benefit-icon-1"
- button
- text: 649 56 Days validity
- button "Buy": buy
- separator
- img "5G icon"
- text: + unlimited 4G (12am-12pm) 2 GB 4G per day (12pm-12am) weekend data rollover
- separator
- text: Unlimited call
- img "benefit-icon-0"
- button
- text: Includes Vi Movies & TV access 859 84 Days validity
- button "Buy": buy
- separator
- img "5G icon"
- text: + unlimited 4G (12am-6am) 1.5 GB 4G per day (6am-12am) weekend data rollover
- separator
- text: Unlimited call
- img "benefit-icon-0"
- img "benefit-icon-1"
- button
- text: Includes 19OTTs on TV & Mobile 979 84 Days validity
- button "Buy": buy
- separator
- img "5G icon"
- text: + unlimited 4G (12am-12pm) 2 GB 4G per day (12pm-12am) weekend data rollover
- separator
- text: Unlimited call
- img "benefit-icon-0"
- img "benefit-icon-1"
- button
- text: Super saver 3599 365 Days validity
- button "Buy": buy
- separator
- img "5G icon"
- text: + unlimited 4G (12am-12pm) 2 GB 4G per day (12pm-12am) weekend data rollover
- separator
- text: Unlimited call
- img "benefit-icon-0"
- button
- img "prev"
- img "next"
- heading "check 5G coverage & compatibility" [level=4]
- paragraph: check 5G coverage in your circle
- button "select circle Dropdown arrow":
  - paragraph: select circle
  - img "Dropdown arrow"
- button "check coverage" [disabled]
- paragraph: check if your device supports 5G connectivity
- button "select device Dropdown arrow":
  - paragraph: select device
  - img "Dropdown arrow"
- paragraph:
  - text: select model
  - img "Dropdown arrow"
- button "check compatibility" [disabled]
- heading "Vi 5G FAQs" [level=2]
- button "5G and Vi 5G −" [expanded]
- text: What is 5G technology and how does it work?
- img "Collapse"
- text: What is the price of Prepaid Unlimited 5G plans/packs? Which are the plans that will have Unlimited 5G?
- img "Collapse"
- text: Which Postpaid plans offer Unlimited Free 5G? What is the price of Postpaid UL 5G plans?
- img "Collapse"
- text: Is there any data limit in Unlimited 5G plans for Prepaid?
- img "Collapse"
- text: Do I need to get a Vi 5G SIM?
- img "Collapse"
- text: Which are the devices on which I will get Vi 5G?
- img "Collapse"
- text: What is Vi 5G? or How do I benefit from Vi 5G?
- img "Collapse"
- text: I have a 5G handset, can I use 5G services now?
- img "Collapse"
- text: How can I activate Unlimited Free 5G service?
- img "Collapse"
- text: Will 5G work all across the country or specific cities only?
- img "Collapse"
- text: How do I check if I am in a Vi 5G covered area?
- img "Collapse"
- text: Will you be launching in other cities also? When?
- img "Collapse"
- text: Will UL 5G service continue indefinitely for eligible users?
- img "Collapse"
- text: I have a 5G handset and it doesn’t seem to be compatible with Vi 5G?
- img "Collapse"
- text: I have checked all the 5G requirements and yet 5G is not working. What is the issue?
- img "Collapse"
- button "Consumer How To/Inquiries +"
- button "See more"
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
  15  |   test("Verify that Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India loads successfully @regression", async ({ page }, testInfo) => {
  16  |     await label('suite', "Regression Test Suite");
  17  |     await label('url', "https://www.myvi.in/");
  18  |     await label('domain', "www.myvi.in");
  19  |     await feature("Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India");
  20  |     await story("Verify page loads for regression");
  21  |     await severity("minor");
  22  |     await tag("regression");
  23  | 
  24  |     const evidence = createEvidence({
  25  |       application: "www.myvi.in",
  26  |       suite: "Regression Test Suite",
  27  |       browser: testInfo.project.name || 'chromium',
  28  |       pageName: "Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India",
  29  |       pageUrl: "https://www.myvi.in/5g-network",
  30  |       testObjective: "Verify page loads for regression",
  31  |     });
  32  | 
  33  |     await test.step("Open URL: https://www.myvi.in/", async () => {
  34  |       await appPage.open();
  35  |       evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
  36  |     });
  37  | 
  38  |     await test.step("Verify the URL is correct", async () => {
  39  |       await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/5g\-network/);
  40  |       evidence.validationsPerformed.push("Verified URL is correct");
  41  |     });
  42  | 
  43  |     await test.step("Capture screenshot evidence", async () => {
  44  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India - Final Evidence", "www.myvi.in");
  45  |       evidence.screenshots.push(screenshotPath);
  46  |     });
  47  | 
  48  |     await attachExecutionSummary(evidence, page, testInfo);
  49  |   });
  50  |   test("Verify that 10 Headings are present on Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India @regression", async ({ page }, testInfo) => {
  51  |     await label('suite', "Regression Test Suite");
  52  |     await label('url', "https://www.myvi.in/");
  53  |     await label('domain', "www.myvi.in");
  54  |     await feature("Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India");
  55  |     await story("Verify Heading elements are present");
  56  |     await severity("minor");
  57  |     await tag("regression");
  58  | 
  59  |     const evidence = createEvidence({
  60  |       application: "www.myvi.in",
  61  |       suite: "Regression Test Suite",
  62  |       browser: testInfo.project.name || 'chromium',
  63  |       pageName: "Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India",
  64  |       pageUrl: "https://www.myvi.in/5g-network",
  65  |       testObjective: "Verify Heading elements are present",
  66  |     });
  67  | 
  68  |     await test.step("Verify that the heading 'experience the Vi 5G way of life' exists in the DOM", async () => {
  69  |       await expect(appPage.headingExperienceTheVi5gWayOfLife.first()).toBeAttached({ timeout: 5000 });
  70  |       evidence.validationsPerformed.push("Verify that the heading 'experience the Vi 5G way of life' exists in the DOM");
  71  |     });
  72  |     await test.step("Verify that the heading 'think future, think Vi 5G' exists in the DOM", async () => {
  73  |       await expect(appPage.headingThinkFutureThinkVi5g.first()).toBeAttached({ timeout: 5000 });
  74  |       evidence.validationsPerformed.push("Verify that the heading 'think future, think Vi 5G' exists in the DOM");
  75  |     });
  76  |     await test.step("Verify that the heading 'explore Vi 5G packs' exists in the DOM", async () => {
  77  |       await expect(appPage.headingExploreVi5gPacks.first()).toBeAttached({ timeout: 5000 });
  78  |       evidence.validationsPerformed.push("Verify that the heading 'explore Vi 5G packs' exists in the DOM");
  79  |     });
  80  |     await test.step("Verify that the heading 'check 5G coverage & compatibility' exists in the DOM", async () => {
  81  |       await expect(appPage.headingCheck5gCoverageCompatibility.first()).toBeAttached({ timeout: 5000 });
  82  |       evidence.validationsPerformed.push("Verify that the heading 'check 5G coverage & compatibility' exists in the DOM");
  83  |     });
  84  |     await test.step("Verify that the heading 'Vi 5G FAQs' exists in the DOM", async () => {
  85  |       await expect(appPage.headingVi5gFaqs.first()).toBeAttached({ timeout: 5000 });
  86  |       evidence.validationsPerformed.push("Verify that the heading 'Vi 5G FAQs' exists in the DOM");
  87  |     });
  88  | 
  89  |     await test.step("Capture screenshot evidence", async () => {
  90  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India - Heading Verification", "www.myvi.in");
  91  |       evidence.screenshots.push(screenshotPath);
  92  |     });
  93  | 
  94  |     await attachExecutionSummary(evidence, page, testInfo);
  95  |   });
  96  |   test("Verify that 86 Links are present on Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India @regression", async ({ page }, testInfo) => {
  97  |     await label('suite', "Regression Test Suite");
  98  |     await label('url', "https://www.myvi.in/");
  99  |     await label('domain', "www.myvi.in");
  100 |     await feature("Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India");
  101 |     await story("Verify Link elements are present");
  102 |     await severity("minor");
  103 |     await tag("regression");
  104 | 
  105 |     const evidence = createEvidence({
  106 |       application: "www.myvi.in",
  107 |       suite: "Regression Test Suite",
  108 |       browser: testInfo.project.name || 'chromium',
  109 |       pageName: "Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India",
  110 |       pageUrl: "https://www.myvi.in/5g-network",
  111 |       testObjective: "Verify Link elements are present",
  112 |     });
  113 | 
  114 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
> 115 |       await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      |                                           ^ Error: expect(locator).toBeAttached() failed
  116 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  117 |     });
  118 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  119 |       await expect(appPage.link1.first()).toBeAttached({ timeout: 5000 });
  120 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  121 |     });
  122 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  123 |       await expect(appPage.link2.first()).toBeAttached({ timeout: 5000 });
  124 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  125 |     });
  126 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  127 |       await expect(appPage.link3.first()).toBeAttached({ timeout: 5000 });
  128 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  129 |     });
  130 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  131 |       await expect(appPage.link4.first()).toBeAttached({ timeout: 5000 });
  132 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  133 |     });
  134 | 
  135 |     await test.step("Capture screenshot evidence", async () => {
  136 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India - Link Verification", "www.myvi.in");
  137 |       evidence.screenshots.push(screenshotPath);
  138 |     });
  139 | 
  140 |     await attachExecutionSummary(evidence, page, testInfo);
  141 |   });
  142 |   test("Verify that 19 Buttons are present on Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India @regression", async ({ page }, testInfo) => {
  143 |     await label('suite', "Regression Test Suite");
  144 |     await label('url', "https://www.myvi.in/");
  145 |     await label('domain', "www.myvi.in");
  146 |     await feature("Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India");
  147 |     await story("Verify Button elements are present");
  148 |     await severity("minor");
  149 |     await tag("regression");
  150 | 
  151 |     const evidence = createEvidence({
  152 |       application: "www.myvi.in",
  153 |       suite: "Regression Test Suite",
  154 |       browser: testInfo.project.name || 'chromium',
  155 |       pageName: "Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India",
  156 |       pageUrl: "https://www.myvi.in/5g-network",
  157 |       testObjective: "Verify Button elements are present",
  158 |     });
  159 | 
  160 |     await test.step("Verify that the button 'get a new connection' exists in the DOM", async () => {
  161 |       await expect(appPage.buttonGetANewConnection.first()).toBeAttached({ timeout: 5000 });
  162 |       evidence.validationsPerformed.push("Verify that the button 'get a new connection' exists in the DOM");
  163 |     });
  164 |     await test.step("Verify that the button 'port to Vi' exists in the DOM", async () => {
  165 |       await expect(appPage.buttonPortToVi.first()).toBeAttached({ timeout: 5000 });
  166 |       evidence.validationsPerformed.push("Verify that the button 'port to Vi' exists in the DOM");
  167 |     });
  168 |     await test.step("Verify that the button 'Prepaid' exists in the DOM", async () => {
  169 |       await expect(appPage.buttonPrepaid.first()).toBeAttached({ timeout: 5000 });
  170 |       evidence.validationsPerformed.push("Verify that the button 'Prepaid' exists in the DOM");
  171 |     });
  172 |     await test.step("Verify that the button 'Postpaid' exists in the DOM", async () => {
  173 |       await expect(appPage.buttonPostpaid.first()).toBeAttached({ timeout: 5000 });
  174 |       evidence.validationsPerformed.push("Verify that the button 'Postpaid' exists in the DOM");
  175 |     });
  176 |     await test.step("Verify that the button 'Mumbai' exists in the DOM", async () => {
  177 |       await expect(appPage.buttonMumbai.first()).toBeAttached({ timeout: 5000 });
  178 |       evidence.validationsPerformed.push("Verify that the button 'Mumbai' exists in the DOM");
  179 |     });
  180 | 
  181 |     await test.step("Capture screenshot evidence", async () => {
  182 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India - Button Verification", "www.myvi.in");
  183 |       evidence.screenshots.push(screenshotPath);
  184 |     });
  185 | 
  186 |     await attachExecutionSummary(evidence, page, testInfo);
  187 |   });
  188 |   test("Verify that 2 Menus are present on Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India @regression", async ({ page }, testInfo) => {
  189 |     await label('suite', "Regression Test Suite");
  190 |     await label('url', "https://www.myvi.in/");
  191 |     await label('domain', "www.myvi.in");
  192 |     await feature("Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India");
  193 |     await story("Verify Menu elements are present");
  194 |     await severity("minor");
  195 |     await tag("regression");
  196 | 
  197 |     const evidence = createEvidence({
  198 |       application: "www.myvi.in",
  199 |       suite: "Regression Test Suite",
  200 |       browser: testInfo.project.name || 'chromium',
  201 |       pageName: "Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India",
  202 |       pageUrl: "https://www.myvi.in/5g-network",
  203 |       testObjective: "Verify Menu elements are present",
  204 |     });
  205 | 
  206 |     await test.step("Verify that the menu 'PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service' exists in the DOM", async () => {
  207 |       await expect(appPage.menuPrepaidpostpaidnewConnectioninternationalRoaming5gottsMor.first()).toBeAttached({ timeout: 5000 });
  208 |       evidence.validationsPerformed.push("Verify that the menu 'PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service' exists in the DOM");
  209 |     });
  210 |     await test.step("Verify that the menu 'BusinessInvestorsSign in' exists in the DOM", async () => {
  211 |       await expect(appPage.menuBusinessinvestorssignIn.first()).toBeAttached({ timeout: 5000 });
  212 |       evidence.validationsPerformed.push("Verify that the menu 'BusinessInvestorsSign in' exists in the DOM");
  213 |     });
  214 | 
  215 |     await test.step("Capture screenshot evidence", async () => {
```