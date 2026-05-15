import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Кто мы — команда Сканлайт Маркетинг',
  description: 'Мы не пришли со стороны. Мы в этом рынке с 2009 года. Узнайте больше о нашей команде и инструментах.',
}

export default function ONasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
