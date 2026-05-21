import type { Metadata } from 'next'
import Link from 'next/link'
import {
  IconArrowLeft,
  IconArrowRight,
  IconCheck,
  IconClock,
  IconTargetArrow,
  IconX,
  IconAd,
  IconSearch,
} from '@tabler/icons-react'

export const metadata: Metadata = {
  title:
    '5 ошибок в Яндекс Директе, которые сливают бюджет B2B-компании | Сканлайт Маркетинг',
  description:
    'Почему Яндекс Директ в B2B даёт клики, но не даёт продаж: ошибки в семантике, минус-словах, посадочных страницах, целях, CRM и аналитике.',
}

const toc = [
  { href: '#landing', title: 'Ошибка 1. Общая страница' },
  { href: '#semantics', title: 'Ошибка 2. Широкие запросы' },
  { href: '#minus', title: 'Ошибка 3. Нет минус-слов' },
  { href: '#crm', title: 'Ошибка 4. Считать заявку результатом' },
  { href: '#sales', title: 'Ошибка 5. Нет связи с продажами' },
  { href: '#check', title: 'Что проверить за 30 минут' },
  { href: '#stop', title: 'Когда рекламу лучше остановить' },
]

const checklist = [
  'объявления ведут на релевантную страницу, а не просто на главную',
  'семантика собрана по коммерческим запросам, моделям, задачам и категориям',
  'минус-слова чистятся не один раз, а регулярно по поисковым запросам',
  'цели, UTM-метки и формы заявок работают корректно',
  'заявки из Директа видны в CRM и связаны с этапами обработки',
  'продажи дают обратную связь по качеству лидов',
  'кампании оцениваются не только по цене заявки, но и по SQL',
]

function DirectAuditVisual() {
  return (
    <figure className="my-10 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
      <div className="border-b border-slate-100 bg-slate-50 px-6 py-4">
        <p className="text-sm font-bold text-[#0B1220]">
          Что смотреть в Директе для B2B
        </p>
      </div>

      <div className="grid gap-4 p-6 sm:grid-cols-4">
        {[
          ['Запросы', 'мусор / целевые'],
          ['Страница', 'куда ведём'],
          ['CRM', 'что стало с лидом'],
          ['SQL', 'есть ли потенциал'],
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
        Для B2B недостаточно смотреть клики и цену заявки. Нужно понимать, какие
        обращения дошли до продаж и какие стали SQL.
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
          “Главное — снизить цену заявки”
        </p>

        <p className="mt-3 text-sm leading-6 text-red-800/75">
          Дешёвая заявка может быть мусорной. В B2B важнее не цена лида сама по
          себе, а качество обращения и шанс сделки.
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
          “Смотрим путь от запроса до продажи”
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-700">
          Запрос → объявление → посадочная страница → заявка → CRM → SQL →
          продажа. Только так видно, где сливается бюджет.
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
              Реклама
            </span>

            <span className="inline-flex items-center gap-2 text-sm font-medium text-white/50">
              <IconClock className="h-4 w-4" />
              5 минут
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            5 ошибок в Яндекс Директе, которые сливают бюджет B2B-компании
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
            Директ часто ругают зря. В B2B проблема обычно не в самом канале, а
            в том, что реклама не связана с сайтом, CRM, продажами и качеством
            заявок.
          </p>

          <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#B6FF00]">
              Главная мысль
            </p>

            <p className="mt-3 max-w-3xl text-xl font-bold leading-8 text-white">
              Директ должен давать не просто клики и заявки, а обращения от тех,
              кто реально может купить.
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
                  В B2B нельзя оценивать Яндекс Директ только по кликам и цене
                  заявки. Нужно смотреть, какие лиды доходят до продаж и
                  становятся SQL.
                </p>
              </div>

              <div className="space-y-8 text-[17px] leading-8 text-slate-700">
                <p>
                  Яндекс Директ часто ругают зря. Говорят: “Директ не
                  работает”, “лиды дорогие”, “заявки мусорные”, “бюджет
                  сливается”. Но проблема не всегда в самом канале. Часто Директ
                  работает ровно так, как его настроили.
                </p>

                <p>
                  В B2B это особенно заметно. Можно получить клики. Можно
                  получить заявки. Можно даже снизить цену обращения. Но если
                  эти заявки не доходят до продаж, не подходят по задаче или не
                  фиксируются в CRM, бизнес видит только одно: деньги ушли,
                  результата нет.
                </p>

                <p>
                  Ниже — 5 ошибок, из-за которых Яндекс Директ сливает бюджет в
                  B2B-компаниях.
                </p>
              </div>

              <section id="landing" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Ошибка 1. Вести весь трафик на общую страницу
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Самая частая ситуация: реклама ведёт на главную страницу
                    сайта или в общий каталог. Для B2B это слабая точка. Человек
                    ищет не “компанию вообще”, а конкретное решение: оборудование,
                    услугу, поставщика, цену, наличие, условия, внедрение,
                    доставку или сервис.
                  </p>

                  <p>
                    Если после клика он попадает на страницу, где нужно самому
                    разбираться, что вы продаёте и куда нажимать, часть бюджета
                    уже потеряна.
                  </p>

                  <p>
                    Посадочная страница должна отвечать на запрос. Если человек
                    ищет кассовое оборудование для магазина, ему не нужна
                    философия компании. Ему нужно быстро понять: что есть, для
                    кого подходит, как заказать, какие условия и что будет после
                    заявки.
                  </p>

                  <p className="rounded-2xl border-l-4 border-[#B6FF00] bg-slate-50 p-5 font-semibold text-[#0B1220]">
                    Плохая посадочная страница делает Директ дороже не потому,
                    что клик стал хуже. А потому что сайт не превращает этот
                    клик в нормальную заявку.
                  </p>
                </div>
              </section>

              <section id="semantics" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Ошибка 2. Собирать слишком широкие запросы
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    В B2B нельзя просто взять большую семантику и ждать продаж.
                    Широкие запросы быстро приводят людей, которые не готовы
                    покупать. Они сравнивают, изучают, ищут бесплатно, хотят
                    скачать инструкцию или вообще ищут не тот продукт.
                  </p>

                  <p>
                    Например, для оборудования опасны общие запросы без
                    коммерческого намерения. “Касса”, “сканер”, “терминал”,
                    “маркировка”, “автоматизация магазина” — сами по себе они
                    слишком широкие. Внутри может быть и покупатель, и студент, и
                    пользователь, который ищет инструкцию.
                  </p>

                  <p>
                    В B2B лучше начинать уже: с коммерческих фраз, категорий,
                    задач, моделей, отраслей и сценариев применения. Не просто
                    “автоматизация”, а “автоматизация склада для оптовой
                    компании”. Не просто “касса”, а “купить онлайн-кассу для
                    магазина”.
                  </p>
                </div>
              </section>

              <section id="minus" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Ошибка 3. Не чистить минус-слова
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Минус-слова — это не техническая мелочь. Это фильтр бюджета.
                    Без минус-слов реклама начинает показываться по запросам,
                    которые не приведут к покупке.
                  </p>

                  <p>
                    Часто в мусоре оказываются слова вроде “бесплатно”,
                    “скачать”, “инструкция”, “драйвер”, “вакансия”, “реферат”,
                    “отзывы сотрудников”, “как сделать”, “б/у”, “для дома”. Но
                    универсального списка нет. Минус-слова нужно собирать под
                    конкретную нишу, товар, регион и тип клиента.
                  </p>

                  <p>
                    Важно не просто добавить минус-слова один раз на старте.
                    Нужно регулярно смотреть поисковые запросы и чистить
                    кампании. В B2B бюджет часто уходит не одним крупным сливом,
                    а сотнями мелких нецелевых кликов.
                  </p>
                </div>
              </section>

              <section id="crm" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Ошибка 4. Считать заявку результатом
                </h2>

                <CompareBox />

                <div className="space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Заявка — это ещё не продажа. Для B2B это главный источник
                    самообмана в рекламе. В отчёте всё может выглядеть хорошо:
                    заявки есть, цена лида приемлемая, кампания “работает”. А
                    потом отдел продаж говорит: “Лиды плохие”.
                  </p>

                  <p>
                    Решение одно: считать не только заявки, а качество заявок.
                    Нужно смотреть, сколько обращений дошло до менеджера,
                    сколько стали SQL, сколько дошли до КП, сколько перешли в
                    сделку и какие причины отказа повторяются.
                  </p>

                  <p>
                    Если реклама не связана с CRM, вы видите только часть
                    картины. Директ оценивается по верхушке воронки, а деньги
                    зарабатываются внизу.
                  </p>
                </div>

                <DirectAuditVisual />

                <div className="rounded-[24px] bg-[#0B1220] p-6 text-white">
                  <div className="mb-4 flex items-center gap-3">
                    <IconAd className="h-6 w-6 text-[#B6FF00]" />
                    <p className="font-bold">Важно</p>
                  </div>

                  <p className="text-base leading-7 text-white/70">
                    Если в отчёте есть клики и заявки, но нет статусов из CRM,
                    вы не видите реальную эффективность Директа.
                  </p>
                </div>
              </section>

              <section id="sales" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Ошибка 5. Запускать Директ без обратной связи от продаж
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Директ нельзя вести отдельно от отдела продаж. В B2B
                    менеджеры быстро видят, какие заявки нормальные, а какие нет.
                    Они слышат вопросы клиентов, возражения, реальные
                    потребности, причины отказа, проблемы с ценой, сроками,
                    наличием и условиями.
                  </p>

                  <p>
                    Если эта информация не возвращается в рекламу, кампании
                    начинают жить сами по себе. Маркетолог видит клики и
                    конверсии. Продажи видят реальность. Но между ними нет обмена
                    данными.
                  </p>

                  <p>
                    Так теряются деньги. Реклама продолжает вести людей по
                    фразам, которые дают обращения, но не дают сделок.
                    Объявления обещают одно, а менеджеры объясняют другое.
                    Посадочные страницы не закрывают реальные возражения.
                  </p>

                  <p className="rounded-2xl border-l-4 border-[#EA4922] bg-orange-50 p-5 font-semibold text-[#0B1220]">
                    В B2B Директ должен оптимизироваться не только по цене
                    заявки, но и по качеству клиента.
                  </p>
                </div>
              </section>

              <section id="check" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Что проверить в Яндекс Директе за 30 минут
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Если реклама уже запущена, не начинайте с “давайте всё
                    переделаем”. Сначала проверьте базовые вещи.
                  </p>

                  <p>
                    Откройте поисковые запросы и посмотрите, нет ли мусора.
                    Проверьте, куда ведут объявления. Посмотрите, настроены ли
                    цели. Проверьте, есть ли UTM-метки. Сравните заявки из
                    Директа с данными в CRM. Попросите менеджеров назвать 5
                    типичных причин, почему лиды не подходят.
                  </p>

                  <p>
                    Этого уже достаточно, чтобы увидеть первые потери. Часто
                    проблема не в том, что “Директ не работает”. Проблема в том,
                    что им никто не управляет как частью продаж.
                  </p>
                </div>
              </section>

              <section id="stop" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Когда рекламу лучше остановить
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Иногда Директ нужно не оптимизировать, а временно остановить.
                    Например, если сайт не принимает заявки, формы не работают,
                    нет целей и аналитики, менеджеры не обрабатывают обращения
                    или непонятно, какие заявки считаются целевыми.
                  </p>

                  <p>
                    В такой ситуации увеличение бюджета только ускорит потери.
                    Сначала нужно навести порядок: сайт, формы, цели, UTM, CRM,
                    этапы обработки, критерии качественного лида. Потом запускать
                    или масштабировать рекламу.
                  </p>
                </div>
              </section>

              <section className="mt-14">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Как должен работать Директ в B2B
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Нормальная реклама в B2B — это не “запустили кампанию и ждём
                    заявок”. Это система.
                  </p>

                  <p>
                    Запрос должен вести на релевантную страницу. Страница должна
                    объяснять предложение. Форма должна собирать нужные данные.
                    Заявка должна попадать в CRM. Менеджер должен быстро её
                    обработать. Причина отказа должна фиксироваться. А реклама
                    должна дорабатываться по фактам, а не по ощущениям.
                  </p>

                  <p>
                    Только тогда Яндекс Директ становится не расходом, а
                    управляемым каналом привлечения клиентов.
                  </p>
                </div>
              </section>

              <section id="checklist" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Короткий чек-лист проверки
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
                    Яндекс Директ сливает бюджет не сам по себе. Бюджет сливают
                    ошибки: общие страницы, широкие запросы, слабые минус-слова,
                    оценка по количеству заявок и отсутствие связи с продажами.
                  </p>

                  <p>
                    Для B2B-компании важно смотреть глубже: не сколько было
                    кликов, а какие обращения дошли до продаж и какие каналы
                    дают клиентов, которые реально могут купить.
                  </p>

                  <p className="font-bold text-[#0B1220]">
                    Если Директ уже запущен, но заявки не превращаются в продажи,
                    начните с диагностики: семантика, посадочные страницы, цели,
                    CRM и обработка лидов.
                  </p>
                </div>
              </section>

              <div className="mt-14 rounded-[32px] bg-[#0B1220] p-7 text-white sm:p-9">
                <p className="text-2xl font-bold leading-tight">
                  Хотите понять, где Директ теряет бюджет?
                </p>

                <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">
                  Сканлайт Маркетинг помогает B2B-компаниям находить, где
                  реклама теряет деньги: в запросах, сайте, формах, CRM или
                  продажах. Начинаем с диагностики — чтобы не масштабировать
                  хаос.
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