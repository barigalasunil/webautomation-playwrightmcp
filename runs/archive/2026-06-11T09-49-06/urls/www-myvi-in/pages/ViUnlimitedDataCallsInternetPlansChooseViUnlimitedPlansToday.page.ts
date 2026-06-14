import { Page, Locator } from '@playwright/test';
import { BasePage } from '../../BasePage';

export class ViUnlimitedDataCallsInternetPlansChooseViUnlimitedPlansToday extends BasePage {
  readonly url = "https://www.myvi.in/prepaid/unlimited-calls-and-data-plans";

  // All element locators are generated dynamically using locator strategies

  get headingUnlimitedDataCallsInternetPlans(): Locator {
    return this.page.getByRole('heading', { name: "Unlimited Data, Calls & Internet Plans" });
  }

  get headingUnlimitedCallingPlansDataFaqs(): Locator {
    return this.page.getByRole('heading', { name: "Unlimited Calling Plans & Data FAQs" });
  }

  get headingUnlimitedSuperFastDataPlansCallingPlans(): Locator {
    return this.page.getByRole('heading', { name: "unlimited super-fast Data plans & calling plans" });
  }

  get headingViUnlimited4gDataPlanBenefits(): Locator {
    return this.page.getByRole('heading', { name: "Vi Unlimited 4G Data Plan benefits:" });
  }

  get headingViUnlimitedCallingPlanBenefits(): Locator {
    return this.page.getByRole('heading', { name: "Vi Unlimited Calling Plan benefits:" });
  }

  get headingThesePlansArePowerPackedWithExceptionalEntertainment(): Locator {
    return this.page.getByRole('heading', { name: "These plans are power-packed with exceptional entertainment benefits such as:" });
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

  get linkUnlimitedCallsDataPlans(): Locator {
    return this.page.getByRole('link', { name: "Unlimited Calls & Data Plans" });
  }

  get linkChange(): Locator {
    return this.page.getByRole('link', { name: "Change" });
  }

  get linkRecharge(): Locator {
    return this.page.getByRole('link', { name: "recharge" });
  }

  get linkDataPlans(): Locator {
    return this.page.getByRole('link', { name: "Data plans" });
  }

  get linkVi1gbPerDayPlans(): Locator {
    return this.page.getByRole('link', { name: "Vi 1GB Per Day Plans" });
  }

  get link15gbPerDayPlans(): Locator {
    return this.page.getByRole('link', { name: "1.5GB Per Day Plans" });
  }

  get link2gbPerDayPlans(): Locator {
    return this.page.getByRole('link', { name: "2GB Per Day Plans" });
  }

  get link3gbPerDayPlans(): Locator {
    return this.page.getByRole('link', { name: "3GB Per Day Plans" });
  }

  get link4gbPerDayPlans(): Locator {
    return this.page.getByRole('link', { name: "4GB Per Day Plans" });
  }

  get linkMobileRechargeCashbackOffers(): Locator {
    return this.page.getByRole('link', { name: "Mobile Recharge Cashback Offers" });
  }

  get link28DaysRechargePlan(): Locator {
    return this.page.getByRole('link', { name: "28 Days Recharge Plan" });
  }

  get link56DaysRechargePlan(): Locator {
    return this.page.getByRole('link', { name: "56 Days Recharge Plan" });
  }

  get link365DaysRechargePlan(): Locator {
    return this.page.getByRole('link', { name: "365 Days Recharge Plan" });
  }

  get linkTalktimePlans(): Locator {
    return this.page.getByRole('link', { name: "talktime plans" });
  }

  get linkWeekendDataRollover(): Locator {
    return this.page.getByRole('link', { name: "Weekend data rollover" });
  }

  get linkCallingPlans(): Locator {
    return this.page.getByRole('link', { name: "calling plans" });
  }

  get linkTruly(): Locator {
    return this.page.getByRole('link', { name: "truly" });
  }

  get linkViMoviesTvApp(): Locator {
    return this.page.getByRole('link', { name: "Vi Movies & TV App" });
  }

  get linkViApp(): Locator {
    return this.page.getByRole('link', { name: "Vi App" });
  }

  get linkJiohotstar(): Locator {
    return this.page.getByRole('link', { name: "JioHotstar" });
  }

  get linkSonyliv(): Locator {
    return this.page.getByRole('link', { name: "SonyLIV" });
  }

  get linkPrepaidPlans(): Locator {
    return this.page.getByRole('link', { name: "prepaid plans" });
  }

  get linkUnlimitedData(): Locator {
    return this.page.getByRole('link', { name: "unlimited data" });
  }

  get linkBalance(): Locator {
    return this.page.getByRole('link', { name: "balance." });
  }

  get linkSms(): Locator {
    return this.page.getByRole('link', { name: "SMS" });
  }

  get link28(): Locator {
    return this.page.locator('a[href="https://www.facebook.com/ViOfficialFanWorld/"]');
  }

  get link29(): Locator {
    return this.page.locator('a[href="https://instagram.com/viofficialfanworld"]');
  }

  get link30(): Locator {
    return this.page.locator('a[href="https://twitter.com/ViCustomerCare"]');
  }

  get link31(): Locator {
    return this.page.locator('a[href="https://www.youtube.com/channel/UCHLTL1DEP_zelqLvUlYaV8Q"]');
  }

  get link32(): Locator {
    return this.page.locator('a[href="https://www.linkedin.com/company/vodafone-idea-limited"]');
  }

  get linkAboutUs(): Locator {
    return this.page.getByRole('link', { name: "About Us" });
  }

  get linkVodafoneIdeaCorp(): Locator {
    return this.page.getByRole('link', { name: "Vodafone Idea Corp" });
  }

  get linkViFoundation(): Locator {
    return this.page.getByRole('link', { name: "Vi Foundation" });
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

  get linkViApp1(): Locator {
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

  get link5g(): Locator {
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

  get linkTalktimePlans1(): Locator {
    return this.page.getByRole('link', { name: "Talktime Plans" });
  }

  get linkDataPlans1(): Locator {
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

  get link119(): Locator {
    return this.page.locator('a[href="https://www.facebook.com/ViOfficialFanWorld/"]');
  }

  get link120(): Locator {
    return this.page.locator('a[href="https://instagram.com/viofficialfanworld"]');
  }

  get link121(): Locator {
    return this.page.locator('a[href="https://twitter.com/ViCustomerCare"]');
  }

  get link122(): Locator {
    return this.page.locator('a[href="https://www.youtube.com/channel/UCHLTL1DEP_zelqLvUlYaV8Q"]');
  }

  get link123(): Locator {
    return this.page.locator('a[href="https://www.linkedin.com/company/vodafone-idea-limited"]');
  }

  get linkPrivacyPolicy1(): Locator {
    return this.page.getByRole('link', { name: "Privacy Policy" });
  }

  get linkRechargeNow(): Locator {
    return this.page.getByRole('link', { name: "recharge now" });
  }

  get link126(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/new-connection/user-details"]');
  }

  get link127(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/prepaid/target=%22_blank%22"]');
  }

  get link128(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/prepaid/target=%22_blank%22"]');
  }

  get link129(): Locator {
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

  get buttonBuy25(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy26(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy27(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy28(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy29(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy30(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy31(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy32(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy33(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy34(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy35(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy36(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy37(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy38(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy39(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy40(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy41(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy42(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy43(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonSeeMore(): Locator {
    return this.page.getByRole('button', { name: "See More" });
  }

  get inputParamdetails(): Locator {
    return this.page.locator('input[name="paramDetails"]');
  }

  get form0(): Locator {
    return this.page.locator('form#pgForm');
  }

  get menuPrepaidpostpaidnewConnectioninternationalRoaming5gottsMor(): Locator {
    return this.page.getByRole('navigation', { name: "PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service" });
  }

  get menuBusinessinvestorssignIn(): Locator {
    return this.page.getByRole('navigation', { name: "BusinessInvestorsSign in" });
  }

  get menuHomeprepaidunlimitedCallsDataPlans(): Locator {
    return this.page.getByRole('navigation', { name: "HomeprepaidUnlimited Calls & Data Plans" });
  }

  constructor(page: Page) {
    super(page);
  }
}
