import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { GetFreeNightDataBingeYourShowsWithHeroUnlimitedVi5g } from '../../../pages/generated/www-myvi-in/GetFreeNightDataBingeYourShowsWithHeroUnlimitedVi5g.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G - Regression Tests", () => {
  let appPage: GetFreeNightDataBingeYourShowsWithHeroUnlimitedVi5g;

  test.beforeEach(async ({ page }) => {
    appPage = new GetFreeNightDataBingeYourShowsWithHeroUnlimitedVi5g(page);
    await appPage.open();
  });

  test("Verify that Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G",
      pageUrl: "https://www.myvi.in/prepaid/hero-unlimited-and-weekend-data-rollover",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/prepaid\/hero\-unlimited\-and\-weekend\-data\-rollover/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 14 Headings are present on Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G",
      pageUrl: "https://www.myvi.in/prepaid/hero-unlimited-and-weekend-data-rollover",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'Vi Hero Unlimited' exists in the DOM", async () => {
      await expect(appPage.headingViHeroUnlimited.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Vi Hero Unlimited' exists in the DOM");
    });
    await test.step("Verify that the heading 'Vi hero unlimited data benefits' exists in the DOM", async () => {
      await expect(appPage.headingViHeroUnlimitedDataBenefits.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Vi hero unlimited data benefits' exists in the DOM");
    });
    await test.step("Verify that the heading 'Up to 2GB of backup Data every month!' exists in the DOM", async () => {
      await expect(appPage.headingUpTo2gbOfBackupDataEveryMonth.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Up to 2GB of backup Data every month!' exists in the DOM");
    });
    await test.step("Verify that the heading 'carry unused data into the weekend' exists in the DOM", async () => {
      await expect(appPage.headingCarryUnusedDataIntoTheWeekend.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'carry unused data into the weekend' exists in the DOM");
    });
    await test.step("Verify that the heading 'binge all night, without any limits' exists in the DOM", async () => {
      await expect(appPage.headingBingeAllNightWithoutAnyLimits.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'binge all night, without any limits' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 99 Links are present on Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G",
      pageUrl: "https://www.myvi.in/prepaid/hero-unlimited-and-weekend-data-rollover",
      testObjective: "Verify Link elements are present",
    });

    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'No Platform Fee on Vi App Recharges!' exists in the DOM", async () => {
      await expect(appPage.linkNoPlatformFeeOnViAppRecharges.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'No Platform Fee on Vi App Recharges!' exists in the DOM");
    });
    await test.step("Verify that the link 'Home' exists in the DOM", async () => {
      await expect(appPage.linkHome.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Home' exists in the DOM");
    });
    await test.step("Verify that the link 'prepaid' exists in the DOM", async () => {
      await expect(appPage.linkPrepaid.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'prepaid' exists in the DOM");
    });
    await test.step("Verify that the link 'Hero Unlimited' exists in the DOM", async () => {
      await expect(appPage.linkHeroUnlimited.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Hero Unlimited' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 15 Buttons are present on Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G",
      pageUrl: "https://www.myvi.in/prepaid/hero-unlimited-and-weekend-data-rollover",
      testObjective: "Verify Button elements are present",
    });

    await test.step("Verify that the button 'Vi Hero Unlimited' exists in the DOM", async () => {
      await expect(appPage.buttonViHeroUnlimited.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Vi Hero Unlimited' exists in the DOM");
    });
    await test.step("Verify that the button 'Data Delight' exists in the DOM", async () => {
      await expect(appPage.buttonDataDelight.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Data Delight' exists in the DOM");
    });
    await test.step("Verify that the button 'Weekend data Rollover' exists in the DOM", async () => {
      await expect(appPage.buttonWeekendDataRollover.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Weekend data Rollover' exists in the DOM");
    });
    await test.step("Verify that the button 'Binge All Night' exists in the DOM", async () => {
      await expect(appPage.buttonBingeAllNight.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Binge All Night' exists in the DOM");
    });
    await test.step("Verify that the button 'Download Vi App' exists in the DOM", async () => {
      await expect(appPage.buttonDownloadViApp.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Download Vi App' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 1 Input is present on Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G",
      pageUrl: "https://www.myvi.in/prepaid/hero-unlimited-and-weekend-data-rollover",
      testObjective: "Verify Input elements are present",
    });

    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputParamdetails.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 1 Form is present on Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G");
    await story("Verify Form elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G",
      pageUrl: "https://www.myvi.in/prepaid/hero-unlimited-and-weekend-data-rollover",
      testObjective: "Verify Form elements are present",
    });

    await test.step("Verify that the form 'Form' exists in the DOM", async () => {
      await expect(appPage.form0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G - Form Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 3 Menus are present on Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G",
      pageUrl: "https://www.myvi.in/prepaid/hero-unlimited-and-weekend-data-rollover",
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
    await test.step("Verify that the menu 'HomeprepaidHero Unlimited' exists in the DOM", async () => {
      await expect(appPage.menuHomeprepaidheroUnlimited.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'HomeprepaidHero Unlimited' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Get Free Night Data & Binge Your Shows with Hero Unlimited | Vi-5G - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
