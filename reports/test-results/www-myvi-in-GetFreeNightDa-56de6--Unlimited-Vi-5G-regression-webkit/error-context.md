# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\GetFreeNightDataBingeYourShowsWithHeroUnlimitedVi5g.spec.ts >> https://www.myvi.in/ - Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G - Regression Tests >> Verify that 3 Menus are present on Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G @regression
- Location: tests\generated\www-myvi-in\GetFreeNightDataBingeYourShowsWithHeroUnlimitedVi5g.spec.ts:248:3

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: getByRole('navigation', { name: 'PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service' }).first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for getByRole('navigation', { name: 'PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service' }).first()

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
- paragraph:
  - link "No Platform Fee on Vi App Recharges!":
    - /url: https://viapp.onelink.me/bSC3/viapp1
- img "ribbon"
- navigation "breadcrumb":
  - list:
    - listitem:
      - link "Home":
        - /url: /
    - listitem:
      - link "prepaid":
        - /url: /prepaid
    - listitem:
      - link "Hero Unlimited":
        - /url: /prepaid/hero-unlimited-and-weekend-data-rollover
- heading "Vi Hero Unlimited" [level=1]
- paragraph: Get benefits like binge all night, weekend data rollover and Data Delight with Vi Hero Unlimited daily data recharge of ₹349 and above.
- button "Vi Hero Unlimited"
- button "Data Delight"
- button "Weekend data Rollover"
- button "Binge All Night"
- heading "Vi hero unlimited data benefits" [level=2]:
  - text: Vi hero
  - link "unlimited data":
    - /url: /prepaid/unlimited-calls-and-data-plans
  - text: benefits
- paragraph: Introducing Vi Hero Unlimited - sirf naam ka nahi, kaam ka unlimited. Now, surf, stream and share even more with benefits like no other - unlimited data from 12:00 – 6:00 am, weekend data rollover and more. So, don’t wait. Switch to Vi Hero Unlimited. Sirf naam ka nahin, kaam ka unlimited.
- link "Download Vi App":
  - /url: https://www.myvi.in/vi-app?shortlink=viapp1&c=Vi%20App%20Install&pid=Website&af_xp=text&source_caller=ui
  - button "Download Vi App"
- img "Vi hero <a href=\"/prepaid/unlimited-calls-and-data-plans\" tabindex=\"-1\"><b>unlimited data</b></a> benefits"
- heading "Up to 2GB of backup Data every month!" [level=2]
- paragraph: Always worried about crossing daily data quotas? We have your back! Login to the ViApp or dial 121249 to claim up to 2GB of additional (back-up) data every month, at no extra cost. Only on Vi Hero Unlimited Daily Data packs starting ₹349.
- link "Download Vi App":
  - /url: https://www.myvi.in/vi-app?shortlink=viapp1&c=Vi%20App%20Install&pid=Website&af_xp=text&source_caller=ui
  - button "Download Vi App"
- img "Up to 2GB of backup Data every month!"
- heading "carry unused data into the weekend" [level=2]
- paragraph: On Vi Hero Unlimited, your unused daily data quota from the weekdays gets accumulated and is made available for use on the weekends. i.e. Saturday & Sunday So binge on the weekends too. Only with Vi Hero Unlimited Daily Data recharges, starting ₹349.
- link "Download Vi App":
  - /url: https://www.myvi.in/vi-app?shortlink=viapp1&c=Vi%20App%20Install&pid=Website&af_xp=text&source_caller=ui
  - button "Download Vi App"
- img "carry unused data into the weekend"
- heading "binge all night, without any limits" [level=2]
- paragraph: Now on Vi Hero Unlimited; you can enjoy all the data you want, from 12 am to 6 am every day, at no extra cost! Go on, binge all night, every night. Only with Vi Hero Unlimited Daily Data recharges, starting ₹349.
- link "Download Vi App":
  - /url: https://www.myvi.in/vi-app?shortlink=viapp1&c=Vi%20App%20Install&pid=Website&af_xp=text&source_caller=ui
  - button "Download Vi App"
- img "binge all night, without any limits"
- img "SIM icon"
- paragraph:
  - text: Still finding a reason to join the
  - strong: Vi network?
  - text: join now!
- button "buy now"
- text: packs with data delight Includes Vi Movies & TV access
- img "Card Title"
- text: ₹ 349
- paragraph: "1.5"
- paragraph: GB/day
- paragraph: data
- paragraph: "28"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G Data
- text: • Watch FREE OTTs and LIVE TV • weekend data rollove+...see more Includes Vi Movies & TV access
- img "Card Title"
- text: ₹ 379
- paragraph: "2"
- paragraph: GB/day
- paragraph: data
- paragraph: "1"
- paragraph: month
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G Data
- text: • Watch FREE OTTs and LIVE TV • Weekend Data Rollove+...see more Includes SonyLIV, Z5 + 17 OTTs
- img "Card Title"
- text: ₹ 449
- paragraph: unlimited
- paragraph
- paragraph: data
- paragraph: "28"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G & 4G Data
- text: • Unlimited calls • 19 OTTs on TV & Mobi+...see more Includes Vi Movies & TV access
- img "Card Title"
- text: ₹ 579
- paragraph: "1.5"
- paragraph: GB/day
- paragraph: data
- paragraph: "56"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G Data
- text: • Watch FREE OTTs and LIVE TV • weekend data rollove+...see more
- button "explore all packs"
- heading "binge all night data, data delights and data rollover FAQs" [level=2]
- text: What’s the Binge All Night Offer means? What speed can I expect with this benefit?
- img "Collapse"
- text: Who will be eligible for the Binge All Night Data benefit?
- img "Collapse"
- text: Will the Binge All Night Data benefit continue in case of any gap between UL pack expiry and the subsequent UL daily data recharge?
- img "Collapse"
- text: What is weekend rollover means?
- img "Collapse"
- text: Who's eligible for weekend data roll over?
- img "Collapse"
- button "See More"
- heading "binge all night data offer TnC" [level=2]
- img "arrow"
- list:
  - listitem: This feature will be applicable from 16th Feb ,2021
  - listitem:
    - text: Night Binge is only available on VIL prepaid
    - link "unlimited data plans":
      - /url: https://www.myvi.in/prepaid/unlimited-calls-and-data-plans
    - text: and calling quota packs of Rs. 349 & above
  - listitem: With this benefit, Data used between 12 midnight to 6 AM will be unlimited, meaning it will not be charged and also not be deduced from daily data quota of Unlimited packs.
  - listitem: This will be over and above the weekend rollover benefits applicable on these recharges
  - listitem: The benefit will be offered at regular data speed (in addition to existing Benefits on respective recharges) at night time, i.e. from 12 midnight to 6 AM on some Unlimited products.
  - listitem: Vodafone Idea Limited (VIL) reserves the right to discontinue, modify or withdraw the roll over or other product features subject to TRAI regulations.
- heading "weekend data rollover TnC" [level=2]
- img "arrow"
- list:
  - listitem: This feature will be applicable from 19th Oct, 2020
  - listitem: Roll over is only on VIL prepaid Unlimited call and Daily Data quota packs of Rs. 349 & above.
  - listitem: Unused Daily Data quota from weekdays (Mon to Fri – 0000 hrs to 2400 hrs) for VIL prepaid subscribers availing these packs will be accumulated and made available for use only on weekends. i.e. Saturday & Sunday (0000 hrs to 2400 hrs). Any unused data will be forfeited post applicable week (ie. post 2400 hrs of Sunday).
  - listitem: Vodafone Idea Limited (VIL) reserves the right to discontinue, modify or withdraw the roll over or other product features subject to TRAI regulations.
  - listitem: To continue availing the roll over benefit, subscriber needs to avail packs as mentioned in Point 1 above within the validity period.
  - listitem:
    - text: The details of the accumulated data will be available for subscribers in the
    - link "Vi app":
      - /url: https://www.myvi.in/vi-app
    - text: /USSD (*199#)
- heading "data delights offer TnC" [level=2]
- img "arrow"
- paragraph:
  - text: Data Delight will be applicable starting 22
  - superscript: nd
  - text: Oct, 2021.
- paragraph: Benefit/Feature DESCRIPTION AND CONDITIONS –
- list:
  - listitem: The 2GB backup data feature is available in a calendar month on eligible recharge packs, in two equal installments of 1GB/1day
  - listitem: To avail the backup data, the customer has to complete the activation process for each installment
  - listitem: At the time of availing the backup data, the customer has to be on eligible recharge pack mentioned below
  - listitem: 1GB Data will be valid till the end of day/midnight (23:59:59 Hrs), offered at regular data speed (in addition to existing benefits on respective recharges)
  - listitem: Data can be used till midnight of the same day. It will not be charged and also not be deducted from daily data quota of Unlimited packs.
  - listitem: This will be over and above the weekend rollover & Night binge benefits applicable on these recharges.
  - listitem: Customer cannot claim backup data post expiry of his Unlimited pack, unless he recharges with a subsequent eligible MRP
- paragraph
- paragraph: ELIGIBILITY –
- list:
  - listitem: The backup data will only be available to customers who recharge with the Hero unlimited daily data recharges of Rs.349 and above (“eligible recharge packs”) commencing from the date mentioned above
  - listitem: Backup data is not applicable on above current active packs but on subsequent recharges, post feature start date
  - listitem: The backup data will be available to the customer once a day and twice in a calendar month, ONLY while he is on an unlimited Daily Data recharge of Rs.349 or above
- paragraph
- paragraph: OTHER CONDITIONS
- paragraph: VIL reserves the right to change, suspend, remove or disable access to the backup data feature at any time without notice, subject to TRAI regulations
- paragraph
- paragraph: ACTIVATION PROCESS
- list:
  - listitem: An eligible customer can claim his backup data by calling 121249 (toll-free) and claiming the benefit by dialing 1 (In case a customer is ineligible, reason for ineligibility will be played out)
  - listitem: An eligible customer can also claim the backup data via his Vi App. Once his daily data quota drops below 100MB, a link will populate on the home page dashboard that will redirect the customer to the data delight claims page
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
  167 |     });
  168 |     await test.step("Verify that the button 'Weekend data Rollover' exists in the DOM", async () => {
  169 |       await expect(appPage.buttonWeekendDataRollover.first()).toBeAttached({ timeout: 5000 });
  170 |       evidence.validationsPerformed.push("Verify that the button 'Weekend data Rollover' exists in the DOM");
  171 |     });
  172 |     await test.step("Verify that the button 'Binge All Night' exists in the DOM", async () => {
  173 |       await expect(appPage.buttonBingeAllNight.first()).toBeAttached({ timeout: 5000 });
  174 |       evidence.validationsPerformed.push("Verify that the button 'Binge All Night' exists in the DOM");
  175 |     });
  176 |     await test.step("Verify that the button 'Download Vi App' exists in the DOM", async () => {
  177 |       await expect(appPage.buttonDownloadViApp.first()).toBeAttached({ timeout: 5000 });
  178 |       evidence.validationsPerformed.push("Verify that the button 'Download Vi App' exists in the DOM");
  179 |     });
  180 | 
  181 |     await test.step("Capture screenshot evidence", async () => {
  182 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G - Button Verification", "www.myvi.in");
  183 |       evidence.screenshots.push(screenshotPath);
  184 |     });
  185 | 
  186 |     await attachExecutionSummary(evidence, page, testInfo);
  187 |   });
  188 |   test("Verify that 1 Input is present on Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G @regression", async ({ page }, testInfo) => {
  189 |     await label('suite', "Regression Test Suite");
  190 |     await label('url', "https://www.myvi.in/");
  191 |     await label('domain', "www.myvi.in");
  192 |     await feature("Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G");
  193 |     await story("Verify Input elements are present");
  194 |     await severity("minor");
  195 |     await tag("regression");
  196 | 
  197 |     const evidence = createEvidence({
  198 |       application: "www.myvi.in",
  199 |       suite: "Regression Test Suite",
  200 |       browser: testInfo.project.name || 'chromium',
  201 |       pageName: "Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G",
  202 |       pageUrl: "https://www.myvi.in/prepaid/hero-unlimited-and-weekend-data-rollover",
  203 |       testObjective: "Verify Input elements are present",
  204 |     });
  205 | 
  206 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  207 |       await expect(appPage.inputParamdetails.first()).toBeAttached({ timeout: 5000 });
  208 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  209 |     });
  210 | 
  211 |     await test.step("Capture screenshot evidence", async () => {
  212 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G - Input Verification", "www.myvi.in");
  213 |       evidence.screenshots.push(screenshotPath);
  214 |     });
  215 | 
  216 |     await attachExecutionSummary(evidence, page, testInfo);
  217 |   });
  218 |   test("Verify that 1 Form is present on Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G @regression", async ({ page }, testInfo) => {
  219 |     await label('suite', "Regression Test Suite");
  220 |     await label('url', "https://www.myvi.in/");
  221 |     await label('domain', "www.myvi.in");
  222 |     await feature("Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G");
  223 |     await story("Verify Form elements are present");
  224 |     await severity("minor");
  225 |     await tag("regression");
  226 | 
  227 |     const evidence = createEvidence({
  228 |       application: "www.myvi.in",
  229 |       suite: "Regression Test Suite",
  230 |       browser: testInfo.project.name || 'chromium',
  231 |       pageName: "Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G",
  232 |       pageUrl: "https://www.myvi.in/prepaid/hero-unlimited-and-weekend-data-rollover",
  233 |       testObjective: "Verify Form elements are present",
  234 |     });
  235 | 
  236 |     await test.step("Verify that the form 'Form' exists in the DOM", async () => {
  237 |       await expect(appPage.form0.first()).toBeAttached({ timeout: 5000 });
  238 |       evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
  239 |     });
  240 | 
  241 |     await test.step("Capture screenshot evidence", async () => {
  242 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G - Form Verification", "www.myvi.in");
  243 |       evidence.screenshots.push(screenshotPath);
  244 |     });
  245 | 
  246 |     await attachExecutionSummary(evidence, page, testInfo);
  247 |   });
  248 |   test("Verify that 3 Menus are present on Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G @regression", async ({ page }, testInfo) => {
  249 |     await label('suite', "Regression Test Suite");
  250 |     await label('url', "https://www.myvi.in/");
  251 |     await label('domain', "www.myvi.in");
  252 |     await feature("Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G");
  253 |     await story("Verify Menu elements are present");
  254 |     await severity("minor");
  255 |     await tag("regression");
  256 | 
  257 |     const evidence = createEvidence({
  258 |       application: "www.myvi.in",
  259 |       suite: "Regression Test Suite",
  260 |       browser: testInfo.project.name || 'chromium',
  261 |       pageName: "Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G",
  262 |       pageUrl: "https://www.myvi.in/prepaid/hero-unlimited-and-weekend-data-rollover",
  263 |       testObjective: "Verify Menu elements are present",
  264 |     });
  265 | 
  266 |     await test.step("Verify that the menu 'PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service' exists in the DOM", async () => {
> 267 |       await expect(appPage.menuPrepaidpostpaidnewConnectioninternationalRoaming5gottsMor.first()).toBeAttached({ timeout: 5000 });
      |                                                                                                   ^ Error: expect(locator).toBeAttached() failed
  268 |       evidence.validationsPerformed.push("Verify that the menu 'PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service' exists in the DOM");
  269 |     });
  270 |     await test.step("Verify that the menu 'BusinessInvestorsSign in' exists in the DOM", async () => {
  271 |       await expect(appPage.menuBusinessinvestorssignIn.first()).toBeAttached({ timeout: 5000 });
  272 |       evidence.validationsPerformed.push("Verify that the menu 'BusinessInvestorsSign in' exists in the DOM");
  273 |     });
  274 |     await test.step("Verify that the menu 'HomeprepaidHero Unlimited' exists in the DOM", async () => {
  275 |       await expect(appPage.menuHomeprepaidheroUnlimited.first()).toBeAttached({ timeout: 5000 });
  276 |       evidence.validationsPerformed.push("Verify that the menu 'HomeprepaidHero Unlimited' exists in the DOM");
  277 |     });
  278 | 
  279 |     await test.step("Capture screenshot evidence", async () => {
  280 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G - Menu Verification", "www.myvi.in");
  281 |       evidence.screenshots.push(screenshotPath);
  282 |     });
  283 | 
  284 |     await attachExecutionSummary(evidence, page, testInfo);
  285 |   });
  286 | });
  287 | 
```