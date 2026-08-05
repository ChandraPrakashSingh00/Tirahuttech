import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { ShapeTirahutLogo } from "../../components/ui/Shapes/Shapes";

export default function ReadyToTransform() {
  return (
    <section className="relative w-full overflow-hidden py-20 sm:py-24 md:py-28 px-4 bg-white">
      {/* Decorative background mark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <ShapeTirahutLogo />
      </div>

      {/* Soft background glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-[#f27b22]/10 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 bg-[#0f6f73]/10 blur-[120px] rounded-full" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Label */}
        <p className="text-[#0f6f73] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-4">
          Let's Build Together
        </p>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          Ready to transform your <br className="hidden md:block" />
          business with{" "}
          <span className="text-[#f27b22]">Tirahut Tech?</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Join the growing list of businesses already partnering with us to
          build reliable software and scale their operations. Get started
          today with a free consultation or connect with our team directly.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            to="/get-started"
            className="
              group w-full sm:w-auto
              inline-flex items-center justify-center gap-2
              px-8 py-4
              rounded-xl
              bg-[#f27b22]
              text-white font-semibold
              shadow-lg
              hover:bg-[#e06d18]
              hover:shadow-xl
              transition-all duration-300
            "
          >
            GET A FREE CONSULTATION
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <Link
            to="/contact"
            className="
              w-full sm:w-auto
              inline-flex items-center justify-center
              px-8 py-4
              rounded-xl
              border-2 border-[#0f6f73]
              text-[#0f6f73]
              font-semibold
              hover:bg-[#0f6f73]
              hover:text-white
              transition-all duration-300
            "
          >
            CONNECT WITH US
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mt-10 text-sm sm:text-base text-gray-700 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          <a
            href="mailto:tirahuttech@gmail.com"
            className="inline-flex items-center gap-2 hover:text-[#f27b22] transition-colors"
          >
            <Mail size={16} className="text-[#f27b22]" />
            tirahuttech@gmail.com
          </a>

          <span className="hidden sm:inline text-gray-300">|</span>

          <a
            href="tel:+918130654209"
            className="inline-flex items-center gap-2 hover:text-[#f27b22] transition-colors"
          >
            <Phone size={16} className="text-[#f27b22]" />
            +91 8130654209
          </a>
        </div>
      </div>
    </section>
  );
}