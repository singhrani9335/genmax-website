"use client";

import { useEffect, useState } from "react";

import { seoProcess } from "@/data/seo";

export default function SeoProcess() {
  const sliderItems = [
    ...seoProcess.steps,
    seoProcess.steps[0],
    seoProcess.steps[1],
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentSlide === seoProcess.steps.length) {
      const timer = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentSlide(0);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setTransitionEnabled(true);
          });
        });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [currentSlide]);

  const activeDot = currentSlide % seoProcess.steps.length;

  return (
    <section className="w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">
        {/* HEADING */}
        <div className="mb-8 text-center sm:mb-10 lg:mb-12">
          <h2 className="text-[30px] font-normal text-[#1D1D1D] sm:text-[36px] lg:text-[40px]">
            {seoProcess.title}
          </h2>
        </div>

        {/* SLIDER */}
        <div className="relative overflow-hidden py-12">
          <div
            className="flex gap-5 lg:gap-6"
            style={{
              transform: `translate3d(calc(-${currentSlide} * (50% + 12px)), 0, 0)`,

              transition: transitionEnabled
                ? "transform 1000ms cubic-bezier(0.22, 1, 0.36, 1)"
                : "none",

              willChange: "transform",
            }}
          >
            {sliderItems.map((step, index) => (
              <div
                key={`${step.number}-${index}`}
                className="w-full shrink-0 lg:w-[calc(50%-12px)]"
              >
                <ProcessCard step={step} />
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {seoProcess.steps.map((step, index) => (
            <button
              key={step.number}
              type="button"
              aria-label={`Go to ${step.title}`}
              onClick={() => {
                setTransitionEnabled(true);
                setCurrentSlide(index);
              }}
              className={`
                rounded-full
                transition-all
                duration-300
                ${
                  activeDot === index
                    ? "h-[10px] w-[26px] bg-[#F04D02]"
                    : "h-[10px] w-[10px] bg-[#D8D8D8] hover:bg-[#FE8302]/60"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   PROCESS CARD
===================================================== */

function ProcessCard({
  step,
}: {
  step: {
    number: string;
    title: string;
    description: string;
  };
}) {
  return (
    <div className="relative min-h-[330px] overflow-visible rounded-[22px] border border-[#F04D02] bg-white px-6 pb-9 pt-[58px] lg:min-h-[340px] lg:px-7">
      {/* TOP ICON */}
      <div className="absolute left-1/2 top-0 z-20 flex h-[78px] w-[78px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[4px] border-white bg-[#F04D02] shadow-[0_5px_16px_rgba(240,77,2,0.20)]">
        <ProcessIcon />
      </div>

      {/* BACKGROUND NUMBER */}
      <span className="absolute right-5 top-5 text-[42px] font-semibold leading-none text-[#F04D02]/10">
        {step.number}
      </span>

      {/* TITLE */}
      <h3 className="relative pr-10 text-[21px] font-normal leading-[1.3] text-[#1D1D1D] lg:text-[23px]">
        {step.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="relative mt-4 text-[13px] leading-[1.8] text-[#56606B] lg:text-[14px]">
        {step.description}
      </p>

      {/* BOTTOM LINE */}
      <div className="absolute bottom-0 left-0 right-[48px] h-[1px] bg-[#F04D02]" />

      {/* BOTTOM NUMBER */}
      <div className="absolute bottom-0 right-[22px] z-20 flex h-[52px] w-[52px] translate-y-1/2 items-center justify-center rounded-full border-[4px] border-white bg-[#F04D02] text-[14px] font-medium text-white">
        {step.number}
      </div>
    </div>
  );
}

/* =====================================================
   ICON
===================================================== */

function ProcessIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="17"
        cy="18"
        r="6"
        stroke="white"
        strokeWidth="2"
      />

      <path
        d="M8 42V32C8 28.7 10.7 26 14 26H20C23.3 26 26 28.7 26 32V42"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <circle
        cx="47"
        cy="18"
        r="6"
        stroke="white"
        strokeWidth="2"
      />

      <path
        d="M38 42V32C38 28.7 40.7 26 44 26H50C53.3 26 56 28.7 56 32V42"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <circle
        cx="32"
        cy="27"
        r="6"
        stroke="white"
        strokeWidth="2"
      />

      <path
        d="M23 51V41C23 37.7 25.7 35 29 35H35C38.3 35 41 37.7 41 41V51"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}