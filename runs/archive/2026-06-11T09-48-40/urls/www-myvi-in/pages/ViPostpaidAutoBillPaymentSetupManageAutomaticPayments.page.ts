import { Page, Locator } from '@playwright/test';
import { BasePage } from '../../BasePage';

export class ViPostpaidAutoBillPaymentSetupManageAutomaticPayments extends BasePage {
  readonly url = "https://www.myvi.in/postpaid/auto-bill-payment";

  // All element locators are generated dynamically using locator strategies

  get headingManageAutoBillPayment(): Locator {
    return this.page.getByRole('heading', { name: "manage auto bill payment" });
  }

  get headingSetupAutoPay(): Locator {
    return this.page.getByRole('heading', { name: "setup auto pay" });
  }

  get headingCancelAutoPay(): Locator {
    return this.page.getByRole('heading', { name: "cancel auto pay" });
  }

  get headingModifyAutoPay(): Locator {
    return this.page.getByRole('heading', { name: "modify auto pay" });
  }

  get headingSelectPaymentSourceType(): Locator {
    return this.page.getByRole('heading', { name: "select payment source type" });
  }

  get headingCard(): Locator {
    return this.page.getByRole('heading', { name: "card" });
  }

  get headingBankAccount(): Locator {
    return this.page.getByRole('heading', { name: "bank account" });
  }

  get headingSetupAutoPayment(): Locator {
    return this.page.getByRole('heading', { name: "setup auto payment" });
  }

  get headingEnterYourMobileNumber(): Locator {
    return this.page.getByRole('heading', { name: "Enter your mobile number" });
  }

  get headingOtpVerification(): Locator {
    return this.page.getByRole('heading', { name: "OTP verification" });
  }

  get headingJustToMakeSureItSYouWeVeSentAnOtpToYourNumber(): Locator {
    return this.page.getByRole('heading', { name: "Just to make sure it’s you, we’ve sent an OTP to your number ending with 9999" });
  }

  get headingOtpVerification1(): Locator {
    return this.page.getByRole('heading', { name: "OTP verification" });
  }

  get headingJustToMakeSureItSYouWeVeSentAnOtpToYourNumber1(): Locator {
    return this.page.getByRole('heading', { name: "Just to make sure it’s you, we’ve sent an OTP to your number ending with 9999" });
  }

  get headingCorporateAccount(): Locator {
    return this.page.getByRole('heading', { name: "corporate account" });
  }

  get headingMandateAlreadyExist(): Locator {
    return this.page.getByRole('heading', { name: "mandate already exist" });
  }

  get headingNoMandateFound(): Locator {
    return this.page.getByRole('heading', { name: "No Mandate Found" });
  }

  get headingUpiMandateFound(): Locator {
    return this.page.getByRole('heading', { name: "UPI mandate found" });
  }

  get link0(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/postpaid/auto-bill-payment#"]');
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
    return this.page.locator('a[href="https://www.myvi.in/postpaid/auto-bill-payment#"]');
  }

  get linkDashboard1(): Locator {
    return this.page.getByRole('link', { name: "Dashboard" });
  }

  get linkMyAccount1(): Locator {
    return this.page.getByRole('link', { name: "My Account" });
  }

  get linkResendOtp(): Locator {
    return this.page.getByRole('link', { name: "resend otp" });
  }

  get linkResendOtp1(): Locator {
    return this.page.getByRole('link', { name: "resend otp" });
  }

  get linkViApp(): Locator {
    return this.page.getByRole('link', { name: "Vi app" });
  }

  get linkHome(): Locator {
    return this.page.getByRole('link', { name: "Home" });
  }

  get linkBillAutopayMandateSetup(): Locator {
    return this.page.getByRole('link', { name: "bill autopay mandate setup" });
  }

  get link78(): Locator {
    return this.page.locator('a[href="https://www.facebook.com/ViOfficialFanWorld/"]');
  }

  get link79(): Locator {
    return this.page.locator('a[href="https://instagram.com/viofficialfanworld"]');
  }

  get link80(): Locator {
    return this.page.locator('a[href="https://twitter.com/ViCustomerCare"]');
  }

  get link81(): Locator {
    return this.page.locator('a[href="https://www.youtube.com/channel/UCHLTL1DEP_zelqLvUlYaV8Q"]');
  }

  get link82(): Locator {
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

  get buttonSelect(): Locator {
    return this.page.getByRole('button', { name: "select" });
  }

  get buttonSelect1(): Locator {
    return this.page.getByRole('button', { name: "select" });
  }

  get buttonProceed(): Locator {
    return this.page.getByRole('button', { name: "proceed" });
  }

  get buttonVerify(): Locator {
    return this.page.getByRole('button', { name: "verify" });
  }

  get buttonVerify1(): Locator {
    return this.page.getByRole('button', { name: "verify" });
  }

  get buttonOkIUnderstand(): Locator {
    return this.page.getByRole('button', { name: "ok, I understand" });
  }

  get buttonOkIUnderstand1(): Locator {
    return this.page.getByRole('button', { name: "ok, I understand" });
  }

  get buttonOkIUnderstand2(): Locator {
    return this.page.getByRole('button', { name: "ok, I understand" });
  }

  get buttonOkIUnderstand3(): Locator {
    return this.page.getByRole('button', { name: "ok, I understand" });
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

  get inputAutobillpayredurl(): Locator {
    return this.page.locator('input[name="autobillpayredurl"]');
  }

  get inputMsisdncookie(): Locator {
    return this.page.locator('input[name="msisdncookie"]');
  }

  get inputUsernumber(): Locator {
    return this.page.locator('input[name="usernumber"]');
  }

  get inputLobcookie(): Locator {
    return this.page.locator('input[name="lobcookie"]');
  }

  get inputCirclecookie(): Locator {
    return this.page.locator('input[name="circlecookie"]');
  }

  get inputCircleidcookie(): Locator {
    return this.page.locator('input[name="circleIdcookie"]');
  }

  get inputBrandcookie(): Locator {
    return this.page.locator('input[name="brandcookie"]');
  }

  get inputVodacirclenamecookie(): Locator {
    return this.page.locator('input[name="vodaCircleNamecookie"]');
  }

  get inputAttempt(): Locator {
    return this.page.locator('input[name="attempt"]');
  }

  get inputUniqueid(): Locator {
    return this.page.locator('input[name="uniqueId"]');
  }

  get inputEncrypteddata(): Locator {
    return this.page.locator('input[name="encryptedData"]');
  }

  get inputCookieexpiry(): Locator {
    return this.page.locator('input[name="cookieExpiry"]');
  }

  get inputDomain(): Locator {
    return this.page.locator('input[name="domain"]');
  }

  get inputChildmsisdn(): Locator {
    return this.page.locator('input[name="childmsisdn"]');
  }

  get inputChildcirleid(): Locator {
    return this.page.locator('input[name="childCirleId"]');
  }

  get inputChildlob(): Locator {
    return this.page.locator('input[name="childLob"]');
  }

  get inputSetupheading(): Locator {
    return this.page.locator('input[name="setupHeading"]');
  }

  get inputSetupsubheading(): Locator {
    return this.page.locator('input[name="setupSubHeading"]');
  }

  get inputCancelheading(): Locator {
    return this.page.locator('input[name="cancelHeading"]');
  }

  get inputCancelsubheading(): Locator {
    return this.page.locator('input[name="cancelSubHeading"]');
  }

  get inputModifyheading(): Locator {
    return this.page.locator('input[name="modifyHeading"]');
  }

  get inputModifysubheading(): Locator {
    return this.page.locator('input[name="modifySubHeading"]');
  }

  get inputEnterMobileNumber(): Locator {
    return this.page.getByPlaceholder("enter mobile number");
  }

  get inputEnterOtpHere(): Locator {
    return this.page.getByPlaceholder("enter otp here");
  }

  get inputEnterOtpHere1(): Locator {
    return this.page.getByPlaceholder("enter otp here");
  }

  get inputErrormsgs(): Locator {
    return this.page.locator('input[name="ErrorMsgs"]');
  }

  get inputOtpsendmsgfirsttime(): Locator {
    return this.page.locator('input[name="otpsendMsgFirstTime"]');
  }

  get inputMobvilink(): Locator {
    return this.page.locator('input[name="mobViLink"]');
  }

  get inputDeskvilink(): Locator {
    return this.page.locator('input[name="deskViLink"]');
  }

  get inputBilldeskurl(): Locator {
    return this.page.locator('input[name="billdeskurl"]');
  }

  get inputNoattempts(): Locator {
    return this.page.locator('input[name="noattempts"]');
  }

  get inputUpimandatemsg(): Locator {
    return this.page.locator('input[name="upimandatemsg"]');
  }

  get inputBankmandatemsg(): Locator {
    return this.page.locator('input[name="bankmandatemsg"]');
  }

  get inputCardmandatemsg(): Locator {
    return this.page.locator('input[name="cardmandatemsg"]');
  }

  get inputSrinprogress(): Locator {
    return this.page.locator('input[name="srinprogress"]');
  }

  get inputDxltimeoutmessage(): Locator {
    return this.page.locator('input[name="dxlTimeOutMessage"]');
  }

  get inputOtpsystemerrormsg(): Locator {
    return this.page.locator('input[name="OtpSystemErrorMsg"]');
  }

  get inputMsisdn(): Locator {
    return this.page.locator('input[name="msisdn"]');
  }

  get inputMsisdncookie1(): Locator {
    return this.page.locator('input[name="msisdncookie"]');
  }

  get inputUsernumber1(): Locator {
    return this.page.locator('input[name="usernumber"]');
  }

  get inputLobcookie1(): Locator {
    return this.page.locator('input[name="lobcookie"]');
  }

  get inputCirclecookie1(): Locator {
    return this.page.locator('input[name="circlecookie"]');
  }

  get inputCircleidcookie1(): Locator {
    return this.page.locator('input[name="circleIdcookie"]');
  }

  get inputBrandcookie1(): Locator {
    return this.page.locator('input[name="brandcookie"]');
  }

  get inputVodacirclenamecookie1(): Locator {
    return this.page.locator('input[name="vodaCircleNamecookie"]');
  }

  get inputAttempt1(): Locator {
    return this.page.locator('input[name="attempt"]');
  }

  get inputUniqueid1(): Locator {
    return this.page.locator('input[name="uniqueId"]');
  }

  get inputEncrypteddata1(): Locator {
    return this.page.locator('input[name="encryptedData"]');
  }

  get inputCookieexpiry1(): Locator {
    return this.page.locator('input[name="cookieExpiry"]');
  }

  get inputDomain1(): Locator {
    return this.page.locator('input[name="domain"]');
  }

  get inputChildmsisdn1(): Locator {
    return this.page.locator('input[name="childmsisdn"]');
  }

  get inputChildcirleid1(): Locator {
    return this.page.locator('input[name="childCirleId"]');
  }

  get inputChildlob1(): Locator {
    return this.page.locator('input[name="childLob"]');
  }

  get inputMsisdncookie2(): Locator {
    return this.page.locator('input[name="msisdncookie"]');
  }

  get inputUsernumber2(): Locator {
    return this.page.locator('input[name="usernumber"]');
  }

  get inputLobcookie2(): Locator {
    return this.page.locator('input[name="lobcookie"]');
  }

  get inputCirclecookie2(): Locator {
    return this.page.locator('input[name="circlecookie"]');
  }

  get inputCircleidcookie2(): Locator {
    return this.page.locator('input[name="circleIdcookie"]');
  }

  get inputBrandcookie2(): Locator {
    return this.page.locator('input[name="brandcookie"]');
  }

  get inputVodacirclenamecookie2(): Locator {
    return this.page.locator('input[name="vodaCircleNamecookie"]');
  }

  get inputAttempt2(): Locator {
    return this.page.locator('input[name="attempt"]');
  }

  get inputUniqueid2(): Locator {
    return this.page.locator('input[name="uniqueId"]');
  }

  get inputEncrypteddata2(): Locator {
    return this.page.locator('input[name="encryptedData"]');
  }

  get inputCookieexpiry2(): Locator {
    return this.page.locator('input[name="cookieExpiry"]');
  }

  get inputDomain2(): Locator {
    return this.page.locator('input[name="domain"]');
  }

  get inputChildmsisdn2(): Locator {
    return this.page.locator('input[name="childmsisdn"]');
  }

  get inputChildcirleid2(): Locator {
    return this.page.locator('input[name="childCirleId"]');
  }

  get inputChildlob2(): Locator {
    return this.page.locator('input[name="childLob"]');
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

  get inputEnterMobileNumber1(): Locator {
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
    return this.page.locator('form#redirectForm');
  }

  get menuOpenInViAppSignInSignInDashboardMyAccountPrepaid(): Locator {
    return this.page.getByRole('navigation', { name: "open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs" });
  }

  get menuHomeBillAutopayMandateSetup(): Locator {
    return this.page.getByRole('navigation', { name: "Home bill autopay mandate setup" });
  }

  constructor(page: Page) {
    super(page);
  }
}
