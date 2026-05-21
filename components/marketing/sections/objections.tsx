'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconChevronDown } from '@tabler/icons-react'
import { GradientMeshBackground } from '../animations'

const objections = [
  {
    question: 'Мы уже работали с агентством, результата не было',
    answer:
      'Так часто бывает, когда подрядчик ведёт рекламу отдельно от сайта, CRM и продаж. Мы начинаем не с “запуска кампаний”, а с диагностики B2B-маркетинга: смотрим сайт, заявки, воронку продаж, CRM, источники трафика и качество лидов. Наша задача — найти, где теряются деньги, заявки и сделки, а не сделать ещё один красивый отчёт.',
  },
  {
    question: 'Это слишком дорого для нашей компании',
    answer:
      'Для старта не всегда нужен большой бюджет. В B2B, торгово-кассовом оборудовании, оптовой торговле и сложных услугах часто сначала дают эффект базовые вещи: понятная структура сайта, корректные формы заявок, фиксация лидов в CRM, сегментация базы, SEO-страницы под коммерческие запросы и тест Яндекс Директа на узком спросе. Можно начать с диагностики или пилота, а не с большого договора на полгода.',
  },
  {
    question: 'У нас уже есть штатный маркетолог',
    answer:
      'Отлично. Мы не заменяем вашего маркетолога, а усиливаем его там, где обычно не хватает рук или экспертизы: B2B-лидогенерация, упаковка сложного продукта, SEO для интернет-магазина, Яндекс Директ для B2B, CRM-воронка, аналитика, контент, ABM-коммуникации и автоматизация заявок. Можно работать как внешний стратегический партнёр или как проектная поддержка под конкретную задачу.',
  },
  {
    question: 'Нам нужен быстрый результат',
    answer:
      'Быстро можно найти и исправить явные потери: неработающие формы, слабые офферы, нецелевые запросы в рекламе, отсутствие UTM-меток, ошибки в CRM, потерянные заявки, плохую структуру посадочных страниц. Но устойчивый маркетинг для B2B-компании — это не кнопка “включить продажи”. Мы разделяем быстрые правки и системные задачи: сайт, SEO, Директ, CRM, контент, воронку и аналитику.',
  },
  {
    question: 'Мы работаем в специфичной нише',
    answer:
      'Это как раз наша зона. Мы работаем с B2B, оборудованием, торгово-кассовой техникой, интернет-магазинами с большим каталогом, тендерами, автоматизацией заявок, Healthtech и сложными продуктами с длинным циклом сделки. Нам не нужно объяснять, что такое опт, дилеры, склад, каталог, тендерная заявка, коммерческое предложение и работа отдела продаж.',
  },
  {
    question: 'Как понять, что это нам подходит?',
    answer:
      'Если у вас есть сайт, реклама, база клиентов, менеджеры, CRM или входящие заявки, но нет понятной картины “откуда приходят клиенты и что реально работает”, стоит начать с диагностики. Мы смотрим весь путь: SEO, Яндекс Директ, сайт, формы, заявки, CRM, обработку лидов, повторные касания и продажи. После этого понятно, где узкое место: в трафике, сайте, предложении, аналитике или процессе продаж.',
  },
]

export function ObjectionsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative overflow-hidden bg-[var(--marketing-dark)] py-20 lg:py-32">
      <GradientMeshBackground />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center lg:mb-16"
        >
          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Вопросы, которые
            <br />
            мешают начать
          </h2>
        </motion.div>

        <div className="space-y-4">
          {objections.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left sm:px-8"
                >
                  <div className="flex items-center gap-5">
                    <span className="shrink-0 text-3xl font-black leading-none text-[var(--marketing-accent)]">
                      ?
                    </span>

                    <span className="text-lg font-bold leading-snug text-white sm:text-xl">
                      {item.question}
                    </span>
                  </div>

                  <IconChevronDown
                    stroke={3}
                    className={`h-5 w-5 shrink-0 text-white/45 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-7 sm:px-8">
                        <div className="border-t border-white/10 pt-5">
                          <p className="text-base leading-7 text-white/60">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}