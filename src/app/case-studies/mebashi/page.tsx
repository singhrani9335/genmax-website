import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Mebashi Case Study | GenMax IT Solution",
  description: "Explore the Mebashi case study by GenMax IT Solution.",
};

export default function MebashiCaseStudyPage() {
  return (
    <main className="min-h-screen bg-white text-[#111111]">
      {/* HERO BANNER */}
      <section className="relative h-[280px] w-full overflow-hidden bg-white sm:h-[340px] lg:h-[400px]">
        <Image
          src="/images/case-studies/mebashi-banner.jpg"
          alt="Mebashi Case Study"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-contain object-center"
        />
      </section>

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

            <span className="font-bold text-[#17245C]">Mebashi</span>
          </nav>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          {/* PAGE HEADING */}
          <h2 className="text-[30px] font-medium leading-none text-[#17245C] sm:text-[34px] lg:text-[38px]">
            Mebashi
          </h2>

          {/* LOGO */}
          <div className="relative mt-7 h-[65px] w-[180px]">
            <Image
              src="/images/case-studies/mebashi.png"
              alt="Mebashi Logo"
              fill
              quality={75}
              sizes="180px"
              className="object-contain object-left"
            />
          </div>

          {/* TOP INFORMATION */}
          <div className="mt-14 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
            <div className="max-w-[720px] text-[14px] leading-[1.65] text-[#555] sm:text-[15px] lg:text-[16px]">
              <p>
                <span className="font-bold text-[#222]">Scope:</span>{" "}
                Custom Bespoke Design | Web Development | CMS Admin Panel
                <br />
                | Payment Gateway Integration
              </p>

              <p>
                <span className="font-bold text-[#222]">Technology:</span>{" "}
                HTML, CSS, BootStrap, Laravel (php Framework)
              </p>

              <p>
                <span className="font-bold text-[#222]">Location:</span> UAE
              </p>
            </div>

            {/* PREVIOUS CASE STUDY */}
            <Link
              href="/case-studies/taste-of-spain"
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
                Mebashi, an electronics and home appliances brand, had a
                vision of creating websites for its brand. Mighty Warners,
                with our expert team, helped the brand with their requirement
                and successfully created websites.
              </p>

              <h3 className="mt-7 text-[17px] font-bold text-[#333] sm:text-[18px]">
                Overview
              </h3>

              <p className="mt-5 max-w-[700px] text-justify text-[14px] leading-[1.9] tracking-[0.015em] text-[#555] sm:text-[15px] lg:text-[16px]">
                As a top brand in electronics and home appliances in UAE,
                Mebashi had been highly reputed in the region but needed an
                e-commerce website. Mighty Warners took up this opportunity,
                and our team delivered a comprehensive solution that met their
                needs. After careful consideration, we created two websites;
                one for enquiries and one with full e-commerce functionality.
                The two websites would be designed to match the corporate
                branding of the business. These websites will allow Mebashi to
                tap into the online market, providing them with an increase in
                sales and a more streamlined administration process.
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
                    Published Date: 29-06-2026
                  </p>
                </div>

                <a
                  href="https://mebashi.com/"
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

                  <span>https://mebashi.com/</span>
                </a>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="w-full">
              <div className="overflow-hidden rounded-[28px] bg-[#17202A] p-3 sm:p-4 lg:p-5">
                <div className="relative w-full overflow-hidden rounded-[18px] bg-white">
                  <Image
                    src="/images/case-studies/mebashi.jpg"
                    alt="Mebashi Website Preview"
                    width={900}
                    height={650}
                    quality={100}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>

              {/* NEXT CASE STUDY */}
              <div className="mt-6 flex justify-center">
                <Link
                  href="/case-studies/creative-florist"
                  className="inline-flex items-center gap-2 text-[14px] text-[#555] transition-colors hover:text-[#17245C] sm:text-[15px] lg:text-[16px]"
                >
                  <span>Next Case Studies</span>
                  <ArrowRight size={20} strokeWidth={1.7} />
                </Link>
              </div>
            </div>
          </div>

          {/* APPROACH SECTION */}
          <section className="mt-20 sm:mt-24 lg:mt-28">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
              <div className="w-full">
                <Image
                  src="/images/case-studies/mebashi-approach.png"
                  alt="Mebashi Website Design"
                  width={850}
                  height={750}
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-auto w-full object-contain"
                />
              </div>

              <div className="w-full lg:pb-4">
                <h2 className="text-[28px] font-medium text-[#333] sm:text-[32px] lg:text-[36px]">
                  Approach
                </h2>

                <p className="mt-8 max-w-[680px] text-justify text-[14px] leading-[1.9] tracking-[0.015em] text-[#555] sm:text-[15px] lg:text-[16px]">
                  To achieve a consistent design across both websites, we
                  utilize the same base design for both. This includes the same
                  layout, colors, fonts, and navigation structure. However, to
                  ensure that each website&apos;s content is unique and specific
                  to its target audience, we have decided to utilize different
                  images, banners, products, and functionalities for each
                  website. Additionally, we have decided to use a single CMS
                  admin panel to control both websites. This will allow easier
                  management and updates of both sites from one central
                  location.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}