export function toTsStringLiteral(input: string): string {
  if (input === undefined || input === null) return '""';
  return JSON.stringify(input);
}
