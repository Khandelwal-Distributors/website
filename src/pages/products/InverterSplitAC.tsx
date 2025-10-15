import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeVideos from "@/components/YouTubeVideos";
import { Phone, ArrowLeft, Star, Thermometer, Zap, Shield, Award, TrendingUp, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import inverterSplitAc from "@/assets/inverter-split-ac.jpg";

const InverterSplitAC = () => {
  const products = [
    { 
      name: "Daikin MTKL50U 1.5 Ton 5 Star", 
      capacity: "1.5 Ton", 
      rating: "5 Star", 
      price: "₹42,990", 
      features: ["PM 2.5 Filter", "Copper Condenser", "Dew Clean Technology"],
      image: inverterSplitAc // Replace with specific product image
    },
    { 
      name: "Carrier Hybridjet 1.5 Ton 5 Star", 
      capacity: "1.5 Ton", 
      rating: "5 Star", 
      price: "₹38,500", 
      features: ["Dual Inverter", "Flexicool Technology", "Auto Clean"],
      image: inverterSplitAc // Replace with specific product image
    },
    { 
      name: "Mitsubishi Heavy SRK35ZSA-W 1 Ton 5 Star", 
      capacity: "1 Ton", 
      rating: "5 Star", 
      price: "₹39,990", 
      features: ["Industrial Grade", "PM 2.5 Filter", "Turbo Cooling"],
      image: inverterSplitAc // Replace with specific product image
    },
    { 
      name: "Voltas 1.5 Ton 5 Star Vectra Platina", 
      capacity: "1.5 Ton", 
      rating: "5 Star", 
      price: "₹36,990", 
      features: ["4-in-1 Adjustable Mode", "Copper Condenser", "Smart Diagnosis"],
      image: inverterSplitAc // Replace with specific product image
    },
    { 
      name: "Godrej 1.5 Ton 5 Star NXW 18 TAI5 WWN", 
      capacity: "1.5 Ton", 
      rating: "5 Star", 
      price: "₹34,490", 
      features: ["Eco Mode", "I-Sense Technology", "Anti-Bacterial Filter"],
      image: inverterSplitAc // Replace with specific product image
    },
    { 
      name: "Midea 1.5 Ton 5 Star Inverter Veloce Pro", 
      capacity: "1.5 Ton", 
      rating: "5 Star", 
      price: "₹35,990", 
      features: ["WiFi Control", "Follow Me Function", "Self Clean"],
      image: inverterSplitAc // Replace with specific product image
    },
    { 
      name: "Amstrad 1.5 Ton 3 Star AM20SI3", 
      capacity: "1.5 Ton", 
      rating: "3 Star", 
      price: "₹28,990", 
      features: ["UK Technology", "Turbo Cool", "100% Copper"],
      image: inverterSplitAc // Replace with specific product image
    },
    { 
      name: "Daikin JTKJ50UV16 1.5 Ton 3 Star", 
      capacity: "1.5 Ton", 
      rating: "3 Star", 
      price: "₹37,990", 
      features: ["Triple Display", "Coanda Airflow", "Power Chill Operation"],
      image: inverterSplitAc // Replace with specific product image
    },
    { 
      name: "Carrier 1 Ton 3 Star Esko Neo Plus", 
      capacity: "1 Ton", 
      rating: "3 Star", 
      price: "₹29,990", 
      features: ["Dual Filter", "HD Filter", "Flexicool Technology"],
      image: inverterSplitAc // Replace with specific product image
    }
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
        <meta property="og:type" content="product" />
        <meta property="og:image" content="/src/assets/inverter-split-ac.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Inverter Split AC Dealers in Bareilly | Energy Efficient Air Conditioners" />
        <meta name="twitter:description" content="Shop premium inverter split ACs in Bareilly. Top brands, expert installation, best prices. Save up to 60% on electricity bills." />
        <link rel="canonical" href="https://www.khandelwaldistributors.com/products/inverter-split-ac" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Inverter Split Air Conditioners",
            "category": "Air Conditioning",
            "description": "Energy-efficient inverter split ACs for homes and offices in Bareilly, UP",
            "brand": ["Daikin", "Carrier", "Mitsubishi Heavy", "Amstrad", "Midea", "Godrej", "Voltas"],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "1852"
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "28990",
              "highPrice": "42990",
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": products.map((product, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Product",
                "name": product.name,
                "description": product.features.join(", "),
                "offers": {
                  "@type": "Offer",
                  "price": product.price.replace(/[^\d]/g, ''),
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock"
                }
              }
            }))
          })}
        </script>
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary/90 to-secondary/90 py-16" style={{ backgroundImage: "url('/src/assets/inverter-split-ac.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
              <Button
                variant="cta"
                size="lg"
                onClick={() => window.open('tel:+919429693410', '_self')}
              >
                <Phone className="h-5 w-5" />
                Get Best Price Quote
              </Button>
              <Button variant="outline" size="lg" className="bg-green-600 text-white border-green-600 hover:bg-green-700" onClick={() => window.open('https://wa.me/919084417884?text=Hello, I need information about Inverter Split ACs in Bareilly', '_blank')}>
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
                      src={product.image}
                      alt={`${product.name} - Inverter Split AC`}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 right-4 bg-accent-warm">
                      {product.rating}
                    </Badge>
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-2 py-1 rounded text-xs">
                      Energy Saver
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
                    <Button className="w-full" onClick={() => window.open('tel:+919429693410', '_self')}>
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
                Professional Inverter AC Installation in Bareilly
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Khandelwal Distributors has been providing reliable inverter AC sales, installation, and
                expert service across Bareilly, Pilibhit, Budaun, and Shahjahanpur since 2010.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="secondary" size="lg" onClick={() => window.open('tel:+919429693410', '_self')}>
                  <Phone className="h-5 w-5" />
                  Call: +91 9429693410
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <YouTubeVideos
          category="inverter-split-ac"
          title="Inverter Split AC Videos"
          description="Watch detailed reviews and installation guides for inverter split air conditioners."
        />
      </main>

      <Footer />
    </div>
  );
};

export default InverterSplitAC;