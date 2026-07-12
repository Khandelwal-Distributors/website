import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeVideos from "@/components/YouTubeVideos";
import { Phone, ArrowLeft, Star, Wind, Eye, Settings, Building, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import ductableAc from "@/assets/ductable-ac.jpg";

const DuctableAC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const products = [
    { name: "Daikin FDMRN50BXV16", capacity: "4 Ton", rating: "5 Star", price: "₹1,80,000", features: ["Concealed Design", "Inverter Tech", "Zone Control"] },
    { name: "Carrier Ductable 42QHA048", capacity: "4 Ton", rating: "4 Star", price: "₹1,65,000", features: ["High Static Pressure", "R-410A", "Energy Efficient"] },
    { name: "Mitsubishi Heavy Ductable", capacity: "3 Ton", rating: "5 Star", price: "₹1,70,000", features: ["Heavy Duty", "Silent Operation", "PM 2.5 Filter"] },
    { name: "Blue Star Ductable", capacity: "5 Ton", rating: "3 Star", price: "₹1,45,000", features: ["Indian Make", "Reliable", "Easy Maintenance"] },
    { name: "Voltas Ductable Central", capacity: "3.5 Ton", rating: "4 Star", price: "₹1,55,000", features: ["Tata Product", "Wide Coverage", "Efficient"] },
    { name: "Cruise Ductable Pro", capacity: "6 Ton", rating: "3 Star", price: "₹1,85,000", features: ["High Capacity", "Commercial Grade", "Robust Design"] }
  ];

  const benefits = [
    { icon: <Eye className="h-6 w-6" />, title: "Concealed Design", description: "Hidden installation maintains aesthetic appeal of interiors" },
    { icon: <Wind className="h-6 w-6" />, title: "Uniform Cooling", description: "Even air distribution throughout the entire space" },
    { icon: <Settings className="h-6 w-6" />, title: "Centralized Control", description: "Single point control for the entire HVAC system" },
    { icon: <Building className="h-6 w-6" />, title: "Large Coverage", description: "Ideal for spacious homes, offices, and commercial spaces" }
  ];

  const applications = [
    "Large Residences", "Corporate Offices", "Showrooms", "Restaurants",
    "Hotels", "Retail Stores", "Conference Halls", "Reception Areas"
  ];

  const specifications = [
    { feature: "Capacity Range", value: "3-10 Ton" },
    { feature: "Installation", value: "False Ceiling" },
    { feature: "Air Distribution", value: "Ducted System" },
    { feature: "Control", value: "Centralized" },
    { feature: "Noise Level", value: "Ultra Low" },
    { feature: "Coverage", value: "Large Areas" }
  ];

  const faqs = [
    { q: "What is a ductable AC and how does concealed central cooling work?", a: "A ductable AC uses a single indoor unit connected to insulated ducting that distributes cooled air to multiple rooms or zones through ceiling grilles — giving you central, whole-space cooling with no visible indoor units, and precise zone-wise temperature control if configured with dampers." },
    { q: "Ductable AC vs cassette AC vs VRV — which is best for my space?", a: "Ductable AC suits single large open areas or a few connected rooms needing uniform cooling from one unit. Cassette AC suits standalone rooms wanting a discreet ceiling unit. VRV is best for multi-floor buildings needing independent zone control from a shared outdoor system. We help you compare based on your layout and budget." },
    { q: "What ducting and false ceiling requirements does ductable AC need?", a: "You'll need at least 12–15 inches of false ceiling void to run insulated ducting and accommodate the indoor unit, plus grilles/diffusers positioned for even airflow. Our team does a site survey to plan the ducting layout before installation." },
    { q: "What tonnage ductable AC suits my office or showroom?", a: "As a general guide, allow roughly 1 ton of cooling per 120–150 sq ft for typical commercial spaces, adjusted for ceiling height, glazing, and equipment heat load. We provide a free load calculation for accurate sizing." },
    { q: "How much does ductable AC installation cost including ducting?", a: "Cost depends on tonnage, ducting length, number of outlets, and civil/false-ceiling work required — it's typically higher than cassette or split AC due to ducting material and labour. We provide a detailed itemized quote after site assessment." },
    { q: "What maintenance is required for ductable AC systems?", a: "Filters need cleaning every 4–6 weeks, and the coil, blower, and ducting should be inspected every 3–6 months for dust buildup and leakage. We offer AMC plans covering ductable AC systems across Bareilly and nearby districts." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Ductable AC Price in Bareilly | Central Air Conditioning | Concealed Installation</title>
        <meta name="description" content="Buy Ductable ACs in Bareilly, UP. Best prices on Daikin, Carrier, Mitsubishi ductable central ACs. Concealed installation, uniform cooling for large spaces. Expert installation." />
        <meta name="keywords" content="ductable AC price Bareilly, central AC system UP, concealed AC installation, ducted air conditioning, large space cooling, office AC system Bareilly" />
        <meta property="og:title" content="Best Ductable AC Dealers in Bareilly | Central Air Conditioning Systems" />
        <meta property="og:description" content="Premium ductable ACs for large spaces in Bareilly. Concealed installation, uniform cooling, centralized control for offices and homes." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="/src/assets/ductable-ac.jpg" />
        <meta property="og:url" content="https://www.khandelwaldistributors.com/products/ductable-ac" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Ductable AC Dealers in Bareilly | Central Air Conditioning Systems" />
        <meta name="twitter:description" content="Premium ductable ACs for large spaces in Bareilly. Concealed installation, uniform cooling, centralized control for offices and homes." />
        <link rel="canonical" href="https://www.khandelwaldistributors.com/products/ductable-ac" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Ductable Air Conditioners",
            "category": "Central Air Conditioning",
            "description": "Concealed ductable AC systems for large spaces in Bareilly, UP",
            "brand": ["Daikin", "Carrier", "Mitsubishi Heavy", "Blue Star", "Voltas", "Cruise"],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "735"
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "145000",
              "highPrice": "185000",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            },
            "provider": {
              "@type": "LocalBusiness",
              "name": "Khandelwal Distributors",
              "address": "G-35, MCI Plaza, Civil Lines, Bareilly, Uttar Pradesh, India",
              "telephone": "+917017497935"
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(f => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a }
            }))
          })}
        </script>
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-16" style={{ backgroundImage: `url(${ductableAc})` }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 lg:pl-12 xl:pl-16 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/products" className="text-white hover:text-accent-warm transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Ductable Air Conditioners in Bareilly
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mb-8">
              Concealed ductable AC systems for large spaces in Bareilly, Uttar Pradesh.
              Central air conditioning with hidden installation, uniform cooling, and centralized control.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="lg" onClick={() => window.open('tel:+917017497935', '_self')}>
                <Phone className="h-5 w-5" />
                Get Best Price Quote
              </Button>
              <Button variant="outline" size="lg" className="bg-green-600 text-white border-green-600 hover:bg-green-700" onClick={() => window.open('https://wa.me/919084417884?text=Hello, I need information about Ductable ACs in Bareilly', '_blank')}>
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
              Benefits of Ductable Air Conditioners
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
                Ductable AC System Specifications
              </h2>
              <p className="text-xl text-muted-foreground">
                Understanding ductable AC specifications for proper system design
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">System Specifications</CardTitle>
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
                Perfect Applications for Ductable ACs
              </h2>
              <p className="text-xl text-muted-foreground">
                Ideal central cooling solutions for various large space requirements
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {applications.map((app, index) => (
                <div key={index} className="bg-card border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-2">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                  <span className="font-medium">{app}</span>
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
                Premium Ductable AC Models in Bareilly
              </h2>
              <p className="text-xl text-muted-foreground">
                High-performance ductable ACs with professional installation and service
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img
                      src={ductableAc}
                      alt={`${product.name} - Ductable AC`}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 right-4 bg-accent-warm">
                      {product.rating}
                    </Badge>
                    <div className="absolute top-4 left-4 bg-purple-600 text-white px-2 py-1 rounded text-xs">
                      Concealed
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
                    <Button className="w-full" onClick={() => window.open('tel:+917017497935', '_self')}>
                      <Phone className="h-4 w-4" />
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Professional Installation Process
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
                  <CardTitle className="text-primary">Site Survey</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Detailed assessment of space, electrical, and ducting requirements</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
                  <CardTitle className="text-primary">Duct Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Custom duct layout and false ceiling planning for optimal airflow</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
                  <CardTitle className="text-primary">Installation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Professional installation of unit, ducting, and control systems</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">4</div>
                  <CardTitle className="text-primary">Commissioning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">System testing, air balancing, and performance optimization</p>
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
                Ductable AC Installation in Bareilly
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Complete ductable AC solutions across Bareilly district. Professional design,
                installation, and service for central air conditioning systems.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="secondary" size="lg" onClick={() => window.open('tel:+917017497935', '_self')}>
                  <Phone className="h-5 w-5" />
                  Get Best Price Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center text-primary mb-10">
              Frequently Asked Questions — Ductable AC
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-card border rounded-xl overflow-hidden">
                  <button
                    className="w-full text-left px-6 py-4 flex justify-between items-center gap-4 hover:bg-muted/40 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-semibold text-foreground">{faq.q}</span>
                    {openFaq === i ? (
                      <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-muted-foreground leading-relaxed border-t">
                      <p className="pt-4">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <YouTubeVideos
          category="ductable-ac"
          title="Ductable AC Videos"
          description="Learn about concealed ductable AC installation and maintenance."
        />
      </main>

      <Footer />
    </div>
  );
};

export default DuctableAC;