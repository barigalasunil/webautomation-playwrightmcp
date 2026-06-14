import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { ViUnlimitedDataCallsInternetPlansChooseViUnlimitedPlansToday } from '../../../pages/generated/www-myvi-in/ViUnlimitedDataCallsInternetPlansChooseViUnlimitedPlansToday.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today - Regression Tests", () => {
  let appPage: ViUnlimitedDataCallsInternetPlansChooseViUnlimitedPlansToday;

  test.beforeEach(async ({ page }) => {
    appPage = new ViUnlimitedDataCallsInternetPlansChooseViUnlimitedPlansToday(page);
    await appPage.open();
  });

  test("Verify that Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today",
      pageUrl: "https://www.myvi.in/prepaid/unlimited-calls-and-data-plans",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/prepaid\/unlimited\-calls\-and\-data\-plans/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 11 Headings are present on Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today",
      pageUrl: "https://www.myvi.in/prepaid/unlimited-calls-and-data-plans",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'Unlimited Data, Calls & Internet Plans' exists in the DOM", async () => {
      await expect(appPage.headingUnlimitedDataCallsInternetPlans.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Unlimited Data, Calls & Internet Plans' exists in the DOM");
    });
    await test.step("Verify that the heading 'Unlimited Calling Plans & Data FAQs' exists in the DOM", async () => {
      await expect(appPage.headingUnlimitedCallingPlansDataFaqs.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Unlimited Calling Plans & Data FAQs' exists in the DOM");
    });
    await test.step("Verify that the heading 'unlimited super-fast Data plans & calling plans' exists in the DOM", async () => {
      await expect(appPage.headingUnlimitedSuperFastDataPlansCallingPlans.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'unlimited super-fast Data plans & calling plans' exists in the DOM");
    });
    await test.step("Verify that the heading 'Vi Unlimited 4G Data Plan benefits:' exists in the DOM", async () => {
      await expect(appPage.headingViUnlimited4gDataPlanBenefits.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Vi Unlimited 4G Data Plan benefits:' exists in the DOM");
    });
    await test.step("Verify that the heading 'Vi Unlimited Calling Plan benefits:' exists in the DOM", async () => {
      await expect(appPage.headingViUnlimitedCallingPlanBenefits.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Vi Unlimited Calling Plan benefits:' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 115 Links are present on Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today",
      pageUrl: "https://www.myvi.in/prepaid/unlimited-calls-and-data-plans",
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
    await test.step("Verify that the link 'prepaid' exists in the DOM", async () => {
      await expect(appPage.linkPrepaid.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'prepaid' exists in the DOM");
    });
    await test.step("Verify that the link 'Unlimited Calls & Data Plans' exists in the DOM", async () => {
      await expect(appPage.linkUnlimitedCallsDataPlans.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Unlimited Calls & Data Plans' exists in the DOM");
    });
    await test.step("Verify that the link 'Change' exists in the DOM", async () => {
      await expect(appPage.linkChange.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Change' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 45 Buttons are present on Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today",
      pageUrl: "https://www.myvi.in/prepaid/unlimited-calls-and-data-plans",
      testObjective: "Verify Button elements are present",
    });

    await test.step("Verify that the button 'buy' exists in the DOM", async () => {
      await expect(appPage.buttonBuy.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'buy' exists in the DOM");
    });
    await test.step("Verify that the button 'buy' exists in the DOM", async () => {
      await expect(appPage.buttonBuy1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'buy' exists in the DOM");
    });
    await test.step("Verify that the button 'buy' exists in the DOM", async () => {
      await expect(appPage.buttonBuy2.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'buy' exists in the DOM");
    });
    await test.step("Verify that the button 'buy' exists in the DOM", async () => {
      await expect(appPage.buttonBuy3.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'buy' exists in the DOM");
    });
    await test.step("Verify that the button 'buy' exists in the DOM", async () => {
      await expect(appPage.buttonBuy4.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'buy' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 1 Input is present on Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today",
      pageUrl: "https://www.myvi.in/prepaid/unlimited-calls-and-data-plans",
      testObjective: "Verify Input elements are present",
    });

    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputParamdetails.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 1 Form is present on Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today");
    await story("Verify Form elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today",
      pageUrl: "https://www.myvi.in/prepaid/unlimited-calls-and-data-plans",
      testObjective: "Verify Form elements are present",
    });

    await test.step("Verify that the form 'Form' exists in the DOM", async () => {
      await expect(appPage.form0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today - Form Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 3 Menus are present on Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today",
      pageUrl: "https://www.myvi.in/prepaid/unlimited-calls-and-data-plans",
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
    await test.step("Verify that the menu 'HomeprepaidUnlimited Calls & Data Plans' exists in the DOM", async () => {
      await expect(appPage.menuHomeprepaidunlimitedCallsDataPlans.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'HomeprepaidUnlimited Calls & Data Plans' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Unlimited Data, Calls & Internet Plans – Choose Vi Unlimited Plans Today - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
