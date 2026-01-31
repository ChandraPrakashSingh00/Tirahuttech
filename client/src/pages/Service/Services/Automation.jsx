// Automation.jsx
import React from "react";
import { motion } from "framer-motion";
import { 
  SiPython, 
  SiUipath, 
  SiNodedotjs,
  SiReact,
  SiDocker,
  SiTypescript,
  SiMongodb
} from "react-icons/si";

function Automation() {
  const automationSolutions = [
    { icon: "🤖", title: "RPA", desc: "Robotic Process Automation" },
    { icon: "🔗", title: "Business Process Automation", desc: "Streamline your workflows" },
    { icon: "⚙️", title: "CRM Automation", desc: "Enhance customer relationships" },
    { icon: "💵", title: "Billing Automation", desc: "Automate financial operations" },
  ];

  const benefits = [
    { number: "70%", title: "TIME SAVED" },
    { number: "ZERO", title: "HUMAN ERRORS" },
    { number: "REDUCED", title: "COST" }
  ];

  const useCases = [
    { icon: "🚀", title: "Sales Automation" },
    { icon: "📋", title: "HR Automation" },
    { icon: "🧾", title: "Data Entry Automation" },
  ];

  const technologies = [
    { name: "Python", icon: <SiPython className="text-5xl" /> },
    { name: "UiPath", icon: <SiUipath className="text-5xl" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-5xl" /> },
    { name: "React", icon: <SiReact className="text-5xl" /> },
    { name: "Docker", icon: <SiDocker className="text-5xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-5xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-5xl" /> },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Uniform hover color
  const hoverBg = "hover:bg-[#f27b22] hover:text-white hover:shadow-xl";

  return (
    <div className="w-full font-['Inter']">

      {/* 🔥 HEADER */}
      <motion.div
        className="w-full text-[#F8F6F2] py-24 px-6 text-center pt-32 bg-gradient-to-r from-[#01686d] to-[#00444b]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">AUTOMATION</h2>
        <h1 className="text-4xl sm:text-5xl font-extrabold">AUTOMATE WORKFLOWS</h1>
        <p className="text-sm sm:text-lg max-w-2xl mx-auto opacity-90 mt-4">
          Improve efficiency and productivity with robust automation solutions tailored to your business needs.
        </p>
      </motion.div>

      {/* 🚀 AUTOMATION SOLUTIONS */}
      <motion.section
        className="py-24 px-6 bg-white text-[#00444b] text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">AUTOMATION SOLUTIONS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {automationSolutions.map((s, i) => (
            <motion.div
              key={i}
              className={`bg-white border border-[#00444b]/20 rounded-xl shadow-sm p-6 flex flex-col items-center transition-all duration-300 ${hoverBg}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <span className="text-4xl mb-4">{s.icon}</span>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ⭐ BENEFITS */}
      <motion.section
        className="py-20 bg-white text-[#00444b] text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">BENEFITS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              className={`border border-[#01686d]/30 rounded-xl p-8 cursor-pointer transition-all duration-300 ${hoverBg}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <h3 className="text-4xl font-bold text-[#f27b22] hover:text-white">{b.number}</h3>
              <p className="mt-2 text-lg font-semibold text-[#00444b] hover:text-white">{b.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 📋 USE CASES */}
      <motion.section
        className="py-24 bg-white text-[#00444b] text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">USE CASES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {useCases.map((u, i) => (
            <motion.div
              key={i}
              className={`border border-[#00444b]/20 rounded-xl p-6 cursor-pointer transition-all duration-300 ${hoverBg}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <div className="text-4xl mb-3">{u.icon}</div>
              <h4 className="text-lg font-semibold">{u.title}</h4>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 💻 TECHNOLOGIES */}
      <motion.section
        className="py-24 px-6 bg-white text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00444b] mb-16">TECHNOLOGIES WE USE</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {technologies.map((t, i) => (
            <motion.div
              key={i}
              className={`group bg-white border border-[#00444b]/10 rounded-2xl p-6 w-40 flex flex-col items-center shadow-sm transition-all duration-300 ${hoverBg} hover:scale-105`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              {t.icon}
              <p className="mt-4 text-lg font-semibold">{t.name}</p>
            </motion.div>
          ))}
        </div>

        {/* 🔥 CENTERED BUTTON */}
        <div className="mt-16 text-center">
          <button className="bg-[#f27b22] hover:bg-[#d86b1f] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg transition">
            BOOK A FREE AUTOMATION CONSULTATION
          </button>
        </div>
      </motion.section>

      {/* GRADIENT DIVIDER */}
      <div className="w-full h-2 bg-gradient-to-r from-[#01686d] via-[#f27b22] to-[#00444b] mt-12"></div>

    </div>
  );
}

export default Automation;
