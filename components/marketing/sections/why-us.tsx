"use client"

const reasons = [
  {
    number: "01",
    title: "Рынок знаком изнутри",
    text: "Не нужно 2 месяца объяснять, чем розница отличается от опта, почему кассы покупают не «по настроению» и как работает B2B-продажа оборудования.",
    fact: "15 лет в сфере",
  },
  {
    number: "02",
    title: "AI ускоряет, человек отвечает",
    text: "Нейросети помогают быстрее собирать тексты, SEO-структуры, объявления, прототипы и аналитику. Но финальная логика, смыслы и проверка — за маркетологом с опытом.",
    fact: "в 2–3 раза быстрее",
  },
  {
    number: "03",
    title: "Без раздутого штата",
    text: "У вас нет цепочки «менеджер → аккаунт → стратег → исполнитель». Вы общаетесь с теми, кто реально делает работу и отвечает за результат.",
    fact: "без агентского оверхеда",
  },
]

const aiTools = ["ChatGPT", "Claude", "Perplexity", "Gemini", "Midjourney"]

export function WhyUsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F4EF] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center lg:mb-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#0B1220]">
            Не классическое агентство
          </p>

          <h2 className="text-4xl font-bold text-[#0B1220] sm:text-5xl lg:text-6xl">
            Три отличия от агентства
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            Не раздуваем проект, не учимся на вашей нише и не продаём красивые
            отчёты вместо заявок.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-[32px] bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(15,23,42,0.14)] lg:p-8"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#B6FF00]/20 blur-3xl transition duration-300 group-hover:bg-[#B6FF00]/35" />

              <div className="relative mb-8 flex items-start justify-between gap-5">
                <span className="text-7xl font-bold leading-none text-[#0B1220]">
                  {reason.number}
                </span>

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0B1220] text-white shadow-[0_16px_35px_rgba(15,23,42,0.25)]">
                  <span className="text-2xl font-bold">↗</span>
                </div>
              </div>

              <h3 className="relative mb-4 text-2xl font-bold leading-tight text-[#0B1220]">
                {reason.title}
              </h3>

              <p className="relative text-[15px] leading-7 text-slate-600">
                {reason.text}
              </p>

              <div className="relative mt-auto pt-8">
                <div className="flex h-[92px] items-center rounded-[24px] bg-[#B6FF00] px-5 shadow-[0_18px_40px_rgba(182,255,0,0.22)]">
                  <p className="text-lg font-bold leading-tight text-[#0B1220] sm:text-xl">
                    {reason.fact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-[28px] bg-white py-4 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent" />

            <div className="flex w-max items-center gap-4 why-us-marquee">
              {[...aiTools, ...aiTools, ...aiTools, ...aiTools].map(
                (tool, index) => (
                  <span
                    key={`${tool}-${index}`}
                    className="inline-flex items-center gap-3 rounded-full bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-500"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#B6FF00]" />
                    {tool}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes whyUsMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }

        .why-us-marquee {
          animation: whyUsMarquee 26s linear infinite;
        }
      `}</style>
    </section>
  )
}