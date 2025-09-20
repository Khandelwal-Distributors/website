import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Building, Users, Wrench, Star, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useProjects } from "@/hooks/useVideos";

// Project statistics
const projectStats = [
  { number: "200+", label: "Projects Completed" },
  { number: "25+", label: "Years Experience" },
  { number: "50+", label: "Happy Clients" },
  { number: "24/7", label: "Support Available" }
];


const ProjectsShowcase = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const { data: projects, isLoading, error } = useProjects();

  // Filter to get only featured projects (limit to 6 for showcase)
  const featuredProjects = projects?.filter(project => project.is_featured).slice(0, 6) || projects?.slice(0, 6) || [];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    
    if (scrollWidth <= clientWidth || featuredProjects.length === 0) return;

    let scrollPosition = 0;
    let isAutoScrolling = true;
    const scrollStep = 2;
    const scrollDelay = 30;

    const autoScroll = () => {
      if (!scrollContainer || !isAutoScrolling) return;
      
      scrollPosition += scrollStep;
      
      if (scrollPosition >= scrollWidth - clientWidth) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
    };

    const interval = setInterval(autoScroll, scrollDelay);

    const handleManualScroll = () => {
      isAutoScrolling = false;
      clearInterval(interval);
    };

    const handleMouseEnter = () => clearInterval(interval);
    const handleMouseLeave = () => {
      if (!isAutoScrolling) return;
      clearInterval(interval);
      setTimeout(() => {
        const newInterval = setInterval(autoScroll, scrollDelay);
        scrollContainer?.addEventListener('mouseenter', () => clearInterval(newInterval), { once: true });
      }, 100);
    };

    scrollContainer.addEventListener('scroll', handleManualScroll);
    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(interval);
      scrollContainer?.removeEventListener('scroll', handleManualScroll);
      scrollContainer?.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [featuredProjects.length]);

  if (isLoading) {
    return (
      <section className="py-16 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-12">
            <div className="flex items-center gap-2">
              <Loader2 className="h-6 w-6 animate-spin" />
              <span>Loading projects...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || featuredProjects.length === 0) {
    return (
      <section className="py-16 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-primary">Featured Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Check back soon for our latest project updates!
            </p>
          </div>
        </div>
      </section>
    );
  }

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
          {featuredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="min-w-[320px] max-w-[320px] group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 snap-start flex-shrink-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image_url || "/lovable-uploads/253ff299-0035-4525-90a9-5b15b36d4e69.png"} 
                  alt={project.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/lovable-uploads/253ff299-0035-4525-90a9-5b15b36d4e69.png";
                  }}
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-primary">
                    {project.completion_year}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-1">
                    {[...Array(Math.floor(project.rating || 5))].map((_, idx) => (
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
                    <span>{project.project_type}</span>
                  </div>
                  {project.capacity && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Wrench className="h-4 w-4" />
                      <span>{project.capacity}</span>
                    </div>
                  )}
                  {project.client && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Users className="h-4 w-4" />
                      <span>{project.client}</span>
                    </div>
                  )}
                </div>

                {project.features && project.features.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <span 
                          key={idx}
                          className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  onClick={() => {
                    if (project.project_url) {
                      window.open(project.project_url, '_blank', 'noopener,noreferrer');
                    }
                  }}
                  disabled={!project.project_url}
                >
                  {project.project_url ? 'View Details' : 'Coming Soon'}
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