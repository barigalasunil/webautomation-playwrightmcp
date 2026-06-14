# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\ViMaxFamilyPlansBestPostpaidPlanForFamilyPostpaidFamilyPlans.spec.ts >> https://www.myvi.in/ - Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans - Regression Tests >> Verify that 26 Buttons are present on Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans @regression
- Location: tests\generated\www-myvi-in\ViMaxFamilyPlansBestPostpaidPlanForFamilyPostpaidFamilyPlans.spec.ts:142:3

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
- link "Choose your benefits with Vi Max Postpaid!":
  - /url: "#plansScroller"
  - img
  - text: Choose your benefits with Vi Max Postpaid!
- link "postpaid plans":
  - /url: /new-connection/buy-postpaid-sim-connection-online
- img
- link "family plans":
  - /url: /postpaid/family-postpaid-plans
- link "prepaid packs":
  - /url: /new-connection/buy-prepaid-sim-connection-online
- paragraph: Please enter your pincode to view plans
- textbox
- text: please enter pincode
- heading "Vi Max Family Plans" [level=1]
- img "select a family plan"
- paragraph: select a family plan
- img
- paragraph: fill details for family members
- img "Family Postpaid Plans"
- paragraph: SIMs get delivered
- toolbar:
  - listbox:
    - option "get a world of benefits with Vi family plans All bills at one place, streaming benefits & data rollover for the entire family view plans >>":
      - heading "get a world of benefits with Vi family plans" [level=2]
      - paragraph: All bills at one place, streaming benefits & data rollover for the entire family
      - paragraph: view plans
      - text: ">>"
      - img
  - tablist:
    - listitem:
      - button "2"
- heading "top reasons customers love Vi Max postpaid family plans" [level=3]
- paragraph: A world full of benefits for you and your loved ones
- img "All Bills At One Place"
- paragraph: all bills at one place
- img "Higher Savings On Bill"
- paragraph: higher savings on bills
- img "Streaming Benefits"
- paragraph: streaming benefits
- img "Monthly Data Rollover"
- paragraph: monthly data rollover
- paragraph
- heading "contactless delivery of Vi Max Family Plan SIMs" [level=3]
- paragraph: We will deliver your SIMs safely
- img "SIM Delivery"
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
- heading "Postpaid Family Plans FAQs" [level=2]
- button "What is Vi Max family plan and how does it work?":
  - heading "What is Vi Max family plan and how does it work?" [level=3]
- paragraph: With a Vi Max Family plan, you get the convenience of paying just 1 bill for multiple mobile numbers (up to 9 connections) and save on overall family spending. This means that the primary user can add up to 8 more secondary users to their postpaid plan. Based on the plan value all members get to enjoy a host of benefits.
- separator
- button "What is required to get a Vi Max Postpaid Family Plan?":
  - heading "What is required to get a Vi Max Postpaid Family Plan?" [level=3]
- paragraph: To get a Vi Max postpaid family plan, you require a valid Proof of Identity (POI) and Proof of Address (POA)
- paragraph: The documents accepted are a copy of Aadhar card, Passport, Voter ID or Driving License.
- paragraph
- paragraph
- separator
- button "How many connections do I get under one family plan?":
  - heading "How many connections do I get under one family plan?" [level=3]
- paragraph: You can add up to 9 members to your family plan (1 primary + 8 Secondary). Each family plan comes with a fixed number of secondary connections for your family members. Once you have utilized all the secondary slots, you can add more members to the plan at an additional cost of Rs 299 per line.
- separator
- button "Can existing postpaid users add more connections to the existing postpaid plan?":
  - heading "Can existing postpaid users add more connections to the existing postpaid plan?" [level=3]
- paragraph: Yes, existing postpaid users can add more members without changing their existing family plan at Rs 299/line.
- separator
- button "What benefits do I get with Vi Max postpaid family plans?":
  - heading "What benefits do I get with Vi Max postpaid family plans?" [level=3]
- paragraph: Vi Max Postpaid Family Plans offer a range of benefits, including
- list:
  - listitem: Unlimited Calls for each of the Primary & Secondary member
  - listitem:
    - text: Data Benefits
    - list:
      - listitem: Data Roll over - 200 GB Data Rollover for each of the Primary & Secondary member
      - listitem: Unlimited Night Data – Free Unlimited data for Primary member from 12 AM to 6 AM
      - listitem: Shared Data– Extra Data to share among family members as per the plan
      - listitem: Individual data quota – Primary member gets 70 GB or 140 GB based on the plan rental and each Secondary member gets 40GB data.
  - listitem: Choice of two entertainment/lifestyle benefits at NO EXTRA COST for Primary member
  - listitem: Family Add on feature to add more members without changing the plan at just Rs 299/line
- separator
- button "Can all secondary members of a Vi Postpaid family plan buy additional packs like Amazon Prime, JioHotstar and more?":
  - heading "Can all secondary members of a Vi Postpaid family plan buy additional packs like Amazon Prime, JioHotstar and more?" [level=3]
- heading "Yes, both primary and secondary members of a Vi Postpaid family can buy additional packs for secondary members." [level=4]
- paragraph: "Steps for primary member to buy additional packs for their Secondary Members:"
- list:
  - listitem: Step 1 - Primary member can select an add-on pack on Vi App for any secondary member
  - listitem: Step 2 - Secondary member receives an OTP through SMS for verification
  - listitem: Step 3 - Secondary member needs to enter the OTP and proceed for the benefit to be activated on their mobile number.
- paragraph: "Steps for secondary members to buy additional packs for themselves:"
- list:
  - listitem: "Step 1: Select Add on pack on Vi App"
  - listitem: "Step 2: Primary member receives an OTP through SMS for verification"
  - listitem: "Step 3: You need to enter the OTP and proceed for the benefit to be activated on your mobile number."
- paragraph: "Please note: The charges related to the additional packs will be added to the Primary member's bill even if the secondary member initiates the purchase."
- separator
- button "How do I add family members to my family plan?":
  - heading "How do I add family members to my family plan?" [level=3]
- paragraph: Launch the Vi app, tap on the plan details section and scroll down to “manage family plan” tab. Click on it to visit the “manage your family plan” section. If you have free add-ons, you can add members at no extra cost, otherwise you can add more at an additional cost of Rs 299/line.
- separator
- button "Are the Vi Max family postpaid plans delivered for free at my doorstep?":
  - heading "Are the Vi Max family postpaid plans delivered for free at my doorstep?" [level=3]
- paragraph
- paragraph:
  - text: Yes, Vi offers free SIM delivery for all Vi Max family
  - link "postpaid plans":
    - /url: https://www.myvi.in/postpaid/family-postpaid-plans
  - text: .
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
- button "What is Vi REDX Family Plan and how does it work?":
  - heading "What is Vi REDX Family Plan and how does it work?" [level=3]
- paragraph: With Vi REDX Family 1601 Plan, users can now add 1 secondary number free of cost as part of the family plan. All Non-Telco benefits are the same as REDX 1201 plan and the secondary member can enjoy Unlimited data. With REDX Family 1601 plan primary member can add upto 7 more connections at 299/connection and all secondary members can enjoy unlimited data.
- separator
- button "What are the benefits I get with Vi REDX Family Plan?":
  - heading "What are the benefits I get with Vi REDX Family Plan?" [level=3]
- paragraph: The New Vi REDX Family Plan comes loaded with Lifestyle and Entertainment benefits. Data – Unlimited Data for Primary & SecondaryNo of Postpaid Connections – 2Access to Various OTT PlatformsAccess to 6 month subscription of Swiggy One MembershipAccess to 1 year subscription of Norton Anti-Virus & EaseMyTripAccess to Airport Lounges (4 times per year) at no extra cost for Primary7 days International Roaming Pack worth ₹ 2999(Once a year) at no extra cost for Primary7 days International Roaming Pack worth ₹ 2999(On 2nd pack, once a year) - AT 25% discount for Primary or SecondaryComplimentary Netflix Basic Subscription
- separator
- button "What are the benefits that secondary members enjoy with Vi REDX Family Plan?":
  - heading "What are the benefits that secondary members enjoy with Vi REDX Family Plan?" [level=3]
- paragraph: Primary or Secondary member can claim a 7 Days International roaming pack worth Rs. 2999 at 25% discount (On 2nd pack, Once a year).Secondary member also enjoys unlimited data.
- separator
- button "How many paid family members can be added with Vi REDX Family Plan?":
  - heading "How many paid family members can be added with Vi REDX Family Plan?" [level=3]
- paragraph: Upto 7 members can be added to the Vi REDX Family Plan.
- separator
- button "Why does secondary data show 40GB instead of unlimited in Vi REDX Family Plan?":
  - heading "Why does secondary data show 40GB instead of unlimited in Vi REDX Family Plan?" [level=3]
- paragraph: The secondary members of all our family plans get 40 GB data. As a special benefit, the secondary members of the REDX Family 1601 plan get an Unlimited data sharing pack. So when your 40 GB data is over, you can continue to use data from the complementary Unlimited data sharing pack. Hence with this plan, secondary members can also enjoy unlimited data
- separator
- list:
  - listitem:
    - link "home":
      - /url: https://www.myvi.in/
  - listitem:
    - link "postpaid":
      - /url: https://www.myvi.in
  - listitem:
    - link "family postpaid plans":
      - /url: https://www.myvi.in/postpaid/family-postpaid-plans
- heading "Vi Max Best Postpaid Family Plans" [level=2]
- separator
- contentinfo:
  - link "Postpaid Connection":
    - /url: /new-connection/buy-postpaid-sim-connection-online
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
    - /url: /new-connection/vi-free-sim-home-delivery
  - link "Best Postpaid Plans":
    - /url: https://www.myvi.in/postpaid/vi-postpaid-plans
  - link "New SIM Card":
    - /url: https://www.myvi.in/new-connection/buy-new-4g-sim-card-online
  - link "Family Plans":
    - /url: https://www.myvi.in/postpaid/family-postpaid-plans
  - link "Family Plans (Select Circles)":
    - /url: https://www.myvi.in/content/vodafoneideadigital/in/en/vil-homepage/static-pages/Vi-Max-901-family-plan.html
  - paragraph
  - paragraph: This website uses own third-party cookies. Find out more about usage in our Privacy Policy page. Copyright Reserved with Vodafone Idea Limited (formerly Idea Cellular Limited).
  - paragraph: "Vodafone Idea Limited (Formerly Idea Cellular Limited), An Aditya Birla Group & Vodafone partnership, Suman Towers, Plot No.18, Sector 11, Gandhinagar – 382011, Gujarat.CIN L32100GJ1996PLC030976, T: +91-79 6671 4000, F: +91-79 2323 2251"
  - paragraph
```

# Test source

```ts
  61  |       suite: "Regression Test Suite",
  62  |       browser: testInfo.project.name || 'chromium',
  63  |       pageName: "Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans",
  64  |       pageUrl: "https://www.myvi.in/postpaid/family-postpaid-plans",
  65  |       testObjective: "Verify Heading elements are present",
  66  |     });
  67  | 
  68  |     await test.step("Verify that the heading '2,4 and 5 member VI Max postpaid family plans for you & your loved ones' exists in the DOM", async () => {
  69  |       await expect(appPage.heading24And5MemberViMaxPostpaidFamilyPlansForYouYourL.first()).toBeAttached({ timeout: 5000 });
  70  |       evidence.validationsPerformed.push("Verify that the heading '2,4 and 5 member VI Max postpaid family plans for you & your loved ones' exists in the DOM");
  71  |     });
  72  |     await test.step("Verify that the heading 'choice of any 2 complimentary benefits' exists in the DOM", async () => {
  73  |       await expect(appPage.headingChoiceOfAny2ComplimentaryBenefits.first()).toBeAttached({ timeout: 5000 });
  74  |       evidence.validationsPerformed.push("Verify that the heading 'choice of any 2 complimentary benefits' exists in the DOM");
  75  |     });
  76  |     await test.step("Verify that the heading 'Vi Movies & TV' exists in the DOM", async () => {
  77  |       await expect(appPage.headingViMoviesTv.first()).toBeAttached({ timeout: 5000 });
  78  |       evidence.validationsPerformed.push("Verify that the heading 'Vi Movies & TV' exists in the DOM");
  79  |     });
  80  |     await test.step("Verify that the heading 'Vi Max Family Plans' exists in the DOM", async () => {
  81  |       await expect(appPage.headingViMaxFamilyPlans.first()).toBeAttached({ timeout: 5000 });
  82  |       evidence.validationsPerformed.push("Verify that the heading 'Vi Max Family Plans' exists in the DOM");
  83  |     });
  84  |     await test.step("Verify that the heading 'get a world of benefits with Vi family plans' exists in the DOM", async () => {
  85  |       await expect(appPage.headingGetAWorldOfBenefitsWithViFamilyPlans.first()).toBeAttached({ timeout: 5000 });
  86  |       evidence.validationsPerformed.push("Verify that the heading 'get a world of benefits with Vi family plans' exists in the DOM");
  87  |     });
  88  | 
  89  |     await test.step("Capture screenshot evidence", async () => {
  90  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans - Heading Verification", "www.myvi.in");
  91  |       evidence.screenshots.push(screenshotPath);
  92  |     });
  93  | 
  94  |     await attachExecutionSummary(evidence, page, testInfo);
  95  |   });
  96  |   test("Verify that 26 Links are present on Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans @regression", async ({ page }, testInfo) => {
  97  |     await label('suite', "Regression Test Suite");
  98  |     await label('url', "https://www.myvi.in/");
  99  |     await label('domain', "www.myvi.in");
  100 |     await feature("Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans");
  101 |     await story("Verify Link elements are present");
  102 |     await severity("minor");
  103 |     await tag("regression");
  104 | 
  105 |     const evidence = createEvidence({
  106 |       application: "www.myvi.in",
  107 |       suite: "Regression Test Suite",
  108 |       browser: testInfo.project.name || 'chromium',
  109 |       pageName: "Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans",
  110 |       pageUrl: "https://www.myvi.in/postpaid/family-postpaid-plans",
  111 |       testObjective: "Verify Link elements are present",
  112 |     });
  113 | 
  114 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
  115 |       await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
  116 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  117 |     });
  118 |     await test.step("Verify that the link 'Choose your benefits with Vi Max Postpaid!' exists in the DOM", async () => {
  119 |       await expect(appPage.linkChooseYourBenefitsWithViMaxPostpaid.first()).toBeAttached({ timeout: 5000 });
  120 |       evidence.validationsPerformed.push("Verify that the link 'Choose your benefits with Vi Max Postpaid!' exists in the DOM");
  121 |     });
  122 |     await test.step("Verify that the link 'postpaid plans' exists in the DOM", async () => {
  123 |       await expect(appPage.linkPostpaidPlans.first()).toBeAttached({ timeout: 5000 });
  124 |       evidence.validationsPerformed.push("Verify that the link 'postpaid plans' exists in the DOM");
  125 |     });
  126 |     await test.step("Verify that the link 'family plans' exists in the DOM", async () => {
  127 |       await expect(appPage.linkFamilyPlans.first()).toBeAttached({ timeout: 5000 });
  128 |       evidence.validationsPerformed.push("Verify that the link 'family plans' exists in the DOM");
  129 |     });
  130 |     await test.step("Verify that the link 'prepaid packs' exists in the DOM", async () => {
  131 |       await expect(appPage.linkPrepaidPacks.first()).toBeAttached({ timeout: 5000 });
  132 |       evidence.validationsPerformed.push("Verify that the link 'prepaid packs' exists in the DOM");
  133 |     });
  134 | 
  135 |     await test.step("Capture screenshot evidence", async () => {
  136 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans - Link Verification", "www.myvi.in");
  137 |       evidence.screenshots.push(screenshotPath);
  138 |     });
  139 | 
  140 |     await attachExecutionSummary(evidence, page, testInfo);
  141 |   });
  142 |   test("Verify that 26 Buttons are present on Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans @regression", async ({ page }, testInfo) => {
  143 |     await label('suite', "Regression Test Suite");
  144 |     await label('url', "https://www.myvi.in/");
  145 |     await label('domain', "www.myvi.in");
  146 |     await feature("Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans");
  147 |     await story("Verify Button elements are present");
  148 |     await severity("minor");
  149 |     await tag("regression");
  150 | 
  151 |     const evidence = createEvidence({
  152 |       application: "www.myvi.in",
  153 |       suite: "Regression Test Suite",
  154 |       browser: testInfo.project.name || 'chromium',
  155 |       pageName: "Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans",
  156 |       pageUrl: "https://www.myvi.in/postpaid/family-postpaid-plans",
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
  182 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans - Button Verification", "www.myvi.in");
  183 |       evidence.screenshots.push(screenshotPath);
  184 |     });
  185 | 
  186 |     await attachExecutionSummary(evidence, page, testInfo);
  187 |   });
  188 |   test("Verify that 19 Inputs are present on Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans @regression", async ({ page }, testInfo) => {
  189 |     await label('suite', "Regression Test Suite");
  190 |     await label('url', "https://www.myvi.in/");
  191 |     await label('domain', "www.myvi.in");
  192 |     await feature("Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans");
  193 |     await story("Verify Input elements are present");
  194 |     await severity("minor");
  195 |     await tag("regression");
  196 | 
  197 |     const evidence = createEvidence({
  198 |       application: "www.myvi.in",
  199 |       suite: "Regression Test Suite",
  200 |       browser: testInfo.project.name || 'chromium',
  201 |       pageName: "Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans",
  202 |       pageUrl: "https://www.myvi.in/postpaid/family-postpaid-plans",
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
  228 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans - Input Verification", "www.myvi.in");
  229 |       evidence.screenshots.push(screenshotPath);
  230 |     });
  231 | 
  232 |     await attachExecutionSummary(evidence, page, testInfo);
  233 |   });
  234 | });
  235 | 
```