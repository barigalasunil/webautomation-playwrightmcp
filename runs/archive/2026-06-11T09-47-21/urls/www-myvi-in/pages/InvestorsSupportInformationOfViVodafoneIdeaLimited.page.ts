import { Page, Locator } from '@playwright/test';
import { BasePage } from '../../BasePage';

export class InvestorsSupportInformationOfViVodafoneIdeaLimited extends BasePage {
  readonly url = "https://www.myvi.in/investors/investors-support";

  // All element locators are generated dynamically using locator strategies

  get headingInvestorsSupport(): Locator {
    return this.page.getByRole('heading', { name: "Investors Support" });
  }

  get headingBombayStockExchangeLimitedBse(): Locator {
    return this.page.getByRole('heading', { name: "Bombay Stock Exchange Limited (BSE)" });
  }

  get headingNationalStockExchangeOfIndiaLimitedNse(): Locator {
    return this.page.getByRole('heading', { name: "National Stock Exchange of India Limited (NSE)" });
  }

  get headingDetailsOfSharesToIepf(): Locator {
    return this.page.getByRole('heading', { name: "details of shares to IEPF" });
  }

  get headingInvestorsContact(): Locator {
    return this.page.getByRole('heading', { name: "investors contact" });
  }

  get headingUsefulForms(): Locator {
    return this.page.getByRole('heading', { name: "useful forms" });
  }

  get headingVodafoneIdeaLimited(): Locator {
    return this.page.getByRole('heading', { name: "vodafone idea limited" });
  }

  get headingAboutVodafoneIdea(): Locator {
    return this.page.getByRole('heading', { name: "about vodafone idea" });
  }

  get headingQuickLinks(): Locator {
    return this.page.getByRole('heading', { name: "quick links" });
  }

  get headingSupport(): Locator {
    return this.page.getByRole('heading', { name: "support" });
  }

  get headingViServicesSolutions(): Locator {
    return this.page.getByRole('heading', { name: "Vi services & solutions" });
  }

  get headingGroups(): Locator {
    return this.page.getByRole('heading', { name: "groups" });
  }

  get link0(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/"]');
  }

  get linkPersonal(): Locator {
    return this.page.getByRole('link', { name: "Personal" });
  }

  get linkBusiness(): Locator {
    return this.page.getByRole('link', { name: "Business" });
  }

  get link3(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/"]');
  }

  get linkCompanyOverview(): Locator {
    return this.page.getByRole('link', { name: "Company Overview" });
  }

  get linkCsr(): Locator {
    return this.page.getByRole('link', { name: "CSR" });
  }

  get linkInvestors(): Locator {
    return this.page.getByRole('link', { name: "Investors" });
  }

  get linkMediaCenter(): Locator {
    return this.page.getByRole('link', { name: "Media Center" });
  }

  get linkCareers(): Locator {
    return this.page.getByRole('link', { name: "Careers" });
  }

  get linkPersonal1(): Locator {
    return this.page.getByRole('link', { name: "Personal" });
  }

  get linkBusiness1(): Locator {
    return this.page.getByRole('link', { name: "Business" });
  }

  get linkAnnualReports(): Locator {
    return this.page.getByRole('link', { name: "annual reports" });
  }

  get linkQuarterlyResults(): Locator {
    return this.page.getByRole('link', { name: "Quarterly Results" });
  }

  get linkStockExchangeSubmission(): Locator {
    return this.page.getByRole('link', { name: "stock exchange submission" });
  }

  get linkShareholdingPattern(): Locator {
    return this.page.getByRole('link', { name: "Shareholding Pattern" });
  }

  get linkInvestorsPresentation(): Locator {
    return this.page.getByRole('link', { name: "investors presentation" });
  }

  get linkSchemeOfAmalgamation(): Locator {
    return this.page.getByRole('link', { name: "scheme of amalgamation" });
  }

  get linkInvestorsSupport(): Locator {
    return this.page.getByRole('link', { name: "investors support" });
  }

  get linkCorporateGovernance(): Locator {
    return this.page.getByRole('link', { name: "corporate governance" });
  }

  get linkUnclaimedDividend(): Locator {
    return this.page.getByRole('link', { name: "unclaimed dividend" });
  }

  get linkSmartodrPortal(): Locator {
    return this.page.getByRole('link', { name: "SMARTODR Portal" });
  }

  get linkSpecialWindowReLodgementForTransferOfPhysicalShares(): Locator {
    return this.page.getByRole('link', { name: "Special window - re-lodgement for transfer of physical shares" });
  }

  get linkSpecialWindowForTransferAndDematerialisationOfPhysica(): Locator {
    return this.page.getByRole('link', { name: "Special window for transfer and dematerialisation of physical securities" });
  }

  get link23(): Locator {
    return this.page.locator('a[href="https://www.facebook.com/ViOfficialFanWorld/"]');
  }

  get link24(): Locator {
    return this.page.locator('a[href="https://instagram.com/viofficialfanworld"]');
  }

  get link25(): Locator {
    return this.page.locator('a[href="https://twitter.com/ViCustomerCare"]');
  }

  get link26(): Locator {
    return this.page.locator('a[href="https://www.youtube.com/channel/UCHLTL1DEP_zelqLvUlYaV8Q"]');
  }

  get link27(): Locator {
    return this.page.locator('a[href="https://www.linkedin.com/company/vodafone-idea-limited"]');
  }

  get linkSuppliersPartners(): Locator {
    return this.page.getByRole('link', { name: "Suppliers & Partners" });
  }

  get linkFaqs(): Locator {
    return this.page.getByRole('link', { name: "FAQs" });
  }

  get linkContactUs(): Locator {
    return this.page.getByRole('link', { name: "Contact Us" });
  }

  get linkPrivacyPolicy(): Locator {
    return this.page.getByRole('link', { name: "Privacy Policy" });
  }

  get linkTermsConditions(): Locator {
    return this.page.getByRole('link', { name: "Terms & Conditions" });
  }

  get linkOnlineRecharge(): Locator {
    return this.page.getByRole('link', { name: "Online Recharge" });
  }

  get linkPayBillOnline(): Locator {
    return this.page.getByRole('link', { name: "Pay Bill Online" });
  }

  get linkPortToVi(): Locator {
    return this.page.getByRole('link', { name: "Port to Vi" });
  }

  get linkServiceValidityPacks(): Locator {
    return this.page.getByRole('link', { name: "Service Validity Packs" });
  }

  get linkUpiRecharge(): Locator {
    return this.page.getByRole('link', { name: "UPI Recharge" });
  }

  get linkEBill(): Locator {
    return this.page.getByRole('link', { name: "e-Bill" });
  }

  get linkNetworkTroubleshooting(): Locator {
    return this.page.getByRole('link', { name: "Network & Troubleshooting" });
  }

  get linkDndComplaint(): Locator {
    return this.page.getByRole('link', { name: "DND Complaint" });
  }

  get linkDndRegistration(): Locator {
    return this.page.getByRole('link', { name: "DND Registration" });
  }

  get linkShortCodeUssdInfo(): Locator {
    return this.page.getByRole('link', { name: "Short code & USSD Info" });
  }

  get linkBlockSimOnline(): Locator {
    return this.page.getByRole('link', { name: "Block SIM Online" });
  }

  get linkPrepaidConnection(): Locator {
    return this.page.getByRole('link', { name: "Prepaid Connection" });
  }

  get linkPostpaidConnection(): Locator {
    return this.page.getByRole('link', { name: "Postpaid Connection" });
  }

  get linkGiganet(): Locator {
    return this.page.getByRole('link', { name: "GIGAnet" });
  }

  get linkDonglesMobileWifi(): Locator {
    return this.page.getByRole('link', { name: "Dongles & Mobile WiFi" });
  }

  get linkHomeBroadband(): Locator {
    return this.page.getByRole('link', { name: "Home Broadband" });
  }

  get linkValueAddedServices(): Locator {
    return this.page.getByRole('link', { name: "Value Added Services" });
  }

  get linkVodafoneGroup(): Locator {
    return this.page.getByRole('link', { name: "Vodafone Group" });
  }

  get linkAdityaBirlaGroup(): Locator {
    return this.page.getByRole('link', { name: "Aditya Birla Group" });
  }

  get link52(): Locator {
    return this.page.locator('a[href="https://www.facebook.com/ViOfficialFanWorld/"]');
  }

  get link53(): Locator {
    return this.page.locator('a[href="https://instagram.com/viofficialfanworld"]');
  }

  get link54(): Locator {
    return this.page.locator('a[href="https://twitter.com/ViCustomerCare"]');
  }

  get link55(): Locator {
    return this.page.locator('a[href="https://www.youtube.com/channel/UCHLTL1DEP_zelqLvUlYaV8Q"]');
  }

  get link56(): Locator {
    return this.page.locator('a[href="https://www.linkedin.com/company/vodafone-idea-limited"]');
  }

  get menuPrepaidpostpaidnewConnectioninternationalRoaming5gottsMor(): Locator {
    return this.page.getByRole('navigation', { name: "PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service" });
  }

  get menuBusinessinvestorssignIn(): Locator {
    return this.page.getByRole('navigation', { name: "BusinessInvestorsSign in" });
  }

  get menuAnnualReportsquarterlyResultsstockExchangeSubmissionshar(): Locator {
    return this.page.getByRole('navigation', { name: "annual reportsQuarterly Resultsstock exchange submissionShareholding Patterninve" });
  }

  constructor(page: Page) {
    super(page);
  }
}
