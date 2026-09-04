"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { googleAdsHero } from "@/data/googleAds";

export default function GoogleAdsHero() {
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setFormMessage("");
    setFormError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const website = String(formData.get("website") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const privacy = formData.get("privacy");

    const cleanPhone = phone.trim();

    // Required fields validation
    if (!name || !cleanPhone || !email || !message) {
      setFormError("Please fill in all required fields.");
      return;
    }

    // Privacy validation
    if (!privacy) {
      setFormError(
        "Please agree to the Privacy Policy before submitting."
      );
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone: cleanPhone,
          website,
          message,
          service: "Google Ads",
          source: "Google Ads Service Page",
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Something went wrong. Please try again."
        );
      }

      setFormMessage(
        "Thank you! Your enquiry has been sent successfully. Our team will contact you shortly."
      );

      form.reset();
      setPhone("");
    } catch (error) {
      console.error("Google Ads form submission error:", error);

      setFormError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-white py-6 sm:py-8 lg:py-10">
      <div className="mx-auto w-full max-w-[1320px] px-6 sm:px-10 md:px-12 lg:px-14 xl:px-16">
        <div className="flex flex-col lg:flex-row lg:items-start">

          {/* ================= LEFT SIDE ================= */}
          <div className="w-full lg:w-[66%]">

            <div className="relative w-full">
              <Image
                src={googleAdsHero.image}
                alt={googleAdsHero.imageAlt}
                width={1920}
                height={650}
                priority
                className="h-[250px] w-full object-cover sm:h-[285px] md:h-[310px] lg:h-[370px] xl:h-[390px]"
              />

              <div className="pointer-events-none absolute inset-0 bg-white/5" />
            </div>

            {/* ================= TITLE + BREADCRUMB ================= */}
            <div className="pt-4 sm:pt-5 lg:pt-6">
              <h1 className="text-[32px] font-normal leading-[1.1] tracking-[-1px] text-[#17245C] sm:text-[38px] md:text-[44px] lg:text-[48px]">
                {googleAdsHero.title}
              </h1>

              <div className="mt-2 flex flex-wrap items-center gap-3 text-[13px] sm:text-[14px]">
                <Link
                  href="/"
                  className="text-[#777] transition-colors duration-200 hover:text-[#F04D02]"
                >
                  Home
                </Link>

                <span className="text-[#BCBCBC]">&gt;</span>

                <span className="text-[#777]">
                  {googleAdsHero.breadcrumb}
                </span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT FORM ================= */}
          <div className="relative z-20 w-full lg:w-[34%]">

            {/* ORANGE CORNER */}
            <div className="pointer-events-none absolute -left-[28px] top-[28px] hidden h-[70px] w-[70px] rounded-full border-l-[5px] border-t-[5px] border-[#F04D02] lg:block" />

            <div className="relative min-h-[530px] w-full overflow-hidden bg-gradient-to-br from-[#080B12] via-[#101A42] to-[#173D91] px-6 py-8 shadow-[0_18px_45px_rgba(0,0,0,0.16)] sm:min-h-[550px] sm:px-7 sm:py-9 lg:min-h-[570px] lg:px-7 lg:py-9 xl:min-h-[580px] xl:px-8">

              {/* GLOW */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-[190px] w-[190px] rounded-full bg-[#214DA0]/30 blur-[60px]" />

              <div className="relative z-10">

                {/* PHONE */}
                <h2 className="text-[27px] font-medium leading-tight !text-white sm:text-[29px]">
                  Toll Free:
                </h2>

                <a
                  href={`tel:${googleAdsHero.phoneLink}`}
                  className="mt-2 inline-block !text-white text-[17px] font-medium tracking-[0.2px] no-underline transition-colors duration-200 hover:!text-[#FE8302]"
                  style={{ color: "#ffffff" }}
                >
                  {googleAdsHero.phone}
                </a>

                {/* ================= FORM ================= */}
                <form
                  onSubmit={handleSubmit}
                  className="mt-5"
                >

                  {/* NAME */}
                  <div className="border-b border-white/50">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name*"
                      autoComplete="name"
                      required
                      disabled={isSubmitting}
                      className="h-[48px] w-full bg-transparent px-1 text-[13px] !text-white outline-none placeholder:!text-white/80 disabled:cursor-not-allowed disabled:opacity-70"
                    />
                  </div>

                  {/* PHONE */}
                  <div className="relative border-b border-white/50">
                    <PhoneInput
                      country="in"
                      value={phone}
                      onChange={(value) => setPhone(value)}
                      enableSearch
                      preferredCountries={[
                        "in",
                        "ae",
                        "us",
                        "gb",
                      ]}
                      searchPlaceholder="Search country..."
                      placeholder="Phone*"
                      disabled={isSubmitting}
                      containerClass="!w-full"
                      inputClass="!h-[48px] !w-full !rounded-none !border-0 !bg-transparent !pl-[48px] !pr-1 !text-[13px] !text-white !outline-none !shadow-none"
                      buttonClass="!h-[48px] !w-[42px] !rounded-none !border-0 !bg-transparent"
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
                      disabled={isSubmitting}
                      className="h-[48px] w-full bg-transparent px-1 text-[13px] !text-white outline-none placeholder:!text-white/80 disabled:cursor-not-allowed disabled:opacity-70"
                    />
                  </div>

                  {/* WEBSITE */}
                  <div className="border-b border-white/50">
                    <input
                      type="url"
                      name="website"
                      placeholder="Your Website"
                      autoComplete="url"
                      disabled={isSubmitting}
                      className="h-[48px] w-full bg-transparent px-1 text-[13px] !text-white outline-none placeholder:!text-white/80 disabled:cursor-not-allowed disabled:opacity-70"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div className="border-b border-white/50">
                    <textarea
                      name="message"
                      placeholder="Tell us about your requirements*"
                      required
                      rows={3}
                      disabled={isSubmitting}
                      className="min-h-[78px] w-full resize-none bg-transparent px-1 py-3 text-[13px] !text-white outline-none placeholder:!text-white/80 disabled:cursor-not-allowed disabled:opacity-70"
                    />
                  </div>

                  {/* PRIVACY */}
                  <label className="mt-5 flex cursor-pointer items-start gap-2.5">
                    <input
                      type="checkbox"
                      name="privacy"
                      required
                      disabled={isSubmitting}
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

                  {/* ERROR MESSAGE */}
                  {formError && (
                    <p className="mt-3 text-[11px] leading-[1.5] text-red-300">
                      {formError}
                    </p>
                  )}

                  {/* SUCCESS MESSAGE */}
                  {formMessage && (
                    <p className="mt-3 text-[11px] leading-[1.5] text-green-300">
                      {formMessage}
                    </p>
                  )}

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    aria-label="Submit form"
                    disabled={isSubmitting}
                    className="mt-5 flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#F04D02] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#FE8302] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <span
                        className="h-[17px] w-[17px] animate-spin rounded-full border-2 border-white/40 border-t-white"
                        aria-label="Sending"
                      />
                    ) : (
                      <Send
                        size={17}
                        strokeWidth={1.8}
                        className="ml-[2px]"
                      />
                    )}
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