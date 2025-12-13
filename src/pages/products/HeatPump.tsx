import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeVideos from "@/components/YouTubeVideos";
import { Phone, ArrowLeft, Star, Thermometer, Leaf, Zap, Droplets, MessageCircle, CheckCircle2, Flame, Building2, Home, Waves } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import heatPump from "@/assets/heat-pump.jpg";

const HeatPump = () => {
  const brands = [
    { name: "Sun Stellar", highlight: "Premium Heat Pump Water Heaters" },
    { name: "Inter Solar", highlight: "Stainless Steel Heat Pumps" },
    { name: "Racold", highlight: "Trusted Water Heating" },
    { name: "V-Guard", highlight: "Quality & Reliability" }
  ];

  const residentialProducts = [
    { name: "Sun Stellar 200L Heat Pump", capacity: "200 Liters", power: "3 kW", price: "On Request", features: ["Energy Efficient", "Digital Display", "Auto Mode"] },
    { name: "Sun Stellar 300L Heat Pump", capacity: "300 Liters", power: "5 kW", price: "₹1,30,000 + GST", features: ["140 L/hr Heating", "High Capacity", "COP 4.0+"] },
    { name: "Sun Stellar 500L Heat Pump", capacity: "500 Liters", power: "7 kW", price: "On Request", features: ["Large Family", "Premium Build", "Smart Controls"] },
    { name: "Inter Solar 200L SS Heat Pump", capacity: "200 Liters", power: "3 kW", price: "On Request", features: ["Stainless Steel Tank", "Corrosion Resistant", "Long Life"] },
    { name: "Inter Solar 300L SS Heat Pump", capacity: "300 Liters", power: "5 kW", price: "On Request", features: ["SS Construction", "High Durability", "Low Maintenance"] },
    { name: "Racold Heat Pump 200L", capacity: "200 Liters", power: "3 kW", price: "On Request", features: ["Titanium Enamel", "5 Star Rating", "Warranty"] }
  ];

  const commercialProducts = [
    { name: "Daikin Commercial Heat Pump", capacity: "1000+ Liters", type: "Commercial", price: "On Request", features: ["Industrial Grade", "High COP", "Modular Design"], brand: "Daikin" },
    { name: "Inter Solar Commercial System", capacity: "2000+ Liters", type: "Commercial", price: "On Request", features: ["Stainless Steel", "Centralized Control", "Energy Monitoring"], brand: "Inter Solar" },
    { name: "Sun Stellar Swimming Pool Heater", capacity: "Pool Heating", type: "Swimming Pool", price: "On Request", features: ["Year-round Swimming", "Energy Efficient", "Auto Temperature"], brand: "Sun Stellar" }
  ];

  const specialOffer = {
    title: "Special Offer on Sun Stellar Heat Pumps",
    description: "300L Capacity with 140L/hr Heating Rate",
    price: "₹1,30,000 + GST",
    features: ["300 Liters Storage", "140 L/hr Heating Capacity", "Energy Efficient COP 4.0+", "Digital Temperature Control", "All-Weather Operation", "5 Year Warranty"]
  };

  const benefits = [
    { icon: <Leaf className="h-6 w-6" />, title: "80% Energy Savings", description: "Compared to conventional electric water heaters" },
    { icon: <Zap className="h-6 w-6" />, title: "COP 4.0+", description: "4 units of heat for every 1 unit of electricity" },
    { icon: <Thermometer className="h-6 w-6" />, title: "All Weather", description: "Works efficiently even in cold weather conditions" },
    { icon: <Droplets className="h-6 w-6" />, title: "Unlimited Hot Water", description: "Continuous hot water supply for your family" }
  ];

  const categories = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Residential Heat Pumps",
      description: "Perfect for homes and families",
      capacities: ["200L", "300L", "500L"],
      powers: ["3 kW", "5 kW", "7 kW"],
      brands: ["Sun Stellar", "Inter Solar", "Racold", "V-Guard"]
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Commercial Heat Pumps",
      description: "Hotels, Hospitals & Industries",
      capacities: ["1000L+", "2000L+", "Custom"],
      powers: ["10 kW+", "20 kW+", "Modular"],
      brands: ["Daikin", "Inter Solar"]
    },
    {
      icon: <Waves className="h-8 w-8" />,
      title: "Swimming Pool Heat Pumps",
      description: "Year-round pool heating",
      capacities: ["All Pool Sizes"],
      powers: ["Customized"],
      brands: ["Sun Stellar"]
    }
  ];

  const applications = [
    "Residential Homes", "Hotels & Resorts", "Hospitals", "Hostels & PGs",
    "Swimming Pools", "Factories", "Commercial Buildings", "Gyms & Spas"
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>Heat Pump Water Heater Price in Bareilly | Sun Stellar, Inter Solar, Racold | Energy Efficient</title>
        <meta name="description" content="Buy Heat Pump Water Heaters in Bareilly. Special offer on Sun Stellar 300L at ₹1,30,000 + GST. Residential 200L, 300L, 500L & Commercial solutions by Daikin, Inter Solar. Swimming pool heaters available." />
        <meta name="keywords" content="heat pump water heater Bareilly, sun stellar heat pump, inter solar heat pump, racold heat pump, swimming pool heater, commercial heat pump, energy efficient water heater UP" />
        <meta property="og:title" content="Heat Pump Water Heaters in Bareilly | Sun Stellar, Inter Solar Dealer" />
        <meta property="og:description" content="Special offer on Sun Stellar 300L Heat Pump at ₹1,30,000 + GST. Residential & Commercial heat pump solutions. Swimming pool heaters available." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="/src/assets/heat-pump.jpg" />
        <meta property="og:url" content="https://www.khandelwaldistributors.com/products/heat-pump" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Heat Pump Water Heaters in Bareilly | Sun Stellar, Inter Solar Dealer" />
        <meta name="twitter:description" content="Special offer on Sun Stellar 300L Heat Pump at ₹1,30,000 + GST. Residential & Commercial heat pump solutions." />
        <link rel="canonical" href="https://www.khandelwaldistributors.com/products/heat-pump" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Heat Pump Water Heaters",
            "category": "Water Heating Solutions",
            "description": "Energy-efficient heat pump water heaters in Bareilly. Residential and commercial solutions by Sun Stellar, Inter Solar, Racold, Daikin.",
            "brand": ["Sun Stellar", "Inter Solar", "Racold", "V-Guard", "Daikin"],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "742"
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "85000",
              "highPrice": "500000",
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
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-16" style={{ backgroundImage: `url(${heatPump})` }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 lg:pl-12 xl:pl-16 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/products" className="text-white hover:text-accent-warm transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                Heat Pump Water Heaters in Bareilly
              </h1>
            </div>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-6">
              Energy-efficient heat pump water heaters with up to 80% electricity savings.
              Residential & Commercial solutions by Sun Stellar, Inter Solar, Racold & more.
            </p>
            
            {/* Brand Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {brands.map((brand, index) => (
                <Badge key={index} variant="secondary" className="bg-white/20 text-white border-white/30 px-3 py-1">
                  {brand.name}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="lg" onClick={() => window.open('tel:+919429693410', '_self')}>
                <Phone className="h-5 w-5" />
                Get Best Price
              </Button>
              <Button variant="outline" size="lg" className="bg-green-600 text-white border-green-600 hover:bg-green-700" onClick={() => window.open('https://wa.me/919429693410?text=Hello, I need information about Heat Pump Water Heaters in Bareilly', '_blank')}>
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Product - Sun Stellar 300L */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-4">Featured Product</Badge>
              <h2 className="text-3xl font-bold text-primary">Sun Stellar 300L Heat Pump Water Heater</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
              <div className="relative">
                <img
                  src={heatPump}
                  alt="Sun Stellar 300L Heat Pump Water Heater"
                  className="w-full rounded-2xl shadow-lg"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">5 kW</Badge>
              </div>
              
              <div className="space-y-6">
                <div>
                  <p className="text-muted-foreground mb-4">High-capacity heat pump with 140L/hr heating rate, perfect for large families and commercial applications.</p>
                  <div className="text-3xl font-bold text-primary mb-2">₹1,30,000 + GST</div>
                  <p className="text-sm text-muted-foreground">300 Liters | 140 L/hr Heating Capacity</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {["300 Liters Storage", "140 L/hr Heating Rate", "COP 4.0+ Efficiency", "Digital Temperature Control", "All-Weather Operation", "5 Year Warranty"].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" onClick={() => window.open('tel:+919429693410', '_self')}>
                    <Phone className="h-5 w-5 mr-2" />
                    Get Best Price
                  </Button>
                  <Button variant="outline" size="lg" className="bg-green-600 text-white border-green-600 hover:bg-green-700" onClick={() => window.open('https://wa.me/919429693410?text=Hello, I need information about Sun Stellar 300L Heat Pump', '_blank')}>
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              Why Choose Heat Pump Water Heaters?
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-base md:text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Heat Pump Solutions for Every Need
              </h2>
              <p className="text-xl text-muted-foreground">
                From homes to hotels, we have the right heat pump for you
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="bg-primary/10 text-primary p-4 rounded-full w-fit mb-4">
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
                    <CardDescription className="text-base">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground mb-2">Capacities:</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.capacities.map((cap, i) => (
                            <Badge key={i} variant="outline">{cap}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground mb-2">Power Options:</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.powers.map((power, i) => (
                            <Badge key={i} variant="secondary">{power}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground mb-2">Brands:</h4>
                        <p className="text-sm">{category.brands.join(", ")}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Highlighted Brands */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              Our Trusted Brands
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {brands.map((brand, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{brand.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{brand.highlight}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Residential Products */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Residential Heat Pump Water Heaters
              </h2>
              <p className="text-xl text-muted-foreground">
                Available in 200L, 300L & 500L capacities with 3kW, 5kW & 7kW power options
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {residentialProducts.map((product, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img
                      src={heatPump}
                      alt={`${product.name} - Heat Pump Water Heater`}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary">
                      {product.power}
                    </Badge>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{product.name}</CardTitle>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{product.capacity}</span>
                      <span className="text-lg font-bold text-accent-warm">
                        {product.price}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {product.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button className="w-full" onClick={() => window.open('tel:+919429693410', '_self')}>
                      <Phone className="h-4 w-4 mr-2" />
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Commercial Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Commercial & Swimming Pool Heat Pumps
              </h2>
              <p className="text-xl text-muted-foreground">
                High-capacity solutions by Daikin and Inter Solar for hotels, hospitals & pools
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {commercialProducts.map((product, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img
                      src={heatPump}
                      alt={`${product.name} - ${product.type} Heat Pump`}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 right-4 bg-accent-warm">
                      {product.type}
                    </Badge>
                    <Badge className="absolute top-4 left-4 bg-primary">
                      {product.brand}
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
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button className="w-full" onClick={() => window.open('tel:+919429693410', '_self')}>
                      <Phone className="h-4 w-4 mr-2" />
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Energy Savings Section */}
        <section className="py-16 bg-gradient-to-r from-green-500 to-green-600">
          <div className="container mx-auto px-4">
            <div className="text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Incredible Energy Savings
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Heat pump water heaters are 3-4 times more efficient than conventional electric geysers.
                Save up to 80% on your water heating electricity bills!
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold">80%</div>
                  <div className="text-sm opacity-90">Energy Savings</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold">COP 4.0+</div>
                  <div className="text-sm opacity-90">Efficiency Rating</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold">15+ Years</div>
                  <div className="text-sm opacity-90">System Lifespan</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Hot Water Supply</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              Applications
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {applications.map((app, index) => (
                <div key={index} className="bg-card border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-2">
                    <Flame className="h-8 w-8 text-primary" />
                  </div>
                  <span className="font-medium text-sm">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Services */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Complete Heat Pump Solutions
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-primary">Site Survey</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">Free site assessment and capacity calculation</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-primary">Installation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">Professional installation with plumbing & electrical</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-primary">Warranty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">Up to 5 years comprehensive warranty</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-primary">AMC Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">Annual maintenance contracts available</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Local Service Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Heat Pump Dealer in Bareilly, Uttar Pradesh
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Khandelwal Distributors is the authorized dealer for Sun Stellar, Inter Solar, Racold and V-Guard 
                heat pump water heaters in Bareilly and surrounding areas. We provide complete solutions including 
                sales, installation, and after-sales service.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="cta" size="lg" onClick={() => window.open('tel:+919429693410', '_self')}>
                  <Phone className="h-5 w-5" />
                  Call: +91 94296 93410
                </Button>
                <Button variant="outline" size="lg" className="bg-green-600 text-white border-green-600 hover:bg-green-700" onClick={() => window.open('https://wa.me/919429693410?text=Hello, I need information about Heat Pump Water Heaters', '_blank')}>
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Inquiry
                </Button>
              </div>
            </div>
          </div>
        </section>

        <YouTubeVideos category="heat_pump" />
      </main>

      <Footer />
    </div>
  );
};

export default HeatPump;
