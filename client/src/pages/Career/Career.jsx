// Career.jsx
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaClock,
  FaBriefcase,
  FaChevronDown,
} from "react-icons/fa";
import {
  HiOutlineLightBulb,
  HiOutlineTrendingUp,
  HiOutlineUserGroup,
  HiOutlineHeart,
} from "react-icons/hi";
import {
  FiUploadCloud,
  FiFile,
  FiX,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { submitCareerApplication } from "../../api/forms.api";

const ALLOWED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_RESUME_MB = 5;

function formatBytes(bytes) {
  if (!bytes) return "0 KB";
  const kb = bytes / 1024;
  return kb > 1024 ? `${(kb / 1024).toFixed(1)} MB` : `${Math.round(kb)} KB`;
}

// Read a File as a plain base64 string (no "data:...;base64," prefix)
function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(",")[1] || "");
    reader.onerror = () => reject(new Error("Could not read file"));
    reader.readAsDataURL(file);
  });
}

const openPositions = [
  {
    title: "Frontend Developer (React.js)",
    type: "Full-time",
    location: "Greater Noida / Remote",
    exp: "1 - 3 Years",
    desc: "Build fast, responsive, and scalable web interfaces using React, Tailwind CSS, and modern tooling.",
  },
  {
    title: "Backend Developer (Node.js)",
    type: "Full-time",
    location: "Greater Noida / Remote",
    exp: "1 - 3 Years",
    desc: "Design and maintain REST APIs, databases, and server infrastructure for client products.",
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Greater Noida",
    exp: "0 - 2 Years",
    desc: "Craft clean, user-first designs for web & mobile products, from wireframes to polished UI.",
  },
  {
    title: "Digital Marketing Executive",
    type: "Full-time",
    location: "Greater Noida",
    exp: "0 - 2 Years",
    desc: "Plan and execute SEO, SMO, and paid campaigns to help our clients grow their brand online.",
  },
  {
    title: "Business Development Executive",
    type: "Full-time",
    location: "Greater Noida",
    exp: "1 - 4 Years",
    desc: "Generate leads, build client relationships, and drive growth for Tirahut Tech's services.",
  },
];

const perks = [
  {
    icon: <HiOutlineTrendingUp size={26} />,
    title: "Growth First",
    desc: "Clear learning paths, mentorship, and real ownership from day one.",
  },
  {
    icon: <HiOutlineUserGroup size={26} />,
    title: "Great Team",
    desc: "Work alongside a friendly, driven team that ships real products.",
  },
  {
    icon: <HiOutlineLightBulb size={26} />,
    title: "Real Impact",
    desc: "Your work directly shapes products used by our clients.",
  },
  {
    icon: <HiOutlineHeart size={26} />,
    title: "Work-Life Balance",
    desc: "Flexible hours and a culture that respects your time.",
  },
];

const initialFormState = {
  fullName: "",
  email: "",
  phone: "",
  roleAppliedFor: "",
  experience: "",
  portfolioUrl: "",
  coverMessage: "",
};

const Career = () => {
  const [openRole, setOpenRole] = useState(null);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState(initialFormState);
  const [resumeFile, setResumeFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const applyFor = (title) => {
    setFormData((prev) => ({ ...prev, roleAppliedFor: title }));
    document
      .getElementById("apply-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateAndSetFile = (file) => {
    setFileError("");
    if (!file) return;

    if (!ALLOWED_RESUME_TYPES.includes(file.type)) {
      setFileError("Please upload a PDF or Word document (.pdf, .doc, .docx).");
      return;
    }
    if (file.size > MAX_RESUME_MB * 1024 * 1024) {
      setFileError(`File is too large. Max size is ${MAX_RESUME_MB}MB.`);
      return;
    }
    setResumeFile(file);
  };

  const handleFileInput = (e) => {
    validateAndSetFile(e.target.files?.[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    validateAndSetFile(e.dataTransfer.files?.[0]);
  };

  const removeFile = () => {
    setResumeFile(null);
    setFileError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setErrorMsg("");

    if (!resumeFile) {
      setFileError("Please attach your resume to apply.");
      return;
    }

    setLoading(true);
    try {
      const resumeBase64 = await readFileAsBase64(resumeFile);

      await submitCareerApplication({
        ...formData,
        resumeFileName: resumeFile.name,
        resumeMimeType: resumeFile.type,
        resumeBase64,
      });

      setStatus("success");
      setFormData(initialFormState);
      removeFile();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg(
        err?.response?.data?.message ||
          "Something went wrong while submitting your application. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full font-[Inter] bg-white">
      {/* ================= HEADER ================= */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full py-28 sm:py-32 px-5 text-center overflow-hidden bg-[#e9f4f3]"
      >
        <div className="absolute -top-32 -left-32 w-[380px] h-[180px] bg-[#00444b] rotate-45 opacity-90" />
        <div className="absolute top-24 left-40 w-[80px] h-[80px] bg-[#f27b22] rotate-45 shadow-lg" />
        <div className="absolute -bottom-36 -left-28 w-[380px] h-[180px] bg-[#01686d] rotate-45 opacity-90" />
        <div className="absolute bottom-24 left-16 w-[240px] h-[6px] bg-[#f27b22] rotate-45" />
        <div className="absolute -top-36 -right-36 w-[400px] h-[200px] bg-[#00444b] rotate-45 opacity-90" />
        <div className="absolute top-28 right-28 w-[200px] h-[6px] bg-[#f27b22] rotate-45" />
        <div className="absolute -bottom-24 right-24 w-[100px] h-[100px] bg-[#f27b22] rotate-45 shadow-lg" />
        <div className="absolute top-[35%] left-[30%] w-[200px] h-[200px] bg-[#01686d]/10 rotate-45 rounded-xl hidden sm:block" />
        <div className="absolute bottom-[25%] right-[35%] w-[220px] h-[220px] bg-[#00444b]/10 rotate-45 rounded-xl hidden sm:block" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00444b] mb-3">
            Careers at Tirahut Tech
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#01686d] leading-relaxed">
            Join a team that builds real products for real businesses. Grow your
            career while shaping the future of technology.
          </p>
        </div>
      </motion.div>

      {/* ================= WHY JOIN US ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00444b]">
            Why Work With Us
          </h2>
          <div className="w-16 h-1 bg-[#f27b22] mt-4 mb-4 rounded-full mx-auto" />
          <p className="text-gray-600 text-base">
            We believe great products are built by people who love what they do.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-gray-100 shadow-md hover:shadow-xl rounded-2xl p-7 text-center transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-[#e9f4f3] text-[#01686d] flex items-center justify-center mb-4">
                {perk.icon}
              </div>
              <h3 className="font-semibold text-[#00444b] text-lg mb-2">
                {perk.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {perk.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= OPEN POSITIONS ================= */}
      <section className="bg-[#f7fafa] py-20 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00444b]">
              Open Positions
            </h2>
            <div className="w-16 h-1 bg-[#f27b22] mt-4 mb-4 rounded-full mx-auto" />
            <p className="text-gray-600 text-base">
              Don't see a role that fits? Send us your resume anyway — we're
              always looking for great people.
            </p>
          </div>

          <div className="space-y-5">
            {openPositions.map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenRole(openRole === i ? null : i)}
                  className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-left px-6 sm:px-8 py-6"
                >
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#00444b]">
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <FaBriefcase className="text-[#01686d]" /> {role.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaMapMarkerAlt className="text-[#01686d]" />{" "}
                        {role.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaClock className="text-[#01686d]" /> {role.exp}
                      </span>
                    </div>
                  </div>

                  <FaChevronDown
                    className={`shrink-0 text-[#01686d] transition-transform duration-300 ${
                      openRole === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openRole === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 sm:px-8 overflow-hidden"
                    >
                      <p className="text-gray-600 text-sm sm:text-base pb-6 leading-relaxed">
                        {role.desc}
                      </p>
                      <button
                        onClick={() => applyFor(role.title)}
                        className="mb-6 px-6 py-2.5 bg-[#01686d] text-white text-sm font-semibold rounded-xl hover:bg-[#00444b] transition"
                      >
                        Apply Now
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= APPLICATION FORM ================= */}
      <section id="apply-form" className="max-w-4xl mx-auto px-5 sm:px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00444b]">
            Apply Now
          </h2>
          <div className="w-16 h-1 bg-[#f27b22] mt-4 mb-4 rounded-full mx-auto" />
          <p className="text-gray-600 text-base">
            Fill in your details, attach your resume, and our HR team will
            get back to you.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-3xl p-6 sm:p-10 border border-gray-100">
          {status === "success" ? (
            <div className="flex flex-col items-center text-center py-10">
              <div className="w-16 h-16 rounded-full bg-[#e9f4f3] flex items-center justify-center mb-5">
                <FiCheckCircle className="text-[#01686d]" size={32} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#00444b] mb-2">
                Application Submitted!
              </h3>
              <p className="text-gray-500 max-w-md">
                Thanks for applying to Tirahut Tech. Our HR team has received
                your resume and will reach out if there's a match.
              </p>
              <button
                onClick={() => setStatus(null)}
                className="mt-6 px-6 py-2.5 bg-[#01686d] text-white text-sm font-semibold rounded-xl hover:bg-[#00444b] transition"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01686d]/40 focus:border-[#01686d] transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01686d]/40 focus:border-[#01686d] transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01686d]/40 focus:border-[#01686d] transition"
                />
                <select
                  name="roleAppliedFor"
                  value={formData.roleAppliedFor}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01686d]/40 focus:border-[#01686d] transition bg-white text-gray-700"
                >
                  <option value="" disabled>
                    Role you're applying for
                  </option>
                  {openPositions.map((role) => (
                    <option key={role.title} value={role.title}>
                      {role.title}
                    </option>
                  ))}
                  <option value="General Application">
                    General Application (no specific role)
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="experience"
                  placeholder="Total Experience (e.g. 2 Years, Fresher)"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01686d]/40 focus:border-[#01686d] transition"
                />
                <input
                  type="url"
                  name="portfolioUrl"
                  placeholder="Portfolio / LinkedIn / GitHub URL (optional)"
                  value={formData.portfolioUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01686d]/40 focus:border-[#01686d] transition"
                />
              </div>

              <textarea
                name="coverMessage"
                placeholder="Tell us a bit about yourself and why you'd be a great fit (optional)"
                rows="5"
                value={formData.coverMessage}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01686d]/40 focus:border-[#01686d] transition resize-none"
              />

              {/* ---------- Resume Upload ---------- */}
              <div>
                <label className="block text-sm font-semibold text-[#00444b] mb-2">
                  Upload Resume <span className="text-[#f27b22]">*</span>
                </label>

                {!resumeFile ? (
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragActive(true);
                    }}
                    onDragLeave={() => setDragActive(false)}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`cursor-pointer flex flex-col items-center justify-center text-center px-6 py-10 rounded-xl border-2 border-dashed transition-colors ${
                      dragActive
                        ? "border-[#01686d] bg-[#e9f4f3]"
                        : "border-gray-300 hover:border-[#01686d] hover:bg-[#f7fafa]"
                    }`}
                  >
                    <FiUploadCloud className="text-[#01686d] mb-3" size={30} />
                    <p className="text-sm font-medium text-[#00444b]">
                      Drag & drop your resume here, or{" "}
                      <span className="text-[#01686d] underline">browse</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      PDF or Word, up to {MAX_RESUME_MB}MB
                    </p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileInput}
                      className="hidden"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-[#01686d]/30 bg-[#e9f4f3]">
                    <div className="flex items-center gap-3 min-w-0">
                      <FiFile className="text-[#01686d] shrink-0" size={20} />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-[#00444b] truncate">
                          {resumeFile.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {formatBytes(resumeFile.size)}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white text-gray-500 hover:text-red-500 transition"
                      aria-label="Remove file"
                    >
                      <FiX size={18} />
                    </button>
                  </div>
                )}

                {fileError && (
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-red-600">
                    <FiAlertCircle size={14} /> {fileError}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto bg-[#F27B22] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#e06b1d] transition disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>

              {status === "error" && (
                <p className="flex items-center gap-1.5 text-red-600 text-sm font-medium">
                  <FiAlertCircle size={14} /> {errorMsg}
                </p>
              )}
            </form>
          )}
        </div>
      </section>

      <div className="w-full h-1 bg-gradient-to-r from-[#01686d] via-[#f27b22] to-[#00444b]" />
    </div>
  );
};

export default Career;
