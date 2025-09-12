import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeVideos from "@/components/YouTubeVideos";
import { Phone, ArrowLeft, Star, Wind, Fan, Zap, Home, Building, Hospital, School, Hotel, Factory, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ventilationHrv from "@/assets/ventilation-hrv.jpg";

const VentilationHRV = () => {
  const products = [
    { name: "Daikin VAM800FB HRV", type: "Heat Recovery Ventilator", capacity: "200 CFM", price: "₹45,000", features: ["Heat Recovery", "Energy Efficient", "HEPA Filter"] },
    { name: "Astberg Exhaust Fan AE-150", type: "Exhaust Fan", capacity: "150 CFM", price: "₹15,000", features: ["High Speed", "Low Noise", "Durable Motor"] },
    { name: "Daikin Fresh Air System", type: "Fresh Air Unit", capacity: "300 CFM", price: "₹65,000", features: ["HEPA Filtration", "Variable Speed", "Smart Controls"] },
    { name: "Panasonic WhisperCeiling", type: "Ventilation Fan", capacity: "100 CFM", price: "₹8,000", features: ["Ultra Quiet", "Energy Star", "Easy Install"] },
    { name: "Daikin Total Heat Exchanger", type: "ERV System", capacity: "400 CFM", price: "₹75,000", features: ["Heat + Moisture Recovery", "PM 2.5 Filter", "Smart Operation"] },
    { name: "Astberg Commercial Fan", type: "Industrial Fan", capacity: "500 CFM", price: "₹25,000", features: ["Heavy Duty", "Metal Body", "High CFM"] }
  ];

  const benefits = [
    { icon: <Wind className="h-6 w-6" />, title: "Fresh Air", description: "Continuous supply of fresh outdoor air for better health" },
    { icon: <Fan className="h-6 w-6" />, title: "Air Circulation", description: "Improved air movement and elimination of stagnant air" },
    { icon: <Zap className="h-6 w-6" />, title: "Energy Recovery", description: "Recover energy from exhaust air to reduce HVAC costs" },
    { icon: <Home className="h-6 w-6" />, title: "Indoor Air Quality", description: "Remove pollutants, odors, and excess moisture" }
  ];

  const ventilationTypes = [
    { 
      title: "Heat Recovery Ventilators (HRV)", 
      description: "Recover heat from exhaust air while bringing fresh air",
      features: ["Heat Recovery", "Energy Efficient", "Filtered Air"],
      applications: ["Homes", "Offices", "Schools"],
      efficiency: "Up to 85% heat recovery"
    },
    { 
      title: "Energy Recovery Ventilators (ERV)", 
      description: "Recover both heat and moisture for optimal comfort",
      features: ["Heat + Moisture Recovery", "Humidity Control", "Year-round Comfort"],
      applications: ["Commercial Buildings", "Humid Climates", "Large Homes"],
      efficiency: "Up to 80% total energy recovery"
    },
    { 
      title: "Exhaust Fans", 
      description: "Remove stale air, odors, and moisture from spaces",
      features: ["Simple Installation", "Cost Effective", "Various Sizes"],
      applications: ["Bathrooms", "Kitchens", "Warehouses"],
      efficiency: "Direct air removal"
    },
    { 
      title: "Fresh Air Systems", 
      description: "Dedicated outdoor air systems with filtration",
      features: ["HEPA Filtration", "Variable Speed", "Smart Controls"],
      applications: ["Clean Rooms", "Hospitals", "Premium Offices"],
      efficiency: "100% fresh air with filtration"
    }
  ];

  const applications = [
    "Residential Homes", "Commercial Offices", "Hospitals & Clinics", "Schools & Universities",
    "Restaurants & Kitchens", "Industrial Facilities", "Data Centers", "Clean Rooms"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Ventilation Fan & HRV System Price in Bareilly | Heat Recovery Ventilators | Fresh Air Solutions</title>
        <meta name="description" content="Buy Ventilation Fans & HRV Systems in Bareilly, UP. Best prices on Daikin, Astberg, Panasonic ventilators. Heat recovery, fresh air systems for homes & offices. Energy efficient." />
        <meta name="keywords" content="ventilation fan price Bareilly, HRV system UP, heat recovery ventilator, exhaust fan Bareilly, fresh air system, energy recovery ventilator Daikin" />
        <meta property="og:title" content="Best Ventilation & HRV System Dealers in Bareilly | Fresh Air Solutions" />
        <meta property="og:description" content="Premium ventilation and heat recovery systems in Bareilly. Fresh air solutions with energy recovery for homes and commercial buildings." />
        <link rel="canonical" href="https://yoursite.com/products/ventilation-hrv" />
      </Helmet>

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-16" style={{backgroundImage: `url(${ventilationHrv})`}}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/products" className="text-white hover:text-accent-warm transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Ventilation Fans & HRV Systems in Bareilly
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mb-8">
              Advanced ventilation and heat recovery systems for homes and buildings in Bareilly, Uttar Pradesh. 
              Fresh air solutions with energy recovery, exhaust fans, and indoor air quality improvement.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="lg">
                <Phone className="h-5 w-5" />
                Get Best Price Quote
              </Button>
              <Button variant="outline" size="lg" className="bg-green-600 text-white border-green-600 hover:bg-green-700" onClick={() => window.open('https://wa.me/919876543210?text=Hello, I need information about Ventilation HRV systems in Bareilly', '_blank')}>
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
              Benefits of Ventilation & HRV Systems
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

        {/* Ventilation Types */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Types of Ventilation Systems
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the right ventilation technology for your air quality needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {ventilationTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{type.title}</CardTitle>
                    <CardDescription className="text-base">{type.description}</CardDescription>
                    <Badge variant="outline" className="w-fit">{type.efficiency}</Badge>
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
              <h3 className="text-2xl font-bold text-primary mb-6">Ventilation Applications</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {applications.map((app, index) => {
                const icons = [Home, Building, Hospital, School, Hotel, Factory, Building, Wind];
                const Icon = icons[index] || Wind;
                return (
                  <div key={index} className="bg-card border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                    <div className="flex justify-center mb-2">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <span className="font-medium">{app}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Energy Savings Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Energy Recovery Benefits
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                HRV and ERV systems recover up to 85% of energy from exhaust air, 
                significantly reducing heating and cooling costs while maintaining fresh air supply.
              </p>
              <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">85%</div>
                  <div className="text-sm opacity-90">Heat Recovery</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">40%</div>
                  <div className="text-sm opacity-90">Energy Savings</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Fresh Air</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">HEPA</div>
                  <div className="text-sm opacity-90">Filtration</div>
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
                Premium Ventilation Models in Bareilly
              </h2>
              <p className="text-xl text-muted-foreground">
                High-performance ventilation systems with comprehensive installation and service support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={ventilationHrv} 
                      alt={`${product.name} - Ventilation System`}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 right-4 bg-accent-warm">
                      {product.capacity}
                    </Badge>
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-2 py-1 rounded text-xs">
                      Fresh Air
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

        {/* Indoor Air Quality */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Improve Indoor Air Quality
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Wind className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary">Remove Pollutants</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Eliminate dust, allergens, VOCs, and harmful indoor air pollutants</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Fan className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary">Control Humidity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Maintain optimal humidity levels to prevent mold and improve comfort</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary">Energy Efficient</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Recover energy from exhaust air to minimize operating costs</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Home className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary">Healthier Living</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Create healthier indoor environments for better wellness</p>
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
                Ventilation System Installation in Bareilly
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Complete ventilation solutions across Bareilly district. Professional installation 
                of HRV systems, exhaust fans, and fresh air systems with air quality expertise.
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
          category="ventilation-hrv" 
          title="Ventilation HRV Videos"
          description="Learn about heat recovery ventilation and fresh air systems."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default VentilationHRV;