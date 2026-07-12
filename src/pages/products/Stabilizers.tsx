import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, ArrowLeft, Shield, Zap, Activity, AlertTriangle, Home, Building, Hotel, Factory, Hospital, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import inverterSplitAc from "@/assets/inverter-split-ac.jpg";

const Stabilizers = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const acStabilizers = [
        {
            brand: "V-Guard",
            winding: "Copper",
            models: [
                { name: "V-Guard Digi 200 Smart", capacity: "4 KVA", voltageRange: "90V – 300V", cutoff: "Low: 90V | High: 290V", price: "₹3,200", features: ["Digital Display", "Time Delay", "Auto Reset"] },
                { name: "V-Guard Crystal Plus", capacity: "5 KVA", voltageRange: "100V – 280V", cutoff: "Low: 100V | High: 280V", price: "₹4,000", features: ["Wall Mount", "LED Indicator", "Over-load Protection"] },
            ]
        },
        {
            brand: "Seiko",
            winding: "Aluminium",
            models: [
                { name: "Seiko AC Stabilizer", capacity: "4 KVA", voltageRange: "110V – 270V", cutoff: "Low: 110V | High: 270V", price: "₹2,400", features: ["Time Delay Relay", "Auto Cut-off", "Compact Design"] },
                { name: "Seiko Heavy Duty", capacity: "5 KVA", voltageRange: "100V – 280V", cutoff: "Low: 100V | High: 280V", price: "₹2,900", features: ["Heavy Duty Transformer", "Surge Protection", "Wide Range"] },
            ]
        },
        {
            brand: "Microtek",
            winding: "Aluminium",
            models: [
                { name: "Microtek EM4130+", capacity: "4 KVA", voltageRange: "130V – 300V", cutoff: "Low: 130V | High: 280V", price: "₹2,600", features: ["Digital Meter", "5-Year Warranty", "Auto Restart"] },
                { name: "Microtek EM5170+", capacity: "5 KVA", voltageRange: "130V – 300V", cutoff: "Low: 130V | High: 280V", price: "₹3,100", features: ["Time Delay", "LED Display", "Wall Mountable"] },
            ]
        },
        {
            brand: "Bluebird",
            winding: "Copper",
            models: [
                { name: "Bluebird Copper 4 KVA", capacity: "4 KVA", voltageRange: "140V – 300V", cutoff: "Low: 140V | High: 280V", price: "₹3,500", features: ["Pure Copper Winding", "Long Life", "Better Efficiency"] },
                { name: "Bluebird Copper 5 KVA", capacity: "5 KVA", voltageRange: "140V – 300V", cutoff: "Low: 140V | High: 280V", price: "₹4,200", features: ["Copper Winding", "Heavy Gauge", "Surge Absorber"] },
            ]
        },
    ];

    const mainlineStabilizers = [
        { name: "Lifebird 5 KVA Mainline", capacity: "5 KVA", voltageRange: "150V – 270V", price: "₹7,500", features: ["Protects Entire Home", "Digital Display", "Auto Reset", "5 Outlets"] },
        { name: "Lifebird 7.5 KVA Mainline", capacity: "7.5 KVA", voltageRange: "150V – 270V", price: "₹10,500", features: ["Large Home / Small Office", "Time Delay Circuit", "Over-load Sensor", "MCB Protection"] },
        { name: "Lifebird 10 KVA Mainline", capacity: "10 KVA", voltageRange: "140V – 270V", price: "₹14,000", features: ["Full Home / Commercial", "Heavy Duty Transformer", "Digital Voltmeter", "Wide Input Range"] },
    ];

    const voltageRanges = [
        { label: "Low Cut-off Options", values: ["90 V", "100 V", "110 V", "130 V", "140 V", "150 V", "170 V"], color: "bg-red-50 border-red-200 text-red-700" },
        { label: "High Cut-off Options", values: ["250 V", "270 V", "280 V", "300 V", "500 V"], color: "bg-green-50 border-green-200 text-green-700" },
    ];

    const benefits = [
        { icon: <Shield className="h-6 w-6" />, title: "AC Protection", description: "Protects your AC compressor and PCB from dangerous voltage fluctuations" },
        { icon: <Zap className="h-6 w-6" />, title: "Voltage Regulation", description: "Maintains steady 220V output regardless of input fluctuations" },
        { icon: <Activity className="h-6 w-6" />, title: "Extended Appliance Life", description: "Reduces wear on motors and electronics caused by voltage stress" },
        { icon: <AlertTriangle className="h-6 w-6" />, title: "Surge Protection", description: "Guards against sudden spikes that can permanently damage equipment" },
    ];

    const applications = [
        { name: "Homes & Villas", icon: <Home className="h-6 w-6" /> },
        { name: "Offices & Shops", icon: <Building className="h-6 w-6" /> },
        { name: "Hotels & Resorts", icon: <Hotel className="h-6 w-6" /> },
        { name: "Hospitals & Clinics", icon: <Hospital className="h-6 w-6" /> },
        { name: "Factories & Warehouses", icon: <Factory className="h-6 w-6" /> },
        { name: "Schools & Colleges", icon: <Building className="h-6 w-6" /> },
    ];

    const faqs = [
        {
            q: "Do I need a stabilizer for my inverter AC?",
            a: "Modern inverter ACs have a built-in wide voltage range (typically 145V–290V) and don't strictly require a stabilizer. However, in areas of Bareilly and UP where voltage drops below 140V or spikes above 290V frequently, adding a stabilizer provides extra protection for the PCB and compressor — extending your AC's life."
        },
        {
            q: "What is the difference between aluminium and copper winding stabilizers?",
            a: "Copper winding stabilizers (Bluebird, V-Guard) have better conductivity, generate less heat, and last longer — making them more efficient. Aluminium winding stabilizers (Microtek, Seiko) are lighter and cheaper but have slightly higher resistance. For long-term use, copper winding is recommended. For budget installations, aluminium is a reliable choice."
        },
        {
            q: "What KVA stabilizer do I need for a 1.5 Ton AC?",
            a: "A 4 KVA stabilizer is sufficient for a 1.5 Ton AC (which draws approximately 1.5–2 kW). For a 2 Ton AC, choose a 5 KVA stabilizer. We recommend always sizing up by at least 20% for safety margin and motor start-up surge."
        },
        {
            q: "What is a mainline stabilizer and when do I need one?",
            a: "A mainline (whole-home) stabilizer is installed at the main distribution board to protect all appliances in the house — ACs, refrigerators, TVs, washing machines — simultaneously. If your area has frequent voltage problems, a Lifebird 5–10 KVA mainline stabilizer is more cost-effective than installing individual stabilizers for each appliance."
        },
        {
            q: "What does the low cut-off and high cut-off voltage mean?",
            a: "Low cut-off is the minimum input voltage below which the stabilizer disconnects your appliance to prevent damage from under-voltage. High cut-off is the maximum voltage above which it disconnects to protect from over-voltage. For example, a 90V–270V stabilizer will keep your AC safe as long as supply voltage stays in that range."
        },
        {
            q: "Is V-Guard or Bluebird better for AC stabilizers?",
            a: "Both are good. V-Guard is a nationally recognized brand with a wide service network and copper winding — great for reliability. Bluebird offers pure copper winding at slightly lower prices. Seiko and Microtek are value-for-money with aluminium winding, suitable for areas with moderate fluctuations. We can recommend the right model for your specific requirement."
        },
        {
            q: "How do I install a stabilizer for my AC?",
            a: "The stabilizer is connected between the power outlet and your AC's power plug. The stabilizer's input plug goes into the wall socket, and the AC's power cord plugs into the stabilizer's output socket. It should be mounted on the wall near your AC, away from direct sunlight and moisture. Our team provides professional installation with every purchase."
        },
        {
            q: "What is the warranty on stabilizers you sell?",
            a: "Warranty varies by brand: V-Guard offers 3 years, Microtek 5 years, Bluebird 2 years, Seiko 1 year, and Lifebird mainline stabilizers come with 2 years warranty. We also provide after-sales service support for all brands we stock."
        },
    ];

    const windingColors: Record<string, string> = {
        Copper: "bg-amber-100 text-amber-800 border-amber-200",
        Aluminium: "bg-slate-100 text-slate-700 border-slate-200",
    };

    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>AC Stabilizer Price in Bareilly | V-Guard, Microtek, Bluebird, Lifebird | Khandelwal Distributors</title>
                <meta name="description" content="Buy AC stabilizers and mainline stabilizers in Bareilly, UP. V-Guard, Seiko, Microtek (aluminium winding), Bluebird (copper winding) — 4 KVA to 5 KVA. Lifebird mainline up to 10 KVA. Best prices with installation." />
                <meta name="keywords" content="AC stabilizer Bareilly, voltage stabilizer UP, V-Guard stabilizer Bareilly, Microtek stabilizer, Bluebird copper winding stabilizer, Lifebird mainline stabilizer, 4 KVA stabilizer, 5 KVA stabilizer, 10 KVA stabilizer Bareilly" />
                <meta property="og:title" content="AC Stabilizer & Mainline Stabilizer Dealers in Bareilly | V-Guard, Microtek, Bluebird, Lifebird" />
                <meta property="og:description" content="Best AC stabilizers in Bareilly. V-Guard, Seiko, Microtek (aluminium), Bluebird (copper) — 4–5 KVA for ACs. Lifebird mainline up to 10 KVA for whole-home protection." />
                <meta property="og:type" content="product" />
                <meta property="og:image" content="https://www.khandelwaldistributors.com/og/inverter-split-ac.jpg" />
                <meta property="og:url" content="https://www.khandelwaldistributors.com/products/stabilizers" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AC Stabilizer Price in Bareilly | V-Guard, Microtek, Bluebird, Lifebird" />
                <meta name="twitter:description" content="Best AC stabilizers in Bareilly. 4–5 KVA for ACs, up to 10 KVA mainline. V-Guard, Microtek, Bluebird, Lifebird brands with installation." />
                <link rel="canonical" href="https://www.khandelwaldistributors.com/products/stabilizers" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Voltage Stabilizers for AC & Home",
                        "category": "Electrical Protection Equipment",
                        "description": "AC stabilizers and mainline stabilizers in Bareilly, UP. V-Guard, Seiko, Microtek, Bluebird, Lifebird brands from 4 KVA to 10 KVA.",
                        "brand": ["V-Guard", "Seiko", "Microtek", "Bluebird", "Lifebird"],
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "2400",
                            "highPrice": "14000",
                            "priceCurrency": "INR",
                            "availability": "https://schema.org/InStock"
                        },
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Khandelwal Distributors",
                            "address": "G-35, MCI Plaza, Civil Lines, Bareilly, Uttar Pradesh, India",
                            "telephone": "+917017497935"
                        }
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(f => ({
                            "@type": "Question",
                            "name": f.q,
                            "acceptedAnswer": { "@type": "Answer", "text": f.a }
                        }))
                    })}
                </script>
            </Helmet>

            <Header />

            <main>
                {/* Hero */}
                <section
                    className="relative bg-gradient-to-r from-primary/90 to-secondary/90 py-16"
                    style={{ backgroundImage: `url(${inverterSplitAc})`, backgroundSize: "cover", backgroundPosition: "center" }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="container mx-auto px-4 lg:pl-12 xl:pl-16 relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <Link to="/products" className="text-white hover:text-accent-warm transition-colors">
                                <ArrowLeft className="h-6 w-6" />
                            </Link>
                            <h1 className="text-4xl md:text-5xl font-bold text-white">
                                AC & Mainline Stabilizers in Bareilly
                            </h1>
                        </div>
                        <p className="text-xl text-white/90 max-w-3xl mb-8">
                            Protect your air conditioners and home appliances from voltage fluctuations.
                            V-Guard, Seiko, Microtek, Bluebird (4–5 KVA) and Lifebird mainline stabilizers up to 10 KVA.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button variant="cta" size="lg" onClick={() => window.open("tel:+917017497935", "_self")}>
                                <Phone className="h-5 w-5" />
                                Get Best Price
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-green-600 text-white border-green-600 hover:bg-green-700"
                                onClick={() => window.open("https://wa.me/917017497935?text=Hello, I need information about Stabilizers in Bareilly", "_blank")}
                            >
                                <MessageCircle className="h-5 w-5" />
                                WhatsApp
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-primary mb-12">
                            Why You Need a Stabilizer
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {benefits.map((b, i) => (
                                <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                                            {b.icon}
                                        </div>
                                        <CardTitle className="text-lg">{b.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{b.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Voltage Range Reference */}
                <section className="py-10 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold text-center text-primary mb-8">
                            Voltage Protection Ranges Available
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                            {voltageRanges.map((vr, i) => (
                                <div key={i} className={`rounded-xl border p-5 ${vr.color}`}>
                                    <h3 className="font-semibold text-base mb-3">{vr.label}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {vr.values.map((v) => (
                                            <span key={v} className="bg-white/70 border px-3 py-1 rounded-full text-sm font-medium">
                                                {v}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-sm text-muted-foreground mt-4">
                            Different models have different cut-off settings. Ask us to match the right stabilizer to your local voltage conditions.
                        </p>
                    </div>
                </section>

                {/* AC Stabilizers */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-primary mb-3">AC Stabilizers — 4 KVA &amp; 5 KVA</h2>
                            <p className="text-muted-foreground text-lg">For 1–2 Ton split, window &amp; cassette air conditioners</p>
                        </div>

                        <div className="space-y-10">
                            {acStabilizers.map((brand, bi) => (
                                <div key={bi}>
                                    <div className="flex items-center gap-3 mb-5">
                                        <h3 className="text-2xl font-bold text-foreground">{brand.brand}</h3>
                                        <Badge className={`border ${windingColors[brand.winding]}`}>
                                            {brand.winding} Winding
                                        </Badge>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {brand.models.map((model, mi) => (
                                            <Card key={mi} className="hover:shadow-xl transition-shadow">
                                                <CardHeader>
                                                    <div className="flex justify-between items-start">
                                                        <CardTitle className="text-lg text-primary">{model.name}</CardTitle>
                                                        <span className="text-xl font-bold text-accent-warm whitespace-nowrap ml-2">{model.price}</span>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 mt-1">
                                                        <Badge variant="outline">{model.capacity}</Badge>
                                                        <Badge variant="outline" className="text-xs">{model.voltageRange}</Badge>
                                                    </div>
                                                    <p className="text-xs text-muted-foreground mt-1">Cut-off: {model.cutoff}</p>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="space-y-1 mb-4">
                                                        {model.features.map((f, fi) => (
                                                            <div key={fi} className="flex items-center text-sm gap-2">
                                                                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                                                                {f}
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <Button className="w-full" onClick={() => window.open("tel:+917017497935", "_self")}>
                                                        <Phone className="h-4 w-4" />
                                                        Get Quote
                                                    </Button>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mainline Stabilizers */}
                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-primary mb-3">Mainline Stabilizers — up to 10 KVA</h2>
                            <p className="text-muted-foreground text-lg">
                                <strong>Lifebird</strong> — protects every appliance in your home from a single unit
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {mainlineStabilizers.map((product, i) => (
                                <Card key={i} className="hover:shadow-xl transition-shadow border-2 hover:border-primary/30">
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <CardTitle className="text-lg text-primary">{product.name}</CardTitle>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            <Badge>{product.capacity}</Badge>
                                            <Badge variant="outline">{product.voltageRange}</Badge>
                                        </div>
                                        <div className="text-2xl font-bold text-accent-warm mt-2">{product.price}</div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-1 mb-4">
                                            {product.features.map((f, fi) => (
                                                <div key={fi} className="flex items-center text-sm gap-2">
                                                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                                                    {f}
                                                </div>
                                            ))}
                                        </div>
                                        <Button className="w-full" onClick={() => window.open("tel:+917017497935", "_self")}>
                                            <Phone className="h-4 w-4" />
                                            Get Quote
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-primary mb-10">Where We Install Stabilizers</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {applications.map((app, i) => (
                                <div key={i} className="bg-card border rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                                    <div className="text-primary mx-auto mb-2 flex justify-center">{app.icon}</div>
                                    <span className="font-medium text-sm">{app.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-3xl font-bold text-center text-primary mb-10">
                            Frequently Asked Questions — Stabilizers
                        </h2>
                        <div className="space-y-3">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-card border rounded-xl overflow-hidden">
                                    <button
                                        className="w-full text-left px-6 py-4 flex justify-between items-center gap-4 hover:bg-muted/40 transition-colors"
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    >
                                        <span className="font-semibold text-foreground">{faq.q}</span>
                                        {openFaq === i ? (
                                            <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                                        ) : (
                                            <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                                        )}
                                    </button>
                                    {openFaq === i && (
                                        <div className="px-6 pb-5 text-muted-foreground leading-relaxed border-t">
                                            <p className="pt-4">{faq.a}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="bg-primary rounded-2xl p-8 text-white text-center">
                            <h2 className="text-3xl font-bold mb-4">
                                Stabilizer Sales &amp; Installation in Bareilly
                            </h2>
                            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                                Get the right stabilizer for your AC or home at the best price.
                                Free advice, quick installation across Bareilly, Pilibhit, Shahjahanpur &amp; nearby areas.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button variant="secondary" size="lg" onClick={() => window.open("tel:+917017497935", "_self")}>
                                    <Phone className="h-5 w-5" />
                                    Call: +91 7017497935
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="bg-green-600 text-white border-green-600 hover:bg-green-700"
                                    onClick={() => window.open("https://wa.me/917017497935?text=Hello, I need a stabilizer quote", "_blank")}
                                >
                                    <MessageCircle className="h-5 w-5" />
                                    WhatsApp Us
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Stabilizers;
