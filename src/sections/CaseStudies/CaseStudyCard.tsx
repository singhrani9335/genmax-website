import Image from "next/image";
import Link from "next/link";

import { CaseStudy } from "@/types/caseStudies";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({
  caseStudy,
}: CaseStudyCardProps) {
  const isPriority = caseStudy.id === 1;

  return (
    <div className="relative mx-auto w-full max-w-[850px]">
      {/* ================= SOFT ORANGE GLOW ================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[40px] bg-[#F04D02]/10 opacity-60 blur-[60px]"
      />

      {/* ================= LAPTOP FRAME ================= */}
      <div className="relative overflow-hidden rounded-[14px] border border-white/15 bg-[#111111] p-1.5 shadow-[0_24px_70px_rgba(0,0,0,0.45)] sm:rounded-[20px] sm:p-2 md:rounded-[26px] md:p-3">
        {/* TOP CAMERA DETAIL */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1.5 z-20 h-1 w-1 -translate-x-1/2 rounded-full bg-white/30 sm:top-2"
        />

        {/* ================= SCREEN ================= */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[9px] bg-white sm:rounded-[12px] md:rounded-[15px]">
          <Image
            src={caseStudy.image}
            alt={caseStudy.name}
            fill
            priority={isPriority}
            loading={isPriority ? "eager" : "lazy"}
            sizes="(max-width: 640px) 94vw, (max-width: 768px) 90vw, (max-width: 1280px) 760px, 850px"
            className="object-cover object-center"
          />

          {/* SCREEN OVERLAY */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/[0.04]"
          />

          {/* SUBTLE ORANGE REFLECTION */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-[#F04D02]/10 blur-[45px]"
          />

          {/* SCREEN EDGE */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[9px] ring-1 ring-inset ring-black/10 sm:rounded-[12px] md:rounded-[15px]"
          />

          {/* ================= VERTICAL BUTTONS ================= */}
          <div className="pointer-events-none absolute right-0 top-1/2 z-50 flex -translate-y-1/2 flex-col items-end">
            {/* Portfolio */}
            <Link
              href="/portfolio"
              className="pointer-events-auto relative z-50 flex h-[92px] w-[34px] items-center justify-center rounded-l-[7px] bg-[#F04D02] text-white no-underline"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              <span className="text-[8px] font-semibold uppercase tracking-[1px] text-white">
                Portfolio
              </span>
            </Link>

            {/* Gap */}
            <div className="pointer-events-none h-[5px]" />

            {/* View Details */}
            <Link
              href={caseStudy.detailsUrl}
              className="pointer-events-auto relative z-50 flex h-[92px] w-[34px] items-center justify-center rounded-l-[7px] bg-black text-white no-underline"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              <span className="text-[8px] font-semibold uppercase tracking-[1px] text-white">
                View Details
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* ================= LAPTOP BASE ================= */}
      <div
        aria-hidden="true"
        className="relative mx-auto h-[6px] w-[90%] rounded-b-full bg-gradient-to-b from-[#454545] to-[#202020] shadow-[0_7px_16px_rgba(0,0,0,0.3)] sm:h-[8px] sm:w-[92%]"
      />

      {/* ================= CENTER BASE DETAIL ================= */}
      <div
        aria-hidden="true"
        className="relative mx-auto h-[3px] w-[22%] rounded-b-full bg-white/20 sm:h-[4px] sm:w-[25%]"
      />

      {/* ================= BOTTOM SHADOW ================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none mx-auto mt-2 h-2 w-[62%] rounded-full bg-black/30 blur-md"
      />
    </div>
  );
}