import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { submitEnquiryForm } from "../../api/forms.api";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await submitEnquiryForm(formData);

      setStatus("success");

      setTimeout(() => onClose(), 1200);

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
        className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
      >

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl relative"
        >

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-[#00444b] hover:bg-[#01686d] text-white rounded-full p-2 transition z-50"
          >
            <FaTimes size={16} />
          </button>

          {/* LEFT SIDE */}
          <div className="relative w-full md:w-1/2 flex items-center justify-center p-6 overflow-hidden border-b md:border-b-0 md:border-r bg-gradient-to-br from-white to-gray-100">

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 0.5, x: 0 }}
              transition={{ duration: 1 }}
              className="absolute top-0 left-0 w-[180px] h-[180px] bg-[#f27b22] rounded-br-[160px]"
            />

            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{ duration: 1 }}
              className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-[#01686d] rounded-tl-[160px]"
            />

            <img
              src="/img/tira.png"
              alt="Tirahut Tech"
              className="w-[75%] md:w-full object-contain relative z-10 drop-shadow-xl"
            />
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 30, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 overflow-y-auto"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#003C3F]">
              TIRAHUT TECH
            </h1>

            <p className="text-center text-sm font-medium text-gray-600 mt-2 mb-6">
              Let’s Build Your Next Digital Solution
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#01686d]"
              />

              <input
                type="email"
                name="businessEmail"
                placeholder="Business Email"
                value={formData.businessEmail}
                onChange={handleChange}
                required
                className="border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#01686d]"
              />

              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#01686d]"
              />

              {/* STATES WITH SCROLL */}
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="border px-4 py-3 rounded-lg bg-white focus:ring-2 focus:ring-[#01686d] max-h-48 overflow-y-auto"
              >
                <option value="">Select State</option>

                <option value="All India">All India</option>

                <option>Andhra Pradesh</option>
                <option>Arunachal Pradesh</option>
                <option>Assam</option>
                <option>Bihar</option>
                <option>Chhattisgarh</option>
                <option>Goa</option>
                <option>Gujarat</option>
                <option>Haryana</option>
                <option>Himachal Pradesh</option>
                <option>Jharkhand</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Madhya Pradesh</option>
                <option>Maharashtra</option>
                <option>Manipur</option>
                <option>Meghalaya</option>
                <option>Mizoram</option>
                <option>Nagaland</option>
                <option>Odisha</option>
                <option>Punjab</option>
                <option>Rajasthan</option>
                <option>Sikkim</option>
                <option>Tamil Nadu</option>
                <option>Telangana</option>
                <option>Tripura</option>
                <option>Uttar Pradesh</option>
                <option>Uttarakhand</option>
                <option>West Bengal</option>

                <option>Delhi</option>
                <option>Jammu and Kashmir</option>
                <option>Ladakh</option>
                <option>Chandigarh</option>
                <option>Dadra and Nagar Haveli and Daman and Diu</option>
                <option>Lakshadweep</option>
                <option>Puducherry</option>
              </select>

              <textarea
                name="requirements"
                rows="4"
                placeholder="Tell us about your requirements..."
                value={formData.requirements}
                onChange={handleChange}
                required
                className="border px-4 py-3 rounded-lg resize-none focus:ring-2 focus:ring-[#01686d]"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-[#01686d] text-white py-3 rounded-lg font-semibold hover:bg-[#00444b] transition disabled:opacity-60"
              >
                {loading ? "Submitting..." : "SUBMIT ENQUIRY"}
              </button>

              {status === "success" && (
                <p className="text-green-600 text-sm text-center">
                  Submitted successfully 🎉
                </p>
              )}

              {status === "error" && (
                <p className="text-red-600 text-sm text-center">
                  Submission failed. Try again.
                </p>
              )}
            </form>

            {/* FOOTER */}
            <p className="text-xs text-center text-gray-500 mt-5">
              By submitting this form you agree to our{" "}
              <a
                href="/policy"
                className="text-[#01686d] underline hover:text-[#00444b]"
              >
                Privacy Policy
              </a>{" "}
              &{" "}
              <a
                href="/team"
                className="text-[#01686d] underline hover:text-[#00444b]"
              >
                Our Team
              </a>
              .
            </p>

          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PopupForm;