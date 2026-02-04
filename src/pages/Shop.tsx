import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Search, Filter, Truck, Shield, Award, Clock,
  SlidersHorizontal, Grid3X3, List, ChevronDown,
  PlaneTakeoff, ArrowRight
} from 'lucide-react';
import { useProducts, useBrands, type ProductFilters, type Product } from '@/hooks/useProducts';
import YouTubeVideos from '@/components/YouTubeVideos';

const TONNAGE_OPTIONS = [1.0, 1.5, 2.0, 2.5, 3.0];
const ENERGY_RATINGS = ['3 Star', '4 Star', '5 Star'];
const AC_TYPES = [
  { value: 'split', label: 'Split AC' },
  { value: 'window', label: 'Window AC' },
  { value: 'cassette', label: 'Cassette AC' },
  { value: 'ductable', label: 'Ductable AC' },
  { value: 'tower', label: 'Tower AC' }
];

export default function Shop() {
  const [filters, setFilters] = useState<ProductFilters>({
    sortBy: 'rating'
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const navigate = useNavigate();

  const { data: products = [], isLoading: productsLoading } = useProducts(filters);
  const { data: brands = [] } = useBrands();

  // Filter brands to match home page showcase - all 8 brands
  const featuredBrandNames = ["Daikin", "Mitsubishi Heavy", "Carrier", "Voltas", "Amstrad", "Midea", "Godrej", "Cruise"];
  const filteredBrands = brands.filter(brand => featuredBrandNames.includes(brand.name));

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters(prev => ({ ...prev, search: searchQuery }));
  };

  const handleFilterChange = (key: keyof ProductFilters, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleTonnageChange = (tonnage: number, checked: boolean) => {
    const currentTonnage = filters.tonnage || [];
    if (checked) {
      handleFilterChange('tonnage', [...currentTonnage, tonnage]);
    } else {
      handleFilterChange('tonnage', currentTonnage.filter(t => t !== tonnage));
    }
  };

  const handleEnergyRatingChange = (rating: string, checked: boolean) => {
    const currentRatings = filters.energyRating || [];
    if (checked) {
      handleFilterChange('energyRating', [...currentRatings, rating]);
    } else {
      handleFilterChange('energyRating', currentRatings.filter(r => r !== rating));
    }
  };

  const handleAcTypeChange = (type: string, checked: boolean) => {
    const currentTypes = filters.acType || [];
    if (checked) {
      handleFilterChange('acType', [...currentTypes, type]);
    } else {
      handleFilterChange('acType', currentTypes.filter(t => t !== type));
    }
  };

  const handleBuyNow = (product: Product) => {
    // Guest checkout: don't force Google sign-in
    navigate('/checkout', { state: { product } });
  };

  const clearFilters = () => {
    setFilters({ sortBy: 'rating' });
    setSearchQuery('');
  };

  const filteredProductsCount = products.length;

  return (
    <>
      <Helmet>
        <title>AC Shopping - Best Air Conditioners Online | Khandelwal Distributors</title>
        <meta name="description" content="Shop for the best air conditioners and HVAC products online. Wide range of Split, Window, Cassette, Ductable & Tower ACs in 1 ton, 1.5 ton, 2 ton from top brands like Daikin, Carrier, Mitsubishi Heavy. Free installation & warranty. Browse through products like water coolers, dispensers, chest freezers, Alkaline RO, etc. from premium brands like ElanPro, Usha and ZeroB" />
        <meta name="keywords" content="air conditioner, AC, split AC, window AC, cassette AC, ductable AC, tower AC, inverter AC, 1 ton AC, 1.5 ton AC, 2 ton AC, Daikin, Carrier, Mitsubishi Heavy, Voltas, Godrej, buy AC online, HVAC products, water cooler, deep freezer, alkaline RO" />
        <link rel="canonical" href={`${window.location.origin}/shop`} />

        {/* Open Graph */}
        <meta property="og:title" content="AC Shopping - Best Air Conditioners Online | Khandelwal Distributors" />
        <meta property="og:description" content="Shop for the best air conditioners online. Wide range of Split, Window, Cassette, Ductable & Tower ACs from top brands with free installation & warranty." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${window.location.origin}/shop`} />
        <meta property="og:image" content={`${window.location.origin}/lovable-uploads/253ff299-0035-4525-90a9-5b15b36d4e69.png`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AC Shopping - Best Air Conditioners Online" />
        <meta name="twitter:description" content="Shop for the best air conditioners online with free installation & warranty." />
        <meta name="twitter:image" content={`${window.location.origin}/lovable-uploads/253ff299-0035-4525-90a9-5b15b36d4e69.png`} />

        {/* Structured Data for Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Khandelwal Distributors",
            "url": window.location.origin,
            "logo": `${window.location.origin}/lovable-uploads/253ff299-0035-4525-90a9-5b15b36d4e69.png`,
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9429693410",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": "Hindi"
            },
            "sameAs": [
              "https://wa.me/919084417884"
            ]
          })}
        </script>

        {/* Structured Data for Breadcrumb */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": window.location.origin
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Shop",
                "item": `${window.location.origin}/shop`
              }
            ]
          })}
        </script>

        {/* Structured Data for Product Listing */}
        {products.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Air Conditioners and HVAC Products",
              "numberOfItems": products.length,
              "itemListElement": products.slice(0, 20).map((product, index) => ({
                "@type": "Product",
                "position": index + 1,
                "name": product.name,
                "description": product.description || `${product.name} ${product.model} - ${product.tonnage} ton AC with ${product.energy_rating} energy rating`,
                "image": product.image_urls[0],
                "brand": {
                  "@type": "Brand",
                  "name": product.brand
                },
                "offers": {
                  "@type": "Offer",
                  "url": `${window.location.origin}/product/${product.slug}`,
                  "priceCurrency": "INR",
                  "price": product.price,
                  "availability": product.is_available ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
                  "itemCondition": "https://schema.org/NewCondition"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": product.star_rating,
                  "reviewCount": product.review_count
                }
              }))
            })}
          </script>
        )}
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section with Trust Badges */}
        <section className="bg-gradient-to-r from-primary/5 to-primary-light/5 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Shop Premium Air Conditioners & HVAC products
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find the perfect solution for your home with our wide selection of energy-efficient
                HVAC products from top brands.
              </p>
            </div>

            {/* Business Profiles - Main Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-6">
              <a
                href="https://www.justdial.com/Bareilly/Khandelwal-Distributors-Civil-Lines/9999PX581-X581-121206195818-R6C6_BZDET"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white hover:bg-white/80 rounded-lg shadow-md hover:shadow-lg transition-all group relative"
              >
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors absolute top-3 right-3 rotate-[-45deg]" />
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
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors absolute top-3 right-3 rotate-[-45deg]" />
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
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors absolute top-3 right-3 rotate-[-45deg]" />
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

            {/* Feature Tags */}
            <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Truck className="h-4 w-4 mr-2 inline" />
                Free Shipping All Over UP
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Award className="h-4 w-4 mr-2 inline" />
                Best Price Guaranteed
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Shield className="h-4 w-4 mr-2 inline" />
                Warranty On All Products
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <PlaneTakeoff className="h-4 w-4 mr-2 inline" />
                Best Brands
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Award className="h-4 w-4 mr-2 inline" />
                Authorized Dealer
              </Badge>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-8">
          {/* Search and Filters Bar */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Search Bar */}
                <form onSubmit={handleSearch} className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search for ACs by brand, model, or features..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button type="submit">Search</Button>
                </form>

                {/* Quick Filters */}
                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2"
                  >
                    <SlidersHorizontal className="h-4 w-4" />
                    Filters
                    <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                  </Button>

                  {/* Brand Filter */}
                  <Select value={filters.brand || 'all'} onValueChange={(value) => handleFilterChange('brand', value === 'all' ? undefined : value)}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="All Brands" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Brands</SelectItem>
                      {filteredBrands.map((brand) => (
                        <SelectItem key={brand.id} value={brand.name}>
                          {brand.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {/* Sort */}
                  <Select value={filters.sortBy} onValueChange={(value) => handleFilterChange('sortBy', value as any)}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rating">Best Rated</SelectItem>
                      <SelectItem value="price_asc">Price: Low to High</SelectItem>
                      <SelectItem value="price_desc">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* View Mode */}
                  <div className="flex items-center border rounded-md">
                    <Button
                      variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className="rounded-r-none"
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className="rounded-l-none"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Advanced Filters */}
                {showFilters && (
                  <div className="border-t pt-4 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* AC Type Filter */}
                      <div>
                        <h3 className="font-medium mb-3">AC Type</h3>
                        <div className="space-y-2">
                          {AC_TYPES.map((type) => (
                            <div key={type.value} className="flex items-center space-x-2">
                              <Checkbox
                                id={`ac-type-${type.value}`}
                                checked={(filters.acType || []).includes(type.value)}
                                onCheckedChange={(checked) => handleAcTypeChange(type.value, checked as boolean)}
                              />
                              <label htmlFor={`ac-type-${type.value}`} className="text-sm">
                                {type.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tonnage Filter */}
                      <div>
                        <h3 className="font-medium mb-3">Tonnage</h3>
                        <div className="space-y-2">
                          {TONNAGE_OPTIONS.map((tonnage) => (
                            <div key={tonnage} className="flex items-center space-x-2">
                              <Checkbox
                                id={`tonnage-${tonnage}`}
                                checked={(filters.tonnage || []).includes(tonnage)}
                                onCheckedChange={(checked) => handleTonnageChange(tonnage, checked as boolean)}
                              />
                              <label htmlFor={`tonnage-${tonnage}`} className="text-sm">
                                {tonnage} Ton
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Energy Rating Filter */}
                      <div>
                        <h3 className="font-medium mb-3">Energy Rating</h3>
                        <div className="space-y-2">
                          {ENERGY_RATINGS.map((rating) => (
                            <div key={rating} className="flex items-center space-x-2">
                              <Checkbox
                                id={`rating-${rating}`}
                                checked={(filters.energyRating || []).includes(rating)}
                                onCheckedChange={(checked) => handleEnergyRatingChange(rating, checked as boolean)}
                              />
                              <label htmlFor={`rating-${rating}`} className="text-sm">
                                {rating}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Price Range */}
                      <div>
                        <h3 className="font-medium mb-3">Price Range</h3>
                        <div className="space-y-2">
                          <Input
                            type="number"
                            placeholder="Min Price"
                            value={filters.minPrice || ''}
                            onChange={(e) => handleFilterChange('minPrice', e.target.value ? Number(e.target.value) : undefined)}
                          />
                          <Input
                            type="number"
                            placeholder="Max Price"
                            value={filters.maxPrice || ''}
                            onChange={(e) => handleFilterChange('maxPrice', e.target.value ? Number(e.target.value) : undefined)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" onClick={clearFilters}>
                        Clear Filters
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Results Count */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">
              {productsLoading ? 'Loading...' : `${filteredProductsCount} products found`}
            </p>
          </div>

          {/* Products Grid */}
          {productsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-muted h-48 rounded-t-lg"></div>
                  <div className="bg-muted h-32 rounded-b-lg mt-2"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className={viewMode === 'grid'
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-4"
            }>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onBuyNow={handleBuyNow}
                />
              ))}
            </div>
          )}

          {/* No Results */}
          {!productsLoading && products.length === 0 && (
            <div className="text-center py-12">
              <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters or search criteria
              </p>
              <Button onClick={clearFilters}>Clear All Filters</Button>
            </div>
          )}
        </main>

        {/* Video Section */}
        <YouTubeVideos
          category="shop"
          title="Product Showcase Videos"
          description="Watch detailed reviews and demonstrations of our HVAC products."
        />

        <Footer />
      </div>
    </>
  );
}