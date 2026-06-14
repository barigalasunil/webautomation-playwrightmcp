import { Page, Locator } from '@playwright/test';
import { BasePage } from '../../BasePage';

export class VodafoneIdeaNewsViLatestViNewsPressReleasesAmpUpdates extends BasePage {
  readonly url = "https://www.myvi.in/vodafone-idea/press-releases";

  // All element locators are generated dynamically using locator strategies

  get headingViVodafoneIdeaMediaReleases(): Locator {
    return this.page.getByRole('heading', { name: "Vi (Vodafone Idea) Media Releases" });
  }

  get headingVodafoneIdeaViNewsPressReleases(): Locator {
    return this.page.getByRole('heading', { name: "Vodafone Idea (Vi) News & Press Releases" });
  }

  get headingViLaunches5gServicesInCoimbatore(): Locator {
    return this.page.getByRole('heading', { name: "Vi launches 5G services in Coimbatore" });
  }

  get headingViLaunches5gServicesInBhopal(): Locator {
    return this.page.getByRole('heading', { name: "Vi launches 5G services in Bhopal" });
  }

  get headingViExpands5gFootprintInPunjab(): Locator {
    return this.page.getByRole('heading', { name: "Vi expands 5G footprint in Punjab" });
  }

  get headingViMetaPartnerToDeliverSeamlessVerificationForViUser(): Locator {
    return this.page.getByRole('heading', { name: "Vi & Meta Partner to Deliver Seamless Verification for Vi Users" });
  }

  get headingViExpands5gFootprintInKeralaLaunchingServicesIn33M(): Locator {
    return this.page.getByRole('heading', { name: "Vi expands 5G footprint in Kerala; launching services in 33 more cities" });
  }

  get headingVi5gExpansionInGujarat(): Locator {
    return this.page.getByRole('heading', { name: "Vi 5G expansion in Gujarat" });
  }

  get headingViExpands5gFootprintInWestBengal(): Locator {
    return this.page.getByRole('heading', { name: "Vi expands 5G footprint in West Bengal" });
  }

  get headingViLaunches5gServicesInGwalior(): Locator {
    return this.page.getByRole('heading', { name: "Vi launches 5G services in Gwalior" });
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

  get linkPersonal(): Locator {
    return this.page.getByRole('link', { name: "Personal" });
  }

  get linkBusiness(): Locator {
    return this.page.getByRole('link', { name: "Business" });
  }

  get link3(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/"]');
  }

  get linkCompanyOverview(): Locator {
    return this.page.getByRole('link', { name: "Company Overview" });
  }

  get linkCsr(): Locator {
    return this.page.getByRole('link', { name: "CSR" });
  }

  get linkInvestors(): Locator {
    return this.page.getByRole('link', { name: "Investors" });
  }

  get linkMediaCenter(): Locator {
    return this.page.getByRole('link', { name: "Media Center" });
  }

  get linkCareers(): Locator {
    return this.page.getByRole('link', { name: "Careers" });
  }

  get linkPersonal1(): Locator {
    return this.page.getByRole('link', { name: "Personal" });
  }

  get linkBusiness1(): Locator {
    return this.page.getByRole('link', { name: "Business" });
  }

  get linkVertikaYadavVodafoneideaCom(): Locator {
    return this.page.getByRole('link', { name: "vertika.yadav@vodafoneidea.com" });
  }

  get linkDownload(): Locator {
    return this.page.getByRole('link', { name: "download" });
  }

  get linkDownload1(): Locator {
    return this.page.getByRole('link', { name: "Download" });
  }

  get linkDownload2(): Locator {
    return this.page.getByRole('link', { name: "Download" });
  }

  get linkDownload3(): Locator {
    return this.page.getByRole('link', { name: "Download" });
  }

  get linkDownload4(): Locator {
    return this.page.getByRole('link', { name: "Download" });
  }

  get linkDownload5(): Locator {
    return this.page.getByRole('link', { name: "Download" });
  }

  get linkDownload6(): Locator {
    return this.page.getByRole('link', { name: "Download" });
  }

  get linkDownload7(): Locator {
    return this.page.getByRole('link', { name: "Download" });
  }

  get linkDownload8(): Locator {
    return this.page.getByRole('link', { name: "Download" });
  }

  get linkVi(): Locator {
    return this.page.getByRole('link', { name: "Vi" });
  }

  get linkHome(): Locator {
    return this.page.getByRole('link', { name: "Home" });
  }

  get linkMedia(): Locator {
    return this.page.getByRole('link', { name: "Media" });
  }

  get linkViVodafoneIdeaNewsPressReleases(): Locator {
    return this.page.getByRole('link', { name: "Vi (Vodafone Idea) News & Press Releases" });
  }

  get link25(): Locator {
    return this.page.locator('a[href="https://www.facebook.com/ViOfficialFanWorld/"]');
  }

  get link26(): Locator {
    return this.page.locator('a[href="https://instagram.com/viofficialfanworld"]');
  }

  get link27(): Locator {
    return this.page.locator('a[href="https://twitter.com/ViCustomerCare"]');
  }

  get link28(): Locator {
    return this.page.locator('a[href="https://www.youtube.com/channel/UCHLTL1DEP_zelqLvUlYaV8Q"]');
  }

  get link29(): Locator {
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

  get link115(): Locator {
    return this.page.locator('a[href="https://www.facebook.com/ViOfficialFanWorld/"]');
  }

  get link116(): Locator {
    return this.page.locator('a[href="https://instagram.com/viofficialfanworld"]');
  }

  get link117(): Locator {
    return this.page.locator('a[href="https://twitter.com/ViCustomerCare"]');
  }

  get link118(): Locator {
    return this.page.locator('a[href="https://www.youtube.com/channel/UCHLTL1DEP_zelqLvUlYaV8Q"]');
  }

  get link119(): Locator {
    return this.page.locator('a[href="https://www.linkedin.com/company/vodafone-idea-limited"]');
  }

  get linkPrivacyPolicy1(): Locator {
    return this.page.getByRole('link', { name: "Privacy Policy" });
  }

  get button(): Locator {
    return this.page.getByRole('button', { name: "«" });
  }

  get button1(): Locator {
    return this.page.getByRole('button', { name: "‹" });
  }

  get button11(): Locator {
    return this.page.getByRole('button', { name: "1" });
  }

  get button2(): Locator {
    return this.page.getByRole('button', { name: "2" });
  }

  get button21(): Locator {
    return this.page.getByRole('button', { name: "›" });
  }

  get button3(): Locator {
    return this.page.getByRole('button', { name: "»" });
  }

  get inputSearchByTopic(): Locator {
    return this.page.getByPlaceholder("search by topic");
  }

  get menuPrepaidpostpaidnewConnectioninternationalRoaming5gottsMor(): Locator {
    return this.page.getByRole('navigation', { name: "PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service" });
  }

  get menuBusinessinvestorssignIn(): Locator {
    return this.page.getByRole('navigation', { name: "BusinessInvestorsSign in" });
  }

  get menuHomemediaviVodafoneIdeaNewsPressReleases(): Locator {
    return this.page.getByRole('navigation', { name: "HomeMediaVi (Vodafone Idea) News & Press Releases" });
  }

  constructor(page: Page) {
    super(page);
  }
}
