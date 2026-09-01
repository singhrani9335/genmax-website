"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Send } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { seoHero } from "@/data/seo";

export default function SeoHero() {
  const [phone, setPhone] = useState("");

  return (
    <section className="w-full bg-white py-6 sm:py-8 lg:py-10">
      <div className="mx-auto w-full max-w-[1320px] px-6 sm:px-10 md:px-12 lg:px-14 xl:px-16">
        <div className="flex flex-col lg:flex-row lg:items-start">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-[66%]">
            <div className="relative w-full">
              <Image
                src={seoHero.image}
                alt={seoHero.imageAlt}
                width={1920}
                height={650}
                priority
                className="h-[250px] w-full object-cover sm:h-[285px] md:h-[310px] lg:h-[370px] xl:h-[390px]"
              />

              <div className="pointer-events-none absolute inset-0 bg-white/5" />
            </div>

            <div className="pt-4 sm:pt-5 lg:pt-6">
              <h1 className="text-[32px] font-normal leading-[1.1] tracking-[-1px] text-[#17245C] sm:text-[38px] md:text-[44px] lg:text-[48px]">
                {seoHero.title}
              </h1>

              <div className="mt-2 flex flex-wrap items-center gap-3 text-[13px] sm:text-[14px]">
                <Link
                  href="/"
                  className="text-[#777] transition-colors duration-200 hover:text-[#F04D02]"
                >
                  Home
                </Link>

                <span className="text-[#BCBCBC]">&gt;</span>

                <span className="text-[#777]">{seoHero.breadcrumb}</span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="relative z-20 w-full lg:w-[34%]">
            <div className="pointer-events-none absolute -left-[28px] top-[28px] hidden h-[70px] w-[70px] rounded-full border-l-[5px] border-t-[5px] border-[#F04D02] lg:block" />

            <div className="relative min-h-[530px] w-full overflow-hidden bg-gradient-to-br from-[#080B12] via-[#101A42] to-[#173D91] px-6 py-8 shadow-[0_18px_45px_rgba(0,0,0,0.16)] sm:min-h-[550px] sm:px-7 sm:py-9 lg:min-h-[570px] lg:px-7 lg:py-9 xl:min-h-[580px] xl:px-8">
              <div className="pointer-events-none absolute -right-24 -top-24 h-[190px] w-[190px] rounded-full bg-[#214DA0]/30 blur-[60px]" />

              <div className="relative z-10">
                <h2 className="text-[27px] font-medium leading-tight !text-white sm:text-[29px]">
                  Toll Free:
                </h2>

                <a
                  href={`tel:${seoHero.phoneLink}`}
                  className="mt-2 inline-block !text-white text-[17px] font-medium tracking-[0.2px] no-underline transition-colors duration-200 hover:!text-[#FE8302]"
                  style={{ color: "#ffffff" }}
                >
                  {seoHero.phone}
                </a>

                <form className="mt-5">
                  <div className="border-b border-white/50">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name*"
                      autoComplete="name"
                      required
                      className="h-[48px] w-full bg-transparent px-1 text-[13px] !text-white outline-none placeholder:!text-white/80"
                    />
                  </div>

                  <div className="relative border-b border-white/50">
                    <PhoneInput
                      country="in"
                      value={phone}
                      onChange={(value) => setPhone(value)}
                      enableSearch
                      preferredCountries={["in", "ae", "us", "gb"]}
                      searchPlaceholder="Search country..."
                      placeholder="Phone*"
                      containerClass="!w-full"
                      inputClass="!h-[48px] !w-full !rounded-none !border-0 !bg-transparent !pl-[48px] !pr-1 !text-[13px] !text-white !outline-none !shadow-none"
                      buttonClass="!h-[48px] !w-[42px] !rounded-none !border-0 !bg-transparent"
                      dropdownClass="!z-[9999]"
                      searchClass="!mx-[10px] !my-[6px] !w-[calc(100%-20px)]"
                    />
                  </div>

                  <div className="border-b border-white/50">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address*"
                      autoComplete="email"
                      required
                      className="h-[48px] w-full bg-transparent px-1 text-[13px] !text-white outline-none placeholder:!text-white/80"
                    />
                  </div>

                  <div className="border-b border-white/50">
                    <input
                      type="url"
                      name="website"
                      placeholder="Your Website"
                      autoComplete="url"
                      className="h-[48px] w-full bg-transparent px-1 text-[13px] !text-white outline-none placeholder:!text-white/80"
                    />
                  </div>

                  <div className="border-b border-white/50">
                    <textarea
                      name="message"
                      placeholder="Tell us about your requirements*"
                      required
                      rows={3}
                      className="min-h-[78px] w-full resize-none bg-transparent px-1 py-3 text-[13px] !text-white outline-none placeholder:!text-white/80"
                    />
                  </div>

                  <label className="mt-5 flex cursor-pointer items-start gap-2.5">
                    <input
                      type="checkbox"
                      name="privacy"
                      required
                      className="mt-[3px] h-[13px] w-[13px] shrink-0 cursor-pointer accent-[#F04D02]"
                    />

                    <span className="text-[10px] leading-[1.6] !text-white/80 sm:text-[11px]">
                      I agree to{" "}
                      <Link
                        href="/privacy-policy"
                        className="underline underline-offset-2 transition-colors hover:!text-white"
                      >
                        Privacy Policy
                      </Link>{" "}
                      and consent to being contacted.
                    </span>
                  </label>

                  <button
                    type="submit"
                    aria-label="Submit form"
                    className="mt-5 flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#F04D02] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#FE8302]"
                  >
                    <Send size={17} strokeWidth={1.8} className="ml-[2px]" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}