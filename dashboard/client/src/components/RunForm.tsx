import { useState } from 'react'

interface RunFormProps {
  disabled: boolean
  onRun: (runId: string) => void
}

const SUITES = ['smoke', 'sanity', 'regression'] as const
const BROWSERS = ['chromium', 'firefox', 'webkit'] as const

export function RunForm({ disabled, onRun }: RunFormProps) {
  const [url, setUrl] = useState('')
  const [suite, setSuite] = useState<'smoke' | 'sanity' | 'regression'>('smoke')
  const [mode, setMode] = useState<'headless' | 'headed'>('headless')
  const [selectedBrowsers, setSelectedBrowsers] = useState<string[]>(['chromium'])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const isValidUrl = (str: string) => {
    try {
      new URL(str)
      return true
    } catch {
      return false
    }
  }

  const toggleBrowser = (browser: string) => {
    setSelectedBrowsers(prev => {
      if (prev.includes(browser)) {
        return prev.filter(b => b !== browser)
      }
      if (prev.length >= 4) return prev
      return [...prev, browser]
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!url || !isValidUrl(url)) {
      setError('Enter a valid URL')
      return
    }

    if (selectedBrowsers.length === 0) {
      setError('Select at least one browser')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, suite, mode, browsers: selectedBrowsers }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Failed to start run')
        return
      }

      onRun(data.runId)
    } catch {
      setError('Failed to connect to server')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-[var(--bg-card)] rounded-lg border border-[var(--border-dim)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* URL Input */}
        <div className="md:col-span-2">
          <label className="block text-xs font-medium mb-2 text-[var(--matrix-green)] tracking-wider uppercase">
            &gt; target_url
          </label>
          <input
            type="text"
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="https://example.com"
            disabled={disabled}
            className="w-full px-4 py-2 bg-black border border-[var(--border-dim)] rounded focus:outline-none focus:border-[var(--matrix-green-dim)] focus:glow-border disabled:opacity-50 text-sm placeholder-[var(--text-muted)]"
          />
        </div>

        {/* Suite Selection */}
        <div>
          <label className="block text-xs font-medium mb-2 text-[var(--matrix-green)] tracking-wider uppercase">
            &gt; suite
          </label>
          <div className="flex gap-2">
            {SUITES.map(s => (
              <button
                key={s}
                type="button"
                onClick={() => setSuite(s)}
                disabled={disabled}
                className={`px-4 py-2 rounded text-sm transition-all ${
                  suite === s
                    ? 'bg-[var(--matrix-green)]/10 border border-[var(--matrix-green-dim)] text-[var(--matrix-green)] glow-border'
                    : 'bg-black border border-[var(--border-dim)] text-[var(--text-secondary)] hover:border-[var(--text-muted)]'
                } disabled:opacity-50`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Mode Toggle */}
        <div>
          <label className="block text-xs font-medium mb-2 text-[var(--matrix-green)] tracking-wider uppercase">
            &gt; mode
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setMode('headless')}
              disabled={disabled}
              className={`px-4 py-2 rounded text-sm transition-all ${
                mode === 'headless'
                  ? 'bg-[var(--matrix-green)]/10 border border-[var(--matrix-green-dim)] text-[var(--matrix-green)] glow-border'
                  : 'bg-black border border-[var(--border-dim)] text-[var(--text-secondary)] hover:border-[var(--text-muted)]'
              } disabled:opacity-50`}
            >
              headless
            </button>
            <button
              type="button"
              onClick={() => setMode('headed')}
              disabled={disabled}
              className={`px-4 py-2 rounded text-sm transition-all ${
                mode === 'headed'
                  ? 'bg-[var(--matrix-green)]/10 border border-[var(--matrix-green-dim)] text-[var(--matrix-green)] glow-border'
                  : 'bg-black border border-[var(--border-dim)] text-[var(--text-secondary)] hover:border-[var(--text-muted)]'
              } disabled:opacity-50`}
            >
              headed
            </button>
          </div>
        </div>

        {/* Browser Selection */}
        <div className="md:col-span-2">
          <label className="block text-xs font-medium mb-2 text-[var(--matrix-green)] tracking-wider uppercase">
            &gt; browsers (max 4)
          </label>
          <div className="flex gap-3">
            {BROWSERS.map(b => (
              <label
                key={b}
                className={`flex items-center gap-2 px-4 py-2 rounded cursor-pointer transition-all text-sm ${
                  selectedBrowsers.includes(b)
                    ? 'bg-[var(--matrix-green)]/10 border border-[var(--matrix-green-dim)] text-[var(--matrix-green)] glow-border'
                    : 'bg-black border border-[var(--border-dim)] text-[var(--text-secondary)] hover:border-[var(--text-muted)]'
                } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <input
                  type="checkbox"
                  checked={selectedBrowsers.includes(b)}
                  onChange={() => toggleBrowser(b)}
                  disabled={disabled || (!selectedBrowsers.includes(b) && selectedBrowsers.length >= 4)}
                  className="accent-[var(--matrix-green)]"
                />
                <span>{b}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {error && (
        <div className="mt-4 p-3 bg-[#1a0000] border border-[var(--fail-red)]/30 rounded text-[var(--fail-red)] text-sm">
          [ERR] {error}
        </div>
      )}

      <button
        type="submit"
        disabled={disabled || loading}
        className="mt-6 w-full py-3 bg-[var(--matrix-green)]/10 hover:bg-[var(--matrix-green)]/20 border border-[var(--matrix-green-dim)] disabled:bg-[var(--border-dim)] disabled:border-[var(--border-dim)] disabled:cursor-not-allowed rounded font-semibold transition-all btn-glow text-[var(--matrix-green)] disabled:text-[var(--text-muted)] tracking-wider text-center whitespace-nowrap"
      >
        {loading ? '[ DEPLOYING GREMLINS... ]' : disabled ? '[ POKING YOUR APP... ]' : '[ SUMMON TEST GREMLINS ]'}
      </button>
    </form>
  )
}
