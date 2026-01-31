import React from "react";
import {
  FaChartLine,
  FaSearch,
  FaBullseye,
  FaRocket,
} from "react-icons/fa";

const cards = [
  {
    icon: FaSearch,
    title: "SEO Optimization",
    desc: "We optimize your website to rank higher on search engines and drive high-quality organic traffic.",
  },
  {
    icon: FaBullseye,
    title: "Targeted Marketing",
    desc: "Reach the right audience with data-driven digital marketing strategies that convert.",
  },
  {
    icon: FaRocket,
    title: "Growth & Performance",
    desc: "Accelerate your business growth with measurable performance and ROI-focused campaigns.",
  },
];

const SeoHero = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* ================= HERO ================= */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center py-24 sm:py-28 md:py-32">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl">
            <span className="text-[#01686d]">We Will Rock</span>{" "}
            <span className="text-[#00444b]">Your SEO!</span>
          </h1>

          <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl">
            AdsRole provides affordable yet powerful SEO and digital marketing
            solutions that help businesses grow, generate leads, and dominate
            search results.
          </p>
        </div>
      </div>

      {/* ================= CARDS ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="
                  group
                  bg-white rounded-3xl p-7
                  border border-gray-200
                  shadow-sm
                  transition-all duration-300
                  text-center
                  hover:bg-[#f27b22]
                  hover:-translate-y-2
                  hover:shadow-[0_20px_50px_rgba(242,123,34,0.45)]
                "
              >
                {/* ICON */}
                <div
                  className="
                    w-16 h-16 mx-auto mb-5
                    rounded-2xl
                    flex items-center justify-center
                    bg-gradient-to-br from-[#01686d] to-[#00444b]
                    text-white text-2xl
                    shadow-md
                    transition-all duration-300
                  "
                >
                  <Icon />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    text-xl font-semibold mb-3
                    text-[#00444b]
                    group-hover:text-white
                    transition-colors
                  "
                >
                  {card.title}
                </h3>

                {/* DESC */}
                <p
                  className="
                    text-gray-600 text-sm leading-relaxed
                    group-hover:text-white/90
                    transition-colors
                  "
                >
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* ================= BUTTON ================= */}
        <div className="flex justify-center mt-10">
          <button
            className="
              inline-flex items-center gap-3
              px-9 py-4 rounded-full
              bg-gradient-to-r from-[#01686d] to-[#00444b]
              text-white font-semibold tracking-wide
              hover:scale-105 transition-all duration-300
              shadow-[0_14px_40px_rgba(1,104,109,0.35)]
            "
          >
            <span className="bg-[#f27b22] p-3 rounded-full text-white">
              <FaChartLine />
            </span>
            FREE WEBSITE ANALYSIS REPORT
          </button>
        </div>
      </div>
    </section>
  );
};

export default SeoHero;
