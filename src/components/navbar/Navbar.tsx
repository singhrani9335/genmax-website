"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  ChevronDown,
  Menu,
  X,
  Megaphone,
  Search,
  Share2,
  ShoppingCart,
  Code2,
  PenTool,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa6";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { navbarLinks } from "@/data/navbar";

/* =========================================================
   TYPES
========================================================= */

type PopupType = "quote" | "consultation" | null;

type NavbarLink = {
  label: string;
  href: string;
};

type ServiceGroup = {
  title: string;
  items: [string, string][];
};

/* =========================================================
   SERVICES
========================================================= */

const services: ServiceGroup[] = [
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
    items: [["Graphic Designing", "/services/graphic-designing"]],
  },
];

/* =========================================================
   MENU SERVICES
========================================================= */

const menuServices = [
  {
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    icon: Megaphone,
  },
  {
    title: "SEO",
    href: "/services/seo",
    icon: Search,
  },
  {
    title: "Social Media Marketing",
    href: "/services/social-media-marketing",
    icon: Share2,
  },
  {
    title: "E-Commerce Website",
    href: "/services/e-commerce-website",
    icon: ShoppingCart,
  },
  {
    title: "Web Development",
    href: "/services/web-development",
    icon: Code2,
  },
  {
    title: "Graphic Designing",
    href: "/services/graphic-designing",
    icon: PenTool,
  },
];

/* =========================================================
   SOCIAL LINKS
========================================================= */

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: FaLinkedinIn,
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/",
    icon: FaPinterestP,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: FaYoutube,
  },
];

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [popup, setPopup] = useState<PopupType>(null);

  /* =======================================================
     POPUP FORM STATES
  ======================================================= */

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [formError, setFormError] = useState("");
  const [popupPhone, setPopupPhone] = useState("");

  /* =======================================================
     CLOSE MENU
  ======================================================= */

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  /* =======================================================
     OPEN POPUP
  ======================================================= */

  const openPopup = (type: PopupType) => {
    closeMobileMenu();
    setPopup(type);
    setFormMessage("");
    setFormError("");
    setPopupPhone("");
  };

  /* =======================================================
     CLOSE POPUP
  ======================================================= */

  const closePopup = () => {
    if (isSubmitting) return;

    setPopup(null);
    setFormMessage("");
    setFormError("");
    setPopupPhone("");
  };

  /* =======================================================
     POPUP FORM SUBMIT
  ======================================================= */

  const handlePopupSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setFormMessage("");
    setFormError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const phone = popupPhone.trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const privacyAccepted = formData.get("privacy");

    if (!name || !phone || !email || !message) {
      setFormError("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    if (!privacyAccepted) {
      setFormError("Please agree to the Privacy Policy.");
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setFormError("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Failed to send your message."
        );
      }

      setFormMessage(
        popup === "quote"
          ? "Your quote request has been sent successfully."
          : "Your consultation request has been sent successfully."
      );

      form.reset();
      setPopupPhone("");
    } catch (error) {
      console.error("Popup Form Error:", error);

      setFormError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /* =======================================================
     NORMALIZE NAVBAR LINKS
  ======================================================= */

  const getLink = (link: NavbarLink): NavbarLink => {
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

  const links = (navbarLinks as NavbarLink[]).map(getLink);

  return (
    <>
      {/* =====================================================
          NAVBAR SPACER
      ===================================================== */}

      <div className="h-[76px] sm:h-[86px] lg:h-[100px]" />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="fixed left-0 right-0 top-0 z-[9999] w-full bg-white shadow-[0_2px_15px_rgba(0,0,0,0.06)]">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="flex h-[76px] items-center justify-between sm:h-[86px] lg:h-[100px]">

            {/* =================================================
                LOGO
            ================================================= */}

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

              {/* =================================================
                  DESKTOP NAVIGATION
              ================================================= */}

              <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
                {links.map((link) => {
                  const isServices =
                    link.label?.toLowerCase().trim() === "services";

                  if (isServices) {
                    return (
                      <div
                        key={link.label}
                        className="relative flex h-[100px] items-center"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setServicesOpen((prev) => !prev)
                          }
                          className={`flex items-center gap-1 text-[12px] font-bold uppercase tracking-[0.35px] transition-colors duration-200 xl:text-[13px] ${
                            servicesOpen
                              ? "text-[#F04D02]"
                              : "text-[#333333]"
                          }`}
                        >
                          Services

                          <ChevronDown
                            size={15}
                            className={`transition-transform duration-300 ${
                              servicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* DESKTOP SERVICES MENU */}

                        <div
                          className={`absolute left-1/2 top-[100px] w-[calc(100vw-100px)] max-w-[1280px] -translate-x-1/2 transition-all duration-300 ${
                            servicesOpen
                              ? "visible translate-y-0 opacity-100"
                              : "pointer-events-none invisible -translate-y-2 opacity-0"
                          }`}
                        >
                          <div className="border-t border-[#eeeeee] bg-white shadow-[0_18px_45px_rgba(0,0,0,0.12)]">
                            <div className="grid grid-cols-3 gap-8 px-10 py-8">
                              {services.map((group) => (
                                <div key={group.title}>
                                  <h3 className="border-b border-[#dddddd] pb-3 text-[15px] font-bold uppercase tracking-[0.5px] text-[#F04D02]">
                                    {group.title}
                                  </h3>

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
                                          <span className="transition-colors duration-200 group-hover:text-[#F04D02]">
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
                      className="whitespace-nowrap text-[12px] font-bold uppercase tracking-[0.35px] text-[#333333] transition-colors duration-200 hover:text-[#F04D02] xl:text-[13px]"
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* =================================================
                  DESKTOP BUTTONS
              ================================================= */}

              <div className="ml-5 hidden items-center gap-2 lg:flex">
                <button
                  type="button"
                  onClick={() => openPopup("quote")}
                  className="h-[46px] border border-[#222222] bg-[#222222] px-6 text-[11px] font-semibold uppercase tracking-[0.7px] text-white transition-all hover:border-[#F04D02] hover:bg-[#F04D02]"
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

                {/* MENU BUTTON */}

                <button
                  type="button"
                  aria-label="Open menu"
                  aria-expanded={mobileOpen}
                  onClick={() => setMobileOpen(true)}
                  className="flex h-[46px] w-[46px] items-center justify-center text-[#333333] transition-colors hover:text-[#F04D02]"
                >
                  <Menu size={29} />
                </button>
              </div>

              {/* =================================================
                  MOBILE MENU BUTTON
              ================================================= */}

              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(true)}
                className="flex h-[42px] w-[42px] items-center justify-center text-[#333333] lg:hidden"
              >
                <Menu size={27} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================
          RIGHT SIDE MENU DRAWER
      ========================================================= */}

      <div
        className={`fixed inset-0 z-[10000] transition-opacity duration-300 ${
          mobileOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        {/* DARK OVERLAY */}

        <button
          type="button"
          aria-label="Close menu"
          onClick={closeMobileMenu}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* RIGHT SIDE WHITE DRAWER */}

        <aside
          className={`absolute right-0 top-0 flex h-full w-[320px] flex-col overflow-y-auto bg-white shadow-[-15px_0_45px_rgba(0,0,0,0.12)] transition-transform duration-500 ease-out sm:w-[380px] lg:w-[420px] ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* DRAWER HEADER */}

          <div className="flex shrink-0 items-center justify-between border-b border-[#eeeeee] px-6 py-5 sm:px-8">

            {/* LOGO */}

            <Link
              href="/"
              onClick={closeMobileMenu}
              className="relative h-[58px] w-[190px] sm:h-[65px] sm:w-[220px]"
            >
              <Image
                src="/images/genmax-logo.png"
                alt="GenMax IT Solution"
                fill
                sizes="220px"
                className="object-contain object-left"
              />
            </Link>

            {/* CLOSE */}

            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMobileMenu}
              className="flex h-[42px] w-[42px] shrink-0 items-center justify-center text-[#333333] transition-colors duration-200 hover:text-[#F04D02]"
            >
              <X size={25} strokeWidth={1.7} />
            </button>
          </div>

          {/* DRAWER CONTENT */}

          <div className="flex-1 overflow-y-auto px-6 py-5 sm:px-8">

            {/* NAVIGATION LINKS */}

            <nav>
              {links.map((link) => {
                const isServices =
                  link.label?.toLowerCase().trim() === "services";

                if (isServices) {
                  return (
                    <div key={link.label}>
                      {/* SERVICES */}

                      <button
                        type="button"
                        onClick={() =>
                          setServicesOpen((prev) => !prev)
                        }
                        className={`flex w-full items-center justify-between border-b border-[#eeeeee] py-4 text-left text-[17px] font-medium transition-colors duration-200 ${
                          servicesOpen
                            ? "text-[#F04D02]"
                            : "text-[#222222]"
                        }`}
                      >
                        <span>Services</span>

                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            servicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* SERVICES LIST */}

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          servicesOpen
                            ? "max-h-[1000px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="bg-[#fafafa] px-4 py-3">
                          {services.map((group) => (
                            <div
                              key={group.title}
                              className="mb-5 last:mb-0"
                            >
                              <h3 className="mb-2 text-[11px] font-bold uppercase tracking-[0.8px] text-[#F04D02]">
                                {group.title}
                              </h3>

                              {group.items.map(
                                ([name, href]) => (
                                  <Link
                                    key={name}
                                    href={href}
                                    onClick={closeMobileMenu}
                                    className="block border-b border-[#eeeeee] py-2.5 text-[13px] font-medium text-[#687582] transition-colors duration-200 hover:text-[#F04D02]"
                                  >
                                    {name}
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
                    className="block border-b border-[#eeeeee] py-4 text-[17px] font-medium text-[#222222] transition-colors duration-200 hover:text-[#F04D02]"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* SOCIAL MEDIA */}

            <div className="mt-9 border-t border-[#eeeeee] pt-7">
              <p className="mb-5 text-[16px] font-medium text-[#333333]">
                Follow Us On:
              </p>

              <div className="flex items-center gap-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex items-center justify-center text-[#222222] transition-colors duration-200 hover:text-[#F04D02]"
                    >
                      <Icon size={21} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* CONTACT INFORMATION */}

            <div className="mt-9 border-t border-[#eeeeee] pt-7">

              {/* LOCATION */}

              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-0.5 shrink-0 text-[#F04D02]"
                />

                <div>
                  <h3 className="text-[14px] font-bold uppercase tracking-[0.4px] text-[#222222]">
                    India
                  </h3>

                  <p className="mt-1 text-[11px] uppercase tracking-[1px] text-[#999999]">
                    GenMax IT Solution
                  </p>
                </div>
              </div>

              <p className="mt-4 pl-[32px] text-[13px] leading-6 text-[#687582]">
                Sec-45, Delhi NCR, India – 201301,
                <br />
                C3M Aneja Market, Sadarpur
              </p>

              {/* PHONE */}

              <a
                href="tel:+919938307637"
                className="mt-4 flex items-center gap-3 text-[13px] text-[#687582] transition-colors hover:text-[#F04D02]"
              >
                <Phone size={16} />
                +91 99383 07637
              </a>

              {/* EMAIL */}

              <a
                href="mailto:genmaxitsolution@gmail.com"
                className="mt-3 flex items-center gap-3 break-all text-[13px] text-[#687582] transition-colors hover:text-[#F04D02]"
              >
                <Mail size={16} />
                genmaxitsolution@gmail.com
              </a>
            </div>

            {/* CTA BUTTONS */}

            <div className="mt-8 space-y-3 pb-5">
              <button
                type="button"
                onClick={() => openPopup("quote")}
                className="h-[48px] w-full bg-[#222222] text-[11px] font-semibold uppercase tracking-[0.8px] text-white transition-colors duration-200 hover:bg-[#F04D02]"
              >
                Get A Quote
              </button>

              <button
                type="button"
                onClick={() =>
                  openPopup("consultation")
                }
                className="h-[48px] w-full bg-gradient-to-r from-[#F04D02] to-[#FE8302] text-[11px] font-semibold uppercase tracking-[0.8px] text-white transition-opacity duration-200 hover:opacity-90"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* =========================================================
          POPUP
      ========================================================= */}

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
          onClick={closePopup}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* POPUP CONTENT */}

        <div
          className={`popup-scroll-hidden relative z-10 w-full max-w-[900px] max-h-[95vh] overflow-y-auto bg-gradient-to-br from-[#C90000] via-[#F04D02] to-[#FE8302] p-6 shadow-2xl transition-all duration-300 sm:p-10 lg:p-14 ${
            popup
              ? "translate-y-0 scale-100"
              : "translate-y-5 scale-95"
          }`}
        >
          {/* CLOSE */}

          <button
            type="button"
            aria-label="Close popup"
            onClick={closePopup}
            disabled={isSubmitting}
            className="absolute right-5 top-5 text-white/80 transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            <X size={27} />
          </button>

          {/* HEADING */}

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
            onSubmit={handlePopupSubmit}
          >
            <div className="grid gap-7 sm:grid-cols-2">

              {/* NAME */}

              <FormField
                label="Name"
                name="name"
                type="text"
              />

              {/* PHONE */}

              <div>
                <label
                  htmlFor="popup-phone"
                  className="mb-2 block text-sm text-white"
                >
                  Phone*
                </label>

                <div className="relative mt-1 w-full">
                  <PhoneInput
                    country="in"
                    value={popupPhone}
                    onChange={(value) => setPopupPhone(value)}
                    enableSearch
                    preferredCountries={[
                      "in",
                      "ae",
                      "us",
                      "gb",
                    ]}
                    searchPlaceholder="Search country..."
                    placeholder="Enter phone number"
                    disabled={isSubmitting}
                    containerClass="!w-full"
                    inputClass="!h-[38px] !w-full !rounded-none !border-0 !border-b !border-white !bg-transparent !pl-[48px] !text-[14px] !font-medium !text-white !outline-none placeholder:!text-white/60 focus:!border-white"
                    buttonClass="!h-[38px] !w-[42px] !rounded-none !border-0 !border-b !border-white !bg-transparent"
                    dropdownClass="!z-[30000]"
                    searchClass="!mx-[10px] !my-[6px] !w-[calc(100%-20px)]"
                    inputProps={{
                      id: "popup-phone",
                      name: "phone",
                      required: true,
                      autoComplete: "tel",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* EMAIL */}

            <div className="mt-7">
              <FormField
                label="Email"
                name="email"
                type="email"
              />
            </div>

            {/* MESSAGE */}

            <div className="mt-7">
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-white"
              >
                Message*
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={3}
                className="w-full resize-none border-0 border-b border-white bg-transparent px-0 py-2 text-white outline-none placeholder:text-white/60"
                placeholder="Write your message..."
              />
            </div>

            {/* SUCCESS MESSAGE */}

            {formMessage && (
              <div className="mt-5 border border-white/40 bg-white/10 px-4 py-3 text-[13px] leading-5 text-white">
                {formMessage}
              </div>
            )}

            {/* ERROR MESSAGE */}

            {formError && (
              <div className="mt-5 border border-white/40 bg-black/10 px-4 py-3 text-[13px] leading-5 text-white">
                {formError}
              </div>
            )}

            {/* PRIVACY + SEND */}

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

              <label className="flex items-start gap-2 text-[12px] leading-5 text-white">
                <input
                  type="checkbox"
                  name="privacy"
                  required
                  className="mt-1 h-4 w-4"
                />

                <span>
                  I agree to the{" "}
                  <Link
                    href="/privacy-policy"
                    onClick={() => {
                      if (!isSubmitting) {
                        setPopup(null);
                      }
                    }}
                    className="font-semibold underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="h-[58px] w-full border border-white px-10 text-[12px] font-semibold uppercase tracking-[0.6px] text-white transition-colors hover:bg-white hover:text-[#F04D02] disabled:cursor-not-allowed disabled:opacity-60 sm:w-[220px]"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

/* =========================================================
   REUSABLE FORM FIELD
========================================================= */

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
        className="h-[38px] w-full border-0 border-b border-white bg-transparent px-0 text-white outline-none placeholder:text-white/60"
      />
    </div>
  );
}