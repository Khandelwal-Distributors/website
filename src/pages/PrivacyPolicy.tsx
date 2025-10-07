import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Database, UserCheck, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Khandelwal Distributors",
    "description": "Privacy Policy for Khandelwal Distributors. Learn how we collect, use, and protect your personal information.",
    "url": "https://www.khandelwaldistributors.com/privacy-policy",
    "publisher": {
      "@type": "Organization",
      "name": "Khandelwal Distributors",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.khandelwaldistributors.com/lovable-uploads/favicon.png"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Khandelwal Distributors - HVAC & AC Solutions</title>
        <meta 
          name="description" 
          content="Privacy Policy for Khandelwal Distributors. Learn how we collect, use, and protect your personal information when you use our HVAC and air conditioning services." 
        />
        <link rel="canonical" href="https://www.khandelwaldistributors.com/privacy-policy" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-muted-foreground">
              Last Updated: October 7, 2025
            </p>
          </div>

          <div className="space-y-8 text-foreground/90">
            <section>
              <p className="leading-relaxed mb-4">
                At Khandelwal Distributors, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <Database className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold">Information We Collect</h2>
              </div>
              <div className="space-y-4 ml-8">
                <div>
                  <h3 className="text-xl font-medium mb-2">Personal Information</h3>
                  <p className="leading-relaxed">
                    We may collect personal information that you voluntarily provide to us, including but not limited to:
                  </p>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Name and contact information (email address, phone number, address)</li>
                    <li>Account credentials when you create an account</li>
                    <li>Payment information for purchases</li>
                    <li>Service requests and inquiry details</li>
                    <li>Feedback, reviews, and testimonials</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Automatically Collected Information</h3>
                  <p className="leading-relaxed">
                    When you visit our website, we may automatically collect certain information about your device and browsing actions:
                  </p>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>IP address and browser type</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website addresses</li>
                    <li>Clickstream data and usage patterns</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
              </div>
              <div className="ml-8">
                <p className="leading-relaxed mb-2">We use the collected information for the following purposes:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>To provide and maintain our services</li>
                  <li>To process your orders and manage transactions</li>
                  <li>To communicate with you about products, services, and promotions</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To schedule installations and service appointments</li>
                  <li>To improve our website and services</li>
                  <li>To detect and prevent fraud or security issues</li>
                  <li>To comply with legal obligations</li>
                  <li>To send administrative information and updates</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <Lock className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold">How We Protect Your Information</h2>
              </div>
              <div className="ml-8">
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Secure Socket Layer (SSL) encryption for data transmission</li>
                  <li>Secure database storage with encryption at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Limited access to personal information by authorized personnel only</li>
                  <li>Employee training on data protection and privacy practices</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <Eye className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold">Information Sharing and Disclosure</h2>
              </div>
              <div className="ml-8">
                <p className="leading-relaxed mb-2">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our business (payment processors, delivery services, installation technicians)</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, safety, or property</li>
                  <li><strong>With Your Consent:</strong> When you have given explicit consent to share your information</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <UserCheck className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold">Your Rights and Choices</h2>
              </div>
              <div className="ml-8">
                <p className="leading-relaxed mb-2">You have the following rights regarding your personal information:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                  <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for processing where applicable</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  To exercise these rights, please contact us at admin@khandelwaldistributors.com or call +91 9429693410.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
              <div className="ml-8">
                <p className="leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user preferences. You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of certain features on our website.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
              <div className="ml-8">
                <p className="leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
              <div className="ml-8">
                <p className="leading-relaxed">
                  Our services are not intended for children under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete that information.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
              <div className="ml-8">
                <p className="leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When your information is no longer needed, we will securely delete or anonymize it.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
              <div className="ml-8">
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website with a revised "Last Updated" date. We encourage you to review this policy periodically.
                </p>
              </div>
            </section>

            <section className="bg-muted/30 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-foreground/90">
                <p><strong>Khandelwal Distributors</strong></p>
                <p>Email: admin@khandelwaldistributors.com</p>
                <p>Phone: +91 9429693410</p>
                <p>Address: G-35, MCI Plaza, Mission Market, Civil Lines, Bareilly</p>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;