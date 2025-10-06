import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeVideos from "@/components/YouTubeVideos";
import { Phone, ArrowLeft, Star, Wind, Shield, Heart, Leaf, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import airPurifier from "@/assets/air-purifier.jpg";

const AirPurifier = () => {
  const products = [
    { name: "Daikin MC55UVM6", type: "HEPA Air Purifier", coverage: "400 sq ft", price: "₹18,000", features: ["6-Layer Filtration", "Streamer Technology", "PM 2.5 Display"] },
    { name: "Carrier AquaEdge RO", type: "Water Purifier", capacity: "RO+UV+UF", price: "₹15,000", features: ["7-Stage Purification", "Mineral Cartridge", "TDS Display"] },
    { name: "Blue Star Air Cleaner", type: "UV-C Air Purifier", coverage: "300 sq ft", price: "₹12,000", features: ["UV-C Technology", "Pre Filter", "Silent Operation"] },
    { name: "Daikin Ururu Sarara", type: "AC with Purifier", capacity: "1.5 Ton + Purifier", price: "₹65,000", features: ["Cooling + Purification", "Humidity Control", "PM 2.5 Removal"] },
    { name: "Kent Grand Plus", type: "RO Water Purifier", capacity: "8L Storage", price: "₹13,000", features: ["RO+UV+UF+TDS", "Mineral RO", "Save Water Tech"] },
    { name: "Sharp Plasmacluster", type: "Ion Air Purifier", coverage: "500 sq ft", price: "₹22,000", features: ["Plasmacluster Ions", "HEPA Filter", "Humidifying"] }
  ];

  const benefits = [
    { icon: <Wind className="h-6 w-6" />, title: "Clean Air", description: "Remove dust, allergens, PM 2.5, and harmful pollutants" },
    { icon: <Shield className="h-6 w-6" />, title: "Health Protection", description: "Protect against respiratory issues and allergies" },
    { icon: <Heart className="h-6 w-6" />, title: "Better Sleep", description: "Cleaner air promotes better sleep and wellness" },
    { icon: <Leaf className="h-6 w-6" />, title: "Fresh Environment", description: "Eliminate odors and create fresh indoor environment" }
  ];

  const airPurifierTypes = [
    {
      title: "HEPA Air Purifiers",
      description: "High-efficiency filters remove 99.97% particles",
      features: ["HEPA Filter", "Pre-Filter", "Carbon Filter"],
      applications: ["Homes", "Offices", "Clinics"]
    },
    {
      title: "UV-C Air Purifiers",
      description: "Ultraviolet light kills bacteria and viruses",
      features: ["UV-C Lamp", "Germicidal Action", "Chemical-Free"],
      applications: ["Hospitals", "Labs", "Commercial Spaces"]
    },
    {
      title: "Ion Air Purifiers",
      description: "Generate ions to neutralize airborne contaminants",
      features: ["Negative Ions", "No Filter Replacement", "Quiet Operation"],
      applications: ["Bedrooms", "Study Rooms", "Small Offices"]
    }
  ];

  const waterPurifierTypes = [
    {
      title: "RO Water Purifiers",
      description: "Reverse osmosis removes dissolved impurities",
      features: ["RO Membrane", "TDS Removal", "Storage Tank"],
      applications: ["High TDS Areas", "Hard Water", "Bore Well Water"]
    },
    {
      title: "UV Water Purifiers",
      description: "Ultraviolet disinfection kills harmful microorganisms",
      features: ["UV Lamp", "Chemical-Free", "No Waste Water"],
      applications: ["Municipal Water", "Low TDS Water", "Microbe Treatment"]
    },
    {
      title: "Alkaline Water Purifiers",
      description: "Add beneficial minerals and increase pH",
      features: ["Mineral Addition", "pH Balance", "Health Benefits"],
      applications: ["Health Conscious", "Premium Homes", "Wellness Centers"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Air & Water Purifier Price in Bareilly | HEPA Air Purifiers | RO Water Systems</title>
        <meta name="description" content="Buy Air & Water Purifiers in Bareilly, UP. Best prices on Daikin, Carrier, Blue Star air purifiers & RO systems. HEPA, UV-C technology. Health protection for homes & offices." />
        <meta name="keywords" content="air purifier price Bareilly, water purifier Bareilly, HEPA air cleaner UP, RO system Bareilly, PM 2.5 removal, healthy air water solutions" />
        <meta property="og:title" content="Best Air & Water Purifier Dealers in Bareilly | Health Solutions" />
        <meta property="og:description" content="Premium air and water purification systems in Bareilly. HEPA air purifiers, RO water systems for complete health protection and wellness." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="/src/assets/air-purifier.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Air & Water Purifier Dealers in Bareilly | Health Solutions" />
        <meta name="twitter:description" content="Premium air and water purification systems in Bareilly. HEPA air purifiers, RO water systems for complete health protection and wellness." />
        <link rel="canonical" href="https://www.khandelwaldistributors.com/products/air-purifier" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Air & Water Purifiers",
            "category": "Health & Wellness",
            "description": "Air and water purification systems for health protection in Bareilly, UP",
            "brand": ["Daikin", "Carrier", "Blue Star", "Kent", "Aquaguard"],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "1893"
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "15000",
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
        <section className="relative py-16" style={{ backgroundImage: `url(${airPurifier})` }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/products" className="text-white hover:text-accent-warm transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Air & Water Purifiers in Bareilly
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mb-8">
              Advanced air and water purification systems for homes and offices in Bareilly, Uttar Pradesh.
              HEPA air purifiers, RO water systems, and UV-C technology for complete health protection.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="lg" onClick={() => window.open('tel:+919335888888', '_self')}>
                <Phone className="h-5 w-5" />
                Get Quote
              </Button>
              <Button variant="outline" size="lg" className="bg-green-600 text-white border-green-600 hover:bg-green-700" onClick={() => window.open('https://wa.me/919084417884?text=Hello, I need information about Air Purifiers in Bareilly', '_blank')}>
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
              Benefits of Air & Water Purifiers
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

        {/* Air Purifier Types */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Types of Air Purifiers
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the right air purification technology for your needs
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {airPurifierTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{type.title}</CardTitle>
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

            {/* Water Purifier Types */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Types of Water Purifiers
              </h2>
              <p className="text-xl text-muted-foreground">
                Select the ideal water purification system based on your water quality
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {waterPurifierTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{type.title}</CardTitle>
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
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Premium Air & Water Purifier Models in Bareilly
              </h2>
              <p className="text-xl text-muted-foreground">
                High-performance purification systems with comprehensive service support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img
                      src={airPurifier}
                      alt={`${product.name} - Air/Water Purifier`}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 right-4 bg-accent-warm">
                      {product.type}
                    </Badge>
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                      Health Guard
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{product.name}</CardTitle>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{product.coverage || product.capacity}</span>
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

        {/* Health Benefits */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Health & Wellness Benefits
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Clean air and pure water are fundamental for good health. Our purification systems
                protect you and your family from harmful pollutants, bacteria, and contaminants.
              </p>
              <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">99.97%</div>
                  <div className="text-sm opacity-90">Particle Removal</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">PM 2.5</div>
                  <div className="text-sm opacity-90">Protection</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">TDS Control</div>
                  <div className="text-sm opacity-90">Water Quality</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Protection</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service & Maintenance */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Complete Service & Support
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-primary">Installation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Professional installation with proper positioning and connections</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-primary">Filter Replacement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Timely filter changes with genuine parts and quality assurance</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-primary">Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Regular air quality and water purity testing services</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-primary">Maintenance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Comprehensive AMC with cleaning and performance optimization</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Local Service Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Air & Water Purifier Service in Bareilly
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Complete purification solutions across Bareilly district. Installation, maintenance,
                and service for air purifiers and water systems with health-focused approach.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="secondary" size="lg" onClick={() => window.open('tel:+919335888888', '_self')}>
                  <Phone className="h-5 w-5" />
                  Get Best Price Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <YouTubeVideos
          category="air-purifier"
          title="Air Purifier Videos"
          description="Learn about air purification technology and product demonstrations."
        />
      </main>

      <Footer />
    </div>
  );
};

export default AirPurifier;