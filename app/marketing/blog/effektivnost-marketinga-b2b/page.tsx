import type { Metadata } from 'next'
import Link from 'next/link'
import {
  IconArrowLeft,
  IconArrowRight,
  IconCheck,
  IconClock,
  IconChartBar,
  IconDatabase,
  IconTargetArrow,
  IconX,
} from '@tabler/icons-react'

export const metadata: Metadata = {
  title:
    'Как измерять эффективность маркетинга в B2B | Сканлайт Маркетинг',
  description:
    'Как измерять эффективность маркетинга в B2B: CRM, заявки, SQL, CPL, CAC, ROMI, LTV, воронка продаж, качество лидов, атрибуция и отчёт для собственника.',
}

const toc = [
  { href: '#why', title: 'Зачем измерять эффективность' },
  { href: '#mistakes', title: 'Что считают неправильно' },
  { href: '#funnel', title: 'Воронка B2B' },
  { href: '#crm', title: 'CRM как источник правды' },
  { href: '#metrics', title: 'Ключевые метрики' },
  { href: '#quality', title: 'Качество лидов' },
  { href: '#romi', title: 'ROMI и экономика' },
  { href: '#dashboard', title: 'Отчёт для собственника' },
  { href: '#checklist', title: 'Чек-лист' },
]

const metrics = [
  {
    name: 'CPL',
    text: 'сколько стоит заявка, но без оценки качества эта метрика легко обманывает',
  },
  {
    name: 'SQL',
    text: 'сколько лидов подходит продажам и имеет понятную коммерческую задачу',
  },
  {
    name: 'CAC',
    text: 'сколько стоит привлечение клиента с учётом всех расходов на маркетинг и продажи',
  },
  {
    name: 'ROMI',
    text: 'окупаются ли вложения в маркетинг после учёта выручки, маржи и затрат',
  },
]

const checklist = [
  'все заявки попадают в CRM и не теряются в чатах, почте или таблицах',
  'у каждой заявки есть источник: Директ, SEO, Карты, сайт, рассылка, рекомендации',
  'согласованы критерии качественного лида и SQL',
  'воронка показывает путь: заявка → контакт → SQL → КП → сделка',
  'продажи фиксируют причины отказов, а не просто закрывают лид как “не купил”',
  'отчёт показывает не только CPL, но и стоимость SQL, встреч, КП и сделок',
  'решения по бюджету принимаются по данным CRM, а не по кликам и ощущениям',
]

function FunnelVisual() {
  return (
    <figure className="my-10 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
      <div className="border-b border-slate-100 bg-slate-50 px-6 py-4">
        <p className="text-sm font-bold text-[#0B1220]">
          Как должна выглядеть B2B-воронка
        </p>
      </div>

      <div className="grid gap-4 p-6 sm:grid-cols-5">
        {[
          ['Трафик', 'люди пришли'],
          ['Заявка', 'оставили контакт'],
          ['SQL', 'подходит продажам'],
          ['КП', 'есть предметный интерес'],
          ['Сделка', 'деньги в бизнесе'],
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
        В B2B нельзя оценивать маркетинг только по кликам и заявкам. Важно
        видеть, какие обращения дошли до продаж, КП и сделок.
      </figcaption>
    </figure>
  )
}

function MetricsVisual() {
  return (
    <figure className="my-10 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
      <div className="border-b border-slate-100 bg-slate-50 px-6 py-4">
        <p className="text-sm font-bold text-[#0B1220]">
          Минимальный набор метрик для B2B
        </p>
      </div>

      <div className="grid gap-4 p-6 sm:grid-cols-2">
        {metrics.map((item) => (
          <div key={item.name} className="rounded-2xl bg-slate-50 p-5">
            <p className="text-2xl font-bold text-[#EA4922]">{item.name}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
          </div>
        ))}
      </div>

      <figcaption className="border-t border-slate-100 px-6 py-4 text-sm leading-6 text-slate-500">
        Одна метрика не показывает эффективность. Нужна связка: стоимость,
        качество, движение по воронке и деньги.
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
          “Клики есть, заявки есть — маркетинг работает”
        </p>

        <p className="mt-3 text-sm leading-6 text-red-800/75">
          В B2B заявка ещё не означает продажу. Без CRM и статусов можно
          радоваться дешёвым лидам, которые не покупают.
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
          “Смотрим путь от источника до сделки”
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-700">
          Источник → заявка → SQL → встреча → КП → сделка. Только так видно,
          какой канал реально приносит деньги.
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
              Аналитика
            </span>

            <span className="inline-flex items-center gap-2 text-sm font-medium text-white/50">
              <IconClock className="h-4 w-4" />
              10 минут
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Как измерять эффективность маркетинга в B2B
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
            В B2B нельзя оценивать маркетинг только по кликам, охватам и цене
            заявки. Важно видеть, какие лиды дошли до продаж, КП и денег.
          </p>

          <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#B6FF00]">
              Главная мысль
            </p>

            <p className="mt-3 max-w-3xl text-xl font-bold leading-8 text-white">
              Эффективность B2B-маркетинга измеряется не активностью, а
              движением по воронке: заявка → SQL → КП → сделка.
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
                  В B2B маркетинг нужно измерять через CRM и продажи: не просто
                  “сколько заявок”, а сколько из них стали SQL, КП, сделками и
                  выручкой.
                </p>
              </div>

              <div className="space-y-8 text-[17px] leading-8 text-slate-700">
                <p>
                  В B2B маркетинг часто оценивают по верхушке воронки: клики,
                  показы, охваты, заявки, цена лида. Эти цифры важны, но они не
                  показывают эффективность полностью.
                </p>

                <p>
                  Можно получить много заявок и не получить продаж. Можно снизить
                  CPL и привести мусор. Можно увеличить трафик и перегрузить
                  менеджеров нецелевыми обращениями. Можно получить хороший отчёт
                  по рекламе, но не понять, сколько денег пришло в бизнес.
                </p>

                <p>
                  Поэтому эффективность маркетинга в B2B нужно измерять глубже:
                  через качество лидов, CRM, воронку продаж, стоимость SQL,
                  конверсию в КП, сделки, ROMI и вклад в выручку.
                </p>
              </div>

              <section id="why" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Зачем вообще измерять эффективность маркетинга
                </h2>

                <CompareBox />

                <div className="space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Измерение нужно не для красивых отчётов. Оно нужно, чтобы
                    принимать решения: какой канал усиливать, какой отключать,
                    где теряются заявки, почему продажи не дожимают лидов и
                    какой бюджет имеет смысл увеличивать.
                  </p>

                  <p>
                    Собственнику или коммерческому директору не нужен отчёт на
                    40 страниц. Ему нужно понимать: откуда пришли нормальные
                    клиенты, сколько они стоили, что с ними сделали менеджеры и
                    где деньги не дошли до сделки.
                  </p>

                  <p>
                    Если этого нет, маркетинг превращается в набор активностей.
                    Реклама идёт, статьи выходят, сайт обновляется, подрядчики
                    присылают отчёты. Но управлять этим невозможно.
                  </p>

                  <p className="rounded-2xl border-l-4 border-[#B6FF00] bg-slate-50 p-5 font-semibold text-[#0B1220]">
                    Хорошая аналитика отвечает не на вопрос “что мы делали”, а
                    на вопрос “что дало заявки, SQL и деньги”.
                  </p>
                </div>
              </section>

              <section id="mistakes" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Что в B2B считают неправильно
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Первая ошибка — считать все заявки одинаковыми. Обращение от
                    компании с понятной задачей и бюджетом нельзя ставить в один
                    ряд с заявкой “просто узнать цену”.
                  </p>

                  <p>
                    Вторая ошибка — радоваться низкому CPL. Дешёвый лид может
                    оказаться нецелевым: не тот регион, не тот объём, частное
                    лицо вместо компании, нет бюджета, нет задачи, нет права
                    принимать решение.
                  </p>

                  <p>
                    Третья ошибка — не смотреть дальше заявки. Если лид попал в
                    CRM, но менеджер не дозвонился, не зафиксировал причину
                    отказа или закрыл сделку без статуса, маркетинг теряет связь
                    с реальностью.
                  </p>

                  <p className="rounded-2xl border-l-4 border-[#EA4922] bg-orange-50 p-5 font-semibold text-[#0B1220]">
                    Если вы измеряете только заявки, вы видите не эффективность
                    маркетинга, а верх воронки.
                  </p>
                </div>
              </section>

              <section id="funnel" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Начните с нормальной воронки B2B
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Перед метриками нужно договориться о воронке. Без неё разные
                    люди будут считать разное: маркетинг — заявки, продажи —
                    встречи, собственник — деньги.
                  </p>

                  <p>
                    Минимальная воронка для B2B выглядит так: трафик, заявка,
                    контакт с менеджером, SQL, встреча или консультация, КП,
                    сделка, повторная продажа. Не в каждой нише этапы будут
                    одинаковыми, но логика должна быть понятной.
                  </p>

                  <p>
                    Главное — не оставлять серую зону между “заявка пришла” и
                    “сделка закрыта”. Именно там чаще всего теряются деньги:
                    менеджеры не дозваниваются, долго отвечают, не фиксируют
                    отказы, не возвращаются к тёплым клиентам.
                  </p>
                </div>

                <FunnelVisual />
              </section>

              <section id="crm" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  CRM — источник правды, а не склад контактов
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    В B2B эффективность маркетинга невозможно нормально измерять
                    без CRM. Не потому что “так правильно”, а потому что именно
                    там видно, что случилось с заявкой после формы на сайте или
                    звонка.
                  </p>

                  <p>
                    В CRM должны быть источник лида, дата обращения, ответственный
                    менеджер, статус, причина отказа, сумма сделки, этап,
                    комментарии и следующий шаг. Если этих данных нет, отчёт по
                    маркетингу будет неполным.
                  </p>

                  <p>
                    CRM нужна не только для контроля менеджеров. Она помогает
                    маркетингу понять, какие каналы дают клиентов, какие
                    приводят мусор, где нужна другая посадочная страница, а где
                    проблема не в рекламе, а в обработке заявок.
                  </p>
                </div>

                <div className="mt-8 rounded-[24px] bg-[#0B1220] p-6 text-white">
                  <div className="mb-4 flex items-center gap-3">
                    <IconDatabase className="h-6 w-6 text-[#B6FF00]" />
                    <p className="font-bold">Важно</p>
                  </div>

                  <p className="text-base leading-7 text-white/70">
                    Если заявки из сайта, Директа, SEO, Карт и рассылок не
                    попадают в CRM с источником, вы не измеряете маркетинг. Вы
                    только смотрите отдельные куски.
                  </p>
                </div>
              </section>

              <section id="metrics" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Ключевые метрики эффективности B2B-маркетинга
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Начинайте с базовых метрик, но не останавливайтесь на них.
                    Показы, клики, CTR и CPC помогают понять работу рекламы, но
                    не говорят, даёт ли она бизнесу клиентов.
                  </p>

                  <p>
                    CPL показывает стоимость заявки. Это полезно, но опасно без
                    оценки качества. Если CPL снизился, а продажи говорят, что
                    лиды не подходят, радоваться нечему.
                  </p>

                  <p>
                    Стоимость SQL важнее, чем просто стоимость лида. SQL — это
                    заявка, которая подходит продажам: есть компания, задача,
                    потребность, контакт и шанс на сделку.
                  </p>

                  <p>
                    Дальше смотрите конверсию по этапам: заявка в контакт,
                    контакт в SQL, SQL в КП, КП в сделку. Именно эта цепочка
                    показывает, где слабое место: в трафике, сайте, оффере,
                    продажах или продукте.
                  </p>
                </div>

                <MetricsVisual />
              </section>

              <section id="quality" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Качество лидов важнее количества
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    В B2B много заявок не всегда хорошо. Если менеджеры тратят
                    время на людей без бюджета, без задачи или без права
                    принимать решение, маркетинг мешает продажам.
                  </p>

                  <p>
                    Качественный лид нужно описать заранее. Например: компания
                    подходит по отрасли, есть понятная потребность, нужный регион,
                    адекватный объём, контакт ЛПР или влияющего лица, есть
                    возможность продолжить разговор.
                  </p>

                  <p>
                    После этого маркетинг и продажи перестают спорить на уровне
                    “лиды плохие” — “вы не умеете продавать”. Появляется общий
                    язык: какие лиды нужны, какие не нужны, какие каналы дают
                    мусор, какие стоит усиливать.
                  </p>

                  <p className="rounded-2xl border-l-4 border-[#B6FF00] bg-slate-50 p-5 font-semibold text-[#0B1220]">
                    В B2B лучше 10 заявок, из которых 4 стали SQL, чем 100
                    обращений, которые только сжигают время продаж.
                  </p>
                </div>
              </section>

              <section id="romi" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  ROMI, CAC и экономика: когда смотреть деньги
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    В B2B нельзя всегда ждать быстрый ROMI. Сделка может идти
                    несколько недель или месяцев. Клиент может сначала прочитать
                    статью, потом вернуться через Директ, потом написать
                    менеджеру, потом запросить КП и только позже купить.
                  </p>

                  <p>
                    Но это не значит, что экономику считать не надо. Просто
                    нужно разделять короткие и длинные метрики. В коротком
                    периоде смотрим заявки, SQL, встречи, КП и качество лидов. В
                    длинном — выручку, маржу, CAC, ROMI и повторные продажи.
                  </p>

                  <p>
                    ROMI имеет смысл считать не по “грязной” выручке, а с учётом
                    маржи и расходов. Если реклама привела заказ на большую
                    сумму, но маржа низкая, логистика дорогая, а продажа
                    разовая, эффективность может быть хуже, чем кажется.
                  </p>

                  <p className="rounded-[24px] bg-[#0B1220] p-6 font-bold leading-8 text-white">
                    Простая логика: сначала измеряем движение по воронке, потом
                    связываем его с деньгами. Иначе можно отключить канал,
                    который приводит будущие сделки, или масштабировать канал,
                    который даёт дешёвый мусор.
                  </p>
                </div>
              </section>

              <section id="dashboard" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Как должен выглядеть отчёт для собственника
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Собственнику не нужен отчёт из рекламного кабинета. Ему
                    нужен управленческий экран: сколько потратили, сколько
                    получили заявок, сколько из них стали SQL, сколько дошли до
                    КП, сколько закрылись в сделки и что делаем дальше.
                  </p>

                  <p>
                    Хороший отчёт должен показывать не только цифры, но и выводы.
                    Например: “Директ даёт дорогие, но качественные SQL”,
                    “SEO даёт дешёвые заявки, но много нецелевых”, “Карты дают
                    звонки, но менеджеры не фиксируют источник”, “форма на сайте
                    собирает мало данных для квалификации”.
                  </p>

                  <p>
                    Отчёт должен заканчиваться действиями. Что отключаем, что
                    усиливаем, что тестируем, что нужно от продаж, что меняем на
                    сайте, какие гипотезы проверяем на следующей неделе.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {[
                    {
                      title: 'Что было',
                      text: 'расходы, лиды, SQL, КП, сделки, качество заявок',
                    },
                    {
                      title: 'Что поняли',
                      text: 'где потери: трафик, сайт, CRM, продажи или оффер',
                    },
                    {
                      title: 'Что делаем',
                      text: 'конкретные действия на следующую неделю или месяц',
                    },
                  ].map((item) => (
                    <div key={item.title} className="rounded-[24px] bg-slate-50 p-5">
                      <IconChartBar className="h-6 w-6 text-[#EA4922]" />
                      <p className="mt-4 text-lg font-bold text-[#0B1220]">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-14">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Что сделать в первый месяц
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Сначала проверьте, все ли заявки попадают в CRM. Если часть
                    лидов остаётся в почте, мессенджерах или у менеджеров “в
                    голове”, эффективность уже считается криво.
                  </p>

                  <p>
                    Затем настройте источники. У каждой заявки должно быть
                    понятно, откуда она пришла: Директ, SEO, Яндекс Карты,
                    Telegram, рассылка, сайт, рекомендация, выставка или другой
                    канал.
                  </p>

                  <p>
                    После этого согласуйте критерии SQL и этапы воронки. Когда
                    все считают одно и то же, можно смотреть конверсии,
                    стоимость этапов и реальные потери.
                  </p>
                </div>
              </section>

              <section id="checklist" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Короткий чек-лист измерения эффективности
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
                    Эффективность маркетинга в B2B нельзя измерять только по
                    кликам, охватам и количеству заявок. Эти метрики показывают
                    активность, но не всегда показывают результат.
                  </p>

                  <p>
                    Нужна связка с CRM и продажами: источник, заявка, качество,
                    SQL, КП, сделка, выручка, маржа и следующий шаг.
                  </p>

                  <p className="font-bold text-[#0B1220]">
                    Хорошая аналитика помогает не спорить “маркетинг работает
                    или нет”, а видеть, где именно теряются заявки, деньги и
                    сделки.
                  </p>
                </div>
              </section>

              <div className="mt-14 rounded-[32px] bg-[#0B1220] p-7 text-white sm:p-9">
                <p className="text-2xl font-bold leading-tight">
                  Хотите понять, какие каналы реально дают заявки и сделки?
                </p>

                <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">
                  Сканлайт Маркетинг помогает B2B-компаниям связать сайт,
                  рекламу, SEO, CRM и продажи в понятную систему показателей.
                  Начинаем с диагностики — чтобы увидеть, где теряются деньги.
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