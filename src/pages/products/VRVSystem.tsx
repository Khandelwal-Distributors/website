import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeVideos from "@/components/YouTubeVideos";
import { Phone, ArrowLeft, Star, Building2, Cpu, Zap, Settings, Building, Hotel, Hospital, ShoppingBag, School, Factory, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import vrvSystem from "@/assets/vrv-system.jpg";

const VRVSystem = () => {
  const systems = [
    { name: "Daikin VRV X7 Series", capacity: "8-64 HP", efficiency: "SEER 20+", price: "₹5,50,000+", features: ["Inverter Technology", "Heat Recovery", "Individual Zone Control"] },
    { name: "Daikin VRV A Series", capacity: "6-48 HP", efficiency: "SEER 18+", price: "₹4,20,000+", features: ["Air-Cooled", "R-32 Refrigerant", "Smart Control"] },
    { name: "Daikin VRV H Series", capacity: "10-54 HP", efficiency: "Heat Pump", price: "₹6,80,000+", features: ["Heat Pump", "All Season", "Energy Recovery"] },
    { name: "Mitsubishi VRF City Multi", capacity: "8-50 HP", efficiency: "SEER 19+", price: "₹5,00,000+", features: ["Simultaneous Heating/Cooling", "Modular Design", "Advanced Controls"] },
    { name: "Carrier VRF 30RB", capacity: "6-40 HP", efficiency: "SEER 17+", price: "₹4,50,000+", features: ["Scroll Compressor", "Hot Gas Bypass", "Building Management"] },
    { name: "Daikin VRV Water-Cooled", capacity: "12-72 HP", efficiency: "COP 4.2+", price: "₹8,50,000+", features: ["Water-Cooled", "High Efficiency", "Compact Design"] }
  ];

  const benefits = [
    { icon: <Zap className="h-6 w-6" />, title: "Energy Efficient", description: "Up to 40% energy savings compared to traditional systems" },
    { icon: <Settings className="h-6 w-6" />, title: "Individual Control", description: "Independent temperature control for each zone" },
    { icon: <Cpu className="h-6 w-6" />, title: "Smart Technology", description: "Advanced inverter technology with precise control" },
    { icon: <Building2 className="h-6 w-6" />, title: "Scalable Design", description: "Easily expandable for future requirements" }
  ];

  const applications = [
    { name: "Corporate Offices", icon: <Building className="h-6 w-6" /> }, 
    { name: "Hotels & Resorts", icon: <Hotel className="h-6 w-6" /> }, 
    { name: "Hospitals & Healthcare", icon: <Hospital className="h-6 w-6" /> }, 
    { name: "Shopping Malls", icon: <ShoppingBag className="h-6 w-6" /> },
    { name: "Educational Institutions", icon: <School className="h-6 w-6" /> }, 
    { name: "Data Centers", icon: <Factory className="h-6 w-6" /> }, 
    { name: "Manufacturing Facilities", icon: <Factory className="h-6 w-6" /> }, 
    { name: "Mixed-Use Buildings", icon: <Building2 className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>VRV System Price in Bareilly | Daikin VRF AC System | Commercial HVAC Solutions</title>
        <meta name="description" content="Buy VRV Systems in Bareilly, UP. Best prices on Daikin VRV, Mitsubishi VRF systems. Expert installation for commercial buildings, hotels, offices. Energy efficient HVAC solutions." />
        <meta name="keywords" content="VRV system price Bareilly, Daikin VRV Bareilly, VRF system UP, commercial HVAC Bareilly, office AC system, hotel HVAC installation, energy efficient AC system" />
        <meta property="og:title" content="Best VRV System Dealers in Bareilly | Commercial HVAC Solutions" />
        <meta property="og:description" content="Premium VRV/VRF systems for commercial buildings in Bareilly. Energy efficient, individual zone control, expert installation and service." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="/src/assets/vrv-system.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best VRV System Dealers in Bareilly | Commercial HVAC Solutions" />
        <meta name="twitter:description" content="Premium VRV/VRF systems for commercial buildings in Bareilly. Energy efficient, individual zone control, expert installation and service." />
        <link rel="canonical" href="https://kdenterprisesbareilly.com/products/vrv-system" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "VRV Systems",
            "category": "Commercial HVAC",
            "description": "Advanced Variable Refrigerant Volume systems for commercial buildings in Bareilly, UP",
            "brand": ["Daikin", "Mitsubishi", "Carrier"],
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "420000",
              "highPrice": "850000",
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
        <section className="relative bg-gradient-to-r from-primary/90 to-secondary/90 py-16" style={{backgroundImage: "url('/src/assets/vrv-system.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/products" className="text-white hover:text-accent-warm transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                VRV Systems in Bareilly
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mb-8">
              Advanced Variable Refrigerant Volume systems for commercial buildings in Bareilly, Uttar Pradesh. 
              Energy-efficient HVAC solutions with individual zone control and smart technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="lg">
                <Phone className="h-5 w-5" />
                Get Best Price Quote
              </Button>
              <Button variant="outline" size="lg" className="bg-green-600 text-white border-green-600 hover:bg-green-700" onClick={() => window.open('https://wa.me/919876543210?text=Hello, I need information about VRV Systems in Bareilly', '_blank')}>
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
              Advantages of VRV Systems
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
                Ideal Applications for VRV Systems
              </h2>
              <p className="text-xl text-muted-foreground">
                Perfect HVAC solutions for diverse commercial and institutional buildings
              </p>
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

        {/* System Showcase */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Premium VRV System Models in Bareilly
              </h2>
              <p className="text-xl text-muted-foreground">
                High-performance VRV systems with comprehensive installation and service support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {systems.map((system, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={vrvSystem} 
                      alt={`${system.name} - VRV System`}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 right-4 bg-accent-warm">
                      {system.efficiency}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{system.name}</CardTitle>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{system.capacity}</span>
                      <span className="text-lg font-bold text-accent-warm">{system.price}</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {system.features.map((feature, fIndex) => (
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

        {/* Technical Specifications */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Why Choose Our VRV Solutions?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-primary">Design & Engineering</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Custom system design, load calculations, and technical drawings for optimal performance</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-primary">Installation & Commissioning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Professional installation, testing, and system commissioning by certified technicians</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-primary">Service & Maintenance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Comprehensive AMC packages, 24/7 support, and spare parts availability</p>
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
                VRV System Installation in Bareilly
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Complete VRV system solutions across Bareilly district. From design consultation 
                to installation and commissioning - your partner for premium HVAC systems.
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

        {/* Video Section */}
        <YouTubeVideos 
          category="vrv-system" 
          title="VRV System Videos"
          description="Explore variable refrigerant volume systems for large commercial spaces."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default VRVSystem;