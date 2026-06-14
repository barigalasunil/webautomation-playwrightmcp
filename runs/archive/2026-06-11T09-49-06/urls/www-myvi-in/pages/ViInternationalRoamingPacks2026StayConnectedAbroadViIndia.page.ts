import { Page, Locator } from '@playwright/test';
import { BasePage } from '../../BasePage';

export class ViInternationalRoamingPacks2026StayConnectedAbroadViIndia extends BasePage {
  readonly url = "https://www.myvi.in/international-roaming-packs";

  // All element locators are generated dynamically using locator strategies

  get headingInternationalRoaming(): Locator {
    return this.page.getByRole('heading', { name: "international roaming" });
  }

  get headingYourPassportToWorldwideConnectivity(): Locator {
    return this.page.getByRole('heading', { name: "your passport to worldwide connectivity" });
  }

  get headingUnlimited(): Locator {
    return this.page.getByRole('heading', { name: "unlimited" });
  }

  get headingIrPack(): Locator {
    return this.page.getByRole('heading', { name: "IR pack" });
  }

  get heading24x7Tollfree(): Locator {
    return this.page.getByRole('heading', { name: "24x7 TollFree" });
  }

  get headingNoBill(): Locator {
    return this.page.getByRole('heading', { name: "no bill" });
  }

  get headingBook(): Locator {
    return this.page.getByRole('heading', { name: "book" });
  }

  get headingNotLookingForAInternationalRoamingPackNoProblem(): Locator {
    return this.page.getByRole('heading', { name: "not looking for a international roaming pack? no problem!" });
  }

  get headingThingsToKnowWhileRoaming(): Locator {
    return this.page.getByRole('heading', { name: "things to know while Roaming" });
  }

  get headingInternationalRoamingFaqs(): Locator {
    return this.page.getByRole('heading', { name: "International Roaming FAQs" });
  }

  get headingGeneral(): Locator {
    return this.page.getByRole('heading', { name: "General" });
  }

  get headingCanIActivateInternationalRoamingAfterIArriveAtMyDe(): Locator {
    return this.page.getByRole('heading', { name: "Can I activate international roaming after I arrive at my destination?" });
  }

  get headingHowCanIPurchaseAnInternationalRoamingPack(): Locator {
    return this.page.getByRole('heading', { name: "How can I purchase an international roaming pack?" });
  }

  get headingDoINeedToSelectAnyNetworkWhileOnInternationalRoami(): Locator {
    return this.page.getByRole('heading', { name: "Do I need to select any network while on international roaming?" });
  }

  get headingWhichCountriesAreCoveredByViInternationalRoamingPack(): Locator {
    return this.page.getByRole('heading', { name: "Which countries are covered by Vi international roaming packs?" });
  }

  get headingWhatAreTheApplicableTariffsInVariousCountries(): Locator {
    return this.page.getByRole('heading', { name: "What are the applicable tariffs in various countries?" });
  }

  get headingCanIMakeInternationalCallsWhileRoaming(): Locator {
    return this.page.getByRole('heading', { name: "Can I make international calls while roaming?" });
  }

  get headingWhatIsInternationalRoaming(): Locator {
    return this.page.getByRole('heading', { name: "What is international roaming?" });
  }

  get headingCanIUseDataWhileRoamingInternationally(): Locator {
    return this.page.getByRole('heading', { name: "Can I use data while roaming internationally?" });
  }

  get headingWillIBeChargedForIncomingCallsWhileRoaming(): Locator {
    return this.page.getByRole('heading', { name: "Will I be charged for incoming calls while roaming?" });
  }

  get headingWhatShouldIDoIfIFaceNetworkIssuesWhileRoaming(): Locator {
    return this.page.getByRole('heading', { name: "What should I do if I face network issues while roaming?" });
  }

  get headingCanIUseTheSameHandsetSimWhileTravelingOutsideIndia(): Locator {
    return this.page.getByRole('heading', { name: "Can I use the same handset & SIM while traveling outside India?" });
  }

  get headingHowToMakeVoiceCallsOnceIReachAnotherCountry(): Locator {
    return this.page.getByRole('heading', { name: "How to make voice calls once I reach another country" });
  }

  get headingWillIBeChargedForIncomingMessagesWhileOnInternation(): Locator {
    return this.page.getByRole('heading', { name: "Will I be charged for incoming messages while on International Roaming?" });
  }

  get headingCanIUseMyFreeDataQuotaOnMyPostpaidPlanOrPrepaid(): Locator {
    return this.page.getByRole('heading', { name: "Can I use my free data quota on my Postpaid Plan or Prepaid Plan on Internationa" });
  }

  get headingIAmNotGettingNetworkSignalWhilstOnInternationalRoam(): Locator {
    return this.page.getByRole('heading', { name: "I am not getting network signal whilst on international roaming" });
  }

  get headingHowCanIUseMyViMobileInAForeignCountryIEOnInter(): Locator {
    return this.page.getByRole('heading', { name: "How can I use my Vi mobile in a foreign country i.e. on International Roaming?" });
  }

  get headingCanIActivateTheInternationalRoamingServiceAfterReach(): Locator {
    return this.page.getByRole('heading', { name: "Can I activate the International Roaming service after reaching another country?" });
  }

  get headingWhatIfTheCountryIAmTravellingToIsNotCoveredUnder(): Locator {
    return this.page.getByRole('heading', { name: "What if the country I am travelling to is not covered under the Roaming plan?" });
  }

  get headingCanIChooseAnInternationalRoamingPackForOnlyTheNumb(): Locator {
    return this.page.getByRole('heading', { name: "Can I choose an International Roaming Pack for only the number of days I am trav" });
  }

  get headingIfICallOtherCountriesWhileAbroadWillIBeCharged(): Locator {
    return this.page.getByRole('heading', { name: "If I call other countries while abroad, will I be charged?" });
  }

  get headingHowDoIKnowWhenIsMyIrPackGettingExpired(): Locator {
    return this.page.getByRole('heading', { name: "How do I know when is my IR pack getting expired?" });
  }

  get headingHowWillIKnowAboutMyDataConsumptionDuringInternation(): Locator {
    return this.page.getByRole('heading', { name: "How will I know about my Data consumption during International Roaming?" });
  }

  get headingWhatIfIDoNotTakeAPackWhilstOnInternationalTravel(): Locator {
    return this.page.getByRole('heading', { name: "What if I do not take a pack whilst on international travel?" });
  }

  get headingWhatHappensAfterMyPackIsExpired(): Locator {
    return this.page.getByRole('heading', { name: "What happens after my pack is expired?" });
  }

  get headingPrepaid(): Locator {
    return this.page.getByRole('heading', { name: "Prepaid" });
  }

  get headingWhatAreTheBestInternationalRoamingPlansForViPrepaid(): Locator {
    return this.page.getByRole('heading', { name: "What are the best international roaming plans for Vi prepaid users?" });
  }

  get headingWhatHappensIfIExceedMyRoamingPackLimits(): Locator {
    return this.page.getByRole('heading', { name: "What happens if I exceed my roaming pack limits?" });
  }

  get headingIfIHaveNotTakenAnInternationalRoamingPackCanIUse(): Locator {
    return this.page.getByRole('heading', { name: "If I have not taken an International Roaming pack, can I use mobile internet?" });
  }

  get headingHowCanIActivateInternationalRoamingServiceOnMyNumbe(): Locator {
    return this.page.getByRole('heading', { name: "How can I activate International Roaming service on my number?" });
  }

  get headingCanIUseMyPhoneInAForeignCountryIfIDoNotBuyAPa(): Locator {
    return this.page.getByRole('heading', { name: "Can I use my phone in a foreign country, if I do not buy a pack?" });
  }

  get headingWhatIsViS10DigitCustomerCareNumber(): Locator {
    return this.page.getByRole('heading', { name: "What is Vi’s 10 Digit customer care number?" });
  }

  get headingWhenWillTheInternationalRoamingPackGetActivated(): Locator {
    return this.page.getByRole('heading', { name: "When will the international roaming pack get activated?" });
  }

  get headingWillIGetConnectedToTheNetworkAutomaticallyInInterna(): Locator {
    return this.page.getByRole('heading', { name: "Will I get connected to the network automatically in International Location?" });
  }

  get headingPostpaid(): Locator {
    return this.page.getByRole('heading', { name: "Postpaid" });
  }

  get headingWhatHappensIfIExceedMyRoamingPackLimits1(): Locator {
    return this.page.getByRole('heading', { name: "What happens if I exceed my roaming pack limits?" });
  }

  get headingIfIHaveNotTakenAnInternationalRoamingPackCanIUse1(): Locator {
    return this.page.getByRole('heading', { name: "If I have not taken an International Roaming pack, can I use mobile internet?" });
  }

  get headingHowCanIActivateInternationalRoamingServiceOnMyNumbe1(): Locator {
    return this.page.getByRole('heading', { name: "How can I activate International Roaming service on my number?" });
  }

  get headingCanIActivateAnInternationalRoamingPackInAdvance(): Locator {
    return this.page.getByRole('heading', { name: "Can I activate an International Roaming pack in advance?" });
  }

  get headingCanIUseMyPhoneInAForeignCountryIfIDoNotBuyAPa1(): Locator {
    return this.page.getByRole('heading', { name: "Can I use my phone in a foreign country, if I do not buy a pack?" });
  }

  get headingIAmAPostpaidUserHowAmIProtectedAgainstHighBillsO(): Locator {
    return this.page.getByRole('heading', { name: "I am a postpaid user, how am I protected against high bills on International Roa" });
  }

  get headingHowDoesTheInternationalRoamingPackWorkHowDoIKnowW(): Locator {
    return this.page.getByRole('heading', { name: "How does the International Roaming Pack work? How do I know what is the pack ben" });
  }

  get headingIAmARedxCustomerHowDoIClaimTheFreeIrPackOnMyR(): Locator {
    return this.page.getByRole('heading', { name: "I am a REDX customer. How do I claim the FREE IR pack on my Red X Plan?" });
  }

  get headingWhatIsAlwaysOnThatComesInbuiltWithPostpaidIrPack(): Locator {
    return this.page.getByRole('heading', { name: "What is Always On that comes inbuilt with Postpaid IR Pack?" });
  }

  get headingWhyAmIBilledForRoamingEvenWhenIHaveNotVisitedAny(): Locator {
    return this.page.getByRole('heading', { name: "Why am I billed for roaming even when I have not visited any roaming location in" });
  }

  get headingWhatIsViS10DigitCustomerCareNumber1(): Locator {
    return this.page.getByRole('heading', { name: "What is Vi’s 10 Digit customer care number?" });
  }

  get headingLetSGetYouStarted(): Locator {
    return this.page.getByRole('heading', { name: "let’s get you started 🚀" });
  }

  get headingOurBestInternationalRoamingPlans(): Locator {
    return this.page.getByRole('heading', { name: "Our Best International Roaming Plans" });
  }

  get headingStayConnectedSeamlesslyWithViInternationalRoaming(): Locator {
    return this.page.getByRole('heading', { name: "Stay Connected Seamlessly with Vi International Roaming" });
  }

  get headingWhyViMakesInternationalTravelEasier(): Locator {
    return this.page.getByRole('heading', { name: "Why Vi Makes International Travel Easier" });
  }

  get headingHowToActivateViInternationalRoaming(): Locator {
    return this.page.getByRole('heading', { name: "How to Activate Vi International Roaming" });
  }

  get headingChoosingTheRightRoamingPlan(): Locator {
    return this.page.getByRole('heading', { name: "Choosing the Right Roaming Plan" });
  }

  get headingWhyTravellersPreferViRoaming(): Locator {
    return this.page.getByRole('heading', { name: "Why Travellers Prefer Vi Roaming" });
  }

  get headingTravelSafelyTravelSmart(): Locator {
    return this.page.getByRole('heading', { name: "Travel Safely, Travel Smart" });
  }

  get link0(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/international-roaming-packs#"]');
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
    return this.page.locator('a[href="https://www.myvi.in/international-roaming-packs#"]');
  }

  get linkDashboard1(): Locator {
    return this.page.getByRole('link', { name: "Dashboard" });
  }

  get linkMyAccount1(): Locator {
    return this.page.getByRole('link', { name: "My Account" });
  }

  get linkPostpaid1(): Locator {
    return this.page.getByRole('link', { name: "postpaid" });
  }

  get linkPrepaid1(): Locator {
    return this.page.getByRole('link', { name: "prepaid" });
  }

  get link75(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/help-support/faqs?chatbotopen=true"]');
  }

  get linkTipsToUseYourPhoneAbroad(): Locator {
    return this.page.getByRole('link', { name: "tips to use your phone abroad" });
  }

  get linkHelpAndAssistance(): Locator {
    return this.page.getByRole('link', { name: "help and assistance" });
  }

  get linkPrepaidTermsConditions(): Locator {
    return this.page.getByRole('link', { name: "prepaid terms & conditions" });
  }

  get linkPostpaidTermsConditions(): Locator {
    return this.page.getByRole('link', { name: "postpaid terms & conditions" });
  }

  get linkChatWithUsOnWhatsapp(): Locator {
    return this.page.getByRole('link', { name: "chat with us on Whatsapp" });
  }

  get linkViApp(): Locator {
    return this.page.getByRole('link', { name: "Vi app" });
  }

  get linkPrepaidTnc(): Locator {
    return this.page.getByRole('link', { name: "Prepaid TnC" });
  }

  get linkPostpaidTnc(): Locator {
    return this.page.getByRole('link', { name: "Postpaid TnC" });
  }

  get linkPrepaidTnc1(): Locator {
    return this.page.getByRole('link', { name: "Prepaid TnC" });
  }

  get linkPostpaidTnc1(): Locator {
    return this.page.getByRole('link', { name: "Postpaid TnC" });
  }

  get linkHttpsWwwMyviInVideos(): Locator {
    return this.page.getByRole('link', { name: "https://www.myvi.in/videos" });
  }

  get linkHttpsWwwMyviInInternationalRoamingPacks(): Locator {
    return this.page.getByRole('link', { name: "https://www.myvi.in/international-roaming-packs" });
  }

  get linkClickHere(): Locator {
    return this.page.getByRole('link', { name: "click here" });
  }

  get linkClickHere1(): Locator {
    return this.page.getByRole('link', { name: "click here" });
  }

  get linkWwwMyviIn(): Locator {
    return this.page.getByRole('link', { name: "www.myvi.in" });
  }

  get linkWwwMyviIn1(): Locator {
    return this.page.getByRole('link', { name: "www.myvi.in" });
  }

  get linkBitLyIntlroaming2(): Locator {
    return this.page.getByRole('link', { name: "bit.ly/IntlRoaming2" });
  }

  get linkViApp1(): Locator {
    return this.page.getByRole('link', { name: "Vi App" });
  }

  get linkWebsite(): Locator {
    return this.page.getByRole('link', { name: "website" });
  }

  get linkViApp2(): Locator {
    return this.page.getByRole('link', { name: "Vi App" });
  }

  get linkWebsite1(): Locator {
    return this.page.getByRole('link', { name: "website" });
  }

  get linkWwwMyviIn2(): Locator {
    return this.page.getByRole('link', { name: "www.myvi.in" });
  }

  get linkViStore(): Locator {
    return this.page.getByRole('link', { name: "Vi store" });
  }

  get linkViIrPacks(): Locator {
    return this.page.getByRole('link', { name: "Vi IR packs" });
  }

  get linkViApp3(): Locator {
    return this.page.getByRole('link', { name: "Vi app" });
  }

  get linkPrepaid2(): Locator {
    return this.page.getByRole('link', { name: "prepaid" });
  }

  get linkPostpaidPlans(): Locator {
    return this.page.getByRole('link', { name: "postpaid plans" });
  }

  get linkHome(): Locator {
    return this.page.getByRole('link', { name: "Home" });
  }

  get linkInternationalRoamingPacks(): Locator {
    return this.page.getByRole('link', { name: "International Roaming Packs" });
  }

  get link105(): Locator {
    return this.page.locator('a[href="https://www.facebook.com/ViOfficialFanWorld/"]');
  }

  get link106(): Locator {
    return this.page.locator('a[href="https://instagram.com/viofficialfanworld"]');
  }

  get link107(): Locator {
    return this.page.locator('a[href="https://twitter.com/ViCustomerCare"]');
  }

  get link108(): Locator {
    return this.page.locator('a[href="https://www.youtube.com/channel/UCHLTL1DEP_zelqLvUlYaV8Q"]');
  }

  get link109(): Locator {
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

  get linkViApp4(): Locator {
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

  get buttonExplorePostpaidPacks(): Locator {
    return this.page.getByRole('button', { name: "explore postpaid packs" });
  }

  get buttonExploreStandardRates(): Locator {
    return this.page.getByRole('button', { name: "explore standard rates" });
  }

  get buttonSeeMore(): Locator {
    return this.page.getByRole('button', { name: "See More" });
  }

  get buttonSeeLess(): Locator {
    return this.page.getByRole('button', { name: "See Less" });
  }

  get buttonSeeMore1(): Locator {
    return this.page.getByRole('button', { name: "See More" });
  }

  get buttonSeeLess1(): Locator {
    return this.page.getByRole('button', { name: "See Less" });
  }

  get buttonSeeMore2(): Locator {
    return this.page.getByRole('button', { name: "See More" });
  }

  get buttonSeeLess2(): Locator {
    return this.page.getByRole('button', { name: "See Less" });
  }

  get buttonProceed(): Locator {
    return this.page.getByRole('button', { name: "proceed" });
  }

  get buttonVerifyOtp(): Locator {
    return this.page.getByRole('button', { name: "verify OTP" });
  }

  get buttonOkUnderstood(): Locator {
    return this.page.getByRole('button', { name: "ok, understood" });
  }

  get buttonOkGotIt(): Locator {
    return this.page.getByRole('button', { name: "ok, got it" });
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

  get inputWhereAreYouTravellingTo(): Locator {
    return this.page.getByPlaceholder("where are you travelling to");
  }

  get inputChangepageload(): Locator {
    return this.page.locator('input[name="changepageload"]');
  }

  get inputPreCta(): Locator {
    return this.page.locator('input[name="pre_cta"]');
  }

  get inputPostCta(): Locator {
    return this.page.locator('input[name="post_cta"]');
  }

  get inputSeeMyirpackpage(): Locator {
    return this.page.locator('input[name="see_myIRPackPage"]');
  }

  get inputSeeMyirpackpagepost(): Locator {
    return this.page.locator('input[name="see_myIRPackPagePost"]');
  }

  get inputIrrevamp(): Locator {
    return this.page.locator('input[name="irrevamp"]');
  }

  get inputBannerredurl(): Locator {
    return this.page.locator('input[name="bannerRedURL"]');
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

  get inputEnterViNumber(): Locator {
    return this.page.getByPlaceholder("enter Vi number");
  }

  get inputEnterOtp(): Locator {
    return this.page.getByPlaceholder("enter otp");
  }

  get inputHiddenmobilenumber(): Locator {
    return this.page.locator('input[name="hiddenMobileNumber"]');
  }

  get inputErrormsgs(): Locator {
    return this.page.locator('input[name="ErrorMsgs"]');
  }

  get inputError10digit(): Locator {
    return this.page.locator('input[name="error10Digit"]');
  }

  get inputErrorinvalidnumber(): Locator {
    return this.page.locator('input[name="errorInvalidNumber"]');
  }

  get inputErrormessageideaprepaidnumber(): Locator {
    return this.page.locator('input[name="errorMessageIdeaPrepaidNumber"]');
  }

  get inputErrormessageideapostpaidnumber(): Locator {
    return this.page.locator('input[name="errorMessageIdeaPostpaidNumber"]');
  }

  get inputErrormessagecocp(): Locator {
    return this.page.locator('input[name="errorMessagecocp"]');
  }

  get inputOtpsendmsgfirsttime(): Locator {
    return this.page.locator('input[name="otpsendMsgFirstTime"]');
  }

  get inputErrormessageinvalidcircle(): Locator {
    return this.page.locator('input[name="errorMessageInvalidCircle"]');
  }

  get inputSuspendednonpaymenterrormsg(): Locator {
    return this.page.locator('input[name="suspendednonpaymenterrormsg"]');
  }

  get inputSuspendedsafecustodyerrormsg(): Locator {
    return this.page.locator('input[name="suspendedsafecustodyerrormsg"]');
  }

  get inputSuspendedsimlosterrormsg(): Locator {
    return this.page.locator('input[name="suspendedsimlosterrormsg"]');
  }

  get inputSuspendedothererrormsg(): Locator {
    return this.page.locator('input[name="suspendedothererrorMsg"]');
  }

  get inputPrepaidbutton(): Locator {
    return this.page.locator('input[name="prepaidbutton"]');
  }

  get inputPlaceholder(): Locator {
    return this.page.locator('input[name="placeholder"]');
  }

  get inputNationalitycheckmsg(): Locator {
    return this.page.locator('input[name="nationalitycheckmsg"]');
  }

  get inputVouchercircle(): Locator {
    return this.page.locator('input[name="vouchercircle"]');
  }

  get inputVouchercirclemrp(): Locator {
    return this.page.locator('input[name="vouchercirclemrp"]');
  }

  get inputVouchererrormsg(): Locator {
    return this.page.locator('input[name="vouchererrormsg"]');
  }

  get inputVouchersuccessmsg(): Locator {
    return this.page.locator('input[name="vouchersuccessmsg"]');
  }

  get inputNoattempts(): Locator {
    return this.page.locator('input[name="noattempts"]');
  }

  get inputViguarantenewusererror(): Locator {
    return this.page.locator('input[name="viGuaranteNewUserError"]');
  }

  get inputPostpaidctaurl(): Locator {
    return this.page.locator('input[name="postpaidctaurl"]');
  }

  get inputPrepaidctaurl(): Locator {
    return this.page.locator('input[name="prepaidctaurl"]');
  }

  get inputPortvictaurl(): Locator {
    return this.page.locator('input[name="portvictaurl"]');
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

  get form1(): Locator {
    return this.page.locator('form#seemyir');
  }

  get menuOpenInViAppSignInSignInDashboardMyAccountPrepaid(): Locator {
    return this.page.getByRole('navigation', { name: "open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs" });
  }

  get menuHomeInternationalRoamingPacks(): Locator {
    return this.page.getByRole('navigation', { name: "Home International Roaming Packs" });
  }

  constructor(page: Page) {
    super(page);
  }
}
