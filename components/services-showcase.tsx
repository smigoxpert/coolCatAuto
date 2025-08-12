"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Wrench, Car, Gauge, Snowflake, Disc, Settings, CheckCircle } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Oil Changes & Maintenance",
    titleEs: "Cambios de Aceite y Mantenimiento",
    description:
      "Keep your engine running smooth with our comprehensive oil change service using premium oils and filters.",
    descriptionEs:
      "Mantén tu motor funcionando suavemente con nuestro servicio completo de cambio de aceite usando aceites y filtros premium.",
    features: ["Full synthetic options", "Multi-point inspection", "Fluid top-offs"],
    featuresEs: ["Opciones sintéticas completas", "Inspección de múltiples puntos", "Relleno de fluidos"],
    image: "https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg",
  },
  {
    icon: Disc,
    title: "Brake System Repair",
    titleEs: "Reparación del Sistema de Frenos",
    description:
      "Your safety is our priority. Expert brake repair and replacement using quality parts and precision service.",
    descriptionEs:
      "Tu seguridad es nuestra prioridad. Reparación y reemplazo experto de frenos usando partes de calidad y servicio de precisión.",
    features: ["Brake pad replacement", "Rotor resurfacing", "Brake fluid service"],
    featuresEs: ["Reemplazo de pastillas de freno", "Rectificado de rotores", "Servicio de líquido de frenos"],
    image: "https://images.pexels.com/photos/6870307/pexels-photo-6870307.jpeg",
  },
  {
    icon: Gauge,
    title: "Engine Diagnostics",
    titleEs: "Diagnósticos del Motor",
    description: "Advanced computer diagnostics to pinpoint issues quickly and accurately, saving you time and money.",
    descriptionEs:
      "Diagnósticos computarizados avanzados para identificar problemas rápida y precisamente, ahorrándote tiempo y dinero.",
    features: ["Check engine light", "Performance issues", "Emission problems"],
    featuresEs: ["Luz de verificación del motor", "Problemas de rendimiento", "Problemas de emisiones"],
    image: "https://images.pexels.com/photos/13065692/pexels-photo-13065692.jpeg",
  },
  {
    icon: Settings,
    title: "Transmission Service",
    titleEs: "Servicio de Transmisión",
    description:
      "Complete transmission care from fluid changes to major repairs, for both automatic and manual transmissions.",
    descriptionEs:
      "Cuidado completo de transmisión desde cambios de fluido hasta reparaciones mayores, para transmisiones automáticas y manuales.",
    features: ["Fluid replacement", "Filter changes", "Transmission repair"],
    featuresEs: ["Reemplazo de fluido", "Cambios de filtro", "Reparación de transmisión"],
    image: "https://images.pexels.com/photos/8986068/pexels-photo-8986068.jpeg",
  },
  {
    icon: Snowflake,
    title: "AC & Heating Systems",
    titleEs: "Sistemas de AC y Calefacción",
    description: "Stay comfortable year-round with our complete climate control system service and repair.",
    descriptionEs:
      "Mantente cómodo todo el año con nuestro servicio completo y reparación de sistemas de control climático.",
    features: ["AC recharge", "Heater repair", "System diagnostics"],
    featuresEs: ["Recarga de AC", "Reparación de calefacción", "Diagnósticos del sistema"],
    image: "https://images.pexels.com/photos/6870298/pexels-photo-6870298.jpeg",
  },
  {
    icon: Car,
    title: "Tire Services",
    titleEs: "Servicios de Llantas",
    description: "Complete tire care including mounting, balancing, rotation, and repair to keep you rolling safely.",
    descriptionEs:
      "Cuidado completo de llantas incluyendo montaje, balanceo, rotación y reparación para mantenerte rodando seguro.",
    features: ["Tire installation", "Wheel balancing", "Tire rotation"],
    featuresEs: ["Instalación de llantas", "Balanceo de ruedas", "Rotación de llantas"],
    image: "https://images.pexels.com/photos/5260115/pexels-photo-5260115.jpeg",
  },
]

export function ServicesShowcase() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-accent text-accent-foreground font-semibold mb-4">
            Our Services
          </Badge>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Expert Auto Care for Every Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From routine maintenance to complex repairs, we provide comprehensive automotive services for both imported
            and domestic vehicles.
          </p>
          <p className="text-lg text-gray-500 italic mt-2">
            Desde mantenimiento de rutina hasta reparaciones complejas, proporcionamos servicios automotrices integrales
            para vehículos importados y nacionales.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0

            return (
              <div key={service.title} className={`${isEven ? "bg-white" : "bg-gray-50"} rounded-2xl p-8 lg:p-12`}>
                <div
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    isEven ? "" : "lg:grid-flow-col-dense"
                  }`}
                >
                  {/* Content */}
                  <div className={`space-y-6 ${isEven ? "" : "lg:col-start-2"}`}>
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl lg:text-3xl font-bold text-gray-900">{service.title}</h3>
                        <p className="text-lg text-gray-600 italic">{service.titleEs}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-gray-700 text-lg leading-relaxed">{service.description}</p>
                      <p className="text-gray-600 italic">{service.descriptionEs}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900">What's Included:</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <div>
                              <span className="text-gray-700">{feature}</span>
                              <p className="text-sm text-gray-500 italic">{service.featuresEs[featureIndex]}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      className="bg-primary hover:bg-primary/90 text-white"
                      onClick={() => document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Get Service Quote
                    </Button>
                  </div>

                  {/* Image */}
                  <div className={`${isEven ? "" : "lg:col-start-1"}`}>
                    <div className="relative">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-80 object-cover rounded-xl shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-primary rounded-2xl p-8 lg:p-12 text-white">
          <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-4">Don't See Your Service Listed?</h3>
          <p className="text-xl mb-2">We handle a wide range of automotive repairs and maintenance services.</p>
          <p className="text-lg opacity-90 italic mb-6">
            Manejamos una amplia gama de reparaciones automotrices y servicios de mantenimiento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Call Us Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              onClick={() => document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })}
            >
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
