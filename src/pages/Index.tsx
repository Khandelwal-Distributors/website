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
    name: "Khandelwal Distributors",
    alternateName: "KD HVAC Solutions",
    description:
      "Professional HVAC solutions and air conditioning services provider in Uttar Pradesh. Authorized dealer for Daikin, Mitsubishi Heavy, Carrier and more premium brands.",
    url: "https://khandelwaldistributors.com",
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
    image: "https://khandelwaldistributors.com/lovable-uploads/favicon.png",
    logo: {
      "@type": "ImageObject",
      url: "https://khandelwaldistributors.com/lovable-uploads/favicon.png",
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
                  "@id": "https://khandelwaldistributors.com/#organization",
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
                  "@id": "https://khandelwaldistributors.com/#organization",
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
                  "@id": "https://khandelwaldistributors.com/#organization",
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
          "name": "Air & Water Purifiers",
          "description": "Advanced purification systems for clean air and water",
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

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(productCategoriesJsonLd)}</script>
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
