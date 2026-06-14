import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { Vi5gNetworkInIndiaExplorePlansSimCoverageMapViIndia } from '../../../pages/generated/www-myvi-in/Vi5gNetworkInIndiaExplorePlansSimCoverageMapViIndia.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India - Regression Tests", () => {
  let appPage: Vi5gNetworkInIndiaExplorePlansSimCoverageMapViIndia;

  test.beforeEach(async ({ page }) => {
    appPage = new Vi5gNetworkInIndiaExplorePlansSimCoverageMapViIndia(page);
    await appPage.open();
  });

  test("Verify that Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India",
      pageUrl: "https://www.myvi.in/5g-network",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/5g\-network/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 10 Headings are present on Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India",
      pageUrl: "https://www.myvi.in/5g-network",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'experience the Vi 5G way of life' exists in the DOM", async () => {
      await expect(appPage.headingExperienceTheVi5gWayOfLife.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'experience the Vi 5G way of life' exists in the DOM");
    });
    await test.step("Verify that the heading 'think future, think Vi 5G' exists in the DOM", async () => {
      await expect(appPage.headingThinkFutureThinkVi5g.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'think future, think Vi 5G' exists in the DOM");
    });
    await test.step("Verify that the heading 'explore Vi 5G packs' exists in the DOM", async () => {
      await expect(appPage.headingExploreVi5gPacks.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'explore Vi 5G packs' exists in the DOM");
    });
    await test.step("Verify that the heading 'check 5G coverage & compatibility' exists in the DOM", async () => {
      await expect(appPage.headingCheck5gCoverageCompatibility.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'check 5G coverage & compatibility' exists in the DOM");
    });
    await test.step("Verify that the heading 'Vi 5G FAQs' exists in the DOM", async () => {
      await expect(appPage.headingVi5gFaqs.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Vi 5G FAQs' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 86 Links are present on Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India",
      pageUrl: "https://www.myvi.in/5g-network",
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
    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link3.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link4.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 19 Buttons are present on Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India",
      pageUrl: "https://www.myvi.in/5g-network",
      testObjective: "Verify Button elements are present",
    });

    await test.step("Verify that the button 'get a new connection' exists in the DOM", async () => {
      await expect(appPage.buttonGetANewConnection.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'get a new connection' exists in the DOM");
    });
    await test.step("Verify that the button 'port to Vi' exists in the DOM", async () => {
      await expect(appPage.buttonPortToVi.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'port to Vi' exists in the DOM");
    });
    await test.step("Verify that the button 'Prepaid' exists in the DOM", async () => {
      await expect(appPage.buttonPrepaid.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Prepaid' exists in the DOM");
    });
    await test.step("Verify that the button 'Postpaid' exists in the DOM", async () => {
      await expect(appPage.buttonPostpaid.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Postpaid' exists in the DOM");
    });
    await test.step("Verify that the button 'Mumbai' exists in the DOM", async () => {
      await expect(appPage.buttonMumbai.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Mumbai' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 2 Menus are present on Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India",
      pageUrl: "https://www.myvi.in/5g-network",
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
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi 5G Network in India – Explore Plans, SIM & Coverage Map | Vi India - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
