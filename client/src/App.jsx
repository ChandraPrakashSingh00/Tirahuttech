import { useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Layout (kept eager — needed on every page)
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";
import WhatsappButton from "./components/ui/WhatsappButton";

// Pages (lazy-loaded so each route only ships the JS it needs)
const Home = lazy(() => import("./pages/Home/Home"));
const Services = lazy(() => import("./pages/Service/Service"));
const About = lazy(() => import("./pages/About/About"));
const OurPackage = lazy(() => import("./pages/Package/OurPackage.jsx"));
const SMOPackage = lazy(() => import("./pages/Package/SMOPackage.jsx"));
const SEOPackage = lazy(() => import("./pages/Package/SEOPackage.jsx"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Dashboard = lazy(() => import("./pages/ADMIN/Dashboard.jsx"));
const Blog = lazy(() => import("./pages/Blog/Blog.jsx"));
const Policy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy.jsx"));
const Products = lazy(() => import("./pages/Product/Product.jsx"));
const Career = lazy(() => import("./pages/Career/Career.jsx"));
const Resources = lazy(() => import("./pages/Resources/Resources.jsx"));

// Service dropdown pages
const AppDevelopment = lazy(() => import("./pages/Service/Services/AppDevelopemnt"));
const WebDevelopment = lazy(() => import("./pages/Service/Services/WebDevelopment"));
const ECommerceDevelopment = lazy(() => import("./pages/Service/Services/EcommerceDevelopment"));
const Marketing = lazy(() => import("./pages/Service/Services/Marketing"));
const CustomerSoftawre = lazy(() => import("./pages/Service/Services/CustomerSoftware"));
const Automation = lazy(() => import("./pages/Service/Services/Automation"));
const HRITRecruitment = lazy(() => import("./pages/Service/Services/Hritrecruitment"));


import { trackPage } from "./api/track.api";

const PageFallback = () => (
  <div className="min-h-[50vh] flex items-center justify-center text-lg">
    Loading...
  </div>
);

const App = () => {
  const location = useLocation();

  useEffect(() => {
    trackPage("Page View");
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <WhatsappButton />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/product" element={<Products />} />
          <Route path="/career" element={<Career />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/service" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-package" element={<OurPackage />} />
          <Route path="/SMOPackage" element={<SMOPackage />} />
          <Route path="/SEOPackage" element={<SEOPackage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-started" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Service dropdown routes */}
          <Route path="/service/app-development" element={<AppDevelopment />} />
          <Route path="/service/web-development" element={<WebDevelopment />} />
          <Route path="/service/ecommerce-development" element={<ECommerceDevelopment />} />
          <Route path="/service/marketing" element={<Marketing />} />
          <Route path="/service/customer-software" element={<CustomerSoftawre />} />
          <Route path="/service/automation" element={<Automation />} />
          <Route path="/service/hr-it-recruitment" element={<HRITRecruitment />} />

          {/* Other routes */}
          <Route path="/policy" element={<Policy />} />
          <Route path="/privacy-policy" element={<Policy />} />
          <Route path="/terms-and-conditions" element={<Policy />} />
          <Route path="/refund-policy" element={<Policy />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};

export default App;