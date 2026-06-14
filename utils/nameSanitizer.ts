export function sanitizeClassName(name: string): string {
  if (!name || name.trim().length === 0) {
    return 'UnnamedPage';
  }

  let sanitized = name
    .trim()
    .replace(/[^a-zA-Z0-9\s-_]/g, ' ')
    .replace(/[\s-_]+/g, ' ')
    .trim()
    .split(' ')
    .filter(word => word.length > 0)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');

  if (!sanitized || sanitized.length === 0) {
    sanitized = 'UnnamedPage';
  } else {
    if (/^\d/.test(sanitized)) {
      sanitized = 'Page' + sanitized;
    }
    sanitized = sanitized + 'Page';
  }

  return sanitized;
}

export function sanitizeMethodName(name: string, prefix: string = ''): string {
  if (!name || name.trim().length === 0) {
    return prefix + 'Element';
  }

  let sanitized = name
    .trim()
    .replace(/[^a-zA-Z0-9\s-_]/g, ' ')
    .replace(/[\s-_]+/g, ' ')
    .trim()
    .split(' ')
    .filter(word => word.length > 0)
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');

  if (!sanitized || sanitized.length === 0) {
    sanitized = 'element';
  }

  if (/^\d/.test(sanitized)) {
    sanitized = 'element' + sanitized;
  }

  return prefix + sanitized.charAt(0).toUpperCase() + sanitized.slice(1);
}

export function sanitizePropertyName(name: string): string {
  if (!name || name.trim().length === 0) {
    return 'element';
  }

  let sanitized = name
    .trim()
    .replace(/[^a-zA-Z0-9\s-_]/g, ' ')
    .replace(/[\s-_]+/g, ' ')
    .trim()
    .split(' ')
    .filter(word => word.length > 0)
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');

  if (!sanitized || sanitized.length === 0) {
    sanitized = 'element';
  }

  if (/^\d/.test(sanitized)) {
    sanitized = 'element' + sanitized;
  }

  return sanitized;
}

export function makeUniqueNames(names: string[]): string[] {
  const counts = new Map<string, number>();
  const result: string[] = [];

  for (const name of names) {
    const count = counts.get(name) || 0;
    if (count === 0) {
      result.push(name);
      counts.set(name, 1);
    } else {
      const newName = `${name}${count + 1}`;
      result.push(newName);
      counts.set(name, count + 1);
    }
  }

  return result;
}

export function getElementDescriptorFromMetadata(metadata: any): string {
  return metadata.text || metadata.label || metadata.ariaLabel || metadata.placeholder || metadata.name || metadata.id || '';
}

export function sanitizePageTitle(title: string): string {
  if (!title || title.trim().length === 0) {
    return 'UnnamedPage';
  }

  let sanitized = title
    .trim()
    .replace(/[^a-zA-Z0-9\s-_]/g, ' ')
    .replace(/[\s-_]+/g, ' ')
    .trim()
    .split(' ')
    .filter(word => word.length > 0)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');

  if (!sanitized || sanitized.length === 0) {
    return 'UnnamedPage';
  }

  if (/^\d/.test(sanitized)) {
    sanitized = 'Page' + sanitized;
  }

  return sanitized;
}