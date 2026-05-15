'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { GradientMeshBackground, StaggeredContainer, StaggeredItem, GlassCard } from '../animations'

const personas = [
  {
    role: 'Владелец оптовой компании / дистрибьютор',
    quote: '«Продажи держатся на менеджерах — уйдут они, уйдут клиенты»',
    description: 'Хочет сделать продажи предсказуемыми. Маркетинг есть, но не управляется.',
    image: 'https://picsum.photos/seed/persona1/400/400',
  },
  {
    role: 'Владелец розничной сети / магазина',
    quote: '«Директ запущен, деньги уходят — заявок нет или они нецелевые»',
    description: 'Уже пробовал агентство. Остался горький осадок и слитый бюджет.',
    image: 'https://picsum.photos/seed/persona2/400/400',
  },
  {
    role: 'Коммерческий директор / B2B-поставщик',
    quote: '«Не понимаю откуда реально приходят клиенты и что вообще работает»',
    description: 'Есть продажи, но нет прозрачности. Хочет управленческую отчётность по маркетингу.',
    image: 'https://picsum.photos/seed/persona3/400/400',
  },
  {
    role: 'Основатель компании по складскому оборудованию',
    quote: '«Сайт, реклама, соцсети — всё у разных, никто не видит картину целиком»',
    description: 'Хочет одного подрядчика, который отвечает за результат, а не за «свой кусок».',
    image: 'https://picsum.photos/seed/persona4/400/400',
  },
]

export function PersonasSection() {
  return (
    <section className="relative bg-[var(--marketing-dark)] py-20 lg:py-32 overflow-hidden">
      <GradientMeshBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Узнаёте себя? Тогда это точно про вас.
          </h2>
        </motion.div>

        <StaggeredContainer className="grid md:grid-cols-2 gap-6 lg:gap-8" delay={0.15}>
          {personas.map((persona, i) => (
            <StaggeredItem key={i}>
              <GlassCard className="h-full">
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white/10">
                      <Image
                        src={persona.image}
                        alt={persona.role}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-[var(--marketing-accent)] text-sm font-medium mb-2">
                      {persona.role}
                    </p>
                    <p className="text-white text-lg font-medium mb-3 leading-snug">
                      {persona.quote}
                    </p>
                    <p className="text-white/50 text-sm">
                      {persona.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </StaggeredItem>
          ))}
        </StaggeredContainer>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12"
        >
          <GlassCard className="text-center">
            <p className="text-white/80 text-lg">
              Если хотя бы одно — ваше, мы знаем как это решить. И знаем ваш рынок изнутри — не изучали по кейсам, работали в нём.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
