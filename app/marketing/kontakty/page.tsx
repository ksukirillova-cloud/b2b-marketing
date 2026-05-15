'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  IconBrandTelegram, 
  IconMail, 
  IconWorld, 
  IconMapPin,
  IconArrowRight,
  IconCheck
} from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { GradientMeshBackground, GlassCard, WaveDivider } from '@/components/marketing/animations'

const businessTypes = [
  'Оптовая компания / дистрибьютор',
  'Розничная сеть / магазин',
  'Производитель',
  'B2B поставщик',
  'Интернет-магазин',
  'Другое',
]

const contacts = [
  {
    icon: IconBrandTelegram,
    label: 'Telegram',
    value: '@scanlite_marketing',
    href: 'https://t.me/',
  },
  {
    icon: IconMail,
    label: 'Email',
    value: 'marketing@scan-lite.ru',
    href: 'mailto:marketing@scan-lite.ru',
  },
  {
    icon: IconWorld,
    label: 'Основной сайт',
    value: 'scan-lite.ru',
    href: 'https://scan-lite.ru',
  },
  {
    icon: IconMapPin,
    label: 'Город',
    value: 'Санкт-Петербург',
    href: null,
  },
]

export default function KontaktyPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[var(--marketing-dark)] pt-28 lg:pt-36 pb-20 lg:pb-32 overflow-hidden">
        <GradientMeshBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                Начните с диагностики
              </h1>
              <p className="text-lg text-white/60 mb-8">
                30 минут — и вы поймёте где теряете клиентов прямо сейчас
              </p>

              {isSubmitted ? (
                <GlassCard>
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <IconCheck className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Заявка отправлена!</h3>
                    <p className="text-white/60">
                      Мы свяжемся с вами в течение 24 часов для назначения встречи.
                    </p>
                  </div>
                </GlassCard>
              ) : (
                <GlassCard>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white/80">Имя</Label>
                        <Input 
                          id="name" 
                          placeholder="Как к вам обращаться"
                          required
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[var(--marketing-accent)]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact" className="text-white/80">Телефон или Telegram</Label>
                        <Input 
                          id="contact" 
                          placeholder="+7 или @username"
                          required
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[var(--marketing-accent)]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white/80">Компания</Label>
                      <Input 
                        id="company" 
                        placeholder="Название вашей компании"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[var(--marketing-accent)]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="business-type" className="text-white/80">Тип бизнеса</Label>
                      <Select>
                        <SelectTrigger className="bg-white/5 border-white/10 text-white focus:ring-[var(--marketing-accent)]">
                          <SelectValue placeholder="Выберите тип" />
                        </SelectTrigger>
                        <SelectContent>
                          {businessTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pain" className="text-white/80">Что сейчас болит?</Label>
                      <Textarea 
                        id="pain" 
                        placeholder="Опишите вашу текущую ситуацию и главные проблемы с маркетингом"
                        rows={4}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[var(--marketing-accent)] resize-none"
                      />
                    </div>

                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full bg-[var(--marketing-accent)] text-[var(--marketing-dark)] hover:bg-[var(--marketing-accent)]/90 font-semibold h-14"
                    >
                      {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                      {!isSubmitting && <IconArrowRight className="w-5 h-5 ml-2" />}
                    </Button>

                    <p className="text-white/40 text-xs text-center">
                      Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                    </p>
                  </form>
                </GlassCard>
              )}
            </motion.div>

            {/* Right - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="lg:pt-20"
            >
              <div className="space-y-6">
                {contacts.map((contact, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  >
                    {contact.href ? (
                      <a 
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[var(--marketing-accent)]/30 transition-all group"
                      >
                        <div className="p-3 rounded-xl bg-white/5 group-hover:bg-[var(--marketing-accent)]/10 transition-colors">
                          <contact.icon className="w-6 h-6 text-[var(--marketing-accent)]" />
                        </div>
                        <div>
                          <p className="text-white/50 text-sm">{contact.label}</p>
                          <p className="text-white font-medium">{contact.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                        <div className="p-3 rounded-xl bg-white/5">
                          <contact.icon className="w-6 h-6 text-[var(--marketing-accent)]" />
                        </div>
                        <div>
                          <p className="text-white/50 text-sm">{contact.label}</p>
                          <p className="text-white font-medium">{contact.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Telegram CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-10"
              >
                <GlassCard>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-blue-500/20">
                      <IconBrandTelegram className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">Подпишитесь на канал</h3>
                      <p className="text-white/50 text-sm mb-4">
                        Разборы кейсов, инструменты и лайфхаки для B2B-маркетинга
                      </p>
                      <Button 
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                      >
                        <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
                          Подписаться
                          <IconArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
