# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\ViBlogGetLatestNewsInformationOnViNetwork.spec.ts >> https://www.myvi.in/ - Vi Blog | Get Latest News & Information on Vi Network - Regression Tests >> Verify that 6 Headings are present on Vi Blog | Get Latest News & Information on Vi Network @regression
- Location: tests\generated\www-myvi-in\ViBlogGetLatestNewsInformationOnViNetwork.spec.ts:50:3

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: getByRole('heading', { name: 'theblogs' }).first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'theblogs' }).first()

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
- paragraph: Explore Vi App
- heading "star the vi-logo blogs" [level=1]:
  - img "star"
  - text: the
  - img "vi-logo"
  - text: blogs
- img "Participate in Vi 5G Fanfest & Win Exciting Rewards on the Vi App"
- text: quick bytes
- paragraph: Participate in Vi 5G Fanfest & Win Exciting Rewards on the Vi App
- paragraph:
  - img "calendar-white"
  - text: April 02, 2026
- img "arrow icon"
- separator
- textbox "search for topics"
- img
- img "Best Budget-Friendly Vi Postpaid Family Plans in 2026"
- paragraph: Best Budget-Friendly Vi Postpaid Family Plans in 2026
- paragraph: quick bytes
- paragraph:
  - img "calendar-grey"
  - text: June 11, 2026
- img "arrow icon"
- 'img "786 Mobile Number: Significance, Meaning & Why It’s Considered Lucky"'
- paragraph: "786 Mobile Number: Significance, Meaning & Why It’s Considered Lucky"
- paragraph: quick bytes
- paragraph:
  - img "calendar-grey"
  - text: June 11, 2026
- img "arrow icon"
- img "Lost Your Phone? Here’s How Vi Handset Loss Insurance Keeps You Protected"
- paragraph: Lost Your Phone? Here’s How Vi Handset Loss Insurance Keeps You Protected
- paragraph: quick bytes
- paragraph:
  - img "calendar-grey"
  - text: June 11, 2026
- img "arrow icon"
- img "How Billing Cycles Work in Postpaid Connections"
- paragraph: How Billing Cycles Work in Postpaid Connections
- paragraph: quick bytes
- paragraph:
  - img "calendar-grey"
  - text: June 11, 2026
- img "arrow icon"
- navigation "Pagination":
  - listitem:
    - button "Previous page" [disabled]:
      - img "paginationArrow"
      - text: Previous
  - listitem:
    - link "Page 1 is your current page":
      - /url: https://www.myvi.in/page/1
      - text: "1"
  - listitem:
    - link "Page 2":
      - /url: https://www.myvi.in/page/2
      - text: "2"
  - listitem:
    - link "Page 3":
      - /url: https://www.myvi.in/page/3
      - text: "3"
  - listitem:
    - link "Page 4":
      - /url: https://www.myvi.in/page/4
      - text: "4"
  - listitem:
    - button "Jump forward": ...
  - listitem:
    - link "Page 191":
      - /url: https://www.myvi.in/page/191
      - text: "191"
  - listitem:
    - link "Page 192":
      - /url: https://www.myvi.in/page/192
      - text: "192"
  - listitem:
    - link "Page 193":
      - /url: https://www.myvi.in/page/193
      - text: "193"
  - listitem:
    - button "Next page":
      - text: Next
      - img "paginationArrow"
- paragraph: feature blogs
- img "Participate in Vi 5G Fanfest & Win Exciting Rewards on the Vi App"
- paragraph: Participate in Vi 5G Fanfest & Win Exciting Rewards on the Vi App
- paragraph:
  - img "calendar-black"
  - text: April 02, 2026
- separator
- 'img "Endless connectivity with Vi NonStop Hero: No more top-ups, just Unlimited data"'
- paragraph: "Endless connectivity with Vi NonStop Hero: No more top-ups, just Unlimited data"
- paragraph:
  - img "calendar-black"
  - text: Aug 21, 2025
- separator
- img "All You Need to Know About Vi's 5G Service"
- paragraph: All You Need to Know About Vi's 5G Service
- paragraph:
  - img "calendar-black"
  - text: Aug 21, 2025
- separator
- paragraph: explore more on
- link "know your SIM":
  - /url: /blog/category/know-your-sim
- link "know your plans":
  - /url: /blog/category/know-your-plans
- link "pay your bills":
  - /url: /blog/category/pay-your-bills
- link "International roaming":
  - /url: /blog/category/international-roaming
- link "quick bytes":
  - /url: /blog/category/quick-bytes
- link "what’s new?":
  - /url: /blog/category/whats-new
- link "sports":
  - /url: /blog/category/sports
- paragraph: related to new connection
- link "get a new SIM":
  - /url: /blog/category/get-new-sim
- link "fancy number":
  - /url: /blog/category/fancy-number
- link "MNP":
  - /url: /blog/category/mnp
- navigation "breadcrumb":
  - list:
    - listitem:
      - link "Home":
        - /url: /
    - listitem:
      - link "Blog":
        - /url: /blog
- text: your cookie preferences
- img "Cookie"
- button "Close"
- paragraph:
  - paragraph:
    - text: We use cookies to enhance your browsing experience, analyze website traffic, and provide personalized content. By clicking “Accept all,” you agree to the use of all cookies. Essential cookies will continue to function regardless of your choice. Please refer to our
    - link "Cookie Policy and Privacy Policy":
      - /url: https://www.myvi.in/privacy-policy
    - text: for more information.
- button "reject all"
- button "accept all"
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
  1   | import { test, expect } from '@playwright/test';
  2   | import { label, severity, feature, story, tag } from 'allure-js-commons';
  3   | import { ViBlogGetLatestNewsInformationOnViNetwork } from '../../../pages/generated/www-myvi-in/ViBlogGetLatestNewsInformationOnViNetwork.page';
  4   | import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
  5   | import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';
  6   | 
  7   | test.describe("https://www.myvi.in/ - Vi Blog | Get Latest News & Information on Vi Network - Regression Tests", () => {
  8   |   let appPage: ViBlogGetLatestNewsInformationOnViNetwork;
  9   | 
  10  |   test.beforeEach(async ({ page }) => {
  11  |     appPage = new ViBlogGetLatestNewsInformationOnViNetwork(page);
  12  |     await appPage.open();
  13  |   });
  14  | 
  15  |   test("Verify that Vi Blog | Get Latest News & Information on Vi Network loads successfully @regression", async ({ page }, testInfo) => {
  16  |     await label('suite', "Regression Test Suite");
  17  |     await label('url', "https://www.myvi.in/");
  18  |     await label('domain', "www.myvi.in");
  19  |     await feature("Vi Blog | Get Latest News & Information on Vi Network");
  20  |     await story("Verify page loads for regression");
  21  |     await severity("minor");
  22  |     await tag("regression");
  23  | 
  24  |     const evidence = createEvidence({
  25  |       application: "www.myvi.in",
  26  |       suite: "Regression Test Suite",
  27  |       browser: testInfo.project.name || 'chromium',
  28  |       pageName: "Vi Blog | Get Latest News & Information on Vi Network",
  29  |       pageUrl: "https://www.myvi.in/blog",
  30  |       testObjective: "Verify page loads for regression",
  31  |     });
  32  | 
  33  |     await test.step("Open URL: https://www.myvi.in/", async () => {
  34  |       await appPage.open();
  35  |       evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
  36  |     });
  37  | 
  38  |     await test.step("Verify the URL is correct", async () => {
  39  |       await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/blog/);
  40  |       evidence.validationsPerformed.push("Verified URL is correct");
  41  |     });
  42  | 
  43  |     await test.step("Capture screenshot evidence", async () => {
  44  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Blog | Get Latest News & Information on Vi Network - Final Evidence", "www.myvi.in");
  45  |       evidence.screenshots.push(screenshotPath);
  46  |     });
  47  | 
  48  |     await attachExecutionSummary(evidence, page, testInfo);
  49  |   });
  50  |   test("Verify that 6 Headings are present on Vi Blog | Get Latest News & Information on Vi Network @regression", async ({ page }, testInfo) => {
  51  |     await label('suite', "Regression Test Suite");
  52  |     await label('url', "https://www.myvi.in/");
  53  |     await label('domain', "www.myvi.in");
  54  |     await feature("Vi Blog | Get Latest News & Information on Vi Network");
  55  |     await story("Verify Heading elements are present");
  56  |     await severity("minor");
  57  |     await tag("regression");
  58  | 
  59  |     const evidence = createEvidence({
  60  |       application: "www.myvi.in",
  61  |       suite: "Regression Test Suite",
  62  |       browser: testInfo.project.name || 'chromium',
  63  |       pageName: "Vi Blog | Get Latest News & Information on Vi Network",
  64  |       pageUrl: "https://www.myvi.in/blog",
  65  |       testObjective: "Verify Heading elements are present",
  66  |     });
  67  | 
  68  |     await test.step("Verify that the heading 'theblogs' exists in the DOM", async () => {
> 69  |       await expect(appPage.headingTheblogs.first()).toBeAttached({ timeout: 5000 });
      |                                                     ^ Error: expect(locator).toBeAttached() failed
  70  |       evidence.validationsPerformed.push("Verify that the heading 'theblogs' exists in the DOM");
  71  |     });
  72  |     await test.step("Verify that the heading 'Vodafone Idea Limited' exists in the DOM", async () => {
  73  |       await expect(appPage.headingVodafoneIdeaLimited.first()).toBeAttached({ timeout: 5000 });
  74  |       evidence.validationsPerformed.push("Verify that the heading 'Vodafone Idea Limited' exists in the DOM");
  75  |     });
  76  |     await test.step("Verify that the heading 'about Vi' exists in the DOM", async () => {
  77  |       await expect(appPage.headingAboutVi.first()).toBeAttached({ timeout: 5000 });
  78  |       evidence.validationsPerformed.push("Verify that the heading 'about Vi' exists in the DOM");
  79  |     });
  80  |     await test.step("Verify that the heading 'more from Vi' exists in the DOM", async () => {
  81  |       await expect(appPage.headingMoreFromVi.first()).toBeAttached({ timeout: 5000 });
  82  |       evidence.validationsPerformed.push("Verify that the heading 'more from Vi' exists in the DOM");
  83  |     });
  84  |     await test.step("Verify that the heading 'explore on Vi app' exists in the DOM", async () => {
  85  |       await expect(appPage.headingExploreOnViApp.first()).toBeAttached({ timeout: 5000 });
  86  |       evidence.validationsPerformed.push("Verify that the heading 'explore on Vi app' exists in the DOM");
  87  |     });
  88  | 
  89  |     await test.step("Capture screenshot evidence", async () => {
  90  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Blog | Get Latest News & Information on Vi Network - Heading Verification", "www.myvi.in");
  91  |       evidence.screenshots.push(screenshotPath);
  92  |     });
  93  | 
  94  |     await attachExecutionSummary(evidence, page, testInfo);
  95  |   });
  96  |   test("Verify that 108 Links are present on Vi Blog | Get Latest News & Information on Vi Network @regression", async ({ page }, testInfo) => {
  97  |     await label('suite', "Regression Test Suite");
  98  |     await label('url', "https://www.myvi.in/");
  99  |     await label('domain', "www.myvi.in");
  100 |     await feature("Vi Blog | Get Latest News & Information on Vi Network");
  101 |     await story("Verify Link elements are present");
  102 |     await severity("minor");
  103 |     await tag("regression");
  104 | 
  105 |     const evidence = createEvidence({
  106 |       application: "www.myvi.in",
  107 |       suite: "Regression Test Suite",
  108 |       browser: testInfo.project.name || 'chromium',
  109 |       pageName: "Vi Blog | Get Latest News & Information on Vi Network",
  110 |       pageUrl: "https://www.myvi.in/blog",
  111 |       testObjective: "Verify Link elements are present",
  112 |     });
  113 | 
  114 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  115 |       await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
  116 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  117 |     });
  118 |     await test.step("Verify that the link '1' exists in the DOM", async () => {
  119 |       await expect(appPage.link1.first()).toBeAttached({ timeout: 5000 });
  120 |       evidence.validationsPerformed.push("Verify that the link '1' exists in the DOM");
  121 |     });
  122 |     await test.step("Verify that the link '2' exists in the DOM", async () => {
  123 |       await expect(appPage.link2.first()).toBeAttached({ timeout: 5000 });
  124 |       evidence.validationsPerformed.push("Verify that the link '2' exists in the DOM");
  125 |     });
  126 |     await test.step("Verify that the link '3' exists in the DOM", async () => {
  127 |       await expect(appPage.link3.first()).toBeAttached({ timeout: 5000 });
  128 |       evidence.validationsPerformed.push("Verify that the link '3' exists in the DOM");
  129 |     });
  130 |     await test.step("Verify that the link '4' exists in the DOM", async () => {
  131 |       await expect(appPage.link4.first()).toBeAttached({ timeout: 5000 });
  132 |       evidence.validationsPerformed.push("Verify that the link '4' exists in the DOM");
  133 |     });
  134 | 
  135 |     await test.step("Capture screenshot evidence", async () => {
  136 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Blog | Get Latest News & Information on Vi Network - Link Verification", "www.myvi.in");
  137 |       evidence.screenshots.push(screenshotPath);
  138 |     });
  139 | 
  140 |     await attachExecutionSummary(evidence, page, testInfo);
  141 |   });
  142 |   test("Verify that 5 Buttons are present on Vi Blog | Get Latest News & Information on Vi Network @regression", async ({ page }, testInfo) => {
  143 |     await label('suite', "Regression Test Suite");
  144 |     await label('url', "https://www.myvi.in/");
  145 |     await label('domain', "www.myvi.in");
  146 |     await feature("Vi Blog | Get Latest News & Information on Vi Network");
  147 |     await story("Verify Button elements are present");
  148 |     await severity("minor");
  149 |     await tag("regression");
  150 | 
  151 |     const evidence = createEvidence({
  152 |       application: "www.myvi.in",
  153 |       suite: "Regression Test Suite",
  154 |       browser: testInfo.project.name || 'chromium',
  155 |       pageName: "Vi Blog | Get Latest News & Information on Vi Network",
  156 |       pageUrl: "https://www.myvi.in/blog",
  157 |       testObjective: "Verify Button elements are present",
  158 |     });
  159 | 
  160 |     await test.step("Verify that the button 'Previous' exists in the DOM", async () => {
  161 |       await expect(appPage.buttonPrevious.first()).toBeAttached({ timeout: 5000 });
  162 |       evidence.validationsPerformed.push("Verify that the button 'Previous' exists in the DOM");
  163 |     });
  164 |     await test.step("Verify that the button '...' exists in the DOM", async () => {
  165 |       await expect(appPage.button.first()).toBeAttached({ timeout: 5000 });
  166 |       evidence.validationsPerformed.push("Verify that the button '...' exists in the DOM");
  167 |     });
  168 |     await test.step("Verify that the button 'Next' exists in the DOM", async () => {
  169 |       await expect(appPage.buttonNext.first()).toBeAttached({ timeout: 5000 });
```