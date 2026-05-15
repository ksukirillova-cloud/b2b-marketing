'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { IconArrowRight, IconChartBar, IconTrendingUp } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { GradientMeshBackground, StaggeredContainer, StaggeredItem, GlassCard } from '../animations'

const cases = [
  {
    industry: 'B2B промышленность',
    metric: 'ROI 1900%',
    description: 'Запустили комплексную стратегию продвижения для производителя промышленного оборудования',
    image: 'https://picsum.photos/seed/case1/800/400',
  },
  {
    industry: 'IT / Оборудование',
    metric: '50% ВЧ-запросов в топ-10',
    description: 'SEO-продвижение для дистрибьютора IT-оборудования с выводом в топ поисковых систем',
    image: 'https://picsum.photos/seed/case2/800/400',
  },
  {
    industry: 'B2B Healthtech',
    metric: '27 лидов / CPL 1 850 ₽',
    description: 'Контекстная реклама для медицинского B2B-стартапа с оптимизацией стоимости лида',
    image: 'https://picsum.photos/seed/case3/800/400',
  },
]

export function CasesSection() {
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
            Реальные проекты. Реальные цифры.
          </h2>
        </motion.div>

        <StaggeredContainer className="grid md:grid-cols-3 gap-6 lg:gap-8" delay={0.15}>
          {cases.map((caseItem, i) => (
            <StaggeredItem key={i}>
              <GlassCard className="h-full group cursor-pointer">
                <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-white/5">
                  <Image
                    src={caseItem.image}
                    alt={caseItem.industry}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <IconChartBar className="w-4 h-4 text-[var(--marketing-accent)]" />
                  <span className="text-[var(--marketing-accent)] text-sm font-medium">
                    {caseItem.industry}
                  </span>
                </div>
                <p className="text-3xl lg:text-4xl font-bold text-white mb-3">
                  {caseItem.metric}
                </p>
                <p className="text-white/50 text-sm">
                  {caseItem.description}
                </p>
              </GlassCard>
            </StaggeredItem>
          ))}
        </StaggeredContainer>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Button 
            asChild
            size="lg"
            className="bg-[var(--marketing-accent)] text-[var(--marketing-dark)] hover:bg-[var(--marketing-accent)]/90 font-semibold"
          >
            <Link href="/marketing/keys">
              Смотреть все кейсы
              <IconArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
