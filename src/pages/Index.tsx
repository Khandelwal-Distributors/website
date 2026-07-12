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
import ServiceFlowShowcase from "@/components/ServiceFlowShowcase";

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
    telephone: "+917017497935",
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

        <DaikinSolutionPlaza />
        <ProductCategories />
        <ScrollableProductCategories />
        <Services />
        <ProjectsShowcase />

        {/* Find Us On Leading Platforms */}
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

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
              <a
                href="https://www.justdial.com/Bareilly/Khandelwal-Distributors-Civil-Lines/9999PX581-X581-121206195818-R6C6_BZDET"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white hover:bg-white/80 rounded-lg shadow-md hover:shadow-lg transition-all group relative"
              >
                <svg className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors absolute top-3 right-3 rotate-[-45deg]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                <img src="/icons/jd_icon.png" alt="JustDial" className="h-16 w-16 object-contain group-hover:scale-110 transition-transform" />
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
                <img src="/icons/indiamart_icon.webp" alt="IndiaMART" className="h-16 w-16 object-contain group-hover:scale-110 transition-transform" />
                <div className="text-left flex-1">
                  <p className="font-bold text-lg">IndiaMART</p>
                  <p className="text-sm text-muted-foreground">Trusted Seller</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/company/khandelwal-distributors"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white hover:bg-white/80 rounded-lg shadow-md hover:shadow-lg transition-all group relative"
              >
                <svg className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors absolute top-3 right-3 rotate-[-45deg]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                <div className="h-16 w-16 flex items-center justify-center rounded-xl bg-[#0A66C2] group-hover:scale-110 transition-transform flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-9 w-9"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </div>
                <div className="text-left flex-1">
                  <p className="font-bold text-lg">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">Follow Us</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/kd.bly"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white hover:bg-white/80 rounded-lg shadow-md hover:shadow-lg transition-all group relative"
              >
                <svg className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors absolute top-3 right-3 rotate-[-45deg]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                <div className="h-16 w-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] group-hover:scale-110 transition-transform flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-9 w-9"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                </div>
                <div className="text-left flex-1">
                  <p className="font-bold text-lg">Instagram</p>
                  <p className="text-sm text-muted-foreground">@kd.bly</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Find Us Offline */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Find Us Offline</h2>
              <p className="text-muted-foreground">
                Visit our stores — rated <span className="font-semibold text-yellow-500">4.8 ★</span> with <span className="font-semibold">300+ verified reviews</span> on Google Maps
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <a href="https://share.google/Epfk8fnDSFxS64PX5" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-3 p-5 bg-white border-2 border-border hover:border-primary/40 rounded-xl shadow-md hover:shadow-lg transition-all group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src="/icons/maps_icon.webp" alt="Google Maps" className="h-7 w-7 object-contain" />
                    <span className="font-bold text-lg">Bareilly Store</span>
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-50 border border-yellow-200 rounded-full px-3 py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#EAB308" className="h-4 w-4"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    <span className="text-sm font-semibold text-yellow-700">4.8</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  <span>G-35, MCI Plaza, Civil Lines, Bareilly, Uttar Pradesh 243001</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-muted-foreground">300+ Google Reviews</span>
                  <span className="text-xs font-medium text-primary group-hover:underline">Get Directions →</span>
                </div>
              </a>
              <a href="https://share.google/n3iP5oPBQM4vdvXOv" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-3 p-5 bg-white border-2 border-border hover:border-primary/40 rounded-xl shadow-md hover:shadow-lg transition-all group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src="/icons/maps_icon.webp" alt="Google Maps" className="h-7 w-7 object-contain" />
                    <span className="font-bold text-lg">Shahjahanpur Store</span>
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-50 border border-yellow-200 rounded-full px-3 py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#EAB308" className="h-4 w-4"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    <span className="text-sm font-semibold text-yellow-700">4.8</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  <span>Bahadurganj Rd, Sadar Bazar, Shahjahanpur, Uttar Pradesh 242001</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-muted-foreground">300+ Google Reviews</span>
                  <span className="text-xs font-medium text-primary group-hover:underline">Get Directions →</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        <ServiceFlowShowcase />
        <OurClients />
        <div data-section="sale">
          <EndOfSeasonSale />
        </div>
        <div data-section="rent">
          <RentAnAC />
        </div>
        <BlogsSection />
        <YouTubeVideos />
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
