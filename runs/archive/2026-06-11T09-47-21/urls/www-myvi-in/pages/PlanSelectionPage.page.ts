import { Page, Locator } from '@playwright/test';
import { BasePage } from '../../BasePage';

export class PlanSelectionPage extends BasePage {
  readonly url = "https://www.myvi.in/pre-to-post/plan?mrp=451&utm_source=MyVi&utm_campaign=MainMenu";

  // All element locators are generated dynamically using locator strategies

  get headingGreatYouCanNowSwitchFromPrepaidToPostpaidWithJust(): Locator {
    return this.page.getByRole('heading', { name: "great! you can now switch from prepaid to postpaid with just an OTP" });
  }

  get headingGreatYouCanNowSwitchFromPrepaidToPostpaidWithJust1(): Locator {
    return this.page.getByRole('heading', { name: "great! you can now switch from prepaid to postpaid with just an OTP" });
  }

  get link0(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/"]');
  }

  get linkBackToCallcenter(): Locator {
    return this.page.getByRole('link', { name: "Back to CallCenter" });
  }

  get linkResend(): Locator {
    return this.page.getByRole('link', { name: "resend" });
  }

  get linkContinueWithDoorstepDelivery(): Locator {
    return this.page.getByRole('link', { name: "continue with doorstep delivery" });
  }

  get linkProceed(): Locator {
    return this.page.getByRole('link', { name: "proceed" });
  }

  get linkHome(): Locator {
    return this.page.getByRole('link', { name: "Home" });
  }

  get linkNewConnection(): Locator {
    return this.page.getByRole('link', { name: "New Connection" });
  }

  get linkConvertPrepaidToPostpaid(): Locator {
    return this.page.getByRole('link', { name: "Convert Prepaid to Postpaid" });
  }

  get linkExploreMorePlans(): Locator {
    return this.page.getByRole('link', { name: "explore more plans" });
  }

  get linkPostpaidConnection(): Locator {
    return this.page.getByRole('link', { name: "Postpaid Connection" });
  }

  get linkMnp(): Locator {
    return this.page.getByRole('link', { name: "MNP" });
  }

  get linkTrackYourSim(): Locator {
    return this.page.getByRole('link', { name: "Track Your SIM" });
  }

  get linkPrepaidConnection(): Locator {
    return this.page.getByRole('link', { name: "Prepaid Connection" });
  }

  get linkPremiumMobileNumber(): Locator {
    return this.page.getByRole('link', { name: "Premium Mobile Number" });
  }

  get buttonGetOtp(): Locator {
    return this.page.getByRole('button', { name: "get OTP" });
  }

  get buttonGetOtp1(): Locator {
    return this.page.getByRole('button', { name: "get OTP" });
  }

  get buttonVerify(): Locator {
    return this.page.getByRole('button', { name: "verify" });
  }

  get buttonProceed(): Locator {
    return this.page.getByRole('button', { name: "proceed" });
  }

  get buttonProceed1(): Locator {
    return this.page.getByRole('button', { name: "proceed" });
  }

  get inputEnterMobileNumber(): Locator {
    return this.page.getByPlaceholder("enter mobile number");
  }

  get inputEnterYourOtp(): Locator {
    return this.page.getByLabel("enter otp");
  }

  get inputPtopemail(): Locator {
    return this.page.locator('input[name="ptopemail"]');
  }

  get inputPtopaltnumber(): Locator {
    return this.page.locator('input[name="ptopaltnumber"]');
  }

  get inputPtopfname(): Locator {
    return this.page.locator('input[name="ptopfname"]');
  }

  get inputPtoppincode(): Locator {
    return this.page.locator('input[name="ptoppincode"]');
  }

  get inputPtopmsisdn(): Locator {
    return this.page.locator('input[name="ptopmsisdn"]');
  }

  get inputPtoptoken(): Locator {
    return this.page.locator('input[name="ptoptoken"]');
  }

  get inputPtopcircleid(): Locator {
    return this.page.locator('input[name="ptopcircleId"]');
  }

  get inputPtopplanid(): Locator {
    return this.page.locator('input[name="ptopplanid"]');
  }

  get inputPtopbrand(): Locator {
    return this.page.locator('input[name="ptopbrand"]');
  }

  get inputPtopismigrated(): Locator {
    return this.page.locator('input[name="ptopismigrated"]');
  }

  get inputPtopwebleadid(): Locator {
    return this.page.locator('input[name="ptopwebleadid"]');
  }

  get inputPtoputmsource(): Locator {
    return this.page.locator('input[name="ptoputmsource"]');
  }

  get inputPtoputmcampaign(): Locator {
    return this.page.locator('input[name="ptoputmCampaign"]');
  }

  get inputPtoputmmedium(): Locator {
    return this.page.locator('input[name="ptoputmMedium"]');
  }

  get inputPtoputmadtype(): Locator {
    return this.page.locator('input[name="ptoputmAdtype"]');
  }

  get inputPtoputmadgroup(): Locator {
    return this.page.locator('input[name="ptoputmAdgroup"]');
  }

  get inputPtoputmcontent(): Locator {
    return this.page.locator('input[name="ptoputmContent"]');
  }

  get inputPtoputmterm(): Locator {
    return this.page.locator('input[name="ptoputmTerm"]');
  }

  get inputPtoputmemailvalidation(): Locator {
    return this.page.locator('input[name="ptoputmemailvalidation"]');
  }

  get inputPtopcityname(): Locator {
    return this.page.locator('input[name="ptopCityName"]');
  }

  get inputPtopstatename(): Locator {
    return this.page.locator('input[name="ptopStateName"]');
  }

  get inputPtopperpincode(): Locator {
    return this.page.locator('input[name="ptopperpincode"]');
  }

  get inputPtoppercityname(): Locator {
    return this.page.locator('input[name="ptopperCityName"]');
  }

  get inputPtopperstatename(): Locator {
    return this.page.locator('input[name="ptopperStateName"]');
  }

  get inputPtoplandmark(): Locator {
    return this.page.locator('input[name="ptoplandmark"]');
  }

  get inputPtopneoleadid(): Locator {
    return this.page.locator('input[name="ptopneoleadid"]');
  }

  get inputOtpstatus(): Locator {
    return this.page.locator('input[name="otpStatus"]');
  }

  get inputUtmsource(): Locator {
    return this.page.locator('input[name="utmSource"]');
  }

  get inputUtmmedium(): Locator {
    return this.page.locator('input[name="utmMedium"]');
  }

  get inputUtmadtype(): Locator {
    return this.page.locator('input[name="utmAdtype"]');
  }

  get inputUtmcampaign(): Locator {
    return this.page.locator('input[name="utmCampaign"]');
  }

  get inputUtmadgroup(): Locator {
    return this.page.locator('input[name="utmAdgroup"]');
  }

  get inputUtmcontent(): Locator {
    return this.page.locator('input[name="utmContent"]');
  }

  get inputUtmterm(): Locator {
    return this.page.locator('input[name="utmTerm"]');
  }

  get inputViappmobile(): Locator {
    return this.page.locator('input[name="viappmobile"]');
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

  get inputNontelcoiconnumber(): Locator {
    return this.page.locator('input[name="nontelcoiconnumber"]');
  }

  get inputInputnontelcobenefitid(): Locator {
    return this.page.locator('input[name="inputnonTelcoBenefitId"]');
  }

  get inputInputnontelcoentertsinmentbenefitid(): Locator {
    return this.page.locator('input[name="inputnonTelcoEntertsinmentBenefitId"]');
  }

  get inputOneTimeCode(): Locator {
    return this.page.locator('input[name="one-time-code"]');
  }

  get inputCampaignsourcelist(): Locator {
    return this.page.locator('input[name="campaignsourcelist"]');
  }

  get inputMultiplerestricitonmsg(): Locator {
    return this.page.locator('input[name="multiplerestricitonmsg"]');
  }

  get inputNeoleadid(): Locator {
    return this.page.locator('input[name="neoleadId"]');
  }

  get inputSkycleadid(): Locator {
    return this.page.locator('input[name="skycleadId"]');
  }

  get inputNeoplanmrp(): Locator {
    return this.page.locator('input[name="neoplanMrp"]');
  }

  get inputNeoplansocid(): Locator {
    return this.page.locator('input[name="neoplanSocid"]');
  }

  get inputNeomsisdn(): Locator {
    return this.page.locator('input[name="neomsisdn"]');
  }

  get inputNeoflag(): Locator {
    return this.page.locator('input[name="neoFlag"]');
  }

  get inputNeosecid(): Locator {
    return this.page.locator('input[name="neoSecId"]');
  }

  get inputPtopnationality(): Locator {
    return this.page.locator('input[name="ptopnationality"]');
  }

  get inputPtopsimex(): Locator {
    return this.page.locator('input[name="ptopsimex"]');
  }

  get inputPretopostleamigration(): Locator {
    return this.page.locator('input[name="pretopostleamigration"]');
  }

  get inputPtopmnp(): Locator {
    return this.page.locator('input[name="ptopmnp"]');
  }

  get inputPtopopensr(): Locator {
    return this.page.locator('input[name="ptopopensr"]');
  }

  get inputPtopbuynewbutton(): Locator {
    return this.page.locator('input[name="ptopbuynewbutton"]');
  }

  get inputPtopreqconflict(): Locator {
    return this.page.locator('input[name="ptopreqconflict"]');
  }

  get inputPtoppinnotfound(): Locator {
    return this.page.locator('input[name="ptoppinnotfound"]');
  }

  get inputPtopvisitvi(): Locator {
    return this.page.locator('input[name="ptopvisitvi"]');
  }

  get inputPretopaddrupdate(): Locator {
    return this.page.locator('input[name="pretopaddrupdate"]');
  }

  get inputPretopjnk(): Locator {
    return this.page.locator('input[name="pretopjnk"]');
  }

  get inputPretopjnk1(): Locator {
    return this.page.locator('input[name="pretopjnk"]');
  }

  get inputPtopbuynewbutton1(): Locator {
    return this.page.locator('input[name="ptopbuynewbutton1"]');
  }

  get inputPtopmnptitle(): Locator {
    return this.page.locator('input[name="ptopmnptitle"]');
  }

  get inputPtopprofileupdatetitle(): Locator {
    return this.page.locator('input[name="ptopprofileupdatetitle"]');
  }

  get inputPtopnationalitytitle(): Locator {
    return this.page.locator('input[name="ptopnationalitytitle"]');
  }

  get inputPtopsimextitle(): Locator {
    return this.page.locator('input[name="ptopsimextitle"]');
  }

  get inputPtopnonservicabletitle(): Locator {
    return this.page.locator('input[name="ptopnonservicabletitle"]');
  }

  get inputPtopnonserdesc(): Locator {
    return this.page.locator('input[name="ptopnonserdesc"]');
  }

  get inputPtoptafcoptitle(): Locator {
    return this.page.locator('input[name="ptoptafcoptitle"]');
  }

  get inputPtoptafcopdesc(): Locator {
    return this.page.locator('input[name="ptoptafcopdesc"]');
  }

  get inputPtopnpdtitle(): Locator {
    return this.page.locator('input[name="ptopnpdtitle"]');
  }

  get inputPtopnpddesc(): Locator {
    return this.page.locator('input[name="ptopnpddesc"]');
  }

  get inputPtopneoservicabletitle(): Locator {
    return this.page.locator('input[name="ptopneoservicabletitle"]');
  }

  get inputPtopneoserdesc(): Locator {
    return this.page.locator('input[name="ptopneoserdesc"]');
  }

  get inputPtopneoservicablebtnname(): Locator {
    return this.page.locator('input[name="ptopneoservicablebtnname"]');
  }

  get inputPtopneoserbtnurl(): Locator {
    return this.page.locator('input[name="ptopneoserbtnurl"]');
  }

  get inputPtoptrstnonservicabletitle(): Locator {
    return this.page.locator('input[name="ptoptrstnonservicabletitle"]');
  }

  get inputPtoptrsnonserdesc(): Locator {
    return this.page.locator('input[name="ptoptrsnonserdesc"]');
  }

  get inputPtoptrsneoservicabletitle(): Locator {
    return this.page.locator('input[name="ptoptrsneoservicabletitle"]');
  }

  get inputPtoptrsneoserdesc(): Locator {
    return this.page.locator('input[name="ptoptrsneoserdesc"]');
  }

  get inputOtpautoreadutm(): Locator {
    return this.page.locator('input[name="otpautoreadutm"]');
  }

  get inputNonserviceableenableflag(): Locator {
    return this.page.locator('input[name="nonserviceableenableflag"]');
  }

  get inputCorebalanceheading(): Locator {
    return this.page.locator('input[name="corebalanceheading"]');
  }

  get inputCorebalanceerrortext(): Locator {
    return this.page.locator('input[name="corebalanceerrortext"]');
  }

  get inputPoiandpoanoofdaysmsg(): Locator {
    return this.page.locator('input[name="poiandpoanoofdaysmsg"]');
  }

  get inputPoiandpoavalidationmsg(): Locator {
    return this.page.locator('input[name="poiandpoavalidationmsg"]');
  }

  get inputUtmcampaignforotpautoclick(): Locator {
    return this.page.locator('input[name="utmCampaignForOtpAutoClick"]');
  }

  get inputUtmcampaignforotpusecase(): Locator {
    return this.page.locator('input[name="utmCampaignForOtpUsecase"]');
  }

  get inputChakshumsgdesc(): Locator {
    return this.page.locator('input[name="chakshumsgdesc"]');
  }

  get inputPtopdynamictitle(): Locator {
    return this.page.locator('input[name="ptopdynamictitle"]');
  }

  get inputPtopdynamicdesc(): Locator {
    return this.page.locator('input[name="ptopdynamicdesc"]');
  }

  get inputIsadobelaunch(): Locator {
    return this.page.locator('input[name="isAdobeLaunch"]');
  }

  get form0(): Locator {
    return this.page.locator('form#pretopost');
  }

  get menuBackToCallcenter(): Locator {
    return this.page.getByRole('navigation', { name: "Back to CallCenter" });
  }

  get menuHomeNewConnectionConvertPrepaidToPostpaid(): Locator {
    return this.page.getByRole('navigation', { name: "Home New Connection Convert Prepaid to Postpaid" });
  }

  constructor(page: Page) {
    super(page);
  }
}
