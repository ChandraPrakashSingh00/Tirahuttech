import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaUser,
  FaCheckCircle,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall, FiSend, FiMessageSquare } from "react-icons/fi";
import { motion } from "framer-motion";
import { submitContactForm } from "../../api/forms.api";

const Contact = () => {
  // ================= CONTACT INFO =================
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      info:
        "14th Avenue, Gaur City 2, Greater Noida, Uttar Pradesh – 203201, India\nLandmark Near D.F. Place",
    },
    {
      icon: <HiOutlineMail />,
      title: "Email",
      info: "tirahuttech@gmail.com",
    },
    {
      icon: <FiPhoneCall />,
      title: "Phone",
      info: "+91 8130654209",
    },
  ];

  const socialMedia = [
    {
      icon: <FaFacebookF />,
      url: "https://www.linkedin.com/in/tirahut-tech-7249323a6",
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/tirahut-tech-7249323a6",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/tirahut_tech",
    },
  ];

  // ================= FORM STATE =================
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await submitContactForm(formData);

      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full font-[Inter] bg-gray-50">
      
      {/* ================= HEADER (SERVICES STYLE) ================= */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full py-28 sm:py-32 px-5 text-center overflow-hidden bg-[#e9f4f3]"
      >
        {/* ===== BACKGROUND SHAPES ===== */}
        <div className="absolute -top-32 -left-32 w-[380px] h-[180px] bg-[#01686d] rotate-45 opacity-90" />
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
            Contact Us
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#01686d] leading-relaxed">
            Reach out to us for any queries or support. We’d love to hear from you!
          </p>
        </div>
      </motion.div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-5 py-20 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

        {/* ================= FORM ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 relative bg-white shadow-xl rounded-3xl p-8 sm:p-10 border border-gray-100 overflow-hidden"
        >
          {/* accent bar */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#01686d] via-[#f27b22] to-[#00444b]" />

          <div className="mb-8">
            <span className="inline-block text-xs font-semibold tracking-wide text-[#F27B22] bg-[#F27B22]/10 px-3 py-1 rounded-full mb-3">
              GET IN TOUCH
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#00444b]">
              Send Us a Message
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Fill in the form below and our team will respond within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#01686d]/40 focus:border-[#01686d] transition"
                />
              </div>

              <div className="relative">
                <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#01686d]/40 focus:border-[#01686d] transition"
                />
              </div>
            </div>

            <div className="relative">
              <FiMessageSquare className="absolute left-4 top-4 text-gray-400" />
              <textarea
                name="message"
                placeholder="Tell us about your project or query..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#01686d]/40 focus:border-[#01686d] transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F27B22] text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-[#e06b1d] hover:shadow-lg transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
              {!loading && <FiSend />}
            </button>

            {status === "success" && (
              <div className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-sm font-medium">
                <FaCheckCircle /> Message sent successfully. We'll get back to
                you soon!
              </div>
            )}

            {status === "error" && (
              <div className="text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm font-medium">
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </motion.div>

        {/* ================= INFO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-2 bg-gradient-to-br from-[#01686d] to-[#00444b] text-white shadow-xl rounded-3xl p-8 sm:p-10 relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#f27b22]/20 rounded-full" />
          <div className="absolute -bottom-14 -left-10 w-44 h-44 bg-white/5 rounded-full" />

          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
            <p className="text-white/70 text-sm mb-8">
              Reach out directly or follow us on social media.
            </p>

            <ul className="space-y-5">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-white/10 text-[#f27b22] text-lg">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-white/60 mb-0.5">
                      {item.title}
                    </p>
                    <span className="whitespace-pre-line text-sm text-white/95">
                      {item.info}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-white/15 mt-8 pt-6">
              <p className="text-xs uppercase tracking-wide text-white/60 mb-4">
                Follow Us
              </p>
              <div className="flex gap-3">
                {socialMedia.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#F27B22] transition"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="w-full h-1 bg-gradient-to-r from-[#01686d] via-[#f27b22] to-[#00444b]" />
    </div>
  );
};

export default Contact;