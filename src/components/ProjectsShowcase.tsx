import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Building, Users, Wrench, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Project statistics
const projectStats = [
  { number: "200+", label: "Projects Completed" },
  { number: "15+", label: "Years Experience" },
  { number: "50+", label: "Happy Clients" },
  { number: "24/7", label: "Support Available" }
];

const projects = [
  {
    title: "Corporate Tower HVAC System",
    type: "Commercial Office",
    capacity: "500 TR Central AC",
    completion: "2024",
    image: "/lovable-uploads/253ff299-0035-4525-90a9-5b15b36d4e69.png",
    client: "Tech Corp India",
    features: ["Energy Efficient VRF System", "Smart Controls", "24/7 Monitoring"],
    rating: 5
  },
  {
    title: "Luxury Mall Climate Control",
    type: "Retail Complex",
    capacity: "750 TR Chiller Plant",
    completion: "2023",
    image: "/lovable-uploads/1dac8f77-f78d-438f-9443-81448ee971c1.png",
    client: "Premium Malls Ltd",
    features: ["Zone-wise Control", "Energy Recovery", "Air Quality Management"],
    rating: 5
  },
  {
    title: "Hospital HVAC Installation",
    type: "Healthcare",
    capacity: "300 TR Medical Grade",
    completion: "2023",
    image: "/lovable-uploads/253ff299-0035-4525-90a9-5b15b36d4e69.png",
    client: "City General Hospital",
    features: ["HEPA Filtration", "Positive Pressure", "Emergency Backup"],
    rating: 5
  },
  {
    title: "Industrial Plant Cooling",
    type: "Manufacturing",
    capacity: "1000 TR Process Cooling",
    completion: "2022",
    image: "/lovable-uploads/1dac8f77-f78d-438f-9443-81448ee971c1.png",
    client: "Industrial Solutions Inc",
    features: ["Process Temperature Control", "Heat Recovery", "Energy Optimization"],
    rating: 4
  },
  {
    title: "Hotel Chain HVAC",
    type: "Hospitality",
    capacity: "200 TR Guest Comfort",
    completion: "2024",
    image: "/lovable-uploads/253ff299-0035-4525-90a9-5b15b36d4e69.png",
    client: "Grand Hotels Group",
    features: ["Individual Room Control", "Quiet Operation", "Energy Management"],
    rating: 5
  },
  {
    title: "Data Center Cooling",
    type: "IT Infrastructure",
    capacity: "400 TR Precision AC",
    completion: "2023",
    image: "/lovable-uploads/1dac8f77-f78d-438f-9443-81448ee971c1.png",
    client: "Cloud Services Ltd",
    features: ["Precision Temperature Control", "Redundant Systems", "IoT Monitoring"],
    rating: 5
  }
];

const ProjectsShowcase = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    
    if (scrollWidth <= clientWidth) return;

    let scrollPosition = 0;
    const scrollStep = 1;
    const scrollDelay = 60;

    const autoScroll = () => {
      if (!scrollContainer) return;
      
      scrollPosition += scrollStep;
      
      if (scrollPosition >= scrollWidth - clientWidth) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
    };

    const interval = setInterval(autoScroll, scrollDelay);

    const handleMouseEnter = () => clearInterval(interval);
    const handleMouseLeave = () => {
      clearInterval(interval);
      setTimeout(() => {
        const newInterval = setInterval(autoScroll, scrollDelay);
        scrollContainer?.addEventListener('mouseenter', () => clearInterval(newInterval), { once: true });
      }, 100);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(interval);
      scrollContainer?.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">
            Our <span className="text-primary">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering world-class HVAC solutions across diverse industries with 
            precision engineering and exceptional service quality.
          </p>
        </div>

        {/* Project Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {projectStats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-primary/10 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="min-w-[320px] max-w-[320px] group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 snap-start flex-shrink-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-primary">
                    {project.completion}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-1">
                    {[...Array(project.rating)].map((_, idx) => (
                      <Star key={idx} className="h-3 w-3 fill-accent-warm text-accent-warm" />
                    ))}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Building className="h-4 w-4" />
                    <span>{project.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Wrench className="h-4 w-4" />
                    <span>{project.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Users className="h-4 w-4" />
                    <span>{project.client}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  View Project Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-accent-warm/10 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              Want to see our complete portfolio?
            </h3>
            <p className="text-muted-foreground mb-4">
              Explore all our successfully completed projects across various industries and sectors.
            </p>
          </div>
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => navigate('/projects')}
            className="hover-scale animate-fade-in"
          >
            <MapPin className="h-4 w-4" />
            View All Projects Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;