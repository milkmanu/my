import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "UzbGram — O'zbek Ijtimoiy Tarmog'i",
  description: "O'zbekiston uchun maxsus yaratilgan ijtimoiy tarmoq. Liquid Glass dizayn bilan.",
  keywords: ["uzbgram", "o'zbek", "ijtimoiy tarmoq", "uzbekistan", "social network"],
  openGraph: {
    title: "UzbGram",
    description: "O'zbek ijtimoiy tarmog'i",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-mesh min-h-screen font-body antialiased">
        {children}
      </body>
    </html>
  )
}
