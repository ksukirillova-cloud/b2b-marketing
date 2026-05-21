"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const problems = [
  "лиды приходили из разных источников и терялись между маркетингом и продажами",
  "клиентская база не была нормально сегментирована",
  "повторные касания делались нерегулярно и вручную",
  "реклама запускалась отдельно от CRM и дальнейшей обработки заявок",
]

const workItems = [
  {
    title: "Навели порядок в CRM-логике",
    text: "Разложили путь лида: от заявки до обработки, статуса, повторного касания и передачи в продажи.",
  },
  {
    title: "Сегментировали клиентскую базу",
    text: "Разделили контакты по типам клиентов, интересам и потенциалу повторных продаж, чтобы не работать со всей базой одинаково.",
  },
  {
    title: "Собрали цепочки касаний",
    text: "Подготовили email-сценарии и повторные касания, чтобы база не лежала мёртвым списком, а возвращалась в работу.",
  },
  {
    title: "Запустили тест Яндекс Директа",
    text: "Проверили рекламные гипотезы на небольшом бюджете и связали результат не с кликами, а с заявками и продажами.",
  },
]

const funnelFlow = [
  {
    label: "Заявка",
    title: "Лид попадает в систему",
    text: "Контакт фиксируется, источник не теряется, менеджер понимает, откуда пришёл клиент.",
  },
  {
    label: "CRM",
    title: "Появляется статус и ответственность",
    text: "Заявка не остаётся в переписке: у неё есть этап, ответственный и следующий шаг.",
  },
  {
    label: "Касание",
    title: "База возвращается в работу",
    text: "Повторные письма и касания помогают догревать клиентов и возвращать их к покупке.",
  },
]

const results = [
  "ROI 1900%",
  "10 000 ₽ → 200 000 ₽",
  "×3 конверсия базы",
  "0 потерянных лидов",
]

const gallery = [
  {
    title: "CRM-логика",
    text: "Место для скрина схемы CRM: этапы, статусы, ответственные и движение заявки.",
  },
  {
    title: "Сегменты базы",
    text: "Место для скрина таблицы или схемы сегментации клиентской базы.",
  },
  {
    title: "Email-цепочки",
    text: "Место для скрина цепочек писем, повторных касаний или сценариев коммуникации.",
  },
  {
    title: "Рекламный тест",
    text: "Место для скрина рекламного кабинета, отчёта или связки с результатами.",
  },
]

export default function B2BIndustrialCrmCasePage() {
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(182,255,0,.26),transparent_30%),radial-gradient(circle_at_90%_10%,rgba(255,75,31,.12),transparent_32%),radial-gradient(circle_at_55%_100%,rgba(116,0,255,.08),transparent_36%)]" />

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
              <div className="mb-7 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-[#FF4B1F] shadow-sm">
                B2B / промышленность
              </div>

              <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 md:text-7xl">
                CRM, база и рекламные касания без потерянных лидов
              </h1>

              <p className="mt-7 max-w-3xl text-xl font-medium leading-relaxed text-slate-600 md:text-2xl">
                Навели порядок в базе, CRM и повторных касаниях, чтобы заявки не
                терялись, а маркетинг был связан с продажами.
              </p>
            </div>

            <div className="rounded-[36px] border border-black/5 bg-white p-7 shadow-[0_24px_80px_rgba(15,23,42,.10)]">
              <div className="rounded-[28px] bg-[#0B1220] p-7 text-white">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm font-bold uppercase tracking-[.16em] text-white/40">
                    Результат
                  </span>
                  <span className="rounded-full bg-[#B6FF00] px-4 py-2 text-sm font-bold text-black">
                    CRM
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
                    Лиды перестали теряться, база стала работать, реклама
                    связалась с продажами.
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
              Маркетинг и продажи работали разрозненно. Заявки приходили из
              рекламы и других источников, но дальше не всегда было понятно, кто
              отвечает за обработку, какой статус у лида и когда делать
              повторное касание.
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
              Как связали маркетинг и продажи
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Задача была не просто “запустить рекламу”. Нужно было сделать так,
              чтобы каждый лид фиксировался, обрабатывался и возвращался в
              работу через повторные касания.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {funnelFlow.map((item, index) => (
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
              Сюда можно добавить скриншоты CRM, сегментации базы, email-цепочек
              и рекламных отчётов.
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
              Главная задача была не в том, чтобы просто привести больше
              трафика. Важно было связать рекламу, CRM, базу и повторные касания
              в одну систему. Тогда заявки не теряются, а маркетинг начинает
              работать на продажи, а не только на клики.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="overflow-hidden rounded-[36px] border border-black/5 bg-white shadow-[0_24px_80px_rgba(15,23,42,.10)]">
          <div className="grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Теряете заявки между рекламой и продажами?
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
                Оставьте заявку на бесплатный вводный разбор. Посмотрим вашу
                CRM, базу, рекламные касания и подскажем, где сейчас теряются
                клиенты.
              </p>
            </div>

            <Link
              href="/marketing/kontakty"
              className="w-fit rounded-2xl bg-[#B6FF00] px-8 py-5 text-base font-bold text-black shadow-[0_14px_40px_rgba(182,255,0,.28)] transition hover:scale-[1.03]"
            >
              Разобрать воронку
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}