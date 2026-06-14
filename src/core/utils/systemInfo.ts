import { cpus } from 'node:os';

export function getCpuCount(): number {
  return cpus().length;
}

export function getRecommendedWorkers(): number {
  return Math.max(1, Math.min(getCpuCount() - 1, 4));
}
