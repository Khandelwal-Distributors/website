import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Star, CheckCircle, Trophy, Heart, IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";
import voltasLogo from "@/assets/brands/voltas-logo.jpg";
import splitAC from "@/assets/split-ac.jpg";
import inverterSplitAC from "@/assets/inverter-split-ac.jpg";
import windowAC from "@/assets/window-ac.jpg";

const Voltas = () => {
  const products = [
    {
      name: "Inverter Split ACs",
      description: "Energy-efficient cooling with smart features",
      image: inverterSplitAC,
      features: ["5-Star Rating", "Copper Condenser", "Smart Connectivity"]
    },
    {
      name: "Split Air Conditioners",
      description: "Reliable cooling for Indian homes",
      image: splitAC,
      features: ["Made for India", "Dust Filter", "Stabilizer Free Operation"]
    },
    {
      name: "Window ACs",
      description: "Affordable cooling solutions",
      image: windowAC,
      features: ["High Cooling Capacity", "Easy Maintenance", "Value for Money"]
    }
  ];

  const whyChooseVoltas = [
    {
      icon: <Trophy className="h-6 w-6 text-accent-warm" />,
      title: "India's No.1 AC Brand",
      description: "Market leader with the highest market share in India"
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Made for India",
      description: "Specially designed for Indian climate and conditions"
    },
    {
      icon: <IndianRupee className="h-6 w-6 text-primary" />,
      title: "Value for Money",
      description: "Premium features at affordable prices"
    },
    {
      icon: <Star className="h-6 w-6 text-accent-warm" />,
      title: "Trusted Quality",
      description: "Decades of experience serving Indian families"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Voltas AC Dealer Bareilly | India's No.1 AC Brand | Khandelwal Distributors</title>
        <meta name="description" content="Authorized Voltas AC dealer in Bareilly, UP. India's No.1 AC brand with inverter split ACs, window units. Made for India. Call +91 98765 43210" />
        <meta name="keywords" content="Voltas AC Bareilly, India No.1 AC brand, inverter AC Bareilly, split AC UP, Voltas dealer Uttar Pradesh" />
        <link rel="canonical" href="https://khandelwaldistributors.com/brands/voltas" />
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
                    <img src={voltasLogo} alt="Voltas Logo" className="h-16" />
                    <div>
                      <h1 className="text-4xl font-bold text-foreground">
                        Voltas Air Conditioning
                      </h1>
                      <p className="text-primary font-semibold">India's No.1 AC Brand</p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-8">
                    Experience India's most trusted air conditioning brand. Voltas combines
                    decades of innovation with understanding of Indian climate to deliver
                    superior cooling solutions in Bareilly and across Uttar Pradesh.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="cta" size="lg" onClick={() => window.open('tel:+919429693410', '_self')}>
                      <Phone className="h-5 w-5" />
                      Get Voltas Quote
                    </Button>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <img
                    src={inverterSplitAC}
                    alt="Voltas Inverter Split AC"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Voltas */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Why Choose Voltas in Bareilly?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whyChooseVoltas.map((item, index) => (
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
                Voltas Product Range
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
                Choose India's Most Trusted AC Brand
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Experience superior cooling designed for Indian homes in Bareilly
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" onClick={() => window.open('tel:+919429693410', '_self')}>
                  <Phone className="h-5 w-5" />
                  Get Best Price
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

export default Voltas;