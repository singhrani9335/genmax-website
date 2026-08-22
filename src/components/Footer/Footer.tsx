"use client";

import React, { useState } from "react";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import {
  FaXTwitter,
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaWhatsapp,
  FaShareNodes,
} from "react-icons/fa6";

export default function Footer() {
  const [phone, setPhone] = useState("");

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Case Study", href: "/case-study" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    {
      name: "Terms and Conditions",
      href: "/terms-and-conditions",
    },
    { name: "Site Map", href: "/site-map" },
  ];

  const services = [
    "Digital Marketing",
    "Trusted SEO Agency in Dubai with Refund Guarantee",
    "Social Media Marketing",
    "E Commerce Website",
    "Web Development",
    "Graphic Designing",
  ];

  const goToHome = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    if (window.location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.location.href = "/";
    }
  };

  return (
    <footer className="relative w-full overflow-hidden font-sans">

      {/* ================= TOP WHITE SECTION ================= */}
      <section className="relative z-20 min-h-[540px] overflow-visible bg-white">

        {/* LEFT SIDE BACKGROUND IMAGE */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 z-0 hidden h-[340px] w-[68%] bg-contain bg-bottom bg-left bg-no-repeat sm:block sm:h-[360px] sm:w-[70%] md:h-[380px] md:w-[70%] lg:h-[400px] lg:w-[67%]"
          style={{
            backgroundImage: "url('/images/image.png')",
          }}
        />

        {/* MOBILE LEFT SIDE BACKGROUND IMAGE */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 z-0 block h-[300px] w-[75%] bg-contain bg-bottom bg-left bg-no-repeat sm:hidden"
          style={{
            backgroundImage: "url('/images/image.png')",
          }}
        />

        <div className="relative z-10 mx-auto min-h-[540px] max-w-[1600px]">

          {/* ================= CONNECT WITH US ================= */}
          <div className="relative z-20 w-full px-6 pb-6 pt-[195px] sm:px-10 md:px-16 lg:w-[67%] lg:px-[9.5%]">

            {/* LOGO + HEADING */}
            <div className="flex items-center gap-5 md:gap-7">

              <a
                href="/"
                onClick={goToHome}
                aria-label="Go to Home"
                className="block w-[85px] shrink-0 cursor-pointer sm:w-[100px] md:w-[115px]"
              >
                <img
                  src="/images/logo.jpg"
                  alt="Genmax"
                  className="w-full object-contain"
                />
              </a>

              <h2 className="max-w-[620px] text-[25px] font-normal leading-[1.12] tracking-[-0.5px] text-[#222222] sm:text-[29px] md:text-[34px] lg:text-[37px]">
                Connect with Us:
                <br />
                Get the Latest Updates
                <br />
                Straight to Your Inbox!
              </h2>

            </div>

            {/* EMAIL */}
            <div className="relative z-20 mt-10 w-full max-w-[640px]">

              <div className="flex h-[48px] w-full border border-[#222222] bg-white">

                <div className="flex w-[58px] shrink-0 items-center justify-center">
                  <img
                    src="/images/email.png"
                    alt="Email"
                    className="h-[22px] w-[22px] object-contain opacity-70"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Enter Your Email..."
                  className="min-w-0 flex-1 border-0 bg-transparent px-1 text-[13px] text-[#222222] outline-none placeholder:text-[#777777]"
                />

                <button
                  type="button"
                  aria-label="Subscribe"
                  className="flex h-[48px] w-[62px] shrink-0 items-center justify-center bg-gradient-to-r from-[#F04D02] to-[#FE8302] transition hover:from-[#222222] hover:to-[#333333]"
                >
                  <img
                    src="/images/newsletter_send.svg"
                    alt="Send"
                    className="h-[21px] w-[21px] object-contain"
                  />
                </button>

              </div>

              <label className="mt-2 flex items-center gap-2 text-[11px] text-[#444444]">
                <input
                  type="checkbox"
                  className="h-[15px] w-[15px] shrink-0 accent-[#F04D02]"
                />

                <span>
                  I agree to{" "}
                  <Link
                    href="/privacy-policy"
                    className="underline transition hover:text-[#F04D02]"
                  >
                    the Privacy Policy
                  </Link>{" "}
                  and consent to being contacted.
                </span>
              </label>

            </div>
          </div>

          {/* ================= GET IN TOUCH ================= */}
          <div className="absolute left-1/2 top-[385px] z-[100] w-[calc(100%-32px)] max-w-[390px] -translate-x-1/2 bg-white px-7 pb-8 pt-7 shadow-[0_6px_25px_rgba(0,0,0,0.10)] sm:w-[370px] lg:left-auto lg:right-[5%] lg:top-[350px] lg:w-[360px] lg:max-w-none lg:translate-x-0">

            <div className="flex items-start justify-between">

              <h2 className="text-[30px] font-semibold leading-tight text-[#222222]">
                Get In Touch
              </h2>

            </div>

            <p className="mb-6 mt-4 text-[14px] font-medium leading-[1.75] text-[#444444]">
              Your Trusted Top Digital Marketing
              <br />
              Company in Dubai, Ready to Elevate
              <br />
              Your Brand?
            </p>

            <form>

              {/* NAME */}
              <label className="block text-[13px] font-semibold text-[#222222]">
                Your Name*
              </label>

              <input
                type="text"
                className="h-[36px] w-full border-0 border-b border-[#777777] bg-transparent text-[14px] font-medium text-[#222222] outline-none focus:border-[#F04D02]"
              />

              {/* EMAIL */}
              <label className="mt-4 block text-[13px] font-semibold text-[#222222]">
                Your Email*
              </label>

              <input
                type="email"
                className="h-[36px] w-full border-0 border-b border-[#777777] bg-transparent text-[14px] font-medium text-[#222222] outline-none focus:border-[#F04D02]"
              />

              {/* PHONE */}
              <label className="mt-4 block text-[13px] font-semibold text-[#222222]">
                Phone Number*
              </label>

              <div className="relative mt-1 w-full">

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
                  placeholder="Enter phone number"
                  containerClass="!w-full"
                  inputClass="!h-[36px] !w-full !rounded-none !border-0 !border-b !border-[#777777] !bg-transparent !pl-[48px] !text-[14px] !font-medium !text-[#222222] !outline-none focus:!border-[#F04D02]"
                  buttonClass="!h-[36px] !border-0 !border-b !border-[#777777] !rounded-none !bg-transparent"
                  dropdownClass="!z-[9999]"
                  searchClass="!mx-[10px] !my-[6px] !w-[calc(100%-20px)]"
                />

              </div>

              {/* MESSAGE */}
              <label className="mt-4 block text-[13px] font-semibold text-[#222222]">
                Message*
              </label>

              <textarea
                rows={2}
                className="h-[45px] w-full resize-none border-0 border-b border-[#777777] bg-transparent text-[14px] font-medium text-[#222222] outline-none focus:border-[#F04D02]"
              />

              {/* PRIVACY + BUTTON */}
              <div className="mt-6 flex items-start justify-between gap-3">

                <label className="flex max-w-[220px] items-start gap-2 text-[11px] font-medium leading-[1.5] text-[#444444]">

                  <input
                    type="checkbox"
                    className="mt-[2px] h-[14px] w-[14px] shrink-0 accent-[#F04D02]"
                  />

                  <span>
                    I agree to{" "}
                    <Link
                      href="/privacy-policy"
                      className="font-semibold underline hover:text-[#F04D02]"
                    >
                      the Privacy Policy
                    </Link>{" "}
                    and consent to being contacted.
                  </span>

                </label>

                <button
                  type="submit"
                  aria-label="Submit"
                  className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#F04D02] to-[#FE8302] text-white transition hover:from-[#222222] hover:to-[#333333]"
                >
                  <span className="text-[19px]">➤</span>
                </button>

              </div>

            </form>
          </div>

        </div>
      </section>

      {/* ================= DARK + ORANGE FOOTER ================= */}
      <section className="relative z-10 min-h-[470px] bg-gradient-to-br from-[#222222] via-[#222222] to-[#F04D02] text-white">

        <div className="mx-auto max-w-[1600px] px-6 pb-10 pt-[35px] sm:px-10 md:px-16 lg:px-[5%]">

          <div className="w-full text-left lg:w-[68%]">

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:grid-cols-[0.85fr_1fr_1fr] lg:gap-5">

              {/* ================= QUICK LINKS ================= */}
              <div className="text-left">

                <h3 className="mb-6 text-[18px] font-semibold uppercase">
                  QUICK LINKS
                </h3>

                <ul className="space-y-[8px]">

                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-[14px] font-normal transition hover:text-[#FE8302] sm:text-[15px]"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}

                </ul>

                {/* ================= FOLLOW US ================= */}
                <div className="mt-7">

                  <h3 className="mb-3 text-[18px] font-semibold">
                    Follow Us On:
                  </h3>

                  <div className="flex flex-wrap items-center gap-3">

                    {/* X */}
                    <a
                      href="https://x.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X"
                      className="flex h-[48px] w-[48px] items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-[#FE8302]"
                    >
                      <FaXTwitter size={22} />
                    </a>

                    {/* FACEBOOK */}
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="flex h-[48px] w-[48px] items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-[#FE8302]"
                    >
                      <FaFacebookF size={21} />
                    </a>

                    {/* PINTEREST */}
                    <a
                      href="https://www.pinterest.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Pinterest"
                      className="flex h-[48px] w-[48px] items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-[#FE8302]"
                    >
                      <FaPinterestP size={22} />
                    </a>

                    {/* LINKEDIN */}
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="flex h-[48px] w-[48px] items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-[#FE8302]"
                    >
                      <FaLinkedinIn size={21} />
                    </a>

                    {/* INSTAGRAM */}
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="flex h-[48px] w-[48px] items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-[#FE8302]"
                    >
                      <FaInstagram size={23} />
                    </a>

                    {/* YOUTUBE */}
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      className="flex h-[48px] w-[48px] items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-[#FE8302]"
                    >
                      <FaYoutube size={24} />
                    </a>

                  </div>

                </div>
              </div>

              {/* ================= SERVICES ================= */}
              <div className="text-left">

                <h3 className="mb-6 text-[18px] font-semibold uppercase">
                  SERVICES
                </h3>

                <ul className="space-y-[8px]">

                  {services.map((service) => (
                    <li key={service}>
                      <a
                        href="#"
                        className="block max-w-[300px] text-[14px] font-normal leading-6 transition hover:text-[#FE8302] sm:text-[15px]"
                      >
                        {service}
                      </a>
                    </li>
                  ))}

                </ul>

              </div>

              {/* ================= LOCATION ================= */}
              <div className="text-left">

                <a
                  href="/"
                  onClick={goToHome}
                  aria-label="Go to Home"
                  className="mb-5 block w-[80px] cursor-pointer"
                >
                  <img
                    src="/images/genmax-logo.png"
                    alt="Genmax"
                    className="w-full object-contain"
                  />
                </a>

                <div className="mt-7 flex gap-3">

                  <img
                    src="/images/address.svg"
                    alt="Location"
                    className="mt-1 h-[32px] w-[32px] shrink-0 object-contain"
                  />

                  <div>

                    <h3 className="mb-1 text-[16px] font-semibold">
                      INDIA
                    </h3>

                    <h4 className="mb-1 text-[15px] font-semibold">
                      GENMAX IT SOLUTION
                    </h4>

                    <p className="text-[14px] leading-[1.75] sm:text-[15px]">
                      Sec-45, Delhi NCR, India. 201301,
                      <br />
                      C3M Aneja Market, Sadarpur
                    </p>

                    <p className="mt-2 text-[14px] leading-6 sm:text-[15px]">
                      +91 99383 07637
                      <br />
                      genmaxitsolution@gmail.com
                    </p>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= COPYRIGHT ================= */}
      <div className="bg-[#222222] px-5 py-3 text-center text-white">

        <p className="text-[11px] sm:text-[12px]">
          © 2026 Genmax. All Rights Reserved.
        </p>

      </div>

      {/* ================= FLOATING BUTTONS ================= */}
      <div className="fixed right-4 top-[205px] z-[100] flex flex-col gap-3">

        {/* CALL */}
        <a
          href="tel:+919938307637"
          aria-label="Call"
          className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white text-[#F04D02] shadow-md transition hover:scale-105"
        >
          <FaPhone size={17} />
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/919938307637"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white text-[#F04D02] shadow-md transition hover:scale-105"
        >
          <FaWhatsapp size={20} />
        </a>

        {/* SHARE */}
        <button
          type="button"
          aria-label="Share"
          className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white text-[#F04D02] shadow-md transition hover:scale-105"
        >
          <FaShareNodes size={18} />
        </button>

      </div>

    </footer>
  );
}