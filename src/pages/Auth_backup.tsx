import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ArrowLeft } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function Auth() {
  const [isLoading, setIsLoading] = useState(false);
  
  const { signInWithGoogle, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

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
                        minLength={6}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirm-password"
                        name="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm new password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                        minLength={6}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Password must be at least 6 characters long
                    </p>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Update Password
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Sign In | Khandelwal Distributors - HVAC Solutions</title>
        <meta name="description" content="Sign in to access your account and manage your HVAC orders with Khandelwal Distributors." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Khandelwal Distributors
            </h1>
            <p className="text-muted-foreground">Your trusted HVAC solutions partner</p>
          </div>

          <Card className="shadow-[var(--shadow-card)]">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">
                {showForgotPassword ? "Reset Password" : "Welcome"}
              </CardTitle>
              <CardDescription className="text-center">
                {showForgotPassword 
                  ? "Enter your email to receive reset instructions"
                  : "Sign in to your account or create a new one"
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              {showForgotPassword ? (
                <div className="space-y-4">
                  {resetEmailSent ? (
                    <div className="text-center space-y-4">
                      <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <Mail className="mx-auto h-8 w-8 text-green-600 mb-2" />
                        <p className="text-sm text-green-700 dark:text-green-400">
                          Reset instructions sent to your email
                        </p>
                      </div>
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setShowForgotPassword(false);
                          setResetEmailSent(false);
                        }}
                        className="w-full"
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Sign In
                      </Button>
                    </div>
                  ) : (
                    <>
                      <form onSubmit={handleForgotPassword} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="reset-email">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="reset-email"
                              name="email"
                              type="email"
                              placeholder="Enter your email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <Button type="submit" className="w-full" disabled={isLoading}>
                          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                          Send Reset Instructions
                        </Button>
                      </form>
                      <Button 
                        variant="outline" 
                        onClick={() => setShowForgotPassword(false)}
                        className="w-full"
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Sign In
                      </Button>
                    </>
                  )}
                </div>
              ) : (
                <Tabs defaultValue="signin" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signin">Sign In</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                  </TabsList>
                
                  <TabsContent value="signin">
                    <form onSubmit={handleSignIn} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="signin-email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="signin-email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signin-password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="signin-password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="pl-10 pr-10"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                      </div>
                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Sign In
                      </Button>
                      <div className="text-center">
                        <button
                          type="button"
                          onClick={() => setShowForgotPassword(true)}
                          className="text-sm text-primary hover:underline"
                        >
                          Forgot your password?
                        </button>
                      </div>
                    </form>
                  </TabsContent>
                
                <TabsContent value="signup">
                  <form onSubmit={handleSignUp} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-name">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="signup-name"
                          name="fullName"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="signup-email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="signup-password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="pl-10 pr-10"
                          required
                          minLength={6}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Password must be at least 6 characters long
                      </p>
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Create Account
                    </Button>
                  </form>
                  </TabsContent>
                </Tabs>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}