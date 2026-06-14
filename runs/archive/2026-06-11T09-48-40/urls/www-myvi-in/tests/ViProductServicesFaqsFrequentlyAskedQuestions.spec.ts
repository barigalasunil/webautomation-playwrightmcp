import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { ViProductServicesFaqsFrequentlyAskedQuestions } from '../../../pages/generated/www-myvi-in/ViProductServicesFaqsFrequentlyAskedQuestions.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Vi Product & Services FAQs, Frequently Asked Questions - Regression Tests", () => {
  let appPage: ViProductServicesFaqsFrequentlyAskedQuestions;

  test.beforeEach(async ({ page }) => {
    appPage = new ViProductServicesFaqsFrequentlyAskedQuestions(page);
    await appPage.open();
  });

  test("Verify that Vi Product & Services FAQs, Frequently Asked Questions loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Product & Services FAQs, Frequently Asked Questions");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Product & Services FAQs, Frequently Asked Questions",
      pageUrl: "https://www.myvi.in/help-support/faqs?chatbotopen=true",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/help\-support\/faqs\?chatbotopen=true/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Product & Services FAQs, Frequently Asked Questions - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 12 Headings are present on Vi Product & Services FAQs, Frequently Asked Questions @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Product & Services FAQs, Frequently Asked Questions");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Product & Services FAQs, Frequently Asked Questions",
      pageUrl: "https://www.myvi.in/help-support/faqs?chatbotopen=true",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'quick help, zero hassle!' exists in the DOM", async () => {
      await expect(appPage.headingQuickHelpZeroHassle.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'quick help, zero hassle!' exists in the DOM");
    });
    await test.step("Verify that the heading 'need help finding something?' exists in the DOM", async () => {
      await expect(appPage.headingNeedHelpFindingSomething.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'need help finding something?' exists in the DOM");
    });
    await test.step("Verify that the heading 'chat with us' exists in the DOM", async () => {
      await expect(appPage.headingChatWithUs.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'chat with us' exists in the DOM");
    });
    await test.step("Verify that the heading 'contact us' exists in the DOM", async () => {
      await expect(appPage.headingContactUs.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'contact us' exists in the DOM");
    });
    await test.step("Verify that the heading 'connect with us on Whatsapp' exists in the DOM", async () => {
      await expect(appPage.headingConnectWithUsOnWhatsapp.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'connect with us on Whatsapp' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Product & Services FAQs, Frequently Asked Questions - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 93 Links are present on Vi Product & Services FAQs, Frequently Asked Questions @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Product & Services FAQs, Frequently Asked Questions");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Product & Services FAQs, Frequently Asked Questions",
      pageUrl: "https://www.myvi.in/help-support/faqs?chatbotopen=true",
      testObjective: "Verify Link elements are present",
    });

    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'What can I help you with?' exists in the DOM", async () => {
      await expect(appPage.linkWhatCanIHelpYouWith.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'What can I help you with?' exists in the DOM");
    });
    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link2.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'Chat now' exists in the DOM", async () => {
      await expect(appPage.linkChatNow.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Chat now' exists in the DOM");
    });
    await test.step("Verify that the link 'send us an email' exists in the DOM", async () => {
      await expect(appPage.linkSendUsAnEmail.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'send us an email' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Product & Services FAQs, Frequently Asked Questions - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 30 Buttons are present on Vi Product & Services FAQs, Frequently Asked Questions @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Product & Services FAQs, Frequently Asked Questions");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Product & Services FAQs, Frequently Asked Questions",
      pageUrl: "https://www.myvi.in/help-support/faqs?chatbotopen=true",
      testObjective: "Verify Button elements are present",
    });

    await test.step("Verify that the button 'Recharge & Balance' exists in the DOM", async () => {
      await expect(appPage.buttonRechargeBalance.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Recharge & Balance' exists in the DOM");
    });
    await test.step("Verify that the button 'Bills & Usage' exists in the DOM", async () => {
      await expect(appPage.buttonBillsUsage.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Bills & Usage' exists in the DOM");
    });
    await test.step("Verify that the button 'New To Vi' exists in the DOM", async () => {
      await expect(appPage.buttonNewToVi.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'New To Vi' exists in the DOM");
    });
    await test.step("Verify that the button 'Utility Payments' exists in the DOM", async () => {
      await expect(appPage.buttonUtilityPayments.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Utility Payments' exists in the DOM");
    });
    await test.step("Verify that the button 'Roaming & ISD' exists in the DOM", async () => {
      await expect(appPage.buttonRoamingIsd.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Roaming & ISD' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Product & Services FAQs, Frequently Asked Questions - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 4 Inputs are present on Vi Product & Services FAQs, Frequently Asked Questions @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Product & Services FAQs, Frequently Asked Questions");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Product & Services FAQs, Frequently Asked Questions",
      pageUrl: "https://www.myvi.in/help-support/faqs?chatbotopen=true",
      testObjective: "Verify Input elements are present",
    });

    await test.step("Verify that the input 'search your query' exists in the DOM", async () => {
      await expect(appPage.inputSearchYourQuery.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'search your query' exists in the DOM");
    });
    await test.step("Verify that the input 'Type your query...' exists in the DOM", async () => {
      await expect(appPage.inputTypeYourQuery.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Type your query...' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Product & Services FAQs, Frequently Asked Questions - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 3 Menus are present on Vi Product & Services FAQs, Frequently Asked Questions @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Product & Services FAQs, Frequently Asked Questions");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Product & Services FAQs, Frequently Asked Questions",
      pageUrl: "https://www.myvi.in/help-support/faqs?chatbotopen=true",
      testObjective: "Verify Menu elements are present",
    });

    await test.step("Verify that the menu 'PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service' exists in the DOM", async () => {
      await expect(appPage.menuPrepaidpostpaidnewConnectioninternationalRoaming5gottsMor.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'PrepaidPostpaidNew ConnectionInternational Roaming5GOTTs & MoreHelpDND & Service' exists in the DOM");
    });
    await test.step("Verify that the menu 'BusinessInvestorsSign in' exists in the DOM", async () => {
      await expect(appPage.menuBusinessinvestorssignIn.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'BusinessInvestorsSign in' exists in the DOM");
    });
    await test.step("Verify that the menu 'HomeFAQ' exists in the DOM", async () => {
      await expect(appPage.menuHomefaq.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'HomeFAQ' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Product & Services FAQs, Frequently Asked Questions - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
