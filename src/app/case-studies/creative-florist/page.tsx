import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Creative Florist Case Study | GenMax IT Solution",
  description:
    "Explore the Creative Florist case study by GenMax IT Solution.",
};

export default function CreativeFloristCaseStudyPage() {
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

            <span className="font-bold text-[#17245C]">
              Creative Florist
            </span>
          </nav>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          {/* PAGE HEADING */}
          <h2 className="text-[30px] font-medium leading-none text-[#17245C] sm:text-[34px] lg:text-[38px]">
            Creative Florist
          </h2>

          {/* TOP INFORMATION */}
          <div className="mt-14 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
            <div className="max-w-[720px] text-[14px] leading-[1.65] text-[#555] sm:text-[15px] lg:text-[16px]">
              <p>
                <span className="font-bold text-[#222]">Scope:</span>{" "}
                Custom Bespoke Design | Web Development | CMS Admin Panel |
                Payment Gateway Integration
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
              href="/case-studies/mebashi"
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
                Creative Florist is a UAE-based floral brand that required a
                modern and visually engaging online presence to showcase its
                products and services. GenMax IT Solution developed a bespoke
                website with an easy-to-manage content management system and
                integrated payment gateway to provide customers with a smooth
                online shopping experience.
              </p>

              <h3 className="mt-7 text-[17px] font-bold text-[#333] sm:text-[18px]">
                Overview
              </h3>

              <p className="mt-5 max-w-[700px] text-justify text-[14px] leading-[1.9] tracking-[0.015em] text-[#555] sm:text-[15px] lg:text-[16px]">
                The project focused on creating a responsive e-commerce
                experience that reflects the visual identity of Creative
                Florist. The website was designed with a clean interface,
                structured navigation, product-focused layouts, and a
                streamlined checkout experience. The CMS admin panel allows
                the business to manage website content and products
                efficiently, while the payment gateway integration enables
                customers to complete their purchases securely online.
              </p>

              {/* WEBSITE LINK */}
              <div className="mt-8">
                <Link
                  href="https://creativefloristdxb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[14px] font-medium text-[#555] transition-colors hover:text-[#F04D02] sm:text-[15px] lg:text-[16px]"
                >
                  <Image
                    src="/images/case-studies/svg/project_link.svg"
                    alt="Website Link"
                    width={22}
                    height={22}
                    className="object-contain"
                  />

                  <span>https://creativefloristdxb.com/</span>
                </Link>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="w-full">
              <div className="overflow-hidden rounded-[28px] bg-[#17202A] p-3 sm:p-4 lg:p-5">
                <div className="relative w-full overflow-hidden rounded-[18px] bg-white">
                  <Image
                    src="/images/case-studies/creative-florist.jpg"
                    alt="Creative Florist Website Preview"
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
                  href="/case-studies/eyelz"
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