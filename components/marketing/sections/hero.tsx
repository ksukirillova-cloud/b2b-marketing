'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { IconArrowRight, IconChartBar, IconCircleDot } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { GradientMeshBackground, FloatingBadge, TextReveal, Marquee } from '../animations'

const badges = [
  { text: 'AI-assisted', delay: 0.3 },
  { text: '15 лет в рынке', delay: 0.5 },
  { text: 'Без оверхеда', delay: 0.7 },
]

const aiTools = ['Claude', 'ChatGPT', 'Gemini', 'Midjourney', 'Perplexity', 'Яндекс Директ', 'Метрика']

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[var(--marketing-dark)] pt-20 lg:pt-24 overflow-hidden">
      <GradientMeshBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Floating badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {badges.map((badge, i) => (
                <FloatingBadge key={i} delay={badge.delay}>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">
                    <span className="w-2 h-2 rounded-full bg-[var(--marketing-accent)]" />
                    {badge.text}
                  </span>
                </FloatingBadge>
              ))}
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tighter mb-6">
              <TextReveal text="Маркетинг от тех, кто ваc знает" />
            </h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg lg:text-xl text-white/60 leading-relaxed mb-8 max-w-lg"
            >
              Сайты, реклама и продвижение для розницы, складов и B2B. Вы не будете платить за то, чтобы мы разобрались в вашем рынке
            </motion.p>

            {/* CTA buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                asChild
                size="lg"
                className="rounded-xl bg-[var(--marketing-accent)] text-black hover:bg-[var(--marketing-accent)]/90 font-semibold text-base h-14 px-8"
              >
                <Link href="/marketing/kontakty">
                  Получить диагностику
                  <IconArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="rounded-xl border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white font-semibold text-base h-14 px-8"
              >
                <Link href="/marketing/keys">
                  Смотреть кейсы
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right content - Dashboard card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-6 lg:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-white/60 text-sm">Аналитика</span>
                <span className="text-[var(--marketing-accent)] text-sm font-medium">Апрель 2025</span>
              </div>

              {/* Big stat */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl lg:text-6xl font-black tracking-tight text-[var(--marketing-accent)]">+47%</span>
                </div>
                <span className="text-white/50 text-sm">Рост конверсии</span>
              </div>

              {/* Mini chart bars */}
              <div className="flex items-end gap-2 h-24 mb-8">
                {[40, 55, 45, 70, 60, 85, 75, 90, 80, 95, 88, 100].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: 1.2 + i * 0.05, duration: 0.4 }}
                    className="flex-1 bg-gradient-to-t from-[var(--marketing-teal)] to-[var(--marketing-accent)] rounded-t-sm"
                  />
                ))}
              </div>

              {/* Problem indicators */}
              <div className="space-y-3">
                {[
                  { label: 'Низкий CTR в рекламе', color: 'bg-red-500', status: 'Решено' },
                  { label: 'Слабая конверсия сайта', color: 'bg-orange-500', status: 'В работе' },
                  { label: 'Нецелевые заявки', color: 'bg-yellow-500', status: 'Решено' },
                  { label: 'Нет системной аналитики', color: 'bg-green-500', status: 'Решено' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <IconCircleDot className={`w-4 h-4 ${item.color.replace('bg-', 'text-')}`} />
                      <span className="text-white/70 text-sm">{item.label}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${item.status === 'Решено' ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--marketing-purple)]/20 to-[var(--marketing-teal)]/20 rounded-3xl blur-xl -z-10" />
          </motion.div>
        </div>

        {/* AI Tools Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-16 lg:mt-24"
        >
          <p className="text-center text-white/40 text-sm mb-6">Используем AI-инструменты для ускорения работы</p>
          <div className="glass-card rounded-2xl py-4 overflow-hidden">
            <Marquee speed={25}>
              {aiTools.map((tool, i) => (
                <span key={i} className="inline-flex items-center gap-3 mx-8 text-white/60 hover:text-white transition-colors">
                  <span className="w-2 h-2 rounded-full bg-[var(--marketing-accent)]/50" />
                  <span className="text-lg font-medium">{tool}</span>
                </span>
              ))}
            </Marquee>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
