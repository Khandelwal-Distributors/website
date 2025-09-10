import { Phone, Mail, MapPin, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg text-primary mb-4">Khandelwal Distributors</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Your trusted partner for all HVAC and air conditioning needs. 
              Authorized dealer for premium brands with expert installation and service.
            </p>
            <div className="flex items-center gap-1 text-sm">
              <Star className="h-4 w-4 text-accent-warm fill-current" />
              <span>25+ Years of Excellence</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Our Brands</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Daikin (VRV Systems)</li>
              <li>Mitsubishi Heavy</li>
              <li>Carrier</li>
              <li>Amstrad</li>
              <li>Midea</li>
              <li>Godrej</li>
              <li>Cruise</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>AC Installation</li>
              <li>HVAC Maintenance</li>
              <li>Commercial Projects</li>
              <li>Emergency Repairs</li>
              <li>Free Consultation</li>
              <li>AMC Contracts</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+919429693410" className="text-muted-foreground hover:text-primary">
                  +91 9429693410
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@khandelwaldistributors.com" className="text-muted-foreground hover:text-primary">
                  info@khandelwaldistributors.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span className="text-muted-foreground">
                  Commercial Complex,<br />
                  Business District, City
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Khandelwal Distributors. All rights reserved. | 
            <span className="text-primary"> Licensed HVAC Contractor</span> | 
            <span className="text-accent-warm"> Authorized Dealer</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;