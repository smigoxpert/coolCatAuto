import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, Clock, Mail, MessageSquare, Navigation } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-accent text-accent-foreground font-semibold mb-4">
            Get In Touch
          </Badge>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Visit Us Today</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to get your vehicle serviced? Contact us today to schedule your appointment or ask any questions.
          </p>
          <p className="text-lg text-gray-500 italic mt-2">
            ¿Listo para dar servicio a tu vehículo? Contáctanos hoy para programar tu cita o hacer cualquier pregunta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Business Hours */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-primary text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-6 w-6" />
                  <span>Business Hours / Horario de Atención</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Monday - Friday</span>
                    <span className="text-gray-700">7:30 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Saturday</span>
                    <span className="text-gray-700">8:30 AM - 1:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-gray-900">Sunday</span>
                    <span className="text-gray-500">Closed / Cerrado</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-accent/20 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> We recommend calling ahead to ensure availability.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    <strong>Nota:</strong> Recomendamos llamar con anticipación para asegurar disponibilidad.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Call Us</h3>
                      <p className="text-sm text-gray-600">Llámanos</p>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-primary mb-2">(602) 354-7255</p>
                  <p className="text-sm text-gray-600">Se habla español</p>
                  <Button className="w-full mt-4 bg-primary hover:bg-primary/90">Call Now</Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Visit Us</h3>
                      <p className="text-sm text-gray-600">Visítanos</p>
                    </div>
                  </div>
                  <div className="space-y-1 mb-4">
                    <p className="font-medium text-gray-900">6348 N 27th Ave</p>
                    <p className="text-gray-700">Suite B</p>
                    <p className="text-gray-700">Phoenix, AZ 85017</p>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Navigation className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Location Features */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span>What to Expect</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Convenient Location</h4>
                    <p className="text-sm text-gray-600">Easy access with ample parking available</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Comfortable Waiting</h4>
                    <p className="text-sm text-gray-600">Clean waiting area with refreshments</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Free Estimates</h4>
                    <p className="text-sm text-gray-600">No obligation quotes for all services</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Bilingual Staff</h4>
                    <p className="text-sm text-gray-600">English and Spanish speaking technicians</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gray-50 rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-6 w-6 text-primary" />
                  <span>Send Us a Message</span>
                </CardTitle>
                <p className="text-sm text-gray-600 mt-2">
                  Get a free quote or ask us any questions about your vehicle.
                </p>
                <p className="text-sm text-gray-500 italic">
                  Obtén una cotización gratuita o haznos cualquier pregunta sobre tu vehículo.
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name / Nombre</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name / Apellido</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone / Teléfono</Label>
                      <Input id="phone" type="tel" placeholder="(602) 555-0123" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email / Correo</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vehicle">Vehicle Information / Información del Vehículo</Label>
                    <Input id="vehicle" placeholder="2020 Honda Civic" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed / Servicio Necesario</Label>
                    <select
                      id="service"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a service / Selecciona un servicio</option>
                      <option value="oil-change">Oil Change / Cambio de Aceite</option>
                      <option value="brake-repair">Brake Repair / Reparación de Frenos</option>
                      <option value="engine-diagnostic">Engine Diagnostic / Diagnóstico del Motor</option>
                      <option value="transmission">Transmission Service / Servicio de Transmisión</option>
                      <option value="ac-repair">AC Repair / Reparación de AC</option>
                      <option value="tire-service">Tire Service / Servicio de Llantas</option>
                      <option value="other">Other / Otro</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message / Mensaje</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe the issue or service you need..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-4">
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                      Send Message / Enviar Mensaje
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      We'll respond within 24 hours / Responderemos dentro de 24 horas
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center bg-primary rounded-2xl p-8 text-white">
          <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl mb-2">Call us today for expert auto repair services you can trust.</p>
          <p className="text-lg opacity-90 italic mb-6">
            Llámanos hoy para servicios de reparación de autos expertos en los que puedes confiar.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            <Phone className="h-5 w-5 mr-2" />
            Call (602) 354-7255
          </Button>
        </div>
      </div>
    </section>
  )
}
