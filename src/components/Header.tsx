import { Button } from "@/components/ui/button";
import { Phone, Menu, MessageCircle, User, LogOut, ShoppingCart, ChevronDown } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = async () => {
    await signOut();
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      setTimeout(() => {
        const element = document.querySelector(`[data-section="${sectionId}"]`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(`[data-section="${sectionId}"]`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const brands = [
    { name: "Voltas", path: "/brands/voltas" },
    { name: "Carrier", path: "/brands/carrier" },
    { name: "Daikin", path: "/brands/daikin" },
    { name: "Midea", path: "/brands/midea" },
    { name: "Amstrad", path: "/brands/amstrad" },
    { name: "Godrej", path: "/brands/godrej" },
    { name: "Cruise", path: "/brands/cruise" },
    { name: "Mitsubishi Heavy", path: "/brands/mitsubishi-heavy" },
  ];
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        {/* Single Responsive Layout */}
        <div className="flex items-center">
          {/* Burger Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-transparent text-foreground p-2"
              >
                <Menu className="h-6 w-6 text-black" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  to="/"
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/shop"
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Shop
                </Link>
                <Link
                  to="/products"
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Product Categories
                </Link>

                {/* Brands Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="justify-start text-lg font-medium p-0 h-auto">
                      Brands <ChevronDown className="h-4 w-4 ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="bg-background border">
                    {brands.map((brand) => (
                      <DropdownMenuItem key={brand.name} asChild>
                        <Link to={brand.path} className="cursor-pointer">
                          {brand.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link
                  to="/projects"
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Projects
                </Link>

                <button
                  onClick={() => scrollToSection('sale')}
                  className="text-lg font-medium hover:text-primary transition-colors text-left text-accent-warm"
                >
                  🔥 Sale
                </button>

                <button
                  onClick={() => scrollToSection('rent')}
                  className="text-lg font-medium hover:text-primary transition-colors text-left"
                >
                  Rent an AC
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-lg font-medium hover:text-primary transition-colors text-left"
                >
                  Contact
                </button>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo - Right after hamburger menu */}
          <Link to="/" className="flex items-center flex-shrink-0 ml-3">
            <img
              src="@/assets/kd_banner.jpg"
              alt="Khandelwal Distributors Logo"
              className="h-16 sm:h-18 md:h-20"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </Link>

          {/* CTAs and User Profile */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0 ml-auto">
            {/* Hide CTAs on smaller screens to preserve logo size */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="secondary"
                size="sm"
                asChild
                className="bg-[hsl(var(--shop-online))] text-white hover:bg-[hsl(var(--shop-online))]/90"
              >
                <Link to="/shop">
                  <ShoppingCart className="h-4 w-4" />
                  Shop Online
                </Link>
              </Button>

              <Button
                variant="cta"
                size="sm"
                onClick={() => window.open('tel:+919429693410')}
              >
                <Phone className="h-4 w-4" />
                Call +91 94296 93410
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://wa.me/919084417884', '_blank')}
                className="bg-green-600 text-white border-green-600 hover:bg-green-700 hover:border-green-700"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
            </div>

            {/* User Profile */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 p-2">
                    <User className="h-6 w-6" />
                    <ChevronDown className="h-4 w-4 hidden sm:block" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-background border">
                  <DropdownMenuItem asChild>
                    <Link to="/orders" className="flex items-center gap-2 cursor-pointer">
                      <ShoppingCart className="h-4 w-4" />
                      View Orders
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut} className="flex items-center gap-2 cursor-pointer">
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="ghost" size="sm" asChild className="p-2">
                <Link to="/auth">
                  <User className="h-6 w-6" />
                  <span className="hidden sm:inline ml-1">Sign In</span>
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