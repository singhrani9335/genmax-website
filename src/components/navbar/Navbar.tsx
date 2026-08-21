"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { navbarLinks } from "@/data/navbar";

type PopupType = "quote" | "consultation" | null;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [popup, setPopup] = useState<PopupType>(null);

  const openQuote = () => {
    setIsOpen(false);
    setPopup("quote");
  };

  const openConsultation = () => {
    setIsOpen(false);
    setPopup("consultation");
  };

  const closePopup = () => {
    setPopup(null);
  };

  const popupPrefix = popup ?? "form";

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-[0_2px_15px_rgba(0,0,0,0.06)]">
        <div className="mx-auto max-w-[1600px] px-8 sm:px-10 lg:px-14 xl:px-16">
          <div className="flex h-[100px] items-center justify-between">
            {/* ================= LOGO ================= */}
            <Link
              href="/"
              aria-label="Home"
              className="relative ml-6 flex h-[96px] w-[330px] shrink-0 items-center lg:ml-8"
            >
              <Image
                src="/images/genmax-logo.png"
                alt="Genmax"
                fill
                priority
                sizes="330px"
                className="origin-left scale-[1.28] object-contain object-left"
              />
            </Link>

            {/* ================= RIGHT SIDE ================= */}
            <div className="flex items-center">
              {/* ================= DESKTOP NAVIGATION ================= */}
              <nav className="hidden items-center gap-7 lg:flex xl:gap-8">
                {navbarLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="whitespace-nowrap text-[13px] font-medium uppercase tracking-[0.35px] text-[#222222] transition-colors duration-300 hover:text-[#F04D02]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* ================= DESKTOP BUTTONS ================= */}
              <div className="ml-6 hidden items-center gap-2 lg:flex xl:ml-7">
                {/* GET A QUOTE */}
                <button
                  type="button"
                  onClick={openQuote}
                  className="group relative inline-flex h-[48px] items-center justify-center overflow-hidden rounded-[2px] border border-[#222222] bg-[#222222] px-7 text-[11px] font-semibold uppercase tracking-[0.8px] text-white shadow-[0_5px_15px_rgba(0,0,0,0.12)] transition-all duration-300 hover:border-[#F04D02]"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#F04D02] to-[#FE8302] transition-transform duration-300 group-hover:translate-x-0" />

                  <span className="relative z-10">Get A Quote</span>
                </button>

                {/* LET'S TALK */}
                <button
                  type="button"
                  onClick={openConsultation}
                  className="group relative inline-flex h-[48px] items-center justify-center overflow-hidden rounded-[2px] border border-[#F04D02] bg-gradient-to-r from-[#F04D02] to-[#FE8302] px-7 text-[11px] font-semibold uppercase tracking-[0.8px] text-white shadow-[0_5px_15px_rgba(240,77,2,0.20)] transition-all duration-300"
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
                  className="ml-1 flex h-[48px] w-[48px] items-center justify-center text-[#222222] transition-colors duration-300 hover:text-[#F04D02]"
                >
                  <Menu size={31} strokeWidth={1.8} />
                </button>
              </div>

              {/* ================= MOBILE MENU BUTTON ================= */}
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setIsOpen(true)}
                className="flex h-[44px] w-[44px] items-center justify-center text-[#222222] transition-colors duration-300 hover:text-[#F04D02] lg:hidden"
              >
                <Menu size={28} strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </div>

        {/* ================= SIDE MENU ================= */}
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
            onClick={() => setIsOpen(false)}
            className={`absolute inset-0 h-full w-full bg-black/40 transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* MENU PANEL */}
          <div
            className={`absolute right-0 top-0 h-full w-[310px] bg-white p-7 shadow-2xl transition-transform duration-300 sm:w-[360px] ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* HEADER */}
            <div className="flex items-center justify-between border-b border-[#EEEEEE] pb-5">
              <Link
                href="/"
                aria-label="Home"
                onClick={() => setIsOpen(false)}
                className="relative h-[68px] w-[225px]"
              >
                <Image
                  src="/images/genmax-logo.png"
                  alt="Genmax"
                  fill
                  sizes="225px"
                  className="origin-left scale-[1.15] object-contain object-left"
                />
              </Link>

              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                className="flex h-[40px] w-[40px] items-center justify-center text-[#222222] transition-colors duration-300 hover:text-[#F04D02]"
              >
                <X size={25} strokeWidth={1.7} />
              </button>
            </div>

            {/* LINKS */}
            <nav className="mt-8 flex flex-col">
              {navbarLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-[#EEEEEE] py-4 text-[13px] font-medium uppercase tracking-[0.7px] text-[#222222] transition-colors duration-300 hover:text-[#F04D02]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* MOBILE BUTTONS */}
            <div className="mt-8 flex flex-col gap-3">
              {/* GET A QUOTE */}
              <button
                type="button"
                onClick={openQuote}
                className="group relative flex h-[50px] items-center justify-center overflow-hidden rounded-[2px] border border-[#222222] bg-[#222222] text-[11px] font-semibold uppercase tracking-[0.8px] text-white transition-all duration-300"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#F04D02] to-[#FE8302] transition-transform duration-300 group-hover:translate-x-0" />

                <span className="relative z-10">Get A Quote</span>
              </button>

              {/* LET'S TALK */}
              <button
                type="button"
                onClick={openConsultation}
                className="group relative flex h-[50px] items-center justify-center overflow-hidden rounded-[2px] border border-[#F04D02] bg-gradient-to-r from-[#F04D02] to-[#FE8302] text-[11px] font-semibold uppercase tracking-[0.8px] text-white transition-all duration-300"
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

      {/* ================= POPUP ================= */}
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

          <div className="relative px-7 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-11">
            {/* HEADER */}
            <div className="flex items-start justify-between">
              <div className="max-w-[850px]">
                <h2 className="text-[32px] font-medium leading-[1.1] tracking-[-1px] text-white sm:text-[38px] lg:text-[42px]">
                  {popup === "quote" ? "Get A Quote" : "Free Consultation"}
                </h2>

                <p className="mt-1.5 text-[14px] font-medium leading-5 text-white sm:text-[15px]">
                  {popup === "quote"
                    ? "We are here for you! How can we help?"
                    : "Please fill out the quick form and we will be in touch with you in lightning speed"}
                </p>
              </div>

              {/* CLOSE */}
              <button
                type="button"
                aria-label="Close popup"
                onClick={closePopup}
                className="ml-5 flex h-[38px] w-[38px] shrink-0 items-center justify-center text-white/80 transition-all duration-300 hover:rotate-90 hover:text-white"
              >
                <X size={26} strokeWidth={1.5} />
              </button>
            </div>

            {/* FORM */}
            <form
              className="mt-9 sm:mt-10"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              {/* NAME + PHONE */}
              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-10">
                {/* NAME */}
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

                {/* PHONE */}
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
                      <span className="text-[18px] leading-none">🇦🇪</span>
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
              <div className="mt-7">
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
              <div className="mt-7">
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
              <div className="mt-7 flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
                {/* CHECKBOX + PRIVACY POLICY */}
                <label className="flex cursor-pointer items-start gap-2 text-[13px] leading-5 text-white">
                  <input
                    type="checkbox"
                    required
                    className="mt-[2px] h-[18px] w-[18px] shrink-0 cursor-pointer accent-white"
                  />

                  <span>
                    I agree to the{" "}
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

                {/* SEND BUTTON */}
                <button
                  type="submit"
                  className="relative flex h-[66px] w-full shrink-0 items-center justify-center overflow-hidden border border-white bg-transparent px-12 text-[13px] font-semibold uppercase tracking-[0.5px] text-white transition-all duration-300 hover:bg-white hover:text-[#D5002F] sm:w-[245px]"
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