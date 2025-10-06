import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeVideos from "@/components/YouTubeVideos";
import { Phone, ArrowLeft, Star, Droplets, Thermometer, Filter, Shield, Building, Hotel, School, Hospital, Factory, Home, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import waterCooler from "@/assets/water-cooler.jpg";

const WaterCooler = () => {
  const products = [
    { name: "Blue Star Water Cooler 40L", capacity: "40 Litres", type: "Storage Cooler", price: "₹18,000", features: ["Stainless Steel Body", "Energy Efficient", "Auto Cut-off"] },
    { name: "Voltas Water Dispenser Hot/Cold", capacity: "20 Litres", type: "Dispenser", price: "₹22,000", features: ["Hot & Cold Water", "Child Safety Lock", "LED Indicators"] },
    { name: "Usha Water Cooler 80L", capacity: "80 Litres", type: "Storage Cooler", price: "₹25,000", features: ["High Capacity", "Rust Proof", "Easy Maintenance"] },
    { name: "Kent RO Water Cooler", capacity: "25 Litres", type: "RO Cooler", price: "₹35,000", features: ["Built-in RO", "UV Purification", "TDS Controller"] },
    { name: "Godrej Water Dispenser", capacity: "15 Litres", type: "Dispenser", price: "₹16,000", features: ["Compact Design", "Energy Star", "Easy Installation"] },
    { name: "Bluestar Stainless Steel Cooler", capacity: "60 Litres", type: "Storage Cooler", price: "₹28,000", features: ["304 Grade Steel", "Heavy Duty", "Commercial Grade"] }
  ];

  const benefits = [
    { icon: <Droplets className="h-6 w-6" />, title: "Pure Water", description: "Clean, cool drinking water available 24/7" },
    { icon: <Thermometer className="h-6 w-6" />, title: "Temperature Control", description: "Consistent cooling with optimal temperature maintenance" },
    { icon: <Filter className="h-6 w-6" />, title: "Advanced Filtration", description: "Multi-stage filtration for safe drinking water" },
    { icon: <Shield className="h-6 w-6" />, title: "Hygienic Design", description: "Stainless steel construction prevents contamination" }
  ];

  const coolerTypes = [
    {
      title: "Storage Water Coolers",
      description: "High-capacity cooling with large storage tanks",
      features: ["20L to 100L capacity", "Stainless steel body", "Energy efficient compressor"],
      applications: ["Offices", "Schools", "Factories"],
      priceRange: "₹15,000 - ₹35,000"
    },
    {
      title: "Water Dispensers",
      description: "Compact units for instant hot and cold water",
      features: ["Hot/Cold/Normal water", "Bottle loading", "Child safety features"],
      applications: ["Homes", "Small Offices", "Clinics"],
      priceRange: "₹12,000 - ₹25,000"
    },
    {
      title: "RO Water Coolers",
      description: "Integrated purification with cooling technology",
      features: ["Built-in RO+UV", "TDS control", "Multi-stage purification"],
      applications: ["Premium Offices", "Hospitals", "Hotels"],
      priceRange: "₹25,000 - ₹50,000"
    }
  ];

  const applications = [
    { name: "Corporate Offices", icon: <Building className="h-6 w-6" /> },
    { name: "Schools & Colleges", icon: <School className="h-6 w-6" /> },
    { name: "Hospitals & Clinics", icon: <Hospital className="h-6 w-6" /> },
    { name: "Hotels & Restaurants", icon: <Hotel className="h-6 w-6" /> },
    { name: "Manufacturing Units", icon: <Factory className="h-6 w-6" /> },
    { name: "Residential Societies", icon: <Home className="h-6 w-6" /> },
    { name: "Gym & Fitness Centers", icon: <Building className="h-6 w-6" /> },
    { name: "Shopping Complexes", icon: <Building className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Water Cooler Price in Bareilly | Water Dispenser | RO Water Cooler | Best Brands</title>
        <meta name="description" content="Buy Water Coolers in Bareilly, UP. Best prices on Blue Star, Voltas, Usha water coolers & dispensers. Storage coolers, RO coolers for offices, schools, hospitals. Professional installation." />
        <meta name="keywords" content="water cooler price Bareilly, water dispenser UP, RO water cooler Bareilly, Blue Star cooler, office water cooler, school water cooler Bareilly" />
        <meta property="og:title" content="Best Water Cooler Dealers in Bareilly | Premium Cooling Solutions" />
        <meta property="og:description" content="Premium water cooling and dispensing solutions for offices, schools, and commercial spaces in Bareilly. Pure, cool water 24/7." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="/src/assets/water-cooler.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Water Cooler Dealers in Bareilly | Premium Cooling Solutions" />
        <meta name="twitter:description" content="Premium water cooling and dispensing solutions for offices, schools, and commercial spaces in Bareilly. Pure, cool water 24/7." />
        <link rel="canonical" href="https://www.khandelwaldistributors.com/products/water-cooler" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Water Coolers & Dispensers",
            "category": "Water Cooling Solutions",
            "description": "Water cooling and dispensing solutions for commercial and residential use in Bareilly, UP",
            "brand": ["Blue Star", "Voltas", "Usha", "Kent"],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.6",
              "reviewCount": "1143"
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "12000",
              "highPrice": "50000",
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": products.map((product, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Product",
                "name": product.name,
                "description": product.features.join(", "),
                "offers": {
                  "@type": "Offer",
                  "price": product.price.replace(/[^\d]/g, ''),
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock"
                }
              }
            }))
          })}
        </script>
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary/90 to-secondary/90 py-16" style={{ backgroundImage: `url(${waterCooler})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/products" className="text-white hover:text-accent-warm transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Water Coolers & Dispensers in Bareilly
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mb-8">
              Premium water cooling solutions for homes and offices in Bareilly, Uttar Pradesh.
              Storage coolers, dispensers, and RO systems with hot, cold, and normal water options.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="lg" onClick={() => window.open('tel:+919335888888', '_self')}>
                <Phone className="h-5 w-5" />
                Get Best Price Quote
              </Button>
              <Button variant="outline" size="lg" className="bg-green-600 text-white border-green-600 hover:bg-green-700" onClick={() => window.open('https://wa.me/919084417884?text=Hello, I need information about Water Coolers in Bareilly', '_blank')}>
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
              Benefits of Water Coolers & Dispensers
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

        {/* Types Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Types of Water Cooling Solutions
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the right water cooling technology for your needs
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {coolerTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{type.title}</CardTitle>
                    <Badge variant="outline" className="w-fit">{type.priceRange}</Badge>
                    <CardDescription className="text-base">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <div className="space-y-2 mb-4">
                      {type.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <h4 className="font-semibold mb-2">Best For:</h4>
                    <div className="text-sm text-muted-foreground">
                      {type.applications.join(", ")}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Applications */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Water Cooler Applications</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {applications.map((app, index) => (
                <div key={index} className="bg-card border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                  <div className="text-primary mx-auto mb-2 flex justify-center">
                    {app.icon}
                  </div>
                  <span className="font-medium">{app.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Premium Water Cooler Models in Bareilly
              </h2>
              <p className="text-xl text-muted-foreground">
                High-performance water cooling systems with advanced filtration and temperature control
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img
                      src={waterCooler}
                      alt={`${product.name} - Water Cooler`}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 right-4 bg-accent-warm">
                      {product.capacity}
                    </Badge>
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                      {product.type}
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{product.name}</CardTitle>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{product.type}</span>
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
                    <Button className="w-full" onClick={() => window.open('tel:+919335888888', '_self')}>
                      <Phone className="h-4 w-4" />
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Local Service Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Water Cooler Installation & Service in Bareilly
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Complete water cooling solutions across Bareilly district. Professional installation,
                maintenance, and repair services for all types of water coolers and dispensers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="secondary" size="lg" onClick={() => window.open('tel:+919335888888', '_self')}>
                  <Phone className="h-5 w-5" />
                  Call: +91-9335-888888
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <YouTubeVideos
          category="water-cooler"
          title="Water Cooler Videos"
          description="Watch installation and maintenance guides for water coolers and dispensers."
        />
      </main>

      <Footer />
    </div>
  );
};

export default WaterCooler;