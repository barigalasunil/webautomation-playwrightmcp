import { Page, Locator } from '@playwright/test';
import { BasePage } from '../../BasePage';

export class ViPostpaidPlansWithUnlimitedCallsDataViIndia extends BasePage {
  readonly url = "https://www.myvi.in/postpaid/vi-postpaid-plans";

  // All element locators are generated dynamically using locator strategies

  get headingMumbai(): Locator {
    return this.page.getByRole('heading', { name: "Mumbai" });
  }

  get headingBestPostpaidPlans(): Locator {
    return this.page.getByRole('heading', { name: "Best Postpaid Plans" });
  }

  get headingViPostpaidPlansFaqS(): Locator {
    return this.page.getByRole('heading', { name: "Vi Postpaid Plans FAQ’s" });
  }

  get headingWhatIsAPostpaidPlan(): Locator {
    return this.page.getByRole('heading', { name: "What is a postpaid plan?" });
  }

  get headingHowToBuyPostpaidPlans(): Locator {
    return this.page.getByRole('heading', { name: "How to buy postpaid plans?" });
  }

  get headingWhatBenefitsDoIGetWithViMaxPostpaidPlans(): Locator {
    return this.page.getByRole('heading', { name: "What benefits do I get with Vi Max postpaid Plans?" });
  }

  get headingWhichPostpaidPlanIsBestInViMax(): Locator {
    return this.page.getByRole('heading', { name: "Which Postpaid Plan is best in Vi Max?" });
  }

  get headingWhatAreTheIndividualPostpaidPlansAvailableWithViMax(): Locator {
    return this.page.getByRole('heading', { name: "What are the individual postpaid plans available with Vi Max Postpaid?" });
  }

  get headingWhatHappensToMyOngoingLifestyleAndEntertainmentBenef(): Locator {
    return this.page.getByRole('heading', { name: "What happens to my ongoing lifestyle and entertainment benefits when I change my" });
  }

  get headingIsThePostpaidSimDeliveredForFreeAtMyDoorstep(): Locator {
    return this.page.getByRole('heading', { name: "Is the postpaid SIM delivered for free at my doorstep?" });
  }

  get headingHowIsTheBillingCycleCalculatedOnMyPostpaidPlans(): Locator {
    return this.page.getByRole('heading', { name: "How is the billing cycle calculated on my postpaid plans?" });
  }

  get headingWhyShouldIGoForAViMaxPostpaidPlan(): Locator {
    return this.page.getByRole('heading', { name: "Why should I go for a Vi Max Postpaid Plan?" });
  }

  get headingWhatIsTheMinimumLowestPostpaidPlanAvailableWithVi(): Locator {
    return this.page.getByRole('heading', { name: "What is the minimum/lowest postpaid plan available with Vi?" });
  }

  get headingHowMuchDataDoIGetWithViPostpaidUnlimitedDataPlans(): Locator {
    return this.page.getByRole('heading', { name: "How much data do I get with Vi Postpaid unlimited data plans?" });
  }

  get headingWhatAreTheDocumentsRequiredToGetANewPostpaidPlan(): Locator {
    return this.page.getByRole('heading', { name: "What are the documents required to get a new postpaid plan?" });
  }

  get headingIsHomeDeliveryOfViPostpaidSimFreeAndHowLongDoesI(): Locator {
    return this.page.getByRole('heading', { name: "Is home delivery of Vi postpaid SIM free and how long does it take?" });
  }

  get headingWhatBenefitsAreIncludedWithViMaxPostpaidPlans(): Locator {
    return this.page.getByRole('heading', { name: "What benefits are included with Vi Max postpaid plans?" });
  }

  get headingDoesViPostpaidIncludeUnlimitedCallingAndRoamingBenef(): Locator {
    return this.page.getByRole('heading', { name: "Does Vi postpaid include unlimited calling and roaming benefits?" });
  }

  get headingViMaxPostpaidMobilePlans(): Locator {
    return this.page.getByRole('heading', { name: "Vi Max Postpaid Mobile Plans" });
  }

  get headingViAppDownload(): Locator {
    return this.page.getByRole('heading', { name: "Vi App download" });
  }

  get link0(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/postpaid/vi-postpaid-plans#"]');
  }

  get linkRecharge(): Locator {
    return this.page.getByRole('link', { name: "Recharge" });
  }

  get linkBillPay(): Locator {
    return this.page.getByRole('link', { name: "Bill Pay" });
  }

  get link3(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/"]');
  }

  get linkOpenInViApp(): Locator {
    return this.page.getByRole('link', { name: "open in Vi app" });
  }

  get linkSignIn(): Locator {
    return this.page.getByRole('link', { name: "Sign in" });
  }

  get linkDashboard(): Locator {
    return this.page.getByRole('link', { name: "Dashboard" });
  }

  get linkMyAccount(): Locator {
    return this.page.getByRole('link', { name: "My Account" });
  }

  get linkPrepaid(): Locator {
    return this.page.getByRole('link', { name: "Prepaid" });
  }

  get linkRecharge1(): Locator {
    return this.page.getByRole('link', { name: "Recharge" });
  }

  get linkDataPacks(): Locator {
    return this.page.getByRole('link', { name: "Data Packs" });
  }

  get linkHeroPacks(): Locator {
    return this.page.getByRole('link', { name: "Hero Packs" });
  }

  get linkAnnualPacks(): Locator {
    return this.page.getByRole('link', { name: "Annual Packs" });
  }

  get linkNewPrepaidSim(): Locator {
    return this.page.getByRole('link', { name: "New Prepaid SIM" });
  }

  get linkInstantEsimActivation(): Locator {
    return this.page.getByRole('link', { name: "Instant eSIM Activation" });
  }

  get linkPostpaid(): Locator {
    return this.page.getByRole('link', { name: "Postpaid" });
  }

  get linkPayBill(): Locator {
    return this.page.getByRole('link', { name: "Pay Bill" });
  }

  get linkRedxPremiumPlan(): Locator {
    return this.page.getByRole('link', { name: "REDX Premium Plan" });
  }

  get linkChangePostpaidPlan(): Locator {
    return this.page.getByRole('link', { name: "Change Postpaid Plan" });
  }

  get linkNewPostpaidSim(): Locator {
    return this.page.getByRole('link', { name: "New Postpaid SIM" });
  }

  get linkInstantEsimActivation1(): Locator {
    return this.page.getByRole('link', { name: "Instant eSIM Activation" });
  }

  get linkPrepaidToPostpaid(): Locator {
    return this.page.getByRole('link', { name: "Prepaid to Postpaid" });
  }

  get linkNewConnection(): Locator {
    return this.page.getByRole('link', { name: "New Connection" });
  }

  get linkBuyPrepaidSim(): Locator {
    return this.page.getByRole('link', { name: "Buy Prepaid SIM" });
  }

  get linkBuyPostpaidSim(): Locator {
    return this.page.getByRole('link', { name: "Buy Postpaid SIM" });
  }

  get linkBuyVipFancyNumber(): Locator {
    return this.page.getByRole('link', { name: "Buy VIP Fancy Number" });
  }

  get linkBuyFamilyConnection(): Locator {
    return this.page.getByRole('link', { name: "Buy Family Connection" });
  }

  get linkPortToVi(): Locator {
    return this.page.getByRole('link', { name: "Port to Vi" });
  }

  get linkInstantEsimActivation2(): Locator {
    return this.page.getByRole('link', { name: "Instant eSIM Activation" });
  }

  get linkSimActivationOnlineKyc(): Locator {
    return this.page.getByRole('link', { name: "SIM Activation (online KYC)" });
  }

  get linkTrackSimDelivery(): Locator {
    return this.page.getByRole('link', { name: "Track SIM Delivery" });
  }

  get linkInternationalRoaming(): Locator {
    return this.page.getByRole('link', { name: "International Roaming" });
  }

  get link5g(): Locator {
    return this.page.getByRole('link', { name: "5G" });
  }

  get linkOttsMore(): Locator {
    return this.page.getByRole('link', { name: "OTTs & More" });
  }

  get linkViMoviesTv(): Locator {
    return this.page.getByRole('link', { name: "Vi Movies & TV" });
  }

  get linkNetflixPlans(): Locator {
    return this.page.getByRole('link', { name: "Netflix Plans" });
  }

  get linkJiohotstarPlans(): Locator {
    return this.page.getByRole('link', { name: "JioHotstar Plans" });
  }

  get linkAmazonPrimePlans(): Locator {
    return this.page.getByRole('link', { name: "Amazon Prime Plans" });
  }

  get linkSonylivPlans(): Locator {
    return this.page.getByRole('link', { name: "SonyLIV Plans" });
  }

  get linkViGames(): Locator {
    return this.page.getByRole('link', { name: "Vi Games" });
  }

  get linkVideoVault(): Locator {
    return this.page.getByRole('link', { name: "Video Vault" });
  }

  get linkBlog(): Locator {
    return this.page.getByRole('link', { name: "Blog" });
  }

  get linkViShop(): Locator {
    return this.page.getByRole('link', { name: "Vi Shop" });
  }

  get linkUtilityPayments(): Locator {
    return this.page.getByRole('link', { name: "Utility Payments" });
  }

  get linkCallertunes(): Locator {
    return this.page.getByRole('link', { name: "Callertunes" });
  }

  get linkViProtect(): Locator {
    return this.page.getByRole('link', { name: "Vi Protect" });
  }

  get linkHandsetOffers(): Locator {
    return this.page.getByRole('link', { name: "Handset Offers" });
  }

  get linkSwiggyOne(): Locator {
    return this.page.getByRole('link', { name: "Swiggy One" });
  }

  get linkNorton(): Locator {
    return this.page.getByRole('link', { name: "Norton" });
  }

  get linkCashbackOffer(): Locator {
    return this.page.getByRole('link', { name: "Cashback Offer" });
  }

  get linkReelSeRealStar(): Locator {
    return this.page.getByRole('link', { name: "Reel se Real Star" });
  }

  get linkHelp(): Locator {
    return this.page.getByRole('link', { name: "Help" });
  }

  get linkFaq(): Locator {
    return this.page.getByRole('link', { name: "FAQ" });
  }

  get linkCustomerCare(): Locator {
    return this.page.getByRole('link', { name: "Customer Care" });
  }

  get linkTrackRequests(): Locator {
    return this.page.getByRole('link', { name: "Track Requests" });
  }

  get linkStoreLocator(): Locator {
    return this.page.getByRole('link', { name: "Store Locator" });
  }

  get linkSafeCustody(): Locator {
    return this.page.getByRole('link', { name: "Safe Custody" });
  }

  get linkSelfKycReverification(): Locator {
    return this.page.getByRole('link', { name: "Self-KYC Reverification" });
  }

  get linkViProtect1(): Locator {
    return this.page.getByRole('link', { name: "Vi Protect" });
  }

  get linkPostpaidAddressVerification(): Locator {
    return this.page.getByRole('link', { name: "Postpaid Address Verification" });
  }

  get linkDndServiceQuality(): Locator {
    return this.page.getByRole('link', { name: "DND & Service Quality" });
  }

  get linkDndRegistration(): Locator {
    return this.page.getByRole('link', { name: "DND Registration" });
  }

  get linkDndComplaints(): Locator {
    return this.page.getByRole('link', { name: "DND Complaints" });
  }

  get linkServiceQuality(): Locator {
    return this.page.getByRole('link', { name: "Service Quality" });
  }

  get linkCoverageMap(): Locator {
    return this.page.getByRole('link', { name: "Coverage Map" });
  }

  get linkSkycReverification(): Locator {
    return this.page.getByRole('link', { name: "SKYC-Reverification" });
  }

  get linkGetTheApp(): Locator {
    return this.page.getByRole('link', { name: "Get the app" });
  }

  get linkBusiness(): Locator {
    return this.page.getByRole('link', { name: "Business" });
  }

  get linkInvestors(): Locator {
    return this.page.getByRole('link', { name: "Investors" });
  }

  get linkSignIn1(): Locator {
    return this.page.getByRole('link', { name: "Sign In" });
  }

  get link70(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/postpaid/vi-postpaid-plans#"]');
  }

  get linkDashboard1(): Locator {
    return this.page.getByRole('link', { name: "Dashboard" });
  }

  get linkMyAccount1(): Locator {
    return this.page.getByRole('link', { name: "My Account" });
  }

  get linkIndividualPlans(): Locator {
    return this.page.getByRole('link', { name: "Individual plans" });
  }

  get linkFamilyPlans(): Locator {
    return this.page.getByRole('link', { name: "Family plans" });
  }

  get linkTnc(): Locator {
    return this.page.getByRole('link', { name: "TnC" });
  }

  get linkClickHere(): Locator {
    return this.page.getByRole('link', { name: "Click here" });
  }

  get linkPostpaidPlans(): Locator {
    return this.page.getByRole('link', { name: "postpaid plans" });
  }

  get linkFreeSimDelivery(): Locator {
    return this.page.getByRole('link', { name: "free SIM delivery" });
  }

  get linkBestPostpaidPlans(): Locator {
    return this.page.getByRole('link', { name: "Best postpaid plans" });
  }

  get linkPostpaidConnection(): Locator {
    return this.page.getByRole('link', { name: "postpaid connection" });
  }

  get linkBestPostpaidPlans1(): Locator {
    return this.page.getByRole('link', { name: "best postpaid plans" });
  }

  get linkJiohotstar(): Locator {
    return this.page.getByRole('link', { name: "JioHotstar" });
  }

  get linkPostpaidSim(): Locator {
    return this.page.getByRole('link', { name: "postpaid SIM" });
  }

  get linkPostpaidSim1(): Locator {
    return this.page.getByRole('link', { name: "postpaid sim" });
  }

  get linkHome(): Locator {
    return this.page.getByRole('link', { name: "Home" });
  }

  get linkPostpaid1(): Locator {
    return this.page.getByRole('link', { name: "Postpaid" });
  }

  get linkPostpaidPlans1(): Locator {
    return this.page.getByRole('link', { name: "Postpaid Plans" });
  }

  get link88(): Locator {
    return this.page.locator('a[href="https://viapp.onelink.me/bSC3/viapp1"]');
  }

  get link89(): Locator {
    return this.page.locator('a[href="https://www.facebook.com/ViOfficialFanWorld/"]');
  }

  get link90(): Locator {
    return this.page.locator('a[href="https://instagram.com/viofficialfanworld"]');
  }

  get link91(): Locator {
    return this.page.locator('a[href="https://twitter.com/ViCustomerCare"]');
  }

  get link92(): Locator {
    return this.page.locator('a[href="https://www.youtube.com/channel/UCHLTL1DEP_zelqLvUlYaV8Q"]');
  }

  get link93(): Locator {
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

  get link5g1(): Locator {
    return this.page.getByRole('link', { name: "5G" });
  }

  get linkBlog1(): Locator {
    return this.page.getByRole('link', { name: "Blog" });
  }

  get linkPostpaidConnection1(): Locator {
    return this.page.getByRole('link', { name: "Postpaid Connection" });
  }

  get linkPrepaidConnection(): Locator {
    return this.page.getByRole('link', { name: "Prepaid Connection" });
  }

  get linkPortNumberToViMnp(): Locator {
    return this.page.getByRole('link', { name: "Port Number to Vi / MNP" });
  }

  get linkFreeSimDelivery1(): Locator {
    return this.page.getByRole('link', { name: "Free SIM Delivery" });
  }

  get linkTrackYourSimDelivery(): Locator {
    return this.page.getByRole('link', { name: "Track your SIM Delivery" });
  }

  get linkFancyNumber(): Locator {
    return this.page.getByRole('link', { name: "Fancy Number" });
  }

  get linkIndividualPlans1(): Locator {
    return this.page.getByRole('link', { name: "Individual Plans" });
  }

  get linkFamilyPlans1(): Locator {
    return this.page.getByRole('link', { name: "Family Plans" });
  }

  get linkPrepaidToPostpaid1(): Locator {
    return this.page.getByRole('link', { name: "Prepaid to Postpaid" });
  }

  get linkBestPostpaidPlans2(): Locator {
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

  get linkJiohotstarPlans1(): Locator {
    return this.page.getByRole('link', { name: "JioHotstar Plans" });
  }

  get linkAmazonPrimePlans1(): Locator {
    return this.page.getByRole('link', { name: "Amazon Prime Plans" });
  }

  get linkSonylivPlans1(): Locator {
    return this.page.getByRole('link', { name: "SonyLIV Plans" });
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

  get linkViGames1(): Locator {
    return this.page.getByRole('link', { name: "Vi Games" });
  }

  get linkViMoviesTv1(): Locator {
    return this.page.getByRole('link', { name: "Vi Movies & TV" });
  }

  get linkViHeroUnlimited(): Locator {
    return this.page.getByRole('link', { name: "Vi Hero Unlimited" });
  }

  get linkViWifiCalling(): Locator {
    return this.page.getByRole('link', { name: "Vi WiFi Calling" });
  }

  get linkInternationalRoaming1(): Locator {
    return this.page.getByRole('link', { name: "International Roaming" });
  }

  get linkCallertunes1(): Locator {
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

  get linkPortToVi1(): Locator {
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

  get linkMyAccount2(): Locator {
    return this.page.getByRole('link', { name: "My Account" });
  }

  get linkViShop1(): Locator {
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

  get linkDndComplaints1(): Locator {
    return this.page.getByRole('link', { name: "DND Complaints" });
  }

  get linkDndRegistration1(): Locator {
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

  get linkPrivacyPolicy1(): Locator {
    return this.page.getByRole('link', { name: "Privacy Policy" });
  }

  get linkPortToVi2(): Locator {
    return this.page.getByRole('link', { name: "Port to Vi" });
  }

  get linkCookiePolicyAndPrivacyPolicy(): Locator {
    return this.page.getByRole('link', { name: "Cookie Policy and Privacy Policy" });
  }

  get buttonPrepaid(): Locator {
    return this.page.getByRole('button', { name: "Prepaid" });
  }

  get buttonPostpaid(): Locator {
    return this.page.getByRole('button', { name: "Postpaid" });
  }

  get buttonNewConnection(): Locator {
    return this.page.getByRole('button', { name: "New Connection" });
  }

  get buttonOttsMore(): Locator {
    return this.page.getByRole('button', { name: "OTTs & More" });
  }

  get buttonHelp(): Locator {
    return this.page.getByRole('button', { name: "Help" });
  }

  get buttonDndServiceQuality(): Locator {
    return this.page.getByRole('button', { name: "DND & Service Quality" });
  }

  get buttonMumbai(): Locator {
    return this.page.getByRole('button', { name: "Mumbai" });
  }

  get buttonProceed(): Locator {
    return this.page.getByRole('button', { name: "PROCEED" });
  }

  get buttonSelect(): Locator {
    return this.page.getByRole('button', { name: "select" });
  }

  get buttonSelect1(): Locator {
    return this.page.getByRole('button', { name: "select" });
  }

  get buttonSelect2(): Locator {
    return this.page.getByRole('button', { name: "select" });
  }

  get buttonSelect3(): Locator {
    return this.page.getByRole('button', { name: "select" });
  }

  get buttonSelect4(): Locator {
    return this.page.getByRole('button', { name: "select" });
  }

  get buttonSelect5(): Locator {
    return this.page.getByRole('button', { name: "select" });
  }

  get buttonSelect6(): Locator {
    return this.page.getByRole('button', { name: "select" });
  }

  get buttonSelect7(): Locator {
    return this.page.getByRole('button', { name: "select" });
  }

  get buttonSelect8(): Locator {
    return this.page.getByRole('button', { name: "select" });
  }

  get buttonSelect9(): Locator {
    return this.page.getByRole('button', { name: "select" });
  }

  get buttonSelect10(): Locator {
    return this.page.getByRole('button', { name: "select" });
  }

  get buttonSelect11(): Locator {
    return this.page.getByRole('button', { name: "select" });
  }

  get buttonSelect12(): Locator {
    return this.page.getByRole('button', { name: "select" });
  }

  get buttonSelect13(): Locator {
    return this.page.getByRole('button', { name: "select" });
  }

  get buttonSelect14(): Locator {
    return this.page.getByRole('button', { name: "select" });
  }

  get buttonSelect15(): Locator {
    return this.page.getByRole('button', { name: "select" });
  }

  get buttonPrev(): Locator {
    return this.page.getByRole('button', { name: "Prev" });
  }

  get buttonNext(): Locator {
    return this.page.getByRole('button', { name: "Next" });
  }

  get button1(): Locator {
    return this.page.getByRole('button', { name: "1" });
  }

  get button2(): Locator {
    return this.page.getByRole('button', { name: "2" });
  }

  get buttonSelect16(): Locator {
    return this.page.getByRole('button', { name: "select" });
  }

  get buttonSelect17(): Locator {
    return this.page.getByRole('button', { name: "select" });
  }

  get buttonSelect18(): Locator {
    return this.page.getByRole('button', { name: "select" });
  }

  get buttonSelect19(): Locator {
    return this.page.getByRole('button', { name: "select" });
  }

  get buttonSelect20(): Locator {
    return this.page.getByRole('button', { name: "select" });
  }

  get buttonPrev1(): Locator {
    return this.page.getByRole('button', { name: "Prev" });
  }

  get buttonNext1(): Locator {
    return this.page.getByRole('button', { name: "Next" });
  }

  get button11(): Locator {
    return this.page.getByRole('button', { name: "1" });
  }

  get button21(): Locator {
    return this.page.getByRole('button', { name: "2" });
  }

  get button3(): Locator {
    return this.page.getByRole('button', { name: "3" });
  }

  get button4(): Locator {
    return this.page.getByRole('button', { name: "4" });
  }

  get buttonProceedWith399Plan(): Locator {
    return this.page.getByRole('button', { name: "proceed with Ã¢â€šÂ¹399 plan" });
  }

  get buttonSeeMore(): Locator {
    return this.page.getByRole('button', { name: "see more" });
  }

  get buttonProceed1(): Locator {
    return this.page.getByRole('button', { name: "proceed" });
  }

  get buttonAboutVi(): Locator {
    return this.page.getByRole('button', { name: "about Vi" });
  }

  get buttonMoreFromVi(): Locator {
    return this.page.getByRole('button', { name: "more from Vi" });
  }

  get buttonExploreOnViApp(): Locator {
    return this.page.getByRole('button', { name: "explore on Vi app" });
  }

  get buttonRegulatoryQuickAccess(): Locator {
    return this.page.getByRole('button', { name: "regulatory & quick access" });
  }

  get buttonSendOtp(): Locator {
    return this.page.getByRole('button', { name: "send OTP" });
  }

  get buttonEnterOtpVerifyOtp(): Locator {
    return this.page.getByRole('button', { name: "enter OTP verify OTP" });
  }

  get buttonAcceptAll(): Locator {
    return this.page.getByRole('button', { name: "accept all" });
  }

  get inputCookiepopupselect(): Locator {
    return this.page.locator('input[name="cookiepopupselect"]');
  }

  get inputSearch(): Locator {
    return this.page.getByPlaceholder("Search");
  }

  get inputQ(): Locator {
    return this.page.locator('input[name="q"]');
  }

  get inputSearch1(): Locator {
    return this.page.getByPlaceholder("Search");
  }

  get inputSearch2(): Locator {
    return this.page.getByPlaceholder("Search");
  }

  get inputDefaultcircle(): Locator {
    return this.page.locator('input[name="defaultcircle"]');
  }

  get inputDefaultcircleid(): Locator {
    return this.page.locator('input[name="defaultcircleid"]');
  }

  get inputDefaultcirclecode(): Locator {
    return this.page.locator('input[name="defaultcirclecode"]');
  }

  get inputPostpaid5gtext(): Locator {
    return this.page.locator('input[name="postpaid5GText"]');
  }

  get inputViPostpaidimg5gdesk(): Locator {
    return this.page.locator('input[name="vi_postpaidimg5Gdesk"]');
  }

  get inputViPostpaidimg5gmob(): Locator {
    return this.page.locator('input[name="vi_postpaidimg5Gmob"]');
  }

  get input11(): Locator {
    return this.page.locator('input');
  }

  get input12(): Locator {
    return this.page.locator('input');
  }

  get input13(): Locator {
    return this.page.locator('input');
  }

  get input14(): Locator {
    return this.page.locator('input');
  }

  get input15(): Locator {
    return this.page.locator('input');
  }

  get input16(): Locator {
    return this.page.locator('input');
  }

  get input17(): Locator {
    return this.page.locator('input');
  }

  get input18(): Locator {
    return this.page.locator('input');
  }

  get input19(): Locator {
    return this.page.locator('input');
  }

  get input20(): Locator {
    return this.page.locator('input');
  }

  get input21(): Locator {
    return this.page.locator('input');
  }

  get input22(): Locator {
    return this.page.locator('input');
  }

  get input23(): Locator {
    return this.page.locator('input');
  }

  get input24(): Locator {
    return this.page.locator('input');
  }

  get input25(): Locator {
    return this.page.locator('input');
  }

  get input26(): Locator {
    return this.page.locator('input');
  }

  get input27(): Locator {
    return this.page.locator('input');
  }

  get input28(): Locator {
    return this.page.locator('input');
  }

  get input29(): Locator {
    return this.page.locator('input');
  }

  get input30(): Locator {
    return this.page.locator('input');
  }

  get input31(): Locator {
    return this.page.locator('input');
  }

  get input32(): Locator {
    return this.page.locator('input');
  }

  get input33(): Locator {
    return this.page.locator('input');
  }

  get input34(): Locator {
    return this.page.locator('input');
  }

  get input35(): Locator {
    return this.page.locator('input');
  }

  get input36(): Locator {
    return this.page.locator('input');
  }

  get input37(): Locator {
    return this.page.locator('input');
  }

  get input38(): Locator {
    return this.page.locator('input');
  }

  get input39(): Locator {
    return this.page.locator('input');
  }

  get input40(): Locator {
    return this.page.locator('input');
  }

  get input41(): Locator {
    return this.page.locator('input');
  }

  get input42(): Locator {
    return this.page.locator('input');
  }

  get input43(): Locator {
    return this.page.locator('input');
  }

  get input44(): Locator {
    return this.page.locator('input');
  }

  get input45(): Locator {
    return this.page.locator('input');
  }

  get inputSrnumberthankyou(): Locator {
    return this.page.locator('input[name="srnumberthankyou"]');
  }

  get inputThankyouflagsr(): Locator {
    return this.page.locator('input[name="thankyouflagsr"]');
  }

  get input48(): Locator {
    return this.page.locator('input');
  }

  get input49(): Locator {
    return this.page.locator('input');
  }

  get inputIndiplansunit(): Locator {
    return this.page.locator('input[name="indiplansunit"]');
  }

  get inputFamilyplansunit(): Locator {
    return this.page.locator('input[name="familyplansunit"]');
  }

  get inputIsredxpage(): Locator {
    return this.page.locator('input[name="isredxpage"]');
  }

  get inputIslargeimg(): Locator {
    return this.page.locator('input[name="islargeimg"]');
  }

  get inputBillchangeerror(): Locator {
    return this.page.locator('input[name="billchangeerror"]');
  }

  get inputOpensrerror(): Locator {
    return this.page.locator('input[name="openSrError"]');
  }

  get inputSameplanerror(): Locator {
    return this.page.locator('input[name="samePlanError"]');
  }

  get inputSameaddonerror(): Locator {
    return this.page.locator('input[name="sameAddonError"]');
  }

  get inputRedirectionlink(): Locator {
    return this.page.locator('input[name="redirectionLink"]');
  }

  get inputSubscriptionheadings(): Locator {
    return this.page.locator('input[name="subscriptionHeadings"]');
  }

  get input60(): Locator {
    return this.page.locator('input');
  }

  get input61(): Locator {
    return this.page.locator('input');
  }

  get input62(): Locator {
    return this.page.locator('input');
  }

  get inputMobileviapp(): Locator {
    return this.page.locator('input[name="mobileviapp"]');
  }

  get inputDeskviapp(): Locator {
    return this.page.locator('input[name="deskviapp"]');
  }

  get inputPagetypeid(): Locator {
    return this.page.locator('input[name="pageTypeID"]');
  }

  get inputPagetype(): Locator {
    return this.page.locator('input[name="pageType"]');
  }

  get inputAnalyticpagename(): Locator {
    return this.page.locator('input[name="analyticPageName"]');
  }

  get inputPagename(): Locator {
    return this.page.locator('input[name="pagename"]');
  }

  get inputChannel(): Locator {
    return this.page.locator('input[name="channel"]');
  }

  get inputPagetype1(): Locator {
    return this.page.locator('input[name="pagetype"]');
  }

  get inputVisitorlanguage(): Locator {
    return this.page.locator('input[name="visitorlanguage"]');
  }

  get inputLoginstatus(): Locator {
    return this.page.locator('input[name="loginstatus"]');
  }

  get inputVisitortype(): Locator {
    return this.page.locator('input[name="visitortype"]');
  }

  get inputVisitorsubscryptiontype(): Locator {
    return this.page.locator('input[name="visitorsubscryptiontype"]');
  }

  get inputVisitorbusinesstype(): Locator {
    return this.page.locator('input[name="visitorbusinesstype"]');
  }

  get inputPagemastertab(): Locator {
    return this.page.locator('input[name="pagemastertab"]');
  }

  get inputSectonlvl2(): Locator {
    return this.page.locator('input[name="sectonlvl2"]');
  }

  get inputSectonlvl3(): Locator {
    return this.page.locator('input[name="sectonlvl3"]');
  }

  get inputSectonlvl4(): Locator {
    return this.page.locator('input[name="sectonlvl4"]');
  }

  get inputCampaignchannelpath(): Locator {
    return this.page.locator('input[name="campaignchannelpath"]');
  }

  get inputApplicationname(): Locator {
    return this.page.locator('input[name="applicationname"]');
  }

  get inputCustomerjourney(): Locator {
    return this.page.locator('input[name="customerjourney"]');
  }

  get inputCustomersubjourney(): Locator {
    return this.page.locator('input[name="customersubjourney"]');
  }

  get inputJourneyevent(): Locator {
    return this.page.locator('input[name="journeyevent"]');
  }

  get inputBlogcategory(): Locator {
    return this.page.locator('input[name="blogcategory"]');
  }

  get inputContacttypeselection(): Locator {
    return this.page.locator('input[name="contacttypeselection"]');
  }

  get inputVisitorvisitnumber(): Locator {
    return this.page.locator('input[name="visitorvisitnumber"]');
  }

  get inputLauncheventname(): Locator {
    return this.page.locator('input[name="launchEventName"]');
  }

  get inputSalesproducts(): Locator {
    return this.page.locator('input[name="salesproducts"]');
  }

  get inputShopaddtobill(): Locator {
    return this.page.locator('input[name="ShopAddtoBill"]');
  }

  get inputInternaljourney(): Locator {
    return this.page.locator('input[name="internaljourney"]');
  }

  get inputTelecomcircle(): Locator {
    return this.page.locator('input[name="telecomcircle"]');
  }

  get inputEnterTheTextFromTheAboveImage(): Locator {
    return this.page.getByPlaceholder("Enter the text from the above image*");
  }

  get inputEnterMobileNumber(): Locator {
    return this.page.getByPlaceholder("enter mobile number");
  }

  get inputOneTimeCode(): Locator {
    return this.page.locator('input[name="one-time-code"]');
  }

  get inputOneTimeCode1(): Locator {
    return this.page.locator('input[name="one-time-code"]');
  }

  get inputOneTimeCode2(): Locator {
    return this.page.locator('input[name="one-time-code"]');
  }

  get inputOneTimeCode3(): Locator {
    return this.page.locator('input[name="one-time-code"]');
  }

  get inputAdobelaunchpointeranalytics(): Locator {
    return this.page.locator('input[name="adobeLaunchPointerAnalytics"]');
  }

  get form0(): Locator {
    return this.page.locator('form#globalsearchsubmitForm');
  }

  get form1(): Locator {
    return this.page.locator('form#redxplanactivation');
  }

  get table0(): Locator {
    return this.page.locator('table');
  }

  get menuOpenInViAppSignInSignInDashboardMyAccountPrepaid(): Locator {
    return this.page.getByRole('navigation', { name: "open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs" });
  }

  get menuHomePostpaidPostpaidPlans(): Locator {
    return this.page.getByRole('navigation', { name: "Home Postpaid Postpaid Plans" });
  }

  constructor(page: Page) {
    super(page);
  }
}
