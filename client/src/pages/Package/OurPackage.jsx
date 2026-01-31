import React from "react";
import { motion } from "framer-motion";

/* =========================
   PRICING DATA
========================= */

const plans = [
  {
    name: "Web Essential",
    price: "$999 / yr",
    gradient: "from-[#01686d] to-[#00444b]",
  },
  {
    name: "Web Advanced",
    price: "$1999 / yr",
    gradient: "from-[#f27b22] to-[#c85f12]",
    badge: "Best Seller",
  },
  {
    name: "Web Professional",
    price: "$2999 / yr",
    gradient: "from-[#01686d] to-[#00444b]",
  },
  {
    name: "Web Enterprise",
    price: "$3999 / yr",
    gradient: "from-[#f27b22] to-[#c85f12]",
  },
];

/* =========================
   TABLE DATA
========================= */

const rows = [
  { e:{text:"Setup Fee - $299",ok:true}, a:{text:"Setup Fee - $399",ok:true}, p:{text:"Setup Fee - $499",ok:true}, en:{text:"Setup Fee - $599",ok:true}},
  { e:{text:"Dynamic Website",ok:true}, a:{text:"Ultra Dynamic Website",ok:true}, p:{text:"Custom Website",ok:true}, en:{text:"Ultra Custom Website",ok:true}},
  { e:{text:"Website Pages - Upto 10",ok:true}, a:{text:"Website Pages - Upto 15",ok:true}, p:{text:"Website Pages - Upto 30",ok:true}, en:{text:"Website Pages - Upto 50",ok:true}},
  { e:{text:"New Logo Design",ok:false}, a:{text:"New Logo Design",ok:true}, p:{text:"New Logo Design",ok:true}, en:{text:"New Logo Design",ok:true}},
  { e:{text:"AI Chat Feature",ok:false}, a:{text:"AI Chat Feature",ok:true}, p:{text:"AI Chat Feature",ok:true}, en:{text:"AI Chat Feature",ok:true}},
  { e:{text:"SEO Friendly Website",ok:true}, a:{text:"SEO Friendly Website",ok:true}, p:{text:"SEO Friendly Website",ok:true}, en:{text:"SEO Friendly Website",ok:true}},
  { e:{text:"Explainer Video",ok:false}, a:{text:"Explainer Video",ok:false}, p:{text:"1 Minute Video",ok:true}, en:{text:"2 Minute Video",ok:true}},
  { e:{text:"Daily Backups",ok:false}, a:{text:"Daily Backups",ok:true}, p:{text:"Daily Backups",ok:true}, en:{text:"Daily Backups",ok:true}},
  { e:{text:"Dedicated Account Manager",ok:false}, a:{text:"Dedicated Account Manager",ok:false}, p:{text:"Dedicated Account Manager",ok:true}, en:{text:"Dedicated Account Manager",ok:true}},
  { e:{text:"Social Media Profile Creation",ok:false}, a:{text:"Social Media Profile Creation",ok:true}, p:{text:"Social Media Profile Creation",ok:true}, en:{text:"Social Media Profile Creation",ok:true}},
  { e:{text:"Social Media Profile Linking",ok:false}, a:{text:"Social Media Profile Linking",ok:true}, p:{text:"Social Media Profile Linking",ok:true}, en:{text:"Social Media Profile Linking",ok:true}},
];

/* =========================
   TABLE CELL
========================= */

const Cell = ({ text, ok }) => (
  <td className="border px-4 py-3">
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm whitespace-nowrap">{text}</span>
      <span className={`font-bold text-lg ${ok ? "text-[#01686d]" : "text-red-500"}`}>
        {ok ? "✓" : "✖"}
      </span>
    </div>
  </td>
);

/* =========================
   PAGE
========================= */

export default function OurPackage() {
  return (
    <>
      {/* ===== HEADER (MATCHING SERVICES HEADER) ===== */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full py-28 sm:py-32 px-5 text-center overflow-hidden bg-[#e9f4f3]"
      >
        {/* ===== BACKGROUND SHAPES ===== */}
        <div className="absolute -top-32 -left-32 w-[380px] h-[180px] bg-[#00444b] rotate-45 opacity-90" />
        <div className="absolute top-24 left-40 w-[80px] h-[80px] bg-[#f27b22] rotate-45 shadow-lg" />

        <div className="absolute -bottom-36 -left-28 w-[380px] h-[180px] bg-[#01686d] rotate-45 opacity-90" />
        <div className="absolute bottom-24 left-16 w-[240px] h-[6px] bg-[#f27b22] rotate-45" />

        <div className="absolute -top-36 -right-36 w-[400px] h-[200px] bg-[#00444b] rotate-45 opacity-90" />
        <div className="absolute top-28 right-28 w-[200px] h-[6px] bg-[#f27b22] rotate-45" />

        <div className="absolute -bottom-24 right-24 w-[100px] h-[100px] bg-[#f27b22] rotate-45 shadow-lg" />

        {/* Soft Glass */}
        <div className="absolute top-[35%] left-[30%] w-[200px] h-[200px] bg-[#01686d]/10 rotate-45 rounded-xl hidden sm:block" />
        <div className="absolute bottom-[25%] right-[35%] w-[220px] h-[220px] bg-[#00444b]/10 rotate-45 rounded-xl hidden sm:block" />

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00444b] mb-3">
            Our Web Packages
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#01686d] leading-relaxed">
            Flexible pricing plans designed for business growth
          </p>
        </div>
      </motion.div>

      {/* ===== BODY ===== */}
      <div className="bg-white px-4 md:px-10 pb-24">
        {/* ===== PREMIUM PRICING CARDS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-20 mb-28">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -12, scale: 1.04 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl p-[1.5px] bg-gradient-to-br from-[#01686d] via-[#f27b22] to-[#00444b]"
            >
              <div className="relative bg-white rounded-3xl p-8 h-full backdrop-blur-xl">
                {plan.badge && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2
                                   bg-[#f27b22] text-white text-xs font-bold
                                   px-4 py-1 rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                )}
                <div className={`rounded-2xl text-white text-center py-8 mb-8 bg-gradient-to-r ${plan.gradient}`}>
                  <h2 className="text-lg font-semibold tracking-wide">{plan.name}</h2>
                  <p className="text-4xl font-extrabold mt-2">{plan.price}</p>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 mb-8">
                  <li>✔ SEO Optimized Website</li>
                  <li>✔ Mobile Responsive</li>
                  <li>✔ Fast Performance</li>
                  <li>✔ Secure Hosting</li>
                </ul>
                <button
                  className="w-full py-3 rounded-xl font-semibold text-white
                             bg-gradient-to-r from-[#01686d] to-[#00444b]
                             hover:from-[#00444b] hover:to-[#01686d]
                             transition shadow-lg"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== TABLE ===== */}
        <div className="max-w-7xl mx-auto bg-white rounded-2xl border shadow-xl">
          <div className="bg-gradient-to-r from-[#01686d] to-[#00444b]
                          text-white px-6 py-4 font-bold text-lg
                          flex justify-between rounded-t-2xl">
            <span>First Hand Web Analysis</span>
            <span className="text-2xl">+</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1200px] border-collapse text-sm">
              <thead className="bg-gray-50 font-bold">
                <tr>
                  <th className="border p-4 text-left">Web Essential</th>
                  <th className="border p-4 text-left">Web Advanced</th>
                  <th className="border p-4 text-left">Web Professional</th>
                  <th className="border p-4 text-left">Web Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="odd:bg-gray-50">
                    <Cell {...row.e} />
                    <Cell {...row.a} />
                    <Cell {...row.p} />
                    <Cell {...row.en} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="w-full h-2 bg-gradient-to-r from-[#01686d] via-[#f27b22] to-[#00444b]" />
    </>
  );
}
