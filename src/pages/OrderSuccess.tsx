import { useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Phone, MessageCircle, Home, ShoppingCart } from 'lucide-react';

export default function OrderSuccess() {
  const location = useLocation();
  const { order, product, message } = location.state || {};

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      <Helmet>
        <title>Order Placed Successfully | Khandelwal Distributors</title>
        <meta name="description" content="Your AC order has been placed successfully. Our team will contact you shortly for confirmation and installation." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <CheckCircle className="h-20 w-20 text-green-600 mx-auto" />
              <h1 className="text-3xl font-bold text-green-600">Order Placed Successfully!</h1>
              <p className="text-lg text-muted-foreground">
                {message || "Thank you for your order! Our team will contact you shortly."}
              </p>
            </div>

            {order && product && (
              <Card className="text-left">
                <CardHeader>
                  <CardTitle>Order Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <img
                      src={product.image_urls[0] || '/api/placeholder/80/80'}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-md bg-muted"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">Model: {product.model}</p>
                      <p className="text-sm text-muted-foreground">Brand: {product.brand}</p>
                      <p className="font-semibold text-lg text-primary mt-2">
                        {formatPrice(order.total_amount)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium">Customer Name</p>
                      <p className="text-muted-foreground">{order.customer_name}</p>
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">{order.customer_phone}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="font-medium">Delivery Address</p>
                      <p className="text-muted-foreground">
                        {order.customer_address}, {order.customer_city}, {order.customer_state} - {order.customer_pincode}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button asChild variant="outline" className="py-6">
                <Link to="/shop">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Continue Shopping
                </Link>
              </Button>
              <Button asChild className="py-6">
                <Link to="/">
                  <Home className="mr-2 h-5 w-5" />
                  Go Home
                </Link>
              </Button>
            </div>

            <div className="space-y-4 p-6 bg-muted/50 rounded-lg">
              <h3 className="font-semibold">What happens next?</h3>
              <div className="space-y-2 text-sm text-left">
                <p>• Our sales team will call you within 2 hours to confirm your order</p>
                <p>• We'll schedule a convenient delivery and installation time</p>
                <p>• Professional technicians will install your AC for free</p>
                <p>• You'll receive warranty documentation and support details</p>
              </div>
              
              <div className="flex justify-center gap-4 pt-4">
                <Button variant="outline" onClick={() => window.open('tel:+919429693410', '_self')}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us
                </Button>
                <Button variant="outline" onClick={() => window.open('https://wa.me/919084417884?text=Hello, I have a query regarding my recent order.', '_blank')} className="bg-green-600 text-white border-green-600 hover:bg-green-700">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}