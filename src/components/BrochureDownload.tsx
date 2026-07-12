import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText, CheckCircle } from "lucide-react";

const BrochureDownload = () => {
  const features = [
    "Complete product catalog",
    "Pricing information",
    "Service details",
    "Installation guidelines"
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-accent-warm/5">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto hover:shadow-[var(--shadow-card)] transition-all duration-300">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">
                      Download Our <span className="text-primary">Brochure</span>
                    </h2>
                    <p className="text-muted-foreground">Complete product catalog and pricing guide</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent-warm flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground mb-6">
                  Get detailed information about all our AC models, services, and competitive pricing. 
                  Perfect for planning your cooling solution.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-muted rounded-lg p-8 mb-6">
                  <div className="bg-background rounded-lg p-6 shadow-sm">
                    <img 
                      src="/lovable-uploads/253ff299-0035-4525-90a9-5b15b36d4e69.png" 
                      alt="Brand logo" 
                      className="h-16 w-16 mx-auto mb-4 object-contain"
                    />
                    <h3 className="font-semibold text-lg mb-2">Product Brochure</h3>
                    <p className="text-sm text-muted-foreground mb-1">PDF Format • 2.5 MB</p>
                    <p className="text-xs text-muted-foreground">Updated: December 2024</p>
                  </div>
                </div>
                
                <Button variant="cta" size="lg" className="w-full md:w-auto" asChild>
                  <a href="https://jjfwpspbwbytxbfljmcz.supabase.co/storage/v1/object/public/assets/Brochure.pdf" target="_blank" rel="noopener noreferrer" download="Khandelwal-Distributors-Brochure.pdf">
                    <Download className="h-5 w-5 mr-2" />
                    Download Brochure
                  </a>
                </Button>
                
                <p className="text-xs text-muted-foreground mt-3">
                  No sign-up required • Instant download
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BrochureDownload;