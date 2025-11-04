import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Calendar, Shield, CreditCard, CheckCircle, Star, Zap } from "lucide-react";

const rentalPlans = [
  {
    title: "Monthly Rental",
    price: "₹2,999",
    period: "/month",
    features: [
      "1.5 Ton Split AC",
      "Free Installation & Uninstallation",
      "Free Maintenance & Service",
      "24/7 Customer Support",
      "Minimum 3 months rental"
    ],
    popular: false
  },
  {
    title: "Seasonal Rental",
    price: "₹8,999",
    period: "/season (4 months)",
    features: [
      "1.5 Ton Split AC",
      "Free Installation & Uninstallation",
      "Free Maintenance & Service",
      "24/7 Customer Support",
      "Best Value for Summer"
    ],
    popular: true
  },
  {
    title: "Event Rental",
    price: "₹1,299",
    period: "/day",
    features: [
      "Portable AC Units",
      "Same Day Installation",
      "Event Setup Support",
      "24/7 Technical Support",
      "Minimum 3 days rental"
    ],
    popular: false
  }
];

const benefits = [
  {
    icon: CreditCard,
    title: "No Heavy Investment",
    description: "Avoid upfront costs and enjoy cooling comfort"
  },
  {
    icon: Zap,
    title: "Quick Installation",
    description: "Same day installation and setup service"
  },
  {
    icon: Shield,
    title: "All-Inclusive Service",
    description: "Maintenance, repairs, and support included"
  },
  {
    icon: Calendar,
    title: "Flexible Terms",
    description: "Monthly, seasonal, or event-based rentals"
  }
];

const RentAnAC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent-warm/10 text-accent-warm rounded-full px-6 py-2 mb-6">
            <Star className="h-4 w-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Flexible Solution</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Rent an <span className="text-primary">Air Conditioner</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Perfect for temporary needs, events, or trying before buying.
            Professional installation and maintenance included in all rental plans.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary mx-auto" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Rental Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {rentalPlans.map((plan, index) => (
            <Card
              key={index}
              className={`group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 relative ${plan.popular ? 'ring-2 ring-primary' : ''
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center">
                <CardTitle className="text-xl">{plan.title}</CardTitle>
                <div className="text-3xl font-bold text-primary">
                  {plan.price}
                  <span className="text-sm font-normal text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <Button
                    variant="cta"
                    className="w-full"
                    onClick={() => window.open('tel:+919429693410', '_self')}
                  >
                    <Phone className="h-4 w-4" />
                    Call Now
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-green-600 text-white border-green-600 hover:bg-green-700"
                    onClick={() => window.open('https://wa.me/919084417884?text=Hello, I am interested in renting an AC. Please share more details about the rental plans.', '_blank')}
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary/10 to-accent-warm/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Rental Solution?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We offer customized rental packages for offices, events, and temporary installations.
            Contact our experts for personalized pricing and solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="cta"
              size="lg"
              onClick={() => window.open('tel:+919429693410', '_self')}
            >
              <Phone className="h-5 w-5" />
              Call for Custom Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-green-600 text-white border-green-600 hover:bg-green-700"
              onClick={() => window.open('https://wa.me/919084417884?text=Hello, I need a custom rental solution for my requirements. Please share details.', '_blank')}
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentAnAC;