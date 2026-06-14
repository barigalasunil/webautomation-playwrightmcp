# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\ExploreTheBestPrepaidPlansTopPrepaidRechargeOptionsViIndia.spec.ts >> https://www.myvi.in/ - Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India - Regression Tests >> Verify that 104 Links are present on Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India @regression
- Location: tests\generated\www-myvi-in\ExploreTheBestPrepaidPlansTopPrepaidRechargeOptionsViIndia.spec.ts:96:3

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
      - link "Prepaid":
        - /url: /prepaid
    - listitem:
      - link "Best prepaid Plans":
        - /url: /prepaid/best-prepaid-plans
- heading "Best Prepaid Plans" [level=1]
- paragraph: Vi (Vodafone Idea) Mobile Recharge Plans
- img "location"
- paragraph:
  - text: Recharge Plans for
  - strong: Maharashtra & Goa
  - text: Circle
  - link "Change":
    - /url: "#"
- button "unlimited 5G"
- button "nonstop hero"
- button "super hero"
- button "hero unlimited"
- button "unlimited"
- button "ott"
- button "data"
- button "others"
- button "top up"
- button "plan voucher"
- img
- text: Includes JioHotstar Mobile
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
- text: • 12am-12pm Unlimited Data • Sony LIV Subscriptio+...see more Includes Vi Movies & TV access
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
- text: • Watch FREE OTTs and LIVE TV • Weekend Data Rollove+...see more Includes Vi Movies & TV access
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
- text: • 12am-12pm Unlimited Data • Sony LIV Subscriptio+...see more Includes Vi Movies & TV access
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
- text: • Watch FREE OTTs and LIVE TV • weekend data rollove+...see more
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
- text: • Unlimited Calls+...see more
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
- text: • Unlimited Calls+...see more 19 OTTs on TV & Mobile
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
- text: • unlimited calls • weekend data rollove+...see more Unlimited 5G Data
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
- text: • SonyLIV, JioHotstar & 18 more OTTs included • Amazon Prime Lite Su+...see more ₹ 479
- paragraph: "1"
- paragraph: GB/day
- paragraph: data
- paragraph: "48"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- text: •
- strong: Unlimited 5G Data
- text: • unlimited calls+...see more
- img "Card Title"
- text: ₹ 666
- paragraph: "1.5"
- paragraph: GB/day
- paragraph: data
- paragraph: "64"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G Data
- text: • unlimited calls • weekend data rollove+...see more ₹ 719
- paragraph: "1"
- paragraph: GB/day
- paragraph: data
- paragraph: "72"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- text: •
- strong: Unlimited 5G Data
- text: • unlimited calls+...see more
- img "Card Title"
- text: ₹ 650
- paragraph: unlimited
- paragraph
- paragraph: data
- paragraph: "48"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G & 4G Data
- text: • Unlimited Calls+...see more
- img "Card Title"
- text: ₹ 949
- paragraph: unlimited
- paragraph
- paragraph: data
- paragraph: "72"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G & 4G Data
- text: • Unlimited Calls+...see more
- img "Card Title"
- text: ₹ 1879
- paragraph: unlimited
- paragraph
- paragraph: data
- paragraph: "150"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G & 4G Data
- text: • Unlimited Calls+...see more
- img "Card Title"
- text: ₹ 3399
- paragraph: unlimited
- paragraph
- paragraph: data
- paragraph: "290"
- paragraph: days
- paragraph: validity
- button "buy"
- img "logo - 0"
- img "logo - 1"
- text: •
- strong: Unlimited 5G & 4G Data
- text: • Unlimited Calls+...see more
- heading "prepaid recharge plans FAQs" [level=2]
- text: how do prepaid plans work?
- img "Collapse"
- text: why Vi (Vodafone Idea) prepaid plans?
- img "Collapse"
- text: what is Vi (Vodafone Idea) prepaid validity plan?
- img "Collapse"
- text: how to recharge a plan on my Vi prepaid number?
- img "Collapse"
- text: how to check the best prepaid plans available on my Vi (Vodafone Idea) number?
- img "Collapse"
- button "See More"
- heading "Vi (Vodafone Idea) best prepaid plans" [level=2]
- img "arrow"
- paragraph:
  - text: Keeping individual preferences in mind, Vi brings you the best prepaid cell phone plans in a variety of categories. Now choose from a range of Vi (Vodafone Idea) best prepaid plans like Superhero Unlimited Plans,
  - link "Data Plans":
    - /url: https://www.myvi.in/prepaid/mobile-data-packs
  - text: ", Long-Time Validity Plans, and more from the Vi recharge plan list. Vi prepaid recharge plans are easier than ever before—just browse through all the recharge packs available on the Vi"
  - link "recharge plan":
    - /url: https://www.myvi.in/prepaid/online-mobile-recharge
  - text: page and select the best option based on your needs.
- paragraph: We provide recommendations for the best prepaid mobile phone plans based on usage, top-up amount, and the validity you are looking for. With short-term and long-term validity options and budget-friendly recharge packs, every type of user can find a Vi recharge plan that suits them. Select from several options from the Vi recharge plan list and enjoy lower call rates, extra data, and many other deals.
- heading "Different Benefits of Vi (Vodafone Idea) Prepaid Recharge Plans Based on Pack Value" [level=3]
- list:
  - listitem:
    - text: Truly
    - link "Unlimited Calls":
      - /url: https://www.myvi.in/prepaid/unlimited-calls-and-data-plans
  - listitem: Daily 4G/5G data plus additional data benefits
  - listitem: Short- or long-term validity recharge plans
  - listitem: "Half-day Unlimited Data: Free data from 12 Midnight to 12 Noon."
  - listitem:
    - text: Save unused weekly data for weekends with
    - link "Data Rollover":
      - /url: https://www.myvi.in/prepaid/hero-unlimited-and-weekend-data-rollover
  - listitem: Up to 2GB of backup data every month with the Data Delights offer
  - listitem:
    - text: Enjoy original shows and live TV on
    - link "Vi Movies & TV":
      - /url: https://www.myvi.in/vi-movies-and-tv/all-ott-in-one-app
  - listitem:
    - text: 3-month free access to
    - link "JioHotstar":
      - /url: https://www.myvi.in/jiohotstar-subscription-offer
    - text: Mobile
  - listitem:
    - text: Avail the best prepaid deals on the Vi Website &
    - link "Vi App":
      - /url: https://www.myvi.in/vi-app
  - listitem:
    - link "Talktime-only":
      - /url: https://www.myvi.in/prepaid/recharge-plans-without-data
    - text: recharge plans with unrestricted validity
  - listitem: SMS score alerts for ongoing Cricket Matches with Sports Pack
  - listitem: Access to popular ad-free games with the Games Pack
  - listitem: Chance to win cool rewards with Contest Pack
  - listitem: Live chat with Bollywood celebrities via Star Talk prepaid plans
  - listitem:
    - text: Add-on benefits like
    - link "Caller Tunes":
      - /url: https://www.myvi.in/prepaid/caller-tunes
    - text: with Unlimited Song Change
- paragraph: With validity ranging from 10 days to 365 days, there is a lot to choose from based on your needs. Read on to discover the best prepaid phone plans and benefits on Vi prepaid recharge plans.
- heading "All SIM Recharge Plans List" [level=3]
- paragraph: Check out the latest Vi prepaid recharge plans and compare the benefits before deciding on the best option for you.
- paragraph:
  - text: Choose from a comprehensive range of the best mobile plans in India. Vi
  - link "Superhero Unlimited Plans":
    - /url: https://www.myvi.in/prepaid/online-mobile-recharge#superhero
  - text: that come packed with many data benefits, such as free half-day unlimited data, data rollover where you can roll over unused weekly data to the weekends, and up to 2GB of data backup every month.
- paragraph: Vi (Vodafone Idea) brings you unlimited mobile recharge plans in many different denominations, starting from packs with 18 days validity all the way up to 365 days validity. These best prepaid cell plans from Vi include truly unlimited calls along with various other advantages like daily data on select packs, extra add-on data, weekend data rollover, Half-day unlimited data, access to JioHotstar Mobile, and much more!
- paragraph: Vi (Vodafone Idea) provides many data-only prepaid plans for streaming that can be used to enjoy movies or TV shows. The pack with a validity of 24 hours comes with 1GB of data, while the 56-day validity pack includes 100GB of data.
- paragraph: There are many talk time packs available with unrestricted validity, starting from the minimum recharge plan of ₹10 for short-time users.
- paragraph: Vi brings you per-day data plans to meet your data needs. For more, visit 1GB Per Day Plans, 1.5GB Per Day Plans, 2GB Per Day Plans, 3GB Per Day Plans, 4GB Per Day Plans, and Work From Home Packs. Mobile Recharge Plans Power-Packed with
- paragraph: Get unlimited fun with Vi’s entertainment packs like Games, Sports, Star Talk, Contest Pack, and more! All the best prepaid phone plans are available at affordable prices.
- paragraph: Vi offers the best prepaid deals with a variety of validity options. Choose from 28-day, 56-day, 70-day, 84-day, and 365-day recharge plans, as well as many other validity packs. Users can also extend plan validity to enjoy all plan perks with the Service Validity Packs.
- paragraph: Get 100 SMS per day with Vi prepaid plans and conveniently send text messages without worrying about deductions.
- list:
  - listitem: "Superhero Unlimited Plans:"
  - listitem: "Unlimited Plans:"
  - listitem: "Data Plans:"
  - listitem: "Talktime Plans:"
  - listitem: "Per Day Data Plans & WFH Packs:"
  - listitem: "Entertainment:"
  - listitem: "Days Validity Plans:"
  - listitem: "SMS Packs:"
- paragraph:
  - text: With Vi, get the best prepaid mobile plans for your recharge needs or opt for
  - link "Vi Max postpaid plans":
    - /url: https://www.myvi.in/postpaid/vi-postpaid-plans
  - text: that suit all your requirements. Both erstwhile Vodafone and Idea subscribers can avail of Vi prepaid recharge plans via the Vi website or the
  - link "Vi App.":
    - /url: https://www.myvi.in/vi-app
- heading "Additional Benefits of Vi Prepaid Recharge Plans" [level=2]
- heading "Exclusive Deals for Vi Customers" [level=3]
- paragraph: Vi frequently introduces exclusive recharge deals for both new and existing customers. These may include extra data, cashback offers, and discounts on select packs. Stay updated on the latest Vi best recharge plans to make the most of these benefits.
- heading "Prepaid Plans for Travellers" [level=3]
- paragraph:
  - text: For users who frequently travel, Vi offers the best prepaid mobile plans with
  - link "international roaming":
    - /url: https://www.myvi.in/international-roaming-packs
  - text: benefits, allowing seamless connectivity across India and a wide range of international destinations. These plans include high-speed data, free incoming calls while roaming, and attractive call rates for international dialling.
- heading "Vi Max Plans – A Step Above the Usual Prepaid Recharge" [level=3]
- paragraph: For those who seek more from their Vi prepaid recharge plans, Vi Max offers enhanced benefits, including premium OTT subscriptions at no extra cost, priority customer service, and advanced security features. These are ideal for users looking for long-term cost savings without compromising on features.
- heading "Vi UPI Cashback & Rewards" [level=3]
- paragraph: Recharge your Vi best recharge plans using UPI and enjoy cashback offers, reward points, and exclusive vouchers. These benefits ensure that you get the most value out of every recharge.
- heading "Personalised Vi Recharge Plans" [level=3]
- paragraph: Vi’s smart algorithm suggests the best prepaid mobile phone plans based on your previous usage patterns, ensuring that you always get a recharge that suits your needs. Whether you are a heavy data user, a frequent traveller, or someone who needs unlimited calls, Vi has the right option for you.
- paragraph: Get Non-Stop Data Benefits
- paragraph: Subscribers using our prepaid services in Karnataka, Andhra Pradesh, Rajasthan, Madhya Pradesh, Odisha, Assam, North East, Jammu and Kashmir, and Himachal Pradesh circles will be able to access Unlimited Data all day, every day with our Non-Stop Superhero plans.
- heading "24/7 Customer Support for Vi Prepaid Users" [level=3]
- paragraph: Got a query about your Vi prepaid recharge plans? Vi’s 24/7 customer support is available to help you with all your recharge and network-related concerns. Reach out via the Vi App, website, or customer helpline for quick resolutions.
- paragraph: With Vi best plans, you get the best prepaid cell phone plans for your recharge needs or opt for Vi Max postpaid plans that suit all your requirements. Both erstwhile Vodafone and Idea subscribers can avail of Vi all plans via the Vi website or the Vi App. Choose the best mobile plans in India from Vi that fit your lifestyle and enjoy uninterrupted connectivity with maximum benefits!
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
- alert
- paragraph:
  - text: Zero Platform Fee
  - img
```

# Test source

```ts
  15  |   test("Verify that Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India loads successfully @regression", async ({ page }, testInfo) => {
  16  |     await label('suite', "Regression Test Suite");
  17  |     await label('url', "https://www.myvi.in/");
  18  |     await label('domain', "www.myvi.in");
  19  |     await feature("Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India");
  20  |     await story("Verify page loads for regression");
  21  |     await severity("minor");
  22  |     await tag("regression");
  23  | 
  24  |     const evidence = createEvidence({
  25  |       application: "www.myvi.in",
  26  |       suite: "Regression Test Suite",
  27  |       browser: testInfo.project.name || 'chromium',
  28  |       pageName: "Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India",
  29  |       pageUrl: "https://www.myvi.in/prepaid/best-prepaid-plans",
  30  |       testObjective: "Verify page loads for regression",
  31  |     });
  32  | 
  33  |     await test.step("Open URL: https://www.myvi.in/", async () => {
  34  |       await appPage.open();
  35  |       evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
  36  |     });
  37  | 
  38  |     await test.step("Verify the URL is correct", async () => {
  39  |       await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/prepaid\/best\-prepaid\-plans/);
  40  |       evidence.validationsPerformed.push("Verified URL is correct");
  41  |     });
  42  | 
  43  |     await test.step("Capture screenshot evidence", async () => {
  44  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India - Final Evidence", "www.myvi.in");
  45  |       evidence.screenshots.push(screenshotPath);
  46  |     });
  47  | 
  48  |     await attachExecutionSummary(evidence, page, testInfo);
  49  |   });
  50  |   test("Verify that 17 Headings are present on Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India @regression", async ({ page }, testInfo) => {
  51  |     await label('suite', "Regression Test Suite");
  52  |     await label('url', "https://www.myvi.in/");
  53  |     await label('domain', "www.myvi.in");
  54  |     await feature("Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India");
  55  |     await story("Verify Heading elements are present");
  56  |     await severity("minor");
  57  |     await tag("regression");
  58  | 
  59  |     const evidence = createEvidence({
  60  |       application: "www.myvi.in",
  61  |       suite: "Regression Test Suite",
  62  |       browser: testInfo.project.name || 'chromium',
  63  |       pageName: "Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India",
  64  |       pageUrl: "https://www.myvi.in/prepaid/best-prepaid-plans",
  65  |       testObjective: "Verify Heading elements are present",
  66  |     });
  67  | 
  68  |     await test.step("Verify that the heading 'Best Prepaid Plans' exists in the DOM", async () => {
  69  |       await expect(appPage.headingBestPrepaidPlans.first()).toBeAttached({ timeout: 5000 });
  70  |       evidence.validationsPerformed.push("Verify that the heading 'Best Prepaid Plans' exists in the DOM");
  71  |     });
  72  |     await test.step("Verify that the heading 'prepaid recharge plans FAQs' exists in the DOM", async () => {
  73  |       await expect(appPage.headingPrepaidRechargePlansFaqs.first()).toBeAttached({ timeout: 5000 });
  74  |       evidence.validationsPerformed.push("Verify that the heading 'prepaid recharge plans FAQs' exists in the DOM");
  75  |     });
  76  |     await test.step("Verify that the heading 'Vi (Vodafone Idea) best prepaid plans' exists in the DOM", async () => {
  77  |       await expect(appPage.headingViVodafoneIdeaBestPrepaidPlans.first()).toBeAttached({ timeout: 5000 });
  78  |       evidence.validationsPerformed.push("Verify that the heading 'Vi (Vodafone Idea) best prepaid plans' exists in the DOM");
  79  |     });
  80  |     await test.step("Verify that the heading 'Different Benefits of Vi (Vodafone Idea) Prepaid Recharge Plans Based on Pack Va' exists in the DOM", async () => {
  81  |       await expect(appPage.headingDifferentBenefitsOfViVodafoneIdeaPrepaidRechargePlan.first()).toBeAttached({ timeout: 5000 });
  82  |       evidence.validationsPerformed.push("Verify that the heading 'Different Benefits of Vi (Vodafone Idea) Prepaid Recharge Plans Based on Pack Va' exists in the DOM");
  83  |     });
  84  |     await test.step("Verify that the heading 'All SIM Recharge Plans List' exists in the DOM", async () => {
  85  |       await expect(appPage.headingAllSimRechargePlansList.first()).toBeAttached({ timeout: 5000 });
  86  |       evidence.validationsPerformed.push("Verify that the heading 'All SIM Recharge Plans List' exists in the DOM");
  87  |     });
  88  | 
  89  |     await test.step("Capture screenshot evidence", async () => {
  90  |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India - Heading Verification", "www.myvi.in");
  91  |       evidence.screenshots.push(screenshotPath);
  92  |     });
  93  | 
  94  |     await attachExecutionSummary(evidence, page, testInfo);
  95  |   });
  96  |   test("Verify that 104 Links are present on Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India @regression", async ({ page }, testInfo) => {
  97  |     await label('suite', "Regression Test Suite");
  98  |     await label('url', "https://www.myvi.in/");
  99  |     await label('domain', "www.myvi.in");
  100 |     await feature("Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India");
  101 |     await story("Verify Link elements are present");
  102 |     await severity("minor");
  103 |     await tag("regression");
  104 | 
  105 |     const evidence = createEvidence({
  106 |       application: "www.myvi.in",
  107 |       suite: "Regression Test Suite",
  108 |       browser: testInfo.project.name || 'chromium',
  109 |       pageName: "Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India",
  110 |       pageUrl: "https://www.myvi.in/prepaid/best-prepaid-plans",
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
  122 |     await test.step("Verify that the link 'Prepaid' exists in the DOM", async () => {
  123 |       await expect(appPage.linkPrepaid.first()).toBeAttached({ timeout: 5000 });
  124 |       evidence.validationsPerformed.push("Verify that the link 'Prepaid' exists in the DOM");
  125 |     });
  126 |     await test.step("Verify that the link 'Best prepaid Plans' exists in the DOM", async () => {
  127 |       await expect(appPage.linkBestPrepaidPlans.first()).toBeAttached({ timeout: 5000 });
  128 |       evidence.validationsPerformed.push("Verify that the link 'Best prepaid Plans' exists in the DOM");
  129 |     });
  130 |     await test.step("Verify that the link 'Change' exists in the DOM", async () => {
  131 |       await expect(appPage.linkChange.first()).toBeAttached({ timeout: 5000 });
  132 |       evidence.validationsPerformed.push("Verify that the link 'Change' exists in the DOM");
  133 |     });
  134 | 
  135 |     await test.step("Capture screenshot evidence", async () => {
  136 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India - Link Verification", "www.myvi.in");
  137 |       evidence.screenshots.push(screenshotPath);
  138 |     });
  139 | 
  140 |     await attachExecutionSummary(evidence, page, testInfo);
  141 |   });
  142 |   test("Verify that 49 Buttons are present on Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India @regression", async ({ page }, testInfo) => {
  143 |     await label('suite', "Regression Test Suite");
  144 |     await label('url', "https://www.myvi.in/");
  145 |     await label('domain', "www.myvi.in");
  146 |     await feature("Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India");
  147 |     await story("Verify Button elements are present");
  148 |     await severity("minor");
  149 |     await tag("regression");
  150 | 
  151 |     const evidence = createEvidence({
  152 |       application: "www.myvi.in",
  153 |       suite: "Regression Test Suite",
  154 |       browser: testInfo.project.name || 'chromium',
  155 |       pageName: "Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India",
  156 |       pageUrl: "https://www.myvi.in/prepaid/best-prepaid-plans",
  157 |       testObjective: "Verify Button elements are present",
  158 |     });
  159 | 
  160 |     await test.step("Verify that the button 'unlimited 5G' exists in the DOM", async () => {
  161 |       await expect(appPage.buttonUnlimited5g.first()).toBeAttached({ timeout: 5000 });
  162 |       evidence.validationsPerformed.push("Verify that the button 'unlimited 5G' exists in the DOM");
  163 |     });
  164 |     await test.step("Verify that the button 'nonstop hero' exists in the DOM", async () => {
  165 |       await expect(appPage.buttonNonstopHero.first()).toBeAttached({ timeout: 5000 });
  166 |       evidence.validationsPerformed.push("Verify that the button 'nonstop hero' exists in the DOM");
  167 |     });
  168 |     await test.step("Verify that the button 'super hero' exists in the DOM", async () => {
  169 |       await expect(appPage.buttonSuperHero.first()).toBeAttached({ timeout: 5000 });
  170 |       evidence.validationsPerformed.push("Verify that the button 'super hero' exists in the DOM");
  171 |     });
  172 |     await test.step("Verify that the button 'hero unlimited' exists in the DOM", async () => {
  173 |       await expect(appPage.buttonHeroUnlimited.first()).toBeAttached({ timeout: 5000 });
  174 |       evidence.validationsPerformed.push("Verify that the button 'hero unlimited' exists in the DOM");
  175 |     });
  176 |     await test.step("Verify that the button 'unlimited' exists in the DOM", async () => {
  177 |       await expect(appPage.buttonUnlimited.first()).toBeAttached({ timeout: 5000 });
  178 |       evidence.validationsPerformed.push("Verify that the button 'unlimited' exists in the DOM");
  179 |     });
  180 | 
  181 |     await test.step("Capture screenshot evidence", async () => {
  182 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India - Button Verification", "www.myvi.in");
  183 |       evidence.screenshots.push(screenshotPath);
  184 |     });
  185 | 
  186 |     await attachExecutionSummary(evidence, page, testInfo);
  187 |   });
  188 |   test("Verify that 1 Input is present on Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India @regression", async ({ page }, testInfo) => {
  189 |     await label('suite', "Regression Test Suite");
  190 |     await label('url', "https://www.myvi.in/");
  191 |     await label('domain', "www.myvi.in");
  192 |     await feature("Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India");
  193 |     await story("Verify Input elements are present");
  194 |     await severity("minor");
  195 |     await tag("regression");
  196 | 
  197 |     const evidence = createEvidence({
  198 |       application: "www.myvi.in",
  199 |       suite: "Regression Test Suite",
  200 |       browser: testInfo.project.name || 'chromium',
  201 |       pageName: "Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India",
  202 |       pageUrl: "https://www.myvi.in/prepaid/best-prepaid-plans",
  203 |       testObjective: "Verify Input elements are present",
  204 |     });
  205 | 
  206 |     await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
  207 |       await expect(appPage.inputParamdetails.first()).toBeAttached({ timeout: 5000 });
  208 |       evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
  209 |     });
  210 | 
  211 |     await test.step("Capture screenshot evidence", async () => {
  212 |       const screenshotPath = await captureTestScreenshot(page, testInfo, "Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India - Input Verification", "www.myvi.in");
  213 |       evidence.screenshots.push(screenshotPath);
  214 |     });
  215 | 
```