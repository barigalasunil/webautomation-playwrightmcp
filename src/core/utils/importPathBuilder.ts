import path from 'node:path';

export function buildRelativeImportPath(fromFile: string, toFile: string): string {
  const fromDir = path.dirname(path.resolve(fromFile));
  const toFileAbs = path.resolve(toFile);
  const rel = path.relative(fromDir, toFileAbs);
  let normalized = rel.replace(/\\/g, '/');
  normalized = normalized.replace(/\.ts$/, '');
  if (!normalized.startsWith('.')) {
    normalized = './' + normalized;
  }
  return normalized;
}
