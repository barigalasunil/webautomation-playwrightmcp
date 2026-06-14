import { Page, Locator } from '@playwright/test';
import { BasePage } from '../../BasePage';

export class CheckViSimStatusOnlineTrackYourConnectionOrders extends BasePage {
  readonly url = "https://www.myvi.in/new-connection/track-your-sim-online";

  // All element locators are generated dynamically using locator strategies

  get headingTrackYourViSimAndConnectionStatus(): Locator {
    return this.page.getByRole('heading', { name: "track your Vi SIM and connection status" });
  }

  get headingShowingAllOrders(): Locator {
    return this.page.getByRole('heading', { name: "showing all orders" });
  }

  get headingOrderDetails(): Locator {
    return this.page.getByRole('heading', { name: "order details" });
  }

  get headingCheersYourSimIsActiveNow(): Locator {
    return this.page.getByRole('heading', { name: "cheers! your SIM is active now" });
  }

  get headingCheersYourSimIsActiveNow1(): Locator {
    return this.page.getByRole('heading', { name: "cheers! your SIM is active now" });
  }

  get headingOopsThisOrderHasExpired(): Locator {
    return this.page.getByRole('heading', { name: "oops! this order has expired" });
  }

  get headingOopsThisOrderHasExpired1(): Locator {
    return this.page.getByRole('heading', { name: "oops! this order has expired" });
  }

  get headingOopsThisOrderIsCancelled(): Locator {
    return this.page.getByRole('heading', { name: "oops! this order is cancelled" });
  }

  get headingOopsThisOrderIsCancelled1(): Locator {
    return this.page.getByRole('heading', { name: "oops! this order is cancelled" });
  }

  get headingYourOrderIsdelayed(): Locator {
    return this.page.getByRole('heading', { name: "your order isdelayed" });
  }

  get headingOopsThisOrderIsCancelled2(): Locator {
    return this.page.getByRole('heading', { name: "oops! this order is cancelled" });
  }

  get headingYourRefundHasBeenCredited(): Locator {
    return this.page.getByRole('heading', { name: "Your refund has been credited!" });
  }

  get headingYourRefundHasBeenInitiated(): Locator {
    return this.page.getByRole('heading', { name: "Your refund has been initiated!" });
  }

  get headingViewAllUpdates(): Locator {
    return this.page.getByRole('heading', { name: "view all updates" });
  }

  get headingOrderGenerated(): Locator {
    return this.page.getByRole('heading', { name: "order generated" });
  }

  get headingOrderDelayed(): Locator {
    return this.page.getByRole('heading', { name: "order delayed" });
  }

  get headingOrderGenerated1(): Locator {
    return this.page.getByRole('heading', { name: "order generated" });
  }

  get headingPaymentDetails(): Locator {
    return this.page.getByRole('heading', { name: "payment details" });
  }

  get headingSimAndDeliveryDetails(): Locator {
    return this.page.getByRole('heading', { name: "SIM and delivery details" });
  }

  get headingAcceptableDocumentsForKyc(): Locator {
    return this.page.getByRole('heading', { name: "acceptable documents for KYC" });
  }

  get headingSimAndDeliveryDetails1(): Locator {
    return this.page.getByRole('heading', { name: "SIM and delivery details" });
  }

  get headingPaymentDetails1(): Locator {
    return this.page.getByRole('heading', { name: "payment details" });
  }

  get headingExperienceAllNewViApp(): Locator {
    return this.page.getByRole('heading', { name: "experience all new Vi app" });
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

  get linkGoBackToOrderTracking(): Locator {
    return this.page.getByRole('link', { name: "go back to order tracking" });
  }

  get link2(): Locator {
    return this.page.locator('a[href="https://myvi.in/dashboard"]');
  }

  get linkGoBack(): Locator {
    return this.page.getByRole('link', { name: "go back" });
  }

  get linkExploreAllOurOfferings(): Locator {
    return this.page.getByRole('link', { name: "explore all our offerings" });
  }

  get linkExploreAllOurOfferings1(): Locator {
    return this.page.getByRole('link', { name: "explore all our offerings" });
  }

  get linkExploreAllOurOfferings2(): Locator {
    return this.page.getByRole('link', { name: "explore all our offerings" });
  }

  get linkExploreAllOurOfferings3(): Locator {
    return this.page.getByRole('link', { name: "explore all our offerings" });
  }

  get linkExploreAllOurOfferings4(): Locator {
    return this.page.getByRole('link', { name: "explore all our offerings" });
  }

  get linkLiveTrack(): Locator {
    return this.page.getByRole('link', { name: "live track" });
  }

  get linkTheseDocuments(): Locator {
    return this.page.getByRole('link', { name: "these documents" });
  }

  get linkClickingHere(): Locator {
    return this.page.getByRole('link', { name: "clicking here" });
  }

  get link12(): Locator {
    return this.page.locator('a[href="https://apps.apple.com/in/app/my-vodafone-india/id623834540"]');
  }

  get link13(): Locator {
    return this.page.getByRole('link').nth(13);
  }

  get linkHome(): Locator {
    return this.page.getByRole('link', { name: "home" });
  }

  get linkNewConnection(): Locator {
    return this.page.getByRole('link', { name: "new connection" });
  }

  get linkTrackYourSimDelivery(): Locator {
    return this.page.getByRole('link', { name: "track your SIM delivery" });
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

  get buttonSendOtp(): Locator {
    return this.page.getByRole('button', { name: "send OTP" });
  }

  get buttonShow(): Locator {
    return this.page.getByRole('button', { name: "show" });
  }

  get buttonViewAllUpdates(): Locator {
    return this.page.getByRole('button', { name: "view all updates" });
  }

  get buttonLiveTrack(): Locator {
    return this.page.getByRole('button', { name: "live track" });
  }

  get buttonLiveTrack1(): Locator {
    return this.page.getByRole('button', { name: "live track" });
  }

  get buttonPaymentDetails(): Locator {
    return this.page.getByRole('button', { name: "payment details" });
  }

  get button(): Locator {
    return this.page.getByRole('button', { name: "×" });
  }

  get buttonContinue(): Locator {
    return this.page.getByRole('button', { name: "continue" });
  }

  get buttonIAmStillHere(): Locator {
    return this.page.getByRole('button', { name: "I am still here" });
  }

  get inputEnter4DigitOtp(): Locator {
    return this.page.getByPlaceholder("enter 4 digit OTP");
  }

  get input1(): Locator {
    return this.page.locator('input');
  }

  get inputOtpstatus(): Locator {
    return this.page.locator('input[name="otpStatus"]');
  }

  get inputOneattemptleft(): Locator {
    return this.page.locator('input[name="oneattemptleft"]');
  }

  get inputResentattemptexhausted(): Locator {
    return this.page.locator('input[name="resentattemptexhausted"]');
  }

  get inputResendlocked(): Locator {
    return this.page.locator('input[name="resendlocked"]');
  }

  get inputServicefailure(): Locator {
    return this.page.locator('input[name="servicefailure"]');
  }

  get inputAllattemptexhausted(): Locator {
    return this.page.locator('input[name="allattemptexhausted"]');
  }

  get inputResendexhaustedvalidateavail(): Locator {
    return this.page.locator('input[name="resendexhaustedValidateAvail"]');
  }

  get inputOtpresentmessage(): Locator {
    return this.page.locator('input[name="otpresentmessage"]');
  }

  get inputOtpresenttime(): Locator {
    return this.page.locator('input[name="otpresenttime"]');
  }

  get inputEnterYourMobileNumber(): Locator {
    return this.page.getByPlaceholder("enter your mobile number");
  }

  get inputNoordererrortextmsg(): Locator {
    return this.page.locator('input[name="noordererrortextmsg"]');
  }

  get inputNoordererrororiginaltext(): Locator {
    return this.page.locator('input[name="noordererrororiginaltext"]');
  }

  get inputLeadid(): Locator {
    return this.page.locator('input[name="leadId"]');
  }

  get inputChannelname(): Locator {
    return this.page.locator('input[name="channelName"]');
  }

  get inputOneTimeCode(): Locator {
    return this.page.locator('input[name="one-time-code"]');
  }

  get inputToggleontext(): Locator {
    return this.page.locator('input[name="toggleOnText"]');
  }

  get inputToggleofftext(): Locator {
    return this.page.locator('input[name="toggleOffText"]');
  }

  get inputOsdjsonPath(): Locator {
    return this.page.locator('input[name="osdJSON__path"]');
  }

  get inputCheckbtnanimation(): Locator {
    return this.page.locator('input[name="checkBtnAnimation"]');
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

  get inputOrderstatus(): Locator {
    return this.page.locator('input[name="orderStatus"]');
  }

  get inputOrderstatusarray(): Locator {
    return this.page.locator('input[name="orderStatusArray"]');
  }

  get inputEsimorderstatusarray(): Locator {
    return this.page.locator('input[name="esimOrderStatusArray"]');
  }

  get inputOrderstatuslastarray(): Locator {
    return this.page.locator('input[name="orderstatuslastArray"]');
  }

  get inputOrderstatusfailedarrayprebroad(): Locator {
    return this.page.locator('input[name="orderStatusFailedArrayPreBroad"]');
  }

  get inputOrderstatussuccessarrayprebroad(): Locator {
    return this.page.locator('input[name="orderStatusSuccessArrayPreBroad"]');
  }

  get inputOrderstatusdashedarrayprebroad(): Locator {
    return this.page.locator('input[name="orderStatusDashedArrayPreBroad"]');
  }

  get inputOrderstatuslastarrayprebroad(): Locator {
    return this.page.locator('input[name="orderStatusLastArrayPreBroad"]');
  }

  get inputOrderstatusfailedarrayprepaid(): Locator {
    return this.page.locator('input[name="orderStatusFailedArrayPrepaid"]');
  }

  get inputOrderstatussuccessarrayprepaid(): Locator {
    return this.page.locator('input[name="orderStatusSuccessArrayPrepaid"]');
  }

  get inputOrderstatusdashedarrayprepaid(): Locator {
    return this.page.locator('input[name="orderStatusDashedArrayPrepaid"]');
  }

  get inputOrderstatuslastarrayprepaid(): Locator {
    return this.page.locator('input[name="orderStatusLastArrayPrepaid"]');
  }

  get inputOrderstatusfailedarraypostpaid(): Locator {
    return this.page.locator('input[name="orderStatusFailedArrayPostpaid"]');
  }

  get inputOrderstatussuccessarraypostpaid(): Locator {
    return this.page.locator('input[name="orderStatusSuccessArrayPostpaid"]');
  }

  get inputOrderstatusdashedarraypostpaid(): Locator {
    return this.page.locator('input[name="orderStatusDashedArrayPostpaid"]');
  }

  get inputOrderstatuslastarraypostpaid(): Locator {
    return this.page.locator('input[name="orderStatusLastArrayPostpaid"]');
  }

  get inputOrderstatusfailedarraymifi(): Locator {
    return this.page.locator('input[name="orderStatusFailedArrayMifi"]');
  }

  get inputOrderstatussuccessarraymifi(): Locator {
    return this.page.locator('input[name="orderStatusSuccessArrayMifi"]');
  }

  get inputOrderstatusdashedarraymifi(): Locator {
    return this.page.locator('input[name="orderStatusDashedArrayMifi"]');
  }

  get inputOrderstatuslastarraymifi(): Locator {
    return this.page.locator('input[name="orderStatusLastArrayMifi"]');
  }

  get inputSingleorderstatus(): Locator {
    return this.page.locator('input[name="singleOrderStatus"]');
  }

  get inputSlotstatusdescription(): Locator {
    return this.page.locator('input[name="slotStatusDescription"]');
  }

  get inputEsimstatusdescription(): Locator {
    return this.page.locator('input[name="eSimStatusDescription"]');
  }

  get inputEsimbtntext(): Locator {
    return this.page.locator('input[name="esimBtnText"]');
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

  get menuHomeNewConnectionTrackYourSimDelivery(): Locator {
    return this.page.getByRole('navigation', { name: "home new connection track your SIM delivery" });
  }

  constructor(page: Page) {
    super(page);
  }
}
