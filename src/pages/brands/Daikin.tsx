import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Star, CheckCircle, Snowflake, Settings, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import daikinLogo from "@/assets/brands/daikin-logo.jpg";
import vrvSystem from "@/assets/vrv-system.jpg";
import splitAC from "@/assets/split-ac.jpg";
import cassetteAC from "@/assets/cassette-ac.jpg";
import chillerSystem from "@/assets/chiller-system.jpg";
import heatPump from "@/assets/heat-pump.jpg";
import ventilationHrv from "@/assets/ventilation-hrv.jpg";

const Daikin = () => {
  const products = [
    {
      name: "VRV Systems",
      description: "Variable Refrigerant Volume systems for large commercial spaces",
      image: vrvSystem,
      features: ["Energy Efficient", "Zonal Control", "Heat Recovery"]
    },
    {
      name: "Split AC Units",
      description: "Premium residential air conditioning solutions",
      image: splitAC,
      features: ["Inverter Technology", "Silent Operation", "Smart Controls"]
    },
    {
      name: "Cassette AC",
      description: "Ceiling-mounted units for commercial applications",
      image: cassetteAC,
      features: ["360° Air Distribution", "Compact Design", "Easy Maintenance"]
    },
    {
      name: "Chiller Systems",
      description: "Centralized cooling for large buildings and complexes",
      image: chillerSystem,
      features: ["High Efficiency", "Centralized Control", "Scalable Capacity"]
    },
    {
      name: "Heat Pump Systems",
      description: "Year-round comfort with heating and cooling solutions",
      image: heatPump,
      features: ["Dual Function", "Energy Saving", "All Weather Operation"]
    },
    {
      name: "HRV Systems",
      description: "Heat Recovery Ventilation for fresh air and energy efficiency",
      image: ventilationHrv,
      features: ["Fresh Air Supply", "Heat Recovery", "Energy Efficient"]
    }
  ];

  const whyChooseDaikin = [
    {
      icon: <Star className="h-6 w-6 text-accent-warm" />,
      title: "World's No.1 AC Brand",
      description: "Leading global manufacturer with 95+ years of innovation"
    },
    {
      icon: <Snowflake className="h-6 w-6 text-primary" />,
      title: "Advanced Inverter Technology",
      description: "Up to 50% energy savings with precise temperature control"
    },
    {
      icon: <Settings className="h-6 w-6 text-primary" />,
      title: "VRV Technology Pioneer",
      description: "Invented VRV systems for superior commercial cooling solutions"
    },
    {
      icon: <Shield className="h-6 w-6 text-accent-warm" />,
      title: "Comprehensive Warranty",
      description: "Extended warranty coverage and reliable after-sales service"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Daikin AC Dealer Bareilly | VRV Systems & Split AC | Khandelwal Distributors</title>
        <meta name="description" content="Authorized Daikin AC dealer in Bareilly, UP. Premium VRV systems, inverter split ACs, cassette units. Expert installation & service. Call +91 98765 43210" />
        <meta name="keywords" content="Daikin AC Bareilly, VRV systems Bareilly, Daikin dealer UP, split AC Bareilly, commercial AC Bareilly, Daikin service center" />
        <link rel="canonical" href="https://khandelwaldistributors.com/brands/daikin" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Daikin Air Conditioning Systems",
            "brand": "Daikin",
            "description": "Premium Daikin AC systems including VRV, split units, and cassette ACs available in Bareilly, Uttar Pradesh",
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Daikin"
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
                    <img src={daikinLogo} alt="Daikin Logo" className="h-16" />
                    <div>
                      <h1 className="text-4xl font-bold text-foreground">
                        Daikin Air Conditioning
                      </h1>
                      <p className="text-primary font-semibold">World's No.1 AC Brand</p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-8">
                    Experience superior comfort with Daikin's advanced inverter technology and VRV systems.
                    Authorized dealer in Bareilly, UP with expert installation and comprehensive warranty.
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
                    src={vrvSystem}
                    alt="Daikin VRV System Installation"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Daikin */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Why Choose Daikin in Bareilly?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whyChooseDaikin.map((item, index) => (
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
                Daikin Product Range
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                Ready for Premium Daikin Comfort?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get expert consultation and professional installation in Bareilly
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" onClick={() => window.open('tel:+919429693410', '_self')}>
                  <Phone className="h-5 w-5" />
                  Call for Free Site Visit
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

export default Daikin;