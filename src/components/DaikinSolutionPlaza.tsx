import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, Wrench, Phone } from "lucide-react";
import daikinLogo from "@/assets/brands/daikin-logo.jpg";

const DaikinSolutionPlaza = () => {
  const benefits = [
    {
      icon: Award,
      title: "Authorized Dealer",
      description: "Official Daikin Solution Plaza with certified expertise"
    },
    {
      icon: Shield,
      title: "Genuine Products",
      description: "100% authentic Daikin products with full warranty"
    },
    {
      icon: Wrench,
      title: "Expert Installation",
      description: "Certified technicians for professional installation"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="bg-white p-4 rounded-2xl shadow-lg">
                <img 
                  src={daikinLogo} 
                  alt="Daikin logo"
                  className="h-12 w-auto"
                />
              </div>
              <div className="text-left">
                <h2 className="text-3xl font-bold">
                  Daikin <span className="text-primary">Solution Plaza</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Your trusted Daikin authorized partner
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <benefit.icon className="h-8 w-8 text-primary mx-auto" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              variant="cta" size="lg"
              onClick={() => window.open('tel:+919761659238', '_self')}
            >
              <Phone className="h-4 w-4" />
              Contact Daikin Expert
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaikinSolutionPlaza;