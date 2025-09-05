import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Package, Calendar, MapPin, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
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
  product_id: string;
  products?: {
    name: string;
    model: string;
    brand: string;
  };
}

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!user) {
      navigate("/auth");
      return;
    }
    
    fetchOrders();
  }, [user, navigate]);

  const fetchOrders = async () => {
    try {
      const { data, error } = await supabase
        .from("orders")
        .select(`
          *,
          products (
            name,
            model,
            brand
          )
        `)
        .eq("user_id", user?.id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching orders:", error);
        toast({
          title: "Error",
          description: "Failed to fetch orders. Please try again.",
          variant: "destructive",
        });
      } else {
        setOrders(data || []);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast({
        title: "Error", 
        description: "Failed to fetch orders. Please try again.",
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

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>My Orders | Khandelwal Distributors - HVAC Solutions</title>
        <meta name="description" content="View your order history and track deliveries with Khandelwal Distributors." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold">My Orders</h1>
              <p className="text-muted-foreground">Track your order history and delivery status</p>
            </div>

            {orders.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No Orders Yet</h3>
                  <p className="text-muted-foreground">You haven't placed any orders yet. Start shopping to see your orders here!</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <Card key={order.id} className="overflow-hidden">
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
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}