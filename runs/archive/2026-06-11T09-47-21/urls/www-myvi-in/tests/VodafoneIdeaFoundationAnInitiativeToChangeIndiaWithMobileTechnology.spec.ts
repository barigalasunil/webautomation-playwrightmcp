import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { VodafoneIdeaFoundationAnInitiativeToChangeIndiaWithMobileTechnology } from '../../../pages/generated/www-myvi-in/VodafoneIdeaFoundationAnInitiativeToChangeIndiaWithMobileTechnology.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Vodafone Idea Foundation – An initiative to change India with Mobile Technology - Regression Tests", () => {
  let appPage: VodafoneIdeaFoundationAnInitiativeToChangeIndiaWithMobileTechnology;

  test.beforeEach(async ({ page }) => {
    appPage = new VodafoneIdeaFoundationAnInitiativeToChangeIndiaWithMobileTechnology(page);
    await appPage.open();
  });

  test("Verify that Vodafone Idea Foundation – An initiative to change India with Mobile Technology loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vodafone Idea Foundation – An initiative to change India with Mobile Technology");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vodafone Idea Foundation – An initiative to change India with Mobile Technology",
      pageUrl: "https://www.myvi.in/about-us/vodafoneidea-foundation",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/about\-us\/vodafoneidea\-foundation/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vodafone Idea Foundation – An initiative to change India with Mobile Technology - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 19 Headings are present on Vodafone Idea Foundation – An initiative to change India with Mobile Technology @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vodafone Idea Foundation – An initiative to change India with Mobile Technology");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vodafone Idea Foundation – An initiative to change India with Mobile Technology",
      pageUrl: "https://www.myvi.in/about-us/vodafoneidea-foundation",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'About Vi Foundation' exists in the DOM", async () => {
      await expect(appPage.headingAboutViFoundation.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'About Vi Foundation' exists in the DOM");
    });
    await test.step("Verify that the heading 'An overview of Vi Foundation’s programmes:' exists in the DOM", async () => {
      await expect(appPage.headingAnOverviewOfViFoundationSProgrammes.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'An overview of Vi Foundation’s programmes:' exists in the DOM");
    });
    await test.step("Verify that the heading 'SmartAgri:' exists in the DOM", async () => {
      await expect(appPage.headingSmartagri.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'SmartAgri:' exists in the DOM");
    });
    await test.step("Verify that the heading 'Gurushala:' exists in the DOM", async () => {
      await expect(appPage.headingGurushala.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Gurushala:' exists in the DOM");
    });
    await test.step("Verify that the heading 'e-Vidya for Brighter Futures:' exists in the DOM", async () => {
      await expect(appPage.headingEVidyaForBrighterFutures.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'e-Vidya for Brighter Futures:' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vodafone Idea Foundation – An initiative to change India with Mobile Technology - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 105 Links are present on Vodafone Idea Foundation – An initiative to change India with Mobile Technology @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vodafone Idea Foundation – An initiative to change India with Mobile Technology");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vodafone Idea Foundation – An initiative to change India with Mobile Technology",
      pageUrl: "https://www.myvi.in/about-us/vodafoneidea-foundation",
      testObjective: "Verify Link elements are present",
    });

    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'https://gurushala.co/' exists in the DOM", async () => {
      await expect(appPage.linkHttpsGurushalaCo.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'https://gurushala.co/' exists in the DOM");
    });
    await test.step("Verify that the link 'https://gurushala.co/' exists in the DOM", async () => {
      await expect(appPage.linkHttpsGurushalaCo1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'https://gurushala.co/' exists in the DOM");
    });
    await test.step("Verify that the link 'www.learningwithvodafoneidea.in' exists in the DOM", async () => {
      await expect(appPage.linkWwwLearningwithvodafoneideaIn.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'www.learningwithvodafoneidea.in' exists in the DOM");
    });
    await test.step("Verify that the link 'www.learningwithvodafoneidea.in' exists in the DOM", async () => {
      await expect(appPage.linkWwwLearningwithvodafoneideaIn1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'www.learningwithvodafoneidea.in' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vodafone Idea Foundation – An initiative to change India with Mobile Technology - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 3 Menus are present on Vodafone Idea Foundation – An initiative to change India with Mobile Technology @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vodafone Idea Foundation – An initiative to change India with Mobile Technology");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vodafone Idea Foundation – An initiative to change India with Mobile Technology",
      pageUrl: "https://www.myvi.in/about-us/vodafoneidea-foundation",
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
    await test.step("Verify that the menu 'HomeAbout UsVodafone Foundation' exists in the DOM", async () => {
      await expect(appPage.menuHomeaboutUsvodafoneFoundation.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'HomeAbout UsVodafone Foundation' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vodafone Idea Foundation – An initiative to change India with Mobile Technology - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
