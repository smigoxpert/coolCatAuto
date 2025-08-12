import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Award, Users, Heart, Wrench, MapPin } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-accent text-accent-foreground font-semibold mb-4">
            Our Story
          </Badge>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Three Decades of Automotive Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since 1987, Cool Cat Auto Repair has been Phoenix's trusted partner for reliable, honest automotive service.
          </p>
          <p className="text-lg text-gray-500 italic mt-2">
            Desde 1987, Cool Cat Auto Repair ha sido el socio confiable de Phoenix para el servicio automotriz honesto y
            confiable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Story Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-gray-900">
                Built on Trust, Driven by Excellence
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                What started as a small family business has grown into one of Phoenix's most trusted auto repair shops.
                Our commitment to honest service, fair pricing, and exceptional workmanship has earned us the loyalty of
                thousands of customers over the years.
              </p>
              <p className="text-gray-600 italic">
                Lo que comenzó como un pequeño negocio familiar se ha convertido en uno de los talleres de reparación de
                automóviles más confiables de Phoenix. Nuestro compromiso con el servicio honesto, precios justos y mano
                de obra excepcional nos ha ganado la lealtad de miles de clientes a lo largo de los años.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-xl text-gray-900">Why Choose Cool Cat Auto?</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">Family-Owned & Operated</p>
                    <p className="text-sm text-gray-600">Personal service with a commitment to our community</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">ASE Certified Technicians</p>
                    <p className="text-sm text-gray-600">
                      Highly trained professionals using the latest diagnostic equipment
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">Bilingual Service</p>
                    <p className="text-sm text-gray-600">Se habla español - serving our diverse Phoenix community</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Wrench className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">All Makes & Models</p>
                    <p className="text-sm text-gray-600">Expert service for both imported and domestic vehicles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image & Stats */}
          <div className="space-y-6">
            <div className="relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.8234567890123!2d-112.1234567!3d33.5678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s6348%20N%2027th%20Ave%20Suite%20B%2C%20Phoenix%2C%20AZ%2085017!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus&q=6348+N+27th+Ave+Suite+B,+Phoenix,+AZ+85017"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-80 rounded-xl shadow-lg"
                title="Cool Cat Auto Repair Location"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                <p className="font-semibold text-lg">Our Phoenix Location</p>
                <p className="text-sm opacity-90">6348 N 27th Ave Suite B</p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-2">
                    <div className="flex text-accent">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">4.8</p>
                  <p className="text-sm text-gray-600">Google Rating</p>
                  <p className="text-xs text-gray-500 italic">Calificación de Google</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">37+</p>
                  <p className="text-sm text-gray-600">Years Serving</p>
                  <p className="text-xs text-gray-500 italic">Años de Servicio</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <blockquote className="text-xl text-gray-700 leading-relaxed mb-4">
              "To provide honest, reliable automotive service that keeps our customers safe on the road while treating
              every vehicle with the same care we'd give our own family's cars."
            </blockquote>
            <p className="text-lg text-gray-600 italic">
              "Proporcionar servicio automotriz honesto y confiable que mantenga a nuestros clientes seguros en la
              carretera mientras tratamos cada vehículo con el mismo cuidado que le daríamos a los autos de nuestra
              propia familia."
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Experience the Difference
              </Button>
            </div>
          </div>
        </div>

        {/* Certifications & Partnerships */}
        <div className="mt-16 text-center">
          <h4 className="font-semibold text-lg text-gray-900 mb-6">Certified & Trusted</h4>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-gray-200 px-6 py-3 rounded-lg">
              <span className="font-semibold text-gray-700">ASE Certified</span>
            </div>
            <div className="bg-gray-200 px-6 py-3 rounded-lg">
              <span className="font-semibold text-gray-700">BBB Accredited</span>
            </div>
            <div className="bg-gray-200 px-6 py-3 rounded-lg">
              <span className="font-semibold text-gray-700">NAPA AutoCare</span>
            </div>
            <div className="bg-gray-200 px-6 py-3 rounded-lg">
              <span className="font-semibold text-gray-700">AAA Approved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
