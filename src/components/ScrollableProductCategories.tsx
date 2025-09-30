import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import splitAc from "@/assets/split-ac.jpg";
import windowAc from "@/assets/window-ac.jpg";
import cassetteAc from "@/assets/cassette-ac.jpg";
import ductableAc from "@/assets/ductable-ac.jpg";
import vrvSystem from "@/assets/vrv-system.jpg";
import chillerSystem from "@/assets/chiller-system.jpg";
import airPurifier from "@/assets/air-purifier.jpg";
import waterCooler from "@/assets/water-cooler.jpg";

const categories = [
  {
    name: "Split AC Systems",
    image: splitAc,
    slug: "inverter-split-ac",
    description: "Energy-efficient cooling for homes"
  },
  {
    name: "Window AC Units",
    image: windowAc,
    slug: "window-ac",
    description: "Compact and affordable cooling"
  },
  {
    name: "Cassette AC",
    image: cassetteAc,
    slug: "cassette-ac",
    description: "Ceiling-mounted commercial solutions"
  },
  {
    name: "Ductable AC",
    image: ductableAc,
    slug: "ductable-ac",
    description: "Concealed cooling for large spaces"
  },
  {
    name: "VRV Systems",
    image: vrvSystem,
    slug: "vrv-system",
    description: "Advanced multi-zone climate control"
  },
  {
    name: "Chiller Systems",
    image: chillerSystem,
    slug: "chiller-system",
    description: "Industrial cooling solutions"
  },
  {
    name: "Air Purifiers",
    image: airPurifier,
    slug: "air-purifier",
    description: "Clean and healthy indoor air"
  },
  {
    name: "Water Coolers",
    image: waterCooler,
    slug: "water-cooler",
    description: "Hot & cold water dispensers"
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
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      View Details
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
                  >
                    Explore Category
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
