import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Кейсы — реальные результаты — Сканлайт Маркетинг',
  description: 'Реальные проекты с реальными цифрами. Без округлений и красивых историй. Только то, что было на самом деле.',
}

export default function KeysLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
