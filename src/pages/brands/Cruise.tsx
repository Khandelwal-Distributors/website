import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Star, CheckCircle, Truck, Zap, Shield, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/components/ProductCard";
import cruiseLogo from "@/assets/brands/cruise-logo.jpg";
import portableAC from "@/assets/portable-ac.jpg";
import splitAC from "@/assets/split-ac.jpg";
import floorStandingAC from "@/assets/floor-standing-ac.jpg";

const Cruise = () => {
  const { data: brandProducts = [] } = useProducts({ brand: 'Cruise' });
  const products = [
    {
      name: "Portable AC Units",
      description: "Mobile cooling solutions for flexibility and convenience",
      image: portableAC,
      features: ["Easy Mobility", "Plug & Play", "No Installation Required"]
    },
    {
      name: "Heavy Duty Split AC",
      description: "Robust split ACs for demanding residential applications",
      image: splitAC,
      features: ["Heavy Duty Build", "Extended Life", "High Performance"]
    },
    {
      name: "Floor Standing AC",
      description: "Powerful floor-mounted units for large spaces",
      image: floorStandingAC,
      features: ["High Capacity", "Commercial Grade", "Reliable Operation"]
    }
  ];

  const whyChooseCruise = [
    {
      icon: <Truck className="h-6 w-6 text-accent-warm" />,
      title: "Portable Solutions",
      description: "Innovative portable ACs for maximum flexibility and convenience"
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Heavy Duty Performance",
      description: "Built tough for continuous operation and demanding conditions"
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Reliable Build Quality",
      description: "Robust construction ensuring long-lasting performance"
    },
    {
      icon: <Settings className="h-6 w-6 text-accent-warm" />,
      title: "Versatile Applications",
      description: "Perfect for homes, offices, and temporary cooling needs"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cruise AC Dealer Bareilly | Portable & Heavy Duty ACs | Khandelwal Distributors</title>
        <meta name="description" content="Authorized Cruise AC dealer in Bareilly, UP. Portable ACs, heavy duty split & floor standing units. Flexible cooling solutions. Call +91 98765 43210" />
        <meta name="keywords" content="Cruise AC Bareilly, portable AC Bareilly, heavy duty AC UP, floor standing AC Bareilly, mobile cooling Bareilly" />
        <link rel="canonical" href="https://www.khandelwaldistributors.com/brands/cruise" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Cruise Air Conditioning Systems",
            "brand": "Cruise",
            "description": "Portable, heavy duty split and floor standing AC systems available in Bareilly, Uttar Pradesh",
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
                    <img src={cruiseLogo} alt="Cruise Logo" className="h-16" />
                    <div>
                      <h1 className="text-4xl font-bold text-foreground">
                        Cruise Air Conditioning
                      </h1>
                      <p className="text-primary font-semibold">Portable & Heavy Duty Solutions</p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-8">
                    Discover versatile cooling with Cruise's innovative portable ACs and heavy-duty
                    split and floor standing units. Perfect for flexible and demanding applications
                    in Bareilly and across Uttar Pradesh.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="cta" size="lg">
                      <Phone className="h-5 w-5" onClick={() => window.open('tel:+919429693410', '_self')} />
                      Get Quote
                    </Button>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <img
                    src={portableAC}
                    alt="Cruise Portable AC"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Cruise */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Why Choose Cruise in Bareilly?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whyChooseCruise.map((item, index) => (
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
                Cruise Product Range
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

          {/* Available Products Section */}
          {brandProducts.length > 0 && (
            <section className="py-16 bg-background">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Available Cruise Products
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {brandProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      disableSchema={true}
                    />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Need Flexible Cooling Solutions?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get portable and heavy-duty AC options in Bareilly
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" onClick={() => window.open('tel:+919429693410', '_self')}>
                  <Phone className="h-5 w-5" />
                  Discuss Your Needs
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary" onClick={() => window.open('tel:+919429693410', '_self')}>
                  <Link to="/contact">Get Custom Solution</Link>
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

export default Cruise;