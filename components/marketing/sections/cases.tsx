'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  IconArrowRight,
  IconChartBar,
  IconDatabase,
  IconShoppingCart,
  IconFileText,
} from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import {
  GradientMeshBackground,
  StaggeredContainer,
  StaggeredItem,
  GlassCard,
} from '../animations'

type CaseType = 'funnel' | 'catalog' | 'tenders'

const cases: {
  tag: string
  industry: string
  metric: string
  label: string
  description: string
  type: CaseType
}[] = [
  {
    tag: 'Комплексный маркетинг',
    industry: 'B2B / оборудование',
    metric: 'Маркетинг с нуля',
    label: '10 000 ₽ → 200 000 ₽ продаж',
    description:
      'CRM, воронка, сегментация базы, ABM-коммуникации и тест Директа на минимальном бюджете.',
    type: 'funnel',
  },
  {
    tag: 'Сайт',
    industry: 'ТКО / интернет-магазин',
    metric: 'Большой каталог',
    label: 'оборудования, заявок и автоматизаций',
    description:
      'Развитие scan-lite.ru как интернет-магазина торгово-кассового оборудования: категории, карточки, формы заявок и сценарии под клиентов.',
    type: 'catalog',
  },
  {
    tag: 'Автоматизация',
    industry: 'B2B / тендеры',
    metric: 'Тендеры в системе',
    label: 'сбор заявок и контроль',
    description:
      'Платформа для автоматического сбора заявок и участия в тендерах: меньше ручного поиска, больше контроля над возможностями.',
    type: 'tenders',
  },
]

function PreviewTag({ children }: { children: string }) {
  return (
    <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/70 backdrop-blur-md">
      {children}
    </div>
  )
}

function CasePreview({ type, tag }: { type: CaseType; tag: string }) {
  if (type === 'catalog') {
    return (
      <div className="relative aspect-video overflow-hidden rounded-xl bg-[#0B1220] p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(182,255,0,0.22),transparent_30%)]" />

        <div className="relative flex h-full flex-col">
          <div className="mb-4 flex items-center justify-end">
            <PreviewTag>{tag}</PreviewTag>
          </div>

          <div className="grid flex-1 grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/10 p-3"
              >
                <div className="mb-3 h-8 rounded-lg bg-white/15" />
                <div className="mb-2 h-2 w-3/4 rounded-full bg-white/20" />
                <div className="h-2 w-1/2 rounded-full bg-[var(--marketing-accent)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (type === 'tenders') {
    return (
      <div className="relative aspect-video overflow-hidden rounded-xl bg-[#0B1220] p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(182,255,0,0.18),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(234,73,34,0.2),transparent_34%)]" />

        <div className="relative flex h-full flex-col">
          <div className="mb-4 flex items-center justify-end">
            <PreviewTag>{tag}</PreviewTag>
          </div>

          <div className="flex flex-1 flex-col gap-3">
            {[
              ['Новая заявка', 'Подходит'],
              ['Тендер', 'В работе'],
              ['Запрос цены', 'Проверка'],
            ].map(([name, status]) => (
              <div
                key={name}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/10 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--marketing-accent)]" />
                  <span className="text-sm font-semibold text-white">
                    {name}
                  </span>
                </div>

                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/60">
                  {status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative aspect-video overflow-hidden rounded-xl bg-[#0B1220] p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(182,255,0,0.22),transparent_30%),radial-gradient(circle_at_85%_80%,rgba(234,73,34,0.18),transparent_32%)]" />

      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-3">
          <div className="w-fit rounded-2xl bg-[var(--marketing-accent)] p-3 text-[var(--marketing-dark)]">
            <IconDatabase className="h-6 w-6" />
          </div>

          <PreviewTag>{tag}</PreviewTag>
        </div>

        <div className="grid grid-cols-4 items-end gap-3">
          <div className="h-12 rounded-xl bg-white/15" />
          <div className="h-20 rounded-xl bg-white/20" />
          <div className="h-28 rounded-xl bg-[var(--marketing-accent)]" />
          <div className="h-16 rounded-xl bg-white/15" />
        </div>
      </div>
    </div>
  )
}

function CaseIcon({ type }: { type: CaseType }) {
  if (type === 'catalog') {
    return (
      <IconShoppingCart className="h-4 w-4 text-[var(--marketing-accent)]" />
    )
  }

  if (type === 'tenders') {
    return <IconFileText className="h-4 w-4 text-[var(--marketing-accent)]" />
  }

  return <IconChartBar className="h-4 w-4 text-[var(--marketing-accent)]" />
}

export function CasesSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--marketing-dark)] py-20 lg:py-32">
      <GradientMeshBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center lg:mb-16"
        >
          <h2 className="mb-4 text-3xl font-bold text-white lg:text-5xl">
            Реальные проекты. Реальные цифры.
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-7 text-white/50 lg:text-lg">
            Сайт, CRM, реклама, каталог, заявки и автоматизации — не в теории,
            а на реальных B2B-проектах.
          </p>
        </motion.div>

        <StaggeredContainer
          className="grid gap-6 md:grid-cols-3 lg:gap-8"
          delay={0.15}
        >
          {cases.map((caseItem, i) => (
            <StaggeredItem key={i}>
              <GlassCard className="group h-full cursor-pointer">
                <CasePreview type={caseItem.type} tag={caseItem.tag} />

                <div className="mt-6 flex items-center gap-2">
                  <CaseIcon type={caseItem.type} />
                  <span className="text-sm font-medium text-[var(--marketing-accent)]">
                    {caseItem.industry}
                  </span>
                </div>

                <p className="mt-3 text-3xl font-bold leading-tight text-white lg:text-4xl">
                  {caseItem.metric}
                </p>

                <p className="mt-2 text-sm font-semibold text-white/40">
                  {caseItem.label}
                </p>

                <p className="mt-4 text-sm leading-6 text-white/50">
                  {caseItem.description}
                </p>
              </GlassCard>
            </StaggeredItem>
          ))}
        </StaggeredContainer>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-[var(--marketing-accent)] font-semibold text-[var(--marketing-dark)] hover:bg-[var(--marketing-accent)]/90"
          >
            <Link href="/marketing/keys">
              Смотреть все кейсы
              <IconArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}