import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SiFlutter,
  SiReact,
  SiKotlin,
  SiSwift,
  SiNodedotjs,
  SiFirebase,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";
import ServicePageTemplate from "../../../components/ServicePageTemplate";

function AppDevelopment() {
  const navigate = useNavigate();

  const capabilities = [
    { title: "Native iOS & Android Apps", desc: "High-performance native apps built for speed, stability, and platform-specific feel." },
    { title: "Cross-Platform Development", desc: "One codebase, both platforms — faster delivery without compromising quality." },
    { title: "App UI/UX Design", desc: "Intuitive, delightful interfaces designed around real user behaviour." },
    { title: "Backend & API Development", desc: "Secure, scalable backends that power your app's data and logic." },
    { title: "App Store Deployment", desc: "End-to-end submission and approval handling for Play Store and App Store." },
    { title: "Post-Launch Support", desc: "Bug fixes, OS updates, and new feature rollouts after your app goes live." },
  ];

  const solveItems = [
    "iOS Apps",
    "Android Apps",
    "Hybrid Apps",
    "On-Demand Apps",
    "E-Commerce Apps",
    "Booking Apps",
    "Social Apps",
    "Enterprise Apps",
  ];

  const process = [
    { title: "Discovery & Strategy", desc: "We map user journeys and validate the app idea against real business goals." },
    { title: "UI/UX Prototyping", desc: "Interactive prototypes and design systems built in Figma before development starts." },
    { title: "Agile Development", desc: "Parallel sprints for frontend, backend, and API integration with regular check-ins." },
    { title: "QA & Device Testing", desc: "Testing across real devices and OS versions to guarantee smooth performance." },
    { title: "Store Launch", desc: "We handle Play Store and App Store submission, listing, and approvals." },
    { title: "Maintenance & Scale", desc: "Continuous monitoring, updates, and feature additions post-launch." },
  ];

  const technologies = [
    { name: "Flutter", icon: <SiFlutter className="text-4xl" /> },
    { name: "React Native", icon: <SiReact className="text-4xl" /> },
    { name: "Kotlin", icon: <SiKotlin className="text-4xl" /> },
    { name: "Swift", icon: <SiSwift className="text-4xl" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-4xl" /> },
    { name: "Firebase", icon: <SiFirebase className="text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-4xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-4xl" /> },
  ];

  const benefits = [
    { title: "High Performance", desc: "Apps optimized for speed and real-time execution.", icon: "⚡" },
    { title: "Top Security", desc: "Secure architecture with industry-standard protection.", icon: "🔐" },
    { title: "Scalable Systems", desc: "Built to handle growth without performance drops.", icon: "📈" },
    { title: "Modern UI/UX", desc: "Smooth user experience with premium visuals.", icon: "🎨" },
  ];

  const faqs = [
    { q: "Should I build a native app or a cross-platform app?", a: "It depends on your goals. Native apps offer the best performance for complex, graphics-heavy apps, while cross-platform apps (Flutter/React Native) are faster and more cost-effective for most business apps." },
    { q: "How long does it take to build a mobile app?", a: "A simple MVP app usually takes 8-12 weeks, while feature-rich apps with backend integrations and complex logic can take 4-6 months." },
    { q: "Do you help with App Store and Play Store submission?", a: "Yes, we manage the entire submission process including store listings, screenshots, compliance checks, and approval follow-ups." },
    { q: "Will you provide the app source code?", a: "Yes, once the project is complete and final payment is made, you receive full ownership of the source code and design files." },
  ];

  return (
    <ServicePageTemplate
      eyebrow="Mobile App Development Services"
      titleLine1="Apps That"
      titleHighlight="Perform"
      titleLine2="On Every Device"
      subtitle="We design and build fast, secure & modern mobile apps for iOS, Android & Hybrid platforms — turning your idea into a polished product users love."
      heroTags={["iOS", "Android", "Hybrid", "Enterprise Apps"]}
      primaryCta="Let's Talk"
      secondaryCta="Book Free Consultation"
      onPrimaryClick={() => navigate("/contact")}
      onSecondaryClick={() => navigate("/contact")}
      capabilitiesLabel="Capabilities"
      capabilitiesTitle="Full-Cycle App Development"
      capabilitiesSubtitle="From the first sketch to the app store listing, we manage every step of building your app."
      capabilities={capabilities}
      solveLabel="Built For Every Need"
      solveTitle="Mobile Apps for Every Business Need"
      solveItems={solveItems}
      processLabel="Our Process"
      processTitle="From Briefing to Launch"
      process={process}
      technologies={technologies}
      techLabel="Built to Last"
      techTitle="Technologies We Use"
      techSubtitle="We use modern and powerful technologies to build seamless mobile apps."
      benefitsTitle="Why Choose"
      benefitsHighlight="Our App Development?"
      benefitsSubtitle="Our apps are built with cutting-edge technology, ensuring high performance, top security, and a delightful user experience."
      benefits={benefits}
      faqTitle="Frequently Asked Questions"
      faqs={faqs}
      ctaTitle="Ready to Turn Your Idea Into an App?"
      ctaSubtitle="Tell us about your project and we'll get back to you with a plan and a clear estimate — no jargon, no pressure."
      ctaButtonText="Book a Free App Consultation"
    />
  );
}

export default AppDevelopment;
