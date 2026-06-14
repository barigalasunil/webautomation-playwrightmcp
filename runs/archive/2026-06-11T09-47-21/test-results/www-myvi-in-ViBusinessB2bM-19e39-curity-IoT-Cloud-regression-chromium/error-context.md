# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\ViBusinessB2bMobilityConnectivitySecurityIotCloud.spec.ts >> https://www.myvi.in/ - Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud - Regression Tests >> Verify that 45 Inputs are present on Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud @regression
- Location: tests\generated\www-myvi-in\ViBusinessB2bMobilityConnectivitySecurityIotCloud.spec.ts:188:3

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: locator('input[name="analyticsPlatform"]').first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for locator('input[name="analyticsPlatform"]').first()

```

```yaml
- banner:
  - navigation:
    - link "Vi Business":
      - /url: /business
      - img "Vi Business"
    - list:
      - listitem:
        - button "Products & Solutions"
      - listitem:
        - button "Segments"
      - listitem:
        - button "Why Vi Business"
      - listitem:
        - button "Resources"
      - listitem:
        - link "MSME - ReadyForNext":
          - /url: /business/enterprise-segments/smb/msme-readyfornext
      - listitem
      - listitem:
        - link "Help":
          - /url: /business/help-and-support-faqs
      - img "search"
      - listitem
    - paragraph:
      - text: Business
      - img "sign arrow"
    - paragraph:
      - img "profile icon"
      - img "profile icon black"
- toolbar:
  - listbox:
    - option "easy+ir Explore Easy+":
      - link "easy+ir":
        - /url: /business/enterprise-mobility/easyplus-ir-ott
        - img "easy+ir"
      - link "easy+ir":
        - /url: /business/enterprise-mobility/easyplus-ir-ott
        - paragraph
        - paragraph
      - link "Explore Easy+":
        - /url: /business/enterprise-mobility/easyplus-ir-ott
  - tablist:
    - listitem:
      - button "3"
- heading "explore Vi business portfolio" [level=2]
- list:
  - listitem:
    - link "enterprise mobility":
      - /url: "#enterprise-mobility"
  - listitem:
    - link "enterprise connectivity":
      - /url: "#enterprise-connectivity"
  - listitem:
    - link "security":
      - /url: "#security"
  - listitem:
    - link "IoT":
      - /url: "#IoT"
  - listitem:
    - link "business communication":
      - /url: "#business-communication"
  - listitem:
    - link "colocation & cloud":
      - /url: "#colocation-cloud"
  - listitem:
    - link "MSMEs":
      - /url: "#MSMEs"
- toolbar:
  - button "Previous" [disabled]
  - listbox
  - button "Next"
  - tablist:
    - listitem:
      - button "1"
- img "trophy"
- heading "awards and accolades" [level=2]
- paragraph: Our solutions and services have been consistently recognised by India’s business leaders and our customers.
- text: "2026"
- button "Previous"
- listbox:
  - option "E4M Indian Content Marketing Awards – B2B India’s Largest Digital Advisory for MSMEs - ReadyForNext":
    - img
    - paragraph: E4M Indian Content Marketing Awards – B2B
    - paragraph: India’s Largest Digital Advisory for MSMEs - ReadyForNext
  - option "CIO Choice Telecom Services Category - SIP Trunking":
    - img
    - paragraph: CIO Choice
    - paragraph: Telecom Services Category - SIP Trunking
  - option "Aegis Graham Bell IoT Innovation Lab - Innovation in IoT":
    - img
    - paragraph: Aegis Graham Bell
    - paragraph: IoT Innovation Lab - Innovation in IoT
- button "Next"
- heading "from our case studies" [level=2]
- listbox:
  - option "A leading fintech innovator strengthens real-time payment notifications with Vi C-DOT IoT Lab A leading fintech innovator strengthens real-time payment notifications with Vi C-DOT IoT Lab Discover how a leading fintech innovator improved real-time payment notifications with Vi C-DOT, ensuring faster, secure, and seamless digital transactions. arrow":
    - img "A leading fintech innovator strengthens real-time payment notifications with Vi C-DOT IoT Lab"
    - heading "A leading fintech innovator strengthens real-time payment notifications with Vi C-DOT IoT Lab" [level=3]
    - paragraph: Discover how a leading fintech innovator improved real-time payment notifications with Vi C-DOT, ensuring faster, secure, and seamless digital transactions.
    - img "arrow"
  - option "A leading AIS140 aggregator ensures “always connected” devices with Vi C-DOT IoT Lab A leading AIS140 aggregator ensures “always connected” devices with Vi C-DOT IoT Lab Discover how a leading AIS140 aggregator ensures always-connected devices with Vi C-DOT IoT Lab, driving reliable IoT connectivity and smarter mobility solutions. arrow":
    - img "A leading AIS140 aggregator ensures “always connected” devices with Vi C-DOT IoT Lab"
    - heading "A leading AIS140 aggregator ensures “always connected” devices with Vi C-DOT IoT Lab" [level=3]
    - paragraph: Discover how a leading AIS140 aggregator ensures always-connected devices with Vi C-DOT IoT Lab, driving reliable IoT connectivity and smarter mobility solutions.
    - img "arrow"
  - option "A leading utility provider ensures seamless connectivity of smart metering solution with Vi C-DOT IoT Lab A leading utility provider ensures seamless connectivity of smart metering solution with Vi C-DOT IoT Lab Discover how a leading utility provider ensured seamless connectivity of its smart metering solution using Vi C-DOT IoT Lab, driving efficiency and reliability. arrow":
    - img "A leading utility provider ensures seamless connectivity of smart metering solution with Vi C-DOT IoT Lab"
    - heading "A leading utility provider ensures seamless connectivity of smart metering solution with Vi C-DOT IoT Lab" [level=3]
    - paragraph: Discover how a leading utility provider ensured seamless connectivity of its smart metering solution using Vi C-DOT IoT Lab, driving efficiency and reliability.
    - img "arrow"
- link "view all":
  - /url: /business/case-studies
  - button "view all"
- heading "from our blogs" [level=2]
- button "Previous"
- listbox:
  - 'option "SIP vs PRI vs VoIP: Key Differences & Best Solution by Vi Business SIP vs PRI vs VoIP: Key Differences & Best Solution | Vi Business Compare SIP, PRI & VoIP to understand key differences in ✓cost, ✓scalability, ✓performance & ✓flexibility, and choose the right business communication solution. calender May 12, 2026 arrow"':
    - 'img "SIP vs PRI vs VoIP: Key Differences & Best Solution by Vi Business"'
    - 'heading "SIP vs PRI vs VoIP: Key Differences & Best Solution | Vi Business" [level=3]'
    - paragraph: Compare SIP, PRI & VoIP to understand key differences in ✓cost, ✓scalability, ✓performance & ✓flexibility, and choose the right business communication solution.
    - paragraph:
      - img "calender"
      - text: May 12, 2026
    - img "arrow"
  - 'option "Hybrid SD-WAN vs MPLS: Key Differences & Best Choice for Business by Vi Business Hybrid SD-WAN and MPLS: Understanding the Right Approach for Enterprise Connectivity in 2026 Understand Hybrid SD-WAN and MPLS differences in ✓cost, ✓performance, ✓scalability & security, and choose the ✓right network solution for your business needs. calender April 27, 2026 arrow"':
    - 'img "Hybrid SD-WAN vs MPLS: Key Differences & Best Choice for Business by Vi Business"'
    - 'heading "Hybrid SD-WAN and MPLS: Understanding the Right Approach for Enterprise Connectivity in 2026" [level=3]'
    - paragraph: Understand Hybrid SD-WAN and MPLS differences in ✓cost, ✓performance, ✓scalability & security, and choose the ✓right network solution for your business needs.
    - paragraph:
      - img "calender"
      - text: April 27, 2026
    - img "arrow"
  - option "What is Pocket WiFi? Best Pocket WiFi Router Guide by Vi Business What is Pocket WiFi? Best Pocket WiFi Router Guide – Vi Business Learn what pocket WiFi is, how a pocket WiFi router works, and explore the best pocket WiFi plans for secure, reliable connectivity on the go for businesses. calender March 31, 2026 arrow":
    - img "What is Pocket WiFi? Best Pocket WiFi Router Guide by Vi Business"
    - heading "What is Pocket WiFi? Best Pocket WiFi Router Guide – Vi Business" [level=3]
    - paragraph: Learn what pocket WiFi is, how a pocket WiFi router works, and explore the best pocket WiFi plans for secure, reliable connectivity on the go for businesses.
    - paragraph:
      - img "calender"
      - text: March 31, 2026
    - img "arrow"
- button "Next"
- link "view all":
  - /url: /business/blog
  - button "view all"
- heading "frequently asked questions" [level=2]
- heading "1. Which segments do we cater to?" [level=3]
- heading "2. How are we helping digitally transform large businesses?" [level=3]
- heading "3. How do we cater to the needs of the Government?" [level=3]
- heading "4. How do we help SMEs?" [level=3]
- heading "5. How is our network superior to our competition?" [level=3]
- heading "6. What are your 5G plans?" [level=3]
- button "see more"
- img "close"
- heading "your cookie preferences close" [level=3]:
  - text: your cookie preferences
  - img "close"
- paragraph:
  - text: We use cookies to enhance your browsing experience, analyze website traffic, and provide personalized content. By clicking “Accept all,” you agree to the use of all cookies. Essential cookies will continue to function regardless of your choice. Please refer to our
  - link "Cookie Policy and Privacy Policy":
    - /url: https://www.myvi.in/privacy-policy
  - text: for more information.
- button "accept all"
- heading "our valuable partners" [level=2]
- img "APPLE"
- img "IBM"
- img "GOOGLE"
- img "FIRSTWAVE"
- img "MICROSOFT"
- img "HP"
- img "TRENDMICRO"
- img "FORTINET"
- img "NUAGEN"
- img "CTRLS"
- img "CISCO"
- img "Yotta"
- img "GENESYS"
- img "Infinity Labs"
- img "APPLE"
- img "IBM"
- img "GOOGLE"
- img "FIRSTWAVE"
- img "MICROSOFT"
- img "HP"
- img "TRENDMICRO"
- img "FORTINET"
- img "NUAGEN"
- img "CTRLS"
- img "CISCO"
- img "Yotta"
- img "GENESYS"
- img "Infinity Labs"
- img "Back to Top"
- paragraph: go to top
- paragraph: dedicated support system
- paragraph:
  - img "custCall"
- paragraph: for customer service
- paragraph: "9920055666"
- paragraph
- paragraph:
  - img "phone"
- paragraph: for sales enquiries dial
- paragraph: "1800123123123"
- paragraph
- paragraph:
  - img "email"
- paragraph: write us an email
- link "corporatecare.india@vodafoneidea.com":
  - /url: mailto:corporatecare.india@vodafoneidea.com
  - paragraph: corporatecare.india@vodafoneidea.com
- contentinfo:
  - img "Vi Business"
  - paragraph
  - paragraph: Vodafone Idea Limited
  - paragraph: Vodafone Idea Limited is an Aditya Birla Group and Vodafone Group partnership. The Company provides pan India Voice and Data services across 2G, 3G, 4G and 5G platform.
  - paragraph
  - link "LinkedIn":
    - /url: https://www.linkedin.com/showcase/vi-business-india
    - img "LinkedIn"
  - link "Twitter":
    - /url: https://twitter.com/ViBusinessIndia
    - img "Twitter"
  - link "Facebook":
    - /url: https://www.facebook.com/ViBusinessIndia
    - img "Facebook"
  - link "Youtube":
    - /url: https://www.youtube.com/channel/UCeLl9QhfSj-6HwVlHtkXFLA
    - img "Youtube"
  - link "Instagram":
    - /url: https://www.instagram.com/vibusinessindia/
    - img "Instagram"
  - paragraph:
    - button "products and solutions":
      - paragraph: products and solutions
  - list:
    - listitem:
      - link "Enterprise Mobility":
        - /url: /business/enterprise-mobility-solutions
    - listitem:
      - link "Connectivity":
        - /url: /business/connectivity-solutions
    - listitem:
      - link "Security":
        - /url: /business/security-solutions
    - listitem:
      - link "Internet of Things Solutions":
        - /url: /business/internet-of-things-solutions
    - listitem:
      - link "Business Communications":
        - /url: /business/business-communications-solutions
    - listitem:
      - link "Colocation & Cloud services":
        - /url: /business/colocation-cloud-services
  - paragraph:
    - button "about Vi Business" [expanded]:
      - paragraph: about Vi Business
  - list:
    - listitem:
      - link "About Us":
        - /url: /business/about-us
    - listitem:
      - link "Media Room":
        - /url: /business/why-vi/news-and-insights/press-releases-list
    - listitem:
      - link "Careers":
        - /url: /careers
    - listitem:
      - link "Sitemap":
        - /url: /business/sitemap
  - paragraph
  - list
  - paragraph:
    - button "Insights":
      - paragraph: Insights
  - list:
    - listitem:
      - link "Blogs across Industries":
        - /url: /business/blog
    - listitem:
      - link "Successful Case Studies":
        - /url: /business/case-studies
  - paragraph:
    - button "regulatory":
      - paragraph: regulatory
  - list:
    - listitem:
      - link "Privacy Policy":
        - /url: /privacy-policy
    - listitem:
      - link "Terms & Conditions":
        - /url: /terms-of-use
    - listitem:
      - link "Regulatory Notices":
        - /url: /regulatory-notices
    - listitem:
      - link "DND":
        - /url: /business/dnd
  - paragraph:
    - text: This website uses own third-party cookies.Find out more about usage in our
    - link "Privacy Policy":
      - /url: https://www.myvi.in/business/privacy-policy
    - text: page. Copyright Reserved with Vodafone Idea Limited (formerly Idea Cellular Limited).
  - paragraph: "Vodafone Idea Limited (formerly Idea Cellular Limited), An Aditya Birla Group & Vodafone partnership, Suman Towers, Plot No.18, Sector 11, Gandhinagar 382011, Gujarat.CIN L32100GJ1996PLC030976, T: +91-79 6671 4000, F: +91-79 2323 2251"
- list:
  - listitem:
    - link "request call back":
      - /url: /request-a-call-back
      - button "request call back"
- status
```

# Test source

```ts
  107 |       suite: "Regression Test Suite",
  108 |       browser: testInfo.project.name || 'chromium',
  109 |       pageName: "Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud",
  110 |       pageUrl: "https://www.myvi.in/business",
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
  122 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  123 |       await expect(appPage.link2.first()).toBeAttached({ timeout: 5000 });
  124 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  125 |     });
  126 |     await test.step("Verify that the link 'Vi Business Assist' exists in the DOM", async () => {
  127 |       await expect(appPage.linkViBusinessAssist.first()).toBeAttached({ timeout: 5000 });
  128 |       evidence.validationsPerformed.push("Verify that the link 'Vi Business Assist' exists in the DOM");
  129 |     });
  130 |     await test.step("Verify that the link 'IoT Smart Central' exists in the DOM", async () => {
  131 |       await expect(appPage.linkIotSmartCentral.first()).toBeAttached({ timeout: 5000 });
  132 |       evidence.validationsPerformed.push("Verify that the link 'IoT Smart Central' exists in the DOM");
  133 |     });
  134 | 
  135 |     await test.step("Capture screenshot evidence", async () => {
  136 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud - Link Verification", "www.myvi.in");
  137 |       evidence.screenshots.push(screenshotPath);
  138 |     });
  139 | 
  140 |     await attachExecutionSummary(evidence, page, testInfo);
  141 |   });
  142 |   test("Verify that 86 Buttons are present on Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud @regression", async ({ page }, testInfo) => {
  143 |     await label('suite', "Regression Test Suite");
  144 |     await label('url', "https://www.myvi.in/");
  145 |     await label('domain', "www.myvi.in");
  146 |     await feature("Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud");
  147 |     await story("Verify Button elements are present");
  148 |     await severity("minor");
  149 |     await tag("regression");
  150 | 
  151 |     const evidence = createEvidence({
  152 |       application: "www.myvi.in",
  153 |       suite: "Regression Test Suite",
  154 |       browser: testInfo.project.name || 'chromium',
  155 |       pageName: "Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud",
  156 |       pageUrl: "https://www.myvi.in/business",
  157 |       testObjective: "Verify Button elements are present",
  158 |     });
  159 | 
  160 |     await test.step("Verify that the button 'Products & Solutions' exists in the DOM", async () => {
  161 |       await expect(appPage.buttonProductsSolutions.first()).toBeAttached({ timeout: 5000 });
  162 |       evidence.validationsPerformed.push("Verify that the button 'Products & Solutions' exists in the DOM");
  163 |     });
  164 |     await test.step("Verify that the button 'Segments' exists in the DOM", async () => {
  165 |       await expect(appPage.buttonSegments.first()).toBeAttached({ timeout: 5000 });
  166 |       evidence.validationsPerformed.push("Verify that the button 'Segments' exists in the DOM");
  167 |     });
  168 |     await test.step("Verify that the button 'Why Vi Business' exists in the DOM", async () => {
  169 |       await expect(appPage.buttonWhyViBusiness.first()).toBeAttached({ timeout: 5000 });
  170 |       evidence.validationsPerformed.push("Verify that the button 'Why Vi Business' exists in the DOM");
  171 |     });
  172 |     await test.step("Verify that the button 'Resources' exists in the DOM", async () => {
  173 |       await expect(appPage.buttonResources.first()).toBeAttached({ timeout: 5000 });
  174 |       evidence.validationsPerformed.push("Verify that the button 'Resources' exists in the DOM");
  175 |     });
  176 |     await test.step("Verify that the button 'request call back' exists in the DOM", async () => {
  177 |       await expect(appPage.buttonRequestCallBack.first()).toBeAttached({ timeout: 5000 });
  178 |       evidence.validationsPerformed.push("Verify that the button 'request call back' exists in the DOM");
  179 |     });
  180 | 
  181 |     await test.step("Capture screenshot evidence", async () => {
  182 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud - Button Verification", "www.myvi.in");
  183 |       evidence.screenshots.push(screenshotPath);
  184 |     });
  185 | 
  186 |     await attachExecutionSummary(evidence, page, testInfo);
  187 |   });
  188 |   test("Verify that 45 Inputs are present on Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud @regression", async ({ page }, testInfo) => {
  189 |     await label('suite', "Regression Test Suite");
  190 |     await label('url', "https://www.myvi.in/");
  191 |     await label('domain', "www.myvi.in");
  192 |     await feature("Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud");
  193 |     await story("Verify Input elements are present");
  194 |     await severity("minor");
  195 |     await tag("regression");
  196 | 
  197 |     const evidence = createEvidence({
  198 |       application: "www.myvi.in",
  199 |       suite: "Regression Test Suite",
  200 |       browser: testInfo.project.name || 'chromium',
  201 |       pageName: "Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud",
  202 |       pageUrl: "https://www.myvi.in/business",
  203 |       testObjective: "Verify Input elements are present",
  204 |     });
  205 | 
  206 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
> 207 |       await expect(appPage.inputAnalyticsplatform.first()).toBeAttached({ timeout: 5000 });
      |                                                            ^ Error: expect(locator).toBeAttached() failed
  208 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  209 |     });
  210 |     await test.step("Verify that the input 'search' exists in the DOM", async () => {
  211 |       await expect(appPage.inputSearch.first()).toBeAttached({ timeout: 5000 });
  212 |       evidence.validationsPerformed.push("Verify that the input 'search' exists in the DOM");
  213 |     });
  214 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  215 |       await expect(appPage.inputUparam.first()).toBeAttached({ timeout: 5000 });
  216 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  217 |     });
  218 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  219 |       await expect(appPage.inputUtocen.first()).toBeAttached({ timeout: 5000 });
  220 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  221 |     });
  222 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  223 |       await expect(appPage.inputUtmSource.first()).toBeAttached({ timeout: 5000 });
  224 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  225 |     });
  226 | 
  227 |     await test.step("Capture screenshot evidence", async () => {
  228 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud - Input Verification", "www.myvi.in");
  229 |       evidence.screenshots.push(screenshotPath);
  230 |     });
  231 | 
  232 |     await attachExecutionSummary(evidence, page, testInfo);
  233 |   });
  234 |   test("Verify that 1 Menu is present on Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud @regression", async ({ page }, testInfo) => {
  235 |     await label('suite', "Regression Test Suite");
  236 |     await label('url', "https://www.myvi.in/");
  237 |     await label('domain', "www.myvi.in");
  238 |     await feature("Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud");
  239 |     await story("Verify Menu elements are present");
  240 |     await severity("minor");
  241 |     await tag("regression");
  242 | 
  243 |     const evidence = createEvidence({
  244 |       application: "www.myvi.in",
  245 |       suite: "Regression Test Suite",
  246 |       browser: testInfo.project.name || 'chromium',
  247 |       pageName: "Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud",
  248 |       pageUrl: "https://www.myvi.in/business",
  249 |       testObjective: "Verify Menu elements are present",
  250 |     });
  251 | 
  252 |     await test.step("Verify that the menu 'Vi Business Assist IoT Smart Central Dashboard My Account Products & Solutions F' exists in the DOM", async () => {
  253 |       await expect(appPage.menuViBusinessAssistIotSmartCentralDashboardMyAccountPr.first()).toBeAttached({ timeout: 5000 });
  254 |       evidence.validationsPerformed.push("Verify that the menu 'Vi Business Assist IoT Smart Central Dashboard My Account Products & Solutions F' exists in the DOM");
  255 |     });
  256 | 
  257 |     await test.step("Capture screenshot evidence", async () => {
  258 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud - Menu Verification", "www.myvi.in");
  259 |       evidence.screenshots.push(screenshotPath);
  260 |     });
  261 | 
  262 |     await attachExecutionSummary(evidence, page, testInfo);
  263 |   });
  264 | });
  265 | 
```