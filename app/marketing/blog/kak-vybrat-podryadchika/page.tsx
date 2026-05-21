import type { Metadata } from 'next'
import Link from 'next/link'
import {
  IconArrowLeft,
  IconArrowRight,
  IconCheck,
  IconClock,
  IconDatabase,
  IconTargetArrow,
  IconX,
} from '@tabler/icons-react'

export const metadata: Metadata = {
  title: 'Как выбрать подрядчика по маркетингу для B2B | Сканлайт Маркетинг',
  description:
    'Как выбрать подрядчика по B2B-маркетингу: на что смотреть кроме портфолио, какие вопросы задать, как проверить CRM, лиды, Директ, SEO и связь с продажами.',
}

const toc = [
  { href: '#portfolio', title: 'Почему портфолио не главное' },
  { href: '#diagnostika', title: 'Зачем начинать с диагностики' },
  { href: '#crm', title: 'Почему CRM обязательна' },
  { href: '#sql', title: 'Что считать хорошей заявкой' },
  { href: '#first-month', title: 'Что должно быть в первый месяц' },
  { href: '#red-flags', title: 'Когда подрядчик не подходит' },
  { href: '#checklist', title: 'Чек-лист выбора' },
]

const checklist = [
  'начинает с диагностики, а не сразу с рекламы',
  'спрашивает про CRM, продажи и качество лидов',
  'говорит не только про заявки, но и про SQL',
  'показывает план первого месяца',
  'не обещает гарантированные продажи',
  'объясняет, что потребуется от вашей команды',
  'умеет связать сайт, рекламу, SEO, CRM и аналитику',
]

function CrmVisual() {
  return (
    <figure className="my-10 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
      <div className="border-b border-slate-100 bg-slate-50 px-6 py-4">
        <p className="text-sm font-bold text-[#0B1220]">
          Пример логики отчёта для B2B
        </p>
      </div>

      <div className="grid gap-4 p-6 sm:grid-cols-4">
        {[
          ['Источник', 'Яндекс Директ'],
          ['Заявки', '34'],
          ['SQL', '11'],
          ['Сделки', '3'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              {label}
            </p>
            <p className="mt-2 text-xl font-bold text-[#0B1220]">{value}</p>
          </div>
        ))}
      </div>

      <figcaption className="border-t border-slate-100 px-6 py-4 text-sm leading-6 text-slate-500">
        Такой отчёт полезнее, чем таблица с кликами. Он показывает путь от
        источника до продаж.
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
          <p className="font-bold text-red-900">Плохой старт</p>
        </div>

        <p className="text-lg font-bold leading-snug text-red-950">
          “Давайте запустим рекламу”
        </p>

        <p className="mt-3 text-sm leading-6 text-red-800/75">
          Без проверки сайта, CRM, обработки заявок и продаж реклама может
          просто быстрее сжигать бюджет.
        </p>
      </div>

      <div className="rounded-[24px] border border-lime-200 bg-lime-50 p-6">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B6FF00] text-[#0B1220]">
            <IconCheck className="h-5 w-5" stroke={3} />
          </span>
          <p className="font-bold text-[#0B1220]">Нормальный старт</p>
        </div>

        <p className="text-lg font-bold leading-snug text-[#0B1220]">
          “Покажите путь заявки до сделки”
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-700">
          Сначала диагностика: сайт, формы, реклама, SEO, CRM, воронка и
          качество лидов.
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
              Стратегия
            </span>

            <span className="inline-flex items-center gap-2 text-sm font-medium text-white/50">
              <IconClock className="h-4 w-4" />
              7 минут
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Как выбрать подрядчика по маркетингу для B2B и не получить отчёты
            вместо заявок
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
            Красивое портфолио не покажет, где теряются лиды. В B2B важнее
            другое: умеет ли подрядчик связать сайт, рекламу, CRM, заявки и
            продажи в одну систему.
          </p>

          <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#B6FF00]">
              Главная мысль
            </p>

            <p className="mt-3 max-w-3xl text-xl font-bold leading-8 text-white">
              Выбирайте не “подрядчика по рекламе”, а того, кто видит всю
              цепочку: сайт → заявка → CRM → продажа.
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
                  В B2B важно выбирать не подрядчика “на рекламу”, а партнёра,
                  который понимает сайт, CRM, заявки, продажи и экономику
                  воронки.
                </p>
              </div>

              <div className="space-y-8 text-[17px] leading-8 text-slate-700">
                <p>
                  Выбор подрядчика по маркетингу для B2B — это не конкурс
                  красивых презентаций. Здесь важнее понять, сможет ли подрядчик
                  сделать маркетинг управляемым.
                </p>

                <p>
                  В B2B недостаточно получить клики, показы и охваты. Нужно
                  видеть, откуда приходят заявки, какие из них доходят до
                  менеджеров, где теряются лиды и какие каналы можно
                  масштабировать.
                </p>

                <p>
                  Если подрядчик говорит только про рекламу, контент или дизайн,
                  но не спрашивает про CRM, воронку продаж и обработку лидов, это
                  риск. Такой маркетинг быстро превращается в отчёты, которые
                  никто не использует.
                </p>
              </div>

              <section id="portfolio" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Почему портфолио — не главный критерий
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Портфолио показывает, что подрядчик умеет делать сайты,
                    баннеры, презентации или рекламные кампании. Но оно не
                    показывает главное: были ли заявки целевыми, дошли ли они до
                    продаж и превратились ли в сделки.
                  </p>

                  <p>
                    Для B2B этого мало. У компании может быть сложный продукт,
                    длинный цикл сделки, несколько ЛПР, дилеры, тендеры, склад,
                    доставка, сервис и повторные продажи. Один клик по рекламе
                    не равен покупке. Даже заявка не всегда означает интерес к
                    сделке.
                  </p>

                  <p className="rounded-2xl border-l-4 border-[#B6FF00] bg-slate-50 p-5 font-semibold text-[#0B1220]">
                    Подрядчик по B2B-маркетингу должен понимать не только
                    инструменты. Он должен разбираться, как устроена продажа.
                  </p>
                </div>
              </section>

              <section id="diagnostika" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Нормальный подрядчик начинает с диагностики
                </h2>

                <CompareBox />

                <div className="space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    До запуска подрядчик должен понять, где сейчас слабое место.
                    Иногда проблема не в рекламе, а в сайте. Иногда сайт не
                    объясняет предложение. Иногда форма заявки слишком общая.
                    Иногда менеджеры отвечают поздно. Иногда в CRM нет
                    источников, и никто не понимает, какие каналы дают сделки.
                  </p>

                  <p>
                    Если этого не проверить, можно месяцами “улучшать маркетинг”
                    и не получить результата. Деньги будут уходить в Директ,
                    контент, SEO или редизайн, но узкое место останется на месте.
                  </p>
                </div>
              </section>

              <section className="mt-14">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Что подрядчик должен выяснить до старта
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Хороший подрядчик не продаёт “ведение рекламы” вслепую. Он
                    спрашивает, какие продукты самые маржинальные, кто ваш
                    целевой клиент, какие заявки считаются хорошими, где
                    фиксируются лиды, есть ли CRM, кто обрабатывает обращения и
                    какие каналы уже пробовали.
                  </p>

                  <p>
                    Это не формальность. Без этих ответов невозможно настроить
                    нормальную B2B-лидогенерацию. Вам нужны не клики и не
                    красивые отчёты. Вам нужны заявки от тех, кто реально может
                    купить.
                  </p>
                </div>
              </section>

              <section id="crm" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  CRM должна быть частью работы
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    CRM в B2B — не “потом подключим”. Это основа контроля. Без
                    CRM можно получить хороший рекламный отчёт: клики есть, CTR
                    высокий, цена заявки снизилась. Но собственнику это ничего
                    не даёт, если непонятно, что произошло дальше.
                  </p>

                  <p>
                    Нужно видеть источник заявки, этап обработки, качество лида,
                    причину отказа, движение до КП, встречи или сделки. Только
                    так можно понять, какой канал приносит деньги, а какой просто
                    создаёт активность.
                  </p>
                </div>

                <CrmVisual />

                <div className="rounded-[24px] bg-[#0B1220] p-6 text-white">
                  <div className="mb-4 flex items-center gap-3">
                    <IconDatabase className="h-6 w-6 text-[#B6FF00]" />
                    <p className="font-bold">Важно</p>
                  </div>

                  <p className="text-base leading-7 text-white/70">
                    Если подрядчик не предлагает связать маркетинг с CRM, он
                    будет смотреть только на верх воронки. А в B2B важна вся
                    цепочка: от первого касания до продажи.
                  </p>
                </div>
              </section>

              <section id="sql" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  В B2B нельзя считать все заявки одинаковыми
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Одна из частых ошибок — считать любую заявку результатом. В
                    B2B это не работает. Заявка “пришлите цену” от случайного
                    посетителя и обращение от компании, которая закупает
                    оборудование для сети, — это разные лиды.
                  </p>

                  <p>
                    До старта нужно договориться, что считается качественным
                    лидом. Например: компания подходит по сфере, есть понятная
                    задача, указан объём или потребность, известен регион, есть
                    контакт и видно, что клиент рассматривает покупку.
                  </p>

                  <p>
                    Так появляется критерий SQL — лида, с которым продажам
                    действительно есть смысл работать. Это помогает убрать
                    вечный спор между маркетингом и продажами: “лиды плохие”
                    против “вы их не обрабатываете”.
                  </p>
                </div>
              </section>

              <section id="first-month" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Что должно произойти в первый месяц
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Первый месяц — не время для долгой раскачки. В B2B не всегда
                    можно получить сделки сразу, особенно если цикл длинный. Но
                    за первый месяц уже должна появиться управляемость.
                  </p>

                  <p>
                    Нормальный старт — это диагностика сайта, рекламы, SEO,
                    аналитики и CRM. Проверка форм заявок. Настройка целей и
                    UTM. Согласование этапов воронки. Определение качественного
                    лида. Запуск первых гипотез. Отключение очевидно слабых
                    направлений.
                  </p>

                  <p className="rounded-2xl border-l-4 border-[#EA4922] bg-orange-50 p-5 font-semibold text-[#0B1220]">
                    Если через месяц есть только “мы работали, ждём статистику”,
                    это плохой знак.
                  </p>
                </div>
              </section>

              <section id="red-flags" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Когда подрядчик не подходит
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Первый тревожный сигнал — гарантированные продажи. В B2B
                    никто не может честно обещать сделки без доступа к продукту,
                    цене, рынку, CRM, отделу продаж и процессу обработки лидов.
                    Можно отвечать за работу, сроки, гипотезы, прозрачность и
                    аналитику. Но “гарантируем продажи” без условий — это не
                    стратегия, а продажа надежды.
                  </p>

                  <p>
                    Второй сигнал — разговор только про трафик. Трафик сам по
                    себе не нужен. Нужны заявки, SQL, встречи, КП и сделки. Если
                    подрядчик показывает только клики, показы и CTR, он не
                    управляет результатом.
                  </p>

                  <p>
                    Третий сигнал — подрядчик не спрашивает про продажи. В B2B
                    маркетинг почти всегда упирается в отдел продаж. Если
                    менеджеры долго отвечают, не фиксируют причины отказа и не
                    ведут CRM, реклама не спасёт.
                  </p>

                  <p>
                    Четвёртый сигнал — одинаковое решение для всех. Маркетинг для
                    производства, интернет-магазина оборудования, оптовой
                    компании и Healthtech-продукта не может быть одинаковым.
                    Где-то нужен Директ. Где-то SEO и структура каталога. Где-то
                    ABM-коммуникации. Где-то сначала нужно переписать оффер,
                    потому что клиент не понимает ценность.
                  </p>
                </div>
              </section>

              <section className="mt-14">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Что должно быть в коммерческом предложении
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Коммерческое предложение по B2B-маркетингу должно быть не
                    красивой презентацией, а рабочим планом. В нём должны быть
                    цель проекта, текущие проблемы, гипотезы, этапы работ,
                    сроки, зоны ответственности и метрики.
                  </p>

                  <p>
                    Должно быть понятно, что делает подрядчик, что нужно от
                    клиента, как считается качество заявок и когда принимается
                    решение о масштабировании. Если в предложении только “ведение
                    рекламы”, “SEO-продвижение”, “контент” и “отчётность”, этого
                    мало.
                  </p>
                </div>
              </section>

              <section id="checklist" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Короткий чек-лист выбора подрядчика
                </h2>

                <div className="mt-6 rounded-[28px] bg-slate-50 p-6">
                  <div className="grid gap-3">
                    {checklist.map((item) => (
                      <div key={item} className="flex gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#B6FF00] text-[#0B1220]">
                          <IconCheck className="h-4 w-4" stroke={3} />
                        </span>

                        <p className="text-base leading-7 text-slate-700">
                          Подрядчик {item}.
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
                    Выбирать подрядчика по маркетингу для B2B нужно не по
                    обещаниям и не по красивым кейсам. Смотрите, понимает ли он
                    ваш рынок, умеет ли связывать маркетинг с продажами,
                    работает ли с CRM, говорит ли про качество лидов и может ли
                    показать план на первый месяц.
                  </p>

                  <p>
                    Если сейчас у вас есть сайт, реклама, база клиентов, CRM или
                    входящие заявки, но нет понимания, что реально работает,
                    начните с диагностики.
                  </p>

                  <p className="font-bold text-[#0B1220]">
                    Не с большого договора. Не с “давайте всё переделаем”. А с
                    честного разбора: где теряются заявки, деньги и сделки.
                  </p>
                </div>
              </section>

              <div className="mt-14 rounded-[32px] bg-[#0B1220] p-7 text-white sm:p-9">
                <p className="text-2xl font-bold leading-tight">
                  Хотите понять, где у вас теряются заявки?
                </p>

                <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">
                  Сканлайт Маркетинг помогает B2B-компаниям навести порядок в
                  сайте, рекламе, CRM, заявках и аналитике. Начинаем с
                  диагностики — чтобы не тратить бюджет вслепую.
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