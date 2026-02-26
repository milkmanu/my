'use client'

import { useState } from 'react'
import { Page } from '@/app/page'

interface Props {
  navigate: (p: Page) => void
  onLogin: () => void
}

export default function LoginPage({ navigate, onLogin }: Props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')
  const [showPass, setShowPass] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!username.trim() || !password.trim()) {
      setError('Foydalanuvchi nomi va parolni kiriting.')
      return
    }
    setLoading(true)
    setError('')
    // Simulate API call
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    onLogin()
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">

      {/* Atmosfera effektlari */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[var(--primary)]/20 blur-[100px] animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[var(--purple)]/15 blur-[90px] animate-float-medium" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[var(--accent)]/08 blur-[120px]" />

      <div className="w-full max-w-sm animate-slide-up">

        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full btn-primary mb-5 text-4xl shadow-2xl shadow-[var(--primary)]/40">
            🇺🇿
          </div>
          <h1 className="font-display text-4xl font-bold text-gradient mb-2">UzbGram</h1>
          <p className="text-white/40 text-sm font-body">O'zbek ijtimoiy tarmog'iga xush kelibsiz</p>
        </div>

        {/* Form card */}
        <form onSubmit={handleSubmit} className="glass-strong rounded-3xl p-7 space-y-5">
          <h2 className="font-display text-xl font-bold text-white mb-1">Kirish</h2>

          {error && (
            <div className="bg-red-500/15 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-xl font-body">
              {error}
            </div>
          )}

          {/* Username */}
          <div className="space-y-1.5">
            <label className="text-white/50 text-xs font-body uppercase tracking-wider">Foydalanuvchi nomi</label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </span>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="username"
                className="input-glass w-full pl-10 pr-4 py-3.5 rounded-xl text-sm font-body"
                autoComplete="username"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="text-white/50 text-xs font-body uppercase tracking-wider">Parol</label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </span>
              <input
                type={showPass ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="input-glass w-full pl-10 pr-12 py-3.5 rounded-xl text-sm font-body"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPass(p => !p)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/35 hover:text-white/60 transition-colors"
              >
                {showPass ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                )}
              </button>
            </div>
          </div>

          {/* Kirish tugmasi */}
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full py-4 rounded-2xl text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Kirish
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </>
            )}
          </button>

          <button type="button" className="text-[var(--primary)] text-sm w-full text-center font-body hover:text-[var(--accent)] transition-colors">
            Parolni unutdingizmi?
          </button>
        </form>

        {/* Sign up link */}
        <div className="text-center mt-6 flex items-center justify-center gap-2">
          <span className="text-white/40 text-sm font-body">Akkaunt yo'qmi?</span>
          <button
            onClick={() => navigate('signup')}
            className="text-gradient font-semibold text-sm hover:opacity-80 transition-opacity"
          >
            Ro'yxatdan o'tish
          </button>
        </div>

        <button
          onClick={() => navigate('home')}
          className="flex items-center gap-1.5 text-white/35 text-sm mx-auto mt-4 hover:text-white/60 transition-colors font-body"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Orqaga
        </button>
      </div>
    </div>
  )
}
