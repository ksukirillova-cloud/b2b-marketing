import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Контакты — Сканлайт Маркетинг',
  description: 'Начните с диагностики. 30 минут — и вы поймёте где теряете клиентов прямо сейчас.',
}

export default function KontaktyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
