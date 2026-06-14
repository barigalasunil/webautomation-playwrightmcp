export function formatTestTitle(pageTitle: string, action: string): string {
  const cleanTitle = pageTitle?.trim() || 'the page';
  return `Verify that ${cleanTitle} ${action}`;
}

export function formatDescribeTitle(applicationName: string, pageTitle: string): string {
  const safeTitle = pageTitle?.trim() || 'Untitled Page';
  return `${applicationName} - ${safeTitle}`;
}

export function formatStepDescription(action: string, target?: string): string {
  if (target) {
    return `${action} "${target}"`;
  }
  return action;
}

export function generateOpeningStep(url: string): string {
  return `Open the configured application URL: ${url}`;
}

export function generatePageLoadStep(): string {
  return 'Verify the page is loaded successfully';
}

export function generateScreenshotStep(): string {
  return 'Capture final screenshot for report evidence';
}

export function generateElementVisibilityStep(type: string, name: string): string {
  return `Verify that the ${type} "${name}" is visible on the page`;
}

export function generateElementClickStep(name: string): string {
  return `Click on the "${name}" element`;
}

export function generateElementFillStep(name: string, value?: string): string {
  if (value) {
    return `Enter "${value}" into the "${name}" input field`;
  }
  return `Enter a value into the "${name}" input field`;
}

export function generateNavigationStep(url: string): string {
  return `Navigate to ${url}`;
}

export function generateTitleVerificationStep(expectedTitle: string): string {
  return `Verify that the page title is "${expectedTitle}"`;
}

export function generateUrlVerificationStep(expectedUrl: string): string {
  return `Verify that the URL matches ${expectedUrl}`;
}

export function generateLoginStep(): string {
  return 'Authenticate with valid credentials';
}

export function generateSearchStep(query: string): string {
  return `Search for "${query}"`;
}

export function generateTableVerificationStep(name: string): string {
  return `Verify that the table "${name}" contains the expected data`;
}

export function generateFormVerificationStep(name: string): string {
  return `Verify that the form "${name}" is displayed correctly`;
}

export function generateMenuVerificationStep(name: string): string {
  return `Verify that the menu "${name}" contains all expected options`;
}

export function generateDropdownVerificationStep(name: string): string {
  return `Verify that the dropdown "${name}" has all options available`;
}

export function generateHeadingVerificationStep(text: string): string {
  return `Verify that the heading "${text}" is displayed correctly`;
}

export function generateLinkVerificationStep(text: string): string {
  return `Verify that the link "${text}" is clickable and navigates correctly`;
}

export function generateButtonVerificationStep(text: string): string {
  return `Verify that the button "${text}" is clickable and functional`;
}

export function generateInputVerificationStep(name: string): string {
  return `Verify that the input field "${name}" accepts user input`;
}
