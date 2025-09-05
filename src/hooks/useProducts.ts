import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Product {
  id: string;
  name: string;
  model: string;
  series: string | null;
  brand: string;
  tonnage: number;
  price: number;
  original_price: number | null;
  discount_percent: number;
  star_rating: number;
  review_count: number;
  features: string[];
  description: string | null;
  specifications: Record<string, any>;
  image_urls: string[];
  is_available: boolean;
  is_featured: boolean;
  energy_rating: string | null;
  warranty_years: number;
  slug: string;
  seo_title: string | null;
  seo_description: string | null;
  created_at: string;
  updated_at: string;
}

export interface Brand {
  id: string;
  name: string;
  logo_url: string | null;
  description: string | null;
  is_active: boolean;
  sort_order: number;
}

export interface ProductFilters {
  search?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  tonnage?: number[];
  energyRating?: string[];
  sortBy?: 'price_asc' | 'price_desc' | 'rating' | 'newest';
}

export function useProducts(filters: ProductFilters = {}) {
  return useQuery({
    queryKey: ['products', filters],
    queryFn: async () => {
      let query = supabase
        .from('products')
        .select('*')
        .eq('is_available', true);

      // Apply filters
      if (filters.search) {
        query = query.or(`name.ilike.%${filters.search}%,brand.ilike.%${filters.search}%,model.ilike.%${filters.search}%`);
      }

      if (filters.brand) {
        query = query.eq('brand', filters.brand);
      }

      if (filters.minPrice !== undefined) {
        query = query.gte('price', filters.minPrice);
      }

      if (filters.maxPrice !== undefined) {
        query = query.lte('price', filters.maxPrice);
      }

      if (filters.tonnage && filters.tonnage.length > 0) {
        query = query.in('tonnage', filters.tonnage);
      }

      if (filters.energyRating && filters.energyRating.length > 0) {
        query = query.in('energy_rating', filters.energyRating);
      }

      // Apply sorting
      switch (filters.sortBy) {
        case 'price_asc':
          query = query.order('price', { ascending: true });
          break;
        case 'price_desc':
          query = query.order('price', { ascending: false });
          break;
        case 'rating':
          query = query.order('star_rating', { ascending: false });
          break;
        case 'newest':
          query = query.order('created_at', { ascending: false });
          break;
        default:
          query = query.order('is_featured', { ascending: false }).order('star_rating', { ascending: false });
      }

      const { data, error } = await query;

      if (error) throw error;
      return data as Product[];
    },
  });
}

export function useProduct(slug: string) {
  return useQuery({
    queryKey: ['product', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('slug', slug)
        .eq('is_available', true)
        .single();

      if (error) throw error;
      return data as Product;
    },
    enabled: !!slug,
  });
}

export function useRecommendedProducts(excludeId: string, brand?: string) {
  return useQuery({
    queryKey: ['recommended-products', excludeId, brand],
    queryFn: async () => {
      let query = supabase
        .from('products')
        .select('*')
        .eq('is_available', true)
        .neq('id', excludeId)
        .order('star_rating', { ascending: false })
        .limit(4);

      if (brand) {
        query = query.eq('brand', brand);
      }

      const { data, error } = await query;

      if (error) throw error;
      return data as Product[];
    },
    enabled: !!excludeId,
  });
}

export function useBrands() {
  return useQuery({
    queryKey: ['brands'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('brands')
        .select('*')
        .eq('is_active', true)
        .order('sort_order');

      if (error) throw error;
      return data as Brand[];
    },
  });
}