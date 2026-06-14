import { Page, Locator } from '@playwright/test';
import { BasePage } from '../../BasePage';

export class EnjoyNetflixSubscriptionPlansWithViAtNoExtraCost extends BasePage {
  readonly url = "https://www.myvi.in/netflix-subscription-plans";

  // All element locators are generated dynamically using locator strategies

  get headingEnjoyNetflixSubscriptionPlansWithVi(): Locator {
    return this.page.getByRole('heading', { name: "Enjoy Netflix Subscription Plans with Vi" });
  }

  get headingCheckOutOurPlans(): Locator {
    return this.page.getByRole('heading', { name: "check out our plans" });
  }

  get headingYourCurrentLocation(): Locator {
    return this.page.getByRole('heading', { name: "your current location" });
  }

  get headingYouAreHalfWayThere(): Locator {
    return this.page.getByRole('heading', { name: "you are half way there!" });
  }

  get headingHeyXxxxxxxxxxxYouAreMakingAGreatChoiceToChangeYour(): Locator {
    return this.page.getByRole('heading', { name: "Hey xxxxxxxxxxx, you are making a great choice to change your plan to REDX" });
  }

  get headingPleaseAgreeToTheTermsToUpgradeYourPlanToRedx(): Locator {
    return this.page.getByRole('heading', { name: "please agree to the terms to upgrade your plan to RedX" });
  }

  get headingJustToMakeSureItSYou(): Locator {
    return this.page.getByRole('heading', { name: "just to make sure it’s you," });
  }

  get headingWeVeSentAnOtpToYourViNumberAndRegisteredEmailPle(): Locator {
    return this.page.getByRole('heading', { name: "we've sent an OTP to your Vi number ***** and registered email - please check yo" });
  }

  get headingItSVerySimpleToGetStarted(): Locator {
    return this.page.getByRole('heading', { name: "it’s very simple to get started" });
  }

  get headingWatchExclusiveNetflixSpecials(): Locator {
    return this.page.getByRole('heading', { name: "watch exclusive Netflix specials" });
  }

  get headingViNetflixSubscriptionPlansFaqs(): Locator {
    return this.page.getByRole('heading', { name: "Vi Netflix Subscription Plans FAQs" });
  }

  get headingPrepaid(): Locator {
    return this.page.getByRole('heading', { name: "Prepaid" });
  }

  get heading1WhatIsTheValidityOfTheNetflixBenefitWithViBundle(): Locator {
    return this.page.getByRole('heading', { name: "1. What is the validity of the Netflix benefit with Vi bundle pack?" });
  }

  get heading2ILinkedAnAccountToMyPlanButICanTRememberMyEma(): Locator {
    return this.page.getByRole('heading', { name: "2. I linked an account to my plan but I can’t remember my email address to sign" });
  }

  get heading3IHaveANetflixAccountButICanTSignInToLinkMyAc(): Locator {
    return this.page.getByRole('heading', { name: "3. I have a Netflix account, but I can’t sign in to link my account to my plan." });
  }

  get heading4WhatWillHappenToMyNetflixAccountIfICancelPauseO(): Locator {
    return this.page.getByRole('heading', { name: "4. What will happen to my Netflix account if I cancel, pause, or change my Vi pl" });
  }

  get heading5IMAlreadyPayingForANetflixAccountCanILinkMyExi(): Locator {
    return this.page.getByRole('heading', { name: "5. I’m already paying for a Netflix account. Can I link my existing Netflix acco" });
  }

  get heading6IfIRechargeAgainWithTheNetflixBundlePackWillIGe(): Locator {
    return this.page.getByRole('heading', { name: "6. If I Recharge again with the Netflix bundle pack, will I get the offer again?" });
  }

  get heading7CanIWatchNetflixOnMoreThan1Device(): Locator {
    return this.page.getByRole('heading', { name: "7. Can I watch Netflix on more than 1 device?" });
  }

  get heading8ISignedUpForAViPlanThatIncludesNetflixHowDoIL(): Locator {
    return this.page.getByRole('heading', { name: "8. I signed up for a Vi plan that includes Netflix. How do I link an existing Ne" });
  }

  get heading9IAccidentallyLinkedTheWrongNetflixAccountToMyViP(): Locator {
    return this.page.getByRole('heading', { name: "9. I accidentally linked the wrong Netflix account to my Vi plan. What should I" });
  }

  get heading10HowDoIManageMyNetflixMembership(): Locator {
    return this.page.getByRole('heading', { name: "10. How do I manage my Netflix membership?" });
  }

  get heading11IMLookingForATvShowOrAMovieOnNetflixAndCanT(): Locator {
    return this.page.getByRole('heading', { name: "11. I'm looking for a TV show or a movie on Netflix and can't find it. My favour" });
  }

  get heading12HowCanIContactNetflixCustomerSupport(): Locator {
    return this.page.getByRole('heading', { name: "12. How can I contact Netflix customer support?" });
  }

  get heading13WhereCanIWatchNetflix(): Locator {
    return this.page.getByRole('heading', { name: "13. Where can I watch Netflix?" });
  }

  get heading14ISignedUpForAViPlanThatIncludesNetflixWillMyE(): Locator {
    return this.page.getByRole('heading', { name: "14. I signed up for a Vi plan that includes Netflix. Will my existing Netflix ac" });
  }

  get heading15IfACustomerWhileActiveOnNetflixServicesRecharges(): Locator {
    return this.page.getByRole('heading', { name: "15. If a customer, while active on Netflix Services, recharges with another MRP" });
  }

  get headingPostpaid(): Locator {
    return this.page.getByRole('heading', { name: "Postpaid" });
  }

  get heading1WhatAreThePostpaidPlansWhereICanAvailTheNetflix(): Locator {
    return this.page.getByRole('heading', { name: "1. What are the Postpaid plans where I can avail the Netflix subscription?" });
  }

  get heading2IMAlreadyPayingForANetflixAccountCanILinkMyExi(): Locator {
    return this.page.getByRole('heading', { name: "2. I’m already paying for a Netflix account. Can I link my existing Netflix acco" });
  }

  get heading3ISignedUpForAViPlanThatIncludesNetflixWillMyEx(): Locator {
    return this.page.getByRole('heading', { name: "3. I signed up for a Vi plan that includes Netflix, will my existing Netflix acc" });
  }

  get heading4CanIChangeMyNetflixSubscriptionFromNetflixBasicTo(): Locator {
    return this.page.getByRole('heading', { name: "4. Can I change my Netflix subscription from Netflix Basic to Standard/ Premium?" });
  }

  get heading5ISignedUpForAViPlanThatIncludesNetflixHowDoIL(): Locator {
    return this.page.getByRole('heading', { name: "5. I signed up for a Vi plan that includes Netflix. How do I link an existing Ne" });
  }

  get heading6IAccidentallyLinkedTheWrongNetflixAccountToMyViP(): Locator {
    return this.page.getByRole('heading', { name: "6. I accidentally linked the wrong Netflix account to my Vi plan. What should I" });
  }

  get heading7CanIWatchNetflixOnMoreThanOneDevice(): Locator {
    return this.page.getByRole('heading', { name: "7. Can I watch Netflix on more than one device?" });
  }

  get heading8HowDoIManageMyNetflixMembership(): Locator {
    return this.page.getByRole('heading', { name: "8. How do I manage my Netflix membership?" });
  }

  get heading9WhatIsTheValidityOfTheNetflixBenefitWithViRedxP(): Locator {
    return this.page.getByRole('heading', { name: "9. What is the validity of the Netflix benefit with Vi Redx Plan?" });
  }

  get heading10WhatWillHappenInCaseTheUserWantsToLinkSameEmai(): Locator {
    return this.page.getByRole('heading', { name: "10. What will happen in case the user wants to link same email id with multiple" });
  }

  get heading11IHaveANetflixAccountButICanTSignInToLinkMyA(): Locator {
    return this.page.getByRole('heading', { name: "11. I have a Netflix account, but I can’t sign in to link my account to my plan" });
  }

  get heading12ILinkedAnAccountToMyPlanButICanTRememberMyEm(): Locator {
    return this.page.getByRole('heading', { name: "12. I linked an account to my plan but I can’t remember my email address to sign" });
  }

  get heading13IMLookingForATvShowOrAMovieOnNetflixAndCanT(): Locator {
    return this.page.getByRole('heading', { name: "13. I'm looking for a TV show or a movie on Netflix and can't find it. My favori" });
  }

  get heading14WhatWillHappenToMyNetflixAccountIfICancelPause(): Locator {
    return this.page.getByRole('heading', { name: "14. What will happen to my Netflix account if I cancel, pause, or change my Vi p" });
  }

  get heading15WhereCanIWatchNetflix(): Locator {
    return this.page.getByRole('heading', { name: "15. Where can I watch Netflix?" });
  }

  get heading16HowCanIContactNetflixCustomerSupport(): Locator {
    return this.page.getByRole('heading', { name: "16. How can I contact Netflix customer support?" });
  }

  get headingWeVeSentAnOtpToYourViNumberSpanIdLastmsisdnSpan(): Locator {
    return this.page.getByRole('heading', { name: "we've sent an OTP to your Vi number <span id='lastMsisdn'>*****</span> and regis" });
  }

  get headingMumbai(): Locator {
    return this.page.getByRole('heading', { name: "Mumbai" });
  }

  get link0(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/netflix-subscription-plans#"]');
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
    return this.page.locator('a[href="https://www.myvi.in/netflix-subscription-plans#"]');
  }

  get linkDashboard1(): Locator {
    return this.page.getByRole('link', { name: "Dashboard" });
  }

  get linkMyAccount1(): Locator {
    return this.page.getByRole('link', { name: "My Account" });
  }

  get linkPostpaid1(): Locator {
    return this.page.getByRole('link', { name: "Postpaid" });
  }

  get linkPrepaid1(): Locator {
    return this.page.getByRole('link', { name: "Prepaid" });
  }

  get linkIndividualPlans(): Locator {
    return this.page.getByRole('link', { name: "Individual plans" });
  }

  get linkFamilyPlans(): Locator {
    return this.page.getByRole('link', { name: "Family plans" });
  }

  get linkTermsConditions(): Locator {
    return this.page.getByRole('link', { name: "terms & conditions" });
  }

  get linkDownloadViApp(): Locator {
    return this.page.getByRole('link', { name: "download Vi app" });
  }

  get linkResend(): Locator {
    return this.page.getByRole('link', { name: "Resend" });
  }

  get linkViApp(): Locator {
    return this.page.getByRole('link', { name: "Vi app" });
  }

  get linkHelpNetflixCom(): Locator {
    return this.page.getByRole('link', { name: "help.netflix.com" });
  }

  get linkExternalDomain(): Locator {
    return this.page.getByRole('link', { name: "External Domain" });
  }

  get linkHelpNetflixCom1(): Locator {
    return this.page.getByRole('link', { name: "help.netflix.com" });
  }

  get linkHelpNetflixCom2(): Locator {
    return this.page.getByRole('link', { name: "help.netflix.com" });
  }

  get linkHelpNetflixCom3(): Locator {
    return this.page.getByRole('link', { name: "help.netflix.com" });
  }

  get linkNetflixComLogin(): Locator {
    return this.page.getByRole('link', { name: "netflix.com/Login" });
  }

  get linkHttpsHelpNetflixComNode14361(): Locator {
    return this.page.getByRole('link', { name: "https://help.netflix.com/node/14361" });
  }

  get linkHelpNetflixCom4(): Locator {
    return this.page.getByRole('link', { name: "help.netflix.com" });
  }

  get linkResendOtp(): Locator {
    return this.page.getByRole('link', { name: "Resend OTP" });
  }

  get link90(): Locator {
    return this.page.locator('a[href="https://www.facebook.com/ViOfficialFanWorld/"]');
  }

  get link91(): Locator {
    return this.page.locator('a[href="https://instagram.com/viofficialfanworld"]');
  }

  get link92(): Locator {
    return this.page.locator('a[href="https://twitter.com/ViCustomerCare"]');
  }

  get link93(): Locator {
    return this.page.locator('a[href="https://www.youtube.com/channel/UCHLTL1DEP_zelqLvUlYaV8Q"]');
  }

  get link94(): Locator {
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

  get linkIndividualPlans1(): Locator {
    return this.page.getByRole('link', { name: "Individual Plans" });
  }

  get linkFamilyPlans1(): Locator {
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

  get buttonExplorePacks(): Locator {
    return this.page.getByRole('button', { name: "explore packs" });
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

  get buttonProceedWith399Plan(): Locator {
    return this.page.getByRole('button', { name: "proceed with Ã¢â€šÂ¹399 plan" });
  }

  get buttonBuy(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy1(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonProceedToPayment(): Locator {
    return this.page.getByRole('button', { name: "proceed to payment" });
  }

  get buttonBuy2(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonCircleMaharashtraGoa(): Locator {
    return this.page.getByRole('button', { name: "circle Maharashtra & Goa" });
  }

  get buttonProceed(): Locator {
    return this.page.getByRole('button', { name: "proceed" });
  }

  get buttonSendOtp(): Locator {
    return this.page.getByRole('button', { name: "send otp" });
  }

  get buttonUpgradePlan(): Locator {
    return this.page.getByRole('button', { name: "upgrade plan" });
  }

  get buttonUpgradePlan1(): Locator {
    return this.page.getByRole('button', { name: "upgrade plan" });
  }

  get buttonUpgradePlan2(): Locator {
    return this.page.getByRole('button', { name: "upgrade plan" });
  }

  get buttonChangePlan(): Locator {
    return this.page.getByRole('button', { name: "change plan" });
  }

  get buttonVerify(): Locator {
    return this.page.getByRole('button', { name: "verify" });
  }

  get buttonSeeMore(): Locator {
    return this.page.getByRole('button', { name: "see more" });
  }

  get buttonVerifyOtp(): Locator {
    return this.page.getByRole('button', { name: "verify otp" });
  }

  get buttonMumbai(): Locator {
    return this.page.getByRole('button', { name: "Mumbai" });
  }

  get buttonProceed1(): Locator {
    return this.page.getByRole('button', { name: "PROCEED" });
  }

  get buttonPay(): Locator {
    return this.page.getByRole('button', { name: "pay" });
  }

  get buttonProceed2(): Locator {
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

  get buttonSendOtp1(): Locator {
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

  get inputNetflixshowimg(): Locator {
    return this.page.locator('input[name="netflixShowImg"]');
  }

  get inputNetflixshowimgmob(): Locator {
    return this.page.locator('input[name="netflixShowImgMob"]');
  }

  get inputNetflixanimationtime(): Locator {
    return this.page.locator('input[name="netflixAnimationtime"]');
  }

  get input8(): Locator {
    return this.page.locator('input');
  }

  get input9(): Locator {
    return this.page.locator('input');
  }

  get input10(): Locator {
    return this.page.locator('input');
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

  get inputSrnumberthankyou(): Locator {
    return this.page.locator('input[name="srnumberthankyou"]');
  }

  get inputThankyouflagsr(): Locator {
    return this.page.locator('input[name="thankyouflagsr"]');
  }

  get input17(): Locator {
    return this.page.locator('input');
  }

  get input18(): Locator {
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

  get input29(): Locator {
    return this.page.locator('input');
  }

  get input30(): Locator {
    return this.page.locator('input');
  }

  get input31(): Locator {
    return this.page.locator('input');
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

  get input47(): Locator {
    return this.page.locator('input');
  }

  get input48(): Locator {
    return this.page.locator('input');
  }

  get input49(): Locator {
    return this.page.locator('input');
  }

  get input50(): Locator {
    return this.page.locator('input');
  }

  get inputEnterViPrepaidNumber(): Locator {
    return this.page.getByPlaceholder("enter Vi prepaid number");
  }

  get input52(): Locator {
    return this.page.locator('input');
  }

  get input53(): Locator {
    return this.page.locator('input');
  }

  get inputJsondata(): Locator {
    return this.page.locator('input[name="jsondata"]');
  }

  get inputError(): Locator {
    return this.page.locator('input[name="error"]');
  }

  get inputParamdetails(): Locator {
    return this.page.locator('input[name="paramDetails"]');
  }

  get inputProductdetailsinjsonformat(): Locator {
    return this.page.locator('input[name="productDetailsInJsonFormat"]');
  }

  get inputCoupondetailsinjsonformat(): Locator {
    return this.page.locator('input[name="couponDetailsInJsonFormat"]');
  }

  get inputActualpackamount(): Locator {
    return this.page.locator('input[name="actualPackAmount"]');
  }

  get inputMrpvaluesnew(): Locator {
    return this.page.locator('input[name="mrpValuesNew"]');
  }

  get inputInputnontelcobenefitid(): Locator {
    return this.page.locator('input[name="inputnonTelcoBenefitId"]');
  }

  get inputEnterViPostpaidNumber(): Locator {
    return this.page.getByPlaceholder("enter Vi postpaid number");
  }

  get inputFiltercheckbox1(): Locator {
    return this.page.locator('input[name="filterCheckbox1"]');
  }

  get inputEnterOtpHere(): Locator {
    return this.page.getByPlaceholder("enter otp");
  }

  get inputError1(): Locator {
    return this.page.locator('input[name="error"]');
  }

  get inputSafecustodysuspendnumber(): Locator {
    return this.page.locator('input[name="safecustodysuspendnumber"]');
  }

  get inputSafecustodysimlostnumber(): Locator {
    return this.page.locator('input[name="safecustodysimlostnumber"]');
  }

  get inputIndiplansunit1(): Locator {
    return this.page.locator('input[name="indiplansunit"]');
  }

  get inputIslargeimg1(): Locator {
    return this.page.locator('input[name="islargeimg"]');
  }

  get inputAlreadyredxpage(): Locator {
    return this.page.locator('input[name="alreadyRedxPage"]');
  }

  get inputOtpsectionsubheading(): Locator {
    return this.page.locator('input[name="otpSectionSubHeading"]');
  }

  get inputBillchangeerror1(): Locator {
    return this.page.locator('input[name="billchangeerror"]');
  }

  get inputRedirectionlink1(): Locator {
    return this.page.locator('input[name="redirectionLink"]');
  }

  get inputMobilenumber(): Locator {
    return this.page.locator('input[name="mobileNumber"]');
  }

  get inputSrorder(): Locator {
    return this.page.locator('input[name="srOrder"]');
  }

  get inputSrdate(): Locator {
    return this.page.locator('input[name="srdate"]');
  }

  get inputSrtime(): Locator {
    return this.page.locator('input[name="srtime"]');
  }

  get inputPlancost(): Locator {
    return this.page.locator('input[name="plancost"]');
  }

  get inputEnctyptedanalyticsnumber(): Locator {
    return this.page.locator('input[name="enctyptedanalyticsNumber"]');
  }

  get inputAnalyticscircle(): Locator {
    return this.page.locator('input[name="analyticsCircle"]');
  }

  get inputVilbrand(): Locator {
    return this.page.locator('input[name="vilbrand"]');
  }

  get inputVillob(): Locator {
    return this.page.locator('input[name="villob"]');
  }

  get inputUsecase(): Locator {
    return this.page.locator('input[name="usecase"]');
  }

  get inputOtpcheckflowid(): Locator {
    return this.page.locator('input[name="otpCheckFlowId"]');
  }

  get inputPostpaidotpdescaftr(): Locator {
    return this.page.locator('input[name="postpaidotpdescaftr"]');
  }

  get inputOtpnounsuccessful(): Locator {
    return this.page.locator('input[name="otpnounsuccessful"]');
  }

  get inputOtp1(): Locator {
    return this.page.locator('input[name="otp1"]');
  }

  get inputOtp2(): Locator {
    return this.page.locator('input[name="otp2"]');
  }

  get inputOtp3(): Locator {
    return this.page.locator('input[name="otp3"]');
  }

  get inputOtp4(): Locator {
    return this.page.locator('input[name="otp4"]');
  }

  get inputOtperr(): Locator {
    return this.page.locator('input[name="otpErr"]');
  }

  get inputOtpsmsmessage(): Locator {
    return this.page.locator('input[name="otpsmsmessage"]');
  }

  get inputNoteligible(): Locator {
    return this.page.locator('input[name="noteligible"]');
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

  get inputQuickpayflowflag(): Locator {
    return this.page.locator('input[name="quickPayFlowFlag"]');
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

  get form2(): Locator {
    return this.page.locator('form#pgForm');
  }

  get formThankyoupageplans(): Locator {
    return this.page.locator('form[name="thankyoupageplans"]');
  }

  get table0(): Locator {
    return this.page.locator('table');
  }

  get menuOpenInViAppSignInSignInDashboardMyAccountPrepaid(): Locator {
    return this.page.getByRole('navigation', { name: "open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs" });
  }

  constructor(page: Page) {
    super(page);
  }
}
