import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function TrihutTech() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full min-h-[calc(100vh_-_80px)] bg-[#F4F4F4] font-[Inter]">

      {/* ========= TOP BANNER ========= */}
      <section className="w-full flex justify-center px-4 sm:px-6 lg:px-10 mt-40 mb-[-160px] relative z-20">
        <div className="bg-[url(/img/Banner.webp)] bg-cover bg-no-repeat text-white rounded-3xl w-full max-w-7xl shadow-xl p-8 sm:p-12 flex flex-col lg:flex-row items-center gap-10">
          <div className="max-w-lg space-y-6 text-center lg:text-left">
            <p className="text-base sm:text-lg">
              To build anything that truly lasts,
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              it takes time
            </h1>

            <div className="w-14 h-[2px] bg-white mx-auto lg:mx-0" />

            <button className="text-white font-semibold hover:opacity-80 transition">
              READ THE STORY ↗
            </button>
          </div>
        </div>
      </section>

      {/* ========= MAIN SECTION ========= */}
      <section
        className="w-full bg-gradient-to-r from-[#01686d] to-[#00444b]
                   px-6 sm:px-10 lg:px-40
                   pt-56 pb-32
                   flex flex-col lg:flex-row justify-between items-center gap-16"
      >
        {/* LEFT CONTENT */}
        <div className="max-w-xl space-y-6 text-white text-center lg:text-left">

          <div className="flex items-center justify-center lg:justify-start gap-4">
            <img src="/img/logo.png" alt="Logo" className="w-12" />
            <p className="text-lg text-white/90">All-in-one suite</p>
          </div>

          <h2 className="text-5xl font-bold">Tirahut Tech</h2>

          <p className="text-lg text-white/90">
            The operating system for business
          </p>

          <p className="text-white/90 leading-relaxed">
            Run your entire business on Tirahut Tech with our unified cloud
            software, designed to break down silos and increase efficiency.
          </p>

          {/* BUTTON + DROPDOWN */}
          <div className="relative inline-block" ref={dropdownRef}>
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="bg-gradient-to-r from-[#f27b22] to-[#d96c1f]
                         hover:from-[#d96c1f] hover:to-[#f27b22]
                         text-white px-7 py-3.5 rounded-xl
                         text-lg font-semibold shadow-lg
                         flex items-center gap-3
                         transition-all duration-300 hover:scale-[1.03]"
            >
              TRY TIRAHUT TECH
              <span>▸</span>
            </button>

            {openDropdown && (
              <div className="absolute z-50 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden
                              left-0 top-full mt-4 md:left-full md:top-0 md:mt-0 md:ml-4">
                <Link
                  to="/service"
                  onClick={() => setOpenDropdown(false)}
                  className="flex items-center gap-3 px-6 py-5 text-gray-800 font-medium
                             hover:bg-gradient-to-r hover:from-[#01686d] hover:to-[#00444b]
                             hover:text-white transition"
                >
                  🚀 <span className="flex-1">Service</span> →
                </Link>

                <Link
                  to="/product"
                  onClick={() => setOpenDropdown(false)}
                  className="flex items-center gap-3 px-6 py-5 text-gray-800 font-medium
                             hover:bg-gradient-to-r hover:from-[#f27b22] hover:to-[#d96c1f]
                             hover:text-white transition"
                >
                  📦 <span className="flex-1">Product</span> →
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT TESTIMONIAL CARD */}
        <div className="max-w-xl bg-white rounded-2xl p-8
                        border-2 border-orange-500
                        shadow-[10px_10px_0_0] shadow-orange-500
                        text-center lg:text-left space-y-6">

          <span className="text-6xl text-orange-500 leading-none">“</span>

          <p className="text-2xl text-gray-800 leading-relaxed">
            You can be a startup, mid-sized company, or enterprise —
            Tirahut Tech One works for all.
          </p>

          <div className="flex items-center gap-4 justify-center lg:justify-start pt-4 ">
            <img
              src="/empimg/rupesh.jpg"
              alt="CEO"
              className="w-20 h-20 rounded-full object-cover
           ring-4 ring-orange-500 shadow-md"
            />

            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900">
                Kautilya
              </h3>
              <p className="text-sm text-gray-500">
                CEO, 5paisa.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TrihutTech;
