import { Page, Locator } from '@playwright/test';
import { BasePage } from '../../BasePage';

export class ViProductServicesFaqsFrequentlyAskedQuestions extends BasePage {
  readonly url = "https://www.myvi.in/help-support/faqs?chatbotopen=true";

  // All element locators are generated dynamically using locator strategies

  get headingQuickHelpZeroHassle(): Locator {
    return this.page.getByRole('heading', { name: "quick help, zero hassle!" });
  }

  get headingNeedHelpFindingSomething(): Locator {
    return this.page.getByRole('heading', { name: "need help finding something?" });
  }

  get headingChatWithUs(): Locator {
    return this.page.getByRole('heading', { name: "chat with us" });
  }

  get headingContactUs(): Locator {
    return this.page.getByRole('heading', { name: "contact us" });
  }

  get headingConnectWithUsOnWhatsapp(): Locator {
    return this.page.getByRole('heading', { name: "connect with us on Whatsapp" });
  }

  get headingNeedInPersonAssistance(): Locator {
    return this.page.getByRole('heading', { name: "need in person assistance?" });
  }

  get headingGetExcitingOffersBenefitsWithViApp(): Locator {
    return this.page.getByRole('heading', { name: "get exciting offers & benefits with Vi app" });
  }

  get headingVodafoneIdeaLimited(): Locator {
    return this.page.getByRole('heading', { name: "Vodafone Idea Limited" });
  }

  get headingAboutVi(): Locator {
    return this.page.getByRole('heading', { name: "about Vi" });
  }

  get headingMoreFromVi(): Locator {
    return this.page.getByRole('heading', { name: "more from Vi" });
  }

  get headingExploreOnViApp(): Locator {
    return this.page.getByRole('heading', { name: "explore on Vi app" });
  }

  get headingRegulatoryQuickAccess(): Locator {
    return this.page.getByRole('heading', { name: "regulatory & quick access" });
  }

  get link0(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/"]');
  }

  get linkWhatCanIHelpYouWith(): Locator {
    return this.page.getByRole('link', { name: "What can I help you with?" });
  }

  get link2(): Locator {
    return this.page.locator('a[href="https://www.myvi.in/help-support/faqs?chatbotopen=true"]');
  }

  get linkChatNow(): Locator {
    return this.page.getByRole('link', { name: "Chat now" });
  }

  get linkSendUsAnEmail(): Locator {
    return this.page.getByRole('link', { name: "send us an email" });
  }

  get linkJoinUsOnWhatsapp(): Locator {
    return this.page.getByRole('link', { name: "join us on WhatsApp" });
  }

  get linkHome(): Locator {
    return this.page.getByRole('link', { name: "Home" });
  }

  get linkFaq(): Locator {
    return this.page.getByRole('link', { name: "FAQ" });
  }

  get linkGetExcitingOffersBenefitsWithViAppdownloadViApp(): Locator {
    return this.page.getByRole('link', { name: "get exciting offers & benefits with Vi appdownload Vi app" });
  }

  get link9(): Locator {
    return this.page.locator('a[href="https://www.facebook.com/ViOfficialFanWorld/"]');
  }

  get link10(): Locator {
    return this.page.locator('a[href="https://instagram.com/viofficialfanworld"]');
  }

  get link11(): Locator {
    return this.page.locator('a[href="https://twitter.com/ViCustomerCare"]');
  }

  get link12(): Locator {
    return this.page.locator('a[href="https://www.youtube.com/channel/UCHLTL1DEP_zelqLvUlYaV8Q"]');
  }

  get link13(): Locator {
    return this.page.locator('a[href="https://www.linkedin.com/company/vodafone-idea-limited"]');
  }

  get linkAboutUs(): Locator {
    return this.page.getByRole('link', { name: "About Us" });
  }

  get linkVodafoneIdeaCorp(): Locator {
    return this.page.getByRole('link', { name: "Vodafone Idea Corp" });
  }

  get linkViFoundation(): Locator {
    return this.page.getByRole('link', { name: "Vi Foundation" });
  }

  get linkVodafoneGroup(): Locator {
    return this.page.getByRole('link', { name: "Vodafone Group" });
  }

  get linkAdityaBirlaGroup(): Locator {
    return this.page.getByRole('link', { name: "Aditya Birla Group" });
  }

  get linkInvestorRelations(): Locator {
    return this.page.getByRole('link', { name: "Investor Relations" });
  }

  get linkNewsMedia(): Locator {
    return this.page.getByRole('link', { name: "News & Media" });
  }

  get linkCareer(): Locator {
    return this.page.getByRole('link', { name: "Career" });
  }

  get linkViApp(): Locator {
    return this.page.getByRole('link', { name: "Vi App" });
  }

  get linkViStoresNearMe(): Locator {
    return this.page.getByRole('link', { name: "Vi Stores Near Me" });
  }

  get linkViBusiness(): Locator {
    return this.page.getByRole('link', { name: "Vi Business" });
  }

  get linkHomeBroadband(): Locator {
    return this.page.getByRole('link', { name: "Home Broadband" });
  }

  get linkGiganet(): Locator {
    return this.page.getByRole('link', { name: "GIGAnet" });
  }

  get linkViVolte(): Locator {
    return this.page.getByRole('link', { name: "Vi VoLTE" });
  }

  get linkGoGreen(): Locator {
    return this.page.getByRole('link', { name: "Go Green" });
  }

  get linkEsim(): Locator {
    return this.page.getByRole('link', { name: "eSIM" });
  }

  get linkWifiCalling(): Locator {
    return this.page.getByRole('link', { name: "WiFi Calling" });
  }

  get link5g(): Locator {
    return this.page.getByRole('link', { name: "5G" });
  }

  get linkBlog(): Locator {
    return this.page.getByRole('link', { name: "Blog" });
  }

  get linkPostpaidConnection(): Locator {
    return this.page.getByRole('link', { name: "Postpaid Connection" });
  }

  get linkPrepaidConnection(): Locator {
    return this.page.getByRole('link', { name: "Prepaid Connection" });
  }

  get linkPortNumberToViMnp(): Locator {
    return this.page.getByRole('link', { name: "Port Number to Vi / MNP" });
  }

  get linkFreeSimDelivery(): Locator {
    return this.page.getByRole('link', { name: "Free SIM Delivery" });
  }

  get linkTrackYourSimDelivery(): Locator {
    return this.page.getByRole('link', { name: "Track your SIM Delivery" });
  }

  get linkFancyNumber(): Locator {
    return this.page.getByRole('link', { name: "Fancy Number" });
  }

  get linkIndividualPlans(): Locator {
    return this.page.getByRole('link', { name: "Individual Plans" });
  }

  get linkFamilyPlans(): Locator {
    return this.page.getByRole('link', { name: "Family Plans" });
  }

  get linkPrepaidToPostpaid(): Locator {
    return this.page.getByRole('link', { name: "Prepaid to Postpaid" });
  }

  get linkBestPostpaidPlans(): Locator {
    return this.page.getByRole('link', { name: "Best Postpaid Plans" });
  }

  get linkBestPrepaidPlans(): Locator {
    return this.page.getByRole('link', { name: "Best Prepaid Plans" });
  }

  get linkHeroUnlimitedPlans(): Locator {
    return this.page.getByRole('link', { name: "Hero Unlimited Plans" });
  }

  get linkUnlimitedPlans(): Locator {
    return this.page.getByRole('link', { name: "Unlimited Plans" });
  }

  get linkTalktimePlans(): Locator {
    return this.page.getByRole('link', { name: "Talktime Plans" });
  }

  get linkDataPlans(): Locator {
    return this.page.getByRole('link', { name: "Data Plans" });
  }

  get linkSmsPacks(): Locator {
    return this.page.getByRole('link', { name: "SMS Packs" });
  }

  get linkCallerTunesPacks(): Locator {
    return this.page.getByRole('link', { name: "Caller Tunes Packs" });
  }

  get linkValueAddedServices(): Locator {
    return this.page.getByRole('link', { name: "Value Added Services" });
  }

  get linkServiceValidityPlans(): Locator {
    return this.page.getByRole('link', { name: "Service Validity Plans" });
  }

  get linkJiohotstarPlans(): Locator {
    return this.page.getByRole('link', { name: "JioHotstar Plans" });
  }

  get linkAmazonPrimePlans(): Locator {
    return this.page.getByRole('link', { name: "Amazon Prime Plans" });
  }

  get linkSonyLivOffers(): Locator {
    return this.page.getByRole('link', { name: "Sony LIV offers" });
  }

  get linkOnlineRecharge(): Locator {
    return this.page.getByRole('link', { name: "Online Recharge" });
  }

  get linkPostpaidBillPayment(): Locator {
    return this.page.getByRole('link', { name: "Postpaid Bill Payment" });
  }

  get linkViShopSellerPortal(): Locator {
    return this.page.getByRole('link', { name: "Vi Shop - Seller Portal" });
  }

  get linkViVideoVault(): Locator {
    return this.page.getByRole('link', { name: "Vi Video Vault" });
  }

  get linkViGames(): Locator {
    return this.page.getByRole('link', { name: "Vi Games" });
  }

  get linkViMoviesTv(): Locator {
    return this.page.getByRole('link', { name: "Vi Movies & TV" });
  }

  get linkViHeroUnlimited(): Locator {
    return this.page.getByRole('link', { name: "Vi Hero Unlimited" });
  }

  get linkViWifiCalling(): Locator {
    return this.page.getByRole('link', { name: "Vi WiFi Calling" });
  }

  get linkInternationalRoaming(): Locator {
    return this.page.getByRole('link', { name: "International Roaming" });
  }

  get linkCallertunes(): Locator {
    return this.page.getByRole('link', { name: "Callertunes" });
  }

  get linkOrderPrepaidSim(): Locator {
    return this.page.getByRole('link', { name: "Order Prepaid SIM" });
  }

  get linkOrderPostpaidSim(): Locator {
    return this.page.getByRole('link', { name: "Order Postpaid SIM" });
  }

  get linkOrderVipNumber(): Locator {
    return this.page.getByRole('link', { name: "Order VIP Number" });
  }

  get linkPortToVi(): Locator {
    return this.page.getByRole('link', { name: "Port to Vi" });
  }

  get linkRechargeForSelfOthers(): Locator {
    return this.page.getByRole('link', { name: "Recharge for Self/Others" });
  }

  get linkPayBillForSelfOthers(): Locator {
    return this.page.getByRole('link', { name: "Pay Bill for Self/Others" });
  }

  get linkCashbackOffers(): Locator {
    return this.page.getByRole('link', { name: "Cashback Offers" });
  }

  get linkHelpSupport(): Locator {
    return this.page.getByRole('link', { name: "Help & Support" });
  }

  get linkMyAccount(): Locator {
    return this.page.getByRole('link', { name: "My Account" });
  }

  get linkViShop(): Locator {
    return this.page.getByRole('link', { name: "Vi Shop" });
  }

  get linkViPrepaidAutopay(): Locator {
    return this.page.getByRole('link', { name: "Vi Prepaid Autopay" });
  }

  get linkTelemarketingRegistration(): Locator {
    return this.page.getByRole('link', { name: "Telemarketing Registration" });
  }

  get linkPrivacyPolicy(): Locator {
    return this.page.getByRole('link', { name: "Privacy Policy" });
  }

  get linkTermsOfService(): Locator {
    return this.page.getByRole('link', { name: "Terms of Service" });
  }

  get linkNotices(): Locator {
    return this.page.getByRole('link', { name: "Notices" });
  }

  get linkPrepaidTraiMandate(): Locator {
    return this.page.getByRole('link', { name: "Prepaid TRAI mandate" });
  }

  get linkPostpaidTraiMandate(): Locator {
    return this.page.getByRole('link', { name: "Postpaid TRAI mandate" });
  }

  get linkWarningFraudulent(): Locator {
    return this.page.getByRole('link', { name: "Warning & Fraudulent" });
  }

  get linkSecurityAwareness(): Locator {
    return this.page.getByRole('link', { name: "Security Awareness" });
  }

  get linkDndComplaints(): Locator {
    return this.page.getByRole('link', { name: "DND Complaints" });
  }

  get linkDndRegistration(): Locator {
    return this.page.getByRole('link', { name: "DND Registration" });
  }

  get linkDisasterManagement(): Locator {
    return this.page.getByRole('link', { name: "Disaster Management" });
  }

  get linkResponsibleDisclosurePolicy(): Locator {
    return this.page.getByRole('link', { name: "Responsible Disclosure Policy" });
  }

  get linkNetworkCoverage(): Locator {
    return this.page.getByRole('link', { name: "Network Coverage" });
  }

  get linkRegisterForOnlineRefund(): Locator {
    return this.page.getByRole('link', { name: "Register for Online Refund" });
  }

  get linkNetworkTroubleshooting(): Locator {
    return this.page.getByRole('link', { name: "Network Troubleshooting" });
  }

  get linkBlockSimOnline(): Locator {
    return this.page.getByRole('link', { name: "Block SIM Online" });
  }

  get linkUpiRecharge(): Locator {
    return this.page.getByRole('link', { name: "UPI Recharge" });
  }

  get linkPostpaidIsdCallRates(): Locator {
    return this.page.getByRole('link', { name: "Postpaid ISD Call Rates" });
  }

  get linkPrepaidIsdCallRates(): Locator {
    return this.page.getByRole('link', { name: "Prepaid ISD Call Rates" });
  }

  get linkMobileInternet(): Locator {
    return this.page.getByRole('link', { name: "Mobile Internet" });
  }

  get linkSitemap(): Locator {
    return this.page.getByRole('link', { name: "Sitemap" });
  }

  get linkVibsl(): Locator {
    return this.page.getByRole('link', { name: "VIBSL" });
  }

  get linkTermsConditionsPrepaid(): Locator {
    return this.page.getByRole('link', { name: "Terms & Conditions - Prepaid" });
  }

  get link99(): Locator {
    return this.page.locator('a[href="https://www.facebook.com/ViOfficialFanWorld/"]');
  }

  get link100(): Locator {
    return this.page.locator('a[href="https://instagram.com/viofficialfanworld"]');
  }

  get link101(): Locator {
    return this.page.locator('a[href="https://twitter.com/ViCustomerCare"]');
  }

  get link102(): Locator {
    return this.page.locator('a[href="https://www.youtube.com/channel/UCHLTL1DEP_zelqLvUlYaV8Q"]');
  }

  get link103(): Locator {
    return this.page.locator('a[href="https://www.linkedin.com/company/vodafone-idea-limited"]');
  }

  get linkPrivacyPolicy1(): Locator {
    return this.page.getByRole('link', { name: "Privacy Policy" });
  }

  get buttonRechargeBalance(): Locator {
    return this.page.getByRole('button', { name: "Recharge & Balance" });
  }

  get buttonBillsUsage(): Locator {
    return this.page.getByRole('button', { name: "Bills & Usage" });
  }

  get buttonNewToVi(): Locator {
    return this.page.getByRole('button', { name: "New To Vi" });
  }

  get buttonUtilityPayments(): Locator {
    return this.page.getByRole('button', { name: "Utility Payments" });
  }

  get buttonRoamingIsd(): Locator {
    return this.page.getByRole('button', { name: "Roaming & ISD" });
  }

  get buttonServices(): Locator {
    return this.page.getByRole('button', { name: "Services" });
  }

  get buttonAccountOrSimRelated(): Locator {
    return this.page.getByRole('button', { name: "Account or SIM Related" });
  }

  get buttonViFaqs(): Locator {
    return this.page.getByRole('button', { name: "Vi FAQs" });
  }

  get buttonLandlineDialing(): Locator {
    return this.page.getByRole('button', { name: "Landline Dialing" });
  }

  get buttonViMaxFaqs(): Locator {
    return this.page.getByRole('button', { name: "Vi Max FAQs" });
  }

  get buttonAmazonPrime(): Locator {
    return this.page.getByRole('button', { name: "Amazon Prime" });
  }

  get buttonIWantToKnowMyRecentDeductions(): Locator {
    return this.page.getByRole('button', { name: "I want to know my recent deductions" });
  }

  get buttonIWantToKnowMyPreviousRecharges(): Locator {
    return this.page.getByRole('button', { name: "I want to know my previous recharges" });
  }

  get buttonIWantToCheckMyDataBalanceOnline(): Locator {
    return this.page.getByRole('button', { name: "I want to check my data balance online" });
  }

  get buttonIWantToCheckMyValidity(): Locator {
    return this.page.getByRole('button', { name: "I want to check my validity" });
  }

  get buttonHowCanIDoARecharge(): Locator {
    return this.page.getByRole('button', { name: "How can I do a recharge?" });
  }

  get buttonIWantToKnowMyLastCallCharges(): Locator {
    return this.page.getByRole('button', { name: "I want to know my last call charges" });
  }

  get buttonMoneyWasDeductedFromMyAccountButTheRechargeFailed(): Locator {
    return this.page.getByRole('button', { name: "Money was deducted from my account, but the recharge failed" });
  }

  get buttonHowCanIDoARechargeUsingMyAvailableBalance(): Locator {
    return this.page.getByRole('button', { name: "How can I do a recharge using my available balance?" });
  }

  get buttonHowToGetAnIdeaPrepaidRecharge(): Locator {
    return this.page.getByRole('button', { name: "How to get an Idea prepaid recharge?" });
  }

  get buttonHowToDoAVodafoneRecharge(): Locator {
    return this.page.getByRole('button', { name: "How to do a Vodafone recharge?" });
  }

  get buttonLoadMore(): Locator {
    return this.page.getByRole('button', { name: "Load More" });
  }

  get buttonDownloadViApp(): Locator {
    return this.page.getByRole('button', { name: "download Vi app" });
  }

  get buttonEnglish(): Locator {
    return this.page.getByRole('button', { name: "English" });
  }

  get button(): Locator {
    return this.page.getByRole('button', { name: "हिन्दी" });
  }

  get button1(): Locator {
    return this.page.getByRole('button', { name: "বাংলা" });
  }

  get button2(): Locator {
    return this.page.getByRole('button', { name: "ગુજરાતી" });
  }

  get button3(): Locator {
    return this.page.getByRole('button', { name: "मराठी" });
  }

  get button4(): Locator {
    return this.page.getByRole('button', { name: "தமிழ்" });
  }

  get button5(): Locator {
    return this.page.getByRole('button', { name: "తెలుగు" });
  }

  get inputSearchYourQuery(): Locator {
    return this.page.getByPlaceholder("search your query");
  }

  get inputTypeYourQuery(): Locator {
    return this.page.getByPlaceholder("Type your query...");
  }

  get input2(): Locator {
    return this.page.locator('input');
  }

  get input3(): Locator {
    return this.page.locator('input');
  }

  get menuPrepaidpostpaidnewConnectioninternationalRoaming5gottsMor(): Locator {
    return this.page.getByRole('navigation', { name: "PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service" });
  }

  get menuBusinessinvestorssignIn(): Locator {
    return this.page.getByRole('navigation', { name: "BusinessInvestorsSign in" });
  }

  get menuHomefaq(): Locator {
    return this.page.getByRole('navigation', { name: "HomeFAQ" });
  }

  constructor(page: Page) {
    super(page);
  }
}
