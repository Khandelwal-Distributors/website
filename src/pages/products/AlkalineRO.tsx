import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeVideos from "@/components/YouTubeVideos";
import { Phone, ArrowLeft, Star, Droplets, Shield, Heart, Zap, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import alkalineRo from "@/assets/alkaline-ro.jpg";

const AlkalineRO = () => {
  const products = [
    { name: "Zero B Alkaline Pro Max", stages: "8 Stage", capacity: "12L/Hr", price: "₹22,000", features: ["RO+UV+Alkaline", "Mineral Boost", "TDS Controller"] },
    { name: "Zero B Eco Alkaline", stages: "7 Stage", capacity: "10L/Hr", price: "₹18,000", features: ["Alkaline Technology", "Copper Boost", "Auto Flush"] },
    { name: "Zero B Premium Pure", stages: "6 Stage", capacity: "8L/Hr", price: "₹15,000", features: ["RO+UV+TDS", "Storage Tank", "Filter Alerts"] },
    { name: "Zero B Elite Max", stages: "9 Stage", capacity: "15L/Hr", price: "₹26,000", features: ["Advanced Alkaline", "Mineral Balance", "Smart Display"] },
    { name: "Zero B Compact Plus", stages: "5 Stage", capacity: "6L/Hr", price: "₹12,000", features: ["Space Saving", "Basic RO", "Affordable"] },
    { name: "Zero B Commercial", stages: "8 Stage", capacity: "25L/Hr", price: "₹35,000", features: ["High Capacity", "Commercial Grade", "Auto Operation"] }
  ];

  const benefits = [
    { icon: <Droplets className="h-6 w-6" />, title: "Pure Water", description: "Advanced RO+UV purification removes all contaminants" },
    { icon: <Heart className="h-6 w-6" />, title: "Alkaline Health", description: "Alkaline water boosts immunity and energy levels" },
    { icon: <Shield className="h-6 w-6" />, title: "Mineral Rich", description: "Retains essential minerals while removing harmful substances" },
    { icon: <Zap className="h-6 w-6" />, title: "Smart Features", description: "Auto-flush, filter alerts, and digital display" }
  ];

  const stages = [
    { stage: "Pre-Filter", purpose: "Removes sediments and dirt particles" },
    { stage: "Carbon Filter", purpose: "Eliminates chlorine and bad taste/odor" },
    { stage: "RO Membrane", purpose: "Removes dissolved salts and heavy metals" },
    { stage: "UV Chamber", purpose: "Kills bacteria, viruses, and microorganisms" },
    { stage: "Alkaline Filter", purpose: "Increases pH and adds beneficial minerals" },
    { stage: "TDS Controller", purpose: "Maintains optimal mineral content" },
    { stage: "Copper Boost", purpose: "Adds copper ions for health benefits" },
    { stage: "Final Polish", purpose: "Final taste and odor enhancement" }
  ];

  const healthBenefits = [
    "Better Hydration", "Improved Immunity", "Enhanced Energy Levels", "Better Digestion",
    "Antioxidant Properties", "pH Balance", "Mineral Absorption", "Detoxification"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Alkaline RO Water Purifier Price in Bareilly | Zero B RO Systems | Health Benefits</title>
        <meta name="description" content="Buy Alkaline RO Water Purifiers in Bareilly, UP. Best prices on Zero B alkaline RO systems. 8-stage purification, health benefits. Free installation & service." />
        <meta name="keywords" content="alkaline RO price Bareilly, Zero B RO Bareilly, alkaline water purifier UP, health water system, RO UV alkaline, mineral water purifier Bareilly" />
        <meta property="og:title" content="Best Alkaline RO Dealers in Bareilly | Healthy Water Solutions" />
        <meta property="og:description" content="Premium alkaline RO water purifiers in Bareilly. 8-stage purification, health benefits, mineral rich water with professional installation." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="/src/assets/alkaline-ro.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Alkaline RO Dealers in Bareilly | Healthy Water Solutions" />
        <meta name="twitter:description" content="Premium alkaline RO water purifiers in Bareilly. 8-stage purification, health benefits, mineral rich water with professional installation." />
        <link rel="canonical" href="https://kdenterprisesbareilly.com/products/alkaline-ro" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Alkaline RO Water Purifiers",
            "category": "Water Purification",
            "description": "Advanced alkaline water purification systems for homes and offices in Bareilly, UP",
            "brand": ["Zero B", "Kent", "Aquaguard", "Blue Star"],
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "15000",
              "highPrice": "45000",
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
        <section className="relative py-16" style={{backgroundImage: `url(${alkalineRo})`}}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/products" className="text-white hover:text-accent-warm transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Alkaline RO Water Purifiers in Bareilly
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mb-8">
              Advanced alkaline water purification systems for homes and offices in Bareilly, Uttar Pradesh. 
              Multi-stage RO+UV+Alkaline technology for pure, healthy, mineral-rich water.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="lg">
                <Phone className="h-5 w-5" />
                Get Best Price Quote
              </Button>
              <Button variant="outline" size="lg" className="bg-green-600 text-white border-green-600 hover:bg-green-700" onClick={() => window.open('https://wa.me/919876543210?text=Hello, I need information about Alkaline RO systems in Bareilly', '_blank')}>
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
              Benefits of Alkaline RO Water Purifiers
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

        {/* Purification Stages */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Advanced Multi-Stage Purification Process
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive water treatment for complete purity and health benefits
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stages.map((stage, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <CardTitle className="text-base text-primary">{stage.stage}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{stage.purpose}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Health Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Health Benefits of Alkaline Water
              </h2>
              <p className="text-xl text-muted-foreground">
                Experience improved health and wellness with alkaline mineral water
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {healthBenefits.map((benefit, index) => (
                <div key={index} className="bg-card border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-2">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Best Alkaline RO Models in Bareilly
              </h2>
              <p className="text-xl text-muted-foreground">
                Premium alkaline RO water purifiers with comprehensive service support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={alkalineRo} 
                      alt={`${product.name} - Alkaline RO Water Purifier`}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 right-4 bg-accent-warm">
                      {product.stages}
                    </Badge>
                    <div className="absolute top-4 left-4 bg-blue-500 text-white px-2 py-1 rounded text-xs">
                      Alkaline
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
                    <Button className="w-full">
                      <Phone className="h-4 w-4" />
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service & Maintenance */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Complete Service & Maintenance
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary">Installation & Setup</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Professional installation, plumbing connections, and system commissioning</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Droplets className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary">Filter Replacement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Timely filter changes, genuine spare parts, and system optimization</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary">Health Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Regular water quality testing, TDS monitoring, and health consultations</p>
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
                Alkaline RO Installation & Service in Bareilly
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Complete alkaline RO solutions across Bareilly district. Professional installation, 
                regular maintenance, and 24/7 service support for healthy water systems.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="secondary" size="lg">
                  <Phone className="h-5 w-5" />
                  Get Best Price Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <YouTubeVideos 
          category="alkaline-ro" 
          title="Alkaline RO Videos"
          description="Watch installation guides and health benefits of alkaline water systems."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default AlkalineRO;