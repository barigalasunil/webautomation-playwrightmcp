import { Page, Locator } from '@playwright/test';
import { BasePage } from '../../BasePage';

export class PrivacyPolicyVi extends BasePage {
  readonly url = "https://www.myvi.in/privacy-policy";

  // All element locators are generated dynamically using locator strategies

  get headingPrivacyMatters(): Locator {
    return this.page.getByRole('heading', { name: "Privacy Matters" });
  }

  get headingPrivacyPolicy(): Locator {
    return this.page.getByRole('heading', { name: "privacy policy" });
  }

  get headingWhoWeAre(): Locator {
    return this.page.getByRole('heading', { name: "Who we are :" });
  }

  get headingCollectionOfPersonalInformation(): Locator {
    return this.page.getByRole('heading', { name: "Collection of personal information" });
  }

  get headingUseOfPersonalInformation(): Locator {
    return this.page.getByRole('heading', { name: "Use of Personal Information" });
  }

  get headingHowDoWeStoreYourPersonalInformation(): Locator {
    return this.page.getByRole('heading', { name: "How do we store your Personal Information?" });
  }

  get headingHowDoWeProtectYourPersonalInformation(): Locator {
    return this.page.getByRole('heading', { name: "How do We Protect Your Personal Information" });
  }

  get headingUseOfCookiesAndTechnologies(): Locator {
    return this.page.getByRole('heading', { name: "Use of cookies and technologies" });
  }

  get headingDisclosureSharingAndTransferOfPersonalInformationPi(): Locator {
    return this.page.getByRole('heading', { name: "Disclosure, Sharing and Transfer of Personal Information (PI)" });
  }

  get headingViAppAndItsPermissions(): Locator {
    return this.page.getByRole('heading', { name: "Vi App and its Permissions" });
  }

  get headingContactUs(): Locator {
    return this.page.getByRole('heading', { name: "contact us" });
  }

  get headingFrequentlyAskedQuestions(): Locator {
    return this.page.getByRole('heading', { name: "frequently asked questions" });
  }

  get headingWhatIsPersonalData(): Locator {
    return this.page.getByRole('heading', { name: "what is personal data?" });
  }

  get headingHowDoYouCollectPersonalDataFromMe(): Locator {
    return this.page.getByRole('heading', { name: "how do you collect personal data from me?" });
  }

  get headingWhatTypesOfPersonalDataDoYouCollect(): Locator {
    return this.page.getByRole('heading', { name: "what types of personal data do you collect?" });
  }

  get headingWhatDoYouUseTheDataFor(): Locator {
    return this.page.getByRole('heading', { name: "what do you use the data for?" });
  }

  get headingWhatLegalBasesDoYouRelyOnToProcessMyPersonalData(): Locator {
    return this.page.getByRole('heading', { name: "what legal bases do you rely on to process my personal data?" });
  }

  get headingHowDoIKnowThatMyPersonalDataYouMaintainAboutMeIs(): Locator {
    return this.page.getByRole('heading', { name: "how do I know that my personal data you maintain about me is safe?" });
  }

  get headingHowDoIManageMyEmailPreferencesOrStopReceivingEmail(): Locator {
    return this.page.getByRole('heading', { name: "how do I manage my email preferences or stop receiving email from VIL?" });
  }

  get headingWhatAreMyRights(): Locator {
    return this.page.getByRole('heading', { name: "what are my rights?" });
  }

  get headingWhatAreCookies(): Locator {
    return this.page.getByRole('heading', { name: "what are cookies?" });
  }

  get headingWhatTypesOfCookiesDoesVilUse(): Locator {
    return this.page.getByRole('heading', { name: "what types of cookies does VIL use?" });
  }

  get headingHowLongDoCookiesStayOnMyDevice(): Locator {
    return this.page.getByRole('heading', { name: "how long do cookies stay on my device?" });
  }

  get headingHowCanIManageCookies(): Locator {
    return this.page.getByRole('heading', { name: "how can I manage cookies?" });
  }

  get headingWhatAreSomeSafetyRulesToBeFollowedByChildrenIndivi(): Locator {
    return this.page.getByRole('heading', { name: "what are some safety rules to be followed by children (Individuals aged below 18" });
  }

  get headingWarningAndFraudulent(): Locator {
    return this.page.getByRole('heading', { name: "warning and fraudulent" });
  }

  get headingFrequentlyAskedQuestions1(): Locator {
    return this.page.getByRole('heading', { name: "frequently asked questions" });
  }

  get headingWhatIsPhishing(): Locator {
    return this.page.getByRole('heading', { name: "What is Phishing?" });
  }

  get headingHowCanIIdentifyAPhishingScam(): Locator {
    return this.page.getByRole('heading', { name: "How can I identify a Phishing scam?" });
  }

  get headingWhatShouldWeKeepInMindToAvoidPhishingAttacks(): Locator {
    return this.page.getByRole('heading', { name: "What should we keep in mind to avoid phishing attacks?" });
  }

  get headingSecurityAwareness(): Locator {
    return this.page.getByRole('heading', { name: "Security Awareness" });
  }

  get headingSafeInternetUseForYourChildren(): Locator {
    return this.page.getByRole('heading', { name: "safe internet use for your children" });
  }

  get headingEssentialsChecklist(): Locator {
    return this.page.getByRole('heading', { name: "‘Essentials' checklist" });
  }

  get headingParentalControlTools(): Locator {
    return this.page.getByRole('heading', { name: "parental control tools" });
  }

  get headingTipsForSafeInternetUse(): Locator {
    return this.page.getByRole('heading', { name: "tips for safe internet use" });
  }

  get headingSafeInternetUseForYourChildren1(): Locator {
    return this.page.getByRole('heading', { name: "safe internet use for your children" });
  }

  get headingQuickEssentialsChecklist(): Locator {
    return this.page.getByRole('heading', { name: "quick ‘Essentials’ checklist" });
  }

  get headingTipsForSafeInternetUseForChildrenAndYoungAdults(): Locator {
    return this.page.getByRole('heading', { name: "tips for safe internet use for children and young adults" });
  }

  get headingEffortlessAccountManagementOnTheGo(): Locator {
    return this.page.getByRole('heading', { name: "effortless account management on-the-go" });
  }

  get link0(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/privacy-policy#"]');
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
    return this.page.locator('a[href="https://www.myvi.in/privacy-policy#"]');
  }

  get linkDashboard1(): Locator {
    return this.page.getByRole('link', { name: "Dashboard" });
  }

  get linkMyAccount1(): Locator {
    return this.page.getByRole('link', { name: "My Account" });
  }

  get linkPrivacyPolicy(): Locator {
    return this.page.getByRole('link', { name: "privacy policy" });
  }

  get linkFraudPrevention(): Locator {
    return this.page.getByRole('link', { name: "fraud prevention" });
  }

  get linkSecurityAwareness(): Locator {
    return this.page.getByRole('link', { name: "security awareness" });
  }

  get linkWwwMyviIn(): Locator {
    return this.page.getByRole('link', { name: "www.myvi.in" });
  }

  get linkWwwMyviIn1(): Locator {
    return this.page.getByRole('link', { name: "www.myvi.in" });
  }

  get linkWwwMyviIn2(): Locator {
    return this.page.getByRole('link', { name: "www.myvi.in" });
  }

  get linkViewMore(): Locator {
    return this.page.getByRole('link', { name: "view more" });
  }

  get linkViewMore1(): Locator {
    return this.page.getByRole('link', { name: "view more" });
  }

  get linkTheseSteps(): Locator {
    return this.page.getByRole('link', { name: "these steps" });
  }

  get linkViewMore2(): Locator {
    return this.page.getByRole('link', { name: "view more" });
  }

  get linkViewMore3(): Locator {
    return this.page.getByRole('link', { name: "view more" });
  }

  get linkViewMore4(): Locator {
    return this.page.getByRole('link', { name: "view more" });
  }

  get linkViewMore5(): Locator {
    return this.page.getByRole('link', { name: "view more" });
  }

  get linkViewMore6(): Locator {
    return this.page.getByRole('link', { name: "view more" });
  }

  get linkViewMore7(): Locator {
    return this.page.getByRole('link', { name: "view more" });
  }

  get linkDnd(): Locator {
    return this.page.getByRole('link', { name: "DND" });
  }

  get linkAppellateAuthority(): Locator {
    return this.page.getByRole('link', { name: "Appellate Authority" });
  }

  get linkAppellateAuthorityViMyviIn(): Locator {
    return this.page.getByRole('link', { name: "Appellate Authority | Vi (myvi.in)" });
  }

  get linkViewMore8(): Locator {
    return this.page.getByRole('link', { name: "view more" });
  }

  get linkSafeInternetUseForYourChildren(): Locator {
    return this.page.getByRole('link', { name: "safe internet use for your children" });
  }

  get linkEssentialsChecklist(): Locator {
    return this.page.getByRole('link', { name: "‘Essentials' checklist" });
  }

  get linkParentalControlTools(): Locator {
    return this.page.getByRole('link', { name: "parental control tools" });
  }

  get linkTipsForSafeInternetUse(): Locator {
    return this.page.getByRole('link', { name: "tips for safe internet use" });
  }

  get linkHttpsWwwItuCopGuidelinesComParentsandeducators(): Locator {
    return this.page.getByRole('link', { name: "https://www.itu-cop-guidelines.com/parentsandeducators" });
  }

  get linkHttpsWwwItuIntEnMediacentrePagesPr102020Guidelines(): Locator {
    return this.page.locator('a[href="https://www.itu.int/en/mediacentre/Pages/pr10-2020-Guidelines-Child-Online-Protecion.aspx"]');
  }

  get link98(): Locator {
    return this.page.locator('a[href="https://www.apple.com/in/ios/app-store/"]');
  }

  get link99(): Locator {
    return this.page.locator('a[href="https://play.google.com/store?hl=en"]');
  }

  get linkHome(): Locator {
    return this.page.getByRole('link', { name: "Home" });
  }

  get linkPrivacyPolicy1(): Locator {
    return this.page.getByRole('link', { name: "Privacy Policy" });
  }

  get link102(): Locator {
    return this.page.locator('a[href="https://www.facebook.com/ViOfficialFanWorld/"]');
  }

  get link103(): Locator {
    return this.page.locator('a[href="https://instagram.com/viofficialfanworld"]');
  }

  get link104(): Locator {
    return this.page.locator('a[href="https://twitter.com/ViCustomerCare"]');
  }

  get link105(): Locator {
    return this.page.locator('a[href="https://www.youtube.com/channel/UCHLTL1DEP_zelqLvUlYaV8Q"]');
  }

  get link106(): Locator {
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

  get linkPrivacyPolicy2(): Locator {
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

  get linkSecurityAwareness1(): Locator {
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

  get linkPrivacyPolicy3(): Locator {
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

  get buttonSeeMore(): Locator {
    return this.page.getByRole('button', { name: "see more" });
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

  get form0(): Locator {
    return this.page.locator('form#globalsearchsubmitForm');
  }

  get menuOpenInViAppSignInSignInDashboardMyAccountPrepaid(): Locator {
    return this.page.getByRole('navigation', { name: "open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs" });
  }

  get menuWhoWeAreCollectionOfPersonalInformationUseOfPersona(): Locator {
    return this.page.getByRole('navigation', { name: "Who we are Collection of personal information Use of Personal Information How do" });
  }

  get menuHomePrivacyPolicy(): Locator {
    return this.page.getByRole('navigation', { name: "Home Privacy Policy" });
  }

  constructor(page: Page) {
    super(page);
  }
}
