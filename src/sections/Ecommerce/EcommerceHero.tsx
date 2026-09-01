"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Send } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { ecommerceHero } from "@/data/ecommerce";

export default function EcommerceHero() {
  const [phone, setPhone] = useState("");

  return (
    <section className="w-full bg-white py-5 sm:py-7 lg:py-9">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <div className="flex flex-col lg:flex-row lg:items-start">
          {/* ================= LEFT SIDE ================= */}
          <div className="w-full lg:w-[66%]">
            {/* HERO IMAGE */}
            <div className="relative w-full overflow-hidden">
              <Image
                src={ecommerceHero.image}
                alt={ecommerceHero.imageAlt}
                width={1920}
                height={650}
                priority
                className="h-[220px] w-full object-cover sm:h-[270px] md:h-[300px] lg:h-[350px] xl:h-[380px]"
              />

              <div className="pointer-events-none absolute inset-0 bg-white/5" />
            </div>

            {/* ================= TITLE + BREADCRUMB ================= */}
            <div className="pt-4 sm:pt-5 lg:pt-6">
              <h1 className="text-[30px] font-normal leading-[1.1] tracking-[-0.8px] text-[#17245C] sm:text-[36px] md:text-[42px] lg:text-[46px] xl:text-[48px]">
                {ecommerceHero.title}
              </h1>

              <div className="mt-2 flex flex-wrap items-center gap-2.5 text-[13px] sm:text-[14px]">
                <Link
                  href="/"
                  className="text-[#777] transition-colors duration-200 hover:text-[#F04D02]"
                >
                  Home
                </Link>

                <span className="text-[#BCBCBC]">&gt;</span>

                <span className="text-[#777]">
                  {ecommerceHero.breadcrumb}
                </span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT FORM ================= */}
          <div className="relative z-20 mt-6 w-full lg:mt-0 lg:w-[34%]">
            {/* ORANGE CORNER */}
            <div className="pointer-events-none absolute -left-[25px] top-[25px] hidden h-[65px] w-[65px] rounded-full border-l-[5px] border-t-[5px] border-[#F04D02] lg:block" />

            <div className="relative min-h-[510px] w-full overflow-hidden bg-gradient-to-br from-[#080B12] via-[#101A42] to-[#173D91] px-5 py-7 shadow-[0_18px_45px_rgba(0,0,0,0.16)] sm:min-h-[530px] sm:px-6 sm:py-8 lg:min-h-[550px] lg:px-7 lg:py-8 xl:min-h-[560px] xl:px-8">
              {/* GLOW */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-[180px] w-[180px] rounded-full bg-[#214DA0]/30 blur-[60px]" />

              <div className="relative z-10">
                {/* PHONE */}
                <h2 className="text-[25px] font-medium leading-tight !text-white sm:text-[28px]">
                  Toll Free:
                </h2>

                <a
                  href={`tel:${ecommerceHero.phoneLink}`}
                  className="mt-1.5 inline-block !text-white text-[16px] font-medium tracking-[0.2px] no-underline transition-colors duration-200 hover:!text-[#FE8302]"
                  style={{ color: "#ffffff" }}
                >
                  {ecommerceHero.phone}
                </a>

                {/* ================= FORM ================= */}
                <form className="mt-4">
                  {/* NAME */}
                  <div className="border-b border-white/50">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name*"
                      autoComplete="name"
                      required
                      className="h-[46px] w-full bg-transparent px-1 text-[13px] !text-white outline-none placeholder:!text-white/80"
                    />
                  </div>

                  {/* PHONE */}
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
                      inputClass="!h-[46px] !w-full !rounded-none !border-0 !bg-transparent !pl-[48px] !pr-1 !text-[13px] !text-white !outline-none !shadow-none"
                      buttonClass="!h-[46px] !w-[42px] !rounded-none !border-0 !bg-transparent"
                      dropdownClass="!z-[9999]"
                      searchClass="!mx-[10px] !my-[6px] !w-[calc(100%-20px)]"
                    />
                  </div>

                  {/* EMAIL */}
                  <div className="border-b border-white/50">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address*"
                      autoComplete="email"
                      required
                      className="h-[46px] w-full bg-transparent px-1 text-[13px] !text-white outline-none placeholder:!text-white/80"
                    />
                  </div>

                  {/* WEBSITE */}
                  <div className="border-b border-white/50">
                    <input
                      type="url"
                      name="website"
                      placeholder="Your Website"
                      autoComplete="url"
                      className="h-[46px] w-full bg-transparent px-1 text-[13px] !text-white outline-none placeholder:!text-white/80"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div className="border-b border-white/50">
                    <textarea
                      name="message"
                      placeholder="Tell us about your requirements*"
                      required
                      rows={3}
                      className="min-h-[72px] w-full resize-none bg-transparent px-1 py-3 text-[13px] !text-white outline-none placeholder:!text-white/80"
                    />
                  </div>

                  {/* PRIVACY */}
                  <label className="mt-4 flex cursor-pointer items-start gap-2.5">
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

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    aria-label="Submit form"
                    className="mt-4 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#F04D02] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#FE8302]"
                  >
                    <Send
                      size={17}
                      strokeWidth={1.8}
                      className="ml-[2px]"
                    />
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