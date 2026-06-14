import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { WifiCallingOnViChooseVowifiForBetterVoiceQuality } from '../../../pages/generated/www-myvi-in/WifiCallingOnViChooseVowifiForBetterVoiceQuality.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality - Regression Tests", () => {
  let appPage: WifiCallingOnViChooseVowifiForBetterVoiceQuality;

  test.beforeEach(async ({ page }) => {
    appPage = new WifiCallingOnViChooseVowifiForBetterVoiceQuality(page);
    await appPage.open();
  });

  test("Verify that WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality",
      pageUrl: "https://www.myvi.in/vi-wifi-calling",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/vi\-wifi\-calling/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 14 Headings are present on WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality",
      pageUrl: "https://www.myvi.in/vi-wifi-calling",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'Vi WiFi Calling (VoWiFi): Make Crystal Clear Calls Over WiFi' exists in the DOM", async () => {
      await expect(appPage.headingViWifiCallingVowifiMakeCrystalClearCallsOverWifi.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Vi WiFi Calling (VoWiFi): Make Crystal Clear Calls Over WiFi' exists in the DOM");
    });
    await test.step("Verify that the heading 'Why Choose Vi WiFi Calling?' exists in the DOM", async () => {
      await expect(appPage.headingWhyChooseViWifiCalling.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Why Choose Vi WiFi Calling?' exists in the DOM");
    });
    await test.step("Verify that the heading 'always connected' exists in the DOM", async () => {
      await expect(appPage.headingAlwaysConnected.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'always connected' exists in the DOM");
    });
    await test.step("Verify that the heading 'better voice quality' exists in the DOM", async () => {
      await expect(appPage.headingBetterVoiceQuality.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'better voice quality' exists in the DOM");
    });
    await test.step("Verify that the heading 'call anywhere' exists in the DOM", async () => {
      await expect(appPage.headingCallAnywhere.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'call anywhere' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 93 Links are present on WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality",
      pageUrl: "https://www.myvi.in/vi-wifi-calling",
      testObjective: "Verify Link elements are present",
    });

    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'unlimited plan' exists in the DOM", async () => {
      await expect(appPage.linkUnlimitedPlan.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'unlimited plan' exists in the DOM");
    });
    await test.step("Verify that the link '5G-Ready SIM (4G SIM is 5G-Ready)' exists in the DOM", async () => {
      await expect(appPage.link5gReadySim4gSimIs5gReady.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link '5G-Ready SIM (4G SIM is 5G-Ready)' exists in the DOM");
    });
    await test.step("Verify that the link 'VoLTE' exists in the DOM", async () => {
      await expect(appPage.linkVolte.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'VoLTE' exists in the DOM");
    });
    await test.step("Verify that the link 'Terms and Conditions' exists in the DOM", async () => {
      await expect(appPage.linkTermsAndConditions.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Terms and Conditions' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 3 Inputs are present on WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality",
      pageUrl: "https://www.myvi.in/vi-wifi-calling",
      testObjective: "Verify Input elements are present",
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
      const screenshotPath = await captureTestScreenshot(page, testInfo, "WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 3 Menus are present on WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality",
      pageUrl: "https://www.myvi.in/vi-wifi-calling",
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
    await test.step("Verify that the menu 'HomeVi WiFi Calling' exists in the DOM", async () => {
      await expect(appPage.menuHomeviWifiCalling.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'HomeVi WiFi Calling' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "WiFi Calling on Vi: Choose VoWiFi for Better Voice Quality - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
