import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface VideoContent {
  id: string;
  title: string;
  youtube_url: string;
  youtube_id: string;
  description?: string;
  category: string;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export const useVideos = (category?: string) => {
  return useQuery({
    queryKey: ['videos', category],
    queryFn: async () => {
      let query = supabase
        .from('video_content')
        .select('*')
        .eq('is_active', true)
        .order('sort_order', { ascending: true });

      if (category) {
        query = query.eq('category', category);
      }

      const { data, error } = await query;
      
      if (error) {
        throw error;
      }
      
      return data as VideoContent[];
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        throw error;
      }
      
      return data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};