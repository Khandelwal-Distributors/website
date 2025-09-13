import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeVideos from "@/components/YouTubeVideos";
import { Phone, ArrowLeft, Star, Move, Home, Zap, Timer, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import portableAc from "@/assets/portable-ac.jpg";

const PortableAC = () => {
  const products = [
    { name: "Cruise Mobile Pro", capacity: "1 Ton", rating: "3 Star", price: "₹28,000", features: ["Portable Design", "Remote Control", "Easy Installation"] },
    { name: "Cruise Portable Deluxe", capacity: "1.5 Ton", rating: "3 Star", price: "₹32,000", features: ["Wheels Included", "Drain Hose", "Timer Function"] },
    { name: "Cruise Compact AC", capacity: "0.75 Ton", rating: "2 Star", price: "₹25,000", features: ["Compact Size", "Low Noise", "Energy Saver"] },
    { name: "Lloyd Portable", capacity: "1 Ton", rating: "3 Star", price: "₹30,000", features: ["Indian Brand", "Quick Cooling", "Auto Mode"] },
    { name: "Godrej Portable", capacity: "1.2 Ton", rating: "3 Star", price: "₹29,000", features: ["Eco-Friendly", "Fast Cooling", "Digital Display"] },
    { name: "Blue Star Portable", capacity: "1 Ton", rating: "4 Star", price: "₹35,000", features: ["Premium Quality", "Silent Operation", "Smart Features"] }
  ];

  const benefits = [
    { icon: <Move className="h-6 w-6" />, title: "Portable Design", description: "Move anywhere - no permanent installation needed" },
    { icon: <Home className="h-6 w-6" />, title: "Rental Friendly", description: "Perfect for rented homes and temporary setups" },
    { icon: <Zap className="h-6 w-6" />, title: "Quick Setup", description: "Plug and play - ready to use in minutes" },
    { icon: <Timer className="h-6 w-6" />, title: "Seasonal Use", description: "Store away when not needed, space-saving solution" }
  ];

  const applications = [
    "Rented Apartments", "Temporary Offices", "Server Rooms", "Small Shops",
    "Guest Rooms", "Studio Apartments", "Event Venues", "Emergency Cooling"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Portable AC Price in Bareilly | Mobile Air Conditioners | Rental Home Solutions</title>
        <meta name="description" content="Buy Portable ACs in Bareilly, UP. Best prices on Cruise, Lloyd, Godrej portable air conditioners. Perfect for rented homes, temporary offices. No installation required." />
        <meta name="keywords" content="portable AC price Bareilly, mobile AC Bareilly, rental home AC, temporary cooling solution, Cruise portable AC, no installation AC Bareilly UP" />
        <meta property="og:title" content="Best Portable AC Dealers in Bareilly | Mobile Air Conditioning Solutions" />
        <meta property="og:description" content="Premium portable ACs for rent homes and temporary spaces in Bareilly. Easy setup, no installation, move anywhere cooling solutions." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="/src/assets/portable-ac.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Portable AC Dealers in Bareilly | Mobile Air Conditioning Solutions" />
        <meta name="twitter:description" content="Premium portable ACs for rent homes and temporary spaces in Bareilly. Easy setup, no installation, move anywhere cooling solutions." />
        <link rel="canonical" href="https://kdenterprisesbareilly.com/products/portable-ac" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Portable Air Conditioners",
            "category": "Mobile Air Conditioning",
            "description": "Mobile AC solutions for rented homes and temporary spaces in Bareilly, UP",
            "brand": ["Cruise", "Lloyd", "Godrej", "Blue Star"],
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "25000",
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
        <section className="relative py-16" style={{backgroundImage: `url(${portableAc})`}}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/products" className="text-white hover:text-accent-warm transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Portable Air Conditioners in Bareilly
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mb-8">
              Mobile AC solutions for rented homes and temporary spaces in Bareilly, Uttar Pradesh. 
              No installation required - plug, play, and enjoy instant cooling anywhere you go.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="lg">
                <Phone className="h-5 w-5" />
                Get Best Price Quote
              </Button>
              <Button variant="outline" size="lg" className="bg-green-600 text-white border-green-600 hover:bg-green-700" onClick={() => window.open('https://wa.me/919876543210?text=Hello, I need information about Portable ACs in Bareilly', '_blank')}>
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
              Why Choose Portable Air Conditioners?
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

        {/* Applications Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Perfect for These Situations
              </h2>
              <p className="text-xl text-muted-foreground">
                Ideal cooling solutions for temporary and space-constrained environments
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {applications.map((app, index) => (
                <div key={index} className="bg-card border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-2">
                    <Move className="h-8 w-8 text-primary" />
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
                Best Portable AC Models in Bareilly
              </h2>
              <p className="text-xl text-muted-foreground">
                Quality portable ACs with excellent cooling performance and easy mobility
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={portableAc} 
                      alt={`${product.name} - Portable Air Conditioner`}
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

        {/* Setup Guide Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Simple 3-Step Setup
              </h2>
              <p className="text-xl text-muted-foreground">
                Get your portable AC running in minutes with our easy setup process
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
                  <CardTitle className="text-primary">Position & Connect</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Place near window, connect exhaust hose to window kit</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
                  <CardTitle className="text-primary">Plug & Power On</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Connect to power outlet and turn on the unit</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
                  <CardTitle className="text-primary">Set & Enjoy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Set desired temperature and enjoy instant cooling</p>
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
                Portable AC Sales & Support in Bareilly
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Complete portable AC solutions across Bareilly district. Sales, delivery, 
                setup assistance, and service support for all portable air conditioner models.
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
          category="portable-ac" 
          title="Portable AC Videos"
          description="Learn about portable air conditioners and their benefits."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default PortableAC;