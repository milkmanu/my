'use client'

import { useState } from 'react'
import { Page } from '@/app/page'

interface Props { navigate: (p: Page) => void }

function getStrength(pass: string) {
  let s = 0
  if (pass.length >= 6)                        s++
  if (pass.length >= 10)                       s++
  if (/[A-Z]/.test(pass))                      s++
  if (/[0-9]/.test(pass))                      s++
  return s
}

const STRENGTH_LABELS = ['', 'Zaif', "O'rtacha", 'Yaxshi', 'Kuchli']
const STRENGTH_COLORS = ['', '#ef4444', '#f97316', 'var(--accent)', '#22c55e']

export default function SignupPage({ navigate }: Props) {
  const [form, setForm]     = useState({ username: '', password: '', email: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')
  const [success, setSuccess] = useState(false)
  const [showPass, setShowPass] = useState(false)

  const strength = getStrength(form.password)

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.username.trim())    { setError('Foydalanuvchi nomini kiriting.'); return }
    if (form.password.length < 6) { setError('Parol kamida 6 ta belgidan iborat bo\'lishi kerak.'); return }
    setLoading(true); setError('')
    await new Promise(r => setTimeout(r, 1400))
    setLoading(false)
    setSuccess(true)
    setTimeout(() => navigate('login'), 2000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 relative overflow-hidden">

      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[var(--accent)]/15 blur-[100px] animate-float-slow" />
      <div className="absolute bottom-10 left-0 w-64 h-64 rounded-full bg-[var(--primary)]/12 blur-[90px] animate-float-medium" />

      <div className="w-full max-w-sm animate-slide-up">

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-18 h-18 rounded-full btn-primary mb-4 text-3xl shadow-xl shadow-[var(--accent)]/30 w-16 h-16">
            ✨
          </div>
          <h1 className="font-display text-3xl font-bold text-gradient mb-1">Ro'yxatdan o'tish</h1>
          <p className="text-white/40 text-sm font-body">UzbGram jamoasiga qo'shiling!</p>
        </div>

        {success ? (
          <div className="glass-strong rounded-3xl p-8 text-center space-y-4 animate-fade-in">
            <div className="text-5xl animate-bounce">🎉</div>
            <h3 className="font-display text-xl font-bold text-gradient">Tabriklaymiz!</h3>
            <p className="text-white/60 text-sm font-body">Hisobingiz yaratildi. Kirish sahifasiga o'tyapmiz...</p>
            <div className="w-8 h-8 border-2 border-[var(--primary)]/30 border-t-[var(--primary)] rounded-full animate-spin mx-auto" />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-strong rounded-3xl p-7 space-y-4">
            <h2 className="font-display text-xl font-bold text-white mb-1">Yangi hisob</h2>

            {error && (
              <div className="bg-red-500/15 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-xl font-body">
                {error}
              </div>
            )}

            {/* Username */}
            <InputField
              icon={<UserIcon />}
              label="Foydalanuvchi nomi"
              type="text"
              placeholder="username"
              value={form.username}
              onChange={update('username')}
              autoComplete="username"
            />

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-white/50 text-xs font-body uppercase tracking-wider">Parol</label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2"><LockIcon /></span>
                <input
                  type={showPass ? 'text' : 'password'}
                  value={form.password}
                  onChange={update('password')}
                  placeholder="Kamida 6 ta belgi"
                  className="input-glass w-full pl-10 pr-12 py-3.5 rounded-xl text-sm font-body"
                  autoComplete="new-password"
                />
                <button type="button" onClick={() => setShowPass(p => !p)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/35 hover:text-white/60 transition-colors">
                  <EyeIcon open={showPass} />
                </button>
              </div>

              {/* Parol kuchi */}
              {form.password.length > 0 && (
                <div className="space-y-1.5 pt-1">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="flex-1 h-1 rounded-full transition-all duration-300"
                        style={{ background: i <= strength ? STRENGTH_COLORS[strength] : 'rgba(255,255,255,0.10)' }} />
                    ))}
                  </div>
                  <p className="text-xs font-body" style={{ color: STRENGTH_COLORS[strength] }}>
                    Parol kuchi: {STRENGTH_LABELS[strength]}
                  </p>
                </div>
              )}
            </div>

            {/* Email */}
            <InputField
              icon={<MailIcon />}
              label="Email (ixtiyoriy)"
              type="email"
              placeholder="email@manzil.uz"
              value={form.email}
              onChange={update('email')}
              autoComplete="email"
            />

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-4 rounded-2xl text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>Hisob yaratish ✨</>
              )}
            </button>
          </form>
        )}

        <div className="text-center mt-5 flex items-center justify-center gap-2">
          <span className="text-white/40 text-sm font-body">Allaqachon hisobingiz bormi?</span>
          <button onClick={() => navigate('login')}
            className="text-gradient font-semibold text-sm hover:opacity-80 transition-opacity">
            Kirish
          </button>
        </div>

        <button onClick={() => navigate('home')}
          className="flex items-center gap-1.5 text-white/35 text-sm mx-auto mt-4 hover:text-white/60 transition-colors font-body">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Orqaga
        </button>
      </div>
    </div>
  )
}

function InputField({ icon, label, type, placeholder, value, onChange, autoComplete }: {
  icon: React.ReactNode; label: string; type: string
  placeholder: string; value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  autoComplete?: string
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-white/50 text-xs font-body uppercase tracking-wider">{label}</label>
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2">{icon}</span>
        <input type={type} value={value} onChange={onChange} placeholder={placeholder}
          autoComplete={autoComplete}
          className="input-glass w-full pl-10 pr-4 py-3.5 rounded-xl text-sm font-body" />
      </div>
    </div>
  )
}

function UserIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
}
function LockIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
}
function MailIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
}
function EyeIcon({ open }: { open: boolean }) {
  return open
    ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
    : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
}
