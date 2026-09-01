"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

import { navbarLinks } from "@/data/navbar";

type PopupType = "quote" | "consultation" | null;

const services = [
  {
    title: "Marketing",
    items: [
      ["Digital Marketing", "/services/digital-marketing"],
      ["SEO", "/services/seo"],
      ["Social Media Marketing", "/services/social-media-marketing"],
      ["Paid Ads Management", "/services/paid-ads-management"],
      ["Reputation Management", "/services/reputation-management"],
      ["Google Ads", "/services/google-ads"],
      ["Branding", "/services/branding"],
    ],
  },
  {
    title: "Web & Mobile",
    items: [
      ["E-Commerce Website", "/services/e-commerce-website"],
      ["Web Development", "/services/web-development"],
      ["Mobile App Development", "/services/mobile-app-development"],
      ["UI/UX Designing", "/services/ui-ux-designing"],
      ["QuickBooks Cloud Hosting", "/services/quickbooks-cloud-hosting"],
    ],
  },
  {
    title: "Graphic Design",
    items: [
      ["Graphic Designing", "/services/graphic-designing"],
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [popup, setPopup] = useState<PopupType>(null);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  const openPopup = (type: PopupType) => {
    closeMobileMenu();
    setPopup(type);
  };

  const getLink = (link: any) => {
    const label = link.label?.toLowerCase().trim();

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
  };

  const links = navbarLinks.map(getLink);

  return (
    <>
      {/* NAVBAR SPACER */}
      <div className="h-[76px] sm:h-[86px] lg:h-[100px]" />

      {/* HEADER */}
      <header className="fixed left-0 right-0 top-0 z-[9999] w-full bg-white shadow-[0_2px_15px_rgba(0,0,0,0.06)]">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="flex h-[76px] items-center justify-between sm:h-[86px] lg:h-[100px]">

            {/* LOGO */}
            <Link
              href="/"
              className="relative h-[60px] w-[200px] shrink-0 sm:h-[70px] sm:w-[240px] lg:h-[82px] lg:w-[285px]"
            >
              <Image
                src="/images/genmax-logo.png"
                alt="GenMax IT Solution"
                fill
                priority
                sizes="(max-width: 639px) 200px, (max-width: 1023px) 240px, 285px"
                className="object-contain object-left"
              />
            </Link>

            <div className="flex items-center">

              {/* DESKTOP NAVIGATION */}
              <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
                {links.map((link: any) => {
                  const isServices =
                    link.label?.toLowerCase() === "services";

                  if (isServices) {
                    return (
                      <div
                        key={link.label}
                        className="relative flex h-[100px] items-center"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        {/* SERVICES BUTTON */}
                        <button
                          type="button"
                          onClick={() =>
                            setServicesOpen((prev) => !prev)
                          }
                          className={`flex items-center gap-1 text-[12px] font-medium uppercase tracking-[0.35px] transition-colors duration-200 xl:text-[13px] ${
                            servicesOpen
                              ? "text-[#F04D02]"
                              : "text-[#333333]"
                          }`}
                        >
                          Services

                          <ChevronDown
                            size={15}
                            className={`transition-transform duration-300 ${
                              servicesOpen
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>

                        {/* DESKTOP MEGA MENU */}
                        <div
                          className={`absolute left-1/2 top-[100px] w-[calc(100vw-100px)] max-w-[1280px] -translate-x-1/2 transition-all duration-300 ${
                            servicesOpen
                              ? "visible translate-y-0 opacity-100"
                              : "pointer-events-none invisible -translate-y-2 opacity-0"
                          }`}
                        >
                          <div className="border-t border-[#eee] bg-white shadow-[0_18px_45px_rgba(0,0,0,0.12)]">
                            <div className="grid grid-cols-3 gap-8 px-10 py-8">

                              {services.map((group) => (
                                <div key={group.title}>

                                  {/* CATEGORY TITLE */}
                                  <h3 className="border-b border-[#ddd] pb-3 text-[15px] font-bold uppercase tracking-[0.5px] text-[#F04D02]">
                                    {group.title}
                                  </h3>

                                  {/* SERVICE LINKS */}
                                  <div className="mt-3 flex flex-col">
                                    {group.items.map(
                                      ([name, href]) => (
                                        <Link
                                          key={name}
                                          href={href}
                                          onClick={() =>
                                            setServicesOpen(false)
                                          }
                                          className="group block py-2 text-[14px] font-semibold text-[#687582] transition-all duration-200"
                                        >
                                          <span className="text-[#687582] transition-colors duration-200 group-hover:text-[#F04D02]">
                                            {name}
                                          </span>
                                        </Link>
                                      )
                                    )}
                                  </div>
                                </div>
                              ))}

                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="whitespace-nowrap text-[12px] font-medium uppercase tracking-[0.35px] text-[#333333] transition-colors duration-200 hover:text-[#F04D02] xl:text-[13px]"
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* DESKTOP BUTTONS */}
              <div className="ml-5 hidden items-center gap-2 lg:flex">

                <button
                  type="button"
                  onClick={() => openPopup("quote")}
                  className="h-[46px] border border-[#222] bg-[#222] px-6 text-[11px] font-semibold uppercase tracking-[0.7px] text-white transition-all hover:border-[#F04D02] hover:bg-[#F04D02]"
                >
                  Get A Quote
                </button>

                <button
                  type="button"
                  onClick={() => openPopup("consultation")}
                  className="h-[46px] bg-gradient-to-r from-[#F04D02] to-[#FE8302] px-6 text-[11px] font-semibold uppercase tracking-[0.7px] text-white transition-opacity hover:opacity-90"
                >
                  Let's Talk
                </button>

                <button
                  type="button"
                  aria-label="Open menu"
                  onClick={() => setMobileOpen(true)}
                  className="flex h-[46px] w-[46px] items-center justify-center text-[#333333] transition-colors hover:text-[#F04D02]"
                >
                  <Menu size={29} />
                </button>

              </div>

              {/* MOBILE MENU BUTTON */}
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
                className="flex h-[42px] w-[42px] items-center justify-center text-[#333333] lg:hidden"
              >
                <Menu size={27} />
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[10000] transition-all duration-300 ${
          mobileOpen
            ? "visible"
            : "pointer-events-none invisible"
        }`}
      >
        {/* OVERLAY */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={closeMobileMenu}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            mobileOpen
              ? "opacity-100"
              : "opacity-0"
          }`}
        />

        {/* DRAWER */}
        <aside
          className={`absolute right-0 top-0 h-full w-[300px] overflow-y-auto bg-white p-6 shadow-2xl transition-transform duration-300 sm:w-[360px] ${
            mobileOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          {/* MOBILE HEADER */}
          <div className="flex items-center justify-between border-b border-[#eee] pb-5">

            <Link
              href="/"
              onClick={closeMobileMenu}
              className="relative h-[60px] w-[200px]"
            >
              <Image
                src="/images/genmax-logo.png"
                alt="GenMax IT Solution"
                fill
                sizes="200px"
                className="object-contain object-left"
              />
            </Link>

            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMobileMenu}
              className="text-[#333333] transition-colors hover:text-[#F04D02]"
            >
              <X size={26} />
            </button>

          </div>

          {/* MOBILE LINKS */}
          <nav className="mt-6">
            {links.map((link: any) => {
              const isServices =
                link.label?.toLowerCase() === "services";

              if (isServices) {
                return (
                  <div key={link.label}>

                    {/* SERVICES BUTTON */}
                    <button
                      type="button"
                      onClick={() =>
                        setServicesOpen((prev) => !prev)
                      }
                      className={`flex w-full items-center justify-between border-b border-[#eee] py-4 text-[13px] font-medium uppercase tracking-[0.6px] transition-colors duration-200 ${
                        servicesOpen
                          ? "text-[#F04D02]"
                          : "text-[#333333]"
                      }`}
                    >
                      Services

                      <ChevronDown
                        size={17}
                        className={`transition-transform duration-300 ${
                          servicesOpen
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    {/* MOBILE SERVICES */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        servicesOpen
                          ? "max-h-[1300px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="bg-[#fafafa] p-4">

                        {services.map((group) => (
                          <div
                            key={group.title}
                            className="mb-5 last:mb-0"
                          >

                            {/* CATEGORY TITLE */}
                            <h3 className="mb-2 text-[12px] font-bold uppercase text-[#F04D02]">
                              {group.title}
                            </h3>

                            {/* MOBILE SERVICE LINKS */}
                            {group.items.map(
                              ([name, href]) => (
                                <Link
                                  key={name}
                                  href={href}
                                  onClick={closeMobileMenu}
                                  className="group block border-b border-[#eee] py-2.5 text-[12px] font-medium text-[#687582]"
                                >
                                  <span className="text-[#687582] transition-colors duration-200 group-hover:text-[#F04D02]">
                                    {name}
                                  </span>
                                </Link>
                              )
                            )}

                          </div>
                        ))}

                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="block border-b border-[#eee] py-4 text-[13px] font-medium uppercase tracking-[0.6px] text-[#333333] transition-colors duration-200 hover:text-[#F04D02]"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* MOBILE CTA */}
          <div className="mt-7 space-y-3">

            <button
              type="button"
              onClick={() => openPopup("quote")}
              className="h-[48px] w-full bg-[#222] text-[11px] font-semibold uppercase tracking-[0.8px] text-white transition-colors hover:bg-[#F04D02]"
            >
              Get A Quote
            </button>

            <button
              type="button"
              onClick={() => openPopup("consultation")}
              className="h-[48px] w-full bg-gradient-to-r from-[#F04D02] to-[#FE8302] text-[11px] font-semibold uppercase tracking-[0.8px] text-white"
            >
              Let's Talk
            </button>

          </div>
        </aside>
      </div>

      {/* POPUP */}
      <div
        className={`fixed inset-0 z-[20000] flex items-center justify-center p-4 transition-all duration-300 ${
          popup
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        {/* OVERLAY */}
        <button
          type="button"
          aria-label="Close popup"
          onClick={() => setPopup(null)}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* POPUP CONTENT */}
        <div
          className={`relative z-10 w-full max-w-[900px] bg-gradient-to-br from-[#C90000] via-[#D30020] to-[#E91E63] p-6 shadow-2xl transition-all duration-300 sm:p-10 lg:p-14 ${
            popup
              ? "translate-y-0 scale-100"
              : "translate-y-5 scale-95"
          }`}
        >
          {/* CLOSE */}
          <button
            type="button"
            aria-label="Close popup"
            onClick={() => setPopup(null)}
            className="absolute right-5 top-5 text-white/80 transition-colors hover:text-white"
          >
            <X size={27} />
          </button>

          <h2 className="text-[30px] font-medium text-white sm:text-[40px]">
            {popup === "quote"
              ? "Get A Quote"
              : "Free Consultation"}
          </h2>

          <p className="mt-2 text-[14px] text-white sm:text-[15px]">
            {popup === "quote"
              ? "We are here for you! How can we help?"
              : "Fill out the form and our team will contact you shortly."}
          </p>

          {/* FORM */}
          <form
            className="mt-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-7 sm:grid-cols-2">

              <FormField
                label="Name"
                name="name"
                type="text"
              />

              <FormField
                label="Phone"
                name="phone"
                type="tel"
              />

            </div>

            <div className="mt-7">
              <FormField
                label="Email"
                name="email"
                type="email"
              />
            </div>

            <div className="mt-7">
              <label className="mb-2 block text-sm text-white">
                Message*
              </label>

              <textarea
                required
                rows={3}
                className="w-full resize-none border-0 border-b border-white bg-transparent px-0 py-2 text-white outline-none"
              />
            </div>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

              <label className="flex items-start gap-2 text-[12px] leading-5 text-white">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4"
                />

                <span>
                  I agree to the{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-semibold underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              <button
                type="submit"
                className="h-[58px] w-full border border-white px-10 text-[12px] font-semibold uppercase tracking-[0.6px] text-white transition-colors hover:bg-white hover:text-[#D5002F] sm:w-[220px]"
              >
                Send
              </button>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}

/* REUSABLE FORM FIELD */
function FormField({
  label,
  name,
  type,
}: {
  label: string;
  name: string;
  type: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm text-white"
      >
        {label}*
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required
        className="h-[38px] w-full border-0 border-b border-white bg-transparent px-0 text-white outline-none"
      />
    </div>
  );
}