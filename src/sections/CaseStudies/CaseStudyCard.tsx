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
    <div className="relative mx-auto w-full max-w-[850px]">
      {/* LAPTOP / PROJECT IMAGE */}
      <div className="relative overflow-hidden rounded-[22px] border-[3px] border-[#26253a] bg-[#171629] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:rounded-[28px] sm:p-4">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-white">
          <Image
            src={caseStudy.image}
            alt={caseStudy.name}
            fill
            priority={caseStudy.id === 1}
            sizes="(max-width: 768px) 90vw, 850px"
            className="object-cover"
          />
        </div>
      </div>

      {/* BOTTOM LAPTOP EDGE */}
      <div className="mx-auto h-[8px] w-[92%] rounded-b-full bg-[#29283c]" />
      <div className="mx-auto h-[4px] w-[25%] rounded-b-full bg-[#3b3a50]" />
    </div>
  );
}