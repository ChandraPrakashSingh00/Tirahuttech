import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

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
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(
        "https://tirahuttech.vercel.app/api/Form/enquiry",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            type: "POPUP_ENQUIRY",
          }),
        }
      );

      if (!res.ok) throw new Error("Failed");

      setStatus("success");

      setTimeout(() => {
        onClose();
      }, 1200);
    } catch (err) {
      console.error(err);
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
        className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-3 sm:px-6"
      >
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="
            bg-white rounded-2xl w-full max-w-5xl
            flex flex-col md:flex-row
            relative overflow-hidden
          "
        >
          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 bg-[#00444b] hover:bg-[#01686d] text-white p-2 rounded-full"
          >
            <FaTimes size={14} />
          </button>

          {/* LEFT IMAGE */}
          <div className="hidden md:flex md:w-1/2 items-center justify-center relative bg-gray-50 p-6">
            <div className="absolute top-0 left-0 w-40 h-40 bg-[#f27b22] rounded-br-[160px] opacity-50" />
            <div className="absolute bottom-0 right-0 w-44 h-44 bg-[#01686d] rounded-tl-[180px] opacity-50" />
            <img
              src="/img/tira.png"
              alt="Tirahut Tech"
              className="w-[80%] max-w-sm relative z-10 drop-shadow-xl"
            />
          </div>

          {/* FORM */}
          <div
            className="
              w-full md:w-1/2
              px-5 sm:px-8 py-6 sm:py-8
              flex flex-col justify-center
            "
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#003C3F]">
              TIRAHUT TECH
            </h1>
            <p className="text-center text-xs sm:text-sm font-semibold text-[#003C3F] mt-1 mb-5">
              Let’s Build Your Next Digital Solution
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 sm:gap-4"
            >
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="border px-4 py-2.5 rounded-md text-sm focus:outline-none focus:border-[#01686d]"
              />

              <input
                type="email"
                name="businessEmail"
                value={formData.businessEmail}
                onChange={handleChange}
                placeholder="Business Email"
                required
                className="border px-4 py-2.5 rounded-md text-sm focus:outline-none focus:border-[#01686d]"
              />

              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="border px-4 py-2.5 rounded-md text-sm focus:outline-none focus:border-[#01686d]"
              />

              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="border px-4 py-2.5 rounded-md text-sm bg-white focus:outline-none focus:border-[#01686d]"
              >
                <option value="">Select State</option>
                <option>Bihar</option>
                <option>Delhi</option>
                <option>Uttar Pradesh</option>
                <option>Maharashtra</option>
                <option>Karnataka</option>
                <option>Gujarat</option>
                <option>Tamil Nadu</option>
              </select>

              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                rows="3"
                placeholder="Tell us about your requirements..."
                required
                className="border px-4 py-2.5 rounded-md text-sm resize-none focus:outline-none focus:border-[#01686d]"
              />

              <button
                type="submit"
                disabled={loading}
                className="
                  bg-[#01686d] hover:bg-[#00444b]
                  text-white py-3 rounded-md
                  font-semibold text-sm transition
                  disabled:opacity-60
                "
              >
                {loading ? "Submitting..." : "SUBMIT ENQUIRY"}
              </button>

              {status === "success" && (
                <p className="text-green-600 text-xs text-center">
                  Submitted successfully
                </p>
              )}

              {status === "error" && (
                <p className="text-red-600 text-xs text-center">
                  Submission failed. Try again.
                </p>
              )}
            </form>

            <p className="text-[10px] sm:text-xs text-center text-gray-600 mt-4">
              By submitting this form, you agree to our Terms & Privacy Policy.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PopupForm;
