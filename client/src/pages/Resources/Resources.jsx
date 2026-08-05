// Resources.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiOutlineDocumentText,
  HiOutlineAcademicCap,
  HiOutlineChartBar,
  HiOutlineDownload,
} from "react-icons/hi";
import { FaPlus, FaMinus, FaArrowRightLong } from "react-icons/fa6";

const resourceCategories = [
  {
    icon: <HiOutlineDocumentText size={26} />,
    title: "Blogs & Insights",
    desc: "Practical articles on web development, marketing, and business growth.",
    link: "/blog",
    cta: "Read Blog",
  },
  {
    icon: <HiOutlineChartBar size={26} />,
    title: "Case Studies",
    desc: "Real results we've delivered for our clients across industries.",
    link: "/contact",
    cta: "Request Case Studies",
  },
  {
    icon: <HiOutlineAcademicCap size={26} />,
    title: "Guides & Ebooks",
    desc: "In-depth guides on SEO, automation, and scaling your tech stack.",
    link: "/contact",
    cta: "Get Access",
  },
  {
    icon: <HiOutlineDownload size={26} />,
    title: "Pricing & Packages",
    desc: "Compare our website, SEO, and growth packages to find the right fit.",
    link: "/our-package",
    cta: "View Packages",
  },
];

const faqs = [
  {
    question: "What kind of resources do you offer?",
    answer:
      "We share blogs, case studies, and guides covering web development, digital marketing, automation, and business growth strategies used by our clients.",
  },
  {
    question: "Can I get a custom case study for my industry?",
    answer:
      "Yes. Reach out to us with your industry and requirements, and our team will share the most relevant case studies and success stories.",
  },
  {
    question: "How often do you publish new content?",
    answer:
      "We regularly publish new blogs and guides. Follow our blog page or subscribe below to stay updated with the latest resources.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes, we offer a free initial consultation to understand your requirements and recommend the right solution or package for your business.",
  },
];

const Resources = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
            Resources
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#01686d] leading-relaxed">
            Guides, insights, and tools to help you make smarter technology and
            growth decisions.
          </p>
        </div>
      </motion.div>

      {/* ================= RESOURCE CATEGORIES ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resourceCategories.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group bg-white border border-gray-100 shadow-md hover:shadow-2xl rounded-2xl p-7 flex flex-col transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#e9f4f3] text-[#01686d] flex items-center justify-center mb-5 group-hover:bg-[#01686d] group-hover:text-white transition">
                {item.icon}
              </div>
              <h3 className="font-semibold text-[#00444b] text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {item.desc}
              </p>
              <Link
                to={item.link}
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#f27b22] hover:gap-3 transition-all"
              >
                {item.cta} <FaArrowRightLong />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= NEWSLETTER / CTA ================= */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#01686d] to-[#00444b] px-8 py-14 sm:px-14 text-center">
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#f27b22]/20 rounded-full" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-white/10 rounded-full" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Need Something Specific?
            </h2>
            <p className="text-white/80 mb-8">
              Tell us what you're looking for — a guide, case study, or advice
              on your next project — and our team will get back to you.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#F27B22] text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-[#e06b1d] transition shadow-lg"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-[#f7fafa] py-20 px-5 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00444b]">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-[#f27b22] mt-4 mb-4 rounded-full mx-auto" />
          </div>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md border border-gray-100 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left text-[#00444b] font-semibold text-base focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <span className="ml-4 text-[#01686d] shrink-0">
                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-1 bg-gradient-to-r from-[#01686d] via-[#f27b22] to-[#00444b]" />
    </div>
  );
};

export default Resources;
