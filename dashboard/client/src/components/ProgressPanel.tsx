import { useEffect, useRef } from 'react'
import type { ProgressEvent } from '../types'

interface ProgressPanelProps {
  events: ProgressEvent[]
  currentPhase: string | null
}

const PHASES = ['exploring', 'generating', 'running', 'done'] as const

function formatTime(ts: number): string {
  const d = new Date(ts)
  return d.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
}

export function ProgressPanel({ events, currentPhase }: ProgressPanelProps) {
  const logRef = useRef<HTMLDivElement>(null)

  const runningEvent = events.find(e => e.phase === 'running')
  const progress = runningEvent
    ? runningEvent.completed && runningEvent.total
      ? (runningEvent.completed / runningEvent.total) * 100
      : null
    : null

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight
    }
  }, [events.length])

  const breadcrumbs = events.filter(e => e.message)

  const passed = runningEvent?.passed ?? 0
  const failed = runningEvent?.failed ?? 0
  const completed = runningEvent?.completed ?? 0
  const total = runningEvent?.total ?? 0

  return (
    <div className="mt-8 p-6 bg-[var(--bg-card)] rounded-lg border border-[var(--border-dim)]">
      <h2 className="text-xl font-semibold mb-4 text-[var(--matrix-green)] glow-text">
        [ STATUS ]
      </h2>

      {/* Phase Indicator */}
      <div className="flex items-center gap-2 mb-4">
        {PHASES.map((phase, i) => {
          const isActive = currentPhase === phase
          const isComplete = PHASES.indexOf(currentPhase as typeof PHASES[number]) > i
          return (
            <div key={phase} className="flex items-center">
              <div
                className={`px-3 py-1 rounded text-xs tracking-wider transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[var(--matrix-green)]/15 border border-[var(--matrix-green-dim)] text-[var(--matrix-green)] phase-active glow-border'
                    : isComplete
                    ? 'bg-[var(--matrix-green)]/10 border border-[var(--matrix-green)]/20 text-[var(--matrix-green)]/70 phase-complete'
                    : 'bg-black border border-[var(--border-dim)] text-[var(--text-muted)]'
                }`}
              >
                {phase.toUpperCase()}
              </div>
              {i < PHASES.length - 1 && (
                <div className={`w-6 h-px mx-1 transition-colors ${isComplete ? 'bg-[var(--matrix-green)]/30' : 'bg-[var(--border-dim)]'}`} />
              )}
            </div>
          )
        })}
      </div>

      {/* Stat Chips */}
      {currentPhase === 'running' && (
        <div className="flex gap-3 mb-4 text-xs tracking-wider whitespace-nowrap">
          <span className="px-2 py-0.5 rounded bg-[var(--matrix-green)]/10 border border-[var(--matrix-green)]/20 text-[var(--matrix-green)]">
            PASS: {passed}
          </span>
          <span className="px-2 py-0.5 rounded bg-[var(--fail-red)]/10 border border-[var(--fail-red)]/20 text-[var(--fail-red)]">
            FAIL: {failed}
          </span>
          <span className="px-2 py-0.5 rounded bg-black border border-[var(--border-dim)] text-[var(--text-secondary)]">
            {completed}/{total}
          </span>
        </div>
      )}

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="h-2 bg-black rounded-full overflow-hidden border border-[var(--border-dim)]">
          {progress !== null ? (
            <div
              className="h-full bg-[var(--matrix-green)] transition-all duration-300 rounded-full"
              style={{ width: `${progress}%`, boxShadow: '0 0 8px var(--matrix-green-glow)' }}
            />
          ) : currentPhase && currentPhase !== 'done' ? (
            <div className="h-full bg-[var(--matrix-green)]/30 animate-pulse rounded-full" style={{ width: '100%' }} />
          ) : null}
        </div>
        <div className="mt-2 text-xs text-[var(--text-muted)] tracking-wider">
          {progress !== null
            ? `[ ${runningEvent?.completed || 0} / ${runningEvent?.total || 0} TESTS ]`
            : currentPhase === 'exploring'
            ? '[ SCANNING TARGET... ]'
            : currentPhase === 'generating'
            ? '[ CRAFTING PAYLOADS... ]'
            : currentPhase === 'running'
            ? '[ ENGAGING... ]'
            : currentPhase === 'done'
            ? '[ MISSION COMPLETE ]'
            : '[ INITIALIZING... ]'}
        </div>
      </div>

      {/* Live Breadcrumb Log */}
      <div className="text-xs text-[var(--text-muted)] mb-2 tracking-wider">
        [ LOG — {breadcrumbs.length} entries ]
      </div>
      <div
        ref={logRef}
        className="p-4 bg-black rounded border border-[var(--border-dim)] h-64 overflow-y-auto font-mono text-xs"
      >
        {breadcrumbs.length === 0 ? (
          <div className="text-[var(--text-muted)]">Waiting for signal...</div>
        ) : (
          breadcrumbs.map((event, i) => {
            const phaseColor: Record<string, string> = {
              exploring: 'text-cyan-400',
              generating: 'text-[var(--warn-amber)]',
              running: 'text-[var(--matrix-green)]',
              done: 'text-[var(--matrix-green)]',
              error: 'text-[var(--fail-red)]',
            }
            return (
              <div key={i} className="py-0.5 flex gap-2">
                <span className="text-[var(--text-muted)] shrink-0">{formatTime(event.timestamp ?? Date.now())}</span>
                <span className={`shrink-0 ${phaseColor[event.phase] || 'text-[var(--text-secondary)]'}`}>
                  [{event.phase.toUpperCase()}]
                </span>
                <span className="text-[var(--text-primary)]">{event.message}</span>
              </div>
            )
          })
        )}
      </div>

      {/* Error Log */}
      {events.some(e => e.phase === 'error') && (
        <details open className="mt-4">
          <summary className="text-xs text-[var(--fail-red)] cursor-pointer tracking-wider">
            [ ERROR DETAILS ]
          </summary>
          <div className="mt-2 p-4 bg-[#1a0000] rounded border border-[var(--fail-red)]/20 font-mono text-xs text-[var(--fail-red)]/80 max-h-40 overflow-y-auto">
            {events.filter(e => e.phase === 'error').map((e, i) => (
              <div key={i}>{e.message}</div>
            ))}
          </div>
        </details>
      )}
    </div>
  )
}
