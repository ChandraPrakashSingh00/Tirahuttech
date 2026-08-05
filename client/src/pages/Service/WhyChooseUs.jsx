// WhyChooseUs.jsx
import React from "react";
import { FaBolt, FaSearch, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaBolt className="text-5xl" />,
      title: "Fast Loading",
      desc: "Optimized for high-speed performance with best practices.",
    },
    {
      icon: <FaSearch className="text-5xl" />,
      title: "SEO Ready",
      desc: "Boost your online presence with SEO-friendly structure.",
    },
    {
      icon: <FaShieldAlt className="text-5xl" />,
      title: "Secure",
      desc: "Advanced security layers to protect your website.",
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-[#003C3F] mb-14"
        >
          Why Choose Us
        </motion.h2>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* CARD */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="
                  group
                  relative bg-white border border-gray-200 rounded-2xl p-6
                  flex flex-col items-center text-center min-h-[160px]
                  shadow-lg transition-all duration-300 cursor-pointer
                  hover:bg-[#f27b22] hover:border-[#f27b22]
                "
              >
                {/* ICON */}
                <div className="
                  w-20 h-20 flex items-center justify-center rounded-full shadow mb-4
                  text-[#f27b22]
                  group-hover:text-white
                  transition-colors duration-300
                ">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="
                  text-lg sm:text-xl font-semibold text-gray-900
                  group-hover:text-white transition-colors duration-300
                ">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="
                  text-gray-600 text-[14px] leading-relaxed mt-1
                  group-hover:text-white transition-colors duration-300
                ">
                  {item.desc}
                </p>

                {/* HOVER OVERLAY */}
                <div className="
                  absolute inset-0 rounded-2xl bg-[#f27b22] opacity-0
                  group-hover:opacity-20 transition-opacity duration-300
                "></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
