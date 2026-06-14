import { Page, Locator } from '@playwright/test';
import { BasePage } from '../../BasePage';

export class ViDataPacksMobileDataRechargePlansViIndia extends BasePage {
  readonly url = "https://www.myvi.in/prepaid/mobile-data-packs";

  // All element locators are generated dynamically using locator strategies

  get headingPrepaidMobileDataPacksPlans(): Locator {
    return this.page.getByRole('heading', { name: "Prepaid Mobile Data Packs & Plans" });
  }

  get headingFeaturedDataPacksPlans(): Locator {
    return this.page.getByRole('heading', { name: "Featured Data Packs & Plans" });
  }

  get headingFrequentlyAskedQuestionsAboutViPrepaidDataPacks(): Locator {
    return this.page.getByRole('heading', { name: "Frequently Asked Questions About Vi Prepaid Data Packs" });
  }

  get headingDataPacks(): Locator {
    return this.page.getByRole('heading', { name: "Data packs" });
  }

  get headingVodafoneIdeaLimited(): Locator {
    return this.page.getByRole('heading', { name: "Vodafone Idea Limited" });
  }

  get headingAboutVi(): Locator {
    return this.page.getByRole('heading', { name: "about Vi" });
  }

  get headingMoreFromVi(): Locator {
    return this.page.getByRole('heading', { name: "more from Vi" });
  }

  get headingExploreOnViApp(): Locator {
    return this.page.getByRole('heading', { name: "explore on Vi app" });
  }

  get headingRegulatoryQuickAccess(): Locator {
    return this.page.getByRole('heading', { name: "regulatory & quick access" });
  }

  get link0(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/"]');
  }

  get linkHome(): Locator {
    return this.page.getByRole('link', { name: "Home" });
  }

  get linkPrepaid(): Locator {
    return this.page.getByRole('link', { name: "prepaid" });
  }

  get linkDataPacks(): Locator {
    return this.page.getByRole('link', { name: "Data Packs" });
  }

  get linkChange(): Locator {
    return this.page.getByRole('link', { name: "Change" });
  }

  get linkDataRecharge(): Locator {
    return this.page.getByRole('link', { name: "data recharge" });
  }

  get linkJiohotstar(): Locator {
    return this.page.getByRole('link', { name: "JioHotstar" });
  }

  get linkMobile(): Locator {
    return this.page.getByRole('link', { name: "Mobile" });
  }

  get link5g(): Locator {
    return this.page.getByRole('link', { name: "5G" });
  }

  get link1GbPerDayPlans(): Locator {
    return this.page.getByRole('link', { name: "1 GB Per Day Plans" });
  }

  get link15GbPerDayPlans(): Locator {
    return this.page.getByRole('link', { name: "1.5 GB Per Day Plans" });
  }

  get link2GbPerDayPlans(): Locator {
    return this.page.getByRole('link', { name: "2 GB Per Day Plans" });
  }

  get link3GbPerDayPlans(): Locator {
    return this.page.getByRole('link', { name: "3 GB Per Day Plans" });
  }

  get link4GbPerDayPlans(): Locator {
    return this.page.getByRole('link', { name: "4 GB Per Day Plans" });
  }

  get linkWorkFromHomePacks(): Locator {
    return this.page.getByRole('link', { name: "Work From Home Packs" });
  }

  get linkRechargeCashbackOffers(): Locator {
    return this.page.getByRole('link', { name: "Recharge Cashback Offers" });
  }

  get linkDataPacks1(): Locator {
    return this.page.getByRole('link', { name: "data packs" });
  }

  get linkUnlimited4gAnd5gData(): Locator {
    return this.page.getByRole('link', { name: "unlimited 4G and 5G data" });
  }

  get link18(): Locator {
    return this.page.locator('a[href="https://www.facebook.com/ViOfficialFanWorld/"]');
  }

  get link19(): Locator {
    return this.page.locator('a[href="https://instagram.com/viofficialfanworld"]');
  }

  get link20(): Locator {
    return this.page.locator('a[href="https://twitter.com/ViCustomerCare"]');
  }

  get link21(): Locator {
    return this.page.locator('a[href="https://www.youtube.com/channel/UCHLTL1DEP_zelqLvUlYaV8Q"]');
  }

  get link22(): Locator {
    return this.page.locator('a[href="https://www.linkedin.com/company/vodafone-idea-limited"]');
  }

  get linkAboutUs(): Locator {
    return this.page.getByRole('link', { name: "About Us" });
  }

  get linkVodafoneIdeaCorp(): Locator {
    return this.page.getByRole('link', { name: "Vodafone Idea Corp" });
  }

  get linkVodafoneIdeaFoundation(): Locator {
    return this.page.getByRole('link', { name: "Vodafone Idea Foundation" });
  }

  get linkVodafoneGroup(): Locator {
    return this.page.getByRole('link', { name: "Vodafone Group" });
  }

  get linkAdityaBirlaGroup(): Locator {
    return this.page.getByRole('link', { name: "Aditya Birla Group" });
  }

  get linkInvestorRelations(): Locator {
    return this.page.getByRole('link', { name: "Investor Relations" });
  }

  get linkNewsMedia(): Locator {
    return this.page.getByRole('link', { name: "News & Media" });
  }

  get linkCareer(): Locator {
    return this.page.getByRole('link', { name: "Career" });
  }

  get linkViApp(): Locator {
    return this.page.getByRole('link', { name: "Vi App" });
  }

  get linkViStoresNearMe(): Locator {
    return this.page.getByRole('link', { name: "Vi Stores Near Me" });
  }

  get linkViBusiness(): Locator {
    return this.page.getByRole('link', { name: "Vi Business" });
  }

  get linkHomeBroadband(): Locator {
    return this.page.getByRole('link', { name: "Home Broadband" });
  }

  get linkGiganet(): Locator {
    return this.page.getByRole('link', { name: "GIGAnet" });
  }

  get linkViVolte(): Locator {
    return this.page.getByRole('link', { name: "Vi VoLTE" });
  }

  get linkGoGreen(): Locator {
    return this.page.getByRole('link', { name: "Go Green" });
  }

  get linkEsim(): Locator {
    return this.page.getByRole('link', { name: "eSIM" });
  }

  get linkWifiCalling(): Locator {
    return this.page.getByRole('link', { name: "WiFi Calling" });
  }

  get link5g1(): Locator {
    return this.page.getByRole('link', { name: "5G" });
  }

  get linkBlog(): Locator {
    return this.page.getByRole('link', { name: "Blog" });
  }

  get linkPostpaidConnection(): Locator {
    return this.page.getByRole('link', { name: "Postpaid Connection" });
  }

  get linkPrepaidConnection(): Locator {
    return this.page.getByRole('link', { name: "Prepaid Connection" });
  }

  get linkPortNumberToViMnp(): Locator {
    return this.page.getByRole('link', { name: "Port Number to Vi / MNP" });
  }

  get linkFreeSimDelivery(): Locator {
    return this.page.getByRole('link', { name: "Free SIM Delivery" });
  }

  get linkTrackYourSimDelivery(): Locator {
    return this.page.getByRole('link', { name: "Track your SIM Delivery" });
  }

  get linkFancyNumber(): Locator {
    return this.page.getByRole('link', { name: "Fancy Number" });
  }

  get linkIndividualPlans(): Locator {
    return this.page.getByRole('link', { name: "Individual Plans" });
  }

  get linkFamilyPlans(): Locator {
    return this.page.getByRole('link', { name: "Family Plans" });
  }

  get linkPrepaidToPostpaid(): Locator {
    return this.page.getByRole('link', { name: "Prepaid to Postpaid" });
  }

  get linkBestPostpaidPlans(): Locator {
    return this.page.getByRole('link', { name: "Best Postpaid Plans" });
  }

  get linkBestPrepaidPlans(): Locator {
    return this.page.getByRole('link', { name: "Best Prepaid Plans" });
  }

  get linkHeroUnlimitedPlans(): Locator {
    return this.page.getByRole('link', { name: "Hero Unlimited Plans" });
  }

  get linkUnlimitedPlans(): Locator {
    return this.page.getByRole('link', { name: "Unlimited Plans" });
  }

  get linkTalktimePlans(): Locator {
    return this.page.getByRole('link', { name: "Talktime Plans" });
  }

  get linkDataPlans(): Locator {
    return this.page.getByRole('link', { name: "Data Plans" });
  }

  get linkSmsPacks(): Locator {
    return this.page.getByRole('link', { name: "SMS Packs" });
  }

  get linkCallerTunesPacks(): Locator {
    return this.page.getByRole('link', { name: "Caller Tunes Packs" });
  }

  get linkValueAddedServices(): Locator {
    return this.page.getByRole('link', { name: "Value Added Services" });
  }

  get linkServiceValidityPlans(): Locator {
    return this.page.getByRole('link', { name: "Service Validity Plans" });
  }

  get linkJiohotstarPlans(): Locator {
    return this.page.getByRole('link', { name: "JioHotstar Plans" });
  }

  get linkAmazonPrimePlans(): Locator {
    return this.page.getByRole('link', { name: "Amazon Prime Plans" });
  }

  get linkSonyLivOffers(): Locator {
    return this.page.getByRole('link', { name: "Sony LIV offers" });
  }

  get linkOnlineRecharge(): Locator {
    return this.page.getByRole('link', { name: "Online Recharge" });
  }

  get linkPostpaidBillPayment(): Locator {
    return this.page.getByRole('link', { name: "Postpaid Bill Payment" });
  }

  get linkViShopSellerPortal(): Locator {
    return this.page.getByRole('link', { name: "Vi Shop - Seller Portal" });
  }

  get linkViVideoVault(): Locator {
    return this.page.getByRole('link', { name: "Vi Video Vault" });
  }

  get linkViGames(): Locator {
    return this.page.getByRole('link', { name: "Vi Games" });
  }

  get linkViMoviesTv(): Locator {
    return this.page.getByRole('link', { name: "Vi Movies & TV" });
  }

  get linkViServices(): Locator {
    return this.page.getByRole('link', { name: "Vi Services" });
  }

  get linkViHeroUnlimited(): Locator {
    return this.page.getByRole('link', { name: "Vi Hero Unlimited" });
  }

  get linkViWifiCalling(): Locator {
    return this.page.getByRole('link', { name: "Vi WiFi Calling" });
  }

  get linkInternationalRoaming(): Locator {
    return this.page.getByRole('link', { name: "International Roaming" });
  }

  get linkCallertunes(): Locator {
    return this.page.getByRole('link', { name: "Callertunes" });
  }

  get linkOrderPrepaidSim(): Locator {
    return this.page.getByRole('link', { name: "Order Prepaid SIM" });
  }

  get linkOrderPostpaidSim(): Locator {
    return this.page.getByRole('link', { name: "Order Postpaid SIM" });
  }

  get linkOrderVipNumber(): Locator {
    return this.page.getByRole('link', { name: "Order VIP Number" });
  }

  get linkPortToVi(): Locator {
    return this.page.getByRole('link', { name: "Port to Vi" });
  }

  get linkRechargeForSelfOthers(): Locator {
    return this.page.getByRole('link', { name: "Recharge for Self/Others" });
  }

  get linkPayBillForSelfOthers(): Locator {
    return this.page.getByRole('link', { name: "Pay Bill for Self/Others" });
  }

  get linkCashbackOffers(): Locator {
    return this.page.getByRole('link', { name: "Cashback Offers" });
  }

  get linkHelpSupport(): Locator {
    return this.page.getByRole('link', { name: "Help & Support" });
  }

  get linkMyAccount(): Locator {
    return this.page.getByRole('link', { name: "My Account" });
  }

  get linkViShop(): Locator {
    return this.page.getByRole('link', { name: "Vi Shop" });
  }

  get linkViPrepaidAutopay(): Locator {
    return this.page.getByRole('link', { name: "Vi Prepaid Autopay" });
  }

  get linkTelemarketingRegistration(): Locator {
    return this.page.getByRole('link', { name: "Telemarketing Registration" });
  }

  get linkPrivacyPolicy(): Locator {
    return this.page.getByRole('link', { name: "Privacy Policy" });
  }

  get linkTermsOfService(): Locator {
    return this.page.getByRole('link', { name: "Terms of Service" });
  }

  get linkNotices(): Locator {
    return this.page.getByRole('link', { name: "Notices" });
  }

  get linkPrepaidTraiMandate(): Locator {
    return this.page.getByRole('link', { name: "Prepaid TRAI mandate" });
  }

  get linkPostpaidTraiMandate(): Locator {
    return this.page.getByRole('link', { name: "Postpaid TRAI mandate" });
  }

  get linkWarningFraudulent(): Locator {
    return this.page.getByRole('link', { name: "Warning & Fraudulent" });
  }

  get linkSecurityAwareness(): Locator {
    return this.page.getByRole('link', { name: "Security Awareness" });
  }

  get linkDndComplaints(): Locator {
    return this.page.getByRole('link', { name: "DND Complaints" });
  }

  get linkDndRegistration(): Locator {
    return this.page.getByRole('link', { name: "DND Registration" });
  }

  get linkDisasterManagement(): Locator {
    return this.page.getByRole('link', { name: "Disaster Management" });
  }

  get linkResponsibleDisclosurePolicy(): Locator {
    return this.page.getByRole('link', { name: "Responsible Disclosure Policy" });
  }

  get linkNetworkCoverage(): Locator {
    return this.page.getByRole('link', { name: "Network Coverage" });
  }

  get linkRegisterForOnlineRefund(): Locator {
    return this.page.getByRole('link', { name: "Register for Online Refund" });
  }

  get linkNetworkTroubleshooting(): Locator {
    return this.page.getByRole('link', { name: "Network Troubleshooting" });
  }

  get linkBlockSimOnline(): Locator {
    return this.page.getByRole('link', { name: "Block SIM Online" });
  }

  get linkUpiRecharge(): Locator {
    return this.page.getByRole('link', { name: "UPI Recharge" });
  }

  get linkPostpaidIsdCallRates(): Locator {
    return this.page.getByRole('link', { name: "Postpaid ISD Call Rates" });
  }

  get linkPrepaidIsdCallRates(): Locator {
    return this.page.getByRole('link', { name: "Prepaid ISD Call Rates" });
  }

  get linkMobileInternet(): Locator {
    return this.page.getByRole('link', { name: "Mobile Internet" });
  }

  get linkSitemap(): Locator {
    return this.page.getByRole('link', { name: "Sitemap" });
  }

  get linkVibsl(): Locator {
    return this.page.getByRole('link', { name: "VIBSL" });
  }

  get linkTermsConditionsPrepaid(): Locator {
    return this.page.getByRole('link', { name: "Terms & Conditions - Prepaid" });
  }

  get link109(): Locator {
    return this.page.locator('a[href="https://www.facebook.com/ViOfficialFanWorld/"]');
  }

  get link110(): Locator {
    return this.page.locator('a[href="https://instagram.com/viofficialfanworld"]');
  }

  get link111(): Locator {
    return this.page.locator('a[href="https://twitter.com/ViCustomerCare"]');
  }

  get link112(): Locator {
    return this.page.locator('a[href="https://www.youtube.com/channel/UCHLTL1DEP_zelqLvUlYaV8Q"]');
  }

  get link113(): Locator {
    return this.page.locator('a[href="https://www.linkedin.com/company/vodafone-idea-limited"]');
  }

  get linkPrivacyPolicy1(): Locator {
    return this.page.getByRole('link', { name: "Privacy Policy" });
  }

  get linkRechargeNow(): Locator {
    return this.page.getByRole('link', { name: "recharge now" });
  }

  get link116(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/new-connection/user-details"]');
  }

  get link117(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/prepaid/target=%22_blank%22"]');
  }

  get link118(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/prepaid/target=%22_blank%22"]');
  }

  get link119(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/prepaid/target=%22_blank%22"]');
  }

  get buttonBuy(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy1(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy2(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy3(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy4(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy5(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy6(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy7(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy8(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy9(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy10(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy11(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy12(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy13(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy14(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy15(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy16(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy17(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy18(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy19(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy20(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy21(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy22(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy23(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy24(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonSeeMore(): Locator {
    return this.page.getByRole('button', { name: "See More" });
  }

  get inputParamdetails(): Locator {
    return this.page.locator('input[name="paramDetails"]');
  }

  get form0(): Locator {
    return this.page.locator('form');
  }

  get menuPrepaidpostpaidnewConnectioninternationalRoaming5gottsMor(): Locator {
    return this.page.getByRole('navigation', { name: "PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service" });
  }

  get menuBusinessinvestorssignIn(): Locator {
    return this.page.getByRole('navigation', { name: "BusinessInvestorsSign in" });
  }

  get menuHomeprepaiddataPacks(): Locator {
    return this.page.getByRole('navigation', { name: "HomeprepaidData Packs" });
  }

  constructor(page: Page) {
    super(page);
  }
}
