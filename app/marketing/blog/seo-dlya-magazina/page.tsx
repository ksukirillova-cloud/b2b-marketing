import type { Metadata } from 'next'
import Link from 'next/link'
import {
  IconArrowLeft,
  IconArrowRight,
  IconCheck,
  IconClock,
  IconSearch,
  IconShoppingCart,
  IconTargetArrow,
  IconX,
  IconDatabase,
} from '@tabler/icons-react'

export const metadata: Metadata = {
  title:
    'SEO для интернет-магазина оборудования: с чего начать в 2026 | Сканлайт Маркетинг',
  description:
    'Как начать SEO для интернет-магазина оборудования в 2026: структура каталога, карточки товаров, фильтры, коммерческие запросы, микроразметка, индексация и заявки.',
}

const toc = [
  { href: '#catalog', title: 'Начните с каталога' },
  { href: '#categories', title: 'Категории под спрос' },
  { href: '#cards', title: 'Карточки товаров' },
  { href: '#filters', title: 'Фильтры и характеристики' },
  { href: '#commercial', title: 'Коммерческие факторы' },
  { href: '#technical', title: 'Техническая база' },
  { href: '#checklist', title: 'Чек-лист SEO' },
]

const checklist = [
  'каталог собран по спросу, а не только по внутренней логике компании',
  'категории закрывают коммерческие запросы покупателей',
  'карточки товаров содержат характеристики, цену, наличие и сценарии применения',
  'фильтры не создают мусорные дубли в индексе',
  'есть микроразметка Product и Offer для товарных страниц',
  'сайт проверен в Яндекс Вебмастере и Google Search Console',
  'заявки с SEO видны в CRM и связаны с продажами',
]

function CatalogVisual() {
  return (
    <figure className="my-10 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
      <div className="border-b border-slate-100 bg-slate-50 px-6 py-4">
        <p className="text-sm font-bold text-[#0B1220]">
          Как выглядит нормальная SEO-логика магазина оборудования
        </p>
      </div>

      <div className="grid gap-4 p-6 sm:grid-cols-4">
        {[
          ['Категория', 'онлайн-кассы'],
          ['Фильтр', 'для магазина'],
          ['Карточка', 'модель + цена'],
          ['Заявка', 'в CRM'],
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
        SEO магазина оборудования начинается не со статей, а с понятной связки:
        спрос → категория → карточка → заявка → CRM.
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
          “Напишем статьи и купим ссылки”
        </p>

        <p className="mt-3 text-sm leading-6 text-red-800/75">
          Если каталог хаотичный, карточки пустые, а заявки не считаются, статьи
          не спасут SEO. Они просто добавят ещё один слой хаоса.
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
          “Сначала приводим в порядок каталог”
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-700">
          Категории, карточки, фильтры, характеристики, наличие, цена, формы
          заявок и индексация. Потом — статьи и внешнее продвижение.
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
              SEO
            </span>

            <span className="inline-flex items-center gap-2 text-sm font-medium text-white/50">
              <IconClock className="h-4 w-4" />
              10 минут
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            SEO для интернет-магазина оборудования: с чего начать в 2026
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
            Для магазина оборудования SEO начинается не со статей. Сначала нужно
            привести в порядок каталог, карточки, фильтры, коммерческие страницы
            и путь заявки до CRM.
          </p>

          <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#B6FF00]">
              Главная мысль
            </p>

            <p className="mt-3 max-w-3xl text-xl font-bold leading-8 text-white">
              Если каталог неудобный, SEO не спасёт. Поисковику нужна понятная
              структура, а покупателю — быстрый путь к товару и заявке.
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
                  SEO для интернет-магазина оборудования — это не “добавить
                  ключи в тексты”. Это работа с каталогом, коммерческими
                  запросами, карточками товаров, фильтрами, микроразметкой и
                  заявками.
                </p>
              </div>

              <div className="space-y-8 text-[17px] leading-8 text-slate-700">
                <p>
                  В SEO интернет-магазина оборудования часто начинают не с того.
                  Пишут статьи, закупают ссылки, добавляют “SEO-тексты” внизу
                  категорий. Но каталог остаётся неудобным, карточки товаров
                  пустыми, фильтры создают дубли, а заявки не попадают в нормальную
                  аналитику.
                </p>

                <p>
                  В 2026 году такой подход слабый. Поисковики всё лучше понимают
                  структуру сайта, качество товарных страниц, наличие, цену,
                  доставку, микроразметку и поведение пользователя. А покупатель
                  оборудования не хочет читать общий текст “о пользе автоматизации”.
                  Он хочет быстро понять: подходит ли товар, есть ли он, сколько
                  стоит и как получить коммерческое предложение.
                </p>

                <p>
                  Поэтому SEO для магазина оборудования нужно начинать с базы:
                  каталог, категории, карточки, фильтры, коммерческие факторы и
                  связь с заявками.
                </p>
              </div>

              <section id="catalog" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Начните не со статей, а с каталога
                </h2>

                <CompareBox />

                <div className="space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Каталог — это основа SEO для интернет-магазина оборудования.
                    Если он собран по внутренней логике компании, а не по спросу
                    клиентов, поисковый трафик будет слабым.
                  </p>

                  <p>
                    Например, внутри компании товары могут делить по брендам,
                    поставщикам или складам. Клиент ищет иначе: по задаче,
                    сценарию, типу бизнеса, модели, совместимости, цене,
                    наличию, региону или условиям поставки.
                  </p>

                  <p>
                    Если эти запросы не отражены в структуре каталога, сайт
                    теряет низкочастотный спрос. А в B2B именно он часто даёт
                    самые тёплые заявки.
                  </p>

                  <p className="rounded-2xl border-l-4 border-[#B6FF00] bg-slate-50 p-5 font-semibold text-[#0B1220]">
                    Хороший каталог отвечает не на вопрос “как нам удобно
                    хранить товары”, а на вопрос “как клиент ищет оборудование”.
                  </p>
                </div>
              </section>

              <section id="categories" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Категории нужно собирать под спрос
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Категория в интернет-магазине оборудования — это не просто
                    раздел с товарами. Это посадочная страница под коммерческий
                    спрос.
                  </p>

                  <p>
                    Если пользователь ищет “онлайн-касса для магазина одежды”,
                    ему нужна не общая страница “онлайн-кассы”. Ему нужна
                    категория или посадочная, где понятно: какие модели подходят,
                    чем они отличаются, есть ли подключение, доставка, гарантия,
                    настройка и консультация.
                  </p>

                  <p>
                    Для SEO важно разделять разные типы спроса. Есть запросы по
                    категории, по бренду, по модели, по задаче, по отрасли, по
                    характеристике. Если всё ведёт на одну общую страницу, сайт
                    сам снижает свои шансы на нормальные позиции.
                  </p>
                </div>

                <CatalogVisual />
              </section>

              <section id="cards" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Карточка товара должна продавать, а не просто существовать
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    В магазинах оборудования карточки часто выглядят как
                    выгрузка из базы: название, фото, цена, короткое описание и
                    характеристики. Для SEO и продаж этого мало.
                  </p>

                  <p>
                    Карточка должна помогать покупателю принять решение. В ней
                    должны быть понятные характеристики, совместимость, сценарии
                    применения, комплектация, наличие, условия доставки,
                    гарантия, сервис и способ получить консультацию.
                  </p>

                  <p>
                    Для поисковиков тоже важна конкретика. Google отдельно
                    описывает разметку Product и Offer: она помогает поиску
                    понимать данные о товаре, цене, наличии, доставке и других
                    параметрах. Для интернет-магазина это не “красивая
                    техническая штука”, а часть нормальной товарной SEO-базы.
                  </p>

                  <p className="rounded-2xl border-l-4 border-[#EA4922] bg-orange-50 p-5 font-semibold text-[#0B1220]">
                    Пустая карточка товара — это потеря сразу в двух местах: в
                    поиске и в конверсии.
                  </p>
                </div>
              </section>

              <section id="filters" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Фильтры могут дать трафик, а могут создать мусор
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Фильтры в магазине оборудования важны: покупатели часто ищут
                    по характеристикам, брендам, типу подключения, назначению,
                    совместимости, формату бизнеса или цене.
                  </p>

                  <p>
                    Но фильтры опасны для SEO, если их не контролировать. Они
                    могут создавать сотни дублей: страницы с почти одинаковым
                    содержанием, пустые комбинации, слабые URL, мусор в индексе.
                    В итоге поисковик тратит внимание на страницы, которые не
                    должны продвигаться.
                  </p>

                  <p>
                    Нужна логика: какие фильтры открываем для индексации, какие
                    закрываем, какие превращаем в полноценные посадочные
                    страницы, а какие оставляем только для удобства пользователя.
                  </p>
                </div>
              </section>

              <section id="commercial" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Коммерческие факторы решают больше, чем “SEO-текст”
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    В интернет-магазине оборудования пользователь часто
                    сравнивает не только товары, но и поставщиков. Ему важно
                    понять, можно ли вам доверять.
                  </p>

                  <p>
                    На странице должны быть цена или понятный способ её запросить,
                    наличие, условия доставки, гарантия, сервис, способы оплаты,
                    контакты, форма заявки, быстрый способ связаться с
                    менеджером и нормальные карточки компании.
                  </p>

                  <p>
                    Если этих элементов нет, SEO может привести трафик, но сайт
                    не превратит его в заявку. Для B2B это особенно критично:
                    клиент редко покупает сложное оборудование с первого клика.
                    Ему нужно быстро получить подтверждение, что поставщик
                    понимает задачу и сможет помочь.
                  </p>
                </div>

                <div className="mt-8 rounded-[24px] bg-[#0B1220] p-6 text-white">
                  <div className="mb-4 flex items-center gap-3">
                    <IconShoppingCart className="h-6 w-6 text-[#B6FF00]" />
                    <p className="font-bold">Важно</p>
                  </div>

                  <p className="text-base leading-7 text-white/70">
                    SEO не должно заканчиваться позицией в поиске. Нормальная
                    цель — заявка, звонок, запрос КП или другой понятный шаг к
                    продаже.
                  </p>
                </div>
              </section>

              <section id="technical" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Техническая база: без неё продвижение будет буксовать
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Техническое SEO для магазина оборудования — это не отдельная
                    “айтишная” задача. Это база, без которой поисковик может
                    плохо обходить сайт, путаться в дублях и не видеть важные
                    страницы.
                  </p>

                  <p>
                    Нужно проверить индексацию, sitemap, robots.txt, дубли,
                    канонические URL, скорость загрузки, адаптивность, ошибки
                    карточек, редиректы, пагинацию, фильтры, микроразметку и
                    корректную работу форм.
                  </p>

                  <p>
                    Яндекс Вебмастер помогает отслеживать техническое состояние
                    сайта и проблемы в поиске. Google Search Console помогает
                    видеть индексацию, эффективность страниц, ошибки и отчёты по
                    структурированным данным. Эти инструменты должны быть
                    подключены до активного продвижения.
                  </p>

                  <p className="rounded-2xl border-l-4 border-[#B6FF00] bg-slate-50 p-5 font-semibold text-[#0B1220]">
                    Не надо ждать, пока SEO “разгонится”, если сайт технически
                    мешает поисковику и покупателю.
                  </p>
                </div>
              </section>

              <section className="mt-14">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  С чего начать SEO в 2026
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Начните с аудита структуры. Посмотрите, какие категории уже
                    есть, какие запросы они закрывают и где спрос уходит мимо
                    сайта. Затем проверьте карточки: хватает ли информации для
                    выбора и заявки.
                  </p>

                  <p>
                    После этого разберите фильтры. Не все комбинации должны быть
                    в индексе. Часть нужно закрыть, часть — усилить и превратить
                    в посадочные страницы.
                  </p>

                  <p>
                    Потом проверьте техническую базу: индексацию, дубли,
                    sitemap, robots.txt, микроразметку Product и Offer,
                    адаптивность, скорость, формы и аналитику. И только после
                    этого планируйте статьи, внешнее продвижение и расширение
                    семантики.
                  </p>
                </div>
              </section>

              <section id="checklist" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Короткий чек-лист SEO для магазина оборудования
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
                    SEO для интернет-магазина оборудования начинается не со
                    статей и ссылок. Оно начинается с порядка в каталоге,
                    категориях, карточках, фильтрах и технической базе.
                  </p>

                  <p>
                    Если сайт не помогает выбрать товар, не показывает важные
                    условия и не доводит пользователя до заявки, поисковый трафик
                    будет работать слабо. Даже если позиции растут.
                  </p>

                  <p className="font-bold text-[#0B1220]">
                    Сначала структура, карточки, фильтры, микроразметка,
                    индексация и заявки. Потом — статьи, ссылки и масштабирование
                    семантики.
                  </p>
                </div>
              </section>

              <div className="mt-14 rounded-[32px] bg-[#0B1220] p-7 text-white sm:p-9">
                <p className="text-2xl font-bold leading-tight">
                  Хотите понять, почему SEO магазина не даёт заявок?
                </p>

                <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">
                  Сканлайт Маркетинг помогает B2B-компаниям навести порядок в
                  каталоге, карточках, SEO-структуре, заявках и аналитике.
                  Начинаем с диагностики — чтобы продвигать не хаос, а рабочий
                  интернет-магазин.
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