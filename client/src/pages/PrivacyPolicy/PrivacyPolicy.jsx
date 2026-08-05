import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Database,
  Lock,
  Cookie,
  User,
  Share2,
  Mail,
} from "lucide-react";

function PrivacyPolicy() {
  const policySections = [
    {
      title: "Information We Collect",
      desc: "We collect information that you voluntarily provide, including your name, email address, phone number, business details, and any information submitted through forms or contact requests.",
      icon: <User size={32} />,
    },
    {
      title: "How We Use Information",
      desc: "Your information helps us provide services, improve website performance, respond to inquiries, deliver support, and communicate important updates related to our services.",
      icon: <Database size={32} />,
    },
    {
      title: "Information Sharing",
      desc: "We never sell your personal information. Data is only shared with trusted partners when required to provide services or comply with legal obligations.",
      icon: <Share2 size={32} />,
    },
    {
      title: "Data Security",
      desc: "We implement modern security practices including encryption, secure servers, access controls, and monitoring systems to protect your information.",
      icon: <ShieldCheck size={32} />,
    },
    {
      title: "Cookies & Tracking",
      desc: "Cookies help us improve website functionality, remember user preferences, and analyze website traffic for a better user experience.",
      icon: <Cookie size={32} />,
    },
    {
      title: "Your Privacy Rights",
      desc: "You can request access, correction, deletion, or export of your personal information at any time according to applicable privacy regulations.",
      icon: <Lock size={32} />,
    },
  ];

  const faqs = [
    {
      q: "Do you sell personal information?",
      a: "No. We never sell, rent, or trade personal information to third parties.",
    },
    {
      q: "How is my information protected?",
      a: "We use encryption, secure hosting, access controls, and security monitoring to protect your information.",
    },
    {
      q: "Can I request deletion of my data?",
      a: "Yes. You may contact us anytime to request deletion or modification of your personal information.",
    },
    {
      q: "Do you use cookies?",
      a: "Yes. Cookies are used to improve functionality, personalization, and website analytics.",
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full font-['Inter']">

      {/* HERO SECTION */}

      <motion.div
        className="w-full text-[#F8F6F2] py-20 px-5 text-center pt-32 sm:pt-36 bg-gradient-to-r from-[#01686d] to-[#00444b]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-3">
          Privacy Policy
        </h1>

        <p className="text-sm sm:text-base max-w-2xl mx-auto opacity-90">
          Your privacy matters to us. Learn how we collect, use, protect,
          and manage your personal information with complete transparency.
        </p>
      </motion.div>

      {/* INTRO SECTION */}

      <motion.section
        className="w-full bg-white py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00444b]">
            YOUR DATA. YOUR RIGHTS. OUR RESPONSIBILITY.
          </h2>

          <p className="mt-5 text-[#00444b]/80 max-w-3xl mx-auto leading-8">
            This Privacy Policy explains how we collect, process, store,
            and protect your information when you use our website,
            products, and services.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-5 mt-10">
          <span className="border border-[#00444b] px-8 py-3 rounded-full font-medium hover:bg-[#f27b22] hover:text-white hover:border-[#f27b22] transition-all duration-300 cursor-pointer">
            Secure
          </span>

          <span className="border border-[#00444b] px-8 py-3 rounded-full font-medium hover:bg-[#01686d] hover:text-white hover:border-[#01686d] transition-all duration-300 cursor-pointer">
            Transparent
          </span>

          <span className="border border-[#00444b] px-8 py-3 rounded-full font-medium hover:bg-[#f27b22] hover:text-white hover:border-[#f27b22] transition-all duration-300 cursor-pointer">
            Compliant
          </span>
        </div>
      </motion.section>

      {/* POLICY SECTIONS */}

      <motion.section
        className="bg-white py-24 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00444b]">
            PRIVACY POLICY OVERVIEW
          </h2>

          <p className="mt-4 text-[#00444b]/70 max-w-2xl mx-auto">
            Everything you need to know about how we manage and protect your information.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

            {policySections.map((item, index) => (
              <motion.div
                key={index}
                className="group bg-white border border-[#00444b]/10 rounded-2xl p-8 shadow-md hover:bg-[#f27b22] hover:text-white hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <div className="w-16 h-16 rounded-xl bg-[#01686d]/10 flex items-center justify-center mx-auto mb-5 text-[#01686d] group-hover:bg-white/20 group-hover:text-white transition-all">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-sm leading-7">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>

          <div className="mt-14">
            <button className="bg-[#f27b22] hover:bg-[#d86b1f] text-white px-8 py-4 rounded-full font-semibold shadow-lg transition">
              READ FULL PRIVACY POLICY
            </button>
          </div>
        </div>
      </motion.section>

      {/* SECURITY COMMITMENT */}

      <motion.section
        className="bg-[#f8fbfb] py-24 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00444b]">
            OUR SECURITY COMMITMENT
          </h2>

          <p className="mt-4 text-[#00444b]/80 max-w-3xl mx-auto">
            We continuously improve our systems to ensure your data remains
            protected through modern infrastructure, encryption standards,
            and secure development practices.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

            {[
              "SSL Encryption",
              "Secure Servers",
              "Access Control",
              "Continuous Monitoring",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white border border-[#01686d]/20 rounded-xl p-8 hover:bg-[#f27b22] hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <div className="text-4xl mb-4">🔒</div>

                <h4 className="font-semibold text-lg">
                  {item}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ */}

      <motion.section
        className="bg-white py-24 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto">

          <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-[#00444b]">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-14">

            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white border border-[#00444b]/10 rounded-2xl p-8 shadow-md hover:shadow-xl transition"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <h3 className="text-xl font-bold text-[#01686d]">
                  {faq.q}
                </h3>

                <p className="mt-4 text-[#00444b]/80 leading-7">
                  {faq.a}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </motion.section>

      {/* CONTACT SECTION */}

      <motion.section
        className="py-24 px-6 bg-gradient-to-r from-[#01686d] to-[#00444b] text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
      
      </motion.section>

      {/* Divider */}

      <div className="w-full h-2 bg-gradient-to-r from-[#01686d] via-[#f27b22] to-[#00444b]" />

    </div>
  );
}

export default PrivacyPolicy;