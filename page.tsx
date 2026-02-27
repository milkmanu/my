'use client'

import { useState } from 'react'
import HomePage from '@/components/HomePage'
import LoginPage from '@/components/LoginPage'
import SignupPage from '@/components/SignupPage'
import ProfilePage from '@/components/ProfilePage'

export type Page = 'home' | 'login' | 'signup' | 'profile'

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const navigate = (p: Page) => setPage(p)

  if (page === 'login')  return <LoginPage  navigate={navigate} onLogin={() => { setIsLoggedIn(true); setPage('home') }} />
  if (page === 'signup') return <SignupPage navigate={navigate} />
  if (page === 'profile') return <ProfilePage navigate={navigate} isLoggedIn={isLoggedIn} />

  return <HomePage navigate={navigate} isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} />
}
