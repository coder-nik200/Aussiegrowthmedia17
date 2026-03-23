import React, { useEffect, Suspense } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import axios from "axios";

export const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL ??
    (import.meta.env.DEV
      ? "http://localhost:5000/api"
      : "https://growthflowmedia-esxn.vercel.app/api"),
  withCredentials: false,
  headers: { "Content-Type": "application/json" },
});

import CursorDot from "./components/CursorDot";
import Header from "./components/Header";

const AIAgentsAutomation = React.lazy(() => import("./ai-agents-automation"));
const Branding = React.lazy(() => import("./Branding"));
const ConversionRateOptimization = React.lazy(() => import("./Conversion"));
const DigitalMarketing = React.lazy(() => import("./Digital"));
const EcommerceWebsites = React.lazy(() => import("./ECommerce"));
const GoHighLevelCRM = React.lazy(() => import("./goHigh"));
const GoogleAdsManagement = React.lazy(() => import("./google-ads"));
const GrowthFlowMedia = React.lazy(() => import("./GrowthFlowMedia"));
const LeadGeneration = React.lazy(() => import("./lead-generation"));
const Hosting = React.lazy(() => import("./managed-hosting"));
const MetaAdsManagement = React.lazy(() => import("./meta-ads"));
const ServiceWebsites = React.lazy(() => import("./service-websites"));
const WebDesignDevelopment = React.lazy(() => import("./Web"));
const WhiteLabelMarketing = React.lazy(() => import("./whiteLabel"));
const SEO = React.lazy(() => import("./seo"));
const Contact = React.lazy(() => import("./Contact"));
const FormSubmissionConfirmation = React.lazy(() => import("./SuccessPage"));
const About = React.lazy(() => import("./About"));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
  </div>
);

const MainLayout = () => (
  <div className="relative flex flex-col min-h-screen w-full mx-auto overflow-x-hidden bg-[#fafafa]">
    <Header />
    <main className="flex-grow">
      <Outlet />
    </main>
  </div>
);

export default function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <CursorDot />
      <Suspense fallback={<PageLoader />}>
        <Routes>
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
          <Route
            path="/success-page"
            element={<FormSubmissionConfirmation />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
