import bda from "@/assets/clients/bda.jpeg";
import blagro from "@/assets/clients/blagro.png";
import clGuptaExports from "@/assets/clients/clguptaexports.jpeg";
import dps from "@/assets/clients/dps.jpeg";
import futureGroup from "@/assets/clients/futuregroupofinstitutions.jpg";
import governmentOfIndia from "@/assets/clients/government-of-india.png";
import iffco from "@/assets/clients/iffco.avif";
import indianArmy from "@/assets/clients/indianarmy.png";
import marriott from "@/assets/clients/mariott.png";
import nagarNigamBareilly from "@/assets/clients/nagarnigambareilly.png";
import radisson from "@/assets/clients/radisson.jpg";
import ssvgi from "@/assets/clients/ssvgi.jpg";

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  { name: "IFFCO", logo: iffco },
  { name: "Government of India", logo: governmentOfIndia },
  { name: "Indian Army", logo: indianArmy },
  { name: "Bareilly Development Authority", logo: bda },
  { name: "Nagar Nigam Bareilly", logo: nagarNigamBareilly },
  { name: "BL Agro", logo: blagro },
  { name: "CL Gupta Exports", logo: clGuptaExports },
  { name: "Marriott", logo: marriott },
  { name: "Radisson", logo: radisson },
  { name: "Delhi Public School", logo: dps },
  { name: "Future Group of Institutions", logo: futureGroup },
  { name: "SSVGI", logo: ssvgi },
];

const ClientLogos = () => {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4">
            Our <span className="text-primary">Clients</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proud to have delivered trusted HVAC and engineering solutions for
            leading organisations across government, defence, industry,
            hospitality, and education.
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-background to-transparent" />

        {/* Marquee: list duplicated for a seamless 0 → -50% loop, pauses on hover. */}
        <div className="flex w-max gap-8 animate-scroll py-2">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-60 flex flex-col items-center gap-4"
            >
              <div className="w-full h-44 bg-white rounded-2xl border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center justify-center p-6">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  loading="lazy"
                  className="max-h-32 max-w-full object-contain"
                />
              </div>
              <span className="text-base font-semibold text-foreground text-center leading-snug">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
