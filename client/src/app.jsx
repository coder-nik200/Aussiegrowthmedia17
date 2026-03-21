// App.jsxBranding
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet, // <-- 1. Import Outlet
} from "react-router-dom";

// Global Components
import CursorDot from "./components/CursorDot";
import Header from "./components/Header"; // Make sure this path is correct for your Header

// Pages
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

// ── LAYOUT COMPONENT ──────────────────────────────────────────────────
// This wraps every page inside it.
const MainLayout = () => {
  return (
    <div className="relative flex flex-col min-h-screen w-full mx-auto overflow-x-hidden bg-[#fafafa]">
      {/* The Header stays at the top of every page */}
      <Header />

      {/* The Outlet is where your current page (e.g., About, SEO, etc.) gets injected */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Note: If you want your Footer on every page automatically, you can import and add <Footer /> here too! */}
    </div>
  );
};
// ──────────────────────────────────────────────────────────────────────

function AppRouter() {
  return (
    <Router>
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

        {/* Pages WITHOUT the Header (Outside the MainLayout) */}
        {/* Things like Success pages, Login screens, or 404s go here */}
        <Route path="/success-page" element={<FormSubmissionConfirmation />} />

        {/* Catch-all redirect to home if a user types a wrong URL */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
