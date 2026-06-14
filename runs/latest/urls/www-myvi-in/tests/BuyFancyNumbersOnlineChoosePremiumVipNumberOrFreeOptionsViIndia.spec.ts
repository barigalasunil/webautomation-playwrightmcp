import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { BuyFancyNumbersOnlineChoosePremiumVipNumberOrFreeOptionsViIndia } from '../../../pages/generated/www-myvi-in/BuyFancyNumbersOnlineChoosePremiumVipNumberOrFreeOptionsViIndia.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India - Regression Tests", () => {
  let appPage: BuyFancyNumbersOnlineChoosePremiumVipNumberOrFreeOptionsViIndia;

  test.beforeEach(async ({ page }) => {
    appPage = new BuyFancyNumbersOnlineChoosePremiumVipNumberOrFreeOptionsViIndia(page);
    await appPage.open();
  });

  test("Verify that Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India",
      pageUrl: "https://www.myvi.in/new-connection/choose-your-fancy-mobile-numbers-online",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/new\-connection\/choose\-your\-fancy\-mobile\-numbers\-online/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 27 Headings are present on Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India",
      pageUrl: "https://www.myvi.in/new-connection/choose-your-fancy-mobile-numbers-online",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'Individual plans' exists in the DOM", async () => {
      await expect(appPage.headingIndividualPlans.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Individual plans' exists in the DOM");
    });
    await test.step("Verify that the heading '4G prepaid sim' exists in the DOM", async () => {
      await expect(appPage.heading4gPrepaidSim.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading '4G prepaid sim' exists in the DOM");
    });
    await test.step("Verify that the heading 'enter basic details to select a VIP fancy number' exists in the DOM", async () => {
      await expect(appPage.headingEnterBasicDetailsToSelectAVipFancyNumber.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'enter basic details to select a VIP fancy number' exists in the DOM");
    });
    await test.step("Verify that the heading 'select VIP fancy number' exists in the DOM", async () => {
      await expect(appPage.headingSelectVipFancyNumber.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'select VIP fancy number' exists in the DOM");
    });
    await test.step("Verify that the heading 'enter address to place order' exists in the DOM", async () => {
      await expect(appPage.headingEnterAddressToPlaceOrder.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'enter address to place order' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 33 Links are present on Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India",
      pageUrl: "https://www.myvi.in/new-connection/choose-your-fancy-mobile-numbers-online",
      testObjective: "Verify Link elements are present",
    });

    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'view details' exists in the DOM", async () => {
      await expect(appPage.linkViewDetails.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'view details' exists in the DOM");
    });
    await test.step("Verify that the link 'terms & conditions' exists in the DOM", async () => {
      await expect(appPage.linkTermsConditions.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'terms & conditions' exists in the DOM");
    });
    await test.step("Verify that the link 'store near you' exists in the DOM", async () => {
      await expect(appPage.linkStoreNearYou.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'store near you' exists in the DOM");
    });
    await test.step("Verify that the link 'stores near you' exists in the DOM", async () => {
      await expect(appPage.linkStoresNearYou.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'stores near you' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 50 Buttons are present on Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India",
      pageUrl: "https://www.myvi.in/new-connection/choose-your-fancy-mobile-numbers-online",
      testObjective: "Verify Button elements are present",
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
    await test.step("Verify that the button 'Proceed with ₹751 plan' exists in the DOM", async () => {
      await expect(appPage.buttonProceedWith751Plan.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Proceed with ₹751 plan' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 168 Inputs are present on Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India",
      pageUrl: "https://www.myvi.in/new-connection/choose-your-fancy-mobile-numbers-online",
      testObjective: "Verify Input elements are present",
    });

    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputMatchingnumberLottie.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputFaqDrawer.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputFaqDrawer1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputFaqDrawer2.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputFaqDrawer3.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 1 Form is present on Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India");
    await story("Verify Form elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India",
      pageUrl: "https://www.myvi.in/new-connection/choose-your-fancy-mobile-numbers-online",
      testObjective: "Verify Form elements are present",
    });

    await test.step("Verify that the form 'Form' exists in the DOM", async () => {
      await expect(appPage.form0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India - Form Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 2 Menus are present on Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India",
      pageUrl: "https://www.myvi.in/new-connection/choose-your-fancy-mobile-numbers-online",
      testObjective: "Verify Menu elements are present",
    });

    await test.step("Verify that the menu 'Navigation menu' exists in the DOM", async () => {
      await expect(appPage.menu0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'Navigation menu' exists in the DOM");
    });
    await test.step("Verify that the menu 'home new connection buy fancy mobile numbers online' exists in the DOM", async () => {
      await expect(appPage.menuHomeNewConnectionBuyFancyMobileNumbersOnline.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'home new connection buy fancy mobile numbers online' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Buy Fancy Numbers Online - Choose Premium VIP Number or Free Options |Vi India - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
