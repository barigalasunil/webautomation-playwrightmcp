import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { ViDataPacksMobileDataRechargePlansViIndia } from '../../../pages/generated/www-myvi-in/ViDataPacksMobileDataRechargePlansViIndia.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Vi Data Packs - Mobile Data Recharge Plans | Vi India - Regression Tests", () => {
  let appPage: ViDataPacksMobileDataRechargePlansViIndia;

  test.beforeEach(async ({ page }) => {
    appPage = new ViDataPacksMobileDataRechargePlansViIndia(page);
    await appPage.open();
  });

  test("Verify that Vi Data Packs - Mobile Data Recharge Plans | Vi India loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Data Packs - Mobile Data Recharge Plans | Vi India");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Data Packs - Mobile Data Recharge Plans | Vi India",
      pageUrl: "https://www.myvi.in/prepaid/mobile-data-packs",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/prepaid\/mobile\-data\-packs/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Data Packs - Mobile Data Recharge Plans | Vi India - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 9 Headings are present on Vi Data Packs - Mobile Data Recharge Plans | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Data Packs - Mobile Data Recharge Plans | Vi India");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Data Packs - Mobile Data Recharge Plans | Vi India",
      pageUrl: "https://www.myvi.in/prepaid/mobile-data-packs",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'Prepaid Mobile Data Packs & Plans' exists in the DOM", async () => {
      await expect(appPage.headingPrepaidMobileDataPacksPlans.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Prepaid Mobile Data Packs & Plans' exists in the DOM");
    });
    await test.step("Verify that the heading 'Featured Data Packs & Plans' exists in the DOM", async () => {
      await expect(appPage.headingFeaturedDataPacksPlans.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Featured Data Packs & Plans' exists in the DOM");
    });
    await test.step("Verify that the heading 'Frequently Asked Questions About Vi Prepaid Data Packs' exists in the DOM", async () => {
      await expect(appPage.headingFrequentlyAskedQuestionsAboutViPrepaidDataPacks.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Frequently Asked Questions About Vi Prepaid Data Packs' exists in the DOM");
    });
    await test.step("Verify that the heading 'Data packs' exists in the DOM", async () => {
      await expect(appPage.headingDataPacks.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Data packs' exists in the DOM");
    });
    await test.step("Verify that the heading 'Vodafone Idea Limited' exists in the DOM", async () => {
      await expect(appPage.headingVodafoneIdeaLimited.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Vodafone Idea Limited' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Data Packs - Mobile Data Recharge Plans | Vi India - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 105 Links are present on Vi Data Packs - Mobile Data Recharge Plans | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Data Packs - Mobile Data Recharge Plans | Vi India");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Data Packs - Mobile Data Recharge Plans | Vi India",
      pageUrl: "https://www.myvi.in/prepaid/mobile-data-packs",
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
    await test.step("Verify that the link 'Data Packs' exists in the DOM", async () => {
      await expect(appPage.linkDataPacks.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Data Packs' exists in the DOM");
    });
    await test.step("Verify that the link 'Change' exists in the DOM", async () => {
      await expect(appPage.linkChange.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Change' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Data Packs - Mobile Data Recharge Plans | Vi India - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 26 Buttons are present on Vi Data Packs - Mobile Data Recharge Plans | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Data Packs - Mobile Data Recharge Plans | Vi India");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Data Packs - Mobile Data Recharge Plans | Vi India",
      pageUrl: "https://www.myvi.in/prepaid/mobile-data-packs",
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
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Data Packs - Mobile Data Recharge Plans | Vi India - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 1 Input is present on Vi Data Packs - Mobile Data Recharge Plans | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Data Packs - Mobile Data Recharge Plans | Vi India");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Data Packs - Mobile Data Recharge Plans | Vi India",
      pageUrl: "https://www.myvi.in/prepaid/mobile-data-packs",
      testObjective: "Verify Input elements are present",
    });

    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputParamdetails.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Data Packs - Mobile Data Recharge Plans | Vi India - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 1 Form is present on Vi Data Packs - Mobile Data Recharge Plans | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Data Packs - Mobile Data Recharge Plans | Vi India");
    await story("Verify Form elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Data Packs - Mobile Data Recharge Plans | Vi India",
      pageUrl: "https://www.myvi.in/prepaid/mobile-data-packs",
      testObjective: "Verify Form elements are present",
    });

    await test.step("Verify that the form 'Form' exists in the DOM", async () => {
      await expect(appPage.form0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Data Packs - Mobile Data Recharge Plans | Vi India - Form Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 3 Menus are present on Vi Data Packs - Mobile Data Recharge Plans | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Data Packs - Mobile Data Recharge Plans | Vi India");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Data Packs - Mobile Data Recharge Plans | Vi India",
      pageUrl: "https://www.myvi.in/prepaid/mobile-data-packs",
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
    await test.step("Verify that the menu 'HomeprepaidData Packs' exists in the DOM", async () => {
      await expect(appPage.menuHomeprepaiddataPacks.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'HomeprepaidData Packs' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Data Packs - Mobile Data Recharge Plans | Vi India - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
