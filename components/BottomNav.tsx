'use client'

import { Page } from '@/app/page'

interface Props {
  active: Page
  navigate: (p: Page) => void
}

const tabs = [
  { id: 'home',    icon: HomeIcon,    label: 'Bosh sahifa' },
  { id: 'search',  icon: SearchIcon,  label: 'Qidirish'    },
  { id: 'add',     icon: PlusIcon,    label: 'Qo\'shish'   },
  { id: 'heart',   icon: HeartIcon,   label: 'Bildirishnomalar' },
  { id: 'profile', icon: PersonIcon,  label: 'Profil'      },
] as const

export default function BottomNav({ active, navigate }: Props) {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-lg z-50">
      <div className="nav-bottom rounded-3xl px-2 py-3">
        <div className="flex items-center justify-around">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = active === tab.id
            const isAdd = tab.id === 'add'

            return (
              <button
                key={tab.id}
                onClick={() => tab.id !== 'add' && navigate(tab.id as Page)}
                className="flex flex-col items-center justify-center w-12 h-12 rounded-2xl transition-all duration-200 relative group"
                aria-label={tab.label}
              >
                {isAdd ? (
                  <span className="w-11 h-11 rounded-full btn-primary flex items-center justify-center shadow-lg">
                    <Icon size={22} color="#fff" />
                  </span>
                ) : (
                  <>
                    <Icon
                      size={24}
                      color={isActive ? 'var(--primary)' : 'rgba(255,255,255,0.45)'}
                      filled={isActive}
                    />
                    {isActive && (
                      <span className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                    )}
                  </>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

/* ── Icon components ── */
function HomeIcon({ size = 24, color = '#fff', filled = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? color : 'none'} stroke={filled ? 'none' : color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  )
}

function SearchIcon({ size = 24, color = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  )
}

function PlusIcon({ size = 24, color = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  )
}

function HeartIcon({ size = 24, color = '#fff', filled = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? color : 'none'} stroke={filled ? 'none' : color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  )
}

function PersonIcon({ size = 24, color = '#fff', filled = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? color : 'none'} stroke={filled ? 'none' : color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {filled ? (
        <>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </>
      ) : (
        <>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </>
      )}
    </svg>
  )
}
