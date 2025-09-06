import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Building2, Users, CheckCircle, Phone, MessageCircle } from "lucide-react";

const allProjects = [
  {
    title: "Corporate Tower HVAC System",
    type: "Commercial Office",
    capacity: "500 TR Central AC",
    completion: "2024",
    image: "/lovable-uploads/253ff299-0035-4525-90a9-5b15b36d4e69.png",
    client: "Tech Corp India",
    features: ["Energy Efficient VRF System", "Smart Controls", "24/7 Monitoring"]
  },
  {
    title: "Luxury Mall Climate Control",
    type: "Retail Complex",
    capacity: "750 TR Chiller Plant",
    completion: "2023",
    image: "/lovable-uploads/1dac8f77-f78d-438f-9443-81448ee971c1.png",
    client: "Premium Malls Ltd",
    features: ["Zone-wise Control", "Energy Recovery", "Air Quality Management"]
  },
  {
    title: "Hospital HVAC Installation",
    type: "Healthcare",
    capacity: "300 TR Medical Grade",
    completion: "2023",
    image: "/lovable-uploads/253ff299-0035-4525-90a9-5b15b36d4e69.png",
    client: "City General Hospital",
    features: ["HEPA Filtration", "Positive Pressure", "Emergency Backup"]
  },
  {
    title: "Industrial Plant Cooling",
    type: "Manufacturing",
    capacity: "1000 TR Process Cooling",
    completion: "2022",
    image: "/lovable-uploads/1dac8f77-f78d-438f-9443-81448ee971c1.png",
    client: "Industrial Solutions Inc",
    features: ["Process Temperature Control", "Heat Recovery", "Energy Optimization"]
  },
  {
    title: "Hotel Chain HVAC",
    type: "Hospitality",
    capacity: "200 TR Guest Comfort",
    completion: "2024",
    image: "/lovable-uploads/253ff299-0035-4525-90a9-5b15b36d4e69.png",
    client: "Grand Hotels Group",
    features: ["Individual Room Control", "Quiet Operation", "Energy Management"]
  },
  {
    title: "Data Center Cooling",
    type: "IT Infrastructure",
    capacity: "400 TR Precision AC",
    completion: "2023",
    image: "/lovable-uploads/1dac8f77-f78d-438f-9443-81448ee971c1.png",
    client: "Cloud Services Ltd",
    features: ["Precision Temperature Control", "Redundant Systems", "IoT Monitoring"]
  },
  {
    title: "Educational Campus HVAC",
    type: "Education",
    capacity: "350 TR Multi-Zone",
    completion: "2022",
    image: "/lovable-uploads/253ff299-0035-4525-90a9-5b15b36d4e69.png",
    client: "State University",
    features: ["Classroom Climate Control", "Energy Efficient", "Low Maintenance"]
  },
  {
    title: "Residential Complex AC",
    type: "Residential",
    capacity: "150 TR VRF System",
    completion: "2024",
    image: "/lovable-uploads/1dac8f77-f78d-438f-9443-81448ee971c1.png",
    client: "Premium Residences",
    features: ["Individual Metering", "Quiet Operation", "Smart Controls"]
  }
];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Our Projects - HVAC Installation Portfolio | Professional Air Conditioning Services</title>
        <meta name="description" content="Explore our comprehensive portfolio of successful HVAC installations across commercial, industrial, and residential projects. Quality air conditioning solutions delivered." />
        <meta name="keywords" content="HVAC projects, air conditioning installation, commercial AC projects, industrial cooling, residential HVAC" />
        <link rel="canonical" href="/projects" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-primary to-primary-light text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Our <span className="text-accent-warm">Project Portfolio</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  Discover our successful HVAC installations across diverse industries and sectors
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="cta" size="lg" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Get Project Quote
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="bg-white/10 border-white/30 hover:bg-white/20 text-white flex items-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Us
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  From small residential installations to large commercial projects, 
                  we've delivered excellence across all scales and complexities.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProjects.map((project, index) => (
                  <Card 
                    key={index} 
                    className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <CardHeader className="relative">
                      <div className="absolute -top-6 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        {project.completion}
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          {project.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {project.capacity}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="mb-4">
                        <p className="text-sm text-muted-foreground">
                          <strong>Client:</strong> {project.client}
                        </p>
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        <h4 className="font-semibold text-sm">Key Features:</h4>
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button variant="outline" className="w-full">
                        View Project Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-primary/10 to-accent-warm/10">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Start Your <span className="text-primary">Next Project?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let us help you design and implement the perfect HVAC solution for your space. 
                Contact our experts for a free consultation and project quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="lg" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Get Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-green-600 text-white border-green-600 hover:bg-green-700 flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp for Quick Quote
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Projects;