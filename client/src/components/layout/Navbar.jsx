import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { HiOutlineCode, HiOutlineDeviceMobile } from "react-icons/hi";
import { BsCart, BsGear } from "react-icons/bs";
import { FaUsers, FaBullhorn } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);
  const [packageOpen, setPackageOpen] = useState(false);

  const [mServices, setMServices] = useState(false);
  const [mPackage, setMPackage] = useState(false);

  const navRef = useRef(null);

  /* SCROLL SHADOW */
  useEffect(() => {
    const onScroll = () => setShadow(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* AUTO OPEN DROPDOWN BASED ON ROUTE */
  useEffect(() => {
    if (location.pathname.startsWith("/service")) {
      setServicesOpen(true);
      setPackageOpen(false);
    } else if (location.pathname.startsWith("/our-package")) {
      setPackageOpen(true);
      setServicesOpen(false);
    } else {
      setServicesOpen(false);
      setPackageOpen(false);
    }
  }, [location.pathname]);

  /* OUTSIDE CLICK CLOSE */
  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setServicesOpen(false);
        setPackageOpen(false);
        setMobileOpen(false);
        setMServices(false);
        setMPackage(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const services = [
    { name: "Web Development", icon: <HiOutlineCode />, path: "/service/web-development" },
    { name: "App Development", icon: <HiOutlineDeviceMobile />, path: "/service/app-development" },
    { name: "Ecommerce", icon: <BsCart />, path: "/service/ecommerce-development" },
    { name: "Automation", icon: <BsGear />, path: "/service/automation" },
    { name: "Marketing", icon: <FaBullhorn />, path: "/service/marketing" },
    { name: "Custom Software", icon: <FaUsers />, path: "/service/custom-software" },
  ];

  const packages = [
    { name: "Web Package", path: "/our-package/web" },
    { name: "SEO Package", path: "/our-package/seo" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 bg-white px-6 md:px-12 py-4 border-b transition ${
        shadow ? "shadow-md" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/img/logo.png" className="w-11 h-11" alt="logo" />
          <div>
            <p className="font-extrabold text-[#003C3F] text-[22px]">TIRAHUT</p>
            <p className="text-[13px] font-semibold text-[#003C3F] -mt-1">TECH</p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-6 font-medium text-[15px]">
          <Link to="/">Home</Link>
          <Link to="/about">Who We Are</Link>

          {/* SERVICES */}
          <li className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1"
            >
              Services <FiChevronDown />
            </button>

            {servicesOpen && (
              <ul className="absolute top-full mt-2 w-60 bg-white border rounded-xl shadow-lg">
                {services.map((s) => (
                  <Link key={s.name} to={s.path}>
                    <li className="px-4 py-2 flex gap-2 hover:bg-gray-100">
                      <span className="text-[#01686d]">{s.icon}</span>
                      {s.name}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </li>

          {/* PACKAGE */}
          <li className="relative">
            <button
              onClick={() => setPackageOpen(!packageOpen)}
              className="flex items-center gap-1"
            >
              Our Package <FiChevronDown />
            </button>

            {packageOpen && (
              <ul className="absolute top-full mt-2 w-48 bg-white border rounded-xl shadow-lg">
                {packages.map((p) => (
                  <Link key={p.name} to={p.path}>
                    <li className="px-4 py-2 hover:bg-gray-100">{p.name}</li>
                  </Link>
                ))}
              </ul>
            )}
          </li>

          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </ul>

        {/* DESKTOP CTA */}
        <div className="hidden md:flex gap-3">
          <Link to="/demo" className="px-5 py-2 bg-[#01686d] text-white rounded-lg">
            Request Demo
          </Link>
          <Link to="/signup" className="px-5 py-2 bg-[#f27b22] text-white rounded-lg">
            Sign Up
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button className="md:hidden" onClick={() => setMobileOpen(true)}>
          <FiMenu size={26} />
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl p-6 z-50 transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between mb-6">
          <p className="font-bold text-lg">Menu</p>
          <FiX size={26} onClick={() => setMobileOpen(false)} />
        </div>

        <div className="flex flex-col gap-4 font-medium">
          <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)}>Who We Are</Link>

          {/* MOBILE SERVICES */}
          <button
            className="flex justify-between items-center"
            onClick={() => setMServices(!mServices)}
          >
            Services <FiChevronDown />
          </button>
          {mServices &&
            services.map((s) => (
              <Link
                key={s.name}
                to={s.path}
                className="pl-4"
                onClick={() => setMobileOpen(false)}
              >
                {s.name}
              </Link>
            ))}

          {/* MOBILE PACKAGE */}
          <button
            className="flex justify-between items-center"
            onClick={() => setMPackage(!mPackage)}
          >
            Our Package <FiChevronDown />
          </button>
          {mPackage &&
            packages.map((p) => (
              <Link
                key={p.name}
                to={p.path}
                className="pl-4"
                onClick={() => setMobileOpen(false)}
              >
                {p.name}
              </Link>
            ))}

          <Link to="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
        </div>
      </div>

      {mobileOpen && <div className="fixed inset-0 bg-black/40 z-40" />}
    </nav>
  );
};

export default Navbar;
