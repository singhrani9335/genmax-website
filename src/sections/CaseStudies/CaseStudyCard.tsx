"use client";

import Image from "next/image";
import { CaseStudy } from "@/types/caseStudies";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({
  caseStudy,
}: CaseStudyCardProps) {
  return (
    <div className="relative mx-auto w-full max-w-[850px] px-1 sm:px-0">

      {/* ================= LAPTOP / PROJECT IMAGE ================= */}
      <div className="relative overflow-hidden rounded-[16px] border-[2px] border-[#26253a] bg-[#171629] p-2 shadow-[0_15px_45px_rgba(0,0,0,0.35)] sm:rounded-[22px] sm:border-[3px] sm:p-3 md:rounded-[28px] md:p-4">

        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[6px] bg-white sm:rounded-[8px]">

          <Image
            src={caseStudy.image}
            alt={caseStudy.name}
            fill
            priority={caseStudy.id === 1}
            sizes="(max-width: 640px) 94vw, (max-width: 768px) 90vw, 850px"
            className="object-cover"
          />

        </div>
      </div>

      {/* ================= BOTTOM LAPTOP EDGE ================= */}

      <div className="mx-auto h-[6px] w-[90%] rounded-b-full bg-[#29283c] sm:h-[8px] sm:w-[92%]" />

      <div className="mx-auto h-[3px] w-[22%] rounded-b-full bg-[#3b3a50] sm:h-[4px] sm:w-[25%]" />

    </div>
  );
}