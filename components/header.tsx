"use client"

import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock } from "lucide-react"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gray-50 p-2 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
              <Image
                src="/images/coolcat-logo-simple.png"
                alt="Cool Cat Auto Repair"
                width={200}
                height={80}
                className="h-10 w-auto rounded-lg"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="h-4 w-4 mr-2 text-primary" />
              <span className="font-semibold">(602) 354-7255</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-2 text-primary" />
              <span>6348 N 27th Ave, Phoenix, AZ</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="h-4 w-4 mr-2 text-primary" />
              <span>Mon-Fri 7:30AM-5PM</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            className="bg-primary hover:bg-primary/90 text-white font-semibold"
            onClick={() => document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })}
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </header>
  )
}
