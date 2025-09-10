import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Wrench, Settings, MapPin, Clock, Shield, Star } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Expert Installation",
    description: "Professional AC installation by certified technicians with proper commissioning.",
    features: ["Proper sizing calculation", "Quality copper piping", "Gas charging & testing"]
  },
  {
    icon: Wrench,
    title: "Maintenance & Repair",
    description: "Regular servicing, repairs, and AMC contracts to keep your ACs running efficiently.",
    features: ["Deep cleaning service", "Gas refilling", "Spare parts replacement"]
  },
  {
    icon: MapPin,
    title: "Free Site Visit",
    description: "Complimentary site survey and consultation for all residential and commercial projects.",
    features: ["Load calculation", "System design", "Cost estimation"]
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description: "Round-the-clock support for critical commercial installations and urgent repairs.",
    features: ["Emergency hotline", "Same-day service", "Priority response"]
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Professional <span className="text-primary">HVAC Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From installation to maintenance, our expert team ensures your comfort 
            with reliable, efficient air conditioning solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 h-full">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 text-sm">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Star className="h-3 w-3 text-accent-warm fill-current" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-card)]">
          <h3 className="text-2xl font-bold text-center mb-8">Why Choose Khandelwal Distributors?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Authorized Dealer</h4>
              <p className="text-sm text-muted-foreground">
                Official partnerships with leading brands ensure genuine products and valid warranties.
              </p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-accent-warm mx-auto mb-4 fill-current" />
              <h4 className="font-semibold mb-2">25+ Years Experience</h4>
              <p className="text-sm text-muted-foreground">
                Extensive experience in residential and commercial HVAC installations.
              </p>
            </div>
            <div className="text-center">
              <Settings className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">End-to-End Service</h4>
              <p className="text-sm text-muted-foreground">
                From consultation to installation, maintenance, and emergency support.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="cta" 
            size="lg" 
            className="text-lg px-8"
            onClick={() => window.open('tel:+919429693410', '_self')}
          >
            <Phone className="h-5 w-5" />
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;