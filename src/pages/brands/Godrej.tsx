import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Star, CheckCircle, IndianRupee, Heart, Leaf, Award } from "lucide-react";
import { Link } from "react-router-dom";
import godrejLogo from "@/assets/brands/godrej-logo.jpg";
import splitAC from "@/assets/split-ac.jpg";
import windowAC from "@/assets/window-ac.jpg";

const Godrej = () => {
  const products = [
    {
      name: "Split AC Systems",
      description: "India's most economical split ACs with reliable performance",
      image: splitAC,
      features: ["Most Affordable", "Made in India", "Energy Star Rated"]
    },
    {
      name: "Window AC Units",
      description: "Budget-friendly window ACs perfect for Indian homes",
      image: windowAC,
      features: ["Best Value", "Compact Design", "Easy Service"]
    }
  ];

  const whyChooseGodrej = [
    {
      icon: <IndianRupee className="h-6 w-6 text-accent-warm" />,
      title: "India's Most Economical",
      description: "Unbeatable prices making cooling accessible to every home"
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Trusted Indian Brand",
      description: "Over 125 years of trust and reliability in Indian households"
    },
    {
      icon: <Leaf className="h-6 w-6 text-primary" />,
      title: "Made in India",
      description: "Proudly manufactured in India for Indian conditions"
    },
    {
      icon: <Award className="h-6 w-6 text-accent-warm" />,
      title: "Value for Money",
      description: "Maximum features at minimum cost with reliable performance"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Godrej AC Dealer Bareilly | India's Most Economical AC | Khandelwal Distributors</title>
        <meta name="description" content="Authorized Godrej AC dealer in Bareilly, UP. India's most economical AC brand. Budget split & window ACs made in India. Affordable cooling. Call +91 98765 43210" />
        <meta name="keywords" content="Godrej AC Bareilly, economical AC India, budget AC Bareilly, affordable cooling UP, Indian AC brand Bareilly" />
        <link rel="canonical" href="https://www.khandelwaldistributors.com/brands/godrej" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Godrej Air Conditioning Systems",
            "brand": "Godrej",
            "description": "India's most economical AC brand with budget-friendly split and window ACs in Bareilly, Uttar Pradesh",
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
                    <img src={godrejLogo} alt="Godrej Logo" className="h-16" />
                    <div>
                      <h1 className="text-4xl font-bold text-foreground">
                        Godrej Air Conditioning
                      </h1>
                      <p className="text-primary font-semibold">India's Most Economical AC</p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-8">
                    Experience affordable cooling with India's most trusted and economical AC brand.
                    Godrej brings you reliable, budget-friendly air conditioning solutions
                    made in India for Indian homes in Bareilly, UP.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="cta" size="lg" onClick={() => window.open('tel:+919429693410', '_self')}>
                      <Phone className="h-5 w-5" />
                      Get Lowest Price
                    </Button>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <img
                    src={splitAC}
                    alt="Godrej Split AC"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Godrej */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Why Choose Godrej in Bareilly?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whyChooseGodrej.map((item, index) => (
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
                Godrej AC Range
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
                Ready for Affordable Cooling?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get India's most economical AC solutions in Bareilly
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" onClick={() => window.open('tel:+919429693410', '_self')}>
                  <Phone className="h-5 w-5" />
                  Call for Best Deal
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

export default Godrej;