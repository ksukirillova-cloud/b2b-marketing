'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { IconClock, IconArrowRight } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { StaggeredContainer, StaggeredItem } from '../animations'

const articles = [
  {
    title: 'Как выбрать подрядчика по маркетингу для B2B',
    category: 'Стратегия',
    readTime: '7 мин',
    image: 'https://picsum.photos/seed/blog1/400/250',
    slug: 'kak-vybrat-podryadchika',
  },
  {
    title: '5 ошибок в Яндекс Директе, которые сливают бюджет',
    category: 'Реклама',
    readTime: '5 мин',
    image: 'https://picsum.photos/seed/blog2/400/250',
    slug: '5-oshibok-yandex-direct',
  },
  {
    title: 'SEO для интернет-магазина оборудования: с чего начать',
    category: 'SEO',
    readTime: '10 мин',
    image: 'https://picsum.photos/seed/blog3/400/250',
    slug: 'seo-dlya-magazina',
  },
  {
    title: 'AI в маркетинге: какие инструменты реально работают',
    category: 'AI-инструменты',
    readTime: '8 мин',
    image: 'https://picsum.photos/seed/blog4/400/250',
    slug: 'ai-v-marketinge',
  },
]

export function BlogSection() {
  return (
    <section className="relative bg-[var(--marketing-light)] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
            Статьи и разборы
          </h2>
          <Button 
            asChild
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            <Link href="/marketing/blog">
              Все статьи
              <IconArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>

        <StaggeredContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" delay={0.1}>
          {articles.map((article, i) => (
            <StaggeredItem key={i}>
              <Link href={`/marketing/blog/${article.slug}`} className="group block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="aspect-video overflow-hidden bg-gray-100">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 rounded-md bg-[var(--marketing-accent-light)]/10 text-[var(--marketing-accent-light)] text-xs font-medium">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-gray-400 text-xs">
                        <IconClock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-gray-900 font-semibold leading-snug group-hover:text-[var(--marketing-accent-light)] transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  )
}
