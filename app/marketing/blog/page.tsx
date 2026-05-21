"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"

const tags = [
  "Все",
  "Стратегия",
  "Реклама",
  "SEO",
  "AI-инструменты",
  "Геореклама",
  "Контент",
  "Маркетплейсы",
  "Аналитика",
] as const

type Tag = (typeof tags)[number]
type ArticleTag = Exclude<Tag, "Все">

type BlogPost = {
  title: string
  description: string
  slug: string
  tag: ArticleTag
  readTime: string
  date: string
  image: string
}

const blogPosts: BlogPost[] = [
  {
    title: "Как выбрать подрядчика по маркетингу для B2B: чек-лист из 12 пунктов",
    description:
      "Разбираем, на что смотреть при выборе агентства или фрилансера. Какие вопросы задать и какие ответы должны насторожить.",
    slug: "kak-vybrat-podryadchika",
    tag: "Стратегия",
    readTime: "7 мин",
    date: "18 апреля 2026",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "5 ошибок в Яндекс Директе, которые сливают бюджет B2B-компаний",
    description:
      "Типичные ошибки в настройке контекстной рекламы для B2B. Проверьте свои кампании перед следующим пополнением бюджета.",
    slug: "5-oshibok-yandex-direct",
    tag: "Реклама",
    readTime: "5 мин",
    date: "10 апреля 2026",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "SEO для интернет-магазина оборудования: с чего начать в 2026",
    description:
      "Пошаговый план продвижения интернет-магазина в Яндексе: от технического аудита до структуры каталога и коммерческих страниц.",
    slug: "seo-dlya-magazina",
    tag: "SEO",
    readTime: "10 мин",
    date: "5 апреля 2026",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "AI в маркетинге: какие инструменты реально работают в 2026",
    description:
      "Обзор AI-инструментов для маркетинга: что использовать в работе, где они ускоряют процессы, а где пока нужен ручной контроль.",
    slug: "ai-v-marketinge",
    tag: "AI-инструменты",
    readTime: "8 мин",
    date: "1 апреля 2026",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Как продвигать компанию в Яндекс Картах: полное руководство",
    description:
      "Геореклама для розничного бизнеса. Как настроить карточку, собрать отзывы и получать клиентов из локального поиска.",
    slug: "prodvizhenie-yandex-karty",
    tag: "Геореклама",
    readTime: "12 мин",
    date: "25 марта 2026",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Контент-план для B2B-компании: шаблон и примеры",
    description:
      "Как составить контент-план, который работает на продажи. Шаблон, структура рубрик и примеры для разных ниш B2B.",
    slug: "kontent-plan-b2b",
    tag: "Контент",
    readTime: "6 мин",
    date: "20 марта 2026",
    image:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Продвижение на Wildberries для производителей оборудования",
    description:
      "Особенности работы с маркетплейсами в B2B-сегменте. Кому подходит, какие риски учесть и с чего начать.",
    slug: "wildberries-oborudovanie",
    tag: "Маркетплейсы",
    readTime: "9 мин",
    date: "15 марта 2026",
    image:
      "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Как измерять эффективность маркетинга в B2B",
    description:
      "Какие метрики отслеживать и как настроить связную аналитику для длинного цикла сделки: от заявки до продажи.",
    slug: "effektivnost-marketinga-b2b",
    tag: "Аналитика",
    readTime: "11 мин",
    date: "10 марта 2026",
    image:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=900&q=80",
  },
]

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState<Tag>("Все")

  const filteredPosts =
    activeTag === "Все"
      ? blogPosts
      : blogPosts.filter((post) => post.tag === activeTag)

  const featuredPost = filteredPosts[0]
  const regularPosts = filteredPosts.slice(1)

  return (
    <main className="min-h-screen bg-[#F7F4EF] text-[#0B1220]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1380px] items-center justify-between px-6 py-5 lg:px-10">
          <div className="flex items-center gap-10">
            <Link
              href="/"
              className="hidden text-sm text-white/40 transition hover:text-white md:block"
            >
              ← scan-lite.ru
            </Link>

            <Link href="/marketing" className="leading-none">
              <div className="text-2xl font-bold tracking-tight text-white">
                Сканлайт Маркетинг
              </div>
              <div className="mt-1 text-xs font-medium text-white/35">
                от команды scan-lite.ru
              </div>
            </Link>
          </div>

          <nav className="hidden items-center gap-2 lg:flex">
            {[
              { label: "Услуги", href: "/marketing/uslugi" },
              { label: "Кейсы", href: "/marketing/keys" },
              { label: "Кто мы", href: "/marketing/o-nas" },
              { label: "Блог", href: "/marketing/blog", active: true },
              { label: "Контакты", href: "/marketing/kontakty" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-2xl px-5 py-3 text-sm font-bold transition ${
                  item.active
                    ? "bg-white/10 text-[#B6FF00]"
                    : "text-white/55 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/marketing/kontakty"
            className="rounded-2xl bg-[#B6FF00] px-7 py-4 text-sm font-bold text-black transition hover:scale-[1.03] hover:bg-[#C8FF35]"
          >
            Получить диагностику
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(116,0,255,.35),transparent_35%),radial-gradient(circle_at_85%_25%,rgba(0,255,170,.22),transparent_35%)]" />

        <div className="relative mx-auto max-w-[1380px] px-6 pb-20 pt-24 lg:px-10 lg:pb-24 lg:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
              Статьи и разборы
            </h1>

            <p className="mt-8 max-w-3xl text-xl font-medium leading-relaxed text-white/55 md:text-2xl">
              Про маркетинг для розницы, складов и B2B. Без воды — только то,
              что помогает привлекать заявки, считать деньги и управлять
              продвижением.
            </p>
          </motion.div>

          <div className="mt-14 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`rounded-2xl px-5 py-3 text-sm font-bold transition ${
                  activeTag === tag
                    ? "bg-[#B6FF00] text-black shadow-[0_0_30px_rgba(182,255,0,.35)]"
                    : "bg-white text-black/75 hover:bg-[#B6FF00] hover:text-black"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-20">
        {featuredPost ? (
          <motion.article
            key={featuredPost.slug}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_rgba(15,23,42,.10)]"
          >
            <Link
              href={`/marketing/blog/${featuredPost.slug}`}
              className="grid lg:grid-cols-[1fr_1fr]"
            >
              <div className="relative h-[320px] overflow-hidden lg:h-[360px]">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#FFF1EA] px-3 py-1 text-xs font-bold text-[#FF4B1F]">
                    {featuredPost.tag}
                  </span>
                  <span className="text-sm font-bold text-slate-400">
                    ⏱ {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-4xl">
                  {featuredPost.title}
                </h2>

                <p className="mt-5 text-lg leading-relaxed text-slate-600">
                  {featuredPost.description}
                </p>

                <div className="mt-7 flex items-center justify-between gap-4">
                  <span className="text-base font-bold text-[#FF4B1F]">
                    Читать статью →
                  </span>

                  <span className="text-sm font-bold text-slate-400">
                    {featuredPost.date}
                  </span>
                </div>
              </div>
            </Link>
          </motion.article>
        ) : (
          <div className="rounded-[28px] bg-white p-10 text-center shadow-[0_20px_60px_rgba(15,23,42,.08)]">
            <p className="text-lg font-bold text-slate-600">
              В этой категории пока нет статей.
            </p>
          </div>
        )}

        {regularPosts.length > 0 && (
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="group overflow-hidden rounded-[24px] bg-white shadow-[0_16px_48px_rgba(15,23,42,.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(15,23,42,.12)]"
              >
                <Link href={`/marketing/blog/${post.slug}`}>
                  <div className="h-[220px] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-[#FFF1EA] px-3 py-1 text-xs font-bold text-[#FF4B1F]">
                        {post.tag}
                      </span>
                      <span className="text-xs font-bold text-slate-400">
                        ⏱ {post.readTime}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold leading-snug tracking-tight text-slate-950 group-hover:text-[#FF4B1F]">
                      {post.title}
                    </h3>

                    <div className="mt-7 flex items-center justify-between gap-4">
                      <span className="text-sm font-bold text-[#FF4B1F]">
                        Читать →
                      </span>

                      <span className="text-xs font-bold text-slate-400">
                        {post.date}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}