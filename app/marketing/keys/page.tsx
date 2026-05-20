'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { IconChartBar, IconTrendingUp, IconTarget } from '@tabler/icons-react'
import { GradientMeshBackground, StaggeredContainer, StaggeredItem, GlassCard } from '@/components/marketing/animations'
import { Button } from '@/components/ui/button'

const filters = ['Все', 'B2B', 'IT и оборудование', 'Healthtech']

const cases = [
  {
    id: 1,
    title: 'Рост ROI до 1900% для промышленного производителя',
    industry: 'B2B промышленность',
    category: 'B2B',
    mainMetric: 'ROI 1900%',
    metrics: [
      { label: 'Рост выручки', value: '+340%' },
      { label: 'Стоимость лида', value: '-65%' },
      { label: 'Конверсия сайта', value: '+180%' },
    ],
    description: 'Производитель промышленного оборудования обратился с проблемой: реклама работает, но продажи не растут. После аудита выяснили, что 70% бюджета уходит на нецелевые запросы. Перестроили структуру кампаний, переписали объявления под конкретные сегменты, настроили сквозную аналитику.',
    result: 'За 4 месяца ROI вырос с 200% до 1900%. Клиент масштабировал бюджет в 3 раза.',
    image: 'https://picsum.photos/seed/case-b2b-1/800/400',
  },
  {
    id: 2,
    title: '50% высокочастотных запросов в топ-10 за 6 месяцев',
    industry: 'IT / Оборудование',
    category: 'IT и оборудование',
    mainMetric: 'Топ-10 по 50% ВЧ',
    metrics: [
      { label: 'Органический трафик', value: '+420%' },
      { label: 'Запросов в топ-10', value: '147' },
      { label: 'Позиции по брендам', value: 'Топ-3' },
    ],
    description: 'Дистрибьютор IT-оборудования хотел снизить зависимость от платной рекламы. SEO-аудит показал критические технические ошибки и отсутствие контент-стратегии. Исправили техническую часть, развернули блог с экспертным контентом, оптимизировали карточки товаров.',
    result: 'За 6 месяцев вывели 50% целевых ВЧ-запросов в топ-10 Яндекса. Органика дала 35% всех лидов.',
    image: 'https://picsum.photos/seed/case-it-1/800/400',
  },
  {
    id: 3,
    title: '27 квалифицированных лидов в месяц для B2B Healthtech',
    industry: 'B2B Healthtech',
    category: 'Healthtech',
    mainMetric: 'CPL 1 850 ₽',
    metrics: [
      { label: 'Лидов в месяц', value: '27' },
      { label: 'Конверсия в сделку', value: '18%' },
      { label: 'Цикл сделки', value: '-30%' },
    ],
    description: 'Стартап в сфере медицинских B2B-решений искал способ масштабировать привлечение клиентов. Предыдущее агентство не смогло выйти на стабильный поток лидов. Разработали стратегию для сложного B2B-цикла, настроили многоуровневую воронку, запустили ретаргетинг.',
    result: 'Стабильный поток в 27 квалифицированных лидов в месяц при CPL 1 850 ₽ — в 2 раза ниже рынка.',
    image: 'https://picsum.photos/seed/case-health-1/800/400',
  },
  {
    id: 4,
    title: 'Запуск интернет-магазина складского оборудования',
    industry: 'B2B / E-commerce',
    category: 'B2B',
    mainMetric: '₽2.4М/мес',
    metrics: [
      { label: 'Выручка в месяц', value: '2.4М ₽' },
      { label: 'Средний чек', value: '45 000 ₽' },
      { label: 'Повторные покупки', value: '34%' },
    ],
    description: 'Компания продавала складское оборудование только через менеджеров. Хотели запустить онлайн-канал. Разработали интернет-магазин с акцентом на B2B-функционал: запрос КП, личный кабинет для дилеров, интеграция с 1С.',
    result: 'За 3 месяца после запуска — 2.4М выручки через сайт. 34% клиентов вернулись за повторной покупкой.',
    image: 'https://picsum.photos/seed/case-b2b-2/800/400',
  },
  {
    id: 5,
    title: 'Комплексное продвижение сети магазинов техники',
    industry: 'Розница',
    category: 'IT и оборудование',
    mainMetric: '+85% трафика',
    metrics: [
      { label: 'Рост трафика', value: '+85%' },
      { label: 'Конверсия', value: '+45%' },
      { label: 'Стоимость заказа', value: '-28%' },
    ],
    description: 'Региональная сеть магазинов техники теряла долю рынка федеральным игрокам. Разработали стратегию локального продвижения: геореклама, работа с картами, таргетированная реклама на аудиторию района.',
    result: 'Рост трафика в офлайн-точки на 85%. Снизили стоимость привлечения покупателя на 28%.',
    image: 'https://picsum.photos/seed/case-retail-1/800/400',
  },
]

export default function KeysPage() {
  const [activeFilter, setActiveFilter] = useState('Все')

  const filteredCases = cases.filter(
    (c) => activeFilter === 'Все' || c.category === activeFilter
  )

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[var(--marketing-dark)] pt-28 lg:pt-36 pb-20 lg:pb-32 overflow-hidden">
        <GradientMeshBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Реальные проекты. Реальные цифры.
            </h1>
            <p className="text-lg lg:text-xl text-white/60 leading-relaxed">
              Без округлений и красивых историй. Только то, что было на самом деле.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? 'default' : 'outline'}
                className={activeFilter === filter 
                  ? 'bg-[var(--marketing-accent)] text-[var(--marketing-dark)] hover:bg-[var(--marketing-accent)]/90'
                  : 'border-white/20 text-white hover:bg-white/5'
                }
              >
                {filter}
              </Button>
            ))}
          </motion.div>
        </div>

      </section>

      {/* Cases Grid */}
      <section className="relative bg-[var(--marketing-light)] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {filteredCases.map((caseItem, i) => (
                <motion.div
                  key={caseItem.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-black/5">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="aspect-video lg:aspect-auto lg:h-full bg-gray-100">
                        <Image
                          src={caseItem.image}
                          alt={caseItem.title}
                          width={800}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 lg:p-10">
                        <div className="flex items-center gap-3 mb-4">
                          <IconChartBar className="w-4 h-4 text-[var(--marketing-accent-light)]" />
                          <span className="text-[var(--marketing-accent-light)] text-sm font-medium">
                            {caseItem.industry}
                          </span>
                        </div>

                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                          {caseItem.title}
                        </h2>

                        <div className="mb-6">
                          <span className="text-4xl lg:text-5xl font-bold text-[var(--marketing-accent-light)]">
                            {caseItem.mainMetric}
                          </span>
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {caseItem.metrics.map((metric, j) => (
                            <div key={j} className="text-center p-3 rounded-xl bg-gray-50">
                              <p className="text-lg font-bold text-gray-900">{metric.value}</p>
                              <p className="text-xs text-gray-500">{metric.label}</p>
                            </div>
                          ))}
                        </div>

                        <p className="text-gray-600 text-sm mb-4">
                          {caseItem.description}
                        </p>

                        <div className="p-4 rounded-xl bg-green-50 border border-green-100">
                          <div className="flex items-start gap-3">
                            <IconTarget className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <p className="text-green-800 text-sm font-medium">
                              {caseItem.result}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
