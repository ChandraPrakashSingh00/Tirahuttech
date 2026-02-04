import React from "react";
import {
  ShapeGearwithMagnifyingGlass,
  ShapeShieldwithCheckmark,
  ShapeTrendingUpArrow,
} from "../../components/ui/Shapes/Shapes";

export default function EnterpriseSection() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 md:px-10 lg:px-12
          py-16 sm:py-20 lg:py-24
          grid grid-cols-1 lg:grid-cols-2
          gap-14 lg:gap-20
          items-center
        "
      >
        {/* ================= LEFT CONTENT ================= */}
        <div className="text-center lg:text-left">
          {/* ICONS */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-5 sm:gap-6 mb-8">
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
              <ShapeShieldwithCheckmark />
            </div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
              <ShapeGearwithMagnifyingGlass />
            </div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
              <ShapeTrendingUpArrow />
            </div>
          </div>

          {/* HEADING */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00444b] leading-tight">
            Tirahut Tech <br className="hidden sm:block" /> For Enterprise
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-5 sm:mt-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
           Unlock the full potential of large-scale operations with Tirahut Tech as your extended technology backbone. We deliver a unified enterprise ecosystem—combining custom software, automation, integrations, and dedicated IT teams—backed by robust infrastructure, proactive support, and enterprise-grade security. Simplify complex processes, strengthen customer relationships, and enable sustainable, long-term growth with confidence.   
          </p>

          {/* BUTTON */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <button className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-[#f27b22] text-white text-sm sm:text-base font-semibold shadow-md hover:shadow-lg hover:bg-[#e56f1c] transition-all duration-300">
              LEARN MORE →
            </button>
          </div>
        </div>

        {/* ================= RIGHT TESTIMONIAL ================= */}
        <div className="relative flex justify-center items-center">
          <div className="relative max-w-md sm:max-w-lg w-full">
            {/* BACKGROUND SHAPE */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[110%] h-[120%] z-[5]">
              <img
                src="/img/blob.webp"
                alt=""
                className="w-full h-full opacity-90"
              />
            </div>

            {/* TESTIMONIAL CARD */}
            <div
              className="
                relative
                bg-white
                border-2 border-[#f3c29a]
                rounded-2xl
                p-6 sm:p-8 lg:p-10
                shadow-[0_30px_70px_rgba(0,0,0,0.15),0_0_15px_rgba(243,194,154,0.4)]
                z-[10]
              "
            >
              {/* QUOTE */}
              <div className="text-[#f27b22] text-4xl sm:text-5xl leading-none">
                “
              </div>

              {/* REVIEW TEXT */}
              <p className="mt-4 text-[#00444b] text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                Tirahut Tech delivered an exceptional polling web application
                for our platform <strong>Voxina.online</strong>. The system
                handled real-time voting seamlessly, scaled perfectly during
                peak traffic, and exceeded our expectations in performance
                and UX.
              </p>

              {/* USER INFO */}
              <div className="mt-7 sm:mt-8 flex items-center gap-4">
                {/* IMAGE (FACE FIXED – THODA NICHE) */}
                <div
                  className="
                    w-12 h-12 sm:w-14 sm:h-14
                    rounded-full
                    overflow-hidden
                    ring-2 ring-[#f27b22]
                    shadow-md
                    flex-shrink-0
                  "
                >
                  <img
                    src="/img/akhil.jpg"
                    alt="Akhil"
                    className="
                      w-full h-full
                      object-cover
                      object-[50%_10%]
                    "
                  />
                </div>

                {/* NAME & PRODUCT */}
                <div>
                  <h4 className="font-semibold text-[#01686d] text-sm sm:text-base">
                    Akhil
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Founder, Voxina.online (Polling Web App)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
