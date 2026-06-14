import { Page, Locator } from '@playwright/test';
import { BasePage } from '../../BasePage';

export class GetANewViPrepaidSimCardIn3SimpleStepsBuyNewSim extends BasePage {
  readonly url = "https://www.myvi.in/new-connection/buy-prepaid-sim-connection-online";

  // All element locators are generated dynamically using locator strategies

  get headingSelectAPackToStart(): Locator {
    return this.page.getByRole('heading', { name: "select a pack to start" });
  }

  get headingGetANewViPrepaidSimCardIn3SimpleSteps(): Locator {
    return this.page.getByRole('heading', { name: "get a new Vi prepaid SIM Card in 3 simple steps" });
  }

  get headingCarryForwardUnuseddailyDataOfWeekdaysToWeekend(): Locator {
    return this.page.getByRole('heading', { name: "carry forward unuseddaily data of weekdays to weekend" });
  }

  get headingTheFutureIsexcitingReady(): Locator {
    return this.page.getByRole('heading', { name: "the future isexciting. Ready?" });
  }

  get headingCarryForwardUnuseddailyDataOfWeekdaysToWeekend1(): Locator {
    return this.page.getByRole('heading', { name: "carry forward unuseddaily data of weekdays to weekend" });
  }

  get headingTheFutureIsexcitingReady1(): Locator {
    return this.page.getByRole('heading', { name: "the future isexciting. Ready?" });
  }

  get headingWhyJoinVi(): Locator {
    return this.page.getByRole('heading', { name: "why join Vi?" });
  }

  get headingContactlessPrepaidSimAtYourDoorstep(): Locator {
    return this.page.getByRole('heading', { name: "contactless Prepaid SIM at your Doorstep" });
  }

  get headingTrustedAcrossTheNation(): Locator {
    return this.page.getByRole('heading', { name: "trusted across the nation" });
  }

  get headingPrepaidSimConnectionFaqs(): Locator {
    return this.page.getByRole('heading', { name: "Prepaid SIM Connection FAQs" });
  }

  get headingHowDoIGetFreeViPrepaidSim(): Locator {
    return this.page.getByRole('heading', { name: "How do I get free Vi prepaid SIM?" });
  }

  get headingWhatAreTheNewSimOffersOnViPrepaidConnection(): Locator {
    return this.page.getByRole('heading', { name: "What are the new SIM offers on Vi Prepaid connection?" });
  }

  get headingWhatIsThePriceOfANewViSim(): Locator {
    return this.page.getByRole('heading', { name: "What is the price of a new Vi SIM?" });
  }

  get headingHowLongWillMyNewPrepaidConnectionTakeToGetActivate(): Locator {
    return this.page.getByRole('heading', { name: "How long will my new prepaid connection take to get activated?" });
  }

  get headingWhichDocumentsWouldIRequireWhileBuyingAPrepaidConne(): Locator {
    return this.page.getByRole('heading', { name: "Which documents would I require while buying a prepaid connection?" });
  }

  get headingDoINeedToPayAnyActivationChargesWhileIBuyANewPr(): Locator {
    return this.page.getByRole('heading', { name: "Do I need to pay any activation charges while I buy a new prepaid SIM online?" });
  }

  get headingHowCanIBuyANewConnectionWithoutLosingMyCurrentNum(): Locator {
    return this.page.getByRole('heading', { name: "How can I buy a new connection without losing my current number?" });
  }

  get headingHowCanITrackMyNewPrepaidSimCardAfterPlacingTheOr(): Locator {
    return this.page.getByRole('heading', { name: "How can I track my new prepaid SIM card after placing the order?" });
  }

  get headingDoINeedToBePresentWhileThePrepaidSimCardIsHanded(): Locator {
    return this.page.getByRole('heading', { name: "Do I need to be present while the prepaid SIM card is handed over to me?" });
  }

  get headingHowCanIBuyANewVodafoneOrIdeaPrepaidSimConnection(): Locator {
    return this.page.getByRole('heading', { name: "How can I buy a new Vodafone or Idea Prepaid SIM connection?" });
  }

  get headingIsDoorstepDeliveryAvailableForViPrepaidSim(): Locator {
    return this.page.getByRole('heading', { name: "Is doorstep delivery available for Vi prepaid SIM?" });
  }

  get headingCanICompleteViPrepaidSimActivationThroughEkyc(): Locator {
    return this.page.getByRole('heading', { name: "Can I complete Vi prepaid SIM activation through eKYC?" });
  }

  get headingBuyPrepaidSimCardOnline(): Locator {
    return this.page.getByRole('heading', { name: "buy prepaid SIM card online" });
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

  get linkPostpaidPlans(): Locator {
    return this.page.getByRole('link', { name: "postpaid plans" });
  }

  get linkFamilyPlans(): Locator {
    return this.page.getByRole('link', { name: "family plans" });
  }

  get linkPrepaidPacks(): Locator {
    return this.page.getByRole('link', { name: "prepaid packs" });
  }

  get linkViewDetails(): Locator {
    return this.page.getByRole('link', { name: "view details" });
  }

  get linkTermsConditions(): Locator {
    return this.page.getByRole('link', { name: "terms & conditions" });
  }

  get linkCarryForwardUnuseddailyDataOfWeekdaysToWeekendBuyA(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/new-connection/buy-prepaid-sim-connection-online"]');
  }

  get linkTheFutureIsexcitingReadySwitchToViWithNoChangeInN(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/new-connection/mobile-number-portability-mnp-online"]');
  }

  get linkCarryForwardUnuseddailyDataOfWeekdaysToWeekendBuyA1(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/new-connection/buy-prepaid-sim-connection-online"]');
  }

  get linkTheFutureIsexcitingReadySwitchToViWithNoChangeInN1(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/new-connection/mobile-number-portability-mnp-online"]');
  }

  get linkSwitchToTheVi5gExperience(): Locator {
    return this.page.getByRole('link', { name: "Switch to the Vi 5G experience" });
  }

  get linkPortToUnlimitedDataCallsEntertainment(): Locator {
    return this.page.getByRole('link', { name: "Port to unlimited data+calls+entertainment.." });
  }

  get linkJoinViWithoutChangingYourNumber(): Locator {
    return this.page.getByRole('link', { name: "Join Vi without changing your number" });
  }

  get linkChooseANumberOfYourChoice(): Locator {
    return this.page.getByRole('link', { name: "Choose a number of your choice" });
  }

  get linkViMoviesTv(): Locator {
    return this.page.getByRole('link', { name: "Vi Movies & TV" });
  }

  get linkPortMobileNumbe(): Locator {
    return this.page.getByRole('link', { name: "Port mobile numbe" });
  }

  get linkSimTracking(): Locator {
    return this.page.getByRole('link', { name: "SIM Tracking" });
  }

  get linkHome(): Locator {
    return this.page.getByRole('link', { name: "home" });
  }

  get linkNewConnection(): Locator {
    return this.page.getByRole('link', { name: "new connection" });
  }

  get linkPrepaidConnection(): Locator {
    return this.page.getByRole('link', { name: "prepaid connection" });
  }

  get linkPrepaidPlans(): Locator {
    return this.page.getByRole('link', { name: "prepaid plans" });
  }

  get linkUnlimitedPlans(): Locator {
    return this.page.getByRole('link', { name: "unlimited plans" });
  }

  get linkDataPlans(): Locator {
    return this.page.getByRole('link', { name: "data plans" });
  }

  get linkTalktimePlans(): Locator {
    return this.page.getByRole('link', { name: "talktime plans" });
  }

  get linkFreePrepaidSimCardAtYouDoorstep(): Locator {
    return this.page.getByRole('link', { name: "Free prepaid SIM card at you doorstep" });
  }

  get linkViMoviesTv1(): Locator {
    return this.page.getByRole('link', { name: "Vi Movies & TV" });
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

  get linkPrepaidConnection1(): Locator {
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

  get linkFamilyPlans1(): Locator {
    return this.page.getByRole('link', { name: "Family Plans" });
  }

  get linkVanityNumber(): Locator {
    return this.page.getByRole('link', { name: "Vanity Number" });
  }

  get buttonSelectYourVipNumberNow(): Locator {
    return this.page.getByRole('button', { name: "select your VIP number now" });
  }

  get buttonShowAllPlans(): Locator {
    return this.page.getByRole('button', { name: "show all plans" });
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

  get buttonProceed(): Locator {
    return this.page.getByRole('button', { name: "proceed" });
  }

  get button1(): Locator {
    return this.page.getByRole('button', { name: "₹" });
  }

  get button2(): Locator {
    return this.page.getByRole('button', { name: "₹" });
  }

  get button11(): Locator {
    return this.page.getByRole('button', { name: "1" });
  }

  get button21(): Locator {
    return this.page.getByRole('button', { name: "2" });
  }

  get button111(): Locator {
    return this.page.getByRole('button', { name: "1" });
  }

  get button211(): Locator {
    return this.page.getByRole('button', { name: "2" });
  }

  get button3(): Locator {
    return this.page.getByRole('button', { name: "3" });
  }

  get buttonHowDoIGetFreeViPrepaidSim(): Locator {
    return this.page.getByRole('button', { name: "How do I get free Vi prepaid SIM?" });
  }

  get buttonWhatAreTheNewSimOffersOnViPrepaidConnection(): Locator {
    return this.page.getByRole('button', { name: "What are the new SIM offers on Vi Prepaid connection?" });
  }

  get buttonWhatIsThePriceOfANewViSim(): Locator {
    return this.page.getByRole('button', { name: "What is the price of a new Vi SIM?" });
  }

  get buttonHowLongWillMyNewPrepaidConnectionTakeToGetActivate(): Locator {
    return this.page.getByRole('button', { name: "How long will my new prepaid connection take to get activated?" });
  }

  get buttonWhichDocumentsWouldIRequireWhileBuyingAPrepaidConne(): Locator {
    return this.page.getByRole('button', { name: "Which documents would I require while buying a prepaid connection?" });
  }

  get buttonDoINeedToPayAnyActivationChargesWhileIBuyANewPr(): Locator {
    return this.page.getByRole('button', { name: "Do I need to pay any activation charges while I buy a new prepaid SIM online?" });
  }

  get buttonHowCanIBuyANewConnectionWithoutLosingMyCurrentNum(): Locator {
    return this.page.getByRole('button', { name: "How can I buy a new connection without losing my current number?" });
  }

  get buttonHowCanITrackMyNewPrepaidSimCardAfterPlacingTheOr(): Locator {
    return this.page.getByRole('button', { name: "How can I track my new prepaid SIM card after placing the order?" });
  }

  get buttonDoINeedToBePresentWhileThePrepaidSimCardIsHanded(): Locator {
    return this.page.getByRole('button', { name: "Do I need to be present while the prepaid SIM card is handed over to me?" });
  }

  get buttonHowCanIBuyANewVodafoneOrIdeaPrepaidSimConnection(): Locator {
    return this.page.getByRole('button', { name: "How can I buy a new Vodafone or Idea Prepaid SIM connection?" });
  }

  get buttonIsDoorstepDeliveryAvailableForViPrepaidSim(): Locator {
    return this.page.getByRole('button', { name: "Is doorstep delivery available for Vi prepaid SIM?" });
  }

  get buttonCanICompleteViPrepaidSimActivationThroughEkyc(): Locator {
    return this.page.getByRole('button', { name: "Can I complete Vi prepaid SIM activation through eKYC?" });
  }

  get buttonBuyPrepaidSimCardOnline(): Locator {
    return this.page.getByRole('button', { name: "buy prepaid SIM card online" });
  }

  get buttonBackToPacks(): Locator {
    return this.page.getByRole('button', { name: "back to packs" });
  }

  get buttonContinue(): Locator {
    return this.page.getByRole('button', { name: "continue" });
  }

  get buttonIAmStillHere(): Locator {
    return this.page.getByRole('button', { name: "I am still here" });
  }

  get inputPincodefield(): Locator {
    return this.page.locator('input[name="pincodeField"]');
  }

  get inputUtmfamilyplanprice(): Locator {
    return this.page.locator('input[name="utmFamilyPlanPrice"]');
  }

  get inputPlustext(): Locator {
    return this.page.locator('input[name="plustext"]');
  }

  get inputNontelcoiconnumber(): Locator {
    return this.page.locator('input[name="nontelcoiconnumber"]');
  }

  get inputInputnontelcobenefitid(): Locator {
    return this.page.locator('input[name="inputnonTelcoBenefitId"]');
  }

  get inputInputnontelcoentertsinmentbenefitid(): Locator {
    return this.page.locator('input[name="inputnonTelcoEntertsinmentBenefitId"]');
  }

  get inputUtmpromoconfig(): Locator {
    return this.page.locator('input[name="utmPromoConfig"]');
  }

  get input7(): Locator {
    return this.page.locator('input');
  }

  get inputPlansredirection(): Locator {
    return this.page.locator('input[name="plansredirection"]');
  }

  get inputPlansredirectionurl(): Locator {
    return this.page.locator('input[name="plansredirectionurl"]');
  }

  get inputPacksredirection(): Locator {
    return this.page.locator('input[name="packsredirection"]');
  }

  get inputPacksredirectionurl(): Locator {
    return this.page.locator('input[name="packsredirectionurl"]');
  }

  get inputMifiredirection(): Locator {
    return this.page.locator('input[name="mifiredirection"]');
  }

  get inputMifiredirectionurl(): Locator {
    return this.page.locator('input[name="mifiredirectionurl"]');
  }

  get inputFamilyredirection(): Locator {
    return this.page.locator('input[name="familyRedirection"]');
  }

  get inputFamilyredirectionurl(): Locator {
    return this.page.locator('input[name="familyRedirectionurl"]');
  }

  get inputTabshow(): Locator {
    return this.page.locator('input[name="tabshow"]');
  }

  get inputLoadplanspacks(): Locator {
    return this.page.locator('input[name="loadplanspacks"]');
  }

  get inputLangselector(): Locator {
    return this.page.locator('input[name="langSelector"]');
  }

  get inputSubscriptionfreemsg(): Locator {
    return this.page.locator('input[name="subscriptionfreemsg"]');
  }

  get inputSubscriptionsfreemsg(): Locator {
    return this.page.locator('input[name="subscriptionsfreemsg"]');
  }

  get inputPrepaidpackcost(): Locator {
    return this.page.locator('input[name="prepaidPackCost"]');
  }

  get inputTopazredirection(): Locator {
    return this.page.locator('input[name="topazredirection"]');
  }

  get inputTopazredirectionurl(): Locator {
    return this.page.locator('input[name="topazredirectionurl"]');
  }

  get inputEnterpriseredirection(): Locator {
    return this.page.locator('input[name="enterpriseRedirection"]');
  }

  get inputEnterpriseredirectionurl(): Locator {
    return this.page.locator('input[name="enterpriseRedirectionUrl"]');
  }

  get inputRedxfullyloaded(): Locator {
    return this.page.locator('input[name="redxFullyLoaded"]');
  }

  get inputConnectiontext(): Locator {
    return this.page.locator('input[name="connectionText"]');
  }

  get inputConnectionstext(): Locator {
    return this.page.locator('input[name="connectionsText"]');
  }

  get inputBestsellpacktext(): Locator {
    return this.page.locator('input[name="bestSellPackText"]');
  }

  get inputSubscriptionfreetxt(): Locator {
    return this.page.locator('input[name="subscriptionfreetxt"]');
  }

  get inputSubscriptionsfreetxt(): Locator {
    return this.page.locator('input[name="subscriptionsfreetxt"]');
  }

  get inputNontelcoiconnumber1(): Locator {
    return this.page.locator('input[name="nontelcoiconnumber"]');
  }

  get inputPagetype(): Locator {
    return this.page.locator('input[name="pageType"]');
  }

  get inputShowfamilyplanslider(): Locator {
    return this.page.locator('input[name="showFamilyPlanSlider"]');
  }

  get inputFamilyuserdetailsredir(): Locator {
    return this.page.locator('input[name="familyuserdetailsredir"]');
  }

  get inputDigitalexclusivetxt(): Locator {
    return this.page.locator('input[name="digitalexclusiveTxt"]');
  }

  get inputRedxtagtext(): Locator {
    return this.page.locator('input[name="redxTagText"]');
  }

  get inputShowplansorpacks(): Locator {
    return this.page.locator('input[name="showPlansOrPacks"]');
  }

  get inputIsplaninenglish(): Locator {
    return this.page.locator('input[name="isPlanInEnglish"]');
  }

  get inputShowpacksbasispincode(): Locator {
    return this.page.locator('input[name="showPacksBasisPincode"]');
  }

  get inputShowplansbasispincode(): Locator {
    return this.page.locator('input[name="showPlansBasisPincode"]');
  }

  get inputShowidlestatepopup(): Locator {
    return this.page.locator('input[name="showIdleStatePopup"]');
  }

  get inputIdlestatetime(): Locator {
    return this.page.locator('input[name="idleStateTime"]');
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

  get menu0(): Locator {
    return this.page.getByRole('navigation').nth(0);
  }

  get menuHomeNewConnectionPrepaidConnection(): Locator {
    return this.page.getByRole('navigation', { name: "home new connection prepaid connection" });
  }

  constructor(page: Page) {
    super(page);
  }
}
