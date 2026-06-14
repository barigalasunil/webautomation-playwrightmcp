# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\ViVodafoneIdeaCareersExploreCareerOpportunitiesAtVodafoneIdeaVi.spec.ts >> https://www.myvi.in/ - Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi) - Regression Tests >> Verify that 3 Menus are present on Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi) @regression
- Location: tests\generated\www-myvi-in\ViVodafoneIdeaCareersExploreCareerOpportunitiesAtVodafoneIdeaVi.spec.ts:188:3

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
- heading "Be a part of India's leading telecom company" [level=2]
- link "careers":
  - /url: https://careers.vodafoneidea.com/search/
  - img "careers"
- img "Life at VIL 1"
- img "Life at VIL 2"
- img "Life at VIL 3"
- heading "Life at VIL" [level=2]
- heading "Love what you do!" [level=3]
- paragraph: Diversity and Inclusion has become the way of working at VIL. As we prepare for future, we ensured D&I is everyone's prerogative and integrated it into the business priority where we celebrate differences, show respect and create an avenue for people to share ideas.
- heading "perks of being with VIL" [level=2]
- img "Agility"
- heading "Agility" [level=5]
- paragraph: Vodafone idea is constantly transforming post-merger, New Challenges, Tasks, People, Places Working at Vodafone Idea is different every day.
- img "Benefits"
- heading "Benefits" [level=5]
- paragraph: Flexi Working, Remote Working, Medical, Group and Medical Insurance
- img "Our values"
- heading "Our values" [level=5]
- paragraph: We are driven by the 5 Core Values Speed, Trust, Bold, Passion and Digital. Our values embody the spirit of our brand. They serve as the guiding principles for our every thought and action
- img "People first"
- heading "People first" [level=5]
- paragraph: We encourage ideas, thoughts and wellbeing of individuals
- img "Learning never stops"
- heading "Learning never stops" [level=5]
- paragraph: We are growing and people development is one our top most priorities. We have interactive ad immersive learning environment
- img "Innovation"
- heading "Innovation" [level=5]
- paragraph: Vodafone Idea chooses to be Digital first to simplify, delight the customer and stakeholders
- img "Freedom to grow"
- heading "Freedom to grow" [level=5]
- paragraph: Over the phase of your career you may want to shift? We welcome change and support career moves
- img "Less likely to be injured"
- heading "Less likely to be injured" [level=5]
- paragraph: Vodafone Idea works towards ensuring that employees are protected from the risk to health and Safety through strict HSW policies
- img "Work life balance"
- heading "Work life balance" [level=5]
- paragraph: We are not just an employer for Career. We strive to achieve a happy and healthy work life balance
- heading "Open position with us" [level=3]
- heading "Enterprise" [level=4]
- paragraph: Vodafone Idea Business Services provides total communications solutions to empower global and Indian corporations, public sector & government bodies, small & medium enterprises and start-ups. With...
- link "View Jobs":
  - /url: https://careers.vodafoneidea.com/go/VIBS-Jobs/4269301/
  - button "View Jobs"
- heading "Digital" [level=4]
- paragraph: We are team digital of India's largest telco, with a single mission to provide memorable and pleasurable digital experiences to our customers.The digital team of VIL is building India's next digital.....
- link "View Jobs":
  - /url: https://careers.vodafoneidea.com/go/MarketingDigital-Jobs/4268901/
  - button "View Jobs"
- heading "Retail" [level=4]
- paragraph: Retail is the widely visible face of VIL, providing an authentic brand experience to customers through Company owned and Franchised Stores. Retail Stores source the majority of Postpaid Customers...
- link "View Jobs":
  - /url: https://careers.vodafoneidea.com/go/Retail-Jobs/4269001/
  - button "View Jobs"
- heading "Sales & Distribution" [level=4]
- paragraph: At Vodafone Idea Limited, we take pride in having one of the most extensive distribution networks in the country among all consumer product and services companies. We reach more than a million...
- link "View Jobs":
  - /url: https://careers.vodafoneidea.com/go/Sales-and-Distribution-Jobs/4269101/
  - button "View Jobs"
- heading "Commercial/ Finance" [level=4]
- paragraph: Financial Planning & Analysis is a dynamic and exciting area within the Finance function. Going above and beyond the creation and monitoring of the company's annual and long-range financial plans...
- link "View Jobs":
  - /url: https://careers.vodafoneidea.com/go/Commercial-Finance-Jobs/4268801/
  - button "View Jobs"
- paragraph: We have come across certain job postings on social networking platforms fraudulently mentioning our company name, logo, and seeking money from applicants. Strict legal action is initiated by us as and when these incidents come to our notice. We request you to exercise caution against all such fraudulent posts.
- paragraph
- paragraph: All job openings at VIL are only posted through the company website, on the official page on LinkedIn and on job portals. Eligible candidates are free to apply for suitable openings and there are no charges levied for the same.
- paragraph
- paragraph:
  - text: Visit
  - link "www.vodafoneidea.com/careers":
    - /url: http://www.vodafoneidea.com/careers
  - text: and LinkedIn@vodafone-idea-limited to check out career options.
- paragraph
- paragraph
- paragraph: stay connected to know how and what it means to join us. write to us at careers@vodafoneidea.com for any queries
- navigation "breadcrumb":
  - list:
    - listitem:
      - link "Home":
        - /url: /home
    - listitem:
      - link "Careers":
        - /url: /careers
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
  107 |       suite: "Regression Test Suite",
  108 |       browser: testInfo.project.name || 'chromium',
  109 |       pageName: "Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi)",
  110 |       pageUrl: "https://www.myvi.in/careers",
  111 |       testObjective: "Verify Link elements are present",
  112 |     });
  113 | 
  114 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  115 |       await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
  116 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  117 |     });
  118 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  119 |       await expect(appPage.link1.first()).toBeAttached({ timeout: 5000 });
  120 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  121 |     });
  122 |     await test.step("Verify that the link 'View Jobs' exists in the DOM", async () => {
  123 |       await expect(appPage.linkViewJobs.first()).toBeAttached({ timeout: 5000 });
  124 |       evidence.validationsPerformed.push("Verify that the link 'View Jobs' exists in the DOM");
  125 |     });
  126 |     await test.step("Verify that the link 'View Jobs' exists in the DOM", async () => {
  127 |       await expect(appPage.linkViewJobs1.first()).toBeAttached({ timeout: 5000 });
  128 |       evidence.validationsPerformed.push("Verify that the link 'View Jobs' exists in the DOM");
  129 |     });
  130 |     await test.step("Verify that the link 'View Jobs' exists in the DOM", async () => {
  131 |       await expect(appPage.linkViewJobs2.first()).toBeAttached({ timeout: 5000 });
  132 |       evidence.validationsPerformed.push("Verify that the link 'View Jobs' exists in the DOM");
  133 |     });
  134 | 
  135 |     await test.step("Capture screenshot evidence", async () => {
  136 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi) - Link Verification", "www.myvi.in");
  137 |       evidence.screenshots.push(screenshotPath);
  138 |     });
  139 | 
  140 |     await attachExecutionSummary(evidence, page, testInfo);
  141 |   });
  142 |   test("Verify that 5 Buttons are present on Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi) @regression", async ({ page }, testInfo) => {
  143 |     await label('suite', "Regression Test Suite");
  144 |     await label('url', "https://www.myvi.in/");
  145 |     await label('domain', "www.myvi.in");
  146 |     await feature("Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi)");
  147 |     await story("Verify Button elements are present");
  148 |     await severity("minor");
  149 |     await tag("regression");
  150 | 
  151 |     const evidence = createEvidence({
  152 |       application: "www.myvi.in",
  153 |       suite: "Regression Test Suite",
  154 |       browser: testInfo.project.name || 'chromium',
  155 |       pageName: "Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi)",
  156 |       pageUrl: "https://www.myvi.in/careers",
  157 |       testObjective: "Verify Button elements are present",
  158 |     });
  159 | 
  160 |     await test.step("Verify that the button 'View Jobs' exists in the DOM", async () => {
  161 |       await expect(appPage.buttonViewJobs.first()).toBeAttached({ timeout: 5000 });
  162 |       evidence.validationsPerformed.push("Verify that the button 'View Jobs' exists in the DOM");
  163 |     });
  164 |     await test.step("Verify that the button 'View Jobs' exists in the DOM", async () => {
  165 |       await expect(appPage.buttonViewJobs1.first()).toBeAttached({ timeout: 5000 });
  166 |       evidence.validationsPerformed.push("Verify that the button 'View Jobs' exists in the DOM");
  167 |     });
  168 |     await test.step("Verify that the button 'View Jobs' exists in the DOM", async () => {
  169 |       await expect(appPage.buttonViewJobs2.first()).toBeAttached({ timeout: 5000 });
  170 |       evidence.validationsPerformed.push("Verify that the button 'View Jobs' exists in the DOM");
  171 |     });
  172 |     await test.step("Verify that the button 'View Jobs' exists in the DOM", async () => {
  173 |       await expect(appPage.buttonViewJobs3.first()).toBeAttached({ timeout: 5000 });
  174 |       evidence.validationsPerformed.push("Verify that the button 'View Jobs' exists in the DOM");
  175 |     });
  176 |     await test.step("Verify that the button 'View Jobs' exists in the DOM", async () => {
  177 |       await expect(appPage.buttonViewJobs4.first()).toBeAttached({ timeout: 5000 });
  178 |       evidence.validationsPerformed.push("Verify that the button 'View Jobs' exists in the DOM");
  179 |     });
  180 | 
  181 |     await test.step("Capture screenshot evidence", async () => {
  182 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi) - Button Verification", "www.myvi.in");
  183 |       evidence.screenshots.push(screenshotPath);
  184 |     });
  185 | 
  186 |     await attachExecutionSummary(evidence, page, testInfo);
  187 |   });
  188 |   test("Verify that 3 Menus are present on Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi) @regression", async ({ page }, testInfo) => {
  189 |     await label('suite', "Regression Test Suite");
  190 |     await label('url', "https://www.myvi.in/");
  191 |     await label('domain', "www.myvi.in");
  192 |     await feature("Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi)");
  193 |     await story("Verify Menu elements are present");
  194 |     await severity("minor");
  195 |     await tag("regression");
  196 | 
  197 |     const evidence = createEvidence({
  198 |       application: "www.myvi.in",
  199 |       suite: "Regression Test Suite",
  200 |       browser: testInfo.project.name || 'chromium',
  201 |       pageName: "Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi)",
  202 |       pageUrl: "https://www.myvi.in/careers",
  203 |       testObjective: "Verify Menu elements are present",
  204 |     });
  205 | 
  206 |     await test.step("Verify that the menu 'PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service' exists in the DOM", async () => {
> 207 |       await expect(appPage.menuPrepaidpostpaidnewConnectioninternationalRoaming5gottsMor.first()).toBeAttached({ timeout: 5000 });
      |                                                                                                   ^ Error: expect(locator).toBeAttached() failed
  208 |       evidence.validationsPerformed.push("Verify that the menu 'PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service' exists in the DOM");
  209 |     });
  210 |     await test.step("Verify that the menu 'BusinessInvestorsSign in' exists in the DOM", async () => {
  211 |       await expect(appPage.menuBusinessinvestorssignIn.first()).toBeAttached({ timeout: 5000 });
  212 |       evidence.validationsPerformed.push("Verify that the menu 'BusinessInvestorsSign in' exists in the DOM");
  213 |     });
  214 |     await test.step("Verify that the menu 'HomeCareers' exists in the DOM", async () => {
  215 |       await expect(appPage.menuHomecareers.first()).toBeAttached({ timeout: 5000 });
  216 |       evidence.validationsPerformed.push("Verify that the menu 'HomeCareers' exists in the DOM");
  217 |     });
  218 | 
  219 |     await test.step("Capture screenshot evidence", async () => {
  220 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi) - Menu Verification", "www.myvi.in");
  221 |       evidence.screenshots.push(screenshotPath);
  222 |     });
  223 | 
  224 |     await attachExecutionSummary(evidence, page, testInfo);
  225 |   });
  226 | });
  227 | 
```