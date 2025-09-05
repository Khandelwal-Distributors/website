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
  SlidersHorizontal, Grid3X3, List, ChevronDown 
} from 'lucide-react';
import { useProducts, useBrands, type ProductFilters, type Product } from '@/hooks/useProducts';
import { useToast } from '@/hooks/use-toast';

const TONNAGE_OPTIONS = [1.0, 1.5, 2.0, 2.5, 3.0];
const ENERGY_RATINGS = ['3 Star', '4 Star', '5 Star'];

export default function Shop() {
  const [filters, setFilters] = useState<ProductFilters>({
    sortBy: 'rating'
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const { data: products = [], isLoading: productsLoading } = useProducts(filters);
  const { data: brands = [] } = useBrands();

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

  const handleBuyNow = (product: Product) => {
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
        <meta name="description" content="Shop for the best air conditioners online. Wide range of 1 ton, 1.5 ton, 2 ton ACs from top brands like Daikin, Carrier, LG. Free installation & warranty." />
        <meta name="keywords" content="air conditioner, AC, split AC, inverter AC, 1 ton AC, 1.5 ton AC, 2 ton AC, Daikin, Carrier, LG, Samsung" />
        <link rel="canonical" href={`${window.location.origin}/shop`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="AC Shopping - Best Air Conditioners Online | Khandelwal Distributors" />
        <meta property="og:description" content="Shop for the best air conditioners online. Wide range of ACs from top brands with free installation & warranty." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${window.location.origin}/shop`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AC Shopping - Best Air Conditioners Online" />
        <meta name="twitter:description" content="Shop for the best air conditioners online with free installation & warranty." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section with Trust Badges */}
        <section className="bg-gradient-to-r from-primary/5 to-primary-light/5 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Shop Premium Air Conditioners
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find the perfect AC for your home with our wide selection of energy-efficient 
                air conditioners from top brands.
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 p-4 bg-white/50 rounded-lg">
                <Truck className="h-8 w-8 text-green-600" />
                <div className="text-center">
                  <p className="font-semibold">Free Shipping</p>
                  <p className="text-sm text-muted-foreground">All Over India</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 bg-white/50 rounded-lg">
                <Award className="h-8 w-8 text-blue-600" />
                <div className="text-center">
                  <p className="font-semibold">Best Price</p>
                  <p className="text-sm text-muted-foreground">Guaranteed</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 bg-white/50 rounded-lg">
                <Shield className="h-8 w-8 text-purple-600" />
                <div className="text-center">
                  <p className="font-semibold">5 Years Warranty</p>
                  <p className="text-sm text-muted-foreground">On All Products</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 bg-white/50 rounded-lg">
                <Award className="h-8 w-8 text-orange-600" />
                <div className="text-center">
                  <p className="font-semibold">Authorized Dealer</p>
                  <p className="text-sm text-muted-foreground">Daikin, Amstrad and Carrier</p>
                </div>
              </div>
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
                      {brands.map((brand) => (
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

        <Footer />
      </div>
    </>
  );
}