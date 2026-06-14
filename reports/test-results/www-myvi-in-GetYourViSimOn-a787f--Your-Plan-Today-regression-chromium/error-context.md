# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\GetYourViSimOnlineAndEnjoyFreeDeliveryChooseYourPlanToday.spec.ts >> https://www.myvi.in/ - Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today - Regression Tests >> Verify that 29 Links are present on Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today @regression
- Location: tests\generated\www-myvi-in\GetYourViSimOnlineAndEnjoyFreeDeliveryChooseYourPlanToday.spec.ts:96:3

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: getByRole('link', { name: 'Port to unlimited data+calls+entertainment..' }).first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for getByRole('link', { name: 'Port to unlimited data+calls+entertainment..' }).first()

```

```yaml
- banner:
  - link "Vi":
    - /url: https://www.myvi.in/
    - img "Vi"
- heading "our best selling plans now with free SIM delivery" [level=2]
- listbox:
  - option "digital exclusive online exclusive Vi Max 451 ₹451/month voice img Unlimited Calls | 3000 SMS Local, STD, National Roaming data img 50GB (Unlimited 12 AM to 6 AM) 200GB roll over Vi Games PLUS choose any 1 free from below JioHotstar JioHotstar 1 year of JioHotstar mobile subscription Sony LIV Sony LIV 12 months of Sony LIV mobile subscription Ease My Trip Ease My Trip 1 year access to flat Rs750 OFF every month on booking return flights via EaseMyTrip Norton Norton 1 year Norton 360 Mobile Security cover at no extra cost proceed with ₹451 plan":
    - img "digital exclusive"
    - text: online exclusive
    - paragraph: Vi Max 451
    - paragraph: ₹451/month
    - separator
    - img "voice img"
    - paragraph: Unlimited Calls | 3000 SMS Local, STD, National Roaming
    - img "data img"
    - paragraph: 50GB (Unlimited 12 AM to 6 AM) 200GB roll over
    - checkbox
    - img "Vi Games"
    - paragraph: PLUS choose any 1 free from below
    - img "JioHotstar"
    - paragraph: JioHotstar
    - paragraph: 1 year of JioHotstar mobile subscription
    - img "Sony LIV"
    - paragraph: Sony LIV
    - paragraph: 12 months of Sony LIV mobile subscription
    - img "Ease My Trip"
    - paragraph: Ease My Trip
    - paragraph: 1 year access to flat Rs750 OFF every month on booking return flights via EaseMyTrip
    - img "Norton"
    - paragraph: Norton
    - paragraph: 1 year Norton 360 Mobile Security cover at no extra cost
    - button "proceed with ₹451 plan"
  - option "2 connections Vi Max Family 701 ₹701/month primary member gets voice img Unlimited Calls | 3000 SMS Local, STD, National Roaming data img 70 GB (Unlimited 12 AM to 6 AM) 200GB roll over Vi Games PLUS choose any 2 free from below Amazon Prime JioHotstar Sony LIV Ease My Trip additional family members get Unlimited Local, STD, National Roaming Calls 3000 SMS/month 40 GB 200GB roll over wohoo! get 10GB extra data to share within your family members proceed with ₹701 plan":
    - text: 2 connections
    - paragraph: Vi Max Family 701
    - paragraph: ₹701/month
    - separator
    - paragraph: primary member gets
    - img "voice img"
    - paragraph: Unlimited Calls | 3000 SMS Local, STD, National Roaming
    - img "data img"
    - paragraph: 70 GB (Unlimited 12 AM to 6 AM) 200GB roll over
    - checkbox
    - img "Vi Games"
    - paragraph: PLUS choose any 2 free from below
    - checkbox
    - img "Amazon Prime"
    - img "JioHotstar"
    - img "Sony LIV"
    - img "Ease My Trip"
    - paragraph: additional family members get
    - img
    - paragraph: Unlimited Local, STD, National Roaming Calls 3000 SMS/month
    - img
    - paragraph: 40 GB 200GB roll over
    - img
    - paragraph: wohoo!
    - paragraph: get 10GB extra data to share within your family members
    - button "proceed with ₹701 plan"
- heading "get free SIM home delivery" [level=1]
- paragraph: 10,000+ free SIM card orders went out for delivery this month
- img "SIM Home Delivery"
- paragraph: 3 simple steps to order SIM
- img "SIM Card Home Delivery"
- paragraph: live tracking on your order
- img "Online SIM Delivery"
- paragraph: same day SIM delivery
- heading "you stay at home, we deliver!" [level=3]
- paragraph:
  - link "Port SIM":
    - /url: https://www.myvi.in/new-connection/mobile-number-portability-mnp-online
  - text: or Switch to Vi postpaid and enjoy free SIM delivery at your doorstep
- img "SIM Delivery"
- heading "why join Vi?" [level=3]
- paragraph: Network that moves with you. Higher data speeds, uninterrupted network coverage and superior browsing experience the search ends here!
- img
- link "Switch to the Vi 5G experience":
  - /url: https://www.myvi.in/giganet
  - paragraph: Switch to the Vi 5G experience
- img
- link "Port to unlimited data+calls+ entertainment..":
  - /url: /new-connection/mobile-number-portability-mnp-online
  - paragraph: Port to unlimited data+calls+ entertainment..
- img
- link "Join Vi without changing your number":
  - /url: /new-connection/mobile-number-portability-mnp-online
  - paragraph: Join Vi without changing your number
- img
- link "Choose a number of your choice":
  - /url: /new-connection/choose-your-fancy-mobile-numbers-online
  - paragraph: Choose a number of your choice
- paragraph
- paragraph:
  - text: Not on Vi?
  - link "port now":
    - /url: https://www.myvi.in/new-connection/mobile-number-portability-mnp-online
  - text: to enjoy a world full of benefits.
- paragraph
- heading "Free SIM Home Delivery FAQs" [level=2]
- button "How does free SIM card home delivery work?":
  - heading "How does free SIM card home delivery work?" [level=3]
- paragraph
- paragraph:
  - text: Visit the
  - link "free SIM delivery":
    - /url: https://www.myvi.in/new-connection/vi-free-sim-home-delivery
  - text: page and select a prepaid or Vi max postpaid plan. Enter your contact details and address to get your new SIM delivery at home free of cost.
- separator
- button "How long does it take for a SIM to be delivered to the doorstep?":
  - heading "How long does it take for a SIM to be delivered to the doorstep?" [level=3]
- paragraph
- paragraph: Once you have ordered a free SIM card online, the Vi delivery executive will contact you and deliver the SIM to your doorstep. Select a time slot most convenient to you. You can also track your SIM online delivery status on the Vi website.
- separator
- button "Can I reschedule the online SIM delivery of my new Vi Connection?":
  - heading "Can I reschedule the online SIM delivery of my new Vi Connection?" [level=3]
- paragraph
- paragraph: Once you have placed an order online for your new SIM home delivery, a delivery executive will get in touch with you to schedule the free SIM delivery. You can give the time as per your convenience and also reschedule the delivery if needed.
- separator
- button "On which Vi max postpaid plans would I get free sim card delivery?":
  - heading "On which Vi max postpaid plans would I get free sim card delivery?" [level=3]
- paragraph
- paragraph:
  - text: Free SIM card home delivery is available with all Vi max
  - link "postpaid plans":
    - /url: https://www.myvi.in/postpaid/vi-postpaid-plans
  - text: ", Vi Max family plans & REDX Plans as well as"
  - link "prepaid plans":
    - /url: https://www.myvi.in/prepaid/best-prepaid-plans
  - text: .
- separator
- button "How can I track the status of my free SIM card home delivery?":
  - heading "How can I track the status of my free SIM card home delivery?" [level=3]
- paragraph
- paragraph:
  - text: You can track the order status of your free SIM card home delivery on the
  - link "track your SIM":
    - /url: https://www.myvi.in/new-connection/track-your-sim-online
  - text: page of the Vi website.
- separator
- button "What are the documents required at the time of SIM Home delivery?":
  - heading "What are the documents required at the time of SIM Home delivery?" [level=3]
- paragraph: At the time of SIM home delivery, you will require a proof of address (POA) and a proof of identity (POI).
- paragraph: "The valid list of documents includes original copy of:"
- list:
  - listitem: Aadhaar card/ Voter ID/ PAN card/ Passport/Drivers License
- separator
- button "Do Vodafone or Idea have free SIM home delivery?":
  - heading "Do Vodafone or Idea have free SIM home delivery?" [level=3]
- paragraph:
  - text: Vodafone and Idea are now Vi. Users looking to get a new SIM card can visit the
  - link "Free SIM Delivery":
    - /url: https://www.myvi.in/new-connection/vi-free-sim-home-delivery
  - text: page and place an order to get a free SIM delivered to their doorstep.
- separator
- list:
  - listitem:
    - link "Home":
      - /url: https://www.myvi.in/
  - listitem:
    - link "New Connection":
      - /url: https://www.myvi.in/new-connection/buy-postpaid-sim-connection-online
  - listitem:
    - link "Free SIM Home Delivery":
      - /url: https://www.myvi.in/new-connection/vi-free-sim-home-delivery
- heading "Vi Free SIM Card Home Delivery" [level=2]
- separator
- contentinfo:
  - link "Postpaid Connection":
    - /url: https://www.myvi.in/new-connection/buy-postpaid-sim-connection-online
  - link "VI RED":
    - /url: https://www.myvi.in/postpaid/redx
  - link "MNP":
    - /url: https://www.myvi.in/new-connection/mobile-number-portability-mnp-online
  - link "Premium Number":
    - /url: https://www.myvi.in/new-connection/choose-your-fancy-mobile-numbers-online
  - link "Prepaid Connection":
    - /url: https://www.myvi.in/new-connection/buy-prepaid-sim-connection-online
  - link "Track Your SIM":
    - /url: https://www.myvi.in/new-connection/track-your-sim-online
  - link "SIM Card Home Delivery":
    - /url: https://www.myvi.in/new-connection/vi-free-sim-home-delivery
  - link "Best Postpaid Plans":
    - /url: https://www.myvi.in/postpaid/vi-postpaid-plans
  - link "New SIM Card":
    - /url: https://www.myvi.in/new-connection/buy-new-4g-sim-card-online
  - link "Family Plans":
    - /url: https://www.myvi.in/postpaid/family-postpaid-plans
  - link "Vanity Number":
    - /url: https://www.myvi.in/new-connection/buy-vanity-or-gold-number-online
  - paragraph
  - paragraph: This website uses own third-party cookies. Find out more about usage in our Privacy Policy page. Copyright Reserved with Vodafone Idea Limited (formerly Idea Cellular Limited).
  - paragraph: "Vodafone Idea Limited (Formerly Idea Cellular Limited), An Aditya Birla Group & Vodafone partnership, Suman Towers, Plot No.18, Sector 11, Gandhinagar – 382011, Gujarat.CIN L32100GJ1996PLC030976, T: +91-79 6671 4000, F: +91-79 2323 2251"
  - paragraph
```

# Test source

```ts
  27  |       browser: testInfo.project.name || 'chromium',
  28  |       pageName: "Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today",
  29  |       pageUrl: "https://www.myvi.in/new-connection/vi-free-sim-home-delivery",
  30  |       testObjective: "Verify page loads for regression",
  31  |     });
  32  | 
  33  |     await test.step("Open URL: https://www.myvi.in/", async () => {
  34  |       await appPage.open();
  35  |       evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
  36  |     });
  37  | 
  38  |     await test.step("Verify the URL is correct", async () => {
  39  |       await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/new\-connection\/vi\-free\-sim\-home\-delivery/);
  40  |       evidence.validationsPerformed.push("Verified URL is correct");
  41  |     });
  42  | 
  43  |     await test.step("Capture screenshot evidence", async () => {
  44  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today - Final Evidence", "www.myvi.in");
  45  |       evidence.screenshots.push(screenshotPath);
  46  |     });
  47  | 
  48  |     await attachExecutionSummary(evidence, page, testInfo);
  49  |   });
  50  |   test("Verify that 13 Headings are present on Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today @regression", async ({ page }, testInfo) => {
  51  |     await label('suite', "Regression Test Suite");
  52  |     await label('url', "https://www.myvi.in/");
  53  |     await label('domain', "www.myvi.in");
  54  |     await feature("Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today");
  55  |     await story("Verify Heading elements are present");
  56  |     await severity("minor");
  57  |     await tag("regression");
  58  | 
  59  |     const evidence = createEvidence({
  60  |       application: "www.myvi.in",
  61  |       suite: "Regression Test Suite",
  62  |       browser: testInfo.project.name || 'chromium',
  63  |       pageName: "Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today",
  64  |       pageUrl: "https://www.myvi.in/new-connection/vi-free-sim-home-delivery",
  65  |       testObjective: "Verify Heading elements are present",
  66  |     });
  67  | 
  68  |     await test.step("Verify that the heading 'our best selling plans nowwith free SIM delivery' exists in the DOM", async () => {
  69  |       await expect(appPage.headingOurBestSellingPlansNowwithFreeSimDelivery.first()).toBeAttached({ timeout: 5000 });
  70  |       evidence.validationsPerformed.push("Verify that the heading 'our best selling plans nowwith free SIM delivery' exists in the DOM");
  71  |     });
  72  |     await test.step("Verify that the heading 'get free SIM home delivery' exists in the DOM", async () => {
  73  |       await expect(appPage.headingGetFreeSimHomeDelivery.first()).toBeAttached({ timeout: 5000 });
  74  |       evidence.validationsPerformed.push("Verify that the heading 'get free SIM home delivery' exists in the DOM");
  75  |     });
  76  |     await test.step("Verify that the heading 'you stay at home, we deliver!' exists in the DOM", async () => {
  77  |       await expect(appPage.headingYouStayAtHomeWeDeliver.first()).toBeAttached({ timeout: 5000 });
  78  |       evidence.validationsPerformed.push("Verify that the heading 'you stay at home, we deliver!' exists in the DOM");
  79  |     });
  80  |     await test.step("Verify that the heading 'why join Vi?' exists in the DOM", async () => {
  81  |       await expect(appPage.headingWhyJoinVi.first()).toBeAttached({ timeout: 5000 });
  82  |       evidence.validationsPerformed.push("Verify that the heading 'why join Vi?' exists in the DOM");
  83  |     });
  84  |     await test.step("Verify that the heading 'Free SIM Home Delivery FAQs' exists in the DOM", async () => {
  85  |       await expect(appPage.headingFreeSimHomeDeliveryFaqs.first()).toBeAttached({ timeout: 5000 });
  86  |       evidence.validationsPerformed.push("Verify that the heading 'Free SIM Home Delivery FAQs' exists in the DOM");
  87  |     });
  88  | 
  89  |     await test.step("Capture screenshot evidence", async () => {
  90  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today - Heading Verification", "www.myvi.in");
  91  |       evidence.screenshots.push(screenshotPath);
  92  |     });
  93  | 
  94  |     await attachExecutionSummary(evidence, page, testInfo);
  95  |   });
  96  |   test("Verify that 29 Links are present on Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today @regression", async ({ page }, testInfo) => {
  97  |     await label('suite', "Regression Test Suite");
  98  |     await label('url', "https://www.myvi.in/");
  99  |     await label('domain', "www.myvi.in");
  100 |     await feature("Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today");
  101 |     await story("Verify Link elements are present");
  102 |     await severity("minor");
  103 |     await tag("regression");
  104 | 
  105 |     const evidence = createEvidence({
  106 |       application: "www.myvi.in",
  107 |       suite: "Regression Test Suite",
  108 |       browser: testInfo.project.name || 'chromium',
  109 |       pageName: "Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today",
  110 |       pageUrl: "https://www.myvi.in/new-connection/vi-free-sim-home-delivery",
  111 |       testObjective: "Verify Link elements are present",
  112 |     });
  113 | 
  114 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  115 |       await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
  116 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  117 |     });
  118 |     await test.step("Verify that the link 'Port SIM' exists in the DOM", async () => {
  119 |       await expect(appPage.linkPortSim.first()).toBeAttached({ timeout: 5000 });
  120 |       evidence.validationsPerformed.push("Verify that the link 'Port SIM' exists in the DOM");
  121 |     });
  122 |     await test.step("Verify that the link 'Switch to the Vi 5G experience' exists in the DOM", async () => {
  123 |       await expect(appPage.linkSwitchToTheVi5gExperience.first()).toBeAttached({ timeout: 5000 });
  124 |       evidence.validationsPerformed.push("Verify that the link 'Switch to the Vi 5G experience' exists in the DOM");
  125 |     });
  126 |     await test.step("Verify that the link 'Port to unlimited data+calls+entertainment..' exists in the DOM", async () => {
> 127 |       await expect(appPage.linkPortToUnlimitedDataCallsEntertainment.first()).toBeAttached({ timeout: 5000 });
      |                                                                               ^ Error: expect(locator).toBeAttached() failed
  128 |       evidence.validationsPerformed.push("Verify that the link 'Port to unlimited data+calls+entertainment..' exists in the DOM");
  129 |     });
  130 |     await test.step("Verify that the link 'Join Vi without changing your number' exists in the DOM", async () => {
  131 |       await expect(appPage.linkJoinViWithoutChangingYourNumber.first()).toBeAttached({ timeout: 5000 });
  132 |       evidence.validationsPerformed.push("Verify that the link 'Join Vi without changing your number' exists in the DOM");
  133 |     });
  134 | 
  135 |     await test.step("Capture screenshot evidence", async () => {
  136 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today - Link Verification", "www.myvi.in");
  137 |       evidence.screenshots.push(screenshotPath);
  138 |     });
  139 | 
  140 |     await attachExecutionSummary(evidence, page, testInfo);
  141 |   });
  142 |   test("Verify that 9 Buttons are present on Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today @regression", async ({ page }, testInfo) => {
  143 |     await label('suite', "Regression Test Suite");
  144 |     await label('url', "https://www.myvi.in/");
  145 |     await label('domain', "www.myvi.in");
  146 |     await feature("Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today");
  147 |     await story("Verify Button elements are present");
  148 |     await severity("minor");
  149 |     await tag("regression");
  150 | 
  151 |     const evidence = createEvidence({
  152 |       application: "www.myvi.in",
  153 |       suite: "Regression Test Suite",
  154 |       browser: testInfo.project.name || 'chromium',
  155 |       pageName: "Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today",
  156 |       pageUrl: "https://www.myvi.in/new-connection/vi-free-sim-home-delivery",
  157 |       testObjective: "Verify Button elements are present",
  158 |     });
  159 | 
  160 |     await test.step("Verify that the button 'proceed with ₹451 plan' exists in the DOM", async () => {
  161 |       await expect(appPage.buttonProceedWith451Plan.first()).toBeAttached({ timeout: 5000 });
  162 |       evidence.validationsPerformed.push("Verify that the button 'proceed with ₹451 plan' exists in the DOM");
  163 |     });
  164 |     await test.step("Verify that the button 'proceed with ₹701 plan' exists in the DOM", async () => {
  165 |       await expect(appPage.buttonProceedWith701Plan.first()).toBeAttached({ timeout: 5000 });
  166 |       evidence.validationsPerformed.push("Verify that the button 'proceed with ₹701 plan' exists in the DOM");
  167 |     });
  168 |     await test.step("Verify that the button 'How does free SIM card home delivery work?' exists in the DOM", async () => {
  169 |       await expect(appPage.buttonHowDoesFreeSimCardHomeDeliveryWork.first()).toBeAttached({ timeout: 5000 });
  170 |       evidence.validationsPerformed.push("Verify that the button 'How does free SIM card home delivery work?' exists in the DOM");
  171 |     });
  172 |     await test.step("Verify that the button 'How long does it take for a SIM to be delivered to the doorstep?' exists in the DOM", async () => {
  173 |       await expect(appPage.buttonHowLongDoesItTakeForASimToBeDeliveredToTheDoors.first()).toBeAttached({ timeout: 5000 });
  174 |       evidence.validationsPerformed.push("Verify that the button 'How long does it take for a SIM to be delivered to the doorstep?' exists in the DOM");
  175 |     });
  176 |     await test.step("Verify that the button 'Can I reschedule the online SIM delivery of my new Vi Connection?' exists in the DOM", async () => {
  177 |       await expect(appPage.buttonCanIRescheduleTheOnlineSimDeliveryOfMyNewViConnec.first()).toBeAttached({ timeout: 5000 });
  178 |       evidence.validationsPerformed.push("Verify that the button 'Can I reschedule the online SIM delivery of my new Vi Connection?' exists in the DOM");
  179 |     });
  180 | 
  181 |     await test.step("Capture screenshot evidence", async () => {
  182 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today - Button Verification", "www.myvi.in");
  183 |       evidence.screenshots.push(screenshotPath);
  184 |     });
  185 | 
  186 |     await attachExecutionSummary(evidence, page, testInfo);
  187 |   });
  188 |   test("Verify that 5 Inputs are present on Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today @regression", async ({ page }, testInfo) => {
  189 |     await label('suite', "Regression Test Suite");
  190 |     await label('url', "https://www.myvi.in/");
  191 |     await label('domain', "www.myvi.in");
  192 |     await feature("Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today");
  193 |     await story("Verify Input elements are present");
  194 |     await severity("minor");
  195 |     await tag("regression");
  196 | 
  197 |     const evidence = createEvidence({
  198 |       application: "www.myvi.in",
  199 |       suite: "Regression Test Suite",
  200 |       browser: testInfo.project.name || 'chromium',
  201 |       pageName: "Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today",
  202 |       pageUrl: "https://www.myvi.in/new-connection/vi-free-sim-home-delivery",
  203 |       testObjective: "Verify Input elements are present",
  204 |     });
  205 | 
  206 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  207 |       await expect(appPage.inputFaqDrawer.first()).toBeAttached({ timeout: 5000 });
  208 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  209 |     });
  210 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  211 |       await expect(appPage.inputFaqDrawer1.first()).toBeAttached({ timeout: 5000 });
  212 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  213 |     });
  214 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  215 |       await expect(appPage.inputFaqDrawer2.first()).toBeAttached({ timeout: 5000 });
  216 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  217 |     });
  218 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  219 |       await expect(appPage.inputIsadobelaunch.first()).toBeAttached({ timeout: 5000 });
  220 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  221 |     });
  222 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  223 |       await expect(appPage.inputOsSdk.first()).toBeAttached({ timeout: 5000 });
  224 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  225 |     });
  226 | 
  227 |     await test.step("Capture screenshot evidence", async () => {
```