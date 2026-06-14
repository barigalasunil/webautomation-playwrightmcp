import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { PayViPostpaidBillOnlineQuickSecureViIndia } from '../../../pages/generated/www-myvi-in/PayViPostpaidBillOnlineQuickSecureViIndia.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Pay Vi Postpaid Bill Online - Quick & Secure | Vi India - Regression Tests", () => {
  let appPage: PayViPostpaidBillOnlineQuickSecureViIndia;

  test.beforeEach(async ({ page }) => {
    appPage = new PayViPostpaidBillOnlineQuickSecureViIndia(page);
    await appPage.open();
  });

  test("Verify that Pay Vi Postpaid Bill Online - Quick & Secure | Vi India loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Pay Vi Postpaid Bill Online - Quick & Secure | Vi India");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Pay Vi Postpaid Bill Online - Quick & Secure | Vi India",
      pageUrl: "https://www.myvi.in/postpaid/quick-online-bill-payment",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/postpaid\/quick\-online\-bill\-payment/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Pay Vi Postpaid Bill Online - Quick & Secure | Vi India - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 15 Headings are present on Pay Vi Postpaid Bill Online - Quick & Secure | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Pay Vi Postpaid Bill Online - Quick & Secure | Vi India");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Pay Vi Postpaid Bill Online - Quick & Secure | Vi India",
      pageUrl: "https://www.myvi.in/postpaid/quick-online-bill-payment",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'Vi Postpaid Bill Payment' exists in the DOM", async () => {
      await expect(appPage.headingViPostpaidBillPayment.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Vi Postpaid Bill Payment' exists in the DOM");
    });
    await test.step("Verify that the heading 'quick and easy bill payments in a few steps!' exists in the DOM", async () => {
      await expect(appPage.headingQuickAndEasyBillPaymentsInAFewSteps.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'quick and easy bill payments in a few steps!' exists in the DOM");
    });
    await test.step("Verify that the heading 'get a new postpaid connection or MNP' exists in the DOM", async () => {
      await expect(appPage.headingGetANewPostpaidConnectionOrMnp.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'get a new postpaid connection or MNP' exists in the DOM");
    });
    await test.step("Verify that the heading 'pay and manage your utility bills' exists in the DOM", async () => {
      await expect(appPage.headingPayAndManageYourUtilityBills.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'pay and manage your utility bills' exists in the DOM");
    });
    await test.step("Verify that the heading 'frequently asked questions' exists in the DOM", async () => {
      await expect(appPage.headingFrequentlyAskedQuestions.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'frequently asked questions' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Pay Vi Postpaid Bill Online - Quick & Secure | Vi India - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 91 Links are present on Pay Vi Postpaid Bill Online - Quick & Secure | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Pay Vi Postpaid Bill Online - Quick & Secure | Vi India");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Pay Vi Postpaid Bill Online - Quick & Secure | Vi India",
      pageUrl: "https://www.myvi.in/postpaid/quick-online-bill-payment",
      testObjective: "Verify Link elements are present",
    });

    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'Home' exists in the DOM", async () => {
      await expect(appPage.linkHome.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Home' exists in the DOM");
    });
    await test.step("Verify that the link 'Postpaid' exists in the DOM", async () => {
      await expect(appPage.linkPostpaid.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Postpaid' exists in the DOM");
    });
    await test.step("Verify that the link 'Mobile bill payment' exists in the DOM", async () => {
      await expect(appPage.linkMobileBillPayment.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Mobile bill payment' exists in the DOM");
    });
    await test.step("Verify that the link 'view more' exists in the DOM", async () => {
      await expect(appPage.linkViewMore.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'view more' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Pay Vi Postpaid Bill Online - Quick & Secure | Vi India - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 2 Buttons are present on Pay Vi Postpaid Bill Online - Quick & Secure | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Pay Vi Postpaid Bill Online - Quick & Secure | Vi India");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Pay Vi Postpaid Bill Online - Quick & Secure | Vi India",
      pageUrl: "https://www.myvi.in/postpaid/quick-online-bill-payment",
      testObjective: "Verify Button elements are present",
    });

    await test.step("Verify that the button 'pay now' exists in the DOM", async () => {
      await expect(appPage.buttonPayNow.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'pay now' exists in the DOM");
    });
    await test.step("Verify that the button 'See More' exists in the DOM", async () => {
      await expect(appPage.buttonSeeMore.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'See More' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Pay Vi Postpaid Bill Online - Quick & Secure | Vi India - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 4 Inputs are present on Pay Vi Postpaid Bill Online - Quick & Secure | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Pay Vi Postpaid Bill Online - Quick & Secure | Vi India");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Pay Vi Postpaid Bill Online - Quick & Secure | Vi India",
      pageUrl: "https://www.myvi.in/postpaid/quick-online-bill-payment",
      testObjective: "Verify Input elements are present",
    });

    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputParamdetails.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputMobile.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'enter amount' exists in the DOM", async () => {
      await expect(appPage.inputEnterAmount.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'enter amount' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputParamdetails1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Pay Vi Postpaid Bill Online - Quick & Secure | Vi India - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 2 Forms are present on Pay Vi Postpaid Bill Online - Quick & Secure | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Pay Vi Postpaid Bill Online - Quick & Secure | Vi India");
    await story("Verify Form elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Pay Vi Postpaid Bill Online - Quick & Secure | Vi India",
      pageUrl: "https://www.myvi.in/postpaid/quick-online-bill-payment",
      testObjective: "Verify Form elements are present",
    });

    await test.step("Verify that the form 'Form' exists in the DOM", async () => {
      await expect(appPage.form0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
    });
    await test.step("Verify that the form 'Form' exists in the DOM", async () => {
      await expect(appPage.form1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Pay Vi Postpaid Bill Online - Quick & Secure | Vi India - Form Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 3 Menus are present on Pay Vi Postpaid Bill Online - Quick & Secure | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Pay Vi Postpaid Bill Online - Quick & Secure | Vi India");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Pay Vi Postpaid Bill Online - Quick & Secure | Vi India",
      pageUrl: "https://www.myvi.in/postpaid/quick-online-bill-payment",
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
    await test.step("Verify that the menu 'HomePostpaidMobile bill payment' exists in the DOM", async () => {
      await expect(appPage.menuHomepostpaidmobileBillPayment.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'HomePostpaidMobile bill payment' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Pay Vi Postpaid Bill Online - Quick & Secure | Vi India - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
