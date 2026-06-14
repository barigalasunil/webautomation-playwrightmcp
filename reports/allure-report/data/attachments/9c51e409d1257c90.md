# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\InvestorsSupportInformationOfViVodafoneIdeaLimited.spec.ts >> https://www.myvi.in/ - Investors Support Information Of Vi (Vodafone Idea Limited) - Regression Tests >> Verify that 3 Menus are present on Investors Support Information Of Vi (Vodafone Idea Limited) @regression
- Location: tests\generated\www-myvi-in\InvestorsSupportInformationOfViVodafoneIdeaLimited.spec.ts:142:3

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
- navigation:
  - link "annual reports":
    - /url: /investors/annual-reports
  - link "Quarterly Results":
    - /url: /investors/results
  - link "stock exchange submission":
    - /url: /investors/stock-exchange-submission
  - link "Shareholding Pattern":
    - /url: /investors/shareholding-pattern
  - link "investors presentation":
    - /url: /investors/investors-presentation
  - link "scheme of amalgamation":
    - /url: /investors/scheme-of-amalgamation
  - link "investors support":
    - /url: /investors/investors-support
  - link "corporate governance":
    - /url: /investors/corporate-goverance
- heading "Investors Support" [level=1]
- text: listing information
- heading "Bombay Stock Exchange Limited (BSE)" [level=4]
- paragraph: "BSE SCRIP ID: IDEA"
- paragraph: "BSE SCRIP CODE: 532822"
- paragraph: "Reuters: VIL.BO"
- heading "National Stock Exchange of India Limited (NSE)" [level=4]
- paragraph: "NSE Symbol: IDEA"
- paragraph: "Reuters: VIL.NS"
- link "unclaimed dividend":
  - /url: https://www.bigshareonline.com/InvestorDividendHistory.aspx
- heading "details of shares to IEPF" [level=2]
- img "toggle"
- heading "investors contact" [level=2]
- img "toggle"
- heading "useful forms" [level=2]
- img "toggle"
- link "SMARTODR Portal":
  - /url: https://smartodr.in/login
- link "Special window - re-lodgement for transfer of physical shares":
  - /url: https://www.myvi.in/documents/106724/182127/VIL_Transfer-of-Physical-Shares_final (2).pdf
- link "Special window for transfer and dematerialisation of physical securities":
  - /url: https://www.myvi.in/documents/106724/182127/VIL_TRANSFER-AND-DEMATERIALISATION-OF-PHYSICAL-SECURITIES (1).pdf
- contentinfo:
  - img "Vi Logo"
  - heading "vodafone idea limited" [level=3]
  - paragraph: Vodafone Idea Limited is an Aditya Birla Group and Vodafone Group partnership. The Company provides pan India Voice and Data services across 2G, 3G and 4G platform.
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
  - heading "about vodafone idea" [level=4]
  - link "Suppliers & Partners":
    - /url: /vodafone-idea/suppliers-and-partners
  - link "FAQs":
    - /url: /help-support/faqs
  - link "Contact Us":
    - /url: /help-support/vi-customer-care-number
  - link "Privacy Policy":
    - /url: /privacy-policy
  - link "Terms & Conditions":
    - /url: /vodafone-idea/terms-and-conditions
  - heading "quick links" [level=4]
  - link "Online Recharge":
    - /url: /prepaid/online-mobile-recharge
  - link "Pay Bill Online":
    - /url: /postpaid/quick-online-bill-payment
  - link "Port to Vi":
    - /url: /new-connection/mobile-number-portability-mnp-online
  - link "Service Validity Packs":
    - /url: /prepaid/service-validity-recharge-plans
  - link "UPI Recharge":
    - /url: /prepaid/upi-recharge
  - link "e-Bill":
    - /url: /online-ebill-registration
  - heading "support" [level=4]
  - link "Network & Troubleshooting":
    - /url: /help-support/basic-mobile-network-troubleshooting-steps
  - link "DND Complaint":
    - /url: /dnd-complaints
  - link "DND Registration":
    - /url: /dnd
  - link "Short code & USSD Info":
    - /url: /music-videos-and-more/shortcodes-and-special-characters
  - link "Block SIM Online":
    - /url: /block-your-sim
  - heading "Vi services & solutions" [level=4]
  - link "Prepaid Connection":
    - /url: /new-connection/buy-prepaid-sim-connection-online
  - link "Postpaid Connection":
    - /url: /new-connection/buy-new-4g-sim-card-online
  - link "GIGAnet":
    - /url: /giganet
  - link "Dongles & Mobile WiFi":
    - /url: /mobile-internet
  - link "Home Broadband":
    - /url: https://youbroadband.in/?soc_id=194&campaign_source=%3Cweb%3E&campaign_name=%3CVi%3E
  - link "Value Added Services":
    - /url: https://www.myvi.in/value-added-services
  - heading "groups" [level=4]
  - link "Vodafone Group":
    - /url: https://www.vodafone.com/
  - link "Aditya Birla Group":
    - /url: https://www.adityabirla.com/home
  - text: "This website uses own third-party cookies.Find out more about usage in our Privacy Policy page. Copyright Reserved with Vodafone Idea Limited (formerly Idea Cellular Limited). Vodafone Idea Limited (Formerly Idea Cellular Limited), An Aditya Birla Group & Vodafone partnership, Suman Towers, Plot No.18, Sector 11, Gandhinagar – 382011, Gujarat.CIN L32100GJ1996PLC030976, T: +91-79 6671 4000, F: +91-79 2323 2251"
- alert
```

# Test source

```ts
  61  |       suite: "Regression Test Suite",
  62  |       browser: testInfo.project.name || 'chromium',
  63  |       pageName: "Investors Support Information Of Vi (Vodafone Idea Limited)",
  64  |       pageUrl: "https://www.myvi.in/investors/investors-support",
  65  |       testObjective: "Verify Heading elements are present",
  66  |     });
  67  | 
  68  |     await test.step("Verify that the heading 'Investors Support' exists in the DOM", async () => {
  69  |       await expect(appPage.headingInvestorsSupport.first()).toBeAttached({ timeout: 5000 });
  70  |       evidence.validationsPerformed.push("Verify that the heading 'Investors Support' exists in the DOM");
  71  |     });
  72  |     await test.step("Verify that the heading 'Bombay Stock Exchange Limited (BSE)' exists in the DOM", async () => {
  73  |       await expect(appPage.headingBombayStockExchangeLimitedBse.first()).toBeAttached({ timeout: 5000 });
  74  |       evidence.validationsPerformed.push("Verify that the heading 'Bombay Stock Exchange Limited (BSE)' exists in the DOM");
  75  |     });
  76  |     await test.step("Verify that the heading 'National Stock Exchange of India Limited (NSE)' exists in the DOM", async () => {
  77  |       await expect(appPage.headingNationalStockExchangeOfIndiaLimitedNse.first()).toBeAttached({ timeout: 5000 });
  78  |       evidence.validationsPerformed.push("Verify that the heading 'National Stock Exchange of India Limited (NSE)' exists in the DOM");
  79  |     });
  80  |     await test.step("Verify that the heading 'details of shares to IEPF' exists in the DOM", async () => {
  81  |       await expect(appPage.headingDetailsOfSharesToIepf.first()).toBeAttached({ timeout: 5000 });
  82  |       evidence.validationsPerformed.push("Verify that the heading 'details of shares to IEPF' exists in the DOM");
  83  |     });
  84  |     await test.step("Verify that the heading 'investors contact' exists in the DOM", async () => {
  85  |       await expect(appPage.headingInvestorsContact.first()).toBeAttached({ timeout: 5000 });
  86  |       evidence.validationsPerformed.push("Verify that the heading 'investors contact' exists in the DOM");
  87  |     });
  88  | 
  89  |     await test.step("Capture screenshot evidence", async () => {
  90  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Investors Support Information Of Vi (Vodafone Idea Limited) - Heading Verification", "www.myvi.in");
  91  |       evidence.screenshots.push(screenshotPath);
  92  |     });
  93  | 
  94  |     await attachExecutionSummary(evidence, page, testInfo);
  95  |   });
  96  |   test("Verify that 45 Links are present on Investors Support Information Of Vi (Vodafone Idea Limited) @regression", async ({ page }, testInfo) => {
  97  |     await label('suite', "Regression Test Suite");
  98  |     await label('url', "https://www.myvi.in/");
  99  |     await label('domain', "www.myvi.in");
  100 |     await feature("Investors Support Information Of Vi (Vodafone Idea Limited)");
  101 |     await story("Verify Link elements are present");
  102 |     await severity("minor");
  103 |     await tag("regression");
  104 | 
  105 |     const evidence = createEvidence({
  106 |       application: "www.myvi.in",
  107 |       suite: "Regression Test Suite",
  108 |       browser: testInfo.project.name || 'chromium',
  109 |       pageName: "Investors Support Information Of Vi (Vodafone Idea Limited)",
  110 |       pageUrl: "https://www.myvi.in/investors/investors-support",
  111 |       testObjective: "Verify Link elements are present",
  112 |     });
  113 | 
  114 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  115 |       await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
  116 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  117 |     });
  118 |     await test.step("Verify that the link 'Personal' exists in the DOM", async () => {
  119 |       await expect(appPage.linkPersonal.first()).toBeAttached({ timeout: 5000 });
  120 |       evidence.validationsPerformed.push("Verify that the link 'Personal' exists in the DOM");
  121 |     });
  122 |     await test.step("Verify that the link 'Business' exists in the DOM", async () => {
  123 |       await expect(appPage.linkBusiness.first()).toBeAttached({ timeout: 5000 });
  124 |       evidence.validationsPerformed.push("Verify that the link 'Business' exists in the DOM");
  125 |     });
  126 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  127 |       await expect(appPage.link3.first()).toBeAttached({ timeout: 5000 });
  128 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  129 |     });
  130 |     await test.step("Verify that the link 'Company Overview' exists in the DOM", async () => {
  131 |       await expect(appPage.linkCompanyOverview.first()).toBeAttached({ timeout: 5000 });
  132 |       evidence.validationsPerformed.push("Verify that the link 'Company Overview' exists in the DOM");
  133 |     });
  134 | 
  135 |     await test.step("Capture screenshot evidence", async () => {
  136 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Investors Support Information Of Vi (Vodafone Idea Limited) - Link Verification", "www.myvi.in");
  137 |       evidence.screenshots.push(screenshotPath);
  138 |     });
  139 | 
  140 |     await attachExecutionSummary(evidence, page, testInfo);
  141 |   });
  142 |   test("Verify that 3 Menus are present on Investors Support Information Of Vi (Vodafone Idea Limited) @regression", async ({ page }, testInfo) => {
  143 |     await label('suite', "Regression Test Suite");
  144 |     await label('url', "https://www.myvi.in/");
  145 |     await label('domain', "www.myvi.in");
  146 |     await feature("Investors Support Information Of Vi (Vodafone Idea Limited)");
  147 |     await story("Verify Menu elements are present");
  148 |     await severity("minor");
  149 |     await tag("regression");
  150 | 
  151 |     const evidence = createEvidence({
  152 |       application: "www.myvi.in",
  153 |       suite: "Regression Test Suite",
  154 |       browser: testInfo.project.name || 'chromium',
  155 |       pageName: "Investors Support Information Of Vi (Vodafone Idea Limited)",
  156 |       pageUrl: "https://www.myvi.in/investors/investors-support",
  157 |       testObjective: "Verify Menu elements are present",
  158 |     });
  159 | 
  160 |     await test.step("Verify that the menu 'PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service' exists in the DOM", async () => {
> 161 |       await expect(appPage.menuPrepaidpostpaidnewConnectioninternationalRoaming5gottsMor.first()).toBeAttached({ timeout: 5000 });
      |                                                                                                   ^ Error: expect(locator).toBeAttached() failed
  162 |       evidence.validationsPerformed.push("Verify that the menu 'PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service' exists in the DOM");
  163 |     });
  164 |     await test.step("Verify that the menu 'BusinessInvestorsSign in' exists in the DOM", async () => {
  165 |       await expect(appPage.menuBusinessinvestorssignIn.first()).toBeAttached({ timeout: 5000 });
  166 |       evidence.validationsPerformed.push("Verify that the menu 'BusinessInvestorsSign in' exists in the DOM");
  167 |     });
  168 |     await test.step("Verify that the menu 'annual reportsQuarterly Resultsstock exchange submissionShareholding Patterninve' exists in the DOM", async () => {
  169 |       await expect(appPage.menuAnnualReportsquarterlyResultsstockExchangeSubmissionshar.first()).toBeAttached({ timeout: 5000 });
  170 |       evidence.validationsPerformed.push("Verify that the menu 'annual reportsQuarterly Resultsstock exchange submissionShareholding Patterninve' exists in the DOM");
  171 |     });
  172 | 
  173 |     await test.step("Capture screenshot evidence", async () => {
  174 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Investors Support Information Of Vi (Vodafone Idea Limited) - Menu Verification", "www.myvi.in");
  175 |       evidence.screenshots.push(screenshotPath);
  176 |     });
  177 | 
  178 |     await attachExecutionSummary(evidence, page, testInfo);
  179 |   });
  180 | });
  181 | 
```