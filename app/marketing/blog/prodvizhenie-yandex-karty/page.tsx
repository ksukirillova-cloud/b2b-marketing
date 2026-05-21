import type { Metadata } from 'next'
import Link from 'next/link'
import {
  IconArrowLeft,
  IconArrowRight,
  IconCheck,
  IconClock,
  IconMapPin,
  IconStar,
  IconCamera,
  IconPhone,
  IconRoute,
  IconTargetArrow,
  IconX,
  IconSearch,
} from '@tabler/icons-react'

export const metadata: Metadata = {
  title:
    'Как продвигать компанию в Яндекс Картах: полное руководство | Сканлайт Маркетинг',
  description:
    'Как продвигать компанию в Яндекс Картах: карточка организации, Яндекс Бизнес, отзывы, рейтинг, фото, услуги, товары, локальное SEO и заявки.',
}

const toc = [
  { href: '#why', title: 'Зачем бизнесу Яндекс Карты' },
  { href: '#profile', title: 'Карточка организации' },
  { href: '#categories', title: 'Рубрики и услуги' },
  { href: '#photos', title: 'Фото и товары' },
  { href: '#reviews', title: 'Отзывы и рейтинг' },
  { href: '#local-seo', title: 'Локальное SEO' },
  { href: '#ads', title: 'Платное продвижение' },
  { href: '#analytics', title: 'Как считать результат' },
  { href: '#checklist', title: 'Чек-лист' },
]

const checklist = [
  'карточка подтверждена в Яндекс Бизнесе',
  'название, адрес, телефон, сайт и режим работы заполнены без ошибок',
  'выбраны точные рубрики, а не “что-то похожее”',
  'добавлены услуги, товары, цены или понятный способ запросить стоимость',
  'загружены реальные фото офиса, склада, шоурума, витрины, товара или команды',
  'на отзывы отвечают регулярно, спокойно и по делу',
  'заявки, звонки и переходы из Карт размечаются и попадают в аналитику',
  'карточка обновляется при изменении графика, адреса, ассортимента или условий',
]

function MapsVisual() {
  return (
    <figure className="my-10 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
      <div className="border-b border-slate-100 bg-slate-50 px-6 py-4">
        <p className="text-sm font-bold text-[#0B1220]">
          Что влияет на решение клиента в Картах
        </p>
      </div>

      <div className="grid gap-4 p-6 sm:grid-cols-4">
        {[
          ['Рейтинг', 'виден сразу'],
          ['Отзывы', 'снимают риск'],
          ['Фото', 'доказывают реальность'],
          ['Маршрут', 'ведёт к контакту'],
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
        Карточка в Яндекс Картах работает как мини-сайт: клиент видит адрес,
        телефон, рейтинг, отзывы, фото, услуги и решает, обращаться или нет.
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
          “Добавили адрес — и хватит”
        </p>

        <p className="mt-3 text-sm leading-6 text-red-800/75">
          Пустая карточка не продаёт. Без фото, услуг, отзывов и актуальных
          данных клиент видит компанию, но не понимает, почему выбрать именно её.
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
          “Карточка должна довести до обращения”
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-700">
          Заполненная карточка помогает клиенту быстро проверить компанию,
          выбрать услугу, позвонить, построить маршрут или перейти на сайт.
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
              Локальное SEO
            </span>

            <span className="inline-flex items-center gap-2 text-sm font-medium text-white/50">
              <IconClock className="h-4 w-4" />
              12 минут
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Как продвигать компанию в Яндекс Картах: полное руководство
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
            Яндекс Карты — это не просто адрес компании. Для многих клиентов это
            первая проверка: существует ли бизнес, можно ли ему доверять и стоит
            ли обращаться.
          </p>

          <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#B6FF00]">
              Главная мысль
            </p>

            <p className="mt-3 max-w-3xl text-xl font-bold leading-8 text-white">
              Карточка в Яндекс Картах должна не просто “быть”. Она должна
              помогать клиенту выбрать вас: увидеть услуги, фото, отзывы, график,
              контакты и следующий шаг.
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
                  Продвижение в Яндекс Картах начинается не с рекламы, а с
                  нормальной карточки: рубрики, услуги, фото, отзывы, актуальные
                  контакты и понятный путь к заявке.
                </p>
              </div>

              <div className="space-y-8 text-[17px] leading-8 text-slate-700">
                <p>
                  Яндекс Карты часто воспринимают как справочник: добавили адрес,
                  телефон, график — и забыли. Для бизнеса это слабый подход.
                  Карточка компании в Картах может работать как точка входа в
                  продажи.
                </p>

                <p>
                  Клиент ищет не “карточку организации”. Он ищет, где купить,
                  заказать, отремонтировать, получить консультацию, построить
                  маршрут или быстро проверить компанию перед обращением.
                </p>

                <p>
                  Поэтому продвижение в Яндекс Картах — это не один раз
                  заполнить профиль. Это регулярная работа с карточкой: данные,
                  рубрики, услуги, товары, фото, отзывы, рейтинг, переходы,
                  звонки и заявки.
                </p>
              </div>

              <section id="why" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Зачем бизнесу Яндекс Карты
                </h2>

                <CompareBox />

                <div className="space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Карты нужны не только кафе, салонам и магазинам у дома. Они
                    важны для B2B-компаний, дилеров оборудования, сервисных
                    центров, складов, шоурумов, пунктов выдачи, офисов продаж и
                    компаний, которые работают с локальным спросом.
                  </p>

                  <p>
                    Клиент может искать поставщика рядом, проверять адрес перед
                    визитом, сравнивать рейтинг, читать отзывы, смотреть фото
                    склада или офиса, строить маршрут и звонить прямо из
                    карточки.
                  </p>

                  <p>
                    Если карточка пустая, старая или выглядит недостоверно,
                    компания теряет доверие ещё до сайта. Человек просто выбирает
                    конкурента, у которого всё понятно: что продают, где
                    находятся, как работают и что говорят клиенты.
                  </p>

                  <p className="rounded-2xl border-l-4 border-[#B6FF00] bg-slate-50 p-5 font-semibold text-[#0B1220]">
                    Карточка в Картах — это не “адрес в справочнике”. Это
                    маленькая посадочная страница внутри экосистемы Яндекса.
                  </p>
                </div>

                <MapsVisual />
              </section>

              <section id="profile" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Сначала приведите в порядок карточку организации
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    База — это подтверждённый профиль в Яндекс Бизнесе. Без него
                    компания хуже контролирует, что видят пользователи: название,
                    адрес, телефон, сайт, режим работы, рубрики, фото, отзывы и
                    другие данные.
                  </p>

                  <p>
                    Проверьте название. Оно должно быть понятным и совпадать с
                    реальным брендом. Не стоит забивать название ключевыми
                    словами: “магазин касс купить онлайн-кассу сервис ремонт”.
                    Это выглядит плохо и может вызывать недоверие.
                  </p>

                  <p>
                    Проверьте адрес, телефон, сайт и график. Особенно перед
                    праздниками, переездами, изменением режима работы и сезонными
                    изменениями. Ошибка в графике — простой способ получить
                    негативный отзыв.
                  </p>

                  <p>
                    Описание тоже важно. Не надо писать “динамично развивающаяся
                    компания”. Напишите, чем занимаетесь, кому помогаете, какие
                    задачи закрываете и что клиент может сделать после контакта:
                    купить, заказать, получить подбор, вызвать специалиста,
                    приехать в офис или запросить КП.
                  </p>
                </div>
              </section>

              <section id="categories" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Рубрики и услуги: не выбирайте “примерно”
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Рубрики помогают Яндексу понять, к каким запросам относится
                    компания. Если выбрать слишком общую или неточную рубрику,
                    карточка может хуже попадать в нужные сценарии поиска.
                  </p>

                  <p>
                    Для компании с оборудованием важно разделить, что именно вы
                    делаете: продажа, сервис, ремонт, аренда, установка,
                    настройка, консультация, поставка, интеграция. Если всё
                    спрятано в одном общем описании, пользователь не видит нужной
                    услуги.
                  </p>

                  <p>
                    Услуги лучше заполнять конкретно. Не “работаем с бизнесом”,
                    а “подбор кассового оборудования”, “настройка онлайн-кассы”,
                    “автоматизация магазина”, “сервисное обслуживание”,
                    “подключение маркировки”, “поставка оборудования для
                    склада”.
                  </p>

                  <p className="rounded-2xl border-l-4 border-[#B6FF00] bg-slate-50 p-5 font-semibold text-[#0B1220]">
                    Клиент не должен угадывать, занимаетесь ли вы его задачей.
                    Он должен увидеть это в карточке.
                  </p>
                </div>
              </section>

              <section id="photos" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Фото, товары и витрина: докажите, что бизнес живой
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Фото в карточке — это быстрый сигнал доверия. Особенно если
                    клиент ещё не знает компанию. Реальные фото офиса, склада,
                    шоурума, витрины, вывески, команды, товаров и рабочих
                    процессов выглядят сильнее, чем случайные стоки.
                  </p>

                  <p>
                    Для B2B и оборудования фото особенно важны. Они показывают,
                    что компания действительно работает с товаром, а не просто
                    собирает заявки. Если есть склад, пункт выдачи, сервисная
                    зона или демонстрационный зал — покажите это.
                  </p>

                  <p>
                    Если в вашей категории можно добавить товары или услуги,
                    заполните их. Укажите названия, краткие описания, цены или
                    способ уточнить стоимость. Когда у клиента есть выбор между
                    пустой карточкой и карточкой с понятной витриной, вторая
                    выигрывает.
                  </p>
                </div>

                <div className="mt-8 rounded-[24px] bg-[#0B1220] p-6 text-white">
                  <div className="mb-4 flex items-center gap-3">
                    <IconCamera className="h-6 w-6 text-[#B6FF00]" />
                    <p className="font-bold">Важно</p>
                  </div>

                  <p className="text-base leading-7 text-white/70">
                    Фото должны помогать выбрать компанию. Если изображение не
                    отвечает на вопрос “кто вы и можно ли вам доверять”, оно не
                    работает.
                  </p>
                </div>
              </section>

              <section id="reviews" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Отзывы и рейтинг: отвечайте, а не прячьтесь
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Отзывы в Яндекс Картах влияют не только на рейтинг. Они
                    влияют на решение клиента. Человек смотрит не только оценку,
                    но и содержание: что хвалят, на что жалуются, как компания
                    отвечает и решает проблемы.
                  </p>

                  <p>
                    Нельзя отвечать только на хорошие отзывы. Негатив тоже нужен
                    в работе. Спокойный ответ показывает, что компания не
                    скрывается. Признайте факт, если ошибка была. Объясните, что
                    сделали. Предложите связаться, если нужно разобраться.
                  </p>

                  <p>
                    Просить отзывы можно, но не надо делать это грубо. Лучший
                    момент — после успешной покупки, завершённого сервиса,
                    доставки, установки или консультации. Дайте клиенту прямую
                    ссылку на карточку и коротко попросите описать реальный опыт.
                  </p>

                  <p className="rounded-2xl border-l-4 border-[#EA4922] bg-orange-50 p-5 font-semibold text-[#0B1220]">
                    Накрученные отзывы — плохая идея. Они могут выглядеть
                    одинаково, не давать доверия и создавать риск для репутации.
                  </p>
                </div>
              </section>

              <section id="local-seo" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Локальное SEO: карточка должна совпадать с сайтом
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Продвижение в Яндекс Картах не живёт отдельно от сайта.
                    Проверьте, чтобы название компании, адрес, телефон, график,
                    услуги и направления совпадали на сайте, в карточке и в
                    других публичных источниках.
                  </p>

                  <p>
                    Если на сайте одно, в Картах другое, а в каталогах третье,
                    это создаёт путаницу. Клиент не понимает, актуальна ли
                    информация. Поисковым системам тоже сложнее сопоставлять
                    данные.
                  </p>

                  <p>
                    Для локального SEO полезны страницы под города, районы,
                    офисы, склады, пункты выдачи и сервисные зоны. Но только если
                    они честные. Не нужно создавать десятки пустых страниц “мы в
                    каждом городе”, если там нет реального присутствия или
                    понятного сценария обслуживания.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {[
                    {
                      icon: IconMapPin,
                      title: 'Адрес',
                      text: 'Должен совпадать в Картах, на сайте и в других источниках.',
                    },
                    {
                      icon: IconPhone,
                      title: 'Телефон',
                      text: 'Лучше использовать номер, по которому реально отвечают.',
                    },
                    {
                      icon: IconSearch,
                      title: 'Услуги',
                      text: 'Формулируйте так, как клиент ищет задачу.',
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

              <section id="ads" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Платное продвижение: сначала карточка, потом реклама
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    В Яндекс Картах можно усиливать видимость платными
                    инструментами. Но реклама не спасёт пустую карточку. Если
                    нет фото, услуг, отзывов, актуального графика и понятного
                    предложения, вы просто платно приведёте людей в слабую точку
                    контакта.
                  </p>

                  <p>
                    Перед платным продвижением проверьте базу: карточка
                    заполнена, рубрики выбраны, отзывы обработаны, фото реальные,
                    сайт открывается, телефон работает, менеджеры понимают, что
                    делать с обращениями из Карт.
                  </p>

                  <p>
                    Для B2B важно не гнаться за видимостью любой ценой. Важно
                    понять, какие действия из Карт полезны: звонки, переходы на
                    сайт, построение маршрута, заявки, запросы консультации,
                    визиты в офис или шоурум.
                  </p>
                </div>
              </section>

              <section id="analytics" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Как считать результат продвижения в Картах
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Ошибка — считать только просмотры карточки. Просмотры
                    показывают интерес, но не показывают бизнес-результат.
                  </p>

                  <p>
                    Смотрите глубже: звонки, переходы на сайт, построение
                    маршрутов, клики по кнопкам, заявки, обращения в мессенджеры,
                    визиты в офис, заявки в CRM и продажи. Для сайта можно
                    использовать UTM-метки, отдельные посадочные страницы или
                    отдельный номер для отслеживания.
                  </p>

                  <p>
                    Если Карты дают обращения, но они не доходят до продаж,
                    проблема может быть не в карточке. Возможно, менеджеры долго
                    отвечают, не фиксируют источник, теряют заявки или не
                    понимают, как обрабатывать такие обращения.
                  </p>

                  <p className="rounded-2xl border-l-4 border-[#B6FF00] bg-slate-50 p-5 font-semibold text-[#0B1220]">
                    Продвижение в Картах нужно оценивать не только по
                    видимости, а по действиям клиента и дальнейшему пути заявки.
                  </p>
                </div>

                <div className="mt-8 rounded-[24px] bg-[#0B1220] p-6 text-white">
                  <div className="mb-4 flex items-center gap-3">
                    <IconRoute className="h-6 w-6 text-[#B6FF00]" />
                    <p className="font-bold">Что считать</p>
                  </div>

                  <p className="text-base leading-7 text-white/70">
                    Просмотры карточки — это верх воронки. Бизнесу важнее:
                    звонки, маршруты, переходы на сайт, заявки, визиты, CRM и
                    сделки.
                  </p>
                </div>
              </section>

              <section className="mt-14">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Что делать в первую неделю
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Начните с аудита карточки. Проверьте название, адрес,
                    телефон, сайт, график, рубрики, описание, услуги, фото и
                    отзывы. Исправьте всё, что может мешать клиенту обратиться.
                  </p>

                  <p>
                    Затем сравните карточку с сайтом. Данные должны совпадать.
                    Если в Картах один телефон, на сайте другой, а в рекламе
                    третий, вы сами создаёте хаос в аналитике.
                  </p>

                  <p>
                    После этого соберите список действий на месяц: добавить фото,
                    описать услуги, заполнить товары, ответить на отзывы,
                    настроить отслеживание переходов, подготовить ссылку для
                    сбора отзывов и проверить, как менеджеры обрабатывают
                    обращения.
                  </p>
                </div>
              </section>

              <section id="checklist" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Короткий чек-лист продвижения в Яндекс Картах
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
                    Продвижение компании в Яндекс Картах начинается не с
                    “поднять карточку выше”. Сначала нужно сделать карточку
                    понятной, живой и полезной для клиента.
                  </p>

                  <p>
                    Заполните профиль, выберите точные рубрики, добавьте услуги,
                    товары, фото, актуальные контакты и график. Работайте с
                    отзывами. Свяжите переходы, звонки и заявки с аналитикой.
                  </p>

                  <p className="font-bold text-[#0B1220]">
                    Карты дают результат, когда карточка не просто отображается,
                    а помогает клиенту выбрать компанию и сделать следующий шаг.
                  </p>
                </div>
              </section>

              <div className="mt-14 rounded-[32px] bg-[#0B1220] p-7 text-white sm:p-9">
                <p className="text-2xl font-bold leading-tight">
                  Хотите понять, почему карточка в Картах не даёт заявок?
                </p>

                <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">
                  Сканлайт Маркетинг помогает B2B-компаниям навести порядок в
                  Яндекс Картах, сайте, заявках и аналитике. Начинаем с
                  диагностики — чтобы карточка работала не “для галочки”, а как
                  точка входа в продажи.
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