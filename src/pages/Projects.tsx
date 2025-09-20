import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Building2, Users, CheckCircle, Phone, MessageCircle, Star, Loader2 } from "lucide-react";
import { useProjects } from "@/hooks/useVideos";

const Projects = () => {
  const { data: projects, isLoading, error } = useProjects();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span>Loading projects...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Error Loading Projects</h2>
          <p className="text-muted-foreground">{error.message}</p>
        </div>
      </div>
    );
  }

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
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                  Our <span className="text-accent-warm">Project Portfolio</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  Discover our successful HVAC installations across diverse industries and sectors
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <Button variant="cta" size="lg" className="flex items-center gap-2 hover-scale">
                    <Phone className="h-5 w-5" />
                    Get Project Quote
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="bg-white/10 border-white/30 hover:bg-white/20 text-white flex items-center gap-2 hover-scale"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Us
                  </Button>
                </div>
                
                {/* Project Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                  <div className="text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
                    <div className="text-3xl md:text-4xl font-bold text-accent-warm mb-2">200+</div>
                    <div className="text-sm md:text-base text-white/80">Projects Completed</div>
                  </div>
                  <div className="text-center animate-fade-in" style={{ animationDelay: "0.7s" }}>
                    <div className="text-3xl md:text-4xl font-bold text-accent-warm mb-2">25+</div>
                    <div className="text-sm md:text-base text-white/80">Years Experience</div>
                  </div>
                  <div className="text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
                    <div className="text-3xl md:text-4xl font-bold text-accent-warm mb-2">50+</div>
                    <div className="text-sm md:text-base text-white/80">Happy Clients</div>
                  </div>
                  <div className="text-center animate-fade-in" style={{ animationDelay: "0.9s" }}>
                    <div className="text-3xl md:text-4xl font-bold text-accent-warm mb-2">24/7</div>
                    <div className="text-sm md:text-base text-white/80">Support Available</div>
                  </div>
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
                {(!projects || projects.length === 0) ? (
                  <div className="col-span-full text-center py-12">
                    <p className="text-lg text-muted-foreground">No projects available at the moment.</p>
                  </div>
                ) : (
                  projects.map((project, index) => (
                  <Card 
                    key={index} 
                    className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <img 
                        src={project.image_url || "/lovable-uploads/253ff299-0035-4525-90a9-5b15b36d4e69.png"} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/lovable-uploads/253ff299-0035-4525-90a9-5b15b36d4e69.png";
                        }}
                      />
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        {project.completion_year}
                      </div>
                      <div className="absolute bottom-4 left-4 flex items-center gap-1">
                        {[...Array(Math.floor(project.rating || 5))].map((_, idx) => (
                          <Star key={idx} className="h-3 w-3 fill-accent-warm text-accent-warm" />
                        ))}
                      </div>
                    </div>
                    
                    <CardHeader className="relative">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          {project.project_type}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {project.capacity}
                        </div>
                      </div>
                      {project.location && (
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {project.location}
                        </div>
                      )}
                    </CardHeader>
                    
                    <CardContent>
                      <div className="mb-4">
                        <p className="text-sm text-muted-foreground">
                          <strong>Client:</strong> {project.client}
                        </p>
                      </div>
                      
                      {project.features && project.features.length > 0 && (
                        <div className="space-y-2 mb-6">
                          <h4 className="font-semibold text-sm">Key Features:</h4>
                          {project.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                        onClick={() => {
                          if (project.project_url) {
                            window.open(project.project_url, '_blank', 'noopener,noreferrer');
                          }
                        }}
                        disabled={!project.project_url}
                      >
                        {project.project_url ? 'View Project Details' : 'Details Coming Soon'}
                      </Button>
                    </CardContent>
                  </Card>
                  ))
                )}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-primary/10 to-accent-warm/10">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4 animate-fade-in">
                Ready to Start Your <span className="text-primary">Next Project?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Let us help you design and implement the perfect HVAC solution for your space. 
                Contact our experts for a free consultation and project quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button variant="cta" size="lg" className="flex items-center gap-2 hover-scale animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <Phone className="h-5 w-5" />
                  Get Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-green-600 text-white border-green-600 hover:bg-green-700 flex items-center gap-2 hover-scale animate-fade-in"
                  style={{ animationDelay: "0.5s" }}
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp for Quick Quote
                </Button>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <p className="text-sm text-muted-foreground mb-3">
                  Want to explore our other services and products?
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => window.location.href = '/'}
                  className="hover-scale"
                >
                  Back to Homepage
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