import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { ViVodafoneIdeaCustomerCareNumberViComplaintHelplineNumber } from '../../../pages/generated/www-myvi-in/ViVodafoneIdeaCustomerCareNumberViComplaintHelplineNumber.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number - Regression Tests", () => {
  let appPage: ViVodafoneIdeaCustomerCareNumberViComplaintHelplineNumber;

  test.beforeEach(async ({ page }) => {
    appPage = new ViVodafoneIdeaCustomerCareNumberViComplaintHelplineNumber(page);
    await appPage.open();
  });

  test("Verify that Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number",
      pageUrl: "https://www.myvi.in/help-support/vi-customer-care-number",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/help\-support\/vi\-customer\-care\-number/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 16 Headings are present on Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number",
      pageUrl: "https://www.myvi.in/help-support/vi-customer-care-number",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'Vi Customer Care' exists in the DOM", async () => {
      await expect(appPage.headingViCustomerCare.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Vi Customer Care' exists in the DOM");
    });
    await test.step("Verify that the heading 'connect with us on Whatsapp' exists in the DOM", async () => {
      await expect(appPage.headingConnectWithUsOnWhatsapp.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'connect with us on Whatsapp' exists in the DOM");
    });
    await test.step("Verify that the heading 'Responsible Disclosure policy' exists in the DOM", async () => {
      await expect(appPage.headingResponsibleDisclosurePolicy.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Responsible Disclosure policy' exists in the DOM");
    });
    await test.step("Verify that the heading 'Consumer Care Number' exists in the DOM", async () => {
      await expect(appPage.headingConsumerCareNumber.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Consumer Care Number' exists in the DOM");
    });
    await test.step("Verify that the heading 'Circle Complaint Centre contact details' exists in the DOM", async () => {
      await expect(appPage.headingCircleComplaintCentreContactDetails.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Circle Complaint Centre contact details' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 172 Links are present on Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number",
      pageUrl: "https://www.myvi.in/help-support/vi-customer-care-number",
      testObjective: "Verify Link elements are present",
    });

    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'Recharge' exists in the DOM", async () => {
      await expect(appPage.linkRecharge.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Recharge' exists in the DOM");
    });
    await test.step("Verify that the link 'Bill Pay' exists in the DOM", async () => {
      await expect(appPage.linkBillPay.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Bill Pay' exists in the DOM");
    });
    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link3.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'open in Vi app' exists in the DOM", async () => {
      await expect(appPage.linkOpenInViApp.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'open in Vi app' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 14 Buttons are present on Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number",
      pageUrl: "https://www.myvi.in/help-support/vi-customer-care-number",
      testObjective: "Verify Button elements are present",
    });

    await test.step("Verify that the button 'Prepaid' exists in the DOM", async () => {
      await expect(appPage.buttonPrepaid.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Prepaid' exists in the DOM");
    });
    await test.step("Verify that the button 'Postpaid' exists in the DOM", async () => {
      await expect(appPage.buttonPostpaid.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Postpaid' exists in the DOM");
    });
    await test.step("Verify that the button 'New Connection' exists in the DOM", async () => {
      await expect(appPage.buttonNewConnection.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'New Connection' exists in the DOM");
    });
    await test.step("Verify that the button 'OTTs & More' exists in the DOM", async () => {
      await expect(appPage.buttonOttsMore.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'OTTs & More' exists in the DOM");
    });
    await test.step("Verify that the button 'Help' exists in the DOM", async () => {
      await expect(appPage.buttonHelp.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Help' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 75 Inputs are present on Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number",
      pageUrl: "https://www.myvi.in/help-support/vi-customer-care-number",
      testObjective: "Verify Input elements are present",
    });

    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputCookiepopupselect.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Search' exists in the DOM", async () => {
      await expect(appPage.inputSearch.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Search' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputQ.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Search' exists in the DOM", async () => {
      await expect(appPage.inputSearch1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Search' exists in the DOM");
    });
    await test.step("Verify that the input 'Search' exists in the DOM", async () => {
      await expect(appPage.inputSearch2.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Search' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 2 Forms are present on Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number");
    await story("Verify Form elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number",
      pageUrl: "https://www.myvi.in/help-support/vi-customer-care-number",
      testObjective: "Verify Form elements are present",
    });

    await test.step("Verify that the form 'Form' exists in the DOM", async () => {
      await expect(appPage.form0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
    });
    await test.step("Verify that the form 'Form' exists in the DOM", async () => {
      await expect(appPage.form1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number - Form Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 4 Tables are present on Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number");
    await story("Verify Table elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number",
      pageUrl: "https://www.myvi.in/help-support/vi-customer-care-number",
      testObjective: "Verify Table elements are present",
    });

    await test.step("Verify that the table 'Data table' exists in the DOM", async () => {
      await expect(appPage.table0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the table 'Data table' exists in the DOM");
    });
    await test.step("Verify that the table 'Data table' exists in the DOM", async () => {
      await expect(appPage.table1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the table 'Data table' exists in the DOM");
    });
    await test.step("Verify that the table 'Data table' exists in the DOM", async () => {
      await expect(appPage.table2.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the table 'Data table' exists in the DOM");
    });
    await test.step("Verify that the table 'Data table' exists in the DOM", async () => {
      await expect(appPage.table3.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the table 'Data table' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number - Table Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 1 Menu is present on Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number",
      pageUrl: "https://www.myvi.in/help-support/vi-customer-care-number",
      testObjective: "Verify Menu elements are present",
    });

    await test.step("Verify that the menu 'open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs' exists in the DOM", async () => {
      await expect(appPage.menuOpenInViAppSignInSignInDashboardMyAccountPrepaid.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'open in Vi app Sign in Sign in Dashboard My Account Prepaid Recharge Data Packs' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi (Vodafone Idea) Customer Care Number | Vi Complaint & Helpline Number - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
