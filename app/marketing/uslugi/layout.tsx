import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Услуги маркетингового агентства — Сканлайт Маркетинг',
  description: 'Разовые проекты и ежемесячное сопровождение для розницы, складов и B2B. Диагностика, стратегия, сайты, реклама.',
}

export default function UslugiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
