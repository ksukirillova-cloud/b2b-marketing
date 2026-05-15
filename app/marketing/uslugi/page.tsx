'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  IconStethoscope, 
  IconMap2, 
  IconDeviceLaptop, 
  IconPackage, 
  IconAd2, 
  IconMapPin, 
  IconPencil, 
  IconMail,
  IconArrowRight,
  IconCircleNumber1,
  IconCircleNumber2,
  IconCircleNumber3,
  IconCircleNumber4,
  IconCircleNumber5,
  IconSparkles
} from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { GradientMeshBackground, StaggeredContainer, StaggeredItem, GlassCard, WaveDivider, DiagonalDivider } from '@/components/marketing/animations'

const oneTimeServices = [
  {
    icon: IconStethoscope,
    name: 'Диагностика маркетинга',
    description: 'Полный аудит текущего маркетинга: что работает, что нет, где теряете клиентов',
    price: 'от 25 000 ₽',
    aiPill: true,
  },
  {
    icon: IconMap2,
    name: 'Стратегия продвижения',
    description: 'Детальный план действий на 6-12 месяцев с конкретными шагами и KPI',
    price: 'от 45 000 ₽',
    aiPill: true,
  },
  {
    icon: IconDeviceLaptop,
    name: 'Сайт или лендинг',
    description: 'Разработка сайта, заточенного под конверсию. От структуры до запуска',
    price: 'от 80 000 ₽',
    aiPill: false,
  },
  {
    icon: IconPackage,
    name: 'Карточки маркетплейсов',
    description: 'Оптимизация карточек для Wildberries, Ozon, Яндекс.Маркет',
    price: 'от 15 000 ₽',
    aiPill: true,
  },
]

const monthlyServices = [
  {
    icon: IconAd2,
    name: 'Яндекс Директ',
    description: 'Настройка, ведение и оптимизация контекстной рекламы. Еженедельная отчётность',
    price: 'от 35 000 ₽/мес',
    aiPill: true,
  },
  {
    icon: IconMapPin,
    name: 'Геореклама',
    description: 'Яндекс Карты, 2ГИС, Google Maps. Привлечение клиентов из вашего района',
    price: 'от 20 000 ₽/мес',
    aiPill: false,
  },
  {
    icon: IconPencil,
    name: 'Контент и соцсети',
    description: 'Ведение Telegram, ВКонтакте. Контент-план, посты, визуал',
    price: 'от 30 000 ₽/мес',
    aiPill: true,
  },
  {
    icon: IconMail,
    name: 'Email и WhatsApp-рассылки',
    description: 'Сегментация базы, создание цепочек писем, A/B тесты',
    price: 'от 25 000 ₽/мес',
    aiPill: true,
  },
]

const processSteps = [
  {
    icon: IconCircleNumber1,
    title: 'Знакомство',
    description: 'Бесплатная 30-минутная встреча. Разбираемся в вашей ситуации и задачах.',
  },
  {
    icon: IconCircleNumber2,
    title: 'Диагностика',
    description: 'Анализируем текущий маркетинг, конкурентов, находим точки роста.',
  },
  {
    icon: IconCircleNumber3,
    title: 'Стратегия',
    description: 'Формируем план действий с конкретными шагами и сроками.',
  },
  {
    icon: IconCircleNumber4,
    title: 'Реализация',
    description: 'Запускаем работу. Вы видите прогресс в реальном времени.',
  },
  {
    icon: IconCircleNumber5,
    title: 'Результат',
    description: 'Анализируем результаты, масштабируем то, что работает.',
  },
]

export default function UslugiPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[var(--marketing-dark)] pt-28 lg:pt-36 pb-20 lg:pb-32 overflow-hidden">
        <GradientMeshBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Что мы делаем — и почему это работает
            </h1>
            <p className="text-lg lg:text-xl text-white/60 leading-relaxed">
              Разовые проекты и ежемесячное сопровождение для розницы, складов и B2B
            </p>
          </motion.div>
        </div>

        <WaveDivider darkToLight={true} />
      </section>

      {/* One-time Services */}
      <section className="relative bg-[var(--marketing-light)] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Разовые услуги</h2>
            <p className="text-gray-600">Проекты с фиксированным результатом и стоимостью</p>
          </motion.div>

          <StaggeredContainer className="grid sm:grid-cols-2 gap-6" delay={0.1}>
            {oneTimeServices.map((service, i) => (
              <StaggeredItem key={i}>
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg shadow-black/5 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[var(--marketing-accent-light)]/10">
                      <service.icon className="w-6 h-6 text-[var(--marketing-accent-light)]" />
                    </div>
                    {service.aiPill && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-medium">
                        <IconSparkles className="w-3 h-3" />
                        AI
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <p className="text-[var(--marketing-accent-light)] font-semibold">{service.price}</p>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>

        <WaveDivider darkToLight={false} />
      </section>

      {/* Monthly Services */}
      <section className="relative bg-[var(--marketing-dark)] py-20 lg:py-32 overflow-hidden">
        <GradientMeshBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ежемесячное сопровождение</h2>
            <p className="text-white/60">Системная работа с регулярной отчётностью</p>
          </motion.div>

          <StaggeredContainer className="grid sm:grid-cols-2 gap-6" delay={0.1}>
            {monthlyServices.map((service, i) => (
              <StaggeredItem key={i}>
                <GlassCard className="h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[var(--marketing-accent)]/10">
                      <service.icon className="w-6 h-6 text-[var(--marketing-accent)]" />
                    </div>
                    {service.aiPill && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-medium">
                        <IconSparkles className="w-3 h-3" />
                        AI
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-white/60 text-sm mb-4">{service.description}</p>
                  <p className="text-[var(--marketing-accent)] font-semibold">{service.price}</p>
                </GlassCard>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>

        <DiagonalDivider darkToLight={true} />
      </section>

      {/* Process Steps */}
      <section className="relative bg-[var(--marketing-light)] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Как мы работаем</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Прозрачный процесс от первого звонка до результата</p>
          </motion.div>

          <StaggeredContainer className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6" delay={0.1}>
            {processSteps.map((step, i) => (
              <StaggeredItem key={i}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--marketing-accent-light)]/10 mb-4">
                    <step.icon className="w-8 h-8 text-[var(--marketing-accent-light)]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredContainer>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <Button 
              asChild
              size="lg"
              className="bg-[var(--marketing-accent-light)] text-white hover:bg-[var(--marketing-accent-light)]/90 font-semibold"
            >
              <Link href="/marketing/kontakty">
                Начать с диагностики
                <IconArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
