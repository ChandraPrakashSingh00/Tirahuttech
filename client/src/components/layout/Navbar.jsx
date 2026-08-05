import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiChevronDown, FiArrowRight } from "react-icons/fi";
import {
  HiOutlineCode,
  HiOutlineDeviceMobile,
} from "react-icons/hi";
import { BsCart, BsGear } from "react-icons/bs";
import { FaUsers, FaBullhorn, FaUserTie } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);

  const [shadow, setShadow] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
    setMobileServices(false);
  }, [location]);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileServices(false);
  };

  const services = [
    {
      name: "Web Development",
      desc: "Modern & scalable websites",
      icon: <HiOutlineCode size={20} />,
      path: "/service/web-development",
    },
    {
      name: "App Development",
      desc: "Android & iOS apps",
      icon: <HiOutlineDeviceMobile size={20} />,
      path: "/service/app-development",
    },
    {
      name: "Ecommerce Development",
      desc: "Online store solutions",
      icon: <BsCart size={18} />,
      path: "/service/ecommerce-development",
    },
    {
      name: "Automation",
      desc: "Smart business automation",
      icon: <BsGear size={18} />,
      path: "/service/automation",
    },
    {
      name: "Marketing",
      desc: "Digital growth strategies",
      icon: <FaBullhorn size={18} />,
      path: "/service/marketing",
    },
    {
      name: "Custom Software",
      desc: "Tailored business systems",
      icon: <FaUsers size={18} />,
      path: "/service/customer-software",
    },
    {
      name: "HR & IT Recruitment",
      desc: "Hire skilled tech talent",
      icon: <FaUserTie size={18} />,
      path: "/service/hr-it-recruitment",
    },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  const navLinksRight = [
    { name: "Product", path: "/product" },
    { name: "Career", path: "/career" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;
  const isServiceActive = location.pathname.startsWith("/service");

  const NavItem = ({ to, children }) => (
    <li className="relative">
      <Link
        to={to}
        className={`relative py-1 transition-colors duration-200 ${
          isActive(to)
            ? "text-[#01686d] font-semibold"
            : "text-[#0b2f32] hover:text-[#01686d]"
        }`}
      >
        {children}
        <span
          className={`absolute -bottom-1 left-0 h-[2px] bg-[#f27b22] rounded-full transition-all duration-300 ${
            isActive(to) ? "w-full" : "w-0"
          }`}
        />
      </Link>
    </li>
  );

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed w-full top-0 left-0 z-50 bg-white/95 backdrop-blur-md border-b transition-all duration-300 ${
          shadow ? "shadow-[0_4px_20px_rgba(0,60,63,0.08)] border-gray-100" : "border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center h-[68px] sm:h-[76px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <img
              src="/img/logo.png"
              alt="Tirahut Tech Logo"
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col leading-[0.9]">
              <h1 className="text-base sm:text-lg font-bold text-[#003C3F] tracking-wide">
                TIRAHUT
              </h1>
              <p className="text-[9px] sm:text-[10px] font-semibold text-[#f27b22] ml-[6px] tracking-[3px] mt-[-2px]">
                TECH
              </p>
            </div>
          </Link>

          {/* ================= DESKTOP ================= */}
          <ul className="hidden md:flex items-center gap-7 lg:gap-9 font-medium text-[15px]">
            {navLinks.map((item) => (
              <NavItem key={item.path} to={item.path}>
                {item.name}
              </NavItem>
            ))}

            {/* Services */}
            <li className="relative">
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className={`flex items-center gap-1 py-1 transition-colors duration-200 ${
                  servicesOpen || isServiceActive
                    ? "text-[#01686d] font-semibold"
                    : "text-[#0b2f32] hover:text-[#01686d]"
                }`}
              >
                Services
                <FiChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[#f27b22] rounded-full transition-all duration-300 ${
                    servicesOpen || isServiceActive ? "w-[calc(100%-16px)]" : "w-0"
                  }`}
                />
              </button>

              <div
                className={`absolute left-1/2 -translate-x-1/2 top-[calc(100%+18px)] w-[95vw] max-w-[880px] bg-white shadow-2xl ring-1 ring-black/5 rounded-2xl transition-all duration-300 origin-top ${
                  servicesOpen
                    ? "opacity-100 visible scale-100 translate-y-0"
                    : "opacity-0 invisible scale-95 -translate-y-2"
                }`}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Side panel */}
                  <div className="hidden lg:flex flex-col justify-between w-[220px] bg-[#01686d] rounded-l-2xl p-6">
                    <div>
                      <p className="text-[#f27b22] text-xs font-semibold tracking-[2px] uppercase">
                        What we do
                      </p>
                      <h3 className="text-white text-xl font-bold mt-2 leading-snug">
                        Services built to grow your business
                      </h3>
                    </div>
                    <Link
                      to="/service"
                      onClick={() => setServicesOpen(false)}
                      className="inline-flex items-center gap-2 text-white text-sm font-semibold hover:text-[#f27b22] transition mt-6"
                    >
                      View all services <FiArrowRight />
                    </Link>
                  </div>

                  {/* Grid */}
                  <div className="grid sm:grid-cols-2 gap-3 p-5 lg:p-6 flex-1">
                    {services.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setServicesOpen(false)}
                        className="group flex gap-3.5 p-3.5 rounded-xl hover:bg-[#fef4ec] transition-all"
                      >
                        <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-[#eaf5f5] text-[#01686d] group-hover:bg-[#f27b22] group-hover:text-white transition-colors">
                          {item.icon}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-semibold text-[#003C3F] text-sm">
                            {item.name}
                          </h3>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            {navLinksRight.map((item) => (
              <NavItem key={item.path} to={item.path}>
                {item.name}
              </NavItem>
            ))}
          </ul>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-5 shrink-0">
            <Link
              to="/get-started"
              className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-[#f27b22] text-white rounded-xl hover:bg-[#e06d18] transition-all shadow-md hover:shadow-lg"
            >
              Get Started
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Open menu"
          >
            <FiMenu size={24} className="text-[#003C3F]" />
          </button>
        </div>
      </nav>

      {/* Spacer so page content isn't hidden behind the fixed navbar */}
      <div className="h-[68px] sm:h-[76px]" />

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMobile}
      ></div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 w-[85%] max-w-[360px] h-full bg-white z-50 shadow-2xl transform transition-transform duration-300 overflow-y-auto flex flex-col ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b bg-[#00444b]">
          <Link to="/" onClick={closeMobile} className="flex items-center gap-2">
            <img src="/img/logo.png" alt="Tirahut Tech" className="w-9 h-9 object-contain" />
            <span className="font-bold text-white tracking-wide">TIRAHUT TECH</span>
          </Link>
          <button
            onClick={closeMobile}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
            aria-label="Close menu"
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="p-5 space-y-1 font-medium text-[15px] flex-1">
          <Link
            to="/"
            onClick={closeMobile}
            className={`block px-3 py-3 rounded-lg transition ${
              isActive("/") ? "bg-[#eaf5f5] text-[#01686d] font-semibold" : "hover:bg-gray-50"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMobile}
            className={`block px-3 py-3 rounded-lg transition ${
              isActive("/about") ? "bg-[#eaf5f5] text-[#01686d] font-semibold" : "hover:bg-gray-50"
            }`}
          >
            About
          </Link>

          {/* Services Mobile */}
          <div className="rounded-lg overflow-hidden">
            <div className="flex justify-between items-center px-3 py-3 hover:bg-gray-50 rounded-lg">
              <span
                onClick={() => {
                  navigate("/service");
                  closeMobile();
                }}
                className={`cursor-pointer ${isServiceActive ? "text-[#01686d] font-semibold" : ""}`}
              >
                Services
              </span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileServices(!mobileServices);
                }}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 focus:outline-none"
                aria-label="Toggle services"
              >
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    mobileServices ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileServices ? "max-h-96 py-2" : "max-h-0"
              }`}
            >
              <div className="pl-3 space-y-1 text-sm">
                {services.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={closeMobile}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-[#eaf5f5] hover:text-[#01686d] transition"
                  >
                    <span className="text-[#01686d]">{item.icon}</span>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {[
            { name: "Product", path: "/product" },
            { name: "Career", path: "/career" },
            { name: "Resources", path: "/resources" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMobile}
              className={`block px-3 py-3 rounded-lg transition ${
                isActive(item.path) ? "bg-[#eaf5f5] text-[#01686d] font-semibold" : "hover:bg-gray-50"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="p-5 pt-3 border-t space-y-3">
          <Link
            to="/get-started"
            onClick={closeMobile}
            className="flex items-center justify-center gap-2 py-3 bg-[#f27b22] text-white rounded-xl font-semibold hover:bg-[#e06d18] transition"
          >
            Get Started <FiArrowRight />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;