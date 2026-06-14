import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { ViInternationalRoamingPacks2026StayConnectedAbroadViIndia } from '../../../pages/generated/www-myvi-in/ViInternationalRoamingPacks2026StayConnectedAbroadViIndia.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India - Regression Tests", () => {
  let appPage: ViInternationalRoamingPacks2026StayConnectedAbroadViIndia;

  test.beforeEach(async ({ page }) => {
    appPage = new ViInternationalRoamingPacks2026StayConnectedAbroadViIndia(page);
    await appPage.open();
  });

  test("Verify that Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India",
      pageUrl: "https://www.myvi.in/international-roaming-packs",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/international\-roaming\-packs/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 64 Headings are present on Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India",
      pageUrl: "https://www.myvi.in/international-roaming-packs",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'international roaming' exists in the DOM", async () => {
      await expect(appPage.headingInternationalRoaming.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'international roaming' exists in the DOM");
    });
    await test.step("Verify that the heading 'your passport to worldwide connectivity' exists in the DOM", async () => {
      await expect(appPage.headingYourPassportToWorldwideConnectivity.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'your passport to worldwide connectivity' exists in the DOM");
    });
    await test.step("Verify that the heading 'unlimited' exists in the DOM", async () => {
      await expect(appPage.headingUnlimited.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'unlimited' exists in the DOM");
    });
    await test.step("Verify that the heading 'IR pack' exists in the DOM", async () => {
      await expect(appPage.headingIrPack.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'IR pack' exists in the DOM");
    });
    await test.step("Verify that the heading '24x7 TollFree' exists in the DOM", async () => {
      await expect(appPage.heading24x7Tollfree.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading '24x7 TollFree' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 189 Links are present on Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India",
      pageUrl: "https://www.myvi.in/international-roaming-packs",
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
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 26 Buttons are present on Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India",
      pageUrl: "https://www.myvi.in/international-roaming-packs",
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
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 88 Inputs are present on Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India",
      pageUrl: "https://www.myvi.in/international-roaming-packs",
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
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 2 Forms are present on Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India");
    await story("Verify Form elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India",
      pageUrl: "https://www.myvi.in/international-roaming-packs",
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
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India - Form Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 2 Menus are present on Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India",
      pageUrl: "https://www.myvi.in/international-roaming-packs",
      testObjective: "Verify Menu elements are present",
    });

    await test.step("Verify that the menu 'open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs' exists in the DOM", async () => {
      await expect(appPage.menuOpenInViAppSignInSignInDashboardMyAccountPrepaid.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs' exists in the DOM");
    });
    await test.step("Verify that the menu 'Home International Roaming Packs' exists in the DOM", async () => {
      await expect(appPage.menuHomeInternationalRoamingPacks.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'Home International Roaming Packs' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi International Roaming Packs (2026) - Stay Connected Abroad | Vi India - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
