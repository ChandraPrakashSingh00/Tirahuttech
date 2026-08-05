import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, BadgeCheck, Sparkles } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Guru Prashad",
    role: "Founder",
    company: "KamiGami",
    image: "/Test/kami.png",
    imagePosition: "center",
    rating: 5,
    text: "We wanted a website that matched our gothic clothing brand identity and overall vibe. Tirahut Tech understood our requirements properly and created a website that looks premium and attractive.",
  },
  {
    id: 2,
    name: "Akhil Sharma",
    role: "Founder",
    company: "Poll Connect",
    image: "/Test/akhil.jpg",
    imagePosition: "center top",
    rating: 5,
    text: "I wanted a website for conducting different types of polls with a simple system for users and management. Tirahut Tech developed the platform according to my requirements perfectly.",
  },
  {
    id: 3,
    name: "Kshitij Kacker",
    role: "Research Associate",
    company: "IIT",
    image: "/Test/iit.jpg",
    imagePosition: "center",
    rating: 5,
    text: "I had a project related to weather calculations and environmental data processing. Tirahut Tech understood the requirements well and developed a structured platform that made complex functionalities easy to use.",
  },
   {
    id: 4,
    name: "Kavi chopra",
    role: "RTO Consultancy",
    company: "Rto Consultancy Ghaziabad",
    image: "/Test/rto.jpg",
    imagePosition: "center",
    rating: 5,
    text: "Tirahuttech delivered a modern, fast, and user-friendly website for RTO Consultancy. Their team was professional, responsive, and understood our requirements perfectly. We are highly satisfied with the results and would gladly recommend Tirahuttech for web development services.",
  },
     {
    id: 5,
    name: "Dhruvi",
    role: "Alfacure Lifescience",
    company: "Alfacure Lifescience | Sterile Infusions & Injections ",
    image: "/Test/dhurvi.jpg",
    imagePosition: "center",
    rating: 5,
    text: "Tirahuttech developed a professional, modern, and responsive website for Alfacure Lifescience that perfectly reflects our brand and expertise. Their team delivered a seamless experience with excellent support and attention for detail.",
  },
];

// Compact cards for the marquee strips — duplicated so the loop is seamless.
const marqueeRow1 = [...testimonials, ...testimonials];
const marqueeRow2 = [
  ...testimonials.slice().reverse(),
  ...testimonials.slice().reverse(),
];

function StarRow({ count = 5, className = "" }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {[...Array(count)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className="fill-[#f27b22] text-[#f27b22]"
        />
      ))}
    </div>
  );
}

function ClientAvatar({ item, size = "h-11 w-11" }) {
  return (
    <div
      className={`relative ${size} flex-shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-sm`}
    >
      <img
        src={item.image}
        alt={item.name}
        className="h-full w-full object-cover"
        style={{ objectPosition: item.imagePosition }}
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/200x200?text=Client";
        }}
      />
    </div>
  );
}

// Small quote card used inside the two scrolling marquee rows.
function MarqueeCard({ item }) {
  return (
    <div
      className="
        group/card relative w-[320px] flex-shrink-0 select-none
        rounded-2xl border-2 border-gray-200/70 bg-white
        p-5 shadow-[0_1px_2px_rgba(16,24,40,0.04)]
        transition-all duration-300 ease-out
        hover:-translate-y-1.5
        hover:border-[#f27b22]
        hover:shadow-[0_18px_38px_-10px_rgba(242,123,34,0.35)]
      "
    >
      {/* Orange glow overlay — fades in on hover */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-2xl
          bg-gradient-to-br from-[#f27b22]/[0.06] via-transparent to-[#f27b22]/[0.03]
          opacity-0 transition-opacity duration-300
          group-hover/card:opacity-100
        "
      />

      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ClientAvatar item={item} />

          <div>
            <p className="text-sm font-semibold text-[#00272b]">
              {item.name}
            </p>

            <p className="text-xs text-gray-500">
              {item.role} · {item.company}
            </p>
          </div>
        </div>

        <BadgeCheck
          size={18}
          className="
            text-[#01686d]
            transition-colors duration-300
            group-hover/card:text-[#f27b22]
          "
        />
      </div>

      <StarRow className="relative mt-3" />

      <p className="relative mt-3 line-clamp-4 text-sm leading-6 text-gray-600">
        {item.text}
      </p>
    </div>
  );
}

function MarqueeRow({ items, direction = "left" }) {
  const animationClass =
    direction === "left"
      ? "animate-marquee-left"
      : "animate-marquee-right";

  return (
    <div className="group relative w-full overflow-hidden bg-white">
      {/* Edge fade masks — subtle, narrow fade only right at the edge */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-white to-transparent sm:w-10 md:w-14" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-white to-transparent sm:w-10 md:w-14" />

      {/*
        py-3 added here — hover:-translate-y-1.5 on the cards was getting
        clipped by this wrapper's overflow-hidden with no vertical breathing
        room. This padding gives the lift room to show without cutting cards.
      */}
      <div
        className={`flex w-max gap-5 py-3 ${animationClass} group-hover:[animation-play-state:paused]`}
      >
        {items.map((item, idx) => (
          <MarqueeCard
            key={`${item.id}-${idx}`}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="relative bg-white py-24">
      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        {/* ---- Heading ---- */}
        <motion.div
          initial={{
            opacity: 0,
            y: -30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="text-center"
        >
          {/* Badge */}
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#01686d]/20
              bg-white
              px-5
              py-2
              text-sm
              font-semibold
              tracking-wide
              text-[#01686d]
              shadow-sm
            "
          >
            <Sparkles size={14} />
            Testimonials
          </span>

          {/* Heading */}
          <h2
            className="
              mt-6
              text-4xl
              font-bold
              tracking-tight
              text-[#00272b]
              md:text-5xl
              lg:text-6xl
            "
          >
            What Clients{" "}
            <span
              className="
                bg-gradient-to-r
                from-[#f27b22]
                to-[#f27b22]
                bg-clip-text
                text-transparent
              "
            >
              Say
            </span>
          </h2>

          {/* Sub Heading */}
          <h3
            className="
              mt-5
              text-xl
              font-semibold
              text-[#01686d]
              md:text-2xl
            "
          >
            Custom Solutions & Enterprise Engagements
          </h3>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-relaxed
              text-gray-500
              md:text-lg
            "
          >
            Real feedback from founders and teams who trusted Tirahut Tech to
            design, build, and ship their products.
          </p>
        </motion.div>

        {/* ---- Scrolling marquee rows ---- */}
        <div className="mt-16 space-y-5">
          <MarqueeRow
            items={marqueeRow1}
            direction="left"
          />

          <MarqueeRow
            items={marqueeRow2}
            direction="right"
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;