import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Star, CheckCircle, Crown, IndianRupee, Award } from "lucide-react";
import { Link } from "react-router-dom";
import amstradLogo from "@/assets/brands/amstrad-logo.jpg";
import splitAC from "@/assets/split-ac.jpg";
import windowAC from "@/assets/window-ac.jpg";

const Amstrad = () => {
  const products = [
    {
      name: "Split AC Systems",
      description: "Premium UK-engineered split ACs with advanced cooling technology",
      image: splitAC,
      features: ["Energy Efficient", "UK Technology", "Competitive Pricing"]
    },
    {
      name: "Window AC Units",
      description: "Compact and efficient window ACs for residential spaces",
      image: windowAC,
      features: ["Space Saving", "Easy Installation", "Cost Effective"]
    }
  ];

  const whyChooseAmstrad = [
    {
      icon: <Crown className="h-6 w-6 text-accent-warm" />,
      title: "Premium UK Brand",
      description: "Established British engineering with decades of innovation"
    },
    {
      icon: <IndianRupee className="h-6 w-6 text-primary" />,
      title: "Competitive Pricing",
      description: "Premium quality at affordable prices for Indian consumers"
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Superior Quality",
      description: "UK standards of manufacturing and quality control"
    },
    {
      icon: <Star className="h-6 w-6 text-accent-warm" />,
      title: "Proven Performance",
      description: "Reliable cooling solutions designed for Indian climate"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Amstrad AC Dealer Bareilly | UK Brand Split & Window AC | Khandelwal Distributors</title>
        <meta name="description" content="Authorized Amstrad AC dealer in Bareilly, UP. Premium UK brand split & window ACs at competitive prices. Quality + affordability. Call +91 98765 43210" />
        <meta name="keywords" content="Amstrad AC Bareilly, UK brand AC Bareilly, split AC UP, window AC Bareilly, competitive AC prices Bareilly" />
        <link rel="canonical" href="https://www.khandelwaldistributors.com/brands/amstrad" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Amstrad Air Conditioning Systems",
            "brand": "Amstrad",
            "description": "Premium UK brand split and window ACs at competitive prices available in Bareilly, Uttar Pradesh",
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
                    <img src={amstradLogo} alt="Amstrad Logo" className="h-16" />
                    <div>
                      <h1 className="text-4xl font-bold text-foreground">
                        Amstrad Air Conditioning
                      </h1>
                      <p className="text-primary font-semibold">Quality + Competitive Pricing</p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-8">
                    Experience premium UK engineering at competitive prices. Amstrad delivers
                    superior quality split and window ACs designed for Indian homes,
                    available in Bareilly and across Uttar Pradesh.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="cta" size="lg" onClick={() => window.open('tel:+919429693410', '_self')}>
                      <Phone className="h-5 w-5" />
                      Get Best Quote
                    </Button>
                    <Button variant="outline" size="lg">
                      View Price List
                    </Button>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <img
                    src={splitAC}
                    alt="Amstrad Split AC"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Amstrad */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Why Choose Amstrad in Bareilly?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whyChooseAmstrad.map((item, index) => (
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
                Amstrad AC Range
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
                Ready for Premium UK Quality?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get the best prices on Amstrad ACs in Bareilly
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" onClick={() => window.open('tel:+919429693410', '_self')}>
                  <Phone className="h-5 w-5" />
                  Call for Best Price
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                  <Link to="/contact">Request Quote</Link>
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

export default Amstrad;