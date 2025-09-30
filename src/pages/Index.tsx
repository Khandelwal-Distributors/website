import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import TickerTape from "@/components/TickerTape";
import Hero from "@/components/Hero";
import BrandShowcase from "@/components/BrandShowcase";
import DaikinSolutionPlaza from "@/components/DaikinSolutionPlaza";
import ProductCategories from "@/components/ProductCategories";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EndOfSeasonSale from "@/components/EndOfSeasonSale";
import YouTubeVideos from "@/components/YouTubeVideos";
import StoreProfiles from "@/components/StoreProfiles";
import BrochureDownload from "@/components/BrochureDownload";
import OurClients from "@/components/OurClients";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import RentAnAC from "@/components/RentAnAC";
import ScrollableProductCategories from "@/components/ScrollableProductCategories";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://khandelwaldistributors.com/#organization",
    "name": "Khandelwal Distributors",
    "alternateName": "KD HVAC Solutions",
    "description": "Professional HVAC solutions and air conditioning services provider in Uttar Pradesh. Authorized dealer for Daikin, Mitsubishi Heavy, Carrier and more premium brands.",
    "url": "https://khandelwaldistributors.com",
    "telephone": "+919429693410",
    "email": "contact@khandelwaldistributors.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.8467",
      "longitude": "80.9462"
    },
    "areaServed": {
      "@type": "State",
      "name": "Uttar Pradesh"
    },
    "priceRange": "$$",
    "image": "https://khandelwaldistributors.com/lovable-uploads/favicon.png",
    "logo": {
      "@type": "ImageObject",
      "url": "https://khandelwaldistributors.com/lovable-uploads/favicon.png"
    },
    "sameAs": [
      "https://www.facebook.com/khandelwaldistributors",
      "https://www.instagram.com/khandelwaldistributors"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "HVAC Products and Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Air Conditioning Systems",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Split AC Systems",
                "description": "Energy-efficient split air conditioning systems for residential and commercial use"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "VRV/VRF Systems",
                "description": "Variable refrigerant volume systems for large commercial projects"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Cassette AC Systems",
                "description": "Ceiling-mounted cassette air conditioning systems"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "HVAC Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AC Installation",
                "description": "Professional air conditioning installation services",
                "provider": {
                  "@id": "https://khandelwaldistributors.com/#organization"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "HVAC Maintenance",
                "description": "Regular maintenance and servicing for all HVAC systems",
                "provider": {
                  "@id": "https://khandelwaldistributors.com/#organization"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Commercial HVAC Projects",
                "description": "Complete HVAC solutions for commercial and industrial projects",
                "provider": {
                  "@id": "https://khandelwaldistributors.com/#organization"
                }
              }
            }
          ]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      <Header />
      <TickerTape />
      <main>
        <Hero />
        <BrandShowcase />
        <DaikinSolutionPlaza />
        <ProductCategories />
        <ScrollableProductCategories />
        <Services />
        <ProjectsShowcase />
        <OurClients />
        <div data-section="sale">
          <EndOfSeasonSale />
        </div>
        <div data-section="rent">
          <RentAnAC />
        </div>
        <YouTubeVideos />
        <StoreProfiles />
        <BrochureDownload />
        <div data-section="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
