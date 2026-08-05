import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiStripe,
  SiShopify,
} from "react-icons/si";
import ServicePageTemplate from "../../../components/ServicePageTemplate";

function ECommerceDevelopment() {
  const navigate = useNavigate();

  const capabilities = [
    { title: "Custom Online Stores", desc: "Fully custom-built e-commerce platforms designed around your brand and products." },
    { title: "Shopify & WooCommerce Stores", desc: "Fast-to-launch stores on proven platforms, customized to your needs." },
    { title: "Secure Payment Integration", desc: "Seamless integration with Stripe, Razorpay, and other trusted payment gateways." },
    { title: "Marketplace Development", desc: "Multi-vendor platforms connecting buyers and sellers at scale." },
    { title: "Inventory & Order Management", desc: "Systems that keep stock, orders, and fulfillment perfectly in sync." },
    { title: "Store Optimization & SEO", desc: "Speed, SEO, and conversion optimization to turn visitors into buyers." },
  ];

  const solveItems = [
    "B2C Stores",
    "B2B Stores",
    "Marketplaces",
    "Subscription Stores",
    "Shopify Stores",
    "WooCommerce Stores",
    "Payment Integration",
    "Order Management",
  ];

  const process = [
    { title: "Discovery & Planning", desc: "We understand your products, catalog size, and target customers before designing." },
    { title: "UI/UX Design", desc: "Conversion-focused storefront design built around a smooth shopping journey." },
    { title: "Development", desc: "Store build-out including catalog, cart, checkout, and payment integration." },
    { title: "Testing & QA", desc: "End-to-end testing of checkout flows, payments, and order processing." },
    { title: "Launch & Deployment", desc: "Go-live with secure hosting and zero-downtime deployment." },
    { title: "Growth & Optimization", desc: "Ongoing SEO, speed, and conversion rate optimization post-launch." },
  ];

  const technologies = [
    { name: "HTML5", icon: <SiHtml5 className="text-4xl" /> },
    { name: "CSS3", icon: <SiCss className="text-4xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-4xl" /> },
    { name: "React", icon: <SiReact className="text-4xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-4xl" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-4xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-4xl" /> },
    { name: "Stripe", icon: <SiStripe className="text-4xl" /> },
    { name: "Shopify", icon: <SiShopify className="text-4xl" /> },
  ];

  const benefits = [
    { title: "Secure Payments", desc: "Integrated payment gateways for safe transactions.", icon: "💳" },
    { title: "Scalable Stores", desc: "Websites built to handle traffic and sales growth.", icon: "📈" },
    { title: "SEO & Marketing", desc: "Optimized for search engines and digital campaigns.", icon: "🚀" },
    { title: "User-Friendly UI/UX", desc: "Smooth shopping experience to increase conversions.", icon: "🛒" },
  ];

  const faqs = [
    { q: "Should I choose Shopify/WooCommerce or a custom-built store?", a: "Shopify and WooCommerce are great for getting started quickly with standard features. A custom build makes sense once you need unique functionality that off-the-shelf platforms can't support." },
    { q: "Which payment gateways can you integrate?", a: "We integrate all major gateways including Stripe, Razorpay, PayPal, and other regional payment providers based on your target market." },
    { q: "How long does it take to launch an online store?", a: "A standard store on Shopify/WooCommerce can launch in 3-5 weeks, while custom-built stores typically take 8-12 weeks depending on features." },
    { q: "Can you migrate my existing store to a new platform?", a: "Yes, we handle full store migrations including products, customer data, and order history with minimal disruption to your business." },
  ];

  return (
    <ServicePageTemplate
      eyebrow="E-Commerce Development Services"
      titleLine1="Online Stores That"
      titleHighlight="Sell"
      titleLine2="Not Just Look Good"
      subtitle="We build fast, secure & scalable e-commerce websites — from custom platforms to Shopify and WooCommerce stores — designed to grow your online business."
      heroTags={["B2C Stores", "B2B Stores", "Marketplaces", "Shopify & WooCommerce"]}
      primaryCta="Let's Talk"
      secondaryCta="Book Free Consultation"
      onPrimaryClick={() => navigate("/contact")}
      onSecondaryClick={() => navigate("/contact")}
      capabilitiesLabel="Capabilities"
      capabilitiesTitle="Everything Your Store Needs to Sell"
      capabilitiesSubtitle="From catalog to checkout, we build every part of your online store to convert visitors into customers."
      capabilities={capabilities}
      solveLabel="Built For Every Need"
      solveTitle="E-Commerce Solutions for Every Business Need"
      solveItems={solveItems}
      processLabel="Our Process"
      processTitle="From Briefing to Launch"
      process={process}
      technologies={technologies}
      techLabel="Built to Last"
      techTitle="Technologies We Use"
      techSubtitle="Modern tech stack to build seamless, scalable, and secure e-commerce solutions."
      benefitsTitle="Why Choose"
      benefitsHighlight="Our E-Commerce Development?"
      benefitsSubtitle="We create secure, scalable, and conversion-focused e-commerce platforms using a modern technology stack."
      benefits={benefits}
      faqTitle="Frequently Asked Questions"
      faqs={faqs}
      ctaTitle="Ready to Launch a Store That Actually Sells?"
      ctaSubtitle="Tell us about your products and we'll get back to you with a plan and a clear estimate — no jargon, no pressure."
      ctaButtonText="Book a Free E-Commerce Consultation"
    />
  );
}

export default ECommerceDevelopment;
