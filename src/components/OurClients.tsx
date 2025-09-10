import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Factory, Home, ShoppingBag, Hotel, Hospital, MessageCircle, Calendar } from "lucide-react";

const clientTypes = [
  {
    icon: Building2,
    title: "Corporate Offices",
    description: "Central AC systems for office buildings and business complexes",
    count: "200+"
  },
  {
    icon: Factory,
    title: "Industrial Projects", 
    description: "Large-scale HVAC solutions for manufacturing facilities",
    count: "50+"
  },
  {
    icon: Home,
    title: "Residential",
    description: "Home AC installations and maintenance services",
    count: "10,000+"
  },
  {
    icon: ShoppingBag,
    title: "Retail Stores",
    description: "Commercial cooling solutions for malls and retail outlets",
    count: "150+"
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description: "Hotel and restaurant AC systems and maintenance",
    count: "80+"
  },
  {
    icon: Hospital,
    title: "Healthcare",
    description: "Specialized HVAC for hospitals and medical facilities",
    count: "25+"
  }
];

const OurClients = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4">
            Trusted by <span className="text-primary">10,000+ Clients</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From residential homes to large commercial projects, we've successfully 
            delivered HVAC solutions across diverse industries and sectors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientTypes.map((client, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <client.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-accent-warm mb-2">{client.count}</div>
                <h3 className="text-lg font-semibold mb-2">{client.title}</h3>
                <p className="text-sm text-muted-foreground">{client.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent-warm/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Join Our Satisfied Customers</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Experience the same quality service and professional installation that has made 
              us the preferred choice for HVAC solutions in the region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg"
                className="flex items-center gap-2 bg-green-600 text-white border-green-600 hover:bg-green-700 hover:border-green-700"
                onClick={() => window.open('https://wa.me/919084417884?text=Hello, I would like to know more about your HVAC services', '_blank')}
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="flex items-center gap-2"
                onClick={() => window.open('tel:+919429693410', '_self')}
              >
                <Calendar className="h-5 w-5" />
                Request Site Visit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;