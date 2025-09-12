import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeVideos from "@/components/YouTubeVideos";
import { Phone, ArrowLeft, Star, Wind, Building, Zap, Users, Home, Hotel, ShoppingBag, Factory, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import floorStandingAc from "@/assets/floor-standing-ac.jpg";

const FloorStandingAC = () => {
  const products = [
    { name: "Daikin Floor Standing FVXM50F", capacity: "3 Ton", rating: "5 Star", price: "₹1,20,000", features: ["Inverter Technology", "Floor Mounted", "High Airflow"] },
    { name: "Carrier Floor Mount 42KVCT048", capacity: "4 Ton", rating: "4 Star", price: "₹1,40,000", features: ["Tropical Design", "R-410A", "Auto Clean"] },
    { name: "Mitsubishi Heavy Floor AC", capacity: "5 Ton", rating: "5 Star", price: "₹1,60,000", features: ["Heavy Duty", "Commercial Grade", "Silent Operation"] },
    { name: "Cruise Floor Standing Pro", capacity: "3.5 Ton", rating: "3 Star", price: "₹1,10,000", features: ["Powerful Cooling", "Easy Installation", "Robust Design"] },
    { name: "Blue Star Floor AC", capacity: "4 Ton", rating: "4 Star", price: "₹1,35,000", features: ["Indian Make", "Reliable", "Service Support"] },
    { name: "Voltas Floor Unit", capacity: "3 Ton", rating: "3 Star", price: "₹1,15,000", features: ["Tata Product", "Energy Efficient", "Wide Coverage"] }
  ];

  const benefits = [
    { icon: <Wind className="h-6 w-6" />, title: "High Airflow", description: "Powerful air circulation for large spaces and halls" },
    { icon: <Building className="h-6 w-6" />, title: "Large Coverage", description: "Ideal for big rooms, halls, and commercial spaces" },
    { icon: <Zap className="h-6 w-6" />, title: "Easy Installation", description: "No wall mounting required, simple floor placement" },
    { icon: <Users className="h-6 w-6" />, title: "Multi-Zone Cooling", description: "Effective cooling for areas with high occupancy" }
  ];

  const applications = [
    { name: "Large Living Rooms", icon: <Home className="h-6 w-6" /> }, 
    { name: "Conference Halls", icon: <Building className="h-6 w-6" /> }, 
    { name: "Banquet Halls", icon: <Hotel className="h-6 w-6" /> }, 
    { name: "Showrooms", icon: <ShoppingBag className="h-6 w-6" /> },
    { name: "Restaurants", icon: <Hotel className="h-6 w-6" /> }, 
    { name: "Gyms & Fitness Centers", icon: <Factory className="h-6 w-6" /> }, 
    { name: "Retail Stores", icon: <ShoppingBag className="h-6 w-6" /> }, 
    { name: "Reception Areas", icon: <Building className="h-6 w-6" /> }
  ];

  const specifications = [
    { feature: "Capacity Range", value: "3-5 Ton" },
    { feature: "Room Size", value: "400-800 sq ft" },
    { feature: "Installation", value: "Floor Mounted" },
    { feature: "Airflow", value: "High Volume" },
    { feature: "Noise Level", value: "Low to Medium" },
    { feature: "Power Supply", value: "3 Phase" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Floor Standing AC Price in Bareilly | Large Capacity ACs | Commercial Cooling Solutions</title>
        <meta name="description" content="Buy Floor Standing ACs in Bareilly, UP. Best prices on Daikin, Carrier, Mitsubishi floor mounted ACs. High capacity cooling for large rooms, halls. Professional installation." />
        <meta name="keywords" content="floor standing AC price Bareilly, large capacity AC, floor mounted AC Bareilly, commercial AC UP, hall cooling solution, high airflow AC" />
        <meta property="og:title" content="Best Floor Standing AC Dealers in Bareilly | Large Space Cooling" />
        <meta property="og:description" content="Premium floor standing ACs for large spaces in Bareilly. High capacity, powerful airflow, perfect for halls and commercial applications." />
        <link rel="canonical" href="https://yoursite.com/products/floor-standing-ac" />
      </Helmet>

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary/90 to-secondary/90 py-16" style={{backgroundImage: "url('/src/assets/floor-standing-ac.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/products" className="text-white hover:text-accent-warm transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Floor Standing ACs in Bareilly
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mb-8">
              High-capacity floor standing air conditioners for large spaces in Bareilly, Uttar Pradesh. 
              Powerful cooling with high airflow, perfect for halls, showrooms, and commercial applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="lg">
                <Phone className="h-5 w-5" />
                Get Best Price Quote
              </Button>
              <Button variant="outline" size="lg" className="bg-green-600 text-white border-green-600 hover:bg-green-700" onClick={() => window.open('https://wa.me/919876543210?text=Hello, I need information about Floor Standing ACs in Bareilly', '_blank')}>
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
              Advantages of Floor Standing ACs
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

        {/* Specifications Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Technical Specifications
              </h2>
              <p className="text-xl text-muted-foreground">
                Understanding floor standing AC specifications for proper selection
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Floor Standing AC Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="font-medium">{spec.feature}</span>
                        <span className="text-primary font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Perfect Applications for Floor Standing ACs
              </h2>
              <p className="text-xl text-muted-foreground">
                Ideal cooling solutions for various large space requirements
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
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
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Premium Floor Standing AC Models in Bareilly
              </h2>
              <p className="text-xl text-muted-foreground">
                High-performance floor mounted ACs with professional installation and service
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={floorStandingAc} 
                      alt={`${product.name} - Floor Standing AC`}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 right-4 bg-accent-warm">
                      {product.rating}
                    </Badge>
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-2 py-1 rounded text-xs">
                      High Capacity
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

        {/* Installation Guide */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Installation Advantages
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary">Easy Placement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">No wall mounting brackets needed, simply place on floor with proper spacing</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Wind className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary">Flexible Positioning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Can be positioned anywhere in the room for optimal air distribution</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary">Easy Maintenance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Ground level access makes cleaning and servicing more convenient</p>
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
                Floor Standing AC Installation in Bareilly
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Professional floor standing AC installation across Bareilly district. No wall mounting required, 
                quick setup for homes, offices, and commercial spaces.
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
          category="floor-standing-ac" 
          title="Floor Standing AC Videos"
          description="Watch reviews and installation guides for tower air conditioners."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default FloorStandingAC;