import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Luxearound Case Study | GenMax IT Solution",
  description: "Explore the Luxearound case study by GenMax IT Solution.",
};

export default function LuxearoundCaseStudyPage() {
  return (
    <main className="min-h-screen bg-white text-[#111111]">
      {/* BREADCRUMB */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1400px] px-5 py-5 sm:px-8 lg:px-12">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm font-semibold"
          >
            <Link
              href="/"
              className="text-slate-500 transition-colors hover:text-[#F04D02]"
            >
              Home
            </Link>

            <span className="text-[#17245C]">/</span>

            <Link
              href="/case-studies"
              className="text-slate-500 transition-colors hover:text-[#F04D02]"
            >
              Case Studies
            </Link>

            <span className="text-[#17245C]">/</span>

            <span className="font-bold text-[#17245C]">Luxearound</span>
          </nav>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          {/* PAGE HEADING */}
          <h2 className="text-[30px] font-medium leading-none text-[#17245C] sm:text-[34px] lg:text-[38px]">
            Luxearound
          </h2>

          {/* TOP INFORMATION */}
          <div className="mt-14 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
            <div className="max-w-[760px] text-[14px] leading-[1.65] text-[#555] sm:text-[15px] lg:text-[16px]">
              <p>
                <span className="font-bold text-[#222]">Scope:</span>{" "}
                Custom Bespoke Design | Web Development | CMS Admin Panel |
                Social Media Management | Social Media Ads
              </p>

              <p>
                <span className="font-bold text-[#222]">Technology:</span>{" "}
                HTML, CSS, BootStrap, WordPress, WooCommerce
              </p>

              <p>
                <span className="font-bold text-[#222]">Location:</span> UAE
              </p>
            </div>

            {/* PREVIOUS CASE STUDY */}
            <Link
              href="/case-studies/eyelz"
              className="inline-flex items-center gap-3 self-start whitespace-nowrap text-[14px] text-[#555] transition-colors hover:text-[#17245C] sm:text-[15px] lg:mt-1 lg:text-[16px]"
            >
              <ArrowLeft size={20} strokeWidth={1.7} />
              <span>Previous Case Studies</span>
            </Link>
          </div>

          {/* MAIN CONTENT */}
          <div className="mt-14 grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12">
            {/* LEFT CONTENT */}
            <div className="w-full">
              <p className="max-w-[690px] text-justify text-[14px] leading-[1.9] tracking-[0.015em] text-[#555] sm:text-[15px] lg:text-[16px]">
                Luxearound is a UAE-based luxury lifestyle platform that
                required a modern and visually appealing digital presence.
                GenMax IT Solution developed a bespoke website with
                e-commerce functionality and an integrated content management
                system. The project also included social media management and
                social media advertising to strengthen the brand&apos;s online
                presence and reach its target audience.
              </p>

              {/* PROJECT DETAILS */}
              <div className="mt-14 space-y-7">
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/case-studies/svg/project_date.svg"
                    alt="Published Date"
                    width={34}
                    height={34}
                    quality={75}
                    className="h-8 w-8 shrink-0 object-contain"
                  />

                  <p className="text-[14px] tracking-[0.015em] text-[#555] sm:text-[15px] lg:text-[16px]">
                    Published Date: 2022
                  </p>
                </div>

                <a
                  href="https://www.instagram.com/theluxearound/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-[14px] tracking-[0.015em] text-[#555] transition-colors hover:text-[#17245C] sm:text-[15px] lg:text-[16px]"
                >
                  <Image
                    src="/images/case-studies/svg/project_link.svg"
                    alt="Website Link"
                    width={34}
                    height={34}
                    quality={75}
                    className="h-8 w-8 shrink-0 object-contain"
                  />

                  <span>https://www.instagram.com/theluxearound/</span>
                </a>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="w-full">
              <div className="overflow-hidden rounded-[28px] bg-[#17202A] p-3 sm:p-4 lg:p-5">
                <div className="relative w-full overflow-hidden rounded-[18px] bg-white">
                  <Image
                    src="/images/case-studies/luxearound.jpg"
                    alt="Luxearound Website Preview"
                    width={900}
                    height={650}
                    quality={75}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>

              {/* NEXT CASE STUDY */}
              <div className="mt-6 flex justify-center">
                <Link
                  href="/case-studies/taste-of-spain"
                  className="inline-flex items-center gap-2 text-[14px] text-[#555] transition-colors hover:text-[#17245C] sm:text-[15px] lg:text-[16px]"
                >
                  <span>Next Case Studies</span>
                  <ArrowRight size={20} strokeWidth={1.7} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}