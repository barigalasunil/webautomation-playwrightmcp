import { useState, useCallback, useMemo } from 'react'
import { RunForm } from './components/RunForm'
import { ProgressPanel } from './components/ProgressPanel'
import { ResultsBento } from './components/ResultsBento'
import type { ProgressEvent, RunSummary } from './types'

export type RunStatus = 'idle' | 'running' | 'done' | 'error'

export interface RunState {
  status: RunStatus
  runId: string | null
  events: ProgressEvent[]
  summary: RunSummary | null
  error: string | null
  errorLog: string | null
}

function Particles() {
  const particles = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 12}s`,
      duration: `${8 + Math.random() * 8}s`,
      size: `${1 + Math.random() * 2}px`,
    })),
  [])

  return (
    <div className="particles">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  )
}

function App() {
  const [runState, setRunState] = useState<RunState>({
    status: 'idle',
    runId: null,
    events: [],
    summary: null,
    error: null,
    errorLog: null,
  })

  const handleRunStart = useCallback((runId: string) => {
    setRunState({
      status: 'running',
      runId,
      events: [],
      summary: null,
      error: null,
      errorLog: null,
    })

    const eventSource = new EventSource(`/api/run/${runId}/progress`)

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data) as ProgressEvent

        setRunState(prev => ({
          ...prev,
          events: [...prev.events, data],
          ...(data.phase === 'done' ? { status: 'done' as const, summary: data.summary } : {}),
          ...(data.phase === 'error' ? { status: 'error' as const, error: data.message, errorLog: data.log ?? null } : {}),
        }))

        if (data.phase === 'done' || data.phase === 'error') {
          eventSource.close()
        }
      } catch { /* ignore parse errors */ }
    }

    eventSource.onerror = () => {
      setRunState(prev => ({
        ...prev,
        status: 'error',
        error: 'Connection lost',
      }))
      eventSource.close()
    }
  }, [])

  const handleReset = useCallback(() => {
    setRunState({
      status: 'idle',
      runId: null,
      events: [],
      summary: null,
      error: null,
      errorLog: null,
    })
  }, [])

  const currentPhase = runState.events
    .filter(e => e.phase !== 'running')
    .pop()?.phase || (runState.status === 'running' ? 'exploring' : null)

  return (
    <div className="min-h-screen p-8 relative grid-pattern">
      <Particles />
      <div className="max-w-5xl mx-auto relative z-10">
        <h1 className="text-3xl font-bold mb-2 glow-text text-[var(--matrix-green)] cursor-blink">
          QAssassin
        </h1>
        <p className="text-sm text-[var(--text-muted)] mb-8 tracking-wider uppercase">
          Automated Test Intelligence
        </p>

        <RunForm
          disabled={runState.status === 'running'}
          onRun={handleRunStart}
        />

        {runState.status === 'running' && (
          <ProgressPanel
            events={runState.events}
            currentPhase={currentPhase}
          />
        )}

        {runState.status === 'done' && runState.summary && (
          <ResultsBento
            summary={runState.summary}
            runId={runState.runId!}
            onReset={handleReset}
          />
        )}

        {runState.status === 'error' && (
          <div className="mt-8 p-6 bg-[#1a0000] rounded-lg border border-[var(--fail-red)]/30">
            <h2 className="text-xl font-semibold text-[var(--fail-red)] mb-2">ERROR</h2>
            <p className="text-[var(--fail-red)]/80 whitespace-pre-wrap">{runState.error}</p>
            {runState.errorLog && (
              <details open className="mt-4">
                <summary className="text-sm text-[var(--fail-red)]/70 cursor-pointer hover:text-[var(--fail-red)]">
                  [SHOW OUTPUT LOG]
                </summary>
                <pre className="mt-2 p-4 bg-black rounded border border-[var(--fail-red)]/20 max-h-64 overflow-y-auto font-mono text-xs text-[var(--fail-red)]/60 whitespace-pre-wrap">
                  {runState.errorLog}
                </pre>
              </details>
            )}
            <button
              onClick={handleReset}
              className="mt-4 px-4 py-2 bg-[var(--fail-red)]/20 hover:bg-[var(--fail-red)]/30 border border-[var(--fail-red)]/40 rounded transition-all btn-glow text-[var(--fail-red)]"
            >
              [RETRY]
            </button>
            {runState.runId && (
              <div className="flex gap-3 mt-3">
                <a
                  href={`/api/run/${runState.runId}/logs`}
                  download
                  className="px-4 py-2 bg-cyan-600/10 hover:bg-cyan-600/20 border border-cyan-500/30 rounded text-cyan-400 text-sm transition-all btn-glow tracking-wider"
                >
                  [ RUN LOG (MD) ]
                </a>
                <a
                  href={`/api/run/${runState.runId}/debug`}
                  download
                  className="px-4 py-2 bg-teal-600/10 hover:bg-teal-600/20 border border-teal-500/30 rounded text-teal-400 text-sm transition-all btn-glow tracking-wider"
                >
                  [ DOWNLOAD DEBUG ]
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
