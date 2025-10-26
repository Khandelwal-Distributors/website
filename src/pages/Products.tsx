import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, ArrowLeft, Star, Thermometer, Wind, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import OptimizedImage from "@/components/OptimizedImage";

// Import product images
import splitAc from "@/assets/split-ac.jpg";
import inverterSplitAc from "@/assets/inverter-split-ac.jpg";
import cassetteAc from "@/assets/cassette-ac.jpg";
import windowAc from "@/assets/window-ac.jpg";
import portableAc from "@/assets/portable-ac.jpg";
import waterCooler from "@/assets/water-cooler.jpg";
import airPurifier from "@/assets/air-purifier.jpg";
import coldRoom from "@/assets/cold-room.jpg";
import ahuSystem from "@/assets/ahu-system.jpg";
import alkalineRo from "@/assets/alkaline-ro.jpg";
import solarWaterHeater from "@/assets/solar-water-heater.jpg";
import floorStandingAc from "@/assets/floor-standing-ac.jpg";
import ventilationHrv from "@/assets/ventilation-hrv.jpg";
import cleanSaleBanner from "@/assets/clean-sale-banner.jpg";
import vrvSystem from "@/assets/vrv-system.jpg";
import chillerSystem from "@/assets/chiller-system.jpg";
import heatPump from "@/assets/heat-pump.jpg";
import ductableAc from "@/assets/ductable-ac.jpg";
import deepFreezer from "@/assets/deep-freezer.jpg";
import EndOfSeasonSale from "@/components/EndOfSeasonSale";
import productsHeroBg from "@/assets/products-hero-bg.jpg";

const Products = () => {
  const productCategories = [
    {
      id: "inverter-split-ac",
      title: "Inverter Split Air Conditioners",
      description: "Energy-efficient inverter technology split ACs with variable speed",
      image: inverterSplitAc,
      icon: <Thermometer className="h-6 w-6" />,
      brands: ["Daikin", "Mitsubishi Heavy", "Carrier", "Amstrad", "Midea", "Godrej"],
      products: [
        { name: "Daikin FTXS35K Inverter", capacity: "1.5 Ton", rating: "5 Star", price: "₹38,000" },
        { name: "Carrier Inverter Neo", capacity: "1 Ton", rating: "5 Star", price: "₹32,000" },
        { name: "Mitsubishi Heavy Inverter", capacity: "1 Ton", rating: "5 Star", price: "₹35,000" }
      ]
    },
    {
      id: "non-inverter-split-ac",
      title: "Non-Inverter Split Air Conditioners",
      description: "Fixed speed split ACs for consistent cooling performance",
      image: splitAc,
      icon: <Thermometer className="h-6 w-6" />,
      brands: ["Daikin", "Mitsubishi Heavy", "Carrier", "Amstrad", "Midea", "Godrej"],
      products: [
        { name: "Carrier Estrella", capacity: "1.5 Ton", rating: "3 Star", price: "₹25,000" },
        { name: "Godrej Fixed Speed", capacity: "1 Ton", rating: "3 Star", price: "₹22,000" },
        { name: "Amstrad Non-Inverter", capacity: "1.5 Ton", rating: "2 Star", price: "₹20,000" }
      ]
    },
    {
      id: "cassette-ac",
      title: "Cassette Air Conditioners",
      description: "Ceiling-mounted cassette ACs for uniform cooling",
      image: cassetteAc,
      icon: <Wind className="h-6 w-6" />,
      brands: ["Daikin", "Carrier", "Mitsubishi Heavy", "Cruise"],
      products: [
        { name: "Daikin FCVF50ARV16", capacity: "2 Ton", rating: "5 Star", price: "₹85,000" },
        { name: "Carrier Cassette 42KCC036", capacity: "3 Ton", rating: "3 Star", price: "₹95,000" },
        { name: "Mitsubishi Heavy Cassette", capacity: "2.5 Ton", rating: "4 Star", price: "₹90,000" }
      ]
    },
    {
      id: "floor-standing-ac",
      title: "Floor Standing Air Conditioners",
      description: "Powerful floor-mounted ACs for large spaces",
      image: floorStandingAc,
      icon: <Wind className="h-6 w-6" />,
      brands: ["Daikin", "Carrier", "Mitsubishi Heavy"],
      products: [
        { name: "Daikin Floor Standing", capacity: "3 Ton", rating: "5 Star", price: "₹1,20,000" },
        { name: "Carrier Floor Mount", capacity: "4 Ton", rating: "4 Star", price: "₹1,40,000" },
        { name: "Mitsubishi Heavy Floor", capacity: "5 Ton", rating: "5 Star", price: "₹1,60,000" }
      ]
    },
    {
      id: "window-ac",
      title: "Window Air Conditioners",
      description: "Compact window ACs perfect for smaller spaces",
      image: windowAc,
      icon: <Zap className="h-6 w-6" />,
      brands: ["Carrier", "Godrej", "Amstrad", "Cruise"],
      products: [
        { name: "Carrier Estrella", capacity: "1.5 Ton", rating: "3 Star", price: "₹25,000" },
        { name: "Godrej GWC 12UTC5", capacity: "1 Ton", rating: "5 Star", price: "₹22,000" },
        { name: "Amstrad Window AC", capacity: "1.5 Ton", rating: "2 Star", price: "₹20,000" }
      ]
    },
    {
      id: "portable-ac",
      title: "Portable Air Conditioners",
      description: "Mobile ACs that can be moved anywhere",
      image: portableAc,
      icon: <Wind className="h-6 w-6" />,
      brands: ["Cruise"],
      products: [
        { name: "Cruise Mobile Pro", capacity: "1 Ton", rating: "3 Star", price: "₹28,000" },
        { name: "Cruise Portable Deluxe", capacity: "1.5 Ton", rating: "3 Star", price: "₹32,000" },
        { name: "Cruise Compact AC", capacity: "0.75 Ton", rating: "2 Star", price: "₹25,000" }
      ]
    },
    {
      id: "water-solutions",
      title: "Water Coolers & Dispensers",
      description: "Premium water cooling and dispensing solutions",
      image: waterCooler,
      icon: <Thermometer className="h-6 w-6" />,
      brands: ["Usha", "Voltas"],
      products: [
        { name: "Usha Water Cooler", capacity: "20L", rating: "4 Star", price: "₹12,000" },
        { name: "Voltas Water Dispenser", capacity: "Hot & Cold", rating: "3 Star", price: "₹8,000" },
        { name: "Usha Premium Cooler", capacity: "40L", rating: "5 Star", price: "₹15,000" }
      ]
    },
    {
      id: "alkaline-ro",
      title: "Alkaline Water RO Systems",
      description: "Advanced alkaline water purification with RO technology",
      image: alkalineRo,
      icon: <Wind className="h-6 w-6" />,
      brands: ["Mitusbishi", "Zero B"],
      products: [
        { name: "Zero B Alkaline Pro", capacity: "RO+UV+Alkaline", rating: "7 Stage", price: "₹18,000" },
        { name: "Zero B Premium", capacity: "RO+UV+TDS", rating: "6 Stage", price: "₹15,000" },
        { name: "Zero B Elite", capacity: "RO+Alkaline", rating: "8 Stage", price: "₹22,000" }
      ]
    },
    {
      id: "solar-water-heater",
      title: "Solar Water Heaters",
      description: "Eco-friendly solar water heating systems",
      image: solarWaterHeater,
      icon: <Zap className="h-6 w-6" />,
      brands: ["Inter Solar", "Sun Stellar"],
      products: [
        { name: "Inter Solar 100L", capacity: "100 Liters", rating: "Residential", price: "₹25,000" },
        { name: "Inter Solar 200L", capacity: "200 Liters", rating: "Family", price: "₹35,000" },
        { name: "Inter Solar 300L", capacity: "300 Liters", rating: "Commercial", price: "₹45,000" }
      ]
    },
    {
      id: "ventilation-hrv",
      title: "Ventilation Fans & HRV Systems",
      description: "Advanced ventilation and heat recovery solutions",
      image: ventilationHrv,
      icon: <Wind className="h-6 w-6" />,
      brands: ["Daikin", "Astberg"],
      products: [
        { name: "Daikin Heat Recovery Ventilator", capacity: "200 CFM", rating: "Energy Star", price: "₹45,000" },
        { name: "Astberg Exhaust Fan", capacity: "150 CFM", rating: "Commercial", price: "₹15,000" },
        { name: "Daikin Fresh Air System", capacity: "300 CFM", rating: "HEPA Filter", price: "₹65,000" }
      ]
    },
    {
      id: "air-purifiers",
      title: "Air & Water Purifiers",
      description: "Advanced purification systems for clean air and water",
      image: airPurifier,
      icon: <Wind className="h-6 w-6" />,
      brands: ["Daikin", "Carrier", "Blue Star"],
      products: [
        { name: "Daikin Air Purifier", capacity: "HEPA Filter", rating: "5 Star", price: "₹18,000" },
        { name: "Carrier AquaEdge", capacity: "RO+UV", rating: "4 Star", price: "₹15,000" },
        { name: "Blue Star Air Cleaner", capacity: "UV-C Tech", rating: "4 Star", price: "₹12,000" }
      ]
    },
    {
      id: "deep-freezers",
      title: "Deep Freezers & Commercial Refrigeration",
      description: "Commercial deep freezers and refrigeration solutions by Elanpro",
      image: deepFreezer,
      icon: <Thermometer className="h-6 w-6" />,
      brands: ["Elanpro"],
      products: [
        { name: "Elanpro Glass Door Freezer", capacity: "400L", rating: "Commercial", price: "₹45,000" },
        { name: "Elanpro Chest Freezer", capacity: "300L", rating: "Heavy Duty", price: "₹38,000" },
        { name: "Elanpro Display Freezer", capacity: "500L", rating: "Display", price: "₹55,000" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Air Conditioner & HVAC Products in Bareilly | Split AC, VRV, AHU Systems | Best Prices</title>
        <meta name="description" content="Browse all HVAC products in Bareilly, UP. Split ACs, VRV systems, chillers, AHU, water coolers, air purifiers. Best prices on Daikin, Carrier, Mitsubishi brands. Expert installation & service." />
        <meta name="keywords" content="AC products Bareilly, HVAC systems UP, air conditioner catalog Bareilly, split AC, VRV system, chiller, AHU, commercial HVAC, residential cooling solutions" />
        <meta property="og:title" content="Complete HVAC Product Catalog | Air Conditioners & Systems in Bareilly" />
        <meta property="og:description" content="Explore our complete range of HVAC products in Bareilly. From residential split ACs to commercial VRV systems, find the perfect cooling solution." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/src/assets/products-hero-bg.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Complete HVAC Product Catalog | Air Conditioners & Systems in Bareilly" />
        <meta name="twitter:description" content="Explore our complete range of HVAC products in Bareilly. From residential split ACs to commercial VRV systems, find the perfect cooling solution." />
        <link rel="canonical" href="https://kdenterprisesbareilly.com/products" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "HVAC Products & Air Conditioning Systems",
            "description": "Complete catalog of air conditioning and HVAC products available in Bareilly, Uttar Pradesh",
            "url": "https://kdenterprisesbareilly.com/products",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Khandelwal Distributors",
              "address": "G-35, MCI Plaza, Civil Lines, Bareilly, Uttar Pradesh, India",
              "telephone": "+919429693410",
              "priceRange": "$$"
            },
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": productCategories.length,
              "itemListElement": productCategories.map((category, index) => ({
                "@type": "Product",
                "position": index + 1,
                "name": category.title,
                "description": category.description,
                "category": "HVAC Equipment"
              }))
            }
          })}
        </script>
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section
          className="relative bg-gradient-to-r from-primary/90 to-secondary/90 py-16 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${productsHeroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/" className="text-white hover:text-accent-warm transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Our Products
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-2xl">
              Explore our comprehensive range of HVAC solutions, air conditioners,
              water systems, and air purification products from leading brands.
            </p>
            <div className="mt-8">
              <Button variant="cta" size="lg" onClick={() => window.open('tel:+919429693410', '_self')}>
                <Phone className="h-5 w-5" />
                Get Free Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productCategories.map((category) => (
                <Link key={category.id} to={`/products/${category.id === 'water-solutions' ? 'water-cooler' : category.id === 'air-purifiers' ? 'air-purifier' : category.id}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                    <div className="relative overflow-hidden">
                      <OptimizedImage
                        src={category.image}
                        alt={category.title}
                        className="w-full h-48 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-2 rounded-lg">
                        {category.icon}
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-primary">
                        {category.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {category.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Brands */}
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Available Brands:</h4>
                        <div className="flex flex-wrap gap-1">
                          {category.brands.map((brand) => (
                            <Badge key={brand} variant="secondary" className="text-xs">
                              {brand}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Sample Products */}
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Featured Products:</h4>
                        <div className="space-y-2">
                          {category.products.slice(0, 2).map((product, index) => (
                            <div key={index} className="bg-card border rounded-lg p-3">
                              <div className="flex justify-between items-start mb-1">
                                <h5 className="font-medium text-sm text-primary">
                                  {product.name}
                                </h5>
                                <div className="flex items-center gap-1">
                                  <Star className="h-3 w-3 fill-accent-warm text-accent-warm" />
                                  <span className="text-xs">{product.rating}</span>
                                </div>
                              </div>
                              <div className="flex justify-between items-center text-xs text-muted-foreground">
                                <span>{product.capacity}</span>
                                <span className="font-semibold text-primary">{product.price}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button variant="outline" className="w-full mt-4" onClick={() => window.open('tel:+919429693410', '_self')}>
                        <Phone className="h-4 w-4" />
                        Get Quote
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Commercial HVAC Section */}
        <section className="py-16 bg-muted/30" data-section="commercial">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Commercial HVAC Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Specialized HVAC systems for commercial spaces including gyms, salons,
                hospitals, schools, hotels, and more.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "VRV Systems",
                  brand: "Daikin Exclusive",
                  description: "Variable Refrigerant Volume systems for maximum efficiency",
                  image: vrvSystem,
                  products: ["Multi-zone control", "Energy recovery", "Heat pump technology"],
                  link: "/products/vrv-system"
                },
                {
                  title: "Chillers",
                  brand: "Multi-Brand",
                  description: "Industrial cooling solutions for large facilities",
                  image: chillerSystem,
                  products: ["Water-cooled chillers", "Air-cooled systems", "Modular designs"],
                  link: "/products/chiller-system"
                },
                {
                  title: "Heat Pumps",
                  brand: "Daikin & Carrier",
                  description: "Energy-efficient heating and cooling systems",
                  image: heatPump,
                  products: ["Inverter technology", "All-season comfort", "Eco-friendly refrigerant"],
                  link: "/products/heat-pump"
                },
                {
                  title: "Ductable ACs",
                  brand: "All Major Brands",
                  description: "Central air conditioning with concealed installation",
                  image: ductableAc,
                  products: ["Concealed design", "Uniform cooling", "Centralized control"],
                  link: "/products/ductable-ac"
                },
                {
                  title: "Cold Rooms & Storage",
                  brand: "Daikin, Carrier, Blue Star",
                  description: "Commercial refrigeration and cold storage solutions",
                  image: coldRoom,
                  products: ["Walk-in freezers", "Temperature control", "Food grade materials"],
                  link: "/products/cold-room"
                },
                {
                  title: "Air Handling Units",
                  brand: "Daikin Exclusive",
                  description: "AHU systems for large commercial applications",
                  image: ahuSystem,
                  products: ["High CFM capacity", "Energy recovery", "Modular construction"],
                  link: "/products/ahu-system"
                }
              ].map((item, index) => (
                <Link key={index} to={item.link}>
                  <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                    <div className="relative overflow-hidden">
                      <OptimizedImage
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-2 rounded-lg">
                        <Wind className="h-5 w-5" />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">{item.title}</CardTitle>
                      <Badge variant="outline" className="mx-auto">{item.brand}</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                      <div className="space-y-2 mb-4">
                        {item.products.map((product, pIndex) => (
                          <div key={pIndex} className="flex items-center text-xs text-primary">
                            <div className="w-2 h-2 bg-accent-warm rounded-full mr-2"></div>
                            {product}
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="w-full" onClick={() => window.open('tel:+919429693410', '_self')}>
                        <Phone className="h-4 w-4" />
                        Get Quote
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* End of Season Sale Section */}
        <EndOfSeasonSale />

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Perfect HVAC Solution?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get expert consultation and competitive pricing on all products
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" onClick={() => window.open('tel:+919429693410', '_self')}>
                <Phone className="h-5 w-5" />
                Call for Free Site Visit
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary" onClick={() => window.open('tel:+919429693410', '_self')}>
                Request Quote
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;