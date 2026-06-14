# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\VodafoneIdeaNewsViLatestViNewsPressReleasesAmpUpdates.spec.ts >> https://www.myvi.in/ - Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates - Regression Tests >> Verify that 3 Menus are present on Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates @regression
- Location: tests\generated\www-myvi-in\VodafoneIdeaNewsViLatestViNewsPressReleasesAmpUpdates.spec.ts:218:3

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
- list:
  - listitem:
    - link "Personal":
      - /url: https://www.myvi.in
  - listitem:
    - link "Business":
      - /url: /business
- link "CoolBrand":
  - /url: https://www.myvi.in/
  - img "CoolBrand"
- list:
  - listitem:
    - link "Company Overview":
      - /url: "#"
  - listitem:
    - link "CSR":
      - /url: https://www.myvi.in/about-us/vodafone-foundation
  - listitem:
    - link "Investors":
      - /url: "#"
  - listitem:
    - link "Media Center":
      - /url: /vodafone-idea/press-releases
  - listitem:
    - link "Careers":
      - /url: https://www.vodafoneidea.com/careers
- heading "Vi (Vodafone Idea) Media Releases" [level=2]
- text: corporate communication Vertika Yadav
- img "mail"
- link "vertika.yadav@vodafoneidea.com":
  - /url: mailto:vertika.yadav@vodafoneidea.com
- text: media downloads
- img "logo"
- paragraph:
  - link "download":
    - /url: /documents/106724/167307/Vi-logo.svg
- heading "Vodafone Idea (Vi) News & Press Releases" [level=1]
- paragraph: Your destination for the Vi (Vodafone Idea) latest news, press releases and more updates
- paragraph: Press Releases
- textbox "search by topic"
- img "search"
- text: All Years
- img "arrow"
- text: All Circles
- img "arrow"
- heading "Vi launches 5G services in Coimbatore" [level=4]
- paragraph: Coimbatore | 10 Jun, 2026
- paragraph: Following its recent 5G launch in Chennai, Union Territory of Pondicherry Trichy and Salem, leading telecom operator Vi is now launching its 5G services in Coimbatore, Tiruppur and Vellore. The planned rollout focuses on high data consumption centres, covering key industrial hubs such as...
- img "share"
- text: Share
- link "Download Vi launches 5G services in Coimbatore Download":
  - /url: https://www.myvi.in/documents/106724/393606/Press-Release-Vi-launches-5G-services-in-Coimbatore.pdf
  - img "Download Vi launches 5G services in Coimbatore"
  - text: Download
- heading "Vi launches 5G services in Bhopal" [level=4]
- paragraph: Bhopal | 10 Jun, 2026
- paragraph: Following its 5G launch in Indore and Gwalior, leading telecom operator Vi is now launching 5G in Bhopal. To expand its 5G services, Vi has been prioritising key markets that are high data consumption centers.
- img "share"
- text: Share
- link "Download Vi launches 5G services in Bhopal Download":
  - /url: https://www.myvi.in/documents/106724/393606/Press-Release-Vi-5G-goes-live-in-Bhopal.pdf
  - img "Download Vi launches 5G services in Bhopal"
  - text: Download
- heading "Vi expands 5G footprint in Punjab" [level=4]
- paragraph: Punjab | 10 Jun, 2026
- paragraph: Following its 5G launch in Chandigarh, Mohali, Kharar, Zirakpur and Golden Temple Amritsar, leading telecom operator Vi is now accelerating its expansion in Punjab...
- img "share"
- text: Share
- link "Download Vi expands 5G footprint in Punjab Download":
  - /url: https://www.myvi.in/documents/106724/393606/Press-Release-Vi-expands-5G-footprint-in-Punjab.pdf
  - img "Download Vi expands 5G footprint in Punjab"
  - text: Download
- heading "Vi & Meta Partner to Deliver Seamless Verification for Vi Users" [level=4]
- paragraph: Mumbai | 04 Jun, 2026
- paragraph: Vodafone Idea (Vi), one of India's leading telecom operators, today announced the launch of Silent Mobile Verification (SMV) capabilities across Meta Platforms WhatsApp, Facebook and Instagram for Vi users enabling safer, seamless and password-less digital experiences for millions of users.
- img "share"
- text: Share
- link "Download Vi & Meta Partner to Deliver Seamless Verification for Vi Users Download":
  - /url: https://www.myvi.in/documents/106724/393606/Press-Release-Vi-&-Meta-Partner-to-Deliver-Seamless-Verification-for-Vi-Users.pdf
  - img "Download Vi & Meta Partner to Deliver Seamless Verification for Vi Users"
  - text: Download
- heading "Vi expands 5G footprint in Kerala; launching services in 33 more cities" [level=4]
- paragraph: Kerala | 26 May, 2026
- paragraph: Following its successful expansion of 5G services across 18 cities in 14 districts of Kerala, leading telecom operator Vi today announced the launch of 5G in 33 additional cities across the state. With this expansion, Vi continues to strengthen its 5G footprint across key municipalities
- img "share"
- text: Share
- link "Download Vi expands 5G footprint in Kerala; launching services in 33 more cities Download":
  - /url: https://www.myvi.in/documents/106724/393606/Press-Release-Vi-expands-5G-footprint-in-Kerala-is-launching-services-in-33-more-cities.pdf
  - img "Download Vi expands 5G footprint in Kerala; launching services in 33 more cities"
  - text: Download
- heading "Vi 5G expansion in Gujarat" [level=4]
- paragraph: Gujarat | 22 May, 2026
- paragraph: Following its 5G launch in Ahmedabad, Rajkot, Surat and Vadodara last year, leading telecom operator Vi is now accelerating its expansion in 16 additional cities of Gujarat, taking the total count to 20 cities.
- img "share"
- text: Share
- link "Download Vi 5G expansion in Gujarat Download":
  - /url: https://www.myvi.in/documents/106724/393606/Press-Release-Vi-expands-5G-footprint-in-Gujarat.pdf
  - img "Download Vi 5G expansion in Gujarat"
  - text: Download
- heading "Vi expands 5G footprint in West Bengal" [level=4]
- paragraph: Kolkata | 21 May, 2026
- paragraph: Following its 5G launch in Kolkata and Siliguri last year, leading telecom operator Vi is now strengthening its 5G footprint across multiple cities in West Bengal. As part of its planned rollout, Vi 5G is now available in Malda, Haldia, Berhampur and will soon be live in Durgapur, Asansol..
- img "share"
- text: Share
- link "Download Vi expands 5G footprint in West Bengal Download":
  - /url: https://www.myvi.in/documents/106724/393606/Press-Release-Vi-expands-5G-footprint-in-West-Bengal.pdf
  - img "Download Vi expands 5G footprint in West Bengal"
  - text: Download
- heading "Vi launches 5G services in Gwalior" [level=4]
- paragraph: Gwalior | 19 May, 2026
- paragraph: Following its 5G launch in Indore, leading telecom operator Vi is expanding its 5G footprint in the state, with the launch of Vi 5G in Gwalior. To expand its 5G services, Vi has been prioritising key markets, including industrial corridors, high data consumption centres and emerging urban clusters.
- img "share"
- text: Share
- link "Download Vi launches 5G services in Gwalior Download":
  - /url: https://www.myvi.in/documents/106724/393606/Press-Release-Vi-5G-goes-live-in-Gwalior.pdf
  - img "Download Vi launches 5G services in Gwalior"
  - text: Download
- button "1"
- button "2"
- button "›"
- button "»"
- paragraph:
  - paragraph:
    - text: Download press and Media kit
    - link "Vi":
      - /url: https://www.myvi.in/documents/106724/167307/newlogo.svg
- navigation "breadcrumb":
  - list:
    - listitem:
      - link "Home":
        - /url: /
    - listitem:
      - link "Media":
        - /url: /media/press-releases
    - listitem:
      - link "Vi (Vodafone Idea) News & Press Releases":
        - /url: /vodafone-idea/press-releases
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
  137 |       evidence.screenshots.push(screenshotPath);
  138 |     });
  139 | 
  140 |     await attachExecutionSummary(evidence, page, testInfo);
  141 |   });
  142 |   test("Verify that 6 Buttons are present on Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates @regression", async ({ page }, testInfo) => {
  143 |     await label('suite', "Regression Test Suite");
  144 |     await label('url', "https://www.myvi.in/");
  145 |     await label('domain', "www.myvi.in");
  146 |     await feature("Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates");
  147 |     await story("Verify Button elements are present");
  148 |     await severity("minor");
  149 |     await tag("regression");
  150 | 
  151 |     const evidence = createEvidence({
  152 |       application: "www.myvi.in",
  153 |       suite: "Regression Test Suite",
  154 |       browser: testInfo.project.name || 'chromium',
  155 |       pageName: "Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates",
  156 |       pageUrl: "https://www.myvi.in/vodafone-idea/press-releases",
  157 |       testObjective: "Verify Button elements are present",
  158 |     });
  159 | 
  160 |     await test.step("Verify that the button '«' exists in the DOM", async () => {
  161 |       await expect(appPage.button.first()).toBeAttached({ timeout: 5000 });
  162 |       evidence.validationsPerformed.push("Verify that the button '«' exists in the DOM");
  163 |     });
  164 |     await test.step("Verify that the button '‹' exists in the DOM", async () => {
  165 |       await expect(appPage.button1.first()).toBeAttached({ timeout: 5000 });
  166 |       evidence.validationsPerformed.push("Verify that the button '‹' exists in the DOM");
  167 |     });
  168 |     await test.step("Verify that the button '1' exists in the DOM", async () => {
  169 |       await expect(appPage.button11.first()).toBeAttached({ timeout: 5000 });
  170 |       evidence.validationsPerformed.push("Verify that the button '1' exists in the DOM");
  171 |     });
  172 |     await test.step("Verify that the button '2' exists in the DOM", async () => {
  173 |       await expect(appPage.button2.first()).toBeAttached({ timeout: 5000 });
  174 |       evidence.validationsPerformed.push("Verify that the button '2' exists in the DOM");
  175 |     });
  176 |     await test.step("Verify that the button '›' exists in the DOM", async () => {
  177 |       await expect(appPage.button21.first()).toBeAttached({ timeout: 5000 });
  178 |       evidence.validationsPerformed.push("Verify that the button '›' exists in the DOM");
  179 |     });
  180 | 
  181 |     await test.step("Capture screenshot evidence", async () => {
  182 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates - Button Verification", "www.myvi.in");
  183 |       evidence.screenshots.push(screenshotPath);
  184 |     });
  185 | 
  186 |     await attachExecutionSummary(evidence, page, testInfo);
  187 |   });
  188 |   test("Verify that 1 Input is present on Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates @regression", async ({ page }, testInfo) => {
  189 |     await label('suite', "Regression Test Suite");
  190 |     await label('url', "https://www.myvi.in/");
  191 |     await label('domain', "www.myvi.in");
  192 |     await feature("Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates");
  193 |     await story("Verify Input elements are present");
  194 |     await severity("minor");
  195 |     await tag("regression");
  196 | 
  197 |     const evidence = createEvidence({
  198 |       application: "www.myvi.in",
  199 |       suite: "Regression Test Suite",
  200 |       browser: testInfo.project.name || 'chromium',
  201 |       pageName: "Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates",
  202 |       pageUrl: "https://www.myvi.in/vodafone-idea/press-releases",
  203 |       testObjective: "Verify Input elements are present",
  204 |     });
  205 | 
  206 |     await test.step("Verify that the input 'search by topic' exists in the DOM", async () => {
  207 |       await expect(appPage.inputSearchByTopic.first()).toBeAttached({ timeout: 5000 });
  208 |       evidence.validationsPerformed.push("Verify that the input 'search by topic' exists in the DOM");
  209 |     });
  210 | 
  211 |     await test.step("Capture screenshot evidence", async () => {
  212 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates - Input Verification", "www.myvi.in");
  213 |       evidence.screenshots.push(screenshotPath);
  214 |     });
  215 | 
  216 |     await attachExecutionSummary(evidence, page, testInfo);
  217 |   });
  218 |   test("Verify that 3 Menus are present on Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates @regression", async ({ page }, testInfo) => {
  219 |     await label('suite', "Regression Test Suite");
  220 |     await label('url', "https://www.myvi.in/");
  221 |     await label('domain', "www.myvi.in");
  222 |     await feature("Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates");
  223 |     await story("Verify Menu elements are present");
  224 |     await severity("minor");
  225 |     await tag("regression");
  226 | 
  227 |     const evidence = createEvidence({
  228 |       application: "www.myvi.in",
  229 |       suite: "Regression Test Suite",
  230 |       browser: testInfo.project.name || 'chromium',
  231 |       pageName: "Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates",
  232 |       pageUrl: "https://www.myvi.in/vodafone-idea/press-releases",
  233 |       testObjective: "Verify Menu elements are present",
  234 |     });
  235 | 
  236 |     await test.step("Verify that the menu 'PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service' exists in the DOM", async () => {
> 237 |       await expect(appPage.menuPrepaidpostpaidnewConnectioninternationalRoaming5gottsMor.first()).toBeAttached({ timeout: 5000 });
      |                                                                                                   ^ Error: expect(locator).toBeAttached() failed
  238 |       evidence.validationsPerformed.push("Verify that the menu 'PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service' exists in the DOM");
  239 |     });
  240 |     await test.step("Verify that the menu 'BusinessInvestorsSign in' exists in the DOM", async () => {
  241 |       await expect(appPage.menuBusinessinvestorssignIn.first()).toBeAttached({ timeout: 5000 });
  242 |       evidence.validationsPerformed.push("Verify that the menu 'BusinessInvestorsSign in' exists in the DOM");
  243 |     });
  244 |     await test.step("Verify that the menu 'HomeMediaVi (Vodafone Idea) News & Press Releases' exists in the DOM", async () => {
  245 |       await expect(appPage.menuHomemediaviVodafoneIdeaNewsPressReleases.first()).toBeAttached({ timeout: 5000 });
  246 |       evidence.validationsPerformed.push("Verify that the menu 'HomeMediaVi (Vodafone Idea) News & Press Releases' exists in the DOM");
  247 |     });
  248 | 
  249 |     await test.step("Capture screenshot evidence", async () => {
  250 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates - Menu Verification", "www.myvi.in");
  251 |       evidence.screenshots.push(screenshotPath);
  252 |     });
  253 | 
  254 |     await attachExecutionSummary(evidence, page, testInfo);
  255 |   });
  256 | });
  257 | 
```