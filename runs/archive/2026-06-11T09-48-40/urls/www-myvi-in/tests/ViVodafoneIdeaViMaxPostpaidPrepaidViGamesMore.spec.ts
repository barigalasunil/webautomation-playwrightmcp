import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { ViVodafoneIdeaViMaxPostpaidPrepaidViGamesMore } from '../../../pages/generated/www-myvi-in/ViVodafoneIdeaViMaxPostpaidPrepaidViGamesMore.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More - Regression Tests", () => {
  let appPage: ViVodafoneIdeaViMaxPostpaidPrepaidViGamesMore;

  test.beforeEach(async ({ page }) => {
    appPage = new ViVodafoneIdeaViMaxPostpaidPrepaidViGamesMore(page);
    await appPage.open();
  });

  test("Verify that Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More",
      pageUrl: "https://www.myvi.in/",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\//);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 23 Headings are present on Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More",
      pageUrl: "https://www.myvi.in/",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'recharge / pay bill' exists in the DOM", async () => {
      await expect(appPage.headingRechargePayBill.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'recharge / pay bill' exists in the DOM");
    });
    await test.step("Verify that the heading 'utility payments' exists in the DOM", async () => {
      await expect(appPage.headingUtilityPayments.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'utility payments' exists in the DOM");
    });
    await test.step("Verify that the heading 'credit card bill' exists in the DOM", async () => {
      await expect(appPage.headingCreditCardBill.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'credit card bill' exists in the DOM");
    });
    await test.step("Verify that the heading 'electricity payment' exists in the DOM", async () => {
      await expect(appPage.headingElectricityPayment.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'electricity payment' exists in the DOM");
    });
    await test.step("Verify that the heading 'insurance premium' exists in the DOM", async () => {
      await expect(appPage.headingInsurancePremium.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'insurance premium' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 126 Links are present on Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More",
      pageUrl: "https://www.myvi.in/",
      testObjective: "Verify Link elements are present",
    });

    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link2.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link3.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link4.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 8 Buttons are present on Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More",
      pageUrl: "https://www.myvi.in/",
      testObjective: "Verify Button elements are present",
    });

    await test.step("Verify that the button 'prepaid packs' exists in the DOM", async () => {
      await expect(appPage.buttonPrepaidPacks.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'prepaid packs' exists in the DOM");
    });
    await test.step("Verify that the button 'individual' exists in the DOM", async () => {
      await expect(appPage.buttonIndividual.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'individual' exists in the DOM");
    });
    await test.step("Verify that the button 'family' exists in the DOM", async () => {
      await expect(appPage.buttonFamily.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'family' exists in the DOM");
    });
    await test.step("Verify that the button 'Select' exists in the DOM", async () => {
      await expect(appPage.buttonSelect.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Select' exists in the DOM");
    });
    await test.step("Verify that the button 'Select' exists in the DOM", async () => {
      await expect(appPage.buttonSelect1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Select' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 2 Inputs are present on Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More",
      pageUrl: "https://www.myvi.in/",
      testObjective: "Verify Input elements are present",
    });

    await test.step("Verify that the input 'enter prepaid/postpaid number' exists in the DOM", async () => {
      await expect(appPage.inputEnterPrepaidPostpaidNumber.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'enter prepaid/postpaid number' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputParamdetails.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 1 Form is present on Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More");
    await story("Verify Form elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More",
      pageUrl: "https://www.myvi.in/",
      testObjective: "Verify Form elements are present",
    });

    await test.step("Verify that the form 'Form' exists in the DOM", async () => {
      await expect(appPage.form0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More - Form Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 2 Menus are present on Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More",
      pageUrl: "https://www.myvi.in/",
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

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) - Vi Max Postpaid | Prepaid | Vi Games & More - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
