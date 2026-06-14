# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\ViDataPacksMobileDataRechargePlansViIndia.spec.ts >> https://www.myvi.in/ - Vi Data Packs - Mobile Data Recharge Plans | Vi India - Regression Tests >> Verify that 105 Links are present on Vi Data Packs - Mobile Data Recharge Plans | Vi India @regression
- Location: tests\generated\www-myvi-in\ViDataPacksMobileDataRechargePlansViIndia.spec.ts:96:3

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
- navigation "breadcrumb":
  - list:
    - listitem:
      - link "Home":
        - /url: /
    - listitem:
      - link "prepaid":
        - /url: /prepaid
    - listitem:
      - link "Data Packs":
        - /url: /prepaid/mobile-data-packs
- img "Recharge with the NonStop Hero prepaid unlimited data plan to enjoy unlimited 4g and unlimited 5g"
- heading "Prepaid Mobile Data Packs & Plans" [level=1]
- paragraph: Explore Vi (Vodafone Idea) super-fast Data Plans
- img "location"
- paragraph:
  - text: Data Recharge Plans for
  - strong: Maharashtra & Goa
  - text: Circle
  - link "Change":
    - /url: "#"
- heading "Featured Data Packs & Plans" [level=2]
- text: Includes Dhurandhar 2 + 20 OTTs ₹ 175
- paragraph: "10"
- paragraph: GB
- paragraph: data
- paragraph: "28"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: 20 OTTs with Vi Movies & TV
- text: • Watch on Mobile only • No Service Validity+...see more ₹ 23
- paragraph: "1"
- paragraph: GB
- paragraph: data
- paragraph: "1"
- paragraph: day
- paragraph: validity
- button "buy"
- text: •
- strong: Data Pack
- text: • pack expires at midnight • no service validity+...see more Cricket Pack ₹ 44
- paragraph: "1"
- paragraph: GB
- paragraph: data
- paragraph: "1"
- paragraph: day
- paragraph: validity
- button "buy"
- img "logo - 0"
- text: •
- strong: Data Pack
- text: • pack expires at midnight • no service validity+...see more Includes JioHotstar, SonyLIV Z5 ₹ 248
- paragraph: "6"
- paragraph: GB
- paragraph: data
- paragraph: "1"
- paragraph: month
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: 20 OTTs with Vi Movies & TV App
- text: • Watch on TV & Mobile • No Service Validity+...see more ₹ 26
- paragraph: "1.5"
- paragraph: GB
- paragraph: data
- paragraph: "1"
- paragraph: day
- paragraph: validity
- button "buy"
- text: •
- strong: Data Pack
- text: • pack expires at midnight • no service validity+...see more ₹ 33
- paragraph: "2"
- paragraph: GB
- paragraph: data
- paragraph: "2"
- paragraph: days
- paragraph: validity
- button "buy"
- text: •
- strong: Data Pack
- text: • no service validity • no outgoing SMS+...see more Cricket Pack ₹ 101
- paragraph: "5"
- paragraph: GB
- paragraph: data
- paragraph: "30"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- text: •
- strong: 28 Days of JioHotstar mobile
- text: • no service validity+...see more ₹ 48
- paragraph: "6"
- paragraph: GB
- paragraph: data
- paragraph: "3"
- paragraph: days
- paragraph: validity
- button "buy"
- text: •
- strong: Data Pack
- text: • no service validity • no outgoing SMS+...see more ₹ 49
- paragraph: unlimited
- paragraph
- paragraph: data
- paragraph: "1"
- paragraph: day
- paragraph: validity
- button "buy"
- text: •
- strong: pack expires at midnight
- text: • no service validity • no outgoing SMS+...see more Handset Insurance @Rs21/Month ₹ 251
- paragraph: "10"
- paragraph: GB
- paragraph: data
- paragraph: "30"
- paragraph: days
- paragraph: validity
- button "buy"
- text: •
- strong: handset loss insurance + Data pack
- text: • upto Rs25000 handset loss insurance cover -365days • no service validity+...see more Handset Insurance @Rs34/Month ₹ 201
- paragraph: "10"
- paragraph: GB
- paragraph: data
- paragraph: "30"
- paragraph: days
- paragraph: validity
- button "buy"
- text: •
- strong: handset loss insurance + Data pack
- text: • upto Rs25000 handset loss insurance cover -180days • no service validity+...see more ₹ 61
- paragraph: "2"
- paragraph: GB
- paragraph: data
- paragraph: "15"
- paragraph: days
- paragraph: validity
- button "buy"
- text: •
- strong: handset loss insurance + Data pack
- text: • upto Rs25000 handset loss insurance cover -30days • no service validity+...see more ₹ 139
- paragraph: "12"
- paragraph: GB
- paragraph: data
- paragraph: "28"
- paragraph: days
- paragraph: validity
- button "buy"
- text: •
- strong: Data Pack
- text: • no service validity • no outgoing SMS+...see more ₹ 169
- paragraph: "8"
- paragraph: GB
- paragraph: data
- paragraph: "90"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- text: •
- strong: 84 Days of JioHotstar mobile
- text: • no service validity+...see more Daily data top up ₹ 208
- paragraph: "1.5"
- paragraph: GB/day
- paragraph: data
- paragraph: "30"
- paragraph: days
- paragraph: validity
- button "buy"
- text: •
- strong: no service validity
- text: • no outgoing SMS+...see more Daily data top up ₹ 145
- paragraph: "1"
- paragraph: GB/day
- paragraph: data
- paragraph: "28"
- paragraph: days
- paragraph: validity
- button "buy"
- text: •
- strong: Data Pack
- text: • no service validity+...see more Includes SonyLIV, Z5 + 17 OTTs ₹ 154
- paragraph: "2"
- paragraph: GB
- paragraph: data
- paragraph: "1"
- paragraph: month
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: 19 OTTs on Vi Movies & TV App
- text: • Watch on Mobile only • No Service Validity+...see more ₹ 89
- paragraph: "6"
- paragraph: GB
- paragraph: data
- paragraph: "7"
- paragraph: days
- paragraph: validity
- button "buy"
- text: •
- strong: Data Pack
- text: • no service validity • no outgoing SMS+...see more ₹ 348
- paragraph: "50"
- paragraph: GB
- paragraph: data
- paragraph: "28"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- text: •
- strong: work from home offer
- text: • no outgoing SMS+...see more ₹ 488
- paragraph: "100"
- paragraph: GB
- paragraph: data
- paragraph: "56"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- text: •
- strong: work from home offer
- text: • no outgoing SMS+...see more Premium Pack - Includes Sony Liv ₹ 95
- paragraph: "4"
- paragraph: GB
- paragraph: data
- paragraph: "14"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- text: •
- strong: Data + OTT Pack
- text: • 28 days of SonyLIV mobile • no service validity+...see more ₹ 69
- paragraph: "3"
- paragraph: GB
- paragraph: data
- paragraph: "28"
- paragraph: days
- paragraph: validity
- button "buy"
- text: •
- strong: Data Pack
- text: • no service validity • no outgoing SMS+...see more Dhurandhar 2 on TV & Mobile ₹ 202
- paragraph: "5"
- paragraph: GB
- paragraph: data
- paragraph: "1"
- paragraph: month
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: 17 OTTs with Vi Movies & TV App
- text: • Watch on TV & Mobile • No Service Validity+...see more Data Only Pack ₹ 1189
- paragraph: "50"
- paragraph: GB
- paragraph: data
- paragraph: "365"
- paragraph: days
- paragraph: validity
- button "buy"
- text: •
- strong: no service validity
- text: • no outgoing SMS+...see more Daily data top up ₹ 99
- paragraph: unlimited
- paragraph
- paragraph: data
- paragraph: "2"
- paragraph: days
- paragraph: validity
- button "buy"
- text: •
- strong: Data Pack
- text: • no service validity • no outgoing SMS+...see more
- heading "Frequently Asked Questions About Vi Prepaid Data Packs" [level=2]
- text: Why choose a Vi (Vodafone Idea) Data pack?
- img "Collapse"
- text: What does validity in Vi (Vodafone Idea) data plans mean?
- img "Collapse"
- text: How to choose the best mobile data pack?
- img "Collapse"
- text: How to recharge my mobile data?
- img "Collapse"
- text: Can I use data after my daily limit?
- img "Collapse"
- button "See More"
- heading "Data packs" [level=2]
- img "arrow"
- paragraph: Vi (Vodafone Idea) brings to you a diverse range of the best mobile data plans with reliable and secure super-fast Data. Explore and choose a mobile data recharge plan based on your choice of validity or data requirement, and forget about dreadful connectivity woes. With Vi (Vodafone Idea) prepaid super-fast net packs, enjoy data recharge at pocket-friendly prices and get the freedom to stream and connect faster!
- paragraph: "Benefits of Vi Data Plans:"
- list:
  - listitem:
    - text: Easily work from home with bulk Vi
    - link "data recharge":
      - /url: https://www.myvi.in/prepaid/mobile-data-packs
    - text: offering 50GB, 75GB or 100GB data.
  - listitem: Unrestricted service validity ensures complete use of your internet recharge.
  - listitem:
    - text: 1 year of
    - link "JioHotstar":
      - /url: https://www.myvi.in/jiohotstar-subscription-offer
    - link "Mobile":
      - /url: https://www.myvi.in/disney-plus-hotstar-subscription-offer
    - text: access with select Vi net packs.
  - listitem: Never run out of pack data with affordable Vi data recharge options.
  - listitem:
    - text: High-quality streaming with the
    - link "5G":
      - /url: https://www.myvi.in/5g-network
    - text: network.
  - listitem: Quick data pack recharge with Multiple payment options.
- paragraph:
  - text: Vi net recharge plans start as low as ₹22 and have a wide range of validity. Get 1GB data plan with one day validity, or choose the best data plan in India with a validity of 21 days, 28 days or 56 days. Not only this, with Vi net recharge, you can also binge-watch all you want with 100GB of data! Vi data packs also ensure additional benefits based on the pack value. Also, explore Vi per day data plans that include
  - link "1 GB Per Day Plans":
    - /url: https://www.myvi.in/prepaid/vi-1gb-per-day-plans
  - text: ","
  - link "1.5 GB Per Day Plans":
    - /url: https://www.myvi.in/prepaid/vi-1.5gb-per-day-plans
  - text: ","
  - link "2 GB Per Day Plans":
    - /url: https://www.myvi.in/prepaid/vi-2gb-per-day-plans
  - text: ","
  - link "3 GB Per Day Plans":
    - /url: https://www.myvi.in/prepaid/vi-3gb-per-day-plans
  - text: ","
  - link "4 GB Per Day Plans":
    - /url: https://www.myvi.in/prepaid/vi-4gb-per-day-plans
  - text: ","
  - link "Work From Home Packs":
    - /url: https://www.myvi.in/prepaid/work-from-home-packs
  - text: and more. For cashback Offers on recharge, visit
  - link "Recharge Cashback Offers":
    - /url: https://www.myvi.in/prepaid/recharge-cashback-offers
  - text: page.
- paragraph: "Steps on how to recharge:"
- paragraph: Avail a 5G-ready mobile data package in a few simple steps.
- list:
  - listitem:
    - text: Visit the
    - link "data packs":
      - /url: https://www.myvi.in/prepaid/mobile-data-packs
    - text: page on the Vi (Vodafone Idea) website
  - listitem: Browse through the different super-fast data plans and select the one that suits your needs
  - listitem: Enter your mobile number and buy the desired net package.
- paragraph: These 5G-ready best prepaid data plans provide hassle-free data connectivity.
- paragraph:
  - text: Recharge with the Vi NonStop Hero unlimited data Plan, the only telecom recharge plan in India offering unlimited calls and truly
  - link "unlimited 4G and 5G data":
    - /url: https://www.myvi.in/non-stop-hero-unlimited-data-plans
  - text: . Without any daily quota limits or throttling, Vi NonStop Hero is the ideal recharge plan for streaming online content, extensive video calls, and, as the name implies non-stop connectivity across India, making it perfect for users who rely on their mobile network for all-day, high-volume internet usage.
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
  - link "Vodafone Idea Foundation":
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
  - link "Vi Services":
    - /url: https://www.myvi.in/value-added-services/vi-services
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
  - text: Zero Platform Fee
  - img
```

# Test source

```ts
  15  |   test("Verify that Vi Data Packs - Mobile Data Recharge Plans | Vi India loads successfully @regression", async ({ page }, testInfo) => {
  16  |     await label('suite', "Regression Test Suite");
  17  |     await label('url', "https://www.myvi.in/");
  18  |     await label('domain', "www.myvi.in");
  19  |     await feature("Vi Data Packs - Mobile Data Recharge Plans | Vi India");
  20  |     await story("Verify page loads for regression");
  21  |     await severity("minor");
  22  |     await tag("regression");
  23  | 
  24  |     const evidence = createEvidence({
  25  |       application: "www.myvi.in",
  26  |       suite: "Regression Test Suite",
  27  |       browser: testInfo.project.name || 'chromium',
  28  |       pageName: "Vi Data Packs - Mobile Data Recharge Plans | Vi India",
  29  |       pageUrl: "https://www.myvi.in/prepaid/mobile-data-packs",
  30  |       testObjective: "Verify page loads for regression",
  31  |     });
  32  | 
  33  |     await test.step("Open URL: https://www.myvi.in/", async () => {
  34  |       await appPage.open();
  35  |       evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
  36  |     });
  37  | 
  38  |     await test.step("Verify the URL is correct", async () => {
  39  |       await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/prepaid\/mobile\-data\-packs/);
  40  |       evidence.validationsPerformed.push("Verified URL is correct");
  41  |     });
  42  | 
  43  |     await test.step("Capture screenshot evidence", async () => {
  44  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Data Packs - Mobile Data Recharge Plans | Vi India - Final Evidence", "www.myvi.in");
  45  |       evidence.screenshots.push(screenshotPath);
  46  |     });
  47  | 
  48  |     await attachExecutionSummary(evidence, page, testInfo);
  49  |   });
  50  |   test("Verify that 9 Headings are present on Vi Data Packs - Mobile Data Recharge Plans | Vi India @regression", async ({ page }, testInfo) => {
  51  |     await label('suite', "Regression Test Suite");
  52  |     await label('url', "https://www.myvi.in/");
  53  |     await label('domain', "www.myvi.in");
  54  |     await feature("Vi Data Packs - Mobile Data Recharge Plans | Vi India");
  55  |     await story("Verify Heading elements are present");
  56  |     await severity("minor");
  57  |     await tag("regression");
  58  | 
  59  |     const evidence = createEvidence({
  60  |       application: "www.myvi.in",
  61  |       suite: "Regression Test Suite",
  62  |       browser: testInfo.project.name || 'chromium',
  63  |       pageName: "Vi Data Packs - Mobile Data Recharge Plans | Vi India",
  64  |       pageUrl: "https://www.myvi.in/prepaid/mobile-data-packs",
  65  |       testObjective: "Verify Heading elements are present",
  66  |     });
  67  | 
  68  |     await test.step("Verify that the heading 'Prepaid Mobile Data Packs & Plans' exists in the DOM", async () => {
  69  |       await expect(appPage.headingPrepaidMobileDataPacksPlans.first()).toBeAttached({ timeout: 5000 });
  70  |       evidence.validationsPerformed.push("Verify that the heading 'Prepaid Mobile Data Packs & Plans' exists in the DOM");
  71  |     });
  72  |     await test.step("Verify that the heading 'Featured Data Packs & Plans' exists in the DOM", async () => {
  73  |       await expect(appPage.headingFeaturedDataPacksPlans.first()).toBeAttached({ timeout: 5000 });
  74  |       evidence.validationsPerformed.push("Verify that the heading 'Featured Data Packs & Plans' exists in the DOM");
  75  |     });
  76  |     await test.step("Verify that the heading 'Frequently Asked Questions About Vi Prepaid Data Packs' exists in the DOM", async () => {
  77  |       await expect(appPage.headingFrequentlyAskedQuestionsAboutViPrepaidDataPacks.first()).toBeAttached({ timeout: 5000 });
  78  |       evidence.validationsPerformed.push("Verify that the heading 'Frequently Asked Questions About Vi Prepaid Data Packs' exists in the DOM");
  79  |     });
  80  |     await test.step("Verify that the heading 'Data packs' exists in the DOM", async () => {
  81  |       await expect(appPage.headingDataPacks.first()).toBeAttached({ timeout: 5000 });
  82  |       evidence.validationsPerformed.push("Verify that the heading 'Data packs' exists in the DOM");
  83  |     });
  84  |     await test.step("Verify that the heading 'Vodafone Idea Limited' exists in the DOM", async () => {
  85  |       await expect(appPage.headingVodafoneIdeaLimited.first()).toBeAttached({ timeout: 5000 });
  86  |       evidence.validationsPerformed.push("Verify that the heading 'Vodafone Idea Limited' exists in the DOM");
  87  |     });
  88  | 
  89  |     await test.step("Capture screenshot evidence", async () => {
  90  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Data Packs - Mobile Data Recharge Plans | Vi India - Heading Verification", "www.myvi.in");
  91  |       evidence.screenshots.push(screenshotPath);
  92  |     });
  93  | 
  94  |     await attachExecutionSummary(evidence, page, testInfo);
  95  |   });
  96  |   test("Verify that 105 Links are present on Vi Data Packs - Mobile Data Recharge Plans | Vi India @regression", async ({ page }, testInfo) => {
  97  |     await label('suite', "Regression Test Suite");
  98  |     await label('url', "https://www.myvi.in/");
  99  |     await label('domain', "www.myvi.in");
  100 |     await feature("Vi Data Packs - Mobile Data Recharge Plans | Vi India");
  101 |     await story("Verify Link elements are present");
  102 |     await severity("minor");
  103 |     await tag("regression");
  104 | 
  105 |     const evidence = createEvidence({
  106 |       application: "www.myvi.in",
  107 |       suite: "Regression Test Suite",
  108 |       browser: testInfo.project.name || 'chromium',
  109 |       pageName: "Vi Data Packs - Mobile Data Recharge Plans | Vi India",
  110 |       pageUrl: "https://www.myvi.in/prepaid/mobile-data-packs",
  111 |       testObjective: "Verify Link elements are present",
  112 |     });
  113 | 
  114 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
> 115 |       await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      |                                           ^ Error: expect(locator).toBeAttached() failed
  116 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  117 |     });
  118 |     await test.step("Verify that the link 'Home' exists in the DOM", async () => {
  119 |       await expect(appPage.linkHome.first()).toBeAttached({ timeout: 5000 });
  120 |       evidence.validationsPerformed.push("Verify that the link 'Home' exists in the DOM");
  121 |     });
  122 |     await test.step("Verify that the link 'prepaid' exists in the DOM", async () => {
  123 |       await expect(appPage.linkPrepaid.first()).toBeAttached({ timeout: 5000 });
  124 |       evidence.validationsPerformed.push("Verify that the link 'prepaid' exists in the DOM");
  125 |     });
  126 |     await test.step("Verify that the link 'Data Packs' exists in the DOM", async () => {
  127 |       await expect(appPage.linkDataPacks.first()).toBeAttached({ timeout: 5000 });
  128 |       evidence.validationsPerformed.push("Verify that the link 'Data Packs' exists in the DOM");
  129 |     });
  130 |     await test.step("Verify that the link 'Change' exists in the DOM", async () => {
  131 |       await expect(appPage.linkChange.first()).toBeAttached({ timeout: 5000 });
  132 |       evidence.validationsPerformed.push("Verify that the link 'Change' exists in the DOM");
  133 |     });
  134 | 
  135 |     await test.step("Capture screenshot evidence", async () => {
  136 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Data Packs - Mobile Data Recharge Plans | Vi India - Link Verification", "www.myvi.in");
  137 |       evidence.screenshots.push(screenshotPath);
  138 |     });
  139 | 
  140 |     await attachExecutionSummary(evidence, page, testInfo);
  141 |   });
  142 |   test("Verify that 26 Buttons are present on Vi Data Packs - Mobile Data Recharge Plans | Vi India @regression", async ({ page }, testInfo) => {
  143 |     await label('suite', "Regression Test Suite");
  144 |     await label('url', "https://www.myvi.in/");
  145 |     await label('domain', "www.myvi.in");
  146 |     await feature("Vi Data Packs - Mobile Data Recharge Plans | Vi India");
  147 |     await story("Verify Button elements are present");
  148 |     await severity("minor");
  149 |     await tag("regression");
  150 | 
  151 |     const evidence = createEvidence({
  152 |       application: "www.myvi.in",
  153 |       suite: "Regression Test Suite",
  154 |       browser: testInfo.project.name || 'chromium',
  155 |       pageName: "Vi Data Packs - Mobile Data Recharge Plans | Vi India",
  156 |       pageUrl: "https://www.myvi.in/prepaid/mobile-data-packs",
  157 |       testObjective: "Verify Button elements are present",
  158 |     });
  159 | 
  160 |     await test.step("Verify that the button 'buy' exists in the DOM", async () => {
  161 |       await expect(appPage.buttonBuy.first()).toBeAttached({ timeout: 5000 });
  162 |       evidence.validationsPerformed.push("Verify that the button 'buy' exists in the DOM");
  163 |     });
  164 |     await test.step("Verify that the button 'buy' exists in the DOM", async () => {
  165 |       await expect(appPage.buttonBuy1.first()).toBeAttached({ timeout: 5000 });
  166 |       evidence.validationsPerformed.push("Verify that the button 'buy' exists in the DOM");
  167 |     });
  168 |     await test.step("Verify that the button 'buy' exists in the DOM", async () => {
  169 |       await expect(appPage.buttonBuy2.first()).toBeAttached({ timeout: 5000 });
  170 |       evidence.validationsPerformed.push("Verify that the button 'buy' exists in the DOM");
  171 |     });
  172 |     await test.step("Verify that the button 'buy' exists in the DOM", async () => {
  173 |       await expect(appPage.buttonBuy3.first()).toBeAttached({ timeout: 5000 });
  174 |       evidence.validationsPerformed.push("Verify that the button 'buy' exists in the DOM");
  175 |     });
  176 |     await test.step("Verify that the button 'buy' exists in the DOM", async () => {
  177 |       await expect(appPage.buttonBuy4.first()).toBeAttached({ timeout: 5000 });
  178 |       evidence.validationsPerformed.push("Verify that the button 'buy' exists in the DOM");
  179 |     });
  180 | 
  181 |     await test.step("Capture screenshot evidence", async () => {
  182 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Data Packs - Mobile Data Recharge Plans | Vi India - Button Verification", "www.myvi.in");
  183 |       evidence.screenshots.push(screenshotPath);
  184 |     });
  185 | 
  186 |     await attachExecutionSummary(evidence, page, testInfo);
  187 |   });
  188 |   test("Verify that 1 Input is present on Vi Data Packs - Mobile Data Recharge Plans | Vi India @regression", async ({ page }, testInfo) => {
  189 |     await label('suite', "Regression Test Suite");
  190 |     await label('url', "https://www.myvi.in/");
  191 |     await label('domain', "www.myvi.in");
  192 |     await feature("Vi Data Packs - Mobile Data Recharge Plans | Vi India");
  193 |     await story("Verify Input elements are present");
  194 |     await severity("minor");
  195 |     await tag("regression");
  196 | 
  197 |     const evidence = createEvidence({
  198 |       application: "www.myvi.in",
  199 |       suite: "Regression Test Suite",
  200 |       browser: testInfo.project.name || 'chromium',
  201 |       pageName: "Vi Data Packs - Mobile Data Recharge Plans | Vi India",
  202 |       pageUrl: "https://www.myvi.in/prepaid/mobile-data-packs",
  203 |       testObjective: "Verify Input elements are present",
  204 |     });
  205 | 
  206 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  207 |       await expect(appPage.inputParamdetails.first()).toBeAttached({ timeout: 5000 });
  208 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  209 |     });
  210 | 
  211 |     await test.step("Capture screenshot evidence", async () => {
  212 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Data Packs - Mobile Data Recharge Plans | Vi India - Input Verification", "www.myvi.in");
  213 |       evidence.screenshots.push(screenshotPath);
  214 |     });
  215 | 
```