import React, { useState, useEffect, useRef } from "react";
import {
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";
import {
  HiOutlineCode,
  HiOutlineDeviceMobile,
  HiOutlineGlobe,
} from "react-icons/hi";
import { BsCart, BsGear } from "react-icons/bs";
import { FaUsers, FaBullhorn } from "react-icons/fa";
import {
  MdOutlineAdsClick,
  MdOutlineManageSearch,
} from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);

  const [shadow, setShadow] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [packageOpen, setPackageOpen] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobilePackage, setMobilePackage] = useState(false);

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
        setPackageOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setPackageOpen(false);
    setMobileOpen(false);
    setMobileServices(false);
    setMobilePackage(false);
  }, [location]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileServices(false);
    setMobilePackage(false);
  };

  const services = [
    {
      name: "Web Development",
      desc: "Modern & Scalable Websites",
      icon: <HiOutlineCode size={20} />,
      path: "/service/web-development",
    },
    {
      name: "App Development",
      desc: "Android & iOS Apps",
      icon: <HiOutlineDeviceMobile size={20} />,
      path: "/service/app-development",
    },
    {
      name: "Ecommerce Development",
      desc: "Online Store Solutions",
      icon: <BsCart size={18} />,
      path: "/service/ecommerce-development",
    },
    {
      name: "Automation",
      desc: "Smart Business Automation",
      icon: <BsGear size={18} />,
      path: "/service/automation",
    },
    {
      name: "Marketing",
      desc: "Digital Growth Strategies",
      icon: <FaBullhorn size={18} />,
      path: "/service/marketing",
    },
    {
      name: "Custom Software",
      desc: "Tailored Business Systems",
      icon: <FaUsers size={18} />,
      path: "/service/custom-software",
    },
  ];

  const packages = [
    {
      title: "SEO Package",
      desc: "Rank Higher on Google",
      icon: <MdOutlineManageSearch size={18} />,
      path: "/our-package/seo",
    },
    {
      title: "Web Package",
      desc: "Modern Business Website",
      icon: <HiOutlineGlobe size={18} />,
      path: "/our-package/web",
    },
    {
      title: "Automation Package",
      desc: "Boost Paid Campaigns",
      icon: <MdOutlineAdsClick size={18} />,
      path: "/our-package/ppc",
    },
    {
      title: "SMO Package",
      desc: "Grow Social Presence",
      icon: <FaBullhorn size={18} />,
      path: "/our-package/smo",
    },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed w-full top-0 left-0 z-50 bg-white transition-all duration-300 ${shadow ? "shadow-lg border-b backdrop-blur-md" : ""
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1">

            {/* Logo Image */}
            <img
              src="/img/logo.png"
              alt="Tirahut Tech Logo"
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
            />

            {/* Text Section */}
            <div className="flex flex-col leading-none">

              <h1 className="text-lg sm:text-xl font-bold text-[#003C3F]">
                TIRAHUT
              </h1>

              <p className="text-[10px] sm:text-xs font-semibold text-[#003C3F] ml-2 tracking-wider">
                TECH
              </p>

            </div>
          </Link>
          {/* ================= DESKTOP ================= */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-[15px] relative">

            <li><Link to="/" className="hover:text-[#f27b22] transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#f27b22] transition">About</Link></li>

            {/* Services */}
            <li className="relative flex items-center gap-1">
              <span onClick={() => navigate("/service")} className="cursor-pointer hover:text-[#f27b22] transition">
                Services
              </span>
              <FiChevronDown
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`cursor-pointer transition ${servicesOpen ? "rotate-180" : ""}`}
              />

              <div className={`absolute left-1/2 -translate-x-1/2 top-[120%] w-[95vw] max-w-[950px] bg-white shadow-2xl rounded-2xl p-6 lg:p-8 transition-all duration-300 ${servicesOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
                }`}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {services.map((item) => (
                    <Link key={item.name} to={item.path}>
                      <div className="group flex gap-4 p-4 border rounded-xl hover:bg-[#f27b22] hover:shadow-lg transition-all">
                        <div className="text-[#f27b22] group-hover:text-white">{item.icon}</div>
                        <div>
                          <h3 className="font-semibold text-[#003C3F] group-hover:text-white text-sm lg:text-base">
                            {item.name}
                          </h3>
                          <p className="text-xs lg:text-sm text-gray-500 group-hover:text-white/90">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </li>


            {/* Package */}
            <li className="relative flex items-center gap-1">
              <button
                onClick={() => setPackageOpen(!packageOpen)}
                className="flex items-center gap-1 hover:text-[#f27b22] transition focus:outline-none"
              >
                Our Package
                <FiChevronDown
                  className={`transition ${packageOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`absolute left-1/2 -translate-x-1/2 top-[120%] w-[95vw] max-w-[850px] bg-white shadow-2xl rounded-2xl p-6 lg:p-8 transition-all duration-300 ${packageOpen
                    ? "opacity-100 visible scale-100"
                    : "opacity-0 invisible scale-95"
                  }`}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  {packages.map((pkg) => (
                    <Link key={pkg.title} to={pkg.path}>
                      <div className="group flex gap-4 p-4 border rounded-xl hover:bg-[#f27b22] hover:shadow-lg transition-all">
                        <div className="text-[#f27b22] group-hover:text-white">
                          {pkg.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#003C3F] group-hover:text-white text-sm lg:text-base">
                            {pkg.title}
                          </h3>
                          <p className="text-xs lg:text-sm text-gray-500 group-hover:text-white/90">
                            {pkg.desc}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li><Link to="/blog" className="hover:text-[#f27b22] transition">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-[#f27b22] transition">Contact</Link></li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/demo" className="px-4 lg:px-5 py-2 text-sm bg-[#01686d] text-white rounded-lg hover:opacity-90 transition">
              Request Demo
            </Link>
            <Link to="/signup" className="px-4 lg:px-5 py-2 text-sm bg-[#f27b22] text-white rounded-lg hover:opacity-90 transition">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-[#003C3F]"></span>
              <span className="block w-6 h-0.5 bg-[#003C3F]"></span>
              <span className="block w-6 h-0.5 bg-[#003C3F]"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`} onClick={closeMobile}></div>

      {/* Mobile Drawer */}
      <div className={`fixed top-0 right-0 w-[85%] max-w-[360px] h-full bg-white z-50 shadow-2xl transform transition-transform duration-300 overflow-y-auto ${mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}>

        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="font-bold text-lg">Menu</h2>
          <FiX size={24} className="cursor-pointer" onClick={closeMobile} />
        </div>

        <div className="p-5 space-y-4 font-medium text-[15px]">

          <Link to="/" onClick={closeMobile} className="block">Home</Link>
          <Link to="/about" onClick={closeMobile} className="block">About</Link>

          {/* Services Mobile */}
          <div className="border-b pb-3">
            <div className="flex justify-between items-center">

              {/* Services Text → Navigate */}
              <span
                onClick={() => {
                  navigate("/service");
                  closeMobile();
                }}
                className="cursor-pointer font-medium"
              >
                Services
              </span>

              {/* Arrow → Dropdown Toggle */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileServices(!mobileServices);
                }}
                className="focus:outline-none"
              >
                <FiChevronDown
                  className={`transition-transform duration-300 ${mobileServices ? "rotate-180" : ""
                    }`}
                />
              </button>
            </div>

            {/* Dropdown Items */}
            <div
              className={`overflow-hidden transition-all duration-300 ${mobileServices ? "max-h-96 mt-3" : "max-h-0"
                }`}
            >
              <div className="pl-4 space-y-3 text-sm">
                {services.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={closeMobile}
                    className="block text-gray-600 hover:text-[#f27b22] transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Package Mobile */}
          <div>
            <div className="flex justify-between items-center cursor-pointer"
              onClick={() => setMobilePackage(!mobilePackage)}>
              <span>Our Package</span>
              <FiChevronDown className={`${mobilePackage ? "rotate-180" : ""}`} />
            </div>
            {mobilePackage && (
              <div className="pl-4 mt-3 space-y-3 text-sm">
                {packages.map((pkg) => (
                  <Link key={pkg.title} to={pkg.path} onClick={closeMobile} className="block text-gray-600">
                    {pkg.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/blog" onClick={closeMobile} className="block">Blog</Link>
          <Link to="/contact" onClick={closeMobile} className="block">Contact</Link>

          <div className="pt-4 space-y-3">
            <Link to="/demo" onClick={closeMobile}
              className="block text-center py-2 bg-[#01686d] text-white rounded-lg">
              Request Demo
            </Link>
            <Link to="/signup" onClick={closeMobile}
              className="block text-center py-2 bg-[#f27b22] text-white rounded-lg">
              Sign Up
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;