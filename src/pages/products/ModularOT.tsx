import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, CheckCircle2, Shield, Award, Clock, ArrowLeft } from "lucide-react";
import YouTubeVideos from "@/components/YouTubeVideos";
import { Link } from "react-router-dom";

import wallPanelsImg from "@/assets/ot-wall-panels.jpg";
import laminarAirflowImg from "@/assets/ot-laminar-airflow.webp";
import xrayViewerImg from "@/assets/ot-xray-viewer.jpg";
import hermeticDoorImg from "@/assets/ot-hermetic-door.jpg";
import controlPanelImg from "@/assets/ot-control-panel.jpg";
import multiArmPendantImg from "@/assets/ot-multiarm-pendant.webp";
import ahuImg from "@/assets/ot-ahu.jpg";
import passBoxImg from "@/assets/ot-pass-box.jpg";
import peripheralLightingImg from "@/assets/ot-peripheral-lighting.jpg";
import flooringImg from "@/assets/ot-flooring.jpg";
import pressureDampersImg from "@/assets/ot-pressure-damper.webp";
import instrumentStorageImg from "@/assets/ot-instrument-storage.jpg";
import otHeroBg from "@/assets/ot-hero-bg.jpg";

const ModularOT = () => {
  const components = [
    {
      name: "Wall Panels (Stainless Steel)",
      image: wallPanelsImg,
      description: "Medical-grade stainless steel wall panels with antibacterial coating, providing seamless, easy-to-clean surfaces that prevent bacterial growth and maintain sterile conditions.",
      features: [
        "304/316 Grade Stainless Steel",
        "Antibacterial Coating",
        "Seamless Installation",
        "Easy to Clean & Maintain",
        "Corrosion Resistant",
        "Fire Rated"
      ]
    },
    {
      name: "Laminar Air Flow (with HEPA Filter)",
      image: laminarAirflowImg,
      description: "Advanced HEPA-filtered laminar air flow system ensuring ISO Class 5 cleanroom standards, removing 99.97% of particles to maintain ultra-clean surgical environment.",
      features: [
        "HEPA H14 Filtration",
        "ISO Class 5 Standard",
        "Uniform Air Distribution",
        "Low Noise Operation",
        "Energy Efficient",
        "Real-time Monitoring"
      ]
    },
    {
      name: "X-Ray Viewing Screen",
      image: xrayViewerImg,
      description: "LED-backlit X-ray viewing screens with adjustable brightness, allowing surgeons to view radiological images clearly during procedures.",
      features: [
        "LED Backlighting",
        "Adjustable Brightness",
        "Energy Efficient",
        "Long Lifespan",
        "Multiple Film Capacity",
        "Wall/Flush Mounted"
      ]
    },
    {
      name: "Hermetically Sealed Door",
      image: hermeticDoorImg,
      description: "Automatic sliding hermetically sealed doors with airtight seals, preventing air leakage and maintaining positive pressure in the OT environment.",
      features: [
        "Airtight Seal",
        "Automatic Operation",
        "Positive Pressure Maintenance",
        "Viewing Window",
        "Emergency Override",
        "Stainless Steel Frame"
      ]
    },
    {
      name: "OT Control Panel",
      image: controlPanelImg,
      description: "Centralized digital control panel for managing all OT environmental parameters including temperature, humidity, lighting, and air pressure from a single touchscreen interface.",
      features: [
        "Touchscreen Interface",
        "Temperature Control",
        "Humidity Management",
        "Lighting Control",
        "Pressure Monitoring",
        "Emergency Backup"
      ]
    },
    {
      name: "Multi-arm Pendant",
      image: multiArmPendantImg,
      description: "Ceiling-mounted multi-arm pendant systems providing gas outlets, electrical sockets, and equipment mounting solutions with flexible positioning.",
      features: [
        "Medical Gas Outlets",
        "Electrical Sockets",
        "Equipment Mounting",
        "360° Rotation",
        "Height Adjustable",
        "Load Capacity: 150-250kg"
      ]
    },
    {
      name: "Air Handling Unit (AHU)",
      image: ahuImg,
      description: "Dedicated OT AHU system with advanced filtration, maintaining precise temperature, humidity control, and positive pressure for optimal surgical conditions.",
      features: [
        "HEPA Filtration",
        "Temperature Control ±1°C",
        "Humidity Control 45-55%",
        "Positive Pressure",
        "Energy Recovery",
        "VFD Controlled"
      ]
    },
    {
      name: "Pass Box",
      image: passBoxImg,
      description: "UV sterilized pass-through chambers for safe transfer of sterile supplies and equipment between OT and preparation areas, preventing contamination.",
      features: [
        "UV Sterilization",
        "Interlocking Doors",
        "Stainless Steel Construction",
        "HEPA Filtered",
        "Adjustable Shelves",
        "Digital Timer"
      ]
    },
    {
      name: "OT Peripheral Lighting",
      image: peripheralLightingImg,
      description: "Energy-efficient LED peripheral lighting system with color temperature control, providing optimal ambient illumination without interfering with surgical procedures.",
      features: [
        "LED Technology",
        "Adjustable Intensity",
        "Color Temperature Control",
        "Shadow-free Illumination",
        "Long Life (50,000+ hrs)",
        "Low Heat Emission"
      ]
    },
    {
      name: "OT Flooring",
      image: flooringImg,
      description: "Anti-static, seamless vinyl flooring with coved edges, providing easy cleaning, infection control, and safety for critical surgical areas.",
      features: [
        "Anti-static Properties",
        "Seamless Installation",
        "Chemical Resistant",
        "Easy to Clean",
        "Slip Resistant",
        "Coved Edges"
      ]
    },
    {
      name: "Pressure Dampers",
      image: pressureDampersImg,
      description: "Medical-grade pressure control dampers for maintaining precise positive pressure differential in the OT, ensuring contamination-free environment and proper air flow control.",
      features: [
        "Automatic Pressure Control",
        "Medical Grade Construction",
        "Low Leakage Design",
        "Quiet Operation",
        "Easy Maintenance",
        "Real-time Monitoring"
      ]
    },
    {
      name: "Instrument Storage",
      image: instrumentStorageImg,
      description: "Stainless steel sterile instrument storage cabinets with organized compartments, ensuring proper storage, quick access, and maintaining sterility of surgical instruments.",
      features: [
        "Stainless Steel 304 Grade",
        "Sterile Environment",
        "Organized Compartments",
        "Glass/Solid Doors",
        "Adjustable Shelving",
        "Easy to Clean"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Infection Control",
      description: "Advanced filtration and seamless surfaces prevent bacterial growth and maintain sterile environment"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "International Standards",
      description: "Compliant with ISO, NABH, and international healthcare facility standards"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
      title: "Complete Solution",
      description: "Turnkey installation including all components, testing, validation, and certification"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Quick Installation",
      description: "Modular design enables faster installation with minimal disruption to operations"
    }
  ];

  const handleCallNow = () => {
    window.location.href = "tel:+919429693410";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919084417884?text=I'm interested in Modular OT installation. Please provide more details.", "_blank");
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Modular Operating Theatre (OT) - Complete Turnkey Solution",
    "description": "Complete modular operating theatre installation including wall panels, laminar air flow, hermetically sealed doors, AHU systems, and all critical OT components. ISO compliant with HEPA filtration.",
    "image": [
      wallPanelsImg,
      laminarAirflowImg,
      hermeticDoorImg
    ],
    "brand": {
      "@type": "Brand",
      "name": "Khandelwal Distributors"
    },
    "category": "Medical Equipment",
    "url": "https://www.khandelwaldistributors.com/products/modular-ot",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": "https://www.khandelwaldistributors.com/products/modular-ot",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "INR",
        "price": "999999"
      },
      "seller": {
        "@type": "Organization",
        "name": "Khandelwal Distributors",
        "telephone": "+919897595000",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "G-35, MCI Plaza, Civil Lines",
          "addressLocality": "Bareilly",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "243001",
          "addressCountry": "IN"
        }
      },
      "areaServed": {
        "@type": "State",
        "name": "Uttar Pradesh"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "198",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <Helmet>
        <title>Modular Operating Theatre (OT) Installation | Complete Turnkey Solution - Bareilly, UP</title>
        <meta name="description" content="Complete modular OT installation in Bareilly, UP. Wall panels, laminar air flow, HEPA filtration, hermetically sealed doors, AHU systems. ISO compliant. 25+ years experience." />
        <meta name="keywords" content="modular OT Bareilly, operating theatre Bareilly, laminar air flow, HEPA filter, OT installation Bareilly UP, hospital OT, surgical theatre, OT AHU, hermetically sealed door, OT flooring, modular OT India" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Khandelwal Distributors" />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Bareilly" />
        <meta name="geo.position" content="28.3670;79.4304" />
        <meta name="ICBM" content="28.3670, 79.4304" />
        <link rel="canonical" href="https://www.khandelwaldistributors.com/products/modular-ot" />

        {/* Open Graph */}
        <meta property="og:title" content="Modular Operating Theatre (OT) - Complete Turnkey Solution | Bareilly, UP" />
        <meta property="og:description" content="ISO compliant modular OT with laminar air flow, HEPA filtration, and all critical components. Expert installation in Bareilly, Uttar Pradesh." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://www.khandelwaldistributors.com/products/modular-ot" />
        <meta property="og:image" content={wallPanelsImg} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Khandelwal Distributors" />
        <meta property="product:category" content="Medical Equipment" />
        <meta property="product:availability" content="in stock" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Modular Operating Theatre (OT) - Complete Solution" />
        <meta name="twitter:description" content="Complete modular OT with ISO compliance and 25+ years expertise" />
        <meta name="twitter:image" content={wallPanelsImg} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Khandelwal Distributors",
            "description": "Professional Modular OT Installation in Bareilly, Uttar Pradesh",
            "image": wallPanelsImg,
            "telephone": "+919429693410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "G-35, MCI Plaza, Civil Lines",
              "addressLocality": "Bareilly",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "243001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "28.3670",
              "longitude": "79.4304"
            },
            "url": "https://www.khandelwaldistributors.com",
            "priceRange": "₹₹₹",
            "areaServed": ["Bareilly", "Pilibhit", "Budaun", "Shahjahanpur", "Uttar Pradesh"]
          })}
        </script>

        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.khandelwaldistributors.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Products",
                "item": "https://www.khandelwaldistributors.com/products"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Modular Operating Theatre",
                "item": "https://www.khandelwaldistributors.com/products/modular-ot"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 px-4 lg:pl-12 xl:pl-16 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-100"
            style={{ backgroundImage: `url(${otHeroBg})` }}
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Modular Operating Theatre (OT) in Bareilly
              </h1>
              <p className="text-xl text-white">
                Complete Turnkey Installation with ISO Compliance
              </p>
              <p className="text-lg text-white/90 max-w-3xl mx-auto">
                State-of-the-art modular operating theatre solutions including all critical components - from wall panels and laminar air flow to hermetically sealed doors and advanced AHU systems. Ensuring sterile, safe surgical environments.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  onClick={handleCallNow}
                  className="gap-2 bg-accent-warm hover:bg-accent-warm/90"
                >
                  <Phone className="w-5 h-5" />
                  Call: +91 9897595000
                </Button>
                <Button
                  size="lg"
                  onClick={handleWhatsApp}
                  className="gap-2 bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Modular OT Solutions?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex justify-center">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Components Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Complete OT Components</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                All essential components for a fully functional, ISO-compliant modular operating theatre
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {components.map((component, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={component.image}
                      alt={component.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold">{component.name}</h3>
                    <p className="text-muted-foreground">{component.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {component.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Standards & Compliance */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Standards & Compliance</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6 space-y-3">
                    <h3 className="text-xl font-semibold">Indian Standards</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                        <span>NABH (National Accreditation Board for Hospitals)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                        <span>Medical Device Rules 2017</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                        <span>Bureau of Indian Standards (BIS)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 space-y-3">
                    <h3 className="text-xl font-semibold">International Standards</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                        <span>ISO 14644 Cleanroom Standards</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                        <span>HTM 03-01 (UK Healthcare Standards)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                        <span>DIN 1946-4 (German Standards)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Installation Process</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Site Assessment", desc: "Detailed evaluation and planning" },
                { step: "02", title: "Design", desc: "Custom OT layout and specifications" },
                { step: "03", title: "Installation", desc: "Professional turnkey setup" },
                { step: "04", title: "Testing", desc: "Complete validation & certification" },
                { step: "05", title: "Support", desc: "24/7 maintenance & service" }
              ].map((item, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4">Expert Guide</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Complete Guide to Modular Operation Theatres
                </h2>
                <p className="text-xl text-muted-foreground">
                  The future of surgical excellence in Indian hospitals
                </p>
              </div>

              <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src={otHeroBg} 
                      alt="Modular OT Guide - Surgical excellence and compliance"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-8">
                    <Badge className="mb-3">8 min read</Badge>
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Modular Operation Theatres: The Future of Surgical Excellence in Indian Hospitals
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Discover how modular OTs are revolutionizing surgical infrastructure in India. Learn about 
                      ISO Class 5 standards, NABH compliance, component selection, and cost planning for hospitals 
                      and surgical centers.
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">ISO Class 5 & NABH compliance standards</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Complete component breakdown & selection</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Cost planning & ROI calculation</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Installation timeline & maintenance tips</span>
                      </div>
                    </div>
                    <Link to="/blogs/modular-operation-theatre-india-hospitals">
                      <Button size="lg" className="w-full md:w-auto">
                        Read Complete Guide
                        <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* YouTube Videos */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <YouTubeVideos />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Setup Your Modular OT?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get expert consultation and detailed quotation for your hospital or surgical center
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={handleCallNow} className="gap-2">
                <Phone className="w-5 h-5" />
                Call Now: +91 9429693410
              </Button>
              <Button size="lg" variant="outline" onClick={handleWhatsApp} className="gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp for Quote
              </Button>
            </div>
            <div className="pt-8 border-t border-border/50 mt-8">
              <p className="text-sm text-muted-foreground">
                📍 Serving Bareilly, Pilibhit, Budaun, Shahjahanpur & Uttar Pradesh | ⚡ 25+ Years Experience | 🏆 ISO Certified Installations
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ModularOT;