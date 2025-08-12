"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Shield, Users, Wrench, Clock, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/631522/pexels-photo-631522.jpeg')`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-accent text-accent-foreground font-semibold">
                  Family Owned Since 1987
                </Badge>
                <Badge variant="secondary" className="bg-accent text-white text-accent-foreground font-semibold">
                  37+ Years of Excellence
                </Badge>
              </div>

              <h1 className="font-serif text-4xl lg:text-6xl font-bold leading-tight">
                Phoenix's Most <span className="text-primary">Trusted</span> Auto Repair
              </h1>

              <div className="space-y-3">
                <p className="text-xl text-gray-200 font-medium">
                  Expert diagnostics, honest pricing, guaranteed results for all makes & models
                </p>
                <p className="text-lg text-gray-300">
                  From quick oil changes to complex engine repairs - we fix it right the first time
                </p>
                <p className="text-lg text-gray-400 italic">
                  Diagnósticos expertos, precios honestos, resultados garantizados
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 bg-white/5 rounded-lg p-3">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <div>
                  <span className="font-semibold block">4.8/5 Stars</span>
                  <span className="text-sm text-gray-400">200+ Google Reviews</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white/5 rounded-lg p-3">
                <Award className="h-6 w-6 text-accent" />
                <div>
                  <span className="font-semibold block">ASE Certified</span>
                  <span className="text-sm text-gray-400">Master Technicians</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white/5 rounded-lg p-3">
                <Clock className="h-6 w-6 text-accent" />
                <div>
                  <span className="font-semibold block">Same Day Service</span>
                  <span className="text-sm text-gray-400">Most Repairs</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white/5 rounded-lg p-3">
                <Users className="h-6 w-6 text-accent" />
                <div>
                  <span className="font-semibold block">Bilingual Team</span>
                  <span className="text-sm text-gray-400">Se Habla Español</span>
                </div>
              </div>
            </div>

            

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 text-lg"
                onClick={() => document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })}
              >
                Schedule Today - Free Estimate
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent py-4 text-lg"
                onClick={() => document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })}
              >
                Agendar Hoy - Estimado Gratis
              </Button>
            </div>

            <p className="text-sm text-gray-400 text-center sm:text-left">
              ⚡ Most appointments available within 24 hours • Call (602) 354-7255 for same-day service
            </p>
          </div>

          {/* Services Preview */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="font-serif text-2xl font-bold mb-4">Our Services</h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  className="flex items-center space-x-3 text-left hover:text-accent transition-colors cursor-pointer"
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Wrench className="h-5 w-5 text-accent" />
                  <span>Oil Changes</span>
                </button>
                <button
                  className="flex items-center space-x-3 text-left hover:text-accent transition-colors cursor-pointer"
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Wrench className="h-5 w-5 text-accent" />
                  <span>Brake Repair</span>
                </button>
                <button
                  className="flex items-center space-x-3 text-left hover:text-accent transition-colors cursor-pointer"
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Wrench className="h-5 w-5 text-accent" />
                  <span>Engine Diagnostics</span>
                </button>
                <button
                  className="flex items-center space-x-3 text-left hover:text-accent transition-colors cursor-pointer"
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Wrench className="h-5 w-5 text-accent" />
                  <span>Transmission</span>
                </button>
                <button
                  className="flex items-center space-x-3 text-left hover:text-accent transition-colors cursor-pointer"
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Wrench className="h-5 w-5 text-accent" />
                  <span>AC Repair</span>
                </button>
                <button
                  className="flex items-center space-x-3 text-left hover:text-accent transition-colors cursor-pointer"
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Wrench className="h-5 w-5 text-accent" />
                  <span>Tire Service</span>
                </button>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="bg-primary/20 backdrop-blur-sm rounded-lg p-6 border border-primary/30">
              <h4 className="font-semibold text-lg mb-3">Visit Us Today</h4>
              <div className="space-y-2 text-sm">
                <p>6348 N 27th Ave Suite B</p>
                <p>Phoenix, AZ 85017</p>
                <p className="font-semibold">(602) 354-7255</p>
                <div className="pt-2 border-t border-white/20">
                  <p>Mon-Fri: 7:30AM - 5:00PM</p>
                  <p>Sat: 8:30AM - 1:30PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
