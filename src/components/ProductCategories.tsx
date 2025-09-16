import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Home, Building, Droplets, Wind, Hotel, Cross, GraduationCap, Dumbbell, Scissors, BriefcaseBusiness, ShoppingBag, Factory } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import acCollection from "@/assets/ac-collection.jpg";
import commercialHvac from "@/assets/commercial-hvac.jpg";


const ProductCategories = () => {
  const navigate = useNavigate();

  const handleCall = () => {
    window.open('tel:+919429693410', '_self');
  };

  const handleResidentialNavigation = () => {
    navigate('/products');
  };

  const handleCommercialNavigation = () => {
    navigate('/products');
    // Scroll to commercial section after navigation
    setTimeout(() => {
      const commercialSection = document.querySelector('[data-section="commercial"]');
      if (commercialSection) {
        commercialSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4">
            Complete <span className="text-primary">HVAC Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From residential comfort to large commercial projects, we've got you covered.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Residential Products */}
          <Card 
            className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 animate-scale-in cursor-pointer"
            onClick={handleResidentialNavigation}
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <img 
                src={acCollection} 
                alt="Residential Air Conditioning Units" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 animate-bounce-gentle">
                  <Home className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl">Residential Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <Wind className="h-4 w-4 text-primary" />
                  <span>Split ACs (1-5 Ton)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Wind className="h-4 w-4 text-primary" />
                  <span>Window ACs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Wind className="h-4 w-4 text-primary" />
                  <span>Portable ACs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Droplets className="h-4 w-4 text-primary" />
                  <span>Water Coolers & Dispensers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Wind className="h-4 w-4 text-primary" />
                  <span>Air & Water Purifiers</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button 
                  variant="cta" 
                  className="flex-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCall();
                  }}
                >
                  <Phone className="h-4 w-4" />
                  Get Home Quote
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 bg-transparent border-border text-foreground hover:bg-muted"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleResidentialNavigation();
                  }}
                >
                  View Products
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Commercial Products */}
          <Card 
            className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 animate-scale-in cursor-pointer" 
            style={{ animationDelay: '0.2s' }}
            onClick={handleCommercialNavigation}
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <img 
                src={commercialHvac} 
                alt="Commercial HVAC Systems" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>
                  <Building className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl">Commercial & VRV Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-primary" />
                  <span>Daikin VRV Systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <Wind className="h-4 w-4 text-primary" />
                  <span>Cassette & Ductable ACs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Wind className="h-4 w-4 text-primary" />
                  <span>Chillers & Heat Pumps</span>
                </li>
                <li className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-primary" />
                  <span>Floor Standing ACs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Wind className="h-4 w-4 text-primary" />
                  <span>Ventilation Systems</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button 
                  variant="cta" 
                  className="flex-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCall();
                  }}
                >
                  <Phone className="h-4 w-4" />
                  Commercial Consultation
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 bg-transparent border-border text-foreground hover:bg-muted"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCommercialNavigation();
                  }}
                >
                  View Products
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Commercial Applications */}
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold text-center mb-8">
            Commercial HVAC Applications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Hotels & Restaurants", icon: Hotel },
              { name: "Hospitals & Clinics", icon: Cross },
              { name: "Schools & Colleges", icon: GraduationCap },
              { name: "Gyms & Fitness Centers", icon: Dumbbell },
              { name: "Salons & Spas", icon: Scissors },
              { name: "Offices & IT Parks", icon: BriefcaseBusiness },
              { name: "Retail Stores", icon: ShoppingBag },
              { name: "Industrial Buildings", icon: Factory }
            ].map((application, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: `${0.1 * index}s` }}>
                <application.icon className="h-6 w-6 text-primary mx-auto mb-2 animate-bounce-gentle" style={{ animationDelay: `${0.2 + 0.1 * index}s` }} />
                <span className="text-sm font-medium">{application.name}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <Button asChild variant="cta" size="lg" className="hover:scale-105 transition-transform duration-300">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;