'use client'

import { useState } from 'react'
import BottomNav from './BottomNav'

export type Page = 'home' | 'login' | 'signup' | 'profile'

interface Props {
  navigate: (p: Page) => void
  isLoggedIn: boolean
  onLogout: () => void
}

const STORIES = [
  { id: 0, name: 'Sizniki',    emoji: '➕', self: true  },
  { id: 1, name: 'dilnoza_uz', emoji: '🌸', self: false },
  { id: 2, name: 'bekzod99',   emoji: '🏔️', self: false },
  { id: 3, name: 'malika',     emoji: '🎨', self: false },
  { id: 4, name: 'javlon_t',   emoji: '🚀', self: false },
  { id: 5, name: 'nodira_m',   emoji: '🌿', self: false },
  { id: 6, name: 'ulugbek',    emoji: '📸', self: false },
]

const POSTS = [
  { id: 1, user: 'dilnoza_uz', emoji: '🌸', location: "Toshkent, O'zbekiston", caption: "Registon maydoni hech qachon bezamasini yo'qotmaydi. 🇺🇿✨", likes: 1284, comments: 47, time: '2 soat oldin', gradient: 'from-[#00B8D9]/30 via-[#00F2C7]/20 to-[#9933FF]/25' },
  { id: 2, user: 'bekzod99',   emoji: '🏔️', location: "Chimyon, O'zbekiston",  caption: "Tog'lar hamisha yangi kuch bilan to'ldiradi. 🏔️🌲",           likes: 892,  comments: 31, time: '5 soat oldin', gradient: 'from-[#9933FF]/25 via-[#00B8D9]/20 to-[#00F2C7]/30' },
  { id: 3, user: 'malika_art', emoji: '🎨', location: 'Samarqand',              caption: 'Samarqand binolaridan ilhom oldim. 🎨💙',                        likes: 2103, comments: 89, time: '1 kun oldin',  gradient: 'from-[#FF4FA0]/25 via-[#9933FF]/20 to-[#00B8D9]/25' },
]

export default function HomePage({ navigate, isLoggedIn, onLogout }: Props) {
  const [liked, setLiked] = useState<Set<number>>(new Set())
  const [saved, setSaved] = useState<Set<number>>(new Set())

  const toggleLike = (id: number) => setLiked(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n })
  const toggleSave = (id: number) => setSaved(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n })

  return (
    <div className="min-h-screen pb-32">
      <header className="sticky top-0 z-40 px-4 pt-4 pb-3">
        <div className="glass rounded-2xl px-4 py-3 flex items-center justify-between max-w-lg mx-auto">
          <button className="w-10 h-10 glass rounded-xl flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
          </button>
          <div className="text-center">
            <h1 className="text-gradient font-display text-xl font-bold leading-none">UzbGram</h1>
            <p className="text-white/35 text-[10px] mt-0.5">O'zbek tarmog'i 🇺🇿</p>
          </div>
          <div className="flex items-center gap-2">
            {isLoggedIn && (
              <button onClick={onLogout} className="text-white/40 text-xs px-2 py-1 btn-glass rounded-lg">Chiqish</button>
            )}
            {!isLoggedIn && (
              <button onClick={() => navigate('login')} className="text-xs px-3 py-1.5 btn-primary rounded-lg text-white">Kirish</button>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-lg mx-auto px-4 space-y-5">
        <div className="overflow-x-auto -mx-4 px-4">
          <div className="flex gap-4 pb-1" style={{ width: 'max-content' }}>
            {STORIES.map((s) => (
              <div key={s.id} className="flex flex-col items-center gap-1.5 cursor-pointer group">
                <div className={`rounded-full p-[2.5px] ${s.self ? 'ring-gradient-primary' : 'ring-gradient'}`}>
                  <div className="w-[58px] h-[58px] glass rounded-full flex items-center justify-center text-2xl border border-white/10 group-hover:scale-105 transition-transform">
                    {s.emoji}
                  </div>
                </div>
                <span className="text-[11px] text-white/55 truncate w-16 text-center">{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        {POSTS.map((post, i) => (
          <article key={post.id} className="glass-card rounded-[22px] overflow-hidden" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="flex items-center gap-3 p-4">
              <div className="w-10 h-10 rounded-full ring-gradient flex items-center justify-center p-[2px]">
                <div className="w-full h-full glass rounded-full flex items-center justify-center text-lg">{post.emoji}</div>
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">{post.user}</p>
                <p className="text-white/40 text-xs mt-0.5">{post.location}</p>
              </div>
            </div>

            <div className={`mx-1 rounded-2xl h-64 bg-gradient-to-br ${post.gradient} flex items-center justify-center relative overflow-hidden`}>
              <div className="text-center">
                <div className="text-5xl opacity-30">{post.emoji}</div>
                <p className="text-white/20 text-sm mt-2">Post rasmi</p>
              </div>
              <span className="absolute top-3 right-3 glass text-xs text-white/50 px-2 py-1 rounded-full">{post.time}</span>
            </div>

            <div className="flex items-center px-4 py-3 gap-4">
              <button onClick={() => toggleLike(post.id)} className="flex items-center gap-1.5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill={liked.has(post.id) ? '#ff4f6e' : 'none'} stroke={liked.has(post.id) ? 'none' : 'rgba(255,255,255,0.55)'} strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                <span className="text-white/55 text-sm">{post.likes + (liked.has(post.id) ? 1 : 0)}</span>
              </button>
              <button className="flex items-center gap-1.5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                <span className="text-white/55 text-sm">{post.comments}</span>
              </button>
              <div className="flex-1" />
              <button onClick={() => toggleSave(post.id)}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill={saved.has(post.id) ? 'var(--primary)' : 'none'} stroke={saved.has(post.id) ? 'none' : 'rgba(255,255,255,0.55)'} strokeWidth="2" strokeLinecap="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
              </button>
            </div>

            <div className="px-4 pb-4">
              <p className="text-sm text-white/80"><span className="font-semibold text-white">{post.user} </span>{post.caption}</p>
            </div>
          </article>
        ))}

        {!isLoggedIn && (
          <div className="glass-strong rounded-3xl p-6 text-center space-y-4">
            <div className="text-4xl">🇺🇿</div>
            <h2 className="text-xl font-bold text-gradient">UzbGram'ga qo'shiling!</h2>
            <div className="flex gap-3">
              <button onClick={() => navigate('signup')} className="flex-1 btn-primary text-white font-semibold py-3 rounded-2xl text-sm">Ro'yxatdan o'tish</button>
              <button onClick={() => navigate('login')} className="flex-1 btn-glass text-white/80 font-medium py-3 rounded-2xl text-sm">Kirish</button>
            </div>
          </div>
        )}
      </div>

      <BottomNav active="home" navigate={navigate} />
    </div>
  )
}