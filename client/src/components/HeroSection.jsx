import React from "react";
import { ArrowRightCircle } from "lucide-react";

/**
 * HeroSection — Reusable animated hero with rotating image/text headline
 *
 * Props:
 *  @param {Array}    designImages        - Array of { id, image, text, color } for rotating headline
 *  @param {number}   currentImageIndex   - Current index into designImages (managed by parent)
 *  @param {string}   heroImage           - Main right-side hero image src
 *  @param {string}   heroImageAlt        - Alt text for the hero image         (default: "Professional team member")
 *  @param {string}   badgeText           - Text inside the pill badge          (default: "Design & Digital Marketing Agency, India")
 *  @param {string}   subHeading          - Static h2 below the animated h1     (default: "with Aussie Growth Media.")
 *  @param {string}   description         - Paragraph description text
 *  @param {string}   highlightWord       - Word inside description to bold      (default: "digital marketing")
 *  @param {Array}    serviceOptions      - Array of { label, value } for the select dropdown
 *  @param {function} onServiceChange     - onChange handler for the select
 *  @param {function} onCtaClick          - onClick for the CTA button
 *  @param {string}   ctaLabel            - CTA button label                    (default: "Get Started")
 *  @param {string}   accentColor         - Hex accent color                    (default: "#e36a2e")
 *  @param {string}   selectLabel         - Label above the select              (default: "Select a Service to Begin")
 *  @param {string}   selectPlaceholder   - Disabled first option text          (default: "Select a Service")
 */
const HeroSection = ({
  designImages = [],
  currentImageIndex = 0,
  heroImage,
  heroImageAlt = "Professional team member",
  badgeText = "Design & Digital Marketing Agency, India",
  subHeading = "with Aussie Growth Media.",
  description = "Elevate your online presence with our seamless fusion of cutting-edge design and strategic digital marketing solutions.",
  highlightWord = "digital marketing",
  serviceOptions = [
    { label: "Website Design", value: "/webdesign" },
    { label: "ECommerce Websites", value: "/ecommerce" },
    { label: "Service Website", value: "/service-site" },
    { label: "Branding & Logo Design", value: "/branding&logodesign" },
    { label: "Digital Marketing", value: "/digitalmarketing" },
    { label: "Search Engine Optimisation", value: "/seo" },
    { label: "Google Ads Management", value: "/googleads" },
    { label: "Meta Ads Management", value: "/metaads" },
    { label: "Conversion Rate Optimization", value: "/conversionrate" },
    { label: "Managed Hosting", value: "/hosting" },
    { label: "Go High Level CRM", value: "/gohigh" },
    { label: "AI Agents / Automation Development", value: "/ai" },
    { label: "White Label Marketing", value: "/whitelabel" },
    { label: "Lead Generation", value: "/lead" },
  ],
  onServiceChange,
  onCtaClick,
  ctaLabel = "Get Started",
  accentColor = "#e36a2e",
  selectLabel = "Select a Service to Begin",
  selectPlaceholder = "Select a Service",
}) => {
  const currentImage = designImages[currentImageIndex] || {};

  // Split description to bold the highlightWord inline
  const parts = description.split(highlightWord);

  return (
    <section className="relative h-full z-10 overflow-hidden bg-[#fafafa] px-4 sm:px-6 pt-32 pb-16 lg:pt-48 lg:pb-32">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-orange-50/50 to-transparent rounded-[100%] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* ── LEFT: Text Content ── */}
        <div className="order-1 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Pill Badge */}
          <div
            data-aos="slide-right"
            className="inline-flex items-center gap-2 bg-white border border-gray-100 shadow-sm px-4 py-2 rounded-full mb-8 text-xs sm:text-sm font-medium text-gray-600 whitespace-nowrap"
          >
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: accentColor }}
              />
              <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ background: accentColor }}
              />
            </span>
            {badgeText}
          </div>

          {/* Animated Headline — Mobile */}
          <div className="lg:hidden mb-6 w-full flex flex-col items-center">
            <div className="h-48 w-48 mb-6 overflow-hidden rounded-2xl shadow-lg border border-gray-100">
              <img
                key={currentImage.id}
                src={currentImage.image}
                alt={currentImage.text}
                className="w-full h-full object-cover animate-popIn"
              />
            </div>
            <h1
              key={currentImage.text}
              className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${currentImage.color} animate-popIn`}
            >
              {currentImage.text}
            </h1>
          </div>

          {/* Animated Headline — Desktop */}
          <div
            className="hidden lg:flex items-center gap-6 mb-2"
            data-aos="slide-right"
          >
            <div className="h-28 w-28 shrink-0 overflow-hidden rounded-2xl shadow-lg border border-gray-100">
              <img
                key={currentImage.id}
                src={currentImage.image}
                alt={currentImage.text}
                className="w-full h-full object-cover animate-popIn"
              />
            </div>
            <h1
              key={currentImage.text}
              className={`text-6xl font-extrabold tracking-tight leading-none ${currentImage.color} animate-popIn`}
            >
              {currentImage.text}
            </h1>
          </div>

          {/* Static sub-heading */}
          <h2
            data-aos="slide-right"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            {subHeading}
          </h2>

          {/* Description with bolded highlight word */}
          <p
            data-aos="slide-right"
            className="text-gray-500 text-base sm:text-lg lg:text-xl max-w-xl mb-10 leading-relaxed"
          >
            {parts[0]}
            <span className="font-semibold text-gray-800">{highlightWord}</span>
            {parts[1]}
          </p>

          {/* Select + CTA */}
          <div data-aos="slide-up" className="w-full max-w-lg lg:max-w-none">
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 ml-1">
              {selectLabel}
            </label>

            <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white rounded-3xl sm:rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
              <select
                onChange={onServiceChange}
                defaultValue=""
                className="flex-1 bg-transparent border-none focus:ring-0 px-4 py-3 text-gray-700 text-sm sm:text-base outline-none cursor-pointer"
              >
                <option value="" disabled>
                  {selectPlaceholder}
                </option>
                {serviceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>

              <button
                onClick={onCtaClick}
                className="flex items-center justify-center gap-2 text-white px-8 py-3.5 rounded-2xl sm:rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap text-sm sm:text-base"
                style={{ background: accentColor }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "brightness(0.88)";
                  e.currentTarget.style.boxShadow = `0 8px 20px ${accentColor}4D`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {ctaLabel}
                <ArrowRightCircle size={18} className="text-white opacity-90" />
              </button>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Hero Image ── */}
        <div className="order-2 lg:order-2 relative mt-8 lg:mt-0">
          {/* Decorative blob */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-200/40 to-transparent blur-3xl transform scale-110 rounded-full z-0" />

          <img
            src={heroImage}
            data-aos="fade-up"
            alt={heroImageAlt}
            className="relative z-10 w-full max-w-md lg:max-w-lg mx-auto rounded-3xl shadow-2xl border-4 border-white transform transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// ─── USAGE EXAMPLES ───────────────────────────────────────────────────────────
//
// Drop-in replacement (identical to original):
//   <HeroSection
//     designImages={designImages}
//     currentImageIndex={currentImageIndex}
//     heroImage={vansh}
//     onServiceChange={handleChangeSelection}
//     onCtaClick={scrollToContact}
//   />
//
// Custom branding + color:
//   <HeroSection
//     designImages={designImages}
//     currentImageIndex={currentImageIndex}
//     heroImage={teamPhoto}
//     badgeText="Web Agency, Australia"
//     subHeading="with My Agency."
//     description="We build fast websites and powerful digital marketing campaigns."
//     highlightWord="digital marketing"
//     ctaLabel="Book a Call"
//     accentColor="#3b82f6"
//     onServiceChange={handleChangeSelection}
//     onCtaClick={() => navigate("/contact")}
//   />
//
// Custom service options only:
//   <HeroSection
//     designImages={designImages}
//     currentImageIndex={currentImageIndex}
//     heroImage={heroImg}
//     serviceOptions={[
//       { label: "SEO", value: "/seo" },
//       { label: "PPC", value: "/ppc" },
//     ]}
//     onServiceChange={handleChangeSelection}
//     onCtaClick={scrollToContact}
//   />
