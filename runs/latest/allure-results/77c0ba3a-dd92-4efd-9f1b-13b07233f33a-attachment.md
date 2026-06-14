# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\VodafoneIdeaFoundationAnInitiativeToChangeIndiaWithMobileTechnology.spec.ts >> https://www.myvi.in/ - Vodafone Idea Foundation – An initiative to change India with Mobile Technology - Regression Tests >> Verify that 105 Links are present on Vodafone Idea Foundation – An initiative to change India with Mobile Technology @regression
- Location: tests\generated\www-myvi-in\VodafoneIdeaFoundationAnInitiativeToChangeIndiaWithMobileTechnology.spec.ts:96:3

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: locator('a[href="https://www.myvi.in/"]').first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for locator('a[href="https://www.myvi.in/"]').first()

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
- main:
  - heading "About Vi Foundation" [level=1]
  - img "bannerimg"
  - paragraph:
    - paragraph: The Vi Foundation, Vi's Corporate Social Responsibility (CSR) arm, is committed to creating a brighter, more inclusive future for India
  - paragraph:
    - paragraph: "Our vision statement articulates our deep-rooted commitment to the social sector: “To connect and inspire every Indian to build a better tomorrow.” Our mission statement towards the community builds further on the vision: “Be the most respected company by leveraging technology and purposeful innovation to catalyse social prosperity, digital literacy, and inclusivity.”"
  - paragraph:
    - paragraph: We believe that sustainable change is possible when technology and purpose come together.
  - paragraph:
    - paragraph: Through collaboration with government agencies, policymakers, non-profits, educational institutions, and community-based organisations, we work to bridge divides and ensure that every Indian has growth opportunities regardless of geography or circumstance. The Vi Foundation believes that actual progress is inclusive progress. By combining digital innovation with on-ground activation, we create scalable and sustainable models that uplift millions while narrowing gaps in access, opportunity, and equity.
  - paragraph:
    - paragraph: "At the heart of our work lies a straightforward conviction: when technology serves humanity, the possibilities for change are endless. Together with our partners, we will continue to create equitable opportunities, inspire innovation, and build a more connected, empowered India."
  - heading "An overview of Vi Foundation’s programmes:" [level=3]
  - list:
    - listitem:
      - heading "SmartAgri:" [level=4]
      - paragraph:
        - paragraph: The SmartAgri project is one of its kind in the agriculture domain. It leverages IoT-based technology to transform current farm practices into “intelligent” ones by using sensors to collect and analyse data. The solution helps farmers access real-time and localised information on key agricultural parameters, like weather, soil, moisture, and pest infestation, and provides digital farm advisories in several regional languages. Implemented across 46 districts in 12 states, the project covers 18 lakh hectares of farmland and impacts over 8.9 lakh farmers.
      - paragraph:
        - paragraph: By enabling farmers to make smart and informed decisions, the project has increased production, improved crop quality, reduced water consumption and operational costs, and led to better resource utilisation. Results from the project’s first phase show 70% increase in farmers’ income, 27% rise in yield per hectare, and 23% reduction in input costs. The project also supports key stakeholders like agri-entrepreneurs, farmer-producer organisations, small tea growers’ associations, sugar mills, etc., by building their capacity to adopt good agricultural practices.
  - list:
    - listitem:
      - heading "Gurushala:" [level=4]
      - paragraph:
        - paragraph:
          - text: Gurushala is designed to build a robust online community for teachers and students nationwide. The Gurushala portal (
          - link "https://gurushala.co/":
            - /url: https://gurushala.co/
          - text: ) is a comprehensive resource hub, offering access to lesson plans, worksheets, teaching videos, quizzes, and mock tests. The platform has a rich repository of over 1,15,000 content assets. With content in 10 different Indian languages, the portal caters to the diverse needs and preferences of over 10 lakh users, including students and teachers. Gurushala also provides critical training and networking opportunities for educators, fostering a collaborative and supportive environment for educators to enhance their teaching practices. For more details, please visit
          - link "https://gurushala.co/":
            - /url: https://gurushala.co/
  - list:
    - listitem:
      - heading "e-Vidya for Brighter Futures:" [level=4]
      - paragraph:
        - paragraph: "E-Vidya for Brighter Futures, implemented in collaboration with Vodafone Intelligent Solutions (VOIS), is an initiative dedicated to transforming government and government-aided schools into vibrant Model Schools through upgraded infrastructure, joyful learning, and inclusive educational ecosystems. It focuses on three key components: Model School Development, Community Engagement through Learning Centres, and the Learning on Wheels (LoW) initiative. It supports 240 schools, 13 Community Learning Centres, directly reaching over 1,08,000 students, teachers, and community members annually. Some of the programme's key focus areas include introducing smart classrooms, promoting STEM education, Foundational Literacy and Numeracy (FLN), Early Childhood Care and Education (ECCE), IT skill development, sports interventions, career guidance, etc, in the project schools. It also focuses on building the capacity of teachers to adopt and practice classroom teaching activities aligned with the objectives of the National Education Policy (NEP) 2020"
  - list:
    - listitem:
      - heading "Robotics Labs:" [level=4]
      - paragraph:
        - paragraph: Established in partnership with Ericsson India, Robotics Labs provide underserved students with hands-on exposure to robotics, 3D printing, and programming, fostering critical thinking and innovation. These labs have been established in government-run and aided schools nationwide. By integrating STEM education into the curriculum, the Robotics Labs enable students to experiment, play, and create. These labs have been set up in Rajasthan, Chhattisgarh, Madhya Pradesh, Maharashtra, Gujarat and Delhi, directly impacting more than 3600 students – almost half of them girls.
  - list:
    - listitem:
      - heading "Learning with Vodafone Idea :" [level=4]
      - paragraph:
        - paragraph:
          - text: Vi Foundation has developed India’s leading scholarship discovery and assistance platform, which connects scholarship providers with students. The portal –
          - link "www.learningwithvodafoneidea.in":
            - /url: http://www.learningwithvodafoneidea.in/
          - text: – has a user-friendly interface and an intelligent scholarship matching feature that allows students to browse through the wide range of scholarships available easily. The portal also offers dedicated support services to assist students with the application process such as personalized SMS and email notifications. Leveraging the portal, we have disbursed Vi Scholarships to more than 4500 outstanding teachers and deserving students across the country. For more details, please visit
          - link "www.learningwithvodafoneidea.in":
            - /url: http://www.learningwithvodafoneidea.in/
  - list:
    - listitem:
      - heading "IoT Centre of Excellence:" [level=4]
      - paragraph:
        - paragraph: "Vi Foundation and Telecom Sector Skill Council established the IoT Centre of Excellence at Indira Gandhi Delhi Technical University for Women in 2023 to bridge the skill gap and meet industry needs. Candidates are trained through a blended approach, combining online and practical training, focusing on six IoT use-cases: Smart Lighting, Smart Environmental Weather Monitoring, Smart Agriculture, Smart Water Quality Monitoring, Smart Health Monitoring, and Smart Energy Monitoring. Since the centre started, more than 600 students from the University have been positively impacted."
  - list:
    - listitem:
      - heading "Skill for Life:" [level=4]
      - paragraph:
        - paragraph: The Skill for Life programme, supported by VOIS, enhances employability among youth through skill-based training with a strong focus on inclusion and livelihood generation. It is operational in Pune, Ahmedabad, and Bengaluru, and has successfully trained over 3,600 individuals, achieving over 70% success rate in placements. Complementing industry-specific skills training, the project also offers upskilling in soft skills such as communication, professionalism, and workplace behaviors to build confidence, adaptability, and long-term career success. The project also focuses on building the skillsets of members belonging to the transgender community for employment in the formal sector. In doing so, the project actively brings them into the mainstream of society and creates pathways for social integration. The Skill for Life programme exemplifies a long-term commitment to sustainable development and social equity, creating a job-ready workforce contributing to India’s socio-economic growth while breaking societal barriers and opening opportunities for all.
  - list:
    - listitem:
      - 'heading "VOIS for Tech: University Engagement Programme:" [level=4]'
      - paragraph:
        - paragraph:
          - text: The University Engagement Programme, designed and implemented in collaboration with VOIS, boosts employability with hands-on IR 4.0 courses, technical sessions, skill-focused workshops, and faculty development initiatives. It aims to prepare engineering students and faculty for a fast-evolving digital world by giving them access to industry-relevant learning through bootcamps, hackathons, expert-led masterclasses, and faculty training, driven by a robust Learning Management System platform (
          - link "https://voisfortech.com/":
            - /url: https://voisfortech.com/
          - text: ). The platform prepares students to design meaningful solutions to real-world technological problems and enhances their employability prospects in the IT and shared services sector. It has evolved into a nationally recognised initiative integrating virtual learning, project-based internships, faculty development, and industry interaction to create a comprehensive learning ecosystem. Since its inception in 2018, the programme has empowered over 80,000 students and 500 faculty members from over 1,900 institutions. For more details, please visit
          - link "https://voisfortech.com/":
            - /url: https://voisfortech.com/
      - paragraph:
        - paragraph
  - list:
    - listitem:
      - heading "Jaadu Ginni Ka:" [level=4]
      - paragraph:
        - paragraph:
          - text: "Launched in 2017, Jaadu Ginni Ka is one of the most extensive financial literacy programmes that addresses India’s financial inclusion gap. The programme empowers participants to make informed financial decisions, and access formal financial services. It helps them plan better for their future by delivering financial literacy and digital skills via app, community workshops, and mobile vans. The programme has impacted over two crore individuals nationwide, with more than 50% being women. As a part of Vi CyberShield the financial literacy programme stresses cybersecurity and fraud prevention, providing essential tools for participants to detect and avoid falling prey to digital scams. In 2024, the Jaadu Ginni Ka bagged the Mahatma Award for CSR Excellence for reducing inequity. For more information, please visit:"
          - link "www.jaaduginnika.in":
            - /url: http://www.jaaduginnika.in/
  - list:
    - listitem:
      - heading "Planet & Wellbeing:" [level=4]
      - paragraph:
        - paragraph:
          - text: The Planet & Wellbeing Project, supported by VOIS, focuses on addressing the environmental and social challenges of rapid urbanisation, climate change, and ecological degradation. The project is active in Pune, Bengaluru, Ahmedabad, Delhi, and Hyderabad, and promotes urban greening, climate education, and digital innovation. Under the project, over 52,000 saplings have been planted, supported by geo-tagged monitoring with a 95% survival goal. Also, part of the project is the VOIS Planet Knowledge portal (
          - link "https://voisplanet.com/":
            - /url: https://voisplanet.com/
          - text: ") and Our Green Planet App that features 3,000 sustainability resources in five regional languages. These interactive platforms offer expert content on low-carbon living, renewable energy, biodiversity, and e-waste management. Climate awareness sessions are also organised regularly to engage students, educators, and communities. AR/VR-based immersive learning, nature walks, and interactive events are also organised to raise awareness on the larger environmental issues and to foster environmentally conscious behaviour. For more details please visit:"
          - link "https://voisplanet.com/":
            - /url: https://voisplanet.com/
  - list:
    - listitem:
      - heading "Connecting for Good:" [level=4]
      - paragraph:
        - paragraph: The Connecting for Good initiative reflects the Vi Foundation’s commitment to sustainable development by harnessing mobile technology to drive social impact. Through grants and digital support, it empowers NGOs, civil society, and community-based organisations to amplify their work. By blending digital innovation with on-ground activations, such as workshops, training, and app-based capacity-building, the Foundation helps build resilient communities, raise awareness, and enable individuals to lead better lives.
      - paragraph:
        - paragraph
  - heading "Key solutions include:" [level=4]
  - list:
    - listitem: "DonateBook: A platform connecting donors with schools and NGOs needing books."
    - listitem: "My Ambar: A digital safety toolkit for women in distress."
    - listitem: "My Ambar Suraksha Chakra: A platform supporting domestic and informal workers’ safety."
    - listitem: "DigiSakshar: An on-demand digital literacy app that helps individuals confidently access and adopt technology."
    - listitem: "Girl Rising: A mobile game designed to challenge gender discrimination."
  - text: Impact Assessment Report
  - img "Collapse"
  - paragraph:
    - link "Jaadu Ginni Ka":
      - /url: https://www.myvi.in/documents/106724/379613/Jadu-Ginni-Ka-Financial-Literacy.pdf
  - paragraph:
    - link "Connecting For Good":
      - /url: https://www.myvi.in/documents/106724/379613/Connecting-for-Good.pdf
  - paragraph:
    - link "Scholarship Program":
      - /url: https://www.myvi.in/documents/106724/379613/Learning-with-Vodafone-Idea-Scholarship.pdf
  - paragraph:
    - link "RSV":
      - /url: https://www.myvi.in/documents/106724/379613/RSV.pdf
  - paragraph:
    - link "Jigyasa":
      - /url: https://www.myvi.in/documents/106724/379613/Jigyasa.pdf
  - paragraph:
    - link "Smart Agri":
      - /url: https://www.myvi.in/documents/106724/379613/Smart-Agri.pdf
  - navigation "breadcrumb":
    - list:
      - listitem:
        - link "Home":
          - /url: /
      - listitem:
        - link "About Us":
          - /url: /about-us/home
      - listitem:
        - link "Vodafone Foundation":
          - /url: /about-us/vodafone-foundation
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
```

# Test source

```ts
  15  |   test("Verify that Vodafone Idea Foundation – An initiative to change India with Mobile Technology loads successfully @regression", async ({ page }, testInfo) => {
  16  |     await label('suite', "Regression Test Suite");
  17  |     await label('url', "https://www.myvi.in/");
  18  |     await label('domain', "www.myvi.in");
  19  |     await feature("Vodafone Idea Foundation – An initiative to change India with Mobile Technology");
  20  |     await story("Verify page loads for regression");
  21  |     await severity("minor");
  22  |     await tag("regression");
  23  | 
  24  |     const evidence = createEvidence({
  25  |       application: "www.myvi.in",
  26  |       suite: "Regression Test Suite",
  27  |       browser: testInfo.project.name || 'chromium',
  28  |       pageName: "Vodafone Idea Foundation – An initiative to change India with Mobile Technology",
  29  |       pageUrl: "https://www.myvi.in/about-us/vodafoneidea-foundation",
  30  |       testObjective: "Verify page loads for regression",
  31  |     });
  32  | 
  33  |     await test.step("Open URL: https://www.myvi.in/", async () => {
  34  |       await appPage.open();
  35  |       evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
  36  |     });
  37  | 
  38  |     await test.step("Verify the URL is correct", async () => {
  39  |       await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/about\-us\/vodafoneidea\-foundation/);
  40  |       evidence.validationsPerformed.push("Verified URL is correct");
  41  |     });
  42  | 
  43  |     await test.step("Capture screenshot evidence", async () => {
  44  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vodafone Idea Foundation – An initiative to change India with Mobile Technology - Final Evidence", "www.myvi.in");
  45  |       evidence.screenshots.push(screenshotPath);
  46  |     });
  47  | 
  48  |     await attachExecutionSummary(evidence, page, testInfo);
  49  |   });
  50  |   test("Verify that 19 Headings are present on Vodafone Idea Foundation – An initiative to change India with Mobile Technology @regression", async ({ page }, testInfo) => {
  51  |     await label('suite', "Regression Test Suite");
  52  |     await label('url', "https://www.myvi.in/");
  53  |     await label('domain', "www.myvi.in");
  54  |     await feature("Vodafone Idea Foundation – An initiative to change India with Mobile Technology");
  55  |     await story("Verify Heading elements are present");
  56  |     await severity("minor");
  57  |     await tag("regression");
  58  | 
  59  |     const evidence = createEvidence({
  60  |       application: "www.myvi.in",
  61  |       suite: "Regression Test Suite",
  62  |       browser: testInfo.project.name || 'chromium',
  63  |       pageName: "Vodafone Idea Foundation – An initiative to change India with Mobile Technology",
  64  |       pageUrl: "https://www.myvi.in/about-us/vodafoneidea-foundation",
  65  |       testObjective: "Verify Heading elements are present",
  66  |     });
  67  | 
  68  |     await test.step("Verify that the heading 'About Vi Foundation' exists in the DOM", async () => {
  69  |       await expect(appPage.headingAboutViFoundation.first()).toBeAttached({ timeout: 5000 });
  70  |       evidence.validationsPerformed.push("Verify that the heading 'About Vi Foundation' exists in the DOM");
  71  |     });
  72  |     await test.step("Verify that the heading 'An overview of Vi Foundation’s programmes:' exists in the DOM", async () => {
  73  |       await expect(appPage.headingAnOverviewOfViFoundationSProgrammes.first()).toBeAttached({ timeout: 5000 });
  74  |       evidence.validationsPerformed.push("Verify that the heading 'An overview of Vi Foundation’s programmes:' exists in the DOM");
  75  |     });
  76  |     await test.step("Verify that the heading 'SmartAgri:' exists in the DOM", async () => {
  77  |       await expect(appPage.headingSmartagri.first()).toBeAttached({ timeout: 5000 });
  78  |       evidence.validationsPerformed.push("Verify that the heading 'SmartAgri:' exists in the DOM");
  79  |     });
  80  |     await test.step("Verify that the heading 'Gurushala:' exists in the DOM", async () => {
  81  |       await expect(appPage.headingGurushala.first()).toBeAttached({ timeout: 5000 });
  82  |       evidence.validationsPerformed.push("Verify that the heading 'Gurushala:' exists in the DOM");
  83  |     });
  84  |     await test.step("Verify that the heading 'e-Vidya for Brighter Futures:' exists in the DOM", async () => {
  85  |       await expect(appPage.headingEVidyaForBrighterFutures.first()).toBeAttached({ timeout: 5000 });
  86  |       evidence.validationsPerformed.push("Verify that the heading 'e-Vidya for Brighter Futures:' exists in the DOM");
  87  |     });
  88  | 
  89  |     await test.step("Capture screenshot evidence", async () => {
  90  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vodafone Idea Foundation – An initiative to change India with Mobile Technology - Heading Verification", "www.myvi.in");
  91  |       evidence.screenshots.push(screenshotPath);
  92  |     });
  93  | 
  94  |     await attachExecutionSummary(evidence, page, testInfo);
  95  |   });
  96  |   test("Verify that 105 Links are present on Vodafone Idea Foundation – An initiative to change India with Mobile Technology @regression", async ({ page }, testInfo) => {
  97  |     await label('suite', "Regression Test Suite");
  98  |     await label('url', "https://www.myvi.in/");
  99  |     await label('domain', "www.myvi.in");
  100 |     await feature("Vodafone Idea Foundation – An initiative to change India with Mobile Technology");
  101 |     await story("Verify Link elements are present");
  102 |     await severity("minor");
  103 |     await tag("regression");
  104 | 
  105 |     const evidence = createEvidence({
  106 |       application: "www.myvi.in",
  107 |       suite: "Regression Test Suite",
  108 |       browser: testInfo.project.name || 'chromium',
  109 |       pageName: "Vodafone Idea Foundation – An initiative to change India with Mobile Technology",
  110 |       pageUrl: "https://www.myvi.in/about-us/vodafoneidea-foundation",
  111 |       testObjective: "Verify Link elements are present",
  112 |     });
  113 | 
  114 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
> 115 |       await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      |                                           ^ Error: expect(locator).toBeAttached() failed
  116 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  117 |     });
  118 |     await test.step("Verify that the link 'https://gurushala.co/' exists in the DOM", async () => {
  119 |       await expect(appPage.linkHttpsGurushalaCo.first()).toBeAttached({ timeout: 5000 });
  120 |       evidence.validationsPerformed.push("Verify that the link 'https://gurushala.co/' exists in the DOM");
  121 |     });
  122 |     await test.step("Verify that the link 'https://gurushala.co/' exists in the DOM", async () => {
  123 |       await expect(appPage.linkHttpsGurushalaCo1.first()).toBeAttached({ timeout: 5000 });
  124 |       evidence.validationsPerformed.push("Verify that the link 'https://gurushala.co/' exists in the DOM");
  125 |     });
  126 |     await test.step("Verify that the link 'www.learningwithvodafoneidea.in' exists in the DOM", async () => {
  127 |       await expect(appPage.linkWwwLearningwithvodafoneideaIn.first()).toBeAttached({ timeout: 5000 });
  128 |       evidence.validationsPerformed.push("Verify that the link 'www.learningwithvodafoneidea.in' exists in the DOM");
  129 |     });
  130 |     await test.step("Verify that the link 'www.learningwithvodafoneidea.in' exists in the DOM", async () => {
  131 |       await expect(appPage.linkWwwLearningwithvodafoneideaIn1.first()).toBeAttached({ timeout: 5000 });
  132 |       evidence.validationsPerformed.push("Verify that the link 'www.learningwithvodafoneidea.in' exists in the DOM");
  133 |     });
  134 | 
  135 |     await test.step("Capture screenshot evidence", async () => {
  136 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vodafone Idea Foundation – An initiative to change India with Mobile Technology - Link Verification", "www.myvi.in");
  137 |       evidence.screenshots.push(screenshotPath);
  138 |     });
  139 | 
  140 |     await attachExecutionSummary(evidence, page, testInfo);
  141 |   });
  142 |   test("Verify that 3 Menus are present on Vodafone Idea Foundation – An initiative to change India with Mobile Technology @regression", async ({ page }, testInfo) => {
  143 |     await label('suite', "Regression Test Suite");
  144 |     await label('url', "https://www.myvi.in/");
  145 |     await label('domain', "www.myvi.in");
  146 |     await feature("Vodafone Idea Foundation – An initiative to change India with Mobile Technology");
  147 |     await story("Verify Menu elements are present");
  148 |     await severity("minor");
  149 |     await tag("regression");
  150 | 
  151 |     const evidence = createEvidence({
  152 |       application: "www.myvi.in",
  153 |       suite: "Regression Test Suite",
  154 |       browser: testInfo.project.name || 'chromium',
  155 |       pageName: "Vodafone Idea Foundation – An initiative to change India with Mobile Technology",
  156 |       pageUrl: "https://www.myvi.in/about-us/vodafoneidea-foundation",
  157 |       testObjective: "Verify Menu elements are present",
  158 |     });
  159 | 
  160 |     await test.step("Verify that the menu 'PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service' exists in the DOM", async () => {
  161 |       await expect(appPage.menuPrepaidpostpaidnewConnectioninternationalRoaming5gottsMor.first()).toBeAttached({ timeout: 5000 });
  162 |       evidence.validationsPerformed.push("Verify that the menu 'PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service' exists in the DOM");
  163 |     });
  164 |     await test.step("Verify that the menu 'BusinessInvestorsSign in' exists in the DOM", async () => {
  165 |       await expect(appPage.menuBusinessinvestorssignIn.first()).toBeAttached({ timeout: 5000 });
  166 |       evidence.validationsPerformed.push("Verify that the menu 'BusinessInvestorsSign in' exists in the DOM");
  167 |     });
  168 |     await test.step("Verify that the menu 'HomeAbout UsVodafone Foundation' exists in the DOM", async () => {
  169 |       await expect(appPage.menuHomeaboutUsvodafoneFoundation.first()).toBeAttached({ timeout: 5000 });
  170 |       evidence.validationsPerformed.push("Verify that the menu 'HomeAbout UsVodafone Foundation' exists in the DOM");
  171 |     });
  172 | 
  173 |     await test.step("Capture screenshot evidence", async () => {
  174 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vodafone Idea Foundation – An initiative to change India with Mobile Technology - Menu Verification", "www.myvi.in");
  175 |       evidence.screenshots.push(screenshotPath);
  176 |     });
  177 | 
  178 |     await attachExecutionSummary(evidence, page, testInfo);
  179 |   });
  180 | });
  181 | 
```