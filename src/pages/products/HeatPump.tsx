import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeVideos from "@/components/YouTubeVideos";
import { Phone, ArrowLeft, Star, Thermometer, Leaf, Zap, Snowflake, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import heatPump from "@/assets/heat-pump.jpg";

const HeatPump = () => {
  const products = [
    { name: "Daikin Altherma Heat Pump", capacity: "8 kW", type: "Air to Water", price: "₹4,50,000", features: ["All Season", "COP 4.5", "R-32 Refrigerant"] },
    { name: "Carrier Aquazone Heat Pump", capacity: "12 kW", type: "Water to Water", price: "₹6,00,000", features: ["Ground Source", "High Efficiency", "Modular Design"] },
    { name: "Daikin Air Source Heat Pump", capacity: "6 kW", type: "Air to Air", price: "₹3,80,000", features: ["Inverter Tech", "Quiet Operation", "Smart Controls"] },
    { name: "Mitsubishi Ecodan", capacity: "10 kW", type: "Air to Water", price: "₹5,20,000", features: ["Premium Quality", "Weather Resistant", "High COP"] },
    { name: "Carrier Geothermal Heat Pump", capacity: "15 kW", type: "Ground Source", price: "₹8,50,000", features: ["Underground Loop", "Highest Efficiency", "25 Year Life"] },
    { name: "Daikin VRV Heat Recovery", capacity: "20 HP", type: "Commercial", price: "₹12,00,000", features: ["Simultaneous H&C", "Energy Recovery", "Zone Control"] }
  ];

  const benefits = [
    { icon: <Leaf className="h-6 w-6" />, title: "Eco-Friendly", description: "Reduce carbon footprint with renewable energy technology" },
    { icon: <Zap className="h-6 w-6" />, title: "Energy Efficient", description: "COP up to 5.0 - produce 5 units of heat for 1 unit of electricity" },
    { icon: <Thermometer className="h-6 w-6" />, title: "All Season", description: "Heating in winter and cooling in summer with one system" },
    { icon: <Snowflake className="h-6 w-6" />, title: "Consistent Comfort", description: "Maintains stable temperatures throughout the year" }
  ];

  const types = [
    {
      title: "Air Source Heat Pumps",
      description: "Extract heat from outdoor air for heating and cooling",
      features: ["Easy Installation", "Lower Initial Cost", "Suitable for Most Climates"],
      applications: ["Residential Homes", "Small Offices", "Retail Stores"]
    },
    {
      title: "Ground Source Heat Pumps",
      description: "Use stable ground temperature for highly efficient operation",
      features: ["Highest Efficiency", "Long Lifespan", "Minimal Maintenance"],
      applications: ["Large Homes", "Commercial Buildings", "Industrial Facilities"]
    },
    {
      title: "Water Source Heat Pumps",
      description: "Utilize water bodies for heat exchange",
      features: ["Very High COP", "Consistent Performance", "Environmentally Friendly"],
      applications: ["Near Water Bodies", "District Cooling", "Large Complexes"]
    }
  ];

  const applications = [
    "Residential Heating/Cooling", "Hotels & Resorts", "Hospitals", "Schools & Universities",
    "Swimming Pool Heating", "Industrial Processes", "District Heating", "Agricultural Applications"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Heat Pump System Price in Bareilly | Energy Efficient Heating Cooling | Eco-Friendly HVAC</title>
        <meta name="description" content="Buy Heat Pump Systems in Bareilly, UP. Best prices on Daikin, Carrier heat pumps. All-season heating & cooling with 80% energy savings. Ground source, air source systems." />
        <meta name="keywords" content="heat pump price Bareilly, energy efficient heating UP, ground source heat pump, air source heat pump, eco-friendly HVAC Bareilly, renewable energy cooling" />
        <meta property="og:title" content="Best Heat Pump Dealers in Bareilly | Eco-Friendly Heating & Cooling" />
        <meta property="og:description" content="Premium heat pump systems in Bareilly. All-season comfort with 80% energy savings. Air source, ground source, and water source heat pumps." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="/src/assets/heat-pump.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Heat Pump Dealers in Bareilly | Eco-Friendly Heating & Cooling" />
        <meta name="twitter:description" content="Premium heat pump systems in Bareilly. All-season comfort with 80% energy savings. Air source, ground source, and water source heat pumps." />
        <link rel="canonical" href="https://kdenterprisesbareilly.com/products/heat-pump" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Heat Pump Systems",
            "category": "Eco-Friendly HVAC",
            "description": "Energy-efficient heat pump systems for all-season comfort in Bareilly, UP",
            "brand": ["Daikin", "Carrier", "Mitsubishi"],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "583"
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "150000",
              "highPrice": "500000",
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
        <section className="relative py-16" style={{ backgroundImage: `url(${heatPump})` }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/products" className="text-white hover:text-accent-warm transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Heat Pump Systems in Bareilly
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mb-8">
              Energy-efficient heat pump systems for all-season comfort in Bareilly, Uttar Pradesh.
              Eco-friendly heating and cooling with up to 80% energy savings using renewable technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="lg" onClick={() => window.open('tel:+919335888888', '_self')}>
                <Phone className="h-5 w-5" />
                Get Best Price Quote
              </Button>
              <Button variant="outline" size="lg" className="bg-green-600 text-white border-green-600 hover:bg-green-700" onClick={() => window.open('https://wa.me/919084417884?text=Hello, I need information about Heat Pumps in Bareilly', '_blank')}>
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
              Benefits of Heat Pump Systems
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
                Types of Heat Pump Systems
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the right heat pump technology based on your location and requirements
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {types.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{type.title}</CardTitle>
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
              <h3 className="text-2xl font-bold text-primary mb-6">Heat Pump Applications</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {applications.map((app, index) => (
                <div key={index} className="bg-card border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-2">
                    <Leaf className="h-8 w-8 text-primary" />
                  </div>
                  <span className="font-medium">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Energy Savings Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Incredible Energy Savings
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Heat pumps are 3-5 times more efficient than traditional heating systems.
                For every 1 unit of electricity consumed, they produce 3-5 units of heating or cooling.
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">80%</div>
                  <div className="text-sm opacity-90">Energy Savings</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">COP 5.0</div>
                  <div className="text-sm opacity-90">Efficiency Rating</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">25 Years</div>
                  <div className="text-sm opacity-90">System Lifespan</div>
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
                Premium Heat Pump Models in Bareilly
              </h2>
              <p className="text-xl text-muted-foreground">
                High-efficiency heat pump systems with comprehensive installation and service support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img
                      src={heatPump}
                      alt={`${product.name} - Heat Pump System`}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 right-4 bg-accent-warm">
                      {product.type}
                    </Badge>
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-2 py-1 rounded text-xs">
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
                    <Button className="w-full" onClick={() => window.open('tel:+919335888888', '_self')}>
                      <Phone className="h-4 w-4" />
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Complete Heat Pump Solutions
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-primary">Site Survey</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Detailed assessment of site conditions and heat pump feasibility</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-primary">System Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Custom heat pump system design for optimal performance</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-primary">Installation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Professional installation with commissioning and testing</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-primary">Maintenance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Regular maintenance and performance optimization services</p>
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
                Heat Pump Installation in Bareilly
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Complete heat pump solutions across Bareilly district. From site assessment
                to installation and maintenance - your partner for renewable energy HVAC systems.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="secondary" size="lg" onClick={() => window.open('tel:+919335888888', '_self')}>
                  <Phone className="h-5 w-5" />
                  Get Best Price Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <YouTubeVideos
          category="heat-pump"
          title="Heat Pump Videos"
          description="Explore heat pump technology and energy-efficient heating solutions."
        />
      </main>

      <Footer />
    </div>
  );
};

export default HeatPump;