# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\GetViNewPostpaidSimCardOnlineBuyMobileSimCardInIndia.spec.ts >> https://www.myvi.in/ - Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india - Regression Tests >> Verify that 24 Buttons are present on Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india @regression
- Location: tests\generated\www-myvi-in\GetViNewPostpaidSimCardOnlineBuyMobileSimCardInIndia.spec.ts:142:3

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: getByRole('button', { name: 'select' }).first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for getByRole('button', { name: 'select' }).first()

```

```yaml
- banner:
  - link "Vi":
    - /url: https://www.myvi.in/
    - img "Vi"
- paragraph:
  - img
  - text: Strong network. Sabka haq. Join Vi today!
- link "postpaid plans":
  - /url: /new-connection/buy-postpaid-sim-connection-online?show=postpaidonly
- img
- text: family plans
- paragraph: Please enter your pincode to view plans
- textbox
- text: please enter pincode
- heading "Get a Vi Max Postpaid SIM delivered in 3 easy steps" [level=1]
- img "Postpaid SIM"
- paragraph: select a plan
- img "Postpaid sim card delivery"
- paragraph: enter/choose a number
- img "Buy postpaid sim online"
- paragraph: Postpaid SIM delivery confirmed
- toolbar:
  - listbox:
    - option "T&C Apply":
      - heading [level=2]
      - paragraph
      - text: T&C Apply
      - img
  - tablist:
    - listitem:
      - button "2"
- heading "why join Vi?" [level=3]
- paragraph: We believe that reliable connectivity is everyone’s right and not a premium privilege. A great network should simply work – for everyone, everywhere, every time. And we are making that real. We have added 2,20,000 new towers We are expanding our 5G presence rapidly and our 5G is now live in 110+ top cities Our ever-expanding 5G and 4G network ensures every customer gets the best network experience everywhere Vi’s network is designed for all your needs, whether you’re on the move, working remotely, at a concert or a match, creating or just chilling at home, Vi has you covered with the use of AI-based self optimizing network technology
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
- img "Vi Postpaid SIM Delivery"
- heading [level=3]
- paragraph
- heading "trusted across the nation" [level=4]
- paragraph: Know why our customers love us
- toolbar:
  - listbox:
    - option "Ordering my Vi postpaid SIM online was extremely easy. The delivery was right on time and completely hassle-free. Activating the SIM was smooth, and I was pleasantly surprised by the OTT benefits like JioHotstar and more. Overall, it was a seamless and satisfying experience — highly recommended! Rajashree Sathe Mumbai":
      - img
      - paragraph: Ordering my Vi postpaid SIM online was extremely easy. The delivery was right on time and completely hassle-free. Activating the SIM was smooth, and I was pleasantly surprised by the OTT benefits like JioHotstar and more. Overall, it was a seamless and satisfying experience — highly recommended!
      - paragraph: Rajashree Sathe
      - paragraph: Mumbai
  - button "Next": →Next
  - tablist:
    - listitem:
      - button "1"
- heading "Vi new postpaid SIM faqs" [level=2]
- button "How to get postpaid SIM delivered for free?":
  - heading "How to get postpaid SIM delivered for free?" [level=3]
- paragraph: "Follow these simple steps to buy a Vi Postpaid connection online for free:"
- list:
  - listitem: Visit Postpaid Connection page and enter your contact details.
  - listitem:
    - text: Select a Vi max
    - link "postpaid plan":
      - /url: https://www.myvi.in/postpaid/vi-postpaid-plans
    - text: "& mobile number of your choice."
  - listitem: Enter delivery details and get your SIM delivered at your doorstep.
- separator
- button "What is a postpaid SIM?":
  - heading "What is a postpaid SIM?" [level=3]
- paragraph: Postpaid SIM is a postpaid connection in which the customers need not pay anything in advance but are billed at the end of every month for the services availed by them in that whole month.
- separator
- button "What is the price of a new postpaid SIM?":
  - heading "What is the price of a new postpaid SIM?" [level=3]
- paragraph: A new Vi postpaid SIM price is zero. That is, there are no charges for a new SIM and the SIM card is delivered to your doorstep absolutely free of cost.
- separator
- button "What are the documents required to get a new postpaid connection?":
  - heading "What are the documents required to get a new postpaid connection?" [level=3]
- paragraph: "To get a new postpaid connection, you will need a valid Proof of Identity (POI) or Proof of Address (POA):"
- paragraph: "The documents valid are original copy of Aadhar card, E-Aadhar (color copy with digitally verified signature with a green tick mark), Passport, Voter ID & Driving License (Please note : Driving License of Mumbai & Maharashtra will not be accepted as proof of address across India)"
- separator
- button "How do I activate my new Vi postpaid SIM card online?":
  - heading "How do I activate my new Vi postpaid SIM card online?" [level=3]
- paragraph:
  - text: Dial 59059 to complete your tele-verification and avail our
  - link "postpaid":
    - /url: https://www.myvi.in/new-connection/buy-postpaid-sim-connection-online
  - text: services.
- separator
- button "Is free postpaid SIM delivery available on all Vi plans?":
  - heading "Is free postpaid SIM delivery available on all Vi plans?" [level=3]
- paragraph: Yes, there are no charges on postpaid SIM, on any Vi max postpaid plan.
- separator
- button "What are the charges applicable for a new SIM card?":
  - heading "What are the charges applicable for a new SIM card?" [level=3]
- paragraph: There are no charges applied for a free number on a postpaid connection. If you opt for a premium number, it will be chargeable. You can make the payment while placing the order or get it added to your first monthly bill. Premium numbers and their rates are displayed on the website.
- separator
- button "How long does it take for a new SIM card to get activated?":
  - heading "How long does it take for a new SIM card to get activated?" [level=3]
- paragraph: Once all the set of correct documents and information are received, the new Postpaid SIM will be activated within few hours.
- separator
- button "What benefits will I get with a new SIM having Vi Postpaid connection?":
  - heading "What benefits will I get with a new SIM having Vi Postpaid connection?" [level=3]
- paragraph: You can enjoy a host of benefits with Vi Postpaid, along with the EXCLUSIVE POWER OF CHOICE you can choose your preferred exclusive entertainment & lifestyle benefits from the options available in your postpaid plan.
- list:
  - listitem: 6 months Amazon Prime membership on plans starting Rs551 and above
- list:
  - listitem: 12 months SonyLIV mobile subscription on plans starting Rs451 and above.
- list:
  - listitem: 1 Year JioHotstar Membership on plans starting Rs451 and above.
- list:
  - listitem: 1 Year Norton Anti-Virus subscription on plans starting Rs 451 and above.
- list
- list:
  - listitem: 6 months Eazydiner & Swiggy One membership subscription on individual plans starting Rs551 and above & on family plans starting Rs 1201 & above.
- list:
  - listitem: Complimentary access to Netflix Basic subscription with REDX 1201 Plan
- list:
  - listitem: 3 months Vi Movies & TV app subscription on all plans except REDX 1201
- paragraph: "Also enjoy:"
- paragraph: Unlimited calls, Unlimited Night Data and Data rollover.
- separator
- button "Are there any charges applicable on home delivery of a new SIM card?":
  - heading "Are there any charges applicable on home delivery of a new SIM card?" [level=3]
- paragraph: There are no charges applicable for home delivery of your SIM card for the new postpaid connection.
- separator
- button "How can I buy a new Vodafone or Idea postpaid Connection?":
  - heading "How can I buy a new Vodafone or Idea postpaid Connection?" [level=3]
- paragraph: Vodafone and Idea are now Vi. Users looking for a new Vodafone or Idea postpaid SIM can visit the Vi Postpaid Connection page.
- separator
- button "What is Vi Priority Service ?":
  - heading "What is Vi Priority Service ?" [level=3]
- paragraph: "Vi Priority is a distinctive service experience for our high valued Postpaid customers. Vi Priority members have the following exclusive privileges, including :"
- list:
  - listitem: Direct access to 24x7 Vi customer care team
  - listitem: Swift resolution of your complaints, if any
  - listitem: Priority service at Vi Stores
  - listitem: Sim exchange facility at doorstep for Senior citizens
  - listitem: Effortless Bill Payment and so much more.
- separator
- button "Who is eligible for Vi Priority Service ?":
  - heading "Who is eligible for Vi Priority Service ?" [level=3]
- paragraph: "Vi Priority is a distinctive service experience for the following high valued Postpaid customers:"
- list:
  - listitem: Customers on Individual Rental plans of Rs. 699 and above
  - listitem: Vi REDX Customers
  - listitem: Customers on Vi Family plans with more than 3 members
  - listitem: Senior citizens *
  - listitem: Customers who have been with our network for 10 years or more *
  - listitem: Frequent IR travellers *
  - listitem: 5G Handset users *
- paragraph: "*Subject to eligibility"
- separator
- list:
  - listitem:
    - link "home":
      - /url: https://www.myvi.in/
  - listitem:
    - link "new connection":
      - /url: https://www.myvi.in/new-connection/buy-postpaid-sim-connection-online
  - listitem:
    - link "postpaid connection":
      - /url: https://www.myvi.in/new-connection/buy-postpaid-sim-connection-online
- heading "Vi New postpaid SIM and connection" [level=2]
- separator
- contentinfo:
  - link "Postpaid Connection":
    - /url: /new-connection/buy-postpaid-sim-connection-online
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
  - paragraph
  - paragraph: This website uses own third-party cookies. Find out more about usage in our Privacy Policy page. Copyright Reserved with Vodafone Idea Limited (formerly Idea Cellular Limited).
  - paragraph: "Vodafone Idea Limited (Formerly Idea Cellular Limited), An Aditya Birla Group & Vodafone partnership, Suman Towers, Plot No.18, Sector 11, Gandhinagar – 382011, Gujarat.CIN L32100GJ1996PLC030976, T: +91-79 6671 4000, F: +91-79 2323 2251"
  - paragraph
```

# Test source

```ts
  61  |       suite: "Regression Test Suite",
  62  |       browser: testInfo.project.name || 'chromium',
  63  |       pageName: "Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india",
  64  |       pageUrl: "https://www.myvi.in/new-connection/buy-postpaid-sim-connection-online?show=postpaidonly",
  65  |       testObjective: "Verify Heading elements are present",
  66  |     });
  67  | 
  68  |     await test.step("Verify that the heading 'Vi Max family postpaid plans' exists in the DOM", async () => {
  69  |       await expect(appPage.headingViMaxFamilyPostpaidPlans.first()).toBeAttached({ timeout: 5000 });
  70  |       evidence.validationsPerformed.push("Verify that the heading 'Vi Max family postpaid plans' exists in the DOM");
  71  |     });
  72  |     await test.step("Verify that the heading 'choice of any 2 complimentary benefits' exists in the DOM", async () => {
  73  |       await expect(appPage.headingChoiceOfAny2ComplimentaryBenefits.first()).toBeAttached({ timeout: 5000 });
  74  |       evidence.validationsPerformed.push("Verify that the heading 'choice of any 2 complimentary benefits' exists in the DOM");
  75  |     });
  76  |     await test.step("Verify that the heading 'Vi Movies & TV' exists in the DOM", async () => {
  77  |       await expect(appPage.headingViMoviesTv.first()).toBeAttached({ timeout: 5000 });
  78  |       evidence.validationsPerformed.push("Verify that the heading 'Vi Movies & TV' exists in the DOM");
  79  |     });
  80  |     await test.step("Verify that the heading 'Get a Vi Max Postpaid SIM delivered in 3 easy steps' exists in the DOM", async () => {
  81  |       await expect(appPage.headingGetAViMaxPostpaidSimDeliveredIn3EasySteps.first()).toBeAttached({ timeout: 5000 });
  82  |       evidence.validationsPerformed.push("Verify that the heading 'Get a Vi Max Postpaid SIM delivered in 3 easy steps' exists in the DOM");
  83  |     });
  84  |     await test.step("Verify that the heading 'why join Vi?' exists in the DOM", async () => {
  85  |       await expect(appPage.headingWhyJoinVi.first()).toBeAttached({ timeout: 5000 });
  86  |       evidence.validationsPerformed.push("Verify that the heading 'why join Vi?' exists in the DOM");
  87  |     });
  88  | 
  89  |     await test.step("Capture screenshot evidence", async () => {
  90  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india - Heading Verification", "www.myvi.in");
  91  |       evidence.screenshots.push(screenshotPath);
  92  |     });
  93  | 
  94  |     await attachExecutionSummary(evidence, page, testInfo);
  95  |   });
  96  |   test("Verify that 25 Links are present on Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india @regression", async ({ page }, testInfo) => {
  97  |     await label('suite', "Regression Test Suite");
  98  |     await label('url', "https://www.myvi.in/");
  99  |     await label('domain', "www.myvi.in");
  100 |     await feature("Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india");
  101 |     await story("Verify Link elements are present");
  102 |     await severity("minor");
  103 |     await tag("regression");
  104 | 
  105 |     const evidence = createEvidence({
  106 |       application: "www.myvi.in",
  107 |       suite: "Regression Test Suite",
  108 |       browser: testInfo.project.name || 'chromium',
  109 |       pageName: "Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india",
  110 |       pageUrl: "https://www.myvi.in/new-connection/buy-postpaid-sim-connection-online?show=postpaidonly",
  111 |       testObjective: "Verify Link elements are present",
  112 |     });
  113 | 
  114 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  115 |       await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
  116 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  117 |     });
  118 |     await test.step("Verify that the link 'postpaid plans' exists in the DOM", async () => {
  119 |       await expect(appPage.linkPostpaidPlans.first()).toBeAttached({ timeout: 5000 });
  120 |       evidence.validationsPerformed.push("Verify that the link 'postpaid plans' exists in the DOM");
  121 |     });
  122 |     await test.step("Verify that the link 'prepaid packs' exists in the DOM", async () => {
  123 |       await expect(appPage.linkPrepaidPacks.first()).toBeAttached({ timeout: 5000 });
  124 |       evidence.validationsPerformed.push("Verify that the link 'prepaid packs' exists in the DOM");
  125 |     });
  126 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  127 |       await expect(appPage.link3.first()).toBeAttached({ timeout: 5000 });
  128 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  129 |     });
  130 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  131 |       await expect(appPage.link4.first()).toBeAttached({ timeout: 5000 });
  132 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  133 |     });
  134 | 
  135 |     await test.step("Capture screenshot evidence", async () => {
  136 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india - Link Verification", "www.myvi.in");
  137 |       evidence.screenshots.push(screenshotPath);
  138 |     });
  139 | 
  140 |     await attachExecutionSummary(evidence, page, testInfo);
  141 |   });
  142 |   test("Verify that 24 Buttons are present on Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india @regression", async ({ page }, testInfo) => {
  143 |     await label('suite', "Regression Test Suite");
  144 |     await label('url', "https://www.myvi.in/");
  145 |     await label('domain', "www.myvi.in");
  146 |     await feature("Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india");
  147 |     await story("Verify Button elements are present");
  148 |     await severity("minor");
  149 |     await tag("regression");
  150 | 
  151 |     const evidence = createEvidence({
  152 |       application: "www.myvi.in",
  153 |       suite: "Regression Test Suite",
  154 |       browser: testInfo.project.name || 'chromium',
  155 |       pageName: "Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india",
  156 |       pageUrl: "https://www.myvi.in/new-connection/buy-postpaid-sim-connection-online?show=postpaidonly",
  157 |       testObjective: "Verify Button elements are present",
  158 |     });
  159 | 
  160 |     await test.step("Verify that the button 'select' exists in the DOM", async () => {
> 161 |       await expect(appPage.buttonSelect.first()).toBeAttached({ timeout: 5000 });
      |                                                  ^ Error: expect(locator).toBeAttached() failed
  162 |       evidence.validationsPerformed.push("Verify that the button 'select' exists in the DOM");
  163 |     });
  164 |     await test.step("Verify that the button 'select' exists in the DOM", async () => {
  165 |       await expect(appPage.buttonSelect1.first()).toBeAttached({ timeout: 5000 });
  166 |       evidence.validationsPerformed.push("Verify that the button 'select' exists in the DOM");
  167 |     });
  168 |     await test.step("Verify that the button '1' exists in the DOM", async () => {
  169 |       await expect(appPage.button1.first()).toBeAttached({ timeout: 5000 });
  170 |       evidence.validationsPerformed.push("Verify that the button '1' exists in the DOM");
  171 |     });
  172 |     await test.step("Verify that the button '2' exists in the DOM", async () => {
  173 |       await expect(appPage.button2.first()).toBeAttached({ timeout: 5000 });
  174 |       evidence.validationsPerformed.push("Verify that the button '2' exists in the DOM");
  175 |     });
  176 |     await test.step("Verify that the button 'Previous' exists in the DOM", async () => {
  177 |       await expect(appPage.buttonPrevious.first()).toBeAttached({ timeout: 5000 });
  178 |       evidence.validationsPerformed.push("Verify that the button 'Previous' exists in the DOM");
  179 |     });
  180 | 
  181 |     await test.step("Capture screenshot evidence", async () => {
  182 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india - Button Verification", "www.myvi.in");
  183 |       evidence.screenshots.push(screenshotPath);
  184 |     });
  185 | 
  186 |     await attachExecutionSummary(evidence, page, testInfo);
  187 |   });
  188 |   test("Verify that 19 Inputs are present on Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india @regression", async ({ page }, testInfo) => {
  189 |     await label('suite', "Regression Test Suite");
  190 |     await label('url', "https://www.myvi.in/");
  191 |     await label('domain', "www.myvi.in");
  192 |     await feature("Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india");
  193 |     await story("Verify Input elements are present");
  194 |     await severity("minor");
  195 |     await tag("regression");
  196 | 
  197 |     const evidence = createEvidence({
  198 |       application: "www.myvi.in",
  199 |       suite: "Regression Test Suite",
  200 |       browser: testInfo.project.name || 'chromium',
  201 |       pageName: "Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india",
  202 |       pageUrl: "https://www.myvi.in/new-connection/buy-postpaid-sim-connection-online?show=postpaidonly",
  203 |       testObjective: "Verify Input elements are present",
  204 |     });
  205 | 
  206 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  207 |       await expect(appPage.inputPincodefield.first()).toBeAttached({ timeout: 5000 });
  208 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  209 |     });
  210 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  211 |       await expect(appPage.inputPagetype.first()).toBeAttached({ timeout: 5000 });
  212 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  213 |     });
  214 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  215 |       await expect(appPage.inputShowfamilyplanslider.first()).toBeAttached({ timeout: 5000 });
  216 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  217 |     });
  218 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  219 |       await expect(appPage.inputFamilyuserdetailsredir.first()).toBeAttached({ timeout: 5000 });
  220 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  221 |     });
  222 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  223 |       await expect(appPage.inputDigitalexclusivetxt.first()).toBeAttached({ timeout: 5000 });
  224 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  225 |     });
  226 | 
  227 |     await test.step("Capture screenshot evidence", async () => {
  228 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india - Input Verification", "www.myvi.in");
  229 |       evidence.screenshots.push(screenshotPath);
  230 |     });
  231 | 
  232 |     await attachExecutionSummary(evidence, page, testInfo);
  233 |   });
  234 | });
  235 | 
```