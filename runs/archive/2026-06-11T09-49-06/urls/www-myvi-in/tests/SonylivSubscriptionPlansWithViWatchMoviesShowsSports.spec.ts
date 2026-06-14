import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { SonylivSubscriptionPlansWithViWatchMoviesShowsSports } from '../../../pages/generated/www-myvi-in/SonylivSubscriptionPlansWithViWatchMoviesShowsSports.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports - Regression Tests", () => {
  let appPage: SonylivSubscriptionPlansWithViWatchMoviesShowsSports;

  test.beforeEach(async ({ page }) => {
    appPage = new SonylivSubscriptionPlansWithViWatchMoviesShowsSports(page);
    await appPage.open();
  });

  test("Verify that SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports",
      pageUrl: "https://www.myvi.in/prepaid/sonyliv-subscription-recharge-plans",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/prepaid\/sonyliv\-subscription\-recharge\-plans/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 4 Headings are present on SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports",
      pageUrl: "https://www.myvi.in/prepaid/sonyliv-subscription-recharge-plans",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'stream in 10+ Languages and get exciting data benefits starting at just ₹408 wit' exists in the DOM", async () => {
      await expect(appPage.headingStreamIn10LanguagesAndGetExcitingDataBenefitsStarti.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'stream in 10+ Languages and get exciting data benefits starting at just ₹408 wit' exists in the DOM");
    });
    await test.step("Verify that the heading 'it’s very simple to get started' exists in the DOM", async () => {
      await expect(appPage.headingItSVerySimpleToGetStarted.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'it’s very simple to get started' exists in the DOM");
    });
    await test.step("Verify that the heading 'watch exclusive SonyLiv specials' exists in the DOM", async () => {
      await expect(appPage.headingWatchExclusiveSonylivSpecials.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'watch exclusive SonyLiv specials' exists in the DOM");
    });
    await test.step("Verify that the heading 'Frequently Asked Questions (FAQs)' exists in the DOM", async () => {
      await expect(appPage.headingFrequentlyAskedQuestionsFaqs.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Frequently Asked Questions (FAQs)' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 2 Links are present on SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports",
      pageUrl: "https://www.myvi.in/prepaid/sonyliv-subscription-recharge-plans",
      testObjective: "Verify Link elements are present",
    });

    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'Vi app' exists in the DOM", async () => {
      await expect(appPage.linkViApp.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Vi app' exists in the DOM");
    });
    await test.step("Verify that the link 'recharge now' exists in the DOM", async () => {
      await expect(appPage.linkRechargeNow.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'recharge now' exists in the DOM");
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
      const screenshotPath = await captureTestScreenshot(page, testInfo, "SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 4 Buttons are present on SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports",
      pageUrl: "https://www.myvi.in/prepaid/sonyliv-subscription-recharge-plans",
      testObjective: "Verify Button elements are present",
    });

    await test.step("Verify that the button 'Maharashtra & Goa' exists in the DOM", async () => {
      await expect(appPage.buttonMaharashtraGoa.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Maharashtra & Goa' exists in the DOM");
    });
    await test.step("Verify that the button 'buy' exists in the DOM", async () => {
      await expect(appPage.buttonBuy.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'buy' exists in the DOM");
    });
    await test.step("Verify that the button 'buy' exists in the DOM", async () => {
      await expect(appPage.buttonBuy1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'buy' exists in the DOM");
    });
    await test.step("Verify that the button 'buy' exists in the DOM", async () => {
      await expect(appPage.buttonBuy2.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'buy' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 1 Input is present on SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports",
      pageUrl: "https://www.myvi.in/prepaid/sonyliv-subscription-recharge-plans",
      testObjective: "Verify Input elements are present",
    });

    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputParamdetails.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 1 Form is present on SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports");
    await story("Verify Form elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports",
      pageUrl: "https://www.myvi.in/prepaid/sonyliv-subscription-recharge-plans",
      testObjective: "Verify Form elements are present",
    });

    await test.step("Verify that the form 'Form' exists in the DOM", async () => {
      await expect(appPage.form0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports - Form Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 2 Menus are present on SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports",
      pageUrl: "https://www.myvi.in/prepaid/sonyliv-subscription-recharge-plans",
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

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "SonyLIV Subscription Plans with Vi | Watch Movies, Shows & Sports - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
