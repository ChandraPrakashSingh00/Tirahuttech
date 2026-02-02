import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VisionSection from "./VisionSection";
import WhySets from "./WhySets";
import WhyChoose from "../Public/WhyChoose";
import TeamMembers from "./TeamMembers";

const AboutSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {/* ===== HEADER ===== */}
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
            About Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#01686d] leading-relaxed">
            Discover who we are, what we believe in, and what drives our digital
            excellence to deliver real business growth.
          </p>
        </div>
      </motion.div>

      {/* ===== ABOUT CONTENT ===== */}
      <section className="relative w-full bg-white py-20 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00444b] leading-tight">
              Tirahut Tech – Innovative <br />
              <span className="text-[#01686d]">Software & IT Solutions</span>
            </h2>

            <div className="w-16 h-1 bg-[#f27b22] mt-5 mb-5 rounded-full" />

            <p className="text-base sm:text-lg text-[#01686d] font-medium mb-2">
              We help businesses grow through technology
            </p>

            <p className="text-sm sm:text-base text-gray-600 mb-5 max-w-lg">
              From strategy to execution, we build meaningful digital experiences
              that create impact and measurable success.
            </p>

            {/* EXPANDABLE CONTENT */}
            <AnimatePresence>
              {showMore && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-gray-600 leading-relaxed mb-6 max-w-xl overflow-hidden"
                >
                  From strategy to execution, Tirahut Tech partners with
                  organizations to design, build, and scale technology that
                  delivers real business impact. We work across software
                  development, automation, digital platforms, and IT services—
                  creating solutions that are practical, scalable, and
                  future-ready.
                  <br /><br />
                  We go beyond delivery. Through data-driven decision-making,
                  deep technical expertise, and dedicated technology teams, we
                  help businesses streamline operations, strengthen digital
                  presence, and adapt confidently to evolving market demands.
                </motion.p>
              )}
            </AnimatePresence>

            <button
              onClick={() => setShowMore(!showMore)}
              className="px-7 py-3 rounded-xl bg-[#01686d] text-white font-semibold shadow-lg 
              hover:bg-[#00444b] transition flex items-center gap-2"
            >
              {showMore ? "Show Less" : "Learn More"}
              <span className="text-[#f27b22] text-xl">→</span>
            </button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#01686d]/10">
              <img
                src="/empimg/ao.jpg"
                alt="About Visual"
                className="w-full h-[260px] sm:h-[320px] md:h-[420px] object-cover"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ===== EXTRA SECTIONS ===== */}
      <VisionSection />
      <WhySets />
      <WhyChoose />
      <TeamMembers />
    </>
  );
};

export default AboutSection;
