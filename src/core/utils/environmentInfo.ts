import os from 'os';

export interface EnvironmentInfo {
  applicationName: string;
  targetUrl: string;
  browser: string;
  headless: boolean;
  os: string;
  nodeVersion: string;
  timestamp: string;
  runType: string;
}

export function collectEnvironmentInfo(params: {
  applicationName: string;
  targetUrl: string;
  browser: string;
  headless: boolean;
}): EnvironmentInfo {
  return {
    applicationName: params.applicationName,
    targetUrl: params.targetUrl,
    browser: params.browser,
    headless: params.headless,
    os: `${os.platform()} ${os.release()}`,
    nodeVersion: process.version,
    timestamp: new Date().toISOString(),
    runType: params.headless ? 'headless' : 'headed',
  };
}

export function writeAllureEnvironmentProperties(info: EnvironmentInfo): string {
  const lines: string[] = [
    `Application=${info.applicationName}`,
    `Target URL=${info.targetUrl}`,
    `Browser=${info.browser}`,
    `Headless=${info.headless}`,
    `OS=${info.os}`,
    `Node Version=${info.nodeVersion}`,
    `Timestamp=${info.timestamp}`,
    `Run Type=${info.runType}`,
  ];
  return lines.join('\n') + '\n';
}
