import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Components Pages
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ui/ScrollToTop"

// Pages
import Home from "./pages/Home/Home";
import Products from "./pages/Product/Product";
import Services from "./pages/Service/Service";
import About from "./pages/About/About";
import OurPackage from "./pages/Package/OurPackage.jsx";
import Contact from "./pages/Contact/Contact";

// Service DropDown Pages
import AppDevelopment from "./pages/Service/Services/AppDevelopemnt";
import WebDevelopment from "./pages/Service/Services/WebDevelopment";
import ECommerceDevelopment from "./pages/Service/Services/EcommerceDevelopment";
import Marketing from "./pages/Service/Services/Marketing";
import CustomerSoftawre from "./pages/Service/Services/CustomerSoftware";
import Automation from "./pages/Service/Services/Automation";
import { trackPage } from "./Config/Track.js";
import Dashboard from "./pages/ADMIN/Dashboard.jsx";
import Blog from "./pages/Blog/Blog.jsx";

const App = () => {



  const location = useLocation();

  useEffect(() => {
    trackPage("Page View");
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        cd
        {/*         <Route path="/product" element={<Products />} />
 */}        <Route path="/service" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-package" element={<OurPackage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Service DropDown Routes */}
        <Route path="/service/app-development" element={<AppDevelopment />} />
        <Route path="/service/web-development" element={<WebDevelopment />} />
        <Route path="/service/ecommerce-development" element={<ECommerceDevelopment />} />
        <Route path="/service/marketing" element={<Marketing />} />
        <Route path="/service/customer-software" element={<CustomerSoftawre />} />
        <Route path="/service/automation" element={<Automation />} />

      </Routes>

      <Footer />
    </>
  );
};

export default App;