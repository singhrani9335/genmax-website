import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

const highlights = [
  "Strategy-led solutions",
  "Creative digital experiences",
  "Performance-focused technology",
  "Long-term growth partnership",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#080B12]">
      {/* ========================================================= */}
      {/* PAGE BANNER */}
      {/* ========================================================= */}
      <section className="relative isolate h-[300px] overflow-hidden sm:h-[360px] md:h-[430px] lg:h-[480px]">
        <img
          src="/images/about/about-banner.jpg"
          alt="About GenMax IT Solution"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#080B12]/60 via-[#080B12]/25 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080B12]/45 to-transparent" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1480px] items-center px-5 sm:px-7 md:px-10 lg:px-14 xl:px-20">
          <div className="pt-5 sm:pt-8">
            <h1 className="text-[42px] font-medium leading-[1.05] tracking-[-2px] text-white sm:text-[55px] md:text-[68px] lg:text-[78px]">
              About <span className="text-[#FF6A20]">Us.</span>
            </h1>

            <p className="mt-4 max-w-[650px] text-[12px] leading-[1.8] text-white/75 sm:text-[14px] lg:text-[15px]">
              Discover who we are, what drives us and how we help businesses
              grow through technology, creativity and digital innovation.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#F04D02]" />
      </section>

      {/* ========================================================= */}
      {/* BREADCRUMB */}
      {/* ========================================================= */}
      <div className="border-b border-black/[0.06] bg-white">
        <div className="mx-auto flex w-full max-w-[1480px] items-center px-5 py-7 sm:px-7 sm:py-8 md:px-10 lg:px-14 xl:px-20">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[2.3px] text-black/65 transition-colors duration-300 hover:text-[#F04D02] sm:text-[12px]"
            >
              <ArrowLeft
                size={16}
                strokeWidth={2.2}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />

              <span>Home</span>
            </Link>

            <span className="h-px w-8 bg-black/20 sm:w-11" />

            <span className="text-[11px] font-bold uppercase tracking-[2.3px] text-[#F04D02] sm:text-[12px]">
              About Us
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* WHO WE ARE */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-7 md:px-10 lg:px-14 xl:px-20">
          <div className="grid items-center gap-12 lg:grid-cols-[45%_55%] lg:gap-14 xl:gap-20">
            {/* IMAGE */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -bottom-5 -left-5 h-24 w-24 rounded-bl-[40px] border-b-2 border-l-2 border-[#F04D02]/60"
              />

              <div
                aria-hidden="true"
                className="absolute -right-4 -top-4 h-20 w-20 rounded-tr-[28px] border-r-2 border-t-2 border-[#6C63FF]/30"
              />

              <div className="relative z-10 overflow-hidden rounded-[6px] border border-black/[0.08] bg-[#F5F6F8] shadow-[0_25px_70px_rgba(0,0,0,0.08)]">
                <img
                  src="/images/about/about.webp"
                  alt="GenMax IT Solution"
                  className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[500px]"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div>
              <div className="mb-5">
                <span className="text-[13px] font-bold uppercase tracking-[2.8px] text-[#F04D02] sm:text-[15px] md:text-[16px]">
                  Who We Are
                </span>
              </div>

              <h2 className="text-[36px] font-medium leading-[1.08] tracking-[-1.7px] text-[#080B12] sm:text-[46px] md:text-[54px]">
                Technology with
                <br />
                <span className="text-[#F04D02]">purpose.</span>
              </h2>

              <div className="mt-7 space-y-5 text-[13px] leading-[1.9] text-black/55 sm:text-[15px]">
                <p>
                  GenMax IT Solution is an initiative driven by passionate and
                  creative minds dedicated to delivering reliable IT solutions
                  for modern businesses. We combine technology, creativity and
                  strategic thinking to help businesses build a stronger
                  presence in the digital world.
                </p>

                <p>
                  Our focus is simple — understand your business, identify the
                  right opportunities and create digital solutions that deliver
                  meaningful results. From website development and digital
                  experiences to marketing and technology solutions, we help
                  businesses turn ideas into measurable digital impact.
                </p>

                <p>
                  We believe every business has the potential to stand out.
                  With the right strategy, technology and creative approach,
                  complex challenges can become opportunities for growth.
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="group flex items-center gap-2.5 rounded-full border border-black/[0.07] bg-[#F8F9FA] px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F04D02] hover:bg-[#F04D02]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F04D02]/10 transition-colors duration-300 group-hover:bg-white/20">
                      <Check
                        size={11}
                        strokeWidth={2.5}
                        className="text-[#F04D02] transition-colors duration-300 group-hover:text-white"
                      />
                    </span>

                    <span className="text-[10px] font-medium text-black/60 transition-colors duration-300 group-hover:text-white sm:text-[11px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* VISION & MISSION */}
      {/* COMMON BACKGROUND IMAGE + TWO GRID COLUMNS */}
      {/* ========================================================= */}
      <section className="relative isolate overflow-hidden">
        {/* COMMON BACKGROUND */}
        <img
          src="/images/about/vision-mission-bg.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-white/75" />

        {/* ORANGE GLOW */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#F04D02]/10 blur-[130px]"
        />

        {/* BLUE GLOW */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-[#635BFF]/10 blur-[130px]"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1480px] px-5 py-16 sm:px-7 sm:py-20 md:px-10 md:py-24 lg:px-14 lg:py-28 xl:px-20">
          {/* TWO GRID COLUMNS */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
            {/* ===================================================== */}
            {/* OUR VISION */}
            {/* ===================================================== */}
            <div className="relative border-l-[4px] border-[#F04D02] pl-5 sm:pl-7 md:pl-9 lg:pl-10">
              <h2 className="mb-7 text-[38px] font-medium leading-[1.05] tracking-[-1.8px] text-[#080B12] sm:text-[48px] md:text-[56px] lg:text-[60px]">
                <span className="text-[#F04D02]">Our Vision</span>
              </h2>

              <div className="space-y-5 text-[13px] leading-[1.95] text-black/60 sm:text-[14px] md:text-[15px]">
                <p>
                  We aim to be the leading digital technology and marketing
                  partner in the UAE and beyond, recognized for our innovative
                  solutions, exceptional customer service and unwavering
                  commitment to helping businesses succeed.
                </p>

                <p>
                  We aim to create a dynamic and collaborative work environment
                  that fosters creativity, learning and growth. By empowering
                  our team to excel, we can deliver even greater value to our
                  clients and help them achieve their goals.
                </p>

                <p>
                  We envision a future where businesses of all sizes can
                  leverage the latest digital marketing technologies and
                  strategies to reach their full potential. We want to be at the
                  forefront of digital innovation, helping businesses navigate
                  the ever-changing landscape and stay ahead of the competition.
                </p>

                <p>
                  Our ultimate goal is to help businesses grow and thrive
                  digitally. By staying true to our values of innovation,
                  integrity and excellence, we aim to make a meaningful impact
                  on the digital industry.
                </p>
              </div>
            </div>

            {/* ===================================================== */}
            {/* OUR MISSION */}
            {/* ===================================================== */}
            <div className="relative border-l-[4px] border-[#635BFF] pl-5 sm:pl-7 md:pl-9 lg:pl-10">
              <h2 className="mb-7 text-[38px] font-medium leading-[1.05] tracking-[-1.8px] text-[#080B12] sm:text-[48px] md:text-[56px] lg:text-[60px]">
                <span className="text-[#635BFF]">Our Mission</span>
              </h2>

              <div className="space-y-5 text-[13px] leading-[1.95] text-black/60 sm:text-[14px] md:text-[15px]">
                <p>
                  At GenMax IT Solution, we&apos;re on a mission to transform
                  the way businesses work and approach digital marketing. Our
                  team of experts is dedicated to delivering game-changing
                  solutions that help businesses drive leads, increase sales
                  and build lasting customer loyalty.
                </p>

                <p>
                  We&apos;re not just another digital technology company. We are
                  a team of innovators passionate about staying ahead of the
                  curve. We continuously explore new technologies and strategies
                  to provide our clients with cutting-edge solutions that
                  deliver real results.
                </p>

                <p>
                  Our commitment to exceptional customer service sets us apart.
                  We take the time to truly understand our clients&apos; needs,
                  so we can create customized solutions that meet their unique
                  challenges and goals.
                </p>

                <p>
                  Whether you&apos;re looking to expand your reach, boost your
                  online presence or generate more leads and sales, GenMax IT
                  Solution has the expertise and passion to help you achieve
                  your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* TEAM / HELLO */}
      {/* ZERO GAP FROM VISION & MISSION */}
      {/* ========================================================= */}
      <section className="relative isolate -mt-px h-[420px] overflow-hidden sm:h-[500px] md:h-[580px] lg:h-[650px]">
        <img
          src="/images/about/about_team.jpg"
          alt="GenMax IT Solution team"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/45" />

        {/* LEFT GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080B12]/85 via-[#080B12]/50 to-transparent" />

        {/* BOTTOM GRADIENT */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080B12]/50 to-transparent" />

        {/* ORANGE LINE */}
        <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#F04D02]" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1480px] items-center px-5 sm:px-7 md:px-10 lg:px-14 xl:px-20">
          <div className="max-w-[760px]">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[3px] text-[#FF6A20] sm:text-[13px]">
              Hello
            </p>

            <h2 className="text-[42px] font-semibold uppercase leading-[0.98] tracking-[-2px] text-white sm:text-[58px] md:text-[68px] lg:text-[78px]">
              We are the team
              <br />
              <span className="text-[#FF6A20]">
                you were looking for!
              </span>
            </h2>

            <p className="mt-6 max-w-[520px] text-[13px] font-medium leading-[1.8] text-white/80 sm:text-[15px]">
              Enjoy The Way Your Work Lead To Perfection
            </p>

            <div className="mt-7 h-px w-16 bg-[#FF6A20]" />

            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[2px] text-white">
              CEO
            </p>

            <p className="mt-1 text-[10px] font-medium uppercase tracking-[1.8px] text-white/55">
              GenMax IT Solution
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}