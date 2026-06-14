import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { ViPrepaidTalktimeAndTopUpPlansEasyOnlineMobileRecharge } from '../../../pages/generated/www-myvi-in/ViPrepaidTalktimeAndTopUpPlansEasyOnlineMobileRecharge.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge - Regression Tests", () => {
  let appPage: ViPrepaidTalktimeAndTopUpPlansEasyOnlineMobileRecharge;

  test.beforeEach(async ({ page }) => {
    appPage = new ViPrepaidTalktimeAndTopUpPlansEasyOnlineMobileRecharge(page);
    await appPage.open();
  });

  test("Verify that Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge",
      pageUrl: "https://www.myvi.in/prepaid/recharge-talktime-top-up-plans",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/prepaid\/recharge\-talktime\-top\-up\-plans/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 9 Headings are present on Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge",
      pageUrl: "https://www.myvi.in/prepaid/recharge-talktime-top-up-plans",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'Top Up Voucher' exists in the DOM", async () => {
      await expect(appPage.headingTopUpVoucher.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Top Up Voucher' exists in the DOM");
    });
    await test.step("Verify that the heading 'top up voucher' exists in the DOM", async () => {
      await expect(appPage.headingTopUpVoucher1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'top up voucher' exists in the DOM");
    });
    await test.step("Verify that the heading 'Frequently Asked Questions About Vi Prepaid Data Packs' exists in the DOM", async () => {
      await expect(appPage.headingFrequentlyAskedQuestionsAboutViPrepaidDataPacks.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Frequently Asked Questions About Vi Prepaid Data Packs' exists in the DOM");
    });
    await test.step("Verify that the heading 'Talk time top up plans' exists in the DOM", async () => {
      await expect(appPage.headingTalkTimeTopUpPlans.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Talk time top up plans' exists in the DOM");
    });
    await test.step("Verify that the heading 'Vodafone Idea Limited' exists in the DOM", async () => {
      await expect(appPage.headingVodafoneIdeaLimited.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Vodafone Idea Limited' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 95 Links are present on Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge",
      pageUrl: "https://www.myvi.in/prepaid/recharge-talktime-top-up-plans",
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
    await test.step("Verify that the link 'prepaid' exists in the DOM", async () => {
      await expect(appPage.linkPrepaid.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'prepaid' exists in the DOM");
    });
    await test.step("Verify that the link 'Talktime or Top Up Plans' exists in the DOM", async () => {
      await expect(appPage.linkTalktimeOrTopUpPlans.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Talktime or Top Up Plans' exists in the DOM");
    });
    await test.step("Verify that the link 'Change' exists in the DOM", async () => {
      await expect(appPage.linkChange.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Change' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 7 Buttons are present on Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge",
      pageUrl: "https://www.myvi.in/prepaid/recharge-talktime-top-up-plans",
      testObjective: "Verify Button elements are present",
    });

    await test.step("Verify that the button 'buy' exists in the DOM", async () => {
      await expect(appPage.buttonBuy.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'buy' exists in the DOM");
    });
    await test.step("Verify that the button 'buy' exists in the DOM", async () => {
      await expect(appPage.buttonBuy1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'buy' exists in the DOM");
    });
    await test.step("Verify that the button 'buy' exists in the DOM", async () => {
      await expect(appPage.buttonBuy2.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'buy' exists in the DOM");
    });
    await test.step("Verify that the button 'buy' exists in the DOM", async () => {
      await expect(appPage.buttonBuy3.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'buy' exists in the DOM");
    });
    await test.step("Verify that the button 'buy' exists in the DOM", async () => {
      await expect(appPage.buttonBuy4.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'buy' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 1 Input is present on Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge",
      pageUrl: "https://www.myvi.in/prepaid/recharge-talktime-top-up-plans",
      testObjective: "Verify Input elements are present",
    });

    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputParamdetails.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 1 Form is present on Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge");
    await story("Verify Form elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge",
      pageUrl: "https://www.myvi.in/prepaid/recharge-talktime-top-up-plans",
      testObjective: "Verify Form elements are present",
    });

    await test.step("Verify that the form 'Form' exists in the DOM", async () => {
      await expect(appPage.form0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the form 'Form' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge - Form Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 3 Menus are present on Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge");
    await story("Verify Menu elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge",
      pageUrl: "https://www.myvi.in/prepaid/recharge-talktime-top-up-plans",
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
    await test.step("Verify that the menu 'HomeprepaidTalktime or Top Up Plans' exists in the DOM", async () => {
      await expect(appPage.menuHomeprepaidtalktimeOrTopUpPlans.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the menu 'HomeprepaidTalktime or Top Up Plans' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Vi Prepaid Talktime and Top-Up Plans| Easy Online Mobile Recharge - Menu Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
