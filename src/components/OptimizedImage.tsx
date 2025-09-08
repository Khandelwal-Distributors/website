import { useState, useRef, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  onLoad?: () => void;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  priority = false,
  onLoad 
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority && imgRef.current) {
      // Preload high priority images
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setHasError(true);
    }
  }, [src, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return null;
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Shimmer loading skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted">
          <div className="relative h-full w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent animate-shimmer" />
          </div>
        </div>
      )}
      
      {/* Actual image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={priority ? 'eager' : loading}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default OptimizedImage;