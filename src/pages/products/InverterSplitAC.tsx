import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, ArrowLeft, Star, Thermometer, Zap, Shield, Award, TrendingUp, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import inverterSplitAc from "@/assets/inverter-split-ac.jpg";

const InverterSplitAC = () => {
  const products = [
    { name: "Daikin FTXS35K Inverter", capacity: "1.5 Ton", rating: "5 Star", price: "₹38,000", features: ["Inverter Technology", "Copper Condenser", "5 Year Warranty"] },
    { name: "Carrier Inverter Neo", capacity: "1 Ton", rating: "5 Star", price: "₹32,000", features: ["Dual Inverter", "Anti-Corrosion", "Smart Connect"] },
    { name: "Mitsubishi Heavy Inverter", capacity: "1 Ton", rating: "5 Star", price: "₹35,000", features: ["Heavy Duty", "PM 2.5 Filter", "Silent Operation"] },
    { name: "Amstrad Inverter Pro", capacity: "1.5 Ton", rating: "4 Star", price: "₹28,000", features: ["UK Technology", "Energy Saver", "Quick Cooling"] },
    { name: "Midea Inverter Smart", capacity: "1 Ton", rating: "5 Star", price: "₹30,000", features: ["WiFi Control", "Voice Control", "Self Cleaning"] },
    { name: "Godrej Inverter Green", capacity: "1.5 Ton", rating: "3 Star", price: "₹25,000", features: ["Eco Mode", "Fast Cooling", "Anti-Bacterial"] }
  ];

  const benefits = [
    { icon: <Zap className="h-6 w-6" />, title: "Energy Efficient", description: "Save up to 60% on electricity bills with inverter technology" },
    { icon: <Shield className="h-6 w-6" />, title: "Variable Speed", description: "Automatic speed adjustment based on room temperature" },
    { icon: <Award className="h-6 w-6" />, title: "Long Lasting", description: "Durable compressor with extended lifespan" },
    { icon: <TrendingUp className="h-6 w-6" />, title: "Smart Features", description: "WiFi connectivity and smartphone control options" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Inverter Split AC Price in Bareilly | Energy Efficient ACs | Best Deals 2024</title>
        <meta name="description" content="Buy Inverter Split ACs in Bareilly, Uttar Pradesh. Best prices on Daikin, Carrier, Mitsubishi Heavy inverter ACs. Free installation & 5-year warranty. Expert service since 2010." />
        <meta name="keywords" content="inverter split AC price Bareilly, energy efficient AC Bareilly, split AC dealers Bareilly, Daikin inverter AC, Carrier inverter AC, HVAC Bareilly UP" />
        <meta property="og:title" content="Best Inverter Split AC Dealers in Bareilly | Energy Efficient Air Conditioners" />
        <meta property="og:description" content="Shop premium inverter split ACs in Bareilly. Top brands, expert installation, best prices. Save up to 60% on electricity bills." />
        <link rel="canonical" href="https://yoursite.com/products/inverter-split-ac" />
      </Helmet>

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary/90 to-secondary/90 py-16" style={{backgroundImage: "url('/src/assets/inverter-split-ac.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/products" className="text-white hover:text-accent-warm transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Inverter Split Air Conditioners in Bareilly
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mb-8">
              Discover energy-efficient inverter split ACs from top brands in Bareilly, Uttar Pradesh. 
              Save up to 60% on electricity bills with advanced inverter technology and smart features.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="lg">
                <Phone className="h-5 w-5" />
                Get Best Price Quote
              </Button>
              <Button variant="outline" size="lg" className="bg-green-600 text-white border-green-600 hover:bg-green-700" onClick={() => window.open('https://wa.me/919876543210?text=Hello, I need information about Inverter Split ACs in Bareilly', '_blank')}>
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
              Why Choose Inverter Split ACs?
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

        {/* Product Showcase */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Top Inverter Split AC Models in Bareilly
              </h2>
              <p className="text-xl text-muted-foreground">
                Premium inverter ACs with best prices and expert installation services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={inverterSplitAc} 
                      alt={`${product.name} - Inverter Split AC`}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 right-4 bg-accent-warm">
                      {product.rating}
                    </Badge>
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

        {/* Local Service Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Professional AC Installation & Service in Bareilly
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Serving Bareilly, Pilibhit, Budaun, Shahjahanpur and surrounding areas with 
                expert AC installation, maintenance, and repair services since 2010.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="secondary" size="lg">
                  <Phone className="h-5 w-5" />
                  Call: +91-XXXXX-XXXXX
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default InverterSplitAC;