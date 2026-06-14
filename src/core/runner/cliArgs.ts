import { validateMode, validateBrowsers } from '../../config/configValidator';

export interface CliArgs {
  suite?: string;
  browsers?: string;
  urls?: string;
  mode?: string;
  runMode?: string;
  workers?: string;
  debug?: boolean;
}

export function parseCliArgs(): CliArgs {
  const args: CliArgs = {};
  for (const arg of process.argv.slice(2)) {
    if (arg.startsWith('--')) {
      const eqIndex = arg.indexOf('=');
      if (eqIndex > 0) {
        const key = arg.slice(2, eqIndex);
        const value = arg.slice(eqIndex + 1);
        (args as any)[key] = value;
      } else {
        const key = arg.slice(2);
        if (key === 'debug') {
          args.debug = true;
        } else {
          (args as any)[key] = 'true';
        }
      }
    }
  }

  if (args.mode) {
    validateMode(args.mode);
  }

  if (args.browsers) {
    const browsers = args.browsers.split(',').map(b => b.trim().toLowerCase()).filter(b => b.length > 0);
    validateBrowsers(browsers);
  }

  return args;
}
