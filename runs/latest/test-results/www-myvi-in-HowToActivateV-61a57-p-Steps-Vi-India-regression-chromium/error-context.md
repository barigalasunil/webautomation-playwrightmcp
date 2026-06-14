# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\HowToActivateViEsimCardEasyOnlineSetupStepsViIndia.spec.ts >> https://www.myvi.in/ - How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India - Regression Tests >> Verify that 1 Menu is present on How to Activate Vi eSIM Card – Easy Online Setup & Steps | Vi India @regression
- Location: tests\generated\www-myvi-in\HowToActivateViEsimCardEasyOnlineSetupStepsViIndia.spec.ts:294:3

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
TimeoutError: page.goto: Timeout 30000ms exceeded.
Call log:
  - navigating to "https://www.myvi.in/esim-activation", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e6]:
    - navigation [ref=e9]:
      - link "Vi" [ref=e11] [cursor=pointer]:
        - /url: https://www.myvi.in/
        - img "Vi" [ref=e12]
      - generic [ref=e13]:
        - list [ref=e15]:
          - listitem [ref=e16]:
            - button "Prepaid" [ref=e17] [cursor=pointer]
          - listitem [ref=e18]:
            - button "Postpaid" [ref=e19] [cursor=pointer]
          - listitem [ref=e20]:
            - button "New Connection" [ref=e21] [cursor=pointer]
          - listitem [ref=e22]:
            - link "International Roaming" [ref=e23] [cursor=pointer]:
              - /url: https://www.myvi.in/international-roaming-packs
          - listitem [ref=e24]:
            - link "5G" [ref=e25] [cursor=pointer]:
              - /url: https://www.myvi.in/5g-network
          - listitem [ref=e26]:
            - button "OTTs & More" [ref=e27] [cursor=pointer]
          - listitem [ref=e28]:
            - button "Help" [ref=e29] [cursor=pointer]
          - listitem [ref=e30]:
            - button "DND & Service Quality" [ref=e31] [cursor=pointer]
          - img "search" [ref=e34] [cursor=pointer]
        - generic [ref=e36]:
          - link "Business" [ref=e38] [cursor=pointer]:
            - /url: https://www.myvi.in/business
          - link "Investors" [ref=e40] [cursor=pointer]:
            - /url: https://www.myvi.in/investors/annual-reports
          - link "Sign In" [ref=e42] [cursor=pointer]:
            - /url: https://www.myvi.in/account/login
  - generic [ref=e44]:
    - generic [ref=e48]:
      - toolbar [ref=e50]:
        - listbox [ref=e52]:
          - generic [ref=e53]:
            - img [ref=e54]
            - paragraph [ref=e55]: multiple profiles 1 device, switch between profiles remotely
          - option [ref=e56]:
            - img [ref=e57]
            - paragraph [ref=e58]: Instant activation, switch between numbers seamlessly
          - option [ref=e59]:
            - img [ref=e60]
            - paragraph [ref=e61]: dual SIM ready, no hassle of physical SIM
          - option [ref=e62]:
            - img [ref=e63]
            - paragraph [ref=e64]: enhanced security, cannot get misplaced or stolen
          - option [ref=e65]:
            - img [ref=e66]
            - paragraph [ref=e67]: smart usage, connect with smart watch directly
          - option [ref=e68]:
            - img [ref=e69]
            - paragraph [ref=e70]: eco-friendly choice, reduce your carbon footprint
          - option "selfcare-features multiple profiles 1 device, switch between profiles remotely" [ref=e71]:
            - img "selfcare-features" [ref=e72]
            - paragraph [ref=e73]: multiple profiles 1 device, switch between profiles remotely
          - generic [ref=e74]:
            - img [ref=e75]
            - paragraph [ref=e76]: Instant activation, switch between numbers seamlessly
        - tablist [ref=e77]:
          - listitem [ref=e78] [cursor=pointer]:
            - button [ref=e79]: "1"
          - listitem [ref=e80] [cursor=pointer]:
            - button [ref=e81]: "2"
          - listitem [ref=e82] [cursor=pointer]:
            - button [ref=e83]: "3"
          - listitem [ref=e84] [cursor=pointer]:
            - button [ref=e85]: "4"
          - listitem [ref=e86] [cursor=pointer]:
            - button [ref=e87]: "5"
          - listitem [ref=e88] [cursor=pointer]:
            - button "6" [ref=e89]
      - generic [ref=e90]:
        - paragraph [ref=e91]: experience the power of the Vi eSIM
        - paragraph [ref=e92]: going SIM less is seamless
        - button "How to get started?" [ref=e93] [cursor=pointer]
        - paragraph
    - generic [ref=e96]:
      - heading "how to get started?" [level=2] [ref=e97]
      - paragraph [ref=e99]: check device compatibility
      - paragraph
      - generic [ref=e100]:
        - generic [ref=e101]:
          - paragraph [ref=e102] [cursor=pointer]: smartphone
          - paragraph [ref=e103] [cursor=pointer]: smartwatch
          - paragraph [ref=e104] [cursor=pointer]: tablet
          - paragraph
        - generic [ref=e106]:
          - generic [ref=e107]:
            - paragraph [ref=e109] [cursor=pointer]: select brand
            - generic [ref=e110]:
              - paragraph: select model
          - generic [ref=e113]:
            - generic [ref=e115]:
              - paragraph [ref=e117]: request eSIM for smartphone
              - iframe [ref=e118]:
                - generic [active] [ref=f2e1]:
                  - generic "YouTube Video Player" [ref=f2e3]
                  - generic [ref=f2e5]:
                    - generic:
                      - generic:
                        - button "Play video" [ref=f2e10] [cursor=pointer]
                        - button "Hide player controls" [ref=f2e12] [cursor=pointer]
                        - generic [ref=f2e14]:
                          - generic [ref=f2e19]:
                            - generic [ref=f2e20]:
                              - link "Activate your Vi eSIM on Android" [ref=f2e21] [cursor=pointer]:
                                - /url: https://www.youtube.com/watch?v=naqb0L3FXbM
                              - link "Vi India" [ref=f2e22] [cursor=pointer]:
                                - /url: /channel/UCHLTL1DEP_zelqLvUlYaV8Q
                                - generic [ref=f2e23]: Vi India
                            - generic [ref=f2e24]:
                              - button [ref=f2e25] [cursor=pointer]
                              - generic [ref=f2e27]:
                                - generic: Vi India
                                - generic: 271K subscribers
                          - generic [ref=f2e28]:
                            - button "Share" [ref=f2e31] [cursor=pointer]:
                              - generic [ref=f2e35]:
                                - img
                            - link "Watch on YouTube" [ref=f2e42] [cursor=pointer]:
                              - /url: https://www.youtube.com/watch?v=naqb0L3FXbM
                              - generic [ref=f2e45]:
                                - text: Watch on
                                - img [ref=f2e47]:
                                  - generic [ref=f2e49]:
                                    - img
            - generic [ref=e120]:
              - generic [ref=e121]:
                - generic [ref=e122] [cursor=pointer]: request eSIM via Vi app
                - generic [ref=e123]:
                  - generic [ref=e124]:
                    - generic [ref=e125]:
                      - generic [ref=e126]: "1"
                      - generic [ref=e127]:
                        - paragraph [ref=e128]: Initiate your eSIM request via Vi app
                        - generic [ref=e129]:
                          - paragraph [ref=e130]: Login to the Vi app
                          - paragraph [ref=e131]: Navigate to Help > Raise a service request > Activate eSIM
                    - generic [ref=e132]:
                      - generic [ref=e133]: "2"
                      - generic [ref=e134]:
                        - paragraph [ref=e135]: Select device type (Android / iOS) and Enter EID
                        - generic [ref=e136]:
                          - paragraph [ref=e137]: Select "Same device " / "another device"
                          - paragraph [ref=e138]: Incase of another device select "Android/ios" and incase of same device enter the 32 digit EID
                          - paragraph [ref=e139]: Locate your 32-digit EID from device settings or dial *#06#. input of 32 digit EID number should be for the device on which you wish to activate eSIM.
                          - paragraph [ref=e140]: "** Ensure EID entered is correct as a wrong EID will lead to failure of profile activation"
                    - generic [ref=e141]:
                      - generic [ref=e142]: "3"
                      - generic [ref=e143]:
                        - paragraph [ref=e144]: Verify the OTP on your registered phone number
                        - paragraph [ref=e146]: Enter the OTP received to proceed with the request.
                    - generic [ref=e147]:
                      - generic [ref=e148]: "4"
                      - generic [ref=e149]:
                        - paragraph [ref=e150]: Share confirmation SMS “eSIMY” to 199 within 15 min
                        - paragraph [ref=e152]: This step has been added to avoid all forms of fraud and safeguard your eSIM
                    - generic [ref=e153]:
                      - generic [ref=e154]: "5"
                      - generic [ref=e155]:
                        - paragraph [ref=e156]: Download eSIM profile
                        - generic [ref=e157]:
                          - paragraph [ref=e158]: Upon successful positive consent via SMS, an eSIM profile will be triggered on your device.
                          - paragraph [ref=e159]: You can download the eSIM profile after 15 minutes by going to your device Settings>Add eSIM option and choose “VI INDIA” plan. (Refer to FAQ section for handset-wise steps)
                          - paragraph [ref=e160]: Before downloading the profile or Scanning the QR, ensure the phone is connected to stable/strong Wi-Fi
                          - paragraph [ref=e161]: After switching from a physical SIM to an eSIM, activate the new eSIM profile, remove the physical SIM and restart your device.
                    - generic [ref=e162]:
                      - generic [ref=e163]: "6"
                      - generic [ref=e164]:
                        - paragraph [ref=e165]: Exclusions
                        - paragraph [ref=e167]: Vi eSIM is not yet available for customers in HP,JK,OR,NE and ASSAM
                  - button "request eSIM via Vi app" [ref=e168] [cursor=pointer]
              - generic [ref=e170] [cursor=pointer]: request eSIM via SMS
              - generic [ref=e172] [cursor=pointer]: eSIM device to device transfer via Vi app
        - generic [ref=e176] [cursor=pointer]: things to know while getting eSIM
    - generic [ref=e179]:
      - heading "what is Vi eSIM?" [level=3] [ref=e180]
      - generic [ref=e181]:
        - generic [ref=e182]:
          - img [ref=e183]
          - paragraph [ref=e184]: The smarter SIM for digital lifestyles. eSIM is a digital SIM in your device.
        - generic [ref=e185]:
          - img [ref=e186]
          - paragraph [ref=e187]: no more handling tiny chips or physical cards.
        - generic [ref=e188]:
          - img [ref=e189]
          - paragraph [ref=e190]: Activate, switch, and manage your number seamlessly.
    - generic [ref=e195]:
      - heading "frequently asked questions" [level=2] [ref=e196]
      - generic [ref=e197]:
        - heading "what is eSIM?" [level=3] [ref=e200] [cursor=pointer]
        - heading "what does it mean when a device has a dual SIM with an eSIM?" [level=3] [ref=e203] [cursor=pointer]
        - heading "will the customer be required to take any specific plan for eSIM?" [level=3] [ref=e206] [cursor=pointer]
        - heading "what are the benefits if I move to eSIM?" [level=3] [ref=e209] [cursor=pointer]
        - heading "which are the eligible devices on eSIM?" [level=3] [ref=e212] [cursor=pointer]
      - button "see more" [ref=e214] [cursor=pointer]
    - link "live-chat-icon" [ref=e216] [cursor=pointer]:
      - /url: /help-support/faqs?chatbotopen=true
      - img "live-chat-icon" [ref=e217]
  - contentinfo [ref=e219]:
    - generic [ref=e220]:
      - generic [ref=e225]:
        - generic [ref=e226]:
          - generic [ref=e227]:
            - img "Vi" [ref=e228]
            - generic [ref=e229]:
              - paragraph [ref=e230]: Vodafone Idea Limited
              - paragraph [ref=e231]: Vodafone Idea Limited, a partnership between the Aditya Birla Group & Vodafone Group, provides pan-India voice and data services using the latest communication technologies
          - generic "Vi Vodafone Idea Limited Vodafone Idea Limited, a partnership between the Aditya Birla Group & Vodafone Group, provides pan-India voice and data services using the latest communication technologies" [ref=e232]:
            - generic [ref=e234]:
              - link "Facebook" [ref=e236] [cursor=pointer]:
                - /url: https://www.facebook.com/ViOfficialFanWorld/
                - img "Facebook" [ref=e237]
              - link "Instagram" [ref=e239] [cursor=pointer]:
                - /url: https://instagram.com/viofficialfanworld
                - img "Instagram" [ref=e240]
              - link "Twitter" [ref=e242] [cursor=pointer]:
                - /url: https://twitter.com/ViCustomerCare
                - img "Twitter" [ref=e243]
              - link "Youtube" [ref=e245] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UCHLTL1DEP_zelqLvUlYaV8Q
                - img "Youtube" [ref=e246]
              - link "LinkedIn" [ref=e248] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/vodafone-idea-limited
                - img "LinkedIn" [ref=e249]
        - generic [ref=e250]:
          - paragraph [ref=e252]:
            - button "about Vi" [expanded]:
              - paragraph: about Vi
          - generic "about Vi" [ref=e253]:
            - list [ref=e255]:
              - listitem [ref=e256]:
                - link "About Us" [ref=e257] [cursor=pointer]:
                  - /url: /about-us/home
              - listitem [ref=e258]:
                - link "Vodafone Idea Corp" [ref=e259] [cursor=pointer]:
                  - /url: https://www.vodafoneidea.com/
              - listitem [ref=e260]:
                - link "Vi Foundation" [ref=e261] [cursor=pointer]:
                  - /url: https://www.myvi.in/about-us/vodafoneidea-foundation
              - listitem [ref=e262]:
                - link "Vodafone Group" [ref=e263] [cursor=pointer]:
                  - /url: https://www.vodafone.com/
              - listitem [ref=e264]:
                - link "Aditya Birla Group" [ref=e265] [cursor=pointer]:
                  - /url: https://www.adityabirla.com/
              - listitem [ref=e266]:
                - link "Investor Relations" [ref=e267] [cursor=pointer]:
                  - /url: https://www.myvi.in/investors/investors-support
              - listitem [ref=e268]:
                - link "News & Media" [ref=e269] [cursor=pointer]:
                  - /url: https://www.myvi.in/vodafone-idea/press-releases
              - listitem [ref=e270]:
                - link "Career" [ref=e271] [cursor=pointer]:
                  - /url: https://www.myvi.in/careers
              - listitem [ref=e272]:
                - link "Vi App" [ref=e273] [cursor=pointer]:
                  - /url: https://viapp.onelink.me/bSC3/viapp1
              - listitem [ref=e274]:
                - link "Vi Stores Near Me" [ref=e275] [cursor=pointer]:
                  - /url: https://stores.myvi.in/?UTM_SOURCE=myviHome
              - listitem [ref=e276]:
                - link "Vi Business" [ref=e277] [cursor=pointer]:
                  - /url: https://www.myvi.in/business
              - listitem [ref=e278]:
                - link "Home Broadband" [ref=e279] [cursor=pointer]:
                  - /url: https://youbroadband.in/?soc_id=194&campaign_source=%3Cweb%3E&campaign_name=%3CVi%3E
              - listitem [ref=e280]:
                - link "GIGAnet" [ref=e281] [cursor=pointer]:
                  - /url: https://www.myvi.in/giganet
              - listitem [ref=e282]:
                - link "Vi VoLTE" [ref=e283] [cursor=pointer]:
                  - /url: /vi-volte-4g-hd-voice-calls
              - listitem [ref=e284]:
                - link "Go Green" [ref=e285] [cursor=pointer]:
                  - /url: https://www.myvi.in/online-ebill-registration
              - listitem [ref=e286]:
                - link "eSIM" [ref=e287] [cursor=pointer]:
                  - /url: https://www.myvi.in/esim-activation
              - listitem [ref=e288]:
                - link "WiFi Calling" [ref=e289] [cursor=pointer]:
                  - /url: https://www.myvi.in/vi-wifi-calling
              - listitem [ref=e290]:
                - link "5G" [ref=e291] [cursor=pointer]:
                  - /url: https://www.myvi.in/5g-network
              - listitem [ref=e292]:
                - link "Blog" [ref=e293] [cursor=pointer]:
                  - /url: /blog
        - generic [ref=e294]:
          - paragraph [ref=e296]:
            - button "more from Vi" [expanded]:
              - paragraph: more from Vi
          - generic "more from Vi" [ref=e297]:
            - list [ref=e299]:
              - listitem [ref=e300]:
                - link "Postpaid Connection" [ref=e301] [cursor=pointer]:
                  - /url: https://www.myvi.in/new-connection/buy-new-4g-sim-card-online
              - listitem [ref=e302]:
                - link "Prepaid Connection" [ref=e303] [cursor=pointer]:
                  - /url: https://www.myvi.in/new-connection/buy-prepaid-sim-connection-online
              - listitem [ref=e304]:
                - link "Port Number to Vi / MNP" [ref=e305] [cursor=pointer]:
                  - /url: https://www.myvi.in/new-connection/mobile-number-portability-mnp-online
              - listitem [ref=e306]:
                - link "Free SIM Delivery" [ref=e307] [cursor=pointer]:
                  - /url: https://www.myvi.in/new-connection/vi-free-sim-home-delivery
              - listitem [ref=e308]:
                - link "Track your SIM Delivery" [ref=e309] [cursor=pointer]:
                  - /url: https://www.myvi.in/new-connection/track-your-sim-online
              - listitem [ref=e310]:
                - link "Fancy Number" [ref=e311] [cursor=pointer]:
                  - /url: https://www.myvi.in/new-connection/choose-your-fancy-mobile-numbers-online
              - listitem [ref=e312]:
                - link "Individual Plans" [ref=e313] [cursor=pointer]:
                  - /url: https://www.myvi.in/postpaid/vi-postpaid-plans
              - listitem [ref=e314]:
                - link "Family Plans" [ref=e315] [cursor=pointer]:
                  - /url: https://www.myvi.in/postpaid/family-postpaid-plans
              - listitem [ref=e316]:
                - link "Prepaid to Postpaid" [ref=e317] [cursor=pointer]:
                  - /url: https://www.myvi.in/new-connection/buy-postpaid-sim-connection-online?utm_source=Myviweb&utm_campaign=MainMenu
              - listitem [ref=e318]:
                - link "Best Postpaid Plans" [ref=e319] [cursor=pointer]:
                  - /url: https://www.myvi.in/postpaid/vi-postpaid-plans
              - listitem [ref=e320]:
                - link "Best Prepaid Plans" [ref=e321] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/best-prepaid-plans
              - listitem [ref=e322]:
                - link "Hero Unlimited Plans" [ref=e323] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/hero-unlimited-and-weekend-data-rollover
              - listitem [ref=e324]:
                - link "Unlimited Plans" [ref=e325] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/unlimited-calls-and-data-plans
              - listitem [ref=e326]:
                - link "Talktime Plans" [ref=e327] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/recharge-talktime-top-up-plans
              - listitem [ref=e328]:
                - link "Data Plans" [ref=e329] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/mobile-data-packs
              - listitem [ref=e330]:
                - link "SMS Packs" [ref=e331] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/sms-packs
              - listitem [ref=e332]:
                - link "Caller Tunes Packs" [ref=e333] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/caller-tunes
              - listitem [ref=e334]:
                - link "Value Added Services" [ref=e335] [cursor=pointer]:
                  - /url: https://www.myvi.in/value-added-services
              - listitem [ref=e336]:
                - link "Service Validity Plans" [ref=e337] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/service-validity-recharge-plans
              - listitem [ref=e338]:
                - link "JioHotstar Plans" [ref=e339] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/jiohotstar-subscription-recharge
              - listitem [ref=e340]:
                - link "Amazon Prime Plans" [ref=e341] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/amazon-prime-membership-recharge
              - listitem [ref=e342]:
                - link "SonyLIV Plans" [ref=e343] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/sonyliv-subscription-recharge-plans
              - listitem [ref=e344]:
                - link "Online Recharge" [ref=e345] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/online-mobile-recharge
              - listitem [ref=e346]:
                - link "Postpaid Bill Payment" [ref=e347] [cursor=pointer]:
                  - /url: https://www.myvi.in/postpaid/quick-online-bill-payment
              - listitem [ref=e348]:
                - link "Vi Shop - Seller Portal" [ref=e349] [cursor=pointer]:
                  - /url: https://www.vishop.myvi.in/
              - listitem [ref=e350]:
                - link "Vi Video Vault" [ref=e351] [cursor=pointer]:
                  - /url: https://www.myvi.in/videos
        - generic [ref=e352]:
          - paragraph [ref=e354]:
            - button "explore on Vi app":
              - paragraph: explore on Vi app
          - generic "explore on Vi app" [ref=e355]:
            - list [ref=e357]:
              - listitem [ref=e358]:
                - link "Vi Games" [ref=e359] [cursor=pointer]:
                  - /url: https://www.myvi.in/vi-games-app
              - listitem [ref=e360]:
                - link "Vi Movies & TV" [ref=e361] [cursor=pointer]:
                  - /url: https://viapp.onelink.me/bSC3/viappmtv
              - listitem [ref=e362]:
                - link "Vi Hero Unlimited" [ref=e363] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/hero-unlimited-and-weekend-data-rollover
              - listitem [ref=e364]:
                - link "Vi WiFi Calling" [ref=e365] [cursor=pointer]:
                  - /url: https://www.myvi.in/vi-wifi-calling
              - listitem [ref=e366]:
                - link "International Roaming" [ref=e367] [cursor=pointer]:
                  - /url: https://www.myvi.in/international-roaming-packs
              - listitem [ref=e368]:
                - link "Callertunes" [ref=e369] [cursor=pointer]:
                  - /url: https://viapp.onelink.me/bSC3/viapp1
              - listitem [ref=e370]:
                - link "Order Prepaid SIM" [ref=e371] [cursor=pointer]:
                  - /url: https://www.myvi.in/new-connection/buy-prepaid-sim-connection-online
              - listitem [ref=e372]:
                - link "Order Postpaid SIM" [ref=e373] [cursor=pointer]:
                  - /url: https://www.myvi.in/new-connection/buy-postpaid-sim-connection-online
              - listitem [ref=e374]:
                - link "Order VIP Number" [ref=e375] [cursor=pointer]:
                  - /url: https://www.myvi.in/new-connection/choose-your-fancy-mobile-numbers-online
              - listitem [ref=e376]:
                - link "Port to Vi" [ref=e377] [cursor=pointer]:
                  - /url: https://www.myvi.in/new-connection/mobile-number-portability-mnp-online
              - listitem [ref=e378]:
                - link "Recharge for Self/Others" [ref=e379] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/online-mobile-recharge
              - listitem [ref=e380]:
                - link "Pay Bill for Self/Others" [ref=e381] [cursor=pointer]:
                  - /url: https://www.myvi.in/postpaid/quick-online-bill-payment
              - listitem [ref=e382]:
                - link "Cashback Offers" [ref=e383] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/recharge-cashback-offers
              - listitem [ref=e384]:
                - link "Help & Support" [ref=e385] [cursor=pointer]:
                  - /url: https://www.myvi.in/help-support/faqs
              - listitem [ref=e386]:
                - link "My Account" [ref=e387] [cursor=pointer]:
                  - /url: https://www.myvi.in/vi-app
              - listitem [ref=e388]:
                - link "Vi Shop" [ref=e389] [cursor=pointer]:
                  - /url: https://www.myvi.in/vi-shop-offers
              - listitem [ref=e390]:
                - link "Vi Prepaid Autopay" [ref=e391] [cursor=pointer]:
                  - /url: https://www.myvi.in/auto-pay-recharge
        - generic [ref=e392]:
          - paragraph [ref=e394]:
            - button "regulatory & quick access":
              - paragraph: regulatory & quick access
          - generic "regulatory & quick access" [ref=e395]:
            - list [ref=e397]:
              - listitem [ref=e398]:
                - link "Telemarketing Registration" [ref=e399] [cursor=pointer]:
                  - /url: /tele-marketing
              - listitem [ref=e400]:
                - link "Privacy Policy" [ref=e401] [cursor=pointer]:
                  - /url: /privacy-policy
              - listitem [ref=e402]:
                - link "Terms of Service" [ref=e403] [cursor=pointer]:
                  - /url: /terms-of-use
              - listitem [ref=e404]:
                - link "Notices" [ref=e405] [cursor=pointer]:
                  - /url: /regulatory-notices
              - listitem [ref=e406]:
                - link "Prepaid TRAI mandate" [ref=e407] [cursor=pointer]:
                  - /url: /prepaid/tariff
              - listitem [ref=e408]:
                - link "Postpaid TRAI mandate" [ref=e409] [cursor=pointer]:
                  - /url: /postpaid/tariff
              - listitem [ref=e410]:
                - link "Warning & Fraudulent" [ref=e411] [cursor=pointer]:
                  - /url: /about-us/warning-and-fraudulent
              - listitem [ref=e412]:
                - link "Security Awareness" [ref=e413] [cursor=pointer]:
                  - /url: /parental-control
              - listitem [ref=e414]:
                - link "DND Complaints" [ref=e415] [cursor=pointer]:
                  - /url: /dnd-complaints
              - listitem [ref=e416]:
                - link "DND Registration" [ref=e417] [cursor=pointer]:
                  - /url: https://www.myvi.in/dnd
              - listitem [ref=e418]:
                - link "Disaster Management" [ref=e419] [cursor=pointer]:
                  - /url: /content/dam/vodafoneideadigital/StaticPages/consumerimages/misc/Disaster_Management.pdf
              - listitem [ref=e420]:
                - link "Responsible Disclosure Policy" [ref=e421] [cursor=pointer]:
                  - /url: https://www.myvi.in/Responsible-Disclosure-Policy
              - listitem [ref=e422]:
                - link "Network Coverage" [ref=e423] [cursor=pointer]:
                  - /url: https://www.myvi.in/vicoverage/
              - listitem [ref=e424]:
                - link "Register for Online Refund" [ref=e425] [cursor=pointer]:
                  - /url: https://www.myvi.in/postpaid/neft-details-for-refund
              - listitem [ref=e426]:
                - link "Network Troubleshooting" [ref=e427] [cursor=pointer]:
                  - /url: https://www.myvi.in/help-support/basic-mobile-network-troubleshooting-steps
              - listitem [ref=e428]:
                - link "Block SIM Online" [ref=e429] [cursor=pointer]:
                  - /url: https://www.myvi.in/block-your-sim
              - listitem [ref=e430]:
                - link "UPI Recharge" [ref=e431] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/upi-recharge
              - listitem [ref=e432]:
                - link "Postpaid ISD Call Rates" [ref=e433] [cursor=pointer]:
                  - /url: https://www.myvi.in/Postpaid/isd-call-rates
              - listitem [ref=e434]:
                - link "Prepaid ISD Call Rates" [ref=e435] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/isd-call-rates
              - listitem [ref=e436]:
                - link "Mobile Internet" [ref=e437] [cursor=pointer]:
                  - /url: https://www.myvi.in/mobile-internet
              - listitem [ref=e438]:
                - link "Sitemap" [ref=e439] [cursor=pointer]:
                  - /url: https://www.myvi.in/sitemap
              - listitem [ref=e440]:
                - link "VIBSL" [ref=e441] [cursor=pointer]:
                  - /url: https://www.myvi.in/vibsl
              - listitem [ref=e442]:
                - link "Terms & Conditions - Prepaid" [ref=e443] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid-tnc
      - generic [ref=e447]:
        - paragraph [ref=e448]:
          - text: This website uses own third-party cookies.Find out more about usage in our
          - link "Privacy Policy" [ref=e449] [cursor=pointer]:
            - /url: https://www.myvi.in/privacy-policy
          - text: page. Copyright Reserved with Vodafone Idea Limited (formerly Idea Cellular Limited).
        - paragraph [ref=e450]: "Vodafone Idea Limited (Formerly Idea Cellular Limited), An Aditya Birla Group & Vodafone partnership, Suman Towers, Plot No.18, Sector 11, Gandhinagar – 382011, Gujarat.CIN L32100GJ1996PLC030976, T: +91-79 6671 4000, F: +91-79 2323 2251"
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class BasePage {
  4  |   readonly page: Page;
  5  |   readonly url: string = '';
  6  | 
  7  |   constructor(page: Page) {
  8  |     this.page = page;
  9  |   }
  10 | 
  11 |   async open(): Promise<void> {
> 12 |     await this.page.goto(this.url, { waitUntil: 'load', timeout: 30000 });
     |                     ^ TimeoutError: page.goto: Timeout 30000ms exceeded.
  13 |   }
  14 | 
  15 |   async goto(url: string): Promise<void> {
  16 |     await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  17 |   }
  18 | 
  19 |   async waitForPageLoad(): Promise<void> {
  20 |     await this.page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  21 |   }
  22 | 
  23 |   async click(locator: Locator): Promise<void> {
  24 |     await locator.click();
  25 |   }
  26 | 
  27 |   async fill(locator: Locator, value: string): Promise<void> {
  28 |     await locator.fill(value);
  29 |   }
  30 | 
  31 |   async getText(locator: Locator): Promise<string> {
  32 |     return await locator.textContent() ?? '';
  33 |   }
  34 | 
  35 |   async isVisible(locator: Locator): Promise<boolean> {
  36 |     return await locator.isVisible();
  37 |   }
  38 | 
  39 |   async takeScreenshot(name: string): Promise<void> {
  40 |     const { writeFileSync, mkdirSync } = await import('node:fs');
  41 |     const path = await import('node:path');
  42 |     const dir = path.resolve('reports');
  43 |     mkdirSync(dir, { recursive: true });
  44 |     await this.page.screenshot({ path: path.join(dir, `${name}-${Date.now()}.png`), fullPage: true });
  45 |   }
  46 | 
  47 |   async selectDropdown(locator: Locator, value: string): Promise<void> {
  48 |     await locator.selectOption(value);
  49 |   }
  50 | 
  51 |   async getElementCount(locator: Locator): Promise<number> {
  52 |     return await locator.count();
  53 |   }
  54 | }
  55 | 
```