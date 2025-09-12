import { Card, CardContent } from "@/components/ui/card";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useVideos } from "@/hooks/useVideos";

interface YouTubeVideosProps {
  category?: string;
  title?: string;
  description?: string;
}

const YouTubeVideos = ({ 
  category = 'homepage', 
  title = 'Watch Our Expert Videos',
  description = 'Learn about AC installation, maintenance, and energy-saving tips from our experts.'
}: YouTubeVideosProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { data: videos = [], isLoading } = useVideos(category);

  // Don't render anything if no videos and not loading
  if (!isLoading && videos.length === 0) {
    return null;
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title.includes('Expert Videos') ? (
              <>Watch Our <span className="text-primary">Expert Videos</span></>
            ) : (
              title
            )}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="relative">
          {videos.length > 0 && (
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
              onClick={() => scroll('left')}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          )}

          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {isLoading ? (
              // Loading skeleton
              Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex-shrink-0 w-80 animate-pulse">
                  <div className="bg-muted h-48 rounded-t-lg"></div>
                  <div className="p-4">
                    <div className="bg-muted h-6 rounded mb-2"></div>
                    <div className="bg-muted h-8 rounded"></div>
                  </div>
                </div>
              ))
            ) : videos.length > 0 && (
              videos.map((video) => (
                <Card key={video.id} className="flex-shrink-0 w-80 group hover:shadow-[var(--shadow-card)] transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={`https://img.youtube.com/vi/${video.youtube_id}/maxresdefault.jpg`}
                        alt={video.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 rounded-t-lg flex items-center justify-center">
                        <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="h-6 w-6 ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => window.open(video.youtube_url, '_blank')}
                      >
                        Watch Video
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {videos.length > 0 && (
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
              onClick={() => scroll('right')}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideos;