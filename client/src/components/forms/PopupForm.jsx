import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;
const POPUP_FORM_API = import.meta.env.VITE_POPUP_FORM_API;

const PopupForm = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    businessEmail: "",
    phoneNumber: "",
    state: "",
    requirements: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // 🔒 stops page reload
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(`${API_URL}${POPUP_FORM_API}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          type: "POPUP_ENQUIRY",
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");

      setTimeout(() => {
        onClose();
      }, 1200);

    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-3 sm:p-6 z-50"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="bg-white rounded-xl w-full max-w-5xl max-h-[90vh] overflow-hidden relative flex flex-col md:flex-row"
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-[#00444b] hover:bg-[#01686d] text-white rounded-full p-2 transition z-50"
          >
            <FaTimes size={16} />
          </button>

          {/* Left Image */}
          <div className="relative w-full md:w-1/2 bg-white flex items-center justify-center p-5 sm:p-8 md:p-6 overflow-hidden border-b md:border-b-0 md:border-r border-gray-200">
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 0.51, x: 0 }} transition={{ duration: 1 }} className="absolute top-0 left-0 w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] bg-[#f27b22] rounded-br-[160px]" />
            <motion.div initial={{ opacity: 0, y: 70 }} animate={{ opacity: 0.5, y: 0 }} transition={{ duration: 1 }} className="absolute bottom-0 right-0 w-[160px] sm:w-[220px] h-[160px] sm:h-[220px] bg-[#01686d] rounded-tl-[180px]" />
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }} className="absolute top-1/2 left-1/2 w-[200px] sm:w-[260px] h-[200px] sm:h-[260px] -translate-x-1/2 -translate-y-1/2 blur-2xl" />
            <img src="/img/tira.png" alt="illustration" className="w-[70%] sm:w-[80%] md:w-full h-auto object-contain drop-shadow-xl relative z-10" />
          </div>

          {/* Right Form */}
          <motion.div initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 40, opacity: 0 }} transition={{ duration: 0.4 }} className="w-full md:w-1/2 bg-white p-5 sm:p-8 md:p-10 flex flex-col h-full max-h-[90vh] overflow-y-auto no-scrollbar">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#003C3F] tracking-tight">TIRAHUT TECH</h1>
            <h3 className="text-center text-xs sm:text-sm font-semibold tracking-wide text-[#003C3F] mt-2 mb-6">Let’s Build Your Next Digital Solution</h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
              <input name="fullName" value={formData.fullName} onChange={handleChange} type="text" placeholder="Full Name" className="border border-gray-300 px-4 py-2.5 sm:py-3 rounded-md text-sm w-full focus:border-[#01686d] outline-none" />
              <input name="businessEmail" value={formData.businessEmail} onChange={handleChange} type="email" placeholder="Business Email Address" className="border border-gray-300 px-4 py-2.5 sm:py-3 rounded-md text-sm w-full focus:border-[#01686d] outline-none" />
              <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} type="tel" placeholder="Phone Number" className="border border-gray-300 px-4 py-2.5 sm:py-3 rounded-md text-sm w-full focus:border-[#01686d] outline-none" />
              <select name="state" value={formData.state} onChange={handleChange} className="border border-gray-300 px-4 py-2.5 sm:py-3 rounded-md text-sm bg-white focus:border-[#01686d] outline-none">
                <option value="">Select State</option>
                <option>Bihar</option>
                <option>Delhi</option>
                <option>Uttar Pradesh</option>
                <option>Maharashtra</option>
                <option>Karnataka</option>
                <option>Gujarat</option>
                <option>Tamil Nadu</option>
              </select>
              <textarea name="requirements" value={formData.requirements} onChange={handleChange} rows="4" placeholder="Tell us about your requirements..." className="border border-gray-300 px-4 py-3 rounded-md text-sm w-full focus:border-[#01686d] outline-none resize-none"></textarea>

              <button type="submit" disabled={loading} className="bg-[#01686d] text-white py-3 rounded-md font-semibold text-sm hover:bg-[#00444b] transition">
                {loading ? "Submitting..." : "SUBMIT ENQUIRY"}
              </button>

              {status === "success" && <p className="text-green-600 text-sm text-center">Submitted successfully.</p>}
              {status === "error" && <p className="text-red-600 text-sm text-center">Submission failed.</p>}
            </form>

            <p className="text-xs text-center text-gray-600 mt-3">By submitting this form, you agree to our Terms & Privacy Policy.</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PopupForm;
