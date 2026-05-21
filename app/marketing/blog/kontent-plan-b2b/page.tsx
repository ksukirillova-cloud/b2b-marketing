import type { Metadata } from 'next'
import Link from 'next/link'
import {
  IconArrowLeft,
  IconArrowRight,
  IconCheck,
  IconClock,
  IconCalendarStats,
  IconTargetArrow,
  IconX,
  IconChartBar,
  IconDatabase,
  IconFileText,
  IconUsers,
} from '@tabler/icons-react'

export const metadata: Metadata = {
  title:
    'Контент-план для B2B-компании: шаблон и примеры | Сканлайт Маркетинг',
  description:
    'Как составить контент-план для B2B-компании: цели, аудитория, темы, рубрики, воронка, примеры постов, SEO, Telegram, сайт и шаблон на месяц.',
}

const toc = [
  { href: '#why', title: 'Зачем B2B контент-план' },
  { href: '#mistakes', title: 'Типичные ошибки' },
  { href: '#base', title: 'С чего начать' },
  { href: '#funnel', title: 'Контент по воронке' },
  { href: '#template', title: 'Шаблон на месяц' },
  { href: '#examples', title: 'Примеры тем' },
  { href: '#channels', title: 'Каналы' },
  { href: '#metrics', title: 'Как считать результат' },
  { href: '#checklist', title: 'Чек-лист' },
]

const checklist = [
  'контент-план связан с бизнес-целью: заявки, встречи, SQL, сделки',
  'есть 2–4 ключевых сегмента аудитории, а не “пишем для всех”',
  'темы закрывают реальные вопросы клиентов до покупки',
  'есть контент для разных этапов: узнавание, доверие, выбор, заявка',
  'каждая тема ведёт к понятному следующему шагу',
  'SEO-статьи, кейсы, Telegram и рассылки не живут отдельно друг от друга',
  'результат контента смотрят не только по просмотрам, но и по заявкам',
]

const monthTemplate = [
  {
    week: '1 неделя',
    focus: 'Проблема клиента',
    examples:
      'Почему заявки есть, а продаж нет. Где теряются лиды в CRM. Почему Директ даёт мусор.',
  },
  {
    week: '2 неделя',
    focus: 'Экспертиза и решение',
    examples:
      'Как устроить воронку B2B. Как связать сайт, рекламу и продажи. Как считать SQL.',
  },
  {
    week: '3 неделя',
    focus: 'Доказательства',
    examples:
      'Кейс, разбор проекта, цифры, до/после, ошибка из практики, мини-аудит.',
  },
  {
    week: '4 неделя',
    focus: 'Продажа и действие',
    examples:
      'Диагностика, чек-лист, разбор сайта, предложение пилота, сценарий первого месяца.',
  },
]

function ContentPlanVisual() {
  return (
    <figure className="my-10 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
      <div className="border-b border-slate-100 bg-slate-50 px-6 py-4">
        <p className="text-sm font-bold text-[#0B1220]">
          Логика B2B-контент-плана
        </p>
      </div>

      <div className="grid gap-4 p-6 sm:grid-cols-4">
        {[
          ['Проблема', 'что болит'],
          ['Решение', 'как исправить'],
          ['Доказательство', 'почему верить'],
          ['Действие', 'куда идти'],
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
        В B2B контент должен не просто выходить регулярно. Он должен двигать
        клиента к доверию, заявке, встрече или запросу коммерческого предложения.
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
          “Нужно просто регулярно постить”
        </p>

        <p className="mt-3 text-sm leading-6 text-red-800/75">
          Регулярность без цели быстро превращается в шум: новости компании,
          поздравления, общие советы и посты, которые не влияют на заявки.
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
          “Контент ведёт клиента к решению”
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-700">
          У каждой темы есть роль: объяснить проблему, показать подход, доказать
          опыт или привести к диагностике.
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
              Контент-маркетинг
            </span>

            <span className="inline-flex items-center gap-2 text-sm font-medium text-white/50">
              <IconClock className="h-4 w-4" />
              10 минут
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Контент-план для B2B-компании: шаблон и примеры
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
            B2B-контент должен не просто закрывать пустоты в календаре. Он
            должен объяснять сложный продукт, усиливать доверие и помогать
            продажам получать более зрелые заявки.
          </p>

          <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#B6FF00]">
              Главная мысль
            </p>

            <p className="mt-3 max-w-3xl text-xl font-bold leading-8 text-white">
              Контент-план для B2B начинается не с рубрик, а с вопроса: какое
              действие должен сделать клиент после контакта с контентом.
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
                  B2B-контент-план — это не список постов. Это система касаний:
                  проблема, решение, доказательство, заявка.
                </p>
              </div>

              <div className="space-y-8 text-[17px] leading-8 text-slate-700">
                <p>
                  В B2B часто делают контент-план по остаточному принципу:
                  новости компании, поздравления, пост про команду, пост про
                  услугу, ещё один пост про “почему важно выбрать надёжного
                  поставщика”. Формально контент выходит. На продажи он почти не
                  влияет.
                </p>

                <p>
                  Причина простая: такой план не связан с воронкой. Он не
                  отвечает на вопросы клиента до покупки, не снимает риски, не
                  объясняет сложный продукт и не помогает менеджерам продавать.
                </p>

                <p>
                  Для B2B-компании контент-план должен работать как часть
                  маркетинга и продаж. Он должен приводить клиента от проблемы к
                  пониманию решения, а потом — к заявке, встрече, диагностике или
                  запросу КП.
                </p>
              </div>

              <section id="why" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Зачем B2B-компании контент-план
                </h2>

                <CompareBox />

                <div className="space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    В B2B клиент редко покупает сразу. Он сравнивает поставщиков,
                    обсуждает решение внутри компании, считает бюджет, смотрит
                    риски, согласует с руководителем, закупками или техническими
                    специалистами.
                  </p>

                  <p>
                    Контент нужен, чтобы сопровождать этот путь. Не давить
                    рекламой каждый день, а давать аргументы: как выбрать, на что
                    смотреть, где чаще всего теряются деньги, почему одно решение
                    подходит, а другое нет.
                  </p>

                  <p>
                    Хороший контент помогает продажам. Менеджер может отправить
                    клиенту статью, чек-лист, кейс, сравнение, инструкцию или
                    разбор ошибки. Это сокращает объяснения и повышает доверие.
                  </p>

                  <p className="rounded-2xl border-l-4 border-[#B6FF00] bg-slate-50 p-5 font-semibold text-[#0B1220]">
                    Контент-план должен отвечать не на вопрос “что бы нам
                    сегодня выложить”, а на вопрос “что мешает клиенту принять
                    решение”.
                  </p>
                </div>

                <ContentPlanVisual />
              </section>

              <section id="mistakes" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Типичные ошибки в B2B-контенте
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Первая ошибка — писать для всех. Если аудитория не
                    определена, контент получается размытым. Собственнику нужен
                    контроль и прогноз, коммерческому директору — заявки и
                    качество лидов, маркетологу — понятная система, технарю —
                    детали внедрения.
                  </p>

                  <p>
                    Вторая ошибка — говорить только о себе. “Мы на рынке 15 лет”,
                    “мы профессионалы”, “у нас индивидуальный подход”. Клиенту
                    важнее другое: какую проблему вы решаете, как снижаете риск,
                    что будет после заявки и почему вам можно доверять.
                  </p>

                  <p>
                    Третья ошибка — делать контент без следующего шага. Человек
                    прочитал пост или статью, согласился, узнал себя — и дальше
                    ничего. Нет ссылки на диагностику, чек-лист, кейс, форму или
                    консультацию. Так интерес остывает.
                  </p>

                  <p className="rounded-2xl border-l-4 border-[#EA4922] bg-orange-50 p-5 font-semibold text-[#0B1220]">
                    Контент без роли в воронке — это не маркетинг. Это
                    публикационная активность.
                  </p>
                </div>
              </section>

              <section id="base" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  С чего начать контент-план
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Начните с бизнес-цели. Не “вести Telegram” и не “писать
                    статьи”, а получить заявки, прогреть базу, повысить доверие,
                    снизить количество нецелевых обращений, помочь менеджерам
                    закрывать сделки или вывести новое направление.
                  </p>

                  <p>
                    Затем определите сегменты. Для B2B это обычно не одна
                    аудитория. Например: собственник, коммерческий директор,
                    руководитель продаж, маркетолог, закупщик, технический
                    специалист. У каждого своя боль и свой критерий выбора.
                  </p>

                  <p>
                    После этого соберите вопросы клиентов. Что они спрашивают до
                    покупки? Из-за чего сомневаются? Какие ошибки уже совершали?
                    Почему выбирают конкурентов? Где теряют деньги? Что им нужно
                    объяснить до первого созвона?
                  </p>

                  <p>
                    Из этих вопросов и появляется нормальный контент-план. Не из
                    рубрик “понедельник — экспертный пост, среда — кейс, пятница
                    — польза”, а из реальных барьеров клиента.
                  </p>
                </div>
              </section>

              <section id="funnel" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Контент должен закрывать разные этапы воронки
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    На верхнем этапе клиент ещё не готов покупать. Он чувствует
                    проблему: заявки просели, реклама дорогая, CRM не показывает
                    картину, сайт не даёт обращений. Здесь работают статьи,
                    посты-разборы и материалы про типовые ошибки.
                  </p>

                  <p>
                    В середине воронки клиент уже ищет решение. Ему нужны
                    инструкции, сравнения, чек-листы, примеры подхода, разборы
                    сценариев, ответы на возражения. Здесь важно показать
                    систему: как связаны сайт, реклама, SEO, CRM и продажи.
                  </p>

                  <p>
                    Внизу воронки клиент выбирает подрядчика. Здесь нужны кейсы,
                    цифры, конкретные этапы работ, формат диагностики, план
                    первого месяца, условия старта и понятный следующий шаг.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {[
                    {
                      icon: IconUsers,
                      title: 'Верх воронки',
                      text: 'Проблемы, ошибки, симптомы, объяснение рынка.',
                    },
                    {
                      icon: IconFileText,
                      title: 'Середина',
                      text: 'Гайды, чек-листы, сравнения, подход и методика.',
                    },
                    {
                      icon: IconChartBar,
                      title: 'Низ',
                      text: 'Кейсы, цифры, диагностика, пилот, коммерческий шаг.',
                    },
                  ].map((item) => {
                    const Icon = item.icon

                    return (
                      <div key={item.title} className="rounded-[24px] bg-slate-50 p-5">
                        <Icon className="h-6 w-6 text-[#EA4922]" />
                        <p className="mt-4 text-lg font-bold text-[#0B1220]">
                          {item.title}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {item.text}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </section>

              <section id="template" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Шаблон контент-плана на месяц
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Для B2B не нужен контент каждый день, если нет ресурсов
                    делать его нормально. Лучше меньше, но точнее. Один сильный
                    разбор, один кейс, одна статья и несколько коротких постов
                    могут работать лучше, чем 30 публикаций “для активности”.
                  </p>

                  <p>
                    Ниже — простая структура месяца. Её можно адаптировать под
                    Telegram, блог, email-рассылку, Дзен, VC, сайт или LinkedIn,
                    если вы работаете с международной аудиторией.
                  </p>
                </div>

                <div className="mt-8 overflow-hidden rounded-[28px] border border-slate-200">
                  <div className="grid bg-[#0B1220] px-5 py-4 text-sm font-bold text-white md:grid-cols-[140px_220px_1fr]">
                    <div>Период</div>
                    <div className="hidden md:block">Фокус</div>
                    <div className="hidden md:block">Примеры тем</div>
                  </div>

                  <div className="divide-y divide-slate-200 bg-white">
                    {monthTemplate.map((item) => (
                      <div
                        key={item.week}
                        className="grid gap-3 px-5 py-5 md:grid-cols-[140px_220px_1fr]"
                      >
                        <p className="font-bold text-[#0B1220]">{item.week}</p>
                        <p className="text-sm font-semibold text-[#EA4922]">
                          {item.focus}
                        </p>
                        <p className="text-sm leading-6 text-slate-600">
                          {item.examples}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="examples" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Примеры тем для B2B-компании
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Темы должны выходить из задач клиента. Если вы продаёте
                    сложный продукт, оборудование, B2B-услугу или автоматизацию,
                    не начинайте с “о нас”. Начните с того, что клиент уже
                    пытается решить.
                  </p>

                  <p>
                    Для производственной компании подойдут темы про потери в
                    воронке, связь маркетинга с CRM, качество заявок, работу
                    менеджеров, тендеры, длинный цикл сделки и контроль бюджета.
                  </p>

                  <p>
                    Для интернет-магазина оборудования — структура каталога,
                    SEO карточек, ошибки в Директе, фильтры, коммерческие
                    факторы, заявки, наличие, доставка, сервис и подбор товара.
                  </p>

                  <p>
                    Для B2B SaaS или IT — ABM, прогрев, MQL/SQL, демо, use-case,
                    внедрение, интеграции, безопасность, согласования и работа с
                    несколькими ЛПР.
                  </p>
                </div>

                <div className="mt-8 rounded-[24px] bg-[#0B1220] p-6 text-white">
                  <div className="mb-4 flex items-center gap-3">
                    <IconDatabase className="h-6 w-6 text-[#B6FF00]" />
                    <p className="font-bold">Важно</p>
                  </div>

                  <p className="text-base leading-7 text-white/70">
                    Хорошая тема для B2B-контента звучит не как “расскажем про
                    услугу”, а как “поможем клиенту принять более безопасное
                    решение”.
                  </p>
                </div>
              </section>

              <section id="channels" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Как распределить контент по каналам
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Блог нужен для SEO и длинных материалов. Там стоит размещать
                    статьи, которые отвечают на поисковые запросы: как выбрать
                    подрядчика, как настроить Директ, как продвигать каталог,
                    как считать эффективность маркетинга.
                  </p>

                  <p>
                    Telegram подходит для коротких разборов, мнений, наблюдений,
                    кейсов, быстрых выводов и регулярного контакта с аудиторией.
                    Там не обязательно писать длинно. Важно писать точно.
                  </p>

                  <p>
                    Email полезен для прогрева базы. В B2B часть клиентов не
                    готова купить сразу. Им можно отправлять кейсы, чек-листы,
                    приглашения на диагностику, разборы ошибок и полезные
                    материалы по их задаче.
                  </p>

                  <p>
                    Один материал можно переиспользовать. Из большой статьи
                    сделать 3 поста, письмо в базу, короткий чек-лист, сценарий
                    видео и блок для коммерческого предложения.
                  </p>
                </div>
              </section>

              <section id="metrics" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Как считать результат контента
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Просмотры и лайки не показывают всю картину. В B2B контент
                    может влиять на сделку не сразу: человек прочитал статью,
                    вернулся через неделю, подписался, потом оставил заявку или
                    пришёл на созвон после касания менеджера.
                  </p>

                  <p>
                    Поэтому смотрите не только охваты. Отмечайте переходы на
                    сайт, заявки, подписки, ответы на письма, запросы КП,
                    возвращения на ключевые страницы, влияние на SQL и качество
                    разговоров с продажами.
                  </p>

                  <p>
                    Если менеджеры говорят, что клиенты стали лучше понимать
                    продукт, чаще приходят с конкретной задачей и быстрее
                    соглашаются на следующий шаг, контент уже помогает. Но лучше
                    не ограничиваться ощущениями — связывайте материалы с UTM,
                    CRM и источниками заявок.
                  </p>

                  <p className="rounded-2xl border-l-4 border-[#B6FF00] bg-slate-50 p-5 font-semibold text-[#0B1220]">
                    В B2B контент должен измеряться не только вниманием, но и
                    вкладом в воронку: заявки, SQL, встречи, КП, сделки.
                  </p>
                </div>
              </section>

              <section id="checklist" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Короткий чек-лист контент-плана
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
                    Контент-план для B2B-компании нужен не для галочки и не для
                    “регулярного присутствия”. Он нужен, чтобы помогать клиенту
                    пройти путь от проблемы к решению.
                  </p>

                  <p>
                    Начинайте с цели, аудитории, вопросов клиентов и воронки. А
                    уже потом выбирайте рубрики, форматы и частоту публикаций.
                  </p>

                  <p className="font-bold text-[#0B1220]">
                    Хороший B2B-контент не просто информирует. Он снимает риск,
                    объясняет ценность, доказывает опыт и ведёт к заявке.
                  </p>
                </div>
              </section>

              <div className="mt-14 rounded-[32px] bg-[#0B1220] p-7 text-white sm:p-9">
                <p className="text-2xl font-bold leading-tight">
                  Хотите контент-план, который связан с заявками?
                </p>

                <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">
                  Сканлайт Маркетинг помогает B2B-компаниям собрать контент,
                  который работает вместе с сайтом, рекламой, SEO, CRM и
                  продажами. Начинаем с диагностики — чтобы писать не “для
                  активности”, а под реальные задачи клиентов.
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