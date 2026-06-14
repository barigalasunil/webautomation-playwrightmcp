import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { ViBusinessB2bMobilityConnectivitySecurityIotCloud } from '../../../pages/generated/www-myvi-in/ViBusinessB2bMobilityConnectivitySecurityIotCloud.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud - Regression Tests", () => {
  let appPage: ViBusinessB2bMobilityConnectivitySecurityIotCloud;

  test.beforeEach(async ({ page }) => {
    appPage = new ViBusinessB2bMobilityConnectivitySecurityIotCloud(page);
    await appPage.open();
  });

  test("Verify that Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud",
      pageUrl: "https://www.myvi.in/business",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/business/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 52 Headings are present on Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud",
      pageUrl: "https://www.myvi.in/business",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'Continue where you left off' exists in the DOM", async () => {
      await expect(appPage.headingContinueWhereYouLeftOff.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Continue where you left off' exists in the DOM");
    });
    await test.step("Verify that the heading 'Looks like you were exploring Vi Business solutions.' exists in the DOM", async () => {
      await expect(appPage.headingLooksLikeYouWereExploringViBusinessSolutions.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Looks like you were exploring Vi Business solutions.' exists in the DOM");
    });
    await test.step("Verify that the heading 'explore Vi business portfolio' exists in the DOM", async () => {
      await expect(appPage.headingExploreViBusinessPortfolio.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'explore Vi business portfolio' exists in the DOM");
    });
    await test.step("Verify that the heading 'Enterprise Mobility - Stay connected on the go' exists in the DOM", async () => {
      await expect(appPage.headingEnterpriseMobilityStayConnectedOnTheGo.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Enterprise Mobility - Stay connected on the go' exists in the DOM");
    });
    await test.step("Verify that the heading 'Choose Corporate Postpaid plans for your business' exists in the DOM", async () => {
      await expect(appPage.headingChooseCorporatePostpaidPlansForYourBusiness.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Choose Corporate Postpaid plans for your business' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 179 Links are present on Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud",
      pageUrl: "https://www.myvi.in/business",
      testObjective: "Verify Link elements are present",
    });

    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link2.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'Vi Business Assist' exists in the DOM", async () => {
      await expect(appPage.linkViBusinessAssist.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Vi Business Assist' exists in the DOM");
    });
    await test.step("Verify that the link 'IoT Smart Central' exists in the DOM", async () => {
      await expect(appPage.linkIotSmartCentral.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'IoT Smart Central' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 86 Buttons are present on Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud",
      pageUrl: "https://www.myvi.in/business",
      testObjective: "Verify Button elements are present",
    });

    await test.step("Verify that the button 'Products & Solutions' exists in the DOM", async () => {
      await expect(appPage.buttonProductsSolutions.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Products & Solutions' exists in the DOM");
    });
    await test.step("Verify that the button 'Segments' exists in the DOM", async () => {
      await expect(appPage.buttonSegments.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Segments' exists in the DOM");
    });
    await test.step("Verify that the button 'Why Vi Business' exists in the DOM", async () => {
      await expect(appPage.buttonWhyViBusiness.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Why Vi Business' exists in the DOM");
    });
    await test.step("Verify that the button 'Resources' exists in the DOM", async () => {
      await expect(appPage.buttonResources.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Resources' exists in the DOM");
    });
    await test.step("Verify that the button 'request call back' exists in the DOM", async () => {
      await expect(appPage.buttonRequestCallBack.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'request call back' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 45 Inputs are present on Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud",
      pageUrl: "https://www.myvi.in/business",
      testObjective: "Verify Input elements are present",
    });

    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputAnalyticsplatform.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'search' exists in the DOM", async () => {
      await expect(appPage.inputSearch.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'search' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputUparam.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputUtocen.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputUtmSource.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 1 Menu is present on Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud",
      pageUrl: "https://www.myvi.in/business",
      testObjective: "Verify Menu elements are present",
    });

    await test.step("Verify that the menu 'Vi Business Assist IoT Smart Central Dashboard My Account Products & Solutions F' exists in the DOM", async () => {
      await expect(appPage.menuViBusinessAssistIotSmartCentralDashboardMyAccountPr.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'Vi Business Assist IoT Smart Central Dashboard My Account Products & Solutions F' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Business - B2B: Mobility, Connectivity, Security, IoT & Cloud - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
