'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { IconArrowRight } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { StaggeredContainer, StaggeredItem } from '../animations'

const directions = [
  {
    label: 'Сайты и SEO',
    title: 'Сайт есть — но он не продаёт',
    description: 'Лендинги, каталоги, интернет-магазины, SEO и гео-продвижение под ваш рынок.',
    href: '/marketing/uslugi#sites-seo',
    featured: false,
  },
  {
    label: 'Трафик и реклама',
    title: 'Деньги на рекламу уходят — заявок нет',
    description:
      'Яндекс Директ, Авито, карты, посевы, таргет, инфлюенсеры. Ведём только те каналы, где есть ваша аудитория.',
    href: '/marketing/uslugi#traffic',
    featured: false,
  },
  {
    label: 'Контент',
    title: 'Соцсети мёртвые, клиенту нечего показать',
    description:
      'Telegram, ВКонтакте, email, тексты, визуал. Делаем контент, который помогает продавать, а не просто закрывает план публикаций.',
    href: '/marketing/uslugi#content',
    featured: false,
  },
  {
    label: 'Маркетплейсы',
    title: 'Карточки есть — продаж нет',
    description:
      'Оформление, SEO карточек, фотосъёмка, инфографика. Для WB, Ozon и Яндекс Маркета.',
    href: '/marketing/uslugi#marketplaces',
    featured: false,
  },
  {
    label: 'Стратегия',
    title: 'Не понимаю, что работает и куда вкладывать',
    description:
      'Диагностика, позиционирование, аналитика, план продвижения. Начинаем отсюда, если сейчас всё разрозненно.',
    href: '/marketing/uslugi#strategy',
    featured: true,
  },
]

export function PackagesSection() {
  return (
    <section className="relative bg-[var(--marketing-light)] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Выберите, что болит сильнее всего
          </h2>
          <p className="text-base lg:text-lg text-gray-600">
            Не нужно сразу покупать «маркетинг под ключ». Начните с той точки, где сейчас
            теряются заявки, деньги или время.
          </p>
        </motion.div>

        <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" delay={0.15}>
          {directions.map((item) => (
            <StaggeredItem key={item.label}>
              <Link href={item.href} className="group block h-full">
                <div
                  className={`relative h-full rounded-3xl p-7 lg:p-8 shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    item.featured
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-900'
                  }`}
                >
                  <div
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-medium mb-6 ${
                      item.featured
                        ? 'bg-white/10 text-white'
                        : 'bg-[var(--marketing-accent-light)]/10 text-[var(--marketing-accent-light)]'
                    }`}
                  >
                    {item.label}
                  </div>

                  <h3
                    className={`text-xl lg:text-2xl font-bold leading-tight mb-4 ${
                      item.featured ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-sm lg:text-base leading-relaxed mb-8 ${
                      item.featured ? 'text-white/75' : 'text-gray-600'
                    }`}
                  >
                    {item.description}
                  </p>

                  <div
                    className={`mt-auto inline-flex items-center gap-2 text-sm font-semibold ${
                      item.featured
                        ? 'text-white'
                        : 'text-[var(--marketing-accent-light)]'
                    }`}
                  >
                    Смотреть услуги
                    <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </StaggeredItem>
          ))}
        </StaggeredContainer>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 lg:mt-16 rounded-3xl bg-white p-6 lg:p-8 shadow-lg shadow-black/5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
        >
          <p className="text-lg lg:text-xl font-semibold text-gray-900">
            Не знаете, с чего начать? Начните с диагностики — покажем, где теряются заявки
            и что чинить в первую очередь.
          </p>

          <Button
            asChild
            className="bg-[var(--marketing-accent-light)] text-white hover:bg-[var(--marketing-accent-light)]/90 shrink-0"
          >
            <Link href="/marketing/kontakty">
              Заказать диагностику
              <IconArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}