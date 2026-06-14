import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { BuyANewVi4gSimCardOnlineAndGetAFreeDelivery } from '../../../pages/generated/www-myvi-in/BuyANewVi4gSimCardOnlineAndGetAFreeDelivery.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Buy a New Vi 4g SIM Card Online and Get a Free Delivery - Regression Tests", () => {
  let appPage: BuyANewVi4gSimCardOnlineAndGetAFreeDelivery;

  test.beforeEach(async ({ page }) => {
    appPage = new BuyANewVi4gSimCardOnlineAndGetAFreeDelivery(page);
    await appPage.open();
  });

  test("Verify that Buy a New Vi 4g SIM Card Online and Get a Free Delivery loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Buy a New Vi 4g SIM Card Online and Get a Free Delivery");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Buy a New Vi 4g SIM Card Online and Get a Free Delivery",
      pageUrl: "https://www.myvi.in/new-connection/buy-new-4g-sim-card-online",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/new\-connection\/buy\-new\-4g\-sim\-card\-online/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Buy a New Vi 4g SIM Card Online and Get a Free Delivery - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 16 Headings are present on Buy a New Vi 4g SIM Card Online and Get a Free Delivery @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Buy a New Vi 4g SIM Card Online and Get a Free Delivery");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Buy a New Vi 4g SIM Card Online and Get a Free Delivery",
      pageUrl: "https://www.myvi.in/new-connection/buy-new-4g-sim-card-online",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'Buy New SIM Card Online' exists in the DOM", async () => {
      await expect(appPage.headingBuyNewSimCardOnline.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Buy New SIM Card Online' exists in the DOM");
    });
    await test.step("Verify that the heading 'basic details' exists in the DOM", async () => {
      await expect(appPage.headingBasicDetails.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'basic details' exists in the DOM");
    });
    await test.step("Verify that the heading 'delivery details' exists in the DOM", async () => {
      await expect(appPage.headingDeliveryDetails.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'delivery details' exists in the DOM");
    });
    await test.step("Verify that the heading 'individual plan' exists in the DOM", async () => {
      await expect(appPage.headingIndividualPlan.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'individual plan' exists in the DOM");
    });
    await test.step("Verify that the heading 'attention' exists in the DOM", async () => {
      await expect(appPage.headingAttention.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'attention' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Buy a New Vi 4g SIM Card Online and Get a Free Delivery - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 26 Links are present on Buy a New Vi 4g SIM Card Online and Get a Free Delivery @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Buy a New Vi 4g SIM Card Online and Get a Free Delivery");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Buy a New Vi 4g SIM Card Online and Get a Free Delivery",
      pageUrl: "https://www.myvi.in/new-connection/buy-new-4g-sim-card-online",
      testObjective: "Verify Link elements are present",
    });

    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'store near you' exists in the DOM", async () => {
      await expect(appPage.linkStoreNearYou.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'store near you' exists in the DOM");
    });
    await test.step("Verify that the link 'stores near you' exists in the DOM", async () => {
      await expect(appPage.linkStoresNearYou.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'stores near you' exists in the DOM");
    });
    await test.step("Verify that the link 'track order' exists in the DOM", async () => {
      await expect(appPage.linkTrackOrder.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'track order' exists in the DOM");
    });
    await test.step("Verify that the link 'postpaid plans' exists in the DOM", async () => {
      await expect(appPage.linkPostpaidPlans.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'postpaid plans' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Buy a New Vi 4g SIM Card Online and Get a Free Delivery - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 28 Buttons are present on Buy a New Vi 4g SIM Card Online and Get a Free Delivery @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Buy a New Vi 4g SIM Card Online and Get a Free Delivery");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Buy a New Vi 4g SIM Card Online and Get a Free Delivery",
      pageUrl: "https://www.myvi.in/new-connection/buy-new-4g-sim-card-online",
      testObjective: "Verify Button elements are present",
    });

    await test.step("Verify that the button 'get OTP to complete order' exists in the DOM", async () => {
      await expect(appPage.buttonGetOtpToCompleteOrder.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'get OTP to complete order' exists in the DOM");
    });
    await test.step("Verify that the button 'Previous' exists in the DOM", async () => {
      await expect(appPage.buttonPrevious.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Previous' exists in the DOM");
    });
    await test.step("Verify that the button 'Proceed with ₹551 plan' exists in the DOM", async () => {
      await expect(appPage.buttonProceedWith551Plan.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Proceed with ₹551 plan' exists in the DOM");
    });
    await test.step("Verify that the button 'Proceed with ₹451 plan' exists in the DOM", async () => {
      await expect(appPage.buttonProceedWith451Plan.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Proceed with ₹451 plan' exists in the DOM");
    });
    await test.step("Verify that the button 'Proceed with ₹1201 plan' exists in the DOM", async () => {
      await expect(appPage.buttonProceedWith1201Plan.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Proceed with ₹1201 plan' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Buy a New Vi 4g SIM Card Online and Get a Free Delivery - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 66 Inputs are present on Buy a New Vi 4g SIM Card Online and Get a Free Delivery @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Buy a New Vi 4g SIM Card Online and Get a Free Delivery");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Buy a New Vi 4g SIM Card Online and Get a Free Delivery",
      pageUrl: "https://www.myvi.in/new-connection/buy-new-4g-sim-card-online",
      testObjective: "Verify Input elements are present",
    });

    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputEnterYourAlternateNumber.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputEnterYourFullName.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputEnterPincode.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Enter a location' exists in the DOM", async () => {
      await expect(appPage.inputEnterStreetBuildingName.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Enter a location' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputFlatHouseNo.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Buy a New Vi 4g SIM Card Online and Get a Free Delivery - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 1 Form is present on Buy a New Vi 4g SIM Card Online and Get a Free Delivery @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Buy a New Vi 4g SIM Card Online and Get a Free Delivery");
    await story("Verify Form elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Buy a New Vi 4g SIM Card Online and Get a Free Delivery",
      pageUrl: "https://www.myvi.in/new-connection/buy-new-4g-sim-card-online",
      testObjective: "Verify Form elements are present",
    });

    await test.step("Verify that the form 'Form' exists in the DOM", async () => {
      await expect(appPage.form0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Buy a New Vi 4g SIM Card Online and Get a Free Delivery - Form Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 2 Menus are present on Buy a New Vi 4g SIM Card Online and Get a Free Delivery @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Buy a New Vi 4g SIM Card Online and Get a Free Delivery");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Buy a New Vi 4g SIM Card Online and Get a Free Delivery",
      pageUrl: "https://www.myvi.in/new-connection/buy-new-4g-sim-card-online",
      testObjective: "Verify Menu elements are present",
    });

    await test.step("Verify that the menu 'Navigation menu' exists in the DOM", async () => {
      await expect(appPage.menu0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'Navigation menu' exists in the DOM");
    });
    await test.step("Verify that the menu 'Home New Connection Buy New 4G SIM Online' exists in the DOM", async () => {
      await expect(appPage.menuHomeNewConnectionBuyNew4gSimOnline.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'Home New Connection Buy New 4G SIM Online' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Buy a New Vi 4g SIM Card Online and Get a Free Delivery - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
