import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ArrowLeft } from "lucide-react";

export default function Auth() {
  const [isLoading, setIsLoading] = useState(false);
  
  const { signInWithGoogle, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  // Check if user is coming from a purchase flow
  const hasPendingCheckout = sessionStorage.getItem('pendingCheckout');

  // Redirect if user is already authenticated
  useEffect(() => {
    if (user) {
      const redirectTo = (location.state as any)?.redirectTo;
      const product = (location.state as any)?.product;
      
      if (redirectTo && product) {
        // Redirect back to checkout with product data
        navigate(redirectTo, { state: { product } });
      } else {
        const from = (location.state as any)?.from?.pathname || "/";
        navigate(from, { replace: true });
      }
    }
  }, [user, navigate, location]);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);

    const { error } = await signInWithGoogle();
    
    if (error) {
      toast({
        title: "Sign In Failed",
        description: error,
        variant: "destructive",
      });
      setIsLoading(false);
    }
    // If successful, the OAuth flow will redirect the user
  };

  return (
    <>
      <Helmet>
        <title>Sign In | Khandelwal Distributors</title>
        <meta name="description" content="Sign in to your Khandelwal Distributors account to place orders and track your purchases." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          {/* Back to Home Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Khandelwal Distributors
            </h1>
            <p className="text-muted-foreground">Premium HVAC Solutions in Bareilly, UP</p>
          </div>

          {/* Sign In Card */}
          <Card className="shadow-[var(--shadow-card)]">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">
                {hasPendingCheckout ? "Sign In to Continue" : "Welcome"}
              </CardTitle>
              <CardDescription className="text-center">
                {hasPendingCheckout 
                  ? "Sign in with Google to complete your purchase"
                  : "Sign in to access your account and place orders"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Google Sign In Button */}
              <Button
                onClick={handleGoogleSignIn}
                disabled={isLoading}
                variant="outline"
                className="w-full h-12 text-base font-medium border-2 hover:bg-muted/50"
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                )}
                Continue with Google
              </Button>

              {/* Info Text */}
              <div className="text-center text-sm text-muted-foreground space-y-2 pt-4">
                <p>Sign in with your Google account to:</p>
                <ul className="text-xs space-y-1">
                  <li>✓ Browse and purchase products</li>
                  <li>✓ Track your orders</li>
                  <li>✓ Save delivery addresses</li>
                  <li>✓ Access exclusive deals</li>
                </ul>
              </div>

              {/* Privacy Notice */}
              <p className="text-xs text-center text-muted-foreground pt-4 border-t">
                By signing in, you agree to our{" "}
                <a href="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </a>
              </p>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="text-center text-sm text-muted-foreground">
            <p>Need help? Contact us at</p>
            <a href="tel:+919429693410" className="text-primary hover:underline font-medium">
              +91 9429693410
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
