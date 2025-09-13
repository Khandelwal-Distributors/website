import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Package, Calendar, MapPin, Phone, Mail, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

interface Order {
  id: string;
  created_at: string;
  status: string;
  total_amount: number;
  quantity: number;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  customer_address: string;
  customer_city: string;
  customer_state: string;
  customer_pincode: string;
  delivery_date: string | null;
  notes: string | null;
  access_token: string;
  product_id: string;
  products?: {
    name: string;
    model: string;
    brand: string;
  };
}

export default function GuestOrder() {
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(false);
  const [showAccessForm, setShowAccessForm] = useState(true);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  useEffect(() => {
    // Check for URL parameters
    const urlToken = searchParams.get('token');
    const urlEmail = searchParams.get('email');
    
    if (urlToken && urlEmail) {
      try {
        const decodedEmail = atob(urlEmail);
        setToken(urlToken);
        setEmail(decodedEmail);
        handleAccessOrder(urlToken, decodedEmail);
      } catch (error) {
        console.error('Error decoding URL parameters:', error);
      }
    }
  }, [searchParams]);

  const handleAccessOrder = async (accessToken: string = token, customerEmail: string = email) => {
    if (!accessToken || !customerEmail) {
      toast({
        title: "Missing Information",
        description: "Please provide both access token and email address.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.rpc('get_guest_order', {
        p_access_token: accessToken,
        p_customer_email: customerEmail
      });

      if (error) {
        console.error('Error fetching guest order:', error);
        toast({
          title: "Access Denied",
          description: "Invalid access token or email. Please check your credentials.",
          variant: "destructive",
        });
        return;
      }

      if (!data || data.length === 0) {
        toast({
          title: "Order Not Found",
          description: "No order found with the provided access token and email.",
          variant: "destructive",
        });
        return;
      }

      // Fetch product details
      const { data: productData, error: productError } = await supabase
        .from('products')
        .select('name, model, brand')
        .eq('id', data[0].product_id)
        .single();

      if (!productError && productData) {
        const orderWithProduct = { ...data[0], products: productData };
        setOrder(orderWithProduct);
      } else {
        setOrder(data[0]);
      }

      setShowAccessForm(false);
    } catch (error) {
      console.error('Error accessing guest order:', error);
      toast({
        title: "Error",
        description: "An error occurred while accessing your order.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-500/10 text-yellow-700 border-yellow-200";
      case "confirmed":
        return "bg-blue-500/10 text-blue-700 border-blue-200";
      case "delivered":
        return "bg-green-500/10 text-green-700 border-green-200";
      case "cancelled":
        return "bg-red-500/10 text-red-700 border-red-200";
      default:
        return "bg-gray-500/10 text-gray-700 border-gray-200";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);
  };

  return (
    <>
      <Helmet>
        <title>Guest Order Access | Khandelwal Distributors - HVAC Solutions</title>
        <meta name="description" content="Access your guest order details securely with Khandelwal Distributors." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold">Guest Order Access</h1>
              <p className="text-muted-foreground">Access your order details securely</p>
            </div>

            {showAccessForm ? (
              <Card className="max-w-md mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Secure Access Required
                  </CardTitle>
                  <CardDescription>
                    Please enter your access token and email address to view your order details.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="token">Access Token</Label>
                    <Input
                      id="token"
                      type="text"
                      placeholder="Enter your access token"
                      value={token}
                      onChange={(e) => setToken(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <Button 
                    onClick={() => handleAccessOrder()} 
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        Accessing Order...
                      </>
                    ) : (
                      'Access Order'
                    )}
                  </Button>
                </CardContent>
              </Card>
            ) : order ? (
              <div className="max-w-4xl mx-auto">
                <Card className="overflow-hidden">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <CardTitle className="text-lg">
                          Order #{order.id.slice(-8).toUpperCase()}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Ordered on {formatDate(order.created_at)}
                        </CardDescription>
                      </div>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {order.products && (
                      <div className="bg-muted/30 rounded-lg p-4">
                        <h4 className="font-semibold text-sm text-muted-foreground mb-2">PRODUCT DETAILS</h4>
                        <div className="space-y-1">
                          <p className="font-medium">{order.products.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {order.products.brand} • Model: {order.products.model}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Quantity: {order.quantity} • Total: {formatCurrency(order.total_amount)}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-muted-foreground">CUSTOMER DETAILS</h4>
                        <div className="space-y-1">
                          <p className="flex items-center gap-2">
                            <Mail className="h-3 w-3" />
                            {order.customer_name}
                          </p>
                          <p className="flex items-center gap-2">
                            <Phone className="h-3 w-3" />
                            {order.customer_phone}
                          </p>
                          <p className="text-muted-foreground">{order.customer_email}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-muted-foreground">DELIVERY ADDRESS</h4>
                        <div className="flex items-start gap-2">
                          <MapPin className="h-3 w-3 mt-0.5 flex-shrink-0" />
                          <div className="text-muted-foreground">
                            <p>{order.customer_address}</p>
                            <p>{order.customer_city}, {order.customer_state} - {order.customer_pincode}</p>
                          </div>
                        </div>
                        {order.delivery_date && (
                          <p className="text-sm">
                            Expected delivery: {formatDate(order.delivery_date)}
                          </p>
                        )}
                      </div>
                    </div>

                    {order.notes && (
                      <div className="bg-muted/30 rounded-lg p-4">
                        <h4 className="font-semibold text-sm text-muted-foreground mb-1">NOTES</h4>
                        <p className="text-sm">{order.notes}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                <div className="mt-6 text-center">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setShowAccessForm(true);
                      setOrder(null);
                      setToken("");
                      setEmail("");
                    }}
                  >
                    Access Another Order
                  </Button>
                </div>
              </div>
            ) : (
              <Card className="text-center py-12">
                <CardContent>
                  <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No Order Found</h3>
                  <p className="text-muted-foreground">Please check your access credentials and try again.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}