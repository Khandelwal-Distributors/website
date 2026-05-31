import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, XCircle, Zap, ExternalLink, LayoutDashboard } from "lucide-react";

const features = [
  { icon: "🚨", label: "Complaint Tracking", desc: "SLA timers, auto-assigned, resolved on time" },
  { icon: "📦", label: "Serial No. Inventory", desc: "Every unit tracked from warehouse to customer" },
  { icon: "🔧", label: "Technician Dispatch", desc: "Assign jobs in 2 clicks — GPS-ready" },
  { icon: "🛡️", label: "Warranty Auto-Alerts", desc: "Know expiries before your customer calls" },
  { icon: "📄", label: "Digital Challans", desc: "Instant PDF challans generated in seconds" },
  { icon: "📊", label: "Payment Ledger", desc: "Cash, UPI, cheque, finance — all tracked" },
];

const beforeItems = [
  "Complaints managed on WhatsApp groups",
  "Inventory counted in Excel sheets",
  "Technician dispatch by phone call",
  "Warranty expiry missed — angry customer calls",
  "Challan books lost, unrecoverable",
];

const afterItems = [
  "Every complaint assigned, tracked, closed on time",
  "Live inventory by serial number across branches",
  "Technician assigned in 2 clicks — GPS-ready",
  "AMC & warranty auto-alerts before expiry",
  "Instant PDF challans with challan numbers",
];

const ServiceFlowShowcase = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % features.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-14 bg-gradient-to-br from-slate-950 via-[#0a1628] to-slate-900 border-y border-white/10 overflow-hidden relative">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-600/5 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">

          {/* Top badge */}
          <div className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
              <Zap className="h-3 w-3 fill-blue-400" />
              Built for HVAC Dealers · Like Us
            </span>
          </div>

          {/* Headline */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-3 leading-tight tracking-tight">
              Still running your dealership<br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                on WhatsApp & paper?
              </span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              ServiceFlow is the all-in-one CRM built for AC dealers &amp; distributors.
              Track every complaint, order, inventory, and payment — in real time.
            </p>
          </div>

          {/* Before vs After */}
          <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-3xl mx-auto">
            {/* Before */}
            <div className="bg-red-950/25 border border-red-900/40 rounded-2xl p-5">
              <p className="text-red-400 text-xs font-extrabold uppercase tracking-widest mb-4">
                😤 The Old Way
              </p>
              <ul className="space-y-2.5">
                {beforeItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300 leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* After */}
            <div className="bg-emerald-950/25 border border-emerald-800/40 rounded-2xl p-5 relative overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
              <p className="text-emerald-400 text-xs font-extrabold uppercase tracking-widest mb-4">
                ⚡ With ServiceFlow
              </p>
              <ul className="space-y-2.5">
                {afterItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200 leading-tight font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Animated feature grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
            {features.map((f, i) => (
              <div
                key={f.label}
                className={`rounded-xl p-3.5 border transition-all duration-500 cursor-default ${
                  i === active
                    ? "bg-blue-600/20 border-blue-500/60 shadow-lg shadow-blue-500/15 scale-[1.03]"
                    : "bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20"
                }`}
              >
                <span className="text-xl leading-none">{f.icon}</span>
                <p
                  className={`text-xs font-bold mt-2 leading-tight transition-colors ${
                    i === active ? "text-blue-300" : "text-white"
                  }`}
                >
                  {f.label}
                </p>
                <p className="text-xs text-slate-400 leading-tight mt-0.5">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Dashboard mini-preview hint */}
          <div className="flex items-center justify-center gap-2 mb-7 text-xs text-slate-500">
            <LayoutDashboard className="h-3.5 w-3.5" />
            <span>
              <span className="font-mono text-slate-400">app.serviceflow.in/dashboard</span>
              {" "}— live dashboard your team will actually use
            </span>
          </div>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://serviceflow.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
            >
              {/* pulse ring */}
              <span className="absolute inset-0 rounded-xl ring-2 ring-blue-400/40 animate-ping opacity-60 pointer-events-none" />
              <Zap className="h-4 w-4 fill-white" />
              Book a Free Demo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="https://serviceflow.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-blue-300 transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Explore at serviceflow.in
            </a>
          </div>

          {/* Social proof footer */}
          <p className="text-center text-xs text-slate-500 mt-5">
            Trusted by{" "}
            <span className="text-slate-300 font-semibold">500+ dealers</span> across India
            {" · "}Plans from{" "}
            <span className="text-slate-300 font-semibold">₹1,999/mo</span>
            {" · "}
            <span className="text-slate-300 font-semibold">14-day free trial</span>
          </p>

        </div>
      </div>
    </section>
  );
};

export default ServiceFlowShowcase;
