import { HeroSection } from '@/components/sections/hero/HeroSection'
import { BenefitsSection } from '@/components/sections/benefits/BenefitsSection'
import { BaseLayout } from '@/components/base/layout/BaseLayout'

export default async function HomePage() {
  return (
    <BaseLayout>
      <HeroSection />
      <BenefitsSection />
    </BaseLayout>
  )
}
