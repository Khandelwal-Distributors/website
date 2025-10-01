import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star, ExternalLink, Building2 } from "lucide-react";

const StoreProfiles = () => {
  const profiles = [
    {
      platform: "Google Maps",
      icon: <MapPin className="h-6 w-6" />,
      rating: "4.8",
      reviews: "250+ Reviews",
      description: "Find our location and read customer reviews",
      color: "text-green-600",
      bgColor: "bg-green-50",
      link: "https://share.google/TwYFogNXb5wRwrRqr"
    },
    {
      platform: "Justdial",
      icon: <Building2 className="h-6 w-6" />,
      rating: "4.7",
      reviews: "180+ Reviews",
      description: "Verified business profile with customer feedback",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      link: "https://jsdl.in/DT-99BTBTYE"
    },
    {
      platform: "IndiaMART",
      icon: <ExternalLink className="h-6 w-6" />,
      rating: "4.9",
      reviews: "Premium Supplier",
      description: "B2B marketplace profile for bulk orders",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      link: "https://www.indiamart.com/khandelwal-distributors-up/"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find Us <span className="text-primary">Online</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit our verified profiles to see what our customers say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <Card key={index} className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 ${profile.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={profile.color}>
                    {profile.icon}
                  </div>
                </div>
                <CardTitle className="text-xl">{profile.platform}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent-warm text-accent-warm" />
                    <span className="font-bold text-lg">{profile.rating}</span>
                  </div>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{profile.reviews}</span>
                </div>
                <p className="text-muted-foreground">{profile.description}</p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreProfiles;