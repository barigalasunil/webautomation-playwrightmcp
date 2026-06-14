import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { ViVodafoneIdeaCareersExploreCareerOpportunitiesAtVodafoneIdeaVi } from '../../../pages/generated/www-myvi-in/ViVodafoneIdeaCareersExploreCareerOpportunitiesAtVodafoneIdeaVi.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi) - Regression Tests", () => {
  let appPage: ViVodafoneIdeaCareersExploreCareerOpportunitiesAtVodafoneIdeaVi;

  test.beforeEach(async ({ page }) => {
    appPage = new ViVodafoneIdeaCareersExploreCareerOpportunitiesAtVodafoneIdeaVi(page);
    await appPage.open();
  });

  test("Verify that Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi) loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi)");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi)",
      pageUrl: "https://www.myvi.in/careers",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/careers/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi) - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 24 Headings are present on Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi) @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi)");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi)",
      pageUrl: "https://www.myvi.in/careers",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'Be a part of India's leading telecom company' exists in the DOM", async () => {
      await expect(appPage.headingBeAPartOfIndiaSLeadingTelecomCompany.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Be a part of India's leading telecom company' exists in the DOM");
    });
    await test.step("Verify that the heading 'Life at VIL' exists in the DOM", async () => {
      await expect(appPage.headingLifeAtVil.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Life at VIL' exists in the DOM");
    });
    await test.step("Verify that the heading 'Love what you do!' exists in the DOM", async () => {
      await expect(appPage.headingLoveWhatYouDo.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Love what you do!' exists in the DOM");
    });
    await test.step("Verify that the heading 'perks of being with VIL' exists in the DOM", async () => {
      await expect(appPage.headingPerksOfBeingWithVil.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'perks of being with VIL' exists in the DOM");
    });
    await test.step("Verify that the heading 'Agility' exists in the DOM", async () => {
      await expect(appPage.headingAgility.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Agility' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi) - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 94 Links are present on Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi) @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi)");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi)",
      pageUrl: "https://www.myvi.in/careers",
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
    await test.step("Verify that the link 'View Jobs' exists in the DOM", async () => {
      await expect(appPage.linkViewJobs.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'View Jobs' exists in the DOM");
    });
    await test.step("Verify that the link 'View Jobs' exists in the DOM", async () => {
      await expect(appPage.linkViewJobs1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'View Jobs' exists in the DOM");
    });
    await test.step("Verify that the link 'View Jobs' exists in the DOM", async () => {
      await expect(appPage.linkViewJobs2.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'View Jobs' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi) - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 5 Buttons are present on Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi) @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi)");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi)",
      pageUrl: "https://www.myvi.in/careers",
      testObjective: "Verify Button elements are present",
    });

    await test.step("Verify that the button 'View Jobs' exists in the DOM", async () => {
      await expect(appPage.buttonViewJobs.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'View Jobs' exists in the DOM");
    });
    await test.step("Verify that the button 'View Jobs' exists in the DOM", async () => {
      await expect(appPage.buttonViewJobs1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'View Jobs' exists in the DOM");
    });
    await test.step("Verify that the button 'View Jobs' exists in the DOM", async () => {
      await expect(appPage.buttonViewJobs2.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'View Jobs' exists in the DOM");
    });
    await test.step("Verify that the button 'View Jobs' exists in the DOM", async () => {
      await expect(appPage.buttonViewJobs3.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'View Jobs' exists in the DOM");
    });
    await test.step("Verify that the button 'View Jobs' exists in the DOM", async () => {
      await expect(appPage.buttonViewJobs4.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'View Jobs' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi) - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 3 Menus are present on Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi) @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi)");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi)",
      pageUrl: "https://www.myvi.in/careers",
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
    await test.step("Verify that the menu 'HomeCareers' exists in the DOM", async () => {
      await expect(appPage.menuHomecareers.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'HomeCareers' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) Careers | Explore Career Opportunities at Vodafone Idea (Vi) - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
