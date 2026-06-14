import { Page, Locator } from '@playwright/test';
import { BasePage } from '../../BasePage';

export class PortSimNumberToViEnjoyViBenefitsWithEasyMnpProcess extends BasePage {
  readonly url = "https://www.myvi.in/new-connection/mobile-number-portability-mnp-online";

  // All element locators are generated dynamically using locator strategies

  get headingIndividualPlans(): Locator {
    return this.page.getByRole('heading', { name: "Individual plans" });
  }

  get heading4gPrepaidSim(): Locator {
    return this.page.getByRole('heading', { name: "4G prepaid sim" });
  }

  get headingEnterBasicDetailsToPortMobileNumberOnline(): Locator {
    return this.page.getByRole('heading', { name: "enter basic details to port mobile number online" });
  }

  get headingEnterAddressToPlaceOrder(): Locator {
    return this.page.getByRole('heading', { name: "enter address to place order" });
  }

  get headingThisFestiveSeasonPortMobileNumberToViGainExcitingB(): Locator {
    return this.page.getByRole('heading', { name: "This festive season port mobile number to Vi & gain exciting benefits" });
  }

  get headingPlaceOrderWithASingleClick(): Locator {
    return this.page.getByRole('heading', { name: "place order with a single click" });
  }

  get headingCheckYourEmail(): Locator {
    return this.page.getByRole('heading', { name: "check your email" });
  }

  get headingWeAreSorry(): Locator {
    return this.page.getByRole('heading', { name: "we are sorry!" });
  }

  get headingOopsTransactionFailed(): Locator {
    return this.page.getByRole('heading', { name: "oops! transaction failed." });
  }

  get headingFaqsOnMobileNumberPortabilityMnp(): Locator {
    return this.page.getByRole('heading', { name: "FAQs on Mobile Number Portability (MNP)" });
  }

  get headingWhoCanAvailMnpService(): Locator {
    return this.page.getByRole('heading', { name: "Who can avail MNP service?" });
  }

  get headingCriteriaForMnp(): Locator {
    return this.page.getByRole('heading', { name: "Criteria for MNP:" });
  }

  get headingHowToPortSimOnlineToVi(): Locator {
    return this.page.getByRole('heading', { name: "How to port SIM online to Vi?" });
  }

  get headingWhatAreTheOffersAvailableIfIWishToPortToViPostpa(): Locator {
    return this.page.getByRole('heading', { name: "What are the offers available if I wish to port to Vi Postpaid?" });
  }

  get headingCanIPortToViPrepaid(): Locator {
    return this.page.getByRole('heading', { name: "Can I port to Vi Prepaid?" });
  }

  get headingHowDoIGetTheUniquePortingCodeOnlineWhileSwitching(): Locator {
    return this.page.getByRole('heading', { name: "How do I get the unique porting code online while switching to Vi?" });
  }

  get headingIfIPortMyNumberToViWillIGetAnAmazonPrimeMembers(): Locator {
    return this.page.getByRole('heading', { name: "If I port my number to Vi, will I get an Amazon Prime Membership?" });
  }

  get headingHowToPortMobileNumberToANewNetworkWithoutChanging(): Locator {
    return this.page.getByRole('heading', { name: "How to port mobile number to a new network without changing my mobile number?" });
  }

  get headingWhatAreTheDocumentsRequiredForMobileNumberPortabilit(): Locator {
    return this.page.getByRole('heading', { name: "What are the documents required for Mobile Number Portability?" });
  }

  get headingHowMuchTimeWillItTakeForMyNumberToGetPorted(): Locator {
    return this.page.getByRole('heading', { name: "How much time will it take for my number to get ported?" });
  }

  get headingWillThereBeAnyChargesToPortMyMobileNumberToVi(): Locator {
    return this.page.getByRole('heading', { name: "Will there be any charges to port my mobile number to Vi?" });
  }

  get headingIsThereADiscountOfferAvailableForNewPostpaidConnect(): Locator {
    return this.page.getByRole('heading', { name: "Is there a discount offer available for new Postpaid connection?" });
  }

  get headingYesThereIsADiscountOfferAvailableForViMax451ViMa(): Locator {
    return this.page.getByRole('heading', { name: "Yes, there is a discount offer available for Vi Max 451 & Vi Max 551 till 22nd J" });
  }

  get headingPortMobileNumberToVi(): Locator {
    return this.page.getByRole('heading', { name: "Port Mobile Number to Vi" });
  }

  get headingHowDoesMobileNumberPortabilityWork(): Locator {
    return this.page.getByRole('heading', { name: "How does Mobile Number Portability work?" });
  }

  get headingThingsToNoteBeforePortingAMobileNumber(): Locator {
    return this.page.getByRole('heading', { name: "Things to note before porting a mobile number:" });
  }

  get headingHowToPortSimOnlineOrPortMobileNumberOnlineToVi(): Locator {
    return this.page.getByRole('heading', { name: "How to port SIM online or port mobile number online to Vi?" });
  }

  get headingSorry(): Locator {
    return this.page.getByRole('heading', { name: "sorry" });
  }

  get headingAreYouStillHere(): Locator {
    return this.page.getByRole('heading', { name: "are you still here?" });
  }

  get link0(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/"]');
  }

  get linkViewDetails(): Locator {
    return this.page.getByRole('link', { name: "view details" });
  }

  get linkTermsConditions(): Locator {
    return this.page.getByRole('link', { name: "terms & conditions" });
  }

  get linkAStoreNearYou(): Locator {
    return this.page.getByRole('link', { name: "a store near you" });
  }

  get linkStoresNearYou(): Locator {
    return this.page.getByRole('link', { name: "stores near you" });
  }

  get linkViewDetails1(): Locator {
    return this.page.getByRole('link', { name: "view details" });
  }

  get linkDetails(): Locator {
    return this.page.getByRole('link', { name: "details" });
  }

  get linkViMaxPostpaidPlans(): Locator {
    return this.page.getByRole('link', { name: "Vi Max Postpaid Plans" });
  }

  get linkViPrepaid(): Locator {
    return this.page.getByRole('link', { name: "Vi Prepaid" });
  }

  get linkClickHere(): Locator {
    return this.page.getByRole('link', { name: "Click here" });
  }

  get linkClickHere1(): Locator {
    return this.page.getByRole('link', { name: "click here." });
  }

  get linkHome(): Locator {
    return this.page.getByRole('link', { name: "home" });
  }

  get linkNewConnection(): Locator {
    return this.page.getByRole('link', { name: "new connection" });
  }

  get linkMobileNumberPortabilityMnp(): Locator {
    return this.page.getByRole('link', { name: "mobile number portability (MNP)" });
  }

  get linkPostpaidConnection(): Locator {
    return this.page.getByRole('link', { name: "Postpaid Connection" });
  }

  get linkMobileNumberPortability(): Locator {
    return this.page.getByRole('link', { name: "mobile number portability" });
  }

  get linkMnp(): Locator {
    return this.page.getByRole('link', { name: "MNP" });
  }

  get linkSimCardHomeDelivery(): Locator {
    return this.page.getByRole('link', { name: "SIM card home delivery" });
  }

  get linkPostpaidPlan(): Locator {
    return this.page.getByRole('link', { name: "postpaid plan" });
  }

  get linkViPostpaid(): Locator {
    return this.page.getByRole('link', { name: "Vi postpaid" });
  }

  get linkViMoviesTv(): Locator {
    return this.page.getByRole('link', { name: "Vi movies & TV" });
  }

  get linkFancyMobileNumbers(): Locator {
    return this.page.getByRole('link', { name: "fancy mobile numbers" });
  }

  get linkPostpaidSim(): Locator {
    return this.page.getByRole('link', { name: "Postpaid SIM" });
  }

  get linkPrepaidSim(): Locator {
    return this.page.getByRole('link', { name: "Prepaid SIM" });
  }

  get linkMnp1(): Locator {
    return this.page.getByRole('link', { name: "MNP" });
  }

  get linkContinue(): Locator {
    return this.page.getByRole('link', { name: "continue" });
  }

  get linkExploreMorePlans(): Locator {
    return this.page.getByRole('link', { name: "explore more plans" });
  }

  get linkContinue1(): Locator {
    return this.page.getByRole('link', { name: "continue" });
  }

  get linkPostpaidConnection1(): Locator {
    return this.page.getByRole('link', { name: "Postpaid Connection" });
  }

  get linkPrivacyPolicy(): Locator {
    return this.page.getByRole('link', { name: "Privacy Policy" });
  }

  get linkMnp2(): Locator {
    return this.page.getByRole('link', { name: "MNP" });
  }

  get linkPremiumNumber(): Locator {
    return this.page.getByRole('link', { name: "Premium Number" });
  }

  get linkPrepaidConnection(): Locator {
    return this.page.getByRole('link', { name: "Prepaid Connection" });
  }

  get linkTrackYourSim(): Locator {
    return this.page.getByRole('link', { name: "Track Your SIM" });
  }

  get linkSimCardHomeDelivery1(): Locator {
    return this.page.getByRole('link', { name: "SIM Card Home Delivery" });
  }

  get linkBestPostpaidPlans(): Locator {
    return this.page.getByRole('link', { name: "Best Postpaid Plans" });
  }

  get linkNewSimCard(): Locator {
    return this.page.getByRole('link', { name: "New SIM Card" });
  }

  get linkFamilyPlans(): Locator {
    return this.page.getByRole('link', { name: "Family Plans" });
  }

  get linkVanityNumber(): Locator {
    return this.page.getByRole('link', { name: "Vanity Number" });
  }

  get buttonPrevious(): Locator {
    return this.page.getByRole('button', { name: "Previous" });
  }

  get buttonProceedWith551Plan(): Locator {
    return this.page.getByRole('button', { name: "proceed with 551 plan" });
  }

  get buttonProceedWith451Plan(): Locator {
    return this.page.getByRole('button', { name: "proceed with 451 plan" });
  }

  get buttonProceedWith1201Plan(): Locator {
    return this.page.getByRole('button', { name: "proceed with 1201 plan" });
  }

  get buttonProceedWith751Plan(): Locator {
    return this.page.getByRole('button', { name: "proceed with 751 plan" });
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

  get buttonProceedWithPlan(): Locator {
    return this.page.getByRole('button', { name: "proceed with plan" });
  }

  get buttonProceed(): Locator {
    return this.page.getByRole('button', { name: "proceed" });
  }

  get buttonIWantThisPlan(): Locator {
    return this.page.getByRole('button', { name: "I want this plan" });
  }

  get buttonIWantThisPack(): Locator {
    return this.page.getByRole('button', { name: "I want this pack" });
  }

  get buttonEnterBasicDetailsToPortMobileNumberOnline(): Locator {
    return this.page.getByRole('button', { name: "enter basic details to port mobile number online" });
  }

  get buttonEnterAddressToPlaceOrder(): Locator {
    return this.page.getByRole('button', { name: "enter address to place order" });
  }

  get buttonGetOtpToCompleteOrder(): Locator {
    return this.page.getByRole('button', { name: "get OTP to complete order" });
  }

  get buttonPayNow(): Locator {
    return this.page.getByRole('button', { name: "pay now" });
  }

  get buttonPayOnDelivery(): Locator {
    return this.page.getByRole('button', { name: "pay on delivery" });
  }

  get buttonDeliverOnThisAddress(): Locator {
    return this.page.getByRole('button', { name: "deliver on this address" });
  }

  get buttonPortMyNumber(): Locator {
    return this.page.getByRole('button', { name: "port my number" });
  }

  get buttonSendLinkOnEmail(): Locator {
    return this.page.getByRole('button', { name: "send link on email" });
  }

  get buttonEnterAddressManually(): Locator {
    return this.page.getByRole('button', { name: "enter address manually" });
  }

  get buttonUpdatePincodeTo(): Locator {
    return this.page.getByRole('button', { name: "update pincode to" });
  }

  get buttonRetry(): Locator {
    return this.page.getByRole('button', { name: "retry" });
  }

  get buttonWhoCanAvailMnpService(): Locator {
    return this.page.getByRole('button', { name: "Who can avail MNP service?" });
  }

  get buttonHowToPortSimOnlineToVi(): Locator {
    return this.page.getByRole('button', { name: "How to port SIM online to Vi?" });
  }

  get buttonWhatAreTheOffersAvailableIfIWishToPortToViPostpa(): Locator {
    return this.page.getByRole('button', { name: "What are the offers available if I wish to port to Vi Postpaid?" });
  }

  get buttonCanIPortToViPrepaid(): Locator {
    return this.page.getByRole('button', { name: "Can I port to Vi Prepaid?" });
  }

  get buttonHowDoIGetTheUniquePortingCodeOnlineWhileSwitching(): Locator {
    return this.page.getByRole('button', { name: "How do I get the unique porting code online while switching to Vi?" });
  }

  get buttonIfIPortMyNumberToViWillIGetAnAmazonPrimeMembers(): Locator {
    return this.page.getByRole('button', { name: "If I port my number to Vi, will I get an Amazon Prime Membership?" });
  }

  get buttonHowToPortMobileNumberToANewNetworkWithoutChanging(): Locator {
    return this.page.getByRole('button', { name: "How to port mobile number to a new network without changing my mobile number?" });
  }

  get buttonWhatAreTheDocumentsRequiredForMobileNumberPortabilit(): Locator {
    return this.page.getByRole('button', { name: "What are the documents required for Mobile Number Portability?" });
  }

  get buttonHowMuchTimeWillItTakeForMyNumberToGetPorted(): Locator {
    return this.page.getByRole('button', { name: "How much time will it take for my number to get ported?" });
  }

  get buttonWillThereBeAnyChargesToPortMyMobileNumberToVi(): Locator {
    return this.page.getByRole('button', { name: "Will there be any charges to port my mobile number to Vi?" });
  }

  get buttonIsThereADiscountOfferAvailableForNewPostpaidConnect(): Locator {
    return this.page.getByRole('button', { name: "Is there a discount offer available for new Postpaid connection?" });
  }

  get buttonPortMobileNumberToVi(): Locator {
    return this.page.getByRole('button', { name: "Port Mobile Number to Vi" });
  }

  get buttonCancelOrder(): Locator {
    return this.page.getByRole('button', { name: "cancel order" });
  }

  get buttonContinuePayment(): Locator {
    return this.page.getByRole('button', { name: "continue payment" });
  }

  get buttonContinue(): Locator {
    return this.page.getByRole('button', { name: "continue" });
  }

  get buttonAvailExressDelivery(): Locator {
    return this.page.getByRole('button', { name: "avail exress delivery" });
  }

  get buttonDeliverLater(): Locator {
    return this.page.getByRole('button', { name: "deliver later" });
  }

  get buttonProceed1(): Locator {
    return this.page.getByRole('button', { name: "proceed" });
  }

  get buttonCancelAndGoBack(): Locator {
    return this.page.getByRole('button', { name: "cancel and go back" });
  }

  get buttonProceed2(): Locator {
    return this.page.getByRole('button', { name: "proceed" });
  }

  get buttonProceed3(): Locator {
    return this.page.getByRole('button', { name: "proceed" });
  }

  get buttonContinue1(): Locator {
    return this.page.getByRole('button', { name: "continue" });
  }

  get buttonIAmStillHere(): Locator {
    return this.page.getByRole('button', { name: "I am still here" });
  }

  get inputFaqDrawer(): Locator {
    return this.page.locator('input[name="faq-drawer"]');
  }

  get input1(): Locator {
    return this.page.locator('input');
  }

  get input2(): Locator {
    return this.page.locator('input');
  }

  get input3(): Locator {
    return this.page.locator('input');
  }

  get input4(): Locator {
    return this.page.locator('input');
  }

  get input5(): Locator {
    return this.page.locator('input');
  }

  get input6(): Locator {
    return this.page.locator('input');
  }

  get input7(): Locator {
    return this.page.locator('input');
  }

  get input8(): Locator {
    return this.page.locator('input');
  }

  get input9(): Locator {
    return this.page.locator('input');
  }

  get inputFaqDrawer1(): Locator {
    return this.page.locator('input[name="faq-drawer"]');
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

  get inputFaqDrawer2(): Locator {
    return this.page.locator('input[name="faq-drawer"]');
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

  get inputFaqDrawer3(): Locator {
    return this.page.locator('input[name="faq-drawer"]');
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

  get inputFaqDrawer4(): Locator {
    return this.page.locator('input[name="faq-drawer"]');
  }

  get inputUtmpromoconfig(): Locator {
    return this.page.locator('input[name="utmPromoConfig"]');
  }

  get inputPlustext(): Locator {
    return this.page.locator('input[name="plustext"]');
  }

  get inputNontelcoiconnumber(): Locator {
    return this.page.locator('input[name="nontelcoiconnumber"]');
  }

  get inputMostlovedplan(): Locator {
    return this.page.locator('input[name="mostlovedplan"]');
  }

  get inputMostlovedpack(): Locator {
    return this.page.locator('input[name="mostlovedpack"]');
  }

  get inputChangeplan(): Locator {
    return this.page.locator('input[name="changeplan"]');
  }

  get inputChangepack(): Locator {
    return this.page.locator('input[name="changepack"]');
  }

  get inputPrepaidpackcost(): Locator {
    return this.page.locator('input[name="prepaidPackCost"]');
  }

  get inputIsskipotpbasedonutmparams(): Locator {
    return this.page.locator('input[name="isSkipOtpBasedOnUTMParams"]');
  }

  get inputRedxfullyloaded(): Locator {
    return this.page.locator('input[name="redxFullyLoaded"]');
  }

  get inputSubscriptionfreetxt(): Locator {
    return this.page.locator('input[name="subscriptionfreetxt"]');
  }

  get inputSubscriptionsfreetxt(): Locator {
    return this.page.locator('input[name="subscriptionsfreetxt"]');
  }

  get inputDefaultpackcirlcemapping(): Locator {
    return this.page.locator('input[name="defaultPackCirlceMapping"]');
  }

  get inputBestsellpacktext(): Locator {
    return this.page.locator('input[name="bestSellPackText"]');
  }

  get inputInputnontelcobenefitid(): Locator {
    return this.page.locator('input[name="inputnonTelcoBenefitId"]');
  }

  get inputInputnontelcoentertsinmentbenefitid(): Locator {
    return this.page.locator('input[name="inputnonTelcoEntertsinmentBenefitId"]');
  }

  get inputPostpaiddefaultplan(): Locator {
    return this.page.locator('input[name="postpaidDefaultPlan"]');
  }

  get inputPrepaiddefaultplan(): Locator {
    return this.page.locator('input[name="prepaidDefaultPlan"]');
  }

  get inputPostpaidautoselectionunitcost(): Locator {
    return this.page.locator('input[name="postpaidAutoSelectionUnitCost"]');
  }

  get inputPrepaidautoselectionunitcost(): Locator {
    return this.page.locator('input[name="prepaidAutoSelectionUnitCost"]');
  }

  get inputPostpaid(): Locator {
    return this.page.locator('input[name="lobSelect"]');
  }

  get inputPrepaid(): Locator {
    return this.page.locator('input[name="lobSelect"]');
  }

  get inputEnterPincode(): Locator {
    return this.page.locator('input[name="pinCode"]');
  }

  get inputEnterYourFullName(): Locator {
    return this.page.locator('input[name="fullname"]');
  }

  get inputEnterNumberYouWishToPort(): Locator {
    return this.page.locator('input[name="moNumber"]');
  }

  get inputIWantToBeContactedOnThisNumber(): Locator {
    return this.page.locator('input[name="contactedNumberCheckbox1"]');
  }

  get input65(): Locator {
    return this.page.locator('input');
  }

  get inputEnterYourContactNumber(): Locator {
    return this.page.locator('input[name="personalMobileNumber"]');
  }

  get inputOptForESim(): Locator {
    return this.page.locator('input[name="esimCheckbox"]');
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

  get inputEnterYourFullName1(): Locator {
    return this.page.locator('input[name="fullname"]');
  }

  get inputEnterStreetBuildingName(): Locator {
    return this.page.locator('input[name="gmapAddressField"]');
  }

  get inputFlatHouseNo(): Locator {
    return this.page.locator('input[name="flatNumber"]');
  }

  get input74(): Locator {
    return this.page.locator('input');
  }

  get inputOneTimeCode(): Locator {
    return this.page.locator('input[name="one-time-code"]');
  }

  get inputResourcepath(): Locator {
    return this.page.locator('input[name="resourcePath"]');
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

  get inputLpdista(): Locator {
    return this.page.locator('input[name="lpdista"]');
  }

  get inputIsexpreedelivery(): Locator {
    return this.page.locator('input[name="isexpreedelivery"]');
  }

  get inputDistafunctionalitystartandendtime(): Locator {
    return this.page.locator('input[name="distaFunctionalityStartAndEndTime"]');
  }

  get inputIsvalidexistingnumber(): Locator {
    return this.page.locator('input[name="isValidExistingNumber"]');
  }

  get input84(): Locator {
    return this.page.locator('input');
  }

  get inputNumcategory(): Locator {
    return this.page.locator('input[name="numcategory"]');
  }

  get inputNumjourney(): Locator {
    return this.page.locator('input[name="numjourney"]');
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

  get inputUtmsourcelist(): Locator {
    return this.page.locator('input[name="utmSourceList"]');
  }

  get inputUtmcampaignlist(): Locator {
    return this.page.locator('input[name="utmCampaignList"]');
  }

  get inputUtmcampaignlistprepaid(): Locator {
    return this.page.locator('input[name="UtmCampaignListPrepaid"]');
  }

  get inputUtmsourcelistprepaid(): Locator {
    return this.page.locator('input[name="UtmSourceListPrepaid"]');
  }

  get inputCircleidlistprepaid(): Locator {
    return this.page.locator('input[name="circleIdListPrepaid"]');
  }

  get inputCircleidlistoptionalprepaid(): Locator {
    return this.page.locator('input[name="circleIdListOptionalPrepaid"]');
  }

  get inputIsthirdattempttosendotp(): Locator {
    return this.page.locator('input[name="isThirdAttemptToSendOTP"]');
  }

  get inputIsotpsentviasdpmg(): Locator {
    return this.page.locator('input[name="isOTPSentViaSDPMG"]');
  }

  get inputNeopincodestatus(): Locator {
    return this.page.locator('input[name="neoPincodeStatus"]');
  }

  get inputLpflag(): Locator {
    return this.page.locator('input[name="lpFlag"]');
  }

  get inputPincodestatus(): Locator {
    return this.page.locator('input[name="pincodeStatus"]');
  }

  get inputIsplaninenglish(): Locator {
    return this.page.locator('input[name="isPlanInEnglish"]');
  }

  get inputSkycrvurl(): Locator {
    return this.page.locator('input[name="skycRVUrl"]');
  }

  get inputAddressskipenabled(): Locator {
    return this.page.locator('input[name="addressSkipEnabled"]');
  }

  get inputContactNumber(): Locator {
    return this.page.locator('input[name="mobileNumberPayDel"]');
  }

  get inputPincode(): Locator {
    return this.page.locator('input[name="pincodeInputPayDel"]');
  }

  get inputYourFullName(): Locator {
    return this.page.locator('input[name="deliveryPayFullName"]');
  }

  get inputYourFullAddress(): Locator {
    return this.page.locator('input[name="deliveryAddressPayInput"]');
  }

  get inputEnter4DigitOtp(): Locator {
    return this.page.getByPlaceholder("enter 4 digit OTP");
  }

  get inputDeliverycheckbox(): Locator {
    return this.page.locator('input[name="deliveryCheckbox"]');
  }

  get input110(): Locator {
    return this.page.locator('input');
  }

  get inputEnterYourEmailAddress(): Locator {
    return this.page.locator('input[name="emailForOTP"]');
  }

  get inputValidateexpired(): Locator {
    return this.page.locator('input[name="validateexpired"]');
  }

  get inputThankyoupageurl(): Locator {
    return this.page.locator('input[name="thankyoupageurl"]');
  }

  get inputEmailoptiontimeouttime(): Locator {
    return this.page.locator('input[name="emailOptionTimeoutTime"]');
  }

  get inputOtperrormgs(): Locator {
    return this.page.locator('input[name="OtpErrorMgs"]');
  }

  get inputUserlatitude(): Locator {
    return this.page.locator('input[name="userlatitude"]');
  }

  get inputUserlongitude(): Locator {
    return this.page.locator('input[name="userlongitude"]');
  }

  get inputGmapPincode(): Locator {
    return this.page.locator('input[name="gmap_pincode"]');
  }

  get inputGmapentercity(): Locator {
    return this.page.locator('input[name="gmapenterCity"]');
  }

  get inputGmapstate(): Locator {
    return this.page.locator('input[name="gmapstate"]');
  }

  get inputGmapentity(): Locator {
    return this.page.locator('input[name="gmapentity"]');
  }

  get inputGmapcircleid(): Locator {
    return this.page.locator('input[name="gmapcircleid"]');
  }

  get inputAddresssaved(): Locator {
    return this.page.locator('input[name="addressSaved"]');
  }

  get inputPincodestatus1(): Locator {
    return this.page.locator('input[name="pincodeStatus"]');
  }

  get inputIslockedlead(): Locator {
    return this.page.locator('input[name="isLockedLead"]');
  }

  get inputIscontinueneworder(): Locator {
    return this.page.locator('input[name="isContinueneworder"]');
  }

  get inputSubheadingc(): Locator {
    return this.page.locator('input[name="subheadingc"]');
  }

  get inputIsopp(): Locator {
    return this.page.locator('input[name="isOPP"]');
  }

  get inputParamdetails(): Locator {
    return this.page.locator('input[name="paramDetails"]');
  }

  get inputEncryptiontype(): Locator {
    return this.page.locator('input[name="encryptionType"]');
  }

  get inputTimeoutexpiredanimation(): Locator {
    return this.page.locator('input[name="timeoutexpiredanimation"]');
  }

  get inputTimeoutanimation(): Locator {
    return this.page.locator('input[name="timeoutanimation"]');
  }

  get inputNeogoldsessiontime(): Locator {
    return this.page.locator('input[name="neogoldsessiontime"]');
  }

  get inputNeogoldsessiontimedisplayed(): Locator {
    return this.page.locator('input[name="neogoldsessiontimedisplayed"]');
  }

  get inputIsauthor(): Locator {
    return this.page.locator('input[name="isAuthor"]');
  }

  get inputIsadobelaunch(): Locator {
    return this.page.locator('input[name="isAdobeLaunch"]');
  }

  get inputOsSdk(): Locator {
    return this.page.locator('input[name="os-sdk"]');
  }

  get form0(): Locator {
    return this.page.locator('form#pgForm');
  }

  get menu0(): Locator {
    return this.page.getByRole('navigation').nth(0);
  }

  get menuHomeNewConnectionMobileNumberPortabilityMnp(): Locator {
    return this.page.getByRole('navigation', { name: "home new connection mobile number portability (MNP)" });
  }

  constructor(page: Page) {
    super(page);
  }
}
