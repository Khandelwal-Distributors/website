import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeVideos from "@/components/YouTubeVideos";
import { Phone, ArrowLeft, Star, Thermometer, Snowflake, Shield, Zap, Building, Hotel, School, Hospital, Factory, Home, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import deepFreezer from "@/assets/deep-freezer.jpg";

const DeepFreezers = () => {
  const products = [
    { name: "Elanpro Glass Door Freezer GDF-400", capacity: "400 Litres", type: "Glass Door", price: "₹45,000", features: ["Glass Display Door", "LED Interior Lighting", "Digital Temperature Control", "Auto Defrost"] },
    { name: "Elanpro Chest Freezer CF-300", capacity: "300 Litres", type: "Chest Freezer", price: "₹38,000", features: ["Energy Efficient", "Lock & Key", "Removable Baskets", "Manual Defrost"] },
    { name: "Elanpro Display Freezer DF-500", capacity: "500 Litres", type: "Display Freezer", price: "₹55,000", features: ["Curved Glass Top", "LED Display Panel", "Fast Freeze Function", "Sliding Glass Doors"] },
    { name: "Elanpro Vertical Freezer VF-250", capacity: "250 Litres", type: "Vertical Freezer", price: "₹42,000", features: ["Multi-Air Flow", "Adjustable Shelves", "Door Lock", "Energy Star Rated"] },
    { name: "Elanpro Under Counter Freezer UCF-150", capacity: "150 Litres", type: "Under Counter", price: "₹28,000", features: ["Compact Design", "Stainless Steel", "Reversible Door", "Low Noise"] },
    { name: "Elanpro Commercial Chest Freezer CCF-600", capacity: "600 Litres", type: "Commercial Chest", price: "₹65,000", features: ["Heavy Duty Compressor", "Thick Insulation", "Durable Construction", "5 Year Warranty"] }
  ];

  const benefits = [
    { icon: <Thermometer className="h-6 w-6" />, title: "Precise Temperature", description: "Consistent -18°C to -25°C temperature maintenance" },
    { icon: <Snowflake className="h-6 w-6" />, title: "Fast Freeze", description: "Quick freezing technology preserves food quality" },
    { icon: <Shield className="h-6 w-6" />, title: "Food Safety", description: "Maintains food safety standards for commercial use" },
    { icon: <Zap className="h-6 w-6" />, title: "Energy Efficient", description: "Low power consumption with high efficiency compressors" }
  ];

  const freezerTypes = [
    {
      title: "Glass Door Freezers",
      description: "Perfect for retail display with excellent visibility",
      features: ["Transparent glass doors", "LED interior lighting", "Digital controls", "Auto defrost function"],
      applications: ["Ice Cream Parlors", "Convenience Stores", "Supermarkets"],
      priceRange: "₹35,000 - ₹60,000"
    },
    {
      title: "Chest Freezers",
      description: "High-capacity horizontal freezers for bulk storage",
      features: ["Large storage capacity", "Energy efficient", "Manual/Auto defrost", "Removable baskets"],
      applications: ["Restaurants", "Hotels", "Food Processing"],
      priceRange: "₹25,000 - ₹70,000"
    },
    {
      title: "Vertical Freezers",
      description: "Space-saving upright design with multiple compartments",
      features: ["Multi-shelf design", "Door storage", "Adjustable shelves", "Compact footprint"],
      applications: ["Small Restaurants", "Cafes", "Bakeries"],
      priceRange: "₹30,000 - ₹50,000"
    }
  ];

  const applications = [
    { name: "Restaurants & Hotels", icon: <Hotel className="h-6 w-6" /> },
    { name: "Ice Cream Parlors", icon: <Building className="h-6 w-6" /> },
    { name: "Supermarkets", icon: <Building className="h-6 w-6" /> },
    { name: "Food Processing Units", icon: <Factory className="h-6 w-6" /> },
    { name: "Hospitals & Pharmacies", icon: <Hospital className="h-6 w-6" /> },
    { name: "Catering Services", icon: <Building className="h-6 w-6" /> },
    { name: "Bakeries & Confectionery", icon: <Building className="h-6 w-6" /> },
    { name: "Convenience Stores", icon: <Building className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Elanpro Deep Freezer Price in Bareilly | Commercial Freezer | Glass Door Freezer | Chest Freezer</title>
        <meta name="description" content="Buy Elanpro Deep Freezers in Bareilly, UP. Best prices on commercial freezers, glass door freezers, chest freezers. Perfect for restaurants, hotels, ice cream parlors. Professional installation." />
        <meta name="keywords" content="Elanpro freezer price Bareilly, deep freezer UP, commercial freezer Bareilly, glass door freezer, chest freezer Bareilly, restaurant freezer" />
        <meta property="og:title" content="Best Elanpro Deep Freezer Dealers in Bareilly | Commercial Refrigeration Solutions" />
        <meta property="og:description" content="Premium Elanpro deep freezers and commercial refrigeration solutions for restaurants, hotels, and commercial establishments in Bareilly." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="/src/assets/deep-freezer.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Elanpro Deep Freezer Dealers in Bareilly | Commercial Refrigeration Solutions" />
        <meta name="twitter:description" content="Premium Elanpro deep freezers and commercial refrigeration solutions for restaurants, hotels, and commercial establishments in Bareilly." />
        <link rel="canonical" href="https://kdenterprisesbareilly.com/products/deep-freezers" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Elanpro Deep Freezers",
            "category": "Commercial Refrigeration",
            "description": "Commercial deep freezers and refrigeration solutions for restaurants and retail in Bareilly, UP",
            "brand": ["Elanpro", "Blue Star", "Voltas", "Carrier"],
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "25000",
              "highPrice": "250000",
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
        <section className="relative bg-gradient-to-r from-primary/90 to-secondary/90 py-16" style={{ backgroundImage: `url(${deepFreezer})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/products" className="text-white hover:text-accent-warm transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Elanpro Deep Freezers in Bareilly
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mb-8">
              Premium Elanpro deep freezers and commercial refrigeration solutions in Bareilly, Uttar Pradesh.
              Glass door freezers, chest freezers, and display freezers for restaurants, hotels, and commercial use.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="lg" onClick={() => window.open('tel:+919084417884', '_self')}>
                <Phone className="h-5 w-5" />
                Get Best Price Quote
              </Button>
              <Button variant="outline" size="lg" className="bg-green-600 text-white border-green-600 hover:bg-green-700" onClick={() => window.open('https://wa.me/919084417884?text=Hello, I need information about Elanpro Deep Freezers in Bareilly', '_blank')}>
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
              Why Choose Elanpro Deep Freezers?
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
                Types of Elanpro Deep Freezers
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the right commercial freezer for your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {freezerTypes.map((type, index) => (
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
              <h3 className="text-2xl font-bold text-primary mb-6">Commercial Applications</h3>
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
                Elanpro Deep Freezer Models in Bareilly
              </h2>
              <p className="text-xl text-muted-foreground">
                High-performance commercial freezers with advanced temperature control and energy efficiency
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img
                      src={deepFreezer}
                      alt={`${product.name} - Elanpro Deep Freezer`}
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
                    <Button className="w-full" onClick={() => window.open('tel:+919084417884', '_self')}>
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
                Elanpro Deep Freezer Installation & Service in Bareilly
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Authorized Elanpro dealer in Bareilly with complete commercial refrigeration solutions.
                Professional installation, maintenance, and repair services for all Elanpro freezer models.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="secondary" size="lg" onClick={() => window.open('tel:+919084417884', '_self')}>
                  <Phone className="h-5 w-5" />
                  Call: +91-90844-17884
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <YouTubeVideos
          category="deep-freezers"
          title="Deep Freezer Videos"
          description="Watch detailed reviews and installation guides for commercial deep freezers."
        />
      </main>

      <Footer />
    </div>
  );
};

export default DeepFreezers;