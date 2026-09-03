import {
  BriefcaseBusiness,
  CalendarDays,
  Clock3,
  IndianRupee,
  Mail,
  MapPin,
  UserRound,
} from "lucide-react";

import type { Career } from "@/data/careers";

type CareerDetailsProps = {
  career: Career;
};

export default function CareerDetails({
  career,
}: CareerDetailsProps) {
  return (
    <div className="overflow-hidden rounded-b-2xl border-x border-b border-[#737373] bg-[#F5F8FF] shadow-[0_15px_45px_rgba(23,36,92,0.08)]">
      {/* Top Accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#F04D02] to-[#FE8302]" />

      <div className="p-5 sm:p-7 lg:p-8">
        {/* =====================================================
            JOB META INFORMATION
        ===================================================== */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <MetaItem
            icon={<CalendarDays size={17} />}
            label="Posted Date"
            value={career.date}
          />

          <MetaItem
            icon={<Clock3 size={17} />}
            label="Experience"
            value={career.experience}
          />

          <MetaItem
            icon={<MapPin size={17} />}
            label="Location"
            value={career.location}
          />

          <MetaItem
            icon={<BriefcaseBusiness size={17} />}
            label="Department"
            value={career.department}
          />

          {career.reportingTo && (
            <MetaItem
              icon={<UserRound size={17} />}
              label="Reporting To"
              value={career.reportingTo}
            />
          )}

          {career.budget && (
            <MetaItem
              icon={<IndianRupee size={17} />}
              label="Budget"
              value={career.budget}
            />
          )}

          <MetaItem
            icon={<BriefcaseBusiness size={17} />}
            label="Job Type"
            value={career.jobType}
          />

          <MetaItem
            icon={<MapPin size={17} />}
            label="Work Location"
            value={career.workLocation}
          />
        </div>

        {/* =====================================================
            POSITION OVERVIEW
        ===================================================== */}
        <ContentSection title="Position Overview">
          <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
            {career.overview}
          </p>
        </ContentSection>

        {/* =====================================================
            KEY RESPONSIBILITIES
        ===================================================== */}
        <ContentSection title="Key Responsibilities">
          <ul className="space-y-3">
            {career.responsibilities.map((item, index) => (
              <li
                key={`${career.id}-responsibility-${index}`}
                className="flex gap-3 text-sm leading-6 text-slate-600 sm:text-[15px]"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#F04D02]" />

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </ContentSection>

        {/* =====================================================
            REQUIREMENTS
        ===================================================== */}
        <ContentSection title="Requirements">
          <ul className="space-y-3">
            {career.requirements.map((item, index) => (
              <li
                key={`${career.id}-requirement-${index}`}
                className="flex gap-3 text-sm leading-6 text-slate-600 sm:text-[15px]"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#F04D02]" />

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </ContentSection>

        {/* =====================================================
            APPLICATION CTA
        ===================================================== */}
        <div className="mt-8 overflow-hidden rounded-2xl bg-[#17245C] p-5 sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="text-lg font-bold text-white">
                Interested in this position?
              </h4>

              <p className="mt-1 max-w-xl text-sm leading-6 text-white/65">
                Send your resume to our team and mention the position
                you are applying for.
              </p>
            </div>

            <a
              href={`mailto:genmaxitsolution@gmail.com?subject=${encodeURIComponent(
                `Application for ${career.title}`
              )}`}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F04D02] to-[#FE8302] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-orange-500/30"
            >
              <Mail size={17} />
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   META ITEM
============================================================ */

function MetaItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
      <div className="flex items-center gap-2 text-[#F04D02]">
        {icon}

        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {label}
        </span>
      </div>

      <p className="mt-2 text-sm font-semibold leading-5 text-[#17245C]">
        {value}
      </p>
    </div>
  );
}

/* ============================================================
   CONTENT SECTION
============================================================ */

function ContentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-9">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-6 w-1 rounded-full bg-[#F04D02]" />

        <h4 className="text-xl font-bold text-[#17245C]">
          {title}
        </h4>
      </div>

      {children}
    </section>
  );
}