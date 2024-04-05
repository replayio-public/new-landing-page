import '~/styles/tailwind.css'
import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import { defaultMeta } from '~/lib/constants'

export const metadata: Metadata = {
  title: {
    template: '%s - Replay',
    default: 'Replay - Time Travel Browser DevTools'
  },
  description: defaultMeta.description,
  openGraph: {
    title: defaultMeta.title,
    description: defaultMeta.description,
    images: [{ url: defaultMeta.ogImage, width: 1200, height: 630 }]
  },
  twitter: {
    site: defaultMeta.twitter.site,
    title: defaultMeta.title,
    description: defaultMeta.description,
    creator: defaultMeta.twitter.handle,
    images: [{ url: defaultMeta.ogImage, width: 1200, height: 630 }]
  }
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={clsx('h-full scroll-smooth bg-white antialiased', inter.variable, lexend.variable)}
    >
      <body
        className="flex h-full flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hyperspace.svg)' }}
      >
        {children}
      </body>
    </html>
  )
}
