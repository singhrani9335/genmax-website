"use client";

import { useEffect, useState } from "react";
import {
  Globe2,
  Handshake,
  Trophy,
  Users,
} from "lucide-react";

const rotatingTexts = [
  "Graphic Designing",
  "Web Designing",
  "UI/UX Designing",
  "Digital Branding",
];

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white">

      {/* LEFT CIRCLE */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[90px] top-[330px] z-0 h-[175px] w-[175px] rounded-full border-[5px] border-[#C75B7C]"
      />

      {/* LEFT DOTS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-[7%] z-0 grid grid-cols-5 gap-2 opacity-30"
      >
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-[#C75B7C]"
          />
        ))}
      </div>

      {/* MAIN */}
      <div className="relative mx-auto max-w-[1450px] px-6 pb-20 pt-12 sm:px-8 lg:px-10 lg:pb-24 lg:pt-16">

        {/* IMAGE + CONTENT */}
        <div className="grid items-center gap-10 lg:grid-cols-[59%_41%] lg:gap-0">

          {/* IMAGE */}
          <div className="relative z-10 flex justify-center lg:justify-start lg:pl-[74px] xl:pl-[84px]">
            <div className="relative h-[450px] w-full sm:h-[520px] lg:h-[590px] lg:w-[510px] xl:h-[590px] xl:w-[510px]">

              {/* TOP CIRCLE */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-[58px] -top-[36px] z-0 h-[120px] w-[120px] rounded-full border-[5px] border-[#C75B7C] sm:-right-[62px] sm:-top-[38px] sm:h-[125px] sm:w-[125px] lg:-right-[62px] lg:-top-[36px] lg:h-[125px] lg:w-[125px] xl:-right-[64px] xl:-top-[38px] xl:h-[130px] xl:w-[130px]"
              />

              {/* IMAGE BOX */}
              <div className="relative z-10 h-full w-full overflow-hidden bg-[#101722]">
                <img
                  src="/images/hero-person.png"
                  alt="Creative professional working"
                  className="h-full w-full object-cover object-center"
                />

                {/* IMAGE OVERLAY */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-black/[0.04]"
                />

                {/* SMALL DOT */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-[38px] top-[58px] z-20 h-4 w-4 rounded-full bg-[#C75B7C] sm:right-[42px] sm:top-[62px] lg:right-[42px] lg:top-[62px] xl:right-[44px] xl:top-[64px]"
                />
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="relative z-20 mt-10 text-center lg:mt-0 lg:-ml-[93px] lg:text-left xl:-ml-[103px]">

            {/* LABEL */}
            <div className="mb-4 flex items-center justify-center gap-3 lg:justify-start">
              <span
                aria-hidden="true"
                className="h-[2px] w-10 bg-[#C75B7C]"
              />

              <span className="text-[11px] font-medium uppercase tracking-[2.5px] text-[#C75B7C] sm:text-[12px]">
                Creative Digital Agency
              </span>
            </div>

            {/* HEADING */}
            <h1 className="mx-auto max-w-[650px] text-[36px] font-normal leading-[1.13] tracking-[-1.5px] text-[#34405A] sm:text-[43px] lg:mx-0 lg:text-[49px] xl:text-[53px]">
              We Empower Your
              <br />
              Brand With World Class
              <br />

              <span
                key={currentText}
                className="inline-block font-semibold tracking-[-1.8px] text-[#C75B7C]"
                style={{
                  animation: "heroFadeText 0.65s ease-in-out",
                }}
              >
                {rotatingTexts[currentText]}
              </span>
            </h1>

            {/* LINE */}
            <div
              aria-hidden="true"
              className="mx-auto mt-7 h-[2px] w-16 bg-[#C75B7C] lg:mx-0"
            />
          </div>
        </div>

        {/* STATS CARD */}
        <div className="relative z-30 mx-auto -mt-[135px] w-[82%] max-w-[1120px] rounded-[5px] bg-white shadow-[0_12px_45px_rgba(0,0,0,0.12)] sm:-mt-[150px] sm:w-[80%] lg:-mt-[160px] lg:w-[82%] xl:-mt-[160px] xl:w-[82%]">

          <div className="grid grid-cols-2 lg:grid-cols-4">

            {/* EXPERIENCE */}
            <div className="group flex min-h-[125px] items-center justify-center gap-3 px-3 py-5 transition-all duration-500 hover:bg-gradient-to-r hover:from-[#C75B7C] hover:to-[#34405A] lg:mx-3 lg:my-2 lg:rounded-[4px]">
              <Trophy
                size={42}
                strokeWidth={1.2}
                className="shrink-0 text-[#34405A] transition-colors duration-500 group-hover:text-white"
              />

              <div>
                <p className="text-[26px] font-medium leading-none text-[#C75B7C] transition-colors duration-500 group-hover:text-white">
                  12+
                </p>

                <p className="mt-2 text-[12px] leading-5 text-[#444B5B] transition-colors duration-500 group-hover:text-white">
                  Year of
                  <br />
                  Experience
                </p>
              </div>
            </div>

            {/* PROJECTS */}
            <div className="group flex min-h-[125px] items-center justify-center gap-3 px-3 py-5 transition-all duration-500 hover:bg-gradient-to-r hover:from-[#C75B7C] hover:to-[#34405A]">
              <Users
                size={42}
                strokeWidth={1.2}
                className="shrink-0 text-[#34405A] transition-colors duration-500 group-hover:text-white"
              />

              <div>
                <p className="text-[26px] font-medium leading-none text-[#C75B7C] transition-colors duration-500 group-hover:text-white">
                  700+
                </p>

                <p className="mt-2 text-[12px] leading-5 text-[#444B5B] transition-colors duration-500 group-hover:text-white">
                  Successful
                  <br />
                  Projects
                </p>
              </div>
            </div>

            {/* COUNTRIES */}
            <div className="group flex min-h-[125px] items-center justify-center gap-3 px-3 py-5 transition-all duration-500 hover:bg-gradient-to-r hover:from-[#C75B7C] hover:to-[#34405A]">
              <Globe2
                size={42}
                strokeWidth={1.2}
                className="shrink-0 text-[#34405A] transition-colors duration-500 group-hover:text-white"
              />

              <div>
                <p className="text-[26px] font-medium leading-none text-[#C75B7C] transition-colors duration-500 group-hover:text-white">
                  10+
                </p>

                <p className="mt-2 text-[12px] leading-5 text-[#444B5B] transition-colors duration-500 group-hover:text-white">
                  Countries
                  <br />
                  Worldwide
                </p>
              </div>
            </div>

            {/* CLIENTS */}
            <div className="group flex min-h-[125px] items-center justify-center gap-3 px-3 py-5 transition-all duration-500 hover:bg-gradient-to-r hover:from-[#C75B7C] hover:to-[#34405A]">
              <Handshake
                size={42}
                strokeWidth={1.2}
                className="shrink-0 text-[#34405A] transition-colors duration-500 group-hover:text-white"
              />

              <div>
                <p className="text-[26px] font-medium leading-none text-[#C75B7C] transition-colors duration-500 group-hover:text-white">
                  400+
                </p>

                <p className="mt-2 text-[12px] leading-5 text-[#444B5B] transition-colors duration-500 group-hover:text-white">
                  Happy
                  <br />
                  Clients
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* SAFE ANIMATION */}
      <style>{`
        @keyframes heroFadeText {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </section>
  );
}