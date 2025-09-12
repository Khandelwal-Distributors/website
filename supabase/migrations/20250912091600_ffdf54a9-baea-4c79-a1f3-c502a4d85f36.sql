-- Create video_content table for managing YouTube videos
CREATE TABLE public.video_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  youtube_url TEXT NOT NULL,
  youtube_id TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL DEFAULT 'general',
  is_active BOOLEAN NOT NULL DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.video_content ENABLE ROW LEVEL SECURITY;

-- Create policies for video_content
CREATE POLICY "Videos are viewable by everyone" 
ON public.video_content 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Only authenticated users can manage videos" 
ON public.video_content 
FOR ALL 
USING (auth.uid() IS NOT NULL);

-- Create projects table for project management
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  project_type TEXT NOT NULL,
  capacity TEXT,
  completion_year INTEGER,
  client TEXT,
  location TEXT,
  features TEXT[],
  image_url TEXT,
  rating NUMERIC(2,1) DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for projects
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Create policies for projects
CREATE POLICY "Projects are viewable by everyone" 
ON public.projects 
FOR SELECT 
USING (true);

CREATE POLICY "Only authenticated users can manage projects" 
ON public.projects 
FOR ALL 
USING (auth.uid() IS NOT NULL);

-- Add triggers for updated_at
CREATE TRIGGER update_video_content_updated_at
BEFORE UPDATE ON public.video_content
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_projects_updated_at
BEFORE UPDATE ON public.projects
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();