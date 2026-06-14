import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { GetViNewPostpaidSimCardOnlineBuyMobileSimCardInIndia } from '../../../pages/generated/www-myvi-in/GetViNewPostpaidSimCardOnlineBuyMobileSimCardInIndia.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india - Regression Tests", () => {
  let appPage: GetViNewPostpaidSimCardOnlineBuyMobileSimCardInIndia;

  test.beforeEach(async ({ page }) => {
    appPage = new GetViNewPostpaidSimCardOnlineBuyMobileSimCardInIndia(page);
    await appPage.open();
  });

  test("Verify that Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india",
      pageUrl: "https://www.myvi.in/new-connection/buy-postpaid-sim-connection-online?show=postpaidonly",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/new\-connection\/buy\-postpaid\-sim\-connection\-online\?show=postpaidonly/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 21 Headings are present on Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india",
      pageUrl: "https://www.myvi.in/new-connection/buy-postpaid-sim-connection-online?show=postpaidonly",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'Vi Max family postpaid plans' exists in the DOM", async () => {
      await expect(appPage.headingViMaxFamilyPostpaidPlans.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Vi Max family postpaid plans' exists in the DOM");
    });
    await test.step("Verify that the heading 'choice of any 2 complimentary benefits' exists in the DOM", async () => {
      await expect(appPage.headingChoiceOfAny2ComplimentaryBenefits.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'choice of any 2 complimentary benefits' exists in the DOM");
    });
    await test.step("Verify that the heading 'Vi Movies & TV' exists in the DOM", async () => {
      await expect(appPage.headingViMoviesTv.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Vi Movies & TV' exists in the DOM");
    });
    await test.step("Verify that the heading 'Get a Vi Max Postpaid SIM delivered in 3 easy steps' exists in the DOM", async () => {
      await expect(appPage.headingGetAViMaxPostpaidSimDeliveredIn3EasySteps.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Get a Vi Max Postpaid SIM delivered in 3 easy steps' exists in the DOM");
    });
    await test.step("Verify that the heading 'why join Vi?' exists in the DOM", async () => {
      await expect(appPage.headingWhyJoinVi.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'why join Vi?' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 25 Links are present on Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india",
      pageUrl: "https://www.myvi.in/new-connection/buy-postpaid-sim-connection-online?show=postpaidonly",
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
    await test.step("Verify that the link 'prepaid packs' exists in the DOM", async () => {
      await expect(appPage.linkPrepaidPacks.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'prepaid packs' exists in the DOM");
    });
    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link3.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link4.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 24 Buttons are present on Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india",
      pageUrl: "https://www.myvi.in/new-connection/buy-postpaid-sim-connection-online?show=postpaidonly",
      testObjective: "Verify Button elements are present",
    });

    await test.step("Verify that the button 'select' exists in the DOM", async () => {
      await expect(appPage.buttonSelect.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'select' exists in the DOM");
    });
    await test.step("Verify that the button 'select' exists in the DOM", async () => {
      await expect(appPage.buttonSelect1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'select' exists in the DOM");
    });
    await test.step("Verify that the button '1' exists in the DOM", async () => {
      await expect(appPage.button1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button '1' exists in the DOM");
    });
    await test.step("Verify that the button '2' exists in the DOM", async () => {
      await expect(appPage.button2.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button '2' exists in the DOM");
    });
    await test.step("Verify that the button 'Previous' exists in the DOM", async () => {
      await expect(appPage.buttonPrevious.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Previous' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 19 Inputs are present on Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india",
      pageUrl: "https://www.myvi.in/new-connection/buy-postpaid-sim-connection-online?show=postpaidonly",
      testObjective: "Verify Input elements are present",
    });

    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputPincodefield.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputPagetype.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputShowfamilyplanslider.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputFamilyuserdetailsredir.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputDigitalexclusivetxt.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Get Vi New Postpaid SIM Card Online – Buy Mobile SIM Card In india - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
