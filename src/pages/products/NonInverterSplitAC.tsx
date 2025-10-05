import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeVideos from "@/components/YouTubeVideos";
import { Phone, ArrowLeft, Star, Thermometer, DollarSign, Home, Clock, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import splitAc from "@/assets/split-ac.jpg";

const NonInverterSplitAC = () => {
  const products = [
    { name: "Carrier Estrella Neo", capacity: "1.5 Ton", rating: "3 Star", price: "₹25,000", features: ["Fixed Speed", "Copper Condenser", "Auto Restart"] },
    { name: "Godrej GIC 18NTC3", capacity: "1.5 Ton", rating: "3 Star", price: "₹22,000", features: ["Anti-Bacterial", "Sleep Mode", "Auto Clean"] },
    { name: "Amstrad Non-Inverter", capacity: "1 Ton", rating: "2 Star", price: "₹20,000", features: ["UK Brand", "Basic Cooling", "Affordable"] },
    { name: "Voltas Fixed Speed", capacity: "1.5 Ton", rating: "3 Star", price: "₹23,000", features: ["Indian Brand", "Reliable", "Easy Service"] },
    { name: "Blue Star Non-Inverter", capacity: "1 Ton", rating: "3 Star", price: "₹24,000", features: ["Quality Build", "Consistent Cooling", "Durable"] },
    { name: "Cruise Fixed AC", capacity: "1.5 Ton", rating: "2 Star", price: "₹21,000", features: ["Heavy Duty", "Simple Operation", "Low Maintenance"] }
  ];

  const benefits = [
    { icon: <DollarSign className="h-6 w-6" />, title: "Lower Cost", description: "More affordable upfront investment compared to inverter ACs" },
    { icon: <Home className="h-6 w-6" />, title: "Simple Technology", description: "Reliable fixed-speed technology with consistent performance" },
    { icon: <Clock className="h-6 w-6" />, title: "Quick Cooling", description: "Immediate full power cooling for fast temperature control" },
    { icon: <Thermometer className="h-6 w-6" />, title: "Easy Maintenance", description: "Simple design makes servicing and repairs straightforward" }
  ];

  const comparison = [
    { feature: "Initial Cost", nonInverter: "Lower", inverter: "Higher" },
    { feature: "Operating Cost", nonInverter: "Higher", inverter: "Lower" },
    { feature: "Cooling Speed", nonInverter: "Fast", inverter: "Gradual" },
    { feature: "Maintenance", nonInverter: "Easy", inverter: "Complex" },
    { feature: "Best For", nonInverter: "Small rooms, Budget buyers", inverter: "Large rooms, Long usage" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Non-Inverter Split AC Price in Bareilly | Fixed Speed ACs | Budget Air Conditioners</title>
        <meta name="description" content="Buy Non-Inverter Split ACs in Bareilly, UP. Best prices on Carrier, Godrej, Amstrad fixed speed ACs. Affordable cooling solutions with reliable performance. Expert installation." />
        <meta name="keywords" content="non-inverter AC price Bareilly, fixed speed AC Bareilly, budget AC Bareilly, cheap split AC, Carrier fixed speed, affordable cooling solution UP" />
        <meta property="og:title" content="Best Non-Inverter AC Dealers in Bareilly | Budget Air Conditioners" />
        <meta property="og:description" content="Affordable non-inverter split ACs in Bareilly. Lower upfront cost, reliable cooling, perfect for budget-conscious buyers. Professional installation and service." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="/src/assets/split-ac.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Non-Inverter AC Dealers in Bareilly | Budget Air Conditioners" />
        <meta name="twitter:description" content="Affordable non-inverter split ACs in Bareilly. Lower upfront cost, reliable cooling, perfect for budget-conscious buyers. Professional installation and service." />
        <link rel="canonical" href="https://www.khandelwaldistributors.com/products/non-inverter-split-ac" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Non-Inverter Split Air Conditioners",
            "category": "Air Conditioning",
            "description": "Affordable fixed-speed split air conditioners for homes and offices in Bareilly, UP",
            "brand": ["Carrier", "Godrej", "Amstrad", "Voltas", "Blue Star", "Cruise"],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.4",
              "reviewCount": "1356"
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "20000",
              "highPrice": "25000",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            },
            "provider": {
              "@type": "LocalBusiness",
              "name": "KD Enterprises",
              "address": "Bareilly, Uttar Pradesh, India",
              "telephone": "+919429693410"
            }
          })}
        </script>
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary/90 to-secondary/90 py-16" style={{ backgroundImage: "url('/src/assets/split-ac.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/products" className="text-white hover:text-accent-warm transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Non-Inverter Split ACs in Bareilly
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mb-8">
              Affordable fixed-speed split air conditioners for homes and offices in Bareilly, Uttar Pradesh.
              Lower upfront cost with reliable cooling performance and easy maintenance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="lg" onClick={() => window.open('tel:+919429693410', '_self')}>
                <Phone className="h-5 w-5" />
                Get Best Price Quote
              </Button>
              <Button variant="outline" size="lg" className="bg-green-600 text-white border-green-600 hover:bg-green-700" onClick={() => window.open('https://wa.me/919084417884?text=Hello, I need information about Non-Inverter Split ACs in Bareilly', '_blank')}>
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              Why Choose Non-Inverter Split ACs?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Non-Inverter vs Inverter AC Comparison
              </h2>
              <p className="text-xl text-muted-foreground">
                Understanding the differences to make the right choice for your needs
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Feature Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 font-semibold">Feature</th>
                          <th className="text-center p-3 font-semibold text-primary">Non-Inverter AC</th>
                          <th className="text-center p-3 font-semibold text-secondary">Inverter AC</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparison.map((item, index) => (
                          <tr key={index} className="border-b hover:bg-muted/20">
                            <td className="p-3 font-medium">{item.feature}</td>
                            <td className="p-3 text-center">{item.nonInverter}</td>
                            <td className="p-3 text-center">{item.inverter}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Best Non-Inverter AC Models in Bareilly
              </h2>
              <p className="text-xl text-muted-foreground">
                Quality fixed-speed ACs with professional installation and service support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img
                      src={splitAc}
                      alt={`${product.name} - Non-Inverter Split AC`}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 right-4 bg-accent-warm">
                      {product.rating}
                    </Badge>
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-2 py-1 rounded text-xs">
                      Budget Friendly
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{product.name}</CardTitle>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{product.capacity}</span>
                      <span className="text-lg font-bold text-accent-warm">{product.price}</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {product.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button className="w-full" onClick={() => window.open('tel:+919429693410', '_self')}>
                      <Phone className="h-4 w-4" />
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Best For Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Non-Inverter ACs Are Perfect For
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <Home className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary">Small Rooms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Perfect for bedrooms, small offices, and compact spaces</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary">Budget Buyers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Ideal for cost-conscious customers seeking affordable cooling</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary">Occasional Use</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Great for spaces used for few hours daily</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Thermometer className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary">Quick Cooling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">When immediate full power cooling is needed</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Local Service Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Non-Inverter AC Installation & Service in Bareilly
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Professional installation and service for non-inverter ACs across Bareilly district.
                Affordable cooling solutions with reliable after-sales support and maintenance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="secondary" size="lg">
                  <Phone className="h-5 w-5" onClick={() => window.open('tel:+919429693410', '_self')} />
                  Call: +91-94296-93410
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <YouTubeVideos
          category="non-inverter-split-ac"
          title="Non-Inverter Split AC Videos"
          description="Watch reviews and installation guides for non-inverter air conditioners."
        />
      </main>

      <Footer />
    </div>
  );
};

export default NonInverterSplitAC;