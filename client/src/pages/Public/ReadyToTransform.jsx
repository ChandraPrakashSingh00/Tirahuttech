import React from "react";
import { ShapeTirahutLogo } from "../../components/ui/Shapes/Shapes";

export default function ReadyToTransform() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        min-h-[calc(100vh_-_80px)]
        py-24 px-4
        bg-gradient-to-br
        from-[#0f6f73]
        via-[#0b5a5e]
        to-[#073f42]
      "
    >

      <div className="absolute top-[0px] left-[0px] w-full h-full  "> <ShapeTirahutLogo opacity="0.10" /> </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">

        {/* HEADING */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Ready to transform your <br className="hidden md:block" />
          business with{" "}
          <span className="font-extrabold">Tirahut Tech?</span>
        </h2>

        {/* SUBTITLE */}
        <p className="mt-6 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
          Join hundreds of businesses already using our all-in-one platform to
          streamline operations and drive success. Get started today with a
          free demo or contact our team.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            className="
              w-full sm:w-auto
              px-8 py-4
              rounded-xl
              bg-[#f27b22]
              text-white font-semibold
              shadow-lg
              hover:bg-[#e56f1c]
              transition-all duration-300
            "
          >
            GET A FREE DEMO
          </button>

          <button
            className="
              w-full sm:w-auto
              px-8 py-4
              rounded-xl
              border-2 border-white
              text-white font-semibold
              hover:bg-white
              hover:text-[#0b5a5e]
              transition-all duration-300
            "
          >
            CONTACT SALES
          </button>
        </div>

        {/* CONTACT INFO */}
        <div className="mt-10 text-sm sm:text-base text-white/90 flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>
            <span className="font-medium">Email:</span> sales@tirahuttech.com
          </span>
          <span className="hidden sm:inline">|</span>
          <span>
            <span className="font-medium">Phone:</span> +91 12345 67890
          </span>
        </div>

      </div>
    </section>
  );
}
