import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Star, CheckCircle, Thermometer, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/components/ProductCard";
import carrierLogo from "@/assets/brands/carrier-logo.jpg";
import splitAC from "@/assets/split-ac.jpg";
import windowAC from "@/assets/window-ac.jpg";
import portableAC from "@/assets/portable-ac.jpg";

const Carrier = () => {
  const { data: brandProducts = [] } = useProducts({ brand: 'Carrier' });
  const products = [
    {
      name: "Split Air Conditioners",
      description: "Reliable cooling with energy-efficient inverter technology",
      image: splitAC,
      features: ["Inverter Technology", "Auto Restart", "Anti-Bacterial Filter"]
    },
    {
      name: "Window AC Units",
      description: "Affordable cooling solutions for homes and small offices",
      image: windowAC,
      features: ["Easy Installation", "Cost Effective", "Reliable Performance"]
    },
    {
      name: "Portable ACs",
      description: "Flexible cooling for any space with easy mobility",
      image: portableAC,
      features: ["Easy Mobility", "No Installation Required", "Quick Cooling"]
    }
  ];

  const whyChooseCarrier = [
    {
      icon: <Clock className="h-6 w-6 text-accent-warm" />,
      title: "120+ Years of Innovation",
      description: "The company that invented modern air conditioning"
    },
    {
      icon: <Thermometer className="h-6 w-6 text-primary" />,
      title: "Reliable Cooling",
      description: "Consistent performance in Indian climate conditions"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Trusted Worldwide",
      description: "Millions of satisfied customers across the globe"
    },
    {
      icon: <Star className="h-6 w-6 text-accent-warm" />,
      title: "Quality Assurance",
      description: "Rigorous testing ensures long-lasting performance"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Carrier AC Dealer Bareilly | Split & Window AC Units | Khandelwal Distributors</title>
        <meta name="description" content="Authorized Carrier AC dealer in Bareilly, UP. Reliable split ACs, window units, portable ACs. 120+ years of cooling innovation. Call +91 98765 43210" />
        <meta name="keywords" content="Carrier AC Bareilly, split AC Bareilly, window AC UP, portable AC Bareilly, Carrier dealer Uttar Pradesh" />
        <link rel="canonical" href="https://www.khandelwaldistributors.com/brands/carrier" />
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
                    <img src={carrierLogo} alt="Carrier Logo" className="h-16" />
                    <div>
                      <h1 className="text-4xl font-bold text-foreground">
                        Carrier Air Conditioning
                      </h1>
                      <p className="text-primary font-semibold">The Inventors of Modern AC</p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-8">
                    Experience reliable comfort with Carrier's trusted cooling solutions.
                    From residential split ACs to commercial systems, we deliver 120+ years
                    of innovation to homes and businesses in Bareilly.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="cta" size="lg" onClick={() => window.open('tel:+919429693410', '_self')}>
                      <Phone className="h-5 w-5" />
                      Get Carrier Quote
                    </Button>
                    <Button variant="outline" size="lg">
                      Product Catalog
                    </Button>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <img
                    src={splitAC}
                    alt="Carrier Split Air Conditioner"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Carrier */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Why Choose Carrier in Bareilly?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whyChooseCarrier.map((item, index) => (
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
                Carrier Product Range
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
                  Available Carrier Products
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
                Experience Carrier Reliability
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Trusted cooling solutions for your home and business in Bareilly
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  <Phone className="h-5 w-5" onClick={() => window.open('tel:+919429693410', '_self')} />
                  Schedule Installation
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                  <Link to="/contact">Compare Models</Link>
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

export default Carrier;