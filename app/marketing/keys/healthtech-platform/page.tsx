"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const problems = [
  "новый B2B-продукт было сложно быстро объяснить рынку",
  "не было чёткой упаковки: кому, зачем и какую задачу решает платформа",
  "сайт и контент не раскрывали ценность продукта для разных ролей",
  "нужно было проверить спрос через воронку и рекламный тест",
]

const workItems = [
  {
    title: "Провели кастдев и анализ аудитории",
    text: "Разобрали, кому продаётся продукт, какие роли участвуют в решении и какие аргументы важны для каждого сегмента.",
  },
  {
    title: "Собрали позиционирование",
    text: "Сформулировали ценность продукта простым языком: не через функции, а через задачи, риски и управленческий результат для клиента.",
  },
  {
    title: "Подготовили сайт и контент",
    text: "Пересобрали структуру страниц, тексты, блоки, сценарии объяснения продукта и материалы для продвижения.",
  },
  {
    title: "Запустили тест Яндекс Директа",
    text: "Проверили спрос через рекламные гипотезы и связали результат с лидами, а не только с кликами и показами.",
  },
]

const productFlow = [
  {
    label: "Позиционирование",
    title: "Сложный продукт становится понятным",
    text: "Формулируем, какую задачу решает платформа, для кого она нужна и почему это важно сейчас.",
  },
  {
    label: "Сайт",
    title: "Страница объясняет ценность",
    text: "Пользователь видит не набор функций, а сценарии применения, преимущества и следующий шаг.",
  },
  {
    label: "Воронка",
    title: "Проверяем спрос через лиды",
    text: "Реклама, контент и формы помогают понять, какие сегменты реагируют и какие сообщения работают лучше.",
  },
]

const results = [
  "первая продажа MVP",
  "27 лидов",
  "CPL 1 850 ₽",
  "конверсия 3,2%",
]

const gallery = [
  {
    title: "Структура сайта",
    text: "Место для скрина структуры страницы, первого экрана или ключевых блоков продукта.",
  },
  {
    title: "Позиционирование",
    text: "Место для скрина с оффером, сообщениями для ЦА или схемой ценности продукта.",
  },
  {
    title: "Контент и соцсети",
    text: "Место для скрина постов, визуалов, контент-плана или материалов для прогрева аудитории.",
  },
  {
    title: "Рекламный тест",
    text: "Место для скрина рекламного кабинета, гипотез, лидов или отчёта по CPL.",
  },
]

export default function HealthtechPlatformCasePage() {
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(182,255,0,.24),transparent_30%),radial-gradient(circle_at_90%_10%,rgba(116,0,255,.14),transparent_32%),radial-gradient(circle_at_55%_100%,rgba(255,75,31,.09),transparent_36%)]" />

        <div className="relative mx-auto max-w-[1240px] px-6 py-14 lg:px-10 lg:py-20">
          <Link
            href="/marketing/keys"
            className="mb-8 inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-bold text-black/60 shadow-sm transition hover:bg-[#B6FF00] hover:text-black"
          >
            ← Все кейсы
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center"
          >
            <div>
              <div className="mb-7 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-[#7A4DFF] shadow-sm">
                B2B Healthtech
              </div>

              <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 md:text-7xl">
                Упаковка нового продукта и первые лиды
              </h1>

              <p className="mt-7 max-w-3xl text-xl font-medium leading-relaxed text-slate-600 md:text-2xl">
                Помогли объяснить рынку новый B2B-продукт: ценность, структура
                сайта, контент, воронки и тест спроса через рекламу.
              </p>
            </div>

            <div className="rounded-[36px] border border-black/5 bg-white p-7 shadow-[0_24px_80px_rgba(15,23,42,.10)]">
              <div className="rounded-[28px] bg-[#0B1220] p-7 text-white">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm font-bold uppercase tracking-[.16em] text-white/40">
                    Результат
                  </span>
                  <span className="rounded-full bg-[#B6FF00] px-4 py-2 text-sm font-bold text-black">
                    MVP
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {results.map((item) => (
                    <div
                      key={item}
                      className="rounded-[22px] border border-white/10 bg-white/10 px-5 py-5"
                    >
                      <div className="text-xl font-bold tracking-tight">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[24px] bg-[#B6FF00] p-5 text-black">
                  <div className="text-sm font-bold uppercase tracking-[.14em] text-black/50">
                    Главное
                  </div>
                  <p className="mt-3 text-lg font-bold leading-snug">
                    Сложный продукт стал понятнее рынку, а рекламный тест дал
                    первые измеримые лиды.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <span className="text-sm font-bold uppercase tracking-[.18em] text-[#FF4B1F]">
              Вводные
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Что было до
            </h2>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,.07)] md:p-10">
            <p className="text-xl leading-relaxed text-slate-700">
              Новый B2B-продукт был сложным для быстрого понимания. Нужно было
              объяснить его ценность, собрать упаковку, подготовить сайт и
              проверить, какие сообщения реально приводят к интересу и заявкам.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {problems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-[#F7F4EF] px-5 py-4 text-sm font-bold leading-snug text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-white/60">
        <div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[.18em] text-[#7A4DFF]">
              Логика
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Как упаковали продукт для рынка
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Задача была не просто сделать сайт. Нужно было связать
              позиционирование, контент, воронку и рекламный тест в одну
              понятную систему.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {productFlow.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="rounded-[30px] border border-black/5 bg-white p-7 shadow-[0_16px_44px_rgba(15,23,42,.05)]"
              >
                <div className="mb-7 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-[#ECFFD2] px-4 py-2 text-sm font-bold text-black">
                    {item.label}
                  </span>
                  <span className="text-sm font-bold text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
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
        <div className="mb-10 max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-[.18em] text-[#FF4B1F]">
            Работа
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Что сделали
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {workItems.map((item, index) => (
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
      </section>

      <section className="border-y border-black/5 bg-white/60">
        <div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[.18em] text-[#7A4DFF]">
              Скриншоты
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Место для фото, схем и скринов
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Сюда можно добавить скриншоты сайта, структуры, рекламных тестов,
              контента, соцсетей и воронки.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {gallery.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-[0_18px_60px_rgba(15,23,42,.08)]"
              >
                <div className="flex min-h-[320px] items-center justify-center bg-[#0B1220] p-8">
                  <div className="rounded-[28px] border border-dashed border-white/25 bg-white/5 px-8 py-10 text-center backdrop-blur">
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B6FF00] text-xl font-bold text-black">
                      +
                    </div>
                    <div className="text-xl font-bold text-white">
                      Фото / скрин {index + 1}
                    </div>
                    <div className="mt-3 max-w-xs text-sm leading-relaxed text-white/55">
                      сюда вставим изображение
                    </div>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <span className="text-sm font-bold uppercase tracking-[.18em] text-[#FF4B1F]">
              Вывод
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Главное решение
            </h2>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,.07)] md:p-10">
            <p className="text-xl leading-relaxed text-slate-700">
              Главная задача была не в том, чтобы просто “сделать сайт”. Для
              нового B2B-продукта сначала нужно объяснить ценность, собрать
              понятную упаковку, а затем проверить спрос через рекламу, контент
              и воронку. Только так продукт становится понятным рынку.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="overflow-hidden rounded-[36px] border border-black/5 bg-white shadow-[0_24px_80px_rgba(15,23,42,.10)]">
          <div className="grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Запускаете новый продукт или направление?
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
                Оставьте заявку на бесплатный вводный разбор. Посмотрим продукт,
                рынок, сайт и подскажем, как упаковать ценность так, чтобы её
                понял клиент.
              </p>
            </div>

            <Link
              href="/marketing/kontakty"
              className="w-fit rounded-2xl bg-[#B6FF00] px-8 py-5 text-base font-bold text-black shadow-[0_14px_40px_rgba(182,255,0,.28)] transition hover:scale-[1.03]"
            >
              Обсудить запуск
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}