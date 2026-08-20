import { useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  Workflow,
  Bell,
  Boxes,
  Wrench,
  ShieldCheck,
  FileText,
  Wallet,
} from "lucide-react";

const features = [
  { icon: Bell, label: "Complaint Tracking", desc: "SLA timers, auto-assigned, resolved on time" },
  { icon: Boxes, label: "Serial No. Inventory", desc: "Every unit tracked from warehouse to customer" },
  { icon: Wrench, label: "Technician Dispatch", desc: "Assign jobs in 2 clicks — GPS-ready" },
  { icon: ShieldCheck, label: "Warranty Auto-Alerts", desc: "Know expiries before your customer calls" },
  { icon: FileText, label: "Digital Challans", desc: "Instant PDF challans generated in seconds" },
  { icon: Wallet, label: "Payment Ledger", desc: "Cash, UPI, cheque, finance — all tracked" },
];

// ServiceFlow brand icon pulled from the web, with a graceful fallback badge.
const ServiceFlowMark = () => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="inline-flex items-center gap-2.5">
        <span className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
          <Workflow className="h-5 w-5 text-primary-foreground" />
        </span>
        <span className="text-xl font-bold text-foreground">ServiceFlow</span>
      </div>
    );
  }

  return (
    <img
      src="https://serviceflow.in/serviceflow.png"
      alt="ServiceFlow"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className="h-10 w-auto max-w-[200px] object-contain rounded-xl"
    />
  );
};

const ServiceFlowShowcase = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto rounded-2xl border border-border bg-card shadow-sm p-8 md:p-10">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-9">
            <ServiceFlowMark />

            <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Workflow className="h-3.5 w-3.5 text-primary" />
              Software we build &amp; run on
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-3 leading-tight">
              The all-in-one CRM built for HVAC dealers
            </h2>
            <p className="text-muted-foreground text-sm md:text-base mt-3 max-w-2xl leading-relaxed">
              Track every complaint, order, inventory item, and payment in real time —
              the same platform we use to run our own service operations.
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-9">
            {features.map((f) => (
              <div
                key={f.label}
                className="flex items-start gap-3 rounded-xl border border-border/70 bg-background p-4 hover:border-primary/30 hover:shadow-sm transition-all duration-300"
              >
                <span className="flex-shrink-0 rounded-lg bg-primary/10 p-2">
                  <f.icon className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground leading-tight">{f.label}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://serviceflow.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200"
            >
              Book a free demo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="https://serviceflow.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Explore at serviceflow.in
            </a>
          </div>

          {/* Social proof */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            Trusted by <span className="font-semibold text-foreground">500+ dealers</span> across India
            {" · "}Plans from <span className="font-semibold text-foreground">₹1,999/mo</span>
            {" · "}<span className="font-semibold text-foreground">14-day free trial</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceFlowShowcase;
