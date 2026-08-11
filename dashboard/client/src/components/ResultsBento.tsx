import { useEffect, useState } from 'react'
import type { RunSummary } from '../types'

interface ResultsBentoProps {
  summary: RunSummary
  runId: string
  onReset: () => void
}

function formatDuration(ms: number): string {
  if (ms === 0) return 'N/A'
  const seconds = Math.floor(ms / 1000)
  const minutes = Math.floor(seconds / 60)
  const secs = seconds % 60
  return minutes > 0 ? `${minutes}m ${secs}s` : `${secs}s`
}

function AnimatedNumber({ value, delay = 0 }: { value: number; delay?: number }) {
  const [displayed, setDisplayed] = useState(0)

  useEffect(() => {
    if (value === 0) { setDisplayed(0); return }
    const start = Date.now()
    const duration = 800
    const timer = setTimeout(() => {
      const tick = () => {
        const elapsed = Date.now() - start - delay
        if (elapsed < 0) { requestAnimationFrame(tick); return }
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setDisplayed(Math.round(eased * value))
        if (progress < 1) requestAnimationFrame(tick)
      }
      tick()
    }, delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return <span>{displayed}</span>
}

export function ResultsBento({ summary, runId, onReset }: ResultsBentoProps) {
  const { total, passed, failed, skipped, flaky, durationMs, browsers, suite, url } = summary

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 text-[var(--matrix-green)] glow-text">
        [ RESULTS ]
      </h2>

      {/* Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-[var(--bg-card)] rounded-lg border border-[var(--border-dim)]">
          <div className="text-2xl font-bold text-[var(--text-primary)] count-animate">
            <AnimatedNumber value={total} />
          </div>
          <div className="text-xs text-[var(--text-muted)] tracking-wider mt-1">TOTAL</div>
        </div>
        <div className="p-4 bg-[var(--bg-card)] rounded-lg border border-[var(--matrix-green)]/20">
          <div className="text-2xl font-bold text-[var(--matrix-green)] count-animate">
            <AnimatedNumber value={passed} delay={100} />
          </div>
          <div className="text-xs text-[var(--text-muted)] tracking-wider mt-1">PASSED</div>
        </div>
        <div className="p-4 bg-[var(--bg-card)] rounded-lg border border-[var(--fail-red)]/20">
          <div className="text-2xl font-bold text-[var(--fail-red)] count-animate">
            <AnimatedNumber value={failed} delay={200} />
          </div>
          <div className="text-xs text-[var(--text-muted)] tracking-wider mt-1">FAILED</div>
        </div>
        <div className="p-4 bg-[var(--bg-card)] rounded-lg border border-[var(--warn-amber)]/20">
          <div className="text-2xl font-bold text-[var(--warn-amber)] count-animate">
            <AnimatedNumber value={skipped + flaky} delay={300} />
          </div>
          <div className="text-xs text-[var(--text-muted)] tracking-wider mt-1">SKIPPED</div>
        </div>
      </div>

      {/* Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-[var(--bg-card)] rounded-lg border border-[var(--border-dim)]">
          <div className="text-xs text-[var(--text-muted)] tracking-wider">DURATION</div>
          <div className="text-lg font-semibold mt-1">{formatDuration(durationMs)}</div>
        </div>
        <div className="p-4 bg-[var(--bg-card)] rounded-lg border border-[var(--border-dim)]">
          <div className="text-xs text-[var(--text-muted)] tracking-wider">SUITE</div>
          <div className="text-lg font-semibold mt-1 uppercase">{suite}</div>
        </div>
        <div className="p-4 bg-[var(--bg-card)] rounded-lg border border-[var(--border-dim)]">
          <div className="text-xs text-[var(--text-muted)] tracking-wider">BROWSERS</div>
          <div className="text-lg font-semibold mt-1 capitalize">{browsers.join(', ')}</div>
        </div>
      </div>

      {/* URL Tested */}
      <div className="p-4 bg-[var(--bg-card)] rounded-lg border border-[var(--border-dim)] mb-6">
        <div className="text-xs text-[var(--text-muted)] tracking-wider">TARGET</div>
        <div className="text-lg font-semibold mt-1 truncate">{url}</div>
      </div>

      {/* Download Buttons */}
      <div className="flex gap-4 mb-6">
        <a
          href={`/api/run/${runId}/report/allure`}
          download
          className="flex-1 py-3 bg-purple-600/10 hover:bg-purple-600/20 border border-purple-500/30 rounded text-center font-semibold transition-all btn-glow text-purple-400 tracking-wider whitespace-nowrap"
        >
          [ ALLURE REPORT ]
        </a>
        <a
          href={`/api/run/${runId}/report/playwright`}
          download
          className="flex-1 py-3 bg-orange-600/10 hover:bg-orange-600/20 border border-orange-500/30 rounded text-center font-semibold transition-all btn-glow text-orange-400 tracking-wider whitespace-nowrap"
        >
          [ PLAYWRIGHT REPORT ]
        </a>
      </div>
      <div className="flex gap-4 mb-6">
        <a
          href={`/api/run/${runId}/logs`}
          download
          className="flex-1 py-3 bg-cyan-600/10 hover:bg-cyan-600/20 border border-cyan-500/30 rounded text-center font-semibold transition-all btn-glow text-cyan-400 tracking-wider whitespace-nowrap"
        >
          [ RUN LOG (MD) ]
        </a>
        <a
          href={`/api/run/${runId}/debug`}
          download
          className="flex-1 py-3 bg-teal-600/10 hover:bg-teal-600/20 border border-teal-500/30 rounded text-center font-semibold transition-all btn-glow text-teal-400 tracking-wider whitespace-nowrap"
        >
          [ DEBUG JSON ]
        </a>
      </div>

      {/* Reset Button */}
      <button
        onClick={onReset}
        className="w-full py-3 bg-[var(--matrix-green)]/10 hover:bg-[var(--matrix-green)]/20 border border-[var(--matrix-green-dim)] rounded font-semibold transition-all btn-glow text-[var(--matrix-green)] tracking-wider text-center whitespace-nowrap"
      >
        [ NEW MISSION ]
      </button>
    </div>
  )
}
