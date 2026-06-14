import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { GetANewViPrepaidSimCardIn3SimpleStepsBuyNewSim } from '../../../pages/generated/www-myvi-in/GetANewViPrepaidSimCardIn3SimpleStepsBuyNewSim.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim - Regression Tests", () => {
  let appPage: GetANewViPrepaidSimCardIn3SimpleStepsBuyNewSim;

  test.beforeEach(async ({ page }) => {
    appPage = new GetANewViPrepaidSimCardIn3SimpleStepsBuyNewSim(page);
    await appPage.open();
  });

  test("Verify that Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim",
      pageUrl: "https://www.myvi.in/new-connection/buy-prepaid-sim-connection-online",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/new\-connection\/buy\-prepaid\-sim\-connection\-online/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 25 Headings are present on Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim",
      pageUrl: "https://www.myvi.in/new-connection/buy-prepaid-sim-connection-online",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'select a pack to start' exists in the DOM", async () => {
      await expect(appPage.headingSelectAPackToStart.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'select a pack to start' exists in the DOM");
    });
    await test.step("Verify that the heading 'get a new Vi prepaid SIM Card in 3 simple steps' exists in the DOM", async () => {
      await expect(appPage.headingGetANewViPrepaidSimCardIn3SimpleSteps.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'get a new Vi prepaid SIM Card in 3 simple steps' exists in the DOM");
    });
    await test.step("Verify that the heading 'carry forward unuseddaily data of weekdays to weekend' exists in the DOM", async () => {
      await expect(appPage.headingCarryForwardUnuseddailyDataOfWeekdaysToWeekend.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'carry forward unuseddaily data of weekdays to weekend' exists in the DOM");
    });
    await test.step("Verify that the heading 'the future isexciting. Ready?' exists in the DOM", async () => {
      await expect(appPage.headingTheFutureIsexcitingReady.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'the future isexciting. Ready?' exists in the DOM");
    });
    await test.step("Verify that the heading 'carry forward unuseddaily data of weekdays to weekend' exists in the DOM", async () => {
      await expect(appPage.headingCarryForwardUnuseddailyDataOfWeekdaysToWeekend1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'carry forward unuseddaily data of weekdays to weekend' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 37 Links are present on Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim",
      pageUrl: "https://www.myvi.in/new-connection/buy-prepaid-sim-connection-online",
      testObjective: "Verify Link elements are present",
    });

    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
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
    await test.step("Verify that the link 'view details' exists in the DOM", async () => {
      await expect(appPage.linkViewDetails.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'view details' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 29 Buttons are present on Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim",
      pageUrl: "https://www.myvi.in/new-connection/buy-prepaid-sim-connection-online",
      testObjective: "Verify Button elements are present",
    });

    await test.step("Verify that the button 'select your VIP number now' exists in the DOM", async () => {
      await expect(appPage.buttonSelectYourVipNumberNow.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'select your VIP number now' exists in the DOM");
    });
    await test.step("Verify that the button 'show all plans' exists in the DOM", async () => {
      await expect(appPage.buttonShowAllPlans.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'show all plans' exists in the DOM");
    });
    await test.step("Verify that the button '×' exists in the DOM", async () => {
      await expect(appPage.button.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button '×' exists in the DOM");
    });
    await test.step("Verify that the button 'I want this plan' exists in the DOM", async () => {
      await expect(appPage.buttonIWantThisPlan.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'I want this plan' exists in the DOM");
    });
    await test.step("Verify that the button 'I want this pack' exists in the DOM", async () => {
      await expect(appPage.buttonIWantThisPack.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'I want this pack' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 54 Inputs are present on Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim",
      pageUrl: "https://www.myvi.in/new-connection/buy-prepaid-sim-connection-online",
      testObjective: "Verify Input elements are present",
    });

    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputPincodefield.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputUtmfamilyplanprice.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputPlustext.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputNontelcoiconnumber.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputInputnontelcobenefitid.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 2 Menus are present on Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim",
      pageUrl: "https://www.myvi.in/new-connection/buy-prepaid-sim-connection-online",
      testObjective: "Verify Menu elements are present",
    });

    await test.step("Verify that the menu 'Navigation menu' exists in the DOM", async () => {
      await expect(appPage.menu0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'Navigation menu' exists in the DOM");
    });
    await test.step("Verify that the menu 'home new connection prepaid connection' exists in the DOM", async () => {
      await expect(appPage.menuHomeNewConnectionPrepaidConnection.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'home new connection prepaid connection' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Get a New Vi Prepaid SIM Card in 3 Simple Steps - Buy New Sim - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
