import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, ArrowLeft, Star, Zap, Home, Clock, Wrench, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import windowAc from "@/assets/window-ac.jpg";

const WindowAC = () => {
  const products = [
    { name: "Carrier Estrella Neo", capacity: "1.5 Ton", rating: "3 Star", price: "₹25,000", features: ["Copper Condenser", "Auto Restart", "Sleep Mode"] },
    { name: "Godrej GWC 18UTC5", capacity: "1.5 Ton", rating: "5 Star", price: "₹28,000", features: ["Inverter Tech", "Anti-Bacterial", "Turbo Mode"] },
    { name: "Amstrad Window Pro", capacity: "1 Ton", rating: "2 Star", price: "₹18,000", features: ["UK Brand", "Quick Cooling", "Easy Install"] },
    { name: "Cruise Compact", capacity: "1 Ton", rating: "3 Star", price: "₹20,000", features: ["Compact Design", "Energy Saver", "Low Noise"] },
    { name: "Voltas Fixed Speed", capacity: "1.5 Ton", rating: "3 Star", price: "₹23,000", features: ["Indian Brand", "Reliable", "Service Support"] },
    { name: "Blue Star Window", capacity: "1 Ton", rating: "4 Star", price: "₹26,000", features: ["Premium Quality", "Durable", "Efficient Cooling"] }
  ];

  const benefits = [
    { icon: <Home className="h-6 w-6" />, title: "Space Saving", description: "Compact design perfect for small rooms and apartments" },
    { icon: <Zap className="h-6 w-6" />, title: "Easy Installation", description: "Simple window mounting, no complex piping required" },
    { icon: <Clock className="h-6 w-6" />, title: "Cost Effective", description: "Lower upfront cost compared to split ACs" },
    { icon: <Wrench className="h-6 w-6" />, title: "Low Maintenance", description: "Self-contained unit with minimal servicing needs" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Window AC Price in Bareilly | Best Window Air Conditioners | Expert Installation</title>
        <meta name="description" content="Buy Window ACs in Bareilly, UP. Best prices on Carrier, Godrej, Amstrad window air conditioners. Free installation & service. Affordable cooling solutions for homes." />
        <meta name="keywords" content="window AC price Bareilly, window air conditioner Bareilly, cheap AC Bareilly, Carrier window AC, Godrej window AC, AC dealers Bareilly UP" />
        <meta property="og:title" content="Best Window AC Dealers in Bareilly | Affordable Air Conditioners" />
        <meta property="og:description" content="Shop quality window ACs in Bareilly. Best prices, expert installation, reliable service. Perfect for small rooms and budget-conscious buyers." />
        <link rel="canonical" href="https://yoursite.com/products/window-ac" />
      </Helmet>

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary/90 to-secondary/90 py-16" style={{backgroundImage: "url('/src/assets/window-ac.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/products" className="text-white hover:text-accent-warm transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Window Air Conditioners in Bareilly
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mb-8">
              Affordable window ACs for homes and offices in Bareilly, Uttar Pradesh. 
              Compact design, easy installation, and reliable cooling at budget-friendly prices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => window.open('tel:+919429693410', '_self')}
              >
                <Phone className="h-5 w-5" />
                Get Best Price Quote
              </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="bg-green-600 text-white border-green-600 hover:bg-green-700" 
                      onClick={() => window.open('https://wa.me/919084417884?text=Hello, I am interested in this product. Please share more details.', '_blank')}
                    >
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
              Why Choose Window Air Conditioners?
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
                Best Window AC Models in Bareilly
              </h2>
              <p className="text-xl text-muted-foreground">
                Quality window ACs with professional installation and service support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={windowAc} 
                      alt={`${product.name} - Window Air Conditioner`}
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
                <Button 
                  className="w-full"
                  onClick={() => window.open('tel:+919429693410', '_self')}
                >
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
                Window AC Installation & Service in Bareilly
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Expert window AC installation services across Bareilly district. 
                Professional mounting, electrical connections, and post-installation support.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => window.open('tel:+919429693410', '_self')}
                >
                  <Phone className="h-5 w-5" />
                  Call: +91 9429693410
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

export default WindowAC;