import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";

import MainPagesLayout from "../../components/MainPagesLayout/MainPagesLayout";

const Home = () => {
  const dashboardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseZ = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  const springZ = useSpring(mouseZ, {
    stiffness: 120,
    damping: 20,
  });

  const rotateX = useTransform(springX, (v) => v);
  const rotateY = useTransform(springY, (v) => v);
  const rotateZ = useTransform(springZ, (v) => v);

  const MAX = {
    x: 12,
    y: 12,
    z: 0,
  };

  const handleMouseMove = (e) => {
    if (!dashboardRef.current) return;

    const rect = dashboardRef.current.getBoundingClientRect();

    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);

    const clamp = (v) => Math.max(-1, Math.min(v, 1));

    mouseY.set(clamp(dx) * MAX.y);
    mouseX.set(clamp(-dy) * MAX.x);
    mouseZ.set(0);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    mouseZ.set(0);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-white pt-16 md:pt-24 pb-16 md:pb-24 overflow-hidden">
        <div
          className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#01686d]/10 text-[#01686d] text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#f27b22] animate-pulse"></span>
              IT Solutions & Product Engineering
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Tailored Tech,
              <br />
              <span className="text-[#01686d]">
                Simplified Growth
              </span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-8 max-w-xl mx-auto lg:mx-0">
              Custom software, automation, cloud solutions and dedicated
              development teams that help businesses scale faster with modern
              technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <Link to="/contact">
                <button className="px-7 py-3 rounded-xl bg-[#f27b22] text-white font-semibold hover:bg-[#df6d18] transition">
                  Request Demo
                </button>
              </Link>

              <Link to="/service">
                <button className="px-7 py-3 rounded-xl border border-[#01686d] text-[#01686d] hover:bg-[#01686d] hover:text-white transition">
                  Explore Services
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div
              className="relative w-full max-w-xl perspective-[2000px]"
            >
              <motion.div
                ref={dashboardRef}
                style={{
                  rotateX,
                  rotateY,
                  rotateZ,
                  transformStyle: "preserve-3d",
                }}
                className="rounded-3xl bg-white border border-gray-200 shadow-2xl overflow-hidden"
              >
                <img
                  src="/img/Dashboard.png"
                  alt="Dashboard"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Remaining Pages */}
      <MainPagesLayout />
    </>
  );
};

export default Home;