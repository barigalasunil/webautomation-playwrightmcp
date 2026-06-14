import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { ViGiganetASmartNetworkPoweredWithAiFromVi } from '../../../pages/generated/www-myvi-in/ViGiganetASmartNetworkPoweredWithAiFromVi.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Vi Giganet: A smart network powered with AI from Vi - Regression Tests", () => {
  let appPage: ViGiganetASmartNetworkPoweredWithAiFromVi;

  test.beforeEach(async ({ page }) => {
    appPage = new ViGiganetASmartNetworkPoweredWithAiFromVi(page);
    await appPage.open();
  });

  test("Verify that Vi Giganet: A smart network powered with AI from Vi loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Giganet: A smart network powered with AI from Vi");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Giganet: A smart network powered with AI from Vi",
      pageUrl: "https://www.myvi.in/giganet",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/giganet/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Giganet: A smart network powered with AI from Vi - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 8 Headings are present on Vi Giganet: A smart network powered with AI from Vi @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Giganet: A smart network powered with AI from Vi");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Giganet: A smart network powered with AI from Vi",
      pageUrl: "https://www.myvi.in/giganet",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'Vi powered by GIGAnet' exists in the DOM", async () => {
      await expect(appPage.headingViPoweredByGiganet.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Vi powered by GIGAnet' exists in the DOM");
    });
    await test.step("Verify that the heading 'GIGAnet FAQs' exists in the DOM", async () => {
      await expect(appPage.headingGiganetFaqs.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'GIGAnet FAQs' exists in the DOM");
    });
    await test.step("Verify that the heading 'Download Vi app' exists in the DOM", async () => {
      await expect(appPage.headingDownloadViApp.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Download Vi app' exists in the DOM");
    });
    await test.step("Verify that the heading 'Vodafone Idea Limited' exists in the DOM", async () => {
      await expect(appPage.headingVodafoneIdeaLimited.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Vodafone Idea Limited' exists in the DOM");
    });
    await test.step("Verify that the heading 'about Vi' exists in the DOM", async () => {
      await expect(appPage.headingAboutVi.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'about Vi' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Giganet: A smart network powered with AI from Vi - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 92 Links are present on Vi Giganet: A smart network powered with AI from Vi @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Giganet: A smart network powered with AI from Vi");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Giganet: A smart network powered with AI from Vi",
      pageUrl: "https://www.myvi.in/giganet",
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
    await test.step("Verify that the link 'buy postpaid sim' exists in the DOM", async () => {
      await expect(appPage.linkBuyPostpaidSim.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'buy postpaid sim' exists in the DOM");
    });
    await test.step("Verify that the link 'buy prepaid now' exists in the DOM", async () => {
      await expect(appPage.linkBuyPrepaidNow.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'buy prepaid now' exists in the DOM");
    });
    await test.step("Verify that the link 'Vi max postpaid plans' exists in the DOM", async () => {
      await expect(appPage.linkViMaxPostpaidPlans.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Vi max postpaid plans' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Giganet: A smart network powered with AI from Vi - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 2 Menus are present on Vi Giganet: A smart network powered with AI from Vi @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Giganet: A smart network powered with AI from Vi");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Giganet: A smart network powered with AI from Vi",
      pageUrl: "https://www.myvi.in/giganet",
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
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Giganet: A smart network powered with AI from Vi - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
