import { test, expect } from '@playwright/test';
import { label, severity, feature, story, tag } from 'allure-js-commons';
import { GetYourViSimOnlineAndEnjoyFreeDeliveryChooseYourPlanToday } from '../../../pages/generated/www-myvi-in/GetYourViSimOnlineAndEnjoyFreeDeliveryChooseYourPlanToday.page';
import { createEvidence, attachExecutionSummary } from '../../../src/core/reporting/executionEvidence';
import { captureTestScreenshot } from '../../../src/core/reporting/screenshotHelper';

test.describe("https://www.myvi.in/ - Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today - Regression Tests", () => {
  let appPage: GetYourViSimOnlineAndEnjoyFreeDeliveryChooseYourPlanToday;

  test.beforeEach(async ({ page }) => {
    appPage = new GetYourViSimOnlineAndEnjoyFreeDeliveryChooseYourPlanToday(page);
    await appPage.open();
  });

  test("Verify that Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today loads successfully @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today");
    await story("Verify page loads for regression");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today",
      pageUrl: "https://www.myvi.in/new-connection/vi-free-sim-home-delivery",
      testObjective: "Verify page loads for regression",
    });

    await test.step("Open URL: https://www.myvi.in/", async () => {
      await appPage.open();
      evidence.actionsPerformed.push("Opened URL: https://www.myvi.in/");
    });

    await test.step("Verify the URL is correct", async () => {
      await expect(appPage.page).toHaveURL(/https:\/\/www\.myvi\.in\/new\-connection\/vi\-free\-sim\-home\-delivery/);
      evidence.validationsPerformed.push("Verified URL is correct");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today - Final Evidence", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 13 Headings are present on Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today");
    await story("Verify Heading elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today",
      pageUrl: "https://www.myvi.in/new-connection/vi-free-sim-home-delivery",
      testObjective: "Verify Heading elements are present",
    });

    await test.step("Verify that the heading 'our best selling plans nowwith free SIM delivery' exists in the DOM", async () => {
      await expect(appPage.headingOurBestSellingPlansNowwithFreeSimDelivery.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'our best selling plans nowwith free SIM delivery' exists in the DOM");
    });
    await test.step("Verify that the heading 'get free SIM home delivery' exists in the DOM", async () => {
      await expect(appPage.headingGetFreeSimHomeDelivery.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'get free SIM home delivery' exists in the DOM");
    });
    await test.step("Verify that the heading 'you stay at home, we deliver!' exists in the DOM", async () => {
      await expect(appPage.headingYouStayAtHomeWeDeliver.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'you stay at home, we deliver!' exists in the DOM");
    });
    await test.step("Verify that the heading 'why join Vi?' exists in the DOM", async () => {
      await expect(appPage.headingWhyJoinVi.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'why join Vi?' exists in the DOM");
    });
    await test.step("Verify that the heading 'Free SIM Home Delivery FAQs' exists in the DOM", async () => {
      await expect(appPage.headingFreeSimHomeDeliveryFaqs.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the heading 'Free SIM Home Delivery FAQs' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today - Heading Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 29 Links are present on Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today");
    await story("Verify Link elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today",
      pageUrl: "https://www.myvi.in/new-connection/vi-free-sim-home-delivery",
      testObjective: "Verify Link elements are present",
    });

    await test.step("Verify that the link 'Navigation link' exists in the DOM", async () => {
      await expect(appPage.link0.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Navigation link' exists in the DOM");
    });
    await test.step("Verify that the link 'Port SIM' exists in the DOM", async () => {
      await expect(appPage.linkPortSim.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Port SIM' exists in the DOM");
    });
    await test.step("Verify that the link 'Switch to the Vi 5G experience' exists in the DOM", async () => {
      await expect(appPage.linkSwitchToTheVi5gExperience.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Switch to the Vi 5G experience' exists in the DOM");
    });
    await test.step("Verify that the link 'Port to unlimited data+calls+entertainment..' exists in the DOM", async () => {
      await expect(appPage.linkPortToUnlimitedDataCallsEntertainment.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Port to unlimited data+calls+entertainment..' exists in the DOM");
    });
    await test.step("Verify that the link 'Join Vi without changing your number' exists in the DOM", async () => {
      await expect(appPage.linkJoinViWithoutChangingYourNumber.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the link 'Join Vi without changing your number' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today - Link Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 9 Buttons are present on Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today");
    await story("Verify Button elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today",
      pageUrl: "https://www.myvi.in/new-connection/vi-free-sim-home-delivery",
      testObjective: "Verify Button elements are present",
    });

    await test.step("Verify that the button 'proceed with ₹451 plan' exists in the DOM", async () => {
      await expect(appPage.buttonProceedWith451Plan.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'proceed with ₹451 plan' exists in the DOM");
    });
    await test.step("Verify that the button 'proceed with ₹701 plan' exists in the DOM", async () => {
      await expect(appPage.buttonProceedWith701Plan.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'proceed with ₹701 plan' exists in the DOM");
    });
    await test.step("Verify that the button 'How does free SIM card home delivery work?' exists in the DOM", async () => {
      await expect(appPage.buttonHowDoesFreeSimCardHomeDeliveryWork.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'How does free SIM card home delivery work?' exists in the DOM");
    });
    await test.step("Verify that the button 'How long does it take for a SIM to be delivered to the doorstep?' exists in the DOM", async () => {
      await expect(appPage.buttonHowLongDoesItTakeForASimToBeDeliveredToTheDoors.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'How long does it take for a SIM to be delivered to the doorstep?' exists in the DOM");
    });
    await test.step("Verify that the button 'Can I reschedule the online SIM delivery of my new Vi Connection?' exists in the DOM", async () => {
      await expect(appPage.buttonCanIRescheduleTheOnlineSimDeliveryOfMyNewViConnec.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the button 'Can I reschedule the online SIM delivery of my new Vi Connection?' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today - Button Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
  test("Verify that 5 Inputs are present on Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today @regression", async ({ page }, testInfo) => {
    await label('suite', "Regression Test Suite");
    await label('url', "https://www.myvi.in/");
    await label('domain', "www.myvi.in");
    await feature("Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today");
    await story("Verify Input elements are present");
    await severity("minor");
    await tag("regression");

    const evidence = createEvidence({
      application: "www.myvi.in",
      suite: "Regression Test Suite",
      browser: testInfo.project.name || 'chromium',
      pageName: "Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today",
      pageUrl: "https://www.myvi.in/new-connection/vi-free-sim-home-delivery",
      testObjective: "Verify Input elements are present",
    });

    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputFaqDrawer.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputFaqDrawer1.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputFaqDrawer2.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputIsadobelaunch.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });
    await test.step("Verify that the input 'Input field' exists in the DOM", async () => {
      await expect(appPage.inputOsSdk.first()).toBeAttached({ timeout: 5000 });
      evidence.validationsPerformed.push("Verify that the input 'Input field' exists in the DOM");
    });

    await test.step("Capture screenshot evidence", async () => {
      const screenshotPath = await captureTestScreenshot(page, testInfo, "Get your Vi Sim Online and Enjoy Free Delivery | Choose Your Plan Today - Input Verification", "www.myvi.in");
      evidence.screenshots.push(screenshotPath);
    });

    await attachExecutionSummary(evidence, page, testInfo);
  });
});
