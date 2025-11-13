import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { useBlogs } from '@/hooks/useBlogs';
import { Book, TrendingUp } from 'lucide-react';

export default function Blogs() {
  const { data: blogs, isLoading } = useBlogs();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <p className="text-muted-foreground">Loading blogs...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>HVAC Blog & Insights | Khandelwal Distributors Bareilly</title>
        <meta 
          name="description" 
          content="Expert insights on VRV systems, heat pumps, cold rooms, and modular OTs. Learn about energy-efficient HVAC solutions for Indian commercial and residential applications." 
        />
        <meta 
          name="keywords" 
          content="HVAC blog, VRV systems India, heat pump water heater, cold room installation, modular operation theatre, energy efficiency, commercial HVAC, Bareilly" 
        />
        <link rel="canonical" href={`${window.location.origin}/blogs`} />

        {/* Open Graph */}
        <meta property="og:title" content="HVAC Blog & Insights | Khandelwal Distributors" />
        <meta property="og:description" content="Expert insights on VRV systems, heat pumps, cold rooms, and modular OTs for Indian market." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${window.location.origin}/blogs`} />
        <meta property="og:image" content={`${window.location.origin}/lovable-uploads/253ff299-0035-4525-90a9-5b15b36d4e69.png`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HVAC Blog & Insights | Khandelwal Distributors" />
        <meta name="twitter:description" content="Expert insights on HVAC solutions for Indian market." />
        <meta name="twitter:image" content={`${window.location.origin}/lovable-uploads/253ff299-0035-4525-90a9-5b15b36d4e69.png`} />

        {/* Structured Data for Blog List */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Khandelwal Distributors HVAC Blog",
            "description": "Expert insights on HVAC solutions, energy efficiency, and commercial refrigeration",
            "url": `${window.location.origin}/blogs`,
            "publisher": {
              "@type": "Organization",
              "name": "Khandelwal Distributors",
              "logo": {
                "@type": "ImageObject",
                "url": `${window.location.origin}/lovable-uploads/253ff299-0035-4525-90a9-5b15b36d4e69.png`
              }
            },
            "blogPost": blogs.map(blog => ({
              "@type": "BlogPosting",
              "headline": blog.title,
              "description": blog.excerpt,
              "image": blog.image,
              "datePublished": blog.date,
              "author": {
                "@type": "Organization",
                "name": blog.author
              },
              "url": `${window.location.origin}/blogs/${blog.slug}`
            }))
          })}
        </script>

        {/* Structured Data for Breadcrumb */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": window.location.origin
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blogs",
                "item": `${window.location.origin}/blogs`
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-primary-light text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Book className="h-8 w-8 text-white" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  HVAC Insights & Expertise
                </h1>
              </div>
              <p className="text-xl text-white/90">
                Expert articles on commercial HVAC, energy efficiency, and advanced cooling solutions for the Indian market
              </p>
              <div className="flex items-center justify-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-white/80">
                  <TrendingUp className="h-5 w-5 text-white" />
                  <span className="text-sm font-medium">{blogs.length} Articles</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Book className="h-5 w-5 text-white" />
                  <span className="text-sm font-medium">Expert Insights</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blogs Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            {blogs.length === 0 && (
              <div className="text-center py-20">
                <Book className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">No Blogs Yet</h3>
                <p className="text-muted-foreground">Check back soon for expert HVAC insights</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-primary-light py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Expert HVAC Consultation?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Our team in Bareilly is ready to help you choose the right solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919429693410"
                className="inline-flex items-center justify-center bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-white/90 transition-colors"
              >
                Call: +91 9429693410
              </a>
              <a
                href="https://wa.me/919084417884"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-md font-semibold hover:bg-white/20 transition-colors border border-white/30"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
