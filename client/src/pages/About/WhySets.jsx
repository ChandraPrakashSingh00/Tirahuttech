import React from "react";
import { FaBullhorn, FaUsers, FaChessKnight, FaChartLine } from "react-icons/fa";
import { ShapeHexagonFilled, ShapeSquareFilled, ShapeQuadFilled, ShapeTriangleOutline } from "../../components/ui/Shapes/Shapes";

const WhyChooseUs = () => {
  const items = [
    {
      title: "Engineering-Led Solutions",
      desc: "Robust software and systems built to scale and last.",
      icon: <FaBullhorn />,
    },
    {
      title: "Highly Proficient Team",
      desc: "Experienced developers and engineers delivering with accountability.",
      icon: <FaUsers />,
    },
    {
      title: "Strategic Planning",
      desc: "Clear planning aligned with long-term business goals.",
      icon: <FaChessKnight />,
    },
    {
      title: "High Success Rate",
      desc: "Consistent, measurable results through dependable execution.",
      icon: <FaChartLine />,
    },
  ];

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">

      {/* Soft Background Accents */}

      <div className="absolute bottom-[20px] left-[20px] w-[100px] h-[100px] rotate-[0deg] z-[5]" >
        <ShapeSquareFilled color="o" round="10" />
      </div>
      <div className="absolute top-[-90px] right-[200px] w-[150px] h-[150px] rotate-[-40deg] z-[5]" >
        <ShapeQuadFilled color="dt" />
      </div>

      <div className="absolute bottom-[40vh] right-[-80px] w-[200px] h-[200px] rotate-[-45deg] z-[5]" >
        <ShapeTriangleOutline color="do" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[#f27b22] text-3xl">★</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00444b]">
              What Sets Us Apart
            </h2>
          </div>

          <div className="mx-auto w-24 h-[3px] rounded-full bg-gradient-to-r from-[#01686d] to-[#f27b22]" />
        </div>

        {/* CARDS GRID */}
        <div className="relative  grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="absolute top-0 left-0 w-[100px] h-[100px] -translate-x-1/2 -translate-y-1/2 z-[5] rotate-[15deg]">          <ShapeHexagonFilled color="t" />
          </div>
          {items.map((item, index) => (
            <div
              key={index}
              className="
                group relative rounded-3xl p-8
                bg-white
                border border-gray-200
                shadow-md
                transition-all duration-300 ease-out
                hover:-translate-y-2
                hover:bg-[#f27b22]
                hover:border-[#f27b22]
                hover:shadow-[0_18px_40px_rgba(242,123,34,0.45)]
                z-[10]
              "
            >
              {/* Icon Box */}
              <div
                className="
                  w-16 h-16 rounded-2xl flex items-center justify-center mb-6
                  text-2xl text-white
                  transition-transform duration-300
                  group-hover:scale-110
                "
                style={{
                  background: "linear-gradient(135deg, #01686d, #00444b)",
                }}
              >
                {item.icon}
              </div>

              {/* Text */}
              <h3
                className="
                  text-xl font-semibold mb-3
                  text-[#00444b]
                  transition-colors duration-300
                  group-hover:text-white
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  text-gray-600 text-sm leading-relaxed
                  transition-colors duration-300
                  group-hover:text-white/90
                "
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
