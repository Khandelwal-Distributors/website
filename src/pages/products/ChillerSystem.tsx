import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeVideos from "@/components/YouTubeVideos";
import { Phone, ArrowLeft, Star, Snowflake, Factory, Cpu, Thermometer, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import chillerSystem from "@/assets/chiller-system.jpg";

const ChillerSystem = () => {
  const products = [
    { name: "Daikin Air-Cooled Chiller", capacity: "50 TR", type: "Air-Cooled", price: "₹15,00,000", features: ["Scroll Compressor", "R-410A Refrigerant", "Energy Efficient"] },
    { name: "Carrier Water-Cooled Chiller", capacity: "100 TR", type: "Water-Cooled", price: "₹25,00,000", features: ["Centrifugal Compressor", "High COP", "Modular Design"] },
    { name: "Blue Star Packaged Chiller", capacity: "30 TR", type: "Packaged", price: "₹12,00,000", features: ["Compact Design", "Easy Maintenance", "Indian Make"] },
    { name: "Daikin Modular Chiller", capacity: "200 TR", type: "Modular", price: "₹35,00,000", features: ["Expandable", "High Efficiency", "Smart Controls"] },
    { name: "Carrier Absorption Chiller", capacity: "150 TR", type: "Absorption", price: "₹30,00,000", features: ["Steam/Hot Water", "Eco-Friendly", "Low Operating Cost"] },
    { name: "Voltas Industrial Chiller", capacity: "75 TR", type: "Industrial", price: "₹18,00,000", features: ["Heavy Duty", "24/7 Operation", "Reliable Performance"] }
  ];

  const benefits = [
    { icon: <Snowflake className="h-6 w-6" />, title: "Precise Cooling", description: "Accurate temperature control for industrial processes" },
    { icon: <Factory className="h-6 w-6" />, title: "High Capacity", description: "Large-scale cooling for commercial and industrial use" },
    { icon: <Cpu className="h-6 w-6" />, title: "Smart Controls", description: "Advanced monitoring and control systems" },
    { icon: <Thermometer className="h-6 w-6" />, title: "Energy Efficient", description: "Optimized performance with lower operating costs" }
  ];

  const types = [
    {
      title: "Air-Cooled Chillers",
      description: "Easy installation, no cooling tower required",
      features: ["Plug & Play", "Lower Installation Cost", "Compact Design"],
      applications: ["Small Offices", "Retail Stores", "Restaurants"]
    },
    {
      title: "Water-Cooled Chillers",
      description: "Higher efficiency for large installations",
      features: ["High COP", "Quiet Operation", "Long Life"],
      applications: ["Hospitals", "Hotels", "Large Offices"]
    },
    {
      title: "Absorption Chillers",
      description: "Uses waste heat or steam for cooling",
      features: ["Eco-Friendly", "Low Electricity", "Waste Heat Recovery"],
      applications: ["Industries", "Cogeneration", "District Cooling"]
    }
  ];

  const applications = [
    "Manufacturing Plants", "Data Centers", "Pharmaceutical", "Food Processing",
    "Textile Mills", "Chemical Plants", "Power Plants", "District Cooling"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Industrial Chiller System Price in Bareilly | Air-Cooled Water-Cooled Chillers | Commercial HVAC</title>
        <meta name="description" content="Buy Industrial Chiller Systems in Bareilly, UP. Best prices on Daikin, Carrier, Blue Star chillers. Air-cooled, water-cooled systems for manufacturing, data centers. Expert installation." />
        <meta name="keywords" content="chiller system price Bareilly, industrial chiller UP, air cooled chiller, water cooled chiller, Daikin chiller Bareilly, manufacturing cooling system" />
        <meta property="og:title" content="Best Industrial Chiller Dealers in Bareilly | Commercial Cooling Solutions" />
        <meta property="og:description" content="Premium industrial chiller systems in Bareilly. Air-cooled, water-cooled, and absorption chillers for manufacturing and commercial applications." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="/src/assets/chiller-system.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Industrial Chiller Dealers in Bareilly | Commercial Cooling Solutions" />
        <meta name="twitter:description" content="Premium industrial chiller systems in Bareilly. Air-cooled, water-cooled, and absorption chillers for manufacturing and commercial applications." />
        <link rel="canonical" href="https://www.khandelwaldistributors.com/products/chiller-system" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Industrial Chiller Systems",
            "category": "Industrial HVAC",
            "description": "High-capacity industrial chiller systems for manufacturing and commercial applications in Bareilly, UP",
            "brand": ["Daikin", "Carrier", "Blue Star", "Voltas"],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "521"
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "1200000",
              "highPrice": "3500000",
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
        <section className="relative py-16" style={{ backgroundImage: `url(${chillerSystem})` }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 lg:pl-12 xl:pl-16 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/products" className="text-white hover:text-accent-warm transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Industrial Chiller Systems in Bareilly
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mb-8">
              High-capacity industrial chiller systems for manufacturing and commercial applications in Bareilly, Uttar Pradesh.
              Air-cooled, water-cooled, and absorption chillers with precise temperature control.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="lg" onClick={() => window.open('tel:+919335888888', '_self')}>
                <Phone className="h-5 w-5" />
                Get Best Price Quote
              </Button>
              <Button variant="outline" size="lg" className="bg-green-600 text-white border-green-600 hover:bg-green-700" onClick={() => window.open('https://wa.me/919084417884?text=Hello, I need information about Chiller Systems in Bareilly', '_blank')}>
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
              Benefits of Industrial Chiller Systems
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
                Types of Chiller Systems
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the right chiller technology based on your capacity and efficiency requirements
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {types.map((type, index) => (
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

            {/* Applications */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Industrial Applications</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {applications.map((app, index) => (
                <div key={index} className="bg-card border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-2">
                    <Factory className="h-8 w-8 text-primary" />
                  </div>
                  <span className="font-medium">{app}</span>
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
                Premium Chiller System Models in Bareilly
              </h2>
              <p className="text-xl text-muted-foreground">
                High-performance industrial chillers with comprehensive installation and service support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img
                      src={chillerSystem}
                      alt={`${product.name} - Industrial Chiller System`}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 right-4 bg-accent-warm">
                      {product.type}
                    </Badge>
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                      Industrial
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
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Complete Engineering Solutions
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-primary">Load Calculation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Precise cooling load assessment and system sizing for optimal performance</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-primary">System Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Custom chiller plant design with piping, pumps, and control systems</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-primary">Installation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Professional installation, commissioning, and performance testing</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-primary">Maintenance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Comprehensive AMC, emergency support, and performance optimization</p>
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
                Industrial Chiller Installation in Bareilly
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Complete industrial chiller solutions across Bareilly district. From engineering design
                to installation and maintenance - your trusted partner for industrial cooling systems.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="secondary" size="lg" onClick={() => window.open('tel:+919897595000', '_self')}>
                  <Phone className="h-5 w-5" />
                  Get Best Price Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <YouTubeVideos
          category="chiller-system"
          title="Industrial Chiller Videos"
          description="Explore industrial cooling solutions and chiller system installations."
        />
      </main>

      <Footer />
    </div>
  );
};

export default ChillerSystem;