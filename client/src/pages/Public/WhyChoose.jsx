import React from "react";
import { HelpCircle, Smile, Users, Settings, DollarSign } from "lucide-react";
import { ShapeBeanFilled, ShapeBlobAFilled, ShapeBlobAOutline, ShapeBlobBFilled, ShapeChevronFilled, ShapeScribbleLoop, ShapeShardCFilled, ShapeSplatFilled } from "../../components/ui/Shapes/Shapes";

// COLOR PALETTE
// Primary Green: #01686d
// Dark Green: #00444b
// Orange Accent: #f27b22

const features = [
  {
    title: "Easy to Work With ",
    desc: "Clear communication and smooth delivery that reduce technical complexity.",
    icon: <Smile className="text-white" size={26} />,
  },
  {
    title: "Team of Experts",
    desc: "Experienced developers and engineers with real ownership of outcomes",
    icon: <Users className="text-white" size={26} />,
  },
  {
    title: "Proven Process",
    desc: "Discovery-led planning with clear roadmaps from idea to delivery.",
    icon: <Settings className="text-white" size={26} />,
  },
  {
    title: "Real Results",
    desc: "Technology investments focused on measurable business impact.",
    icon: <DollarSign className="text-white" size={26} />,
  },
];

export default function WhyChooseAdsRole() {
  return (
    <section className="w-full py-24 px-4 bg-[#f7f7f7]">
      
      <div className="max-w-6xl mx-auto">
        {/* HEADING */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4">


            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00444b]">
              Why Choose <span className="text-[#00444b]">Tirahut Tech?</span>
            </h2>
          </div>

          <div className="mt-6 flex justify-center">
            <span className="h-1 w-20 rounded-full bg-[#f27b22]" />
          </div>
        </div>

        {/* CARDS */}
        <div className=" relative grid grid-cols-1 md:grid-cols-2 gap-10 z-[10]">
          <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 rotate-[65deg] z-[5] origin-center " // Added bg-color for visibility
          >            <ShapeShardCFilled color="do" />
          </div>
          {features.map((item, idx) => (
            <div
              key={idx}
              className="
                bg-white 
                rounded-3xl 
                p-6 md:p-8 
                shadow-[0_15px_35px_rgba(0,0,0,0.08)]
                hover:shadow-[0_25px_55px_rgba(0,0,0,0.12)]
                hover:-translate-y-1
                transition-all 
                duration-300
                z-[10]
              "
            >
              <div className="flex items-start gap-5">
                {/* ICON */}
                <div className="flex-shrink-0 bg-[#01686d] p-4 rounded-full shadow-md">
                  {item.icon}
                </div>

                {/* CONTENT */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#00444b]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
