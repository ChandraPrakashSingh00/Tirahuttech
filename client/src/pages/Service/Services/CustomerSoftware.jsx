import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SiReact,
  SiAngular,
  SiVuedotjs,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiDocker,
} from "react-icons/si";
import ServicePageTemplate from "../../../components/ServicePageTemplate";

function CustomerSoftware() {
  const navigate = useNavigate();

  const capabilities = [
    { title: "Custom CRM Development", desc: "Purpose-built systems to manage leads, clients, and customer relationships." },
    { title: "HRM Software", desc: "Employee management, attendance, and payroll systems tailored to your policies." },
    { title: "ERP Solutions", desc: "Integrated systems that connect inventory, finance, sales, and operations." },
    { title: "SaaS Product Development", desc: "Secure, multi-tenant platforms built for long-term growth and scale." },
    { title: "Legacy System Modernization", desc: "Upgrade outdated software into fast, secure, maintainable systems." },
    { title: "Third-Party Integrations", desc: "Connect your software to payment gateways, CRMs, and internal tools." },
  ];

  const solveItems = [
    "CRM Systems",
    "HRM Platforms",
    "ERP Solutions",
    "SaaS Products",
    "Business Dashboards",
    "Inventory Systems",
    "Customer Portals",
    "Internal Tools",
  ];

  const process = [
    { title: "Discovery & Validation", desc: "We understand your workflows and validate requirements before development begins." },
    { title: "Architecture & Design", desc: "We design the database structure, system architecture, and interactive UI prototypes." },
    { title: "Agile Development", desc: "Parallel sprints build backend APIs and responsive, user-friendly interfaces." },
    { title: "Quality Assurance", desc: "Rigorous testing across scenarios, roles, and edge cases before release." },
    { title: "Launch & Deployment", desc: "Smooth production rollout with zero-downtime migration of existing data." },
    { title: "Maintenance & Scale", desc: "Ongoing optimization, updates, and new feature development." },
  ];

  const technologies = [
    { name: "React", icon: <SiReact className="text-4xl" /> },
    { name: "Angular", icon: <SiAngular className="text-4xl" /> },
    { name: "Vue.js", icon: <SiVuedotjs className="text-4xl" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-4xl" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-4xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-4xl" /> },
    { name: "Docker", icon: <SiDocker className="text-4xl" /> },
  ];

  const benefits = [
    { title: "Custom Solutions", desc: "Tailored software that fits your business needs perfectly.", icon: "🛠️" },
    { title: "Secure Architecture", desc: "Built with robust security and compliance standards.", icon: "🔒" },
    { title: "Scalable & Flexible", desc: "Easily adapts to your growing customer base and requirements.", icon: "📈" },
    { title: "User-Friendly Interfaces", desc: "Intuitive design ensures smooth interaction for end-users.", icon: "👨‍💻" },
  ];

  const faqs = [
    { q: "What's the difference between CRM, HRM, and ERP software?", a: "CRM manages customer relationships and sales, HRM handles employee and payroll management, and ERP integrates broader business processes like finance and inventory into one system." },
    { q: "Can you build software that replaces our spreadsheets?", a: "Yes, this is one of our most common projects — replacing manual spreadsheet-based processes with a proper, structured software system." },
    { q: "Do you build on web, desktop, or cloud platforms?", a: "We build on all three, depending on your needs — web-based systems for accessibility, desktop apps for offline use, or cloud platforms for scale." },
    { q: "Can you integrate the software with our existing tools?", a: "Yes, we specialize in connecting custom software with your existing CRM, ERP, payment gateways, and internal databases." },
  ];

  return (
    <ServicePageTemplate
      eyebrow="Custom Software Development Services"
      titleLine1="Software That"
      titleHighlight="Fits"
      titleLine2="Your Business Perfectly"
      subtitle="Delivering high-quality, custom software solutions — from CRM and HRM to full ERP systems — tailored for your customers and business growth."
      heroTags={["CRM", "HRM", "ERP", "SaaS Platforms"]}
      primaryCta="Let's Talk"
      secondaryCta="Book Free Consultation"
      onPrimaryClick={() => navigate("/contact")}
      onSecondaryClick={() => navigate("/contact")}
      capabilitiesLabel="Capabilities"
      capabilitiesTitle="Software Built Around Your Workflow"
      capabilitiesSubtitle="We design systems that match how your business actually operates, not the other way around."
      capabilities={capabilities}
      solveLabel="Built For Every Need"
      solveTitle="Custom Software for Every Business Need"
      solveItems={solveItems}
      processLabel="Our Process"
      processTitle="From Briefing to Launch"
      process={process}
      technologies={technologies}
      techLabel="Built to Last"
      techTitle="Technologies We Use"
      techSubtitle="Using modern, scalable technologies to build robust software solutions."
      benefitsTitle="Why Choose"
      benefitsHighlight="Our Custom Software?"
      benefitsSubtitle="We build custom software solutions with robust security, scalability, and user-friendly interfaces."
      benefits={benefits}
      faqTitle="Frequently Asked Questions"
      faqs={faqs}
      ctaTitle="Ready to Build Software That Fits Your Business?"
      ctaSubtitle="Tell us about your workflow and we'll get back to you with a plan and a clear estimate — no jargon, no pressure."
      ctaButtonText="Book a Free Software Consultation"
    />
  );
}

export default CustomerSoftware;
