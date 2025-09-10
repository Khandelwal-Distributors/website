import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary to-primary-light text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started? <span className="text-accent-warm">Contact Us Today</span>
          </h2>
          <p className="text-xl text-white/90">
            Get your free consultation and quote within 24 hours
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center pb-2">
              <Phone className="h-8 w-8 text-accent-warm mx-auto mb-2" />
              <CardTitle className="text-lg">Call Now</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm mb-3">Immediate Response</p>
                <Button 
                  variant="cta" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open('tel:+919429693410', '_self')}
                >
                  <Phone className="h-4 w-4" />
                  +91 9429693410
                </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center pb-2">
              <MessageCircle className="h-8 w-8 text-accent-warm mx-auto mb-2" />
              <CardTitle className="text-lg">WhatsApp</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm mb-3">Quick Quotes</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full bg-white/10 border-white/30 hover:bg-white/20"
                onClick={() => window.open('https://wa.me/919084417884?text=Hello, I need a quick quote for HVAC services', '_blank')}
              >
                <MessageCircle className="h-4 w-4" />
                Chat Now
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center pb-2">
              <Mail className="h-8 w-8 text-accent-warm mx-auto mb-2" />
              <CardTitle className="text-lg">Email Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm mb-3">Detailed Queries</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full bg-white/10 border-white/30 hover:bg-white/20"
                onClick={() => window.open('mailto:info@yourcompany.com?subject=HVAC Services Inquiry', '_blank')}
              >
                <Mail className="h-4 w-4" />
                Send Email
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center pb-2">
              <MapPin className="h-8 w-8 text-accent-warm mx-auto mb-2" />
              <CardTitle className="text-lg">Visit Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm mb-3">Free Site Visit</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full bg-white/10 border-white/30 hover:bg-white/20"
                onClick={() => window.open('tel:+919429693410', '_self')}
              >
                <MapPin className="h-4 w-4" />
                Schedule Visit
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Business Hours & Emergency */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 flex items-center justify-center md:justify-start gap-2">
              <Clock className="h-5 w-5 text-accent-warm" />
              Business Hours
            </h3>
            <div className="space-y-2 text-white/90">
              <div className="flex justify-between md:justify-start md:gap-8">
                <span>Monday - Saturday:</span>
                <span>9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-8">
                <span>Sunday:</span>
                <span>10:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-8">
                <span>Emergency Service:</span>
                <span className="text-accent-warm">24/7 Available</span>
              </div>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
            <p className="text-white/90 mb-4">
              We provide HVAC services across the city and surrounding areas. 
              Free site visits within 25km radius.
            </p>
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => window.open('tel:+919429693410', '_self')}
            >
              <Phone className="h-4 w-4" />
              Call for Free Site Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;