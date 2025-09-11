import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, Phone, MessageCircle, Home, ShoppingBag } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';

export default function PaymentSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const { signIn } = useAuth();
  
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const orderId = searchParams.get('order_id');

  const autoCreateUser = async (orderData: any) => {
    // Only create user if order was anonymous (user_id is null)
    if (orderData.user_id) {
      return orderData.user_id; // User already exists
    }

    try {
      // Generate a temporary password
      const tempPassword = `AC${Math.random().toString(36).substring(2, 10)}@${new Date().getFullYear()}`;
      
      // Create user account with customer email
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: orderData.customer_email,
        password: tempPassword,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
          data: {
            full_name: orderData.customer_name,
            phone: orderData.customer_phone,
          }
        }
      });

      if (signUpError) {
        console.error('Error creating user:', signUpError);
        // If user already exists with this email, try to find them
        if (signUpError.message.includes('already registered')) {
          toast({
            title: 'Account Created',
            description: `An account with email ${orderData.customer_email} already exists. Your order has been linked to that account.`,
          });
          return null; // Don't update order, user might exist
        }
        throw signUpError;
      }

      if (authData.user) {
        // Update the order to link it to the new user
        await supabase
          .from('orders')
          .update({ user_id: authData.user.id })
          .eq('id', orderId);

        // Wait a moment for user creation to complete, then sign in
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const signInResult = await signIn(orderData.customer_email, tempPassword);
        if (signInResult.error) {
          console.error('Error signing in new user:', signInResult.error);
          // If sign in fails, still show success but inform user to check email
          toast({
            title: 'Account Created',
            description: `We've created an account for you. Please check your email to verify and sign in.`,
          });
        } else {
          toast({
            title: 'Account Created & Signed In!',
            description: `We've created an account for you and signed you in. Check your email for login details.`,
          });
        }

        // Send welcome email with login details
        try {
          await supabase.functions.invoke('send-welcome-email', {
            body: {
              email: orderData.customer_email,
              name: orderData.customer_name,
              tempPassword: tempPassword,
              orderId: orderData.id
            }
          });
        } catch (emailError) {
          console.error('Error sending welcome email:', emailError);
          // Don't fail user creation if email fails
        }

        toast({
          title: 'Account Created & Signed In!',
          description: `We've created an account for you and signed you in. Check your email for login details.`,
        });

        return authData.user.id;
      }
    } catch (error) {
      console.error('Error in auto user creation:', error);
      // Don't fail the order process if user creation fails
      toast({
        title: 'Order Confirmed',
        description: 'Your order was successful! We had trouble creating your account, but you can create one later.',
        variant: 'default',
      });
    }
    
    return null;
  };

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (!orderId) {
        toast({
          title: 'Invalid Order',
          description: 'No order ID found.',
          variant: 'destructive',
        });
        navigate('/');
        return;
      }

      try {
        // Verify payment and securely fetch order via Edge Function (bypasses RLS safely)
        const { data: verifyData, error: verifyError } = await supabase.functions.invoke('verify-payment', {
          body: { dbOrderId: orderId }
        });

        if (verifyError) {
          console.error('verify-payment error:', verifyError);
          throw verifyError;
        }

        const orderCore = verifyData?.order;
        if (!orderCore) {
          throw new Error('Order not found after verification');
        }

        // Fetch public product details
        const { data: product } = await supabase
          .from('products')
          .select('name, model, brand, image_urls')
          .eq('id', orderCore.product_id)
          .maybeSingle();

        const orderData = { ...orderCore, products: product || null } as any;

        setOrder(orderData);

        // Auto-create user account if this was an anonymous order
        await autoCreateUser(orderData);

      } catch (error) {
        console.error('Error:', error);
        toast({
          title: 'Error',
          description: 'Failed to load order details.',
          variant: 'destructive',
        });
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId, navigate, toast]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleCallClick = () => {
    window.open('tel:+919429693410', '_self');
  };

  const handleWhatsAppClick = () => {
    const message = `Hi! I just completed my payment for order #${orderId}. Please confirm my order details.`;
    window.open(`https://wa.me/919084417884?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <Clock className="mx-auto h-12 w-12 text-primary animate-spin" />
            <p className="mt-4 text-lg">Loading order details...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Order Not Found</h1>
          <p className="text-muted-foreground mb-8">The order you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/')}>Go Home</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Payment Successful - Thank You! | Khandelwal Distributors</title>
        <meta name="description" content="Payment completed successfully. Your AC order has been confirmed. Our team will contact you shortly for installation." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="container mx-auto px-4 py-8">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-green-600 mb-2">Payment Successful!</h1>
            <p className="text-lg text-muted-foreground">Thank you for your purchase. Your order has been confirmed.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Order Details */}
            <Card>
              <CardHeader>
                <CardTitle>Order Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <img
                    src={order.products?.image_urls?.[0] || '/api/placeholder/80/80'}
                    alt={order.products?.name || 'Product'}
                    className="w-20 h-20 object-cover rounded-md bg-muted"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{order.products?.name}</h3>
                    <p className="text-sm text-muted-foreground">Model: {order.products?.model}</p>
                    <p className="text-sm text-muted-foreground">Brand: {order.products?.brand}</p>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Order ID:</span>
                    <span className="text-sm font-mono">#{order.id.slice(0, 8)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Quantity:</span>
                    <span className="text-sm">{order.quantity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total Amount:</span>
                    <span className="text-sm font-semibold">{formatPrice(order.total_amount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Payment Status:</span>
                    <span className="text-sm text-green-600 font-semibold">Completed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Customer Information */}
            <Card>
              <CardHeader>
                <CardTitle>Delivery Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <label className="text-sm text-muted-foreground">Customer Name:</label>
                  <p className="font-medium">{order.customer_name}</p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Email:</label>
                  <p className="font-medium">{order.customer_email}</p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Phone:</label>
                  <p className="font-medium">{order.customer_phone}</p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Address:</label>
                  <p className="font-medium">
                    {order.customer_address}<br />
                    {order.customer_city}, {order.customer_state} - {order.customer_pincode}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Next Steps */}
          <Card className="max-w-4xl mx-auto mt-8">
            <CardHeader>
              <CardTitle>What's Next?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Order Confirmation</h4>
                    <p className="text-sm text-muted-foreground">Our team will call you within 2-4 hours to confirm your order details.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Installation Scheduling</h4>
                    <p className="text-sm text-muted-foreground">We'll schedule a convenient time for professional installation.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <Card className="max-w-4xl mx-auto mt-8">
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have any questions about your order or need immediate assistance, feel free to contact us:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleCallClick}
                  className="flex items-center gap-2"
                  variant="outline"
                >
                  <Phone className="h-4 w-4" />
                  Call +91 9429693410
                </Button>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Support
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              onClick={() => navigate('/')}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Home className="h-4 w-4" />
              Go to Home
            </Button>
            <Button 
              onClick={() => navigate('/shop')}
              className="flex items-center gap-2"
            >
              <ShoppingBag className="h-4 w-4" />
              Continue Shopping
            </Button>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}