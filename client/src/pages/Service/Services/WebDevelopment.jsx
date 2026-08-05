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
} from "react-icons/si";
import ServicePageTemplate from "../../../components/ServicePageTemplate";

function WebDevelopment() {
  const navigate = useNavigate();

  const capabilities = [
    { title: "Corporate & Business Websites", desc: "Professional, brand-focused websites that build trust and turn visitors into customers." },
    { title: "E-Commerce Web Development", desc: "Fast, secure online stores with smooth checkout flows built to convert." },
    { title: "Custom Web Applications", desc: "Tailor-made web apps that automate processes and fit your exact workflow." },
    { title: "CMS & Portal Development", desc: "Easy-to-manage content platforms and customer/employee portals." },
    { title: "API & Third-Party Integrations", desc: "Connect your website to CRMs, payment gateways, and internal tools." },
    { title: "Website Maintenance & Support", desc: "Ongoing updates, monitoring, and performance tuning after launch." },
  ];

  const solveItems = [
    "Corporate Websites",
    "E-Commerce Stores",
    "Web Applications",
    "Landing Pages",
    "Customer Portals",
    "Booking Systems",
    "Progressive Web Apps",
    "Website Revamps",
  ];

  const process = [
    { title: "Discovery & Planning", desc: "We understand your goals, audience, and technical requirements before writing a line of code." },
    { title: "UI/UX Design", desc: "Wireframes and visual designs crafted around usability and your brand identity." },
    { title: "Development", desc: "Clean, scalable front-end and back-end development using modern frameworks." },
    { title: "Testing & QA", desc: "Cross-browser and cross-device testing to catch issues before they reach users." },
    { title: "Launch & Deployment", desc: "Smooth, zero-downtime go-live on secure, reliable hosting." },
    { title: "Support & Growth", desc: "Ongoing maintenance, updates, and improvements as your business grows." },
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
  ];

  const benefits = [
    { title: "Responsive Design", desc: "Websites that look perfect on any device.", icon: "📱" },
    { title: "Secure & Reliable", desc: "Built with best practices and top-level security.", icon: "🔐" },
    { title: "SEO Optimized", desc: "Websites designed to rank higher on search engines.", icon: "🚀" },
    { title: "Modern UI/UX", desc: "User-friendly interfaces with smooth interactions.", icon: "🎨" },
  ];

  const faqs = [
    { q: "How long does it take to build a website?", a: "A standard business website typically takes 3-5 weeks, while custom web applications and e-commerce platforms can take 6-12 weeks depending on complexity and features required." },
    { q: "Will my website be mobile-friendly?", a: "Yes. Every website we build is fully responsive and tested across phones, tablets, and desktops to ensure a consistent experience for every visitor." },
    { q: "Do you provide website maintenance after launch?", a: "Absolutely. We offer ongoing maintenance plans covering updates, security monitoring, backups, and performance optimization so your site stays fast and secure." },
    { q: "Can you redesign my existing website?", a: "Yes, we regularly revamp outdated websites — improving design, speed, SEO, and functionality while preserving your existing content and SEO rankings." },
  ];

  return (
    <ServicePageTemplate
      eyebrow="Web Development Services"
      titleLine1="Websites That"
      titleHighlight="Just Work"
      titleLine2="For Your Business"
      subtitle="We design and build fast, secure & modern websites and web apps that help businesses grow online — from corporate sites to full-scale e-commerce platforms."
      heroTags={["Corporate", "E-Commerce", "Web Apps", "Landing Pages"]}
      primaryCta="Let's Talk"
      secondaryCta="Book Free Consultation"
      onPrimaryClick={() => navigate("/contact")}
      onSecondaryClick={() => navigate("/contact")}
      capabilitiesLabel="Capabilities"
      capabilitiesTitle="Everything You Need to Go Live"
      capabilitiesSubtitle="From the first wireframe to post-launch support, we handle every part of building your website."
      capabilities={capabilities}
      solveLabel="Built For Every Need"
      solveTitle="Websites & Web Apps for Every Business Need"
      solveItems={solveItems}
      processLabel="Our Process"
      processTitle="From Briefing to Launch"
      process={process}
      technologies={technologies}
      techLabel="Built to Last"
      techTitle="Technologies We Use"
      techSubtitle="We use modern and powerful technologies to build seamless, high-performance websites."
      benefitsTitle="Why Choose"
      benefitsHighlight="Our Web Development?"
      benefitsSubtitle="Our websites are built with a modern tech stack, ensuring fast loading, security, and an excellent user experience."
      benefits={benefits}
      faqTitle="Frequently Asked Questions"
      faqs={faqs}
      ctaTitle="Ready to Build a Website That Actually Works?"
      ctaSubtitle="Tell us about your project and we'll get back to you with a plan and a clear estimate — no jargon, no pressure."
      ctaButtonText="Book a Free Web Consultation"
    />
  );
}

export default WebDevelopment;
