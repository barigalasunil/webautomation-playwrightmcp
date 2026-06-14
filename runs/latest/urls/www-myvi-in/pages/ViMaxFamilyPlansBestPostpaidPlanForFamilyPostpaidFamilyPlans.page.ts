import { Page, Locator } from '@playwright/test';
import { BasePage } from '../../BasePage';

export class ViMaxFamilyPlansBestPostpaidPlanForFamilyPostpaidFamilyPlans extends BasePage {
  readonly url = "https://www.myvi.in/postpaid/family-postpaid-plans";

  // All element locators are generated dynamically using locator strategies

  get heading24And5MemberViMaxPostpaidFamilyPlansForYouYourL(): Locator {
    return this.page.getByRole('heading', { name: "2,4 and 5 member VI Max postpaid family plans for you & your loved ones" });
  }

  get headingChoiceOfAny2ComplimentaryBenefits(): Locator {
    return this.page.getByRole('heading', { name: "choice of any 2 complimentary benefits" });
  }

  get headingViMoviesTv(): Locator {
    return this.page.getByRole('heading', { name: "Vi Movies & TV" });
  }

  get headingViMaxFamilyPlans(): Locator {
    return this.page.getByRole('heading', { name: "Vi Max Family Plans" });
  }

  get headingGetAWorldOfBenefitsWithViFamilyPlans(): Locator {
    return this.page.getByRole('heading', { name: "get a world of benefits with Vi family plans" });
  }

  get headingYourFamilyPlanyourChoiceOfbenefits(): Locator {
    return this.page.getByRole('heading', { name: "your family planyour choice ofbenefits" });
  }

  get headingGetAWorldOfBenefitsWithViFamilyPlans1(): Locator {
    return this.page.getByRole('heading', { name: "get a world of benefits with Vi family plans" });
  }

  get headingYourFamilyPlanyourChoiceOfbenefits1(): Locator {
    return this.page.getByRole('heading', { name: "your family planyour choice ofbenefits" });
  }

  get headingTopReasonsCustomersLoveViMaxPostpaidFamilyPlans(): Locator {
    return this.page.getByRole('heading', { name: "top reasons customers love Vi Max postpaid family plans" });
  }

  get headingContactlessDeliveryOfViMaxFamilyPlanSims(): Locator {
    return this.page.getByRole('heading', { name: "contactless delivery of Vi Max Family Plan SIMs" });
  }

  get headingTrustedAcrossTheNation(): Locator {
    return this.page.getByRole('heading', { name: "trusted across the nation" });
  }

  get headingPostpaidFamilyPlansFaqs(): Locator {
    return this.page.getByRole('heading', { name: "Postpaid Family Plans FAQs" });
  }

  get headingWhatIsViMaxFamilyPlanAndHowDoesItWork(): Locator {
    return this.page.getByRole('heading', { name: "What is Vi Max family plan and how does it work?" });
  }

  get headingWhatIsRequiredToGetAViMaxPostpaidFamilyPlan(): Locator {
    return this.page.getByRole('heading', { name: "What is required to get a Vi Max Postpaid Family Plan?" });
  }

  get headingHowManyConnectionsDoIGetUnderOneFamilyPlan(): Locator {
    return this.page.getByRole('heading', { name: "How many connections do I get under one family plan?" });
  }

  get headingCanExistingPostpaidUsersAddMoreConnectionsToTheExis(): Locator {
    return this.page.getByRole('heading', { name: "Can existing postpaid users add more connections to the existing postpaid plan?" });
  }

  get headingWhatBenefitsDoIGetWithViMaxPostpaidFamilyPlans(): Locator {
    return this.page.getByRole('heading', { name: "What benefits do I get with Vi Max postpaid family plans?" });
  }

  get headingCanAllSecondaryMembersOfAViPostpaidFamilyPlanBuyA(): Locator {
    return this.page.getByRole('heading', { name: "Can all secondary members of a Vi Postpaid family plan buy additional packs like" });
  }

  get headingYesBothPrimaryAndSecondaryMembersOfAViPostpaidFami(): Locator {
    return this.page.getByRole('heading', { name: "Yes, both primary and secondary members of a Vi Postpaid family can buy addition" });
  }

  get headingHowDoIAddFamilyMembersToMyFamilyPlan(): Locator {
    return this.page.getByRole('heading', { name: "How do I add family members to my family plan?" });
  }

  get headingAreTheViMaxFamilyPostpaidPlansDeliveredForFreeAtM(): Locator {
    return this.page.getByRole('heading', { name: "Are the Vi Max family postpaid plans delivered for free at my doorstep?" });
  }

  get headingWhatIsViPriorityService(): Locator {
    return this.page.getByRole('heading', { name: "What is Vi Priority Service ?" });
  }

  get headingWhoIsEligibleForViPriorityService(): Locator {
    return this.page.getByRole('heading', { name: "Who is eligible for Vi Priority Service ?" });
  }

  get headingWhatIsViRedxFamilyPlanAndHowDoesItWork(): Locator {
    return this.page.getByRole('heading', { name: "What is Vi REDX Family Plan and how does it work?" });
  }

  get headingWhatAreTheBenefitsIGetWithViRedxFamilyPlan(): Locator {
    return this.page.getByRole('heading', { name: "What are the benefits I get with Vi REDX Family Plan?" });
  }

  get headingWhatAreTheBenefitsThatSecondaryMembersEnjoyWithViR(): Locator {
    return this.page.getByRole('heading', { name: "What are the benefits that secondary members enjoy with Vi REDX Family Plan?" });
  }

  get headingHowManyPaidFamilyMembersCanBeAddedWithViRedxFamil(): Locator {
    return this.page.getByRole('heading', { name: "How many paid family members can be added with Vi REDX Family Plan?" });
  }

  get headingWhyDoesSecondaryDataShow40gbInsteadOfUnlimitedInVi(): Locator {
    return this.page.getByRole('heading', { name: "Why does secondary data show 40GB instead of unlimited in Vi REDX Family Plan?" });
  }

  get headingViMaxBestPostpaidFamilyPlans(): Locator {
    return this.page.getByRole('heading', { name: "Vi Max Best Postpaid Family Plans" });
  }

  get link0(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/"]');
  }

  get linkChooseYourBenefitsWithViMaxPostpaid(): Locator {
    return this.page.getByRole('link', { name: "Choose your benefits with Vi Max Postpaid!" });
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

  get linkFamilyPlans1(): Locator {
    return this.page.getByRole('link', { name: "family plans" });
  }

  get linkPostpaidPlans1(): Locator {
    return this.page.getByRole('link', { name: "postpaid plans" });
  }

  get linkHome(): Locator {
    return this.page.getByRole('link', { name: "home" });
  }

  get linkPostpaid(): Locator {
    return this.page.getByRole('link', { name: "postpaid" });
  }

  get linkFamilyPostpaidPlans(): Locator {
    return this.page.getByRole('link', { name: "family postpaid plans" });
  }

  get linkFamilyPlans2(): Locator {
    return this.page.getByRole('link', { name: "family plans" });
  }

  get linkViMoviesTv(): Locator {
    return this.page.getByRole('link', { name: "Vi Movies & TV" });
  }

  get linkPostpaidFamilyPlan(): Locator {
    return this.page.getByRole('link', { name: "postpaid family plan" });
  }

  get linkNewSim(): Locator {
    return this.page.getByRole('link', { name: "new SIM" });
  }

  get linkViPostpaid(): Locator {
    return this.page.getByRole('link', { name: "Vi postpaid" });
  }

  get linkWatchVideo(): Locator {
    return this.page.getByRole('link', { name: "watch video" });
  }

  get linkPostpaidConnection(): Locator {
    return this.page.getByRole('link', { name: "Postpaid Connection" });
  }

  get linkViRed(): Locator {
    return this.page.getByRole('link', { name: "VI RED" });
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

  get linkFamilyPlans3(): Locator {
    return this.page.getByRole('link', { name: "Family Plans" });
  }

  get linkFamilyPlansSelectCircles(): Locator {
    return this.page.getByRole('link', { name: "Family Plans (Select Circles)" });
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

  get buttonWhatIsViMaxFamilyPlanAndHowDoesItWork(): Locator {
    return this.page.getByRole('button', { name: "What is Vi Max family plan and how does it work?" });
  }

  get buttonWhatIsRequiredToGetAViMaxPostpaidFamilyPlan(): Locator {
    return this.page.getByRole('button', { name: "What is required to get a Vi Max Postpaid Family Plan?" });
  }

  get buttonHowManyConnectionsDoIGetUnderOneFamilyPlan(): Locator {
    return this.page.getByRole('button', { name: "How many connections do I get under one family plan?" });
  }

  get buttonCanExistingPostpaidUsersAddMoreConnectionsToTheExis(): Locator {
    return this.page.getByRole('button', { name: "Can existing postpaid users add more connections to the existing postpaid plan?" });
  }

  get buttonWhatBenefitsDoIGetWithViMaxPostpaidFamilyPlans(): Locator {
    return this.page.getByRole('button', { name: "What benefits do I get with Vi Max postpaid family plans?" });
  }

  get buttonCanAllSecondaryMembersOfAViPostpaidFamilyPlanBuyA(): Locator {
    return this.page.locator('button');
  }

  get buttonHowDoIAddFamilyMembersToMyFamilyPlan(): Locator {
    return this.page.getByRole('button', { name: "How do I add family members to my family plan?" });
  }

  get buttonAreTheViMaxFamilyPostpaidPlansDeliveredForFreeAtM(): Locator {
    return this.page.getByRole('button', { name: "Are the Vi Max family postpaid plans delivered for free at my doorstep?" });
  }

  get buttonWhatIsViPriorityService(): Locator {
    return this.page.getByRole('button', { name: "What is Vi Priority Service ?" });
  }

  get buttonWhoIsEligibleForViPriorityService(): Locator {
    return this.page.getByRole('button', { name: "Who is eligible for Vi Priority Service ?" });
  }

  get buttonWhatIsViRedxFamilyPlanAndHowDoesItWork(): Locator {
    return this.page.getByRole('button', { name: "What is Vi REDX Family Plan and how does it work?" });
  }

  get buttonWhatAreTheBenefitsIGetWithViRedxFamilyPlan(): Locator {
    return this.page.getByRole('button', { name: "What are the benefits I get with Vi REDX Family Plan?" });
  }

  get buttonWhatAreTheBenefitsThatSecondaryMembersEnjoyWithViR(): Locator {
    return this.page.getByRole('button', { name: "What are the benefits that secondary members enjoy with Vi REDX Family Plan?" });
  }

  get buttonHowManyPaidFamilyMembersCanBeAddedWithViRedxFamil(): Locator {
    return this.page.getByRole('button', { name: "How many paid family members can be added with Vi REDX Family Plan?" });
  }

  get buttonWhyDoesSecondaryDataShow40gbInsteadOfUnlimitedInVi(): Locator {
    return this.page.getByRole('button', { name: "Why does secondary data show 40GB instead of unlimited in Vi REDX Family Plan?" });
  }

  get buttonBackToTop(): Locator {
    return this.page.getByRole('button', { name: "back to top" });
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
