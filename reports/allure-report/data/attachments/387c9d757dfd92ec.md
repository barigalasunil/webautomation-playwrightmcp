# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\PrivacyPolicyVi.spec.ts >> https://www.myvi.in/ - Privacy Policy | Vi - Regression Tests >> Verify that 3 Menus are present on Privacy Policy | Vi @regression
- Location: tests\generated\www-myvi-in\PrivacyPolicyVi.spec.ts:264:3

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: getByRole('navigation', { name: 'open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs' }).first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for getByRole('navigation', { name: 'open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs' }).first()

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
- main:
  - heading "Privacy Matters" [level=1]
  - list:
    - listitem:
      - link "privacy policy":
        - /url: "#case1"
    - listitem:
      - link "fraud prevention":
        - /url: "#case2"
    - listitem:
      - link "security awareness":
        - /url: "#case3"
  - main:
    - heading "privacy policy" [level=3]
    - paragraph: Your privacy is important to Us – just as knowing how we use Your information is important to you. Our Privacy page gives You full visibility of how We collect, store, use, process and protect Your Personal Information when You use our products, services and our website/applications.
    - paragraph
    - paragraph: OUR PRIVACY PROMISE
    - list:
      - listitem: We respect your privacy and your choices.
      - listitem: We make sure that privacy and security are embedded in everything we do.
      - listitem: We never offer or sell your personal information.
      - listitem: We are committed to keeping your personal information safe and secure. This includes only working with trusted partners.
      - listitem: We are committed to being open and transparent about how we use your personal information.
    - paragraph
    - paragraph: We've broken this information down into easily understandable sections so that You can find the details You need as quickly and easily as possible.
    - paragraph
    - paragraph:
      - text: Last Updated on 19
      - superscript: th
      - text: July 2024
    - img "Icon representing the twelfth feature of the IMC service"
  - navigation:
    - list:
      - listitem: Who we are
      - listitem: Collection of personal information
      - listitem: Use of Personal Information
      - listitem: How do we store your Personal Information?
      - listitem: How do We Protect Your Personal Information
      - listitem: Use of cookies and technologies
      - listitem: Disclosure, Sharing and Transfer
      - listitem: Vi App and its Permissions
      - listitem: contact us
  - heading "Who we are :" [level=2]
  - img "Image showing an overview of who we are, likely related to privacy policies"
  - text: PLEASE READ THIS PRIVACY POLICY CAREFULLY. “YOU” AND “YOUR” SHALL REFER TO THE CUSTOMER OR SUBSCRIBER OR USER OF VODAFONE IDEA LIMITED’s PRODUCTS AND SERVICES, WEBSITE [www.myvi.in, www.vodafoneidea.com] OR APPLICATIONS (hereinafter ‘VIL’ or ‘Vi’) and retail stores, PROVIDING OR OFFERING SERVICES TO YOU.
  - paragraph:
    - link "view more":
      - /url: ""
  - separator
  - heading "Collection of personal information" [level=2]
  - img "Icon representing the thirteenth feature of the IMC service"
  - text: a. The Information Technology Act 2000, its subsequent amendments and The Information Technology (Reasonable security practices and procedures and sensitive personal data or information) Rules, 2011 includes extensive definitions for Personal Information and Sensitive Personal Information. For the purposes of this Policy, Personal Information (PI) includes Personally Identifiable Information that is information relating to a natural person or that could be used directly or indirectly in combination with other information available with Us and is capable of identifying a natural person and “Sensitive Personal Information” which may reveal, or be related to or constitute financial data, health data (example Blood Group), biometric data, passwords (to help you securely access your own accounts only ) etc. of natural persons..
  - paragraph:
    - link "view more":
      - /url: ""
  - separator
  - heading "Use of Personal Information" [level=2]
  - img "Icon or image representing personal information protection"
  - text: The information that we collect from you is held and used in accordance with prevailing data protection applicable laws and regulations in India. It may be used to verify your identity before providing services, contact you/ respond to you regarding matters relevant to the underlying services (including while you are on national and international roaming), generate bills and statements of use, data analytics etc
  - paragraph:
    - link "view more":
      - /url: ""
  - separator
  - heading "How do we store your Personal Information?" [level=2]
  - img "Icon representing the fourteenth feature of the IMC service"
  - text: Your Personal Information will primarily be stored in electronic form. However, certain Personal Information can also be stored in physical form.
  - paragraph:
    - link "view more":
      - /url: ""
  - separator
  - heading "How do We Protect Your Personal Information" [level=2]
  - img "Graphic highlighting methods to protect personal information"
  - text: a. We shall strive on best effort basis to ensure the security of Your information. Access to Your Personal Information, within VIL is restricted and shared with VIL personnel on a need to know basis. All VIL personnel are obligated to protect confidentiality and ensure security as per VIL’s Code of Conduct and confidentiality policies.
  - paragraph:
    - link "view more":
      - /url: ""
  - separator
  - heading "Use of cookies and technologies" [level=2]
  - img "Icon representing the fifteenth feature of the IMC service"
  - text: Please read this cookie statement carefully. “You” and “Your” shall refer to the customer or subscriber or user or visitor of the Vodafone Idea Limited website [www.myvi.net] or Vi Applications. “We,” “Our” or “Us” shall refer to Vodafone Idea Limited, providing or offering services to You or customer or subscriber of the Vodafone Idea Limited. This Cookie Statement is a part of and subject to the Privacy Policy. This statement explains the collection and use of various Cookies by Us. We periodically update and revise this Cookie Statement and would strongly urge you to revisit this page from time to time.
  - paragraph:
    - link "view more":
      - /url: ""
  - separator
  - heading "Disclosure, Sharing and Transfer of Personal Information (PI)" [level=2]
  - img "Graphic depicting disclosure practices related to privacy policies"
  - text: "1. Disclosure, Sharing and Transfer of Personal Information a. We store Your Personal Information within the territorial limits of India. b. As stated before, we may disclose or share Your Personal Information with:"
  - paragraph:
    - link "view more":
      - /url: ""
  - separator
  - heading "Vi App and its Permissions" [level=2]
  - img "Image showing an overview of who we are, likely related to privacy policies"
  - text: As a part of enhancing Your experience with Us, Vi App collects and processes personal data including but not limited to Your Name, Phone Number, Email Id, Location and other information as mentioned in detail in the App store listing of Vi App.
  - paragraph:
    - link "view more":
      - /url: ""
  - separator
  - heading "contact us" [level=2]
  - img "Icon representing the sixteenth feature of the IMC service"
  - text: We are committed to safeguarding Your personal information collected and handled by Us and look forward to Your continued support for the same. In case of any clarification, feedback, concern or queries regarding privacy and security, you may reach us at privacyofficer@vodafoneidea.com.
  - paragraph:
    - link "view more":
      - /url: ""
  - separator
  - paragraph: “Privacy is of utmost importance and value to all. At Vi, we have built a culture that respects privacy and protects all customers’ data who entrust us with their data. It is our aim to communicate with you the actions taken at Vi to achieve the above and we are open to receive your feedback.
  - paragraph: Privacy and data protection is key in the design, development and delivery of all our products & services. Vi is recognized by Data Security Council of India as a trusted guardian of your information that you share with us and is known for its fair and responsible approach in protecting it. We are committed to protecting your privacy and managing your data in a responsible manner.”
  - paragraph: Mathan Kasilingam
  - paragraph: Chief Technology Security Officer
  - img
  - heading "frequently asked questions" [level=2]
  - heading "what is personal data?" [level=3]
  - heading "how do you collect personal data from me?" [level=3]
  - heading "what types of personal data do you collect?" [level=3]
  - heading "what do you use the data for?" [level=3]
  - heading "what legal bases do you rely on to process my personal data?" [level=3]
  - button "see more"
  - heading "effortless account management on-the-go" [level=3]
  - text: Download the app for exclusive offers, manage your account and much more, on-the-go.
  - link "image":
    - /url: https://www.apple.com/in/ios/app-store/
    - img "image"
  - link "image":
    - /url: https://play.google.com/store?hl=en
    - img "image"
  - img "Banner"
  - navigation "breadcrumb":
    - list:
      - listitem:
        - link "Home":
          - /url: https://www.myvi.in/business
      - listitem:
        - link "Privacy Policy":
          - /url: https://www.myvi.in/privacy-policy
- contentinfo:
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
```

# Test source

```ts
  183 |       evidence.screenshots.push(screenshotPath);
  184 |     });
  185 | 
  186 |     await attachExecutionSummary(evidence, page, testInfo);
  187 |   });
  188 |   test("Verify that 58 Inputs are present on Privacy Policy | Vi @regression", async ({ page }, testInfo) => {
  189 |     await label('suite', "Regression Test Suite");
  190 |     await label('url', "https://www.myvi.in/");
  191 |     await label('domain', "www.myvi.in");
  192 |     await feature("Privacy Policy | Vi");
  193 |     await story("Verify Input elements are present");
  194 |     await severity("minor");
  195 |     await tag("regression");
  196 | 
  197 |     const evidence = createEvidence({
  198 |       application: "www.myvi.in",
  199 |       suite: "Regression Test Suite",
  200 |       browser: testInfo.project.name || 'chromium',
  201 |       pageName: "Privacy Policy | Vi",
  202 |       pageUrl: "https://www.myvi.in/privacy-policy",
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
  216 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  217 |     });
  218 |     await test.step("Verify that the input 'Search' exists in the DOM", async () => {
  219 |       await expect(appPage.inputSearch1.first()).toBeAttached({ timeout: 5000 });
  220 |       evidence.validationsPerformed.push("Verify that the input 'Search' exists in the DOM");
  221 |     });
  222 |     await test.step("Verify that the input 'Search' exists in the DOM", async () => {
  223 |       await expect(appPage.inputSearch2.first()).toBeAttached({ timeout: 5000 });
  224 |       evidence.validationsPerformed.push("Verify that the input 'Search' exists in the DOM");
  225 |     });
  226 | 
  227 |     await test.step("Capture screenshot evidence", async () => {
  228 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Privacy Policy | Vi - Input Verification", "www.myvi.in");
  229 |       evidence.screenshots.push(screenshotPath);
  230 |     });
  231 | 
  232 |     await attachExecutionSummary(evidence, page, testInfo);
  233 |   });
  234 |   test("Verify that 1 Form is present on Privacy Policy | Vi @regression", async ({ page }, testInfo) => {
  235 |     await label('suite', "Regression Test Suite");
  236 |     await label('url', "https://www.myvi.in/");
  237 |     await label('domain', "www.myvi.in");
  238 |     await feature("Privacy Policy | Vi");
  239 |     await story("Verify Form elements are present");
  240 |     await severity("minor");
  241 |     await tag("regression");
  242 | 
  243 |     const evidence = createEvidence({
  244 |       application: "www.myvi.in",
  245 |       suite: "Regression Test Suite",
  246 |       browser: testInfo.project.name || 'chromium',
  247 |       pageName: "Privacy Policy | Vi",
  248 |       pageUrl: "https://www.myvi.in/privacy-policy",
  249 |       testObjective: "Verify Form elements are present",
  250 |     });
  251 | 
  252 |     await test.step("Verify that the form 'Form' exists in the DOM", async () => {
  253 |       await expect(appPage.form0.first()).toBeAttached({ timeout: 5000 });
  254 |       evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
  255 |     });
  256 | 
  257 |     await test.step("Capture screenshot evidence", async () => {
  258 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Privacy Policy | Vi - Form Verification", "www.myvi.in");
  259 |       evidence.screenshots.push(screenshotPath);
  260 |     });
  261 | 
  262 |     await attachExecutionSummary(evidence, page, testInfo);
  263 |   });
  264 |   test("Verify that 3 Menus are present on Privacy Policy | Vi @regression", async ({ page }, testInfo) => {
  265 |     await label('suite', "Regression Test Suite");
  266 |     await label('url', "https://www.myvi.in/");
  267 |     await label('domain', "www.myvi.in");
  268 |     await feature("Privacy Policy | Vi");
  269 |     await story("Verify Menu elements are present");
  270 |     await severity("minor");
  271 |     await tag("regression");
  272 | 
  273 |     const evidence = createEvidence({
  274 |       application: "www.myvi.in",
  275 |       suite: "Regression Test Suite",
  276 |       browser: testInfo.project.name || 'chromium',
  277 |       pageName: "Privacy Policy | Vi",
  278 |       pageUrl: "https://www.myvi.in/privacy-policy",
  279 |       testObjective: "Verify Menu elements are present",
  280 |     });
  281 | 
  282 |     await test.step("Verify that the menu 'open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs' exists in the DOM", async () => {
> 283 |       await expect(appPage.menuOpenInViAppSignInSignInDashboardMyAccountPrepaid.first()).toBeAttached({ timeout: 5000 });
      |                                                                                          ^ Error: expect(locator).toBeAttached() failed
  284 |       evidence.validationsPerformed.push("Verify that the menu 'open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs' exists in the DOM");
  285 |     });
  286 |     await test.step("Verify that the menu 'Who we are Collection of personal information Use of Personal Information How do' exists in the DOM", async () => {
  287 |       await expect(appPage.menuWhoWeAreCollectionOfPersonalInformationUseOfPersona.first()).toBeAttached({ timeout: 5000 });
  288 |       evidence.validationsPerformed.push("Verify that the menu 'Who we are Collection of personal information Use of Personal Information How do' exists in the DOM");
  289 |     });
  290 |     await test.step("Verify that the menu 'Home Privacy Policy' exists in the DOM", async () => {
  291 |       await expect(appPage.menuHomePrivacyPolicy.first()).toBeAttached({ timeout: 5000 });
  292 |       evidence.validationsPerformed.push("Verify that the menu 'Home Privacy Policy' exists in the DOM");
  293 |     });
  294 | 
  295 |     await test.step("Capture screenshot evidence", async () => {
  296 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Privacy Policy | Vi - Menu Verification", "www.myvi.in");
  297 |       evidence.screenshots.push(screenshotPath);
  298 |     });
  299 | 
  300 |     await attachExecutionSummary(evidence, page, testInfo);
  301 |   });
  302 | });
  303 | 
```