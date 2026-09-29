/**
 * Console + network capture for ad-hoc audits.
 * The listeners themselves live in browserSessions.ts (attached before
 * navigation so nothing is missed); this module snapshots what was collected.
 */
import { AdhocSessions, ConsoleErrorEntry, FailedRequestEntry } from '../browserSessions';

export interface ConsoleNetworkResult {
  consoleErrors: ConsoleErrorEntry[];
  failedRequests: FailedRequestEntry[];
}

export async function captureConsoleAndNetwork(
  sessions: AdhocSessions
): Promise<ConsoleNetworkResult> {
  // Give late-firing errors (analytics, tag managers) one extra beat to land.
  await new Promise(resolve => setTimeout(resolve, 1500));
  return {
    consoleErrors: [...sessions.consoleErrors],
    failedRequests: [...sessions.failedRequests],
  };
}
