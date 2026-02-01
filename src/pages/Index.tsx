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
import BlogsSection from "@/components/BlogsSection";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.khandelwaldistributors.com/#organization",
    name: "Khandelwal Distributors",
    alternateName: "KD HVAC Solutions",
    description:
      "Professional HVAC solutions and air conditioning services provider in Uttar Pradesh. Authorized dealer for Daikin, Mitsubishi Heavy, Carrier and more premium brands.",
    url: "https://www.khandelwaldistributors.com",
    telephone: "+919429693410",
    email: "admin@khandelwaldistributors.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Uttar Pradesh",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.8467",
      longitude: "80.9462",
    },
    areaServed: {
      "@type": "State",
      name: "Uttar Pradesh",
    },
    priceRange: "$$",
    image: "https://www.khandelwaldistributors.com/lovable-uploads/favicon.png",
    logo: {
      "@type": "ImageObject",
      url: "https://www.khandelwaldistributors.com/lovable-uploads/favicon.png",
    },
    sameAs: [
      "https://www.facebook.com/khandelwaldistributor",
      "https://www.instagram.com/kd.bly",
      "https://www.linkedin.com/company/khandelwal-distributors",
      "https://www.justdial.com/Bareilly/Khandelwal-Distributors-Civil-Lines/9999PX581-X581-121206195818-R6C6_BZDET",
      "https://www.indiamart.com/khandelwal-distributors-up",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "892",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "HVAC Products and Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Air Conditioning Systems",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Split AC Systems",
                description: "Energy-efficient split air conditioning systems for residential and commercial use",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "VRV/VRF Systems",
                description: "Variable refrigerant volume systems for large commercial projects",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Cassette AC Systems",
                description: "Ceiling-mounted cassette air conditioning systems",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "HVAC Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AC Installation",
                description: "Professional air conditioning installation services",
                provider: {
                  "@id": "https://www.khandelwaldistributors.com/#organization",
                },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "HVAC Maintenance",
                description: "Regular maintenance and servicing for all HVAC systems",
                provider: {
                  "@id": "https://www.khandelwaldistributors.com/#organization",
                },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Commercial HVAC Projects",
                description: "Complete HVAC solutions for commercial and industrial projects",
                provider: {
                  "@id": "https://www.khandelwaldistributors.com/#organization",
                },
              },
            },
          ],
        },
      ],
    },
  };

  const productCategoriesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "Window Air Conditioners",
          "description": "Compact window AC units for residential spaces",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.5",
            "reviewCount": "892"
          },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "18000",
            "highPrice": "35000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "name": "Inverter Split Air Conditioners",
          "description": "Energy-efficient inverter split AC systems",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "reviewCount": "1245"
          },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "28000",
            "highPrice": "75000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Product",
          "name": "Portable Air Conditioners",
          "description": "Mobile AC solutions for temporary and rental spaces",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.5",
            "reviewCount": "892"
          },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "25000",
            "highPrice": "45000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Product",
          "name": "Cassette Air Conditioners",
          "description": "Ceiling-mounted cassette AC for commercial spaces",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.6",
            "reviewCount": "654"
          },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "45000",
            "highPrice": "95000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Product",
          "name": "VRV/VRF Systems",
          "description": "Variable refrigerant volume systems for large projects",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "342"
          },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "250000",
            "highPrice": "2500000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Product",
          "name": "Water Coolers",
          "description": "Commercial and residential water cooling solutions",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.4",
            "reviewCount": "523"
          },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "8000",
            "highPrice": "35000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "Product",
          "name": "Non-Inverter Split Air Conditioners",
          "description": "Fixed speed split AC systems for reliable cooling",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.3",
            "reviewCount": "756"
          },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "20000",
            "highPrice": "35000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 8,
        "item": {
          "@type": "Product",
          "name": "Floor Standing Air Conditioners",
          "description": "Powerful floor-mounted ACs for large commercial spaces",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "reviewCount": "432"
          },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "120000",
            "highPrice": "180000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 9,
        "item": {
          "@type": "Product",
          "name": "Ductable Air Conditioners",
          "description": "Concealed duct AC systems for aesthetic commercial installations",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.6",
            "reviewCount": "387"
          },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "55000",
            "highPrice": "150000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 10,
        "item": {
          "@type": "Product",
          "name": "Alkaline RO Water Systems",
          "description": "Advanced alkaline water purification with RO technology",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.5",
            "reviewCount": "612"
          },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "15000",
            "highPrice": "25000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 11,
        "item": {
          "@type": "Product",
          "name": "Solar Water Heaters",
          "description": "Eco-friendly solar water heating systems",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.4",
            "reviewCount": "489"
          },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "25000",
            "highPrice": "50000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 12,
        "item": {
          "@type": "Product",
          "name": "Ventilation & HRV Systems",
          "description": "Advanced ventilation and heat recovery solutions",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.6",
            "reviewCount": "324"
          },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "15000",
            "highPrice": "70000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 13,
        "item": {
          "@type": "Product",
          "name": "Air Purifiers & Water Softeners",
          "description": "Advanced air purification and water softening systems for clean air and soft water",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.5",
            "reviewCount": "698"
          },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "12000",
            "highPrice": "25000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 14,
        "item": {
          "@type": "Product",
          "name": "Deep Freezers & Commercial Refrigeration",
          "description": "Commercial deep freezers and refrigeration by Elanpro",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.5",
            "reviewCount": "421"
          },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "38000",
            "highPrice": "65000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 15,
        "item": {
          "@type": "Product",
          "name": "AHU Systems",
          "description": "Air Handling Units for large commercial HVAC projects",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "reviewCount": "287"
          },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "150000",
            "highPrice": "800000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 16,
        "item": {
          "@type": "Product",
          "name": "Chiller Systems",
          "description": "Industrial water-cooled and air-cooled chiller systems",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "198"
          },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "300000",
            "highPrice": "2000000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 17,
        "item": {
          "@type": "Product",
          "name": "Heat Pump Systems",
          "description": "Energy-efficient heat pump technology for heating and cooling",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.6",
            "reviewCount": "243"
          },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "80000",
            "highPrice": "400000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 18,
        "item": {
          "@type": "Product",
          "name": "Cold Room Solutions",
          "description": "Walk-in cold storage rooms for commercial applications",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "reviewCount": "156"
          },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "200000",
            "highPrice": "1500000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        }
      }
    ]
  };

  const rentalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Air Conditioner Rental Service",
    "description": "Flexible AC rental solutions for homes, offices, and events. Monthly, seasonal, and event-based rental plans with free installation, maintenance, and 24/7 support.",
    "provider": {
      "@id": "https://www.khandelwaldistributors.com/#organization"
    },
    "areaServed": {
      "@type": "State",
      "name": "Uttar Pradesh"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AC Rental Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Monthly AC Rental",
          "description": "1.5 Ton Split AC with free installation, uninstallation, maintenance and 24/7 support",
          "price": "2999",
          "priceCurrency": "INR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "2999",
            "priceCurrency": "INR",
            "unitText": "MONTH"
          },
          "eligibleDuration": {
            "@type": "QuantitativeValue",
            "value": "3",
            "unitCode": "MON",
            "minValue": "3"
          },
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "Seasonal AC Rental",
          "description": "1.5 Ton Split AC for 4 months with all-inclusive service - best value for summer",
          "price": "8999",
          "priceCurrency": "INR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "8999",
            "priceCurrency": "INR",
            "unitText": "SEASON"
          },
          "eligibleDuration": {
            "@type": "QuantitativeValue",
            "value": "4",
            "unitCode": "MON"
          },
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "Event AC Rental",
          "description": "Portable AC units for events with same day installation and 24/7 technical support",
          "price": "1299",
          "priceCurrency": "INR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "1299",
            "priceCurrency": "INR",
            "unitText": "DAY"
          },
          "eligibleDuration": {
            "@type": "QuantitativeValue",
            "value": "3",
            "unitCode": "DAY",
            "minValue": "3"
          },
          "availability": "https://schema.org/InStock"
        }
      ]
    },
    "serviceType": "Air Conditioner Rental",
    "termsOfService": "Free installation and uninstallation included. Free maintenance and service. 24/7 customer support. Minimum rental periods apply.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "reviewCount": "387"
    }
  };

  const siteNavigationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Site Navigation",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Products",
        "description": "Complete catalog of HVAC and air conditioning products",
        "url": "https://www.khandelwaldistributors.com/products"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "Shop",
        "description": "Buy air conditioners and HVAC equipment online",
        "url": "https://www.khandelwaldistributors.com/shop"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "Projects",
        "description": "Our commercial HVAC installation portfolio",
        "url": "https://www.khandelwaldistributors.com/projects"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Blogs",
        "description": "HVAC guides, tips, and industry insights",
        "url": "https://www.khandelwaldistributors.com/blogs"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": "VRV System",
        "description": "Authorized dealer for premium HVAC brands",
        "url": "https://www.khandelwaldistributors.com/products/vrv-system"
      }
    ]
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Khandelwal Distributors",
    "alternateName": "KD HVAC Solutions",
    "url": "https://www.khandelwaldistributors.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.khandelwaldistributors.com/shop?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@id": "https://www.khandelwaldistributors.com/#organization"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(productCategoriesJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(rentalServiceJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(siteNavigationJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteJsonLd)}</script>
      </Helmet>
      <Header />
      <TickerTape />
      <main>
        <Hero />
        <BrandShowcase />
        
        {/* Business Profiles Section */}
        <section className="py-12 bg-gradient-to-r from-primary/5 to-primary-light/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Find Us On Leading Platforms
              </h2>
              <p className="text-muted-foreground">
                Trusted by thousands of customers across India
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <a 
                href="https://www.justdial.com/Bareilly/Khandelwal-Distributors-Civil-Lines/9999PX581-X581-121206195818-R6C6_BZDET" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white hover:bg-white/80 rounded-lg shadow-md hover:shadow-lg transition-all group relative"
              >
                <svg className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors absolute top-3 right-3 rotate-[-45deg]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                <img 
                  src="/icons/jd_icon.png" 
                  alt="JustDial" 
                  className="h-16 w-16 object-contain group-hover:scale-110 transition-transform"
                />
                <div className="text-left flex-1">
                  <p className="font-bold text-lg">JustDial</p>
                  <p className="text-sm text-muted-foreground">400+ ratings</p>
                </div>
              </a>
              
              <a 
                href="https://www.indiamart.com/khandelwal-distributors-up" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white hover:bg-white/80 rounded-lg shadow-md hover:shadow-lg transition-all group relative"
              >
                <svg className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors absolute top-3 right-3 rotate-[-45deg]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                <img 
                  src="/icons/indiamart_icon.webp" 
                  alt="IndiaMART" 
                  className="h-16 w-16 object-contain group-hover:scale-110 transition-transform"
                />
                <div className="text-left flex-1">
                  <p className="font-bold text-lg">IndiaMART</p>
                  <p className="text-sm text-muted-foreground">Trusted Seller</p>
                </div>
              </a>
              
              <a 
                href="https://maps.app.goo.gl/khandelwaldistributors" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white hover:bg-white/80 rounded-lg shadow-md hover:shadow-lg transition-all group relative"
              >
                <svg className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors absolute top-3 right-3 rotate-[-45deg]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                <img 
                  src="/icons/maps_icon.webp" 
                  alt="Google Maps" 
                  className="h-16 w-16 object-contain group-hover:scale-110 transition-transform"
                />
                <div className="text-left flex-1">
                  <p className="font-bold text-lg">Google Maps</p>
                  <p className="text-sm text-muted-foreground">Most Searched</p>
                </div>
              </a>
            </div>
          </div>
        </section>
        
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
        <BlogsSection />
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
