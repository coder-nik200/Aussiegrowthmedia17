import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import axios from "axios";

export const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL ||
    "https://growthflowmedia-esxn.vercel.app/web/api",

  withCredentials: false,

  headers: {
    "Content-Type": "application/json",
  },
});

// ======================================================================
// 2. GLOBAL COMPONENTS & HELPERS
// ======================================================================
import CursorDot from "./components/CursorDot";
import Header from "./components/Header";

// Scroll Restoration: Forces the page to the top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// ======================================================================
// 3. PAGES
// ======================================================================
import AIAgentsAutomation from "./ai-agents-automation";
import Branding from "./Branding";
import ConversionRateOptimization from "./Conversion";
import DigitalMarketing from "./Digital";
import EcommerceWebsites from "./ECommerce";
import GoHighLevelCRM from "./goHigh";
import GoogleAdsManagement from "./google-ads";
import GrowthFlowMedia from "./GrowthFlowMedia";
import LeadGeneration from "./lead-generation";
import Hosting from "./managed-hosting";
import MetaAdsManagement from "./meta-ads";
import ServiceWebsites from "./service-websites";
import WebDesignDevelopment from "./Web";
import WhiteLabelMarketing from "./whiteLabel";
import SEO from "./seo";
import Contact from "./Contact";
import FormSubmissionConfirmation from "./SuccessPage";
import About from "./About";

// ======================================================================
// 4. LAYOUTS
// ======================================================================
const MainLayout = () => {
  return (
    <div className="relative flex flex-col min-h-screen w-full mx-auto overflow-x-hidden bg-[#fafafa]">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      {/* <Footer /> goes here later! */}
    </div>
  );
};

// ======================================================================
// 5. MAIN ROUTER
// ======================================================================
export default function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <CursorDot />

      <Routes>
        {/* Pages WITH the Header (Wrapped in MainLayout) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<GrowthFlowMedia />} />
          <Route path="/about" element={<About />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/gohigh" element={<GoHighLevelCRM />} />
          <Route path="/digitalmarketing" element={<DigitalMarketing />} />
          <Route path="/webdesign" element={<WebDesignDevelopment />} />
          <Route
            path="/conversionrate"
            element={<ConversionRateOptimization />}
          />
          <Route path="/branding&logodesign" element={<Branding />} />
          <Route path="/ecommerce" element={<EcommerceWebsites />} />
          <Route path="/metaads" element={<MetaAdsManagement />} />
          <Route path="/googleads" element={<GoogleAdsManagement />} />
          <Route path="/ai" element={<AIAgentsAutomation />} />
          <Route path="/lead" element={<LeadGeneration />} />
          <Route path="/service-site" element={<ServiceWebsites />} />
          <Route path="/whitelabel" element={<WhiteLabelMarketing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/seo" element={<SEO />} />
        </Route>

        {/* Pages WITHOUT the Header */}
        <Route path="/success-page" element={<FormSubmissionConfirmation />} />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
