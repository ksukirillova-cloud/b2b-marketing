'use client'

import { HeroSection } from '@/components/marketing/sections/hero'
import { StatsSection } from '@/components/marketing/sections/stats'
import { HookStatSection } from '@/components/marketing/sections/hook-stat'
import { PersonasSection } from '@/components/marketing/sections/personas'
import { WhyUsSection } from '@/components/marketing/sections/why-us'
import { CasesSection } from '@/components/marketing/sections/cases'
import { PackagesSection } from '@/components/marketing/sections/packages'
import { ObjectionsSection } from '@/components/marketing/sections/objections'
import { BlogSection } from '@/components/marketing/sections/blog'
import { FinalCtaSection } from '@/components/marketing/sections/final-cta'
import { WaveDivider, DiagonalDivider } from '@/components/marketing/animations'

// Color constants
const DARK = 'var(--marketing-dark)'
const DARK_LIGHTER = 'var(--marketing-dark-lighter)'
const LIGHT = 'var(--marketing-light)'

export default function MarketingPage() {
  return (
    <>
      {/* Hero (DARK) */}
      <HeroSection />
      
      {/* Hero -> Stats: both dark, no divider needed or subtle one */}
      
      {/* Stats (DARK_LIGHTER) */}
      <StatsSection />
      
      {/* Stats -> HookStat: dark to light */}
      <DiagonalDivider fromColor={DARK_LIGHTER} toColor={LIGHT} />
      
      {/* HookStat (LIGHT) */}
      <HookStatSection />
      
      {/* HookStat -> Personas: light to dark */}
      <WaveDivider fromColor={LIGHT} toColor={DARK} />
      
      {/* Personas (DARK) */}
      <PersonasSection />
      
      {/* Personas -> WhyUs: dark to light */}
      <DiagonalDivider fromColor={DARK} toColor={LIGHT} />
      
      {/* WhyUs (LIGHT) */}
      <WhyUsSection />
      
      {/* WhyUs -> Cases: light to dark */}
      <WaveDivider fromColor={LIGHT} toColor={DARK} />
      
      {/* Cases (DARK) */}
      <CasesSection />
      
      {/* Cases -> Packages: dark to light */}
      <DiagonalDivider fromColor={DARK} toColor={LIGHT} />
      
      {/* Packages (LIGHT) */}
      <PackagesSection />
      
      {/* Packages -> Objections: light to dark */}
      <WaveDivider fromColor={LIGHT} toColor={DARK} />
      
      {/* Objections (DARK) */}
      <ObjectionsSection />
      
      {/* Objections -> Blog: dark to light */}
      <DiagonalDivider fromColor={DARK} toColor={LIGHT} />
      
      {/* Blog (LIGHT) */}
      <BlogSection />
      
      {/* Blog -> FinalCta: light to dark */}
      <WaveDivider fromColor={LIGHT} toColor={DARK} />
      
      {/* FinalCta (DARK) */}
      <FinalCtaSection />
    </>
  )
}
