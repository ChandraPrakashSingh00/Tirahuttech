// Products.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiClock, FiArrowRight, FiMail, FiCheckCircle } from "react-icons/fi";
import { submitEnquiryForm } from "../../api/forms.api";

const Products = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleNotifySubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setStatus(null);
    try {
      await submitEnquiryForm({
        fullName: "Product Launch Subscriber",
        businessEmail: email,
        phoneNumber: "N/A",
        state: "N/A",
        requirements: "Wants to be notified when Tirahut Tech products launch.",
      });
      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white">
      {/* ================= HEADER ================= */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full text-white py-24 px-5 text-center pt-32 sm:pt-36 bg-gradient-to-r from-[#01686d] to-[#00444b]"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Products</h1>
        <p className="text-base sm:text-lg max-w-xl mx-auto opacity-90">
          A suite of business tools built by Tirahut Tech is on the way.
        </p>
      </motion.div>

      {/* ================= COMING SOON ================= */}
      <section className="relative overflow-hidden py-24 sm:py-28 px-5">
        {/* Soft brand glows */}
        <div className="pointer-events-none absolute -top-20 left-1/4 w-72 h-72 bg-[#01686d]/10 blur-[100px] rounded-full" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 w-72 h-72 bg-[#f27b22]/10 blur-[100px] rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-2xl mx-auto text-center"
        >
          <div className="w-20 h-20 mx-auto rounded-2xl bg-[#e9f4f3] flex items-center justify-center mb-8">
            <FiClock className="text-[#01686d]" size={34} />
          </div>

          <p className="text-[#01686d] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-4">
            Coming Soon
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00444b] leading-tight">
            We're building something
            <span className="text-[#f27b22]"> exciting</span>
          </h2>

          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Our in-house product line is currently in development. Leave your
            email below and we'll let you know the moment it's ready — or
            reach out to our team for a custom software solution today.
          </p>

          {/* NOTIFY FORM */}
          <div className="mt-10 max-w-md mx-auto">
            {status === "success" ? (
              <div className="flex items-center justify-center gap-2 text-[#01686d] font-semibold bg-[#e9f4f3] rounded-xl px-5 py-4">
                <FiCheckCircle size={18} />
                Thanks! We'll notify you at launch.
              </div>
            ) : (
              <form
                onSubmit={handleNotifySubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <div className="relative flex-1">
                  <FiMail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={16}
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01686d]/40 focus:border-[#01686d] transition"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#f27b22] text-white font-semibold rounded-xl hover:bg-[#e06d18] transition disabled:opacity-60"
                >
                  {loading ? "..." : "Notify Me"}
                </button>
              </form>
            )}

            {status === "error" && (
              <p className="mt-3 text-sm text-red-600">
                Something went wrong. Please try again.
              </p>
            )}
          </div>

          {/* SECONDARY CTA */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-gray-500 text-sm mb-4">
              Need a custom solution right now instead?
            </p>
            <Link
              to="/service"
              className="group inline-flex items-center gap-2 text-[#01686d] font-semibold hover:text-[#00444b] transition"
            >
              Explore our services
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* GRADIENT DIVIDER */}
      <div className="w-full h-1.5 bg-gradient-to-r from-[#01686d] via-[#f27b22] to-[#00444b]" />
    </div>
  );
};

export default Products;
