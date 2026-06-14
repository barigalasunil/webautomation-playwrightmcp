export function toReadablePageName(title: string): string {
  if (!title || title.trim().length === 0) return 'the page';
  return title.trim().replace(/\s+/g, ' ').substring(0, 100);
}

export function toReadableElementName(type: string, text: string, fallback: string): string {
  if (text && text.trim().length > 0) {
    const clean = text.trim().substring(0, 80);
    return `'${clean}'`;
  }
  const fallbacks: Record<string, string> = {
    heading: 'Page heading', link: 'Navigation link', button: 'Primary button',
    input: 'Input field', form: 'Form', table: 'Data table',
    menu: 'Menu item', dropdown: 'Dropdown menu', textBlock: 'Text content', element: 'Element',
  };
  return fallbacks[type] || fallback || 'Element';
}

export function toReadableTestTitle(pageName: string, objective: string): string {
  return `Verify that ${toReadablePageName(pageName)} ${objective}`;
}

export function toReadableSuiteName(suite: string): string {
  const map: Record<string, string> = { smoke: 'Smoke Test Suite', sanity: 'Sanity Test Suite', regression: 'Regression Test Suite' };
  return map[suite.toLowerCase()] || 'Test Suite';
}

export function toReadableElementType(type: string): string {
  const map: Record<string, string> = {
    heading: 'heading', link: 'link', button: 'button', input: 'input field',
    form: 'form', table: 'data table', menu: 'navigation menu', dropdown: 'dropdown menu', textBlock: 'text block',
  };
  return map[type] || type;
}

export function toSafeFileName(name: string): string {
  return name.replace(/[^a-zA-Z0-9_\-. ]/g, '_').replace(/\s+/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '').substring(0, 200);
}

export function toTitleCase(text: string): string {
  if (!text) return '';
  return text.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/[-_]/g, ' ').replace(/\s+/g, ' ').trim().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}
