import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { TrustBanner } from "@/components/trust-banner"
import { ServicesSection } from "@/components/services-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustBanner />
        <ServicesSection />
        <HowItWorksSection />
      </main>
      <SiteFooter />
    </div>
  )
}
