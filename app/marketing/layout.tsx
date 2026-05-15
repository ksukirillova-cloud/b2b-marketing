import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { MarketingHeader } from '@/components/marketing/header'
import { MarketingFooter } from '@/components/marketing/footer'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Сканлайт Маркетинг — маркетинг для розницы, складов и B2B',
  description: 'Сайты, реклама и продвижение для розницы, складов и B2B. Вы не будете платить за то, чтобы мы разобрались в вашем рынке.',
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${inter.className} ${inter.variable} font-sans antialiased`}>
      <MarketingHeader />
      <main>{children}</main>
      <MarketingFooter />
    </div>
  )
}
