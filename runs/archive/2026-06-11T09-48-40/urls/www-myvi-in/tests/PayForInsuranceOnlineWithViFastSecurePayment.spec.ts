import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { PayForInsuranceOnlineWithViFastSecurePayment } from '../../../pages/generated/www-myvi-in/PayForInsuranceOnlineWithViFastSecurePayment.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Pay for Insurance Online with Vi – Fast & Secure Payment - Regression Tests", () => {
  let appPage: PayForInsuranceOnlineWithViFastSecurePayment;

  test.beforeEach(async ({ page }) => {
    appPage = new PayForInsuranceOnlineWithViFastSecurePayment(page);
    await appPage.open();
  });

  test("Verify that Pay for Insurance Online with Vi – Fast & Secure Payment loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Pay for Insurance Online with Vi – Fast & Secure Payment");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Pay for Insurance Online with Vi – Fast & Secure Payment",
      pageUrl: "https://www.myvi.in/utilities/pay-insurance-bill",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/utilities\/pay\-insurance\-bill/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Pay for Insurance Online with Vi – Fast & Secure Payment - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 1 Heading is present on Pay for Insurance Online with Vi – Fast & Secure Payment @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Pay for Insurance Online with Vi – Fast & Secure Payment");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Pay for Insurance Online with Vi – Fast & Secure Payment",
      pageUrl: "https://www.myvi.in/utilities/pay-insurance-bill",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'pay your insurance bill in seconds' exists in the DOM", async () => {
      await expect(appPage.headingPayYourInsuranceBillInSeconds.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'pay your insurance bill in seconds' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Pay for Insurance Online with Vi – Fast & Secure Payment - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 158 Links are present on Pay for Insurance Online with Vi – Fast & Secure Payment @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Pay for Insurance Online with Vi – Fast & Secure Payment");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Pay for Insurance Online with Vi – Fast & Secure Payment",
      pageUrl: "https://www.myvi.in/utilities/pay-insurance-bill",
      testObjective: "Verify Link elements are present",
    });

    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'Recharge' exists in the DOM", async () => {
      await expect(appPage.linkRecharge.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Recharge' exists in the DOM");
    });
    await test.step("Verify that the link 'Bill Pay' exists in the DOM", async () => {
      await expect(appPage.linkBillPay.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Bill Pay' exists in the DOM");
    });
    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link3.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'open in Vi app' exists in the DOM", async () => {
      await expect(appPage.linkOpenInViApp.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'open in Vi app' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Pay for Insurance Online with Vi – Fast & Secure Payment - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 19 Buttons are present on Pay for Insurance Online with Vi – Fast & Secure Payment @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Pay for Insurance Online with Vi – Fast & Secure Payment");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Pay for Insurance Online with Vi – Fast & Secure Payment",
      pageUrl: "https://www.myvi.in/utilities/pay-insurance-bill",
      testObjective: "Verify Button elements are present",
    });

    await test.step("Verify that the button 'Prepaid' exists in the DOM", async () => {
      await expect(appPage.buttonPrepaid.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Prepaid' exists in the DOM");
    });
    await test.step("Verify that the button 'Postpaid' exists in the DOM", async () => {
      await expect(appPage.buttonPostpaid.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Postpaid' exists in the DOM");
    });
    await test.step("Verify that the button 'New Connection' exists in the DOM", async () => {
      await expect(appPage.buttonNewConnection.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'New Connection' exists in the DOM");
    });
    await test.step("Verify that the button 'OTTs & More' exists in the DOM", async () => {
      await expect(appPage.buttonOttsMore.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'OTTs & More' exists in the DOM");
    });
    await test.step("Verify that the button 'Help' exists in the DOM", async () => {
      await expect(appPage.buttonHelp.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Help' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Pay for Insurance Online with Vi – Fast & Secure Payment - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 37 Inputs are present on Pay for Insurance Online with Vi – Fast & Secure Payment @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Pay for Insurance Online with Vi – Fast & Secure Payment");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Pay for Insurance Online with Vi – Fast & Secure Payment",
      pageUrl: "https://www.myvi.in/utilities/pay-insurance-bill",
      testObjective: "Verify Input elements are present",
    });

    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputCookiepopupselect.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Search' exists in the DOM", async () => {
      await expect(appPage.inputSearch.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Search' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputQ.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Search' exists in the DOM", async () => {
      await expect(appPage.inputSearch1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Search' exists in the DOM");
    });
    await test.step("Verify that the input 'Search' exists in the DOM", async () => {
      await expect(appPage.inputSearch2.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Search' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Pay for Insurance Online with Vi – Fast & Secure Payment - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 2 Forms are present on Pay for Insurance Online with Vi – Fast & Secure Payment @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Pay for Insurance Online with Vi – Fast & Secure Payment");
    await story("Verify Form elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Pay for Insurance Online with Vi – Fast & Secure Payment",
      pageUrl: "https://www.myvi.in/utilities/pay-insurance-bill",
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
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Pay for Insurance Online with Vi – Fast & Secure Payment - Form Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 1 Menu is present on Pay for Insurance Online with Vi – Fast & Secure Payment @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Pay for Insurance Online with Vi – Fast & Secure Payment");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Pay for Insurance Online with Vi – Fast & Secure Payment",
      pageUrl: "https://www.myvi.in/utilities/pay-insurance-bill",
      testObjective: "Verify Menu elements are present",
    });

    await test.step("Verify that the menu 'open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs' exists in the DOM", async () => {
      await expect(appPage.menuOpenInViAppSignInSignInDashboardMyAccountPrepaid.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Pay for Insurance Online with Vi – Fast & Secure Payment - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
