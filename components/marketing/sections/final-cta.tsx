'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { IconArrowRight } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { GradientMeshBackground } from '../animations'

export function FinalCtaSection() {
  return (
    <section className="relative bg-[var(--marketing-dark)] py-20 lg:py-32 overflow-hidden">
      <GradientMeshBackground />
      
      {/* Decorative spheres */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-[var(--marketing-purple)] to-[var(--marketing-teal)] opacity-40 blur-2xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-[var(--marketing-teal)] to-[var(--marketing-accent)] opacity-30 blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-6 leading-[1.05] tracking-tighter">
            Начните с диагностики.{' '}
            <span className="text-[var(--marketing-accent)]">Разберёмся за 30 минут.</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Покажем где вы теряете клиентов прямо сейчас. Без обязательств — просто честный разговор.
          </p>

          <Button 
            asChild
            size="lg"
            className="rounded-xl bg-[var(--marketing-accent)] text-black hover:bg-[var(--marketing-accent)]/90 font-semibold text-lg h-16 px-12"
          >
            <Link href="/marketing/kontakty">
              Получить диагностику
              <IconArrowRight className="w-6 h-6 ml-3" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
