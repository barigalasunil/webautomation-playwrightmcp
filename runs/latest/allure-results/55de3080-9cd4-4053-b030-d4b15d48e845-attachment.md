# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\ViUnlimitedDataCallsInternetPlansChooseViUnlimitedPlansToday.spec.ts >> https://www.myvi.in/ - Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today - Regression Tests >> Verify that 115 Links are present on Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today @regression
- Location: tests\generated\www-myvi-in\ViUnlimitedDataCallsInternetPlansChooseViUnlimitedPlansToday.spec.ts:96:3

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
- navigation "breadcrumb":
  - list:
    - listitem:
      - link "Home":
        - /url: /
    - listitem:
      - link "prepaid":
        - /url: /prepaid
    - listitem:
      - link "Unlimited Calls & Data Plans":
        - /url: /prepaid/unlimited-calls-and-data-plans
- heading "Unlimited Data, Calls & Internet Plans" [level=1]
- paragraph: Vi (Vodafone Idea) Unlimited Calling/Talktime & Mobile Data Plans
- img "location"
- paragraph:
  - text: Unlimited Plans for
  - strong: Maharashtra & Goa
  - text: Circle
  - link "Change":
    - /url: "#"
- text: ₹ 189
- paragraph: "1"
- paragraph: GB
- paragraph: data
- paragraph: "26"
- paragraph: days
- paragraph: validity
- button "buy"
- text: •
- strong: unlimited calls+...
- text: see more Includes Vi Movies & TV access ₹ 199
- paragraph: "2"
- paragraph: GB
- paragraph: data
- paragraph: "28"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- text: •
- strong: unlimited calls
- text: • Watch FREE OTTs & LI+...see more ₹ 209
- paragraph: "2"
- paragraph: GB
- paragraph: data
- paragraph: "28"
- paragraph: days
- paragraph: validity
- button "buy"
- text: •
- strong: Unlimited Callertunes for 28 Days
- text: • Unlimited calls+...see more ₹ 218
- paragraph: "3"
- paragraph: GB
- paragraph: data
- paragraph: "1"
- paragraph: month
- paragraph: validity
- button "buy"
- text: •
- strong: unlimited calls+...
- text: see more Includes JioHotstar Mobile
- img "Card Title"
- text: ₹ 399
- paragraph: unlimited
- paragraph
- paragraph: data
- paragraph: "28"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G & 4G Data
- text: • Unlimited Calls • JioHotstar Mobile fo+...see more Includes SonyLIV, Z5 + 17 OTTs
- img "Card Title"
- text: ₹ 449
- paragraph: unlimited
- paragraph
- paragraph: data
- paragraph: "28"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G & 4G Data
- text: • Unlimited calls • 19 OTTs on TV & Mobi+...see more
- img "Card Title"
- text: ₹ 998
- paragraph: "2"
- paragraph: GB/day
- paragraph: data
- paragraph: "84"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G Data
- text: • 12am-12pm Unlimited Data • Sony LIV Subscriptio+...see more ₹ 239
- paragraph: "2"
- paragraph: GB
- paragraph: data
- paragraph: "28"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- text: •
- strong: JioHotstar Mobile for 28 Days
- text: • Unlimited calls+...see more Includes Vi Movies & TV access ₹ 299
- paragraph: "1"
- paragraph: GB/day
- paragraph: data
- paragraph: "28"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- text: •
- strong: Watch FREE OTTs & LIVE news with Vi Movies & TV app
- text: • unlimited calls+...see more ₹ 345
- paragraph: "25"
- paragraph: GB
- paragraph: data
- paragraph: "30"
- paragraph: days
- paragraph: validity
- button "buy"
- text: •
- strong: unlimited calls+...
- text: see more Includes Vi Movies & TV access
- img "Card Title"
- text: ₹ 349
- paragraph: "1.5"
- paragraph: GB/day
- paragraph: data
- paragraph: "28"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G Data
- text: • Watch FREE OTTs and LIVE TV • weekend data rollove+...see more Includes Vi Movies & TV access
- img "Card Title"
- text: ₹ 365
- paragraph: "2"
- paragraph: GB/day
- paragraph: data
- paragraph: "28"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: 12am-12pm Unlimited Data
- text: • Watch FREE OTTs and LIVE TV • Weekend Data Rollove+...see more ₹ 369
- paragraph: "4"
- paragraph: GB
- paragraph: data
- paragraph: "56"
- paragraph: days
- paragraph: validity
- button "buy"
- text: •
- strong: unlimited calls+...
- text: see more Includes Vi Movies & TV access
- img "Card Title"
- text: ₹ 379
- paragraph: "2"
- paragraph: GB/day
- paragraph: data
- paragraph: "1"
- paragraph: month
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G Data
- text: • Watch FREE OTTs and LIVE TV • Weekend Data Rollove+...see more
- img "Card Title"
- text: ₹ 398
- paragraph: unlimited
- paragraph
- paragraph: data
- paragraph: "28"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G & 4G Data
- text: • Unlimited Calls+...see more
- img "Card Title"
- text: ₹ 408
- paragraph: "2"
- paragraph: GB/day
- paragraph: data
- paragraph: "28"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G Data
- text: • 12am-12pm Unlimited Data • Sony LIV Subscriptio+...see more Includes Vi Movies & TV access ₹ 548
- paragraph: "7"
- paragraph: GB
- paragraph: data
- paragraph: "84"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- text: •
- strong: unlimited calls
- text: • Watch FREE OTTs and +...see more Includes Vi Movies & TV access
- img "Card Title"
- text: ₹ 579
- paragraph: "1.5"
- paragraph: GB/day
- paragraph: data
- paragraph: "56"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G Data
- text: • Watch FREE OTTs and LIVE TV • weekend data rollove+...see more ₹ 625
- paragraph: "50"
- paragraph: GB
- paragraph: data
- paragraph: "60"
- paragraph: days
- paragraph: validity
- button "buy"
- text: •
- strong: unlimited calls+...
- text: see more
- img "Card Title"
- text: ₹ 649
- paragraph: "2"
- paragraph: GB/day
- paragraph: data
- paragraph: "56"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: 12am-12pm Unlimited Data
- text: • Weekend Data Rollove+...see more includes Amazon Prime Lite
- img "Card Title"
- text: ₹ 696
- paragraph: "2"
- paragraph: GB/day
- paragraph: data
- paragraph: "56"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G Data
- text: • 12am-12pm Unlimited Data • Amazon Prime Lite fo+...see more @Just ₹370 / 28 Days
- img "Card Title"
- text: ₹ 739
- paragraph: unlimited
- paragraph
- paragraph: data
- paragraph: "56"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G & 4G Data
- text: • Unlimited Calls+...see more 19 OTTs on TV & Mobile
- img "Card Title"
- text: ₹ 795
- paragraph: "3"
- paragraph: GB/day
- paragraph: data
- paragraph: "56"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: 12am-12pm Unlimited Data
- text: • Unlimited calls • Includes SonyLIV, ZE+...see more
- img "Card Title"
- text: ₹ 799
- paragraph: "1.5"
- paragraph: GB/day
- paragraph: data
- paragraph: "77"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G Data
- text: • unlimited calls • weekend data rollove+...see more Includes Vi Movies & TV access
- img "Card Title"
- text: ₹ 859
- paragraph: "1.5"
- paragraph: GB/day
- paragraph: data
- paragraph: "84"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: unlimited calls
- text: • Watch FREE OTTs and LIVE TV • weekend data rollove+...see more Includes 19OTTs on TV & Mobile
- img "Card Title"
- text: ₹ 979
- paragraph: "2"
- paragraph: GB/day
- paragraph: data
- paragraph: "84"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: 12am-12pm Unlimited Data
- text: • Unlimited Calls • SonyLIV, ZEE5 & 17 m+...see more
- img "Card Title"
- text: ₹ 994
- paragraph: "2"
- paragraph: GB/day
- paragraph: data
- paragraph: "84"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G Data
- text: • 12am-12pm Unlimited Data • JioHotstar Mobile+...see more includes Amazon Prime Lite
- img "Card Title"
- text: ₹ 996
- paragraph: "2"
- paragraph: GB/day
- paragraph: data
- paragraph: "84"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G Data
- text: • 12am-12pm Unlimited Data • Unlimited Calls+...see more @Just ₹366 / 28 Days
- img "Card Title"
- text: ₹ 1099
- paragraph: unlimited
- paragraph
- paragraph: data
- paragraph: "84"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G & 4G Data
- text: • Unlimited Calls+...see more ₹ 1149
- paragraph: "15"
- paragraph: GB
- paragraph: data
- paragraph: "180"
- paragraph: days
- paragraph: validity
- button "buy"
- text: •
- strong: unlimited calls+...
- text: see more
- img "Card Title"
- text: ₹ 1198
- paragraph: "2"
- paragraph: GB/day
- paragraph: data
- paragraph: "70"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G Data
- text: • 12am-12pm Unlimited Data • 70 days of Netflix B+...see more
- img "Card Title"
- text: ₹ 1599
- paragraph: unlimited
- paragraph
- paragraph: data
- paragraph: "84"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G & 4G Data
- text: • Unlimited calls • 84 days of Netflix B+...see more
- img "Card Title"
- text: ₹ 1749
- paragraph: "1.5"
- paragraph: GB/day
- paragraph: data
- paragraph: "180"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G Data
- text: • unlimited calls • weekend data rollove+...see more @Just ₹350 / 28 Days
- img "Card Title"
- text: ₹ 2248
- paragraph: unlimited
- paragraph
- paragraph: data
- paragraph: "180"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G & 4G Data
- text: • Unlimited Calls+...see more ₹ 2249
- paragraph: "30"
- paragraph: GB
- paragraph: data
- paragraph: "365"
- paragraph: days
- paragraph: validity
- button "buy"
- text: •
- strong: unlimited calls+...
- text: see more 19 OTTs on TV & Mobile
- img "Card Title"
- text: ₹ 2399
- paragraph: "1.5"
- paragraph: GB/day
- paragraph: data
- paragraph: "180"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G Data
- text: • unlimited calls • SonyLIV, ZEE5 & 17 m+...see more @Just ₹314 / 28 Days
- img "Card Title"
- text: ₹ 4099
- paragraph: unlimited
- paragraph
- paragraph: data
- paragraph: "365"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G & 4G Data
- text: • Unlimited Calls+...see more
- img "Card Title"
- text: ₹ 3499
- paragraph: "1.5"
- paragraph: GB/day
- paragraph: data
- paragraph: "365"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G Data
- text: • unlimited calls • weekend data rollove+...see more
- img "Card Title"
- text: ₹ 3999
- paragraph: "2"
- paragraph: GB/day
- paragraph: data
- paragraph: "365"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: 12am-12pm Unlimited Data
- text: • 1 year of JioHotstar mobile • 1 year of Amazon Pri+...see more Super saver
- img "Card Title"
- text: ₹ 3599
- paragraph: "2"
- paragraph: GB/day
- paragraph: data
- paragraph: "365"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G Data
- text: • 12am-12pm Unlimited Data • Weekend Data Rollove+...see more
- img "Card Title"
- text: ₹ 3699
- paragraph: "2"
- paragraph: GB/day
- paragraph: data
- paragraph: "365"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: 12am-12pm Unlimited Data
- text: • Unlimited calls • JioHotstar Mobile+...see more
- img "Card Title"
- text: ₹ 3799
- paragraph: "2"
- paragraph: GB/day
- paragraph: data
- paragraph: "365"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: 12am-12pm Unlimited Data
- text: • Unlimited calls • Amazon Prime Lite Su+...see more Amazon Prime, JioHotstar on TV
- img "Card Title"
- text: ₹ 4999
- paragraph: "2"
- paragraph: GB/day
- paragraph: data
- paragraph: "365"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: 12am-12pm Unlimited Data
- text: • SonyLIV, JioHotstar & 18 more OTTs included • Amazon Prime Lite Su+...see more ₹ 340
- paragraph: "1"
- paragraph: GB/day + 1gb
- paragraph: data
- paragraph: "28"
- paragraph: days
- paragraph: validity
- button "buy"
- text: •
- strong: unlimited calls+...
- text: see more
- heading "Unlimited Calling Plans & Data FAQs" [level=2]
- text: Is a Vi (Vodafone Idea) unlimited net pack truly unlimited?
- img "Collapse"
- text: What is the meaning of truly unlimited calls in Vi (Vodafone Idea)?
- img "Collapse"
- text: Do unlimited plans include an outgoing SMS facility?
- img "Collapse"
- text: What are the benefits available with unlimited recharge plans?
- img "Collapse"
- text: What will be the data throttle speed post exhaustion of daily data quota?
- img "Collapse"
- button "See More"
- heading "unlimited super-fast Data plans & calling plans" [level=2]
- img "arrow"
- paragraph:
  - text: Vi brings to you unlimited calling plans as well as unlimited internet plans with loads of amazing benefits. Users can experience truly unlimited calls to all networks with Vi (Vodafone Idea) and enjoy unlimited mobile internet plans like never before. With unlimited recharge plans suitable for all, and many additional perks to choose from, mobile users get their money’s worth. Explore our trending packs and
  - link "recharge":
    - /url: https://www.myvi.in/prepaid/online-mobile-recharge
  - text: from our best unlimited super-fast
  - link "Data plans":
    - /url: https://www.myvi.in/prepaid/mobile-data-packs
  - text: that suit all your needs.
- paragraph:
  - text: We offer Unlimited Calling Plans and Vi Unlimited data plans in India, along with unlimited perks. Also, explore
  - link "Vi 1GB Per Day Plans":
    - /url: https://www.myvi.in/prepaid/vi-1gb-per-day-plans
  - text: ","
  - link "1.5GB Per Day Plans":
    - /url: https://www.myvi.in/prepaid/vi-1.5gb-per-day-plans
  - text: ","
  - link "2GB Per Day Plans":
    - /url: https://www.myvi.in/prepaid/vi-2gb-per-day-plans
  - text: ","
  - link "3GB Per Day Plans":
    - /url: https://www.myvi.in/prepaid/vi-3gb-per-day-plans
  - text: ","
  - link "4GB Per Day Plans":
    - /url: https://www.myvi.in/prepaid/vi-4gb-per-day-plans
  - text: for per day data benefits.
- paragraph:
  - text: For cashback offers, visit the
  - link "Mobile Recharge Cashback Offers":
    - /url: https://www.myvi.in/prepaid/recharge-cashback-offers
  - text: page.
- paragraph:
  - text: Check out the different validity data packs such as
  - link "28 Days Recharge Plan":
    - /url: https://www.myvi.in/prepaid/vi-28-days-recharge-plans
  - text: ","
  - link "56 Days Recharge Plan":
    - /url: https://www.myvi.in/prepaid/vi-56-days-recharge-plans
  - text: ", 84 Days Recharge Plan, and"
  - link "365 Days Recharge Plan":
    - /url: https://www.myvi.in/prepaid/vi-365-days-recharge-plans
  - text: .
- heading "Vi Unlimited 4G Data Plan benefits:" [level=3]
- paragraph: Enjoy super-fast data, coupled with various amazing features based on your unlimited internet plans
- list:
  - listitem: Unlimited Data with no daily data caps
  - listitem: "Binge all night: Browse/share all you want! Unlimited internet from 12 am to 6 am at no extra cost"
  - listitem: Extra data benefits and online only offers
- heading "Vi Unlimited Calling Plan benefits:" [level=3]
- paragraph:
  - text: Get unlimited talktime and different benefits based on your Vi unlimited
  - link "talktime plans":
    - /url: https://www.myvi.in/prepaid/recharge-talktime-top-up-plans
  - text: .
- list:
  - listitem: Truly unlimited calls, including Local/National calls to all Networks
  - listitem:
    - link "Weekend data rollover":
      - /url: https://www.myvi.in/prepaid/hero-unlimited-and-weekend-data-rollover
    - text: ": Save unused data from weekdays and use it over the weekends"
  - listitem: "Data Delights: Up to 2GB of backup Data every month"
  - listitem:
    - text: Pocket-friendly unlimited
    - link "calling plans":
      - /url: https://www.myvi.in/prepaid/recharge-plans-without-data
    - text: to benefit all types of users
  - listitem: Different plan validity options ranging from 14 days to 365 days for all user requirements
  - listitem:
    - text: SMS benefits with
    - link "truly":
      - /url: https://www.myvi.in/prepaid/unlimited-calls-and-data-plans
    - text: unlimited calls.
- heading "These plans are power-packed with exceptional entertainment benefits such as:" [level=3]
- list:
  - listitem:
    - link "Vi Movies & TV App":
      - /url: https://www.myvi.in/vi-movies-and-tv/all-ott-in-one-app
    - text: ": Enjoy unlimited movies, originals and more on the"
    - link "Vi App":
      - /url: https://www.myvi.in/vi-app
  - listitem:
    - text: "Free OTT subscriptions: Choose from different packs to get"
    - link "JioHotstar":
      - /url: https://www.myvi.in/jiohotstar-subscription-offer
    - text: ","
    - link "SonyLIV":
      - /url: https://www.myvi.in/prepaid/sonyliv-subscription-recharge-plans
    - text: ", or Zee5 subscriptions at no additional charges"
- paragraph:
  - text: With instant online unlimited recharge, number of
  - link "prepaid plans":
    - /url: https://www.myvi.in/prepaid/best-prepaid-plans
  - text: at different price points and multiple payment options, it is convenient to choose any of the different Vi (Vodafone Idea) unlimited internet plans available. Here are some advantages of having an unlimited mobile data plan or an unlimited calling plan.
- list:
  - listitem: Browse the internet on the go without having to worry about data caps.
  - listitem: With a Vi unlimited data plan, you can stay up to date and never miss out on important updates.
  - listitem:
    - text: Vi (Vodafone Idea)
    - link "unlimited data":
      - /url: https://www.myvi.in/non-stop-hero-unlimited-data-plans
    - text: plans are economical and let you stay connected for longer.
  - listitem: Enjoy live streaming without any unnecessary interruptions with Vi’s unlimited data pack.
  - listitem: Binge-watch your favourite series or download songs and videos to enjoy later.
  - listitem: Vi Unlimited calling plans ensure truly unlimited calls to all Networks.
  - listitem:
    - text: Enjoy uninterrupted Local or National calls without worrying about top-up
    - link "balance.":
      - /url: https://www.myvi.in/prepaid/recharge-talktime-top-up-plans
  - listitem:
    - text: Vi (Vodafone Idea) Unlimited calling plans provide value for money with add-on benefits like data or free daily
    - link "SMS":
      - /url: https://www.myvi.in/prepaid/sms-packs
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
- paragraph:
  - text: Zero Platform Fee
  - img
```

# Test source

```ts
  15  |   test("Verify that Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today loads successfully @regression", async ({ page }, testInfo) => {
  16  |     await label('suite', "Regression Test Suite");
  17  |     await label('url', "https://www.myvi.in/");
  18  |     await label('domain', "www.myvi.in");
  19  |     await feature("Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today");
  20  |     await story("Verify page loads for regression");
  21  |     await severity("minor");
  22  |     await tag("regression");
  23  | 
  24  |     const evidence = createEvidence({
  25  |       application: "www.myvi.in",
  26  |       suite: "Regression Test Suite",
  27  |       browser: testInfo.project.name || 'chromium',
  28  |       pageName: "Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today",
  29  |       pageUrl: "https://www.myvi.in/prepaid/unlimited-calls-and-data-plans",
  30  |       testObjective: "Verify page loads for regression",
  31  |     });
  32  | 
  33  |     await test.step("Open URL: https://www.myvi.in/", async () => {
  34  |       await appPage.open();
  35  |       evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
  36  |     });
  37  | 
  38  |     await test.step("Verify the URL is correct", async () => {
  39  |       await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/prepaid\/unlimited\-calls\-and\-data\-plans/);
  40  |       evidence.validationsPerformed.push("Verified URL is correct");
  41  |     });
  42  | 
  43  |     await test.step("Capture screenshot evidence", async () => {
  44  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today - Final Evidence", "www.myvi.in");
  45  |       evidence.screenshots.push(screenshotPath);
  46  |     });
  47  | 
  48  |     await attachExecutionSummary(evidence, page, testInfo);
  49  |   });
  50  |   test("Verify that 11 Headings are present on Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today @regression", async ({ page }, testInfo) => {
  51  |     await label('suite', "Regression Test Suite");
  52  |     await label('url', "https://www.myvi.in/");
  53  |     await label('domain', "www.myvi.in");
  54  |     await feature("Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today");
  55  |     await story("Verify Heading elements are present");
  56  |     await severity("minor");
  57  |     await tag("regression");
  58  | 
  59  |     const evidence = createEvidence({
  60  |       application: "www.myvi.in",
  61  |       suite: "Regression Test Suite",
  62  |       browser: testInfo.project.name || 'chromium',
  63  |       pageName: "Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today",
  64  |       pageUrl: "https://www.myvi.in/prepaid/unlimited-calls-and-data-plans",
  65  |       testObjective: "Verify Heading elements are present",
  66  |     });
  67  | 
  68  |     await test.step("Verify that the heading 'Unlimited Data, Calls & Internet Plans' exists in the DOM", async () => {
  69  |       await expect(appPage.headingUnlimitedDataCallsInternetPlans.first()).toBeAttached({ timeout: 5000 });
  70  |       evidence.validationsPerformed.push("Verify that the heading 'Unlimited Data, Calls & Internet Plans' exists in the DOM");
  71  |     });
  72  |     await test.step("Verify that the heading 'Unlimited Calling Plans & Data FAQs' exists in the DOM", async () => {
  73  |       await expect(appPage.headingUnlimitedCallingPlansDataFaqs.first()).toBeAttached({ timeout: 5000 });
  74  |       evidence.validationsPerformed.push("Verify that the heading 'Unlimited Calling Plans & Data FAQs' exists in the DOM");
  75  |     });
  76  |     await test.step("Verify that the heading 'unlimited super-fast Data plans & calling plans' exists in the DOM", async () => {
  77  |       await expect(appPage.headingUnlimitedSuperFastDataPlansCallingPlans.first()).toBeAttached({ timeout: 5000 });
  78  |       evidence.validationsPerformed.push("Verify that the heading 'unlimited super-fast Data plans & calling plans' exists in the DOM");
  79  |     });
  80  |     await test.step("Verify that the heading 'Vi Unlimited 4G Data Plan benefits:' exists in the DOM", async () => {
  81  |       await expect(appPage.headingViUnlimited4gDataPlanBenefits.first()).toBeAttached({ timeout: 5000 });
  82  |       evidence.validationsPerformed.push("Verify that the heading 'Vi Unlimited 4G Data Plan benefits:' exists in the DOM");
  83  |     });
  84  |     await test.step("Verify that the heading 'Vi Unlimited Calling Plan benefits:' exists in the DOM", async () => {
  85  |       await expect(appPage.headingViUnlimitedCallingPlanBenefits.first()).toBeAttached({ timeout: 5000 });
  86  |       evidence.validationsPerformed.push("Verify that the heading 'Vi Unlimited Calling Plan benefits:' exists in the DOM");
  87  |     });
  88  | 
  89  |     await test.step("Capture screenshot evidence", async () => {
  90  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today - Heading Verification", "www.myvi.in");
  91  |       evidence.screenshots.push(screenshotPath);
  92  |     });
  93  | 
  94  |     await attachExecutionSummary(evidence, page, testInfo);
  95  |   });
  96  |   test("Verify that 115 Links are present on Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today @regression", async ({ page }, testInfo) => {
  97  |     await label('suite', "Regression Test Suite");
  98  |     await label('url', "https://www.myvi.in/");
  99  |     await label('domain', "www.myvi.in");
  100 |     await feature("Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today");
  101 |     await story("Verify Link elements are present");
  102 |     await severity("minor");
  103 |     await tag("regression");
  104 | 
  105 |     const evidence = createEvidence({
  106 |       application: "www.myvi.in",
  107 |       suite: "Regression Test Suite",
  108 |       browser: testInfo.project.name || 'chromium',
  109 |       pageName: "Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today",
  110 |       pageUrl: "https://www.myvi.in/prepaid/unlimited-calls-and-data-plans",
  111 |       testObjective: "Verify Link elements are present",
  112 |     });
  113 | 
  114 |     await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
> 115 |       await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      |                                           ^ Error: expect(locator).toBeAttached() failed
  116 |       evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
  117 |     });
  118 |     await test.step("Verify that the link 'Home' exists in the DOM", async () => {
  119 |       await expect(appPage.linkHome.first()).toBeAttached({ timeout: 5000 });
  120 |       evidence.validationsPerformed.push("Verify that the link 'Home' exists in the DOM");
  121 |     });
  122 |     await test.step("Verify that the link 'prepaid' exists in the DOM", async () => {
  123 |       await expect(appPage.linkPrepaid.first()).toBeAttached({ timeout: 5000 });
  124 |       evidence.validationsPerformed.push("Verify that the link 'prepaid' exists in the DOM");
  125 |     });
  126 |     await test.step("Verify that the link 'Unlimited Calls & Data Plans' exists in the DOM", async () => {
  127 |       await expect(appPage.linkUnlimitedCallsDataPlans.first()).toBeAttached({ timeout: 5000 });
  128 |       evidence.validationsPerformed.push("Verify that the link 'Unlimited Calls & Data Plans' exists in the DOM");
  129 |     });
  130 |     await test.step("Verify that the link 'Change' exists in the DOM", async () => {
  131 |       await expect(appPage.linkChange.first()).toBeAttached({ timeout: 5000 });
  132 |       evidence.validationsPerformed.push("Verify that the link 'Change' exists in the DOM");
  133 |     });
  134 | 
  135 |     await test.step("Capture screenshot evidence", async () => {
  136 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today - Link Verification", "www.myvi.in");
  137 |       evidence.screenshots.push(screenshotPath);
  138 |     });
  139 | 
  140 |     await attachExecutionSummary(evidence, page, testInfo);
  141 |   });
  142 |   test("Verify that 45 Buttons are present on Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today @regression", async ({ page }, testInfo) => {
  143 |     await label('suite', "Regression Test Suite");
  144 |     await label('url', "https://www.myvi.in/");
  145 |     await label('domain', "www.myvi.in");
  146 |     await feature("Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today");
  147 |     await story("Verify Button elements are present");
  148 |     await severity("minor");
  149 |     await tag("regression");
  150 | 
  151 |     const evidence = createEvidence({
  152 |       application: "www.myvi.in",
  153 |       suite: "Regression Test Suite",
  154 |       browser: testInfo.project.name || 'chromium',
  155 |       pageName: "Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today",
  156 |       pageUrl: "https://www.myvi.in/prepaid/unlimited-calls-and-data-plans",
  157 |       testObjective: "Verify Button elements are present",
  158 |     });
  159 | 
  160 |     await test.step("Verify that the button 'buy' exists in the DOM", async () => {
  161 |       await expect(appPage.buttonBuy.first()).toBeAttached({ timeout: 5000 });
  162 |       evidence.validationsPerformed.push("Verify that the button 'buy' exists in the DOM");
  163 |     });
  164 |     await test.step("Verify that the button 'buy' exists in the DOM", async () => {
  165 |       await expect(appPage.buttonBuy1.first()).toBeAttached({ timeout: 5000 });
  166 |       evidence.validationsPerformed.push("Verify that the button 'buy' exists in the DOM");
  167 |     });
  168 |     await test.step("Verify that the button 'buy' exists in the DOM", async () => {
  169 |       await expect(appPage.buttonBuy2.first()).toBeAttached({ timeout: 5000 });
  170 |       evidence.validationsPerformed.push("Verify that the button 'buy' exists in the DOM");
  171 |     });
  172 |     await test.step("Verify that the button 'buy' exists in the DOM", async () => {
  173 |       await expect(appPage.buttonBuy3.first()).toBeAttached({ timeout: 5000 });
  174 |       evidence.validationsPerformed.push("Verify that the button 'buy' exists in the DOM");
  175 |     });
  176 |     await test.step("Verify that the button 'buy' exists in the DOM", async () => {
  177 |       await expect(appPage.buttonBuy4.first()).toBeAttached({ timeout: 5000 });
  178 |       evidence.validationsPerformed.push("Verify that the button 'buy' exists in the DOM");
  179 |     });
  180 | 
  181 |     await test.step("Capture screenshot evidence", async () => {
  182 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today - Button Verification", "www.myvi.in");
  183 |       evidence.screenshots.push(screenshotPath);
  184 |     });
  185 | 
  186 |     await attachExecutionSummary(evidence, page, testInfo);
  187 |   });
  188 |   test("Verify that 1 Input is present on Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today @regression", async ({ page }, testInfo) => {
  189 |     await label('suite', "Regression Test Suite");
  190 |     await label('url', "https://www.myvi.in/");
  191 |     await label('domain', "www.myvi.in");
  192 |     await feature("Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today");
  193 |     await story("Verify Input elements are present");
  194 |     await severity("minor");
  195 |     await tag("regression");
  196 | 
  197 |     const evidence = createEvidence({
  198 |       application: "www.myvi.in",
  199 |       suite: "Regression Test Suite",
  200 |       browser: testInfo.project.name || 'chromium',
  201 |       pageName: "Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today",
  202 |       pageUrl: "https://www.myvi.in/prepaid/unlimited-calls-and-data-plans",
  203 |       testObjective: "Verify Input elements are present",
  204 |     });
  205 | 
  206 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  207 |       await expect(appPage.inputParamdetails.first()).toBeAttached({ timeout: 5000 });
  208 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  209 |     });
  210 | 
  211 |     await test.step("Capture screenshot evidence", async () => {
  212 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today - Input Verification", "www.myvi.in");
  213 |       evidence.screenshots.push(screenshotPath);
  214 |     });
  215 | 
```