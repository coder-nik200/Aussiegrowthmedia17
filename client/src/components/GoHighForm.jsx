import React, { useState } from "react";
import { ChevronRight, Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DEFAULT_SERVICE_OPTIONS = [
  "Go High Level CRM",
  "CRM Migration",
  "Marketing Automation",
  "White Label Setup",
  "Custom Workflows",
  "Sales Pipeline",
];

const GoHighForm = ({
  formTitle = "Ready to transform your agency?",
  formSubtitle = "Fill out the form below and our integration experts will be in touch.",
  serviceLabel = "How can we help?",
  serviceOptions = DEFAULT_SERVICE_OPTIONS,
  submitLabel = "Submit Request",
  accentColor = "#e36a2e",
  apiUrl = "http://localhost:5000/web/api/enquiry/enquiry-insert",
  successPath = "/success-page",
  className = "",
}) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    callback: "",
    service: "",
  });

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Fixed validation — accepts ANY email, not just @gmail.com
    if (!formData.name || !formData.email) {
      toast.error("Please fill out your name and email.");
      return;
    }

    setIsSubmitting(true);

    try {
      // ✅ Posts to local backend — same endpoint as ContactForm
      await axios.post(apiUrl, formData);

      toast.success("Message sent!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        callback: "",
        service: "",
      });
      navigate(successPath);
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("GoHighForm Submit Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          required
          className="w-full px-5 py-4 rounded-xl bg-zinc-950/50 text-white border border-zinc-800 focus:outline-none placeholder:text-zinc-600 text-sm sm:text-base transition-all duration-300"
          onFocus={(e) => {
            e.target.style.borderColor = accentColor;
            e.target.style.boxShadow = `0 0 0 1px ${accentColor}`;
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "";
            e.target.style.boxShadow = "";
          }}
        />
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-5 py-4 rounded-xl bg-zinc-950/50 text-white border border-zinc-800 focus:outline-none placeholder:text-zinc-600 text-sm sm:text-base transition-all duration-300"
          onFocus={(e) => {
            e.target.style.borderColor = accentColor;
            e.target.style.boxShadow = `0 0 0 1px ${accentColor}`;
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "";
            e.target.style.boxShadow = "";
          }}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl bg-zinc-950/50 text-white border border-zinc-800 focus:outline-none placeholder:text-zinc-600 text-sm sm:text-base transition-all duration-300"
            onFocus={(e) => {
              e.target.style.borderColor = accentColor;
              e.target.style.boxShadow = `0 0 0 1px ${accentColor}`;
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "";
              e.target.style.boxShadow = "";
            }}
          />
          <input
            type="text"
            placeholder="Callback Time"
            name="callback"
            value={formData.callback}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl bg-zinc-950/50 text-white border border-zinc-800 focus:outline-none placeholder:text-zinc-600 text-sm sm:text-base transition-all duration-300"
            onFocus={(e) => {
              e.target.style.borderColor = accentColor;
              e.target.style.boxShadow = `0 0 0 1px ${accentColor}`;
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "";
              e.target.style.boxShadow = "";
            }}
          />
        </div>
      </div>

      {/* Service pill label */}
      <p className="text-xs sm:text-sm font-bold tracking-[0.15em] text-zinc-500 uppercase mb-4">
        {serviceLabel}
      </p>

      {/* Service pills */}
      <div className="flex flex-wrap gap-2.5 mb-8 max-h-48 overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-700 [&::-webkit-scrollbar-thumb]:rounded-full">
        {serviceOptions.map((option, i) => (
          <label
            key={i}
            className="cursor-pointer px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border"
            style={
              formData.service === option
                ? {
                    background: accentColor,
                    borderColor: accentColor,
                    color: "#fff",
                    boxShadow: `0 4px 12px ${accentColor}4D`,
                  }
                : {}
            }
            onMouseEnter={(e) => {
              if (formData.service !== option) {
                e.currentTarget.style.background = "#27272a";
                e.currentTarget.style.color = "#fff";
              }
            }}
            onMouseLeave={(e) => {
              if (formData.service !== option) {
                e.currentTarget.style.background = "";
                e.currentTarget.style.color = "";
              }
            }}
          >
            <input
              type="radio"
              name="service"
              value={option}
              checked={formData.service === option}
              onChange={handleChange}
              className="hidden"
            />
            <span
              style={formData.service !== option ? { color: "#a1a1aa" } : {}}
            >
              {option}
            </span>
          </label>
        ))}
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="group w-full text-white font-semibold text-sm sm:text-base tracking-wide uppercase px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
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
        {isSubmitting ? "Sending..." : submitLabel}
        {isSubmitting ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </button>
    </form>
  );
};

export default GoHighForm;
