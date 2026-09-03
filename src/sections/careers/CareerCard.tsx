"use client";

import {
  BriefcaseBusiness,
  ChevronDown,
  MapPin,
} from "lucide-react";

import type { Career } from "@/data/careers";

type CareerCardProps = {
  career: Career;
  isOpen: boolean;
  onClick: () => void;
};

export default function CareerCard({
  career,
  isOpen,
  onClick,
}: CareerCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      className={`group w-full rounded-none border-2 border-[#6B6B6B] text-left transition-all duration-300 ${
        isOpen
          ? "bg-[#17245C] shadow-[0_20px_60px_rgba(23,36,92,0.16)]"
          : "bg-white hover:border-[#6B6B6B] hover:bg-[#F1F5FC] hover:shadow-[0_15px_45px_rgba(23,36,92,0.10)]"
      }`}
    >
      <div className="flex items-center gap-4 p-4 sm:gap-5 sm:p-5">
        {/* Job Icon */}
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
            isOpen
              ? "bg-[#F04D02] text-white"
              : "bg-orange-50 text-[#F04D02] group-hover:bg-[#F04D02] group-hover:text-white"
          }`}
        >
          <BriefcaseBusiness size={22} />
        </div>

        {/* Job Information */}
        <div className="min-w-0 flex-1">
          <h3
            className={`text-base font-bold transition-colors duration-300 sm:text-lg ${
              isOpen
                ? "text-white"
                : "text-[#17245C] group-hover:text-[#F04D02]"
            }`}
          >
            {career.title}
          </h3>

          <div
            className={`mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs transition-colors duration-300 sm:gap-x-4 sm:text-sm ${
              isOpen ? "text-white/70" : "text-slate-500"
            }`}
          >
            <span>{career.experience}</span>

            <span className="hidden sm:inline">•</span>

            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} />
              {career.location}
            </span>

            <span className="hidden sm:inline">•</span>

            <span>{career.jobType}</span>
          </div>
        </div>

        {/* Arrow */}
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "rotate-180 bg-[#F04D02] text-white"
              : "bg-slate-100 text-[#17245C] group-hover:bg-[#F04D02] group-hover:text-white"
          }`}
        >
          <ChevronDown size={20} />
        </div>
      </div>
    </button>
  );
}