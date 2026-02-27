'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'

export type Page = 'home' | 'login' | 'signup' | 'profile'

const HomePage    = dynamic(() => import('@/components/HomePage'))
const LoginPage   = dynamic(() => import('@/components/LoginPage'))
const SignupPage  = dynamic(() => import('@/components/SignupPage'))
const ProfilePage = dynamic(() => import('@/components/ProfilePage'))

export default function App() {
  const [page, setPage]           = useState<Page>('home')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const navigate = (p: Page) => setPage(p)

  if (page === 'login')
    return <LoginPage navigate={navigate} onLogin={() => { setIsLoggedIn(true); setPage('home') }} />
  if (page === 'signup')
    return <SignupPage navigate={navigate} />
  if (page === 'profile')
    return <ProfilePage navigate={navigate} isLoggedIn={isLoggedIn} />

  return <HomePage navigate={navigate} isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} />
}