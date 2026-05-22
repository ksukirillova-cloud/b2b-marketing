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

const DARK = 'var(--marketing-dark)'
const LIGHT = 'var(--marketing-light)'

export default function MarketingPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Stats: оставляем в той же тёмной системе, без разделителя между hero и цифрами */}
      <StatsSection />

      {/* Stats -> HookStat */}
      <DiagonalDivider fromColor={DARK} toColor={LIGHT} />

      {/* HookStat */}
      <HookStatSection />

      {/* HookStat -> Personas */}
      <WaveDivider fromColor={LIGHT} toColor={DARK} />

      {/* Personas */}
      <PersonasSection />

      {/* Personas -> WhyUs */}
      <DiagonalDivider fromColor={DARK} toColor={LIGHT} />

      {/* WhyUs */}
      <WhyUsSection />

      {/* WhyUs -> Cases */}
      <WaveDivider fromColor={LIGHT} toColor={DARK} />

      {/* Cases */}
      <CasesSection />

      {/* Cases -> Packages */}
      <DiagonalDivider fromColor={DARK} toColor={LIGHT} />

      {/* Packages */}
      <PackagesSection />

      {/* Packages -> Objections */}
      <WaveDivider fromColor={LIGHT} toColor={DARK} />

      {/* Objections */}
      <ObjectionsSection />

      {/* Objections -> Blog */}
      <DiagonalDivider fromColor={DARK} toColor={LIGHT} />

      {/* Blog */}
      <BlogSection />

      {/* Blog -> Final CTA */}
      <WaveDivider fromColor={LIGHT} toColor={DARK} />

      {/* Final CTA */}
      <FinalCtaSection />
    </>
  )
}