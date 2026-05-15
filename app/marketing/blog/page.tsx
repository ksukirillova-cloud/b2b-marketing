'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { IconClock, IconCalendar, IconArrowRight } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { GradientMeshBackground, StaggeredContainer, StaggeredItem, WaveDivider } from '@/components/marketing/animations'

const filters = ['Все', 'Реклама', 'SEO', 'Контент', 'Маркетплейсы', 'Геореклама', 'AI-инструменты', 'Стратегия']

const articles = [
  {
    id: 1,
    title: 'Как выбрать подрядчика по маркетингу для B2B: чек-лист из 12 пунктов',
    excerpt: 'Разбираем на что смотреть при выборе агентства или фрилансера. Какие вопросы задать и какие ответы должны насторожить.',
    category: 'Стратегия',
    readTime: '7 мин',
    date: '15 апреля 2025',
    image: 'https://picsum.photos/seed/article1/800/500',
    featured: true,
    slug: 'kak-vybrat-podryadchika',
  },
  {
    id: 2,
    title: '5 ошибок в Яндекс Директе, которые сливают бюджет B2B-компаний',
    excerpt: 'Типичные ошибки в настройке контекстной рекламы для B2B. Проверьте свои кампании по этому списку.',
    category: 'Реклама',
    readTime: '5 мин',
    date: '10 апреля 2025',
    image: 'https://picsum.photos/seed/article2/800/500',
    featured: false,
    slug: '5-oshibok-yandex-direct',
  },
  {
    id: 3,
    title: 'SEO для интернет-магазина оборудования: с чего начать в 2025',
    excerpt: 'Пошаговый план продвижения интернет-магазина в Яндексе. От технического аудита до контент-стратегии.',
    category: 'SEO',
    readTime: '10 мин',
    date: '5 апреля 2025',
    image: 'https://picsum.photos/seed/article3/800/500',
    featured: false,
    slug: 'seo-dlya-magazina',
  },
  {
    id: 4,
    title: 'AI в маркетинге: какие инструменты реально работают в 2025',
    excerpt: 'Обзор AI-инструментов для маркетинга: что используем сами и что рекомендуем клиентам.',
    category: 'AI-инструменты',
    readTime: '8 мин',
    date: '1 апреля 2025',
    image: 'https://picsum.photos/seed/article4/800/500',
    featured: false,
    slug: 'ai-v-marketinge',
  },
  {
    id: 5,
    title: 'Как продвигать компанию в Яндекс Картах: полное руководство',
    excerpt: 'Геореклама для розничного бизнеса. Как настроить карточку и получать клиентов из своего района.',
    category: 'Геореклама',
    readTime: '12 мин',
    date: '25 марта 2025',
    image: 'https://picsum.photos/seed/article5/800/500',
    featured: false,
    slug: 'prodvizhenie-yandex-karty',
  },
  {
    id: 6,
    title: 'Контент-план для B2B-компании: шаблон и примеры',
    excerpt: 'Как составить контент-план, который работает на продажи. Шаблон + примеры для разных ниш.',
    category: 'Контент',
    readTime: '6 мин',
    date: '20 марта 2025',
    image: 'https://picsum.photos/seed/article6/800/500',
    featured: false,
    slug: 'kontent-plan-b2b',
  },
  {
    id: 7,
    title: 'Продвижение на Wildberries для производителей оборудования',
    excerpt: 'Особенности работы с маркетплейсами в B2B-сегменте. Кому подходит и как начать.',
    category: 'Маркетплейсы',
    readTime: '9 мин',
    date: '15 марта 2025',
    image: 'https://picsum.photos/seed/article7/800/500',
    featured: false,
    slug: 'wildberries-oborudovanie',
  },
  {
    id: 8,
    title: 'Как измерять эффективность маркетинга в B2B',
    excerpt: 'Какие метрики отслеживать и как настроить сквозную аналитику для длинного цикла сделки.',
    category: 'Стратегия',
    readTime: '11 мин',
    date: '10 марта 2025',
    image: 'https://picsum.photos/seed/article8/800/500',
    featured: false,
    slug: 'effektivnost-marketinga-b2b',
  },
]

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState('Все')

  const filteredArticles = articles.filter(
    (article) => activeFilter === 'Все' || article.category === activeFilter
  )

  const featuredArticle = filteredArticles.find((a) => a.featured)
  const regularArticles = filteredArticles.filter((a) => !a.featured)

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
              Статьи и разборы
            </h1>
            <p className="text-lg lg:text-xl text-white/60 leading-relaxed">
              Про маркетинг для розницы, складов и B2B. Без воды — только то, что работает.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 flex flex-wrap gap-2"
          >
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? 'default' : 'outline'}
                size="sm"
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

        <WaveDivider darkToLight={true} />
      </section>

      {/* Articles Grid */}
      <section className="relative bg-[var(--marketing-light)] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Featured Article */}
              {featuredArticle && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-12"
                >
                  <Link href={`/marketing/blog/${featuredArticle.slug}`} className="group block">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-black/5 hover:shadow-xl transition-shadow">
                      <div className="grid lg:grid-cols-2 gap-0">
                        <div className="aspect-video lg:aspect-auto lg:h-full bg-gray-100">
                          <Image
                            src={featuredArticle.image}
                            alt={featuredArticle.title}
                            width={800}
                            height={500}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                          <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 rounded-full bg-[var(--marketing-accent-light)]/10 text-[var(--marketing-accent-light)] text-sm font-medium">
                              {featuredArticle.category}
                            </span>
                            <span className="text-gray-400 text-sm flex items-center gap-1">
                              <IconClock className="w-4 h-4" />
                              {featuredArticle.readTime}
                            </span>
                          </div>
                          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[var(--marketing-accent-light)] transition-colors">
                            {featuredArticle.title}
                          </h2>
                          <p className="text-gray-600 mb-6">
                            {featuredArticle.excerpt}
                          </p>
                          <div className="flex items-center gap-2 text-[var(--marketing-accent-light)] font-medium">
                            Читать статью
                            <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* Article Grid */}
              <StaggeredContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" delay={0.1}>
                {regularArticles.map((article) => (
                  <StaggeredItem key={article.id}>
                    <Link href={`/marketing/blog/${article.slug}`} className="group block h-full">
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="aspect-video overflow-hidden bg-gray-100">
                          <Image
                            src={article.image}
                            alt={article.title}
                            width={800}
                            height={500}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="px-2 py-1 rounded-md bg-[var(--marketing-accent-light)]/10 text-[var(--marketing-accent-light)] text-xs font-medium">
                              {article.category}
                            </span>
                            <span className="text-gray-400 text-xs flex items-center gap-1">
                              <IconClock className="w-3 h-3" />
                              {article.readTime}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[var(--marketing-accent-light)] transition-colors line-clamp-2">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-2">
                            {article.excerpt}
                          </p>
                          <div className="mt-4 flex items-center gap-1 text-gray-400 text-xs">
                            <IconCalendar className="w-3 h-3" />
                            {article.date}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </StaggeredItem>
                ))}
              </StaggeredContainer>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
