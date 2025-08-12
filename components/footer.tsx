import { Phone, MapPin, Mail, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold">Cool Cat Auto Repair</h3>
            <p className="text-gray-300">
              Professional auto repair services for imported and domestic vehicles in Phoenix, Arizona.
            </p>
            <p className="text-gray-400 italic text-sm">
              Servicios profesionales de reparación de automóviles para vehículos importados y nacionales en Phoenix,
              Arizona.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact / Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>(602) 354-7255</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <div>
                  <p>6348 N 27th Ave Suite B</p>
                  <p>Phoenix, AZ 85017</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>coolcatauto1@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Hours / Horarios</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Mon-Fri:</span>
                <span>7:30AM - 5:00PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>8:30AM - 1:30PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-gray-400">Closed</span>
              </div>
            </div>
            <p className="text-xs text-gray-400">Se habla español</p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services / Servicios</h4>
            <div className="space-y-1 text-sm text-gray-300">
              <p>Oil Changes / Cambios de Aceite</p>
              <p>Brake Repair / Reparación de Frenos</p>
              <p>Engine Diagnostics / Diagnósticos</p>
              <p>Transmission Service / Transmisión</p>
              <p>AC Repair / Reparación de AC</p>
              <p>Tire Service / Servicio de Llantas</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <p className="text-sm text-gray-400">© 2025 Cool Cat Auto Repair. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com/coolcatauto/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/coolcatauto/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
