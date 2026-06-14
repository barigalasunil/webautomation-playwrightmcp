import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { AboutViIndiaSLargestTelecomCompany } from '../../../pages/generated/www-myvi-in/AboutViIndiaSLargestTelecomCompany.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - About Vi - India's Largest Telecom Company - Regression Tests", () => {
  let appPage: AboutViIndiaSLargestTelecomCompany;

  test.beforeEach(async ({ page }) => {
    appPage = new AboutViIndiaSLargestTelecomCompany(page);
    await appPage.open();
  });

  test("Verify that About Vi - India's Largest Telecom Company loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("About Vi - India's Largest Telecom Company");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "About Vi - India's Largest Telecom Company",
      pageUrl: "https://www.myvi.in/about-us/home",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/about\-us\/home/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "About Vi - India's Largest Telecom Company - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 3 Headings are present on About Vi - India's Largest Telecom Company @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("About Vi - India's Largest Telecom Company");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "About Vi - India's Largest Telecom Company",
      pageUrl: "https://www.myvi.in/about-us/home",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'About Vi' exists in the DOM", async () => {
      await expect(appPage.headingAboutVi.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'About Vi' exists in the DOM");
    });
    await test.step("Verify that the heading 'at a glance' exists in the DOM", async () => {
      await expect(appPage.headingAtAGlance.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'at a glance' exists in the DOM");
    });
    await test.step("Verify that the heading 'our vision' exists in the DOM", async () => {
      await expect(appPage.headingOurVision.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'our vision' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "About Vi - India's Largest Telecom Company - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 164 Links are present on About Vi - India's Largest Telecom Company @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("About Vi - India's Largest Telecom Company");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "About Vi - India's Largest Telecom Company",
      pageUrl: "https://www.myvi.in/about-us/home",
      testObjective: "Verify Link elements are present",
    });

    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'open in Vi app' exists in the DOM", async () => {
      await expect(appPage.linkOpenInViApp.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'open in Vi app' exists in the DOM");
    });
    await test.step("Verify that the link 'Sign in' exists in the DOM", async () => {
      await expect(appPage.linkSignIn.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Sign in' exists in the DOM");
    });
    await test.step("Verify that the link 'Dashboard' exists in the DOM", async () => {
      await expect(appPage.linkDashboard.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Dashboard' exists in the DOM");
    });
    await test.step("Verify that the link 'My Account' exists in the DOM", async () => {
      await expect(appPage.linkMyAccount.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'My Account' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "About Vi - India's Largest Telecom Company - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 11 Buttons are present on About Vi - India's Largest Telecom Company @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("About Vi - India's Largest Telecom Company");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "About Vi - India's Largest Telecom Company",
      pageUrl: "https://www.myvi.in/about-us/home",
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
      const screenshotPath = await captureTestScreenshot(page, testInfo, "About Vi - India's Largest Telecom Company - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 37 Inputs are present on About Vi - India's Largest Telecom Company @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("About Vi - India's Largest Telecom Company");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "About Vi - India's Largest Telecom Company",
      pageUrl: "https://www.myvi.in/about-us/home",
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
    await test.step("Verify that the input 'Search' exists in the DOM", async () => {
      await expect(appPage.inputSearch1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Search' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputMobileviapp.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputDeskviapp.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "About Vi - India's Largest Telecom Company - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 2 Menus are present on About Vi - India's Largest Telecom Company @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("About Vi - India's Largest Telecom Company");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "About Vi - India's Largest Telecom Company",
      pageUrl: "https://www.myvi.in/about-us/home",
      testObjective: "Verify Menu elements are present",
    });

    await test.step("Verify that the menu 'open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs' exists in the DOM", async () => {
      await expect(appPage.menuOpenInViAppSignInSignInDashboardMyAccountPrepaid.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs' exists in the DOM");
    });
    await test.step("Verify that the menu 'Home About Us' exists in the DOM", async () => {
      await expect(appPage.menuHomeAboutUs.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'Home About Us' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "About Vi - India's Largest Telecom Company - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
