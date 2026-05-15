'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { IconMenu2, IconX, IconArrowLeft } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { href: '/marketing', label: 'Главная' },
  { href: '/marketing/uslugi', label: 'Услуги' },
  { href: '/marketing/keys', label: 'Кейсы' },
  { href: '/marketing/o-nas', label: 'Кто мы' },
  { href: '/marketing/blog', label: 'Блог' },
  { href: '/marketing/kontakty', label: 'Контакты' },
]

export function MarketingHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--marketing-dark)]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Back to main site */}
          <Link 
            href="https://scan-lite.ru" 
            className="hidden lg:flex items-center gap-1 text-xs text-white/40 hover:text-white/60 transition-colors"
          >
            <IconArrowLeft className="w-3 h-3" />
            scan-lite.ru
          </Link>

          {/* Logo */}
          <Link href="/marketing" className="flex flex-col">
            <span className="text-white font-black text-lg lg:text-xl tracking-tight">
              Сканлайт Маркетинг
            </span>
            <span className="text-white/40 text-[10px] hidden sm:block">
              от команды scan-lite.ru
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  pathname === link.href
                    ? 'text-[var(--marketing-accent)] bg-white/5'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              asChild
              className="rounded-xl bg-[var(--marketing-accent)] text-black hover:bg-[var(--marketing-accent)]/90 font-semibold"
            >
              <Link href="/marketing/kontakty">
                Получить диагностику
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-white"
          >
            {isOpen ? <IconX className="w-6 h-6" /> : <IconMenu2 className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[var(--marketing-dark)] border-t border-white/5"
          >
            <div className="px-4 py-4 space-y-2">
              <Link 
                href="https://scan-lite.ru" 
                className="flex items-center gap-1 text-xs text-white/40 hover:text-white/60 transition-colors mb-4"
              >
                <IconArrowLeft className="w-3 h-3" />
                scan-lite.ru
              </Link>
              
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-base font-medium transition-colors rounded-lg ${
                    pathname === link.href
                      ? 'text-[var(--marketing-accent)] bg-white/5'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              <Button 
                asChild
                className="w-full mt-4 rounded-xl bg-[var(--marketing-accent)] text-black hover:bg-[var(--marketing-accent)]/90 font-semibold"
              >
                <Link href="/marketing/kontakty">
                  Получить диагностику
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
