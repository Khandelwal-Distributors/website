import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Star, Zap, Shield, CreditCard, Home, Gift, Clock, Tag, CheckCircle, DollarSign } from "lucide-react";
import cleanSaleBanner from "@/assets/clean-sale-banner.jpg";
import auxLogo from "@/assets/brands/aux-logo.jpg";
import sharpLogo from "@/assets/brands/sharp-logo.jpg";
import panasonicLogo from "@/assets/brands/panasonic-logo.jpg";
import lloydLogo from "@/assets/brands/lloyd-logo.jpg";
import whiteWestinghouseLogo from "@/assets/brands/white-westinghouse-logo.jpg";

const EndOfSeasonSale = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Hero Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={cleanSaleBanner} 
          alt="End of Season Sale Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Header */}
        <div className="text-center text-white mb-16">
          <div className="inline-flex items-center gap-2 bg-accent-warm/20 backdrop-blur-sm border border-accent-warm/30 text-accent-warm rounded-full px-6 py-3 mb-6">
            <Clock className="h-5 w-5" />
            <span className="text-sm font-bold uppercase tracking-wider">Limited Time • Ends Soon</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            End of Season
            <br />
            <span className="text-accent-warm">AC MEGA SALE</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Premium air conditioners from leading brands at unbeatable prices.
            <br className="hidden md:block" />
            Professional installation and warranty included.
          </p>
          
          {/* Hero Price Banner */}
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-center">
              <div className="flex items-center gap-2 mb-2">
                <Tag className="h-5 w-5 text-accent-warm" />
                <span className="text-sm font-semibold text-white/80 uppercase tracking-wider">Starting From</span>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white">₹26,000</div>
              <div className="text-sm text-white/70">*Installation Included</div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          
          {/* Product Details Card */}
          <Card className="lg:col-span-4 bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-xl">
                <CreditCard className="h-6 w-6 text-primary" />
                Product Range & Specs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-primary/10 to-accent-warm/10 rounded-xl p-4 border border-primary/20">
                <h4 className="font-bold text-sm text-primary mb-3 uppercase tracking-wide">Premium Brands Available</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">AUX • Sharp • Panasonic • Lloyd • White Westinghouse</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/50 rounded-xl p-4 text-center border border-border/50">
                  <p className="font-bold text-sm text-primary mb-1">Capacity</p>
                  <p className="text-xs text-muted-foreground">1, 1.5, 2 Ton</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4 text-center border border-border/50">
                  <p className="font-bold text-sm text-primary mb-1">Star Rating</p>
                  <p className="text-xs text-muted-foreground">3, 4, 5 Star</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4 text-center border border-border/50">
                  <p className="font-bold text-sm text-primary mb-1">Technology</p>
                  <p className="text-xs text-muted-foreground">Inverter/Non-Inverter</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4 text-center border border-border/50">
                  <p className="font-bold text-sm text-primary mb-1">Function</p>
                  <p className="text-xs text-muted-foreground">Cooling/Heating</p>
                </div>
              </div>
              
              <Button variant="cta" size="lg" className="w-full" onClick={() => window.open('tel:+919429693410', '_self')}>
                <Phone className="h-5 w-5" />
                Get Instant Quote
              </Button>
            </CardContent>
          </Card>

          {/* Brand Showcase */}
          <Card className="lg:col-span-4 bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Star className="h-6 w-6 text-primary" />
                Featured Brands & Pricing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-background to-muted/30 border-2 border-primary/20 rounded-xl p-4 hover:border-primary/40 transition-all duration-300 group cursor-pointer">
                  <img 
                    src={auxLogo} 
                    alt="AUX Brand" 
                    className="w-full h-10 object-contain mb-3 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="text-center">
                    <p className="font-bold text-sm text-primary">AUX</p>
                    <p className="text-xs text-accent-warm font-semibold">From ₹30,000</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-background to-muted/30 border-2 border-primary/20 rounded-xl p-4 hover:border-primary/40 transition-all duration-300 group cursor-pointer">
                  <img 
                    src={sharpLogo} 
                    alt="Sharp Brand" 
                    className="w-full h-10 object-contain mb-3 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="text-center">
                    <p className="font-bold text-sm text-primary">Sharp</p>
                    <p className="text-xs text-accent-warm font-semibold">From ₹28,000</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-background to-muted/30 border-2 border-primary/20 rounded-xl p-4 hover:border-primary/40 transition-all duration-300 group cursor-pointer">
                  <img 
                    src={lloydLogo} 
                    alt="Lloyd Brand" 
                    className="w-full h-10 object-contain mb-3 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="text-center">
                    <p className="font-bold text-sm text-primary">Lloyd</p>
                    <p className="text-xs text-accent-warm font-semibold">From ₹31,000</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-background to-muted/30 border-2 border-primary/20 rounded-xl p-4 hover:border-primary/40 transition-all duration-300 group cursor-pointer">
                  <img 
                    src={panasonicLogo} 
                    alt="Panasonic Brand" 
                    className="w-full h-10 object-contain mb-3 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="text-center">
                    <p className="font-bold text-sm text-primary">Panasonic</p>
                    <p className="text-xs text-accent-warm font-semibold">From ₹35,500</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-background to-muted/30 border-2 border-primary/20 rounded-xl p-4 hover:border-primary/40 transition-all duration-300 group cursor-pointer">
                <img 
                  src={whiteWestinghouseLogo} 
                  alt="White Westinghouse Brand" 
                  className="w-full h-10 object-contain mb-3 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="text-center">
                  <p className="font-bold text-sm text-primary">White Westinghouse</p>
                  <p className="text-xs text-accent-warm font-semibold">From ₹35,000</p>
                </div>
              </div>
              
              <Button variant="cta" size="lg" className="w-full" onClick={() => window.open('tel:+919429693410', '_self')}>
                <Phone className="h-5 w-5" />
                Get Instant Quote
              </Button>
            </CardContent>
          </Card>

          {/* Benefits Card */}
          <Card className="lg:col-span-4 bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Gift className="h-6 w-6 text-primary" />
                Exclusive Sale Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 bg-gradient-to-r from-primary/5 to-accent-warm/5 rounded-xl p-4 border border-primary/10">
                <div className="bg-gradient-to-r from-primary to-accent-warm text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                  <DollarSign className="h-5 w-5" />
                </div>
                <span className="font-semibold text-primary">Up to 30% Off MRP</span>
              </div>
              
              <div className="flex items-center gap-3 bg-gradient-to-r from-primary/5 to-accent-warm/5 rounded-xl p-4 border border-primary/10">
                <div className="bg-gradient-to-r from-primary to-accent-warm text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                  <Zap className="h-5 w-5" />
                </div>
                <span className="font-semibold text-primary">Free Installation & Site Visit</span>
              </div>
              
              <div className="flex items-center gap-3 bg-gradient-to-r from-primary/5 to-accent-warm/5 rounded-xl p-4 border border-primary/10">
                <div className="bg-gradient-to-r from-primary to-accent-warm text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                  <Shield className="h-5 w-5" />
                </div>
                <span className="font-semibold text-primary">1 Year Service Warranty</span>
              </div>
              
              <div className="flex items-center gap-3 bg-gradient-to-r from-primary/5 to-accent-warm/5 rounded-xl p-4 border border-primary/10">
                <div className="bg-gradient-to-r from-primary to-accent-warm text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                  <CreditCard className="h-5 w-5" />
                </div>
                <span className="font-semibold text-primary">0% EMI Available</span>
              </div>
              
              <div className="flex items-center gap-3 bg-gradient-to-r from-primary/5 to-accent-warm/5 rounded-xl p-4 border border-primary/10">
                <div className="bg-gradient-to-r from-primary to-accent-warm text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm shadow-lg">⚡</div>
                <span className="font-semibold text-primary">Exchange Offers Available</span>
              </div>
              
              <div className="flex items-center gap-3 bg-gradient-to-r from-primary/5 to-accent-warm/5 rounded-xl p-4 border border-primary/10">
                <div className="bg-gradient-to-r from-primary to-accent-warm text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                  <Home className="h-5 w-5" />
                </div>
                <span className="font-semibold text-primary">ACs on Rent</span>
              </div>
              
              <Button variant="cta" size="lg" className="w-full mt-6" onClick={() => window.open('tel:+919429693410', '_self')}>
                <Phone className="h-5 w-5" />
                Get Instant Quote
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EndOfSeasonSale;