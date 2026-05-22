'use client'

import { AnimatedCounter, StaggeredContainer, StaggeredItem } from '../animations'

const stats = [
  {
    value: 11,
    suffix: ' лет',
    label: 'в маркетинге B2B и розницы',
  },
  {
    value: 15,
    suffix: ' лет',
    label: 'в B2B-продажах и торговом оборудовании',
  },
  {
    value: 2,
    suffix: '×',
    label: 'быстрее за счёт AI-инструментов',
  },
  {
    value: 0,
    suffix: ' звеньев',
    label: 'между вами и теми, кто делает работу',
  },
]

export function StatsSection() {
  return (
    <section className="relative bg-[var(--marketing-dark)] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggeredContainer
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          delay={0.1}
        >
          {stats.map((stat, i) => (
            <StaggeredItem key={i}>
              <div className="text-center lg:text-left">
                <div className="text-4xl lg:text-5xl font-black tracking-tight text-[var(--marketing-accent)] mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                <p className="text-white/50 text-sm lg:text-base">
                  {stat.label}
                </p>
              </div>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  )
}