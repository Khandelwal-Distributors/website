import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Star, CheckCircle, Zap, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";
import mitsubishiLogo from "@/assets/brands/mitsubishi-logo.jpg";
import commercialHVAC from "@/assets/commercial-hvac.jpg";
import floorStandingAC from "@/assets/floor-standing-ac.jpg";
import chillerSystem from "@/assets/chiller-system.jpg";
import splitAC from "@/assets/split-ac.jpg";
import cassetteAC from "@/assets/cassette-ac.jpg";

const MitsubishiHeavy = () => {
  const products = [
    {
      name: "VRF Systems",
      description: "Variable Refrigerant Flow systems for commercial applications",
      image: commercialHVAC,
      features: ["Robust Construction", "High Cooling Capacity", "Extended Lifespan"]
    },
    {
      name: "Split AC Units",
      description: "Heavy-duty split ACs for demanding applications",
      image: splitAC,
      features: ["Industrial Grade", "High Performance", "Reliable Operation"]
    },
    {
      name: "Cassette AC",
      description: "Commercial cassette units for office and retail spaces",
      image: cassetteAC,
      features: ["360° Air Distribution", "Commercial Grade", "Easy Maintenance"]
    }
  ];

  const whyChooseMitsubishi = [
    {
      icon: <Award className="h-6 w-6 text-accent-warm" />,
      title: "Industrial Heritage",
      description: "Over 140 years of engineering excellence and innovation"
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Heavy Duty Performance",
      description: "Built for demanding commercial and industrial applications"
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Exceptional Durability",
      description: "Superior build quality for extended operational life"
    },
    {
      icon: <Star className="h-6 w-6 text-accent-warm" />,
      title: "Advanced Technology",
      description: "Cutting-edge features for maximum efficiency and control"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mitsubishi Heavy AC Dealer Bareilly | Commercial HVAC Systems | Khandelwal Distributors</title>
        <meta name="description" content="Authorized Mitsubishi Heavy AC dealer in Bareilly, UP. Heavy-duty commercial ACs, chiller systems, floor standing units. Expert installation. Call +91 98765 43210" />
        <meta name="keywords" content="Mitsubishi Heavy Bareilly, commercial AC Bareilly, heavy duty AC UP, chiller systems Bareilly, industrial AC Bareilly" />
        <link rel="canonical" href="https://khandelwaldistributors.com/brands/mitsubishi-heavy" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Mitsubishi Heavy Industries Air Conditioning",
            "brand": "Mitsubishi Heavy Industries",
            "description": "Heavy-duty commercial and industrial AC systems available in Bareilly, Uttar Pradesh",
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-primary/10 to-primary-light/5">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <img src={mitsubishiLogo} alt="Mitsubishi Heavy Logo" className="h-16" />
                    <div>
                      <h1 className="text-4xl font-bold text-foreground">
                        Mitsubishi Heavy Industries
                      </h1>
                      <p className="text-primary font-semibold">Heavy Duty Commercial Solutions</p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-8">
                    Engineered for the most demanding applications. Mitsubishi Heavy delivers
                    industrial-grade cooling solutions with unmatched reliability and performance
                    in Bareilly and across Uttar Pradesh.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="cta" size="lg" onClick={() => window.open('tel:+919429693410', '_self')}>
                      <Phone className="h-5 w-5" />
                      Get Quotes
                    </Button>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <img
                    src={commercialHVAC}
                    alt="Mitsubishi Heavy Commercial HVAC"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Mitsubishi Heavy */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Why Choose Mitsubishi Heavy?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whyChooseMitsubishi.map((item, index) => (
                  <Card key={index} className="group hover:shadow-[var(--shadow-card)] transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Product Categories */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Heavy Duty Commercial Solutions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product, index) => (
                  <Card key={index} className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-0">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                        <p className="text-muted-foreground mb-4">{product.description}</p>
                        <div className="space-y-2">
                          {product.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-accent-warm" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Need Heavy Duty Cooling Solutions?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Expert consultation for commercial and industrial projects in Bareilly
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" onClick={() => window.open('tel:+919429693410', '_self')}>
                  <Phone className="h-5 w-5" />
                  Discuss Your Project
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary" onClick={() => window.open('tel:+919429693410', '_self')}>
                  <Link to="/contact">Request Site Survey</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MitsubishiHeavy;