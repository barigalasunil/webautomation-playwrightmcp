import { Page, Locator } from '@playwright/test';
import { BasePage } from '../../BasePage';

export class BuyFancyNumbersOnlineChoosePremiumVipNumberOrFreeOptionsViIndia extends BasePage {
  readonly url = "https://www.myvi.in/new-connection/choose-your-fancy-mobile-numbers-online";

  // All element locators are generated dynamically using locator strategies

  get headingIndividualPlans(): Locator {
    return this.page.getByRole('heading', { name: "Individual plans" });
  }

  get heading4gPrepaidSim(): Locator {
    return this.page.getByRole('heading', { name: "4G prepaid sim" });
  }

  get headingEnterBasicDetailsToSelectAVipFancyNumber(): Locator {
    return this.page.getByRole('heading', { name: "enter basic details to select a VIP fancy number" });
  }

  get headingSelectVipFancyNumber(): Locator {
    return this.page.getByRole('heading', { name: "select VIP fancy number" });
  }

  get headingEnterAddressToPlaceOrder(): Locator {
    return this.page.getByRole('heading', { name: "enter address to place order" });
  }

  get headingGetAViSimWithVipMobileNumberAtYourDoorstepAndBe(): Locator {
    return this.page.getByRole('heading', { name: "get a Vi SIM with VIP mobile number at your doorstep and be red carpet worthy" });
  }

  get headingFancyVipPhoneNumbersFaqs(): Locator {
    return this.page.getByRole('heading', { name: "Fancy/VIP Phone Numbers FAQs" });
  }

  get headingWhatIsAVipNumberSimCard(): Locator {
    return this.page.getByRole('heading', { name: "What is a VIP number SIM card?" });
  }

  get headingCanIChooseMyMobileNumberOnline(): Locator {
    return this.page.getByRole('heading', { name: "Can I choose my mobile number online?" });
  }

  get headingHowToBuyAVipMobileNumberInIndia(): Locator {
    return this.page.getByRole('heading', { name: "How to buy a VIP mobile number in India?" });
  }

  get headingHowToGetFancyMobileNumbers999999Or786Or999999Or7(): Locator {
    return this.page.getByRole('heading', { name: "How to get fancy mobile numbers 999999 or 786 or 999999 or 7777 or my favorite m" });
  }

  get headingHowMuchIsTheVipMobileNumberPriceInIndia(): Locator {
    return this.page.getByRole('heading', { name: "How much is the VIP mobile number price in India?" });
  }

  get headingAreVipFancyMobileNumbersAvailableInDelhiMumbaiAndB(): Locator {
    return this.page.getByRole('heading', { name: "Are VIP/fancy mobile numbers available in Delhi, Mumbai and Bengaluru?" });
  }

  get headingAreVipFancyMobileNumbersAvailableInKarnatakaTamilNa(): Locator {
    return this.page.getByRole('heading', { name: "Are VIP/fancy mobile numbers available in Karnataka, Tamil Nadu, Rajasthan and A" });
  }

  get headingWhatAreTheVipFancyMobileNumbersAvailableUnder500Or(): Locator {
    return this.page.getByRole('heading', { name: "What are the VIP/fancy mobile numbers available under ₹500 or ₹1000?" });
  }

  get headingCanIGetAVodafoneOrIdeaMobileNumberOfMyChoice(): Locator {
    return this.page.getByRole('heading', { name: "Can I get a Vodafone or Idea mobile number of my choice?" });
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

  get headingAttention(): Locator {
    return this.page.getByRole('heading', { name: "attention" });
  }

  get headingSlowDown(): Locator {
    return this.page.getByRole('heading', { name: "slow down" });
  }

  get headingChooseYourVipMobileNumberOnline(): Locator {
    return this.page.getByRole('heading', { name: "Choose your VIP mobile number online" });
  }

  get headingChooseYourVipMobileNumberOnline1(): Locator {
    return this.page.getByRole('heading', { name: "Choose your VIP mobile number online" });
  }

  get headingGetAFancyMobileNumberBasedOnAPatternOfPreferableN(): Locator {
    return this.page.getByRole('heading', { name: "Get a Fancy mobile number based on a pattern of preferable Numbers:" });
  }

  get headingOopsTransactionFailed(): Locator {
    return this.page.getByRole('heading', { name: "oops! transaction failed." });
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

  get linkStoreNearYou(): Locator {
    return this.page.getByRole('link', { name: "store near you" });
  }

  get linkStoresNearYou(): Locator {
    return this.page.getByRole('link', { name: "stores near you" });
  }

  get linkPremium(): Locator {
    return this.page.getByRole('link', { name: "Premium" });
  }

  get linkFree(): Locator {
    return this.page.getByRole('link', { name: "Free" });
  }

  get linkShowMore(): Locator {
    return this.page.getByRole('link', { name: "show more" });
  }

  get link8(): Locator {
    return this.page.locator('a[href="javascript:void(0);"]');
  }

  get linkViewDetails1(): Locator {
    return this.page.getByRole('link', { name: "view details" });
  }

  get linkDetails(): Locator {
    return this.page.getByRole('link', { name: "details" });
  }

  get linkVipNumber(): Locator {
    return this.page.getByRole('link', { name: "VIP number" });
  }

  get linkNewPostpaidConnection(): Locator {
    return this.page.getByRole('link', { name: "new postpaid connection" });
  }

  get linkVipNumbers(): Locator {
    return this.page.getByRole('link', { name: "VIP numbers" });
  }

  get linkTrackOrder(): Locator {
    return this.page.getByRole('link', { name: "track order" });
  }

  get linkHome(): Locator {
    return this.page.getByRole('link', { name: "home" });
  }

  get linkNewConnection(): Locator {
    return this.page.getByRole('link', { name: "new connection" });
  }

  get linkBuyFancyMobileNumbersOnline(): Locator {
    return this.page.getByRole('link', { name: "buy fancy mobile numbers online" });
  }

  get linkPostpaidPlan(): Locator {
    return this.page.getByRole('link', { name: "postpaid plan" });
  }

  get linkPostpaidSim(): Locator {
    return this.page.getByRole('link', { name: "Postpaid SIM" });
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

  get linkPostpaidConnection(): Locator {
    return this.page.getByRole('link', { name: "Postpaid Connection" });
  }

  get linkPrivacyPolicy(): Locator {
    return this.page.getByRole('link', { name: "Privacy Policy" });
  }

  get linkMnp(): Locator {
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

  get linkSimCardHomeDelivery(): Locator {
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

  get linkRechargeNow(): Locator {
    return this.page.getByRole('link', { name: "recharge now" });
  }

  get link35(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/new-connection/user-details"]');
  }

  get link36(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/new-connection/target=%22_blank%22"]');
  }

  get link37(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/new-connection/target=%22_blank%22"]');
  }

  get link38(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/new-connection/target=%22_blank%22"]');
  }

  get buttonPrevious(): Locator {
    return this.page.getByRole('button', { name: "Previous" });
  }

  get buttonProceedWith551Plan(): Locator {
    return this.page.getByRole('button', { name: "Proceed with ₹551 plan" });
  }

  get buttonProceedWith451Plan(): Locator {
    return this.page.getByRole('button', { name: "Proceed with ₹451 plan" });
  }

  get buttonProceedWith1201Plan(): Locator {
    return this.page.getByRole('button', { name: "Proceed with ₹1201 plan" });
  }

  get buttonProceedWith751Plan(): Locator {
    return this.page.getByRole('button', { name: "Proceed with ₹751 plan" });
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

  get buttonProceedWithPlan(): Locator {
    return this.page.getByRole('button', { name: "Proceed with plan" });
  }

  get buttonProceed(): Locator {
    return this.page.getByRole('button', { name: "proceed" });
  }

  get button(): Locator {
    return this.page.getByRole('button', { name: "×" });
  }

  get buttonIWantThisPlan(): Locator {
    return this.page.getByRole('button', { name: "I want this plan" });
  }

  get buttonIWantThisPack(): Locator {
    return this.page.getByRole('button', { name: "I want this pack" });
  }

  get buttonEnterBasicDetailsToSelectAVipFancyNumber(): Locator {
    return this.page.getByRole('button', { name: "enter basic details to select a VIP fancy number" });
  }

  get buttonSelectVipFancyNumber(): Locator {
    return this.page.getByRole('button', { name: "select VIP fancy number" });
  }

  get buttonPrevious1(): Locator {
    return this.page.getByRole('button', { name: "Previous" });
  }

  get buttonNext1(): Locator {
    return this.page.getByRole('button', { name: "Next" });
  }

  get buttonSearch(): Locator {
    return this.page.getByRole('button', { name: "Search" });
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

  get buttonIWantAVipNumber(): Locator {
    return this.page.getByRole('button', { name: "i want a VIP number" });
  }

  get buttonWhatIsAVipNumberSimCard(): Locator {
    return this.page.getByRole('button', { name: "What is a VIP number SIM card?" });
  }

  get buttonCanIChooseMyMobileNumberOnline(): Locator {
    return this.page.getByRole('button', { name: "Can I choose my mobile number online?" });
  }

  get buttonHowToBuyAVipMobileNumberInIndia(): Locator {
    return this.page.getByRole('button', { name: "How to buy a VIP mobile number in India?" });
  }

  get buttonHowToGetFancyMobileNumbers999999Or786Or999999Or7(): Locator {
    return this.page.locator('button');
  }

  get buttonHowMuchIsTheVipMobileNumberPriceInIndia(): Locator {
    return this.page.getByRole('button', { name: "How much is the VIP mobile number price in India?" });
  }

  get buttonAreVipFancyMobileNumbersAvailableInDelhiMumbaiAndB(): Locator {
    return this.page.getByRole('button', { name: "Are VIP/fancy mobile numbers available in Delhi, Mumbai and Bengaluru?" });
  }

  get buttonAreVipFancyMobileNumbersAvailableInKarnatakaTamilNa(): Locator {
    return this.page.locator('button');
  }

  get buttonWhatAreTheVipFancyMobileNumbersAvailableUnder500Or(): Locator {
    return this.page.getByRole('button', { name: "What are the VIP/fancy mobile numbers available under ₹500 or ₹1000?" });
  }

  get buttonCanIGetAVodafoneOrIdeaMobileNumberOfMyChoice(): Locator {
    return this.page.getByRole('button', { name: "Can I get a Vodafone or Idea mobile number of my choice?" });
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

  get buttonTrackOrder(): Locator {
    return this.page.getByRole('button', { name: "track order" });
  }

  get buttonOkay(): Locator {
    return this.page.getByRole('button', { name: "okay" });
  }

  get buttonChooseYourVipMobileNumberOnline(): Locator {
    return this.page.getByRole('button', { name: "Choose your VIP mobile number online" });
  }

  get buttonRetry(): Locator {
    return this.page.getByRole('button', { name: "retry" });
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

  get buttonProceed2(): Locator {
    return this.page.getByRole('button', { name: "proceed" });
  }

  get buttonContinue1(): Locator {
    return this.page.getByRole('button', { name: "continue" });
  }

  get buttonIAmStillHere(): Locator {
    return this.page.getByRole('button', { name: "I am still here" });
  }

  get inputMatchingnumberLottie(): Locator {
    return this.page.locator('input[name="matchingnumber_Lottie"]');
  }

  get input1(): Locator {
    return this.page.locator('input');
  }

  get inputFaqDrawer(): Locator {
    return this.page.locator('input[name="faq-drawer"]');
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

  get input10(): Locator {
    return this.page.locator('input');
  }

  get input11(): Locator {
    return this.page.locator('input');
  }

  get input12(): Locator {
    return this.page.locator('input');
  }

  get inputFaqDrawer1(): Locator {
    return this.page.locator('input[name="faq-drawer"]');
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

  get inputFaqDrawer2(): Locator {
    return this.page.locator('input[name="faq-drawer"]');
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

  get inputFaqDrawer3(): Locator {
    return this.page.locator('input[name="faq-drawer"]');
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

  get inputRedxfullyloaded(): Locator {
    return this.page.locator('input[name="redxFullyLoaded"]');
  }

  get inputPrepaidpackcost(): Locator {
    return this.page.locator('input[name="prepaidPackCost"]');
  }

  get inputIsskipotpbasedonutmparams(): Locator {
    return this.page.locator('input[name="isSkipOtpBasedOnUTMParams"]');
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

  get inputBestsellpacktext1(): Locator {
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

  get inputPrepaidautoselectionunitcost(): Locator {
    return this.page.locator('input[name="prepaidAutoSelectionUnitCost"]');
  }

  get inputPostpaidautoselectionunitcost(): Locator {
    return this.page.locator('input[name="postpaidAutoSelectionUnitCost"]');
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

  get inputEnterYourMobileNumber(): Locator {
    return this.page.locator('input[name="moNumber"]');
  }

  get input69(): Locator {
    return this.page.locator('input');
  }

  get inputEnterYourFullName(): Locator {
    return this.page.locator('input[name="fullname"]');
  }

  get inputCynselectiontype1(): Locator {
    return this.page.locator('input[name="cynSelectionType1"]');
  }

  get inputCynselectiontype5(): Locator {
    return this.page.locator('input[name="cynSelectionType5"]');
  }

  get inputCynselectiontype2(): Locator {
    return this.page.locator('input[name="cynSelectionType2"]');
  }

  get inputCynselectiontype3(): Locator {
    return this.page.locator('input[name="cynSelectionType3"]');
  }

  get inputCynselectiontype4(): Locator {
    return this.page.locator('input[name="cynSelectionType4"]');
  }

  get inputCynselectiontype6(): Locator {
    return this.page.locator('input[name="cynSelectionType6"]');
  }

  get inputEnterTheNumberYouWant(): Locator {
    return this.page.locator('input[name="cynNumber"]');
  }

  get input78(): Locator {
    return this.page.locator('input');
  }

  get inputEntorgid(): Locator {
    return this.page.locator('input[name="entOrgId"]');
  }

  get inputEnttypeid(): Locator {
    return this.page.locator('input[name="entTypeId"]');
  }

  get inputEtopnumber(): Locator {
    return this.page.locator('input[name="etopNumber"]');
  }

  get inputNoresultsfoundmsg(): Locator {
    return this.page.locator('input[name="noResultsFoundMsg"]');
  }

  get inputExactresultsmsg(): Locator {
    return this.page.locator('input[name="exactResultsMsg"]');
  }

  get inputClosestresultmsg(): Locator {
    return this.page.locator('input[name="closestResultMsg"]');
  }

  get inputMsgforthreedigits(): Locator {
    return this.page.locator('input[name="msgForThreeDigits"]');
  }

  get inputCposgeneralerrormsg(): Locator {
    return this.page.locator('input[name="cposGeneralErrorMsg"]');
  }

  get inputCposajaxcallflag(): Locator {
    return this.page.locator('input[name="cposAjaxCallFlag"]');
  }

  get inputCposalreadyblockederrormsg(): Locator {
    return this.page.locator('input[name="cposAlreadyBlockedErrorMsg"]');
  }

  get inputOptForESim(): Locator {
    return this.page.locator('input[name="esimCheckbox"]');
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

  get inputEnterStreetBuildingName(): Locator {
    return this.page.locator('input[name="gmapAddressField"]');
  }

  get inputFlatHouseNo(): Locator {
    return this.page.locator('input[name="flatNumber"]');
  }

  get input95(): Locator {
    return this.page.locator('input');
  }

  get inputOneTimeCode(): Locator {
    return this.page.locator('input[name="one-time-code"]');
  }

  get inputResourcepath(): Locator {
    return this.page.locator('input[name="resourcePath"]');
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

  get inputIsexpreedelivery(): Locator {
    return this.page.locator('input[name="isexpreedelivery"]');
  }

  get inputDistafunctionalitystartandendtime(): Locator {
    return this.page.locator('input[name="distaFunctionalityStartAndEndTime"]');
  }

  get inputLpdista(): Locator {
    return this.page.locator('input[name="lpdista"]');
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

  get inputSegmentchangederrormsg(): Locator {
    return this.page.locator('input[name="segmentChangedErrorMsg"]');
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

  get inputShowprepaidpremium(): Locator {
    return this.page.locator('input[name="showPrepaidPremium"]');
  }

  get inputIsplaninenglish(): Locator {
    return this.page.locator('input[name="isPlanInEnglish"]');
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

  get inputPrepaidutms(): Locator {
    return this.page.locator('input[name="prepaidUtms"]');
  }

  get inputNumberprice(): Locator {
    return this.page.locator('input[name="numberPrice"]');
  }

  get inputSpecialnumbernotexactmatcherrormessagedesktop(): Locator {
    return this.page.locator('input[name="specialNumberNotExactMatchErrorMessageDesktop"]');
  }

  get inputSpecialnumbernotexactmatcherrormessagemobile(): Locator {
    return this.page.locator('input[name="specialNumberNotExactMatchErrorMessageMobile"]');
  }

  get inputNumbersformenotexactmatcherrormessagemobile(): Locator {
    return this.page.locator('input[name="numbersForMeNotExactMatchErrorMessageMobile"]');
  }

  get inputNumbersformenotexactmatcherrormessagedesktop(): Locator {
    return this.page.locator('input[name="numbersForMeNotExactMatchErrorMessageDesktop"]');
  }

  get inputSpecialdatesecondclosestmessage(): Locator {
    return this.page.locator('input[name="specialDateSecondClosestMessage"]');
  }

  get inputNumbersformemessage(): Locator {
    return this.page.locator('input[name="numbersForMeMessage"]');
  }

  get inputPromotepackcost(): Locator {
    return this.page.locator('input[name="promotePackCost"]');
  }

  get inputAddressskipenabled(): Locator {
    return this.page.locator('input[name="addressSkipEnabled"]');
  }

  get inputMatchingnumbersutmcampaign(): Locator {
    return this.page.locator('input[name="matchingNumbersUtmCampaign"]');
  }

  get inputEnter4DigitOtp(): Locator {
    return this.page.getByPlaceholder("enter 4 digit OTP");
  }

  get inputDeliverycheckbox(): Locator {
    return this.page.locator('input[name="deliveryCheckbox"]');
  }

  get input138(): Locator {
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

  get inputSlowdownjson(): Locator {
    return this.page.locator('input[name="slowdownjson"]');
  }

  get inputMaxordercount(): Locator {
    return this.page.locator('input[name="maxordercount"]');
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

  get menuHomeNewConnectionBuyFancyMobileNumbersOnline(): Locator {
    return this.page.getByRole('navigation', { name: "home new connection buy fancy mobile numbers online" });
  }

  constructor(page: Page) {
    super(page);
  }
}
