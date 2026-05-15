'use client'

import { motion } from 'framer-motion'
import { Marquee, StaggeredContainer, StaggeredItem } from '../animations'

const aiTools = ['Claude', 'ChatGPT', 'Gemini', 'Midjourney', 'Perplexity']

const reasons = [
  {
    number: '01',
    title: 'Знаем ваш рынок — не по учебнику',
    description: 'Работали маркетологом в компании по кассовому оборудованию. Продавали оборудование тем же клиентам через scan-lite.ru 15 лет. Видели как устроены продажи в рознице и B2B изнутри. Первые месяцы на «погружение в нишу» не нужны.',
    hasMarquee: false,
  },
  {
    number: '02',
    title: 'Работаем с нейросетями — быстрее и дешевле агентства',
    description: 'Тексты, SEO-структуры, контент, объявления — с AI в 2–3 раза быстрее классического агентства. Стоимость ниже. Всё проверяет маркетолог с 11-летним опытом.',
    hasMarquee: true,
  },
  {
    number: '03',
    title: 'Нет раздутого штата сотрудников',
    description: 'Только AI-инструменты и опытный маркетолог. Без аккаунт-менеджеров, длинных согласований и лишних людей между вами и результатом. Решения принимаются быстро, задачи выполняются быстрее агентства.',
    hasMarquee: false,
  },
]

export function WhyUsSection() {
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
            Три вещи, которые реально отличают
          </h2>
        </motion.div>

        <StaggeredContainer className="space-y-8 lg:space-y-12" delay={0.2}>
          {reasons.map((reason, i) => (
            <StaggeredItem key={i}>
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg shadow-black/5">
                <div className="flex items-start gap-6 lg:gap-8">
                  <span className="text-5xl lg:text-6xl font-bold text-[var(--marketing-accent-light)]/20">
                    {reason.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {reason.description}
                    </p>

                    {reason.hasMarquee && (
                      <div className="bg-gray-100 rounded-2xl py-4 overflow-hidden">
                        <Marquee speed={20}>
                          {aiTools.map((tool, i) => (
                            <span key={i} className="inline-flex items-center gap-3 mx-6 text-gray-700">
                              <span className="w-2 h-2 rounded-full bg-[var(--marketing-accent-light)]" />
                              <span className="text-lg font-medium">{tool}</span>
                            </span>
                          ))}
                        </Marquee>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  )
}
