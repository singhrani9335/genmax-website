"use client";

import Image from "next/image";
import Link from "next/link";

import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#17110F] py-11 sm:py-13 lg:py-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#F04D02]/20 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#FE8302]/15 blur-[120px]" />

      <div className="pointer-events-none absolute left-[40%] top-[35%] h-[300px] w-[300px] rounded-full bg-[#F04D02]/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1450px] px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid items-center gap-8 lg:grid-cols-[40%_60%] lg:gap-8">

          {/* LEFT CONTENT */}
          <div className="relative lg:pr-12">

            {/* Heading */}
            <h2 className="text-[38px] font-normal leading-[1.1] tracking-[-1.5px] text-white sm:text-[46px] lg:text-[52px]">
              Our <span className="text-[#F04D02]">Services</span>
            </h2>

            {/* Paragraph */}
            <p className="mt-5 max-w-[560px] text-[14px] leading-[1.75] text-white/70 sm:text-[15px] lg:text-[16px]">
              At Genmax, we are passionate about helping businesses build a
              stronger digital presence and achieve meaningful growth. We
              combine creativity, technology, and digital expertise to create
              solutions that are tailored to the unique needs of every
              business. From web development and SEO to digital marketing,
              social media, eCommerce, and creative design, our team focuses
              on delivering smart, reliable, and result-driven digital
              solutions that help brands move forward.
            </p>

            {/* Work With Us */}
            <div className="mt-6">
              <Link
                href="/contact-us"
                className="group inline-flex h-[48px] items-center justify-center border border-[#F04D02] px-7 text-[11px] font-semibold uppercase tracking-[1px] text-[#F04D02] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#F04D02] hover:to-[#FE8302] hover:text-white"
                style={{
                  borderBottomRightRadius: "25px",
                }}
              >
                Work With Us
              </Link>
            </div>
          </div>

          {/* SERVICES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.id}
                href={service.href}
                className={`
                  group relative flex min-h-[165px]
                  flex-col items-center justify-center
                  overflow-hidden px-5 py-6 text-center
                  transition-all duration-300
                  hover:bg-[#F04D02]/10

                  ${index < 3 ? "border-b border-white/10" : ""}

                  ${
                    index % 3 !== 2
                      ? "lg:after:absolute lg:after:right-0 lg:after:top-0 lg:after:h-full lg:after:w-px lg:after:bg-white/10"
                      : ""
                  }

                  ${
                    index % 2 === 0
                      ? "sm:after:absolute sm:after:right-0 sm:after:top-0 sm:after:h-full sm:after:w-px sm:after:bg-white/10"
                      : ""
                  }

                  ${index === 2 ? "lg:after:hidden" : ""}
                  ${index === 5 ? "lg:after:hidden" : ""}
                `}
              >
                {/* Hover Line */}
                <span className="absolute left-0 top-0 h-full w-[2px] origin-bottom scale-y-0 bg-gradient-to-b from-[#F04D02] to-[#FE8302] transition-transform duration-300 group-hover:scale-y-100" />

                {/* ICON */}
                <div className="relative flex h-[82px] w-[82px] shrink-0 items-center justify-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={72}
                    height={72}
                    unoptimized
                    className="h-[72px] w-[72px] object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* SERVICE HEADING */}
                <div className="mt-3 flex h-[50px] w-full max-w-[280px] items-center justify-center">
                  <h3 className="w-full text-[16px] font-semibold leading-[1.35] text-white transition-colors duration-300 group-hover:text-[#FE8302]">
                    {service.title}
                  </h3>
                </div>

                {/* Hover Underline */}
                <span className="mt-3 h-[2px] w-0 shrink-0 bg-[#F04D02] transition-all duration-300 group-hover:w-10" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Orange Line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#F04D02] to-transparent opacity-60" />
    </section>
  );
}