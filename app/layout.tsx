import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { SiteHeader } from '@/components/site/header'
import { SiteFooter } from '@/components/site/footer'
import { WhatsAppFab } from '@/components/site/whatsapp-fab'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: {
    default: 'Vansikha Tour & Travel | Rajasthan Tour Packages & Car Rental in Jaipur',
    template: '%s | Vansikha Tour & Travel',
  },
  description:
    'Jaipur-based travel company offering customised Rajasthan tour packages, Golden Triangle tours, all-India holidays and reliable car & tempo traveller rental.',
  keywords: ['Jaipur tour packages', 'Rajasthan tour', 'car rental Jaipur', 'Golden Triangle tour', 'Udaipur tour', 'Jaisalmer desert safari', 'tempo traveller Jaipur'],
  generator: 'v0.app',
  openGraph: {
    title: 'Vansikha Tour & Travel — Royal journeys from Jaipur',
    description: 'Customised Rajasthan & India tour packages and car rental from Jaipur.',
    images: ['/images/amer-fort.jpg'],
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#2a1d17',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppFab />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
