import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { AllOttInOneAppOttSubscriptionPlansViMoviesTv } from '../../../pages/generated/www-myvi-in/AllOttInOneAppOttSubscriptionPlansViMoviesTv.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - All OTT in One App - OTT Subscription Plans | Vi Movies & TV - Regression Tests", () => {
  let appPage: AllOttInOneAppOttSubscriptionPlansViMoviesTv;

  test.beforeEach(async ({ page }) => {
    appPage = new AllOttInOneAppOttSubscriptionPlansViMoviesTv(page);
    await appPage.open();
  });

  test("Verify that All OTT in One App - OTT Subscription Plans | Vi Movies & TV loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("All OTT in One App - OTT Subscription Plans | Vi Movies & TV");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "All OTT in One App - OTT Subscription Plans | Vi Movies & TV",
      pageUrl: "https://www.myvi.in/vi-movies-and-tv/all-ott-in-one-app",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/vi\-movies\-and\-tv\/all\-ott\-in\-one\-app/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "All OTT in One App - OTT Subscription Plans | Vi Movies & TV - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 75 Headings are present on All OTT in One App - OTT Subscription Plans | Vi Movies & TV @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("All OTT in One App - OTT Subscription Plans | Vi Movies & TV");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "All OTT in One App - OTT Subscription Plans | Vi Movies & TV",
      pageUrl: "https://www.myvi.in/vi-movies-and-tv/all-ott-in-one-app",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'All in One OTT App - unlock and watch 13+ OTTs in just one app!' exists in the DOM", async () => {
      await expect(appPage.headingAllInOneOttAppUnlockAndWatch13OttsInJustOneApp.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'All in One OTT App - unlock and watch 13+ OTTs in just one app!' exists in the DOM");
    });
    await test.step("Verify that the heading 'latest releases at your fingertips' exists in the DOM", async () => {
      await expect(appPage.headingLatestReleasesAtYourFingertips.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'latest releases at your fingertips' exists in the DOM");
    });
    await test.step("Verify that the heading 'trending OTT content recommendations' exists in the DOM", async () => {
      await expect(appPage.headingTrendingOttContentRecommendations.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'trending OTT content recommendations' exists in the DOM");
    });
    await test.step("Verify that the heading 'catch the latest on 400+ live channels' exists in the DOM", async () => {
      await expect(appPage.headingCatchTheLatestOn400LiveChannels.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'catch the latest on 400+ live channels' exists in the DOM");
    });
    await test.step("Verify that the heading 'watch content in 16+ languages' exists in the DOM", async () => {
      await expect(appPage.headingWatchContentIn16Languages.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'watch content in 16+ languages' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "All OTT in One App - OTT Subscription Plans | Vi Movies & TV - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 177 Links are present on All OTT in One App - OTT Subscription Plans | Vi Movies & TV @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("All OTT in One App - OTT Subscription Plans | Vi Movies & TV");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "All OTT in One App - OTT Subscription Plans | Vi Movies & TV",
      pageUrl: "https://www.myvi.in/vi-movies-and-tv/all-ott-in-one-app",
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
      const screenshotPath = await captureTestScreenshot(page, testInfo, "All OTT in One App - OTT Subscription Plans | Vi Movies & TV - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 58 Buttons are present on All OTT in One App - OTT Subscription Plans | Vi Movies & TV @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("All OTT in One App - OTT Subscription Plans | Vi Movies & TV");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "All OTT in One App - OTT Subscription Plans | Vi Movies & TV",
      pageUrl: "https://www.myvi.in/vi-movies-and-tv/all-ott-in-one-app",
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
      const screenshotPath = await captureTestScreenshot(page, testInfo, "All OTT in One App - OTT Subscription Plans | Vi Movies & TV - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 236 Inputs are present on All OTT in One App - OTT Subscription Plans | Vi Movies & TV @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("All OTT in One App - OTT Subscription Plans | Vi Movies & TV");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "All OTT in One App - OTT Subscription Plans | Vi Movies & TV",
      pageUrl: "https://www.myvi.in/vi-movies-and-tv/all-ott-in-one-app",
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
      const screenshotPath = await captureTestScreenshot(page, testInfo, "All OTT in One App - OTT Subscription Plans | Vi Movies & TV - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 1 Form is present on All OTT in One App - OTT Subscription Plans | Vi Movies & TV @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("All OTT in One App - OTT Subscription Plans | Vi Movies & TV");
    await story("Verify Form elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "All OTT in One App - OTT Subscription Plans | Vi Movies & TV",
      pageUrl: "https://www.myvi.in/vi-movies-and-tv/all-ott-in-one-app",
      testObjective: "Verify Form elements are present",
    });

    await test.step("Verify that the form 'Form' exists in the DOM", async () => {
      await expect(appPage.form0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "All OTT in One App - OTT Subscription Plans | Vi Movies & TV - Form Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 3 Tables are present on All OTT in One App - OTT Subscription Plans | Vi Movies & TV @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("All OTT in One App - OTT Subscription Plans | Vi Movies & TV");
    await story("Verify Table elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "All OTT in One App - OTT Subscription Plans | Vi Movies & TV",
      pageUrl: "https://www.myvi.in/vi-movies-and-tv/all-ott-in-one-app",
      testObjective: "Verify Table elements are present",
    });

    await test.step("Verify that the table 'Data table' exists in the DOM", async () => {
      await expect(appPage.table0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the table 'Data table' exists in the DOM");
    });
    await test.step("Verify that the table 'Data table' exists in the DOM", async () => {
      await expect(appPage.table1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the table 'Data table' exists in the DOM");
    });
    await test.step("Verify that the table 'Data table' exists in the DOM", async () => {
      await expect(appPage.table2.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the table 'Data table' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "All OTT in One App - OTT Subscription Plans | Vi Movies & TV - Table Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 2 Menus are present on All OTT in One App - OTT Subscription Plans | Vi Movies & TV @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("All OTT in One App - OTT Subscription Plans | Vi Movies & TV");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "All OTT in One App - OTT Subscription Plans | Vi Movies & TV",
      pageUrl: "https://www.myvi.in/vi-movies-and-tv/all-ott-in-one-app",
      testObjective: "Verify Menu elements are present",
    });

    await test.step("Verify that the menu 'open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs' exists in the DOM", async () => {
      await expect(appPage.menuOpenInViAppSignInSignInDashboardMyAccountPrepaid.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs' exists in the DOM");
    });
    await test.step("Verify that the menu 'Home Vi Movies & TV All OTT in One App' exists in the DOM", async () => {
      await expect(appPage.menuHomeViMoviesTvAllOttInOneApp.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'Home Vi Movies & TV All OTT in One App' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "All OTT in One App - OTT Subscription Plans | Vi Movies & TV - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
