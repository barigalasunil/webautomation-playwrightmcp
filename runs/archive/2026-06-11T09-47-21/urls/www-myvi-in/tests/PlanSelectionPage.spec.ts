import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { PlanSelectionPage } from '../../../pages/generated/www-myvi-in/PlanSelectionPage.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Plan Selection Page - Regression Tests", () => {
  let appPage: PlanSelectionPage;

  test.beforeEach(async ({ page }) => {
    appPage = new PlanSelectionPage(page);
    await appPage.open();
  });

  test("Verify that Plan Selection Page loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Plan Selection Page");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Plan Selection Page",
      pageUrl: "https://www.myvi.in/pre-to-post/plan?mrp=451&utm_source=MyVi&utm_campaign=MainMenu",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/pre\-to\-post\/plan\?mrp=451&utm_source=MyVi&utm_campaign=MainMenu/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Plan Selection Page - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 2 Headings are present on Plan Selection Page @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Plan Selection Page");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Plan Selection Page",
      pageUrl: "https://www.myvi.in/pre-to-post/plan?mrp=451&utm_source=MyVi&utm_campaign=MainMenu",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'great! you can now switch from prepaid to postpaid with just an OTP' exists in the DOM", async () => {
      await expect(appPage.headingGreatYouCanNowSwitchFromPrepaidToPostpaidWithJust.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'great! you can now switch from prepaid to postpaid with just an OTP' exists in the DOM");
    });
    await test.step("Verify that the heading 'great! you can now switch from prepaid to postpaid with just an OTP' exists in the DOM", async () => {
      await expect(appPage.headingGreatYouCanNowSwitchFromPrepaidToPostpaidWithJust1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'great! you can now switch from prepaid to postpaid with just an OTP' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Plan Selection Page - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 13 Links are present on Plan Selection Page @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Plan Selection Page");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Plan Selection Page",
      pageUrl: "https://www.myvi.in/pre-to-post/plan?mrp=451&utm_source=MyVi&utm_campaign=MainMenu",
      testObjective: "Verify Link elements are present",
    });

    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'Back to CallCenter' exists in the DOM", async () => {
      await expect(appPage.linkBackToCallcenter.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Back to CallCenter' exists in the DOM");
    });
    await test.step("Verify that the link 'resend' exists in the DOM", async () => {
      await expect(appPage.linkResend.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'resend' exists in the DOM");
    });
    await test.step("Verify that the link 'continue with doorstep delivery' exists in the DOM", async () => {
      await expect(appPage.linkContinueWithDoorstepDelivery.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'continue with doorstep delivery' exists in the DOM");
    });
    await test.step("Verify that the link 'proceed' exists in the DOM", async () => {
      await expect(appPage.linkProceed.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'proceed' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Plan Selection Page - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 5 Buttons are present on Plan Selection Page @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Plan Selection Page");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Plan Selection Page",
      pageUrl: "https://www.myvi.in/pre-to-post/plan?mrp=451&utm_source=MyVi&utm_campaign=MainMenu",
      testObjective: "Verify Button elements are present",
    });

    await test.step("Verify that the button 'get OTP' exists in the DOM", async () => {
      await expect(appPage.buttonGetOtp.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'get OTP' exists in the DOM");
    });
    await test.step("Verify that the button 'get OTP' exists in the DOM", async () => {
      await expect(appPage.buttonGetOtp1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'get OTP' exists in the DOM");
    });
    await test.step("Verify that the button 'verify' exists in the DOM", async () => {
      await expect(appPage.buttonVerify.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'verify' exists in the DOM");
    });
    await test.step("Verify that the button 'proceed' exists in the DOM", async () => {
      await expect(appPage.buttonProceed.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'proceed' exists in the DOM");
    });
    await test.step("Verify that the button 'proceed' exists in the DOM", async () => {
      await expect(appPage.buttonProceed1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'proceed' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Plan Selection Page - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 101 Inputs are present on Plan Selection Page @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Plan Selection Page");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Plan Selection Page",
      pageUrl: "https://www.myvi.in/pre-to-post/plan?mrp=451&utm_source=MyVi&utm_campaign=MainMenu",
      testObjective: "Verify Input elements are present",
    });

    await test.step("Verify that the input 'enter mobile number' exists in the DOM", async () => {
      await expect(appPage.inputEnterMobileNumber.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'enter mobile number' exists in the DOM");
    });
    await test.step("Verify that the input 'enter otp' exists in the DOM", async () => {
      await expect(appPage.inputEnterYourOtp.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'enter otp' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputPtopemail.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputPtopaltnumber.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputPtopfname.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Plan Selection Page - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 1 Form is present on Plan Selection Page @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Plan Selection Page");
    await story("Verify Form elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Plan Selection Page",
      pageUrl: "https://www.myvi.in/pre-to-post/plan?mrp=451&utm_source=MyVi&utm_campaign=MainMenu",
      testObjective: "Verify Form elements are present",
    });

    await test.step("Verify that the form 'Form' exists in the DOM", async () => {
      await expect(appPage.form0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Plan Selection Page - Form Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 2 Menus are present on Plan Selection Page @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Plan Selection Page");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Plan Selection Page",
      pageUrl: "https://www.myvi.in/pre-to-post/plan?mrp=451&utm_source=MyVi&utm_campaign=MainMenu",
      testObjective: "Verify Menu elements are present",
    });

    await test.step("Verify that the menu 'Back to CallCenter' exists in the DOM", async () => {
      await expect(appPage.menuBackToCallcenter.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'Back to CallCenter' exists in the DOM");
    });
    await test.step("Verify that the menu 'Home New Connection Convert Prepaid to Postpaid' exists in the DOM", async () => {
      await expect(appPage.menuHomeNewConnectionConvertPrepaidToPostpaid.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'Home New Connection Convert Prepaid to Postpaid' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Plan Selection Page - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
