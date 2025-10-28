import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const TermsAndConditions = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms and Conditions - Khandelwal Distributors",
    "description": "Terms and Conditions for Khandelwal Distributors - HVAC and Air Conditioning Solutions Provider",
    "url": "https://www.khandelwaldistributors.com/terms-and-conditions",
    "publisher": {
      "@id": "https://www.khandelwaldistributors.com/#organization"
    }
  };

  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Khandelwal Distributors</title>
        <meta name="description" content="Read the terms and conditions for purchasing HVAC products and services from Khandelwal Distributors. Learn about warranties, delivery, installation, and rental services." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.khandelwaldistributors.com/terms-and-conditions" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Terms and Conditions | Khandelwal Distributors" />
        <meta property="og:description" content="Terms and Conditions for Khandelwal Distributors - HVAC and Air Conditioning Solutions" />
        <meta property="og:url" content="https://www.khandelwaldistributors.com/terms-and-conditions" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Terms and Conditions | Khandelwal Distributors" />
        <meta name="twitter:description" content="Terms and Conditions for Khandelwal Distributors - HVAC Solutions" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <Card className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6 text-foreground">Terms and Conditions</h1>
            <p className="text-muted-foreground mb-8">
              Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Khandelwal Distributors. These Terms and Conditions govern your use of our website and the purchase of products and services from us. By accessing our website or making a purchase, you agree to be bound by these terms. We are an authorized dealer and distributor of premium HVAC brands including Daikin, Mitsubishi Heavy, Carrier, Voltas, Amstrad, Midea, Godrej, and Cruise.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Products and Services</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">2.1 Product Availability:</strong> All products displayed on our website are subject to availability. We reserve the right to discontinue any product at any time without prior notice.
                </p>
                <p>
                  <strong className="text-foreground">2.2 Product Information:</strong> We strive to ensure that all product descriptions, specifications, and pricing are accurate. However, errors may occur. In case of any discrepancies, we will notify you before processing your order.
                </p>
                <p>
                  <strong className="text-foreground">2.3 Pricing:</strong> All prices are listed in Indian Rupees (INR) and are subject to change without notice. Prices include applicable taxes unless otherwise stated.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Orders and Payment</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">3.1 Order Acceptance:</strong> Your order is an offer to purchase products from us. We reserve the right to accept or decline your order for any reason. Once we accept your order, a confirmation will be sent to your email address.
                </p>
                <p>
                  <strong className="text-foreground">3.2 Payment:</strong> Payment must be made in full before the delivery or installation of products. We accept various payment methods including online payments, bank transfers, and cash on delivery (subject to approval).
                </p>
                <p>
                  <strong className="text-foreground">3.3 Order Cancellation:</strong> You may cancel your order by calling us at <a href="tel:+919429693410" className="text-primary hover:underline">+91 9429693410</a> before the product is dispatched or installation begins. Cancellation requests must be confirmed by our customer service team.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Delivery and Installation</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">4.1 Delivery:</strong> Delivery timelines are estimates and may vary based on product availability and your location. We primarily serve customers in Uttar Pradesh, with main locations in Bareilly and Shahjahanpur.
                </p>
                <p>
                  <strong className="text-foreground">4.2 Installation:</strong> Professional installation services are available for all air conditioning systems. Installation charges may apply separately and will be communicated at the time of order confirmation.
                </p>
                <p>
                  <strong className="text-foreground">4.3 Inspection:</strong> Please inspect your product upon delivery. Any visible damage must be reported immediately to our delivery personnel and confirmed in writing.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. AC Rental Services</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">5.1 Rental Terms:</strong> AC rental services are available with flexible plans including monthly, seasonal, and event-based rentals. Minimum rental periods apply as specified in each plan.
                </p>
                <p>
                  <strong className="text-foreground">5.2 Free Services:</strong> Rental packages include free installation, uninstallation, maintenance, and 24/7 technical support during the rental period.
                </p>
                <p>
                  <strong className="text-foreground">5.3 Rental Cancellation:</strong> You may cancel your rental service by calling us at <a href="tel:+919429693410" className="text-primary hover:underline">+91 9429693410</a> with appropriate notice. Early cancellation may be subject to charges as per the rental agreement.
                </p>
                <p>
                  <strong className="text-foreground">5.4 Equipment Care:</strong> You are responsible for the proper care and maintenance of rented equipment. Any damage beyond normal wear and tear may result in additional charges.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Warranty and Service</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">6.1 Manufacturer Warranty:</strong> All products come with the manufacturer's warranty. Warranty terms and conditions are provided by the respective manufacturers and may vary by product.
                </p>
                <p>
                  <strong className="text-foreground">6.2 Service Support:</strong> We provide authorized service support for all brands we represent. Service requests can be made by calling our customer service at <a href="tel:+919429693410" className="text-primary hover:underline">+91 9429693410</a>.
                </p>
                <p>
                  <strong className="text-foreground">6.3 Warranty Limitations:</strong> The warranty does not cover damage caused by improper installation, misuse, unauthorized modifications, or natural calamities.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Returns and Refunds</h2>
              <p className="text-muted-foreground leading-relaxed">
                Please refer to our <a href="/refund-policy" className="text-primary hover:underline">Refund Policy</a> page for detailed information about returns, refunds, and exchanges.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Khandelwal Distributors shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or services. Our total liability shall not exceed the purchase price of the product or service in question.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on our website, including text, images, logos, and designs, is the property of Khandelwal Distributors or our licensors and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your privacy is important to us. Please review our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> to understand how we collect, use, and protect your personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Bareilly, Uttar Pradesh.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our website and services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">13. Contact Us</h2>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p>
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="pl-4 space-y-1">
                  <p><strong className="text-foreground">Phone:</strong> <a href="tel:+919429693410" className="text-primary hover:underline">+91 9429693410</a></p>
                  <p><strong className="text-foreground">Email:</strong> <a href="mailto:admin@khandelwaldistributors.com" className="text-primary hover:underline">admin@khandelwaldistributors.com</a></p>
                  <p><strong className="text-foreground">Address:</strong> G-35, MCI Plaza, Mission Market, Civil Lines, Bareilly, Uttar Pradesh</p>
                </div>
              </div>
            </section>
          </Card>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TermsAndConditions;