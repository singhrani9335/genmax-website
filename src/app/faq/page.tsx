"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { digitalMarketingFaqs } from "@/data/digitalMarketing";
import { ecommerceFaq } from "@/data/ecommerce";
import { mobileAppDevelopmentFaq } from "@/data/mobileAppDevelopment";
import { webDevelopmentFaq } from "@/data/webDevelopment";
import { uiUxDesigningFaq } from "@/data/uiUxDesigning";
import { socialMediaFaq } from "@/data/socialMediaMarketing";
import { reputationManagementFaq } from "@/data/reputationManagement";
import { paidAdsFaq } from "@/data/paidAdsManagement";
import { graphicDesigningFaq } from "@/data/graphicDesigning";
import { googleAdsFaq } from "@/data/googleAds";
import { brandingFaq } from "@/data/branding";

/* =========================================================
   SEO FAQ DATA
========================================================= */

const seoFaqs = [
  {
    question: "How do you track SEO progress and results?",
    answer:
      "We track SEO performance using important metrics such as keyword rankings, organic traffic, search visibility, conversions, backlinks, and user engagement. Regular reports help us measure progress and identify opportunities for improvement.",
  },
  {
    question: "Can SEO help my e-commerce store?",
    answer:
      "Yes. SEO can help e-commerce businesses improve product visibility in search engines, attract highly relevant organic traffic, increase product discovery, and generate more qualified leads and sales over time.",
  },
  {
    question: "How is SEO different from paid ads (PPC)?",
    answer:
      "SEO focuses on improving organic search visibility and generating sustainable traffic without paying for every click. PPC provides immediate visibility through paid advertisements. A combination of SEO and PPC can provide both short-term and long-term growth.",
  },
  {
    question:
      "What is E-commerce SEO, and how is it different from regular SEO?",
    answer:
      "E-commerce SEO focuses specifically on optimizing online stores, product pages, categories, technical structure, and shopping-related search queries. It is designed to improve product visibility and increase qualified organic traffic and sales.",
  },
  {
    question: "What is Local SEO, and why do I need it?",
    answer:
      "Local SEO helps businesses appear in location-based searches and Google Maps results. It is especially useful for businesses that serve customers in specific cities, areas, or regions.",
  },
];

/* =========================================================
   DIGITAL MARKETING FULL WIDTH FAQ DATA
========================================================= */

const digitalMarketingBottomFaqs = [
  {
    question: "Why should I choose a digital marketing agency in Dubai?",
    answer:
      "Choosing a digital marketing agency in Dubai offers several advantages. A local agency understands the cultural nuances, legal regulations, and market dynamics specific to the UAE and the wider region. This knowledge ensures your marketing strategies are optimized for success in the local context. Moreover, a digital agency in Dubai can offer personalized, data-driven strategies that increase brand awareness, drive traffic, and boost conversions. With the UAE's competitive business environment, working with a local agency ensures your brand stands out and reaches the right audience.",
  },
  {
    question: "Which is the best company for digital marketing?",
    answer:
      "The best digital marketing company is one that understands your business goals, target audience, industry, and market. A strong agency should provide transparent strategies, measurable results, experienced professionals, and customized digital marketing solutions that help improve visibility, generate qualified leads, and increase conversions.",
  },
];

/* =========================================================
   CATEGORY NAVIGATION
========================================================= */

const categories = [
  {
    id: "digital-marketing",
    label: "Digital Marketing",
  },
  {
    id: "ecommerce",
    label: "E-Commerce",
  },
  {
    id: "mobile-app-development",
    label: "Mobile App Development",
  },
  {
    id: "seo",
    label: "SEO",
  },
  {
    id: "web-development",
    label: "Web Development",
  },
  {
    id: "ui-ux-designing",
    label: "UI/UX Designing",
  },
  {
    id: "social-media-marketing",
    label: "Social Media Marketing",
  },
  {
    id: "reputation-management",
    label: "Reputation Management",
  },
  {
    id: "paid-ads-management",
    label: "Paid Ads Management",
  },
  {
    id: "graphic-designing",
    label: "Graphic Designing",
  },
  {
    id: "google-ads",
    label: "Google Ads",
  },
  {
    id: "branding",
    label: "Branding",
  },
];

/* =========================================================
   FAQ CARD COMPONENT
========================================================= */

type FAQItem = {
  question: string;
  answer: string;
};

type FAQCardProps = {
  title: string;
  faqs: readonly FAQItem[] | FAQItem[];
};

function FAQCard({ title, faqs }: FAQCardProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="relative w-full min-w-0 overflow-hidden rounded-[4px] bg-[#17245C] p-5 shadow-[0_20px_50px_rgba(23,36,92,0.20)] sm:p-7 lg:p-8 xl:p-10">
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute -right-24 -top-24 h-[260px] w-[260px] rounded-full bg-[#F04D02]/15 blur-[80px]" />

      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[240px] w-[240px] rounded-full bg-[#F04D02]/10 blur-[80px]" />

      <div className="relative z-10 min-w-0">
        {/* ================= HEADING ================= */}

        <h2 className="mb-8 w-full text-[25px] font-medium uppercase leading-[1.2] tracking-[-0.4px] text-white sm:text-[27px] md:text-[28px] lg:text-[30px] xl:text-[33px]">
          {title}
        </h2>

        {/* ================= FAQ LIST ================= */}

        <div className="w-full space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                key={faq.question}
                className={`w-full overflow-hidden rounded-[3px] border transition-all duration-300 ${
                  isOpen
                    ? "border-[#F04D02] bg-transparent"
                    : "border-white/15 bg-white/10"
                }`}
              >
                {/* ================= QUESTION ================= */}

                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:px-5 sm:py-5"
                >
                  <span className="min-w-0 text-[14px] font-semibold leading-[1.5] text-white sm:text-[15px] lg:text-[16px]">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-[#F04D02] text-white"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    <ChevronDown
                      size={17}
                      strokeWidth={2}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {/* ================= ANSWER ================= */}

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/10 px-4 pb-5 pt-4 sm:px-5">
                      <p className="text-[14px] leading-[1.8] text-white/75 sm:text-[15px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN FAQ PAGE
========================================================= */

export default function FAQPage() {
  const [activeCategory, setActiveCategory] =
    useState("digital-marketing");

  const [isCategorySticky, setIsCategorySticky] =
    useState(false);

  /* =======================================================
     CATEGORY STICKY BEHAVIOUR
     SAME AS PORTFOLIO
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      const categoryBar = document.getElementById(
        "faq-category-bar"
      );

      const faqSection = document.getElementById(
        "faq-main-section"
      );

      if (!categoryBar || !faqSection) {
        return;
      }

      const width = window.innerWidth;

      let navbarHeight = 76;

      if (width >= 640) {
        navbarHeight = 86;
      }

      if (width >= 1024) {
        navbarHeight = 100;
      }

      const categoryRect =
        categoryBar.getBoundingClientRect();

      const faqRect =
        faqSection.getBoundingClientRect();

      const reachedNavbar =
        categoryRect.top <= navbarHeight;

      const sectionStillActive =
        faqRect.bottom >
        navbarHeight + categoryRect.height;

      const sectionStarted =
        faqRect.top <= navbarHeight;

      const shouldStick =
        reachedNavbar &&
        sectionStarted &&
        sectionStillActive;

      setIsCategorySticky(shouldStick);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  /* =======================================================
     ACTIVE FAQ DATA
  ======================================================= */

  const activeData = {
    "digital-marketing": {
      title: "Frequently Asked Questions",
      image:
        "/images/digital-marketing/digital-marketing-faq.jpg",
      imageAlt:
        "Frequently Asked Questions About Digital Marketing",
      faqs: digitalMarketingFaqs,
    },

    ecommerce: {
      title: ecommerceFaq.title,
      image: ecommerceFaq.image,
      imageAlt: ecommerceFaq.imageAlt,
      faqs: ecommerceFaq.faqs,
    },

    "mobile-app-development": {
      title: mobileAppDevelopmentFaq.title,
      image: mobileAppDevelopmentFaq.image,
      imageAlt: mobileAppDevelopmentFaq.imageAlt,
      faqs: mobileAppDevelopmentFaq.faqs,
    },

    seo: {
      title: "Frequently Asked Questions",
      image: "/images/seo/seo-faq.jpg",
      imageAlt:
        "Frequently Asked Questions About SEO Services",
      faqs: seoFaqs,
    },

    "web-development": {
      title: webDevelopmentFaq.title,
      image: webDevelopmentFaq.image,
      imageAlt: webDevelopmentFaq.imageAlt,
      faqs: webDevelopmentFaq.faqs,
    },

    "ui-ux-designing": {
      title: uiUxDesigningFaq.title,
      image: uiUxDesigningFaq.image,
      imageAlt: uiUxDesigningFaq.imageAlt,
      faqs: uiUxDesigningFaq.faqs,
    },

    "social-media-marketing": {
      title: socialMediaFaq.title,
      image: socialMediaFaq.image,
      imageAlt: socialMediaFaq.imageAlt,
      faqs: socialMediaFaq.faqs,
    },

    "reputation-management": {
      title: reputationManagementFaq.title,
      image: reputationManagementFaq.image,
      imageAlt: reputationManagementFaq.imageAlt,
      faqs: reputationManagementFaq.faqs,
    },

    "paid-ads-management": {
      title: paidAdsFaq.title,
      image: paidAdsFaq.image,
      imageAlt: paidAdsFaq.imageAlt,
      faqs: paidAdsFaq.faqs,
    },

    "graphic-designing": {
      title: graphicDesigningFaq.title,
      image: graphicDesigningFaq.image,
      imageAlt: graphicDesigningFaq.imageAlt,
      faqs: graphicDesigningFaq.faqs,
    },

    "google-ads": {
      title: googleAdsFaq.title,
      image: googleAdsFaq.image,
      imageAlt: googleAdsFaq.imageAlt,
      faqs: googleAdsFaq.faqs,
    },

    branding: {
      title: brandingFaq.title,
      image: brandingFaq.image,
      imageAlt: brandingFaq.imageAlt,
      faqs: brandingFaq.faqs,
    },
  } as const;

  const currentFAQ =
    activeData[
      activeCategory as keyof typeof activeData
    ];

  /* =======================================================
     CATEGORY CHANGE
  ======================================================= */

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <main className="w-full bg-white">
      {/* =====================================================
          HERO BANNER
      ===================================================== */}

      <section className="relative h-[350px] w-full overflow-hidden md:h-[420px] lg:h-[460px]">
        <Image
          src="/images/faq/faq-banner.jpg"
          alt="Frequently Asked Questions - GenMax IT Solution"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold leading-tight drop-shadow-lg md:text-5xl lg:text-6xl">
              <span className="text-black">
                Frequently Asked{" "}
              </span>

              <span className="bg-gradient-to-r from-[#F04D02] to-[#FE8302] bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* =====================================================
          BREADCRUMB
      ===================================================== */}

      <div className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:px-10">
          <div className="flex flex-wrap items-center gap-3 text-sm font-semibold md:text-base">
            <Link
              href="/"
              className="font-bold text-gray-500 transition-colors hover:text-[#F04D02]"
            >
              Home
            </Link>

            <span className="font-bold text-gray-300">
              &gt;
            </span>

            <span className="font-bold text-[#171717]">
              Frequently Asked Questions
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          STICKY FAQ CATEGORY NAVIGATION
      ===================================================== */}

      <section
        id="faq-main-section"
        className="relative w-full"
      >
        <div
          id="faq-category-bar"
          className={`${
            isCategorySticky
              ? "fixed left-0 right-0 top-[76px] sm:top-[86px] lg:top-[100px]"
              : "relative"
          } z-[9998] w-full border-b border-gray-200 bg-white shadow-[0_6px_20px_rgba(0,0,0,0.06)] transition-all duration-300`}
        >
          <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10 xl:px-16">
            <div className="flex w-full items-center gap-1 overflow-x-auto [scrollbar-width:none] sm:gap-2 [&::-webkit-scrollbar]:hidden">
              {categories.map((category) => {
                const isActive =
                  activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() =>
                      handleCategoryChange(category.id)
                    }
                    aria-pressed={isActive}
                    className={`relative flex shrink-0 items-center justify-center px-4 py-4 text-[13px] font-semibold transition-all duration-300 sm:px-5 sm:text-[14px] ${
                      isActive
                        ? "text-[#F04D02]"
                        : "text-[#171717] hover:text-[#F04D02]"
                    }`}
                  >
                    {category.label}

                    <span
                      className={`absolute bottom-0 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#F04D02] to-[#FE8302] transition-all duration-300 ${
                        isActive
                          ? "w-[70%] opacity-100"
                          : "w-0 opacity-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ===================================================
            SPACE RESERVED WHEN CATEGORY IS FIXED
        =================================================== */}

        {isCategorySticky && (
          <div
            aria-hidden="true"
            className="h-[54px] min-[375px]:h-[58px] sm:h-[66px] lg:h-[72px]"
          />
        )}

        {/* ===================================================
            ACTIVE FAQ SECTION
        =================================================== */}

        <section className="w-full bg-white py-14 sm:py-16 lg:py-20 xl:py-24">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
            {/* ================= TOP FAQ CONTENT ================= */}

            <div className="grid w-full items-center gap-8 md:grid-cols-2 lg:gap-12">
              {/* ================= LEFT IMAGE ================= */}

              <div className="relative">
                <div className="absolute -bottom-3 -left-3 z-0 hidden h-[120px] w-[120px] border-b-4 border-l-4 border-[#F04D02] lg:block" />

                <div className="relative z-10 rounded-[4px] bg-[#17245C]/8 p-3 sm:p-4">
                  <Image
                    src={currentFAQ.image}
                    alt={currentFAQ.imageAlt}
                    width={750}
                    height={650}
                    priority
                    className="h-auto w-full object-cover shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
                  />
                </div>
              </div>

              {/* ================= RIGHT FAQ CARD ================= */}

              <FAQCard
                title={currentFAQ.title}
                faqs={currentFAQ.faqs}
              />
            </div>

            {/* =================================================
                FULL WIDTH FAQ SECTION BELOW
            ================================================= */}

            {activeCategory === "digital-marketing" && (
              <div className="mt-10 w-full lg:mt-14">
                <FAQCard
                  title="Digital Marketing FAQs"
                  faqs={digitalMarketingBottomFaqs}
                />
              </div>
            )}
          </div>
        </section>
      </section>
    </main>
  );
}