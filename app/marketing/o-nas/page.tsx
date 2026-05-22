"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const timeline = [
  {
    year: "2009",
    title: "Запуск scan-lite.ru",
    text: "Начали продавать торгово-кассовое оборудование.",
  },
  {
    year: "2014",
    title: "Первый опыт в маркетинге",
    text: "Начали продвигать собственный бизнес и искать рабочие каналы привлечения.",
  },
  {
    year: "2018",
    title: "Маркетинг для партнёров",
    text: "Начали помогать партнёрам и клиентам с упаковкой, продвижением и заявками.",
  },
  {
    year: "2023",
    title: "AI-инструменты",
    text: "Внедрили нейросети и автоматизацию, чтобы ускорить работу с контентом, анализом и рутиной.",
  },
  {
    year: "2025",
    title: "Сканлайт Маркетинг",
    text: "Выделили маркетинговое направление как отдельную услугу для розницы, складов и B2B.",
  },
]

const team = [
  {
    name: "Ксения",
    role: "Маркетолог",
    text: "11 лет в маркетинге. Работала in-house в компании по кассовому оборудованию, знает рынок изнутри.",
    initials: "К",
  },
  {
    name: "Алексей",
    role: "Продажи и аналитика",
    text: "Опыт в B2B-продажах с 2009 года. Понимает, как думают ваши клиенты, потому что продавал им сам.",
    initials: "А",
  },
]

const aiStack = [
  { name: "Claude", text: "Тексты и стратегия", letter: "C" },
  { name: "ChatGPT", text: "Контент и идеи", letter: "C" },
  { name: "Gemini", text: "Исследования", letter: "G" },
  { name: "Яндекс Директ", text: "Реклама", letter: "Я" },
  { name: "Яндекс Метрика", text: "Аналитика", letter: "Я" },
  { name: "VK Ads", text: "Таргетинг", letter: "V" },
  { name: "Tilda", text: "Сайты", letter: "T" },
  { name: "Figma", text: "Дизайн", letter: "F" },
  { name: "Notion", text: "Управление", letter: "N" },
  { name: "Unisender", text: "Рассылки", letter: "U" },
]

export default function AboutPage() {
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
              { label: "Кто мы", href: "/marketing/o-nas", active: true },
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
            Получить диагностику
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-black/5 bg-[#F7F4EF]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(182,255,0,.28),transparent_30%),radial-gradient(circle_at_88%_10%,rgba(255,75,31,.11),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(116,0,255,.08),transparent_36%)]" />

        <div className="relative mx-auto grid max-w-[1240px] gap-10 px-6 py-16 lg:grid-cols-[1fr_.9fr] lg:items-center lg:px-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="mb-7 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-[#FF4B1F] shadow-sm">
              Кто мы
            </div>

            <h1 className="max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 md:text-7xl">
              Мы не пришли со стороны. Мы в этом рынке с 2009 года
            </h1>

            <p className="mt-7 max-w-3xl text-xl font-medium leading-relaxed text-slate-600 md:text-2xl">
              Scan-lite.ru — дилер торгово-кассового оборудования с 2009 года.
              Мы не изучали ваш рынок по кейсам — мы работали в нём.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/marketing/keys"
                className="rounded-2xl bg-[#B6FF00] px-7 py-4 text-base font-bold text-black shadow-[0_14px_40px_rgba(182,255,0,.28)] transition hover:scale-[1.03]"
              >
                Смотреть кейсы
              </Link>

              <Link
                href="/marketing/kontakty"
                className="rounded-2xl border border-black/10 bg-white px-7 py-4 text-base font-bold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-black/20"
              >
                Получить диагностику
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-[36px] border border-black/5 bg-white p-7 shadow-[0_24px_80px_rgba(15,23,42,.10)]"
          >
            <div className="relative overflow-hidden rounded-[28px] bg-[#0B1220] p-8 text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(182,255,0,.22),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(116,0,255,.26),transparent_36%)]" />

              <div className="relative">
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-sm font-bold uppercase tracking-[.16em] text-white/40">
                    Опыт рынка
                  </span>
                  <span className="rounded-full bg-[#B6FF00] px-4 py-2 text-sm font-bold text-black">
                    15+ лет
                  </span>
                </div>

                <div className="grid gap-4">
                  {[
                    "Торгово-кассовое оборудование",
                    "Розница, склады и B2B",
                    "Сайты, реклама, контент",
                    "AI и автоматизация рутины",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="rounded-[22px] border border-white/10 bg-white/10 px-5 py-5"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-lg font-bold tracking-tight">
                          {item}
                        </span>
                        <span className="text-sm font-bold text-[#B6FF00]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[24px] bg-[#B6FF00] p-5 text-black">
                  <div className="text-sm font-bold uppercase tracking-[.14em] text-black/50">
                    Главное
                  </div>
                  <p className="mt-3 text-lg font-bold leading-snug">
                    Мы понимаем, как покупают оборудование и почему сайт,
                    реклама и обработка заявок должны работать вместе.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div>
            <span className="text-sm font-bold uppercase tracking-[.18em] text-[#FF4B1F]">
              Наша история
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              От интернет-магазина оборудования до маркетингового направления
            </h2>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,.07)] md:p-10">
            <p className="text-xl leading-relaxed text-slate-700">
              Scan-lite.ru — дилер торгово-кассового оборудования. С 2009 года
              продаём сканеры штрих-кодов, принтеры этикеток, POS-системы и всё,
              что нужно для автоматизации торговли.
            </p>

            <p className="mt-6 text-xl leading-relaxed text-slate-700">
              За 15 лет мы прошли путь от небольшого интернет-магазина до
              федерального поставщика. Знаем, как работают закупки в рознице и
              B2B. Понимаем, что важно для ваших клиентов — потому что общались
              с ними каждый день.
            </p>

            <p className="mt-6 text-xl leading-relaxed text-slate-700">
              Сканлайт Маркетинг — логичное продолжение. Мы решили делиться
              экспертизой и помогать компаниям из нашего рынка с маркетингом. Не
              как стороннее агентство, а как партнёр, который понимает специфику
              изнутри.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {timeline.map((item, index) => (
            <motion.article
              key={item.year}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              className="rounded-[28px] border border-black/5 bg-white p-6 shadow-[0_16px_44px_rgba(15,23,42,.05)]"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-[#ECFFD2] px-4 py-2 text-xl font-bold text-black">
                {item.year}
              </div>

              <h3 className="text-xl font-bold tracking-tight text-slate-950">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/5 bg-white/60">
        <div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[.18em] text-[#7A4DFF]">
              Команда
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Маленькая команда с большим опытом
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {team.map((person, index) => (
              <motion.article
                key={person.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="overflow-hidden rounded-[34px] border border-black/5 bg-white shadow-[0_20px_70px_rgba(15,23,42,.08)]"
              >
                <div className="relative min-h-[240px] bg-[#0B1220] p-8 text-white">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(182,255,0,.28),transparent_32%),radial-gradient(circle_at_90%_85%,rgba(255,75,31,.22),transparent_36%)]" />

                  <div className="relative flex h-24 w-24 items-center justify-center rounded-[28px] bg-[#B6FF00] text-5xl font-bold text-black">
                    {person.initials}
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-4 inline-flex rounded-full bg-[#F7F4EF] px-4 py-2 text-sm font-bold text-[#FF4B1F]">
                    {person.role}
                  </div>

                  <h3 className="text-3xl font-bold tracking-tight text-slate-950">
                    {person.name}
                  </h3>

                  <p className="mt-4 text-lg leading-relaxed text-slate-600">
                    {person.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div>
            <span className="text-sm font-bold uppercase tracking-[.18em] text-[#FF4B1F]">
              AI-стек
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              AI ускоряет — человек проверяет
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Используем современные инструменты, чтобы работать быстрее и
              дешевле. Но каждый результат проверяет опытный маркетолог.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {aiStack.map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="rounded-[24px] border border-black/5 bg-white p-5 shadow-[0_12px_34px_rgba(15,23,42,.05)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ECFFD2] text-lg font-bold text-black">
                    {item.letter}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-950">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-500">
                      {item.text}
                    </p>
                  </div>
                </div>
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
                Готовы познакомиться?
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
                Запишитесь на бесплатную 30-минутную диагностику. Разберём вашу
                ситуацию и покажем точки роста.
              </p>
            </div>

            <Link
              href="/marketing/kontakty"
              className="w-fit rounded-2xl bg-[#B6FF00] px-8 py-5 text-base font-bold text-black shadow-[0_14px_40px_rgba(182,255,0,.28)] transition hover:scale-[1.03]"
            >
              Получить диагностику
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}