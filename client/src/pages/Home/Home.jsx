// src/components/Home.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";


import TrihutTech from "../Public/TrihutTech";
import EnterpriseSection from "../Public/EnterpriseSection";
import ClientSatisfied from "../Public/ClientSatisfied";
import Packages from "../Public/Package";
import PopupForm from "../../components/forms/PopupForm";

// MAIN HOME COMPONENT
const Home = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show popup instantly on load
  useEffect(() => {
    setShowPopup(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* HERO SECTION */}
      <div className="w-full min-h-screen bg-white flex items-center justify-center px-6 pt-32 sm:pt-36 md:pt-28 lg:pt-28 pb-16">
        <div className="max-w-7xl w-full grid md:grid-cols-2 grid-cols-1 items-center gap-10">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[#0b2f32] md:text-left text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Tailored Tech Solution<br />Simplified Growth  
            </h1>

            <p className="text-[17px] text-gray-700 mt-5 leading-relaxed max-w-xl mx-auto md:mx-0">
             Custom software, automation, and digital solutions—delivered as complete products or through dedicated IT professionals.
Cloud-native, scalable, and integration-ready for modern businesses.

            </p>

       <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
  <Link to="/contact">
    <button className="px-7 py-3 bg-[#01686d] text-white font-semibold rounded-lg border border-[#01686d] hover:bg-[#00444b] transition">
      Request Demo
    </button>
  </Link>

  <Link to="/services">
    <button className="px-7 py-3 bg-white text-[#01686d] font-semibold rounded-lg border border-[#01686d] hover:bg-[#f1f1f1] transition">
      Explore Services
    </button>
  </Link>
</div>


            <p className="text-lg mt-10 text-[#01686d] font-medium">
              Trinit for the Businesses
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center md:justify-end"
          >
            <motion.img
              src="/img/ko.png"
              alt="Business Dashboard Illustration"
              className="w-[350px] sm:w-[450px] md:w-[550px] object-contain"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>
        </div>
      </div>

      {/* PUBLIC SECTIONS */}
      <TrihutTech />
      <EnterpriseSection />
      <ClientSatisfied />
      <Packages />

      {/* SCROLL TO TOP */}
      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.2 }}
          className="fixed bottom-8 right-8 z-50 bg-[#01686d] text-white p-4 rounded-full shadow-lg hover:bg-[#00444b] transition-all"
        >
          <FaArrowUp size={20} />
        </motion.button>
      )}

      {/* POPUP FORM */}
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
    </>
  );
};

export default Home;
