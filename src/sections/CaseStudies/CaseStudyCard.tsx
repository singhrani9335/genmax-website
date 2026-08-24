import Image from "next/image";
import { CaseStudy } from "@/types/caseStudies";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({
  caseStudy,
}: CaseStudyCardProps) {
  const isPriority = caseStudy.id === 1;

  return (
    <div className="group relative mx-auto w-full max-w-[850px]">
      {/* ================= SOFT ORANGE GLOW ================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[40px] bg-[#F04D02]/10 opacity-60 blur-[60px]"
      />

      {/* ================= LAPTOP FRAME ================= */}
      <div className="relative overflow-hidden rounded-[14px] border border-white/15 bg-[#111111] p-1.5 shadow-[0_24px_70px_rgba(0,0,0,0.45)] transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:border-white/25 sm:rounded-[20px] sm:p-2 md:rounded-[26px] md:p-3">
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
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />

          {/* SCREEN OVERLAY */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/[0.04]"
          />

          {/* SUBTLE ORANGE REFLECTION */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-[#F04D02]/10 blur-[45px] transition-opacity duration-500 group-hover:opacity-100"
          />

          {/* SCREEN EDGE */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[9px] ring-1 ring-inset ring-black/10 sm:rounded-[12px] md:rounded-[15px]"
          />
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
        className="pointer-events-none mx-auto mt-2 h-2 w-[62%] rounded-full bg-black/30 blur-md transition-all duration-500 group-hover:w-[68%]"
      />
    </div>
  );
}