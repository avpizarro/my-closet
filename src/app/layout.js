import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Closet',
  description: 'A digital twins closet',
  icons: {
    icon: [
      {
      url: '/icon-48x48.png',
      media: '(prefers-color-scheme: light',
      },
      {
      url: '/icon-48x48-white.png',
      media: '(prefers-color-scheme: dark',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
