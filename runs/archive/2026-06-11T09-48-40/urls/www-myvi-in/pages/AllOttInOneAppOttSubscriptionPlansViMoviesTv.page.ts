import { Page, Locator } from '@playwright/test';
import { BasePage } from '../../BasePage';

export class AllOttInOneAppOttSubscriptionPlansViMoviesTv extends BasePage {
  readonly url = "https://www.myvi.in/vi-movies-and-tv/all-ott-in-one-app";

  // All element locators are generated dynamically using locator strategies

  get headingAllInOneOttAppUnlockAndWatch13OttsInJustOneApp(): Locator {
    return this.page.getByRole('heading', { name: "All in One OTT App - unlock and watch 13+ OTTs in just one app!" });
  }

  get headingLatestReleasesAtYourFingertips(): Locator {
    return this.page.getByRole('heading', { name: "latest releases at your fingertips" });
  }

  get headingTrendingOttContentRecommendations(): Locator {
    return this.page.getByRole('heading', { name: "trending OTT content recommendations" });
  }

  get headingCatchTheLatestOn400LiveChannels(): Locator {
    return this.page.getByRole('heading', { name: "catch the latest on 400+ live channels" });
  }

  get headingWatchContentIn16Languages(): Locator {
    return this.page.getByRole('heading', { name: "watch content in 16+ languages" });
  }

  get headingWatchAnywhereOnAnyDevice(): Locator {
    return this.page.getByRole('heading', { name: "watch anywhere, on any device" });
  }

  get headingWithOneSignInFor13Otts(): Locator {
    return this.page.getByRole('heading', { name: "with one sign-in for 13+ OTTs" });
  }

  get headingCheaperThanAMovieTicket(): Locator {
    return this.page.getByRole('heading', { name: "cheaper than a movie ticket !" });
  }

  get headingFrequentlyAskedQuestionsFaqs(): Locator {
    return this.page.getByRole('heading', { name: "Frequently Asked Questions (FAQs)" });
  }

  get headingGeneral(): Locator {
    return this.page.getByRole('heading', { name: "General" });
  }

  get headingWhatIsViMoviesTv(): Locator {
    return this.page.getByRole('heading', { name: "What is Vi Movies & TV?" });
  }

  get headingWhereCanIWatchViMoviesTv(): Locator {
    return this.page.getByRole('heading', { name: "Where can I watch Vi Movies & TV?" });
  }

  get headingHowManyDevicesCanILogInAtATime(): Locator {
    return this.page.getByRole('heading', { name: "How many devices can I log in at a time?" });
  }

  get headingOnHowManyDevicesScreensCanIWatchTheSameContentAt(): Locator {
    return this.page.getByRole('heading', { name: "On how many devices / screens can I watch the same content at a time?" });
  }

  get headingWhatAreTheChargesToWatchContentOnViMoviesTv(): Locator {
    return this.page.getByRole('heading', { name: "What are the charges to watch content on Vi Movies & TV?" });
  }

  get headingWhyDoIGetRedirectedOutsideTheAppWhenClickingSomeP(): Locator {
    return this.page.getByRole('heading', { name: "Why do I get redirected outside the app when clicking some particular content?" });
  }

  get headingDoINeedToDownload3rdPartnerOttAppsSeparatelyForCo(): Locator {
    return this.page.getByRole('heading', { name: "Do I need to download 3rd partner OTT apps separately for content available on V" });
  }

  get headingCanILoginOnThirdPartyAppsDirectly(): Locator {
    return this.page.getByRole('heading', { name: "Can I login on third party apps directly?" });
  }

  get headingWhatAreTheBenefitsThatAsAUserIWillGetFromTheVi(): Locator {
    return this.page.getByRole('heading', { name: "What are the benefits that, as a user, I will get from the Vi Movies & TV servic" });
  }

  get headingHowManyLiveTvChannelsAreThereOnViMoviesTv(): Locator {
    return this.page.getByRole('heading', { name: "How many Live TV channels are there on Vi Movies & TV?" });
  }

  get headingWhereCanIFindViMoviesTvApp(): Locator {
    return this.page.getByRole('heading', { name: "Where can I find Vi Movies & TV app?" });
  }

  get headingWhatAreTheApplicableTermsConditionsForThisService(): Locator {
    return this.page.getByRole('heading', { name: "What are the applicable Terms & Conditions for this service?" });
  }

  get headingAdditionalFaq(): Locator {
    return this.page.getByRole('heading', { name: "Additional FAQ" });
  }

  get headingIsThereAnyAllInOneOttSubscriptionPack(): Locator {
    return this.page.getByRole('heading', { name: "Is there any all-in-one OTT subscription pack?" });
  }

  get headingWhatIsABundledOttSubscription(): Locator {
    return this.page.getByRole('heading', { name: "What is a bundled OTT subscription?" });
  }

  get headingWhatAreTheBenefitsOfAllOttSubscriptionsWithOnePack(): Locator {
    return this.page.getByRole('heading', { name: "What are the benefits of all OTT subscriptions with one pack?" });
  }

  get headingWhatIsTheBundledOttSubscriptionPrice(): Locator {
    return this.page.getByRole('heading', { name: "What is the bundled OTT subscription price?" });
  }

  get headingAreAllOttPlatformsIncludedInOneApp(): Locator {
    return this.page.getByRole('heading', { name: "Are all OTT platforms included in one app?" });
  }

  get headingIsTheOttBundleSubscriptionForTvOrMobile(): Locator {
    return this.page.getByRole('heading', { name: "Is the OTT bundle subscription for TV or mobile?" });
  }

  get headingWhatAreTheDifferentOttBundlePlans(): Locator {
    return this.page.getByRole('heading', { name: "What are the different OTT bundle plans?" });
  }

  get headingSubscriptionRelated(): Locator {
    return this.page.getByRole('heading', { name: "Subscription related" });
  }

  get headingDoINeedSubscriptionToWatchContentOnViMoviesTv(): Locator {
    return this.page.getByRole('heading', { name: "Do I need subscription to watch content on Vi Movies & TV?" });
  }

  get headingWhereCanICheckMyCurrentSubscriptionPlanOrKnowExpir(): Locator {
    return this.page.getByRole('heading', { name: "Where can I check my current subscription plan or know expiry date?" });
  }

  get headingWhatWillHappenToMyCurrentVimtvSubscriptionIfIRecha(): Locator {
    return this.page.getByRole('heading', { name: "What will happen to my current ViMTV subscription if I recharge with a different" });
  }

  get headingSomeContentIsPlayingWhileSomeAreNotPlayingForMeIt(): Locator {
    return this.page.getByRole('heading', { name: "Some content is playing while some are not playing for me. It keeps asking me to" });
  }

  get headingIAmAViPostpaidUserWhyDoesTheAppAskMeToAddToBi(): Locator {
    return this.page.getByRole('heading', { name: "I am a Vi postpaid user. Why does the app ask me to add to bill?" });
  }

  get headingIsThisServiceForPrepaidOrPostpaidSubscribers(): Locator {
    return this.page.getByRole('heading', { name: "Is this service for prepaid or postpaid subscribers?" });
  }

  get headingHowDoIActivateViMoviesTv(): Locator {
    return this.page.getByRole('heading', { name: "How do I activate Vi Movies & TV?" });
  }

  get headingHowCanICancelTheViMoviesTvSubscription(): Locator {
    return this.page.getByRole('heading', { name: "How can I cancel the Vi Movies & TV subscription?" });
  }

  get headingViMoviesTvMobileApps(): Locator {
    return this.page.getByRole('heading', { name: "Vi Movies & TV Mobile apps" });
  }

  get headingIsViMoviesTvAppAvailableOnAndroidIosSmarttv(): Locator {
    return this.page.getByRole('heading', { name: "Is Vi Movies & TV app available on Android/ iOS / SmartTV?" });
  }

  get headingAreAllMobileHandsetsCompatibleWithViMoviesTv(): Locator {
    return this.page.getByRole('heading', { name: "Are all mobile handsets compatible with Vi Movies & TV?" });
  }

  get headingWhatIfMyHandsetIsNotCompatibleWithViMoviesTv(): Locator {
    return this.page.getByRole('heading', { name: "What if my handset is not compatible with Vi Movies & TV?" });
  }

  get headingIReceivedTheUrlForViMoviesTvApplicationViaSmsHow(): Locator {
    return this.page.getByRole('heading', { name: "I received the URL for Vi Movies & TV application via SMS. How do I download the" });
  }

  get headingIAmTryingToDownloadTheApplicationButTheLinkDoesNo(): Locator {
    return this.page.getByRole('heading', { name: "I am trying to download the application, but the link does not work, why?" });
  }

  get headingHowCanIKnowNetworkStrength(): Locator {
    return this.page.getByRole('heading', { name: "How can I know Network strength?" });
  }

  get headingDespiteDownloadingAndInstallingTheAppIAmUnableToOp(): Locator {
    return this.page.getByRole('heading', { name: "Despite downloading and installing the App, I am unable to open the App. What do" });
  }

  get headingWhatShouldIDoIfISeeAnErrorOfNotEnoughSpaceWhile(): Locator {
    return this.page.getByRole('heading', { name: "What should I do if I see an error of “Not enough space” while downloading the a" });
  }

  get headingCanIAccessThisContentOnMyLaptop(): Locator {
    return this.page.getByRole('heading', { name: "Can I access this content on my laptop?" });
  }

  get headingWhatShouldIDoIfISeeAnErrorOfNotEnoughSpaceWhile1(): Locator {
    return this.page.getByRole('heading', { name: "What should I do if I see an error of “Not enough space” while downloading the a" });
  }

  get headingHowDoISignOutFromViMoviesAndTvApp(): Locator {
    return this.page.getByRole('heading', { name: "How do I sign out from Vi Movies and TV app?" });
  }

  get headingUserIsNotAbleToLoadThePaymentScreenInsideViMtvAp(): Locator {
    return this.page.getByRole('heading', { name: "User is not able to load the payment screen inside Vi MTV app, or got dropped ou" });
  }

  get headingHowDoIAddContentToWatchlistBingelistInViMoviesAnd(): Locator {
    return this.page.getByRole('heading', { name: "How do I add content to Watchlist/Bingelist in Vi Movies and TV app?" });
  }

  get headingWillTheViMoviesAndTvPackPlanWorkInInternationalRo(): Locator {
    return this.page.getByRole('heading', { name: "Will the Vi Movies and TV pack/plan work in International Roaming?" });
  }

  get headingWhatIfMyHandsetIsNotCompatibleWithViMoviesAndTv(): Locator {
    return this.page.getByRole('heading', { name: "What if my handset is not compatible with Vi Movies and TV?" });
  }

  get headingIAmAPostpaidUserWhyDoesTheAppAskMeToAddToBill(): Locator {
    return this.page.getByRole('heading', { name: "I am a postpaid user. Why does the app ask me to add to bill?" });
  }

  get headingUserMoneyGotDebitedButThePaymentStatusShowsFailure(): Locator {
    return this.page.getByRole('heading', { name: "User money got debited but the payment status shows failure" });
  }

  get headingSmartTvApps(): Locator {
    return this.page.getByRole('heading', { name: "Smart TV apps" });
  }

  get headingOnWhichSmartTvIsViMoviesTvAvailable(): Locator {
    return this.page.getByRole('heading', { name: "On which Smart TV is Vi Movies & TV available?" });
  }

  get headingAreAllTvSetsCompatibleWithViMoviesTv(): Locator {
    return this.page.getByRole('heading', { name: "Are all TV sets compatible with Vi Movies & TV?" });
  }

  get headingCanTheSameSubscriptionBeUsedAcrossMobileSmartTvIn(): Locator {
    return this.page.getByRole('heading', { name: "Can the same subscription be used across Mobile & Smart TV in Vi Movies & TV?" });
  }

  get headingCanIBuyViMoviesTvSubscriptionOnSmartTvDirectly(): Locator {
    return this.page.getByRole('heading', { name: "Can I buy Vi Movies & TV subscription on Smart Tv directly?" });
  }

  get headingWhichSmartTvIsViMoviesAndTvAvailable(): Locator {
    return this.page.getByRole('heading', { name: "which Smart TV is Vi Movies and TV available?" });
  }

  get headingCanIDownloadContentOnViMoviesAndTv(): Locator {
    return this.page.getByRole('heading', { name: "Can I download content on Vi Movies and TV?" });
  }

  get headingIAmTryingToDownloadTheApplicationButTheLinkDoesNo1(): Locator {
    return this.page.getByRole('heading', { name: "I am trying to download the application, but the link does not work, why?" });
  }

  get headingHowCanIKnowNetworkStrength1(): Locator {
    return this.page.getByRole('heading', { name: "How can I know Network strength?" });
  }

  get headingSomeContentIsPlayingWhileSomeAreNotPlayingForMeIt1(): Locator {
    return this.page.getByRole('heading', { name: "Some content is playing while some are not playing for me. It keeps asking me to" });
  }

  get headingWhyDoIGetRedirectedOutsideTheAppOnClickingSomeCon(): Locator {
    return this.page.getByRole('heading', { name: "Why do I get redirected outside the app on clicking some content?" });
  }

  get headingAreAllMobileHandsetsCompatibleWithViMoviesAndTv(): Locator {
    return this.page.getByRole('heading', { name: "Are all mobile handsets compatible with Vi Movies and TV?" });
  }

  get headingHowDoIUseTheSearchOptionInTheApp(): Locator {
    return this.page.getByRole('heading', { name: "How do I use the search option in the App?" });
  }

  get headingIReceivedTheWapLinkForViMoviesAndTvApplicationIn(): Locator {
    return this.page.getByRole('heading', { name: "I received the WAP link for Vi Movies and TV application in SMS. How do I downlo" });
  }

  get headingDespiteDownloadingAndInstallingTheAppIAmUnableToOp1(): Locator {
    return this.page.getByRole('heading', { name: "Despite downloading and installing the App, I am unable to open the App. What do" });
  }

  get headingHowToDownloadOnSmartTvSteps(): Locator {
    return this.page.getByRole('heading', { name: "How to Download on Smart TV Steps" });
  }

  get headingHowWillILoginOnThirdPartyAppsDirectly(): Locator {
    return this.page.getByRole('heading', { name: "How will I login on third party apps directly?" });
  }

  get headingViMoviesTvAllInOneOttApp(): Locator {
    return this.page.getByRole('heading', { name: "Vi Movies & TV - All in One OTT App" });
  }

  get link0(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/vi-movies-and-tv/all-ott-in-one-app#"]');
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
    return this.page.locator('a[href="https://www.myvi.in/vi-movies-and-tv/all-ott-in-one-app#"]');
  }

  get linkDashboard1(): Locator {
    return this.page.getByRole('link', { name: "Dashboard" });
  }

  get linkMyAccount1(): Locator {
    return this.page.getByRole('link', { name: "My Account" });
  }

  get link(): Locator {
    return this.page.getByRole('link', { name: "हिंदी" });
  }

  get link1(): Locator {
    return this.page.getByRole('link', { name: "தமிழ்" });
  }

  get link2(): Locator {
    return this.page.getByRole('link', { name: "한국인" });
  }

  get linkEnglish(): Locator {
    return this.page.getByRole('link', { name: "English" });
  }

  get linkPrepaid1(): Locator {
    return this.page.getByRole('link', { name: "Prepaid" });
  }

  get linkPostpaid1(): Locator {
    return this.page.getByRole('link', { name: "Postpaid" });
  }

  get linkViMoviesTv1(): Locator {
    return this.page.getByRole('link', { name: "Vi Movies & TV" });
  }

  get linkViMoviesTvTerms(): Locator {
    return this.page.getByRole('link', { name: "Vi Movies & TV Terms" });
  }

  get linkAllInOneOttSubscriptionPacks(): Locator {
    return this.page.getByRole('link', { name: "all-in-one OTT subscription packs" });
  }

  get linkPrepaidPlans(): Locator {
    return this.page.getByRole('link', { name: "prepaid plans" });
  }

  get linkHere(): Locator {
    return this.page.getByRole('link', { name: "here" });
  }

  get linkOttBundlePlans(): Locator {
    return this.page.getByRole('link', { name: "OTT bundle plans" });
  }

  get linkViMoviesTv2(): Locator {
    return this.page.getByRole('link', { name: "Vi Movies & TV" });
  }

  get linkViMoviesTv3(): Locator {
    return this.page.getByRole('link', { name: "Vi Movies & TV" });
  }

  get linkViMoviesTv4(): Locator {
    return this.page.getByRole('link', { name: "Vi Movies & TV" });
  }

  get linkViMoviesTv5(): Locator {
    return this.page.getByRole('link', { name: "Vi Movies & TV" });
  }

  get linkHome(): Locator {
    return this.page.getByRole('link', { name: "Home" });
  }

  get linkViMoviesTv6(): Locator {
    return this.page.getByRole('link', { name: "Vi Movies & TV" });
  }

  get linkAllOttInOneApp(): Locator {
    return this.page.getByRole('link', { name: "All OTT in One App" });
  }

  get link92(): Locator {
    return this.page.locator('a[href="https://www.facebook.com/ViOfficialFanWorld/"]');
  }

  get link93(): Locator {
    return this.page.locator('a[href="https://instagram.com/viofficialfanworld"]');
  }

  get link94(): Locator {
    return this.page.locator('a[href="https://twitter.com/ViCustomerCare"]');
  }

  get link95(): Locator {
    return this.page.locator('a[href="https://www.youtube.com/channel/UCHLTL1DEP_zelqLvUlYaV8Q"]');
  }

  get link96(): Locator {
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

  get linkViMoviesTv7(): Locator {
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

  get buttonExplorePlansStarting154(): Locator {
    return this.page.getByRole('button', { name: "Explore plans starting @ 154" });
  }

  get buttonPrevious(): Locator {
    return this.page.getByRole('button', { name: "Previous" });
  }

  get buttonWatchNow(): Locator {
    return this.page.getByRole('button', { name: "watch now" });
  }

  get buttonWatchNow1(): Locator {
    return this.page.getByRole('button', { name: "watch now" });
  }

  get buttonWatchNow2(): Locator {
    return this.page.getByRole('button', { name: "watch now" });
  }

  get buttonWatchNow3(): Locator {
    return this.page.getByRole('button', { name: "watch now" });
  }

  get buttonWatchNow4(): Locator {
    return this.page.getByRole('button', { name: "watch now" });
  }

  get buttonWatchNow5(): Locator {
    return this.page.getByRole('button', { name: "watch now" });
  }

  get buttonWatchNow6(): Locator {
    return this.page.getByRole('button', { name: "watch now" });
  }

  get buttonWatchNow7(): Locator {
    return this.page.getByRole('button', { name: "watch now" });
  }

  get buttonWatchNow8(): Locator {
    return this.page.getByRole('button', { name: "watch now" });
  }

  get buttonWatchNow9(): Locator {
    return this.page.getByRole('button', { name: "watch now" });
  }

  get buttonWatchNow10(): Locator {
    return this.page.getByRole('button', { name: "watch now" });
  }

  get buttonWatchNow11(): Locator {
    return this.page.getByRole('button', { name: "watch now" });
  }

  get buttonWatchNow12(): Locator {
    return this.page.getByRole('button', { name: "watch now" });
  }

  get buttonWatchNow13(): Locator {
    return this.page.getByRole('button', { name: "watch now" });
  }

  get buttonWatchNow14(): Locator {
    return this.page.getByRole('button', { name: "watch now" });
  }

  get buttonWatchNow15(): Locator {
    return this.page.getByRole('button', { name: "watch now" });
  }

  get buttonWatchNow16(): Locator {
    return this.page.getByRole('button', { name: "watch now" });
  }

  get buttonWatchNow17(): Locator {
    return this.page.getByRole('button', { name: "watch now" });
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

  get button3(): Locator {
    return this.page.getByRole('button', { name: "3" });
  }

  get buttonPrevious1(): Locator {
    return this.page.getByRole('button', { name: "Previous" });
  }

  get buttonBuyNow(): Locator {
    return this.page.getByRole('button', { name: "Buy Now" });
  }

  get buttonBuyNow1(): Locator {
    return this.page.getByRole('button', { name: "Buy Now" });
  }

  get buttonBuyNow2(): Locator {
    return this.page.getByRole('button', { name: "Buy Now" });
  }

  get buttonBuyNow3(): Locator {
    return this.page.getByRole('button', { name: "Buy Now" });
  }

  get buttonBuyNow4(): Locator {
    return this.page.getByRole('button', { name: "Buy Now" });
  }

  get buttonBuyNow5(): Locator {
    return this.page.getByRole('button', { name: "Buy Now" });
  }

  get buttonBuyNow6(): Locator {
    return this.page.getByRole('button', { name: "Buy Now" });
  }

  get buttonBuyNow7(): Locator {
    return this.page.getByRole('button', { name: "Buy Now" });
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

  get button31(): Locator {
    return this.page.getByRole('button', { name: "3" });
  }

  get button4(): Locator {
    return this.page.getByRole('button', { name: "4" });
  }

  get buttonBuyNow8(): Locator {
    return this.page.getByRole('button', { name: "Buy Now" });
  }

  get buttonBuyNow9(): Locator {
    return this.page.getByRole('button', { name: "Buy Now" });
  }

  get buttonBuyNow10(): Locator {
    return this.page.getByRole('button', { name: "buy now" });
  }

  get buttonProceed(): Locator {
    return this.page.getByRole('button', { name: "proceed" });
  }

  get buttonVerify(): Locator {
    return this.page.getByRole('button', { name: "verify" });
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

  get inputOttlogos(): Locator {
    return this.page.locator('input[name="oTTLogos"]');
  }

  get inputOttlogosmob(): Locator {
    return this.page.locator('input[name="oTTLogosMob"]');
  }

  get inputLatestreleaseurl(): Locator {
    return this.page.locator('input[name="latestreleaseurl"]');
  }

  get inputChannellogos(): Locator {
    return this.page.locator('input[name="channelLogos"]');
  }

  get inputChannellogosmob(): Locator {
    return this.page.locator('input[name="channelLogosMob"]');
  }

  get inputLogosanimationtime(): Locator {
    return this.page.locator('input[name="logosAnimationtime"]');
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

  get input46(): Locator {
    return this.page.locator('input');
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

  get input51(): Locator {
    return this.page.locator('input');
  }

  get input52(): Locator {
    return this.page.locator('input');
  }

  get input53(): Locator {
    return this.page.locator('input');
  }

  get input54(): Locator {
    return this.page.locator('input');
  }

  get input55(): Locator {
    return this.page.locator('input');
  }

  get input56(): Locator {
    return this.page.locator('input');
  }

  get input57(): Locator {
    return this.page.locator('input');
  }

  get input58(): Locator {
    return this.page.locator('input');
  }

  get input59(): Locator {
    return this.page.locator('input');
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

  get input63(): Locator {
    return this.page.locator('input');
  }

  get input64(): Locator {
    return this.page.locator('input');
  }

  get input65(): Locator {
    return this.page.locator('input');
  }

  get input66(): Locator {
    return this.page.locator('input');
  }

  get input67(): Locator {
    return this.page.locator('input');
  }

  get input68(): Locator {
    return this.page.locator('input');
  }

  get input69(): Locator {
    return this.page.locator('input');
  }

  get input70(): Locator {
    return this.page.locator('input');
  }

  get input71(): Locator {
    return this.page.locator('input');
  }

  get input72(): Locator {
    return this.page.locator('input');
  }

  get input73(): Locator {
    return this.page.locator('input');
  }

  get input74(): Locator {
    return this.page.locator('input');
  }

  get input75(): Locator {
    return this.page.locator('input');
  }

  get input76(): Locator {
    return this.page.locator('input');
  }

  get input77(): Locator {
    return this.page.locator('input');
  }

  get input78(): Locator {
    return this.page.locator('input');
  }

  get input79(): Locator {
    return this.page.locator('input');
  }

  get input80(): Locator {
    return this.page.locator('input');
  }

  get input81(): Locator {
    return this.page.locator('input');
  }

  get input82(): Locator {
    return this.page.locator('input');
  }

  get input83(): Locator {
    return this.page.locator('input');
  }

  get input84(): Locator {
    return this.page.locator('input');
  }

  get input85(): Locator {
    return this.page.locator('input');
  }

  get input86(): Locator {
    return this.page.locator('input');
  }

  get input87(): Locator {
    return this.page.locator('input');
  }

  get input88(): Locator {
    return this.page.locator('input');
  }

  get input89(): Locator {
    return this.page.locator('input');
  }

  get input90(): Locator {
    return this.page.locator('input');
  }

  get input91(): Locator {
    return this.page.locator('input');
  }

  get input92(): Locator {
    return this.page.locator('input');
  }

  get input93(): Locator {
    return this.page.locator('input');
  }

  get input94(): Locator {
    return this.page.locator('input');
  }

  get input95(): Locator {
    return this.page.locator('input');
  }

  get input96(): Locator {
    return this.page.locator('input');
  }

  get input97(): Locator {
    return this.page.locator('input');
  }

  get input98(): Locator {
    return this.page.locator('input');
  }

  get input99(): Locator {
    return this.page.locator('input');
  }

  get input100(): Locator {
    return this.page.locator('input');
  }

  get input101(): Locator {
    return this.page.locator('input');
  }

  get input102(): Locator {
    return this.page.locator('input');
  }

  get input103(): Locator {
    return this.page.locator('input');
  }

  get input104(): Locator {
    return this.page.locator('input');
  }

  get input105(): Locator {
    return this.page.locator('input');
  }

  get input106(): Locator {
    return this.page.locator('input');
  }

  get input107(): Locator {
    return this.page.locator('input');
  }

  get input108(): Locator {
    return this.page.locator('input');
  }

  get input109(): Locator {
    return this.page.locator('input');
  }

  get input110(): Locator {
    return this.page.locator('input');
  }

  get input111(): Locator {
    return this.page.locator('input');
  }

  get input112(): Locator {
    return this.page.locator('input');
  }

  get input113(): Locator {
    return this.page.locator('input');
  }

  get input114(): Locator {
    return this.page.locator('input');
  }

  get input115(): Locator {
    return this.page.locator('input');
  }

  get input116(): Locator {
    return this.page.locator('input');
  }

  get input117(): Locator {
    return this.page.locator('input');
  }

  get input118(): Locator {
    return this.page.locator('input');
  }

  get input119(): Locator {
    return this.page.locator('input');
  }

  get input120(): Locator {
    return this.page.locator('input');
  }

  get input121(): Locator {
    return this.page.locator('input');
  }

  get input122(): Locator {
    return this.page.locator('input');
  }

  get input123(): Locator {
    return this.page.locator('input');
  }

  get input124(): Locator {
    return this.page.locator('input');
  }

  get input125(): Locator {
    return this.page.locator('input');
  }

  get input126(): Locator {
    return this.page.locator('input');
  }

  get input127(): Locator {
    return this.page.locator('input');
  }

  get input128(): Locator {
    return this.page.locator('input');
  }

  get input129(): Locator {
    return this.page.locator('input');
  }

  get input130(): Locator {
    return this.page.locator('input');
  }

  get input131(): Locator {
    return this.page.locator('input');
  }

  get input132(): Locator {
    return this.page.locator('input');
  }

  get input133(): Locator {
    return this.page.locator('input');
  }

  get input134(): Locator {
    return this.page.locator('input');
  }

  get input135(): Locator {
    return this.page.locator('input');
  }

  get input136(): Locator {
    return this.page.locator('input');
  }

  get input137(): Locator {
    return this.page.locator('input');
  }

  get input138(): Locator {
    return this.page.locator('input');
  }

  get input139(): Locator {
    return this.page.locator('input');
  }

  get input140(): Locator {
    return this.page.locator('input');
  }

  get input141(): Locator {
    return this.page.locator('input');
  }

  get input142(): Locator {
    return this.page.locator('input');
  }

  get input143(): Locator {
    return this.page.locator('input');
  }

  get input144(): Locator {
    return this.page.locator('input');
  }

  get input145(): Locator {
    return this.page.locator('input');
  }

  get input146(): Locator {
    return this.page.locator('input');
  }

  get input147(): Locator {
    return this.page.locator('input');
  }

  get input148(): Locator {
    return this.page.locator('input');
  }

  get input149(): Locator {
    return this.page.locator('input');
  }

  get input150(): Locator {
    return this.page.locator('input');
  }

  get input151(): Locator {
    return this.page.locator('input');
  }

  get input152(): Locator {
    return this.page.locator('input');
  }

  get input153(): Locator {
    return this.page.locator('input');
  }

  get input154(): Locator {
    return this.page.locator('input');
  }

  get input155(): Locator {
    return this.page.locator('input');
  }

  get input156(): Locator {
    return this.page.locator('input');
  }

  get input157(): Locator {
    return this.page.locator('input');
  }

  get input158(): Locator {
    return this.page.locator('input');
  }

  get input159(): Locator {
    return this.page.locator('input');
  }

  get input160(): Locator {
    return this.page.locator('input');
  }

  get input161(): Locator {
    return this.page.locator('input');
  }

  get input162(): Locator {
    return this.page.locator('input');
  }

  get input163(): Locator {
    return this.page.locator('input');
  }

  get input164(): Locator {
    return this.page.locator('input');
  }

  get input165(): Locator {
    return this.page.locator('input');
  }

  get input166(): Locator {
    return this.page.locator('input');
  }

  get input167(): Locator {
    return this.page.locator('input');
  }

  get input168(): Locator {
    return this.page.locator('input');
  }

  get input169(): Locator {
    return this.page.locator('input');
  }

  get input170(): Locator {
    return this.page.locator('input');
  }

  get input171(): Locator {
    return this.page.locator('input');
  }

  get input172(): Locator {
    return this.page.locator('input');
  }

  get input173(): Locator {
    return this.page.locator('input');
  }

  get input174(): Locator {
    return this.page.locator('input');
  }

  get input175(): Locator {
    return this.page.locator('input');
  }

  get input176(): Locator {
    return this.page.locator('input');
  }

  get input177(): Locator {
    return this.page.locator('input');
  }

  get input178(): Locator {
    return this.page.locator('input');
  }

  get input179(): Locator {
    return this.page.locator('input');
  }

  get input180(): Locator {
    return this.page.locator('input');
  }

  get input181(): Locator {
    return this.page.locator('input');
  }

  get input182(): Locator {
    return this.page.locator('input');
  }

  get input183(): Locator {
    return this.page.locator('input');
  }

  get input184(): Locator {
    return this.page.locator('input');
  }

  get input185(): Locator {
    return this.page.locator('input');
  }

  get input186(): Locator {
    return this.page.locator('input');
  }

  get input187(): Locator {
    return this.page.locator('input');
  }

  get input188(): Locator {
    return this.page.locator('input');
  }

  get input189(): Locator {
    return this.page.locator('input');
  }

  get input190(): Locator {
    return this.page.locator('input');
  }

  get input191(): Locator {
    return this.page.locator('input');
  }

  get input192(): Locator {
    return this.page.locator('input');
  }

  get input193(): Locator {
    return this.page.locator('input');
  }

  get input194(): Locator {
    return this.page.locator('input');
  }

  get input195(): Locator {
    return this.page.locator('input');
  }

  get inputEnterYourMobileNumber(): Locator {
    return this.page.getByPlaceholder("Enter your mobile number");
  }

  get inputEnterYourMobileNumber1(): Locator {
    return this.page.getByPlaceholder("enter your mobile number");
  }

  get inputEnterOtpHere(): Locator {
    return this.page.getByPlaceholder("enter otp here");
  }

  get inputErrormsgs(): Locator {
    return this.page.locator('input[name="ErrorMsgs"]');
  }

  get inputThankyoupage(): Locator {
    return this.page.locator('input[name="thankyouPage"]');
  }

  get inputFailurepage(): Locator {
    return this.page.locator('input[name="failurePage"]');
  }

  get inputNoattempts(): Locator {
    return this.page.locator('input[name="noattempts"]');
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

  get table0(): Locator {
    return this.page.locator('table');
  }

  get table1(): Locator {
    return this.page.locator('table');
  }

  get table2(): Locator {
    return this.page.locator('table');
  }

  get menuOpenInViAppSignInSignInDashboardMyAccountPrepaid(): Locator {
    return this.page.getByRole('navigation', { name: "open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs" });
  }

  get menuHomeViMoviesTvAllOttInOneApp(): Locator {
    return this.page.getByRole('navigation', { name: "Home Vi Movies & TV All OTT in One App" });
  }

  constructor(page: Page) {
    super(page);
  }
}
