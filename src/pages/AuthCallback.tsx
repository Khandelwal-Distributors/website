import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AuthCallback() {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // The Supabase client will handle the OAuth callback automatically
    // Check if there's a pending checkout from before authentication
    const timer = setTimeout(() => {
      const pendingCheckout = sessionStorage.getItem('pendingCheckout');
      
      if (pendingCheckout) {
        // Clear the stored product and navigate to checkout
        sessionStorage.removeItem('pendingCheckout');
        const product = JSON.parse(pendingCheckout);
        
        toast({
          title: "Welcome!",
          description: "Redirecting you to checkout...",
        });
        
        navigate("/checkout", { state: { product }, replace: true });
      } else {
        // Normal sign in - just go to home
        toast({
          title: "Welcome!",
          description: "You have been signed in successfully.",
        });
        navigate("/", { replace: true });
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate, toast]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
      <div className="text-center space-y-4">
        <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Signing you in...</h2>
          <p className="text-muted-foreground">Please wait a moment</p>
        </div>
      </div>
    </div>
  );
}
