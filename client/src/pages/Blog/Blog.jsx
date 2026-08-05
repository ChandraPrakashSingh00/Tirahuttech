// Blog.jsx
import React from "react";
import { motion } from "framer-motion";
import BlogSection from "./BlogSection";
import {
  ShapeHexagonFilled,
  ShapeQuadFilled,
  ShapeShardAFilled,
} from "../../components/ui/Shapes/Shapes";

const Blog = () => {
  return (
    <>
      {/* ================= BLOG HEADER (SAME STYLE AS ABOUT HEADER) ================= */}
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

        {/* Soft Glass Shapes */}
        <div className="absolute top-[35%] left-[30%] w-[200px] h-[200px] bg-[#01686d]/10 rotate-45 rounded-xl hidden sm:block" />
        <div className="absolute bottom-[25%] right-[35%] w-[220px] h-[220px] bg-[#00444b]/10 rotate-45 rounded-xl hidden sm:block" />

        {/* Decorative Icons (Desktop only) */}
        <div className="hidden lg:block absolute left-24 top-24 w-20">
          <ShapeHexagonFilled color="t" />
        </div>
        <div className="hidden lg:block absolute right-28 bottom-24 w-20">
          <ShapeShardAFilled color="o" />
        </div>

        {/* ===== HEADER CONTENT ===== */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00444b] mb-3">
            Blogs
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#01686d] leading-relaxed">
            Insights, updates, and ideas from our team to help your business grow.
          </p>
        </div>
      </motion.div>

      {/* ================= BLOG LIST ================= */}
      <BlogSection />

      {/* Bottom Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#01686d] via-[#f27b22] to-[#00444b] mt-12" />
    </>
  );
};

export default Blog;
