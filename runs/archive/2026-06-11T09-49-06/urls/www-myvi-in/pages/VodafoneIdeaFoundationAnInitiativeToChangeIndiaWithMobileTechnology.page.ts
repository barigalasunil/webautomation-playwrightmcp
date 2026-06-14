import { Page, Locator } from '@playwright/test';
import { BasePage } from '../../BasePage';

export class VodafoneIdeaFoundationAnInitiativeToChangeIndiaWithMobileTechnology extends BasePage {
  readonly url = "https://www.myvi.in/about-us/vodafoneidea-foundation";

  // All element locators are generated dynamically using locator strategies

  get headingAboutViFoundation(): Locator {
    return this.page.getByRole('heading', { name: "About Vi Foundation" });
  }

  get headingAnOverviewOfViFoundationSProgrammes(): Locator {
    return this.page.getByRole('heading', { name: "An overview of Vi Foundation’s programmes:" });
  }

  get headingSmartagri(): Locator {
    return this.page.getByRole('heading', { name: "SmartAgri:" });
  }

  get headingGurushala(): Locator {
    return this.page.getByRole('heading', { name: "Gurushala:" });
  }

  get headingEVidyaForBrighterFutures(): Locator {
    return this.page.getByRole('heading', { name: "e-Vidya for Brighter Futures:" });
  }

  get headingRoboticsLabs(): Locator {
    return this.page.getByRole('heading', { name: "Robotics Labs:" });
  }

  get headingLearningWithVodafoneIdea(): Locator {
    return this.page.getByRole('heading', { name: "Learning with Vodafone Idea :" });
  }

  get headingIotCentreOfExcellence(): Locator {
    return this.page.getByRole('heading', { name: "IoT Centre of Excellence:" });
  }

  get headingSkillForLife(): Locator {
    return this.page.getByRole('heading', { name: "Skill for Life:" });
  }

  get headingVoisForTechUniversityEngagementProgramme(): Locator {
    return this.page.getByRole('heading', { name: "VOIS for Tech: University Engagement Programme:" });
  }

  get headingJaaduGinniKa(): Locator {
    return this.page.getByRole('heading', { name: "Jaadu Ginni Ka:" });
  }

  get headingPlanetWellbeing(): Locator {
    return this.page.getByRole('heading', { name: "Planet & Wellbeing:" });
  }

  get headingConnectingForGood(): Locator {
    return this.page.getByRole('heading', { name: "Connecting for Good:" });
  }

  get headingKeySolutionsInclude(): Locator {
    return this.page.getByRole('heading', { name: "Key solutions include:" });
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

  get linkHttpsGurushalaCo(): Locator {
    return this.page.getByRole('link', { name: "https://gurushala.co/" });
  }

  get linkHttpsGurushalaCo1(): Locator {
    return this.page.getByRole('link', { name: "https://gurushala.co/" });
  }

  get linkWwwLearningwithvodafoneideaIn(): Locator {
    return this.page.getByRole('link', { name: "www.learningwithvodafoneidea.in" });
  }

  get linkWwwLearningwithvodafoneideaIn1(): Locator {
    return this.page.getByRole('link', { name: "www.learningwithvodafoneidea.in" });
  }

  get linkHttpsVoisfortechCom(): Locator {
    return this.page.getByRole('link', { name: "https://voisfortech.com/" });
  }

  get linkHttpsVoisfortechCom1(): Locator {
    return this.page.getByRole('link', { name: "https://voisfortech.com/" });
  }

  get linkWwwJaaduginnikaIn(): Locator {
    return this.page.getByRole('link', { name: "www.jaaduginnika.in" });
  }

  get linkHttpsVoisplanetCom(): Locator {
    return this.page.getByRole('link', { name: "https://voisplanet.com/" });
  }

  get linkHttpsVoisplanetCom1(): Locator {
    return this.page.getByRole('link', { name: "https://voisplanet.com/" });
  }

  get linkJaaduGinniKa(): Locator {
    return this.page.getByRole('link', { name: "Jaadu Ginni Ka" });
  }

  get linkConnectingForGood(): Locator {
    return this.page.getByRole('link', { name: "Connecting For Good" });
  }

  get linkScholarshipProgram(): Locator {
    return this.page.getByRole('link', { name: "Scholarship Program" });
  }

  get linkRsv(): Locator {
    return this.page.getByRole('link', { name: "RSV" });
  }

  get linkJigyasa(): Locator {
    return this.page.getByRole('link', { name: "Jigyasa" });
  }

  get linkSmartAgri(): Locator {
    return this.page.getByRole('link', { name: "Smart Agri" });
  }

  get linkHome(): Locator {
    return this.page.getByRole('link', { name: "Home" });
  }

  get linkAboutUs(): Locator {
    return this.page.getByRole('link', { name: "About Us" });
  }

  get linkVodafoneFoundation(): Locator {
    return this.page.getByRole('link', { name: "Vodafone Foundation" });
  }

  get link19(): Locator {
    return this.page.locator('a[href="https://www.facebook.com/ViOfficialFanWorld/"]');
  }

  get link20(): Locator {
    return this.page.locator('a[href="https://instagram.com/viofficialfanworld"]');
  }

  get link21(): Locator {
    return this.page.locator('a[href="https://twitter.com/ViCustomerCare"]');
  }

  get link22(): Locator {
    return this.page.locator('a[href="https://www.youtube.com/channel/UCHLTL1DEP_zelqLvUlYaV8Q"]');
  }

  get link23(): Locator {
    return this.page.locator('a[href="https://www.linkedin.com/company/vodafone-idea-limited"]');
  }

  get linkAboutUs1(): Locator {
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

  get link110(): Locator {
    return this.page.locator('a[href="https://www.facebook.com/ViOfficialFanWorld/"]');
  }

  get link111(): Locator {
    return this.page.locator('a[href="https://instagram.com/viofficialfanworld"]');
  }

  get link112(): Locator {
    return this.page.locator('a[href="https://twitter.com/ViCustomerCare"]');
  }

  get link113(): Locator {
    return this.page.locator('a[href="https://www.youtube.com/channel/UCHLTL1DEP_zelqLvUlYaV8Q"]');
  }

  get link114(): Locator {
    return this.page.locator('a[href="https://www.linkedin.com/company/vodafone-idea-limited"]');
  }

  get linkPrivacyPolicy1(): Locator {
    return this.page.getByRole('link', { name: "Privacy Policy" });
  }

  get menuPrepaidpostpaidnewConnectioninternationalRoaming5gottsMor(): Locator {
    return this.page.getByRole('navigation', { name: "PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service" });
  }

  get menuBusinessinvestorssignIn(): Locator {
    return this.page.getByRole('navigation', { name: "BusinessInvestorsSign in" });
  }

  get menuHomeaboutUsvodafoneFoundation(): Locator {
    return this.page.getByRole('navigation', { name: "HomeAbout UsVodafone Foundation" });
  }

  constructor(page: Page) {
    super(page);
  }
}
