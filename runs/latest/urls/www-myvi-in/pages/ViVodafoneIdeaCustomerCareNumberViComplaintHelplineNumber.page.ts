import { Page, Locator } from '@playwright/test';
import { BasePage } from '../../BasePage';

export class ViVodafoneIdeaCustomerCareNumberViComplaintHelplineNumber extends BasePage {
  readonly url = "https://www.myvi.in/help-support/vi-customer-care-number";

  // All element locators are generated dynamically using locator strategies

  get headingViCustomerCare(): Locator {
    return this.page.getByRole('heading', { name: "Vi Customer Care" });
  }

  get headingConnectWithUsOnWhatsapp(): Locator {
    return this.page.getByRole('heading', { name: "connect with us on Whatsapp" });
  }

  get headingResponsibleDisclosurePolicy(): Locator {
    return this.page.getByRole('heading', { name: "Responsible Disclosure policy" });
  }

  get headingConsumerCareNumber(): Locator {
    return this.page.getByRole('heading', { name: "Consumer Care Number" });
  }

  get headingCircleComplaintCentreContactDetails(): Locator {
    return this.page.getByRole('heading', { name: "Circle Complaint Centre contact details" });
  }

  get headingOtherHelplineNumbers(): Locator {
    return this.page.getByRole('heading', { name: "Other Helpline Numbers" });
  }

  get headingAppellateAuthority(): Locator {
    return this.page.getByRole('heading', { name: "appellate authority" });
  }

  get headingConsumerEducationWorkshop(): Locator {
    return this.page.getByRole('heading', { name: "consumer education workshop" });
  }

  get headingServiceQuality(): Locator {
    return this.page.getByRole('heading', { name: "service quality" });
  }

  get headingTelecomConsumerSCharter(): Locator {
    return this.page.getByRole('heading', { name: "Telecom consumer’s charter" });
  }

  get headingProcedureForLodgingComplaintsAndServiceRequests(): Locator {
    return this.page.getByRole('heading', { name: "Procedure for lodging complaints and service requests" });
  }

  get headingTimeLimitsForRedressalOfComplaints(): Locator {
    return this.page.getByRole('heading', { name: "Time limits for redressal of complaints" });
  }

  get headingGetMoreHelpFromYourBusiness(): Locator {
    return this.page.getByRole('heading', { name: "get more help from your business" });
  }

  get headingWriteToUs(): Locator {
    return this.page.getByRole('heading', { name: "write to us" });
  }

  get headingComplaintsRequests(): Locator {
    return this.page.getByRole('heading', { name: "complaints & requests" });
  }

  get headingFaqs(): Locator {
    return this.page.getByRole('heading', { name: "FAQs" });
  }

  get link0(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/help-support/vi-customer-care-number#"]');
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
    return this.page.locator('a[href="https://www.myvi.in/help-support/vi-customer-care-number#"]');
  }

  get linkDashboard1(): Locator {
    return this.page.getByRole('link', { name: "Dashboard" });
  }

  get linkMyAccount1(): Locator {
    return this.page.getByRole('link', { name: "My Account" });
  }

  get linkNoPlatformFeeOnViAppRecharges(): Locator {
    return this.page.getByRole('link', { name: "No Platform Fee on Vi App Recharges!" });
  }

  get linkTranslate(): Locator {
    return this.page.getByRole('link', { name: "Translate" });
  }

  get linkClickHere(): Locator {
    return this.page.getByRole('link', { name: "Click Here" });
  }

  get linkClickHere1(): Locator {
    return this.page.getByRole('link', { name: "Click Here" });
  }

  get linkClickHere2(): Locator {
    return this.page.getByRole('link', { name: "click here" });
  }

  get linkCustomercareVodafoneideaCom(): Locator {
    return this.page.getByRole('link', { name: "customercare@vodafoneidea.com" });
  }

  get linkClickHere3(): Locator {
    return this.page.getByRole('link', { name: "Click here" });
  }

  get linkWorkshopScheduleFor202627(): Locator {
    return this.page.getByRole('link', { name: "Workshop Schedule for 2026 -27" });
  }

  get linkMobile(): Locator {
    return this.page.getByRole('link', { name: "Mobile" });
  }

  get linkEnglish(): Locator {
    return this.page.getByRole('link', { name: "English" });
  }

  get linkHindi(): Locator {
    return this.page.getByRole('link', { name: "Hindi" });
  }

  get linkComplaintsRequestsGetToKnowTheStatusClickHere(): Locator {
    return this.page.getByRole('link', { name: "complaints & requests Get to know the status click here" });
  }

  get linkFaqsClickHereToGetMoreHelpRelatedToViProductsAnd(): Locator {
    return this.page.getByRole('link', { name: "FAQs Click here to get more help related to Vi products and services" });
  }

  get link86(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/help-support/faqs?chatbotopen=true"]');
  }

  get link87(): Locator {
    return this.page.locator('a[href="https://vi.app.link/viappinst"]');
  }

  get link88(): Locator {
    return this.page.locator('a[href="https://www.facebook.com/ViOfficialFanWorld/"]');
  }

  get link89(): Locator {
    return this.page.locator('a[href="https://instagram.com/viofficialfanworld"]');
  }

  get link90(): Locator {
    return this.page.locator('a[href="https://twitter.com/ViCustomerCare"]');
  }

  get link91(): Locator {
    return this.page.locator('a[href="https://www.youtube.com/channel/UCHLTL1DEP_zelqLvUlYaV8Q"]');
  }

  get link92(): Locator {
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

  get linkPrepaidToPostpaid1(): Locator {
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

  get linkRechargeNow(): Locator {
    return this.page.getByRole('link', { name: "recharge now" });
  }

  get link182(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/new-connection/user-details"]');
  }

  get link183(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/help-support/target=%22_blank%22"]');
  }

  get link184(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/help-support/target=%22_blank%22"]');
  }

  get link185(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/help-support/target=%22_blank%22"]');
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

  get buttonProceed(): Locator {
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

  get inputMobileviapp(): Locator {
    return this.page.locator('input[name="mobileviapp"]');
  }

  get inputDeskviapp(): Locator {
    return this.page.locator('input[name="deskviapp"]');
  }

  get inputLanguageTranslateWidget(): Locator {
    return this.page.getByLabel("Language Translate Widget");
  }

  get inputSelectLanguage(): Locator {
    return this.page.locator('input[name="bhashiniLanguageDropdown"]');
  }

  get inputMobileviapp1(): Locator {
    return this.page.locator('input[name="mobileviapp"]');
  }

  get inputDeskviapp1(): Locator {
    return this.page.locator('input[name="deskviapp"]');
  }

  get inputMobileviapp2(): Locator {
    return this.page.locator('input[name="mobileviapp"]');
  }

  get inputDeskviapp2(): Locator {
    return this.page.locator('input[name="deskviapp"]');
  }

  get inputMobileviapp3(): Locator {
    return this.page.locator('input[name="mobileviapp"]');
  }

  get inputDeskviapp3(): Locator {
    return this.page.locator('input[name="deskviapp"]');
  }

  get inputMobileviapp4(): Locator {
    return this.page.locator('input[name="mobileviapp"]');
  }

  get inputDeskviapp4(): Locator {
    return this.page.locator('input[name="deskviapp"]');
  }

  get inputMobileviapp5(): Locator {
    return this.page.locator('input[name="mobileviapp"]');
  }

  get inputDeskviapp5(): Locator {
    return this.page.locator('input[name="deskviapp"]');
  }

  get inputMobileviapp6(): Locator {
    return this.page.locator('input[name="mobileviapp"]');
  }

  get inputDeskviapp6(): Locator {
    return this.page.locator('input[name="deskviapp"]');
  }

  get inputMobileviapp7(): Locator {
    return this.page.locator('input[name="mobileviapp"]');
  }

  get inputDeskviapp7(): Locator {
    return this.page.locator('input[name="deskviapp"]');
  }

  get inputMobileviapp8(): Locator {
    return this.page.locator('input[name="mobileviapp"]');
  }

  get inputDeskviapp8(): Locator {
    return this.page.locator('input[name="deskviapp"]');
  }

  get inputMobileviapp9(): Locator {
    return this.page.locator('input[name="mobileviapp"]');
  }

  get inputDeskviapp9(): Locator {
    return this.page.locator('input[name="deskviapp"]');
  }

  get inputMobileviapp10(): Locator {
    return this.page.locator('input[name="mobileviapp"]');
  }

  get inputDeskviapp10(): Locator {
    return this.page.locator('input[name="deskviapp"]');
  }

  get inputMobileviapp11(): Locator {
    return this.page.locator('input[name="mobileviapp"]');
  }

  get inputDeskviapp11(): Locator {
    return this.page.locator('input[name="deskviapp"]');
  }

  get inputMobileviapp12(): Locator {
    return this.page.locator('input[name="mobileviapp"]');
  }

  get inputDeskviapp12(): Locator {
    return this.page.locator('input[name="deskviapp"]');
  }

  get inputMobileviapp13(): Locator {
    return this.page.locator('input[name="mobileviapp"]');
  }

  get inputDeskviapp13(): Locator {
    return this.page.locator('input[name="deskviapp"]');
  }

  get inputMobileviapp14(): Locator {
    return this.page.locator('input[name="mobileviapp"]');
  }

  get inputDeskviapp14(): Locator {
    return this.page.locator('input[name="deskviapp"]');
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

  get inputPagetype(): Locator {
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

  get inputSl(): Locator {
    return this.page.locator('input[name="sl"]');
  }

  get inputTl(): Locator {
    return this.page.locator('input[name="tl"]');
  }

  get inputQuery(): Locator {
    return this.page.locator('input[name="query"]');
  }

  get inputGtrans(): Locator {
    return this.page.locator('input[name="gtrans"]');
  }

  get inputVote(): Locator {
    return this.page.locator('input[name="vote"]');
  }

  get form0(): Locator {
    return this.page.locator('form#globalsearchsubmitForm');
  }

  get form1(): Locator {
    return this.page.locator('form#goog-gt-votingForm');
  }

  get table0(): Locator {
    return this.page.locator('table');
  }

  get table1(): Locator {
    return this.page.locator('table');
  }

  get table2(): Locator {
    return this.page.locator('table');
  }

  get table3(): Locator {
    return this.page.locator('table');
  }

  get menuOpenInViAppSignInSignInDashboardMyAccountPrepaid(): Locator {
    return this.page.getByRole('navigation', { name: "open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs" });
  }

  get dropdownLanguageTranslateWidget(): Locator {
    return this.page.getByLabel("Language Translate Widget");
  }

  get dropdownSelectLanguage(): Locator {
    return this.page.getByLabel("Select Language");
  }

  constructor(page: Page) {
    super(page);
  }
}
