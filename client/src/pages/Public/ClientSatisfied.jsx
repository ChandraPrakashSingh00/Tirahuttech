import React from "react";
import { Link } from "react-router-dom";
const ClientSatisfied = () => {
  return (
    <section
      className="
        relative w-full overflow-hidden
        min-h-[calc(100vh_-_80px)]
        py-28 md:py-32
        px-6 sm:px-12 md:px-16 lg:px-28
        bg-gradient-to-br
        from-[#01686d]
        to-[#00444b]
      "
    >
      {/* ===== FULL BACKGROUND IMAGE ===== */}
      <img
        src="/img/world.png"
        alt="World Map"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          opacity-20
          pointer-events-none
        "
      />

      {/* ========= MAIN CONTENT ========= */}
      <div className="relative z-10 max-w-7xl text-white w-full">
        
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-snug">
          Made in India.
          <br />
          Made for the World.
        </h1>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-14">
          {[
            { value: "10", label: "Projects Complete" },
            { value: "6+", label: "Happy Clients" },
            { value: "7+", label: "Delivered Project" },
            { value: "27/4+", label: "Support/Available" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-start">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                {item.value}
              </h2>
              <p className="text-white/80 mt-2 text-sm sm:text-base md:text-lg">
                {item.label}
              </p>
              <div className="w-12 h-[2px] bg-white/40 mt-3" />
            </div>
          ))}
        </div>

        {/* BUTTON */}
       <div className="mt-16">
  <Link to="/about">
    <button
      className="
        px-8 py-4
        text-base sm:text-lg font-semibold
        rounded-xl shadow-lg
        bg-[#f27b22]
        hover:bg-[#e56f1c]
        transition-all duration-300
      "
    >
      MORE ABOUT TRIHUT →
    </button>
  </Link>
</div>
      </div>
    </section>
  );
};

export default ClientSatisfied;
