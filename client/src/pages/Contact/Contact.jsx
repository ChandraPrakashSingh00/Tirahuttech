import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { motion } from "framer-motion";

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
      const res = await fetch(
        "https://tirahuttech.vercel.app/api/Form/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) {
        throw new Error("Request Failed");
      }

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
            Contact Us
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#01686d] leading-relaxed">
            Reach out to us for any queries or support. We’d love to hear from you!
          </p>
        </div>
      </motion.div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-5 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* ================= FORM ================= */}
        <div className="bg-white shadow-lg rounded-3xl p-10">
          <h2 className="text-3xl font-bold text-[#00444b] mb-6">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-xl"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-xl"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-xl"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-[#F27B22] text-white px-6 py-3 rounded-xl hover:bg-[#e06b1d] transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-600 text-sm">
                Message sent successfully.
              </p>
            )}

            {status === "error" && (
              <p className="text-red-600 text-sm">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>

        {/* ================= INFO ================= */}
        <div className="bg-white shadow-lg rounded-3xl p-10">
          <h2 className="text-3xl font-bold text-[#00444b] mb-4">
            Follow & Contact Us
          </h2>

          <div className="flex gap-4 mb-6">
            {socialMedia.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-full shadow-md hover:bg-[#F27B22] hover:text-white transition"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <ul className="space-y-3">
            {contactInfo.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="p-3 bg-[#01686d] text-white rounded-md">
                  {item.icon}
                </span>
                <span className="whitespace-pre-line">
                  {item.info}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full h-1 bg-gradient-to-r from-[#01686d] via-[#f27b22] to-[#00444b]" />
    </div>
  );
};

export default Contact;