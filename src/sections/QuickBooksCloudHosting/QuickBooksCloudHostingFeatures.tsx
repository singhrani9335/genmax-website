import {
  Clock3,
  ShieldCheck,
  Users,
  CircleDollarSign,
  Headphones,
  MonitorSmartphone,
  DatabaseBackup,
} from "lucide-react";

import { quickBooksCloudHostingFeatures } from "@/data/quickBooksCloudHosting";

const featureIcons = [
  Clock3,
  ShieldCheck,
  Users,
  CircleDollarSign,
  Headphones,
  MonitorSmartphone,
  DatabaseBackup,
];

export default function QuickBooksCloudHostingFeatures() {
  return (
    <section className="w-full bg-[#F8F9FB] py-10 sm:py-12 lg:py-16 xl:py-20">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* ================= SECTION HEADING ================= */}
        <div className="mx-auto max-w-[850px] text-center">
          <h2 className="text-[27px] font-medium uppercase leading-[1.18] tracking-[0.4px] text-[#17245C] sm:text-[31px] md:text-[35px] lg:text-[39px] xl:text-[41px]">
            {quickBooksCloudHostingFeatures.title}
          </h2>
        </div>

        {/* ================= FEATURES GRID ================= */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:mt-14">
          {quickBooksCloudHostingFeatures.items.map((feature, index) => {
            const Icon = featureIcons[index] || ShieldCheck;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-[4px] border border-[#E5E7EB] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F04D02]/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:p-7 lg:p-8"
              >
                {/* ================= TOP ACCENT ================= */}
                <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#F04D02] transition-all duration-300 group-hover:w-full" />

                {/* ================= ICON ================= */}
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#F04D02]/10 transition-all duration-300 group-hover:bg-[#F04D02]">
                  <Icon
                    className="h-[22px] w-[22px] text-[#F04D02] transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.8}
                  />
                </div>

                {/* ================= TITLE ================= */}
                <h3 className="mt-5 text-[18px] font-semibold leading-[1.35] text-[#17245C] sm:text-[19px]">
                  {feature.title}
                </h3>

                {/* ================= DESCRIPTION ================= */}
                <p className="mt-3 text-[14px] leading-[1.8] text-[#56606B] sm:text-[15px]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}