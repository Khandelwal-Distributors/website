import { Button } from "@/components/ui/button";
import { Phone, Menu, MessageCircle, User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Header = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        {/* Mobile Layout - Logo centered */}
        <div className="flex justify-center sm:hidden">
          <img 
            src="/lovable-uploads/1dac8f77-f78d-438f-9443-81448ee971c1.png" 
            alt="Khandelwal Distributors Logo" 
            className="h-20 img-fade-in"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden sm:flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/1dac8f77-f78d-438f-9443-81448ee971c1.png" 
              alt="Khandelwal Distributors Logo" 
              className="h-20 img-fade-in"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="cta" size="sm" asChild>
              <Link to="/shop">Shop Online</Link>
            </Button>
            
            <Button
              variant="cta" 
              size="sm"
              onClick={() => window.open('tel:+919876543210')}
            >
              <Phone className="h-4 w-4" />
              Call +91 98765 43210
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('https://wa.me/919876543210', '_blank')}
              className="bg-green-600 text-white border-green-600 hover:bg-green-700 hover:border-green-700"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>

            {user ? (
              <>
                <span className="text-sm text-muted-foreground">Welcome, {user.email}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleSignOut}
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
              </>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                asChild
              >
                <Link to="/auth">
                  <User className="h-4 w-4" />
                  Sign In
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;