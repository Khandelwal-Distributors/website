import { Phone, Mail, MapPin, Star, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-5 gap-8">
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
            <div className="flex items-center gap-3 mt-4">
              <a 
                href="https://www.facebook.com/khandelwaldistributor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/kd.bly" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/khandelwal-distributors" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Our Brands</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/brands/daikin" className="text-muted-foreground hover:text-primary transition-colors">
                  Daikin (VRV Systems)
                </Link>
              </li>
              <li>
                <Link to="/brands/mitsubishi-heavy" className="text-muted-foreground hover:text-primary transition-colors">
                  Mitsubishi Heavy
                </Link>
              </li>
              <li>
                <Link to="/brands/carrier" className="text-muted-foreground hover:text-primary transition-colors">
                  Carrier
                </Link>
              </li>
              <li>
                <Link to="/brands/amstrad" className="text-muted-foreground hover:text-primary transition-colors">
                  Amstrad
                </Link>
              </li>
              <li>
                <Link to="/brands/midea" className="text-muted-foreground hover:text-primary transition-colors">
                  Midea
                </Link>
              </li>
              <li>
                <Link to="/brands/godrej" className="text-muted-foreground hover:text-primary transition-colors">
                  Godrej
                </Link>
              </li>
              <li>
                <Link to="/brands/cruise" className="text-muted-foreground hover:text-primary transition-colors">
                  Cruise
                </Link>
              </li>
              <li>
                <Link to="/brands/voltas" className="text-muted-foreground hover:text-primary transition-colors">
                  Voltas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Residential Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products/inverter-split-ac" className="text-muted-foreground hover:text-primary transition-colors">
                  Inverter Split AC
                </Link>
              </li>
              <li>
                <Link to="/products/non-inverter-split-ac" className="text-muted-foreground hover:text-primary transition-colors">
                  Non-Inverter Split AC
                </Link>
              </li>
              <li>
                <Link to="/products/window-ac" className="text-muted-foreground hover:text-primary transition-colors">
                  Window AC
                </Link>
              </li>
              <li>
                <Link to="/products/portable-ac" className="text-muted-foreground hover:text-primary transition-colors">
                  Portable AC
                </Link>
              </li>
              <li>
                <Link to="/products/water-cooler" className="text-muted-foreground hover:text-primary transition-colors">
                  Water Coolers
                </Link>
              </li>
              <li>
                <Link to="/products/air-purifier" className="text-muted-foreground hover:text-primary transition-colors">
                  Air Purifiers
                </Link>
              </li>
              <li>
                <Link to="/products/alkaline-ro" className="text-muted-foreground hover:text-primary transition-colors">
                  Alkaline RO Systems
                </Link>
              </li>
              <li>
                <Link to="/products/solar-water-heater" className="text-muted-foreground hover:text-primary transition-colors">
                  Solar Water Heaters
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Commercial Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products/vrv-system" className="text-muted-foreground hover:text-primary transition-colors">
                  VRV Systems
                </Link>
              </li>
              <li>
                <Link to="/products/cassette-ac" className="text-muted-foreground hover:text-primary transition-colors">
                  Cassette AC
                </Link>
              </li>
              <li>
                <Link to="/products/ductable-ac" className="text-muted-foreground hover:text-primary transition-colors">
                  Ductable AC
                </Link>
              </li>
              <li>
                <Link to="/products/floor-standing-ac" className="text-muted-foreground hover:text-primary transition-colors">
                  Floor Standing AC
                </Link>
              </li>
              <li>
                <Link to="/products/chiller-system" className="text-muted-foreground hover:text-primary transition-colors">
                  Chiller Systems
                </Link>
              </li>
              <li>
                <Link to="/products/ahu-system" className="text-muted-foreground hover:text-primary transition-colors">
                  AHU Systems
                </Link>
              </li>
              <li>
                <Link to="/products/heat-pump" className="text-muted-foreground hover:text-primary transition-colors">
                  Heat Pumps
                </Link>
              </li>
              <li>
                <Link to="/products/ventilation-hrv" className="text-muted-foreground hover:text-primary transition-colors">
                  Ventilation & HRV
                </Link>
              </li>
              <li>
                <Link to="/products/cold-room" className="text-muted-foreground hover:text-primary transition-colors">
                  Cold Rooms
                </Link>
              </li>
              <li>
                <Link to="/products/deep-freezers" className="text-muted-foreground hover:text-primary transition-colors">
                  Deep Freezers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+919429693410" className="text-muted-foreground hover:text-primary">
                  +91 9429693410
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <a href="mailto:info@khandelwaldistributors.com" className="text-muted-foreground hover:text-primary break-all">
                  admin@khandelwaldistributors.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  G-35, MCI Plaza, Mission Market, Civil Lines, Bareilly<br />
                  Bahadurganj Road, Sadar Bazar, Shahjahanpur
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold mb-2 text-sm">Quick Links</h5>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/refund-policy" className="text-muted-foreground hover:text-primary transition-colors">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Khandelwal Distributors. All rights reserved. |
            <span className="text-primary"> Licensed HVAC Contractor</span> |
            <span className="text-accent-warm"> Authorized Dealer</span> |
            <Link to="/privacy-policy" className="hover:text-primary transition-colors"> Privacy Policy</Link> |
            <Link to="/terms-and-conditions" className="hover:text-primary transition-colors"> Terms & Conditions</Link> |
            <Link to="/refund-policy" className="hover:text-primary transition-colors"> Refund Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;