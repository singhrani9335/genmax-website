"use client";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1450px] px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid items-center gap-10 lg:grid-cols-[40%_60%] lg:gap-0">

          {/* LEFT CONTENT */}
          <div className="relative z-10 lg:translate-x-8 lg:pr-10 xl:translate-x-10 xl:pr-14">
            <h2 className="whitespace-nowrap text-[34px] font-normal leading-[1.12] tracking-[-1.2px] text-[#34405A] sm:text-[40px] lg:text-[43px] xl:text-[47px]">
              Best{" "}
              <span className="text-[#C75B7C]">Digital Marketing</span>
              <br />
              Company In Noida
            </h2>

            <p className="mt-5 max-w-[560px] text-[14px] leading-[1.65] text-[#64748B] sm:text-[15px] lg:mt-6 lg:text-[15px] xl:text-[16px]">
              For a decade, we&apos;ve delivered top-tier IT solutions and
              <br />
              digital analytics, conquering every challenge with
              <br />
              passion and perseverance.
            </p>

            {/* DISCOVER MORE */}
            <div className="mt-7 sm:mt-8">
              <a
                href="/about"
                className="group relative inline-flex h-[52px] min-w-[205px] items-center justify-center overflow-hidden rounded-none rounded-br-[28px] border border-[#C75B7C] bg-white px-8 text-[12px] font-semibold uppercase tracking-[1px] text-[#C75B7C] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#C75B7C] hover:to-[#34405A] hover:text-white"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  DISCOVER MORE
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative z-10 lg:-mr-16 xl:-mr-20">

            <div className="relative z-10 h-[300px] w-full overflow-hidden sm:h-[350px] lg:h-[380px] xl:h-[410px]">
              <img
                src="/images/about.webp"
                alt="Digital Marketing Agency"
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* LET'S TALK BUTTON */}
            <div className="relative">

              {/* HALF CIRCLE */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-[28px] top-full z-0 h-[82px] w-[82px] -translate-y-[41px] rounded-full border-[3px] border-[#C75B7C] border-t-0 bg-transparent"
              />

              <a
                href="tel:971507534313"
                aria-label="Let's Talk"
                className="group relative z-10 flex min-h-[82px] w-full items-center gap-5 overflow-hidden rounded-b-[5px] bg-white px-7 py-5 shadow-[0_10px_35px_rgba(52,64,90,0.10)] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#C75B7C] hover:to-[#34405A]"
              >
                {/* PHONE CIRCLE */}
                <span className="relative z-10 flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#C75B7C] text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#C75B7C]">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>

                {/* TEXT */}
                <span className="relative z-10 text-[16px] font-semibold uppercase leading-[1.35] tracking-[0.3px] text-[#34405A] transition-colors duration-300 group-hover:text-white sm:text-[17px] lg:text-[18px] xl:text-[19px]">
                  YOUR NEXT BIG IDEA DESERVES A GREAT
                  <br />
                  COMPANION – LET&apos;S TALK!
                </span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}