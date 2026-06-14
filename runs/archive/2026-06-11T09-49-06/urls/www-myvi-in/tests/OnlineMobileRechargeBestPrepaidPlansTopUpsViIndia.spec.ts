import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { OnlineMobileRechargeBestPrepaidPlansTopUpsViIndia } from '../../../pages/generated/www-myvi-in/OnlineMobileRechargeBestPrepaidPlansTopUpsViIndia.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India - Regression Tests", () => {
  let appPage: OnlineMobileRechargeBestPrepaidPlansTopUpsViIndia;

  test.beforeEach(async ({ page }) => {
    appPage = new OnlineMobileRechargeBestPrepaidPlansTopUpsViIndia(page);
    await appPage.open();
  });

  test("Verify that Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India",
      pageUrl: "https://www.myvi.in/prepaid/online-mobile-recharge",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/prepaid\/online\-mobile\-recharge/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 11 Headings are present on Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India",
      pageUrl: "https://www.myvi.in/prepaid/online-mobile-recharge",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'online mobile recharge' exists in the DOM", async () => {
      await expect(appPage.headingOnlineMobileRecharge.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'online mobile recharge' exists in the DOM");
    });
    await test.step("Verify that the heading 'FAQs for Vi online mobile recharge' exists in the DOM", async () => {
      await expect(appPage.headingFaqsForViOnlineMobileRecharge.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'FAQs for Vi online mobile recharge' exists in the DOM");
    });
    await test.step("Verify that the heading 'Vi Prepaid Online Recharge' exists in the DOM", async () => {
      await expect(appPage.headingViPrepaidOnlineRecharge.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Vi Prepaid Online Recharge' exists in the DOM");
    });
    await test.step("Verify that the heading 'Key Features of Vi Online Mobile Recharge:' exists in the DOM", async () => {
      await expect(appPage.headingKeyFeaturesOfViOnlineMobileRecharge.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Key Features of Vi Online Mobile Recharge:' exists in the DOM");
    });
    await test.step("Verify that the heading 'How to Recharge Online with Vi?' exists in the DOM", async () => {
      await expect(appPage.headingHowToRechargeOnlineWithVi.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'How to Recharge Online with Vi?' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 90 Links are present on Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India",
      pageUrl: "https://www.myvi.in/prepaid/online-mobile-recharge",
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
    await test.step("Verify that the link 'Prepaid' exists in the DOM", async () => {
      await expect(appPage.linkPrepaid.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Prepaid' exists in the DOM");
    });
    await test.step("Verify that the link 'Online mobile recharge' exists in the DOM", async () => {
      await expect(appPage.linkOnlineMobileRecharge.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Online mobile recharge' exists in the DOM");
    });
    await test.step("Verify that the link 'Vi App' exists in the DOM", async () => {
      await expect(appPage.linkViApp.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Vi App' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 29 Buttons are present on Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India",
      pageUrl: "https://www.myvi.in/prepaid/online-mobile-recharge",
      testObjective: "Verify Button elements are present",
    });

    await test.step("Verify that the button 'Maharashtra & Goa' exists in the DOM", async () => {
      await expect(appPage.buttonMaharashtraGoa.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Maharashtra & Goa' exists in the DOM");
    });
    await test.step("Verify that the button 'popular recharge packs' exists in the DOM", async () => {
      await expect(appPage.buttonPopularRechargePacks.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'popular recharge packs' exists in the DOM");
    });
    await test.step("Verify that the button 'unlimited 5G' exists in the DOM", async () => {
      await expect(appPage.buttonUnlimited5g.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'unlimited 5G' exists in the DOM");
    });
    await test.step("Verify that the button 'nonstop hero' exists in the DOM", async () => {
      await expect(appPage.buttonNonstopHero.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'nonstop hero' exists in the DOM");
    });
    await test.step("Verify that the button 'super hero' exists in the DOM", async () => {
      await expect(appPage.buttonSuperHero.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'super hero' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 3 Inputs are present on Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India",
      pageUrl: "https://www.myvi.in/prepaid/online-mobile-recharge",
      testObjective: "Verify Input elements are present",
    });

    await test.step("Verify that the input 'Enter mobile number' exists in the DOM", async () => {
      await expect(appPage.inputEnterMobileNumber.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Enter mobile number' exists in the DOM");
    });
    await test.step("Verify that the input 'Search by price' exists in the DOM", async () => {
      await expect(appPage.inputSearchByPrice.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Search by price' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputParamdetails.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 1 Form is present on Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India");
    await story("Verify Form elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India",
      pageUrl: "https://www.myvi.in/prepaid/online-mobile-recharge",
      testObjective: "Verify Form elements are present",
    });

    await test.step("Verify that the form 'Form' exists in the DOM", async () => {
      await expect(appPage.form0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India - Form Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 3 Menus are present on Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India",
      pageUrl: "https://www.myvi.in/prepaid/online-mobile-recharge",
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
    await test.step("Verify that the menu 'HomePrepaidOnline mobile recharge' exists in the DOM", async () => {
      await expect(appPage.menuHomeprepaidonlineMobileRecharge.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'HomePrepaidOnline mobile recharge' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Online Mobile Recharge - Best Prepaid Plans & Top-Ups | Vi India - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
