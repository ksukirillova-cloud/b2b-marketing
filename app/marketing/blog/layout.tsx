import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Блог о маркетинге для B2B и розницы — Сканлайт',
  description: 'Статьи и разборы про маркетинг для розницы, складов и B2B. Без воды — только то, что работает.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
