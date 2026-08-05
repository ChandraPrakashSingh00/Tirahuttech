import React from "react";
import {
  Cloud,
  Globe,
  Container,
  Boxes,
  Workflow,
  Github,
  RefreshCcw,
  ChartNoAxesCombined,
  PieChart,
  ShoppingBag,
  Store,
  Code2,
  Server,
  Cpu,
} from "lucide-react";

const technologies = [
  {
    name: "Microsoft Azure",
    icon: Cloud,
    color: "#2196F3",
  },
  {
    name: "Google Cloud (GCP)",
    icon: Globe,
    color: "#4285F4",
  },
  {
    name: "Docker",
    icon: Container,
    color: "#2496ED",
  },
  {
    name: "Kubernetes",
    icon: Boxes,
    color: "#326CE5",
  },
  {
    name: "Terraform",
    icon: Workflow,
    color: "#9B51E0",
  },
  {
    name: "Jenkins",
    icon: RefreshCcw,
    color: "#D33833",
  },
  {
    name: "GitHub Actions",
    icon: Github,
    color: "#ffffff",
  },
  {
    name: "RAG Systems",
    icon: RefreshCcw,
    color: "#00A99D",
  },
  {
    name: "Machine Learning",
    icon: ChartNoAxesCombined,
    color: "#6952FF",
  },
  {
    name: "Data Analytics",
    icon: PieChart,
    color: "#00B8D9",
  },
  {
    name: "Shopify Plus",
    icon: Store,
    color: "#95BF47",
  },
  {
    name: "WooCommerce",
    icon: Globe,
    color: "#96588A",
  },
  {
    name: "Magento",
    icon: ShoppingBag,
    color: "#F26322",
  },
  {
    name: "BigCommerce",
    icon: Store,
    color: "#ffffff",
  },
  {
    name: "Web Development",
    icon: Code2,
    color: "#00B8D9",
  },
  {
    name: "Cloud Infrastructure",
    icon: Server,
    color: "#4285F4",
  },
  {
    name: "AI Solutions",
    icon: Cpu,
    color: "#A855F7",
  },
];

/* ========================================================= */
/* TECH CARD */
/* ========================================================= */

function TechCard({ item }) {
  const Icon = item.icon;

  return (
    <div
      className="
        group
        flex-shrink-0
        w-[150px]
        xs:w-[170px]
        sm:w-[200px]
        md:w-[220px]
        lg:w-[240px]
        h-[120px]
        sm:h-[140px]
        md:h-[150px]
        lg:h-[160px]
        rounded-xl
        sm:rounded-2xl
        border
        border-gray-100
        bg-white
        shadow-[0_8px_25px_rgba(0,60,63,0.06)]
        flex
        flex-col
        items-center
        justify-center
        gap-2
        sm:gap-3
        md:gap-4
        transition-all
        duration-300
        hover:border-[#01686d]/40
        hover:-translate-y-1
        hover:shadow-[0_15px_35px_rgba(1,104,109,0.15)]
      "
    >
      {/* Icon */}
      <div
        className="transition-transform duration-300 group-hover:scale-110"
        style={{
          color: item.color === "#ffffff" ? "#01686d" : item.color,
        }}
      >
        <Icon
          size={36}
          className="sm:w-10 sm:h-10 md:w-11 md:h-11"
          strokeWidth={1.6}
        />
      </div>

      {/* Title */}
      <h3
        className="
          text-[#00444b]
          group-hover:text-[#01686d]
          text-xs
          sm:text-sm
          md:text-base
          font-semibold
          text-center
          leading-tight
          px-3
          transition-colors
          duration-300
        "
      >
        {item.name}
      </h3>
    </div>
  );
}

/* ========================================================= */
/* MARQUEE ROW */
/* ========================================================= */

function MarqueeRow({ items, reverse = false }) {
  /*
    Important:
    Same array ko exactly 2 baar render kar rahe hain.
    Animation -50% tak jayegi.
  */

  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden">

      {/* Left Gradient — now matches section bg (#01686d) instead of white/gray */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          bottom-0
          w-10
          xs:w-14
          sm:w-24
          md:w-40
          z-20
          bg-gradient-to-r
          from-[#01686d]
          via-[#01686d]/80
          to-transparent
        "
      />

      {/* Right Gradient — now matches section bg (#01686d) instead of white/gray */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          bottom-0
          w-10
          xs:w-14
          sm:w-24
          md:w-40
          z-20
          bg-gradient-to-l
          from-[#01686d]
          via-[#01686d]/80
          to-transparent
        "
      />

      {/* Moving Track */}
      <div
        className={`
          flex
          w-max
          gap-3
          sm:gap-5
          md:gap-6
          hover:[animation-play-state:paused]
          ${reverse ? "toolkit-marquee-reverse" : "toolkit-marquee"}
        `}
      >
        {duplicatedItems.map((item, index) => (
          <TechCard
            key={`${item.name}-${index}`}
            item={item}
          />
        ))}
      </div>

    </div>
  );
}

/* ========================================================= */
/* MAIN COMPONENT */
/* ========================================================= */

export default function OurToolkit() {
  return (
    <section className="relative overflow-hidden bg-[#01686d] py-12 xs:py-14 sm:py-20 md:py-24 lg:py-28">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            left-1/2
            top-0
            -translate-x-1/2
            w-[280px]
            xs:w-[400px]
            sm:w-[600px]
            md:w-[800px]
            h-[180px]
            sm:h-[250px]
            bg-[#01686d]/10
            blur-[100px]
            rounded-full
          "
        />

        <div
          className="
            absolute
            left-0
            top-1/2
            w-[120px]
            sm:w-[200px]
            h-[280px]
            sm:h-[400px]
            bg-[#f27b22]/5
            blur-[100px]
            rounded-full
          "
        />

        <div
          className="
            absolute
            right-0
            top-1/2
            w-[120px]
            sm:w-[200px]
            h-[280px]
            sm:h-[400px]
            bg-[#f27b22]/5
            blur-[100px]
            rounded-full
          "
        />

      </div>

      {/* Main Content */}
      <div className="relative z-10">

        {/* ================================================= */}
        {/* HEADING */}
        {/* ================================================= */}

        <div
          className="
            max-w-4xl
            mx-auto
            px-4
            sm:px-5
            text-center
            mb-10
            sm:mb-16
            md:mb-20
          "
        >

          {/* Small Heading — pill badge, same style as Home page eyebrow */}
          <span
            className="
              inline-flex
              items-center
              gap-2
              px-3.5
              sm:px-4
              py-1.5
              sm:py-2
              rounded-full
              bg-white/10
              text-white
              text-xs
              sm:text-sm
              font-semibold
              mb-4
              sm:mb-5
            "
          >
            <span className="w-2 h-2 rounded-full bg-[#f27b22] animate-pulse"></span>
            Our Toolkit
          </span>

          {/* Main Heading — same weight/tracking as Home page h1 */}
          <h2
            className="
              text-3xl
              xs:text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              leading-tight
              text-white
            "
          >
            techstack{" "}
            <span className="text-[#f27b22]">
              we follow
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-4
              sm:mt-7
              max-w-2xl
              mx-auto
              text-white
              text-sm
              sm:text-base
              md:text-lg
              leading-6
              sm:leading-7
              md:leading-8
              px-2
            "
          >
            We employ modern, reliable, and high-performance technologies
            to build secure, robust software across domains.
          </p>

        </div>


        {/* ================================================= */}
        {/* MARQUEE 1 */}
        {/* ================================================= */}

        <div className="mb-4 sm:mb-8">
          <MarqueeRow
            items={technologies.slice(0, 9)}
          />
        </div>


        {/* ================================================= */}
        {/* MARQUEE 2 */}
        {/* ================================================= */}

        <MarqueeRow
          items={technologies.slice(9)}
          reverse
        />

      </div>


      {/* ================================================= */}
      {/* MARQUEE CSS */}
      {/* ================================================= */}

      <style>{`

        /* ----------------------------------------------- */
        /* Forward Marquee */
        /* ----------------------------------------------- */

        .toolkit-marquee {
          animation: toolkitMarquee 35s linear infinite;
        }

        /* ----------------------------------------------- */
        /* Reverse Marquee */
        /* ----------------------------------------------- */

        .toolkit-marquee-reverse {
          animation: toolkitMarqueeReverse 35s linear infinite;
        }

        /* ----------------------------------------------- */
        /* Forward Animation */
        /* ----------------------------------------------- */

        @keyframes toolkitMarquee {

          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }

        }

        /* ----------------------------------------------- */
        /* Reverse Animation */
        /* ----------------------------------------------- */

        @keyframes toolkitMarqueeReverse {

          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }

        }

        /* ----------------------------------------------- */
        /* Tablet */
        /* ----------------------------------------------- */

        @media (max-width: 1024px) {

          .toolkit-marquee {
            animation-duration: 30s;
          }

          .toolkit-marquee-reverse {
            animation-duration: 30s;
          }

        }

        /* ----------------------------------------------- */
        /* Mobile */
        /* ----------------------------------------------- */

        @media (max-width: 640px) {

          .toolkit-marquee {
            animation-duration: 22s;
          }

          .toolkit-marquee-reverse {
            animation-duration: 24s;
          }

        }

        /* ----------------------------------------------- */
        /* Reduced Motion */
        /* ----------------------------------------------- */

        @media (prefers-reduced-motion: reduce) {

          .toolkit-marquee,
          .toolkit-marquee-reverse {
            animation: none;
          }

        }

      `}</style>

    </section>
  );
}