import { Page, Locator } from '@playwright/test';
import { BasePage } from '../../BasePage';

export class BuyANewVi4gSimCardOnlineAndGetAFreeDelivery extends BasePage {
  readonly url = "https://www.myvi.in/new-connection/buy-new-4g-sim-card-online";

  // All element locators are generated dynamically using locator strategies

  get headingBuyNewSimCardOnline(): Locator {
    return this.page.getByRole('heading', { name: "Buy New SIM Card Online" });
  }

  get headingBasicDetails(): Locator {
    return this.page.getByRole('heading', { name: "basic details" });
  }

  get headingDeliveryDetails(): Locator {
    return this.page.getByRole('heading', { name: "delivery details" });
  }

  get headingIndividualPlan(): Locator {
    return this.page.getByRole('heading', { name: "individual plan" });
  }

  get headingAttention(): Locator {
    return this.page.getByRole('heading', { name: "attention" });
  }

  get headingSlowDown(): Locator {
    return this.page.getByRole('heading', { name: "slow down" });
  }

  get headingFaqForOrderANewSimCardOnline(): Locator {
    return this.page.getByRole('heading', { name: "FAQ for Order a New SIM Card Online" });
  }

  get headingCanWeOrderSimCardOnline(): Locator {
    return this.page.getByRole('heading', { name: "Can we order sim card online?" });
  }

  get headingWhatIsTheNewSimCardPrice(): Locator {
    return this.page.getByRole('heading', { name: "What is the new sim card price?" });
  }

  get headingWhatAreTheDifferentNewSimCardOffersWithVi(): Locator {
    return this.page.getByRole('heading', { name: "What are the different new sim card offers with Vi?" });
  }

  get headingWhatAreTheDocumentsRequiredToApplyForANewMobileSi(): Locator {
    return this.page.getByRole('heading', { name: "What are the documents required to apply for a new mobile sim card online?" });
  }

  get headingWhatAreTheDifferentSimCardPlansAvailableInVi(): Locator {
    return this.page.getByRole('heading', { name: "What are the different sim card plans available in Vi?" });
  }

  get headingHowCanIBuyANewVodafoneOrIdeaSimCardOnline(): Locator {
    return this.page.getByRole('heading', { name: "How can I buy a new Vodafone or Idea SIM card online?" });
  }

  get headingOrderANewSimCardOnline(): Locator {
    return this.page.getByRole('heading', { name: "Order a New SIM Card Online" });
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

  get linkStoreNearYou(): Locator {
    return this.page.getByRole('link', { name: "store near you" });
  }

  get linkStoresNearYou(): Locator {
    return this.page.getByRole('link', { name: "stores near you" });
  }

  get linkTrackOrder(): Locator {
    return this.page.getByRole('link', { name: "track order" });
  }

  get linkPostpaidPlans(): Locator {
    return this.page.getByRole('link', { name: "postpaid plans" });
  }

  get linkPrepaidRechargePacks(): Locator {
    return this.page.getByRole('link', { name: "prepaid recharge packs" });
  }

  get linkUnlimitedPlans(): Locator {
    return this.page.getByRole('link', { name: "unlimited plans" });
  }

  get linkFamilyPostpaidPlans(): Locator {
    return this.page.getByRole('link', { name: "family postpaid plans" });
  }

  get linkBuySimOnline(): Locator {
    return this.page.getByRole('link', { name: "Buy SIM online" });
  }

  get linkHome(): Locator {
    return this.page.getByRole('link', { name: "Home" });
  }

  get linkNewConnection(): Locator {
    return this.page.getByRole('link', { name: "New Connection" });
  }

  get linkBuyNew4gSimOnline(): Locator {
    return this.page.getByRole('link', { name: "Buy New 4G SIM Online" });
  }

  get linkBuySimOnline1(): Locator {
    return this.page.getByRole('link', { name: "Buy SIM Online" });
  }

  get linkSimDelivery(): Locator {
    return this.page.getByRole('link', { name: "SIM delivery" });
  }

  get link14(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/new-connection/buy-new-4g-sim-card-online"]');
  }

  get linkExploreMorePlans(): Locator {
    return this.page.getByRole('link', { name: "explore more plans" });
  }

  get linkContinue(): Locator {
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

  get buttonGetOtpToCompleteOrder(): Locator {
    return this.page.getByRole('button', { name: "get OTP to complete order" });
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

  get buttonIWantThisPlan(): Locator {
    return this.page.getByRole('button', { name: "I want this plan" });
  }

  get buttonProceedWithPlan(): Locator {
    return this.page.getByRole('button', { name: "Proceed with plan" });
  }

  get buttonPlaceOrder(): Locator {
    return this.page.getByRole('button', { name: "place order" });
  }

  get buttonTrackOrder(): Locator {
    return this.page.getByRole('button', { name: "track order" });
  }

  get buttonOkay(): Locator {
    return this.page.getByRole('button', { name: "okay" });
  }

  get buttonEnterAddressManually(): Locator {
    return this.page.getByRole('button', { name: "enter address manually" });
  }

  get buttonUpdatePincodeTo(): Locator {
    return this.page.getByRole('button', { name: "update pincode to" });
  }

  get buttonCanWeOrderSimCardOnline(): Locator {
    return this.page.getByRole('button', { name: "Can we order sim card online?" });
  }

  get buttonWhatIsTheNewSimCardPrice(): Locator {
    return this.page.getByRole('button', { name: "What is the new sim card price?" });
  }

  get buttonWhatAreTheDifferentNewSimCardOffersWithVi(): Locator {
    return this.page.getByRole('button', { name: "What are the different new sim card offers with Vi?" });
  }

  get buttonWhatAreTheDocumentsRequiredToApplyForANewMobileSi(): Locator {
    return this.page.getByRole('button', { name: "What are the documents required to apply for a new mobile sim card online?" });
  }

  get buttonWhatAreTheDifferentSimCardPlansAvailableInVi(): Locator {
    return this.page.getByRole('button', { name: "What are the different sim card plans available in Vi?" });
  }

  get buttonHowCanIBuyANewVodafoneOrIdeaSimCardOnline(): Locator {
    return this.page.getByRole('button', { name: "How can I buy a new Vodafone or Idea SIM card online?" });
  }

  get buttonOrderANewSimCardOnline(): Locator {
    return this.page.getByRole('button', { name: "Order a New SIM Card Online" });
  }

  get buttonEditDetails(): Locator {
    return this.page.getByRole('button', { name: "edit details" });
  }

  get buttonProceed(): Locator {
    return this.page.getByRole('button', { name: "proceed" });
  }

  get buttonProceed1(): Locator {
    return this.page.getByRole('button', { name: "proceed" });
  }

  get buttonContinue(): Locator {
    return this.page.getByRole('button', { name: "continue" });
  }

  get buttonIAmStillHere(): Locator {
    return this.page.getByRole('button', { name: "I am still here" });
  }

  get input0(): Locator {
    return this.page.locator('input');
  }

  get input1(): Locator {
    return this.page.locator('input');
  }

  get inputEnterYourAlternateNumber(): Locator {
    return this.page.locator('input[name="sAltNo"]');
  }

  get inputEnterYourFullName(): Locator {
    return this.page.locator('input[name="fullname"]');
  }

  get inputEnterPincode(): Locator {
    return this.page.locator('input[name="pinCode"]');
  }

  get inputEnterStreetBuildingName(): Locator {
    return this.page.getByPlaceholder("Enter a location");
  }

  get inputFlatHouseNo(): Locator {
    return this.page.locator('input[name="streetAddress"]');
  }

  get inputEsimcheckbox(): Locator {
    return this.page.locator('input[name="esimCheckbox"]');
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

  get inputFaqDrawer(): Locator {
    return this.page.locator('input[name="faq-drawer"]');
  }

  get inputFaqDrawer1(): Locator {
    return this.page.locator('input[name="faq-drawer"]');
  }

  get inputFaqDrawer2(): Locator {
    return this.page.locator('input[name="faq-drawer"]');
  }

  get inputFaqDrawer3(): Locator {
    return this.page.locator('input[name="faq-drawer"]');
  }

  get input15(): Locator {
    return this.page.locator('input');
  }

  get inputOneTimeCode(): Locator {
    return this.page.locator('input[name="one-time-code"]');
  }

  get inputResourcepath(): Locator {
    return this.page.locator('input[name="resourcePath"]');
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

  get inputLpdista(): Locator {
    return this.page.locator('input[name="lpdista"]');
  }

  get inputIsexpreedelivery(): Locator {
    return this.page.locator('input[name="isexpreedelivery"]');
  }

  get inputAttentionpopup(): Locator {
    return this.page.locator('input[name="attentionPopup"]');
  }

  get inputMifiplanscardshoworhide(): Locator {
    return this.page.locator('input[name="mifiPlansCardShowOrHide"]');
  }

  get inputMifideviceprice(): Locator {
    return this.page.locator('input[name="mifiDevicePrice"]');
  }

  get inputUtmsourcelist(): Locator {
    return this.page.locator('input[name="utmSourceList"]');
  }

  get inputUtmcampaignlist(): Locator {
    return this.page.locator('input[name="utmCampaignList"]');
  }

  get inputIsthirdattempttosendotp(): Locator {
    return this.page.locator('input[name="isThirdAttemptToSendOTP"]');
  }

  get inputIsotpsentviasdpmg(): Locator {
    return this.page.locator('input[name="isOTPSentViaSDPMG"]');
  }

  get inputIsskipotpbasedonutmparams(): Locator {
    return this.page.locator('input[name="isSkipOtpBasedOnUTMParams"]');
  }

  get inputNeopincodestatus(): Locator {
    return this.page.locator('input[name="neoPincodeStatus"]');
  }

  get inputPincodestatus(): Locator {
    return this.page.locator('input[name="pincodeStatus"]');
  }

  get inputLpflag(): Locator {
    return this.page.locator('input[name="lpflag"]');
  }

  get inputShowplansbasispincode(): Locator {
    return this.page.locator('input[name="showPlansBasisPincode"]');
  }

  get inputFaqDrawer4(): Locator {
    return this.page.locator('input[name="faq-drawer"]');
  }

  get inputOtp(): Locator {
    return this.page.locator('input[name="otp"]');
  }

  get inputOneTimeCode1(): Locator {
    return this.page.locator('input[name="one-time-code"]');
  }

  get inputVE(): Locator {
    return this.page.locator('input[name="v-e"]');
  }

  get inputTPU(): Locator {
    return this.page.locator('input[name="t-p-u"]');
  }

  get inputOEM(): Locator {
    return this.page.locator('input[name="o-e-m"]');
  }

  get inputSlowdownjson(): Locator {
    return this.page.locator('input[name="slowdownjson"]');
  }

  get inputMaxordercount(): Locator {
    return this.page.locator('input[name="maxordercount"]');
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

  get inputGooglemapload(): Locator {
    return this.page.locator('input[name="googlemapload"]');
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

  get menuHomeNewConnectionBuyNew4gSimOnline(): Locator {
    return this.page.getByRole('navigation', { name: "Home New Connection Buy New 4G SIM Online" });
  }

  constructor(page: Page) {
    super(page);
  }
}
