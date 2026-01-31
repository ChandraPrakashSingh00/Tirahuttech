// Products.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

// Stagger Animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

// Card Animation
const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const Products = () => {
  const products = [
    { title: "CRM", icon: "📈", desc: "Customer relationship management", extra: "Boost sales • Automate follow-ups • Data analytics", link: "/products/crm" },
    { title: "HRM", icon: "🧑‍💼", desc: "Human resources management", extra: "Employee management • Payroll • Attendance tracking", link: "/products/hrm" },
    { title: "ERP", icon: "💼", desc: "Enterprise resource planning", extra: "Integrated operations • Inventory • Accounting", link: "/products/erp" },
    { title: "POS", icon: "🛒", desc: "Point of sale solution", extra: "Fast checkout • Reports • Inventory sync", link: "/products/pos" },
  ];

  const hoverColor = "#F27B22"; // uniform hover background for all cards

  return (
    <>
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full text-white py-24 px-5 text-center pt-32 sm:pt-36 bg-gradient-to-r from-[#01686d] to-[#00444b]"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Products</h1>
        <p className="text-base sm:text-lg max-w-xl mx-auto opacity-90">
          Discover our suite of business solutions designed to enhance productivity and efficiency.
        </p>
      </motion.div>

      {/* MAIN HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="px-6 md:px-12 max-w-6xl mx-auto mt-14 mb-10 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#003C3F]">
          Business Tools That Boost Growth
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mt-4">
          Explore our high-performance software products tailored for businesses of all sizes.
        </p>
      </motion.div>

      {/* PRODUCT CARDS */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 gap-7 px-6 md:px-12 max-w-6xl mx-auto pb-10"
      >
        {products.map((product, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Link to={product.link}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className={`
                  group relative bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-start
                  shadow-lg transition-all duration-300 min-h-[220px]
                  hover:bg-[${hoverColor}] hover:border-[${hoverColor}]
                `}
              >
                {/* ICON */}
                <div
                  className="text-5xl mb-4 transition-all duration-300 group-hover:text-white"
                >
                  {product.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 transition-all duration-300 group-hover:text-white">
                  {product.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm sm:text-base transition-all duration-300 group-hover:text-white mb-2">
                  {product.desc}
                </p>

                {/* EXTRA INFO */}
                <p className="text-gray-500 text-sm sm:text-[14px] transition-all duration-300 group-hover:text-white">
                  {product.extra}
                </p>

                {/* ARROW */}
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl text-gray-400 mt-auto group-hover:text-white self-end"
                >
                  <FaArrowRightLong />
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full flex justify-center mt-4 mb-20"
      >
        <Link
          to="/contact"
          className="bg-[#F27B22] text-white font-semibold px-8 py-4 rounded-xl shadow-lg text-lg hover:bg-[#d86919] hover:shadow-xl transition duration-300"
        >
          Book a Free Product Demo
        </Link>
      </motion.div>

      {/* GRADIENT DIVIDER */}
      <div className="w-full h-2 bg-gradient-to-r from-[#01686d] via-[#f27b22] to-[#00444b] mt-12"></div>
    </>
  );
};

export default Products;
