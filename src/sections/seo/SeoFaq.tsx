"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const seoFaqs = [
  {
    question: "How do you track SEO progress and results?",
    answer:
      "We measure SEO success through a mix of analytics-based findings and ROI-focused outcomes. We track how your keywords rank and how much organic traffic your website gets. We also monitor important performance indicators and provide regular reports so you can clearly understand how SEO is helping your business grow.",
  },
  {
    question: "Can SEO help my e-commerce store?",
    answer:
      "Yes. E-commerce SEO can improve product visibility in search results, attract qualified visitors, and increase opportunities for conversions. We optimise product pages, categories, content, technical elements, and other important areas of your online store to support sustainable organic growth.",
  },
  {
    question: "How is SEO different from paid ads (PPC)?",
    answer:
      "SEO focuses on improving your organic visibility in search engine results, while PPC uses paid advertising to generate immediate visibility. SEO is generally focused on building sustainable long-term traffic and authority, whereas PPC can provide faster results while the advertising budget is active. A combination of both can support a strong digital marketing strategy.",
  },
  {
    question:
      "What is E-commerce SEO, and how is it different from regular SEO?",
    answer:
      "E-commerce SEO is specifically designed for online stores and focuses on improving the visibility of products, categories, and transactional pages. It includes product keyword research, product page optimisation, category optimisation, technical SEO, internal linking, and conversion-focused content. Regular SEO can cover a wider range of websites and business objectives.",
  },
  {
    question: "What is Local SEO, and why do I need it?",
    answer:
      "Local SEO helps businesses become more visible when customers search for products or services in a specific location. It can improve your presence in local search results, help customers discover your business, and support calls, enquiries, visits, and other local conversions. It is particularly valuable for businesses that serve customers within specific cities or regions.",
  },
];

export default function SeoFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20 xl:py-24">
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-8 px-5 sm:px-8 md:grid-cols-2 lg:gap-12 lg:px-12 xl:px-16">
        {/* ================= LEFT IMAGE ================= */}
        <div className="relative">
          {/* Decorative Corner */}
          <div className="absolute -bottom-3 -left-3 z-0 hidden h-[120px] w-[120px] border-b-4 border-l-4 border-[#F04D02] lg:block" />

          <div className="relative z-10 rounded-[4px] bg-[#17245C]/8 p-3 sm:p-4">
            <Image
              src="/images/seo/seo-faq.jpg"
              alt="Frequently Asked Questions About SEO Services"
              width={750}
              height={650}
              className="h-auto w-full object-cover shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
            />
          </div>
        </div>

        {/* ================= RIGHT FAQ CARD ================= */}
        <div className="relative w-full min-w-0 overflow-hidden rounded-[4px] bg-[#17245C] p-5 shadow-[0_20px_50px_rgba(23,36,92,0.20)] sm:p-7 lg:p-8 xl:p-10">
          {/* Background Glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-[260px] w-[260px] rounded-full bg-[#F04D02]/15 blur-[80px]" />

          <div className="pointer-events-none absolute -bottom-24 -left-24 h-[240px] w-[240px] rounded-full bg-[#F04D02]/10 blur-[80px]" />

          <div className="relative z-10 min-w-0">
            {/* ================= HEADING ================= */}
            <h2 className="mb-8 w-full text-[25px] font-medium uppercase leading-[1.2] tracking-[-0.4px] text-white sm:text-[27px] md:text-[28px] lg:text-[30px] xl:text-[33px]">
              Frequently Asked Questions
            </h2>

            {/* ================= FAQ LIST ================= */}
            <div className="w-full space-y-3">
              {seoFaqs.map((faq, index) => {
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
                    {/* QUESTION */}
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:px-5 sm:py-5"
                    >
                      <span className="min-w-0 text-[14px] font-semibold leading-[1.5] text-white sm:text-[15px] lg:text-[16px]">
                        {faq.question}
                      </span>

                      {/* ARROW */}
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

                    {/* ANSWER */}
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
      </div>
    </section>
  );
}