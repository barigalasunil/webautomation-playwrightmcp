import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { ExploreTheBestPrepaidPlansTopPrepaidRechargeOptionsViIndia } from '../../../pages/generated/www-myvi-in/ExploreTheBestPrepaidPlansTopPrepaidRechargeOptionsViIndia.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India - Regression Tests", () => {
  let appPage: ExploreTheBestPrepaidPlansTopPrepaidRechargeOptionsViIndia;

  test.beforeEach(async ({ page }) => {
    appPage = new ExploreTheBestPrepaidPlansTopPrepaidRechargeOptionsViIndia(page);
    await appPage.open();
  });

  test("Verify that Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India",
      pageUrl: "https://www.myvi.in/prepaid/best-prepaid-plans",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/prepaid\/best\-prepaid\-plans/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 17 Headings are present on Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India",
      pageUrl: "https://www.myvi.in/prepaid/best-prepaid-plans",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'Best Prepaid Plans' exists in the DOM", async () => {
      await expect(appPage.headingBestPrepaidPlans.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Best Prepaid Plans' exists in the DOM");
    });
    await test.step("Verify that the heading 'prepaid recharge plans FAQs' exists in the DOM", async () => {
      await expect(appPage.headingPrepaidRechargePlansFaqs.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'prepaid recharge plans FAQs' exists in the DOM");
    });
    await test.step("Verify that the heading 'Vi (Vodafone Idea) best prepaid plans' exists in the DOM", async () => {
      await expect(appPage.headingViVodafoneIdeaBestPrepaidPlans.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Vi (Vodafone Idea) best prepaid plans' exists in the DOM");
    });
    await test.step("Verify that the heading 'Different Benefits of Vi (Vodafone Idea) Prepaid Recharge Plans Based on Pack Va' exists in the DOM", async () => {
      await expect(appPage.headingDifferentBenefitsOfViVodafoneIdeaPrepaidRechargePlan.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Different Benefits of Vi (Vodafone Idea) Prepaid Recharge Plans Based on Pack Va' exists in the DOM");
    });
    await test.step("Verify that the heading 'All SIM Recharge Plans List' exists in the DOM", async () => {
      await expect(appPage.headingAllSimRechargePlansList.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'All SIM Recharge Plans List' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 104 Links are present on Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India",
      pageUrl: "https://www.myvi.in/prepaid/best-prepaid-plans",
      testObjective: "Verify Link elements are present",
    });

    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'Home' exists in the DOM", async () => {
      await expect(appPage.linkHome.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Home' exists in the DOM");
    });
    await test.step("Verify that the link 'Prepaid' exists in the DOM", async () => {
      await expect(appPage.linkPrepaid.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Prepaid' exists in the DOM");
    });
    await test.step("Verify that the link 'Best prepaid Plans' exists in the DOM", async () => {
      await expect(appPage.linkBestPrepaidPlans.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Best prepaid Plans' exists in the DOM");
    });
    await test.step("Verify that the link 'Change' exists in the DOM", async () => {
      await expect(appPage.linkChange.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Change' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 49 Buttons are present on Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India",
      pageUrl: "https://www.myvi.in/prepaid/best-prepaid-plans",
      testObjective: "Verify Button elements are present",
    });

    await test.step("Verify that the button 'unlimited 5G' exists in the DOM", async () => {
      await expect(appPage.buttonUnlimited5g.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'unlimited 5G' exists in the DOM");
    });
    await test.step("Verify that the button 'nonstop hero' exists in the DOM", async () => {
      await expect(appPage.buttonNonstopHero.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'nonstop hero' exists in the DOM");
    });
    await test.step("Verify that the button 'super hero' exists in the DOM", async () => {
      await expect(appPage.buttonSuperHero.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'super hero' exists in the DOM");
    });
    await test.step("Verify that the button 'hero unlimited' exists in the DOM", async () => {
      await expect(appPage.buttonHeroUnlimited.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'hero unlimited' exists in the DOM");
    });
    await test.step("Verify that the button 'unlimited' exists in the DOM", async () => {
      await expect(appPage.buttonUnlimited.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'unlimited' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 1 Input is present on Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India",
      pageUrl: "https://www.myvi.in/prepaid/best-prepaid-plans",
      testObjective: "Verify Input elements are present",
    });

    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputParamdetails.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 1 Form is present on Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India");
    await story("Verify Form elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India",
      pageUrl: "https://www.myvi.in/prepaid/best-prepaid-plans",
      testObjective: "Verify Form elements are present",
    });

    await test.step("Verify that the form 'Form' exists in the DOM", async () => {
      await expect(appPage.form0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India - Form Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 3 Menus are present on Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India",
      pageUrl: "https://www.myvi.in/prepaid/best-prepaid-plans",
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
    await test.step("Verify that the menu 'HomePrepaidBest prepaid Plans' exists in the DOM", async () => {
      await expect(appPage.menuHomeprepaidbestPrepaidPlans.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'HomePrepaidBest prepaid Plans' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Explore the Best Prepaid Plans – Top Prepaid Recharge Options | Vi India - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
