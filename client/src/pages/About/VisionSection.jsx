import React from "react";

function VisionSection() {
  return (
    <section
      className="relative w-full min-h-[80vh] flex items-center justify-center px-6 overflow-hidden"
      style={{ backgroundColor: "#f27b22" }}
    >
      {/* Soft Background Shapes */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl text-center text-white">
        {/* LABEL */}
        <p className="text-sm tracking-widest font-semibold uppercase mb-5 opacity-90">
          Our Vision
        </p>

        {/* HEADING – SINGLE LINE */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-7">
          Building technology & systems
that are made to last
        </h2>

        {/* DIVIDER */}
        <div className="mx-auto w-20 h-[3px] bg-white rounded mb-7 opacity-80" />

        {/* DESCRIPTION */}
        <p className="text-base md:text-lg leading-relaxed text-white/90 mb-10">
          Long-term, scalable solutions built to grow with your business.

        </p>

        {/* CTA – NO BACKGROUND */}
        <a
          href="/service"
          className="
            inline-flex items-center gap-2
            text-base md:text-lg font-semibold text-white
            border-b-2 border-white/70
            pb-1
            transition-all duration-300
            hover:border-white
            hover:tracking-wide
          "
        >
          Ready to Build With Us
          <span className="text-xl">↗</span>
        </a>
      </div>
    </section>
  );
}

export default VisionSection;
