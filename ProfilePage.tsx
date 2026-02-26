'use client'

import { Page } from '@/app/page'
import BottomNav from './BottomNav'

interface Props {
  navigate: (p: Page) => void
  isLoggedIn: boolean
}

const GRID_GRADIENTS = [
  'from-[#00B8D9]/40 to-[#00F2C7]/50',
  'from-[#9933FF]/40 to-[#00B8D9]/50',
  'from-[#00F2C7]/40 to-[#00B8D9]/30',
  'from-[#FF4FA0]/40 to-[#9933FF]/50',
  'from-[#00B8D9]/30 to-[#002440]/60',
  'from-[#9933FF]/30 to-[#FF4FA0]/40',
  'from-[#00F2C7]/30 to-[#9933FF]/40',
  'from-[#FF4FA0]/30 to-[#00B8D9]/40',
  'from-[#00B8D9]/50 to-[#9933FF]/30',
]

const STATS = [
  { label: 'Postlar',      value: '24'   },
  { label: 'Obunachilar', value: '1.2K' },
  { label: 'Obunalar',    value: '486'  },
]

export default function ProfilePage({ navigate, isLoggedIn }: Props) {
  return (
    <div className="min-h-screen pb-32">

      {/* Header */}
      <header className="sticky top-0 z-40 px-4 pt-4 pb-3">
        <div className="glass rounded-2xl px-4 py-3 flex items-center justify-between max-w-lg mx-auto">
          <button onClick={() => navigate('home')} className="w-9 h-9 btn-glass rounded-xl flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          </button>

          <div className="flex items-center gap-1.5">
            <span className="font-display font-bold text-white text-base">username</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.40)" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
          </div>

          <button className="w-9 h-9 btn-glass rounded-xl flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </header>

      <div className="max-w-lg mx-auto px-4 space-y-4">

        {/* Profile card */}
        <div className="glass-card rounded-3xl p-5 space-y-5 animate-slide-up">
          {/* Avatar + stats */}
          <div className="flex items-center gap-4">
            <div className="ring-gradient rounded-full p-[2.5px] flex-shrink-0">
              <div className="w-20 h-20 rounded-full btn-primary flex items-center justify-center text-4xl">
                👤
              </div>
            </div>

            <div className="flex-1 flex justify-around">
              {STATS.map(s => (
                <div key={s.label} className="text-center">
                  <p className="font-display font-bold text-xl text-gradient">{s.value}</p>
                  <p className="text-white/45 text-xs font-body mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-1">
            <p className="font-semibold text-white text-sm font-body">Sizning Ismingiz</p>
            <p className="text-white/55 text-sm font-body">O'zbekistonlik foydalanuvchi 🇺🇿</p>
            <p className="text-white/40 text-sm font-body">UzbGram'da o'zbek madaniyatini ulashing!</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            {isLoggedIn ? (
              <>
                <button className="flex-1 btn-glass py-2.5 rounded-xl text-white/80 text-sm font-semibold font-body flex items-center justify-center gap-1.5">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                  Tahrirlash
                </button>
                <button className="flex-1 btn-glass py-2.5 rounded-xl text-white/80 text-sm font-semibold font-body flex items-center justify-center gap-1.5">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                  Ulashish
                </button>
              </>
            ) : (
              <button
                onClick={() => navigate('login')}
                className="flex-1 btn-primary py-2.5 rounded-xl text-white text-sm font-semibold font-body"
              >
                Obuna bo'lish
              </button>
            )}
          </div>
        </div>

        {/* Post grid */}
        <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
          <div className="flex items-center gap-2 mb-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            <span className="text-white/50 text-sm font-body font-medium">Postlar</span>
          </div>

          <div className="grid grid-cols-3 gap-0.5 rounded-2xl overflow-hidden">
            {GRID_GRADIENTS.map((gradient, i) => (
              <div
                key={i}
                className={`aspect-square bg-gradient-to-br ${gradient} flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity relative group`}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                </svg>
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex items-center gap-3 text-white text-xs font-body font-semibold">
                    <span>❤️ {Math.floor(Math.random() * 900) + 100}</span>
                    <span>💬 {Math.floor(Math.random() * 50) + 5}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav active="profile" navigate={navigate} />
    </div>
  )
}
