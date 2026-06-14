# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\ViVodafoneIdeaCustomerCareNumberViComplaintHelplineNumber.spec.ts >> https://www.myvi.in/ - Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number - Regression Tests >> Verify that 172 Links are present on Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number @regression
- Location: tests\generated\www-myvi-in\ViVodafoneIdeaCustomerCareNumberViComplaintHelplineNumber.spec.ts:96:3

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: locator('a[href="https://www.myvi.in/help-support/vi-customer-care-number#"]').first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for locator('a[href="https://www.myvi.in/help-support/vi-customer-care-number#"]').first()

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
- link "No Extra Fee on Vi App recharges!":
  - /url: https://viapp.onelink.me/bSC3/viapp1
- img "img"
- main:
  - heading "Vi Customer Care" [level=1]
  - text: Select Language
  - combobox "Select Language":
    - option "English" [selected]
    - option "Assamese (অসমীয়া)"
    - option "Bengali (বাংলা)"
    - option "Bodo (बड़ो)"
    - option "Dogri (डोगरी)"
    - option "Goan Konkani (गोवा कोंकणी)"
    - option "Gujarati (ગુજરાતી)"
    - option "Hindi (हिन्दी)"
    - option "Kannada (ಕನ್ನಡ)"
    - option "Kashmiri (کٲشُر)"
    - option "Maithili (मैथिली)"
    - option "Malayalam (മലയാളം)"
    - option "Manipuri (মণিপুরী)"
    - option "Marathi (मराठी)"
    - option "Nepali (नेपाली)"
    - option "Odia (ଓଡ଼ିଆ)"
    - option "Punjabi (ਪੰਜਾਬੀ)"
    - option "Sanskrit (संस्कृत)"
    - option "Santali (संताली)"
    - option "Sindhi (سنڌي)"
    - option "Tamil (தமிழ்)"
    - option "Telugu (తెలుగు)"
    - option "Urdu (اردو)"
  - main:
    - paragraph: "office address:"
    - paragraph: Vodafone Idea Limited,
    - paragraph: An Aditya Birla Group & Vodafone partnership,
    - paragraph: Birla Centurion, 10th Floor, Plot No. 794, B Wing, Pandurang Budhkar Marg,
    - paragraph: Worli, Mumbai - 400 030 India
    - paragraph
    - paragraph: registered address
    - paragraph: Vodafone Idea Limited,
    - paragraph: An Aditya Birla Group & Vodafone partnership, Suman Tower, Plot No. 18, Sector no. 11, Gandhinagar - 382011
    - paragraph: India, CIN L32100GJ1996PLC030976.
    - paragraph: "Contact Number : +91-79 6671 4000, FAX : +91-79 2323 2251"
  - main:
    - paragraph:
      - img
    - heading "connect with us on Whatsapp" [level=3]
    - paragraph: Get updates on your Vi account, best offers & more
    - paragraph: WhatsApp number – 9654297000
    - paragraph
    - paragraph:
      - link "Click Here":
        - /url: https://wa.me/919654297000?text=Hi
    - paragraph
    - paragraph
    - paragraph
    - paragraph
    - heading [level=3]
    - heading "Responsible Disclosure policy" [level=3]
    - paragraph: To report any vulnerability or related issues please click on the below link
    - paragraph
    - paragraph:
      - link "Click Here":
        - /url: https://www.myvi.in/Responsible-Disclosure-Policy
    - paragraph
    - paragraph
  - heading "Consumer Care Number" [level=2]
  - table:
    - rowgroup:
      - row "Circles Enquiries and Requests Complaints":
        - cell "Circles":
          - paragraph: Circles
        - cell "Enquiries and Requests":
          - paragraph: Enquiries and Requests
        - cell "Complaints":
          - paragraph: Complaints
      - row "Short Code Long Code Short Code Long Code":
        - cell "Short Code":
          - paragraph: Short Code
        - cell "Long Code":
          - paragraph: Long Code
        - cell "Short Code":
          - paragraph: Short Code
        - cell "Long Code":
          - paragraph: Long Code
      - row "Delhi 199 9891012345 198 8744000198":
        - cell "Delhi"
        - cell "199"
        - cell "9891012345"
        - cell "198"
        - cell "8744000198"
      - row "Rajasthan 199 9887012345 198 9887010198":
        - cell "Rajasthan"
        - cell "199"
        - cell "9887012345"
        - cell "198"
        - cell "9887010198"
      - row "Punjab 199 9814012345 198 9781500198":
        - cell "Punjab"
        - cell "199"
        - cell "9814012345"
        - cell "198"
        - cell "9781500198"
      - row "Haryana 199 9812012345 198 8684000198":
        - cell "Haryana"
        - cell "199"
        - cell "9812012345"
        - cell "198"
        - cell "8684000198"
      - row "Himachal Pradesh 199 9882012345 198 9882900198":
        - cell "Himachal Pradesh"
        - cell "199"
        - cell "9882012345"
        - cell "198"
        - cell "9882900198"
      - row "Jammu & Kashmir 199 9086012345 198 9086046198":
        - cell "Jammu & Kashmir"
        - cell "199"
        - cell "9086012345"
        - cell "198"
        - cell "9086046198"
      - row "UP (E) 199 9889012345 198 8576000198":
        - cell "UP (E)"
        - cell "199"
        - cell "9889012345"
        - cell "198"
        - cell "8576000198"
      - row "UP (W) 199 9837012345 198 8941000198":
        - cell "UP (W)"
        - cell "199"
        - cell "9837012345"
        - cell "198"
        - cell "8941000198"
      - row "Kolkata 199 9088012345 198 9088100198":
        - cell "Kolkata"
        - cell "199"
        - cell "9088012345"
        - cell "198"
        - cell "9088100198"
      - row "Rest of Bengal 199 9093012345 198 9093100198":
        - cell "Rest of Bengal"
        - cell "199"
        - cell "9093012345"
        - cell "198"
        - cell "9093100198"
      - row "Assam 199 9085012345 198 9085000198":
        - cell "Assam"
        - cell "199"
        - cell "9085012345"
        - cell "198"
        - cell "9085000198"
      - row "NESA 199 9089012345 198 9089000198":
        - cell "NESA"
        - cell "199"
        - cell "9089012345"
        - cell "198"
        - cell "9089000198"
      - row "Orissa 199 9090012345 198 9090000198":
        - cell "Orissa"
        - cell "199"
        - cell "9090012345"
        - cell "198"
        - cell "9090000198"
      - row "Bihar 199 9708012345 198 9708000198":
        - cell "Bihar"
        - cell "199"
        - cell "9708012345"
        - cell "198"
        - cell "9708000198"
      - row "Andhra Pradesh 199 9848012345 198 9848009198":
        - cell "Andhra Pradesh"
        - cell "199"
        - cell "9848012345"
        - cell "198"
        - cell "9848009198"
      - row "Karnataka 199 9844012345 198 9844000198":
        - cell "Karnataka"
        - cell "199"
        - cell "9844012345"
        - cell "198"
        - cell "9844000198"
      - row "Tamil Nadu 199 9092012345 198 9092000198":
        - cell "Tamil Nadu"
        - cell "199"
        - cell "9092012345"
        - cell "198"
        - cell "9092000198"
      - row "Kerala 199 9847012345 198 9947000198":
        - cell "Kerala"
        - cell "199"
        - cell "9847012345"
        - cell "198"
        - cell "9947000198"
      - row "Madhya Pradesh 199 9826012345 198 9826000198":
        - cell "Madhya Pradesh"
        - cell "199"
        - cell "9826012345"
        - cell "198"
        - cell "9826000198"
      - row "Mumbai 199 9702012345 198 9702000198":
        - cell "Mumbai"
        - cell "199"
        - cell "9702012345"
        - cell "198"
        - cell "9702000198"
      - row "Gujarat 199 9824012345 198 9824000198":
        - cell "Gujarat"
        - cell "199"
        - cell "9824012345"
        - cell "198"
        - cell "9824000198"
      - row "Maharashtra & Goa 199 9822012345 198 9822000198":
        - cell "Maharashtra & Goa"
        - cell "199"
        - cell "9822012345"
        - cell "198"
        - cell "9822000198"
  - heading "Circle Complaint Centre contact details" [level=2]
  - heading "Other Helpline Numbers" [level=2]
  - heading "appellate authority" [level=2]
  - heading "consumer education workshop" [level=2]
  - heading "service quality" [level=2]
  - heading "Telecom consumer’s charter" [level=2]
  - heading "Procedure for lodging complaints and service requests" [level=2]
  - heading "Time limits for redressal of complaints" [level=2]
- main:
  - heading "get more help from your business" [level=3]
  - img
  - heading "write to us" [level=3]
  - text: customercare@vodafoneidea.com Kindly email us from your registered email & mention mobile number in subject line
  - link "complaints & requests Get to know the status click here":
    - /url: "/help-support/track-complaints-and-requests "
    - img
    - heading "complaints & requests" [level=3]
    - text: Get to know the status click here
  - link "FAQs Click here to get more help related to Vi products and services":
    - /url: "/help-support/faqs "
    - img
    - heading "FAQs" [level=3]
    - text: Click here to get more help related to Vi products and services
- link "live-chat-icon":
  - /url: /help-support/faqs?chatbotopen=true
  - img "live-chat-icon"
- contentinfo:
  - link:
    - /url: https://vi.app.link/viappinst
    - img
  - img
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
- paragraph:
  - text: Zero Platform Fee
  - img
```

# Test source

```ts
  15  |   test("Verify that Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number loads successfully @regression", async ({ page }, testInfo) => {
  16  |     await label('suite', "Regression Test Suite");
  17  |     await label('url', "https://www.myvi.in/");
  18  |     await label('domain', "www.myvi.in");
  19  |     await feature("Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number");
  20  |     await story("Verify page loads for regression");
  21  |     await severity("minor");
  22  |     await tag("regression");
  23  | 
  24  |     const evidence = createEvidence({
  25  |       application: "www.myvi.in",
  26  |       suite: "Regression Test Suite",
  27  |       browser: testInfo.project.name || 'chromium',
  28  |       pageName: "Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number",
  29  |       pageUrl: "https://www.myvi.in/help-support/vi-customer-care-number",
  30  |       testObjective: "Verify page loads for regression",
  31  |     });
  32  | 
  33  |     await test.step("Open URL: https://www.myvi.in/", async () => {
  34  |       await appPage.open();
  35  |       evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
  36  |     });
  37  | 
  38  |     await test.step("Verify the URL is correct", async () => {
  39  |       await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/help\-support\/vi\-customer\-care\-number/);
  40  |       evidence.validationsPerformed.push("Verified URL is correct");
  41  |     });
  42  | 
  43  |     await test.step("Capture screenshot evidence", async () => {
  44  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number - Final Evidence", "www.myvi.in");
  45  |       evidence.screenshots.push(screenshotPath);
  46  |     });
  47  | 
  48  |     await attachExecutionSummary(evidence, page, testInfo);
  49  |   });
  50  |   test("Verify that 16 Headings are present on Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number @regression", async ({ page }, testInfo) => {
  51  |     await label('suite', "Regression Test Suite");
  52  |     await label('url', "https://www.myvi.in/");
  53  |     await label('domain', "www.myvi.in");
  54  |     await feature("Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number");
  55  |     await story("Verify Heading elements are present");
  56  |     await severity("minor");
  57  |     await tag("regression");
  58  | 
  59  |     const evidence = createEvidence({
  60  |       application: "www.myvi.in",
  61  |       suite: "Regression Test Suite",
  62  |       browser: testInfo.project.name || 'chromium',
  63  |       pageName: "Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number",
  64  |       pageUrl: "https://www.myvi.in/help-support/vi-customer-care-number",
  65  |       testObjective: "Verify Heading elements are present",
  66  |     });
  67  | 
  68  |     await test.step("Verify that the heading 'Vi Customer Care' exists in the DOM", async () => {
  69  |       await expect(appPage.headingViCustomerCare.first()).toBeAttached({ timeout: 5000 });
  70  |       evidence.validationsPerformed.push("Verify that the heading 'Vi Customer Care' exists in the DOM");
  71  |     });
  72  |     await test.step("Verify that the heading 'connect with us on Whatsapp' exists in the DOM", async () => {
  73  |       await expect(appPage.headingConnectWithUsOnWhatsapp.first()).toBeAttached({ timeout: 5000 });
  74  |       evidence.validationsPerformed.push("Verify that the heading 'connect with us on Whatsapp' exists in the DOM");
  75  |     });
  76  |     await test.step("Verify that the heading 'Responsible Disclosure policy' exists in the DOM", async () => {
  77  |       await expect(appPage.headingResponsibleDisclosurePolicy.first()).toBeAttached({ timeout: 5000 });
  78  |       evidence.validationsPerformed.push("Verify that the heading 'Responsible Disclosure policy' exists in the DOM");
  79  |     });
  80  |     await test.step("Verify that the heading 'Consumer Care Number' exists in the DOM", async () => {
  81  |       await expect(appPage.headingConsumerCareNumber.first()).toBeAttached({ timeout: 5000 });
  82  |       evidence.validationsPerformed.push("Verify that the heading 'Consumer Care Number' exists in the DOM");
  83  |     });
  84  |     await test.step("Verify that the heading 'Circle Complaint Centre contact details' exists in the DOM", async () => {
  85  |       await expect(appPage.headingCircleComplaintCentreContactDetails.first()).toBeAttached({ timeout: 5000 });
  86  |       evidence.validationsPerformed.push("Verify that the heading 'Circle Complaint Centre contact details' exists in the DOM");
  87  |     });
  88  | 
  89  |     await test.step("Capture screenshot evidence", async () => {
  90  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number - Heading Verification", "www.myvi.in");
  91  |       evidence.screenshots.push(screenshotPath);
  92  |     });
  93  | 
  94  |     await attachExecutionSummary(evidence, page, testInfo);
  95  |   });
  96  |   test("Verify that 172 Links are present on Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number @regression", async ({ page }, testInfo) => {
  97  |     await label('suite', "Regression Test Suite");
  98  |     await label('url', "https://www.myvi.in/");
  99  |     await label('domain', "www.myvi.in");
  100 |     await feature("Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number");
  101 |     await story("Verify Link elements are present");
  102 |     await severity("minor");
  103 |     await tag("regression");
  104 | 
  105 |     const evidence = createEvidence({
  106 |       application: "www.myvi.in",
  107 |       suite: "Regression Test Suite",
  108 |       browser: testInfo.project.name || 'chromium',
  109 |       pageName: "Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number",
  110 |       pageUrl: "https://www.myvi.in/help-support/vi-customer-care-number",
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
  136 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number - Link Verification", "www.myvi.in");
  137 |       evidence.screenshots.push(screenshotPath);
  138 |     });
  139 | 
  140 |     await attachExecutionSummary(evidence, page, testInfo);
  141 |   });
  142 |   test("Verify that 14 Buttons are present on Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number @regression", async ({ page }, testInfo) => {
  143 |     await label('suite', "Regression Test Suite");
  144 |     await label('url', "https://www.myvi.in/");
  145 |     await label('domain', "www.myvi.in");
  146 |     await feature("Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number");
  147 |     await story("Verify Button elements are present");
  148 |     await severity("minor");
  149 |     await tag("regression");
  150 | 
  151 |     const evidence = createEvidence({
  152 |       application: "www.myvi.in",
  153 |       suite: "Regression Test Suite",
  154 |       browser: testInfo.project.name || 'chromium',
  155 |       pageName: "Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number",
  156 |       pageUrl: "https://www.myvi.in/help-support/vi-customer-care-number",
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
  182 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number - Button Verification", "www.myvi.in");
  183 |       evidence.screenshots.push(screenshotPath);
  184 |     });
  185 | 
  186 |     await attachExecutionSummary(evidence, page, testInfo);
  187 |   });
  188 |   test("Verify that 75 Inputs are present on Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number @regression", async ({ page }, testInfo) => {
  189 |     await label('suite', "Regression Test Suite");
  190 |     await label('url', "https://www.myvi.in/");
  191 |     await label('domain', "www.myvi.in");
  192 |     await feature("Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number");
  193 |     await story("Verify Input elements are present");
  194 |     await severity("minor");
  195 |     await tag("regression");
  196 | 
  197 |     const evidence = createEvidence({
  198 |       application: "www.myvi.in",
  199 |       suite: "Regression Test Suite",
  200 |       browser: testInfo.project.name || 'chromium',
  201 |       pageName: "Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number",
  202 |       pageUrl: "https://www.myvi.in/help-support/vi-customer-care-number",
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