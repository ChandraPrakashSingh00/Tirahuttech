import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SiIndeed,
  SiGmail,
  SiZoom,
  SiTrello,
  SiGooglesheets,
  SiWhatsapp,
} from "react-icons/si";
import { FaLinkedin, FaSlack } from "react-icons/fa";
import ServicePageTemplate from "../../../components/ServicePageTemplate";

function HRITRecruitment() {
  const navigate = useNavigate();

  const capabilities = [
    { title: "IT Talent Sourcing", desc: "Targeted sourcing of developers, engineers, and tech leads from active and passive talent pools." },
    { title: "Technical Screening & Vetting", desc: "Skill-based screening, technical rounds, and assessments to filter only job-ready candidates." },
    { title: "Contract & Full-Time Hiring", desc: "Flexible hiring models — full-time, contract, or contract-to-hire — based on your project needs." },
    { title: "Bulk & Niche Hiring", desc: "From bulk hiring drives to hard-to-fill niche tech roles, we scale with your requirements." },
    { title: "Employer Branding Support", desc: "Job descriptions, outreach messaging, and profiles that attract top-tier IT talent." },
    { title: "Onboarding Coordination", desc: "Smooth offer-to-joining coordination so new hires start without friction." },
  ];

  const solveItems = [
    "Software Developers",
    "Full Stack Engineers",
    "DevOps & Cloud Engineers",
    "QA & Testing Roles",
    "Data & AI Specialists",
    "IT Project Managers",
    "UI/UX Designers",
    "Technical Support Staff",
  ];

  const process = [
    { title: "Requirement Understanding", desc: "We study your role, tech stack, team culture, and hiring timeline before starting the search." },
    { title: "Talent Sourcing", desc: "Sourcing candidates through job boards, referrals, and our active tech talent network." },
    { title: "Screening & Shortlisting", desc: "Resume screening and technical evaluation to shortlist only relevant, qualified candidates." },
    { title: "Interviews & Coordination", desc: "Scheduling and coordinating interviews between your team and candidates end-to-end." },
    { title: "Offer & Negotiation", desc: "Supporting offer rollout and negotiation to close candidates faster." },
    { title: "Onboarding Follow-up", desc: "Staying involved post-offer to ensure a smooth joining and reduce drop-offs." },
  ];

  const technologies = [
    { name: "LinkedIn", icon: <FaLinkedin className="text-4xl" /> },
    { name: "Indeed", icon: <SiIndeed className="text-4xl" /> },
    { name: "Gmail", icon: <SiGmail className="text-4xl" /> },
    { name: "Slack", icon: <FaSlack className="text-4xl" /> },
    { name: "Zoom", icon: <SiZoom className="text-4xl" /> },
    { name: "Trello", icon: <SiTrello className="text-4xl" /> },
    { name: "Google Sheets", icon: <SiGooglesheets className="text-4xl" /> },
    { name: "WhatsApp", icon: <SiWhatsapp className="text-4xl" /> },
  ];

  const benefits = [
    { title: "Faster Time-to-Hire", desc: "Pre-vetted pipelines that cut down your hiring turnaround time.", icon: "⚡" },
    { title: "Verified Tech Talent", desc: "Every candidate is technically screened before being sent to you.", icon: "✅" },
    { title: "Flexible Hiring Models", desc: "Full-time, contract, or contract-to-hire — whatever fits your need.", icon: "🔄" },
    { title: "Dedicated Recruiter Support", desc: "A dedicated point of contact managing your hiring pipeline.", icon: "🤝" },
  ];

  const faqs = [
    { q: "What kind of IT roles do you recruit for?", a: "We recruit across software development, DevOps, QA, data & AI, UI/UX, IT project management, and technical support — from junior to leadership level roles." },
    { q: "How long does it take to fill a position?", a: "Most standard IT roles are filled within 2-3 weeks, while niche or senior-level positions may take 4-6 weeks depending on the skill set required." },
    { q: "Do you offer contract as well as full-time hiring?", a: "Yes. We support full-time, contract, and contract-to-hire models, so you can choose the arrangement that best fits your project and budget." },
    { q: "Do you screen candidates before sending profiles?", a: "Every candidate goes through resume screening and a technical evaluation round, so you only receive profiles that match your requirements." },
  ];

  return (
    <ServicePageTemplate
      eyebrow="Technology Talent Solutions"
      titleLine1="Hire The Right"
      titleHighlight="Tech Talent"
      titleLine2="Faster & Smarter"
      subtitle="We help businesses find, screen, and hire skilled IT professionals — from developers to tech leads — through a fast, reliable, and cost-effective recruitment process."
      heroTags={["IT Staffing", "Tech Screening", "Contract Hiring", "Bulk Hiring"]}
      primaryCta="Let's Talk"
      secondaryCta="Book Free Consultation"
      onPrimaryClick={() => navigate("/contact")}
      onSecondaryClick={() => navigate("/contact")}
      capabilitiesLabel="Capabilities"
      capabilitiesTitle="Everything You Need to Build Your Tech Team"
      capabilitiesSubtitle="From sourcing to onboarding, we manage every step of your IT hiring process."
      capabilities={capabilities}
      solveLabel="Built For Every Need"
      solveTitle="IT Roles We Hire For"
      solveItems={solveItems}
      processLabel="Our Process"
      processTitle="From Requirement to Onboarding"
      process={process}
      technologies={technologies}
      techLabel="Built to Last"
      techTitle="Tools We Use"
      techSubtitle="We use trusted recruitment and collaboration tools to keep your hiring process fast and transparent."
      benefitsTitle="Why Choose"
      benefitsHighlight="Our IT Recruitment?"
      benefitsSubtitle="Our recruitment process is built to save you time while ensuring you only meet candidates worth hiring."
      benefits={benefits}
      faqTitle="Frequently Asked Questions"
      faqs={faqs}
      ctaTitle="Ready to Build Your Tech Team?"
      ctaSubtitle="Tell us about the roles you need to fill and we'll get back to you with a hiring plan and timeline — no jargon, no pressure."
      ctaButtonText="Book a Free Hiring Consultation"
    />
  );
}

export default HRITRecruitment;