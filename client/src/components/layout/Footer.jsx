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
    { icon: <FaFacebookF />, url: "https://www.facebook.com/share/1N3mrzezfA/", title: "Facebook" },
    { icon: <FaTwitter />, url: "https://twitter.com", title: "Twitter" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/tirahut-tech-7249323a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", title: "LinkedIn" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/tirahut_tech?igsh=MTNlc2Z1eW96bzQydQ==", title: "Instagram" },
  ];

  return (
    <footer className="bg-[#00444b] text-gray-200 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 - Logo & About */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <img
              src="./img/logo.png"
              alt="Trihut Tech Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-white text-2xl font-bold">Tirahut Tech</span>
          </div>
          <p className="text-gray-300">
            Tirahut Tech provides innovative IT solutions for businesses and freelancers.
          </p>
          <div className="flex gap-3 mt-4">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#00444b] hover:bg-[#F27B22] hover:text-white transition duration-300"
                title={social.title}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 - Company */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-[#F27B22] transition">About Us</Link>
            </li>
            <li>
              <Link to="/product" className="hover:text-[#F27B22] transition">Products</Link>
            </li>
            <li>
              <Link to="/service" className="hover:text-[#F27B22] transition">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#F27B22] transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Explore */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/blog" className="hover:text-[#F27B22] transition">Blog</Link>
            </li>
            <li>
              <Link to="" className="hover:text-[#F27B22] transition">Portfolio</Link>
            </li>
            <li>
              <Link to="/our-package" className="hover:text-[#F27B22] transition">Packages</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#F27B22] transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-3 hover:text-[#F27B22] transition">
              <span className="p-2 rounded-md bg-[#01686d] hover:bg-[#F27B22]">
                <FaMapMarkerAlt />
              </span>
              14th Avenue, Gaur City 2, Greater Noida, Uttar Pradesh – 203201, India
            </li>
            <li className="flex items-center gap-3 hover:text-[#F27B22] transition">
              <span className="p-2 rounded-md bg-[#01686d] hover:bg-[#F27B22]">
                <HiOutlineMail />
              </span>
              tirahuttech@gmail.com
            </li>
            <li className="flex items-center gap-3 hover:text-[#F27B22] transition">
              <span className="p-2 rounded-md bg-[#01686d] hover:bg-[#F27B22]">
                <FiPhoneCall />
              </span>
              +91 8130654209
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-[#01686d] pt-6 text-center text-sm text-gray-300">
        © 2025 Tirahut Tech. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
