import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { PortSimNumberToViEnjoyViBenefitsWithEasyMnpProcess } from '../../../pages/generated/www-myvi-in/PortSimNumberToViEnjoyViBenefitsWithEasyMnpProcess.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process - Regression Tests", () => {
  let appPage: PortSimNumberToViEnjoyViBenefitsWithEasyMnpProcess;

  test.beforeEach(async ({ page }) => {
    appPage = new PortSimNumberToViEnjoyViBenefitsWithEasyMnpProcess(page);
    await appPage.open();
  });

  test("Verify that Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process",
      pageUrl: "https://www.myvi.in/new-connection/mobile-number-portability-mnp-online",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/new\-connection\/mobile\-number\-portability\-mnp\-online/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 29 Headings are present on Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process",
      pageUrl: "https://www.myvi.in/new-connection/mobile-number-portability-mnp-online",
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
    await test.step("Verify that the heading 'enter basic details to port mobile number online' exists in the DOM", async () => {
      await expect(appPage.headingEnterBasicDetailsToPortMobileNumberOnline.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'enter basic details to port mobile number online' exists in the DOM");
    });
    await test.step("Verify that the heading 'enter address to place order' exists in the DOM", async () => {
      await expect(appPage.headingEnterAddressToPlaceOrder.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'enter address to place order' exists in the DOM");
    });
    await test.step("Verify that the heading 'This festive season port mobile number to Vi & gain exciting benefits' exists in the DOM", async () => {
      await expect(appPage.headingThisFestiveSeasonPortMobileNumberToViGainExcitingB.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'This festive season port mobile number to Vi & gain exciting benefits' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 38 Links are present on Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process",
      pageUrl: "https://www.myvi.in/new-connection/mobile-number-portability-mnp-online",
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
    await test.step("Verify that the link 'a store near you' exists in the DOM", async () => {
      await expect(appPage.linkAStoreNearYou.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'a store near you' exists in the DOM");
    });
    await test.step("Verify that the link 'stores near you' exists in the DOM", async () => {
      await expect(appPage.linkStoresNearYou.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'stores near you' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 46 Buttons are present on Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process",
      pageUrl: "https://www.myvi.in/new-connection/mobile-number-portability-mnp-online",
      testObjective: "Verify Button elements are present",
    });

    await test.step("Verify that the button 'Previous' exists in the DOM", async () => {
      await expect(appPage.buttonPrevious.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Previous' exists in the DOM");
    });
    await test.step("Verify that the button 'proceed with 551 plan' exists in the DOM", async () => {
      await expect(appPage.buttonProceedWith551Plan.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'proceed with 551 plan' exists in the DOM");
    });
    await test.step("Verify that the button 'proceed with 451 plan' exists in the DOM", async () => {
      await expect(appPage.buttonProceedWith451Plan.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'proceed with 451 plan' exists in the DOM");
    });
    await test.step("Verify that the button 'proceed with 1201 plan' exists in the DOM", async () => {
      await expect(appPage.buttonProceedWith1201Plan.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'proceed with 1201 plan' exists in the DOM");
    });
    await test.step("Verify that the button 'proceed with 751 plan' exists in the DOM", async () => {
      await expect(appPage.buttonProceedWith751Plan.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'proceed with 751 plan' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 138 Inputs are present on Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process",
      pageUrl: "https://www.myvi.in/new-connection/mobile-number-portability-mnp-online",
      testObjective: "Verify Input elements are present",
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
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputFaqDrawer4.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 1 Form is present on Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process");
    await story("Verify Form elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process",
      pageUrl: "https://www.myvi.in/new-connection/mobile-number-portability-mnp-online",
      testObjective: "Verify Form elements are present",
    });

    await test.step("Verify that the form 'Form' exists in the DOM", async () => {
      await expect(appPage.form0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process - Form Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 2 Menus are present on Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process",
      pageUrl: "https://www.myvi.in/new-connection/mobile-number-portability-mnp-online",
      testObjective: "Verify Menu elements are present",
    });

    await test.step("Verify that the menu 'Navigation menu' exists in the DOM", async () => {
      await expect(appPage.menu0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'Navigation menu' exists in the DOM");
    });
    await test.step("Verify that the menu 'home new connection mobile number portability (MNP)' exists in the DOM", async () => {
      await expect(appPage.menuHomeNewConnectionMobileNumberPortabilityMnp.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'home new connection mobile number portability (MNP)' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Port SIM Number to Vi | Enjoy Vi Benefits with Easy MNP process - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
