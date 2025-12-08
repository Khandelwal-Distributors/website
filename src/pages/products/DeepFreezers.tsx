import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeVideos from "@/components/YouTubeVideos";
import { Phone, ArrowLeft, Thermometer, Snowflake, Shield, Zap, Building, Hotel, Factory, Hospital, UtensilsCrossed, Coffee, IceCream, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import deepFreezer from "@/assets/deep-freezer.jpg";
import visiCoolerImg from "@/assets/equipment/visi-cooler.jpg";
import chestFreezerImg from "@/assets/equipment/chest-freezer.jpg";
import underCounterImg from "@/assets/equipment/under-counter-freezer.jpg";
import confectioneryImg from "@/assets/equipment/confectionery-showcase.jpg";
import coffeeMachineImg from "@/assets/equipment/coffee-machine.jpg";
import softyMachineImg from "@/assets/equipment/softy-machine.jpg";
import prepTableImg from "@/assets/equipment/prep-table.jpg";
import dishwasherImg from "@/assets/equipment/dishwasher.jpg";
import barCoolerImg from "@/assets/equipment/bar-cooler.jpg";

const DeepFreezers = () => {
  const brands = ["Elanpro", "Trufrost", "Rockwell"];

  const equipmentCategories = [
    {
      title: "Visi Coolers & Freezers",
      description: "Glass door display units for maximum product visibility",
      image: visiCoolerImg,
      products: [
        { name: "Single Door Visi Cooler", capacity: "200-400L", price: "₹25,000 - ₹45,000" },
        { name: "Double Door Visi Cooler", capacity: "500-800L", price: "₹55,000 - ₹85,000" },
        { name: "Triple Door Visi Cooler", capacity: "1000-1500L", price: "₹95,000 - ₹1,50,000" },
        { name: "Single Door Visi Freezer", capacity: "200-400L", price: "₹35,000 - ₹55,000" },
        { name: "Double Door Visi Freezer", capacity: "500-800L", price: "₹65,000 - ₹1,00,000" },
        { name: "Triple Door Visi Freezer", capacity: "1000-1500L", price: "₹1,10,000 - ₹1,80,000" },
      ],
      features: ["LED interior lighting", "Digital temperature control", "Adjustable shelves", "Energy efficient compressor"]
    },
    {
      title: "Chest Freezers",
      description: "High-capacity horizontal freezers for bulk storage",
      image: chestFreezerImg,
      products: [
        { name: "Small Chest Freezer", capacity: "100-200L", price: "₹18,000 - ₹28,000" },
        { name: "Medium Chest Freezer", capacity: "300-400L", price: "₹32,000 - ₹45,000" },
        { name: "Large Chest Freezer", capacity: "500-700L", price: "₹55,000 - ₹75,000" },
        { name: "Commercial Chest Freezer", capacity: "800-1000L", price: "₹85,000 - ₹1,20,000" },
      ],
      features: ["Thick insulation", "Lock & key", "Removable baskets", "Manual/Auto defrost"]
    },
    {
      title: "Under Counter Freezers & Refrigerators",
      description: "Space-saving units that fit under kitchen counters",
      image: underCounterImg,
      products: [
        { name: "Under Counter Refrigerator", capacity: "100-150L", price: "₹22,000 - ₹35,000" },
        { name: "Under Counter Freezer", capacity: "100-150L", price: "₹28,000 - ₹42,000" },
        { name: "Under Counter Combo", capacity: "200L", price: "₹45,000 - ₹65,000" },
      ],
      features: ["Stainless steel construction", "Compact design", "Reversible door", "Low noise operation"]
    },
    {
      title: "Confectionery Display Showcases",
      description: "Elegant display cases for bakeries and sweet shops",
      image: confectioneryImg,
      products: [
        { name: "Curved Glass Display", capacity: "3-4 ft", price: "₹45,000 - ₹70,000" },
        { name: "Straight Glass Display", capacity: "4-5 ft", price: "₹55,000 - ₹85,000" },
        { name: "L-Shape Corner Display", capacity: "Custom", price: "₹75,000 - ₹1,20,000" },
        { name: "Hot & Cold Display Combo", capacity: "5-6 ft", price: "₹85,000 - ₹1,50,000" },
      ],
      features: ["Illuminated display", "Humidity control", "Sliding rear doors", "Marble base option"]
    },
    {
      title: "Coffee Machines",
      description: "Professional espresso and coffee brewing equipment",
      image: coffeeMachineImg,
      products: [
        { name: "Semi-Automatic Espresso", capacity: "2 Group", price: "₹1,20,000 - ₹2,00,000" },
        { name: "Fully Automatic Coffee", capacity: "50+ cups/hr", price: "₹2,50,000 - ₹4,50,000" },
        { name: "Bean to Cup Machine", capacity: "100+ cups/day", price: "₹1,80,000 - ₹3,50,000" },
        { name: "Filter Coffee Brewer", capacity: "5L capacity", price: "₹25,000 - ₹45,000" },
      ],
      features: ["Commercial grade", "Steam wand", "Programmable settings", "Easy maintenance"]
    },
    {
      title: "Softy & Ice Cream Machines",
      description: "Soft serve and ice cream making equipment",
      image: softyMachineImg,
      products: [
        { name: "Single Flavor Softy", capacity: "15-18 L/hr", price: "₹85,000 - ₹1,20,000" },
        { name: "Twin Flavor Softy", capacity: "30-36 L/hr", price: "₹1,40,000 - ₹2,00,000" },
        { name: "Triple Flavor Softy", capacity: "45-54 L/hr", price: "₹1,80,000 - ₹2,80,000" },
        { name: "Batch Freezer", capacity: "5-10 L/batch", price: "₹2,50,000 - ₹4,00,000" },
      ],
      features: ["Air-cooled/Water-cooled", "Digital display", "Pre-cooling function", "Night mode"]
    },
    {
      title: "Cooled Prep Tables",
      description: "Refrigerated work tables for food preparation",
      image: prepTableImg,
      products: [
        { name: "2 Door Prep Table", capacity: "300L", price: "₹65,000 - ₹95,000" },
        { name: "3 Door Prep Table", capacity: "450L", price: "₹85,000 - ₹1,25,000" },
        { name: "Pizza Prep Table", capacity: "400L + Topping Rail", price: "₹95,000 - ₹1,50,000" },
        { name: "Salad Bar Prep Table", capacity: "500L", price: "₹1,00,000 - ₹1,60,000" },
      ],
      features: ["Stainless steel top", "GN pan compatible", "Adjustable shelves", "Self-closing doors"]
    },
    {
      title: "Professional Dishwashers",
      description: "Commercial glass and dishwashing machines",
      image: dishwasherImg,
      products: [
        { name: "Undercounter Glasswasher", capacity: "20 racks/hr", price: "₹75,000 - ₹1,20,000" },
        { name: "Hood Type Dishwasher", capacity: "40-60 racks/hr", price: "₹1,50,000 - ₹2,50,000" },
        { name: "Conveyor Dishwasher", capacity: "100+ racks/hr", price: "₹4,00,000 - ₹8,00,000" },
        { name: "Pot Washer", capacity: "Large utensils", price: "₹2,00,000 - ₹3,50,000" },
      ],
      features: ["Rapid cycle times", "Built-in water softener", "Heat recovery", "Low water consumption"]
    },
    {
      title: "Bar Refrigeration Equipment",
      description: "Specialized cooling solutions for bars and pubs",
      image: barCoolerImg,
      products: [
        { name: "Back Bar Cooler", capacity: "200-400L", price: "₹45,000 - ₹80,000" },
        { name: "Beer Keg Cooler", capacity: "2-4 kegs", price: "₹65,000 - ₹1,10,000" },
        { name: "Wine Chiller", capacity: "50-100 bottles", price: "₹75,000 - ₹1,50,000" },
        { name: "Ice Cube Machine", capacity: "25-100 kg/day", price: "₹35,000 - ₹1,20,000" },
        { name: "Shot Chiller", capacity: "6-12 bottles", price: "₹25,000 - ₹45,000" },
      ],
      features: ["Glass door display", "Adjustable temperature", "LED lighting", "Quiet operation"]
    }
  ];

  const benefits = [
    { icon: <Thermometer className="h-6 w-6" />, title: "Precise Temperature", description: "Consistent temperature maintenance for food safety" },
    { icon: <Snowflake className="h-6 w-6" />, title: "Fast Cooling", description: "Quick cooling technology preserves food quality" },
    { icon: <Shield className="h-6 w-6" />, title: "Food Safety", description: "Maintains food safety standards for commercial use" },
    { icon: <Zap className="h-6 w-6" />, title: "Energy Efficient", description: "Low power consumption with high efficiency compressors" }
  ];

  const applications = [
    { name: "Restaurants & Hotels", icon: <Hotel className="h-6 w-6" /> },
    { name: "Cafes & Coffee Shops", icon: <Coffee className="h-6 w-6" /> },
    { name: "Ice Cream Parlors", icon: <IceCream className="h-6 w-6" /> },
    { name: "Bars & Pubs", icon: <UtensilsCrossed className="h-6 w-6" /> },
    { name: "Bakeries & Confectionery", icon: <Building className="h-6 w-6" /> },
    { name: "Supermarkets & Retail", icon: <Building className="h-6 w-6" /> },
    { name: "Hospitals & Canteens", icon: <Hospital className="h-6 w-6" /> },
    { name: "Food Processing Units", icon: <Factory className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>Kitchen & Restaurant Equipment in Bareilly | Visi Coolers, Deep Freezers, Coffee Machines | Elanpro, Trufrost, Rockwell</title>
        <meta name="description" content="Buy commercial kitchen & restaurant equipment in Bareilly. Visi coolers, deep freezers, coffee machines, softy machines, dishwashers, bar refrigeration from Elanpro, Trufrost, Rockwell. Professional installation & service." />
        <meta name="keywords" content="visi cooler Bareilly, glass door freezer, coffee machine Bareilly, softy machine, commercial dishwasher, under counter freezer, prep table, bar refrigeration, Elanpro, Trufrost, Rockwell, restaurant equipment Bareilly" />
        <meta property="og:title" content="Kitchen & Restaurant Equipment Dealers in Bareilly | Commercial Refrigeration Solutions" />
        <meta property="og:description" content="Premium kitchen & restaurant equipment - visi coolers, freezers, coffee machines, dishwashers from Elanpro, Trufrost, Rockwell in Bareilly." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="/src/assets/deep-freezer.jpg" />
        <link rel="canonical" href="https://www.khandelwaldistributors.com/products/deep-freezers" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Kitchen & Restaurant Equipment",
            "category": "Commercial Kitchen Equipment",
            "description": "Commercial kitchen and restaurant equipment including visi coolers, freezers, coffee machines, dishwashers in Bareilly",
            "brand": brands,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.6",
              "reviewCount": "2150"
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "18000",
              "highPrice": "800000",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            },
            "provider": {
              "@type": "LocalBusiness",
              "name": "Khandelwal Distributors",
              "address": "G-35, MCI Plaza, Civil Lines, Bareilly, Uttar Pradesh, India",
              "telephone": "+919429693410"
            }
          })}
        </script>
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary/90 to-secondary/90 py-10 md:py-16" style={{ backgroundImage: `url(${chestFreezerImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-start gap-3 mb-4 md:mb-6">
              <Link to="/products" className="text-white hover:text-accent-warm transition-colors mt-1">
                <ArrowLeft className="h-5 w-5 md:h-6 md:w-6" />
              </Link>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Kitchen & Restaurant Equipment in Bareilly
              </h1>
            </div>
            <p className="text-base md:text-xl text-white/90 max-w-4xl mb-4 md:mb-6">
              Complete range of commercial kitchen and restaurant equipment from <strong>Elanpro, Trufrost & Rockwell</strong>. 
              Visi coolers, deep freezers, coffee machines, softy machines, dishwashers, bar refrigeration and more.
            </p>
            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
              {brands.map((brand) => (
                <Badge key={brand} variant="secondary" className="text-xs md:text-sm px-3 py-1">
                  {brand}
                </Badge>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button variant="cta" size="default" className="w-full sm:w-auto" onClick={() => window.open('tel:+919084417884', '_self')}>
                <Phone className="h-4 w-4 md:h-5 md:w-5" />
                Get Best Price Quote
              </Button>
              <Button variant="outline" size="default" className="w-full sm:w-auto bg-green-600 text-white border-green-600 hover:bg-green-700" onClick={() => window.open('https://wa.me/919084417884?text=Hello, I need information about Kitchen & Restaurant Equipment in Bareilly', '_blank')}>
                <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
                WhatsApp
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2 px-3 pt-4 md:px-6">
                    <div className="mx-auto bg-primary/10 text-primary p-2 md:p-3 rounded-full w-fit">
                      <div className="h-5 w-5 md:h-6 md:w-6">{benefit.icon}</div>
                    </div>
                    <CardTitle className="text-sm md:text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-3 pb-4 md:px-6">
                    <p className="text-muted-foreground text-xs md:text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment Categories */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 md:mb-4">
                Our Product Range
              </h2>
              <p className="text-base md:text-xl text-muted-foreground">
                Complete kitchen & restaurant equipment solutions from trusted brands
              </p>
            </div>

            <div className="space-y-10 md:space-y-16">
              {equipmentCategories.map((category, index) => (
                <div key={index} className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
                  {/* Image Section */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative group overflow-hidden rounded-xl md:rounded-2xl shadow-lg">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">{category.title}</h3>
                        <p className="text-sm md:text-base text-white/90 line-clamp-2">{category.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                      {category.features.map((feature, fIndex) => (
                        <Badge key={fIndex} variant="secondary" className="text-xs md:text-sm">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2 md:gap-3 mb-4 md:mb-6">
                      {category.products.map((product, pIndex) => (
                        <div key={pIndex} className="bg-card border rounded-lg md:rounded-xl p-3 md:p-4 hover:shadow-lg hover:border-primary/30 transition-all">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                            <h4 className="font-semibold text-foreground text-sm md:text-base">{product.name}</h4>
                            <span className="text-xs md:text-sm font-bold text-primary">{product.price}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{product.capacity}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button size="default" className="w-full" onClick={() => window.open('tel:+919084417884', '_self')}>
                      <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                      <span className="text-sm md:text-base">Get Quote for {category.title}</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-center text-primary mb-6 md:mb-8">Ideal For</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {applications.map((app, index) => (
                <div key={index} className="bg-card border rounded-lg p-3 md:p-4 text-center hover:shadow-md transition-shadow">
                  <div className="text-primary mx-auto mb-1 md:mb-2 flex justify-center">
                    <div className="h-5 w-5 md:h-6 md:w-6">{app.icon}</div>
                  </div>
                  <span className="font-medium text-xs md:text-sm">{app.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-center text-primary mb-6 md:mb-8">Authorized Dealer For</h2>
            <div className="grid grid-cols-3 gap-3 md:gap-8 max-w-2xl mx-auto">
              {brands.map((brand) => (
                <div key={brand} className="bg-card border rounded-lg md:rounded-xl p-3 md:p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="text-sm md:text-xl font-bold text-primary">{brand}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">Authorized Dealer</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-xl md:rounded-2xl p-5 md:p-8 text-white text-center">
              <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">
                Professional Installation & Service in Bareilly
              </h2>
              <p className="text-sm md:text-xl mb-5 md:mb-8 max-w-3xl mx-auto opacity-90">
                Authorized dealer for Elanpro, Trufrost & Rockwell with complete kitchen equipment solutions.
                Professional installation, AMC, and repair services across Bareilly & nearby areas.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                <Button variant="secondary" size="default" className="w-full sm:w-auto" onClick={() => window.open('tel:+919084417884', '_self')}>
                  <Phone className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="text-sm md:text-base">Call: +91-90844-17884</span>
                </Button>
                <Button variant="outline" size="default" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/10" onClick={() => window.open('https://wa.me/919084417884?text=Hello, I need information about Kitchen Equipment', '_blank')}>
                  <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="text-sm md:text-base">WhatsApp Us</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <YouTubeVideos
          category="deep-freezers"
          title="Product Videos"
          description="Watch detailed reviews and demonstrations of commercial kitchen equipment."
        />
      </main>

      <Footer />
    </div>
  );
};

export default DeepFreezers;