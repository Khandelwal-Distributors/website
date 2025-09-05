import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";

// Import brand logos
import daikinLogo from "@/assets/brands/daikin-logo.jpg";
import mitsubishiLogo from "@/assets/brands/mitsubishi-logo.jpg";
import carrierLogo from "@/assets/brands/carrier-logo.jpg";
import amstradLogo from "@/assets/brands/amstrad-logo.jpg";
import mideaLogo from "@/assets/brands/midea-logo.jpg";
import godrejLogo from "@/assets/brands/godrej-logo.jpg";
import cruiseLogo from "@/assets/brands/cruise-logo.jpg";
import voltasLogo from "@/assets/brands/voltas-logo.jpg";

const brands = [
  { name: "Daikin", specialty: "Premium VRV Systems", featured: true, logo: daikinLogo, link: "/brands/daikin" },
  { name: "Mitsubishi Heavy", specialty: "Heavy Duty Commercial", logo: mitsubishiLogo, link: "/brands/mitsubishi-heavy" },
  { name: "Carrier", specialty: "Reliable Cooling", logo: carrierLogo, link: "/brands/carrier" },
  { name: "Voltas", specialty: "India's No.1 AC", logo: voltasLogo, link: "/brands/voltas" },
  { name: "Amstrad", specialty: "Quality + Competitive Price", logo: amstradLogo, link: "/brands/amstrad" },
  { name: "Midea", specialty: "Economical & Smart", logo: mideaLogo, link: "/brands/midea" },
  { name: "Godrej", specialty: "India's Most Economical", logo: godrejLogo, link: "/brands/godrej" },
  { name: "Cruise", specialty: "Portable & Heavy Duty", logo: cruiseLogo, link: "/brands/cruise" },
];

const BrandShowcase = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4">
            Authorized Dealer for <span className="text-primary">Leading AC Brands</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are proud partners with top air conditioning manufacturers, 
            offering genuine products with full warranty coverage.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <Link key={index} to={brand.link || "#"}>
              <Card 
                className={`group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer animate-scale-in ${
                  brand.featured ? 'ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-primary/10' : ''
                }`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardContent className="p-0 relative">
                  {brand.featured && (
                    <div className="absolute top-2 right-2 z-10">
                      <Award className="h-4 w-4 text-accent-warm animate-pulse-subtle" />
                    </div>
                  )}
                  <div className="h-20 flex items-center justify-center bg-white p-2">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <Button variant="cta" size="lg" className="hover:scale-105 transition-transform duration-300">
            <Phone className="h-4 w-4" />
            Get Brand-Specific Quote
          </Button>
          <Button variant="outline" size="lg" className="hover:scale-105 transition-transform duration-300" asChild>
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;