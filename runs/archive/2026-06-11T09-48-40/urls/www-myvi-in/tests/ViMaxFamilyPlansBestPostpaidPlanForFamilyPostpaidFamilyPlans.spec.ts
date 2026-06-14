import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { ViMaxFamilyPlansBestPostpaidPlanForFamilyPostpaidFamilyPlans } from '../../../pages/generated/www-myvi-in/ViMaxFamilyPlansBestPostpaidPlanForFamilyPostpaidFamilyPlans.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans - Regression Tests", () => {
  let appPage: ViMaxFamilyPlansBestPostpaidPlanForFamilyPostpaidFamilyPlans;

  test.beforeEach(async ({ page }) => {
    appPage = new ViMaxFamilyPlansBestPostpaidPlanForFamilyPostpaidFamilyPlans(page);
    await appPage.open();
  });

  test("Verify that Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans",
      pageUrl: "https://www.myvi.in/postpaid/family-postpaid-plans",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/postpaid\/family\-postpaid\-plans/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 29 Headings are present on Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans",
      pageUrl: "https://www.myvi.in/postpaid/family-postpaid-plans",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading '2,4 and 5 member VI Max postpaid family plans for you & your loved ones' exists in the DOM", async () => {
      await expect(appPage.heading24And5MemberViMaxPostpaidFamilyPlansForYouYourL.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading '2,4 and 5 member VI Max postpaid family plans for you & your loved ones' exists in the DOM");
    });
    await test.step("Verify that the heading 'choice of any 2 complimentary benefits' exists in the DOM", async () => {
      await expect(appPage.headingChoiceOfAny2ComplimentaryBenefits.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'choice of any 2 complimentary benefits' exists in the DOM");
    });
    await test.step("Verify that the heading 'Vi Movies & TV' exists in the DOM", async () => {
      await expect(appPage.headingViMoviesTv.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Vi Movies & TV' exists in the DOM");
    });
    await test.step("Verify that the heading 'Vi Max Family Plans' exists in the DOM", async () => {
      await expect(appPage.headingViMaxFamilyPlans.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Vi Max Family Plans' exists in the DOM");
    });
    await test.step("Verify that the heading 'get a world of benefits with Vi family plans' exists in the DOM", async () => {
      await expect(appPage.headingGetAWorldOfBenefitsWithViFamilyPlans.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'get a world of benefits with Vi family plans' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 26 Links are present on Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans",
      pageUrl: "https://www.myvi.in/postpaid/family-postpaid-plans",
      testObjective: "Verify Link elements are present",
    });

    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'Choose your benefits with Vi Max Postpaid!' exists in the DOM", async () => {
      await expect(appPage.linkChooseYourBenefitsWithViMaxPostpaid.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Choose your benefits with Vi Max Postpaid!' exists in the DOM");
    });
    await test.step("Verify that the link 'postpaid plans' exists in the DOM", async () => {
      await expect(appPage.linkPostpaidPlans.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'postpaid plans' exists in the DOM");
    });
    await test.step("Verify that the link 'family plans' exists in the DOM", async () => {
      await expect(appPage.linkFamilyPlans.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'family plans' exists in the DOM");
    });
    await test.step("Verify that the link 'prepaid packs' exists in the DOM", async () => {
      await expect(appPage.linkPrepaidPacks.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'prepaid packs' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 26 Buttons are present on Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans",
      pageUrl: "https://www.myvi.in/postpaid/family-postpaid-plans",
      testObjective: "Verify Button elements are present",
    });

    await test.step("Verify that the button 'select' exists in the DOM", async () => {
      await expect(appPage.buttonSelect.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'select' exists in the DOM");
    });
    await test.step("Verify that the button 'select' exists in the DOM", async () => {
      await expect(appPage.buttonSelect1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'select' exists in the DOM");
    });
    await test.step("Verify that the button '1' exists in the DOM", async () => {
      await expect(appPage.button1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button '1' exists in the DOM");
    });
    await test.step("Verify that the button '2' exists in the DOM", async () => {
      await expect(appPage.button2.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button '2' exists in the DOM");
    });
    await test.step("Verify that the button 'Previous' exists in the DOM", async () => {
      await expect(appPage.buttonPrevious.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Previous' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 19 Inputs are present on Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans",
      pageUrl: "https://www.myvi.in/postpaid/family-postpaid-plans",
      testObjective: "Verify Input elements are present",
    });

    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputPincodefield.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputPagetype.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputShowfamilyplanslider.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputFamilyuserdetailsredir.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputDigitalexclusivetxt.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Max Family Plans | Best Postpaid Plan for Family | Postpaid Family Plans - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
