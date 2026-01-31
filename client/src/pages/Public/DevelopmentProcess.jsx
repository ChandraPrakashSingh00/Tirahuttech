import React from "react";
import {
  FaSearch,
  FaProjectDiagram,
  FaPalette,
  FaCode,
  FaVial,
  FaRocket,
  FaTools,
} from "react-icons/fa";

const steps = [
  { title: "Requirements & Analysis", icon: <FaSearch /> },
  { title: "Project Planning", icon: <FaProjectDiagram /> },
  { title: "Design", icon: <FaPalette /> },
  { title: "Coding & Implementation", icon: <FaCode /> },
  { title: "Testing", icon: <FaVial /> },
  { title: "Deployment", icon: <FaRocket /> },
  { title: "Maintenance", icon: <FaTools /> },
];

const DevelopmentProcess = () => {
  return (
    <section
      className="w-full py-24 text-white"
      style={{
        background: "linear-gradient(135deg, #01686d 0%, #00444b 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Our Development Process
        </h2>
        <div className="w-40 h-1 bg-white/80 mx-auto mt-5 rounded-full"></div>

        {/* Timeline */}
        <div className="mt-20 relative">

          {/* Desktop Line */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-[3px] bg-white/30"></div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-14 md:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Icon Circle */}
                <div
                  className="
                    w-20 h-20 rounded-full
                    bg-[#f27b22]
                    flex items-center justify-center
                    text-3xl
                    text-white
                    shadow-[0_0_30px_rgba(0,0,0,0.35)]
                    z-10
                    transition-all duration-300 ease-in-out
                    group-hover:bg-white
                    group-hover:text-[#01686d]
                    group-hover:scale-110
                  "
                >
                  {step.icon}
                </div>

                {/* Mobile Line */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden w-1 h-14 bg-white/40"></div>
                )}

                {/* Title */}
                <p className="mt-4 text-sm font-semibold max-w-[140px] leading-snug">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
