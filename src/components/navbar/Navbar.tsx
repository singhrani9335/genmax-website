"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

import { navbarLinks } from "@/data/navbar";

type PopupType = "quote" | "consultation" | null;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [popup, setPopup] = useState<PopupType>(null);

  /* =========================================================
     SERVICES MEGA MENU
  ========================================================== */

  const serviceMegaMenu = [
    {
      title: "MARKETING",
      items: [
        {
          label: "Digital Marketing",
          href: "/services/digital-marketing",
        },
        {
          label: "Trusted SEO Agency in Dubai with Refund Guarantee",
          href: "/services/seo",
        },
        {
          label: "Social Media Marketing",
          href: "/services/social-media-marketing",
        },
        {
          label: "Paid Ads Management",
          href: "/services/paid-ads-management",
        },
        {
          label: "Reputation Management",
          href: "/services/reputation-management",
        },
        {
          label: "Google Ads",
          href: "/services/google-ads",
        },
        {
          label: "Branding",
          href: "/services/branding",
        },
      ],
    },
    {
      title: "WEB & MOBILE",
      items: [
        {
          label: "E Commerce Website",
          href: "/services/e-commerce-website",
        },
        {
          label: "Web Development",
          href: "/services/web-development",
        },
        {
          label: "Mobile App Development",
          href: "/services/mobile-app-development",
        },
        {
          label: "UI/UX Designing",
          href: "/services/ui-ux-designing",
        },
        {
          label: "QuickBooks Cloud Hosting",
          href: "/services/quickbooks-cloud-hosting",
        },
      ],
    },
    {
      title: "GRAPHIC DESIGN",
      items: [
        {
          label: "Graphic Designing",
          href: "/services/graphic-designing",
        },
      ],
    },
  ];

  /* =========================================================
     NAVBAR ROUTES
  ========================================================== */

  const updatedNavbarLinks = navbarLinks.map((link) => {
    const label = link.label.toLowerCase().trim();

    if (label === "about" || label === "about us") {
      return {
        ...link,
        href: "/about-us",
      };
    }

    if (
      label === "contact" ||
      label === "contact us" ||
      label === "contact-us"
    ) {
      return {
        ...link,
        href: "/contact-us",
      };
    }

    return link;
  });

  /* =========================================================
     POPUP
  ========================================================== */

  const openQuote = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setPopup("quote");
  };

  const openConsultation = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setPopup("consultation");
  };

  const closePopup = () => {
    setPopup(null);
  };

  const popupPrefix = popup ?? "form";

  /* =========================================================
     CLOSE MOBILE MENU
  ========================================================== */

  const closeMobileMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="sticky top-0 z-50 w-full bg-white shadow-[0_2px_15px_rgba(0,0,0,0.06)]">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex h-[76px] items-center justify-between sm:h-[86px] lg:h-[100px]">
            {/* =================================================
                LOGO
            ================================================== */}

            <Link
              href="/"
              aria-label="GenMax IT Solution Home"
              className="relative ml-0 flex h-[64px] w-[210px] shrink-0 items-center sm:h-[72px] sm:w-[245px] lg:ml-4 lg:h-[82px] lg:w-[285px] xl:ml-6 xl:h-[86px] xl:w-[300px]"
            >
              <Image
                src="/images/genmax-logo.png"
                alt="GenMax IT Solution"
                fill
                priority
                sizes="(max-width: 640px) 210px, (max-width: 1024px) 245px, 300px"
                className="object-contain object-left"
              />
            </Link>

            {/* =================================================
                RIGHT SIDE
            ================================================== */}

            <div className="flex items-center">
              {/* =================================================
                  DESKTOP NAVIGATION
              ================================================== */}

              <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
                {updatedNavbarLinks.map((link) => {
                  const isServices =
                    link.label.toLowerCase().trim() === "services";

                  /* =================================================
                     SERVICES
                  ================================================= */

                  if (isServices) {
                    return (
                      <div
                        key={link.label}
                        className="relative flex h-[100px] items-center"
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        {/* SERVICES TEXT/BUTTON */}

                        <button
                          type="button"
                          aria-expanded={servicesOpen}
                          onClick={() =>
                            setServicesOpen((prev) => !prev)
                          }
                          onMouseEnter={() => setServicesOpen(true)}
                          className={`group flex h-auto items-center gap-1 whitespace-nowrap bg-transparent p-0 text-[12px] font-medium uppercase tracking-[0.35px] transition-colors duration-300 xl:text-[13px] ${
                            servicesOpen
                              ? "text-[#F04D02]"
                              : "text-[#333333]"
                          }`}
                        >
                          <span
                            className={`transition-colors duration-300 ${
                              servicesOpen
                                ? "text-[#F04D02]"
                                : "text-[#333333] group-hover:text-[#F04D02]"
                            }`}
                          >
                            SERVICES
                          </span>

                          <ChevronDown
                            size={14}
                            strokeWidth={1.8}
                            className={`shrink-0 transition-colors duration-300 ${
                              servicesOpen
                                ? "text-[#F04D02]"
                                : "text-[#333333] group-hover:text-[#F04D02]"
                            }`}
                          />
                        </button>

                        {/* =================================================
                            DESKTOP SERVICES DROPDOWN
                        ================================================== */}

                        <div
                          onMouseEnter={() => setServicesOpen(true)}
                          className={`absolute left-1/2 top-[100px] z-[100] w-[calc(100vw-100px)] max-w-[1280px] -translate-x-1/2 transition-all duration-300 ${
                            servicesOpen
                              ? "visible translate-y-0 opacity-100"
                              : "pointer-events-none invisible -translate-y-2 opacity-0"
                          }`}
                        >
                          <div className="border-t border-[#EEEEEE] bg-white shadow-[0_18px_45px_rgba(0,0,0,0.12)]">
                            <div className="px-7 py-7 lg:px-9 xl:px-10">
                              <div className="grid grid-cols-3 gap-7 lg:gap-9">
                                {serviceMegaMenu.map((column) => (
                                  <div key={column.title}>
                                    {/* COLUMN HEADING */}

                                    <div className="mb-5">
                                      <h3 className="text-[15px] font-bold uppercase tracking-[0.5px] text-[#F04D02]">
                                        {column.title}
                                      </h3>

                                      <div className="mt-3 h-[1px] w-full bg-[#D8D8D8]" />
                                    </div>

                                    {/* SERVICE LINKS */}

                                    <div className="flex flex-col">
                                      {column.items.map((service) => (
                                        <Link
                                          key={service.label}
                                          href={service.href}
                                          onClick={() =>
                                            setServicesOpen(false)
                                          }
                                          className="block w-fit py-[9px] text-[14px] font-semibold leading-5 !text-[#687582] transition-colors duration-200 hover:!text-[#F04D02]"
                                        >
                                          {service.label}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  /* =================================================
                     NORMAL DESKTOP LINKS
                  ================================================== */

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="w-fit whitespace-nowrap text-[12px] font-medium uppercase tracking-[0.35px] !text-[#333333] transition-colors duration-300 hover:!text-[#F04D02] xl:text-[13px]"
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* =================================================
                  DESKTOP BUTTONS
              ================================================== */}

              <div className="ml-5 hidden items-center gap-2 lg:flex xl:ml-6">
                {/* GET A QUOTE */}

                <button
                  type="button"
                  onClick={openQuote}
                  className="group relative inline-flex h-[46px] items-center justify-center overflow-hidden rounded-[2px] border border-[#222222] bg-[#222222] px-5 text-[10px] font-semibold uppercase tracking-[0.8px] text-white shadow-[0_5px_15px_rgba(0,0,0,0.12)] transition-all duration-300 hover:border-[#F04D02] xl:h-[48px] xl:px-7 xl:text-[11px]"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#F04D02] to-[#FE8302] transition-transform duration-300 group-hover:translate-x-0" />

                  <span className="relative z-10">
                    Get A Quote
                  </span>
                </button>

                {/* LET'S TALK */}

                <button
                  type="button"
                  onClick={openConsultation}
                  className="group relative inline-flex h-[46px] items-center justify-center overflow-hidden rounded-[2px] border border-[#F04D02] bg-gradient-to-r from-[#F04D02] to-[#FE8302] px-5 text-[10px] font-semibold uppercase tracking-[0.8px] text-white shadow-[0_5px_15px_rgba(240,77,2,0.20)] transition-all duration-300 xl:h-[48px] xl:px-7 xl:text-[11px]"
                >
                  <span className="absolute inset-0 translate-x-full bg-gradient-to-r from-[#222222] to-[#333333] transition-transform duration-300 group-hover:translate-x-0" />

                  <span className="relative z-10">
                    Let&apos;s Talk
                  </span>
                </button>

                {/* HAMBURGER */}

                <button
                  type="button"
                  aria-label="Open menu"
                  onClick={() => setIsOpen(true)}
                  className="ml-1 flex h-[46px] w-[46px] items-center justify-center text-[#333333] transition-colors duration-300 hover:text-[#F04D02] xl:h-[48px] xl:w-[48px]"
                >
                  <Menu
                    size={29}
                    strokeWidth={1.8}
                    className="xl:h-[31px] xl:w-[31px]"
                  />
                </button>
              </div>

              {/* =================================================
                  MOBILE MENU BUTTON
              ================================================== */}

              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setIsOpen(true)}
                className="flex h-[42px] w-[42px] items-center justify-center text-[#333333] transition-colors duration-300 hover:text-[#F04D02] lg:hidden"
              >
                <Menu size={27} strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================
            MOBILE SIDE MENU
        ========================================================== */}

        <div
          className={`fixed inset-0 z-[100] transition-all duration-300 ${
            isOpen
              ? "pointer-events-auto visible"
              : "pointer-events-none invisible"
          }`}
        >
          {/* OVERLAY */}

          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMobileMenu}
            className={`absolute inset-0 h-full w-full bg-black/40 transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* SIDE PANEL */}

          <div
            className={`absolute right-0 top-0 h-full w-[290px] overflow-y-auto bg-white p-6 shadow-2xl transition-transform duration-300 sm:w-[360px] sm:p-7 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* HEADER */}

            <div className="flex items-center justify-between border-b border-[#EEEEEE] pb-5">
              <Link
                href="/"
                aria-label="GenMax IT Solution Home"
                onClick={closeMobileMenu}
                className="relative h-[58px] w-[195px] sm:h-[68px] sm:w-[225px]"
              >
                <Image
                  src="/images/genmax-logo.png"
                  alt="GenMax IT Solution"
                  fill
                  sizes="225px"
                  className="object-contain object-left"
                />
              </Link>

              <button
                type="button"
                aria-label="Close menu"
                onClick={closeMobileMenu}
                className="flex h-[40px] w-[40px] items-center justify-center text-[#333333] transition-colors duration-300 hover:text-[#F04D02]"
              >
                <X size={25} strokeWidth={1.7} />
              </button>
            </div>

            {/* MOBILE LINKS */}

            <nav className="mt-7 flex flex-col sm:mt-8">
              {updatedNavbarLinks.map((link) => {
                const isServices =
                  link.label.toLowerCase().trim() === "services";

                /* =================================================
                   MOBILE SERVICES
                ================================================== */

                if (isServices) {
                  return (
                    <div key={link.label}>
                      <button
                        type="button"
                        aria-expanded={servicesOpen}
                        onClick={() =>
                          setServicesOpen((prev) => !prev)
                        }
                        className={`flex w-full items-center justify-between border-b border-[#EEEEEE] py-4 text-left text-[13px] font-medium uppercase tracking-[0.7px] transition-colors duration-300 ${
                          servicesOpen
                            ? "text-[#F04D02]"
                            : "text-[#333333]"
                        }`}
                      >
                        <span>SERVICES</span>

                        <ChevronDown
                          size={16}
                          strokeWidth={1.8}
                          className="shrink-0"
                        />
                      </button>

                      {/* MOBILE DROPDOWN */}

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          servicesOpen
                            ? "max-h-[1200px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="bg-[#FAFAFA] px-3 py-4">
                          {serviceMegaMenu.map((column) => (
                            <div
                              key={column.title}
                              className="mb-5 last:mb-0"
                            >
                              {/* HEADING */}

                              <h3 className="mb-2 text-[12px] font-bold uppercase tracking-[0.5px] text-[#F04D02]">
                                {column.title}
                              </h3>

                              {/* SERVICES */}

                              {column.items.map((service) => (
                                <Link
                                  key={service.label}
                                  href={service.href}
                                  onClick={closeMobileMenu}
                                  className="block w-fit border-b border-[#EEEEEE] py-2.5 text-[12px] font-semibold leading-5 !text-[#687582] transition-colors duration-200 hover:!text-[#F04D02]"
                                >
                                  {service.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                /* =================================================
                   NORMAL MOBILE LINKS
                ================================================== */

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="w-fit border-b border-[#EEEEEE] py-3.5 text-[12px] font-medium uppercase tracking-[0.7px] !text-[#333333] transition-colors duration-300 hover:!text-[#F04D02] sm:py-4 sm:text-[13px]"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* MOBILE BUTTONS */}

            <div className="mt-7 flex flex-col gap-3 sm:mt-8">
              {/* GET A QUOTE */}

              <button
                type="button"
                onClick={openQuote}
                className="group relative flex h-[48px] items-center justify-center overflow-hidden rounded-[2px] border border-[#222222] bg-[#222222] text-[11px] font-semibold uppercase tracking-[0.8px] text-white transition-all duration-300"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#F04D02] to-[#FE8302] transition-transform duration-300 group-hover:translate-x-0" />

                <span className="relative z-10">
                  Get A Quote
                </span>
              </button>

              {/* LET'S TALK */}

              <button
                type="button"
                onClick={openConsultation}
                className="group relative flex h-[48px] items-center justify-center overflow-hidden rounded-[2px] border border-[#F04D02] bg-gradient-to-r from-[#F04D02] to-[#FE8302] text-[11px] font-semibold uppercase tracking-[0.8px] text-white transition-all duration-300"
              >
                <span className="absolute inset-0 translate-x-full bg-gradient-to-r from-[#222222] to-[#333333] transition-transform duration-300 group-hover:translate-x-0" />

                <span className="relative z-10">
                  Let&apos;s Talk
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================
          POPUP
      ========================================================== */}

      <div
        className={`fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto px-4 py-6 transition-all duration-300 sm:px-6 ${
          popup
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        {/* BACKDROP */}

        <button
          type="button"
          aria-label="Close popup"
          onClick={closePopup}
          className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
        />

        {/* POPUP BOX */}

        <div
          className={`relative z-10 my-auto w-full max-w-[960px] overflow-hidden rounded-[3px] bg-gradient-to-br from-[#C90000] via-[#D30020] to-[#E91E63] shadow-[0_25px_80px_rgba(0,0,0,0.35)] transition-all duration-300 ${
            popup
              ? "translate-y-0 scale-100"
              : "translate-y-5 scale-[0.96]"
          }`}
        >
          {/* DECORATIVE CIRCLES */}

          <div className="pointer-events-none absolute -right-[35px] -top-[45px] h-[175px] w-[175px] rounded-full border border-white/10" />

          <div className="pointer-events-none absolute bottom-[35px] left-[25%] h-[70px] w-[70px] rounded-full border border-white/15" />

          <div className="relative px-6 py-7 sm:px-10 sm:py-10 lg:px-14 lg:py-11">
            {/* HEADER */}

            <div className="flex items-start justify-between">
              <div className="max-w-[850px]">
                <h2 className="text-[30px] font-medium leading-[1.1] tracking-[-1px] text-white sm:text-[38px] lg:text-[42px]">
                  {popup === "quote"
                    ? "Get A Quote"
                    : "Free Consultation"}
                </h2>

                <p className="mt-1.5 text-[13px] font-medium leading-5 text-white sm:text-[15px]">
                  {popup === "quote"
                    ? "We are here for you! How can we help?"
                    : "Please fill out the quick form and we will be in touch with you in lightning speed"}
                </p>
              </div>

              <button
                type="button"
                aria-label="Close popup"
                onClick={closePopup}
                className="ml-4 flex h-[38px] w-[38px] shrink-0 items-center justify-center text-white/80 transition-all duration-300 hover:rotate-90 hover:text-white"
              >
                <X size={26} strokeWidth={1.5} />
              </button>
            </div>

            {/* FORM */}

            <form
              className="mt-8 sm:mt-10"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              {/* NAME + PHONE */}

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10">
                <div>
                  <label
                    htmlFor={`${popupPrefix}-name`}
                    className="mb-2 block text-[14px] font-medium text-white"
                  >
                    Name<span>*</span>
                  </label>

                  <input
                    id={`${popupPrefix}-name`}
                    name="name"
                    type="text"
                    required
                    className="h-[36px] w-full border-0 border-b border-white/90 bg-transparent px-0 text-[15px] text-white outline-none focus:border-white focus:ring-0"
                  />
                </div>

                <div>
                  <label
                    htmlFor={`${popupPrefix}-phone`}
                    className="mb-2 block text-[14px] font-medium text-white"
                  >
                    Phone<span>*</span>
                  </label>

                  <div className="flex h-[36px] items-center border-b border-white/90">
                    <button
                      type="button"
                      aria-label="Select country"
                      className="mr-2 flex shrink-0 items-center gap-1 text-white"
                    >
                      <span className="text-[18px] leading-none">
                        🇦🇪
                      </span>

                      <span className="text-[11px]">▾</span>
                    </button>

                    <input
                      id={`${popupPrefix}-phone`}
                      name="phone"
                      type="tel"
                      required
                      className="h-full flex-1 border-0 bg-transparent px-0 text-[15px] text-white outline-none focus:ring-0"
                    />
                  </div>
                </div>
              </div>

              {/* EMAIL */}

              <div className="mt-6 sm:mt-7">
                <label
                  htmlFor={`${popupPrefix}-email`}
                  className="mb-2 block text-[14px] font-medium text-white"
                >
                  Email<span>*</span>
                </label>

                <input
                  id={`${popupPrefix}-email`}
                  name="email"
                  type="email"
                  required
                  className="h-[36px] w-full border-0 border-b border-white/90 bg-transparent px-0 text-[15px] text-white outline-none focus:border-white focus:ring-0"
                />
              </div>

              {/* MESSAGE */}

              <div className="mt-6 sm:mt-7">
                <label
                  htmlFor={`${popupPrefix}-message`}
                  className="mb-2 block text-[14px] font-medium text-white"
                >
                  Message<span>*</span>
                </label>

                <textarea
                  id={`${popupPrefix}-message`}
                  name="message"
                  required
                  rows={2}
                  className="w-full resize-none border-0 border-b border-white/90 bg-transparent px-0 py-1 text-[15px] text-white outline-none focus:border-white focus:ring-0"
                />
              </div>

              {/* BOTTOM AREA */}

              <div className="mt-7 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <label className="flex cursor-pointer items-start gap-2 text-[12px] leading-5 text-white sm:text-[13px]">
                  <input
                    type="checkbox"
                    required
                    className="mt-[2px] h-[18px] w-[18px] shrink-0 cursor-pointer accent-white"
                  />

                  <span>
                    I agree to{" "}
                    <Link
                      href="/privacy-policy"
                      onClick={closePopup}
                      className="font-semibold text-white underline decoration-white decoration-1 underline-offset-4 transition-opacity hover:opacity-80"
                    >
                      Privacy Policy
                    </Link>{" "}
                    and consent to being contacted.
                  </span>
                </label>

                <button
                  type="submit"
                  className="relative flex h-[58px] w-full shrink-0 items-center justify-center overflow-hidden border border-white bg-transparent px-10 text-[13px] font-semibold uppercase tracking-[0.5px] text-white transition-all duration-300 hover:bg-white hover:text-[#D5002F] sm:h-[66px] sm:w-[245px]"
                  style={{
                    borderBottomRightRadius: "28px",
                  }}
                >
                  <span className="relative z-10">Send</span>
                </button>
              </div>
            </form>

            {/* DECORATIVE LOGO */}

            <div className="pointer-events-none absolute right-[70px] top-[55px] hidden opacity-20 sm:block">
              <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full border border-white/20">
                <span className="text-[28px] font-bold italic text-white">
                  G
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}