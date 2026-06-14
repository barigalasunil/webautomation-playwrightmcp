# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\BestViSmsPacksAndSmsPlansForPrepaidRechargeViIndia.spec.ts >> https://www.myvi.in/ - Best Vi SMS Packs and SMS Plans for Prepaid Recharge|Vi India - Regression Tests >> Verify that 3 Menus are present on Best Vi SMS Packs and SMS Plans for Prepaid Recharge|Vi India @regression
- Location: tests\generated\www-myvi-in\BestViSmsPacksAndSmsPlansForPrepaidRechargeViIndia.spec.ts:248:3

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
- navigation "breadcrumb":
  - list:
    - listitem:
      - link "Home":
        - /url: /
    - listitem:
      - link "prepaid":
        - /url: /prepaid
    - listitem:
      - link "SMS Packs":
        - /url: /prepaid/sms-packs
- heading "Vi SMS Recharge Packs" [level=1]
- img "location"
- paragraph:
  - text: Packs for
  - strong: Maharashtra & Goa
  - text: Circle
  - link "Change":
    - /url: "#"
- text: Includes Vi Movies & TV access ₹ 179
- paragraph: "1"
- paragraph: GB
- paragraph: data
- paragraph: "24"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- text: •
- strong: unlimited calls
- text: • Watch FREE OTTs and +...see more ₹ 189
- paragraph: "1"
- paragraph: GB
- paragraph: data
- paragraph: "26"
- paragraph: days
- paragraph: validity
- button "buy"
- text: •
- strong: unlimited calls+...
- text: see more Includes Vi Movies & TV access ₹ 199
- paragraph: "2"
- paragraph: GB
- paragraph: data
- paragraph: "28"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- text: •
- strong: unlimited calls
- text: • Watch FREE OTTs & LI+...see more Includes Vi Movies & TV access ₹ 299
- paragraph: "1"
- paragraph: GB/day
- paragraph: data
- paragraph: "28"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- text: •
- strong: Watch FREE OTTs & LIVE news with Vi Movies & TV app
- text: • unlimited calls+...see more ₹ 345
- paragraph: "25"
- paragraph: GB
- paragraph: data
- paragraph: "30"
- paragraph: days
- paragraph: validity
- button "buy"
- text: •
- strong: unlimited calls+...
- text: see more Includes Vi Movies & TV access
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
- text: • Watch FREE OTTs and LIVE TV • weekend data rollove+...see more
- heading "SMS Pack Recharge FAQs" [level=2]
- text: What are the different SMS packs available in Vi (Vodafone Idea)?
- img "Collapse"
- text: How can I activate an SMS pack?
- img "Collapse"
- text: What is the SMS quota of my SMS recharge Pack?
- img "Collapse"
- text: What is the price of Vodafone Idea (Vi) SMS packs?
- img "Collapse"
- text: Is there a prepaid plan with unlimited SMS?
- img "Collapse"
- button "See More"
- heading "SMS Recharge Packs" [level=2]
- img "arrow"
- paragraph:
  - text: Vi (Vodafone Idea) offers a wide range of SMS packs for customers requiring an SMS facility. Now get SMS benefits with prepaid recharge plans as well as bulk SMS plans with higher packs. Vi (Vodafone Idea) brings to you a variety of plans with SMS balance. Choose Vi (Vodafone Idea) SMS pack recharge of 100 SMS per day, 300 SMS, 1000 SMS, or 3600 SMS based on the pack amount. Apart from free SMS, these packs also include
  - link "truly unlimited calls":
    - /url: https://www.myvi.in/prepaid/unlimited-calls-and-data-plans
  - text: ", basic access to Vi Movies & TV and a minimum of 1GB daily data."
- paragraph
- paragraph: "Vi (Vodafone Idea) Message packs come in handy at quite a few places:"
- list:
  - listitem: When there is no internet connectivity and you want to send an important message through.
  - listitem: While sending confirmation or receiving One-time Password (OTP) on online purchases.
  - listitem: SMS verification for initiating online services.
  - listitem: SMS is easy to use, efficient and cost-effective.
  - listitem: Bulk SMS can be used as a marketing medium for businesses.
  - listitem: Reply to declined calls with a text, keeping the caller informed.
- paragraph
- paragraph:
  - text: Since these packs give you SMS benefits bundled with a minimum recharge for SMS, you need not worry about buying msg packs separately. Simply recharge with any of the
  - link "prepaid plans":
    - /url: https://www.myvi.in/prepaid/best-prepaid-plans
  - text: and enjoy outgoing SMS along with it.
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
  182 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Best Vi SMS Packs and SMS Plans for Prepaid Recharge|Vi India - Button Verification", "www.myvi.in");
  183 |       evidence.screenshots.push(screenshotPath);
  184 |     });
  185 | 
  186 |     await attachExecutionSummary(evidence, page, testInfo);
  187 |   });
  188 |   test("Verify that 1 Input is present on Best Vi SMS Packs and SMS Plans for Prepaid Recharge|Vi India @regression", async ({ page }, testInfo) => {
  189 |     await label('suite', "Regression Test Suite");
  190 |     await label('url', "https://www.myvi.in/");
  191 |     await label('domain', "www.myvi.in");
  192 |     await feature("Best Vi SMS Packs and SMS Plans for Prepaid Recharge|Vi India");
  193 |     await story("Verify Input elements are present");
  194 |     await severity("minor");
  195 |     await tag("regression");
  196 | 
  197 |     const evidence = createEvidence({
  198 |       application: "www.myvi.in",
  199 |       suite: "Regression Test Suite",
  200 |       browser: testInfo.project.name || 'chromium',
  201 |       pageName: "Best Vi SMS Packs and SMS Plans for Prepaid Recharge|Vi India",
  202 |       pageUrl: "https://www.myvi.in/prepaid/sms-packs",
  203 |       testObjective: "Verify Input elements are present",
  204 |     });
  205 | 
  206 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  207 |       await expect(appPage.inputParamdetails.first()).toBeAttached({ timeout: 5000 });
  208 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  209 |     });
  210 | 
  211 |     await test.step("Capture screenshot evidence", async () => {
  212 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Best Vi SMS Packs and SMS Plans for Prepaid Recharge|Vi India - Input Verification", "www.myvi.in");
  213 |       evidence.screenshots.push(screenshotPath);
  214 |     });
  215 | 
  216 |     await attachExecutionSummary(evidence, page, testInfo);
  217 |   });
  218 |   test("Verify that 1 Form is present on Best Vi SMS Packs and SMS Plans for Prepaid Recharge|Vi India @regression", async ({ page }, testInfo) => {
  219 |     await label('suite', "Regression Test Suite");
  220 |     await label('url', "https://www.myvi.in/");
  221 |     await label('domain', "www.myvi.in");
  222 |     await feature("Best Vi SMS Packs and SMS Plans for Prepaid Recharge|Vi India");
  223 |     await story("Verify Form elements are present");
  224 |     await severity("minor");
  225 |     await tag("regression");
  226 | 
  227 |     const evidence = createEvidence({
  228 |       application: "www.myvi.in",
  229 |       suite: "Regression Test Suite",
  230 |       browser: testInfo.project.name || 'chromium',
  231 |       pageName: "Best Vi SMS Packs and SMS Plans for Prepaid Recharge|Vi India",
  232 |       pageUrl: "https://www.myvi.in/prepaid/sms-packs",
  233 |       testObjective: "Verify Form elements are present",
  234 |     });
  235 | 
  236 |     await test.step("Verify that the form 'Form' exists in the DOM", async () => {
  237 |       await expect(appPage.form0.first()).toBeAttached({ timeout: 5000 });
  238 |       evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
  239 |     });
  240 | 
  241 |     await test.step("Capture screenshot evidence", async () => {
  242 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Best Vi SMS Packs and SMS Plans for Prepaid Recharge|Vi India - Form Verification", "www.myvi.in");
  243 |       evidence.screenshots.push(screenshotPath);
  244 |     });
  245 | 
  246 |     await attachExecutionSummary(evidence, page, testInfo);
  247 |   });
  248 |   test("Verify that 3 Menus are present on Best Vi SMS Packs and SMS Plans for Prepaid Recharge|Vi India @regression", async ({ page }, testInfo) => {
  249 |     await label('suite', "Regression Test Suite");
  250 |     await label('url', "https://www.myvi.in/");
  251 |     await label('domain', "www.myvi.in");
  252 |     await feature("Best Vi SMS Packs and SMS Plans for Prepaid Recharge|Vi India");
  253 |     await story("Verify Menu elements are present");
  254 |     await severity("minor");
  255 |     await tag("regression");
  256 | 
  257 |     const evidence = createEvidence({
  258 |       application: "www.myvi.in",
  259 |       suite: "Regression Test Suite",
  260 |       browser: testInfo.project.name || 'chromium',
  261 |       pageName: "Best Vi SMS Packs and SMS Plans for Prepaid Recharge|Vi India",
  262 |       pageUrl: "https://www.myvi.in/prepaid/sms-packs",
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
  274 |     await test.step("Verify that the menu 'HomeprepaidSMS Packs' exists in the DOM", async () => {
  275 |       await expect(appPage.menuHomeprepaidsmsPacks.first()).toBeAttached({ timeout: 5000 });
  276 |       evidence.validationsPerformed.push("Verify that the menu 'HomeprepaidSMS Packs' exists in the DOM");
  277 |     });
  278 | 
  279 |     await test.step("Capture screenshot evidence", async () => {
  280 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Best Vi SMS Packs and SMS Plans for Prepaid Recharge|Vi India - Menu Verification", "www.myvi.in");
  281 |       evidence.screenshots.push(screenshotPath);
  282 |     });
  283 | 
  284 |     await attachExecutionSummary(evidence, page, testInfo);
  285 |   });
  286 | });
  287 | 
```