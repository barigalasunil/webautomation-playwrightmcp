# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: www-myvi-in\RegisterForPostpaidEbillOnlineVi.spec.ts >> https://www.myvi.in/ - Register for Postpaid EBill Online | Vi - Regression Tests >> Verify that 16 Buttons are present on Register for Postpaid EBill Online | Vi @regression
- Location: tests\generated\www-myvi-in\RegisterForPostpaidEbillOnlineVi.spec.ts:134:3

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
TimeoutError: page.goto: Timeout 30000ms exceeded.
Call log:
  - navigating to "https://www.myvi.in/online-ebill-registration", waiting until "load"

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
    - generic [ref=e47]:
      - generic [ref=e49]:
        - heading "E-bill registration" [level=1] [ref=e50]
        - heading "Activate Ebill. Go Paperless, Go Green" [level=2] [ref=e51]
      - generic [ref=e53]:
        - textbox "Postpaid Mobile Number" [active] [ref=e58]
        - generic [ref=e60]:
          - img "img" [ref=e61]
          - paragraph [ref=e62]: You'll be joining more than 1 million people in saving trees
        - button "register" [disabled] [ref=e64]
    - navigation "breadcrumb" [ref=e69]:
      - list [ref=e70]:
        - listitem [ref=e71]:
          - link "Home" [ref=e72] [cursor=pointer]:
            - /url: https://www.myvi.in
        - listitem [ref=e73]:
          - link "Online E-Bill Registration Form" [ref=e74] [cursor=pointer]:
            - /url: /online-ebill-registration
  - contentinfo [ref=e76]:
    - generic [ref=e77]:
      - generic [ref=e82]:
        - generic [ref=e83]:
          - generic [ref=e84]:
            - img "Vi" [ref=e85]
            - generic [ref=e86]:
              - paragraph [ref=e87]: Vodafone Idea Limited
              - paragraph [ref=e88]: Vodafone Idea Limited, a partnership between the Aditya Birla Group & Vodafone Group, provides pan-India voice and data services using the latest communication technologies
          - generic "Vi Vodafone Idea Limited Vodafone Idea Limited, a partnership between the Aditya Birla Group & Vodafone Group, provides pan-India voice and data services using the latest communication technologies" [ref=e89]:
            - generic [ref=e91]:
              - link "Facebook" [ref=e93] [cursor=pointer]:
                - /url: https://www.facebook.com/ViOfficialFanWorld/
                - img "Facebook" [ref=e94]
              - link "Instagram" [ref=e96] [cursor=pointer]:
                - /url: https://instagram.com/viofficialfanworld
                - img "Instagram" [ref=e97]
              - link "Twitter" [ref=e99] [cursor=pointer]:
                - /url: https://twitter.com/ViCustomerCare
                - img "Twitter" [ref=e100]
              - link "Youtube" [ref=e102] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UCHLTL1DEP_zelqLvUlYaV8Q
                - img "Youtube" [ref=e103]
              - link "LinkedIn" [ref=e105] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/vodafone-idea-limited
                - img "LinkedIn" [ref=e106]
        - generic [ref=e107]:
          - paragraph [ref=e109]:
            - button "about Vi" [expanded]:
              - paragraph: about Vi
          - generic "about Vi" [ref=e110]:
            - list [ref=e112]:
              - listitem [ref=e113]:
                - link "About Us" [ref=e114] [cursor=pointer]:
                  - /url: /about-us/home
              - listitem [ref=e115]:
                - link "Vodafone Idea Corp" [ref=e116] [cursor=pointer]:
                  - /url: https://www.vodafoneidea.com/
              - listitem [ref=e117]:
                - link "Vi Foundation" [ref=e118] [cursor=pointer]:
                  - /url: https://www.myvi.in/about-us/vodafoneidea-foundation
              - listitem [ref=e119]:
                - link "Vodafone Group" [ref=e120] [cursor=pointer]:
                  - /url: https://www.vodafone.com/
              - listitem [ref=e121]:
                - link "Aditya Birla Group" [ref=e122] [cursor=pointer]:
                  - /url: https://www.adityabirla.com/
              - listitem [ref=e123]:
                - link "Investor Relations" [ref=e124] [cursor=pointer]:
                  - /url: https://www.myvi.in/investors/investors-support
              - listitem [ref=e125]:
                - link "News & Media" [ref=e126] [cursor=pointer]:
                  - /url: https://www.myvi.in/vodafone-idea/press-releases
              - listitem [ref=e127]:
                - link "Career" [ref=e128] [cursor=pointer]:
                  - /url: https://www.myvi.in/careers
              - listitem [ref=e129]:
                - link "Vi App" [ref=e130] [cursor=pointer]:
                  - /url: https://viapp.onelink.me/bSC3/viapp1
              - listitem [ref=e131]:
                - link "Vi Stores Near Me" [ref=e132] [cursor=pointer]:
                  - /url: https://stores.myvi.in/?UTM_SOURCE=myviHome
              - listitem [ref=e133]:
                - link "Vi Business" [ref=e134] [cursor=pointer]:
                  - /url: https://www.myvi.in/business
              - listitem [ref=e135]:
                - link "Home Broadband" [ref=e136] [cursor=pointer]:
                  - /url: https://youbroadband.in/?soc_id=194&campaign_source=%3Cweb%3E&campaign_name=%3CVi%3E
              - listitem [ref=e137]:
                - link "GIGAnet" [ref=e138] [cursor=pointer]:
                  - /url: https://www.myvi.in/giganet
              - listitem [ref=e139]:
                - link "Vi VoLTE" [ref=e140] [cursor=pointer]:
                  - /url: /vi-volte-4g-hd-voice-calls
              - listitem [ref=e141]:
                - link "Go Green" [ref=e142] [cursor=pointer]:
                  - /url: https://www.myvi.in/online-ebill-registration
              - listitem [ref=e143]:
                - link "eSIM" [ref=e144] [cursor=pointer]:
                  - /url: https://www.myvi.in/esim-activation
              - listitem [ref=e145]:
                - link "WiFi Calling" [ref=e146] [cursor=pointer]:
                  - /url: https://www.myvi.in/vi-wifi-calling
              - listitem [ref=e147]:
                - link "5G" [ref=e148] [cursor=pointer]:
                  - /url: https://www.myvi.in/5g-network
              - listitem [ref=e149]:
                - link "Blog" [ref=e150] [cursor=pointer]:
                  - /url: /blog
        - generic [ref=e151]:
          - paragraph [ref=e153]:
            - button "more from Vi" [expanded]:
              - paragraph: more from Vi
          - generic "more from Vi" [ref=e154]:
            - list [ref=e156]:
              - listitem [ref=e157]:
                - link "Postpaid Connection" [ref=e158] [cursor=pointer]:
                  - /url: https://www.myvi.in/new-connection/buy-new-4g-sim-card-online
              - listitem [ref=e159]:
                - link "Prepaid Connection" [ref=e160] [cursor=pointer]:
                  - /url: https://www.myvi.in/new-connection/buy-prepaid-sim-connection-online
              - listitem [ref=e161]:
                - link "Port Number to Vi / MNP" [ref=e162] [cursor=pointer]:
                  - /url: https://www.myvi.in/new-connection/mobile-number-portability-mnp-online
              - listitem [ref=e163]:
                - link "Free SIM Delivery" [ref=e164] [cursor=pointer]:
                  - /url: https://www.myvi.in/new-connection/vi-free-sim-home-delivery
              - listitem [ref=e165]:
                - link "Track your SIM Delivery" [ref=e166] [cursor=pointer]:
                  - /url: https://www.myvi.in/new-connection/track-your-sim-online
              - listitem [ref=e167]:
                - link "Fancy Number" [ref=e168] [cursor=pointer]:
                  - /url: https://www.myvi.in/new-connection/choose-your-fancy-mobile-numbers-online
              - listitem [ref=e169]:
                - link "Individual Plans" [ref=e170] [cursor=pointer]:
                  - /url: https://www.myvi.in/postpaid/vi-postpaid-plans
              - listitem [ref=e171]:
                - link "Family Plans" [ref=e172] [cursor=pointer]:
                  - /url: https://www.myvi.in/postpaid/family-postpaid-plans
              - listitem [ref=e173]:
                - link "Prepaid to Postpaid" [ref=e174] [cursor=pointer]:
                  - /url: https://www.myvi.in/new-connection/buy-postpaid-sim-connection-online?utm_source=Myviweb&utm_campaign=MainMenu
              - listitem [ref=e175]:
                - link "Best Postpaid Plans" [ref=e176] [cursor=pointer]:
                  - /url: https://www.myvi.in/postpaid/vi-postpaid-plans
              - listitem [ref=e177]:
                - link "Best Prepaid Plans" [ref=e178] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/best-prepaid-plans
              - listitem [ref=e179]:
                - link "Hero Unlimited Plans" [ref=e180] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/hero-unlimited-and-weekend-data-rollover
              - listitem [ref=e181]:
                - link "Unlimited Plans" [ref=e182] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/unlimited-calls-and-data-plans
              - listitem [ref=e183]:
                - link "Talktime Plans" [ref=e184] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/recharge-talktime-top-up-plans
              - listitem [ref=e185]:
                - link "Data Plans" [ref=e186] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/mobile-data-packs
              - listitem [ref=e187]:
                - link "SMS Packs" [ref=e188] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/sms-packs
              - listitem [ref=e189]:
                - link "Caller Tunes Packs" [ref=e190] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/caller-tunes
              - listitem [ref=e191]:
                - link "Value Added Services" [ref=e192] [cursor=pointer]:
                  - /url: https://www.myvi.in/value-added-services
              - listitem [ref=e193]:
                - link "Service Validity Plans" [ref=e194] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/service-validity-recharge-plans
              - listitem [ref=e195]:
                - link "JioHotstar Plans" [ref=e196] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/jiohotstar-subscription-recharge
              - listitem [ref=e197]:
                - link "Amazon Prime Plans" [ref=e198] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/amazon-prime-membership-recharge
              - listitem [ref=e199]:
                - link "SonyLIV Plans" [ref=e200] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/sonyliv-subscription-recharge-plans
              - listitem [ref=e201]:
                - link "Online Recharge" [ref=e202] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/online-mobile-recharge
              - listitem [ref=e203]:
                - link "Postpaid Bill Payment" [ref=e204] [cursor=pointer]:
                  - /url: https://www.myvi.in/postpaid/quick-online-bill-payment
              - listitem [ref=e205]:
                - link "Vi Shop - Seller Portal" [ref=e206] [cursor=pointer]:
                  - /url: https://www.vishop.myvi.in/
              - listitem [ref=e207]:
                - link "Vi Video Vault" [ref=e208] [cursor=pointer]:
                  - /url: https://www.myvi.in/videos
        - generic [ref=e209]:
          - paragraph [ref=e211]:
            - button "explore on Vi app":
              - paragraph: explore on Vi app
          - generic "explore on Vi app" [ref=e212]:
            - list [ref=e214]:
              - listitem [ref=e215]:
                - link "Vi Games" [ref=e216] [cursor=pointer]:
                  - /url: https://www.myvi.in/vi-games-app
              - listitem [ref=e217]:
                - link "Vi Movies & TV" [ref=e218] [cursor=pointer]:
                  - /url: https://viapp.onelink.me/bSC3/viappmtv
              - listitem [ref=e219]:
                - link "Vi Hero Unlimited" [ref=e220] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/hero-unlimited-and-weekend-data-rollover
              - listitem [ref=e221]:
                - link "Vi WiFi Calling" [ref=e222] [cursor=pointer]:
                  - /url: https://www.myvi.in/vi-wifi-calling
              - listitem [ref=e223]:
                - link "International Roaming" [ref=e224] [cursor=pointer]:
                  - /url: https://www.myvi.in/international-roaming-packs
              - listitem [ref=e225]:
                - link "Callertunes" [ref=e226] [cursor=pointer]:
                  - /url: https://viapp.onelink.me/bSC3/viapp1
              - listitem [ref=e227]:
                - link "Order Prepaid SIM" [ref=e228] [cursor=pointer]:
                  - /url: https://www.myvi.in/new-connection/buy-prepaid-sim-connection-online
              - listitem [ref=e229]:
                - link "Order Postpaid SIM" [ref=e230] [cursor=pointer]:
                  - /url: https://www.myvi.in/new-connection/buy-postpaid-sim-connection-online
              - listitem [ref=e231]:
                - link "Order VIP Number" [ref=e232] [cursor=pointer]:
                  - /url: https://www.myvi.in/new-connection/choose-your-fancy-mobile-numbers-online
              - listitem [ref=e233]:
                - link "Port to Vi" [ref=e234] [cursor=pointer]:
                  - /url: https://www.myvi.in/new-connection/mobile-number-portability-mnp-online
              - listitem [ref=e235]:
                - link "Recharge for Self/Others" [ref=e236] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/online-mobile-recharge
              - listitem [ref=e237]:
                - link "Pay Bill for Self/Others" [ref=e238] [cursor=pointer]:
                  - /url: https://www.myvi.in/postpaid/quick-online-bill-payment
              - listitem [ref=e239]:
                - link "Cashback Offers" [ref=e240] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/recharge-cashback-offers
              - listitem [ref=e241]:
                - link "Help & Support" [ref=e242] [cursor=pointer]:
                  - /url: https://www.myvi.in/help-support/faqs
              - listitem [ref=e243]:
                - link "My Account" [ref=e244] [cursor=pointer]:
                  - /url: https://www.myvi.in/vi-app
              - listitem [ref=e245]:
                - link "Vi Shop" [ref=e246] [cursor=pointer]:
                  - /url: https://www.myvi.in/vi-shop-offers
              - listitem [ref=e247]:
                - link "Vi Prepaid Autopay" [ref=e248] [cursor=pointer]:
                  - /url: https://www.myvi.in/auto-pay-recharge
        - generic [ref=e249]:
          - paragraph [ref=e251]:
            - button "regulatory & quick access":
              - paragraph: regulatory & quick access
          - generic "regulatory & quick access" [ref=e252]:
            - list [ref=e254]:
              - listitem [ref=e255]:
                - link "Telemarketing Registration" [ref=e256] [cursor=pointer]:
                  - /url: /tele-marketing
              - listitem [ref=e257]:
                - link "Privacy Policy" [ref=e258] [cursor=pointer]:
                  - /url: /privacy-policy
              - listitem [ref=e259]:
                - link "Terms of Service" [ref=e260] [cursor=pointer]:
                  - /url: /terms-of-use
              - listitem [ref=e261]:
                - link "Notices" [ref=e262] [cursor=pointer]:
                  - /url: /regulatory-notices
              - listitem [ref=e263]:
                - link "Prepaid TRAI mandate" [ref=e264] [cursor=pointer]:
                  - /url: /prepaid/tariff
              - listitem [ref=e265]:
                - link "Postpaid TRAI mandate" [ref=e266] [cursor=pointer]:
                  - /url: /postpaid/tariff
              - listitem [ref=e267]:
                - link "Warning & Fraudulent" [ref=e268] [cursor=pointer]:
                  - /url: /about-us/warning-and-fraudulent
              - listitem [ref=e269]:
                - link "Security Awareness" [ref=e270] [cursor=pointer]:
                  - /url: /parental-control
              - listitem [ref=e271]:
                - link "DND Complaints" [ref=e272] [cursor=pointer]:
                  - /url: /dnd-complaints
              - listitem [ref=e273]:
                - link "DND Registration" [ref=e274] [cursor=pointer]:
                  - /url: https://www.myvi.in/dnd
              - listitem [ref=e275]:
                - link "Disaster Management" [ref=e276] [cursor=pointer]:
                  - /url: /content/dam/vodafoneideadigital/StaticPages/consumerimages/misc/Disaster_Management.pdf
              - listitem [ref=e277]:
                - link "Responsible Disclosure Policy" [ref=e278] [cursor=pointer]:
                  - /url: https://www.myvi.in/Responsible-Disclosure-Policy
              - listitem [ref=e279]:
                - link "Network Coverage" [ref=e280] [cursor=pointer]:
                  - /url: https://www.myvi.in/vicoverage/
              - listitem [ref=e281]:
                - link "Register for Online Refund" [ref=e282] [cursor=pointer]:
                  - /url: https://www.myvi.in/postpaid/neft-details-for-refund
              - listitem [ref=e283]:
                - link "Network Troubleshooting" [ref=e284] [cursor=pointer]:
                  - /url: https://www.myvi.in/help-support/basic-mobile-network-troubleshooting-steps
              - listitem [ref=e285]:
                - link "Block SIM Online" [ref=e286] [cursor=pointer]:
                  - /url: https://www.myvi.in/block-your-sim
              - listitem [ref=e287]:
                - link "UPI Recharge" [ref=e288] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/upi-recharge
              - listitem [ref=e289]:
                - link "Postpaid ISD Call Rates" [ref=e290] [cursor=pointer]:
                  - /url: https://www.myvi.in/Postpaid/isd-call-rates
              - listitem [ref=e291]:
                - link "Prepaid ISD Call Rates" [ref=e292] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid/isd-call-rates
              - listitem [ref=e293]:
                - link "Mobile Internet" [ref=e294] [cursor=pointer]:
                  - /url: https://www.myvi.in/mobile-internet
              - listitem [ref=e295]:
                - link "Sitemap" [ref=e296] [cursor=pointer]:
                  - /url: https://www.myvi.in/sitemap
              - listitem [ref=e297]:
                - link "VIBSL" [ref=e298] [cursor=pointer]:
                  - /url: https://www.myvi.in/vibsl
              - listitem [ref=e299]:
                - link "Terms & Conditions - Prepaid" [ref=e300] [cursor=pointer]:
                  - /url: https://www.myvi.in/prepaid-tnc
      - generic [ref=e304]:
        - paragraph [ref=e305]:
          - text: This website uses own third-party cookies.Find out more about usage in our
          - link "Privacy Policy" [ref=e306] [cursor=pointer]:
            - /url: https://www.myvi.in/privacy-policy
          - text: page. Copyright Reserved with Vodafone Idea Limited (formerly Idea Cellular Limited).
        - paragraph [ref=e307]: "Vodafone Idea Limited (Formerly Idea Cellular Limited), An Aditya Birla Group & Vodafone partnership, Suman Towers, Plot No.18, Sector 11, Gandhinagar – 382011, Gujarat.CIN L32100GJ1996PLC030976, T: +91-79 6671 4000, F: +91-79 2323 2251"
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