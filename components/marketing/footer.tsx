import Link from 'next/link'
import { IconBrandTelegram, IconBrandVk } from '@tabler/icons-react'

const footerLinks = [
  { href: '/marketing/uslugi', label: 'Услуги' },
  { href: '/marketing/keys', label: 'Кейсы' },
  { href: '/marketing/o-nas', label: 'Кто мы' },
  { href: '/marketing/blog', label: 'Блог' },
  { href: '/marketing/kontakty', label: 'Контакты' },
]

export function MarketingFooter() {
  return (
    <footer className="bg-[var(--marketing-dark)] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/marketing" className="inline-block">
              <span className="text-white font-bold text-xl tracking-tight">
                Сканлайт Маркетинг
              </span>
            </Link>
            <p className="mt-3 text-white/50 text-sm max-w-md">
              Маркетинговое направление компании Сканлайт. Сайты, реклама и продвижение для розницы, складов и B2B.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a 
                href="https://t.me/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              >
                <IconBrandTelegram className="w-5 h-5" />
              </a>
              <a 
                href="https://vk.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              >
                <IconBrandVk className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Навигация</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Site Link */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Основной сайт</h4>
            <a 
              href="https://scan-lite.ru"
              className="text-white/50 hover:text-white text-sm transition-colors"
            >
              scan-lite.ru
            </a>
            <p className="mt-2 text-white/40 text-xs">
              Торгово-кассовое оборудование
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-white/40 text-sm text-center">
            © 2025 Сканлайт · scan-lite.ru
          </p>
        </div>
      </div>
    </footer>
  )
}
