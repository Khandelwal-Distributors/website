import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Phone, ShoppingCart, Zap, Shield, Wind } from 'lucide-react';
import type { Product } from '@/hooks/useProducts';
import OptimizedImage from '@/components/OptimizedImage';

interface ProductCardProps {
  product: Product;
  onBuyNow?: (product: Product) => void;
}

export default function ProductCard({ product, onBuyNow }: ProductCardProps) {
  const handleCallNow = () => {
    window.open('tel:+919876543210', '_self');
  };

  const handleBuyNow = () => {
    onBuyNow?.(product);
  };

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
        className={`h-4 w-4 ${
          i < Math.floor(rating) 
            ? 'fill-yellow-400 text-yellow-400' 
            : i < rating 
            ? 'fill-yellow-400/50 text-yellow-400' 
            : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <Card className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="relative">
        {/* Product Image */}
        <Link to={`/product/${product.slug}`}>
          <div className="aspect-[4/3] overflow-hidden bg-muted">
            <OptimizedImage
              src={product.image_urls[0] || '/api/placeholder/400/300'}
              alt={product.name}
              className="w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>
        
        {/* Discount Badge */}
        {product.discount_percent > 0 && (
          <Badge className="absolute top-3 left-3 bg-red-500 text-white font-semibold">
            -{product.discount_percent}% OFF
          </Badge>
        )}
        
        {/* Featured Badge */}
        {product.is_featured && (
          <Badge className="absolute top-3 right-3 bg-accent-warm text-accent-warm-foreground">
            Featured
          </Badge>
        )}
      </div>

      <CardContent className="p-4 space-y-4">
        {/* Brand & Rating */}
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="font-medium">
            {product.brand}
          </Badge>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {renderStars(product.star_rating)}
            </div>
            <span className="text-sm text-muted-foreground">
              ({product.review_count})
            </span>
          </div>
        </div>

        {/* Product Name */}
        <Link 
          to={`/product/${product.slug}`}
          className="block hover:text-primary transition-colors"
        >
          <h3 className="font-semibold text-lg leading-tight line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Model & Series */}
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">
            Model: <span className="font-medium text-foreground">{product.model}</span>
          </p>
          {product.series && (
            <p className="text-sm text-muted-foreground">
              Series: <span className="font-medium text-foreground">{product.series}</span>
            </p>
          )}
        </div>

        {/* Key Specifications */}
        <div className="grid grid-cols-3 gap-2 py-2">
          <div className="text-center">
            <Wind className="h-5 w-5 mx-auto mb-1 text-primary" />
            <p className="text-xs font-semibold">{product.tonnage} Ton</p>
          </div>
          <div className="text-center">
            <Zap className="h-5 w-5 mx-auto mb-1 text-green-600" />
            <p className="text-xs font-semibold">{product.energy_rating}</p>
          </div>
          <div className="text-center">
            <Shield className="h-5 w-5 mx-auto mb-1 text-blue-600" />
            <p className="text-xs font-semibold">{product.warranty_years}Y Warranty</p>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2">
          <p className="text-sm font-medium">Key Features:</p>
          <div className="flex flex-wrap gap-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
            {product.features.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{product.features.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Price */}
        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            {product.original_price && product.original_price > product.price && (
              <span className="text-lg line-through text-muted-foreground">
                {formatPrice(product.original_price)}
              </span>
            )}
          </div>
          <p className="text-sm text-green-600 font-medium">
            Save {formatPrice((product.original_price || product.price) - product.price)}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleCallNow}
            className="flex items-center gap-2"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </Button>
          <Button 
            variant="cta"
            size="sm"
            onClick={handleBuyNow}
            className="flex items-center gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            Buy Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}