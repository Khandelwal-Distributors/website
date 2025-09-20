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
import { Product, useBrands } from '@/hooks/useProducts';
import { Switch } from '@/components/ui/switch';

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
  project_url?: string;
  rating: number;
  is_featured: boolean;
}

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [videos, setVideos] = useState<VideoContent[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [productSearch, setProductSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [editingVideo, setEditingVideo] = useState<VideoContent | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  
  const { toast } = useToast();
  const { data: brands } = useBrands();

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

  const loadProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setProducts((data || []).map(product => ({
        ...product,
        specifications: product.specifications as Record<string, any>
      })));
    } catch (error) {
      console.error('Error loading products:', error);
      toast({
        title: 'Error',
        description: 'Failed to load products.',
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
        project_url: projectData.project_url || null,
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

  const saveProduct = async (productData: Partial<Product>) => {
    setLoading(true);
    try {
      if (!productData.name || !productData.brand || !productData.model || !productData.price || !productData.tonnage) {
        throw new Error('Name, Brand, Model, Price, and Tonnage are required');
      }

      // Generate slug from name if not provided
      const slug = productData.slug || 
        productData.name.toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');

      const data = {
        name: productData.name,
        model: productData.model,
        series: productData.series || null,
        brand: productData.brand,
        tonnage: Number(productData.tonnage),
        price: Number(productData.price),
        original_price: productData.original_price ? Number(productData.original_price) : null,
        discount_percent: productData.discount_percent ? Number(productData.discount_percent) : 0,
        star_rating: productData.star_rating ? Number(productData.star_rating) : 0,
        review_count: productData.review_count ? Number(productData.review_count) : 0,
        features: productData.features || [],
        description: productData.description || null,
        specifications: productData.specifications || {},
        image_urls: productData.image_urls || [],
        is_available: productData.is_available ?? true,
        is_featured: productData.is_featured ?? false,
        energy_rating: productData.energy_rating || null,
        warranty_years: productData.warranty_years ? Number(productData.warranty_years) : 1,
        slug: slug,
        seo_title: productData.seo_title || null,
        seo_description: productData.seo_description || null,
      };

      if (editingProduct) {
        const { error } = await supabase
          .from('products')
          .update(data)
          .eq('id', editingProduct.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('products')
          .insert(data);
        if (error) throw error;
      }

      await loadProducts();
      setEditingProduct(null);
      toast({
        title: 'Success',
        description: `Product ${editingProduct ? 'updated' : 'created'} successfully.`,
      });
    } catch (error) {
      console.error('Error saving product:', error);
      toast({
        title: 'Error',
        description: 'Failed to save product.',
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

  const deleteProduct = async (id: string) => {
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      await loadProducts();
      toast({
        title: 'Success',
        description: 'Product deleted successfully.',
      });
    } catch (error) {
      console.error('Error deleting product:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete product.',
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
      loadProducts();
    }
  }, [isAuthenticated]);

  // Filter videos based on selected category
  const filteredVideos = categoryFilter === 'all' 
    ? videos 
    : videos.filter(video => video.category === categoryFilter);

  // Filter products based on search
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(productSearch.toLowerCase()) ||
    product.brand.toLowerCase().includes(productSearch.toLowerCase()) ||
    product.model.toLowerCase().includes(productSearch.toLowerCase())
  );

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
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Product Management</h2>
                <div className="flex items-center gap-4">
                  <Input
                    placeholder="Search products..."
                    value={productSearch}
                    onChange={(e) => setProductSearch(e.target.value)}
                    className="w-64"
                  />
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button onClick={() => setEditingProduct(null)}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Product
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>
                          {editingProduct ? 'Edit Product' : 'Add New Product'}
                        </DialogTitle>
                      </DialogHeader>
                      <ProductForm
                        product={editingProduct}
                        onSave={saveProduct}
                        loading={loading}
                        brands={brands || []}
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              <div className="grid gap-4">
                {filteredProducts.map((product) => (
                  <Card key={product.id}>
                    <CardContent className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                        {product.image_urls.length > 0 && (
                          <img
                            src={product.image_urls[0]}
                            alt={product.name}
                            className="w-20 h-14 object-cover rounded"
                          />
                        )}
                        <div>
                          <h3 className="font-medium">{product.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {product.brand} {product.model} | {product.tonnage} Ton
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant={product.is_available ? 'default' : 'secondary'}>
                              {product.is_available ? 'Available' : 'Out of Stock'}
                            </Badge>
                            {product.is_featured && (
                              <Badge variant="outline">Featured</Badge>
                            )}
                            <span className="text-xs text-muted-foreground">
                              ₹{product.price.toLocaleString()}
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
                              onClick={() => setEditingProduct(product)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Edit Product</DialogTitle>
                            </DialogHeader>
                            <ProductForm
                              product={product}
                              onSave={saveProduct}
                              loading={loading}
                              brands={brands || []}
                            />
                          </DialogContent>
                        </Dialog>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteProduct(product.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {filteredProducts.length === 0 && (
                  <div className="text-center py-12">
                    <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No Products Found</h3>
                    <p className="text-muted-foreground">
                      {productSearch ? 'Try adjusting your search terms' : 'Start by adding your first product'}
                    </p>
                  </div>
                )}
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
    project_url: project?.project_url || '',
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
        <Label htmlFor="project_url">Project Details URL (Optional)</Label>
        <Input
          id="project_url"
          value={formData.project_url}
          onChange={(e) => setFormData(prev => ({ ...prev, project_url: e.target.value }))}
          placeholder="https://example.com/project-details or external link"
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

// Product Form Component
function ProductForm({ 
  product, 
  onSave, 
  loading,
  brands 
}: { 
  product: Product | null; 
  onSave: (data: Partial<Product>) => void; 
  loading: boolean;
  brands: any[];
}) {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    model: product?.model || '',
    series: product?.series || '',
    brand: product?.brand || '',
    tonnage: product?.tonnage || 1,
    price: product?.price || 0,
    original_price: product?.original_price || 0,
    discount_percent: product?.discount_percent || 0,
    star_rating: product?.star_rating || 0,
    review_count: product?.review_count || 0,
    features: product?.features?.join(', ') || '',
    description: product?.description || '',
    specifications: product?.specifications ? JSON.stringify(product.specifications, null, 2) : '{}',
    image_urls: product?.image_urls?.join(', ') || '',
    is_available: product?.is_available ?? true,
    is_featured: product?.is_featured ?? false,
    energy_rating: product?.energy_rating || '',
    warranty_years: product?.warranty_years || 1,
    slug: product?.slug || '',
    seo_title: product?.seo_title || '',
    seo_description: product?.seo_description || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = {
        ...formData,
        features: formData.features.split(',').map(f => f.trim()).filter(f => f),
        image_urls: formData.image_urls.split(',').map(url => url.trim()).filter(url => url),
        specifications: formData.specifications ? JSON.parse(formData.specifications) : {},
      };
      onSave(data);
    } catch (error) {
      console.error('Error parsing form data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-h-[70vh] overflow-y-auto">
      {/* Basic Information */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Basic Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Product Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
            />
          </div>
          <div>
            <Label htmlFor="model">Model</Label>
            <Input
              id="model"
              value={formData.model}
              onChange={(e) => setFormData(prev => ({ ...prev, model: e.target.value }))}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="brand">Brand</Label>
            <Select
              value={formData.brand}
              onValueChange={(value) => setFormData(prev => ({ ...prev, brand: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select brand" />
              </SelectTrigger>
              <SelectContent>
                {brands.map((brand) => (
                  <SelectItem key={brand.id} value={brand.name}>
                    {brand.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="series">Series</Label>
            <Input
              id="series"
              value={formData.series}
              onChange={(e) => setFormData(prev => ({ ...prev, series: e.target.value }))}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            rows={3}
          />
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Technical Specifications</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label htmlFor="tonnage">Tonnage</Label>
            <Input
              id="tonnage"
              type="number"
              step="0.1"
              value={formData.tonnage}
              onChange={(e) => setFormData(prev => ({ ...prev, tonnage: Number(e.target.value) }))}
              required
            />
          </div>
          <div>
            <Label htmlFor="energy_rating">Energy Rating</Label>
            <Select
              value={formData.energy_rating}
              onValueChange={(value) => setFormData(prev => ({ ...prev, energy_rating: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Star</SelectItem>
                <SelectItem value="2">2 Star</SelectItem>
                <SelectItem value="3">3 Star</SelectItem>
                <SelectItem value="4">4 Star</SelectItem>
                <SelectItem value="5">5 Star</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="warranty_years">Warranty (Years)</Label>
            <Input
              id="warranty_years"
              type="number"
              value={formData.warranty_years}
              onChange={(e) => setFormData(prev => ({ ...prev, warranty_years: Number(e.target.value) }))}
            />
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Pricing</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label htmlFor="price">Current Price (₹)</Label>
            <Input
              id="price"
              type="number"
              value={formData.price}
              onChange={(e) => setFormData(prev => ({ ...prev, price: Number(e.target.value) }))}
              required
            />
          </div>
          <div>
            <Label htmlFor="original_price">Original Price (₹)</Label>
            <Input
              id="original_price"
              type="number"
              value={formData.original_price}
              onChange={(e) => setFormData(prev => ({ ...prev, original_price: Number(e.target.value) }))}
            />
          </div>
          <div>
            <Label htmlFor="discount_percent">Discount (%)</Label>
            <Input
              id="discount_percent"
              type="number"
              value={formData.discount_percent}
              onChange={(e) => setFormData(prev => ({ ...prev, discount_percent: Number(e.target.value) }))}
            />
          </div>
        </div>
      </div>

      {/* Features and Media */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Features & Media</h3>
        <div>
          <Label htmlFor="features">Features (comma-separated)</Label>
          <Textarea
            id="features"
            value={formData.features}
            onChange={(e) => setFormData(prev => ({ ...prev, features: e.target.value }))}
            placeholder="Energy efficient, Silent operation, Remote control..."
            rows={3}
          />
        </div>
        <div>
          <Label htmlFor="image_urls">Image URLs (comma-separated)</Label>
          <Textarea
            id="image_urls"
            value={formData.image_urls}
            onChange={(e) => setFormData(prev => ({ ...prev, image_urls: e.target.value }))}
            placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg..."
            rows={2}
          />
        </div>
      </div>

      {/* SEO & Status */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">SEO & Status</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="slug">URL Slug</Label>
            <Input
              id="slug"
              value={formData.slug}
              onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
              placeholder="Auto-generated from name if empty"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="star_rating">Rating (1-5)</Label>
              <Input
                id="star_rating"
                type="number"
                min="0"
                max="5"
                step="0.1"
                value={formData.star_rating}
                onChange={(e) => setFormData(prev => ({ ...prev, star_rating: Number(e.target.value) }))}
              />
            </div>
            <div>
              <Label htmlFor="review_count">Reviews Count</Label>
              <Input
                id="review_count"
                type="number"
                value={formData.review_count}
                onChange={(e) => setFormData(prev => ({ ...prev, review_count: Number(e.target.value) }))}
              />
            </div>
          </div>
        </div>
        
        <div>
          <Label htmlFor="seo_title">SEO Title</Label>
          <Input
            id="seo_title"
            value={formData.seo_title}
            onChange={(e) => setFormData(prev => ({ ...prev, seo_title: e.target.value }))}
            placeholder="Custom title for search engines"
          />
        </div>
        
        <div>
          <Label htmlFor="seo_description">SEO Description</Label>
          <Textarea
            id="seo_description"
            value={formData.seo_description}
            onChange={(e) => setFormData(prev => ({ ...prev, seo_description: e.target.value }))}
            placeholder="Description for search engines (max 160 chars)"
            rows={2}
          />
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center space-x-2">
            <Switch
              id="is_available"
              checked={formData.is_available}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_available: checked }))}
            />
            <Label htmlFor="is_available">Available for Purchase</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="is_featured"
              checked={formData.is_featured}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_featured: checked }))}
            />
            <Label htmlFor="is_featured">Featured Product</Label>
          </div>
        </div>
      </div>

      {/* Advanced Specifications */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Advanced Specifications (JSON)</h3>
        <div>
          <Label htmlFor="specifications">Technical Specifications</Label>
          <Textarea
            id="specifications"
            value={formData.specifications}
            onChange={(e) => setFormData(prev => ({ ...prev, specifications: e.target.value }))}
            placeholder='{"cooling_capacity": "1.5 TR", "power_consumption": "1200W", "refrigerant": "R32"}'
            rows={4}
            className="font-mono text-sm"
          />
        </div>
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        <Save className="h-4 w-4 mr-2" />
        {loading ? 'Saving...' : 'Save Product'}
      </Button>
    </form>
  );
}