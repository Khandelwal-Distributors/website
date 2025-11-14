import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import splitAc from "@/assets/split-ac.jpg";
import inverterSplitAc from "@/assets/inverter-split-ac.jpg";
import windowAc from "@/assets/window-ac.jpg";
import cassetteAc from "@/assets/cassette-ac.jpg";
import ductableAc from "@/assets/ductable-ac.jpg";
import floorStandingAc from "@/assets/floor-standing-ac.jpg";
import portableAc from "@/assets/portable-ac.jpg";
import vrvSystem from "@/assets/vrv-system.jpg";
import chillerSystem from "@/assets/chiller-system.jpg";
import ahuSystem from "@/assets/ahu-system.jpg";
import heatPump from "@/assets/heat-pump.jpg";
import ventilationHrv from "@/assets/ventilation-hrv.jpg";
import airPurifier from "@/assets/air-purifier.jpg";
import waterCooler from "@/assets/water-cooler.jpg";
import deepFreezer from "@/assets/deep-freezer.jpg";
import coldRoom from "@/assets/cold-room.jpg";
import solarWaterHeater from "@/assets/solar-water-heater.jpg";
import alkalineRo from "@/assets/alkaline-ro.jpg";

const categories = [
  {
    name: "Inverter Split AC",
    image: inverterSplitAc,
    slug: "inverter-split-ac",
    description: "Homes, bedrooms, offices, retail shops"
  },
  {
    name: "Non-Inverter Split AC",
    image: splitAc,
    slug: "non-inverter-split-ac",
    description: "Budget cooling for small spaces"
  },
  {
    name: "Window AC",
    image: windowAc,
    slug: "window-ac",
    description: "Small rooms, server rooms, cabins"
  },
  {
    name: "Cassette AC",
    image: cassetteAc,
    slug: "cassette-ac",
    description: "Offices, showrooms, restaurants, malls"
  },
  {
    name: "Ductable AC",
    image: ductableAc,
    slug: "ductable-ac",
    description: "Villas, banquet halls, conference rooms"
  },
  {
    name: "Floor Standing AC",
    image: floorStandingAc,
    slug: "floor-standing-ac",
    description: "Halls, auditoriums, large waiting areas"
  },
  {
    name: "Portable AC",
    image: portableAc,
    slug: "portable-ac",
    description: "Temporary cooling, events, construction sites"
  },
  {
    name: "VRV/VRF Systems",
    image: vrvSystem,
    slug: "vrv-system",
    description: "Corporate buildings, hotels, hospitals"
  },
  {
    name: "Chiller Systems",
    image: chillerSystem,
    slug: "chiller-system",
    description: "Industries, large buildings, process cooling"
  },
  {
    name: "AHU Systems",
    image: ahuSystem,
    slug: "ahu-system",
    description: "Centralized HVAC, hospitals, factories"
  },
  {
    name: "Heat Pumps",
    image: heatPump,
    slug: "heat-pump",
    description: "Water heating for hotels, gyms, homes"
  },
  {
    name: "Ventilation HRV",
    image: ventilationHrv,
    slug: "ventilation-hrv",
    description: "Fresh air for homes, offices, basements"
  },
  {
    name: "Air Purifiers & Water Softeners",
    image: airPurifier,
    slug: "air-purifier",
    description: "Homes, offices, clean air & soft water"
  },
  {
    name: "Water Coolers",
    image: waterCooler,
    slug: "water-cooler",
    description: "Offices, schools, hospitals, waiting areas"
  },
  {
    name: "Deep Freezers",
    image: deepFreezer,
    slug: "deep-freezers",
    description: "Ice cream parlors, restaurants, cold storage"
  },
  {
    name: "Cold Rooms",
    image: coldRoom,
    slug: "cold-room",
    description: "Food processing, pharma, cold storage"
  },
  {
    name: "Solar Water Heaters",
    image: solarWaterHeater,
    slug: "solar-water-heater",
    description: "Eco-friendly heating for homes, hotels"
  },
  {
    name: "Alkaline RO",
    image: alkalineRo,
    slug: "alkaline-ro",
    description: "Healthy drinking water for homes, offices"
  }
];

const ScrollableProductCategories = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-2">
            Browse by <span className="text-primary">Category</span>
          </h2>
          <p className="text-muted-foreground">
            Explore our complete range of HVAC products
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide animate-fade-in-up"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            animationDelay: '0.1s'
          }}
        >
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/products/${category.slug}`}
              className="flex-shrink-0 snap-start"
            >
              <Card className="w-[320px] group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="text-xl font-bold mb-2 drop-shadow-lg">{category.name}</h3>
                    <p className="text-sm text-white drop-shadow-md leading-relaxed">{category.description}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
                  >
                    Explore Category
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Button asChild variant="cta" size="lg">
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ScrollableProductCategories;
