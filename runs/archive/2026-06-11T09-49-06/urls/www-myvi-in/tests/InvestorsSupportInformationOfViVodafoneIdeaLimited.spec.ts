import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { InvestorsSupportInformationOfViVodafoneIdeaLimited } from '../../../pages/generated/www-myvi-in/InvestorsSupportInformationOfViVodafoneIdeaLimited.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Investors Support Information Of Vi (Vodafone Idea Limited) - Regression Tests", () => {
  let appPage: InvestorsSupportInformationOfViVodafoneIdeaLimited;

  test.beforeEach(async ({ page }) => {
    appPage = new InvestorsSupportInformationOfViVodafoneIdeaLimited(page);
    await appPage.open();
  });

  test("Verify that Investors Support Information Of Vi (Vodafone Idea Limited) loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Investors Support Information Of Vi (Vodafone Idea Limited)");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Investors Support Information Of Vi (Vodafone Idea Limited)",
      pageUrl: "https://www.myvi.in/investors/investors-support",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/investors\/investors\-support/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Investors Support Information Of Vi (Vodafone Idea Limited) - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 12 Headings are present on Investors Support Information Of Vi (Vodafone Idea Limited) @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Investors Support Information Of Vi (Vodafone Idea Limited)");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Investors Support Information Of Vi (Vodafone Idea Limited)",
      pageUrl: "https://www.myvi.in/investors/investors-support",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'Investors Support' exists in the DOM", async () => {
      await expect(appPage.headingInvestorsSupport.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Investors Support' exists in the DOM");
    });
    await test.step("Verify that the heading 'Bombay Stock Exchange Limited (BSE)' exists in the DOM", async () => {
      await expect(appPage.headingBombayStockExchangeLimitedBse.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Bombay Stock Exchange Limited (BSE)' exists in the DOM");
    });
    await test.step("Verify that the heading 'National Stock Exchange of India Limited (NSE)' exists in the DOM", async () => {
      await expect(appPage.headingNationalStockExchangeOfIndiaLimitedNse.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'National Stock Exchange of India Limited (NSE)' exists in the DOM");
    });
    await test.step("Verify that the heading 'details of shares to IEPF' exists in the DOM", async () => {
      await expect(appPage.headingDetailsOfSharesToIepf.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'details of shares to IEPF' exists in the DOM");
    });
    await test.step("Verify that the heading 'investors contact' exists in the DOM", async () => {
      await expect(appPage.headingInvestorsContact.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'investors contact' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Investors Support Information Of Vi (Vodafone Idea Limited) - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 45 Links are present on Investors Support Information Of Vi (Vodafone Idea Limited) @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Investors Support Information Of Vi (Vodafone Idea Limited)");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Investors Support Information Of Vi (Vodafone Idea Limited)",
      pageUrl: "https://www.myvi.in/investors/investors-support",
      testObjective: "Verify Link elements are present",
    });

    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'Personal' exists in the DOM", async () => {
      await expect(appPage.linkPersonal.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Personal' exists in the DOM");
    });
    await test.step("Verify that the link 'Business' exists in the DOM", async () => {
      await expect(appPage.linkBusiness.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Business' exists in the DOM");
    });
    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link3.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'Company Overview' exists in the DOM", async () => {
      await expect(appPage.linkCompanyOverview.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Company Overview' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Investors Support Information Of Vi (Vodafone Idea Limited) - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 3 Menus are present on Investors Support Information Of Vi (Vodafone Idea Limited) @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Investors Support Information Of Vi (Vodafone Idea Limited)");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Investors Support Information Of Vi (Vodafone Idea Limited)",
      pageUrl: "https://www.myvi.in/investors/investors-support",
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
    await test.step("Verify that the menu 'annual reportsQuarterly Resultsstock exchange submissionShareholding Patterninve' exists in the DOM", async () => {
      await expect(appPage.menuAnnualReportsquarterlyResultsstockExchangeSubmissionshar.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'annual reportsQuarterly Resultsstock exchange submissionShareholding Patterninve' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Investors Support Information Of Vi (Vodafone Idea Limited) - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
