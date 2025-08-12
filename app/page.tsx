import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesShowcase } from "@/components/services-showcase"
import { AboutSection } from "@/components/about-section"
import { ReviewsSection } from "@/components/reviews-section"
import { AppointmentBooking } from "@/components/appointment-booking"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <div id="services">
        <ServicesShowcase />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="reviews">
        <ReviewsSection />
      </div>
      <div id="appointment">
        <AppointmentBooking />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
