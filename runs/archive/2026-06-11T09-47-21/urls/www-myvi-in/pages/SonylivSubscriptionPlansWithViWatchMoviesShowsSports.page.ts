import { Page, Locator } from '@playwright/test';
import { BasePage } from '../../BasePage';

export class SonylivSubscriptionPlansWithViWatchMoviesShowsSports extends BasePage {
  readonly url = "https://www.myvi.in/prepaid/sonyliv-subscription-recharge-plans";

  // All element locators are generated dynamically using locator strategies

  get headingStreamIn10LanguagesAndGetExcitingDataBenefitsStarti(): Locator {
    return this.page.getByRole('heading', { name: "stream in 10+ Languages and get exciting data benefits starting at just ₹408 wit" });
  }

  get headingItSVerySimpleToGetStarted(): Locator {
    return this.page.getByRole('heading', { name: "it’s very simple to get started" });
  }

  get headingWatchExclusiveSonylivSpecials(): Locator {
    return this.page.getByRole('heading', { name: "watch exclusive SonyLiv specials" });
  }

  get headingFrequentlyAskedQuestionsFaqs(): Locator {
    return this.page.getByRole('heading', { name: "Frequently Asked Questions (FAQs)" });
  }

  get link0(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/"]');
  }

  get linkViApp(): Locator {
    return this.page.getByRole('link', { name: "Vi app" });
  }

  get linkRechargeNow(): Locator {
    return this.page.getByRole('link', { name: "recharge now" });
  }

  get link3(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/new-connection/user-details"]');
  }

  get link4(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/prepaid/target=%22_blank%22"]');
  }

  get link5(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/prepaid/target=%22_blank%22"]');
  }

  get link6(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/prepaid/target=%22_blank%22"]');
  }

  get buttonMaharashtraGoa(): Locator {
    return this.page.getByRole('button', { name: "Maharashtra & Goa" });
  }

  get buttonBuy(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy1(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get buttonBuy2(): Locator {
    return this.page.getByRole('button', { name: "buy" });
  }

  get inputParamdetails(): Locator {
    return this.page.locator('input[name="paramDetails"]');
  }

  get form0(): Locator {
    return this.page.locator('form#pgForm');
  }

  get menuPrepaidpostpaidnewConnectioninternationalRoaming5gottsMor(): Locator {
    return this.page.getByRole('navigation', { name: "PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service" });
  }

  get menuBusinessinvestorssignIn(): Locator {
    return this.page.getByRole('navigation', { name: "BusinessInvestorsSign in" });
  }

  constructor(page: Page) {
    super(page);
  }
}
