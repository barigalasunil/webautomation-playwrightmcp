# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\ViVodafoneIdeaViMaxPostpaidPrepaidViGamesMore.spec.ts >> https://www.myvi.in/ - Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More - Regression Tests >> Verify that 126 Links are present on Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More @regression
- Location: tests\generated\www-myvi-in\ViVodafoneIdeaViMaxPostpaidPrepaidViGamesMore.spec.ts:96:3

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
- dialog:
  - text: Would you like to receive Notifications from Vodafone Idea Limited? We promise to only send you relevant content and give you updates on your transactions
  - button "No thanks"
  - button "Sign me up!"
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
  - link "Vi Movies & TV":
    - /url: https://moviesandtv.myvi.in/plans/list/898?utm_source=MyVi_Website&utm_medium=MyVi_Website&utm_campaign=MyVi_Website&utm_id=MyVi_Website
    - img "Vi Movies & TV"
  - link "Vi Movies & TV":
    - /url: https://www.myvi.in/vi-movies-and-tv/all-ott-in-one-app
    - img "Vi Movies & TV"
  - link "IR-Baneer":
    - /url: https://www.myvi.in/international-roaming-packs
    - img "IR-Baneer"
  - link "headerbanner":
    - /url: https://viapp.onelink.me/bSC3/pl4
    - img "headerbanner"
  - link:
    - /url: https://www.myvi.in/netflix-subscription-plans
  - link:
    - /url: https://viapp.onelink.me/bSC3/we1
  - heading "recharge / pay bill" [level=1]
  - text: "+91"
  - textbox "enter prepaid/postpaid number"
  - link "port to Vi":
    - /url: https://www.myvi.in/new-connection/mobile-number-portability-mnp-online
    - text: port to Vi
    - paragraph
  - link "buy postpaid sim view plans buy postpaid sim":
    - /url: https://www.myvi.in/new-connection/buy-postpaid-sim-connection-online?show=postpaidonly
    - text: buy postpaid sim
    - paragraph: view plans
    - img "buy postpaid sim"
  - link "international roaming explore now international roaming":
    - /url: https://www.myvi.in/international-roaming-packs
    - text: international roaming
    - paragraph: explore now
    - img "international roaming"
  - link "buy prepaid sim view packs buy prepaid sim":
    - /url: https://www.myvi.in/new-connection/buy-prepaid-sim-connection-online
    - text: buy prepaid sim
    - paragraph: view packs
    - img "buy prepaid sim"
  - link "buy fancy number choose number buy fancy number":
    - /url: https://www.myvi.in/new-connection/choose-your-fancy-mobile-numbers-online
    - text: buy fancy number
    - paragraph: choose number
    - img "buy fancy number"
  - heading "utility payments" [level=2]
  - link "credit card bill":
    - /url: https://www.myvi.in/utilities/credit-card-bill-payment
    - heading "credit card bill" [level=4]
  - img "credit card bill"
  - link "electricity payment":
    - /url: https://www.myvi.in/utilities/electricity-bill-payment
    - heading "electricity payment" [level=4]
  - img "electricity payment"
  - link "insurance premium":
    - /url: https://www.myvi.in/utilities/pay-insurance-bill
    - heading "insurance premium" [level=4]
  - img "insurance premium"
  - link "fastag":
    - /url: /utilities/fastag-recharge
    - heading "fastag" [level=4]
  - img "fastag"
  - link "loan repayment":
    - /url: https://www.myvi.in/utilities/loan-payment
    - heading "loan repayment" [level=4]
  - img "loan repayment"
  - link "explore more":
    - /url: https://www.myvi.in/utilities
  - heading "there’s always more with Vi" [level=2]
  - link:
    - /url: https://www.myvi.in/prepaid/jiohotstar-subscription-recharge-plans
  - link:
    - /url: "#"
  - link:
    - /url: "#"
  - link:
    - /url: "#"
  - link "img":
    - /url: "#"
    - img "img"
  - link:
    - /url: "#"
  - button "Slide 1"
  - button "Slide 2"
  - button "Slide 3"
  - button "Slide 4"
  - button "Slide 5"
  - button "Slide 6"
  - heading "the best mobile plans for you" [level=2]
  - button "prepaid packs"
  - paragraph: postpaid packs
  - button "individual"
  - button "family"
  - img "location icon"
  - heading "Mumbai" [level=5]
  - button "next icon" [disabled]:
    - img "next icon"
  - button "next icon":
    - img "next icon"
  - text: Choose any 1 complimentary benefit
  - paragraph: Vi Max 451
  - paragraph: ₹ 451 /month
  - button "Select"
  - paragraph:
    - img "5g"
    - text: + 50 GB data + 200 GB rollover
  - paragraph: unlimited calls
  - paragraph: Choice of any 1 complimentary benefits
  - img "Vi Movies & TV"
  - img "JioHotstar"
  - img "SonyLIV"
  - img "Norton"
  - img "Chevron Right"
  - text: Choose any 2 complimentary benefits
  - paragraph: Vi Max 551
  - paragraph: ₹ 551 /month
  - button "Select"
  - paragraph:
    - img "5g"
    - text: + 90 GB data + 200 GB rollover
  - paragraph: unlimited calls
  - paragraph: Choice of any 2 complimentary benefits
  - img "Vi Movies & TV"
  - img "Amazon Prime"
  - img "JioHotstar"
  - img "SonyLIV"
  - img "Swiggy"
  - text: +2 more
  - img "Chevron Right"
  - text: Choose any 3 complimentary benefits
  - paragraph: Vi Max 751
  - paragraph: ₹ 751 /month
  - button "Select"
  - paragraph:
    - img "5g"
    - text: + 150 GB data + 200 GB rollover
  - paragraph: unlimited calls
  - paragraph: Choice of any 3 complimentary benefits
  - img "Vi Movies & TV"
  - img "Amazon Prime"
  - img "JioHotstar"
  - img "SonyLIV"
  - img "Swiggy"
  - text: +2 more
  - img "Chevron Right"
  - text: Fully Loaded
  - paragraph: REDX 1201
  - paragraph: ₹ 1201 /month
  - button "Select"
  - paragraph:
    - img "5g"
    - text: + unlimited data
  - paragraph: unlimited calls
  - img "International Roaming"
  - paragraph: IR pack worth Rs2999 free once every year
  - img "Airport Lounge Access"
  - paragraph: airport lounge access 4 per year
  - paragraph: you can claim all benefits
  - img "Netflix"
  - img "Amazon Prime"
  - img "JioHotstar"
  - img "SonyLIV"
  - img "Swiggy"
  - text: +1 more
  - img "Chevron Right"
  - heading "explore more services" [level=2]
  - link "Explore images pay bill for others":
    - /url: https://www.myvi.in/postpaid/quick-online-bill-payment
    - img "Explore images"
    - paragraph: pay bill for others
  - link "Explore images recharge for others":
    - /url: https://www.myvi.in/prepaid/online-mobile-recharge
    - img "Explore images"
    - paragraph: recharge for others
  - link "Explore images OTT packs":
    - /url: https://www.myvi.in/prepaid/online-mobile-recharge?category=disneyhotstar
    - img "Explore images"
    - paragraph: OTT packs
  - link "Explore images upgrade to postpaid":
    - /url: https://www.myvi.in/pre-to-post/plan?mrp=451&utm_source=MyVi&utm_campaign=MainMenu
    - img "Explore images"
    - paragraph: upgrade to postpaid
  - link "Explore images get new connection":
    - /url: https://www.myvi.in/new-connection/buy-prepaid-sim-connection-online?utm_source=homepage&utm_medium=website&utm_campaign=NeoPrepaid1
    - img "Explore images"
    - paragraph: get new connection
  - link "Explore images international roaming":
    - /url: https://www.myvi.in/international-roaming-packs
    - img "Explore images"
    - paragraph: international roaming
  - link "Explore images switch to eSIM":
    - /url: https://www.myvi.in/esim-activation
    - img "Explore images"
    - paragraph: switch to eSIM
  - link "Explore images 5G":
    - /url: https://www.myvi.in/5g-network
    - img "Explore images"
    - paragraph: 5G
  - link "Explore images setup autopay":
    - /url: https://www.myvi.in/postpaid/auto-bill-payment
    - img "Explore images"
    - paragraph: setup autopay
  - img "International Roaming"
  - heading "ready to travel the world?" [level=2]
  - paragraph: enjoy unlimited data & calls abroad with packs starting at just ₹649
  - heading "explore more explore icon" [level=4]:
    - text: explore more
    - img "explore icon"
  - paragraph: trusted by millions across India
  - paragraph: Sai Shyam G
  - paragraph: "@SaiShyamG"
  - paragraph: Hi @ViCustomerCare, Huge thanks to the team at the Vi Store on New BEL Road, Bengaluru for being extremely helpful and prompt in assisting me with a duplicate SIM request after I lost my phone yesterday. Really appreciate the support from the store staff.
  - text: March 12, 2026
  - link "full post on X":
    - /url: https://x.com/SaiShyamG/status/2031908110370292047
  - paragraph: Sripathi
  - paragraph: "@shreebhootha"
  - paragraph: "@TanaysinghT @TelecomTalk @ViCustomerCare #vi 5G at Chennai..both indoor and outdoor coverage... Really superb... #vi all the best for your SUCCESS. Very fast to access any sites... Other networks don't have such speed at my location. Keep going on..."
  - text: March 28, 2026
  - link "full post on X":
    - /url: https://x.com/shreebhootha/status/2037719099485409687
  - paragraph: Omkar Sankpal
  - paragraph: "@omkar3875"
  - paragraph: Thanks
  - paragraph: "@ViCustomerCare"
  - paragraph: for the solid 5G speeds
  - paragraph: "Got 65+ Mbps download today. Appreciate the efforts, just hoping for even better stability ahead. #Vi5G #SpeedTest"
  - text: Sept 11, 2025
  - link "full post on X":
    - /url: https://x.com/omkar3875/status/1966177935397892124
  - paragraph: mohammeed sadatulla
  - paragraph: "@sadat01"
  - paragraph: ViCustomerCare
  - paragraph: I really appreciate the field team network team social media team for calling customer and helping with network issue really appreciate no operator does that really wonderful experience please keep good 5g network and everything is good thank u
  - text: July 25, 2025
  - link "full post on X":
    - /url: https://x.com/sadat01/status/1948786526327804321
  - paragraph: Kaiser
  - paragraph: "@TheKaiserDar"
  - paragraph: That's why supporting 3rd Best Operator is sometimes worth
  - paragraph: "@ViCustomerCare"
  - paragraph: Giving Good Service Right Now in J&K Despite in these harsh conditions and floods all around.
  - text: Aug 28,2025
  - link "full post on X":
    - /url: https://x.com/TheKaiserDar/status/1961120397098893804
  - paragraph: VN
  - paragraph: "@175f62e3c3e4473"
  - paragraph: Hi, I don’t have any problems now the network is excellent, and I’m getting much better speed compared to Jio and Airtel. I really appreciate the improvement in your service, and I’ll also be getting a few more Vi SIMs soon. Thank you for the great work!
  - text: Aug 31,2025
  - link "full post on X":
    - /url: https://x.com/175f62e3c3e4473/status/1962177943029068024
  - paragraph: aadil khan
  - paragraph: "@kaadil00022"
  - paragraph: ViCustomerCare
  - paragraph: FYI,
  - paragraph: I would like to express my appreciation for Ms. Pooja and Mr. Omkar (Mumbai Goregaon East Storage ). They were very helpful, and my work has been successfully completed.
  - paragraph: Thank you for the great support.
  - text: Aug 04,2025
  - link "full post on X":
    - /url: https://x.com/kaadil00022/status/1952093758490878153
  - paragraph: Ashok
  - paragraph: "@ashokmba09"
  - paragraph: Thank You
  - paragraph: "@ViCustomerCare"
  - paragraph: for immediate step in & speedy resolution of the case .
  - paragraph: Appreciate for taking the customer loyalty into consideration & keeping the brand value at its best .
  - text: July 24,2025
  - link "full post on X":
    - /url: https://x.com/ashokmba09/status/1948395155423199434
  - paragraph: Ashiesh Tiware
  - paragraph: "@ashieshtiware"
  - paragraph: I appreciate Vi for giving network in our area nallasopara west in absence of electricity since 3 days and severe flooded area we got some network to talk to over loved ones... Thanks a lot and whereas Airtel India Jio both network absent since that day not getting since today
  - text: Aug 21,2025
  - link "full post on X":
    - /url: https://x.com/ashieshtiware/status/1958371521270820977
  - button "Go to slide 1"
  - button "Go to slide 2"
  - button "Go to slide 3"
  - button "Go to slide 4"
  - button "Go to slide 5"
  - button "Go to slide 6"
  - button "Go to slide 7"
  - button "Go to slide 8"
  - button "Go to slide 9"
  - img "Vi App Desktop"
  - heading "Explore Vi app" [level=2]
  - link "Get it on Google Play":
    - /url: https://viapp.onelink.me/bSC3/viapp1
    - img "Get it on Google Play"
  - link "Download on the App Store":
    - /url: https://viapp.onelink.me/bSC3/viapp1
    - img "Download on the App Store"
  - heading "need help? we’ve got you covered!" [level=2]
  - link "call us call us":
    - /url: https://www.myvi.in/help-support/vi-customer-care-number
    - img "call us"
    - text: call us
  - link "chat with us chat with us":
    - /url: https://www.myvi.in/help-support/faqs?chatbotopen=true
    - img "chat with us"
    - text: chat with us
  - link "solve queries with videos solve queries with videos":
    - /url: https://www.myvi.in/videos
    - img "solve queries with videos"
    - text: solve queries with videos
  - heading "frequently asked questions" [level=2]
  - text: How can I do a recharge?
  - img "Collapse"
  - text: I want to know my current outstanding amount
  - img "Collapse"
  - text: I want free delivery of new postpaid connection
  - img "Collapse"
  - text: I’m having trouble using data or making calls
  - img "Collapse"
  - img "close icon"
  - link "What can I help you with?":
    - /url: https://www.myvi.in/help-support/faqs?chatbotopen=true
    - paragraph: What can I help you with?
  - link "live-chat-icon":
    - /url: https://www.myvi.in/help-support/faqs?chatbotopen=true
    - img "live-chat-icon"
  - heading "your cookie preferences Cookie" [level=3]:
    - text: your cookie preferences
    - img "Cookie"
  - button "next icon":
    - img "next icon"
  - paragraph:
    - paragraph:
      - text: We use cookies to enhance your browsing experience, analyze website traffic, and provide personalized content. By clicking “Accept all,” you agree to the use of all cookies. Essential cookies will continue to function regardless of your choice. Please refer to our
      - link "Cookie Policy and Privacy Policy":
        - /url: https://www.myvi.in/privacy-policy
      - text: for more information.
  - button "accept all"
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
  - heading "Our Other Important Offerings:" [level=3]
  - paragraph:
    - strong: "Recharge Offers:"
  - paragraph:
    - text: Vi brings you the best
    - link "mobile recharge":
      - /url: https://www.myvi.in/prepaid/online-mobile-recharge
    - text: offers with unlimited calling and daily data for seamless connectivity. Avail exclusive online recharge offers via the Vi App or website and enjoy a world full of benefits such as Short/Long-Term Validity, Unlimited Night Data, Data Rollover, Data Delight, access to multiple OTTs, and much more with Vi online recharge offers.
  - list:
    - listitem: Recharge via the Vi App to avail App exclusive offers
    - listitem:
      - text: Check the Recharge offers on the
      - link "Cashback Offers":
        - /url: https://www.myvi.in/prepaid/recharge-cashback-offers
      - text: page
    - listitem: Head to the Prepaid Plans page and click on pack details for offers such as extra data, OTT subscriptions at no extra cost, etc.
    - listitem: Browse through Vi App Homepage to find out about festive recharge offers, and Spin the Wheel
  - paragraph:
    - strong: Bill Payment Offers
  - paragraph:
    - text: Pay bills online and avail postpaid bill payment offers with Cred Pay, Amazon Pay, Paytm, MobiKwik, LazyPay, etc. Vi postpaid bill offers include assured cashbacks and other discounts on eligible transactions. Cashback would be credited to respective UPI wallets or via scratch cards. Enrol for autopay to automatically
    - link "pay postpaid bills online.":
      - /url: https://www.myvi.in/postpaid/quick-online-bill-payment
  - paragraph:
    - strong: Caller Tunes Download
  - paragraph:
    - text: Vi Caller tunes are a unique way to keep callers engaged with entertaining songs/music/movie dialogues or customized tunes. Browse through trending songs or the latest viral hits and set your favorite songs as
    - link "callertunes.":
      - /url: https://www.myvi.in/prepaid/caller-tunes
    - text: Go to the music store for a vast repository of songs/dialogues across genres and select a caller tune of your preference.
  - paragraph:
    - strong: Games
  - paragraph:
    - link "Play games online":
      - /url: https://www.myvi.in/vi-games-app
    - text: across categories such as action games, board games, fantasy, matches, tournaments, trending free games, etc. on the Vi App. Participate in online games and win exciting rewards or vouchers. Check out Game of the Day on the Vi App and play free online games for fun. Play VIP tournaments with a daily pass and win big!
  - paragraph:
    - strong: 5G
  - paragraph:
    - text: Get ready to experience the potential of the Vi 5G network in India. Seamless connectivity with Vi 5G ready SIM. Explore more on
    - link "https://www.myvi.in/5g-network":
      - /url: https://www.myvi.in/5g-network
  - paragraph:
    - strong: Vi Movies and TV
  - paragraph: Get a Vi Movies & TV Pro pack to enjoy 13+ OTTs via a single App. Binge-watch the latest Hollywood or Bollywood movies, TV shows and originals, Live News, Live Sports, Short films, Kids Shows, and more. Enjoy curated content in over 13 different languages from partner OTT platforms such as JioHotstar, Sony LIV, Fancode, PlayFlix, Discovery, Chaupal, & more! And that's not all, we have added Korean to the catalog too - now fulfill your K-drama cravings all within the Vi Movies & TV app. What are you waiting for?
- alert
```

# Test source

```ts
  15  |   test("Verify that Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More loads successfully @regression", async ({ page }, testInfo) => {
  16  |     await label('suite', "Regression Test Suite");
  17  |     await label('url', "https://www.myvi.in/");
  18  |     await label('domain', "www.myvi.in");
  19  |     await feature("Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More");
  20  |     await story("Verify page loads for regression");
  21  |     await severity("minor");
  22  |     await tag("regression");
  23  | 
  24  |     const evidence = createEvidence({
  25  |       application: "www.myvi.in",
  26  |       suite: "Regression Test Suite",
  27  |       browser: testInfo.project.name || 'chromium',
  28  |       pageName: "Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More",
  29  |       pageUrl: "https://www.myvi.in/",
  30  |       testObjective: "Verify page loads for regression",
  31  |     });
  32  | 
  33  |     await test.step("Open URL: https://www.myvi.in/", async () => {
  34  |       await appPage.open();
  35  |       evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
  36  |     });
  37  | 
  38  |     await test.step("Verify the URL is correct", async () => {
  39  |       await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\//);
  40  |       evidence.validationsPerformed.push("Verified URL is correct");
  41  |     });
  42  | 
  43  |     await test.step("Capture screenshot evidence", async () => {
  44  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More - Final Evidence", "www.myvi.in");
  45  |       evidence.screenshots.push(screenshotPath);
  46  |     });
  47  | 
  48  |     await attachExecutionSummary(evidence, page, testInfo);
  49  |   });
  50  |   test("Verify that 23 Headings are present on Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More @regression", async ({ page }, testInfo) => {
  51  |     await label('suite', "Regression Test Suite");
  52  |     await label('url', "https://www.myvi.in/");
  53  |     await label('domain', "www.myvi.in");
  54  |     await feature("Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More");
  55  |     await story("Verify Heading elements are present");
  56  |     await severity("minor");
  57  |     await tag("regression");
  58  | 
  59  |     const evidence = createEvidence({
  60  |       application: "www.myvi.in",
  61  |       suite: "Regression Test Suite",
  62  |       browser: testInfo.project.name || 'chromium',
  63  |       pageName: "Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More",
  64  |       pageUrl: "https://www.myvi.in/",
  65  |       testObjective: "Verify Heading elements are present",
  66  |     });
  67  | 
  68  |     await test.step("Verify that the heading 'recharge / pay bill' exists in the DOM", async () => {
  69  |       await expect(appPage.headingRechargePayBill.first()).toBeAttached({ timeout: 5000 });
  70  |       evidence.validationsPerformed.push("Verify that the heading 'recharge / pay bill' exists in the DOM");
  71  |     });
  72  |     await test.step("Verify that the heading 'utility payments' exists in the DOM", async () => {
  73  |       await expect(appPage.headingUtilityPayments.first()).toBeAttached({ timeout: 5000 });
  74  |       evidence.validationsPerformed.push("Verify that the heading 'utility payments' exists in the DOM");
  75  |     });
  76  |     await test.step("Verify that the heading 'credit card bill' exists in the DOM", async () => {
  77  |       await expect(appPage.headingCreditCardBill.first()).toBeAttached({ timeout: 5000 });
  78  |       evidence.validationsPerformed.push("Verify that the heading 'credit card bill' exists in the DOM");
  79  |     });
  80  |     await test.step("Verify that the heading 'electricity payment' exists in the DOM", async () => {
  81  |       await expect(appPage.headingElectricityPayment.first()).toBeAttached({ timeout: 5000 });
  82  |       evidence.validationsPerformed.push("Verify that the heading 'electricity payment' exists in the DOM");
  83  |     });
  84  |     await test.step("Verify that the heading 'insurance premium' exists in the DOM", async () => {
  85  |       await expect(appPage.headingInsurancePremium.first()).toBeAttached({ timeout: 5000 });
  86  |       evidence.validationsPerformed.push("Verify that the heading 'insurance premium' exists in the DOM");
  87  |     });
  88  | 
  89  |     await test.step("Capture screenshot evidence", async () => {
  90  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More - Heading Verification", "www.myvi.in");
  91  |       evidence.screenshots.push(screenshotPath);
  92  |     });
  93  | 
  94  |     await attachExecutionSummary(evidence, page, testInfo);
  95  |   });
  96  |   test("Verify that 126 Links are present on Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More @regression", async ({ page }, testInfo) => {
  97  |     await label('suite', "Regression Test Suite");
  98  |     await label('url', "https://www.myvi.in/");
  99  |     await label('domain', "www.myvi.in");
  100 |     await feature("Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More");
  101 |     await story("Verify Link elements are present");
  102 |     await severity("minor");
  103 |     await tag("regression");
  104 | 
  105 |     const evidence = createEvidence({
  106 |       application: "www.myvi.in",
  107 |       suite: "Regression Test Suite",
  108 |       browser: testInfo.project.name || 'chromium',
  109 |       pageName: "Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More",
  110 |       pageUrl: "https://www.myvi.in/",
  111 |       testObjective: "Verify Link elements are present",
  112 |     });
  113 | 
  114 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
> 115 |       await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      |                                           ^ Error: expect(locator).toBeAttached() failed
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
  136 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More - Link Verification", "www.myvi.in");
  137 |       evidence.screenshots.push(screenshotPath);
  138 |     });
  139 | 
  140 |     await attachExecutionSummary(evidence, page, testInfo);
  141 |   });
  142 |   test("Verify that 8 Buttons are present on Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More @regression", async ({ page }, testInfo) => {
  143 |     await label('suite', "Regression Test Suite");
  144 |     await label('url', "https://www.myvi.in/");
  145 |     await label('domain', "www.myvi.in");
  146 |     await feature("Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More");
  147 |     await story("Verify Button elements are present");
  148 |     await severity("minor");
  149 |     await tag("regression");
  150 | 
  151 |     const evidence = createEvidence({
  152 |       application: "www.myvi.in",
  153 |       suite: "Regression Test Suite",
  154 |       browser: testInfo.project.name || 'chromium',
  155 |       pageName: "Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More",
  156 |       pageUrl: "https://www.myvi.in/",
  157 |       testObjective: "Verify Button elements are present",
  158 |     });
  159 | 
  160 |     await test.step("Verify that the button 'prepaid packs' exists in the DOM", async () => {
  161 |       await expect(appPage.buttonPrepaidPacks.first()).toBeAttached({ timeout: 5000 });
  162 |       evidence.validationsPerformed.push("Verify that the button 'prepaid packs' exists in the DOM");
  163 |     });
  164 |     await test.step("Verify that the button 'individual' exists in the DOM", async () => {
  165 |       await expect(appPage.buttonIndividual.first()).toBeAttached({ timeout: 5000 });
  166 |       evidence.validationsPerformed.push("Verify that the button 'individual' exists in the DOM");
  167 |     });
  168 |     await test.step("Verify that the button 'family' exists in the DOM", async () => {
  169 |       await expect(appPage.buttonFamily.first()).toBeAttached({ timeout: 5000 });
  170 |       evidence.validationsPerformed.push("Verify that the button 'family' exists in the DOM");
  171 |     });
  172 |     await test.step("Verify that the button 'Select' exists in the DOM", async () => {
  173 |       await expect(appPage.buttonSelect.first()).toBeAttached({ timeout: 5000 });
  174 |       evidence.validationsPerformed.push("Verify that the button 'Select' exists in the DOM");
  175 |     });
  176 |     await test.step("Verify that the button 'Select' exists in the DOM", async () => {
  177 |       await expect(appPage.buttonSelect1.first()).toBeAttached({ timeout: 5000 });
  178 |       evidence.validationsPerformed.push("Verify that the button 'Select' exists in the DOM");
  179 |     });
  180 | 
  181 |     await test.step("Capture screenshot evidence", async () => {
  182 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More - Button Verification", "www.myvi.in");
  183 |       evidence.screenshots.push(screenshotPath);
  184 |     });
  185 | 
  186 |     await attachExecutionSummary(evidence, page, testInfo);
  187 |   });
  188 |   test("Verify that 2 Inputs are present on Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More @regression", async ({ page }, testInfo) => {
  189 |     await label('suite', "Regression Test Suite");
  190 |     await label('url', "https://www.myvi.in/");
  191 |     await label('domain', "www.myvi.in");
  192 |     await feature("Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More");
  193 |     await story("Verify Input elements are present");
  194 |     await severity("minor");
  195 |     await tag("regression");
  196 | 
  197 |     const evidence = createEvidence({
  198 |       application: "www.myvi.in",
  199 |       suite: "Regression Test Suite",
  200 |       browser: testInfo.project.name || 'chromium',
  201 |       pageName: "Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More",
  202 |       pageUrl: "https://www.myvi.in/",
  203 |       testObjective: "Verify Input elements are present",
  204 |     });
  205 | 
  206 |     await test.step("Verify that the input 'enter prepaid/postpaid number' exists in the DOM", async () => {
  207 |       await expect(appPage.inputEnterPrepaidPostpaidNumber.first()).toBeAttached({ timeout: 5000 });
  208 |       evidence.validationsPerformed.push("Verify that the input 'enter prepaid/postpaid number' exists in the DOM");
  209 |     });
  210 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  211 |       await expect(appPage.inputParamdetails.first()).toBeAttached({ timeout: 5000 });
  212 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  213 |     });
  214 | 
  215 |     await test.step("Capture screenshot evidence", async () => {
```