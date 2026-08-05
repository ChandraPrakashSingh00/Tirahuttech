import React from "react";
import { motion } from "framer-motion";

/* =========================
   SMO PRICING DATA
========================= */

const plans = [
  {
    name: "SMO Essential",
    price: "$200 / mo",
    gradient: "from-[#01686d] to-[#00444b]",
  },
  {
    name: "SMO Advanced",
    price: "$300 / mo",
    gradient: "from-[#f27b22] to-[#c85f12]",
    badge: "Best Seller",
  },
  {
    name: "SMO Professional",
    price: "$400 / mo",
    gradient: "from-[#01686d] to-[#00444b]",
  },
  {
    name: "SMO Enterprise",
    price: "$500 / mo",
    gradient: "from-[#f27b22] to-[#c85f12]",
  },
];

/* =========================
   TABLE DATA
========================= */

const rows = [
  { e:{text:"No. of Hours per Channel - 15",ok:true}, a:{text:"No. of Hours per Channel - 40",ok:true}, p:{text:"No. of Hours per Channel - 60",ok:true}, en:{text:"No. of Hours per Channel - 80",ok:true}},
  { e:{text:"Posts Per Month - 10",ok:true}, a:{text:"Posts Per Month - 20",ok:true}, p:{text:"Posts Per Month - 30",ok:true}, en:{text:"Posts Per Month - 40",ok:true}},
  { e:{text:"Social Platforms - 2",ok:true}, a:{text:"Social Platforms - 4",ok:true}, p:{text:"Social Platforms - 6",ok:true}, en:{text:"Social Platforms - Unlimited",ok:true}},
  { e:{text:"Ad Campaign Setup",ok:false}, a:{text:"Ad Campaign Setup",ok:true}, p:{text:"Ad Campaign Setup",ok:true}, en:{text:"Ad Campaign Setup",ok:true}},
  { e:{text:"Remarketing Ads",ok:false}, a:{text:"Remarketing Ads",ok:true}, p:{text:"Remarketing Ads",ok:true}, en:{text:"Remarketing Ads",ok:true}},
  { e:{text:"Monthly Analytics Report",ok:true}, a:{text:"Monthly Analytics Report",ok:true}, p:{text:"Monthly Analytics Report",ok:true}, en:{text:"Monthly Analytics Report",ok:true}},
  { e:{text:"Content Strategy",ok:false}, a:{text:"Content Strategy",ok:true}, p:{text:"Content Strategy",ok:true}, en:{text:"Content Strategy",ok:true}},
  { e:{text:"Influencer Outreach",ok:false}, a:{text:"Influencer Outreach",ok:false}, p:{text:"Influencer Outreach",ok:true}, en:{text:"Influencer Outreach",ok:true}},
  { e:{text:"Dedicated Manager",ok:false}, a:{text:"Dedicated Manager",ok:false}, p:{text:"Dedicated Manager",ok:true}, en:{text:"Dedicated Manager",ok:true}},
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

export default function SMOPackage() {

  return (
    <>

      {/* ================= HEADER ================= */}

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-full py-28 sm:py-32 px-5 text-center overflow-hidden bg-[#e9f4f3]"
      >

        {/* Background Shapes */}

        <div className="absolute -top-32 -left-32 w-[380px] h-[180px] bg-[#00444b] rotate-45 opacity-90" />
        <div className="absolute top-24 left-40 w-[80px] h-[80px] bg-[#f27b22] rotate-45 shadow-lg" />

        <div className="absolute -bottom-36 -left-28 w-[380px] h-[180px] bg-[#01686d] rotate-45 opacity-90" />
        <div className="absolute bottom-24 left-16 w-[240px] h-[6px] bg-[#f27b22] rotate-45" />

        <div className="absolute -top-36 -right-36 w-[400px] h-[200px] bg-[#00444b] rotate-45 opacity-90" />
        <div className="absolute top-28 right-28 w-[200px] h-[6px] bg-[#f27b22] rotate-45" />

        <div className="absolute -bottom-24 right-24 w-[100px] h-[100px] bg-[#f27b22] rotate-45 shadow-lg" />

        {/* Soft Shapes */}

        <div className="absolute top-[35%] left-[30%] w-[200px] h-[200px] bg-[#01686d]/10 rotate-45 rounded-xl hidden sm:block" />
        <div className="absolute bottom-[25%] right-[35%] w-[220px] h-[220px] bg-[#00444b]/10 rotate-45 rounded-xl hidden sm:block" />

        {/* Header Content */}

        <div className="relative z-10 max-w-3xl mx-auto">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00444b] mb-3">
            Our SMO Packages
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#01686d] leading-relaxed">
            Powerful social media marketing strategies designed to boost
            engagement, grow followers and build strong brand presence.
          </p>

        </div>

      </motion.div>

      {/* ================= BODY ================= */}

      <div className="bg-white px-4 md:px-10 pb-24">

        {/* PRICING CARDS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-20 mb-28">

          {plans.map((plan, i) => (

            <motion.div
              key={i}
              whileHover={{ y: -12, scale: 1.04 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl p-[1.5px] bg-gradient-to-br from-[#01686d] via-[#f27b22] to-[#00444b]"
            >

              <div className="relative bg-white rounded-3xl p-8 h-full">

                {plan.badge && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f27b22] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                )}

                <div className={`rounded-2xl text-white text-center py-8 mb-8 bg-gradient-to-r ${plan.gradient}`}>

                  <h2 className="text-lg font-semibold">
                    {plan.name}
                  </h2>

                  <p className="text-4xl font-extrabold mt-2">
                    {plan.price}
                  </p>

                </div>

                <ul className="text-sm text-gray-600 space-y-2 mb-8">

                  <li>✔ Social Media Strategy</li>
                  <li>✔ Content Creation</li>
                  <li>✔ Audience Engagement</li>
                  <li>✔ Monthly Reports</li>

                </ul>

                <button className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#01686d] to-[#00444b] hover:from-[#00444b] hover:to-[#01686d] transition shadow-lg">

                  Get Started

                </button>

              </div>

            </motion.div>

          ))}

        </div>

        {/* TABLE */}

        <div className="max-w-7xl mx-auto bg-white rounded-2xl border shadow-xl">

          <div className="bg-gradient-to-r from-[#01686d] to-[#00444b] text-white px-6 py-4 font-bold text-lg flex justify-between rounded-t-2xl">
            <span>SMO Package Comparison</span>
            <span className="text-2xl">+</span>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[1200px] border-collapse text-sm">

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

      {/* Bottom Gradient */}

      <div className="w-full h-2 bg-gradient-to-r from-[#01686d] via-[#f27b22] to-[#00444b]" />

    </>
  );
}