"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"

type CaseItem = {
  slug: string
  title: string
  category: string
  sphere: string
  description: string
  results: string[]
  tags: string[]
  categories: string[]
  gradient: string
}

type PrincipleItem = {
  title: string
  text: string
}

const filters = [
  "Все",
  "Сайты",
  "AI-автоматизация",
  "B2B",
  "Оборудование",
  "Реклама",
  "Маркетплейсы",
] as const

type Filter = (typeof filters)[number]

const cases: CaseItem[] = [
  {
    slug: "scanlite-site",
    title: "Сайт Сканлайт: современный интернет-магазин вместо непродающего сайта",
    category: "Сайты / оборудование",
    sphere: "Торгово-кассовое оборудование",
    description:
      "Пересобрали сайт под рынок оборудования: структура, карточки, коммерческие блоки, логика заявки и SEO-основа.",
    results: [
      "каталог стал понятнее для покупателей",
      "появилась база для SEO-продвижения",
      "путь до заявки стал короче",
    ],
    tags: ["каталог", "SEO", "заявки"],
    categories: ["Сайты", "Оборудование", "B2B"],
    gradient:
      "radial-gradient(circle at 20% 20%, rgba(182,255,0,.32), transparent 30%), radial-gradient(circle at 85% 85%, rgba(255,75,31,.20), transparent 34%), #0B1220",
  },
  {
    slug: "ai-automation-platform",
    title: "Платформа автоматизации: заявки, контент и рутинные процессы через AI",
    category: "AI / автоматизация",
    sphere: "Маркетинг и продажи",
    description:
      "Собрали логику автоматизации для задач, которые обычно делаются руками: заявки, ответы, контент, таблицы, уведомления и отчёты.",
    results: [
      "меньше ручной обработки",
      "быстрее реакция на заявки",
      "понятная схема масштабирования",
    ],
    tags: ["AI", "Make", "процессы"],
    categories: ["AI-автоматизация", "B2B"],
    gradient:
      "radial-gradient(circle at 20% 20%, rgba(116,0,255,.34), transparent 32%), radial-gradient(circle at 85% 80%, rgba(182,255,0,.32), transparent 34%), #0B1220",
  },
  {
    slug: "b2b-industrial-crm",
    title: "B2B промышленность: CRM, база и рекламные касания без потерянных лидов",
    category: "B2B / промышленность",
    sphere: "Промышленный B2B",
    description:
      "Навели порядок в базе, CRM и повторных касаниях, чтобы лиды не терялись, а маркетинг был связан с продажами.",
    results: [
      "ROI 1900%",
      "10 000 ₽ → 200 000 ₽",
      "×3 конверсия базы",
    ],
    tags: ["CRM", "Директ", "email"],
    categories: ["B2B", "Реклама", "AI-автоматизация"],
    gradient:
      "radial-gradient(circle at 25% 20%, rgba(255,75,31,.26), transparent 30%), radial-gradient(circle at 85% 80%, rgba(182,255,0,.28), transparent 32%), #0B1220",
  },
  {
    slug: "healthtech-platform",
    title: "B2B Healthtech: упаковка нового продукта и первые лиды",
    category: "B2B / IT",
    sphere: "Healthtech-платформа",
    description:
      "Помогли объяснить рынку новый B2B-продукт: ценность, структура сайта, контент, воронки и тест спроса через рекламу.",
    results: [
      "первая продажа MVP",
      "27 лидов",
      "CPL 1 850 ₽",
    ],
    tags: ["позиционирование", "сайт", "Директ"],
    categories: ["B2B", "Сайты", "Реклама"],
    gradient:
      "radial-gradient(circle at 20% 25%, rgba(0,255,170,.24), transparent 30%), radial-gradient(circle at 82% 72%, rgba(116,0,255,.30), transparent 34%), #0B1220",
  },
  {
    slug: "product-site-from-zero",
    title: "Продуктовый сайт с нуля: от идеи до понятной страницы продаж",
    category: "Сайты / упаковка",
    sphere: "Новый продукт",
    description:
      "Собрали продуктовую страницу с нуля: кому продаём, что обещаем, как объясняем ценность и как ведём к заявке.",
    results: [
      "появилась понятная упаковка продукта",
      "страница готова к тесту спроса",
      "появилась база для рекламы",
    ],
    tags: ["оффер", "структура", "CTA"],
    categories: ["Сайты", "B2B"],
    gradient:
      "radial-gradient(circle at 18% 18%, rgba(182,255,0,.30), transparent 32%), radial-gradient(circle at 85% 85%, rgba(116,0,255,.24), transparent 34%), #0B1220",
  },
  {
    slug: "new-direction-site",
    title: "Сайт для нового направления: быстрый запуск и проверка спроса",
    category: "Сайты / запуск",
    sphere: "Новая услуга или категория",
    description:
      "Упаковали новое направление так, чтобы его можно было быстро вывести на рынок, запустить рекламу и понять реакцию аудитории.",
    results: [
      "направление получило отдельную упаковку",
      "появилась точка входа для рекламы",
      "клиентам стало понятнее предложение",
    ],
    tags: ["MVP", "гипотезы", "запуск"],
    categories: ["Сайты", "Реклама", "B2B"],
    gradient:
      "radial-gradient(circle at 20% 20%, rgba(255,75,31,.24), transparent 30%), radial-gradient(circle at 80% 80%, rgba(0,255,170,.22), transparent 34%), #0B1220",
  },
  {
    slug: "site-redesign",
    title: "Редизайн сайта: из непонятной витрины в продающую структуру",
    category: "Сайты / редизайн",
    sphere: "B2B и услуги",
    description:
      "Пересобрали существующий сайт: убрали хаос, усилили оффер, добавили логику заявки и сделали страницу понятнее для клиента.",
    results: [
      "сайт стал понятнее и собраннее",
      "усилилась логика заявки",
      "оффер стал конкретнее",
    ],
    tags: ["редизайн", "оффер", "CTA"],
    categories: ["Сайты", "B2B"],
    gradient:
      "radial-gradient(circle at 18% 20%, rgba(116,0,255,.28), transparent 32%), radial-gradient(circle at 80% 80%, rgba(255,75,31,.22), transparent 34%), #0B1220",
  },
  {
    slug: "marketplace-cards",
    title: "Карточки маркетплейсов: инфографика и упаковка товара",
    category: "Маркетплейсы / карточки",
    sphere: "Товары и оборудование",
    description:
      "Упаковали товарные карточки так, чтобы покупатель быстрее понимал состав, преимущества, сценарии использования и отличие от конкурентов.",
    results: [
      "карточки стали понятнее",
      "усилилась визуальная подача товара",
      "появились акценты для покупателя",
    ],
    tags: ["WB", "Ozon", "инфографика"],
    categories: ["Маркетплейсы", "Оборудование"],
    gradient:
      "radial-gradient(circle at 20% 20%, rgba(182,255,0,.26), transparent 30%), radial-gradient(circle at 80% 80%, rgba(255,75,31,.24), transparent 34%), #0B1220",
  },
]

const principleItems: PrincipleItem[] = [
  {
    title: "Показываем путь, а не только финальный экран",
    text: "В кейсе важен не красивый результат сам по себе, а логика: какая была задача, где были слабые места, что изменили и почему именно так.",
  },
  {
    title: "Связываем маркетинг с заявками и продажами",
    text: "Сайт, реклама, контент, CRM и обработка лидов не работают отдельно. Поэтому в кейсах показываем не один инструмент, а всю связку.",
  },
  {
    title: "Используем AI там, где он реально ускоряет",
    text: "ИИ помогает быстрее анализировать, собирать черновики, автоматизировать рутину и готовить связки. Человек отвечает за стратегию, смысл и проверку.",
  },
]

export default function CasesPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("Все")

  const filteredCases =
    activeFilter === "Все"
      ? cases
      : cases.filter((item) => item.categories.includes(activeFilter))

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
              { label: "Кейсы", href: "/marketing/keys", active: true },
              { label: "Кто мы", href: "/marketing/o-nas" },
              { label: "Блог", href: "/marketing/blog" },
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
            Обсудить задачу
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-black/5 bg-[#F7F4EF]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(182,255,0,.28),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(255,75,31,.13),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(116,0,255,.10),transparent_35%)]" />

        <div className="relative mx-auto max-w-[1380px] px-6 py-16 lg:px-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-6xl"
          >
            <div className="mb-7 inline-flex w-fit rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-bold text-black/60 shadow-sm">
              Кейсы: сайты, реклама, AI и упаковка
            </div>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 md:text-7xl">
              Не просто портфолио. Показываем, какие задачи решали и что менялось
            </h1>

            <p className="mt-8 max-w-4xl text-xl font-medium leading-relaxed text-slate-600 md:text-2xl">
              Сайты, каталоги, AI-автоматизация, реклама, CRM, контент и
              маркетплейсы. Часть кейсов обезличена: без названий компаний, но
              с логикой работ и результатами.
            </p>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-2xl px-5 py-3 text-sm font-bold transition ${
                  activeFilter === filter
                    ? "bg-[#B6FF00] text-black shadow-[0_12px_30px_rgba(182,255,0,.25)]"
                    : "bg-white text-black/65 hover:bg-[#B6FF00] hover:text-black"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1380px] px-6 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {filteredCases.map((item, index) => (
            <motion.article
              key={item.slug}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="group overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-[0_18px_60px_rgba(15,23,42,.08)] transition hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(15,23,42,.12)]"
            >
              <div
                className="relative min-h-[230px] p-7 text-white"
                style={{ background: item.gradient }}
              >
                <div className="mb-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold text-white/85 backdrop-blur"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-7 left-7 right-7">
                  <div className="mb-3 inline-flex rounded-full bg-[#B6FF00] px-3 py-1 text-xs font-bold text-black">
                    {item.category}
                  </div>
                  <div className="text-sm font-bold text-white/55">
                    {item.sphere}
                  </div>
                </div>
              </div>

              <div className="p-7">
              <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-950 transition group-hover:text-[#FF4B1F]">
  <Link
    href={`/marketing/keys/${item.slug}`}
    className="transition hover:text-[#FF4B1F]"
  >
    {item.title}
  </Link>
</h2>

                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {item.description}
                </p>

                <div className="mt-6 space-y-3">
                  {item.results.map((result) => (
                    <div
                      key={result}
                      className="flex gap-3 rounded-2xl bg-[#F7F4EF] px-4 py-3"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#B6FF00]" />
                      <span className="text-sm font-bold leading-snug text-slate-800">
                        {result}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex items-center justify-between gap-4">
                  <Link
                    href={`/marketing/keys/${item.slug}`}
                    className="rounded-2xl bg-[#0B1220] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#FF4B1F]"
                  >
                    Смотреть кейс
                  </Link>

                  <span className="text-sm font-bold text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredCases.length === 0 && (
          <div className="rounded-[32px] bg-white p-10 text-center shadow-[0_18px_60px_rgba(15,23,42,.08)]">
            <p className="text-lg font-bold text-slate-600">
              В этой категории пока нет кейсов.
            </p>
          </div>
        )}
      </section>

      <section className="border-y border-black/5 bg-white/60">
        <div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[.18em] text-[#7A4DFF]">
              Принцип
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Как мы показываем результат
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {principleItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="rounded-[28px] border border-black/5 bg-white p-7 shadow-[0_16px_44px_rgba(15,23,42,.05)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ECFFD2] text-lg font-bold text-black">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="overflow-hidden rounded-[36px] border border-black/5 bg-white shadow-[0_24px_80px_rgba(15,23,42,.10)]">
          <div className="grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Хотите похожий результат?
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
                Оставьте заявку на бесплатный вводный разбор. Посмотрим вашу
                ситуацию и скажем, с чего логичнее начать: сайт, реклама,
                аналитика, упаковка или AI-автоматизация.
              </p>
            </div>

            <Link
              href="/marketing/kontakty"
              className="w-fit rounded-2xl bg-[#B6FF00] px-8 py-5 text-base font-bold text-black shadow-[0_14px_40px_rgba(182,255,0,.28)] transition hover:scale-[1.03]"
            >
              Обсудить задачу
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}