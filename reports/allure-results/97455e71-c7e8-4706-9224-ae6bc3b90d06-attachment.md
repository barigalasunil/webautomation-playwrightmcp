# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\OnlineMobileRechargeBestPrepaidPlansTopUpsViIndia.spec.ts >> https://www.myvi.in/ - Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India - Regression Tests >> Verify that 11 Headings are present on Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India @regression
- Location: tests\generated\www-myvi-in\OnlineMobileRechargeBestPrepaidPlansTopUpsViIndia.spec.ts:50:3

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: getByRole('heading', { name: 'Key Features of Vi Online Mobile Recharge:' }).first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Key Features of Vi Online Mobile Recharge:' }).first()

```

```yaml
- dialog:
  - text: Would you like to receive Notifications from Vodafone Idea Limited? We promise to only send you relevant content and give you updates on your transactions
  - button "No thanks"
  - button "Sign me up!"
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
  - navigation "breadcrumb":
    - list:
      - listitem:
        - link "Home":
          - /url: /
      - listitem:
        - link "Prepaid":
          - /url: /prepaid
      - listitem:
        - link "Online mobile recharge":
          - /url: /prepaid/online-mobile-recharge
  - heading "online mobile recharge" [level=1]
  - textbox "Enter mobile number"
  - button "location Maharashtra & Goa":
    - img "location"
    - paragraph: Maharashtra & Goa
  - button "popular recharge packs"
  - button "unlimited 5G"
  - button "nonstop hero"
  - button "super hero"
  - button "hero unlimited"
  - button "unlimited"
  - button "ott"
  - button "data"
  - button "handset loss insurance"
  - button "others"
  - button "top up"
  - button "plan voucher"
  - img "click for scroll right"
  - img "search mrp"
  - textbox "Search by price"
  - button "filter packs filter":
    - img "filter packs"
    - text: filter
  - text: Includes Dhurandhar 2 + 20 OTTs ₹ 175
  - paragraph: "10"
  - paragraph: GB
  - paragraph: data
  - paragraph: "28"
  - paragraph: Days
  - paragraph: validity
  - button "buy"
  - img "JioHotstar"
  - img "Zee5"
  - list:
    - listitem: • 20 OTTs with Vi Movies & TV
    - listitem: • Watch on Mobile only
    - listitem: • No Service Validity+...see more
  - text: Cricket Pack ₹ 44
  - paragraph: "1"
  - paragraph: GB
  - paragraph: data
  - paragraph: "1"
  - paragraph: Day
  - paragraph: validity
  - button "buy"
  - img "Jio Hotstar Subscription"
  - list:
    - listitem: • Data Pack
    - listitem: • pack expires at midnight
    - listitem: • no service validity+...see more
  - text: Cricket Pack ₹ 101
  - paragraph: "5"
  - paragraph: GB
  - paragraph: data
  - paragraph: "30"
  - paragraph: Days
  - paragraph: validity
  - button "buy"
  - img "Jio Hotstar Subscription"
  - list:
    - listitem: • 28 Days of JioHotstar mobile
    - listitem: • no service validity+...see more
  - text: Includes Vi Movies & TV access
  - img "Card Title"
  - text: ₹ 349
  - paragraph: "1.5"
  - paragraph: GB/Day
  - paragraph: data
  - paragraph: "28"
  - paragraph: Days
  - paragraph: validity
  - button "buy"
  - img "5G images"
  - img "Free night data"
  - list:
    - listitem: • Unlimited 5G Data
    - listitem: • Watch FREE OTTs and LIVE TV
    - listitem: • weekend data rollover+...see more
  - text: Includes Vi Movies & TV access
  - img "Card Title"
  - text: ₹ 365
  - paragraph: "2"
  - paragraph: GB/Day
  - paragraph: data
  - paragraph: "28"
  - paragraph: Days
  - paragraph: validity
  - button "buy"
  - img "5G images"
  - img "Vi MTV Subscription"
  - list:
    - listitem: • 12am-12pm Unlimited Data
    - listitem: • Watch FREE OTTs and LIVE TV
    - listitem: • Weekend Data Rollover+...see more
  - text: Includes SonyLIV, Z5 + 17 OTTs ₹ 154
  - paragraph: "2"
  - paragraph: GB
  - paragraph: data
  - paragraph: "1"
  - paragraph: Month
  - paragraph: validity
  - button "buy"
  - img "Zee5"
  - img "Sony LIV"
  - list:
    - listitem: • 19 OTTs on Vi Movies & TV App
    - listitem: • Watch on Mobile only
    - listitem: • No Service Validity+...see more
  - img "Card Title"
  - text: ₹ 408
  - paragraph: "2"
  - paragraph: GB/Day
  - paragraph: data
  - paragraph: "28"
  - paragraph: Days
  - paragraph: validity
  - button "buy"
  - img "5G images"
  - img "Sony LIV Subscription"
  - list:
    - listitem: • Unlimited 5G Data
    - listitem: • 12am-12pm Unlimited Data
    - listitem: • Sony LIV Subscription+...see more
  - text: Dhurandhar 2 on TV & Mobile ₹ 202
  - paragraph: "5"
  - paragraph: GB
  - paragraph: data
  - paragraph: "1"
  - paragraph: Month
  - paragraph: validity
  - button "buy"
  - img "JioHotstar"
  - img "Sony LIV"
  - list:
    - listitem: • 17 OTTs with Vi Movies & TV App
    - listitem: • Watch on TV & Mobile
    - listitem: • No Service Validity+...see more
  - text: Includes Vi Movies & TV access
  - img "Card Title"
  - text: ₹ 859
  - paragraph: "1.5"
  - paragraph: GB/Day
  - paragraph: data
  - paragraph: "84"
  - paragraph: Days
  - paragraph: validity
  - button "buy"
  - img "5G images"
  - img "Free night data"
  - list:
    - listitem: • unlimited calls
    - listitem: • Watch FREE OTTs and LIVE TV
    - listitem: • weekend data rollover+...see more
  - text: Includes 19OTTs on TV & Mobile
  - img "Card Title"
  - text: ₹ 979
  - paragraph: "2"
  - paragraph: GB/Day
  - paragraph: data
  - paragraph: "84"
  - paragraph: Days
  - paragraph: validity
  - button "buy"
  - img "5G images"
  - img "Vi MTV Subscription"
  - list:
    - listitem: • 12am-12pm Unlimited Data
    - listitem: • Unlimited Calls
    - listitem: • SonyLIV, ZEE5 & 17 more OTTs included+...see more
  - text: "@Just ₹366 / 28 Days"
  - img "Card Title"
  - text: ₹ 1099
  - paragraph: Unlimited
  - paragraph
  - paragraph: data
  - paragraph: "84"
  - paragraph: Days
  - paragraph: validity
  - button "buy"
  - img "5G images"
  - img "Full day unlimited data"
  - list:
    - listitem: • Unlimited 5G & 4G Data
    - listitem: • Unlimited Calls+...see more
  - img "Card Title"
  - text: ₹ 1198
  - paragraph: "2"
  - paragraph: GB/Day
  - paragraph: data
  - paragraph: "70"
  - paragraph: Days
  - paragraph: validity
  - button "buy"
  - img "5G images"
  - img "Halfday unlimited data"
  - list:
    - listitem: • Unlimited 5G Data
    - listitem: • 12am-12pm Unlimited Data
    - listitem: • 70 days of Netflix Basic+...see more
  - text: Super saver
  - img "Card Title"
  - text: ₹ 3599
  - paragraph: "2"
  - paragraph: GB/Day
  - paragraph: data
  - paragraph: "365"
  - paragraph: Days
  - paragraph: validity
  - button "buy"
  - img "5G images"
  - img "Halfday unlimited data"
  - list:
    - listitem: • Unlimited 5G Data
    - listitem: • 12am-12pm Unlimited Data
    - listitem: • Weekend Data Rollover+...see more
  - img "Card Title"
  - text: ₹ 3799
  - paragraph: "2"
  - paragraph: GB/Day
  - paragraph: data
  - paragraph: "365"
  - paragraph: Days
  - paragraph: validity
  - button "buy"
  - img "5G images"
  - img "Amazon Prime subscription"
  - list:
    - listitem: • 12am-12pm Unlimited Data
    - listitem: • Unlimited calls
    - listitem: • Amazon Prime Lite Subscription+...see more
  - heading "FAQs for Vi online mobile recharge" [level=2]
  - text: How to recharge Vi prepaid number online?
  - img "Collapse"
  - text: How to use a debit/credit card or Internet banking for online recharge?
  - img "Collapse"
  - text: Are there any additional charges for digital payments with online mobile phone recharge?
  - img "Collapse"
  - text: Can I recharge with a new pack before my current plan validity expires?
  - img "Collapse"
  - text: If my mobile recharge 'Failed' what will happen?
  - img "Collapse"
  - button "See More"
  - heading "Vi Prepaid Online Recharge" [level=2]
  - text: ▼
- link "live-chat-icon":
  - /url: https://www.myvi.in/help-support/faqs?chatbotopen=true
  - img "live-chat-icon"
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
  1   | import { test, expect } from '@playwright/test';
  2   | import { label, severity, feature, story, tag } from 'allure-js-commons';
  3   | import { OnlineMobileRechargeBestPrepaidPlansTopUpsViIndia } from '../../../pages/generated/www-myvi-in/OnlineMobileRechargeBestPrepaidPlansTopUpsViIndia.page';
  4   | import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
  5   | import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';
  6   | 
  7   | test.describe("https://www.myvi.in/ - Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India - Regression Tests", () => {
  8   |   let appPage: OnlineMobileRechargeBestPrepaidPlansTopUpsViIndia;
  9   | 
  10  |   test.beforeEach(async ({ page }) => {
  11  |     appPage = new OnlineMobileRechargeBestPrepaidPlansTopUpsViIndia(page);
  12  |     await appPage.open();
  13  |   });
  14  | 
  15  |   test("Verify that Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India loads successfully @regression", async ({ page }, testInfo) => {
  16  |     await label('suite', "Regression Test Suite");
  17  |     await label('url', "https://www.myvi.in/");
  18  |     await label('domain', "www.myvi.in");
  19  |     await feature("Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India");
  20  |     await story("Verify page loads for regression");
  21  |     await severity("minor");
  22  |     await tag("regression");
  23  | 
  24  |     const evidence = createEvidence({
  25  |       application: "www.myvi.in",
  26  |       suite: "Regression Test Suite",
  27  |       browser: testInfo.project.name || 'chromium',
  28  |       pageName: "Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India",
  29  |       pageUrl: "https://www.myvi.in/prepaid/online-mobile-recharge",
  30  |       testObjective: "Verify page loads for regression",
  31  |     });
  32  | 
  33  |     await test.step("Open URL: https://www.myvi.in/", async () => {
  34  |       await appPage.open();
  35  |       evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
  36  |     });
  37  | 
  38  |     await test.step("Verify the URL is correct", async () => {
  39  |       await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/prepaid\/online\-mobile\-recharge/);
  40  |       evidence.validationsPerformed.push("Verified URL is correct");
  41  |     });
  42  | 
  43  |     await test.step("Capture screenshot evidence", async () => {
  44  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India - Final Evidence", "www.myvi.in");
  45  |       evidence.screenshots.push(screenshotPath);
  46  |     });
  47  | 
  48  |     await attachExecutionSummary(evidence, page, testInfo);
  49  |   });
  50  |   test("Verify that 11 Headings are present on Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India @regression", async ({ page }, testInfo) => {
  51  |     await label('suite', "Regression Test Suite");
  52  |     await label('url', "https://www.myvi.in/");
  53  |     await label('domain', "www.myvi.in");
  54  |     await feature("Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India");
  55  |     await story("Verify Heading elements are present");
  56  |     await severity("minor");
  57  |     await tag("regression");
  58  | 
  59  |     const evidence = createEvidence({
  60  |       application: "www.myvi.in",
  61  |       suite: "Regression Test Suite",
  62  |       browser: testInfo.project.name || 'chromium',
  63  |       pageName: "Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India",
  64  |       pageUrl: "https://www.myvi.in/prepaid/online-mobile-recharge",
  65  |       testObjective: "Verify Heading elements are present",
  66  |     });
  67  | 
  68  |     await test.step("Verify that the heading 'online mobile recharge' exists in the DOM", async () => {
  69  |       await expect(appPage.headingOnlineMobileRecharge.first()).toBeAttached({ timeout: 5000 });
  70  |       evidence.validationsPerformed.push("Verify that the heading 'online mobile recharge' exists in the DOM");
  71  |     });
  72  |     await test.step("Verify that the heading 'FAQs for Vi online mobile recharge' exists in the DOM", async () => {
  73  |       await expect(appPage.headingFaqsForViOnlineMobileRecharge.first()).toBeAttached({ timeout: 5000 });
  74  |       evidence.validationsPerformed.push("Verify that the heading 'FAQs for Vi online mobile recharge' exists in the DOM");
  75  |     });
  76  |     await test.step("Verify that the heading 'Vi Prepaid Online Recharge' exists in the DOM", async () => {
  77  |       await expect(appPage.headingViPrepaidOnlineRecharge.first()).toBeAttached({ timeout: 5000 });
  78  |       evidence.validationsPerformed.push("Verify that the heading 'Vi Prepaid Online Recharge' exists in the DOM");
  79  |     });
  80  |     await test.step("Verify that the heading 'Key Features of Vi Online Mobile Recharge:' exists in the DOM", async () => {
> 81  |       await expect(appPage.headingKeyFeaturesOfViOnlineMobileRecharge.first()).toBeAttached({ timeout: 5000 });
      |                                                                                ^ Error: expect(locator).toBeAttached() failed
  82  |       evidence.validationsPerformed.push("Verify that the heading 'Key Features of Vi Online Mobile Recharge:' exists in the DOM");
  83  |     });
  84  |     await test.step("Verify that the heading 'How to Recharge Online with Vi?' exists in the DOM", async () => {
  85  |       await expect(appPage.headingHowToRechargeOnlineWithVi.first()).toBeAttached({ timeout: 5000 });
  86  |       evidence.validationsPerformed.push("Verify that the heading 'How to Recharge Online with Vi?' exists in the DOM");
  87  |     });
  88  | 
  89  |     await test.step("Capture screenshot evidence", async () => {
  90  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India - Heading Verification", "www.myvi.in");
  91  |       evidence.screenshots.push(screenshotPath);
  92  |     });
  93  | 
  94  |     await attachExecutionSummary(evidence, page, testInfo);
  95  |   });
  96  |   test("Verify that 90 Links are present on Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India @regression", async ({ page }, testInfo) => {
  97  |     await label('suite', "Regression Test Suite");
  98  |     await label('url', "https://www.myvi.in/");
  99  |     await label('domain', "www.myvi.in");
  100 |     await feature("Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India");
  101 |     await story("Verify Link elements are present");
  102 |     await severity("minor");
  103 |     await tag("regression");
  104 | 
  105 |     const evidence = createEvidence({
  106 |       application: "www.myvi.in",
  107 |       suite: "Regression Test Suite",
  108 |       browser: testInfo.project.name || 'chromium',
  109 |       pageName: "Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India",
  110 |       pageUrl: "https://www.myvi.in/prepaid/online-mobile-recharge",
  111 |       testObjective: "Verify Link elements are present",
  112 |     });
  113 | 
  114 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  115 |       await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
  116 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  117 |     });
  118 |     await test.step("Verify that the link 'Home' exists in the DOM", async () => {
  119 |       await expect(appPage.linkHome.first()).toBeAttached({ timeout: 5000 });
  120 |       evidence.validationsPerformed.push("Verify that the link 'Home' exists in the DOM");
  121 |     });
  122 |     await test.step("Verify that the link 'Prepaid' exists in the DOM", async () => {
  123 |       await expect(appPage.linkPrepaid.first()).toBeAttached({ timeout: 5000 });
  124 |       evidence.validationsPerformed.push("Verify that the link 'Prepaid' exists in the DOM");
  125 |     });
  126 |     await test.step("Verify that the link 'Online mobile recharge' exists in the DOM", async () => {
  127 |       await expect(appPage.linkOnlineMobileRecharge.first()).toBeAttached({ timeout: 5000 });
  128 |       evidence.validationsPerformed.push("Verify that the link 'Online mobile recharge' exists in the DOM");
  129 |     });
  130 |     await test.step("Verify that the link 'Vi App' exists in the DOM", async () => {
  131 |       await expect(appPage.linkViApp.first()).toBeAttached({ timeout: 5000 });
  132 |       evidence.validationsPerformed.push("Verify that the link 'Vi App' exists in the DOM");
  133 |     });
  134 | 
  135 |     await test.step("Capture screenshot evidence", async () => {
  136 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India - Link Verification", "www.myvi.in");
  137 |       evidence.screenshots.push(screenshotPath);
  138 |     });
  139 | 
  140 |     await attachExecutionSummary(evidence, page, testInfo);
  141 |   });
  142 |   test("Verify that 29 Buttons are present on Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India @regression", async ({ page }, testInfo) => {
  143 |     await label('suite', "Regression Test Suite");
  144 |     await label('url', "https://www.myvi.in/");
  145 |     await label('domain', "www.myvi.in");
  146 |     await feature("Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India");
  147 |     await story("Verify Button elements are present");
  148 |     await severity("minor");
  149 |     await tag("regression");
  150 | 
  151 |     const evidence = createEvidence({
  152 |       application: "www.myvi.in",
  153 |       suite: "Regression Test Suite",
  154 |       browser: testInfo.project.name || 'chromium',
  155 |       pageName: "Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India",
  156 |       pageUrl: "https://www.myvi.in/prepaid/online-mobile-recharge",
  157 |       testObjective: "Verify Button elements are present",
  158 |     });
  159 | 
  160 |     await test.step("Verify that the button 'Maharashtra & Goa' exists in the DOM", async () => {
  161 |       await expect(appPage.buttonMaharashtraGoa.first()).toBeAttached({ timeout: 5000 });
  162 |       evidence.validationsPerformed.push("Verify that the button 'Maharashtra & Goa' exists in the DOM");
  163 |     });
  164 |     await test.step("Verify that the button 'popular recharge packs' exists in the DOM", async () => {
  165 |       await expect(appPage.buttonPopularRechargePacks.first()).toBeAttached({ timeout: 5000 });
  166 |       evidence.validationsPerformed.push("Verify that the button 'popular recharge packs' exists in the DOM");
  167 |     });
  168 |     await test.step("Verify that the button 'unlimited 5G' exists in the DOM", async () => {
  169 |       await expect(appPage.buttonUnlimited5g.first()).toBeAttached({ timeout: 5000 });
  170 |       evidence.validationsPerformed.push("Verify that the button 'unlimited 5G' exists in the DOM");
  171 |     });
  172 |     await test.step("Verify that the button 'nonstop hero' exists in the DOM", async () => {
  173 |       await expect(appPage.buttonNonstopHero.first()).toBeAttached({ timeout: 5000 });
  174 |       evidence.validationsPerformed.push("Verify that the button 'nonstop hero' exists in the DOM");
  175 |     });
  176 |     await test.step("Verify that the button 'super hero' exists in the DOM", async () => {
  177 |       await expect(appPage.buttonSuperHero.first()).toBeAttached({ timeout: 5000 });
  178 |       evidence.validationsPerformed.push("Verify that the button 'super hero' exists in the DOM");
  179 |     });
  180 | 
  181 |     await test.step("Capture screenshot evidence", async () => {
```