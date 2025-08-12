"use client"

import type React from "react"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, Car, User, CheckCircle, Phone, AlertCircle } from "lucide-react"

export function AppointmentBooking() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    vehicleYear: "",
    vehicleMake: "",
    vehicleModel: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
    language: "english",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send data to a backend
    setIsSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (isSubmitted) {
    return (
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-50 rounded-2xl p-8 lg:p-12">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Appointment Request Received!</h2>
            <p className="text-xl text-gray-600 mb-2">
              Thank you for choosing Cool Cat Auto Repair. We'll contact you within 24 hours to confirm your
              appointment.
            </p>
            <p className="text-lg text-gray-500 italic mb-6">
              Gracias por elegir Cool Cat Auto Repair. Te contactaremos dentro de 24 horas para confirmar tu cita.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Phone className="h-5 w-5 text-blue-600" />
                <p className="font-semibold text-blue-900">Need an appointment ASAP?</p>
              </div>
              <p className="text-blue-800">Call us directly at (602) 354-7255 for same-day service</p>
              <p className="text-blue-700 italic text-sm">¿Necesitas una cita urgente? Llámanos al (602) 354-7255</p>
            </div>

            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Phone:</strong> (602) 354-7255
              </p>
              <p>
                <strong>Address:</strong> 6348 N 27th Ave Suite B, Phoenix, AZ 85017
              </p>
            </div>
            <Button onClick={() => setIsSubmitted(false)} className="mt-6 bg-primary hover:bg-primary/90 text-white">
              Book Another Appointment
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="bg-accent text-accent-foreground font-semibold mb-4">
            Book Online
          </Badge>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Schedule Your Appointment</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Request your service appointment online and we'll contact you within 24 hours to confirm your preferred
            time.
          </p>
          <p className="text-lg text-gray-500 italic mt-2">
            Solicita tu cita de servicio en línea y te contactaremos dentro de 24 horas para confirmar tu hora
            preferida.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <AlertCircle className="h-5 w-5 text-amber-600" />
              <p className="font-semibold text-amber-900">Need immediate service?</p>
            </div>
            <p className="text-amber-800">Call us at (602) 354-7255 for same-day appointments</p>
            <p className="text-amber-700 italic text-sm">¿Necesitas servicio inmediato? Llámanos al (602) 354-7255</p>
          </div>
        </div>

        <Card className="border-0 shadow-xl">
          <CardHeader className="bg-gray-50 rounded-t-lg">
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-6 w-6 text-primary" />
              <span>Appointment Request / Solicitud de Cita</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Language Selection */}
              <div className="flex justify-center space-x-4 mb-6">
                <Button
                  type="button"
                  variant={formData.language === "english" ? "default" : "outline"}
                  onClick={() => setFormData({ ...formData, language: "english" })}
                  className={formData.language === "english" ? "bg-primary text-white" : ""}
                >
                  English
                </Button>
                <Button
                  type="button"
                  variant={formData.language === "spanish" ? "default" : "outline"}
                  onClick={() => setFormData({ ...formData, language: "spanish" })}
                  className={formData.language === "spanish" ? "bg-primary text-white" : ""}
                >
                  Español
                </Button>
              </div>

              {/* Personal Information */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <User className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {formData.language === "spanish" ? "Información Personal" : "Personal Information"}
                  </h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{formData.language === "spanish" ? "Nombre" : "First Name"} *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder={formData.language === "spanish" ? "Juan" : "John"}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{formData.language === "spanish" ? "Apellido" : "Last Name"} *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder={formData.language === "spanish" ? "Pérez" : "Doe"}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{formData.language === "spanish" ? "Teléfono" : "Phone Number"} *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="(602) 555-0123"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      {formData.language === "spanish" ? "Correo Electrónico" : "Email Address"}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={formData.language === "spanish" ? "juan@ejemplo.com" : "john@example.com"}
                    />
                  </div>
                </div>
              </div>

              {/* Vehicle Information */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Car className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {formData.language === "spanish" ? "Información del Vehículo" : "Vehicle Information"}
                  </h3>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="vehicleYear">{formData.language === "spanish" ? "Año" : "Year"} *</Label>
                    <Input
                      id="vehicleYear"
                      name="vehicleYear"
                      value={formData.vehicleYear}
                      onChange={handleInputChange}
                      required
                      placeholder="2020"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicleMake">{formData.language === "spanish" ? "Marca" : "Make"} *</Label>
                    <Input
                      id="vehicleMake"
                      name="vehicleMake"
                      value={formData.vehicleMake}
                      onChange={handleInputChange}
                      required
                      placeholder="Honda"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicleModel">{formData.language === "spanish" ? "Modelo" : "Model"} *</Label>
                    <Input
                      id="vehicleModel"
                      name="vehicleModel"
                      value={formData.vehicleModel}
                      onChange={handleInputChange}
                      required
                      placeholder="Civic"
                    />
                  </div>
                </div>
              </div>

              {/* Service and Scheduling */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {formData.language === "spanish" ? "Servicio y Horario" : "Service & Scheduling"}
                  </h3>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">
                    {formData.language === "spanish" ? "Servicio Necesario" : "Service Needed"} *
                  </Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">
                      {formData.language === "spanish" ? "Selecciona un servicio" : "Select a service"}
                    </option>
                    <option value="oil-change">
                      {formData.language === "spanish" ? "Cambio de Aceite" : "Oil Change"}
                    </option>
                    <option value="brake-repair">
                      {formData.language === "spanish" ? "Reparación de Frenos" : "Brake Repair"}
                    </option>
                    <option value="engine-diagnostic">
                      {formData.language === "spanish" ? "Diagnóstico del Motor" : "Engine Diagnostic"}
                    </option>
                    <option value="transmission">
                      {formData.language === "spanish" ? "Servicio de Transmisión" : "Transmission Service"}
                    </option>
                    <option value="ac-repair">
                      {formData.language === "spanish" ? "Reparación de AC" : "AC Repair"}
                    </option>
                    <option value="tire-service">
                      {formData.language === "spanish" ? "Servicio de Llantas" : "Tire Service"}
                    </option>
                    <option value="general-repair">
                      {formData.language === "spanish" ? "Reparación General" : "General Repair"}
                    </option>
                    <option value="inspection">{formData.language === "spanish" ? "Inspección" : "Inspection"}</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">
                      {formData.language === "spanish" ? "Fecha Preferida" : "Preferred Date"} *
                    </Label>
                    <Input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredTime">
                      {formData.language === "spanish" ? "Hora Preferida" : "Preferred Time"} *
                    </Label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">
                        {formData.language === "spanish" ? "Selecciona una hora" : "Select a time"}
                      </option>
                      <option value="8:00 AM">8:00 AM</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    {formData.language === "spanish" ? "Mensaje Adicional (Opcional)" : "Additional Message (Optional)"}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={
                      formData.language === "spanish"
                        ? "Describe cualquier problema específico o solicitud especial..."
                        : "Describe any specific issues or special requests..."
                    }
                    className="min-h-[100px]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="space-y-4">
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
                  {formData.language === "spanish" ? "Enviar Solicitud" : "Submit Request"}
                </Button>
                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-600">
                    {formData.language === "spanish"
                      ? "Te contactaremos dentro de 24 horas para confirmar tu cita"
                      : "We'll contact you within 24 hours to confirm your appointment"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formData.language === "spanish"
                      ? "Para servicio el mismo día, llama al (602) 354-7255"
                      : "For same-day service, call (602) 354-7255"}
                  </p>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
