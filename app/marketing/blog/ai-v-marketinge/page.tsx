import type { Metadata } from 'next'
import Link from 'next/link'
import {
  IconArrowLeft,
  IconArrowRight,
  IconCheck,
  IconClock,
  IconSparkles,
  IconSearch,
  IconFileText,
  IconAd,
  IconChartBar,
  IconTargetArrow,
  IconX,
} from '@tabler/icons-react'

export const metadata: Metadata = {
  title:
    'AI в маркетинге: какие инструменты реально работают в 2026 | Сканлайт Маркетинг',
  description:
    'Какие AI-инструменты реально помогают маркетологу в 2026: ChatGPT, Claude, Perplexity, Gemini, Midjourney, AI для SEO, Яндекс Директа, контента и аналитики.',
}

const toc = [
  { href: '#what-ai-does', title: 'Что AI реально ускоряет' },
  { href: '#chatgpt', title: 'ChatGPT для маркетинга' },
  { href: '#claude', title: 'Claude для текстов и структуры' },
  { href: '#perplexity', title: 'Perplexity для исследований' },
  { href: '#gemini', title: 'Gemini для рабочих документов' },
  { href: '#visuals', title: 'AI для визуалов' },
  { href: '#risks', title: 'Где AI опасен' },
  { href: '#checklist', title: 'Чек-лист внедрения' },
]

const checklist = [
  'есть понятная задача, а не запрос “сделай красиво”',
  'AI получает вводные: продукт, ЦА, оффер, ограничения и цель',
  'факты, цифры, законы и цены проверяются вручную',
  'SEO-структура дорабатывается под реальные запросы и сайт',
  'объявления проверяются на смысл, обещания и посадочную страницу',
  'тексты редактируются человеком, а не публикуются сразу',
  'результат связывается с заявками, CRM и продажами',
]

function ToolMatrixVisual() {
  return (
    <figure className="my-10 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
      <div className="border-b border-slate-100 bg-slate-50 px-6 py-4">
        <p className="text-sm font-bold text-[#0B1220]">
          Где AI реально помогает маркетологу
        </p>
      </div>

      <div className="grid gap-4 p-6 sm:grid-cols-4">
        {[
          ['Исследования', 'рынок и ЦА'],
          ['SEO', 'структура и запросы'],
          ['Директ', 'идеи объявлений'],
          ['Контент', 'черновики быстрее'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              {label}
            </p>
            <p className="mt-2 text-base font-bold leading-snug text-[#0B1220]">
              {value}
            </p>
          </div>
        ))}
      </div>

      <figcaption className="border-t border-slate-100 px-6 py-4 text-sm leading-6 text-slate-500">
        AI не делает маркетинг “сам”. Он ускоряет подготовку, но стратегию,
        проверку и финальные решения оставляет за человеком.
      </figcaption>
    </figure>
  )
}

function CompareBox() {
  return (
    <div className="my-10 grid gap-4 md:grid-cols-2">
      <div className="rounded-[24px] border border-red-100 bg-red-50 p-6">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-100 text-red-600">
            <IconX className="h-5 w-5" stroke={3} />
          </span>
          <p className="font-bold text-red-900">Плохая логика</p>
        </div>

        <p className="text-lg font-bold leading-snug text-red-950">
          “Попросим нейросеть сделать маркетинг”
        </p>

        <p className="mt-3 text-sm leading-6 text-red-800/75">
          Без вводных AI выдаст усреднённый текст: красиво звучит, но не
          учитывает продукт, рынок, продажи, CRM и реальную задачу клиента.
        </p>
      </div>

      <div className="rounded-[24px] border border-lime-200 bg-lime-50 p-6">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B6FF00] text-[#0B1220]">
            <IconCheck className="h-5 w-5" stroke={3} />
          </span>
          <p className="font-bold text-[#0B1220]">Нормальная логика</p>
        </div>

        <p className="text-lg font-bold leading-snug text-[#0B1220]">
          “Дадим AI задачу, контекст и критерии”
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-700">
          Человек ставит задачу, даёт факты, проверяет вывод, редактирует смысл
          и связывает результат с сайтом, рекламой, SEO, CRM и продажами.
        </p>
      </div>
    </div>
  )
}

export default function ArticlePage() {
  return (
    <main className="bg-[#F7F4EF] text-[#0B1220]">
      <section className="relative overflow-hidden bg-[#050505] pb-20 pt-28 lg:pb-28 lg:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(82,0,120,0.45),transparent_34%),radial-gradient(circle_at_88%_30%,rgba(0,90,70,0.42),transparent_36%)]" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/marketing/blog"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition hover:text-white"
          >
            <IconArrowLeft className="h-4 w-4" />
            Все статьи
          </Link>

          <div className="mb-7 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#B6FF00] px-4 py-2 text-sm font-bold text-[#0B1220]">
              AI-инструменты
            </span>

            <span className="inline-flex items-center gap-2 text-sm font-medium text-white/50">
              <IconClock className="h-4 w-4" />
              8 минут
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            AI в маркетинге: какие инструменты реально работают в 2026
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
            Нейросети ускоряют тексты, SEO, объявления, исследования и аналитику.
            Но они не заменяют маркетолога, который понимает рынок, клиента,
            продажи и бизнес-цель.
          </p>

          <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#B6FF00]">
              Главная мысль
            </p>

            <p className="mt-3 max-w-3xl text-xl font-bold leading-8 text-white">
              AI полезен там, где есть понятная задача. Без стратегии и проверки
              он просто быстро производит много среднего текста.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-[28px] bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.07)]">
              <p className="mb-4 text-sm font-bold text-[#0B1220]">
                В статье
              </p>

              <nav className="space-y-2">
                {toc.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-3 py-2 text-sm leading-5 text-slate-500 transition hover:bg-slate-50 hover:text-[#0B1220]"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="min-w-0">
            <div className="rounded-[32px] bg-white p-6 shadow-[0_22px_70px_rgba(15,23,42,0.08)] sm:p-9 lg:p-12">
              <div className="mb-10 rounded-[24px] border border-lime-200 bg-lime-50 p-6">
                <div className="mb-3 flex items-center gap-3">
                  <IconTargetArrow className="h-6 w-6 text-[#0B1220]" />
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
                    Коротко
                  </p>
                </div>

                <p className="text-xl font-bold leading-8 text-[#0B1220]">
                  В 2026 AI в маркетинге нужен не “для магии”, а для ускорения
                  рабочих задач: исследований, черновиков, SEO-структур,
                  объявлений, визуалов и аналитики.
                </p>
              </div>

              <div className="space-y-8 text-[17px] leading-8 text-slate-700">
                <p>
                  AI в маркетинге уже не выглядит как эксперимент. ChatGPT,
                  Claude, Perplexity, Gemini, Midjourney и другие инструменты
                  стали частью обычной работы: написать черновик, собрать
                  структуру, проверить гипотезу, найти источники, подготовить
                  варианты объявлений.
                </p>

                <p>
                  Проблема в другом. Многие ждут, что нейросеть “сделает
                  маркетинг”. Без вводных она не сделает. Она соберёт усреднённый
                  текст, который звучит правильно, но не учитывает рынок, продукт,
                  цикл сделки, CRM, продажи и реальных клиентов.
                </p>

                <p>
                  Поэтому в B2B AI стоит использовать не как замену маркетолога,
                  а как ускоритель. Человек ставит задачу, AI помогает быстрее
                  пройти черновой этап, человек проверяет смысл и принимает
                  решение.
                </p>
              </div>

              <section id="what-ai-does" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Что AI реально ускоряет в маркетинге
                </h2>

                <CompareBox />

                <div className="space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    AI хорошо работает там, где нужно быстро разложить задачу,
                    собрать варианты и убрать пустую ручную работу. Например,
                    подготовить структуру статьи, варианты заголовков, черновик
                    объявления, список вопросов для кастдева, гипотезы для
                    посадочной страницы или таблицу сегментов.
                  </p>

                  <p>
                    В B2B это особенно полезно. Продукты сложные, цикл сделки
                    длинный, аудитории разные. Нужны разные версии сообщений:
                    для собственника, коммерческого директора, закупщика,
                    менеджера, технического специалиста.
                  </p>

                  <p>
                    Но AI не знает ваш бизнес лучше вас. Он может предложить
                    структуру, но не определит сам, где реальная маржа. Он может
                    написать текст, но не поймёт сам, какие клиенты покупают, а
                    какие только тратят время продаж.
                  </p>

                  <p className="rounded-2xl border-l-4 border-[#B6FF00] bg-slate-50 p-5 font-semibold text-[#0B1220]">
                    Сильная связка — это не “AI вместо маркетолога”. Это
                    маркетолог + AI + проверка по фактам, CRM и продажам.
                  </p>
                </div>

                <ToolMatrixVisual />
              </section>

              <section id="chatgpt" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  ChatGPT: для структуры, идей и быстрых черновиков
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    ChatGPT удобен для задач, где нужно быстро перейти от пустого
                    листа к рабочему черновику. Например, собрать структуру
                    статьи, варианты офферов, сценарий лендинга, идеи
                    рекламных объявлений, вопросы для интервью с клиентами или
                    первичный план контент-воронки.
                  </p>

                  <p>
                    Для B2B-маркетинга он полезен, когда есть вводные:
                    продукт, аудитория, боли клиента, критерии хорошей заявки,
                    этапы воронки, ограничения по обещаниям и тон коммуникации.
                    Без этого результат будет общим.
                  </p>

                  <p>
                    Хороший сценарий: не просить “напиши текст для сайта”, а
                    дать контекст и задачу. Например: “Мы продаём оборудование
                    оптовым клиентам. Цель страницы — получить заявку на подбор.
                    Клиент боится нецелевых затрат, долгого внедрения и проблем
                    с сервисом. Собери структуру первого экрана и 5 вариантов
                    оффера”.
                  </p>
                </div>
              </section>

              <section id="claude" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Claude: для длинных текстов, логики и редактуры
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Claude хорошо использовать для длинных материалов: статьи,
                    гайды, коммерческие предложения, структуры страниц, разборы
                    интервью и большие документы. Он полезен, когда нужно
                    сохранить логику текста и аккуратно переработать объёмный
                    материал.
                  </p>

                  <p>
                    В маркетинге Claude удобен для редактуры. Можно дать ему
                    черновик и попросить убрать воду, сократить абзацы, сделать
                    текст конкретнее, усилить заголовки, проверить структуру и
                    найти слабые места.
                  </p>

                  <p>
                    Но финальная редактура всё равно должна быть человеческой.
                    AI может сделать текст гладким, но гладкий текст не всегда
                    продаёт. В B2B важнее точность: кто клиент, какая задача, где
                    риск, какой следующий шаг.
                  </p>
                </div>
              </section>

              <section id="perplexity" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Perplexity: для исследований и проверки источников
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Perplexity полезен там, где нужна быстрая разведка: найти
                    свежие материалы, сравнить подходы, посмотреть, что пишут
                    конкуренты, собрать источники для статьи или проверить
                    гипотезу по рынку.
                  </p>

                  <p>
                    Для SEO и контента это особенно важно. Перед статьёй можно
                    посмотреть выдачу, понять, какие темы уже раскрыты, где
                    поверхностные ответы, какие вопросы повторяются и чем ваш
                    материал может быть сильнее.
                  </p>

                  <p>
                    Но источник всё равно нужно открывать и проверять. AI-поиск
                    ускоряет сбор информации, но не отменяет ответственность за
                    факты. Особенно если речь про законы, цены, характеристики,
                    сроки, гарантии, медицину, финансы или технические параметры.
                  </p>
                </div>
              </section>

              <section id="gemini" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Gemini: для рабочих документов и связки с Google-средой
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Gemini удобен, если команда живёт в Google Workspace:
                    документы, таблицы, почта, презентации, встречи. В таких
                    задачах AI помогает быстрее работать с текстами, заметками,
                    таблицами и рабочими материалами.
                  </p>

                  <p>
                    Для маркетинга это может быть полезно в операционной работе:
                    собрать выводы из документа, наметить структуру презентации,
                    обработать заметки после созвона, подготовить черновик письма
                    или разложить идеи по таблице.
                  </p>

                  <p>
                    Но Gemini, как и любой AI-инструмент, не знает контекст
                    бизнеса по умолчанию. Ему нужно давать вводные: что продаём,
                    кому, какой результат нужен, какие ограничения есть и что
                    нельзя обещать.
                  </p>
                </div>
              </section>

              <section id="visuals" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  AI для визуалов: быстро, но не всегда “в бренд”
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Midjourney, генераторы изображений и AI-дизайн помогают
                    быстро получить идеи для обложек, иллюстраций, moodboard,
                    баннеров и визуальных направлений. Это удобно, когда нужно
                    быстро проверить стиль или показать несколько концепций.
                  </p>

                  <p>
                    Но в B2B визуал не должен быть просто красивым. Он должен
                    помогать понять смысл: система, контроль, заявки, воронка,
                    каталог, CRM, автоматизация, экономия времени. Если картинка
                    абстрактная и не поддерживает сообщение, она мешает.
                  </p>

                  <p>
                    Хорошая практика — использовать AI не как финальный дизайн,
                    а как быстрый прототип. Сначала идея, потом адаптация под
                    бренд, формат сайта, читаемость и задачу блока.
                  </p>
                </div>
              </section>

              <section id="risks" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Где AI опасен в маркетинге
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Главный риск — публиковать результат без проверки. AI может
                    уверенно написать неверный факт, придумать цифру, обобщить
                    рынок, исказить юридическую норму или дать обещание, которое
                    компания не сможет выполнить.
                  </p>

                  <p>
                    Второй риск — одинаковость. Если все используют одни и те же
                    промты, тексты начинают звучать одинаково: “комплексный
                    подход”, “индивидуальные решения”, “повышение эффективности”.
                    Для B2B это плохо. Клиенту нужна конкретика: что делаете,
                    зачем, в какие сроки, как это связано с заявками и продажами.
                  </p>

                  <p>
                    Третий риск — потеря стратегии. AI может быстро производить
                    контент, но не решит, какой сегмент брать, какой продукт
                    продвигать первым, куда вести трафик, что считать SQL и где
                    маркетинг упирается в продажи.
                  </p>

                  <p className="rounded-2xl border-l-4 border-[#EA4922] bg-orange-50 p-5 font-semibold text-[#0B1220]">
                    AI ускоряет производство материалов. Но ответственность за
                    смысл, факты, обещания и результат остаётся на человеке.
                  </p>
                </div>
              </section>

              <section className="mt-14">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Как использовать AI в B2B без потери смысла
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Начинайте не с инструмента, а с задачи. Не “давайте
                    используем ChatGPT”, а “нам нужно быстро собрать структуру
                    посадочной страницы под новый продукт” или “нужно проверить,
                    почему статьи не дают заявки”.
                  </p>

                  <p>
                    Затем дайте AI нормальные вводные: кто клиент, что продаём,
                    какая боль, какой следующий шаг, какие факты есть, какие
                    формулировки нельзя использовать. Чем точнее вводные, тем
                    меньше мусора на выходе.
                  </p>

                  <p>
                    После этого результат нужно проверить. Убрать общие слова,
                    проверить факты, привести текст к тону компании, добавить
                    конкретику, связать выводы с сайтом, рекламой, SEO, CRM и
                    продажами.
                  </p>
                </div>
              </section>

              <section id="checklist" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Короткий чек-лист внедрения AI в маркетинг
                </h2>

                <div className="mt-6 rounded-[28px] bg-slate-50 p-6">
                  <div className="grid gap-3">
                    {checklist.map((item) => (
                      <div key={item} className="flex gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#B6FF00] text-[#0B1220]">
                          <IconCheck className="h-4 w-4" stroke={3} />
                        </span>

                        <p className="text-base leading-7 text-slate-700">
                          Проверьте, что {item}.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="mt-14">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Итог
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    AI в маркетинге реально работает, если использовать его как
                    инструмент ускорения, а не как замену стратегии. Он помогает
                    быстрее собирать черновики, структуры, гипотезы, исследования,
                    объявления и визуальные идеи.
                  </p>

                  <p>
                    Но в B2B результат появляется не от количества сгенерированных
                    текстов. Результат появляется, когда понятны аудитория,
                    оффер, сайт, трафик, CRM, качество заявок и работа продаж.
                  </p>

                  <p className="font-bold text-[#0B1220]">
                    AI ускоряет работу. Человек отвечает за смысл, проверку,
                    стратегию и связь с бизнес-результатом.
                  </p>
                </div>
              </section>

              <div className="mt-14 rounded-[32px] bg-[#0B1220] p-7 text-white sm:p-9">
                <p className="text-2xl font-bold leading-tight">
                  Хотите внедрить AI без хаоса и “нейротекстов”?
                </p>

                <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">
                  Сканлайт Маркетинг помогает B2B-компаниям использовать AI для
                  сайта, SEO, рекламы, контента и аналитики — но с проверкой,
                  бизнес-логикой и привязкой к заявкам.
                </p>

                <Link
                  href="/marketing/kontakty"
                  className="mt-7 inline-flex items-center gap-3 rounded-xl bg-[#B6FF00] px-6 py-4 text-sm font-bold text-[#0B1220] transition hover:scale-[1.02]"
                >
                  Получить диагностику
                  <IconArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}