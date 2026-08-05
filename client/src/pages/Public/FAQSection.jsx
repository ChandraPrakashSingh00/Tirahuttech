import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { ShapeBlobAOutline, ShapeBlobBOutline, ShapeChevronFilled, ShapeQuadFilled, ShapeQuadOutline, ShapeSplatOutline, ShapeSquareFilled, ShapeSquareOutline, ShapeTriangleOutline } from "../../components/ui/Shapes/Shapes";

const faqs = [
  {
    question: "SEO Services and Digital Marketing Agency in Texas",
    answer:
      "We provide comprehensive SEO and digital marketing services in Texas, helping businesses grow their online presence, generate quality leads, and increase revenue through proven strategies.",
  },
  {
    question: "Best Search Engine Marketing and SEO Company Texas",
    answer:
      "Our team specializes in search engine marketing and SEO solutions designed to improve rankings, boost traffic, and maximize ROI for businesses across Texas.",
  },
  {
    question: "Why is SEO and Internet Marketing so Important?",
    answer:
      "SEO and internet marketing are essential for building brand visibility, attracting targeted customers, increasing credibility, and staying competitive in today’s digital world.",
  },
  {
    question: "What Does an Online Marketing Agency Do?",
    answer:
      "An online marketing agency helps businesses grow digitally through SEO, PPC, social media marketing, content marketing, branding, and conversion optimization.",
  },
  {
    question: "What is included in Digital Marketing Services?",
    answer:
      "Digital marketing services include SEO, social media marketing, PPC advertising, content creation, email marketing, analytics, and performance tracking.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 px-4 md:px-8 bg-white overflow-hidden min-h-[calc(100vh_-_80px)]">
      {/* Background Shapes */}
      <div className="absolute top-[-50px] left-[-100px] w-[400px] h-[400px] rotate-[60deg] z-[5]" >
        <ShapeChevronFilled />
      </div>
      <div className="absolute bottom-[-40px] left-[200px] w-[100px] h-[100px] rotate-[60deg] z-[5]" >
        <ShapeQuadFilled color="do" />
      </div>
      <div className="absolute top-[-90px] right-[200px] w-[150px] h-[150px] rotate-[-40deg] z-[5]" >
        <ShapeQuadFilled color="t" />
      </div>
      <div className="absolute bottom-[-50px] right-[-50px] w-[200px] h-[200px] rotate-[0deg] z-[5]" >
        <ShapeQuadOutline color="t" />
      </div>
      <div className="absolute bottom-[40vh] right-[-80px] w-[200px] h-[200px] rotate-[-45deg] z-[5]" >
        <ShapeTriangleOutline color="o" />
      </div>



      <div className=" relative max-w-5xl mx-auto z-[10]">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-900 mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md transition-all duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-teal-900 font-semibold text-base md:text-lg focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="ml-4 text-teal-700">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-40 pb-5" : "max-h-0"
                  }`}
              >
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
