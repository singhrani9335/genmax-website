"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { ecommerceFaq } from "@/data/ecommerce";

export default function EcommerceFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-8 px-5 sm:px-8 md:grid-cols-2 lg:gap-12 lg:px-12 xl:px-16">
        {/* ================= LEFT IMAGE ================= */}
        <div className="relative w-full">
          <div className="absolute -bottom-3 -left-3 z-0 hidden h-[100px] w-[100px] border-b-4 border-l-4 border-[#F04D02] lg:block" />

          <div className="relative z-10 rounded-[4px] bg-[#17245C]/8 p-2.5 sm:p-3 lg:p-4">
            <Image
              src={ecommerceFaq.image}
              alt={ecommerceFaq.imageAlt}
              width={750}
              height={650}
              priority
              className="h-auto max-h-[560px] w-full object-cover shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
            />
          </div>
        </div>

        {/* ================= RIGHT FAQ ================= */}
        <div className="relative w-full min-w-0 overflow-hidden rounded-[4px] bg-[#17245C] p-5 shadow-[0_20px_50px_rgba(23,36,92,0.20)] sm:p-6 md:p-7 lg:p-8 xl:p-10">
          {/* BACKGROUND GLOW */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-[220px] w-[220px] rounded-full bg-[#F04D02]/15 blur-[70px]" />

          <div className="pointer-events-none absolute -bottom-24 -left-24 h-[220px] w-[220px] rounded-full bg-[#F04D02]/10 blur-[70px]" />

          <div className="relative z-10 min-w-0">
            {/* ================= HEADING ================= */}
            <h2 className="mb-6 text-[25px] font-medium uppercase leading-[1.2] tracking-[-0.3px] text-white sm:mb-7 sm:text-[28px] lg:mb-8 lg:text-[31px] xl:text-[34px]">
              {ecommerceFaq.title}
            </h2>

            {/* ================= FAQ LIST ================= */}
            <div className="w-full space-y-3">
              {ecommerceFaq.faqs.map((faq, index) => {
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
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left sm:px-5 sm:py-4"
                    >
                      <span className="min-w-0 pr-2 text-[13px] font-semibold leading-[1.5] text-white sm:text-[14px] lg:text-[15px]">
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-[29px] w-[29px] shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "bg-[#F04D02] text-white"
                            : "bg-white/10 text-white"
                        }`}
                      >
                        <ChevronDown
                          size={16}
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
                        <div className="border-t border-white/10 px-4 pb-4 pt-3.5 sm:px-5 sm:pb-5">
                          <div className="text-[13px] leading-[1.75] text-white/75 sm:text-[14px]">
                            {faq.answer}
                          </div>
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