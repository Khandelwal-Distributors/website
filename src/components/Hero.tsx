import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, MapPin, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hvac-hero.jpg";
import NumberCounter from "@/components/NumberCounter";
import OptimizedImage from "@/components/OptimizedImage";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      <div className="absolute inset-0 animate-slide-in-right">
        <OptimizedImage 
          src={heroImage} 
          alt="Professional HVAC Installation" 
          className="w-full h-full"
          loading="eager"
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Professional HVAC Solutions & 
            <span className="text-accent-warm"> Air Conditioning </span>
            Services
          </h2>
          
          <p className="text-xl mb-8 text-white/90">
            Authorized dealer for Daikin, Mitsubishi Heavy, Carrier & more. 
            Expert installation, servicing & commercial HVAC projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button variant="cta" size="lg" className="text-lg px-8 hover:scale-105 transition-transform duration-300">
              <Phone className="h-5 w-5" />
              Call Now - Free Consultation
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300">
              <Link to="/products">View Products</Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="bg-[hsl(var(--shop-online))] text-white hover:bg-[hsl(var(--shop-online))]/90 hover:scale-105 transition-all duration-300">
              <Link to="/shop">
                <ShoppingCart className="h-5 w-5" />
                Shop Online
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 text-sm">
            <div className="flex items-center gap-2 hover:text-accent-warm transition-colors duration-300">
              <CheckCircle className="h-5 w-5 text-accent-warm" />
              <span>Free Site Visit & Consultation</span>
            </div>
            <div className="flex items-center gap-2 hover:text-accent-warm transition-colors duration-300">
              <CheckCircle className="h-5 w-5 text-accent-warm" />
              <span>Expert Installation Team</span>
            </div>
            <div className="flex items-center gap-2 hover:text-accent-warm transition-colors duration-300">
              <MapPin className="h-5 w-5 text-accent-warm" />
              <span>Local Service Area</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-warm mb-2">
                <NumberCounter end={50000} suffix="+" />
              </div>
              <p className="text-sm text-white/80 font-medium">AC Installations</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-warm mb-2">
                <NumberCounter end={500} suffix="+" />
              </div>
              <p className="text-sm text-white/80 font-medium">Projects</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-warm mb-2">
                <NumberCounter end={25} suffix="+" />
              </div>
              <p className="text-sm text-white/80 font-medium">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;