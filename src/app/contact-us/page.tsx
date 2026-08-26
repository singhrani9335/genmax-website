"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <main className="w-full overflow-x-hidden bg-white text-[#17120F]">
      {/* =====================================================
          SECTION 1 — CONTACT BANNER
      ====================================================== */}
      <section className="relative h-[400px] w-full overflow-hidden bg-white min-[375px]:h-[420px] sm:h-[450px] md:h-[490px] lg:h-[520px] xl:h-[550px]">
        {/* Banner Image */}
        <Image
          src="/images/contact-us.jpg"
          alt="Contact Us"
          fill
          priority
          sizes="100vw"
          className="object-contain object-center"
        />

        {/* Banner Content */}
        <div className="relative z-10 flex h-full items-center px-5 min-[375px]:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-20">
          <div className="text-left">
            <h1 className="text-[36px] font-medium leading-tight tracking-[-1.5px] text-black min-[375px]:text-[40px] sm:text-[50px] md:text-[56px] lg:text-[60px]">
              Contact Us
            </h1>

            {/* Breadcrumb */}
            <div className="mt-3 flex flex-wrap items-center gap-2 text-[9px] uppercase tracking-[1.8px] min-[375px]:text-[10px] sm:mt-4 sm:text-[11px] sm:tracking-[2px]">
              <Link
                href="/"
                className="font-semibold text-black no-underline transition-colors duration-300 hover:text-[#F04D02]"
              >
                Home
              </Link>

              <span className="text-[#F04D02]">/</span>

              <span className="font-semibold text-black">Contact Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 2 — INDIA OFFICE
      ====================================================== */}
      <section className="relative w-full overflow-hidden bg-[#EEEAE6] py-10 sm:py-14 md:py-16 lg:py-20">
        {/* Decorative Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[220px] top-[60px] h-[450px] w-[450px] rounded-full bg-[#F04D02]/[0.06] blur-[140px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[220px] bottom-[-180px] h-[450px] w-[450px] rounded-full bg-[#FE8302]/[0.05] blur-[140px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[35%] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-white/25 blur-[120px]"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 min-[375px]:px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
          {/* Main Office Panel */}
          <div className="relative overflow-hidden border border-black/[0.07] bg-white/25 shadow-[0_18px_60px_rgba(23,18,15,0.06)]">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              {/* =================================================
                  LEFT — OFFICE DETAILS
              ================================================== */}
              <div className="relative px-5 py-8 min-[375px]:px-6 sm:px-9 sm:py-10 md:px-12 md:py-12 lg:px-14 lg:py-14 xl:px-16 xl:py-16">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-[100px] top-[-40px] h-[280px] w-[280px] rounded-full bg-[#F04D02]/[0.045] blur-[100px]"
                />

                <div className="relative z-10">
                  {/* Company */}
                  <div className="flex items-center gap-3 min-[375px]:gap-4">
                    {/* Logo */}
                    <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white sm:h-[60px] sm:w-[60px]">
                      <Image
                        src="/images/logo.jpg"
                        alt="GenMax IT Solution"
                        width={60}
                        height={60}
                        sizes="60px"
                        className="h-full w-full rounded-full object-contain"
                      />
                    </div>

                    {/* Company Name */}
                    <div className="min-w-0">
                      <p className="text-[8px] font-semibold uppercase tracking-[2px] text-black/40 sm:text-[10px] sm:tracking-[2.5px]">
                        Office Location
                      </p>

                      <h3 className="mt-1 break-words text-[16px] font-semibold uppercase leading-tight tracking-[-0.4px] text-[#17120F] min-[375px]:text-[18px] sm:text-[22px] md:text-[25px]">
                        GENMAX IT SOLUTION
                      </h3>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="mt-8 flex items-start gap-3 min-[375px]:gap-4 sm:mt-11 sm:gap-5">
                    <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center sm:h-[64px] sm:w-[64px]">
                      <Image
                        src="/images/address.svg"
                        alt="India Office Location"
                        width={64}
                        height={64}
                        sizes="64px"
                        className="h-[52px] w-[52px] object-contain brightness-0 sm:h-[64px] sm:w-[64px]"
                      />
                    </div>

                    <div className="min-w-0 pt-0.5">
                      <h4 className="text-[28px] font-medium uppercase leading-none tracking-[-1px] text-[#17120F] min-[375px]:text-[30px] sm:text-[36px] md:text-[42px]">
                        India
                      </h4>

                      <p className="mt-3 max-w-[390px] text-[12px] leading-[1.75] text-black/60 sm:text-[14px] md:text-[15px]">
                        C3M Aneja Market,
                        <br />
                        Sadarpur, Sec-45,
                        <br />
                        Delhi NCR, India - 201301
                      </p>
                    </div>
                  </div>

                  {/* Phone Details */}
                  <div className="mt-7 border-t border-black/[0.07] pt-5 sm:mt-9 sm:pt-7">
                    <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-4">
                      {/* Mobile */}
                      <a
                        href="tel:+919938307637"
                        className="group flex min-w-0 items-center gap-3 no-underline"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/[0.08] transition-all duration-300 group-hover:border-[#F04D02]/40 group-hover:bg-[#F04D02]/[0.05]">
                          <Phone
                            size={16}
                            strokeWidth={1.5}
                            className="text-[#F04D02]"
                          />
                        </span>

                        <div className="min-w-0">
                          <span className="block text-[8px] font-semibold uppercase tracking-[2px] text-black/40">
                            Mobile
                          </span>

                          <span className="mt-1 block text-[13px] text-black/65 transition-colors duration-300 group-hover:text-[#F04D02]">
                            +91 99383 07637
                          </span>
                        </div>
                      </a>

                      {/* Toll Free */}
                      <a
                        href="tel:+919938307637"
                        className="group flex min-w-0 items-center gap-3 no-underline"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/[0.08] transition-all duration-300 group-hover:border-[#F04D02]/40 group-hover:bg-[#F04D02]/[0.05]">
                          <Phone
                            size={16}
                            strokeWidth={1.5}
                            className="text-[#F04D02]"
                          />
                        </span>

                        <div className="min-w-0">
                          <span className="block text-[8px] font-semibold uppercase tracking-[2px] text-black/40">
                            Toll Free
                          </span>

                          <span className="mt-1 block text-[13px] text-black/65 transition-colors duration-300 group-hover:text-[#F04D02]">
                            +91 99383 07637
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  RIGHT — CONTACT INFORMATION
              ================================================== */}
              <div className="border-t border-black/[0.07] px-5 py-8 min-[375px]:px-6 sm:px-9 sm:py-10 md:px-12 md:py-12 lg:border-l lg:border-t-0 lg:px-14 lg:py-14 xl:px-16 xl:py-16">
                <span className="text-[9px] font-semibold uppercase tracking-[2.5px] text-[#F04D02] sm:text-[10px] sm:tracking-[3px]">
                  Get In Touch
                </span>

                <h3 className="mt-2 text-[25px] font-medium leading-tight tracking-[-1px] text-[#17120F] min-[375px]:text-[27px] sm:text-[32px] md:text-[36px]">
                  Contact Information
                </h3>

                <p className="mt-3 max-w-[470px] text-[12px] leading-6 text-black/50 sm:text-[14px] sm:leading-7">
                  Have a question or want to discuss your next project? Reach
                  out to our team and we will be happy to assist you.
                </p>

                {/* Contact Items */}
                <div className="mt-6 space-y-1 sm:mt-7">
                  {/* Email */}
                  <a
                    href="mailto:genmaxitsolution@gmail.com"
                    className="group flex min-w-0 items-center gap-3 border-b border-black/[0.07] py-4 no-underline sm:gap-4 sm:py-5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/[0.08]">
                      <Mail
                        size={18}
                        strokeWidth={1.5}
                        className="text-[#F04D02]"
                      />
                    </span>

                    <div className="min-w-0">
                      <span className="block text-[9px] font-semibold uppercase tracking-[2px] text-black/35">
                        Email
                      </span>

                      <span className="mt-1 block break-all text-[13px] text-black/65 sm:text-[14px]">
                        genmaxitsolution@gmail.com
                      </span>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+919938307637"
                    className="group flex min-w-0 items-center gap-3 border-b border-black/[0.07] py-4 no-underline sm:gap-4 sm:py-5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/[0.08]">
                      <Phone
                        size={18}
                        strokeWidth={1.5}
                        className="text-[#F04D02]"
                      />
                    </span>

                    <div className="min-w-0">
                      <span className="block text-[9px] font-semibold uppercase tracking-[2px] text-black/35">
                        Phone
                      </span>

                      <span className="mt-1 block text-[13px] text-black/65 sm:text-[14px]">
                        +91 99383 07637
                      </span>
                    </div>
                  </a>

                  {/* Office Hours */}
                  <div className="flex items-center gap-3 py-4 sm:gap-4 sm:py-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/[0.08]">
                      <Clock
                        size={18}
                        strokeWidth={1.5}
                        className="text-[#F04D02]"
                      />
                    </span>

                    <div className="min-w-0">
                      <span className="block text-[9px] font-semibold uppercase tracking-[2px] text-black/35">
                        Office Hours
                      </span>

                      <span className="mt-1 block text-[12px] leading-6 text-black/65 sm:text-[14px]">
                        Monday - Saturday : 9:30 AM to 6:30 PM
                        <br />
                        Sunday : Closed
                      </span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="mt-4 flex items-center gap-3 text-black/45 sm:mt-5">
                  <MapPin
                    size={15}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#F04D02]"
                  />

                  <span className="text-[10px] sm:text-[11px]">
                    Delhi NCR, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 3 — FULL WIDTH MAP
      ====================================================== */}
      <section className="relative w-full overflow-hidden bg-[#F7F7F6] py-0">
        <div className="w-full">
          <div className="relative h-[280px] w-full overflow-hidden bg-white min-[375px]:h-[300px] sm:h-[360px] md:h-[420px] lg:h-[460px]">
            <iframe
              title="GenMax IT Solution Location"
              src="https://www.google.com/maps?cid=365201343635567293&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}