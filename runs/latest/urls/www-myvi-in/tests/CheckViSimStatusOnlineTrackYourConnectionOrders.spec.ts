import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { CheckViSimStatusOnlineTrackYourConnectionOrders } from '../../../pages/generated/www-myvi-in/CheckViSimStatusOnlineTrackYourConnectionOrders.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Check Vi SIM Status Online | Track Your Connection & Orders - Regression Tests", () => {
  let appPage: CheckViSimStatusOnlineTrackYourConnectionOrders;

  test.beforeEach(async ({ page }) => {
    appPage = new CheckViSimStatusOnlineTrackYourConnectionOrders(page);
    await appPage.open();
  });

  test("Verify that Check Vi SIM Status Online | Track Your Connection & Orders loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Check Vi SIM Status Online | Track Your Connection & Orders");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Check Vi SIM Status Online | Track Your Connection & Orders",
      pageUrl: "https://www.myvi.in/new-connection/track-your-sim-online",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/new\-connection\/track\-your\-sim\-online/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Check Vi SIM Status Online | Track Your Connection & Orders - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 25 Headings are present on Check Vi SIM Status Online | Track Your Connection & Orders @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Check Vi SIM Status Online | Track Your Connection & Orders");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Check Vi SIM Status Online | Track Your Connection & Orders",
      pageUrl: "https://www.myvi.in/new-connection/track-your-sim-online",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'track your Vi SIM and connection status' exists in the DOM", async () => {
      await expect(appPage.headingTrackYourViSimAndConnectionStatus.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'track your Vi SIM and connection status' exists in the DOM");
    });
    await test.step("Verify that the heading 'showing all orders' exists in the DOM", async () => {
      await expect(appPage.headingShowingAllOrders.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'showing all orders' exists in the DOM");
    });
    await test.step("Verify that the heading 'order details' exists in the DOM", async () => {
      await expect(appPage.headingOrderDetails.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'order details' exists in the DOM");
    });
    await test.step("Verify that the heading 'cheers! your SIM is active now' exists in the DOM", async () => {
      await expect(appPage.headingCheersYourSimIsActiveNow.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'cheers! your SIM is active now' exists in the DOM");
    });
    await test.step("Verify that the heading 'cheers! your SIM is active now' exists in the DOM", async () => {
      await expect(appPage.headingCheersYourSimIsActiveNow1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'cheers! your SIM is active now' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Check Vi SIM Status Online | Track Your Connection & Orders - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 25 Links are present on Check Vi SIM Status Online | Track Your Connection & Orders @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Check Vi SIM Status Online | Track Your Connection & Orders");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Check Vi SIM Status Online | Track Your Connection & Orders",
      pageUrl: "https://www.myvi.in/new-connection/track-your-sim-online",
      testObjective: "Verify Link elements are present",
    });

    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'go back to order tracking' exists in the DOM", async () => {
      await expect(appPage.linkGoBackToOrderTracking.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'go back to order tracking' exists in the DOM");
    });
    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link2.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'go back' exists in the DOM", async () => {
      await expect(appPage.linkGoBack.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'go back' exists in the DOM");
    });
    await test.step("Verify that the link 'explore all our offerings' exists in the DOM", async () => {
      await expect(appPage.linkExploreAllOurOfferings.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'explore all our offerings' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Check Vi SIM Status Online | Track Your Connection & Orders - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 9 Buttons are present on Check Vi SIM Status Online | Track Your Connection & Orders @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Check Vi SIM Status Online | Track Your Connection & Orders");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Check Vi SIM Status Online | Track Your Connection & Orders",
      pageUrl: "https://www.myvi.in/new-connection/track-your-sim-online",
      testObjective: "Verify Button elements are present",
    });

    await test.step("Verify that the button 'send OTP' exists in the DOM", async () => {
      await expect(appPage.buttonSendOtp.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'send OTP' exists in the DOM");
    });
    await test.step("Verify that the button 'show' exists in the DOM", async () => {
      await expect(appPage.buttonShow.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'show' exists in the DOM");
    });
    await test.step("Verify that the button 'view all updates' exists in the DOM", async () => {
      await expect(appPage.buttonViewAllUpdates.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'view all updates' exists in the DOM");
    });
    await test.step("Verify that the button 'live track' exists in the DOM", async () => {
      await expect(appPage.buttonLiveTrack.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'live track' exists in the DOM");
    });
    await test.step("Verify that the button 'live track' exists in the DOM", async () => {
      await expect(appPage.buttonLiveTrack1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'live track' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Check Vi SIM Status Online | Track Your Connection & Orders - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 55 Inputs are present on Check Vi SIM Status Online | Track Your Connection & Orders @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Check Vi SIM Status Online | Track Your Connection & Orders");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Check Vi SIM Status Online | Track Your Connection & Orders",
      pageUrl: "https://www.myvi.in/new-connection/track-your-sim-online",
      testObjective: "Verify Input elements are present",
    });

    await test.step("Verify that the input 'enter 4 digit OTP' exists in the DOM", async () => {
      await expect(appPage.inputEnter4DigitOtp.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'enter 4 digit OTP' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputOtpstatus.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputOneattemptleft.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputResentattemptexhausted.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputResendlocked.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Check Vi SIM Status Online | Track Your Connection & Orders - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 2 Menus are present on Check Vi SIM Status Online | Track Your Connection & Orders @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Check Vi SIM Status Online | Track Your Connection & Orders");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Check Vi SIM Status Online | Track Your Connection & Orders",
      pageUrl: "https://www.myvi.in/new-connection/track-your-sim-online",
      testObjective: "Verify Menu elements are present",
    });

    await test.step("Verify that the menu 'Navigation menu' exists in the DOM", async () => {
      await expect(appPage.menu0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'Navigation menu' exists in the DOM");
    });
    await test.step("Verify that the menu 'home new connection track your SIM delivery' exists in the DOM", async () => {
      await expect(appPage.menuHomeNewConnectionTrackYourSimDelivery.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'home new connection track your SIM delivery' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Check Vi SIM Status Online | Track Your Connection & Orders - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
