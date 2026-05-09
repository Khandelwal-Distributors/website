import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

const products = [
    {
        name: "Cuboid",
        tag: "Cooling Only",
        tagColor: "bg-sky-900/60 text-sky-300",
        price: "₹27,999",
        tagline: "0.8 Ton Portable AC",
        features: ["8530 BTU cooling", "80-120 sqft coverage", "Cool · Dry · Fan · Auto"],
        image: "https://arcticon.in/assets/Cuboid.png",
        link: "https://arcticon.in/cuboid.html",
        bg: "bg-gradient-to-b from-sky-950 to-slate-900",
    },
    {
        name: "Cuboid-X",
        tag: "Hot & Cold",
        tagColor: "bg-amber-900/60 text-amber-300",
        price: "₹29,999",
        tagline: "0.8 Ton Hot & Cold AC",
        features: ["8530 BTU cooling + heating", "Year-round comfort", "Cool · Heat · Dry · Fan"],
        image: "https://arcticon.in/assets/CuboidX.png",
        link: "https://arcticon.in/cuboid-x.html",
        bg: "bg-gradient-to-b from-amber-950 to-slate-900",
    },
];

const ArticonHighlight = () => {
    return (
        <section className="py-10 bg-gradient-to-r from-slate-900 to-slate-800 border-y border-white/10">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Header row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-white rounded-xl shadow-sm border border-white/10 px-3 py-2">
                                <img
                                    src="https://arcticon.in/assets/TextLogoTransparent.png"
                                    alt="Arcticon"
                                    className="h-8 w-auto object-contain"
                                />
                            </div>
                            <div>
                                <p className="font-semibold text-sm leading-tight text-white">India's Most Affordable Portable AC</p>
                                <p className="text-xs text-slate-400">No installation · Plug &amp; cool · 🇮🇳 Made in India</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                            <span className="h-2 w-2 rounded-full bg-green-500" />
                            In Stock · Free delivery · 4.8 ★ (1,500+ reviews)
                        </div>
                    </div>

                    {/* Product cards */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-5">
                        {products.map((product) => (
                            <a
                                key={product.name}
                                href={product.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group flex items-center gap-4 rounded-2xl border border-white/10 ${product.bg} p-4 hover:shadow-lg hover:shadow-black/30 transition-all duration-300 hover:-translate-y-0.5`}
                            >
                                {/* Product image */}
                                <div className="flex-shrink-0 w-32 h-32 flex items-center justify-center">
                                    <img
                                        src={product.image}
                                        alt={`Arcticon ${product.name} portable AC`}
                                        className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Details */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${product.tagColor}`}>
                                            {product.tag}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-base leading-tight text-white">{product.name}</h3>
                                    <p className="text-xs text-slate-400 mb-2">{product.tagline}</p>
                                    <ul className="space-y-0.5 mb-2">
                                        {product.features.map((f) => (
                                            <li key={f} className="flex items-center gap-1.5 text-xs text-slate-400">
                                                <span className="h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex items-center justify-between">
                                        <span className="font-black text-white text-base">{product.price}</span>
                                        <span className="flex items-center gap-1 text-xs font-semibold text-white group-hover:gap-2 transition-all">
                                            View <ArrowRight className="h-3 w-3" />
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open("https://arcticon.in", "_blank", "noopener,noreferrer")}
                            className="gap-1.5 text-sm border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent"
                        >
                            <ExternalLink className="h-3.5 w-3.5" />
                            Visit arcticon.in
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArticonHighlight;
