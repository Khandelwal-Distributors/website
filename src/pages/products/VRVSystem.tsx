import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeVideos from "@/components/YouTubeVideos";
import { Phone, ArrowLeft, Zap, Building2, TrendingDown, Maximize2, Home, Building, Hotel, Hospital, School, MessageCircle, CheckCircle2, IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import vrvSystemImg from "@/assets/vrv-system.jpg";
import vrvHomeImg from "@/assets/vrv-home.jpg";
import vrvImageBg from "@/assets/vrv-image.webp";

const VRVSystem = () => {
  const keyBenefits = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Exceptional Energy Savings",
      description: "30-50% lower electricity bills compared to conventional AC systems",
      details: [
        "Inverter technology adjusts compressor speed based on actual demand",
        "Heat recovery feature transfers excess heat between zones",
        "Simultaneous heating and cooling without energy waste",
        "ROI typically achieved in 3-5 years through energy savings"
      ]
    },
    {
      icon: <TrendingDown className="h-8 w-8" />,
      title: "Heat Load Diversity Advantage",
      description: "System capacity intelligently distributed across zones",
      details: [
        "100 TR capacity outdoor can serve 120-130 TR indoor units",
        "Not all zones require maximum cooling simultaneously",
        "20-30% reduction in outdoor equipment capacity needed",
        "Lower initial investment compared to traditional systems"
      ]
    },
    {
      icon: <Maximize2 className="h-8 w-8" />,
      title: "Space Saving Design",
      description: "Maximize usable space in your building",
      details: [
        "No bulky central plant room required",
        "Compact outdoor units can be placed on rooftops",
        "No ceiling space wasted on ducts and air handling units",
        "Individual slim indoor units blend seamlessly with interiors"
      ]
    }
  ];

  const idealFor = [
    {
      icon: <Home className="h-12 w-12" />,
      title: "Residential Villas & Apartments",
      description: "Perfect for 3+ bedroom homes requiring individual room control",
      points: ["Quiet operation", "Energy bills ₹3,000-5,000/month", "Individual zone control", "Aesthetic indoor units"]
    },
    {
      icon: <School className="h-12 w-12" />,
      title: "Educational Institutions",
      description: "Schools, colleges, and training centers benefit from zone-wise control",
      points: ["Operate only occupied classrooms", "40% energy savings vs central AC", "Easy expansion", "Low maintenance"]
    },
    {
      icon: <Hotel className="h-12 w-12" />,
      title: "Hotels & Resorts",
      description: "Guest comfort with exceptional energy efficiency",
      points: ["Individual guest room control", "Heat recovery for hot water", "Billing per room usage", "Premium guest experience"]
    },
    {
      icon: <Hospital className="h-12 w-12" />,
      title: "Hospitals & Clinics",
      description: "Precise temperature control for different medical zones",
      points: ["OT: 18-22°C, Wards: 24-26°C", "Infection control with individual zones", "24/7 reliable operation", "Backup and redundancy"]
    }
  ];

  const vrvCategories = [
    {
      name: "VRV Home",
      subtitle: "Residential Solutions",
      image: vrvHomeImg,
      description: "Premium VRV systems designed specifically for luxury homes, villas, and high-end apartments",
      capacity: "6-16 HP",
      idealFor: "3-6 bedroom homes, penthouses, independent villas",
      features: [
        "Ultra-quiet indoor units (19 dB)",
        "Elegant slim ducted & cassette designs",
        "Wi-Fi enabled smart control",
        "Individual room temperature control",
        "Energy savings: ₹4,000-8,000/month"
      ],
      priceRange: "₹4,50,000 - ₹12,00,000",
      popular: false
    },
    {
      name: "VRV-X",
      subtitle: "Commercial & Institutional",
      image: vrvSystemImg,
      description: "High-capacity VRV systems for offices, hotels, hospitals, schools, and commercial buildings",
      capacity: "8-64 HP",
      idealFor: "Offices, hotels, hospitals, schools, malls, showrooms",
      features: [
        "Simultaneous heating & cooling",
        "Heat recovery for hot water",
        "Central monitoring & control",
        "Modular & expandable design",
        "Energy savings: 30-50% vs traditional"
      ],
      priceRange: "₹6,00,000 - ₹50,00,000+",
      popular: false
    }
  ];

  const comparisonData = [
    { feature: "Energy Efficiency", vrv: "⭐⭐⭐⭐⭐ (30-50% savings)", traditional: "⭐⭐ (No diversity)" },
    { feature: "Initial Cost", vrv: "Higher (₹700-900/sqft)", traditional: "Lower (₹500-600/sqft)" },
    { feature: "Operating Cost", vrv: "₹40-60/sqft/year", traditional: "₹80-120/sqft/year" },
    { feature: "Space Required", vrv: "Minimal (no plant room)", traditional: "Large (plant + AHU rooms)" },
    { feature: "Individual Control", vrv: "✅ Each zone independent", traditional: "❌ Central control only" },
    { feature: "ROI Period", vrv: "3-5 years", traditional: "N/A" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>VRV System Installation in Bareilly, Pilibhit, Shahjahanpur | Commercial VRV Projects UP</title>
        <meta name="description" content="Professional VRV system installation for commercial buildings, hotels, hospitals, schools in Bareilly, Pilibhit, Shahjahanpur, Badaun, Rampur, Moradabad. 30-50% energy savings. Authorized Daikin VRV dealers. Call +91-90844-17884" />
        <meta name="keywords" content="VRV system installation Bareilly, VRV projects Pilibhit, Daikin VRV Shahjahanpur, commercial HVAC Badaun, hotel AC system Rampur, hospital HVAC Moradabad, VRV contractors UP, office VRV system, VRV dealers Bareilly" />
        
        {/* Open Graph */}
        <meta property="og:title" content="VRV System Projects in Bareilly, Pilibhit, Shahjahanpur | Authorized Daikin Dealers" />
        <meta property="og:description" content="Complete VRV installation for commercial buildings across Bareilly, Pilibhit, Shahjahanpur, Badaun, Rampur & Moradabad. Energy efficient, expert installation." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={vrvSystemImg} />
        <meta property="og:url" content="https://www.khandelwaldistributors.com/products/vrv-system" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VRV System Projects in Bareilly & Uttar Pradesh" />
        <meta name="twitter:description" content="Professional VRV installation for hotels, hospitals, offices. Serving Bareilly, Pilibhit, Shahjahanpur & nearby cities." />
        
        <link rel="canonical" href="https://www.khandelwaldistributors.com/products/vrv-system" />
        
        {/* LocalBusiness Schema with Service Area */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Khandelwal Distributors - VRV System Specialists",
            "description": "Professional VRV system installation and maintenance services for commercial and residential buildings",
            "image": vrvSystemImg,
            "telephone": "+919084417884",
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
            "areaServed": [
              {
                "@type": "City",
                "name": "Bareilly",
                "containedIn": "Uttar Pradesh, India"
              },
              {
                "@type": "City",
                "name": "Pilibhit",
                "containedIn": "Uttar Pradesh, India"
              },
              {
                "@type": "City",
                "name": "Shahjahanpur",
                "containedIn": "Uttar Pradesh, India"
              },
              {
                "@type": "City",
                "name": "Badaun",
                "containedIn": "Uttar Pradesh, India"
              },
              {
                "@type": "City",
                "name": "Rampur",
                "containedIn": "Uttar Pradesh, India"
              },
              {
                "@type": "City",
                "name": "Ramnagar",
                "containedIn": "Uttarakhand, India"
              },
              {
                "@type": "City",
                "name": "Moradabad",
                "containedIn": "Uttar Pradesh, India"
              }
            ],
            "url": "https://www.khandelwaldistributors.com/products/vrv-system",
            "priceRange": "₹₹₹",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127"
            }
          })}
        </script>
        
        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "VRV System Installation & Maintenance",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Khandelwal Distributors"
            },
            "areaServed": [
              "Bareilly", "Pilibhit", "Shahjahanpur", "Badaun", "Rampur", "Ramnagar", "Moradabad"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "VRV System Solutions",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "VRV Home - Residential Solutions",
                    "description": "Premium VRV systems for luxury homes and villas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "VRV-X Commercial Systems",
                    "description": "High-capacity VRV for offices, hotels, hospitals, schools"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20" style={{ backgroundImage: `url(${vrvImageBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-primary/80"></div>
          <div className="container mx-auto px-4 lg:pl-12 xl:pl-16 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/products" className="text-white hover:text-accent-warm transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Professional VRV System Installation in Bareilly & Uttar Pradesh
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-4xl mb-6">
              Leading VRV system contractors serving Bareilly, Pilibhit, Shahjahanpur, Badaun, Rampur, Ramnagar, and Moradabad. 
              Whether you're building a new home, school, hotel, or hospital, our VRV (Variable Refrigerant Volume) 
              systems deliver unmatched energy savings, operational flexibility, and space optimization.
            </p>
            <p className="text-lg text-white/80 max-w-4xl mb-8">
              ✓ 30-50% Energy Savings &nbsp;|&nbsp; ✓ Authorized Daikin Dealers &nbsp;|&nbsp; ✓ 100+ Projects Completed
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" size="lg" onClick={() => window.open('tel:+919084417884', '_self')}>
                <Phone className="h-5 w-5" />
                Get Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="bg-green-600 text-white border-green-600 hover:bg-green-700" onClick={() => window.open('https://wa.me/919084417884?text=Hello, I want to know about VRV systems for my new building', '_blank')}>
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </section>

        {/* Why VRV Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Why VRV Should Be Your First Choice
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Three compelling reasons why VRV systems are revolutionizing HVAC in modern buildings
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {keyBenefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="bg-primary/10 text-primary p-4 rounded-full w-fit mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-2xl text-primary">{benefit.title}</CardTitle>
                    <CardDescription className="text-base">{benefit.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {benefit.details.map((detail, dIndex) => (
                        <li key={dIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ideal Applications */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Ideal for Every Type of New Building
              </h2>
              <p className="text-xl text-muted-foreground">
                VRV systems excel in diverse applications across residential and commercial sectors
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {idealFor.map((application, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-primary">
                        {application.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-primary">{application.title}</CardTitle>
                        <CardDescription>{application.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {application.points.map((point, pIndex) => (
                        <div key={pIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                          <span className="text-sm">{point}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* VRV Categories */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Our VRV System Categories
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the perfect VRV solution for your project
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {vrvCategories.map((category, index) => (
                <Card key={index} className={`overflow-hidden hover:shadow-2xl transition-all ${category.popular ? 'ring-2 ring-primary' : ''}`}>
                  {category.popular && (
                    <div className="bg-primary text-white text-center py-2 font-semibold text-sm">
                      POPULAR CHOICE
                    </div>
                  )}
                  <div className="relative h-64">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-3xl font-bold">{category.name}</h3>
                      <p className="text-lg opacity-90">{category.subtitle}</p>
                    </div>
                  </div>

                  <CardHeader>
                    <CardDescription className="text-base">{category.description}</CardDescription>
                    <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                      <div>
                        <span className="font-semibold text-primary">Capacity:</span>
                        <p className="text-muted-foreground">{category.capacity}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-primary">Price Range:</span>
                        <p className="text-muted-foreground font-bold text-accent-warm">{category.priceRange}</p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="mb-4">
                      <p className="font-semibold text-sm text-primary mb-2">Ideal For:</p>
                      <p className="text-sm text-muted-foreground">{category.idealFor}</p>
                    </div>

                    <div className="mb-6">
                      <p className="font-semibold text-sm text-primary mb-3">Key Features:</p>
                      <ul className="space-y-2">
                        {category.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-3">
                      <Button className="flex-1" onClick={() => window.open('tel:+919084417884', '_self')}>
                        <Phone className="h-4 w-4" />
                        Get Quote
                      </Button>
                      <Button variant="outline" className="flex-1" onClick={() => window.open('https://wa.me/919084417884?text=I want details about ' + category.name, '_blank')}>
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                VRV vs Traditional HVAC Systems
              </h2>
              <p className="text-xl text-muted-foreground">
                See why VRV is the superior choice for modern buildings
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b bg-muted/50">
                          <th className="text-left p-4 font-semibold">Feature</th>
                          <th className="text-left p-4 font-semibold text-primary">VRV System</th>
                          <th className="text-left p-4 font-semibold">Traditional AC</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonData.map((row, index) => (
                          <tr key={index} className="border-b last:border-0 hover:bg-muted/30">
                            <td className="p-4 font-medium">{row.feature}</td>
                            <td className="p-4 text-green-700 font-medium">{row.vrv}</td>
                            <td className="p-4 text-muted-foreground">{row.traditional}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                VRV System Projects Across Uttar Pradesh & Uttarakhand
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Trusted VRV installation partner for commercial and residential projects across major cities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Bareilly</CardTitle>
                  <CardDescription className="text-sm">Major Project Hub</CardDescription>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="text-muted-foreground">Hotels, Hospitals, Commercial Buildings, Residential Villas</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Pilibhit</CardTitle>
                  <CardDescription className="text-sm">Complete Coverage</CardDescription>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="text-muted-foreground">Schools, Hotels, Offices, Healthcare Facilities</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Shahjahanpur</CardTitle>
                  <CardDescription className="text-sm">Expert Installation</CardDescription>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="text-muted-foreground">Commercial Complexes, Educational Institutions</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Badaun</CardTitle>
                  <CardDescription className="text-sm">Professional Service</CardDescription>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="text-muted-foreground">Hotels, Malls, Corporate Offices</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Rampur</CardTitle>
                  <CardDescription className="text-sm">Authorized Dealers</CardDescription>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="text-muted-foreground">Hospitals, Hotels, Industrial Projects</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Ramnagar</CardTitle>
                  <CardDescription className="text-sm">Resort Specialists</CardDescription>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="text-muted-foreground">Resorts, Hotels, Premium Villas</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Moradabad</CardTitle>
                  <CardDescription className="text-sm">Fast Service</CardDescription>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="text-muted-foreground">Commercial Buildings, Showrooms, Hotels</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">+ Nearby Areas</CardTitle>
                  <CardDescription className="text-sm">Extended Coverage</CardDescription>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="text-muted-foreground">Contact us for service in your area</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                <strong className="text-primary">Why choose us for VRV projects?</strong> Authorized Daikin dealers | 25+ years experience | 
                Free site survey | Custom design | Professional installation | 24/7 support
              </p>
              <Button size="lg" onClick={() => window.open('tel:+919084417884', '_self')}>
                <Phone className="h-5 w-5" />
                Discuss Your VRV Project
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your VRV Project?
            </h2>
            <p className="text-xl text-white/90 mb-2 max-w-3xl mx-auto">
              Get expert consultation, custom system design, and professional installation 
              from authorized Daikin VRV dealers.
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
              Serving Bareilly, Pilibhit, Shahjahanpur, Badaun, Rampur, Ramnagar, Moradabad & nearby areas
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" onClick={() => window.open('tel:+919084417884', '_self')}>
                <Phone className="h-5 w-5" />
                Call: +91-90844-17884
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-white/90" onClick={() => window.open('https://wa.me/919084417884?text=I want a quote for VRV system installation', '_blank')}>
                <IndianRupee className="h-5 w-5" />
                Request Quote
              </Button>
            </div>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4">Expert Guide</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Complete Guide to VRV Systems in India
                </h2>
                <p className="text-xl text-muted-foreground">
                  Learn everything about VRV technology, energy savings, and implementation
                </p>
              </div>

              <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src={vrvSystemImg} 
                      alt="VRV Systems Guide - Commercial HVAC solution"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-8">
                    <Badge className="mb-3">6 min read</Badge>
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      VRV Systems in India: The Future of Energy-Efficient Commercial Cooling
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Discover how VRV (Variable Refrigerant Volume) systems are revolutionizing commercial HVAC 
                      in India with up to 40% energy savings and smart zoning capabilities. Learn about capacity 
                      planning, heat load diversity, ROI calculations, and implementation best practices.
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">30-40% energy savings vs traditional AC systems</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Heat load diversity advantage explained</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Brand comparison: Daikin, Mitsubishi, Carrier</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Installation best practices for India</span>
                      </div>
                    </div>
                    <Link to="/blogs/vrv-systems-india-energy-efficiency">
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

        {/* Video Section */}
        <YouTubeVideos
          category="vrv-system"
          title="VRV System Explained"
          description="Watch how VRV systems work and why they're perfect for modern buildings"
        />
      </main>

      <Footer />
    </div>
  );
};

export default VRVSystem;
