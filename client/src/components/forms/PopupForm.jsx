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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ================= SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(
        "https://tirahuttech.vercel.app/api/Form/popup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            type: "POPUP_ENQUIRY",
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Request failed");
      }

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
        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-3 sm:p-6 z-50"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="bg-white rounded-xl w-full max-w-5xl max-h-[90vh] overflow-hidden relative flex flex-col md:flex-row"
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-[#00444b] hover:bg-[#01686d] text-white rounded-full p-2 transition z-50"
          >
            <FaTimes size={16} />
          </button>

          {/* LEFT IMAGE */}
          <div className="relative w-full md:w-1/2 flex items-center justify-center p-6 overflow-hidden border-b md:border-b-0 md:border-r">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 0.5, x: 0 }}
              transition={{ duration: 1 }}
              className="absolute top-0 left-0 w-[200px] h-[200px] bg-[#f27b22] rounded-br-[160px]"
            />
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{ duration: 1 }}
              className="absolute bottom-0 right-0 w-[220px] h-[220px] bg-[#01686d] rounded-tl-[180px]"
            />

            <img
              src="/img/tira.png"
              alt="Tirahut Tech"
              className="w-[80%] md:w-full object-contain relative z-10 drop-shadow-xl"
            />
          </div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 40, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 overflow-y-auto"
          >
            <h1 className="text-4xl font-bold text-center text-[#003C3F]">
              TIRAHUT TECH
            </h1>
            <p className="text-center text-sm font-semibold text-[#003C3F] mt-2 mb-6">
              Let’s Build Your Next Digital Solution
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="border px-4 py-3 rounded-md"
              />

              <input
                type="email"
                name="businessEmail"
                placeholder="Business Email"
                value={formData.businessEmail}
                onChange={handleChange}
                required
                className="border px-4 py-3 rounded-md"
              />

              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="border px-4 py-3 rounded-md"
              />

              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="border px-4 py-3 rounded-md bg-white"
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
                rows="4"
                placeholder="Tell us about your requirements..."
                value={formData.requirements}
                onChange={handleChange}
                required
                className="border px-4 py-3 rounded-md resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-[#01686d] text-white py-3 rounded-md font-semibold hover:bg-[#00444b] transition disabled:opacity-60"
              >
                {loading ? "Submitting..." : "SUBMIT ENQUIRY"}
              </button>

              {status === "success" && (
                <p className="text-green-600 text-sm text-center">
                  Submitted successfully
                </p>
              )}

              {status === "error" && (
                <p className="text-red-600 text-sm text-center">
                  Submission failed. Try again.
                </p>
              )}
            </form>

            <p className="text-xs text-center text-gray-600 mt-4">
              By submitting this form, you agree to our Terms & Privacy Policy.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PopupForm;
