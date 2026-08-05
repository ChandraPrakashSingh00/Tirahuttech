import React from "react";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiNodedotjs, SiDjango } from "react-icons/si";

function TechStack() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 px-6 bg-white">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12">
        Tech Stack
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 md:gap-20 items-center">
        {/* React */}
        <div className="flex flex-col items-center gap-2">
          <FaReact className="text-5xl md:text-6xl text-gray-800" />
          <span className="text-lg md:text-xl font-medium text-gray-800">
            React
          </span>
        </div>

        {/* Next.js */}
        <div className="flex flex-col items-center gap-2">
          <SiNextdotjs className="text-5xl md:text-6xl text-gray-800" />
          <span className="text-lg md:text-xl font-medium text-gray-800">
            Next.js
          </span>
        </div>

        {/* Node.js */}
        <div className="flex flex-col items-center gap-2">
          <SiNodedotjs className="text-5xl md:text-6xl text-gray-800" />
          <span className="text-lg md:text-xl font-medium text-gray-800">
            Node.js
          </span>
        </div>

        {/* Django */}
        <div className="flex flex-col items-center gap-2">
          <SiDjango className="text-5xl md:text-6xl text-gray-800" />
          <span className="text-lg md:text-xl font-medium text-gray-800">
            Django
          </span>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
