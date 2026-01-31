import React from "react";
import { motion } from "framer-motion";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiTypescript
} from "react-icons/si";

function WebDevelopment() {
  const benefits = [
    { title: "Responsive Design", desc: "Websites that look perfect on any device.", icon: "📱" },
    { title: "Secure & Reliable", desc: "Built with best practices and top-level security.", icon: "🔐" },
    { title: "SEO Optimized", desc: "Websites designed to rank higher on search engines.", icon: "🚀" },
    { title: "Modern UI/UX", desc: "User-friendly interfaces with smooth interactions.", icon: "🎨" },
  ];

  const technologies = [
    { name: "HTML5", icon: <SiHtml5 className="text-5xl" /> },
    { name: "CSS3", icon: <SiCss3 className="text-5xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-5xl" /> },
    { name: "React", icon: <SiReact className="text-5xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-5xl" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-5xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-5xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-5xl" /> },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="w-full font-['Inter']">

      {/* 🔥 TOP SECTION */}
      <motion.div
        className="w-full text-[#F8F6F2] py-20 px-5 text-center pt-32 sm:pt-36 bg-gradient-to-r from-[#01686d] to-[#00444b]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">Web Development</h1>
        <p className="text-sm sm:text-base max-w-lg mx-auto opacity-90">
          Fast, secure & modern websites for businesses, e-commerce & web apps.
        </p>
      </motion.div>

      {/* 🌟 MAIN SECTION */}
      <motion.div
        className="w-full bg-white text-[#00444b] py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-5xl mx-auto text-center mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mx-auto">
            WE BUILD FAST, SECURE, MODERN WEBSITES
          </h2>
          <p className="text-[#00444b] text-sm sm:text-base max-w-2xl mx-auto mt-3">
            High-performance websites & web apps that help businesses grow online.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center flex-wrap gap-6 mt-8">
          <span className="
            text-[#00444b] border border-[#00444b] px-8 py-3 rounded-full text-lg font-medium 
            transition-all duration-300 cursor-pointer
            hover:bg-[#f27b22] hover:text-white hover:border-[#f27b22]
          ">
            Corporate
          </span>

          <span className="
            text-[#00444b] border border-[#00444b] px-8 py-3 rounded-full text-lg font-medium 
            transition-all duration-300 cursor-pointer
            hover:bg-[#01686d] hover:text-white hover:border-[#01686d]
          ">
            E-Commerce
          </span>

          <span className="
            text-[#00444b] border border-[#00444b] px-8 py-3 rounded-full text-lg font-medium 
            transition-all duration-300 cursor-pointer
            hover:bg-[#f27b22] hover:text-white hover:border-[#f27b22]
          ">
            Web Apps
          </span>
        </div>
      </motion.div>

      {/* 🚀 TECHNOLOGIES SECTION */}
      <motion.section
        className="py-24 px-6 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00444b]">TECHNOLOGIES WE USE</h2>
          <p className="mt-3 text-sm sm:text-base text-[#00444b]/70 max-w-2xl mx-auto">
            We use modern and powerful technologies to build seamless websites.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-10 mt-12">
            {technologies.map((t, i) => (
              <motion.div
                key={i}
                className="group bg-white rounded-2xl p-6 w-40 sm:w-48 flex flex-col items-center
                  shadow-md border border-[#00444b]/10 transition-all duration-300
                  hover:bg-[#f27b22] hover:text-white hover:shadow-xl hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-3 shadow
                  transition-all duration-300 group-hover:bg-transparent group-hover:text-white">
                  {t.icon}
                </div>
                <p className="mt-4 text-lg font-semibold transition-all duration-300 group-hover:text-white">
                  {t.name}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <button className="bg-[#f27b22] hover:bg-[#d86b1f] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition">
              BOOK A FREE WEB CONSULTATION
            </button>
          </div>
        </div>
      </motion.section>

      {/* ⭐ BENEFITS SECTION */}
      <motion.section
        className="bg-white text-[#00444b] py-32 px-6 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Why Choose <span className="text-[#f27b22]">Our Web Development?</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-[#00444b]/80">
            Our websites are built with modern tech stack, ensuring fast loading, security, and excellent user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((b, idx) => (
            <motion.div
              key={idx}
              className="bg-white text-[#00444b] border border-[#01686d]/30 rounded-xl p-6
                flex flex-col items-center text-center transition-all duration-300
                hover:bg-[#f27b22] hover:text-white hover:shadow-xl hover:shadow-[#f27b22]/40"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="bg-[#01686d]/20 p-4 rounded-full w-fit mx-auto mb-4 text-2xl">
                {b.icon}
              </div>
              <h4 className="text-lg font-semibold mb-2">{b.title}</h4>
              <p className="text-sm">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section Divider for animation clarity */}
      <div className="w-full h-2 bg-gradient-to-r from-[#01686d] via-[#f27b22] to-[#00444b] mt-12"></div>
    </div>
  );
}

export default WebDevelopment;
