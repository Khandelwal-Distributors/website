import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { Blog } from '@/hooks/useBlogs';

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  // Format date
  const formattedDate = new Date(blog.date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Generate concise, descriptive alt text based on blog category
  const getImageAlt = () => {
    const categoryAlts: Record<string, string> = {
      'Commercial HVAC': `${blog.category} system installation and components`,
      'Water Heating Solutions': 'Energy-efficient water heating system',
      'Commercial Refrigeration': 'Commercial cold storage facility',
      'Healthcare Infrastructure': 'Modular operation theatre setup',
      'Water Purification': 'Alkaline water purification system',
      'Ventilation Systems': 'HVAC ventilation and air handling equipment'
    };
    return categoryAlts[blog.category] || `${blog.category} solution`;
  };

  return (
    <Card className="group overflow-hidden hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 h-full flex flex-col">
      {/* Blog Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={blog.image}
          alt={getImageAlt()}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary text-primary-foreground shadow-lg">
            {blog.category}
          </Badge>
        </div>
      </div>

      {/* Blog Content */}
      <CardHeader className="flex-grow">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>{blog.readTime}</span>
          </div>
        </div>

        <Link to={`/blogs/${blog.slug}`}>
          <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {blog.title}
          </h3>
        </Link>

        <p className="text-muted-foreground line-clamp-3">
          {blog.excerpt}
        </p>
      </CardHeader>

      {/* Blog Footer */}
      <CardFooter className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-wrap gap-2">
            {blog.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <Link to={`/blogs/${blog.slug}`}>
            <Button variant="ghost" size="sm" className="group/btn">
              Read Article
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
