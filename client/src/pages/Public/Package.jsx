import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* =========================
   PACKAGES DATA
========================= */
const packages = [
  {
    name: "Web Pack",
    price: "$999 / yr",
    gradient: "from-[#01686d] to-[#00444b]",
    features: [
      "SEO Optimized Website",
      "Mobile Responsive",
      "Fast Performance",
      "Secure Hosting",
    ],
    link: "/web-pack",
  },
  {
    name: "SEO Pack",
    price: "$699 / yr",
    gradient: "from-[#f27b22] to-[#c85f12]",
    features: [
      "Advanced SEO Optimization",
      "Keyword Research",
      "Content Strategy",
      "Performance Reporting",
    ],
    link: "/seo-pack",
    badge: "Popular",
  },
  {
    name: "Combined Pack",
    price: "$1499 / yr",
    gradient: "from-[#01686d] to-[#f27b22]",
    features: [
      "Web Development + SEO",
      "Custom Design",
      "Performance Optimization",
      "Dedicated Support",
    ],
    link: "/combined-pack",
    badge: "Best Value",
  },
];

/* =========================
   PACKAGE CARD COMPONENT
========================= */
const PackageCard = ({ pkg }) => (
  <motion.div
    whileHover={{ y: -12, scale: 1.04 }}
    transition={{ duration: 0.4 }}
    className="relative rounded-3xl p-[1.5px] bg-gradient-to-br from-[#01686d] via-[#f27b22] to-[#00444b]"
  >
    <div className="relative bg-white rounded-3xl p-8 h-full backdrop-blur-xl flex flex-col justify-between">
      {/* BADGE */}
      {pkg.badge && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2
                         bg-[#f27b22] text-white text-xs font-bold
                         px-4 py-1 rounded-full shadow-lg">
          {pkg.badge}
        </span>
      )}

      {/* PRICE AREA */}
      <div className={`rounded-2xl text-white text-center py-8 mb-8 bg-gradient-to-r ${pkg.gradient}`}>
        <h2 className="text-lg font-semibold tracking-wide">{pkg.name}</h2>
        <p className="text-4xl font-extrabold mt-2">{pkg.price}</p>
      </div>

      {/* FEATURES */}
      <ul className="text-sm text-gray-600 space-y-2 mb-8">
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-[#01686d] font-bold">✔</span> {feature}
          </li>
        ))}
      </ul>

      {/* CTA BUTTON */}
      <Link
        to={pkg.link}
        className="w-full py-3 rounded-xl font-semibold text-white
                   bg-gradient-to-r from-[#01686d] to-[#00444b]
                   hover:from-[#00444b] hover:to-[#01686d]
                   transition shadow-lg text-center"
      >
        Get Started
      </Link>
    </div>
  </motion.div>
);

/* =========================
   PAGE COMPONENT
========================= */
const PackagesSection = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center">

      {/* HEADER */}
      <div className="w-full text-center py-20 sm:py-24 px-5">
        <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-teal-900">
          Our Packages
        </h1>
        <p className="text-base sm:text-lg max-w-xl mx-auto opacity-80 text-gray-700">
          Custom Solution and enterprise engagement available on request
        </p>
      </div>

      {/* PACKAGE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl mx-auto px-5 sm:px-6 pb-24">
        {packages.map((pkg, i) => (
          <PackageCard key={i} pkg={pkg} />
        ))}
      </div>
      
    </div>
  );
};

export default PackagesSection;
