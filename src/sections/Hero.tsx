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
        className="pointer-events-none absolute -left-[85px] top-[280px] z-0 h-[150px] w-[150px] rounded-full border-[4px] border-[#F04D02] sm:-left-[90px] sm:top-[330px] sm:h-[175px] sm:w-[175px] sm:border-[5px]"
      />

      {/* LEFT DOTS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 left-[5%] z-0 grid grid-cols-5 gap-1.5 opacity-30 sm:bottom-10 sm:left-[7%] sm:gap-2"
      >
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className="h-1 w-1 rounded-full bg-[#F04D02] sm:h-1.5 sm:w-1.5"
          />
        ))}
      </div>

      {/* MAIN */}
      <div className="relative mx-auto max-w-[1450px] px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-12 lg:px-10 lg:pb-24 lg:pt-16">

        {/* IMAGE + CONTENT */}
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[59%_41%] lg:gap-0">

          {/* IMAGE */}
          <div className="relative z-10 flex justify-center lg:justify-start lg:pl-[74px] xl:pl-[84px]">
            <div className="relative h-[380px] w-[92%] max-w-[430px] sm:h-[500px] sm:w-full sm:max-w-[480px] lg:h-[590px] lg:w-[510px] lg:max-w-none xl:h-[590px] xl:w-[510px]">

              {/* TOP CIRCLE */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-[35px] -top-[25px] z-0 h-[90px] w-[90px] rounded-full border-[4px] border-[#F04D02] sm:-right-[55px] sm:-top-[35px] sm:h-[115px] sm:w-[115px] sm:border-[5px] lg:-right-[62px] lg:-top-[36px] lg:h-[125px] lg:w-[125px] xl:-right-[64px] xl:-top-[38px] xl:h-[130px] xl:w-[130px]"
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
                  className="pointer-events-none absolute right-[25px] top-[45px] z-20 h-3 w-3 rounded-full bg-[#F04D02] sm:right-[38px] sm:top-[58px] sm:h-4 sm:w-4 lg:right-[42px] lg:top-[62px] xl:right-[44px] xl:top-[64px]"
                />
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="relative z-20 mt-2 text-center sm:mt-4 lg:mt-0 lg:-ml-[93px] lg:text-left xl:-ml-[103px]">

            {/* LABEL */}
            <div className="mb-4 flex items-center justify-center gap-3 lg:justify-start">
              <span
                aria-hidden="true"
                className="h-[2px] w-8 bg-[#F04D02] sm:w-10"
              />

              <span className="text-[10px] font-medium uppercase tracking-[2px] text-[#F04D02] sm:text-[12px] sm:tracking-[2.5px]">
                Creative Digital Agency
              </span>
            </div>

            {/* HEADING */}
            <h1 className="mx-auto max-w-[650px] text-[31px] font-normal leading-[1.15] tracking-[-1px] text-[#222222] sm:text-[40px] sm:tracking-[-1.3px] md:text-[44px] lg:mx-0 lg:text-[49px] lg:tracking-[-1.5px] xl:text-[53px]">

              We Empower Your
              <br />

              Brand With World Class
              <br />

              <span
                key={currentText}
                className="inline-block font-semibold tracking-[-1.3px] text-[#F04D02] sm:tracking-[-1.6px] lg:tracking-[-1.8px]"
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
              className="mx-auto mt-6 h-[2px] w-14 bg-[#F04D02] sm:mt-7 sm:w-16 lg:mx-0"
            />
          </div>
        </div>

        {/* STATS CARD */}
        <div className="relative z-30 mx-auto mt-8 w-full max-w-[1120px] rounded-[5px] bg-white shadow-[0_12px_45px_rgba(0,0,0,0.12)] sm:mt-10 sm:w-[92%] md:w-[88%] lg:-mt-[160px] lg:w-[82%] xl:-mt-[160px] xl:w-[82%]">

          <div className="grid grid-cols-2 lg:grid-cols-4">

            {/* EXPERIENCE */}
            <div className="group flex min-h-[110px] items-center justify-center gap-2 border-b border-r border-[#eeeeee] px-2 py-4 transition-all duration-500 hover:bg-gradient-to-r hover:from-[#F04D02] hover:to-[#FE8302] sm:min-h-[120px] sm:gap-3 sm:px-3 lg:mx-3 lg:my-2 lg:min-h-[125px] lg:rounded-[4px] lg:border-0 lg:py-5">

              <Trophy
                size={34}
                strokeWidth={1.2}
                className="shrink-0 text-[#222222] transition-colors duration-500 group-hover:text-white sm:h-[40px] sm:w-[40px] lg:h-[42px] lg:w-[42px]"
              />

              <div>
                <p className="text-[22px] font-medium leading-none text-[#F04D02] transition-colors duration-500 group-hover:text-white sm:text-[25px] lg:text-[26px]">
                  12+
                </p>

                <p className="mt-1.5 text-[10px] leading-4 text-[#444444] transition-colors duration-500 group-hover:text-white sm:mt-2 sm:text-[11px] sm:leading-5 lg:text-[12px]">
                  Year of
                  <br />
                  Experience
                </p>
              </div>
            </div>

            {/* PROJECTS */}
            <div className="group flex min-h-[110px] items-center justify-center gap-2 border-b border-[#eeeeee] px-2 py-4 transition-all duration-500 hover:bg-gradient-to-r hover:from-[#F04D02] hover:to-[#FE8302] sm:min-h-[120px] sm:gap-3 sm:px-3 lg:min-h-[125px] lg:border-0 lg:py-5">

              <Users
                size={34}
                strokeWidth={1.2}
                className="shrink-0 text-[#222222] transition-colors duration-500 group-hover:text-white sm:h-[40px] sm:w-[40px] lg:h-[42px] lg:w-[42px]"
              />

              <div>
                <p className="text-[22px] font-medium leading-none text-[#F04D02] transition-colors duration-500 group-hover:text-white sm:text-[25px] lg:text-[26px]">
                  700+
                </p>

                <p className="mt-1.5 text-[10px] leading-4 text-[#444444] transition-colors duration-500 group-hover:text-white sm:mt-2 sm:text-[11px] sm:leading-5 lg:text-[12px]">
                  Successful
                  <br />
                  Projects
                </p>
              </div>
            </div>

            {/* COUNTRIES */}
            <div className="group flex min-h-[110px] items-center justify-center gap-2 border-r border-[#eeeeee] px-2 py-4 transition-all duration-500 hover:bg-gradient-to-r hover:from-[#F04D02] hover:to-[#FE8302] sm:min-h-[120px] sm:gap-3 sm:px-3 lg:min-h-[125px] lg:border-0 lg:py-5">

              <Globe2
                size={34}
                strokeWidth={1.2}
                className="shrink-0 text-[#222222] transition-colors duration-500 group-hover:text-white sm:h-[40px] sm:w-[40px] lg:h-[42px] lg:w-[42px]"
              />

              <div>
                <p className="text-[22px] font-medium leading-none text-[#F04D02] transition-colors duration-500 group-hover:text-white sm:text-[25px] lg:text-[26px]">
                  10+
                </p>

                <p className="mt-1.5 text-[10px] leading-4 text-[#444444] transition-colors duration-500 group-hover:text-white sm:mt-2 sm:text-[11px] sm:leading-5 lg:text-[12px]">
                  Countries
                  <br />
                  Worldwide
                </p>
              </div>
            </div>

            {/* CLIENTS */}
            <div className="group flex min-h-[110px] items-center justify-center gap-2 px-2 py-4 transition-all duration-500 hover:bg-gradient-to-r hover:from-[#F04D02] hover:to-[#FE8302] sm:min-h-[120px] sm:gap-3 sm:px-3 lg:min-h-[125px] lg:py-5">

              <Handshake
                size={34}
                strokeWidth={1.2}
                className="shrink-0 text-[#222222] transition-colors duration-500 group-hover:text-white sm:h-[40px] sm:w-[40px] lg:h-[42px] lg:w-[42px]"
              />

              <div>
                <p className="text-[22px] font-medium leading-none text-[#F04D02] transition-colors duration-500 group-hover:text-white sm:text-[25px] lg:text-[26px]">
                  400+
                </p>

                <p className="mt-1.5 text-[10px] leading-4 text-[#444444] transition-colors duration-500 group-hover:text-white sm:mt-2 sm:text-[11px] sm:leading-5 lg:text-[12px]">
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