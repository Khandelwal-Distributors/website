import { Link } from "react-router-dom";

const TickerTape = () => {
  const items = [
    { type: "sale", text: "🔥 End of Season Sale - Up to 40% OFF", link: "/#sale" },
    { type: "category", text: "Inverter Split AC", link: "/products/inverter-split-ac" },
    { type: "brand", text: "Daikin", link: "/brands/daikin" },
    { type: "category", text: "VRV Systems", link: "/products/vrv-system" },
    { type: "brand", text: "Carrier", link: "/brands/carrier" },
    { type: "sale", text: "💰 Special Offers on Rental ACs", link: "/#rent" },
    { type: "category", text: "Ductable AC", link: "/products/ductable-ac" },
    { type: "brand", text: "Mitsubishi Heavy", link: "/brands/mitsubishi-heavy" },
    { type: "category", text: "Cassette AC", link: "/products/cassette-ac" },
    { type: "brand", text: "Voltas", link: "/brands/voltas" },
    { type: "category", text: "Window AC", link: "/products/window-ac" },
    { type: "brand", text: "Godrej", link: "/brands/godrej" },
    { type: "sale", text: "🎉 Best Prices on Installation", link: "/#contact" },
    { type: "category", text: "Floor Standing AC", link: "/products/floor-standing-ac" },
    { type: "brand", text: "Midea", link: "/brands/midea" },
  ];

  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="bg-slate-100 text-slate-800 overflow-hidden border-b border-slate-200">
      <div className="relative flex">
        <div className="flex animate-scroll">
          {duplicatedItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="flex-shrink-0 px-8 py-2.5 hover:bg-slate-200 transition-colors duration-200 whitespace-nowrap text-sm font-medium"
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TickerTape;
