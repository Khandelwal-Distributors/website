import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeVideos from "@/components/YouTubeVideos";
import { Phone, ArrowLeft, Star, Wind, Building, Eye, Thermometer, Hotel, ShoppingBag, Hospital, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import cassetteAc from "@/assets/cassette-ac.jpg";

const CassetteAC = () => {
  const products = [
    { name: "Daikin FCVF50ARV16", capacity: "2 Ton", rating: "5 Star", price: "₹85,000", features: ["360° Air Flow", "Inverter Tech", "Remote Control"] },
    { name: "Carrier Cassette 42KCC036", capacity: "3 Ton", rating: "3 Star", price: "₹95,000", features: ["4-Way Airflow", "Copper Coil", "Timer Function"] },
    { name: "Mitsubishi Heavy Cassette", capacity: "2.5 Ton", rating: "4 Star", price: "₹90,000", features: ["Heavy Duty", "PM 2.5 Filter", "Low Noise"] },
    { name: "Cruise Cassette Pro", capacity: "3 Ton", rating: "3 Star", price: "₹75,000", features: ["Commercial Grade", "Easy Maintenance", "Uniform Cooling"] },
    { name: "Blue Star Cassette", capacity: "2 Ton", rating: "4 Star", price: "₹82,000", features: ["Indian Make", "Reliable", "Service Support"] },
    { name: "Voltas Cassette Elite", capacity: "2.5 Ton", rating: "3 Star", price: "₹78,000", features: ["Tata Product", "Energy Efficient", "Durable"] }
  ];

  const benefits = [
    { icon: <Eye className="h-6 w-6" />, title: "Invisible Design", description: "Ceiling-mounted for aesthetically pleasing interiors" },
    { icon: <Wind className="h-6 w-6" />, title: "360° Air Flow", description: "Uniform cooling distribution in all directions" },
    { icon: <Building className="h-6 w-6" />, title: "Commercial Use", description: "Perfect for offices, shops, restaurants, and halls" },
    { icon: <Thermometer className="h-6 w-6" />, title: "Large Coverage", description: "Ideal for spacious rooms and commercial spaces" }
  ];

  const applications = [
    { name: "Office Spaces", icon: <Building className="h-6 w-6" /> },
    { name: "Retail Stores", icon: <ShoppingBag className="h-6 w-6" /> },
    { name: "Restaurants", icon: <Hotel className="h-6 w-6" /> },
    { name: "Hotel Lobbies", icon: <Hotel className="h-6 w-6" /> },
    { name: "Conference Rooms", icon: <Building className="h-6 w-6" /> },
    { name: "Showrooms", icon: <ShoppingBag className="h-6 w-6" /> },
    { name: "Clinics", icon: <Hospital className="h-6 w-6" /> },
    { name: "Reception Areas", icon: <Building className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Cassette AC Price in Bareilly | Ceiling Mounted ACs | Commercial Installation</title>
        <meta name="description" content="Buy Cassette ACs in Bareilly, UP. Best prices on Daikin, Carrier, Mitsubishi cassette air conditioners. Perfect for offices, restaurants, commercial spaces. Expert installation." />
        <meta name="keywords" content="cassette AC price Bareilly, ceiling AC Bareilly, commercial AC Bareilly, office AC installation, Daikin cassette AC, restaurant AC Bareilly UP" />
        <meta property="og:title" content="Best Cassette AC Dealers in Bareilly | Commercial Air Conditioning" />
        <meta property="og:description" content="Premium cassette ACs for commercial spaces in Bareilly. 360° airflow, invisible design, expert installation for offices and restaurants." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="/src/assets/cassette-ac.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Cassette AC Dealers in Bareilly | Commercial Air Conditioning" />
        <meta name="twitter:description" content="Premium cassette ACs for commercial spaces in Bareilly. 360° airflow, invisible design, expert installation for offices and restaurants." />
        <link rel="canonical" href="https://www.khandelwaldistributors.com/products/cassette-ac" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Cassette Air Conditioners",
            "category": "Commercial Air Conditioning",
            "description": "Premium ceiling-mounted cassette ACs for commercial spaces in Bareilly, UP",
            "brand": ["Daikin", "Carrier", "Mitsubishi Heavy", "Cruise", "Blue Star", "Voltas"],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "928"
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "75000",
              "highPrice": "95000",
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
        <section className="relative bg-gradient-to-r from-primary/90 to-secondary/90 py-16" style={{ backgroundImage: "url('/src/assets/cassette-ac.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/products" className="text-white hover:text-accent-warm transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Cassette Air Conditioners in Bareilly
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mb-8">
              Premium ceiling-mounted cassette ACs for commercial spaces in Bareilly, Uttar Pradesh.
              360° airflow, invisible design, perfect for offices, restaurants, and large rooms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="lg" onClick={() => window.open('tel:+919429693410', '_self')}>
                <Phone className="h-5 w-5" />
                Get Best Price Quote
              </Button>
              <Button variant="outline" size="lg" className="bg-green-600 text-white border-green-600 hover:bg-green-700" onClick={() => window.open('https://wa.me/919084417884?text=Hello, I need information about Cassette ACs in Bareilly', '_blank')}>
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
              Why Choose Cassette Air Conditioners?
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
                Perfect Applications for Cassette ACs
              </h2>
              <p className="text-xl text-muted-foreground">
                Ideal cooling solutions for various commercial and institutional spaces
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

        {/* Product Showcase */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Premium Cassette AC Models in Bareilly
              </h2>
              <p className="text-xl text-muted-foreground">
                High-performance cassette ACs with expert commercial installation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img
                      src={cassetteAc}
                      alt={`${product.name} - Cassette Air Conditioner`}
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
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Cassette AC Installation & Service in Bareilly
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Professional ceiling cassette AC installation across Bareilly district.
                Expert false ceiling work, electrical connections, and comprehensive service support.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="secondary" size="lg" onClick={() => window.open('tel:+919429693410', '_self')}>
                  <Phone className="h-5 w-5" />
                  Call: +91-94296-93410
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <YouTubeVideos
          category="cassette-ac"
          title="Cassette AC Videos"
          description="Watch detailed installation guides and reviews for ceiling cassette air conditioners."
        />
      </main>

      <Footer />
    </div>
  );
};

export default CassetteAC;