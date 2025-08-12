import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, Quote, MapPin } from "lucide-react"

const reviews = [
  {
    name: "Maria Rodriguez",
    initials: "MR",
    rating: 5,
    date: "2 weeks ago",
    service: "Brake Repair",
    review:
      "Excellent service! They fixed my brakes quickly and explained everything in Spanish. Very honest pricing and professional work. I'll definitely be back!",
    reviewEs:
      "¡Excelente servicio! Arreglaron mis frenos rápidamente y me explicaron todo en español. Precios muy honestos y trabajo profesional. ¡Definitivamente regresaré!",
    location: "Phoenix, AZ",
  },
  {
    name: "James Thompson",
    initials: "JT",
    rating: 5,
    date: "1 month ago",
    service: "Oil Change",
    review:
      "Been coming here for 5 years. Always reliable, fair prices, and they never try to sell you services you don't need. The staff is friendly and knowledgeable.",
    location: "Phoenix, AZ",
  },
  {
    name: "Carlos Mendez",
    initials: "CM",
    rating: 5,
    date: "3 weeks ago",
    service: "Engine Diagnostics",
    review:
      "My car was making strange noises and other shops couldn't figure it out. Cool Cat diagnosed the problem in 30 minutes and fixed it the same day. Great work!",
    reviewEs:
      "Mi carro hacía ruidos extraños y otros talleres no podían descubrir el problema. Cool Cat diagnosticó el problema en 30 minutos y lo arregló el mismo día. ¡Excelente trabajo!",
    location: "Glendale, AZ",
  },
  {
    name: "Sarah Johnson",
    initials: "SJ",
    rating: 5,
    date: "2 months ago",
    service: "AC Repair",
    review:
      "AC went out in the middle of summer - they got me in the same day and had it working perfectly. Lifesavers! Professional service at a reasonable price.",
    location: "Phoenix, AZ",
  },
  {
    name: "Roberto Silva",
    initials: "RS",
    rating: 5,
    date: "1 month ago",
    service: "Transmission Service",
    review:
      "Honest mechanics who take time to explain the work. They saved me thousands by fixing my transmission instead of replacing it. Highly recommend!",
    reviewEs:
      "Mecánicos honestos que se toman el tiempo para explicar el trabajo. Me ahorraron miles al arreglar mi transmisión en lugar de reemplazarla. ¡Los recomiendo mucho!",
    location: "Phoenix, AZ",
  },
  {
    name: "Lisa Chen",
    initials: "LC",
    rating: 5,
    date: "3 weeks ago",
    service: "Tire Service",
    review:
      "Fast and efficient tire service. They had my size in stock and got me back on the road quickly. Clean facility and professional staff.",
    location: "Scottsdale, AZ",
  },
]

export function ReviewsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-accent text-accent-foreground font-semibold mb-4">
            Customer Reviews
          </Badge>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the Phoenix community about their experience with Cool Cat Auto.
          </p>
          <p className="text-lg text-gray-500 italic mt-2">
            No solo confíes en nuestra palabra - escucha de la comunidad de Phoenix sobre su experiencia con Cool Cat
            Auto.
          </p>

          {/* Google Rating Display */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <div className="flex items-center space-x-2">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">4.8</span>
            </div>
            <div className="text-gray-600">
              <p className="font-semibold">Google Reviews</p>
              <p className="text-sm">Based on 278+ reviews</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="bg-primary text-white">
                      <AvatarFallback className="bg-primary text-white font-semibold">{review.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <MapPin className="h-3 w-3" />
                        <span>{review.location}</span>
                      </div>
                    </div>
                  </div>
                  <Quote className="h-6 w-6 text-gray-300" />
                </div>

                {/* Rating and Service */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-accent">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {review.service}
                  </Badge>
                </div>

                {/* Review Text */}
                <div className="space-y-3">
                  <p className="text-gray-700 leading-relaxed">{review.review}</p>
                  {review.reviewEs && <p className="text-gray-600 text-sm italic leading-relaxed">{review.reviewEs}</p>}
                </div>

                {/* Date */}
                <p className="text-xs text-gray-500 mt-4">{review.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <h3 className="font-serif text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Join Our Happy Customers</h3>
          <p className="text-xl text-gray-600 mb-2">Experience the Cool Cat difference for yourself.</p>
          <p className="text-lg text-gray-500 italic mb-6">Experimenta la diferencia de Cool Cat por ti mismo.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.google.com/search?q=cool+cat+auto+repair+phoenix"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Star className="h-5 w-5 mr-2" />
              Leave a Google Review
            </a>
            <a
              href="tel:6023547255"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Schedule Your Service
            </a>
          </div>
        </div>

        {/* Review Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-3xl font-bold text-primary">278+</p>
            <p className="text-sm text-gray-600">Google Reviews</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-3xl font-bold text-primary">4.8</p>
            <p className="text-sm text-gray-600">Average Rating</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-3xl font-bold text-primary">37+</p>
            <p className="text-sm text-gray-600">Years in Business</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-3xl font-bold text-primary">5,000+</p>
            <p className="text-sm text-gray-600">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  )
}
