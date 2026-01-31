// src/components/TeamSection.jsx
import React, { useState } from "react";
import { FaLinkedinIn, FaInstagram, FaGlobe } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShapeShardBOutline,
  ShapeShardCFilled,
} from "../../components/ui/Shapes/Shapes";

const teamMembers = [

    {
    name: "Chirag Sharma",
    tag: "General Manager / COO",
    image: "/empimg/chirag.jpg",
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      website: "https://example.com",
    },
  },
  {
    name: "Chandra Prakash",
    tag: "Technical Director",
    image: "/empimg/chandra.jpg",
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      website: "https://example.com",
    },
  },

    {
    name: "Bhaskar Singh",
    tag: "Head of Projects",
    image: "/empimg/bhaskar.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/bhaskar-singh-130b38352",
      instagram: "https://instagram.com",
      website: "https://example.com",
    },
  },

    {
    name: "Rishabh Kumar",
    tag: "Front-End & UI/UX Lead",
    image: "/empimg/ro.jpeg",
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      website: "https://example.com",
    },
  },


    {
    name: "Kautilya",
    tag: "Founder & CEO",
    image: "/empimg/rupesh.jpg",
    social: {
      linkedin: "http://www.linkedin.com/in/rupesh-kumar-jha-3a3752343",
      instagram: "https://www.instagram.com/sold_to_himalayas_jr",
      website: "https://example.com",
    },
  },

];

const TeamCard = ({ member }) => {
  const isChandra = member.name === "Chandra Prakash";

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 180 }}
      className="
        group w-full max-w-[320px]
        bg-white rounded-[32px]
        border border-gray-100
        shadow-xl hover:shadow-2xl
        p-8 text-center
        transition-all duration-300
        hover:bg-[#f27b22]
      "
    >
      {/* Profile Image */}
      <div className="relative w-32 h-32 mx-auto mb-6">
        <div className="w-full h-full rounded-full overflow-hidden border-[5px] border-[#00444b] group-hover:border-white transition">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className={`
                w-full h-full object-cover
                ${isChandra ? "object-center" : "object-[center_20%]"}
              `}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#e6f2f2] text-[#00444b] text-3xl font-bold">
              {member.name[0]}
            </div>
          )}
        </div>
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold text-[#00444b] group-hover:text-white transition">
        {member.name}
      </h3>

      {/* Role */}
      <p className="mt-1 text-sm font-medium tracking-wide text-[#01686d] group-hover:text-white transition">
        {member.tag}
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-6 text-[#00444b] group-hover:text-white transition">
        <a href={member.social.website} target="_blank" rel="noreferrer">
          <FaGlobe size={20} />
        </a>
        <a href={member.social.linkedin} target="_blank" rel="noreferrer">
          <FaLinkedinIn size={20} />
        </a>
        <a href={member.social.instagram} target="_blank" rel="noreferrer">
          <FaInstagram size={20} />
        </a>
      </div>

      {/* Button */}
      <button
        className="
          mt-8 px-8 py-2.5 rounded-full text-sm font-semibold
          bg-[#01686d] text-white
          group-hover:bg-white group-hover:text-[#f27b22]
          transition
        "
      >
        View Profile
      </button>
    </motion.div>
  );
};

const TeamSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedMembers = showAll ? teamMembers : teamMembers.slice(0, 4);

  return (
    <section className="relative py-28 px-4 sm:px-10 lg:px-24 bg-white overflow-hidden">
      {/* Background Shape */}
      <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
        <div className="w-[20%] rotate-[-95deg]">
          <ShapeShardBOutline color="o" thickness={2} />
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#00444b] inline-block relative">
          <span className="absolute -z-10 left-[-28px] top-1/2 -translate-y-1/2 rotate-[-95deg]">
            <ShapeShardCFilled color="t" />
          </span>
          Meet Our Team
        </h2>
        <p className="mt-3 text-sm text-[#01686d]">
          The people who make everything possible
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-4 justify-items-center relative z-10">
        <AnimatePresence>
          {displayedMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Toggle Button */}
      {teamMembers.length > 4 && (
        <div className="text-center mt-20">
          <button
            onClick={() => setShowAll(!showAll)}
            className="
              px-10 py-3 rounded-full font-semibold
              bg-[#01686d] text-white
              hover:bg-[#00444b] transition
            "
          >
            {showAll ? "Show Less" : "View All Team"}
          </button>
        </div>
      )}
    </section>
  );
};

export default TeamSection;
