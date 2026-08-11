export interface ProgressEvent {
  phase: 'exploring' | 'generating' | 'running' | 'done' | 'error'
  url?: string
  domain?: string
  suite?: string
  testsFound?: number
  total?: number
  completed?: number
  passed?: number
  failed?: number
  browsers?: string[]
  summary?: RunSummary
  message?: string
  log?: string
  timestamp?: number
}

export interface RunSummary {
  total: number
  passed: number
  failed: number
  skipped: number
  flaky: number
  durationMs: number
  browsers: string[]
  suite: string
  url: string
}
