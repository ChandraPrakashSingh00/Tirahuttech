import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { HiOutlineCode, HiOutlineDeviceMobile } from "react-icons/hi";
import { BsCart, BsGear } from "react-icons/bs";
import { FaUsers, FaBullhorn } from "react-icons/fa";
import {
  AiOutlineShoppingCart,
  AiOutlineTeam,
  AiOutlineUsergroupAdd,
  AiOutlineAppstore,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [packageOpen, setPackageOpen] = useState(false);

  const [mServices, setMServices] = useState(false);
  const [mProducts, setMProducts] = useState(false);
  const [mPackage, setMPackage] = useState(false);

  const navigate = useNavigate();

  const navRef = useRef(null);
  const mobileRef = useRef(null);

  /* SCROLL SHADOW */
  useEffect(() => {
    const handleScroll = () => setShadow(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* OUTSIDE CLICK */
  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setServicesOpen(false);
        setProductsOpen(false);
        setPackageOpen(false);
      }
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        setOpen(false);
        setMServices(false);
        setMProducts(false);
        setMPackage(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  /* DROPDOWN DATA */
  const services = [
    { name: "Web Development", icon: <HiOutlineCode />, path: "/service/web-development" },
    { name: "App Development", icon: <HiOutlineDeviceMobile />, path: "/service/app-development" },
    { name: "Ecommerce", icon: <BsCart />, path: "/service/ecommerce-development" },
    { name: "Automation", icon: <BsGear />, path: "/service/automation" },
    { name: "Marketing", icon: <FaBullhorn />, path: "/service/marketing" },
    { name: "Custom Software", icon: <FaUsers />, path: "/service/customer-software" },
  ];

/*   const products = [
    { name: "CRM", icon: <AiOutlineTeam />, path: "/products/crm" },
    { name: "HRM", icon: <AiOutlineUsergroupAdd />, path: "/products/hrm" },
    { name: "ERP", icon: <AiOutlineAppstore />, path: "/products/erp" },
    { name: "POS", icon: <AiOutlineShoppingCart />, path: "/products/pos" },
  ]; */

  const packages = [
    { name: "Web Package", path: "/our-package/web" },
    { name: "SEO Package", path: "/our-package/seo" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 bg-white px-6 md:px-12 py-4 flex justify-between items-center border-b transition ${
        shadow ? "shadow-md" : ""
      }`}
    >
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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>

        {/* SERVICES */}
        <li className="relative flex items-center gap-1">
          <button onClick={() => navigate("/service")}>Services</button>
          <FiChevronDown onClick={() => setServicesOpen(!servicesOpen)} />
          {servicesOpen && (
            <ul className="absolute top-full mt-2 w-56 bg-white border rounded-lg shadow">
              {services.map((s) => (
                <Link key={s.name} to={s.path} onClick={() => setServicesOpen(false)}>
                  <li className="px-4 py-2 flex gap-2 hover:bg-gray-100">
                    <span className="text-[#01686d]">{s.icon}</span>{s.name}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </li>

        {/* PRODUCTS */}
        {/* <li className="relative flex items-center gap-1">
          <button onClick={() => navigate("/product")}>Products</button>
          <FiChevronDown onClick={() => setProductsOpen(!productsOpen)} />
          {productsOpen && (
            <ul className="absolute top-full mt-2 w-56 bg-white border rounded-lg shadow">
              {products.map((p) => (
                <Link key={p.name} to={p.path} onClick={() => setProductsOpen(false)}>
                  <li className="px-4 py-2 flex gap-2 hover:bg-gray-100">
                    <span className="text-[#01686d]">{p.icon}</span>{p.name}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </li> */}

        {/* PACKAGE */}
        <li className="relative flex items-center gap-1">
          <button onClick={() => navigate("/our-package")}>Our Package</button>
          <FiChevronDown onClick={() => setPackageOpen(!packageOpen)} />
          {packageOpen && (
            <ul className="absolute top-full mt-2 w-48 bg-white border rounded-lg shadow">
              {packages.map((pkg) => (
                <Link key={pkg.name} to={pkg.path} onClick={() => setPackageOpen(false)}>
                  <li className="px-4 py-2 hover:bg-gray-100">{pkg.name}</li>
                </Link>
              ))}
            </ul>
          )}
        </li>

        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
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

      {/* MOBILE MENU BUTTON */}
      <button className="md:hidden" onClick={() => setOpen(true)}>
        <FiMenu size={26} />
      </button>

      {/* MOBILE MENU */}
      <div
        ref={mobileRef}
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl p-6 z-50 transition ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between mb-6">
          <p className="font-bold text-lg">Menu</p>
          <FiX size={26} onClick={() => setOpen(false)} />
        </div>

        <ul className="flex flex-col gap-4 font-medium">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>Who We Are</Link>

          {/* MOBILE SERVICES */}
          <div>
            <div className="flex justify-between">
              <button onClick={() => navigate("/service")}>Services</button>
              <FiChevronDown onClick={() => setMServices(!mServices)} />
            </div>
            {mServices && (
              <div className="pl-4 mt-2 flex flex-col gap-2">
                {services.map((s) => (
                  <Link key={s.name} to={s.path} onClick={() => setOpen(false)}>
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* MOBILE PRODUCTS */}
          <div>
            <div className="flex justify-between">
              <button onClick={() => navigate("/product")}>Products</button>
              <FiChevronDown onClick={() => setMProducts(!mProducts)} />
            </div>
            {mProducts && (
              <div className="pl-4 mt-2 flex flex-col gap-2">
                {products.map((p) => (
                  <Link key={p.name} to={p.path} onClick={() => setOpen(false)}>
                    {p.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* MOBILE PACKAGE */}
          <div>
            <div className="flex justify-between">
              <button onClick={() => navigate("/our-package")}>Our Package</button>
              <FiChevronDown onClick={() => setMPackage(!mPackage)} />
            </div>
            {mPackage && (
              <div className="pl-4 mt-2 flex flex-col gap-2">
                {packages.map((pkg) => (
                  <Link key={pkg.name} to={pkg.path} onClick={() => setOpen(false)}>
                    {pkg.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/blog" onClick={() => setOpen(false)}>Blog</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </ul>
      </div>

      {open && <div className="fixed inset-0 bg-black/40 z-40" />}
    </nav>
  );
};

export default Navbar;