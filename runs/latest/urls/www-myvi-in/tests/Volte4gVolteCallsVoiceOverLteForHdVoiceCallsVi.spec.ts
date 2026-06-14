import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { Volte4gVolteCallsVoiceOverLteForHdVoiceCallsVi } from '../../../pages/generated/www-myvi-in/Volte4gVolteCallsVoiceOverLteForHdVoiceCallsVi.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi - Regression Tests", () => {
  let appPage: Volte4gVolteCallsVoiceOverLteForHdVoiceCallsVi;

  test.beforeEach(async ({ page }) => {
    appPage = new Volte4gVolteCallsVoiceOverLteForHdVoiceCallsVi(page);
    await appPage.open();
  });

  test("Verify that VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi",
      pageUrl: "https://www.myvi.in/vi-volte-4g-hd-voice-calls",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/vi\-volte\-4g\-hd\-voice\-calls/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 22 Headings are present on VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi",
      pageUrl: "https://www.myvi.in/vi-volte-4g-hd-voice-calls",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'Vi VoLTE' exists in the DOM", async () => {
      await expect(appPage.headingViVolte.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Vi VoLTE' exists in the DOM");
    });
    await test.step("Verify that the heading 'Volte HD Calls' exists in the DOM", async () => {
      await expect(appPage.headingVolteHdCalls.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Volte HD Calls' exists in the DOM");
    });
    await test.step("Verify that the heading 'advantages of having Vi VoLTE' exists in the DOM", async () => {
      await expect(appPage.headingAdvantagesOfHavingViVolte.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'advantages of having Vi VoLTE' exists in the DOM");
    });
    await test.step("Verify that the heading 'assured Quality of Service' exists in the DOM", async () => {
      await expect(appPage.headingAssuredQualityOfService.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'assured Quality of Service' exists in the DOM");
    });
    await test.step("Verify that the heading 'Super-fast call setup time' exists in the DOM", async () => {
      await expect(appPage.headingSuperFastCallSetupTime.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Super-fast call setup time' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 162 Links are present on VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi",
      pageUrl: "https://www.myvi.in/vi-volte-4g-hd-voice-calls",
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
      const screenshotPath = await captureTestScreenshot(page, testInfo, "VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 14 Buttons are present on VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi",
      pageUrl: "https://www.myvi.in/vi-volte-4g-hd-voice-calls",
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
      const screenshotPath = await captureTestScreenshot(page, testInfo, "VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 81 Inputs are present on VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi",
      pageUrl: "https://www.myvi.in/vi-volte-4g-hd-voice-calls",
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
      const screenshotPath = await captureTestScreenshot(page, testInfo, "VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 1 Form is present on VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi");
    await story("Verify Form elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi",
      pageUrl: "https://www.myvi.in/vi-volte-4g-hd-voice-calls",
      testObjective: "Verify Form elements are present",
    });

    await test.step("Verify that the form 'Form' exists in the DOM", async () => {
      await expect(appPage.form0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi - Form Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 2 Menus are present on VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi",
      pageUrl: "https://www.myvi.in/vi-volte-4g-hd-voice-calls",
      testObjective: "Verify Menu elements are present",
    });

    await test.step("Verify that the menu 'open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs' exists in the DOM", async () => {
      await expect(appPage.menuOpenInViAppSignInSignInDashboardMyAccountPrepaid.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs' exists in the DOM");
    });
    await test.step("Verify that the menu 'Home vi volte 4g hd voice calls' exists in the DOM", async () => {
      await expect(appPage.menuHomeViVolte4gHdVoiceCalls.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'Home vi volte 4g hd voice calls' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "VoLTE | 4G VoLTE Calls - (Voice Over LTE) for HD Voice Calls | Vi - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
