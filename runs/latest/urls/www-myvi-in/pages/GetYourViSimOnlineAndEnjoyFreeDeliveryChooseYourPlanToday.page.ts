import { Page, Locator } from '@playwright/test';
import { BasePage } from '../../BasePage';

export class GetYourViSimOnlineAndEnjoyFreeDeliveryChooseYourPlanToday extends BasePage {
  readonly url = "https://www.myvi.in/new-connection/vi-free-sim-home-delivery";

  // All element locators are generated dynamically using locator strategies

  get headingOurBestSellingPlansNowwithFreeSimDelivery(): Locator {
    return this.page.getByRole('heading', { name: "our best selling plans nowwith free SIM delivery" });
  }

  get headingGetFreeSimHomeDelivery(): Locator {
    return this.page.getByRole('heading', { name: "get free SIM home delivery" });
  }

  get headingYouStayAtHomeWeDeliver(): Locator {
    return this.page.getByRole('heading', { name: "you stay at home, we deliver!" });
  }

  get headingWhyJoinVi(): Locator {
    return this.page.getByRole('heading', { name: "why join Vi?" });
  }

  get headingFreeSimHomeDeliveryFaqs(): Locator {
    return this.page.getByRole('heading', { name: "Free SIM Home Delivery FAQs" });
  }

  get headingHowDoesFreeSimCardHomeDeliveryWork(): Locator {
    return this.page.getByRole('heading', { name: "How does free SIM card home delivery work?" });
  }

  get headingHowLongDoesItTakeForASimToBeDeliveredToTheDoors(): Locator {
    return this.page.getByRole('heading', { name: "How long does it take for a SIM to be delivered to the doorstep?" });
  }

  get headingCanIRescheduleTheOnlineSimDeliveryOfMyNewViConnec(): Locator {
    return this.page.getByRole('heading', { name: "Can I reschedule the online SIM delivery of my new Vi Connection?" });
  }

  get headingOnWhichViMaxPostpaidPlansWouldIGetFreeSimCardDel(): Locator {
    return this.page.getByRole('heading', { name: "On which Vi max postpaid plans would I get free sim card delivery?" });
  }

  get headingHowCanITrackTheStatusOfMyFreeSimCardHomeDelivery(): Locator {
    return this.page.getByRole('heading', { name: "How can I track the status of my free SIM card home delivery?" });
  }

  get headingWhatAreTheDocumentsRequiredAtTheTimeOfSimHomeDeli(): Locator {
    return this.page.getByRole('heading', { name: "What are the documents required at the time of SIM Home delivery?" });
  }

  get headingDoVodafoneOrIdeaHaveFreeSimHomeDelivery(): Locator {
    return this.page.getByRole('heading', { name: "Do Vodafone or Idea have free SIM home delivery?" });
  }

  get headingViFreeSimCardHomeDelivery(): Locator {
    return this.page.getByRole('heading', { name: "Vi Free SIM Card Home Delivery" });
  }

  get link0(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/"]');
  }

  get linkPortSim(): Locator {
    return this.page.getByRole('link', { name: "Port SIM" });
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

  get linkPortNow(): Locator {
    return this.page.getByRole('link', { name: "port now" });
  }

  get linkFreeSimDelivery(): Locator {
    return this.page.getByRole('link', { name: "free SIM delivery" });
  }

  get linkPostpaidPlans(): Locator {
    return this.page.getByRole('link', { name: "postpaid plans" });
  }

  get linkPrepaidPlans(): Locator {
    return this.page.getByRole('link', { name: "prepaid plans" });
  }

  get linkTrackYourSim(): Locator {
    return this.page.getByRole('link', { name: "track your SIM" });
  }

  get linkFreeSimDelivery1(): Locator {
    return this.page.getByRole('link', { name: "Free SIM Delivery" });
  }

  get linkHome(): Locator {
    return this.page.getByRole('link', { name: "Home" });
  }

  get linkNewConnection(): Locator {
    return this.page.getByRole('link', { name: "New Connection" });
  }

  get linkFreeSimHomeDelivery(): Locator {
    return this.page.getByRole('link', { name: "Free SIM Home Delivery" });
  }

  get linkPrepaidSim(): Locator {
    return this.page.getByRole('link', { name: "prepaid SIM" });
  }

  get linkPostpaidSimCard(): Locator {
    return this.page.getByRole('link', { name: "postpaid SIM card" });
  }

  get linkFreeSimDelivery2(): Locator {
    return this.page.getByRole('link', { name: "Free SIM Delivery" });
  }

  get link4gSimHomeDelivery(): Locator {
    return this.page.getByRole('link', { name: "4G SIM home delivery" });
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

  get linkTrackYourSim1(): Locator {
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

  get buttonProceedWith451Plan(): Locator {
    return this.page.getByRole('button', { name: "proceed with ₹451 plan" });
  }

  get buttonProceedWith701Plan(): Locator {
    return this.page.getByRole('button', { name: "proceed with ₹701 plan" });
  }

  get buttonHowDoesFreeSimCardHomeDeliveryWork(): Locator {
    return this.page.getByRole('button', { name: "How does free SIM card home delivery work?" });
  }

  get buttonHowLongDoesItTakeForASimToBeDeliveredToTheDoors(): Locator {
    return this.page.getByRole('button', { name: "How long does it take for a SIM to be delivered to the doorstep?" });
  }

  get buttonCanIRescheduleTheOnlineSimDeliveryOfMyNewViConnec(): Locator {
    return this.page.getByRole('button', { name: "Can I reschedule the online SIM delivery of my new Vi Connection?" });
  }

  get buttonOnWhichViMaxPostpaidPlansWouldIGetFreeSimCardDel(): Locator {
    return this.page.getByRole('button', { name: "On which Vi max postpaid plans would I get free sim card delivery?" });
  }

  get buttonHowCanITrackTheStatusOfMyFreeSimCardHomeDelivery(): Locator {
    return this.page.getByRole('button', { name: "How can I track the status of my free SIM card home delivery?" });
  }

  get buttonWhatAreTheDocumentsRequiredAtTheTimeOfSimHomeDeli(): Locator {
    return this.page.getByRole('button', { name: "What are the documents required at the time of SIM Home delivery?" });
  }

  get buttonDoVodafoneOrIdeaHaveFreeSimHomeDelivery(): Locator {
    return this.page.getByRole('button', { name: "Do Vodafone or Idea have free SIM home delivery?" });
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
