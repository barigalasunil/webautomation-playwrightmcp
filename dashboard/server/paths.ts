import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SERVER_ROOT = path.resolve(__dirname, 'runReports');

export function createServerRoot(): string {
  if (!fs.existsSync(SERVER_ROOT)) {
    fs.mkdirSync(SERVER_ROOT, { recursive: true });
  }
  return SERVER_ROOT;
}

export function getServerRoot(): string {
  return SERVER_ROOT;
}
