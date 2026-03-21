import React from "react";
import {
  ChevronRight,
  Globe,
  Bot,
  Target,
  Server,
  UserPlus,
  Layers,
} from "lucide-react";

// ─── Default Data ─────────────────────────────────────────────────────────────

const DEFAULT_FILTER_PILLS = [
  { name: "eCommerce Websites", path: "/ecommerce", icon: <Globe size={18} /> },
  {
    name: "Service Websites",
    path: "/service-site",
    icon: <Globe size={18} />,
  },
  { name: "AI Automation", path: "/ai", icon: <Bot size={18} /> },
  { name: "Meta Ads", path: "/metaads", icon: <Target size={18} /> },
  { name: "Google Ads", path: "/googleads", icon: <Target size={18} /> },
  { name: "Managed Hosting", path: "/hosting", icon: <Server size={18} /> },
  { name: "Lead Generation", path: "/lead", icon: <UserPlus size={18} /> },
  { name: "White Label", path: "/whitelabel", icon: <Layers size={18} /> },
  { name: "SEO", path: "/seo", icon: <Globe size={18} /> },
];

const DEFAULT_CARDS = [
  {
    path: "/branding&logodesign",
    title: "Branding & Logo Design",
    description:
      "Captivate the world with one look at your brand and logo. Our graphic design team is all about creating memorable identities.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3"
        />
      </svg>
    ),
  },
  {
    path: "/digitalmarketing",
    title: "Digital Marketing",
    description:
      "Don't just follow the trend, become one. Stand out with our remarkable digital marketing strategies designed for scale.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    path: "/conversionrate",
    title: "Conversion Rate Opt.",
    description:
      "Optimizing conversion rates is vital for reaching potential buyers. Turn your existing traffic into revenue.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    path: "/webdesign",
    title: "Web Design & Dev",
    description:
      "Your website works even when you don't. Build a stunning, high-converting digital storefront with our expert team.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    path: "/hosting",
    title: "Managed Hosting",
    description:
      "Looking for lightning-fast speeds and bulletproof security? We provide comprehensive enterprise-grade hosting.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
  },
  {
    path: "/gohigh",
    title: "GoHighLevel CRM",
    description:
      "Master your sales pipeline. GoHighLevel is an all-in-one CRM and marketing automation platform for scaling businesses.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
];

// ─── ServiceCard ──────────────────────────────────────────────────────────────

const ServiceCard = ({ card, cardCta, accentColor, aosDelay, onCardClick }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] overflow-hidden cursor-pointer"
      onClick={() => onCardClick(card)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon box */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500"
        style={{
          background: hovered ? `${accentColor}1A` : "#f9fafb",
          border: `1px solid ${hovered ? `${accentColor}33` : "#f3f4f6"}`,
        }}
      >
        <span
          className="transition-colors duration-500"
          style={{ color: hovered ? accentColor : "#4b5563" }}
        >
          {card.icon}
        </span>
      </div>

      {/* Title */}
      <h3
        className="text-xl sm:text-2xl font-bold mb-4 transition-colors duration-500"
        style={{ color: hovered ? accentColor : "#111827" }}
      >
        {card.title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 mb-8 text-sm sm:text-base leading-relaxed">
        {card.description}
      </p>

      {/* CTA */}
      <div
        className="mt-auto flex items-center gap-2 text-sm font-semibold transition-colors duration-500"
        style={{ color: hovered ? accentColor : "#111827" }}
      >
        {cardCta}
        <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  );
};

// ─── ServicesSection ──────────────────────────────────────────────────────────

/**
 * ServicesSection — Reusable services grid with filter pills
 *
 * Props:
 *  @param {string}   headingMain     - First part of heading                    (default: "Our Growth ")
 *  @param {string}   headingAccent   - Accent colored word in heading           (default: "Services.")
 *  @param {string}   subheading      - Paragraph below the heading
 *  @param {Array}    filterPills     - Array of { name, path, icon }            (uses DEFAULT_FILTER_PILLS if omitted)
 *  @param {Array}    cards           - Array of { path, title, description, icon } (uses DEFAULT_CARDS if omitted)
 *  @param {string}   cardCta         - CTA link text on each card              (default: "Explore Service")
 *  @param {string}   accentColor     - Hex accent color                        (default: "#e36a2e")
 *  @param {function} onPillClick     - Click handler for pills — receives { name, path }. Defaults to window.location.href
 *  @param {function} onCardClick     - Click handler for cards — receives { title, path }. Defaults to window.location.href
 */
const ServicesSection = ({
  headingMain = "Our Growth ",
  headingAccent = "Services.",
  subheading = "We are a full-service digital marketing agency. Explore our expertise and discover how we can engineer your growth.",
  filterPills = DEFAULT_FILTER_PILLS,
  cards = DEFAULT_CARDS,
  cardCta = "Explore Service",
  accentColor = "#e36a2e",
  onPillClick,
  onCardClick,
}) => {
  const handlePillClick = (pill) => {
    if (onPillClick) return onPillClick(pill);
    window.location.href = pill.path;
  };

  const handleCardClick = (card) => {
    if (onCardClick) return onCardClick(card);
    window.location.href = card.path;
  };

  return (
    <section className="relative bg-[#fafafa] py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-[100px] pointer-events-none"
        style={{ background: `${accentColor}0D` }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <h2
            data-aos="fade-up"
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-800 mb-6"
          >
            {headingMain}
            <span style={{ color: accentColor }}>{headingAccent}</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-lg sm:text-xl text-gray-500 leading-relaxed"
          >
            {subheading}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16 sm:mb-24">
          {filterPills.map((pill, index) => (
            <button
              key={pill.name}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              onClick={() => handlePillClick(pill)}
              className="group flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-600 shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-all duration-300 hover:text-white hover:shadow-md"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = accentColor;
                e.currentTarget.style.background = accentColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.background = "";
                e.currentTarget.style.color = "";
              }}
            >
              <span className="opacity-70 transition-opacity group-hover:opacity-100">
                {pill.icon}
              </span>
              {pill.name}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <ServiceCard
              key={card.title}
              card={card}
              cardCta={cardCta}
              accentColor={accentColor}
              aosDelay={(index + 1) * 100}
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

// ─── USAGE EXAMPLES ───────────────────────────────────────────────────────────
//
// Drop-in replacement (identical to original):
//   <ServicesSection />
//
// Custom heading + accent color:
//   <ServicesSection
//     headingMain="What We "
//     headingAccent="Offer."
//     accentColor="#3b82f6"
//   />
//
// Custom cards:
//   <ServicesSection
//     cards={[
//       {
//         path: "/seo",
//         title: "SEO",
//         description: "Rank higher and get found by the right customers.",
//         icon: <Globe size={24} />,
//       },
//     ]}
//   />
//
// React Router navigation:
//   <ServicesSection
//     onPillClick={(pill) => navigate(pill.path)}
//     onCardClick={(card) => navigate(card.path)}
//   />
//
// Custom filter pills only:
//   <ServicesSection
//     filterPills={[
//       { name: "SEO", path: "/seo", icon: <Globe size={18} /> },
//     ]}
//   />
