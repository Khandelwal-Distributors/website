import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Building, Users, Wrench, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Luxury Hotel Chain - Mumbai",
    type: "Commercial VRV Systems",
    capacity: "50 Ton Central AC",
    completion: "2024",
    image: "/lovable-uploads/1dac8f77-f78d-438f-9443-81448ee971c1.png",
    client: "5-Star Hotel Group",
    features: ["Energy Efficient", "Zone Control", "24/7 Operation"]
  },
  {
    title: "IT Corporate Office - Pune",
    type: "Daikin VRV Systems",
    capacity: "80 Ton HVAC",
    completion: "2023",
    image: "/lovable-uploads/253ff299-0035-4525-90a9-5b15b36d4e69.png",
    client: "Fortune 500 Company",
    features: ["Smart Controls", "Air Quality", "Backup Systems"]
  },
  {
    title: "Shopping Mall - Delhi",
    type: "Centralized Chiller Plant",
    capacity: "120 Ton Cooling",
    completion: "2023",
    image: "/lovable-uploads/1dac8f77-f78d-438f-9443-81448ee971c1.png",
    client: "Premier Mall Group",
    features: ["Variable Load", "Energy Saving", "Remote Monitoring"]
  },
  {
    title: "Hospital Complex - Bangalore",
    type: "Medical Grade HVAC",
    capacity: "60 Ton Systems",
    completion: "2024",
    image: "/lovable-uploads/253ff299-0035-4525-90a9-5b15b36d4e69.png",
    client: "Multi-Specialty Hospital",
    features: ["HEPA Filtration", "Humidity Control", "Backup Power"]
  },
  {
    title: "Manufacturing Plant - Chennai",
    type: "Industrial Cooling",
    capacity: "100 Ton Capacity",
    completion: "2023",
    image: "/lovable-uploads/1dac8f77-f78d-438f-9443-81448ee971c1.png",
    client: "Automotive Industry",
    features: ["Process Cooling", "Dust Resistant", "High Efficiency"]
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
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4">
            Our <span className="text-primary">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering world-class HVAC solutions across diverse industries with 
            precision engineering and exceptional service quality.
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="min-w-[320px] max-w-[320px] group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 snap-start flex-shrink-0"
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

        <div className="text-center mt-8">
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => navigate('/projects')}
          >
            <MapPin className="h-4 w-4" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;