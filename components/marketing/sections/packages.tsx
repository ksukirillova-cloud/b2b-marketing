'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { IconCheck, IconArrowRight, IconStar } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { StaggeredContainer, StaggeredItem } from '../animations'

const packages = [
  {
    name: 'Диагностика',
    price: '25 000 ₽',
    description: 'Разберём где вы теряете клиентов и что делать в первую очередь',
    features: [
      'Аудит текущего маркетинга',
      'Анализ конкурентов',
      'Карта точек роста',
      'План действий на 3 месяца',
    ],
    popular: false,
  },
  {
    name: 'Система',
    price: '60 000 ₽',
    description: 'Выстроим маркетинговую систему, которая работает предсказуемо',
    features: [
      'Всё из «Диагностики»',
      'Настройка аналитики',
      'Запуск 1-го канала трафика',
      'Месяц сопровождения',
      'Еженедельные отчёты',
    ],
    popular: true,
  },
  {
    name: 'Под ключ',
    price: '150 000 ₽',
    description: 'Возьмём маркетинг полностью на себя — от стратегии до результата',
    features: [
      'Всё из «Системы»',
      'Разработка/редизайн сайта',
      '3 канала трафика',
      '3 месяца сопровождения',
      'Ежедневная коммуникация',
    ],
    popular: false,
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
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Выберите с чего начать
          </h2>
        </motion.div>

        <StaggeredContainer className="grid md:grid-cols-3 gap-6 lg:gap-8" delay={0.15}>
          {packages.map((pkg, i) => (
            <StaggeredItem key={i}>
              <div className={`relative bg-white rounded-3xl p-8 shadow-lg shadow-black/5 h-full flex flex-col ${pkg.popular ? 'ring-2 ring-[var(--marketing-accent-light)]' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-[var(--marketing-accent-light)] text-white text-sm font-medium">
                      <IconStar className="w-4 h-4" />
                      Популярный
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-3xl lg:text-4xl font-bold text-[var(--marketing-accent-light)]">
                    {pkg.price}
                  </p>
                </div>

                <p className="text-gray-600 text-sm mb-6">
                  {pkg.description}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <IconCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  asChild
                  className={`w-full ${pkg.popular ? 'bg-[var(--marketing-accent-light)] text-white hover:bg-[var(--marketing-accent-light)]/90' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
                >
                  <Link href="/marketing/kontakty">
                    Выбрать
                    <IconArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  )
}
