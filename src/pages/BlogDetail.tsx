import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getBlogBySlug, useBlogs } from '@/hooks/useBlogs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useToast } from '@/hooks/use-toast';

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { data: allBlogs } = useBlogs();
  
  const blog = slug ? getBlogBySlug(slug) : undefined;
  
  // Get related blogs (other blogs in same category)
  const relatedBlogs = allBlogs
    .filter(b => b.category === blog?.category && b.id !== blog?.id)
    .slice(0, 3);

  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/blogs')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blogs
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const formattedDate = new Date(blog.date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const shareUrl = window.location.href;
  const shareTitle = blog.title;

  // FAQ data for featured blogs
  const getFAQSchema = () => {
    const faqs: Record<string, Array<{question: string, answer: string}>> = {
      'vrv-systems-india-energy-efficiency': [
        {
          question: 'What is a VRV system and how does it work?',
          answer: 'VRV (Variable Refrigerant Volume) technology allows a single outdoor unit to efficiently serve multiple indoor units with individual temperature control. Unlike traditional systems that operate at fixed speeds, VRV systems intelligently adjust refrigerant flow based on real-time cooling demands.'
        },
        {
          question: 'How much can I save with a VRV system in India?',
          answer: 'VRV systems deliver 30-40% energy savings compared to traditional AC systems. A typical 10,000 sq ft office in Delhi can save ₹3-5 lakhs annually on electricity bills. Over 15 years, total savings can reach ₹50-75 lakhs.'
        },
        {
          question: 'Which brands are best for VRV systems in India?',
          answer: 'Top VRV brands in India include Daikin (most energy-efficient with widest range), Mitsubishi Heavy Industries (excellent reliability, anti-corrosion for coastal areas), and Carrier (strong commercial presence with robust designs).'
        },
        {
          question: 'What is the typical payback period for VRV systems?',
          answer: 'The payback period for VRV systems in India ranges from 3-5 years for commercial projects and 5-7 years for residential projects, depending on usage patterns and electricity costs.'
        }
      ],
      'heat-pumps-india-comprehensive-guide': [
        {
          question: 'How do heat pumps work in Indian climate?',
          answer: 'Heat pumps extract heat from ambient air or ground and transfer it for heating water or spaces. They are 3-4 times more efficient than traditional electric heaters and work effectively in most Indian climates, especially in northern and central regions.'
        },
        {
          question: 'Are heat pumps cost-effective in India?',
          answer: 'Yes, heat pumps reduce water heating costs by 60-70% compared to electric geysers. A typical household can save ₹15,000-25,000 annually on water heating bills. The payback period is typically 2-4 years.'
        },
        {
          question: 'What capacity heat pump do I need?',
          answer: 'For residential use: 2-3 people need 100-150 liters, 4-5 people need 200-300 liters, and 6+ people need 300-500 liters. For commercial use, calculate based on occupancy and hot water demand patterns.'
        }
      ],
      'cold-rooms-india-complete-guide': [
        {
          question: 'What temperature ranges can cold rooms maintain?',
          answer: 'Cold rooms can maintain various temperature ranges: Chiller rooms (0°C to 10°C) for vegetables and pharmaceuticals, Freezer rooms (-18°C to -25°C) for frozen foods, and Deep freeze rooms (-40°C to -60°C) for specialty applications.'
        },
        {
          question: 'How much does a cold room cost in India?',
          answer: 'Cold room costs in India vary by size and type: Small (10x10 ft) costs ₹3-5 lakhs, Medium (20x15 ft) costs ₹8-15 lakhs, and Large (30x20 ft) costs ₹20-40 lakhs, including installation.'
        },
        {
          question: 'What are the running costs of a cold room?',
          answer: 'Running costs depend on size, insulation, and usage. A 100 sq ft cold room typically consumes 8-12 units of electricity per day, costing approximately ₹6,000-10,000 per month at standard commercial rates.'
        }
      ],
      'modular-operating-theatre-ot-guide': [
        {
          question: 'What is a modular operating theatre?',
          answer: 'A modular operating theatre (OT) is a pre-fabricated, controlled environment designed for surgical procedures. It features wall panels, HVAC systems, laminar airflow, hermetic doors, and specialized equipment, all designed to meet international standards like ISO 5 (Class 100) for sterility.'
        },
        {
          question: 'How much does a modular OT cost in India?',
          answer: 'Modular OT costs in India vary by size and features: Basic setup (300-400 sq ft) costs ₹10-20 lakhs, Standard setup (400-600 sq ft) costs ₹20-40 lakhs, and Advanced setup (600+ sq ft) costs ₹60 lakhs - 2 crores, including all equipment and installation.'
        },
        {
          question: 'What are the key components of a modular OT?',
          answer: 'Essential components include: Wall and ceiling panels (antibacterial, seamless), HVAC system (ultra-clean laminar airflow), hermetic doors (airtight, automatic), operation theatre lights (shadowless, adjustable), and instrument storage cabinets.'
        }
      ]
    };

    return faqs[blog.slug] || null;
  };

  const faqSchema = getFAQSchema();

  // Generate concise, descriptive alt text
  const getImageAlt = () => {
    const categoryAlts: Record<string, string> = {
      'Commercial HVAC': `${blog.category} system installation and components`,
      'Energy Solutions': 'Energy-efficient water heating system',
      'Commercial Refrigeration': 'Commercial cold storage facility',
      'Healthcare Infrastructure': 'Modular operation theatre setup',
      'Water Purification': 'Alkaline water purification system',
      'Ventilation Systems': 'HVAC ventilation and air handling equipment'
    };
    return categoryAlts[blog.category] || `${blog.category} solution`;
  };

  const handleShare = (platform: string) => {
    let url = '';
    
    switch(platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        toast({
          title: "Link Copied!",
          description: "Blog link copied to clipboard",
        });
        return;
    }
    
    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
  };

  return (
    <>
      <Helmet>
        <title>{blog.title} | Khandelwal Distributors</title>
        <meta name="description" content={blog.excerpt} />
        <meta name="keywords" content={blog.tags.join(', ')} />
        <meta name="author" content={blog.author} />
        <link rel="canonical" href={shareUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:image" content={blog.image} />
        <meta property="article:published_time" content={blog.date} />
        <meta property="article:author" content={blog.author} />
        <meta property="article:section" content={blog.category} />
        {blog.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.excerpt} />
        <meta name="twitter:image" content={blog.image} />

        {/* Structured Data for Blog Post */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": blog.title,
            "description": blog.excerpt,
            "image": blog.image,
            "datePublished": blog.date,
            "dateModified": blog.date,
            "author": {
              "@type": "Organization",
              "name": blog.author,
              "url": window.location.origin
            },
            "publisher": {
              "@type": "Organization",
              "name": "Khandelwal Distributors",
              "logo": {
                "@type": "ImageObject",
                "url": `${window.location.origin}/lovable-uploads/253ff299-0035-4525-90a9-5b15b36d4e69.png`
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": shareUrl
            },
            "articleSection": blog.category,
            "keywords": blog.tags.join(', ')
          })}
        </script>

        {/* Breadcrumb */}
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
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": blog.title,
                "item": shareUrl
              }
            ]
          })}
        </script>

        {/* FAQ Schema for featured blogs */}
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqSchema.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })}
          </script>
        )}
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Blog Header */}
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Back Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/blogs')}
              className="mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blogs
            </Button>

            {/* Category Badge */}
            <Badge className="mb-4">{blog.category}</Badge>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{blog.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">By {blog.author}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <img
                src={blog.image}
                alt={getImageAlt()}
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Share Buttons */}
            <Card className="p-4 mb-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <p className="font-semibold flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  Share this article:
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('facebook')}
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('twitter')}
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('linkedin')}
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('copy')}
                  >
                    Copy Link
                  </Button>
                </div>
              </div>
            </Card>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-6 mb-3" {...props} />,
                  h4: ({node, ...props}) => <h4 className="text-lg font-bold mt-6 mb-3" {...props} />,
                  p: ({node, ...props}) => <p className="mb-4 text-foreground leading-relaxed" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
                  li: ({node, ...props}) => <li className="text-foreground" {...props} />,
                  strong: ({node, ...props}) => <strong className="font-bold text-primary" {...props} />,
                  a: ({node, ...props}) => <a className="text-primary hover:underline" {...props} />,
                  blockquote: ({node, ...props}) => (
                    <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground" {...props} />
                  ),
                  code: ({node, ...props}) => (
                    <code className="bg-muted px-1.5 py-0.5 rounded text-sm" {...props} />
                  ),
                  table: ({node, ...props}) => (
                    <div className="overflow-x-auto my-6">
                      <table className="min-w-full border-collapse border border-border" {...props} />
                    </div>
                  ),
                  thead: ({node, ...props}) => (
                    <thead className="bg-muted" {...props} />
                  ),
                  tbody: ({node, ...props}) => (
                    <tbody className="divide-y divide-border" {...props} />
                  ),
                  tr: ({node, ...props}) => (
                    <tr className="border-b border-border" {...props} />
                  ),
                  th: ({node, ...props}) => (
                    <th className="px-4 py-3 text-left text-sm font-semibold text-foreground border border-border" {...props} />
                  ),
                  td: ({node, ...props}) => (
                    <td className="px-4 py-3 text-sm text-foreground border border-border" {...props} />
                  ),
                }}
              >
                {blog.content}
              </ReactMarkdown>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b">
              <span className="font-semibold mr-2">Tags:</span>
              {blog.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* CTA Box */}
            <Card className="bg-gradient-to-r from-primary/10 to-primary-light/10 p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Need Expert Advice?</h3>
              <p className="text-muted-foreground mb-6">
                Our team at Khandelwal Distributors in Bareilly is ready to help you choose the perfect HVAC solution for your needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+919429693410">
                  <Button size="lg">
                    Call: +91 9429693410
                  </Button>
                </a>
                <a href="https://wa.me/919084417884" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline">
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </Card>

            {/* Related Blogs */}
            {relatedBlogs.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedBlogs.map((relatedBlog) => {
                    // Generate alt text for related blog images
                    const getCategoryAlt = (category: string) => {
                      const alts: Record<string, string> = {
                        'Commercial HVAC': 'Commercial HVAC system',
                        'Energy Solutions': 'Energy-efficient heating solution',
                        'Commercial Refrigeration': 'Cold storage system',
                        'Healthcare Infrastructure': 'Medical facility equipment',
                        'Water Purification': 'Water purifier system',
                        'Ventilation Systems': 'Air handling unit'
                      };
                      return alts[category] || category;
                    };

                    return (
                      <Link
                        key={relatedBlog.id}
                        to={`/blogs/${relatedBlog.slug}`}
                        className="group"
                      >
                        <Card className="h-full hover:shadow-lg transition-shadow">
                          <div className="relative h-48 overflow-hidden rounded-t-lg">
                            <img
                              src={relatedBlog.image}
                              alt={getCategoryAlt(relatedBlog.category)}
                              className="w-full h-full object-cover transition-transform group-hover:scale-110"
                            />
                          </div>
                          <div className="p-4">
                            <Badge className="mb-2">{relatedBlog.category}</Badge>
                            <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                              {relatedBlog.title}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {relatedBlog.excerpt}
                            </p>
                          </div>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
