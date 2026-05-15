'use client'

import { motion } from 'framer-motion'
import { IconHelp, IconChevronDown } from '@tabler/icons-react'
import { GradientMeshBackground, StaggeredContainer, StaggeredItem, GlassCard } from '../animations'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const objections = [
  {
    question: 'Мы уже работали с агентством, результата не было',
    answer: 'Понимаем. Главная проблема большинства агентств — они не знают ваш рынок и тратят ваш бюджет на «погружение». Мы работаем в этой нише 15 лет. Нам не нужно время на изучение — мы уже знаем, что работает.',
  },
  {
    question: 'Это слишком дорого для нашей компании',
    answer: 'Сравните с альтернативами: штатный маркетолог от 80-120 тыс/мес + налоги, агентство от 150 тыс/мес. Мы работаем быстрее за счёт AI и экспертизы — вы платите за результат, а не за процесс.',
  },
  {
    question: 'У нас уже есть штатный маркетолог',
    answer: 'Отлично. Мы можем усилить его работу: дать стратегию, настроить аналитику, взять на себя сложные задачи. Или провести аудит и помочь понять, что работает, а что нет.',
  },
  {
    question: 'Нам нужен быстрый результат',
    answer: 'Первые результаты — через 2-4 недели. Это время на аудит, настройку и запуск первых кампаний. Системный результат — через 2-3 месяца. Это честные сроки, без завышенных обещаний.',
  },
  {
    question: 'Мы работаем в специфичной нише',
    answer: 'Если это розница, опт, B2B-продажи оборудования или материалов — это наша специализация. Если ваша ниша далека от этого, честно скажем и порекомендуем коллег.',
  },
  {
    question: 'Как понять, что это нам подходит?',
    answer: 'Начните с бесплатной 30-минутной диагностики. За это время разберём вашу ситуацию, покажем где вы теряете клиентов и предложим конкретный план. Без обязательств — просто честный разговор.',
  },
]

export function ObjectionsSection() {
  return (
    <section className="relative bg-[var(--marketing-dark)] py-20 lg:py-32 overflow-hidden">
      <GradientMeshBackground />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Вопросы, которые останавливают от старта
          </h2>
        </motion.div>

        <StaggeredContainer delay={0.1}>
          <Accordion type="single" collapsible className="space-y-4">
            {objections.map((item, i) => (
              <StaggeredItem key={i}>
                <AccordionItem value={`item-${i}`} className="glass-card rounded-2xl border-0 px-6 overflow-hidden">
                  <AccordionTrigger className="text-left text-white hover:no-underline py-6">
                    <div className="flex items-center gap-4">
                      <IconHelp className="w-5 h-5 text-[var(--marketing-accent)] flex-shrink-0" />
                      <span className="text-base lg:text-lg font-medium">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 pb-6 pl-9">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </StaggeredItem>
            ))}
          </Accordion>
        </StaggeredContainer>
      </div>
    </section>
  )
}
