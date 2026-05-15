'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { IconArrowRight, IconSparkles } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { GradientMeshBackground, StaggeredContainer, StaggeredItem, GlassCard, WaveDivider, DiagonalDivider, Marquee } from '@/components/marketing/animations'

const team = [
  {
    name: 'Ксения',
    role: 'Маркетолог',
    description: '11 лет в маркетинге. Работала in-house в компании по кассовому оборудованию, знает рынок изнутри.',
    image: 'https://picsum.photos/seed/team1/300/300',
  },
  {
    name: 'Алексей',
    role: 'Продажи и аналитика',
    description: 'Опыт в B2B-продажах с 2009 года. Понимает как думают ваши клиенты, потому что продавал им сам.',
    image: 'https://picsum.photos/seed/team2/300/300',
  },
]

const aiStack = [
  { name: 'Claude', category: 'Тексты и стратегия' },
  { name: 'ChatGPT', category: 'Контент' },
  { name: 'Gemini', category: 'Исследования' },
  { name: 'Яндекс Директ', category: 'Реклама' },
  { name: 'Яндекс Метрика', category: 'Аналитика' },
  { name: 'VK Ads', category: 'Таргетинг' },
  { name: 'Tilda', category: 'Сайты' },
  { name: 'Figma', category: 'Дизайн' },
  { name: 'Notion', category: 'Управление' },
  { name: 'Unisender', category: 'Рассылки' },
]

const timeline = [
  { year: '2009', event: 'Запуск scan-lite.ru — начали продавать торгово-кассовое оборудование' },
  { year: '2014', event: 'Первый опыт в маркетинге — начали продвигать собственный бизнес' },
  { year: '2018', event: 'Начали помогать партнёрам и клиентам с маркетингом' },
  { year: '2023', event: 'Внедрили AI-инструменты — ускорили работу в 2-3 раза' },
  { year: '2025', event: 'Запуск Сканлайт Маркетинг как отдельного направления' },
]

export default function ONasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[var(--marketing-dark)] pt-28 lg:pt-36 pb-20 lg:pb-32 overflow-hidden">
        <GradientMeshBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Мы не пришли со стороны. Мы в этом рынке с 2009.
              </h1>
              <p className="text-lg lg:text-xl text-white/60 leading-relaxed">
                Scan-lite.ru — дилер торгово-кассового оборудования с 2009 года. Мы не изучали ваш рынок по кейсам — мы работали в нём.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="relative aspect-square max-w-md mx-auto">
                <Image
                  src="https://picsum.photos/seed/hero-about/600/600"
                  alt="Команда Сканлайт Маркетинг"
                  width={600}
                  height={600}
                  className="rounded-3xl object-cover w-full h-full"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-[var(--marketing-accent)] flex items-center justify-center">
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-[var(--marketing-dark)]">15+</span>
                    <span className="text-xs text-[var(--marketing-dark)]/70">лет в рынке</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <WaveDivider darkToLight={true} />
      </section>

      {/* Story Section */}
      <section className="relative bg-[var(--marketing-light)] py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Наша история</h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              <strong>Scan-lite.ru</strong> — дилер торгово-кассового оборудования. С 2009 года продаём сканеры штрих-кодов, принтеры этикеток, POS-системы и всё, что нужно для автоматизации торговли.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              За 15 лет мы прошли путь от небольшого интернет-магазина до федерального поставщика. Знаем как работают закупки в рознице и B2B. Понимаем, что важно для ваших клиентов — потому что общались с ними каждый день.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              <strong>Сканлайт Маркетинг</strong> — логичное продолжение. Мы решили делиться экспертизой и помогать компаниям из нашего рынка с маркетингом. Не как стороннее агентство, а как партнёр, который понимает специфику изнутри.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-16"
          >
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-20">
                    <span className="text-2xl font-bold text-[var(--marketing-accent-light)]">{item.year}</span>
                  </div>
                  <div className="flex-1 pb-6 border-b border-gray-200 last:border-0">
                    <p className="text-gray-700">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <WaveDivider darkToLight={false} />
      </section>

      {/* Team Section */}
      <section className="relative bg-[var(--marketing-dark)] py-20 lg:py-32 overflow-hidden">
        <GradientMeshBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Команда</h2>
            <p className="text-white/60">Маленькая команда с большим опытом</p>
          </motion.div>

          <StaggeredContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" delay={0.15}>
            {team.map((member, i) => (
              <StaggeredItem key={i}>
                <GlassCard className="text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-white/10">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-[var(--marketing-accent)] text-sm font-medium mb-4">{member.role}</p>
                  <p className="text-white/60 text-sm">{member.description}</p>
                </GlassCard>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>

        <DiagonalDivider darkToLight={true} />
      </section>

      {/* AI Stack Section */}
      <section className="relative bg-[var(--marketing-light)] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
              <IconSparkles className="w-4 h-4" />
              AI-стек
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              AI ускоряет — человек проверяет
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Используем современные инструменты, чтобы работать быстрее и дешевле. Но каждый результат проверяет опытный маркетолог.
            </p>
          </motion.div>

          <StaggeredContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4" delay={0.05}>
            {aiStack.map((tool, i) => (
              <StaggeredItem key={i}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-lg font-bold text-purple-600">{tool.name[0]}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{tool.name}</h3>
                  <p className="text-xs text-gray-500">{tool.category}</p>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>

        <WaveDivider darkToLight={false} />
      </section>

      {/* CTA Section */}
      <section className="relative bg-[var(--marketing-dark)] py-20 lg:py-32 overflow-hidden">
        <GradientMeshBackground />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Готовы познакомиться?
            </h2>
            <p className="text-lg lg:text-xl text-white/60 mb-10 max-w-2xl mx-auto">
              Запишитесь на бесплатную 30-минутную диагностику. Разберём вашу ситуацию и покажем точки роста.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-[var(--marketing-accent)] text-[var(--marketing-dark)] hover:bg-[var(--marketing-accent)]/90 font-semibold text-lg h-16 px-12"
            >
              <Link href="/marketing/kontakty">
                Получить диагностику
                <IconArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
