import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SiPython,
  SiUipath,
  SiNodedotjs,
  SiReact,
  SiDocker,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";
import ServicePageTemplate from "../../../components/ServicePageTemplate";

function Automation() {
  const navigate = useNavigate();

  const capabilities = [
    { title: "Robotic Process Automation", desc: "Bots that handle repetitive, rule-based tasks with zero manual effort." },
    { title: "Business Process Automation", desc: "Streamline approvals, workflows, and operations across departments." },
    { title: "CRM & Sales Automation", desc: "Automate lead capture, follow-ups, and customer relationship workflows." },
    { title: "Billing & Finance Automation", desc: "Automated invoicing, reconciliation, and financial reporting." },
    { title: "HR & Payroll Automation", desc: "Automate onboarding, attendance, and payroll processing." },
    { title: "Custom Workflow Automation", desc: "Purpose-built automation tools for your specific operational needs." },
  ];

  const solveItems = [
    "Sales Automation",
    "HR Automation",
    "Data Entry Automation",
    "Billing Automation",
    "CRM Workflows",
    "Report Generation",
    "Approval Chains",
    "Notification Systems",
  ];

  const process = [
    { title: "Process Audit", desc: "We map your existing workflows to identify what can be automated with the biggest impact." },
    { title: "Solution Design", desc: "We design the automation logic, integrations, and rules around your operations." },
    { title: "Development", desc: "We build and configure bots, scripts, and workflow engines tailored to your process." },
    { title: "Testing & Validation", desc: "Every automation is tested against real scenarios before going live." },
    { title: "Deployment", desc: "Rollout with minimal disruption to your day-to-day operations." },
    { title: "Monitoring & Optimization", desc: "Ongoing monitoring to fine-tune performance and catch edge cases." },
  ];

  const technologies = [
    { name: "Python", icon: <SiPython className="text-4xl" /> },
    { name: "UiPath", icon: <SiUipath className="text-4xl" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-4xl" /> },
    { name: "React", icon: <SiReact className="text-4xl" /> },
    { name: "Docker", icon: <SiDocker className="text-4xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-4xl" /> },
  ];

  const benefits = [
    { title: "70% Time Saved", desc: "Cut down hours spent on manual, repetitive tasks.", icon: "⏱️" },
    { title: "Zero Human Errors", desc: "Consistent, accurate execution every single time.", icon: "🎯" },
    { title: "Reduced Costs", desc: "Lower operational overhead with automated workflows.", icon: "💵" },
    { title: "Faster Turnaround", desc: "Processes that used to take days now run in minutes.", icon: "🚀" },
  ];

  const faqs = [
    { q: "What kind of tasks can be automated?", a: "Any repetitive, rule-based task — data entry, invoicing, report generation, CRM updates, approvals, and notifications — is a strong candidate for automation." },
    { q: "How much time does automation typically save?", a: "Most of our clients see 50-70% time savings on the automated processes, freeing up their teams to focus on higher-value work." },
    { q: "Will automation replace my existing tools?", a: "No, we build automation on top of your existing tools and systems, connecting them together rather than replacing what already works." },
    { q: "How long does it take to implement automation?", a: "Simple workflow automation can be live in 2-4 weeks, while complex, multi-department automation systems may take 8-12 weeks." },
  ];

  return (
    <ServicePageTemplate
      eyebrow="Business Automation Services"
      titleLine1="Automation That"
      titleHighlight="Just Works"
      titleLine2="For Your Business"
      subtitle="Improve efficiency and productivity with robust automation solutions — removing manual work and reducing errors across your operations."
      heroTags={["RPA", "Workflow Automation", "CRM Automation", "Billing Automation"]}
      primaryCta="Let's Talk"
      secondaryCta="Book Free Consultation"
      onPrimaryClick={() => navigate("/contact")}
      onSecondaryClick={() => navigate("/contact")}
      capabilitiesLabel="Capabilities"
      capabilitiesTitle="Automation Solutions For Every Process"
      capabilitiesSubtitle="We identify repetitive work in your business and replace it with reliable, automated systems."
      capabilities={capabilities}
      solveLabel="Built For Every Need"
      solveTitle="Automation for Every Business Need"
      solveItems={solveItems}
      processLabel="Our Process"
      processTitle="From Audit to Automation"
      process={process}
      technologies={technologies}
      techLabel="Built to Last"
      techTitle="Technologies We Use"
      techSubtitle="We use modern and powerful technologies to build reliable automation systems."
      benefitsTitle="Why Choose"
      benefitsHighlight="Our Automation Services?"
      benefitsSubtitle="Our automation solutions are built to save time, cut costs, and eliminate manual errors across your operations."
      benefits={benefits}
      faqTitle="Frequently Asked Questions"
      faqs={faqs}
      ctaTitle="Ready to Automate the Boring Stuff?"
      ctaSubtitle="Tell us about your workflow and we'll show you exactly what can be automated — no jargon, no pressure."
      ctaButtonText="Book a Free Automation Consultation"
    />
  );
}

export default Automation;
