import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const RefundPolicy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Refund Policy - Khandelwal Distributors",
    "description": "Refund and Return Policy for Khandelwal Distributors - HVAC and Air Conditioning Solutions",
    "url": "https://www.khandelwaldistributors.com/refund-policy",
    "publisher": {
      "@id": "https://www.khandelwaldistributors.com/#organization"
    }
  };

  return (
    <>
      <Helmet>
        <title>Refund Policy | Khandelwal Distributors</title>
        <meta name="description" content="Learn about our refund, return, and exchange policy for HVAC products and services at Khandelwal Distributors. Contact us to cancel your order." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.khandelwaldistributors.com/refund-policy" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Refund Policy | Khandelwal Distributors" />
        <meta property="og:description" content="Refund and Return Policy for Khandelwal Distributors" />
        <meta property="og:url" content="https://www.khandelwaldistributors.com/refund-policy" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Refund Policy | Khandelwal Distributors" />
        <meta name="twitter:description" content="Refund Policy for Khandelwal Distributors - HVAC Solutions" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <Card className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6 text-foreground">Refund Policy</h1>
            <p className="text-muted-foreground mb-8">
              Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Order Cancellation</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">1.1 How to Cancel:</strong> To cancel your order, please call us immediately at <a href="tel:+919429693410" className="text-primary hover:underline font-semibold">+91 9429693410</a>. Our customer service team will assist you with the cancellation process.
                </p>
                <p>
                  <strong className="text-foreground">1.2 Cancellation Window:</strong> Orders can be cancelled free of charge before the product is dispatched or installation begins. Once the product is dispatched or installation has commenced, cancellation may be subject to charges.
                </p>
                <p>
                  <strong className="text-foreground">1.3 Cancellation Confirmation:</strong> All cancellation requests must be confirmed by our customer service team. You will receive a cancellation confirmation via email or SMS once your request is processed.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Return Policy</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">2.1 Return Eligibility:</strong> Products may be returned within 7 days of delivery if they are unused, in original packaging, and with all accessories, manuals, and warranty cards intact.
                </p>
                <p>
                  <strong className="text-foreground">2.2 Non-Returnable Items:</strong> The following items cannot be returned:
                </p>
                <ul className="list-disc pl-8 space-y-2">
                  <li>Products that have been installed or used</li>
                  <li>Products with damaged or missing packaging</li>
                  <li>Custom or special order items</li>
                  <li>Rental equipment after the rental period has commenced</li>
                  <li>Products damaged due to misuse or negligence</li>
                </ul>
                <p>
                  <strong className="text-foreground">2.3 Return Process:</strong> To initiate a return, call us at <a href="tel:+919429693410" className="text-primary hover:underline font-semibold">+91 9429693410</a>. Our team will guide you through the return process and arrange for product pickup if applicable.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Refund Process</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">3.1 Refund Eligibility:</strong> Refunds will be processed only for orders that meet our return policy criteria and have been approved by our customer service team.
                </p>
                <p>
                  <strong className="text-foreground">3.2 Inspection Period:</strong> Once we receive the returned product, we will inspect it to ensure it meets our return conditions. This process typically takes 3-5 business days.
                </p>
                <p>
                  <strong className="text-foreground">3.3 Refund Method:</strong> Approved refunds will be processed using the same payment method used for the original purchase. If this is not possible, we will arrange an alternative refund method with you.
                </p>
                <p>
                  <strong className="text-foreground">3.4 Refund Timeline:</strong> After approval, refunds will be processed within 7-10 business days. The time it takes for the refund to reflect in your account may vary depending on your bank or payment provider.
                </p>
                <p>
                  <strong className="text-foreground">3.5 Deductions:</strong> The following may be deducted from your refund:
                </p>
                <ul className="list-disc pl-8 space-y-2">
                  <li>Delivery charges (if applicable)</li>
                  <li>Installation charges (if service was provided)</li>
                  <li>Restocking fee (up to 10% for certain products)</li>
                  <li>Any damage or missing items from the returned product</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Exchange Policy</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">4.1 Exchange Eligibility:</strong> If you wish to exchange a product for a different model or specification, please call us at <a href="tel:+919429693410" className="text-primary hover:underline font-semibold">+91 9429693410</a> within 7 days of delivery.
                </p>
                <p>
                  <strong className="text-foreground">4.2 Exchange Process:</strong> The product must meet all return policy conditions. Price differences will be adjusted at the time of exchange. Additional charges may apply for delivery and installation of the new product.
                </p>
                <p>
                  <strong className="text-foreground">4.3 Subject to Availability:</strong> Exchanges are subject to product availability. If the desired product is not available, we will offer alternatives or process a refund.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Defective or Damaged Products</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">5.1 Delivery Damage:</strong> If you receive a damaged product, please report it immediately to our delivery personnel and call us at <a href="tel:+919429693410" className="text-primary hover:underline font-semibold">+91 9429693410</a> within 24 hours of delivery.
                </p>
                <p>
                  <strong className="text-foreground">5.2 Manufacturing Defects:</strong> Products with manufacturing defects are covered under the manufacturer's warranty. Please contact us to arrange for warranty service or replacement.
                </p>
                <p>
                  <strong className="text-foreground">5.3 Priority Handling:</strong> Cases involving damaged or defective products will be given priority. We will arrange for immediate replacement or repair at no additional cost to you.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. AC Rental Service Refunds</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">6.1 Rental Cancellation:</strong> To cancel your AC rental service, call us at <a href="tel:+919429693410" className="text-primary hover:underline font-semibold">+91 9429693410</a>. Cancellation policies vary based on when you cancel:
                </p>
                <ul className="list-disc pl-8 space-y-2">
                  <li><strong className="text-foreground">Before Installation:</strong> Full refund of advance payment</li>
                  <li><strong className="text-foreground">Within First Week:</strong> Refund after deduction of one week's rental</li>
                  <li><strong className="text-foreground">After First Week:</strong> No refund, but you may cancel for future months</li>
                </ul>
                <p>
                  <strong className="text-foreground">6.2 Equipment Return:</strong> Upon cancellation, the rented AC unit must be returned in good working condition. Any damage beyond normal wear and tear will be charged separately.
                </p>
                <p>
                  <strong className="text-foreground">6.3 Security Deposit:</strong> If a security deposit was collected, it will be refunded after equipment inspection, typically within 7-10 business days of return.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Installation and Service Refunds</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">7.1 Installation Cancellation:</strong> If you cancel installation services before the scheduled date, installation charges will be refunded in full. Cancellations on the installation date may incur a nominal cancellation fee.
                </p>
                <p>
                  <strong className="text-foreground">7.2 Service Dissatisfaction:</strong> If you are not satisfied with our installation or service, please call us immediately. We will send our technician to address your concerns at no additional cost.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Exceptions and Special Cases</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">8.1 Force Majeure:</strong> Refunds and returns may be delayed or affected by circumstances beyond our control, such as natural disasters, government restrictions, or supply chain disruptions.
                </p>
                <p>
                  <strong className="text-foreground">8.2 Final Sale Items:</strong> Products marked as "Final Sale" or "Clearance" cannot be returned or exchanged unless they are defective.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Contact Us for Refunds and Returns</h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  For all refund, return, and cancellation requests, please contact us:
                </p>
                <div className="bg-muted/50 p-6 rounded-lg border border-border space-y-3">
                  <p className="text-lg">
                    <strong className="text-foreground">📞 Call Us:</strong> <a href="tel:+919429693410" className="text-primary hover:underline font-semibold text-xl">+91 9429693410</a>
                  </p>
                  <p>
                    <strong className="text-foreground">📧 Email:</strong> <a href="mailto:admin@khandelwaldistributors.com" className="text-primary hover:underline">admin@khandelwaldistributors.com</a>
                  </p>
                  <p>
                    <strong className="text-foreground">📍 Address:</strong> G-35, MCI Plaza, Mission Market, Civil Lines, Bareilly, Uttar Pradesh
                  </p>
                  <p className="text-sm pt-2 border-t border-border">
                    Our customer service team is available to assist you with any questions or concerns regarding returns and refunds.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Policy Updates</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting on our website. Please review this policy periodically for updates.
              </p>
            </section>
          </Card>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default RefundPolicy;