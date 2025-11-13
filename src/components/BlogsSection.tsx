import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';
import { Button } from './ui/button';
import { getFeaturedBlogs } from '@/hooks/useBlogs';
import { BookOpen, ArrowRight } from 'lucide-react';

export default function BlogsSection() {
  const featuredBlogs = getFeaturedBlogs();

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Expert HVAC Insights
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends, technologies, and best practices in commercial HVAC and refrigeration
          </p>
        </div>

        {/* Featured Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/blogs">
            <Button size="lg" className="group">
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
