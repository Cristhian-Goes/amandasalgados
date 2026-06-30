import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExploreSection } from "@/components/explore-section"
import { ServicesSection } from "@/components/services-section"
import { MenuSection } from "@/components/menu-section"
import { PartyCalculator } from "@/components/party-calculator"
import { OrderSection } from "@/components/order-section"
import { HoursSection } from "@/components/hours-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ExploreSection />
        <AboutSection />
        <ServicesSection />
        <MenuSection />
        <PartyCalculator />
        <OrderSection />
        <HoursSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
