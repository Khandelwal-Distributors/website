import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Trash2, Edit, Plus, Video, Package, FolderOpen, Save } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const ADMIN_CODE = 'HVAC2024';

interface VideoContent {
  id: string;
  title: string;
  youtube_url: string;
  youtube_id: string;
  description?: string;
  category: string;
  is_active: boolean;
  sort_order: number;
}

interface Project {
  id: string;
  title: string;
  description?: string;
  project_type: string;
  capacity?: string;
  completion_year?: number;
  client?: string;
  location?: string;
  features?: string[];
  image_url?: string;
  rating: number;
  is_featured: boolean;
}

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [videos, setVideos] = useState<VideoContent[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [loading, setLoading] = useState(false);
  const [editingVideo, setEditingVideo] = useState<VideoContent | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessCode === ADMIN_CODE) {
      setIsAuthenticated(true);
      localStorage.setItem('admin_authenticated', 'true');
      toast({
        title: 'Access granted',
        description: 'Welcome to the admin panel!',
      });
    } else {
      toast({
        title: 'Access denied',
        description: 'Invalid access code.',
        variant: 'destructive',
      });
    }
  };

  const loadVideos = async () => {
    try {
      const { data, error } = await supabase
        .from('video_content')
        .select('*')
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      setVideos(data || []);
    } catch (error) {
      console.error('Error loading videos:', error);
      toast({
        title: 'Error',
        description: 'Failed to load videos.',
        variant: 'destructive',
      });
    }
  };

  const loadProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error loading projects:', error);
      toast({
        title: 'Error',
        description: 'Failed to load projects.',
        variant: 'destructive',
      });
    }
  };

  const extractYouTubeId = (url: string): string => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : '';
  };

  const saveVideo = async (videoData: Partial<VideoContent>) => {
    setLoading(true);
    try {
      const youtubeId = extractYouTubeId(videoData.youtube_url || '');
      if (!youtubeId) {
        throw new Error('Invalid YouTube URL');
      }

      if (!videoData.title || !videoData.youtube_url) {
        throw new Error('Title and YouTube URL are required');
      }

      const data = {
        title: videoData.title,
        youtube_url: videoData.youtube_url,
        youtube_id: youtubeId,
        description: videoData.description || null,
        category: videoData.category || 'general',
        is_active: videoData.is_active ?? true,
        sort_order: videoData.sort_order || 0,
      };

      if (editingVideo) {
        const { error } = await supabase
          .from('video_content')
          .update(data)
          .eq('id', editingVideo.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('video_content')
          .insert(data);
        if (error) throw error;
      }

      await loadVideos();
      setEditingVideo(null);
      toast({
        title: 'Success',
        description: `Video ${editingVideo ? 'updated' : 'created'} successfully.`,
      });
    } catch (error) {
      console.error('Error saving video:', error);
      toast({
        title: 'Error',
        description: 'Failed to save video.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const saveProject = async (projectData: Partial<Project>) => {
    setLoading(true);
    try {
      if (!projectData.title || !projectData.project_type) {
        throw new Error('Title and Project Type are required');
      }

      const data = {
        title: projectData.title,
        project_type: projectData.project_type,
        description: projectData.description || null,
        capacity: projectData.capacity || null,
        completion_year: projectData.completion_year || null,
        client: projectData.client || null,
        location: projectData.location || null,
        features: projectData.features || [],
        image_url: projectData.image_url || null,
        rating: projectData.rating || 0,
        is_featured: projectData.is_featured || false,
      };

      if (editingProject) {
        const { error } = await supabase
          .from('projects')
          .update(data)
          .eq('id', editingProject.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('projects')
          .insert(data);
        if (error) throw error;
      }

      await loadProjects();
      setEditingProject(null);
      toast({
        title: 'Success',
        description: `Project ${editingProject ? 'updated' : 'created'} successfully.`,
      });
    } catch (error) {
      console.error('Error saving project:', error);
      toast({
        title: 'Error',
        description: 'Failed to save project.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteVideo = async (id: string) => {
    try {
      const { error } = await supabase
        .from('video_content')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      await loadVideos();
      toast({
        title: 'Success',
        description: 'Video deleted successfully.',
      });
    } catch (error) {
      console.error('Error deleting video:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete video.',
        variant: 'destructive',
      });
    }
  };

  const deleteProject = async (id: string) => {
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      await loadProjects();
      toast({
        title: 'Success',
        description: 'Project deleted successfully.',
      });
    } catch (error) {
      console.error('Error deleting project:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete project.',
        variant: 'destructive',
      });
    }
  };

  useEffect(() => {
    const savedAuth = localStorage.getItem('admin_authenticated');
    if (savedAuth) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadVideos();
      loadProjects();
    }
  }, [isAuthenticated]);

  // Filter videos based on selected category
  const filteredVideos = categoryFilter === 'all' 
    ? videos 
    : videos.filter(video => video.category === categoryFilter);

  if (!isAuthenticated) {
    return (
      <>
        <Helmet>
          <title>Admin Access - HVAC Admin Panel</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/20">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-center">Admin Access</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="accessCode">Access Code</Label>
                  <Input
                    id="accessCode"
                    type="password"
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                    placeholder="Enter admin access code"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Access Admin Panel
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>HVAC Admin Panel - Content Management</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="border-b bg-card">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">HVAC Admin Panel</h1>
              <Button 
                variant="outline" 
                onClick={() => {
                  setIsAuthenticated(false);
                  localStorage.removeItem('admin_authenticated');
                }}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="videos" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="videos" className="flex items-center gap-2">
                <Video className="h-4 w-4" />
                Videos
              </TabsTrigger>
              <TabsTrigger value="projects" className="flex items-center gap-2">
                <FolderOpen className="h-4 w-4" />
                Projects
              </TabsTrigger>
              <TabsTrigger value="products" className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                Products
              </TabsTrigger>
            </TabsList>

            <TabsContent value="videos" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Video Management</h2>
                <div className="flex items-center gap-4">
                  <Select
                    value={categoryFilter}
                    onValueChange={setCategoryFilter}
                  >
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Filter by category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="homepage">Homepage</SelectItem>
                      <SelectItem value="products">Products (General)</SelectItem>
                      <SelectItem value="shop">Shop</SelectItem>
                      <SelectItem value="product-categories">Product Categories</SelectItem>
                      <SelectItem value="inverter-split-ac">Inverter Split AC</SelectItem>
                      <SelectItem value="non-inverter-split-ac">Non-Inverter Split AC</SelectItem>
                      <SelectItem value="window-ac">Window AC</SelectItem>
                      <SelectItem value="cassette-ac">Cassette AC</SelectItem>
                      <SelectItem value="ductable-ac">Ductable AC</SelectItem>
                      <SelectItem value="floor-standing-ac">Floor Standing AC</SelectItem>
                      <SelectItem value="portable-ac">Portable AC</SelectItem>
                      <SelectItem value="vrv-system">VRV System</SelectItem>
                      <SelectItem value="chiller-system">Chiller System</SelectItem>
                      <SelectItem value="ahu-system">AHU System</SelectItem>
                      <SelectItem value="heat-pump">Heat Pump</SelectItem>
                      <SelectItem value="ventilation-hrv">Ventilation HRV</SelectItem>
                      <SelectItem value="cold-room">Cold Room</SelectItem>
                      <SelectItem value="deep-freezers">Deep Freezers</SelectItem>
                      <SelectItem value="water-cooler">Water Cooler</SelectItem>
                      <SelectItem value="air-purifier">Air Purifier</SelectItem>
                      <SelectItem value="alkaline-ro">Alkaline RO</SelectItem>
                      <SelectItem value="solar-water-heater">Solar Water Heater</SelectItem>
                    </SelectContent>
                  </Select>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button onClick={() => setEditingVideo(null)}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Video
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>
                          {editingVideo ? 'Edit Video' : 'Add New Video'}
                        </DialogTitle>
                      </DialogHeader>
                      <VideoForm
                        video={editingVideo}
                        onSave={saveVideo}
                        loading={loading}
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              <div className="grid gap-4">
                {filteredVideos.map((video) => (
                  <Card key={video.id}>
                    <CardContent className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={`https://img.youtube.com/vi/${video.youtube_id}/mqdefault.jpg`}
                          alt={video.title}
                          className="w-20 h-14 object-cover rounded"
                        />
                        <div>
                          <h3 className="font-medium">{video.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            Category: {video.category}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant={video.is_active ? 'default' : 'secondary'}>
                              {video.is_active ? 'Active' : 'Inactive'}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              Order: {video.sort_order}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setEditingVideo(video)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Edit Video</DialogTitle>
                            </DialogHeader>
                            <VideoForm
                              video={video}
                              onSave={saveVideo}
                              loading={loading}
                            />
                          </DialogContent>
                        </Dialog>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteVideo(video.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Project Management</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button onClick={() => setEditingProject(null)}>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Project
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle>
                        {editingProject ? 'Edit Project' : 'Add New Project'}
                      </DialogTitle>
                    </DialogHeader>
                    <ProjectForm
                      project={editingProject}
                      onSave={saveProject}
                      loading={loading}
                    />
                  </DialogContent>
                </Dialog>
              </div>

              <div className="grid gap-4">
                {projects.map((project) => (
                  <Card key={project.id}>
                    <CardContent className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                        {project.image_url && (
                          <img
                            src={project.image_url}
                            alt={project.title}
                            className="w-20 h-14 object-cover rounded"
                          />
                        )}
                        <div>
                          <h3 className="font-medium">{project.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {project.project_type} | {project.client}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant={project.is_featured ? 'default' : 'secondary'}>
                              {project.is_featured ? 'Featured' : 'Regular'}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              Rating: {project.rating}/5
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setEditingProject(project)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <DialogHeader>
                              <DialogTitle>Edit Project</DialogTitle>
                            </DialogHeader>
                            <ProjectForm
                              project={project}
                              onSave={saveProject}
                              loading={loading}
                            />
                          </DialogContent>
                        </Dialog>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteProject(project.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="products" className="space-y-6">
              <div className="text-center py-12">
                <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Product Management</h3>
                <p className="text-muted-foreground">
                  Product management interface coming soon. Use the database directly for now.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}

// Video Form Component
function VideoForm({ 
  video, 
  onSave, 
  loading 
}: { 
  video: VideoContent | null; 
  onSave: (data: Partial<VideoContent>) => void; 
  loading: boolean; 
}) {
  const [formData, setFormData] = useState({
    title: video?.title || '',
    youtube_url: video?.youtube_url || '',
    description: video?.description || '',
    category: video?.category || 'homepage',
    is_active: video?.is_active ?? true,
    sort_order: video?.sort_order || 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
          required
        />
      </div>

      <div>
        <Label htmlFor="youtube_url">YouTube URL</Label>
        <Input
          id="youtube_url"
          value={formData.youtube_url}
          onChange={(e) => setFormData(prev => ({ ...prev, youtube_url: e.target.value }))}
          placeholder="https://www.youtube.com/watch?v=..."
          required
        />
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
        <Label htmlFor="category">Category</Label>
        <Select
          value={formData.category}
          onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="homepage">Homepage</SelectItem>
            <SelectItem value="products">Products (General)</SelectItem>
            <SelectItem value="shop">Shop</SelectItem>
            <SelectItem value="product-categories">Product Categories</SelectItem>
            {/* Product Specific Categories */}
            <SelectItem value="inverter-split-ac">Inverter Split AC</SelectItem>
            <SelectItem value="non-inverter-split-ac">Non-Inverter Split AC</SelectItem>
            <SelectItem value="window-ac">Window AC</SelectItem>
            <SelectItem value="cassette-ac">Cassette AC</SelectItem>
            <SelectItem value="ductable-ac">Ductable AC</SelectItem>
            <SelectItem value="floor-standing-ac">Floor Standing AC</SelectItem>
            <SelectItem value="portable-ac">Portable AC</SelectItem>
            <SelectItem value="vrv-system">VRV System</SelectItem>
            <SelectItem value="chiller-system">Chiller System</SelectItem>
            <SelectItem value="ahu-system">AHU System</SelectItem>
            <SelectItem value="heat-pump">Heat Pump</SelectItem>
            <SelectItem value="ventilation-hrv">Ventilation HRV</SelectItem>
            <SelectItem value="cold-room">Cold Room</SelectItem>
            <SelectItem value="deep-freezers">Deep Freezers</SelectItem>
            <SelectItem value="water-cooler">Water Cooler</SelectItem>
            <SelectItem value="air-purifier">Air Purifier</SelectItem>
            <SelectItem value="alkaline-ro">Alkaline RO</SelectItem>
            <SelectItem value="solar-water-heater">Solar Water Heater</SelectItem>
          </SelectContent>
        </Select>
        </div>

        <div>
          <Label htmlFor="sort_order">Sort Order</Label>
          <Input
            id="sort_order"
            type="number"
            value={formData.sort_order}
            onChange={(e) => setFormData(prev => ({ ...prev, sort_order: Number(e.target.value) }))}
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="is_active"
          checked={formData.is_active}
          onChange={(e) => setFormData(prev => ({ ...prev, is_active: e.target.checked }))}
        />
        <Label htmlFor="is_active">Active</Label>
      </div>

      <Button type="submit" disabled={loading}>
        <Save className="h-4 w-4 mr-2" />
        {loading ? 'Saving...' : 'Save Video'}
      </Button>
    </form>
  );
}

// Project Form Component
function ProjectForm({ 
  project, 
  onSave, 
  loading 
}: { 
  project: Project | null; 
  onSave: (data: Partial<Project>) => void; 
  loading: boolean; 
}) {
  const [formData, setFormData] = useState({
    title: project?.title || '',
    description: project?.description || '',
    project_type: project?.project_type || '',
    capacity: project?.capacity || '',
    completion_year: project?.completion_year || new Date().getFullYear(),
    client: project?.client || '',
    location: project?.location || '',
    features: project?.features?.join(', ') || '',
    image_url: project?.image_url || '',
    rating: project?.rating || 5,
    is_featured: project?.is_featured || false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      ...formData,
      features: formData.features.split(',').map(f => f.trim()).filter(f => f),
    };
    onSave(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            required
          />
        </div>

        <div>
          <Label htmlFor="project_type">Project Type</Label>
          <Input
            id="project_type"
            value={formData.project_type}
            onChange={(e) => setFormData(prev => ({ ...prev, project_type: e.target.value }))}
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="client">Client</Label>
          <Input
            id="client"
            value={formData.client}
            onChange={(e) => setFormData(prev => ({ ...prev, client: e.target.value }))}
          />
        </div>

        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={formData.location}
            onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="capacity">Capacity</Label>
          <Input
            id="capacity"
            value={formData.capacity}
            onChange={(e) => setFormData(prev => ({ ...prev, capacity: e.target.value }))}
          />
        </div>

        <div>
          <Label htmlFor="completion_year">Completion Year</Label>
          <Input
            id="completion_year"
            type="number"
            value={formData.completion_year}
            onChange={(e) => setFormData(prev => ({ ...prev, completion_year: Number(e.target.value) }))}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="image_url">Image URL</Label>
        <Input
          id="image_url"
          value={formData.image_url}
          onChange={(e) => setFormData(prev => ({ ...prev, image_url: e.target.value }))}
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div>
        <Label htmlFor="features">Features (comma-separated)</Label>
        <Textarea
          id="features"
          value={formData.features}
          onChange={(e) => setFormData(prev => ({ ...prev, features: e.target.value }))}
          placeholder="Energy efficient, Centralized control, Smart monitoring"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="rating">Rating (1-5)</Label>
          <Input
            id="rating"
            type="number"
            min="1"
            max="5"
            step="0.1"
            value={formData.rating}
            onChange={(e) => setFormData(prev => ({ ...prev, rating: Number(e.target.value) }))}
          />
        </div>

        <div className="pt-6">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="is_featured"
              checked={formData.is_featured}
              onChange={(e) => setFormData(prev => ({ ...prev, is_featured: e.target.checked }))}
            />
            <Label htmlFor="is_featured">Featured Project</Label>
          </div>
        </div>
      </div>

      <Button type="submit" disabled={loading}>
        <Save className="h-4 w-4 mr-2" />
        {loading ? 'Saving...' : 'Save Project'}
      </Button>
    </form>
  );
}