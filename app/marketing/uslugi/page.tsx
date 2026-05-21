"use client"

import Link from "next/link"
import { motion } from "framer-motion"

type Service = {
  icon: string
  title: string
  description: string
  price: string
  badge?: string
}

type Package = {
  title: string
  subtitle: string
  items: string[]
  price: string
}

type AiItem = {
  title: string
  text: string
}

const oneTimeServices: Service[] = [
  {
    icon: "◎",
    title: "Платная диагностика маркетинга",
    description:
      "Полный аудит сайта, рекламы, аналитики и воронки. На выходе — список потерь, приоритеты и план действий на 30–90 дней.",
    price: "от 25 000 ₽",
    badge: "после вводного разбора",
  },
  {
    icon: "✦",
    title: "AI-аудит и автоматизация процессов",
    description:
      "Найдём повторяющиеся задачи в маркетинге, продажах и коммуникациях. Покажем, что можно автоматизировать с помощью ИИ.",
    price: "от 35 000 ₽",
    badge: "горячее направление",
  },
  {
    icon: "▣",
    title: "План продвижения на 90 дней",
    description:
      "Каналы, приоритеты, бюджет, первые гипотезы и KPI. Без стратегии на 100 страниц.",
    price: "от 45 000 ₽",
  },
  {
    icon: "⌘",
    title: "Сайт или лендинг",
    description:
      "Структура, тексты, прототип и запуск страницы под заявки. ИИ ускоряет черновики, человек отвечает за смысл и результат.",
    price: "от 80 000 ₽",
    badge: "AI + человек",
  },
  {
    icon: "◆",
    title: "Упаковка оффера и УТП",
    description:
      "Формулируем, кому вы продаёте, чем отличаетесь и почему клиент должен выбрать вас.",
    price: "от 35 000 ₽",
  },
  {
    icon: "↗",
    title: "SEO-структура сайта / каталога",
    description:
      "Собираем структуру страниц, запросы, мета, ТЗ на тексты и базовую SEO-логику.",
    price: "от 35 000 ₽",
  },
  {
    icon: "◧",
    title: "Карточки маркетплейсов",
    description:
      "Упаковка карточек для Wildberries, Ozon и Яндекс Маркета: оффер, структура, тексты, визуальная логика.",
    price: "от 15 000 ₽",
    badge: "маркетплейсы",
  },
]

const aiAutomationItems: AiItem[] = [
  {
    title: "Заявки и первичные ответы",
    text: "Автоответы, сбор данных, передача в CRM, уведомления менеджеру и быстрые реакции на обращения.",
  },
  {
    title: "Контент и визуалы",
    text: "Черновики постов, статей, карточек, писем, идей для рекламы и контент-планов.",
  },
  {
    title: "Отчёты и аналитика",
    text: "Сводки по заявкам, расходам, каналам и еженедельные выводы без ручной сборки таблиц.",
  },
  {
    title: "Email и мессенджеры",
    text: "Цепочки прогрева, реактивация базы, ответы на типовые вопросы и повторные касания.",
  },
  {
    title: "База знаний и инструкции",
    text: "FAQ, регламенты, подсказки для менеджеров, шаблоны ответов и внутренние инструкции.",
  },
  {
    title: "Связки между сервисами",
    text: "Make, Google Sheets, Telegram, формы, почта, CRM и другие инструменты в одной логике.",
  },
]

const monthlyServices: Service[] = [
  {
    icon: "✦",
    title: "AI-автоматизация маркетинга",
    description:
      "Настраиваем связки: формы, CRM, таблицы, Telegram, email, контент и отчёты. Чтобы меньше делать руками.",
    price: "от 35 000 ₽/мес",
    badge: "горячее направление",
  },
  {
    icon: "₽",
    title: "Яндекс Директ под ключ",
    description:
      "Настройка, ведение, оптимизация и еженедельные выводы по заявкам. Бюджет идёт напрямую в Яндекс.",
    price: "от 35 000 ₽/мес",
  },
  {
    icon: "⌖",
    title: "Геопродвижение и карты",
    description:
      "Яндекс Карты, 2ГИС, карточки компании, отзывы и локальные запросы для точек продаж.",
    price: "от 20 000 ₽/мес",
  },
  {
    icon: "↑",
    title: "SEO-сопровождение",
    description:
      "Страницы, статьи, структура, технические задачи и рост органического трафика на длинной дистанции.",
    price: "от 40 000 ₽/мес",
  },
  {
    icon: "✎",
    title: "Контент и соцсети",
    description:
      "Telegram, ВКонтакте, контент-план, посты и визуал. ИИ ускоряет производство, человек редактирует и проверяет.",
    price: "от 30 000 ₽/мес",
    badge: "AI + редактура",
  },
  {
    icon: "✉",
    title: "Email и WhatsApp-цепочки",
    description:
      "Сегментация базы, письма, прогрев, реактивация старых клиентов и повторные касания.",
    price: "от 25 000 ₽/мес",
  },
  {
    icon: "☷",
    title: "Маркетинг-координация",
    description:
      "Ведём подрядчиков, задачи, аналитику и план работ, чтобы маркетинг не разваливался на части.",
    price: "от 45 000 ₽/мес",
    badge: "система",
  },
]

const packages: Package[] = [
  {
    title: "AI-автоматизация рутины",
    subtitle:
      "Для компаний, где заявки, отчёты, контент и коммуникации до сих пор обрабатываются вручную.",
    items: ["Аудит процессов", "Схема автоматизации", "Первые связки", "Инструкции"],
    price: "от 60 000 ₽",
  },
  {
    title: "Запуск с нуля",
    subtitle: "Для нового направления, продукта или услуги.",
    items: ["Диагностика", "Оффер", "Лендинг", "Тест рекламы"],
    price: "от 120 000 ₽",
  },
  {
    title: "Трафик на готовый сайт",
    subtitle: "Для тех, у кого сайт есть, но заявок нет.",
    items: ["Аудит сайта", "Яндекс Директ", "Аналитика", "Первые гипотезы"],
    price: "от 75 000 ₽",
  },
  {
    title: "Маркетплейс старт",
    subtitle:
      "Для товаров, которые нужно нормально упаковать и вывести на площадку.",
    items: ["Карточки", "SEO", "Инфографика", "Тексты"],
    price: "от 35 000 ₽",
  },
]

const steps = [
  {
    number: "01",
    title: "Разбираем вводные",
    text: "Смотрим сайт, рекламу, аналитику, продукт, конкурентов, текущие заявки и ручные процессы.",
  },
  {
    number: "02",
    title: "Находим потери",
    text: "Показываем, где уходит бюджет, где теряются клиенты и какие задачи можно автоматизировать с помощью ИИ.",
  },
  {
    number: "03",
    title: "Собираем план",
    text: "Расставляем приоритеты: что делать сейчас, что позже, какой бюджет нужен и где ИИ даст быстрый эффект.",
  },
  {
    number: "04",
    title: "Запускаем и считаем",
    text: "Делаем сайт, рекламу, контент, аналитику или автоматизацию — и смотрим не на клики, а на заявки и экономию времени.",
  },
]

export default function ServicesPage() {
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
              { label: "Услуги", href: "/marketing/uslugi", active: true },
              { label: "Кейсы", href: "/marketing/keys" },
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

        <div className="relative mx-auto grid max-w-[1240px] gap-10 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-7 inline-flex w-fit rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-bold text-black/60 shadow-sm">
              Маркетинг + AI-автоматизация
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 md:text-7xl">
              Маркетинг и AI-автоматизация для розницы, складов и B2B
            </h1>

            <p className="mt-8 max-w-3xl text-xl font-medium leading-relaxed text-slate-600 md:text-2xl">
              Сайты, реклама, контент, аналитика и автоматизация рутины с
              помощью ИИ. Начинаем с бесплатного вводного разбора: смотрим, где
              теряются заявки, время и деньги.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/marketing/kontakty"
                className="rounded-2xl bg-[#B6FF00] px-7 py-4 text-base font-bold text-black shadow-[0_14px_40px_rgba(182,255,0,.28)] transition hover:scale-[1.03]"
              >
                Обсудить задачу бесплатно
              </Link>

              <a
                href="#ai-automation"
                className="rounded-2xl border border-black/10 bg-white px-7 py-4 text-base font-bold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-black/20"
              >
                Что можно автоматизировать
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-[32px] border border-black/10 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,.10)] lg:self-center"
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <span className="rounded-full bg-[#B6FF00] px-4 py-2 text-sm font-bold text-black">
                Бесплатный старт
              </span>

              <span className="text-sm font-bold text-slate-400">
                15–20 минут
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              Сначала обсуждаем задачу
            </h2>

            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Бесплатно смотрим ситуацию и понимаем, что сейчас важнее:
              заявки, сайт, реклама, аналитика или AI-автоматизация.
            </p>

            <div className="mt-7 rounded-[24px] bg-[#F7F4EF] p-5">
              <div className="text-sm font-bold uppercase tracking-[.16em] text-slate-400">
                Если нужен следующий шаг
              </div>

              <div className="mt-4 grid gap-3">
                {[
                  {
                    title: "AI-автоматизация",
                    price: "от 35 000 ₽",
                  },
                  {
                    title: "Диагностика маркетинга",
                    price: "от 25 000 ₽",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center justify-between gap-4 rounded-2xl bg-white px-4 py-3"
                  >
                    <span className="text-sm font-bold text-slate-800">
                      {item.title}
                    </span>

                    <span className="shrink-0 text-sm font-bold text-[#FF4B1F]">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {[
                "Поймём, где теряются заявки и время",
                "Подскажем, что можно автоматизировать",
                "Не навязываем платный аудит, если он не нужен",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B6FF00] text-xs font-bold text-black">
                    ✓
                  </span>
                  <span className="text-sm font-medium leading-snug text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="services"
        className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-20"
      >
        <div className="mb-10 max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-[.18em] text-[#FF4B1F]">
            Разовые проекты
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Когда нужно быстро навести порядок или запустить конкретную задачу
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Фиксируем понятный результат, сроки и стоимость. ИИ используем там,
            где он реально ускоряет работу: анализ, черновики, связки,
            автоматизация рутины.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {oneTimeServices.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              className="group rounded-[28px] border border-black/5 bg-white p-7 shadow-[0_16px_44px_rgba(15,23,42,.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,.10)]"
            >
              <div className="mb-7 flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF1EA] text-2xl font-bold text-[#FF4B1F]">
                  {service.icon}
                </div>

                {service.badge && (
                  <span className="rounded-full bg-[#F2E7FF] px-3 py-1 text-xs font-bold text-[#8A2CFF]">
                    {service.badge}
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                {service.title}
              </h3>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {service.description}
              </p>

              <div className="mt-7 text-lg font-bold text-[#FF4B1F]">
                {service.price}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section
        id="ai-automation"
        className="border-y border-black/5 bg-white/60"
      >
        <div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="mb-10 grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <div>
              <span className="text-sm font-bold uppercase tracking-[.18em] text-[#7A4DFF]">
                AI-автоматизация
              </span>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Что можно автоматизировать с помощью ИИ
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-slate-600">
              Не “прикручиваем ИИ ради ИИ”. Смотрим, где люди каждый день
              делают одно и то же руками, и собираем рабочие связки под ваши
              процессы.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {aiAutomationItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="rounded-[26px] border border-black/5 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,.05)]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ECFFD2] text-lg font-bold text-black">
                  ✦
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

          <div className="mt-8 rounded-[28px] border border-[#B6FF00]/50 bg-[#ECFFD2] p-7">
            <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                  Хотите понять, что можно автоматизировать именно у вас?
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-700">
                  Разберём процессы и покажем 3–5 задач, где ИИ может быстро
                  сэкономить время или ускорить обработку заявок.
                </p>
              </div>

              <Link
                href="/marketing/kontakty"
                className="w-fit rounded-2xl bg-black px-7 py-4 text-base font-bold text-white transition hover:scale-[1.03]"
              >
                Разобрать процессы
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#F7F4EF]">
        <div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[.18em] text-[#7A4DFF]">
              Ежемесячное сопровождение
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Когда нужен не разовый запуск, а регулярная система
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Ведём каналы, смотрим на заявки, убираем лишние расходы,
              автоматизируем рутину и показываем, что происходит с маркетингом
              каждую неделю.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {monthlyServices.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="group rounded-[28px] border border-black/5 bg-white p-7 shadow-[0_16px_44px_rgba(15,23,42,.05)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,.10)]"
              >
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ECFFD2] text-2xl font-bold text-black">
                    {service.icon}
                  </div>

                  {service.badge && (
                    <span className="rounded-full bg-[#F2E7FF] px-3 py-1 text-xs font-bold text-[#8A2CFF]">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {service.description}
                </p>

                <div className="mt-7 text-lg font-bold text-slate-950">
                  {service.price}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mb-10 max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-[.18em] text-[#FF4B1F]">
            Готовые сценарии
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Если не знаете, что выбрать
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Не обязательно брать всё. Вот комбинации, с которых чаще всего
            начинается нормальная работа.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {packages.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="rounded-[30px] border border-black/5 bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,.07)]"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B6FF00] text-xl font-bold text-black">
                {index + 1}
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                {item.title}
              </h3>

              <p className="mt-4 min-h-[96px] text-base leading-relaxed text-slate-600">
                {item.subtitle}
              </p>

              <div className="mt-7 space-y-3">
                {item.items.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 text-sm font-bold text-slate-700"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#FF4B1F]" />
                    {point}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-[#F7F4EF] px-5 py-4 text-lg font-bold text-[#FF4B1F]">
                {item.price}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/5 bg-white/55">
        <div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[.18em] text-[#7A4DFF]">
              Как работаем
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Без хаоса и бесконечных согласований
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[26px] border border-black/5 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,.05)]"
              >
                <div className="text-sm font-bold text-[#FF4B1F]">
                  {step.number}
                </div>

                <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="overflow-hidden rounded-[36px] border border-black/5 bg-white shadow-[0_24px_80px_rgba(15,23,42,.10)]">
          <div className="grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Не знаете, с чего начать?
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
                Оставьте заявку на бесплатный вводный разбор. Поймём, какая
                задача сейчас главная: сайт, реклама, упаковка, аналитика,
                воронка продаж или AI-автоматизация рутины.
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