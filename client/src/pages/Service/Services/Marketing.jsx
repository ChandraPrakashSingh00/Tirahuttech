import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaGoogle,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiMailchimp, SiYoutube } from "react-icons/si";
import ServicePageTemplate from "../../../components/ServicePageTemplate";

function Marketing() {
  const navigate = useNavigate();

  const capabilities = [
    { title: "Search Engine Optimization", desc: "Rank higher on Google and drive consistent organic traffic to your site." },
    { title: "Paid Ad Campaigns", desc: "Google, Facebook, and Instagram ads engineered for maximum return on spend." },
    { title: "Social Media Marketing", desc: "Content and campaigns that grow your brand's presence and engagement." },
    { title: "Email Marketing", desc: "Automated email flows that nurture leads and drive repeat business." },
    { title: "Content Marketing", desc: "Blogs, videos, and creatives that build authority and attract your audience." },
    { title: "Analytics & Reporting", desc: "Clear, actionable reporting so you always know what's working." },
  ];

  const solveItems = [
    "SEO",
    "Google Ads",
    "Social Media Marketing",
    "Email Marketing",
    "Content Marketing",
    "Brand Strategy",
    "Conversion Optimization",
    "Analytics & Reporting",
  ];

  const process = [
    { title: "Audit & Research", desc: "We analyze your market, competitors, and current digital presence." },
    { title: "Strategy Development", desc: "A data-driven marketing plan built around your specific business goals." },
    { title: "Campaign Setup", desc: "We build and launch campaigns across the right channels for your audience." },
    { title: "Content Creation", desc: "Creatives, copy, and assets designed to engage and convert." },
    { title: "Optimization", desc: "Continuous A/B testing and refinement to improve performance." },
    { title: "Reporting & Growth", desc: "Regular reporting with clear insights to guide the next steps." },
  ];

  const technologies = [
    { name: "Google Ads", icon: <FaGoogle className="text-4xl" /> },
    { name: "Facebook Ads", icon: <FaFacebookF className="text-4xl" /> },
    { name: "Instagram", icon: <FaInstagram className="text-4xl" /> },
    { name: "Twitter Ads", icon: <FaTwitter className="text-4xl" /> },
    { name: "LinkedIn Ads", icon: <FaLinkedinIn className="text-4xl" /> },
    { name: "Mailchimp", icon: <SiMailchimp className="text-4xl" /> },
    { name: "YouTube Ads", icon: <SiYoutube className="text-4xl" /> },
  ];

  const benefits = [
    { title: "ROI Focused", desc: "Campaigns designed to maximize your return on investment.", icon: "💰" },
    { title: "Targeted Marketing", desc: "Reach the right audience with precision targeting.", icon: "🎯" },
    { title: "Brand Awareness", desc: "Grow your brand presence across digital platforms.", icon: "📈" },
    { title: "Analytics & Reporting", desc: "Track performance with actionable insights.", icon: "📊" },
  ];

  const faqs = [
    { q: "How soon can I expect results from digital marketing?", a: "Paid campaigns can show results within days, while SEO and content marketing typically take 3-6 months to build meaningful, lasting traction." },
    { q: "Which platforms should I advertise on?", a: "It depends on your audience — we recommend the right mix of Google, Facebook, Instagram, or LinkedIn based on where your customers actually spend time." },
    { q: "Do you create the ad creatives and content too?", a: "Yes, our team handles strategy, campaign setup, and creative production — copy, images, and video — so you don't need a separate content team." },
    { q: "How do you measure marketing success?", a: "We track metrics tied directly to your business goals — leads, sales, cost per acquisition — and share clear, regular reports on performance." },
  ];

  return (
    <ServicePageTemplate
      eyebrow="Digital Marketing Services"
      titleLine1="Marketing That"
      titleHighlight="Delivers"
      titleLine2="Real Results"
      subtitle="Grow your business online with targeted campaigns and result-driven strategies — from SEO to paid ads, built around measurable business growth."
      heroTags={["SEO", "Paid Ads", "Social Media", "Email Marketing"]}
      primaryCta="Let's Talk"
      secondaryCta="Book Free Consultation"
      onPrimaryClick={() => navigate("/contact")}
      onSecondaryClick={() => navigate("/contact")}
      capabilitiesLabel="Capabilities"
      capabilitiesTitle="Full-Funnel Digital Marketing"
      capabilitiesSubtitle="From getting found to getting chosen, we cover every stage of your customer's journey."
      capabilities={capabilities}
      solveLabel="Built For Every Need"
      solveTitle="Marketing Solutions for Every Business Need"
      solveItems={solveItems}
      processLabel="Our Process"
      processTitle="From Strategy to Growth"
      process={process}
      technologies={technologies}
      techLabel="Built to Last"
      techTitle="Tools & Platforms We Use"
      techSubtitle="We leverage modern marketing platforms to maximize your digital reach."
      benefitsTitle="Why Choose"
      benefitsHighlight="Our Marketing Services?"
      benefitsSubtitle="We deliver measurable growth using proven strategies, modern tools, and creative campaigns."
      benefits={benefits}
      faqTitle="Frequently Asked Questions"
      faqs={faqs}
      ctaTitle="Ready to Grow Your Business Online?"
      ctaSubtitle="Tell us about your goals and we'll get back to you with a plan and a clear estimate — no jargon, no pressure."
      ctaButtonText="Book a Free Marketing Consultation"
    />
  );
}

export default Marketing;
