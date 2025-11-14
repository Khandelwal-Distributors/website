import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Star, CheckCircle, IndianRupee, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import mideaLogo from "@/assets/brands/midea-logo.jpg";
import splitAC from "@/assets/split-ac.jpg";
import cassetteAC from "@/assets/cassette-ac.jpg";

const Midea = () => {
  const products = [
    {
      name: "Split AC Systems",
      description: "Economical split ACs with reliable performance for homes",
      image: splitAC,
      features: ["Cost Effective", "Energy Efficient", "Reliable Performance"]
    },
    {
      name: "Cassette AC Units",
      description: "Commercial cassette ACs for office and retail spaces",
      image: cassetteAC,
      features: ["360° Air Flow", "Commercial Grade", "Easy Maintenance"]
    }
  ];

  const whyChooseMidea = [
    {
      icon: <IndianRupee className="h-6 w-6 text-accent-warm" />,
      title: "Most Economical",
      description: "Budget-friendly pricing without compromising on quality"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Global Brand",
      description: "World's leading appliance manufacturer with proven reliability"
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Smart Features",
      description: "Modern technology with intelligent cooling solutions"
    },
    {
      icon: <Star className="h-6 w-6 text-accent-warm" />,
      title: "Trusted Performance",
      description: "Consistent cooling performance in all weather conditions"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Midea AC Dealer Bareilly | Economical Split & Cassette AC | Khandelwal Distributors</title>
        <meta name="description" content="Authorized Midea AC dealer in Bareilly, UP. Most economical split & cassette ACs for homes and offices. Budget-friendly cooling solutions. Call +91 98765 43210" />
        <meta name="keywords" content="Midea AC Bareilly, economical AC Bareilly, budget AC UP, cassette AC Bareilly, affordable cooling Bareilly" />
        <link rel="canonical" href="https://www.khandelwaldistributors.com/brands/midea" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Midea Air Conditioning Systems",
            "brand": "Midea",
            "description": "Economical split and cassette AC systems for homes and offices in Bareilly, Uttar Pradesh",
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
            <div className="container mx-auto px-4 lg:pl-12 xl:pl-16">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <img src={mideaLogo} alt="Midea Logo" className="h-16" />
                    <div>
                      <h1 className="text-4xl font-bold text-foreground">
                        Midea Air Conditioning
                      </h1>
                      <p className="text-primary font-semibold">Smart & Economical</p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-8">
                    Discover affordable cooling solutions with Midea's economical split and cassette ACs.
                    Global quality at local prices, perfect for homes and offices in Bareilly,
                    Uttar Pradesh.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="cta" size="lg">
                      <Phone className="h-5 w-5" onClick={() => window.open('tel:+919429693410', '_self')} />
                      Get Budget Quote
                    </Button>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <img
                    src={splitAC}
                    alt="Midea Split AC"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Midea */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Why Choose Midea in Bareilly?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whyChooseMidea.map((item, index) => (
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
                Midea Product Range
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                Need Budget-Friendly Cooling?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get the most economical AC solutions in Bareilly
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  <Phone className="h-5 w-5" onClick={() => window.open('tel:+919429693410', '_self')} />
                  Get Affordable Quotes
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

export default Midea;