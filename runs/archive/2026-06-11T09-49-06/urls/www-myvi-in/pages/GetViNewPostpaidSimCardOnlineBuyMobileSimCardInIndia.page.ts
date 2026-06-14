import { Page, Locator } from '@playwright/test';
import { BasePage } from '../../BasePage';

export class GetViNewPostpaidSimCardOnlineBuyMobileSimCardInIndia extends BasePage {
  readonly url = "https://www.myvi.in/new-connection/buy-postpaid-sim-connection-online?show=postpaidonly";

  // All element locators are generated dynamically using locator strategies

  get headingViMaxFamilyPostpaidPlans(): Locator {
    return this.page.getByRole('heading', { name: "Vi Max family postpaid plans" });
  }

  get headingChoiceOfAny2ComplimentaryBenefits(): Locator {
    return this.page.getByRole('heading', { name: "choice of any 2 complimentary benefits" });
  }

  get headingViMoviesTv(): Locator {
    return this.page.getByRole('heading', { name: "Vi Movies & TV" });
  }

  get headingGetAViMaxPostpaidSimDeliveredIn3EasySteps(): Locator {
    return this.page.getByRole('heading', { name: "Get a Vi Max Postpaid SIM delivered in 3 easy steps" });
  }

  get headingWhyJoinVi(): Locator {
    return this.page.getByRole('heading', { name: "why join Vi?" });
  }

  get headingTrustedAcrossTheNation(): Locator {
    return this.page.getByRole('heading', { name: "trusted across the nation" });
  }

  get headingViNewPostpaidSimFaqs(): Locator {
    return this.page.getByRole('heading', { name: "Vi new postpaid SIM faqs" });
  }

  get headingHowToGetPostpaidSimDeliveredForFree(): Locator {
    return this.page.getByRole('heading', { name: "How to get postpaid SIM delivered for free?" });
  }

  get headingWhatIsAPostpaidSim(): Locator {
    return this.page.getByRole('heading', { name: "What is a postpaid SIM?" });
  }

  get headingWhatIsThePriceOfANewPostpaidSim(): Locator {
    return this.page.getByRole('heading', { name: "What is the price of a new postpaid SIM?" });
  }

  get headingWhatAreTheDocumentsRequiredToGetANewPostpaidConnec(): Locator {
    return this.page.getByRole('heading', { name: "What are the documents required to get a new postpaid connection?" });
  }

  get headingHowDoIActivateMyNewViPostpaidSimCardOnline(): Locator {
    return this.page.getByRole('heading', { name: "How do I activate my new Vi postpaid SIM card online?" });
  }

  get headingIsFreePostpaidSimDeliveryAvailableOnAllViPlans(): Locator {
    return this.page.getByRole('heading', { name: "Is free postpaid SIM delivery available on all Vi plans?" });
  }

  get headingWhatAreTheChargesApplicableForANewSimCard(): Locator {
    return this.page.getByRole('heading', { name: "What are the charges applicable for a new SIM card?" });
  }

  get headingHowLongDoesItTakeForANewSimCardToGetActivated(): Locator {
    return this.page.getByRole('heading', { name: "How long does it take for a new SIM card to get activated?" });
  }

  get headingWhatBenefitsWillIGetWithANewSimHavingViPostpaidC(): Locator {
    return this.page.getByRole('heading', { name: "What benefits will I get with a new SIM having Vi Postpaid connection?" });
  }

  get headingAreThereAnyChargesApplicableOnHomeDeliveryOfANewS(): Locator {
    return this.page.getByRole('heading', { name: "Are there any charges applicable on home delivery of a new SIM card?" });
  }

  get headingHowCanIBuyANewVodafoneOrIdeaPostpaidConnection(): Locator {
    return this.page.getByRole('heading', { name: "How can I buy a new Vodafone or Idea postpaid Connection?" });
  }

  get headingWhatIsViPriorityService(): Locator {
    return this.page.getByRole('heading', { name: "What is Vi Priority Service ?" });
  }

  get headingWhoIsEligibleForViPriorityService(): Locator {
    return this.page.getByRole('heading', { name: "Who is eligible for Vi Priority Service ?" });
  }

  get headingViNewPostpaidSimAndConnection(): Locator {
    return this.page.getByRole('heading', { name: "Vi New postpaid SIM and connection" });
  }

  get link0(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/"]');
  }

  get linkPostpaidPlans(): Locator {
    return this.page.getByRole('link', { name: "postpaid plans" });
  }

  get linkPrepaidPacks(): Locator {
    return this.page.getByRole('link', { name: "prepaid packs" });
  }

  get link3(): Locator {
    return this.page.getByRole('link').nth(3);
  }

  get link4(): Locator {
    return this.page.getByRole('link').nth(4);
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

  get linkPostpaidPlan(): Locator {
    return this.page.getByRole('link', { name: "postpaid plan" });
  }

  get linkPostpaid(): Locator {
    return this.page.getByRole('link', { name: "postpaid" });
  }

  get linkHome(): Locator {
    return this.page.getByRole('link', { name: "home" });
  }

  get linkNewConnection(): Locator {
    return this.page.getByRole('link', { name: "new connection" });
  }

  get linkPostpaidConnection(): Locator {
    return this.page.getByRole('link', { name: "postpaid connection" });
  }

  get linkPostpaidSim(): Locator {
    return this.page.getByRole('link', { name: "postpaid sim" });
  }

  get linkMobileNumberPortability(): Locator {
    return this.page.getByRole('link', { name: "mobile number portability" });
  }

  get linkVipFancyMobileNumber(): Locator {
    return this.page.getByRole('link', { name: "VIP fancy mobile number" });
  }

  get linkSimDelivery(): Locator {
    return this.page.getByRole('link', { name: "SIM delivery" });
  }

  get linkWatchVideo(): Locator {
    return this.page.getByRole('link', { name: "watch video" });
  }

  get linkPostpaidConnection1(): Locator {
    return this.page.getByRole('link', { name: "Postpaid Connection" });
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

  get buttonSelect(): Locator {
    return this.page.getByRole('button', { name: "select" });
  }

  get buttonSelect1(): Locator {
    return this.page.getByRole('button', { name: "select" });
  }

  get button1(): Locator {
    return this.page.getByRole('button', { name: "1" });
  }

  get button2(): Locator {
    return this.page.getByRole('button', { name: "2" });
  }

  get buttonPrevious(): Locator {
    return this.page.getByRole('button', { name: "Previous" });
  }

  get buttonNext(): Locator {
    return this.page.getByRole('button', { name: "Next" });
  }

  get button11(): Locator {
    return this.page.getByRole('button', { name: "1" });
  }

  get button21(): Locator {
    return this.page.getByRole('button', { name: "2" });
  }

  get button3(): Locator {
    return this.page.getByRole('button', { name: "3" });
  }

  get buttonHowToGetPostpaidSimDeliveredForFree(): Locator {
    return this.page.getByRole('button', { name: "How to get postpaid SIM delivered for free?" });
  }

  get buttonWhatIsAPostpaidSim(): Locator {
    return this.page.getByRole('button', { name: "What is a postpaid SIM?" });
  }

  get buttonWhatIsThePriceOfANewPostpaidSim(): Locator {
    return this.page.getByRole('button', { name: "What is the price of a new postpaid SIM?" });
  }

  get buttonWhatAreTheDocumentsRequiredToGetANewPostpaidConnec(): Locator {
    return this.page.getByRole('button', { name: "What are the documents required to get a new postpaid connection?" });
  }

  get buttonHowDoIActivateMyNewViPostpaidSimCardOnline(): Locator {
    return this.page.getByRole('button', { name: "How do I activate my new Vi postpaid SIM card online?" });
  }

  get buttonIsFreePostpaidSimDeliveryAvailableOnAllViPlans(): Locator {
    return this.page.getByRole('button', { name: "Is free postpaid SIM delivery available on all Vi plans?" });
  }

  get buttonWhatAreTheChargesApplicableForANewSimCard(): Locator {
    return this.page.getByRole('button', { name: "What are the charges applicable for a new SIM card?" });
  }

  get buttonHowLongDoesItTakeForANewSimCardToGetActivated(): Locator {
    return this.page.getByRole('button', { name: "How long does it take for a new SIM card to get activated?" });
  }

  get buttonWhatBenefitsWillIGetWithANewSimHavingViPostpaidC(): Locator {
    return this.page.getByRole('button', { name: "What benefits will I get with a new SIM having Vi Postpaid connection?" });
  }

  get buttonAreThereAnyChargesApplicableOnHomeDeliveryOfANewS(): Locator {
    return this.page.getByRole('button', { name: "Are there any charges applicable on home delivery of a new SIM card?" });
  }

  get buttonHowCanIBuyANewVodafoneOrIdeaPostpaidConnection(): Locator {
    return this.page.getByRole('button', { name: "How can I buy a new Vodafone or Idea postpaid Connection?" });
  }

  get buttonWhatIsViPriorityService(): Locator {
    return this.page.getByRole('button', { name: "What is Vi Priority Service ?" });
  }

  get buttonWhoIsEligibleForViPriorityService(): Locator {
    return this.page.getByRole('button', { name: "Who is eligible for Vi Priority Service ?" });
  }

  get buttonBackToPlans(): Locator {
    return this.page.getByRole('button', { name: "back to plans" });
  }

  get button(): Locator {
    return this.page.getByRole('button', { name: "×" });
  }

  get inputPincodefield(): Locator {
    return this.page.locator('input[name="pincodeField"]');
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

  get inputShowplansorpacks(): Locator {
    return this.page.locator('input[name="showPlansOrPacks"]');
  }

  get inputIsplaninenglish(): Locator {
    return this.page.locator('input[name="isPlanInEnglish"]');
  }

  get inputShowplansbasispincode(): Locator {
    return this.page.locator('input[name="showPlansBasisPincode"]');
  }

  get inputUtmfamilyplanprice(): Locator {
    return this.page.locator('input[name="utmFamilyPlanPrice"]');
  }

  get inputPrepaidredirectionurl(): Locator {
    return this.page.locator('input[name="prepaidRedirectionUrl"]');
  }

  get inputFamilysecondaryplanmapping(): Locator {
    return this.page.locator('input[name="familySecondaryPlanMapping"]');
  }

  get inputConnectionstextdetails(): Locator {
    return this.page.locator('input[name="connectionsTextDetails"]');
  }

  get inputConnectionstext(): Locator {
    return this.page.locator('input[name="connectionsText"]');
  }

  get inputVideodelay(): Locator {
    return this.page.locator('input[name="videoDelay"]');
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

  constructor(page: Page) {
    super(page);
  }
}
