// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";

function Footer() {
  const socialMedia = [
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/share/1N3mrzezfA/",
      title: "Facebook",
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com",
      title: "Twitter",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/tirahut-tech-7249323a6",
      title: "LinkedIn",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/tirahut_tech",
      title: "Instagram",
    },
  ];

  return (
    <footer className="bg-[#01686d] text-gray-200 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="./img/logo.png"
              alt="Tirahut Tech Logo"
              className="w-12 h-12 object-contain"
            />
            <h2 className="text-2xl font-bold text-white">
              Tirahut Tech
            </h2>
          </div>

          <p className="text-gray-300 text-sm leading-6">
            Tirahut Tech delivers innovative IT solutions, web development,
            mobile apps, digital marketing, and business growth services for
            startups, businesses, and freelancers.
          </p>

          <div className="flex gap-3 mt-5">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.title}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#00444b] hover:bg-[#F27B22] hover:text-white transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li>
              <Link to="/" className="hover:text-[#F27B22] transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-[#F27B22] transition">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/service" className="hover:text-[#F27B22] transition">
                Services
              </Link>
            </li>

            <li>
              <Link to="/product" className="hover:text-[#F27B22] transition">
                Product
              </Link>
            </li>

            <li>
              <Link to="/career" className="hover:text-[#F27B22] transition">
                Career
              </Link>
            </li>

            <li>
              <Link
                to="/resources"
                className="hover:text-[#F27B22] transition"
              >
                Resources
              </Link>
            </li>

            <li>
              <Link to="/blog" className="hover:text-[#F27B22] transition">
                Blog
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-[#F27B22] transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Services
          </h3>

          <ul className="space-y-3">
            <li>
              <Link
                to="/service/web-development"
                className="hover:text-[#F27B22] transition"
              >
                Web Development
              </Link>
            </li>

            <li>
              <Link
                to="/service/app-development"
                className="hover:text-[#F27B22] transition"
              >
                App Development
              </Link>
            </li>

            <li>
              <Link
                to="/service/ecommerce-development"
                className="hover:text-[#F27B22] transition"
              >
                Ecommerce Development
              </Link>
            </li>

            <li>
              <Link
                to="/service/marketing"
                className="hover:text-[#F27B22] transition"
              >
                Digital Marketing
              </Link>
            </li>

            <li>
              <Link
                to="/service/automation"
                className="hover:text-[#F27B22] transition"
              >
                Automation
              </Link>
            </li>

            <li>
              <Link
                to="/service/customer-software"
                className="hover:text-[#F27B22] transition"
              >
                Custom Software
              </Link>
            </li>
          </ul>
        </div>

        {/* Packages */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Packages
          </h3>

          <ul className="space-y-3">
            <li>
              <Link
                to="/our-package"
                className="hover:text-[#F27B22] transition"
              >
                Website Package
              </Link>
            </li>

            <li>
              <Link
                to="/our-package"
                className="hover:text-[#F27B22] transition"
              >
                E-commerce Package
              </Link>
            </li>

            <li>
              <Link
                to="/our-package"
                className="hover:text-[#F27B22] transition"
              >
                SEO Package
              </Link>
            </li>

            <li>
              <Link
                to="/our-package"
                className="hover:text-[#F27B22] transition"
              >
                Business Growth Package
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Contact Us
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="p-2 rounded-md bg-[#01686d]">
                <FaMapMarkerAlt />
              </span>

              <span>
                14th Avenue, Gaur City 2, Greater Noida, Uttar Pradesh - 203201
              </span>
            </li>

            <li className="flex items-center gap-3">
              <span className="p-2 rounded-md bg-[#01686d]">
                <HiOutlineMail />
              </span>

              <a
                href="mailto:tirahuttech@gmail.com"
                className="hover:text-[#F27B22]"
              >
                tirahuttech@gmail.com
              </a>
            </li>

            <li className="flex items-center gap-3">
              <span className="p-2 rounded-md bg-[#01686d]">
                <FiPhoneCall />
              </span>

              <a
                href="tel:+918130654209"
                className="hover:text-[#F27B22]"
              >
                +91 8130654209
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#01686d] mt-12 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
          
          <p>
            © 2025 Tirahut Tech. All Rights Reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              to="/privacy-policy"
              className="hover:text-[#F27B22]"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="hover:text-[#F27B22]"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/refund-policy"
              className="hover:text-[#F27B22]"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;