import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeVideos from "@/components/YouTubeVideos";
import { Phone, ArrowLeft, Star, Snowflake, Thermometer, Shield, Factory, MessageCircle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import coldRoom from "@/assets/cold-room.jpg";

const ColdRoom = () => {
  const products = [
    { name: "Daikin Cold Room 10x8", size: "10x8x8 ft", temperature: "-5°C to +5°C", price: "₹4,50,000", features: ["Walk-in Design", "PUF Insulation", "SS304 Interior"] },
    { name: "Carrier Freezer Room 12x10", size: "12x10x8 ft", temperature: "-18°C to -25°C", price: "₹6,50,000", features: ["Deep Freeze", "Auto Defrost", "Temperature Alarm"] },
    { name: "Blue Star Cold Storage", size: "15x12x9 ft", temperature: "0°C to +10°C", price: "₹8,00,000", features: ["Commercial Grade", "Energy Efficient", "Digital Control"] },
    { name: "Voltas Blast Chiller", size: "8x6x7 ft", temperature: "-40°C Blast", price: "₹5,50,000", features: ["Rapid Cooling", "Food Grade", "Stainless Steel"] },
    { name: "Daikin Modular Cold Room", size: "Custom Size", temperature: "Variable", price: "₹3,50,000+", features: ["Modular Design", "Expandable", "Easy Assembly"] },
    { name: "Carrier Pharmaceutical", size: "20x15x10 ft", temperature: "+2°C to +8°C", price: "₹12,00,000", features: ["Pharma Grade", "Validation Support", "Backup System"] }
  ];

  const benefits = [
    { icon: <Snowflake className="h-6 w-6" />, title: "Precise Temperature", description: "Maintain exact temperatures for product preservation" },
    { icon: <Shield className="h-6 w-6" />, title: "Food Safety", description: "Food-grade materials ensure hygiene and safety standards" },
    { icon: <Thermometer className="h-6 w-6" />, title: "Temperature Range", description: "Various temperature ranges from -25°C to +15°C" },
    { icon: <Factory className="h-6 w-6" />, title: "Commercial Use", description: "Built for heavy-duty commercial and industrial applications" }
  ];

  const temperatureRanges = [
    {
      title: "Chiller Rooms",
      range: "+2°C to +10°C",
      description: "For dairy products, fruits, vegetables, and pharmaceuticals",
      applications: ["Dairy Products", "Fresh Fruits", "Vegetables", "Medicines"]
    },
    {
      title: "Freezer Rooms",
      range: "-18°C to -25°C",
      description: "For frozen foods, ice cream, and long-term storage",
      applications: ["Frozen Foods", "Ice Cream", "Meat Products", "Fish Storage"]
    },
    {
      title: "Blast Chillers",
      range: "-40°C Rapid",
      description: "For rapid cooling and blast freezing applications",
      applications: ["Bakery Items", "Cooked Foods", "Seafood", "Ready Meals"]
    }
  ];

  const applications = [
    "Restaurants & Hotels", "Hospitals & Pharma", "Food Processing", "Dairy Industries",
    "Meat Processing", "Catering Services", "Ice Cream Parlors", "Grocery Stores"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Cold Room Price in Bareilly | Walk-in Freezers | Commercial Refrigeration</title>
        <meta name="description" content="Buy Cold Rooms in Bareilly, UP. Best prices on Daikin, Carrier, Blue Star cold storage systems. Walk-in freezers, blast chillers for restaurants, hospitals. Professional installation." />
        <meta name="keywords" content="cold room price Bareilly, walk-in freezer UP, commercial refrigeration, cold storage system, blast chiller, pharmaceutical cold room, food storage Bareilly" />
        <meta property="og:title" content="Best Cold Room Dealers in Bareilly | Commercial Refrigeration Systems" />
        <meta property="og:description" content="Premium cold rooms and walk-in freezers in Bareilly. Temperature-controlled storage for food, pharma, and commercial applications." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="/src/assets/cold-room.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Cold Room Dealers in Bareilly | Commercial Refrigeration Systems" />
        <meta name="twitter:description" content="Premium cold rooms and walk-in freezers in Bareilly. Temperature-controlled storage for food, pharma, and commercial applications." />
        <link rel="canonical" href="https://www.khandelwaldistributors.com/products/cold-room" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Cold Rooms & Storage Systems",
            "category": "Commercial Refrigeration",
            "description": "Temperature-controlled cold storage systems for commercial applications in Bareilly, UP",
            "brand": ["Blue Star", "Carrier", "Voltas", "Elanpro"],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.6",
              "reviewCount": "834"
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "150000",
              "highPrice": "1500000",
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
        <section className="relative py-16" style={{ backgroundImage: `url(${coldRoom})` }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 lg:pl-12 xl:pl-16 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/products" className="text-white hover:text-accent-warm transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Cold Rooms & Storage Systems in Bareilly
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mb-8">
              Commercial cold storage solutions for businesses in Bareilly, Uttar Pradesh.
              Walk-in freezers, blast chillers, and temperature-controlled storage for food, pharma, and industrial use.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="lg" onClick={() => window.open('tel:+919897595000', '_self')}>
                <Phone className="h-5 w-5" />
                Get Best Price Quote
              </Button>
              <Button variant="outline" size="lg" className="bg-green-600 text-white border-green-600 hover:bg-green-700" onClick={() => window.open('https://wa.me/919084417884?text=Hello, I need information about Cold Room systems in Bareilly', '_blank')}>
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
              Benefits of Cold Room Systems
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

        {/* Temperature Ranges */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Temperature Range Options
              </h2>
              <p className="text-xl text-muted-foreground">
                Different temperature ranges for various storage requirements
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {temperatureRanges.map((range, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{range.title}</CardTitle>
                    <Badge variant="outline" className="w-fit text-base font-bold">{range.range}</Badge>
                    <CardDescription className="text-base">{range.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Ideal For:</h4>
                    <div className="space-y-2">
                      {range.applications.map((app, appIndex) => (
                        <div key={appIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          {app}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Applications */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Cold Room Applications</h3>
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
                Premium Cold Room Models in Bareilly
              </h2>
              <p className="text-xl text-muted-foreground">
                High-quality cold storage systems with professional installation and service support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img
                      src={coldRoom}
                      alt={`${product.name} - Cold Room System`}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 right-4 bg-accent-warm">
                      {product.temperature}
                    </Badge>
                    <div className="absolute top-4 left-4 bg-blue-700 text-white px-2 py-1 rounded text-xs">
                      Commercial
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{product.name}</CardTitle>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{product.size}</span>
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

        {/* Technical Features */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Advanced Cold Room Features
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary">Food Grade Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Stainless steel interior and food-grade insulation for hygiene</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Thermometer className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary">Digital Temperature Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Precise temperature monitoring with alarms and data logging</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Snowflake className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary">Auto Defrost System</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Automatic defrosting to maintain efficiency and prevent ice buildup</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Factory className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary">Energy Efficient</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">High-quality insulation and efficient cooling systems reduce energy costs</p>
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
                Cold Room Installation in Bareilly
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Complete cold storage solutions across Bareilly district. Professional design,
                installation, and maintenance of cold rooms for all commercial applications.
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

        {/* Blog Preview Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4">Expert Guide</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Complete Guide to Cold Rooms in India
                </h2>
                <p className="text-xl text-muted-foreground">
                  Essential guide for food safety, business growth, and compliance
                </p>
              </div>

              <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src={coldRoom} 
                      alt="Cold Room Guide - Food safety and storage solutions"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-8">
                    <Badge className="mb-3">6 min read</Badge>
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Cold Rooms in India: Essential Guide for Food Safety and Business Growth
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Learn how to choose the right cold room for your restaurant, hotel, or food business. 
                      Understand temperature ranges, insulation types, capacity planning, and FSSAI compliance 
                      requirements for cold storage in India.
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Temperature range selection guide</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Capacity calculation for your business</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Energy efficiency tips to reduce costs</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">FSSAI compliance and maintenance</span>
                      </div>
                    </div>
                    <Link to="/blogs/cold-rooms-india-food-safety-business">
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
          category="cold-room"
          title="Cold Room Videos"
          description="Watch cold room construction and refrigeration system installations."
        />
      </main>

      <Footer />
    </div>
  );
};

export default ColdRoom;