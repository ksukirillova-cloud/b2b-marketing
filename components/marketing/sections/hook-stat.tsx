'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { IconArrowRight } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { AnimatedCounter } from '../animations'

export function HookStatSection() {
  return (
    <section className="relative bg-[var(--marketing-light)] py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-8xl lg:text-[12rem] font-bold text-[var(--marketing-accent-light)] leading-none">
            <AnimatedCounter value={63} suffix="%" duration={2.5} />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl lg:text-2xl text-gray-800 leading-relaxed mb-6"
        >
<span className="font-semibold">
  63% компаний в России планируют увеличить маркетинговые бюджеты в 2026 году
</span>

<br />
<br />

Но рост бюджета сам по себе не решает проблему. Если сайт, реклама, аналитика и продажи живут отдельно, компания тратит больше — но всё ещё не понимает, где теряются заявки и деньги.

        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-sm text-gray-500 mb-10"
        >
          По данным исследования Dинамика, FAVES Communications и Московской ТПП, 2025
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Button 
            asChild
            size="lg"
            className="bg-[var(--marketing-accent-light)] text-white hover:bg-[var(--marketing-accent-light)]/90 font-semibold text-base h-14 px-8"
          >
            <Link href="/marketing/kontakty">
              Проверить, где теряются деньги
              <IconArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
