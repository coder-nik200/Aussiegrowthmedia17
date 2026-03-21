import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DEFAULT_SERVICE_OPTIONS = [
  "Digital Marketing",
  "SEO Optimization",
  "PPC Campaigns",
  "Social Media",
  "Web Design",
  "Conversion Optimization",
];

/**
 * MarketingAuditForm — Reusable dark pill-style enquiry form
 *
 * Props:
 *  @param {string}   formTitle       - Main heading        (default: "Get Your Free Marketing Audit")
 *  @param {string}   formSubtitle    - Subtext below heading
 *  @param {string}   serviceLabel    - Label above pills   (default: "How can we help?")
 *  @param {string[]} serviceOptions  - Pill options array  (uses DEFAULT_SERVICE_OPTIONS if omitted)
 *  @param {string}   submitLabel     - Button text         (default: "Submit Request")
 *  @param {string}   accentColor     - Hex accent colour   (default: "#e36a2e")
 *  @param {string}   apiUrl          - POST endpoint URL
 *  @param {string}   successPath     - Redirect after success (default: "/success-page")
 *  @param {string}   className       - Extra classes on the outer <form>
 */
const MarketingAuditForm = ({
  formTitle = "Get Your Free Marketing Audit",
  formSubtitle = "Fill out the form below and our team will be in touch shortly.",
  serviceLabel = "How can we help?",
  serviceOptions = DEFAULT_SERVICE_OPTIONS,
  submitLabel = "Submit Request",
  accentColor = "#e36a2e",
  apiUrl = "https://growthflowmedia-esxn.vercel.app/web/api/enquiry/enquiry-insert",
  successPath = "/success-page",
  className = "",
}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    callback: "",
    service: "",
  });

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.endsWith("@gmail.com")) {
      toast.error("Incorrect email!");
      return;
    }
    axios
      .post(apiUrl, formData)
      .then(() => {
        toast.success("Message sent!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          callback: "",
          service: "",
        });
        navigate(successPath);
      })
      .catch(() => toast.error("Failed to send message."));
  };

  const focusStyle = {
    borderColor: accentColor,
    boxShadow: `0 0 0 1px ${accentColor}`,
  };
  const blurStyle = { borderColor: "", boxShadow: "" };
  const inputClass =
    "w-full px-5 py-4 rounded-xl bg-zinc-950/50 text-white border border-zinc-800 focus:outline-none placeholder:text-zinc-600 text-sm sm:text-base transition-all duration-300";

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative bg-zinc-900/80 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-zinc-800 shadow-[0_8px_30px_rgb(0,0,0,0.2)] ${className}`}
    >
      {/* Heading */}
      <div className="mb-8 pb-7 border-b border-zinc-800/80">
        <h3 className="text-2xl font-bold text-white tracking-tight">
          {formTitle}
        </h3>
        <p className="text-zinc-400 text-sm mt-2">{formSubtitle}</p>
      </div>

      {/* Inputs */}
      <div className="space-y-4 mb-8">
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={inputClass}
          onFocus={(e) => Object.assign(e.target.style, focusStyle)}
          onBlur={(e) => Object.assign(e.target.style, blurStyle)}
        />
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
          onFocus={(e) => Object.assign(e.target.style, focusStyle)}
          onBlur={(e) => Object.assign(e.target.style, blurStyle)}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
            onFocus={(e) => Object.assign(e.target.style, focusStyle)}
            onBlur={(e) => Object.assign(e.target.style, blurStyle)}
          />
          <input
            type="text"
            placeholder="Callback Time"
            name="callback"
            value={formData.callback}
            onChange={handleChange}
            className={inputClass}
            onFocus={(e) => Object.assign(e.target.style, focusStyle)}
            onBlur={(e) => Object.assign(e.target.style, blurStyle)}
          />
        </div>
      </div>

      {/* Service label */}
      <p className="text-xs sm:text-sm font-bold tracking-[0.15em] text-zinc-500 uppercase mb-4">
        {serviceLabel}
      </p>

      {/* Service pills */}
      <div className="flex flex-wrap gap-2.5 mb-8 max-h-48 overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-700 [&::-webkit-scrollbar-thumb]:rounded-full">
        {serviceOptions.map((option, i) => {
          const active = formData.service === option;
          return (
            <label
              key={i}
              className="cursor-pointer px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border"
              style={
                active
                  ? {
                      background: accentColor,
                      borderColor: accentColor,
                      color: "#fff",
                      boxShadow: `0 4px 12px ${accentColor}4D`,
                    }
                  : {
                      background: "rgba(9,9,11,0.5)",
                      borderColor: "#3f3f46",
                      color: "#a1a1aa",
                    }
              }
              onMouseEnter={(e) => {
                if (!active) {
                  e.currentTarget.style.background = "#27272a";
                  e.currentTarget.style.color = "#fff";
                }
              }}
              onMouseLeave={(e) => {
                if (!active) {
                  e.currentTarget.style.background = "rgba(9,9,11,0.5)";
                  e.currentTarget.style.color = "#a1a1aa";
                }
              }}
            >
              <input
                type="radio"
                name="service"
                value={option}
                checked={active}
                onChange={handleChange}
                className="hidden"
              />
              {option}
            </label>
          );
        })}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="group w-full text-white font-semibold text-sm sm:text-base tracking-wide uppercase px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-3"
        style={{
          background: accentColor,
          boxShadow: `0 8px 20px ${accentColor}4D`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.filter = "brightness(0.88)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter = "";
        }}
      >
        {submitLabel}
        <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
};

export default MarketingAuditForm;

// ─── USAGE EXAMPLES ───────────────────────────────────────────────────────────
//
// Basic (all defaults — identical to original):
//   <MarketingAuditForm />
//
// Custom title + services:
//   <MarketingAuditForm
//     formTitle="Claim Your Free SEO Audit"
//     formSubtitle="We'll review your site and report back within 24 hours."
//     serviceOptions={["SEO", "Google Ads", "Meta Ads", "Content"]}
//     submitLabel="Claim Free Audit"
//   />
//
// Custom accent color:
//   <MarketingAuditForm accentColor="#3b82f6" />
//
// Custom API + redirect:
//   <MarketingAuditForm
//     apiUrl="https://my-api.com/contact"
//     successPath="/thank-you"
//   />
//
// Constrained width:
//   <MarketingAuditForm className="max-w-lg mx-auto" />
