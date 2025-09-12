import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Star, Phone, ShoppingCart, MessageCircle, Wind, Zap, 
  Shield, Thermometer, Volume2, Leaf, Wifi, Settings 
} from 'lucide-react';
import { useProduct, useRecommendedProducts } from '@/hooks/useProducts';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import YouTubeVideos from '@/components/YouTubeVideos';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const { data: product, isLoading, error } = useProduct(slug || '');
  const { data: recommendedProducts = [] } = useRecommendedProducts(
    product?.id || '', 
    product?.brand
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-muted h-96 rounded-lg"></div>
              <div className="space-y-4">
                <div className="bg-muted h-8 rounded w-3/4"></div>
                <div className="bg-muted h-6 rounded w-1/2"></div>
                <div className="bg-muted h-16 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/shop')}>Back to Shop</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < Math.floor(rating) 
            ? 'fill-yellow-400 text-yellow-400' 
            : i < rating 
            ? 'fill-yellow-400/50 text-yellow-400' 
            : 'text-muted-foreground'
        }`}
      />
    ));
  };

  const handleCallNow = () => {
    window.open('tel:+919429693410', '_self');
  };

  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in ${product.name} (${product.model}). Could you please provide more details?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919084417884?text=${encodedMessage}`, '_blank');
  };

  const handleBuyNow = () => {
    // Check if user is authenticated
    const authState = supabase.auth.getSession();
    authState.then(({ data: { session } }) => {
      if (!session) {
        toast({
          title: 'Sign In Required',
          description: 'Please sign in to purchase products.',
        });
        navigate('/auth');
        return;
      }
      navigate('/checkout', { state: { product } });
    });
  };

  const specifications = product.specifications as Record<string, string>;

  return (
    <>
      <Helmet>
        <title>{product.seo_title || `${product.name} - ${product.model} | Khandelwal Distributors`}</title>
        <meta name="description" content={product.seo_description || `Buy ${product.name} ${product.model} at best price. ${product.tonnage} ton AC with ${product.energy_rating} energy rating. Free installation & warranty.`} />
        <meta name="keywords" content={`${product.name}, ${product.model}, ${product.brand}, ${product.tonnage} ton AC, ${product.energy_rating}, air conditioner`} />
        <link rel="canonical" href={`${window.location.origin}/product/${product.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={product.seo_title || `${product.name} - ${product.model}`} />
        <meta property="og:description" content={product.seo_description || product.description || `Buy ${product.name} at best price with free installation & warranty.`} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`${window.location.origin}/product/${product.slug}`} />
        <meta property="og:image" content={product.image_urls[0]} />
        <meta property="product:price:amount" content={product.price.toString()} />
        <meta property="product:price:currency" content="INR" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.seo_title || `${product.name} - ${product.model}`} />
        <meta name="twitter:description" content={product.seo_description || product.description || `Buy ${product.name} at best price.`} />
        <meta name="twitter:image" content={product.image_urls[0]} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": product.name,
            "model": product.model,
            "brand": {
              "@type": "Brand",
              "name": product.brand
            },
            "description": product.description,
            "image": product.image_urls,
            "offers": {
              "@type": "Offer",
              "url": `${window.location.origin}/product/${product.slug}`,
              "priceCurrency": "INR",
              "price": product.price,
              "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
              "itemCondition": "https://schema.org/NewCondition",
              "availability": product.is_available ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": product.star_rating,
              "reviewCount": product.review_count
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-6">
            <span onClick={() => navigate('/')} className="cursor-pointer hover:text-primary">Home</span>
            <span className="mx-2">/</span>
            <span onClick={() => navigate('/shop')} className="cursor-pointer hover:text-primary">Shop</span>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>

          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                <img
                  src={product.image_urls[selectedImageIndex] || '/api/placeholder/600/600'}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {product.image_urls.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {product.image_urls.map((url, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
                        selectedImageIndex === index ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={url || '/api/placeholder/80/80'}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Brand & Badges */}
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="font-medium text-lg px-3 py-1">
                  {product.brand}
                </Badge>
                {product.is_featured && (
                  <Badge className="bg-accent-warm text-accent-warm-foreground">
                    Featured
                  </Badge>
                )}
                {product.discount_percent > 0 && (
                  <Badge className="bg-red-500 text-white">
                    -{product.discount_percent}% OFF
                  </Badge>
                )}
              </div>

              {/* Product Name & Model */}
              <div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <p className="text-lg text-muted-foreground">
                  Model: <span className="font-semibold text-foreground">{product.model}</span>
                  {product.series && (
                    <span> | Series: <span className="font-semibold text-foreground">{product.series}</span></span>
                  )}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {renderStars(product.star_rating)}
                </div>
                <span className="text-lg font-semibold">{product.star_rating}</span>
                <span className="text-muted-foreground">({product.review_count} reviews)</span>
              </div>

              {/* Key Specs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="text-center">
                  <Wind className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="font-semibold">{product.tonnage} Ton</p>
                  <p className="text-sm text-muted-foreground">Capacity</p>
                </div>
                <div className="text-center">
                  <Zap className="h-8 w-8 mx-auto mb-2 text-green-600" />
                  <p className="font-semibold">{product.energy_rating}</p>
                  <p className="text-sm text-muted-foreground">Energy Rating</p>
                </div>
                <div className="text-center">
                  <Shield className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <p className="font-semibold">{product.warranty_years} Years</p>
                  <p className="text-sm text-muted-foreground">Warranty</p>
                </div>
                <div className="text-center">
                  <Settings className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <p className="font-semibold">Inverter</p>
                  <p className="text-sm text-muted-foreground">Technology</p>
                </div>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-primary">
                    {formatPrice(product.price)}
                  </span>
                  {product.original_price && product.original_price > product.price && (
                    <span className="text-2xl line-through text-muted-foreground">
                      {formatPrice(product.original_price)}
                    </span>
                  )}
                </div>
                {product.original_price && product.original_price > product.price && (
                  <p className="text-lg text-green-600 font-semibold">
                    You save {formatPrice(product.original_price - product.price)}!
                  </p>
                )}
                <p className="text-sm text-muted-foreground">
                  *Inclusive of all taxes | EMI options available
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Button size="lg" variant="secondary" onClick={() => window.open('https://wa.me/919084417884?text=Hello, I am interested in this product. Please share the best price and details.', '_blank')} className="text-lg py-6 bg-green-600 hover:bg-green-700 text-white">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => window.open('tel:+919429693410', '_self')} className="text-lg py-6">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </div>
                <Button size="lg" variant="cta" onClick={handleBuyNow} className="w-full text-lg py-6">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Buy Now
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-green-600">
                  <Shield className="h-4 w-4" />
                  <span>Free Installation</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600">
                  <Leaf className="h-4 w-4" />
                  <span>Energy Efficient</span>
                </div>
                <div className="flex items-center gap-2 text-purple-600">
                  <Wifi className="h-4 w-4" />
                  <span>Smart Features</span>
                </div>
                <div className="flex items-center gap-2 text-orange-600">
                  <Volume2 className="h-4 w-4" />
                  <span>Low Noise</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="space-y-8">
            {/* Description */}
            {product.description && (
              <Card>
                <CardHeader>
                  <CardTitle>Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Specifications */}
            {specifications && Object.keys(specifications).length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-2 border-b border-muted last:border-0">
                        <span className="font-medium capitalize">{key.replace(/_/g, ' ')}</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
          )}
          </div>

          {/* Video Section */}
          <YouTubeVideos 
            category="products"
            title="Product Videos"
            description="Watch detailed product reviews and installation guides."
          />

          {/* Recommended Products */}
          {recommendedProducts.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-8">Recommended Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {recommendedProducts.map((recommendedProduct) => (
                  <ProductCard
                    key={recommendedProduct.id}
                    product={recommendedProduct}
                    onBuyNow={() => navigate('/checkout', { state: { product: recommendedProduct } })}
                  />
                ))}
              </div>
            </section>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}