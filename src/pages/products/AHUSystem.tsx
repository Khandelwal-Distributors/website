import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeVideos from "@/components/YouTubeVideos";
import { Phone, ArrowLeft, Star, Wind, Filter, Zap, Building, MessageCircle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ahuSystem from "@/assets/ahu-system.jpg";

const AHUSystem = () => {
  const products = [
    { name: "Daikin AHU-5000CFM", capacity: "5000 CFM", type: "Modular AHU", price: "₹8,50,000", features: ["HEPA Filtration", "Energy Recovery", "Modular Design"] },
    { name: "Carrier AquaEdge AHU", capacity: "10000 CFM", type: "Custom AHU", price: "₹15,00,000", features: ["Chilled Water Coil", "Variable Speed", "Smart Controls"] },
    { name: "Blue Star Packaged AHU", capacity: "3000 CFM", type: "Packaged Unit", price: "₹6,50,000", features: ["Compact Design", "Indian Make", "Easy Maintenance"] },
    { name: "Daikin Cleanroom AHU", capacity: "8000 CFM", type: "Cleanroom Grade", price: "₹18,00,000", features: ["HEPA/ULPA Filters", "Pharmaceutical Grade", "Validation Support"] },
    { name: "Voltas Industrial AHU", capacity: "15000 CFM", type: "Industrial Grade", price: "₹12,00,000", features: ["Heavy Duty", "Corrosion Resistant", "High Static"] },
    { name: "Carrier Rooftop AHU", capacity: "20000 CFM", type: "Rooftop Unit", price: "₹22,00,000", features: ["Self-Contained", "Weather Resistant", "Energy Efficient"] }
  ];

  const benefits = [
    { icon: <Wind className="h-6 w-6" />, title: "Air Quality", description: "Superior air filtration and conditioning for healthy environments" },
    { icon: <Filter className="h-6 w-6" />, title: "Advanced Filtration", description: "Multi-stage filtration including HEPA and carbon filters" },
    { icon: <Zap className="h-6 w-6" />, title: "Energy Recovery", description: "Heat and energy recovery for maximum efficiency" },
    { icon: <Building className="h-6 w-6" />, title: "Large Scale", description: "Designed for large commercial and industrial applications" }
  ];

  const ahuTypes = [
    {
      title: "Modular AHUs",
      description: "Flexible modular construction for custom requirements",
      features: ["Modular Sections", "Easy Expansion", "Custom Configuration"],
      applications: ["Offices", "Hotels", "Hospitals"],
      capacity: "1000-50000 CFM"
    },
    {
      title: "Packaged AHUs",
      description: "Complete factory-assembled units for quick installation",
      features: ["Factory Assembled", "Plug & Play", "Compact Design"],
      applications: ["Retail", "Small Offices", "Restaurants"],
      capacity: "500-10000 CFM"
    },
    {
      title: "Cleanroom AHUs",
      description: "Specialized units for controlled environments",
      features: ["Pharmaceutical Grade", "HEPA/ULPA Filters", "Validation Support"],
      applications: ["Pharma", "Electronics", "Food Processing"],
      capacity: "2000-20000 CFM"
    },
    {
      title: "Industrial AHUs",
      description: "Heavy-duty units for harsh industrial environments",
      features: ["Corrosion Resistant", "High Temperature", "Robust Construction"],
      applications: ["Manufacturing", "Chemical Plants", "Power Plants"],
      capacity: "5000-100000 CFM"
    }
  ];

  const applications = [
    "Pharmaceutical Manufacturing", "Electronics Industry", "Food Processing", "Hospitals & Healthcare",
    "Commercial Offices", "Data Centers", "Clean Rooms", "Manufacturing Facilities"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AHU System Price in Bareilly | Air Handling Units | Commercial HVAC Solutions</title>
        <meta name="description" content="Buy AHU Systems in Bareilly, UP. Best prices on Daikin, Carrier, Blue Star air handling units. Modular, packaged, cleanroom AHUs for commercial & industrial use. Professional installation." />
        <meta name="keywords" content="AHU system price Bareilly, air handling unit UP, commercial HVAC, cleanroom AHU, pharmaceutical AHU, industrial air handling, Daikin AHU Bareilly" />
        <meta property="og:title" content="Best AHU System Dealers in Bareilly | Air Handling Unit Solutions" />
        <meta property="og:description" content="Premium air handling units for commercial and industrial applications in Bareilly. Custom AHU systems with advanced filtration and energy recovery." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="/src/assets/ahu-system.jpg" />
        <meta property="og:url" content="https://www.khandelwaldistributors.com/products/ahu-system" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best AHU System Dealers in Bareilly | Air Handling Unit Solutions" />
        <meta name="twitter:description" content="Premium air handling units for commercial and industrial applications in Bareilly. Custom AHU systems with advanced filtration and energy recovery." />
        <link rel="canonical" href="https://www.khandelwaldistributors.com/products/ahu-system" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Air Handling Units (AHU)",
            "category": "Commercial HVAC",
            "description": "Professional air handling systems for commercial and industrial applications in Bareilly, UP",
            "brand": ["Daikin", "Carrier", "Blue Star", "Voltas"],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "674"
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "650000",
              "highPrice": "2200000",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            },
            "provider": {
              "@type": "LocalBusiness",
              "name": "Khandelwal Distributors",
              "address": "G-35, MCI Plaza, Civil Lines, Bareilly, Uttar Pradesh, India",
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
        <section className="relative py-16" style={{ backgroundImage: `url(${ahuSystem})` }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 lg:pl-12 xl:pl-16 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/products" className="text-white hover:text-accent-warm transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Air Handling Units (AHU) in Bareilly
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mb-8">
              Professional air handling systems for commercial and industrial applications in Bareilly, Uttar Pradesh.
              Custom AHU solutions with advanced filtration, energy recovery, and precise air conditioning.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="lg" onClick={() => window.open('tel:+919897595000', '_self')}>
                <Phone className="h-5 w-5" />
                Get Best Price Quote
              </Button>
              <Button variant="outline" size="lg" className="bg-green-600 text-white border-green-600 hover:bg-green-700" onClick={() => window.open('https://wa.me/919084417884?text=Hello, I need information about AHU Systems in Bareilly', '_blank')}>
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
              Benefits of AHU Systems
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

        {/* AHU Types */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Types of Air Handling Units
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the right AHU technology based on your application requirements
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {ahuTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{type.title}</CardTitle>
                    <Badge variant="outline" className="w-fit">{type.capacity}</Badge>
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
              <h3 className="text-2xl font-bold text-primary mb-6">AHU System Applications</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {applications.map((app, index) => (
                <div key={index} className="bg-card border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-2">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                  <span className="font-medium">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Advanced AHU Technology
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Our AHU systems feature state-of-the-art components including variable frequency drives,
                energy recovery wheels, and multi-stage filtration for optimal performance and efficiency.
              </p>
              <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">99.97%</div>
                  <div className="text-sm opacity-90">HEPA Efficiency</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">85%</div>
                  <div className="text-sm opacity-90">Energy Recovery</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">50000</div>
                  <div className="text-sm opacity-90">Max CFM</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Operation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Premium AHU System Models in Bareilly
              </h2>
              <p className="text-xl text-muted-foreground">
                High-performance air handling units with comprehensive engineering and service support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img
                      src={ahuSystem}
                      alt={`${product.name} - Air Handling Unit`}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 right-4 bg-accent-warm">
                      {product.capacity}
                    </Badge>
                    <div className="absolute top-4 left-4 bg-indigo-600 text-white px-2 py-1 rounded text-xs">
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
                    <Button className="w-full" onClick={() => window.open('tel:+919897595000', '_self')}>
                      <Phone className="h-4 w-4" />
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Complete AHU Engineering Solutions
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-primary">System Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Custom AHU design based on load calculations and application requirements</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-primary">CFD Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Computational fluid dynamics analysis for optimal air distribution</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-primary">Installation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Professional installation with commissioning and performance testing</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-primary">Validation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Complete validation support for pharmaceutical and cleanroom applications</p>
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
                AHU System Installation in Bareilly
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Complete air handling unit solutions across Bareilly district. From engineering design
                to installation and validation - your partner for professional AHU systems.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="secondary" size="lg" onClick={() => window.open('tel:+919897595000', '_self')}>
                  <Phone className="h-5 w-5" />
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4">Expert Guide</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  AHU vs TFA vs HRV: Complete Comparison Guide
                </h2>
                <p className="text-xl text-muted-foreground">
                  Choose the right ventilation system for your building
                </p>
              </div>

              <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src={ahuSystem} 
                      alt="Ventilation Systems Guide - AHU, TFA, and HRV comparison"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-8">
                    <Badge className="mb-3">10 min read</Badge>
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      AHU vs TFA vs HRV: Complete Guide to Ventilation Systems for Indian Buildings
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Confused between AHU, TFA, and HRV systems? This comprehensive guide compares all three 
                      ventilation technologies with side-by-side specifications, applications, and cost analysis 
                      to help you make the right choice.
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Detailed comparison table with specs</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Best applications for each system</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Energy efficiency & cost analysis</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Capacity selection & installation guide</span>
                      </div>
                    </div>
                    <Link to="/blogs/ahu-tfa-hrv-differences-ventilation-guide">
                      <Button size="lg" className="w-full md:w-auto">
                        Read Complete Guide
                        <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <YouTubeVideos
          category="ahu-system"
          title="AHU System Videos"
          description="Watch air handling unit installations and maintenance procedures."
        />
      </main>

      <Footer />
    </div>
  );
};

export default AHUSystem;