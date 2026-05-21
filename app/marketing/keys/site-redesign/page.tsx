"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const problems = [
  "сайт был, но не объяснял ценность продукта или услуги",
  "первый экран не отвечал на главный вопрос клиента: что здесь предлагают и зачем мне это",
  "блоки выглядели разрозненно и не вели к заявке",
  "рекламу было сложно вести на страницу без понятного оффера и CTA",
]

const workItems = [
  {
    title: "Провели аудит структуры и смыслов",
    text: "Разобрали, где пользователь теряется, какие блоки не работают, что не объяснено и почему сайт не ведёт к заявке.",
  },
  {
    title: "Пересобрали первый экран",
    text: "Сформулировали понятный оффер: что компания предлагает, для кого, какую задачу решает и почему стоит оставить заявку.",
  },
  {
    title: "Выстроили путь клиента",
    text: "Разложили блоки в логике принятия решения: проблема, решение, преимущества, доверие, сценарии и следующий шаг.",
  },
  {
    title: "Усилили CTA и коммерческие акценты",
    text: "Добавили понятные точки контакта, формы, кнопки и аргументы, которые помогают клиенту перейти от просмотра к обращению.",
  },
]

const redesignFlow = [
  {
    label: "Аудит",
    title: "Находим слабые места",
    text: "Смотрим, где сайт не объясняет ценность, не отвечает на вопросы клиента и не ведёт к заявке.",
  },
  {
    label: "Структура",
    title: "Собираем логику страницы",
    text: "Перестраиваем блоки так, чтобы пользователь двигался от понимания предложения к действию.",
  },
  {
    label: "Заявка",
    title: "Добавляем точки конверсии",
    text: "Делаем CTA, формы и коммерческие блоки заметными, понятными и связанными с задачей клиента.",
  },
]

const results = [
  "сайт стал понятнее и собраннее",
  "усилилась логика заявки",
  "оффер стал конкретнее",
  "страницу проще использовать в рекламе",
]

const gallery = [
  {
    title: "Первый экран",
    text: "Место для скрина до/после первого экрана: оффер, подзаголовок, CTA и визуальный акцент.",
  },
  {
    title: "Структура страницы",
    text: "Место для скрина блоков: проблема, решение, преимущества, доверие и заявка.",
  },
  {
    title: "Коммерческие блоки",
    text: "Место для скрина преимуществ, аргументов, сценариев применения или блока доверия.",
  },
  {
    title: "Форма заявки",
    text: "Место для скрина CTA-блока, формы, квиза или другого элемента конверсии.",
  },
]

export default function SiteRedesignCasePage() {
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(182,255,0,.26),transparent_30%),radial-gradient(circle_at_90%_10%,rgba(116,0,255,.12),transparent_32%),radial-gradient(circle_at_55%_100%,rgba(255,75,31,.09),transparent_36%)]" />

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
                Редизайн сайта
              </div>

              <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 md:text-7xl">
                Редизайн сайта: из непонятной витрины в продающую структуру
              </h1>

              <p className="mt-7 max-w-3xl text-xl font-medium leading-relaxed text-slate-600 md:text-2xl">
                Пересобрали существующий сайт: убрали хаос, усилили оффер,
                добавили логику заявки и сделали страницу понятнее для клиента.
              </p>
            </div>

            <div className="rounded-[36px] border border-black/5 bg-white p-7 shadow-[0_24px_80px_rgba(15,23,42,.10)]">
              <div className="rounded-[28px] bg-[#0B1220] p-7 text-white">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm font-bold uppercase tracking-[.16em] text-white/40">
                    Логика редизайна
                  </span>
                  <span className="rounded-full bg-[#B6FF00] px-4 py-2 text-sm font-bold text-black">
                    CTA
                  </span>
                </div>

                <div className="space-y-4">
                  {["Аудит", "Структура", "Заявка"].map((item, index) => (
                    <div
                      key={item}
                      className="rounded-[22px] border border-white/10 bg-white/10 px-5 py-5"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xl font-bold tracking-tight">
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
                    Результат
                  </div>
                  <p className="mt-3 text-lg font-bold leading-snug">
                    Сайт стал понятнее, оффер — конкретнее, путь до заявки —
                    короче.
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
              Сайт существовал, но не работал как инструмент продаж. На странице
              было сложно быстро понять предложение, преимущества и следующий
              шаг. Клиентам приходилось додумывать, а продажам — объяснять всё
              вручную.
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
              Как сайт становится продающей структурой
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Редизайн — это не только визуал. Сначала нужно понять, где клиент
              теряется, какие вопросы остаются без ответа и что мешает оставить
              заявку.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {redesignFlow.map((item, index) => (
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
              Место для фото и скринов проекта
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Сюда можно добавить реальные скриншоты сайта: до/после,
              первый экран, структуру блоков, коммерческие акценты и форму
              заявки.
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
              Главная задача была не в том, чтобы просто обновить дизайн.
              Нужно было превратить сайт в понятную структуру продаж: объяснить
              оффер, ответить на вопросы клиента и сделать следующий шаг
              очевидным.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="overflow-hidden rounded-[36px] border border-black/5 bg-white shadow-[0_24px_80px_rgba(15,23,42,.10)]">
          <div className="grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Сайт есть, но заявки не идут?
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
                Оставьте заявку на бесплатный вводный разбор. Посмотрим первый
                экран, структуру, оффер и подскажем, что мешает клиентам
                оставить заявку.
              </p>
            </div>

            <Link
              href="/marketing/kontakty"
              className="w-fit rounded-2xl bg-[#B6FF00] px-8 py-5 text-base font-bold text-black shadow-[0_14px_40px_rgba(182,255,0,.28)] transition hover:scale-[1.03]"
            >
              Разобрать сайт
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}