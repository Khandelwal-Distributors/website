import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, ArrowLeft, Star, Sun, Leaf, TrendingDown, Shield, Home, Building, Hotel, School, Hospital, Factory, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import solarWaterHeater from "@/assets/solar-water-heater.jpg";

const SolarWaterHeater = () => {
  const products = [
    { name: "Inter Solar 100L ETC", capacity: "100 Liters", type: "Residential", price: "₹25,000", features: ["Evacuated Tube", "5 Year Warranty", "ISI Certified"] },
    { name: "Inter Solar 200L ETC", capacity: "200 Liters", type: "Family", price: "₹35,000", features: ["High Efficiency", "Insulated Tank", "Weather Resistant"] },
    { name: "Inter Solar 300L FPC", capacity: "300 Liters", type: "Commercial", price: "₹45,000", features: ["Flat Plate Collector", "Heavy Duty", "Long Life"] },
    { name: "Inter Solar 150L Premium", capacity: "150 Liters", type: "Premium", price: "₹32,000", features: ["SS Inner Tank", "Magnesium Anode", "Digital Display"] },
    { name: "Inter Solar 250L Commercial", capacity: "250 Liters", type: "Commercial", price: "₹42,000", features: ["Commercial Grade", "High Pressure", "Auto Fill"] },
    { name: "Inter Solar 500L Industrial", capacity: "500 Liters", type: "Industrial", price: "₹65,000", features: ["Industrial Use", "Bulk Supply", "Modular Design"] }
  ];

  const benefits = [
    { icon: <Sun className="h-6 w-6" />, title: "Solar Powered", description: "Harness free solar energy for hot water heating" },
    { icon: <TrendingDown className="h-6 w-6" />, title: "Zero Bills", description: "Reduce electricity bills by up to 80%" },
    { icon: <Leaf className="h-6 w-6" />, title: "Eco-Friendly", description: "Reduce carbon footprint and save environment" },
    { icon: <Shield className="h-6 w-6" />, title: "Long Lasting", description: "20+ years lifespan with minimal maintenance" }
  ];

  const types = [
    { 
      title: "Evacuated Tube Collectors (ETC)", 
      description: "Best for North Indian climate, works in winters too",
      features: ["High Efficiency", "Works in Cold", "Vacuum Insulation"]
    },
    { 
      title: "Flat Plate Collectors (FPC)", 
      description: "Durable design for commercial applications",
      features: ["Commercial Grade", "Weather Resistant", "Easy Maintenance"]
    }
  ];

  const applications = [
    { name: "Residential Homes", icon: <Home className="h-6 w-6" /> }, 
    { name: "Hotels & Resorts", icon: <Hotel className="h-6 w-6" /> }, 
    { name: "Hospitals", icon: <Hospital className="h-6 w-6" /> }, 
    { name: "Schools & Colleges", icon: <School className="h-6 w-6" /> },
    { name: "Hostels", icon: <Building className="h-6 w-6" /> }, 
    { name: "Gymnasiums", icon: <Factory className="h-6 w-6" /> }, 
    { name: "Swimming Pools", icon: <Building className="h-6 w-6" /> }, 
    { name: "Industrial Processes", icon: <Factory className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Solar Water Heater Price in Bareilly | Eco-Friendly Hot Water Solutions | Zero Bills</title>
        <meta name="description" content="Buy Solar Water Heaters in Bareilly, UP. Best prices on Inter Solar systems. Reduce electricity bills by 80%. ETC & FPC models. Free installation & 5-year warranty." />
        <meta name="keywords" content="solar water heater price Bareilly, solar geyser Bareilly, eco-friendly water heater UP, Inter Solar Bareilly, zero electricity bill, green energy solution" />
        <meta property="og:title" content="Best Solar Water Heater Dealers in Bareilly | Eco-Friendly Solutions" />
        <meta property="og:description" content="Premium solar water heating systems in Bareilly. Save 80% on electricity bills with eco-friendly solar geysers. Professional installation and service." />
        <link rel="canonical" href="https://yoursite.com/products/solar-water-heater" />
      </Helmet>

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary/90 to-secondary/90 py-16" style={{backgroundImage: "url('/src/assets/solar-water-heater.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/products" className="text-white hover:text-accent-warm transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Solar Water Heaters in Bareilly
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mb-8">
              Eco-friendly solar water heating systems for homes and businesses in Bareilly, Uttar Pradesh. 
              Reduce electricity bills by 80% with clean, renewable solar energy technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="lg">
                <Phone className="h-5 w-5" />
                Get Best Price Quote
              </Button>
              <Button variant="outline" size="lg" className="bg-green-600 text-white border-green-600 hover:bg-green-700" onClick={() => window.open('https://wa.me/919876543210?text=Hello, I need information about Solar Water Heaters in Bareilly', '_blank')}>
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
              Benefits of Solar Water Heaters
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
                Solar Water Heater Technologies
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the right technology based on your needs and climate conditions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {types.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{type.title}</CardTitle>
                    <CardDescription className="text-base">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {type.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Applications */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Perfect For</h3>
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
                Best Solar Water Heater Models in Bareilly
              </h2>
              <p className="text-xl text-muted-foreground">
                High-quality solar water heaters with professional installation and service support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={solarWaterHeater} 
                      alt={`${product.name} - Solar Water Heater`}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 right-4 bg-accent-warm">
                      {product.type}
                    </Badge>
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded text-xs">
                      Eco-Friendly
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

        {/* Savings Calculator Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Calculate Your Savings
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                A typical 200L solar water heater can save ₹15,000-20,000 annually on electricity bills. 
                Your investment pays back in just 2-3 years with 20+ years of free hot water!
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">₹20,000</div>
                  <div className="text-sm opacity-90">Annual Savings</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">2-3 Years</div>
                  <div className="text-sm opacity-90">Payback Period</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">20+ Years</div>
                  <div className="text-sm opacity-90">System Life</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Service Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Solar Water Heater Installation in Bareilly
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Professional solar water heater installation across Bareilly district. 
                Complete solution from roof survey to commissioning with 5-year warranty.
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

export default SolarWaterHeater;