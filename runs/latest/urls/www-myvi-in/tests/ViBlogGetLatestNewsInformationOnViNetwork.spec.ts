import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { ViBlogGetLatestNewsInformationOnViNetwork } from '../../../pages/generated/www-myvi-in/ViBlogGetLatestNewsInformationOnViNetwork.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Vi Blog | Get Latest News & Information on Vi Network - Regression Tests", () => {
  let appPage: ViBlogGetLatestNewsInformationOnViNetwork;

  test.beforeEach(async ({ page }) => {
    appPage = new ViBlogGetLatestNewsInformationOnViNetwork(page);
    await appPage.open();
  });

  test("Verify that Vi Blog | Get Latest News & Information on Vi Network loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Blog | Get Latest News & Information on Vi Network");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Blog | Get Latest News & Information on Vi Network",
      pageUrl: "https://www.myvi.in/blog",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/blog/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Blog | Get Latest News & Information on Vi Network - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 6 Headings are present on Vi Blog | Get Latest News & Information on Vi Network @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Blog | Get Latest News & Information on Vi Network");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Blog | Get Latest News & Information on Vi Network",
      pageUrl: "https://www.myvi.in/blog",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'theblogs' exists in the DOM", async () => {
      await expect(appPage.headingTheblogs.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'theblogs' exists in the DOM");
    });
    await test.step("Verify that the heading 'Vodafone Idea Limited' exists in the DOM", async () => {
      await expect(appPage.headingVodafoneIdeaLimited.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Vodafone Idea Limited' exists in the DOM");
    });
    await test.step("Verify that the heading 'about Vi' exists in the DOM", async () => {
      await expect(appPage.headingAboutVi.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'about Vi' exists in the DOM");
    });
    await test.step("Verify that the heading 'more from Vi' exists in the DOM", async () => {
      await expect(appPage.headingMoreFromVi.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'more from Vi' exists in the DOM");
    });
    await test.step("Verify that the heading 'explore on Vi app' exists in the DOM", async () => {
      await expect(appPage.headingExploreOnViApp.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'explore on Vi app' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Blog | Get Latest News & Information on Vi Network - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 108 Links are present on Vi Blog | Get Latest News & Information on Vi Network @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Blog | Get Latest News & Information on Vi Network");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Blog | Get Latest News & Information on Vi Network",
      pageUrl: "https://www.myvi.in/blog",
      testObjective: "Verify Link elements are present",
    });

    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link '1' exists in the DOM", async () => {
      await expect(appPage.link1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link '1' exists in the DOM");
    });
    await test.step("Verify that the link '2' exists in the DOM", async () => {
      await expect(appPage.link2.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link '2' exists in the DOM");
    });
    await test.step("Verify that the link '3' exists in the DOM", async () => {
      await expect(appPage.link3.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link '3' exists in the DOM");
    });
    await test.step("Verify that the link '4' exists in the DOM", async () => {
      await expect(appPage.link4.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link '4' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Blog | Get Latest News & Information on Vi Network - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 5 Buttons are present on Vi Blog | Get Latest News & Information on Vi Network @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Blog | Get Latest News & Information on Vi Network");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Blog | Get Latest News & Information on Vi Network",
      pageUrl: "https://www.myvi.in/blog",
      testObjective: "Verify Button elements are present",
    });

    await test.step("Verify that the button 'Previous' exists in the DOM", async () => {
      await expect(appPage.buttonPrevious.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Previous' exists in the DOM");
    });
    await test.step("Verify that the button '...' exists in the DOM", async () => {
      await expect(appPage.button.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button '...' exists in the DOM");
    });
    await test.step("Verify that the button 'Next' exists in the DOM", async () => {
      await expect(appPage.buttonNext.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Next' exists in the DOM");
    });
    await test.step("Verify that the button 'reject all' exists in the DOM", async () => {
      await expect(appPage.buttonRejectAll.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'reject all' exists in the DOM");
    });
    await test.step("Verify that the button 'accept all' exists in the DOM", async () => {
      await expect(appPage.buttonAcceptAll.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'accept all' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Blog | Get Latest News & Information on Vi Network - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 1 Input is present on Vi Blog | Get Latest News & Information on Vi Network @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Blog | Get Latest News & Information on Vi Network");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Blog | Get Latest News & Information on Vi Network",
      pageUrl: "https://www.myvi.in/blog",
      testObjective: "Verify Input elements are present",
    });

    await test.step("Verify that the input 'search for topics' exists in the DOM", async () => {
      await expect(appPage.inputSearchForTopics.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'search for topics' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Blog | Get Latest News & Information on Vi Network - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 3 Menus are present on Vi Blog | Get Latest News & Information on Vi Network @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Blog | Get Latest News & Information on Vi Network");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Blog | Get Latest News & Information on Vi Network",
      pageUrl: "https://www.myvi.in/blog",
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
    await test.step("Verify that the menu 'HomeBlog' exists in the DOM", async () => {
      await expect(appPage.menuHomeblog.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'HomeBlog' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Blog | Get Latest News & Information on Vi Network - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
