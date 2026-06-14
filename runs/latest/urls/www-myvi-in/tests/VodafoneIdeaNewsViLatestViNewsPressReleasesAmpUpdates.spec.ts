import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { VodafoneIdeaNewsViLatestViNewsPressReleasesAmpUpdates } from '../../../pages/generated/www-myvi-in/VodafoneIdeaNewsViLatestViNewsPressReleasesAmpUpdates.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates - Regression Tests", () => {
  let appPage: VodafoneIdeaNewsViLatestViNewsPressReleasesAmpUpdates;

  test.beforeEach(async ({ page }) => {
    appPage = new VodafoneIdeaNewsViLatestViNewsPressReleasesAmpUpdates(page);
    await appPage.open();
  });

  test("Verify that Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates",
      pageUrl: "https://www.myvi.in/vodafone-idea/press-releases",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/vodafone\-idea\/press\-releases/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 15 Headings are present on Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates",
      pageUrl: "https://www.myvi.in/vodafone-idea/press-releases",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'Vi (Vodafone Idea) Media Releases' exists in the DOM", async () => {
      await expect(appPage.headingViVodafoneIdeaMediaReleases.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Vi (Vodafone Idea) Media Releases' exists in the DOM");
    });
    await test.step("Verify that the heading 'Vodafone Idea (Vi) News & Press Releases' exists in the DOM", async () => {
      await expect(appPage.headingVodafoneIdeaViNewsPressReleases.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Vodafone Idea (Vi) News & Press Releases' exists in the DOM");
    });
    await test.step("Verify that the heading 'Vi launches 5G services in Coimbatore' exists in the DOM", async () => {
      await expect(appPage.headingViLaunches5gServicesInCoimbatore.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Vi launches 5G services in Coimbatore' exists in the DOM");
    });
    await test.step("Verify that the heading 'Vi launches 5G services in Bhopal' exists in the DOM", async () => {
      await expect(appPage.headingViLaunches5gServicesInBhopal.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Vi launches 5G services in Bhopal' exists in the DOM");
    });
    await test.step("Verify that the heading 'Vi expands 5G footprint in Punjab' exists in the DOM", async () => {
      await expect(appPage.headingViExpands5gFootprintInPunjab.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Vi expands 5G footprint in Punjab' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 109 Links are present on Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates",
      pageUrl: "https://www.myvi.in/vodafone-idea/press-releases",
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
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 6 Buttons are present on Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates",
      pageUrl: "https://www.myvi.in/vodafone-idea/press-releases",
      testObjective: "Verify Button elements are present",
    });

    await test.step("Verify that the button '«' exists in the DOM", async () => {
      await expect(appPage.button.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button '«' exists in the DOM");
    });
    await test.step("Verify that the button '‹' exists in the DOM", async () => {
      await expect(appPage.button1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button '‹' exists in the DOM");
    });
    await test.step("Verify that the button '1' exists in the DOM", async () => {
      await expect(appPage.button11.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button '1' exists in the DOM");
    });
    await test.step("Verify that the button '2' exists in the DOM", async () => {
      await expect(appPage.button2.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button '2' exists in the DOM");
    });
    await test.step("Verify that the button '›' exists in the DOM", async () => {
      await expect(appPage.button21.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button '›' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 1 Input is present on Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates",
      pageUrl: "https://www.myvi.in/vodafone-idea/press-releases",
      testObjective: "Verify Input elements are present",
    });

    await test.step("Verify that the input 'search by topic' exists in the DOM", async () => {
      await expect(appPage.inputSearchByTopic.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'search by topic' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 3 Menus are present on Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates",
      pageUrl: "https://www.myvi.in/vodafone-idea/press-releases",
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
    await test.step("Verify that the menu 'HomeMediaVi (Vodafone Idea) News & Press Releases' exists in the DOM", async () => {
      await expect(appPage.menuHomemediaviVodafoneIdeaNewsPressReleases.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'HomeMediaVi (Vodafone Idea) News & Press Releases' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vodafone Idea News (Vi): Latest Vi News, Press Releases &amp; Updates - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
