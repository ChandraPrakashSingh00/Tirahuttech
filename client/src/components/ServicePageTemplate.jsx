import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowUpRight, ArrowRight, Check } from "lucide-react";

/**
 * ServicePageTemplate
 * A shared, data-driven layout used across every /services/* page.
 * Keeps Tirahut's brand colors (#01686d teal / #00444b deep teal / #f27b22 orange / #F8F6F2 cream)
 * but restructures the page into: Hero -> Capabilities -> What We Solve -> Process -> Technologies
 * -> Why Choose Us -> FAQ -> CTA
 */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function Eyebrow({ children }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-4">
      <span className="w-6 h-[2px] bg-[#f27b22]" />
      <span className="text-[#f27b22] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
        {children}
      </span>
      <span className="w-6 h-[2px] bg-[#f27b22]" />
    </div>
  );
}

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div className="border-b border-[#00444b]/15">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
      >
        <span className="text-base sm:text-lg font-semibold text-[#00444b] group-hover:text-[#01686d] transition-colors">
          {q}
        </span>
        <ChevronDown
          className={`shrink-0 w-5 h-5 text-[#f27b22] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        }`}
        style={{ display: "grid" }}
      >
        <div className="overflow-hidden">
          <p className="text-sm sm:text-base text-[#00444b]/75 leading-relaxed pr-8">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function ServicePageTemplate({
  eyebrow,
  titleLine1,
  titleHighlight,
  titleLine2,
  subtitle,
  heroTags = [],
  primaryCta = "Let's Talk",
  secondaryCta = "Book Free Consultation",
  onPrimaryClick,
  onSecondaryClick,
  capabilitiesLabel = "Capabilities",
  capabilitiesTitle,
  capabilitiesSubtitle,
  capabilities = [],
  solveLabel = "Tools for Every Problem",
  solveTitle,
  solveItems = [],
  processLabel = "How We Work",
  processTitle,
  process = [],
  technologies = [],
  techLabel = "Built to Last",
  techTitle = "Technologies We Use",
  techSubtitle,
  benefitsTitle,
  benefitsHighlight,
  benefitsSubtitle,
  benefits = [],
  faqLabel = "Questions",
  faqTitle = "Frequently Asked Questions",
  faqs = [],
  ctaTitle,
  ctaSubtitle,
  ctaButtonText = "Start Your Project",
}) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="w-full font-['Inter'] bg-white overflow-hidden">
      {/* ============ HERO ============ */}
      <section className="relative w-full bg-[#01686d] pt-32 sm:pt-40 pb-20 sm:pb-28 px-6">
        {/* decorative accent shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#01686d]/40 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full  blur-3xl" />
          <div className="absolute top-0 right-0 bottom-0 w-px bg-white/10 hidden lg:block" />
        </div>

        <motion.div
          className="relative max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <Eyebrow>{eyebrow}</Eyebrow>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F8F6F2] leading-[1.1] tracking-tight">
            {titleLine1}{" "}
            {titleHighlight && <span className="text-[#f27b22]">{titleHighlight}</span>}
            {titleLine2 && (
              <>
                <br className="hidden sm:block" /> {titleLine2}
              </>
            )}
          </h1>

          <p className="mt-6 text-sm sm:text-base md:text-lg text-[#F8F6F2]/75 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onPrimaryClick}
              className="inline-flex items-center gap-2 bg-[#f27b22] hover:bg-[#d86b1f] text-white px-8 py-3.5 rounded-full text-sm sm:text-base font-semibold shadow-lg shadow-[#f27b22]/20 transition-all duration-300 hover:gap-3"
            >
              {primaryCta} <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onSecondaryClick}
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-3.5 rounded-full text-sm sm:text-base font-semibold hover:bg-white/10 transition-all duration-300"
            >
              {secondaryCta}
            </button>
          </div>

          {heroTags.length > 0 && (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {heroTags.map((tag, i) => (
                <span key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#F8F6F2]/70 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f27b22]" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </section>

      {/* ============ CAPABILITIES (numbered list, not cards) ============ */}
      {capabilities.length > 0 && (
        <motion.section
          className="w-full bg-white py-24 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-16">
              <Eyebrow>{capabilitiesLabel}</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00444b] leading-tight">
                {capabilitiesTitle}
              </h2>
              {capabilitiesSubtitle && (
                <p className="mt-4 text-sm sm:text-base text-[#00444b]/70">{capabilitiesSubtitle}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  className="group flex gap-5 py-7 border-t border-[#00444b]/12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                >
                  <span className="shrink-0 text-2xl sm:text-3xl font-extrabold text-[#f27b22]/35 group-hover:text-[#f27b22] transition-colors duration-300 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#00444b] mb-1.5">{cap.title}</h3>
                    <p className="text-sm sm:text-[15px] text-[#00444b]/70 leading-relaxed">{cap.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* ============ WHAT WE SOLVE (pill cloud) ============ */}
      {solveItems.length > 0 && (
        <motion.section
          className="w-full py-20 px-6 bg-[#01686d]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="max-w-5xl mx-auto text-center">
            <Eyebrow>{solveLabel}</Eyebrow>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-10 max-w-2xl mx-auto leading-snug">
              {solveTitle}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {solveItems.map((item, i) => (
                <motion.span
                  key={i}
                  className="inline-flex items-center gap-2 bg-white text-[#00444b] border border-[#00444b]/15 px-5 py-2.5 rounded-full text-sm font-medium shadow-sm hover:bg-[#01686d] hover:text-white hover:border-[#01686d] transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Check className="w-3.5 h-3.5 text-[#f27b22]" />
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* ============ PROCESS (numbered steps) ============ */}
      {process.length > 0 && (
        <motion.section
          className="w-full bg-white py-24 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Eyebrow>{processLabel}</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00444b]">{processTitle}</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, i) => (
                <motion.div
                  key={i}
                  className="relative bg-white border border-[#00444b]/12 rounded-2xl p-7 hover:border-[#f27b22]/50 hover:shadow-xl hover:shadow-[#00444b]/5 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                >
                  <span className="text-sm font-bold text-[#f27b22] tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-[#00444b]">{step.title}</h3>
                  <p className="mt-2 text-sm text-[#00444b]/70 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* ============ TECHNOLOGIES ============ */}
      {technologies.length > 0 && (
        <motion.section
          className="py-24 px-6 bg-[#01686d]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="max-w-6xl mx-auto text-center">
            <Eyebrow>{techLabel}</Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{techTitle}</h2>
            {techSubtitle && (
              <p className="mt-3 text-sm sm:text-base text-white/70 max-w-2xl mx-auto">{techSubtitle}</p>
            )}

            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-14">
              {technologies.map((t, i) => (
                <motion.div
                  key={i}
                  className="group bg-white rounded-2xl p-6 w-36 sm:w-44 flex flex-col items-center
                    shadow-sm border border-[#00444b]/10 transition-all duration-300
                    hover:bg-[#f27b22] hover:shadow-xl hover:-translate-y-1"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <div className="text-[#00444b] group-hover:text-white transition-colors duration-300">
                    {t.icon}
                  </div>
                  <p className="mt-4 text-sm sm:text-base font-semibold text-[#00444b] group-hover:text-white transition-colors duration-300">
                    {t.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* ============ WHY CHOOSE US ============ */}
      {benefits.length > 0 && (
        <motion.section
          className="bg-white text-[#00444b] py-24 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="max-w-6xl mx-auto text-center mb-14">
            <Eyebrow>Why Tirahut</Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              {benefitsTitle} <span className="text-[#f27b22]">{benefitsHighlight}</span>
            </h2>
            {benefitsSubtitle && (
              <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-[#00444b]/70">{benefitsSubtitle}</p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((b, idx) => (
              <motion.div
                key={idx}
                className="bg-white text-[#00444b] border border-[#01686d]/25 rounded-2xl p-7
                  flex flex-col items-center text-center transition-all duration-300
                  hover:bg-[#f27b22] hover:text-white hover:border-[#f27b22] hover:shadow-xl hover:shadow-[#f27b22]/30 hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <div className="bg-[#01686d]/10 group-hover:bg-white/20 p-4 rounded-full w-fit mx-auto mb-4 text-2xl">
                  {b.icon}
                </div>
                <h4 className="text-base font-bold mb-2">{b.title}</h4>
                <p className="text-sm opacity-80">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* ============ FAQ ============ */}
      {faqs.length > 0 && (
        <motion.section
          className="w-full bg-[#01686d] py-24 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Eyebrow>{faqLabel}</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{faqTitle}</h2>
            </div>
            <div className="bg-white rounded-2xl px-6 sm:px-8 shadow-sm border border-[#00444b]/10">
              {faqs.map((f, i) => (
                <FAQItem
                  key={i}
                  q={f.q}
                  a={f.a}
                  isOpen={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                />
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* ============ CTA BANNER ============ */}
      <motion.section
        className="relative w-full bg-white py-20 px-6 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-16 left-1/4 w-72 h-72 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-16 right-1/4 w-72 h-72 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f27b22] leading-tight">
            {ctaTitle}
          </h2>
          {ctaSubtitle && (
            <p className="mt-4 text-sm sm:text-base text-[#f27b22] max-w-xl mx-auto">{ctaSubtitle}</p>
          )}
          <button
            onClick={onPrimaryClick}
            className="mt-8 inline-flex items-center gap-2 bg-[#f27b22] hover:bg-[#d86b1f] text-white px-10 py-4 rounded-full text-base font-semibold shadow-lg shadow-[#f27b22]/20 transition-all duration-300 hover:gap-3"
          >
            {ctaButtonText} <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </motion.section>

      {/* signature gradient divider */}
      <div className="w-full h-1.5 bg-gradient-to-r from-[#01686d] via-[#f27b22] to-[#00444b]" />
    </div>
  );
}
