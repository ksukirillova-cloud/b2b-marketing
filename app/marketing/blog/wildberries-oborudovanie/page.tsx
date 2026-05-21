import type { Metadata } from 'next'
import Link from 'next/link'
import {
  IconArrowLeft,
  IconArrowRight,
  IconCheck,
  IconClock,
  IconPackage,
  IconTargetArrow,
  IconX,
  IconSearch,
  IconShoppingCart,
  IconChartBar,
  IconAd,
  IconTruckDelivery,
  IconStars,
} from '@tabler/icons-react'

export const metadata: Metadata = {
  title:
    'Продвижение на Wildberries для производителей оборудования | Сканлайт Маркетинг',
  description:
    'Как производителю оборудования продвигаться на Wildberries: карточка товара, SEO, фото, характеристики, цена, отзывы, реклама, логистика, юнит-экономика и аналитика.',
}

const toc = [
  { href: '#fit', title: 'Подходит ли WB оборудованию' },
  { href: '#economics', title: 'Юнит-экономика' },
  { href: '#card', title: 'Карточка товара' },
  { href: '#seo', title: 'SEO на Wildberries' },
  { href: '#visuals', title: 'Фото и инфографика' },
  { href: '#reviews', title: 'Отзывы и рейтинг' },
  { href: '#ads', title: 'Внутренняя реклама' },
  { href: '#analytics', title: 'Как считать результат' },
  { href: '#checklist', title: 'Чек-лист' },
]

const checklist = [
  'товар подходит для маркетплейса по цене, габаритам, спросу и логистике',
  'посчитана юнит-экономика с учётом комиссии, логистики, возвратов и рекламы',
  'карточка объясняет не только “что это”, но и “для какой задачи подходит”',
  'название, характеристики и описание собраны под реальные поисковые запросы',
  'фото и инфографика показывают комплектацию, размеры, сценарии применения и преимущества',
  'есть понятная работа с отзывами, вопросами и возражениями покупателей',
  'реклама оценивается не только по кликам, но и по заказам, выкупам и ДРР',
  'данные Wildberries связаны с общей логикой продаж: сайт, заявки, CRM, повторные покупки',
]

function MarketplaceVisual() {
  return (
    <figure className="my-10 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
      <div className="border-b border-slate-100 bg-slate-50 px-6 py-4">
        <p className="text-sm font-bold text-[#0B1220]">
          Логика продвижения оборудования на Wildberries
        </p>
      </div>

      <div className="grid gap-4 p-6 sm:grid-cols-4">
        {[
          ['Спрос', 'что ищут'],
          ['Карточка', 'почему купить'],
          ['Реклама', 'где усилить'],
          ['Экономика', 'что остаётся'],
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
        Для оборудования Wildberries — это не просто “выложить товар”. Нужно
        связать спрос, карточку, рекламу, логистику, отзывы и прибыльность.
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
          “Выставим оборудование и посмотрим”
        </p>

        <p className="mt-3 text-sm leading-6 text-red-800/75">
          Без расчёта экономики, нормальной карточки и понимания спроса
          маркетплейс быстро превращается в склад затрат.
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
          “Сначала проверим спрос и маржу”
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-700">
          Считаем цену, логистику, выкупы, рекламу, карточку, отзывы и только
          потом масштабируем продажи.
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
              Маркетплейсы
            </span>

            <span className="inline-flex items-center gap-2 text-sm font-medium text-white/50">
              <IconClock className="h-4 w-4" />
              11 минут
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Продвижение на Wildberries для производителей оборудования
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
            Wildberries может стать дополнительным каналом продаж для
            оборудования, комплектующих и товаров для бизнеса. Но только если
            заранее посчитать экономику и собрать карточку под реальный спрос.
          </p>

          <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#B6FF00]">
              Главная мысль
            </p>

            <p className="mt-3 max-w-3xl text-xl font-bold leading-8 text-white">
              На Wildberries побеждает не тот, кто просто загрузил товар, а тот,
              кто управляет карточкой, спросом, рекламой, отзывами и маржой.
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
                  Производителю оборудования не стоит начинать с рекламы. Сначала
                  нужно понять, подходит ли товар для маркетплейса, окупается ли
                  логистика и есть ли спрос внутри Wildberries.
                </p>
              </div>

              <div className="space-y-8 text-[17px] leading-8 text-slate-700">
                <p>
                  Wildberries давно перестал быть площадкой только для одежды,
                  косметики и мелких товаров. Покупатели ищут там технику,
                  комплектующие, расходники, оборудование для бизнеса, товары для
                  склада, офиса, ремонта, торговли и производства.
                </p>

                <p>
                  Но для производителя оборудования маркетплейс работает иначе,
                  чем для продавца футболок или свечей. Здесь выше цена ошибки:
                  габариты, логистика, гарантия, сложные характеристики, вопросы
                  перед покупкой, риск возвратов и необходимость объяснить, для
                  какой задачи подходит товар.
                </p>

                <p>
                  Поэтому продвижение на Wildberries нужно начинать не с
                  “загрузим карточку и дадим рекламу”, а с проверки продукта,
                  экономики, спроса и карточки.
                </p>
              </div>

              <section id="fit" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Не всё оборудование подходит для Wildberries
                </h2>

                <CompareBox />

                <div className="space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Первый вопрос — не “как продвинуться”, а “стоит ли вообще
                    выводить этот товар на маркетплейс”. Если оборудование
                    дорогое, тяжёлое, требует сложного подбора, монтажа,
                    настройки или консультации инженера, Wildberries может быть
                    не основным каналом, а только витриной или дополнительной
                    точкой касания.
                  </p>

                  <p>
                    Хорошо подходят товары, которые можно быстро понять по
                    карточке: комплектующие, расходные материалы, простые модели
                    оборудования, аксессуары, запчасти, готовые наборы, товары
                    для розницы, склада, офиса или малого бизнеса.
                  </p>

                  <p>
                    Сложные решения лучше дробить. Не “оборудование для
                    автоматизации склада” в целом, а понятные позиции: сканеры,
                    терминалы, расходники, крепления, кабели, принтеры этикеток,
                    комплектующие, готовые наборы для конкретного сценария.
                  </p>

                  <p className="rounded-2xl border-l-4 border-[#B6FF00] bg-slate-50 p-5 font-semibold text-[#0B1220]">
                    Если клиент не может понять товар без менеджера, карточка
                    должна работать как мини-консультация.
                  </p>
                </div>

                <MarketplaceVisual />
              </section>

              <section id="economics" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Сначала считайте юнит-экономику
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    На маркетплейсе легко увидеть оборот и не увидеть прибыль.
                    Производитель смотрит на заказы, но забывает учесть комиссию,
                    логистику, хранение, упаковку, возвраты, скидки, рекламу,
                    налоги, брак и поддержку покупателей.
                  </p>

                  <p>
                    Для оборудования это особенно важно. Габариты и вес могут
                    сильно влиять на расходы. Возврат крупного или сложного
                    товара может съесть маржу. А если товар требует консультации,
                    покупатели будут задавать вопросы, сравнивать, сомневаться и
                    возвращаться к карточке несколько раз.
                  </p>

                  <p>
                    До старта нужно понять минимальную цену продажи, допустимую
                    скидку, предельную долю рекламных расходов, маржу после всех
                    удержаний и точку, где продвижение перестаёт быть выгодным.
                  </p>

                  <p className="rounded-2xl border-l-4 border-[#EA4922] bg-orange-50 p-5 font-semibold text-[#0B1220]">
                    Если экономика не сходится без рекламы, реклама почти всегда
                    только ускорит убыток.
                  </p>
                </div>
              </section>

              <section id="card" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Карточка товара должна объяснять задачу
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    У карточки оборудования другая задача, чем у карточки
                    простого товара. Покупателю нужно не просто увидеть фото и
                    цену. Ему нужно понять, подходит ли товар под его задачу,
                    совместим ли с текущей системой, какие есть ограничения, что
                    входит в комплект и что делать после покупки.
                  </p>

                  <p>
                    Название должно быть понятным: тип товара, ключевая
                    характеристика, модель, назначение. Не стоит перегружать его
                    случайными словами. Лучше собрать формулировку так, чтобы она
                    совпадала с реальным поисковым спросом и не выглядела
                    мусорно.
                  </p>

                  <p>
                    Описание должно отвечать на вопросы покупателя: для кого
                    товар, где применяется, какие задачи закрывает, чем отличается
                    от похожих моделей, что нужно проверить перед покупкой, какие
                    характеристики критичны.
                  </p>

                  <p>
                    Для оборудования особенно важны характеристики. Если человек
                    выбирает принтер, сканер, терминал, устройство для склада или
                    комплектующую, ему нужны точные параметры. Чем меньше
                    конкретики, тем выше риск вопроса, отказа или возврата.
                  </p>
                </div>

                <div className="mt-8 rounded-[24px] bg-[#0B1220] p-6 text-white">
                  <div className="mb-4 flex items-center gap-3">
                    <IconPackage className="h-6 w-6 text-[#B6FF00]" />
                    <p className="font-bold">Важно</p>
                  </div>

                  <p className="text-base leading-7 text-white/70">
                    Карточка оборудования должна заменять часть консультации:
                    объяснять совместимость, сценарии применения, комплектацию,
                    ограничения и следующий шаг.
                  </p>
                </div>
              </section>

              <section id="seo" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  SEO на Wildberries: работайте с запросами, а не с набором слов
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    SEO на Wildberries начинается с понимания, как покупатель
                    ищет товар. Не всегда он вводит точное название модели.
                    Иногда ищет по задаче: “сканер штрихкода для склада”,
                    “принтер этикеток для маркетплейса”, “терминал сбора данных”,
                    “касса для магазина”.
                  </p>

                  <p>
                    Нужно собрать не только высокочастотные запросы, но и
                    низкочастотные: модели, назначение, тип бизнеса,
                    совместимость, характеристики, сценарии применения. Для
                    оборудования именно такие запросы часто ближе к покупке.
                  </p>

                  <p>
                    Важно не превращать карточку в набор ключевых слов. Текст
                    должен оставаться человеческим. Поисковые фразы нужны для
                    поиска, но решение принимает покупатель. Если карточка
                    выглядит как SEO-мусор, доверия не будет.
                  </p>

                  <p>
                    В рекламном кабинете Wildberries появились инструменты для
                    работы с поисковыми кластерами: можно анализировать данные,
                    управлять ставками и исключать неподходящие кластеры. Это
                    помогает точнее работать со спросом, а не просто увеличивать
                    бюджет.
                  </p>
                </div>
              </section>

              <section id="visuals" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Фото и инфографика должны снимать вопросы
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Для оборудования фото “товар на белом фоне” часто
                    недостаточно. Покупатель хочет понять размер, комплектацию,
                    разъёмы, элементы управления, материалы, совместимость и
                    сценарий использования.
                  </p>

                  <p>
                    На изображениях стоит показать товар с разных сторон,
                    крупные детали, размеры, комплектацию, преимущества,
                    примеры применения и важные ограничения. Если есть риск
                    неправильного выбора, лучше предупредить об этом прямо в
                    инфографике.
                  </p>

                  <p>
                    Хорошая инфографика не украшает карточку. Она помогает
                    быстрее принять решение. Например: “подходит для склада”,
                    “работает с такими-то форматами”, “в комплекте”, “проверьте
                    совместимость перед заказом”.
                  </p>

                  <p className="rounded-2xl border-l-4 border-[#B6FF00] bg-slate-50 p-5 font-semibold text-[#0B1220]">
                    Чем сложнее товар, тем больше карточка должна объяснять
                    визуально.
                  </p>
                </div>
              </section>

              <section id="reviews" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Отзывы и вопросы — часть продвижения
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Для оборудования отзывы важны не меньше, чем цена. Покупатель
                    хочет понять, работает ли товар в реальных условиях, не
                    ломается ли, хватает ли комплектации, понятна ли инструкция,
                    быстро ли решаются проблемы.
                  </p>

                  <p>
                    На вопросы нужно отвечать быстро и конкретно. Если человек
                    спрашивает про совместимость, не отвечайте “уточните у
                    производителя”. Дайте понятный ответ или объясните, какие
                    данные нужно проверить.
                  </p>

                  <p>
                    Негативные отзывы тоже нужно обрабатывать. Иногда проблема в
                    товаре. Иногда — в ожиданиях покупателя. Иногда карточка
                    плохо объяснила ограничения. В любом случае отзыв показывает,
                    что нужно исправить: описание, фото, комплектацию,
                    инструкцию, упаковку или контроль качества.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {[
                    {
                      icon: IconStars,
                      title: 'Отзывы',
                      text: 'Показывают, что реально важно покупателю после покупки.',
                    },
                    {
                      icon: IconSearch,
                      title: 'Вопросы',
                      text: 'Подсказывают, чего не хватает в карточке.',
                    },
                    {
                      icon: IconTruckDelivery,
                      title: 'Возвраты',
                      text: 'Помогают найти ошибки в описании, упаковке и ожиданиях.',
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
                  Внутренняя реклама: сначала карточка, потом бюджет
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    На Wildberries есть разные рекламные инструменты: продвижение
                    в поиске и каталоге, кампании с оплатой за клики, медийные
                    форматы, продвижение через контент и другие возможности. Но
                    реклама не спасает слабую карточку.
                  </p>

                  <p>
                    Если у товара плохие фото, непонятное название, слабое
                    описание, мало характеристик, нет отзывов и не сходится цена,
                    реклама просто быстрее приведёт людей в неубедительную
                    карточку.
                  </p>

                  <p>
                    Для оборудования лучше запускать продвижение поэтапно. Сначала
                    проверить карточку и спрос. Затем дать небольшой тестовый
                    бюджет. После этого смотреть не только клики, но и заказы,
                    добавления в корзину, выкупы, ДРР, CPO и маржу после всех
                    расходов.
                  </p>

                  <p>
                    CPC-кампании на Wildberries работают в поиске и каталоге, а
                    списание происходит за действия внутри продвижения: переход в
                    карточку, быстрый просмотр, добавление в корзину или
                    избранное. Это не отменяет анализа качества трафика: клик
                    полезен только тогда, когда дальше есть заказ и прибыль.
                  </p>

                  <p className="rounded-2xl border-l-4 border-[#EA4922] bg-orange-50 p-5 font-semibold text-[#0B1220]">
                    Реклама должна усиливать рабочую карточку. Не компенсировать
                    ошибки в продукте, цене, фото и описании.
                  </p>
                </div>

                <div className="mt-8 rounded-[24px] bg-[#0B1220] p-6 text-white">
                  <div className="mb-4 flex items-center gap-3">
                    <IconAd className="h-6 w-6 text-[#B6FF00]" />
                    <p className="font-bold">Важно</p>
                  </div>

                  <p className="text-base leading-7 text-white/70">
                    Для производителя оборудования реклама на WB должна
                    оцениваться через прибыльность: расходы на продвижение,
                    заказы, выкупы, возвраты, маржу и повторные покупки.
                  </p>
                </div>
              </section>

              <section id="analytics" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Как считать результат продвижения
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Ошибка — смотреть только на оборот. Оборот может расти, а
                    прибыль — падать. Особенно если товар продвигается через
                    скидки и рекламу, а логистика и возвраты съедают маржу.
                  </p>

                  <p>
                    Смотрите на показы, клики, CTR, конверсию в корзину, заказы,
                    выкуп, возвраты, ДРР, CPO, маржу, остатки, скорость продаж и
                    влияние отзывов. Отдельно анализируйте, какие запросы и
                    кластеры дают реальные заказы, а какие просто тратят бюджет.
                  </p>

                  <p>
                    Если Wildberries используется как дополнительный канал, важно
                    связать его с общей системой продаж. Например, покупатель
                    увидел товар на WB, потом перешёл на сайт, позвонил в офис,
                    запросил КП или купил расходники повторно. Эти касания тоже
                    нужно учитывать.
                  </p>

                  <p className="rounded-2xl border-l-4 border-[#B6FF00] bg-slate-50 p-5 font-semibold text-[#0B1220]">
                    Продвижение на WB нужно считать не по принципу “продажи
                    есть”, а по принципу “после всех расходов это выгодно”.
                  </p>
                </div>

                <div className="mt-8 rounded-[24px] bg-[#0B1220] p-6 text-white">
                  <div className="mb-4 flex items-center gap-3">
                    <IconChartBar className="h-6 w-6 text-[#B6FF00]" />
                    <p className="font-bold">Что считать</p>
                  </div>

                  <p className="text-base leading-7 text-white/70">
                    Минимальный набор: заказы, выкупы, возвраты, ДРР, CPO,
                    маржа, остатки, отзывы, позиции по запросам и влияние рекламы
                    на органику.
                  </p>
                </div>
              </section>

              <section className="mt-14">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Что делать производителю в первый месяц
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-slate-700">
                  <p>
                    Начните с выбора товарной группы. Не выводите весь каталог
                    сразу. Выберите 5–20 позиций, у которых понятный спрос,
                    нормальная маржа, адекватная логистика и карточка может
                    объяснить товар без длинной консультации.
                  </p>

                  <p>
                    Затем посчитайте экономику и подготовьте карточки:
                    названия, характеристики, фото, инфографику, описание,
                    комплектацию, ответы на частые вопросы и сценарии применения.
                  </p>

                  <p>
                    После публикации не включайте большой бюджет сразу. Сначала
                    соберите первые данные: показы, клики, корзины, заказы,
                    вопросы, отзывы, возвраты. Только после этого принимайте
                    решение, что усиливать, что перепаковывать, а что снимать с
                    продвижения.
                  </p>
                </div>
              </section>

              <section id="checklist" className="mt-14 scroll-mt-28">
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#0B1220]">
                  Короткий чек-лист продвижения оборудования на Wildberries
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
                    Wildberries может быть полезным каналом для производителя
                    оборудования, но не для любого товара и не при любой
                    экономике. Здесь нельзя просто загрузить карточку и ждать
                    продаж.
                  </p>

                  <p>
                    Нужно выбрать подходящие позиции, посчитать маржу, собрать
                    карточку под спрос, показать товар визуально, ответить на
                    вопросы покупателя, контролировать отзывы и аккуратно
                    запускать рекламу.
                  </p>

                  <p className="font-bold text-[#0B1220]">
                    Продвижение на Wildberries работает, когда карточка,
                    реклама, логистика, отзывы и экономика собраны в одну
                    систему.
                  </p>
                </div>
              </section>

              <div className="mt-14 rounded-[32px] bg-[#0B1220] p-7 text-white sm:p-9">
                <p className="text-2xl font-bold leading-tight">
                  Хотите понять, подходит ли ваш товар для Wildberries?
                </p>

                <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">
                  Сканлайт Маркетинг помогает B2B-компаниям и производителям
                  оборудования оценить маркетплейс, собрать карточки, проверить
                  спрос, рекламу и экономику — до того, как бюджет уйдёт в тесты
                  вслепую.
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