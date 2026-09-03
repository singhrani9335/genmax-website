"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { careers } from "@/data/careers";
import CareerCard from "@/sections/careers/CareerCard";
import CareerDetails from "@/sections/careers/CareerDetails";

export default function CareersPage() {
  const [openCareer, setOpenCareer] = useState<string | null>(
    careers[0]?.id ?? null
  );

  const handleCareerClick = (id: string) => {
    setOpenCareer((current) => (current === id ? null : id));
  };

  return (
    <main className="bg-white">
      {/* =========================================================
          HERO / CAREERS BANNER
      ========================================================= */}
      <section className="relative h-[320px] overflow-hidden sm:h-[380px] lg:h-[430px]">
        <Image
          src="/images/careers-banner.jpg"
          alt="Careers at GenMax IT Solution"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Careers - Center Right */}
        <div className="relative z-10 flex h-full items-center justify-end px-8 sm:px-12 lg:px-20 xl:px-28">
          <h1 className="text-right text-4xl font-extrabold tracking-tight text-black sm:text-5xl lg:text-6xl">
            Careers
          </h1>
        </div>
      </section>

      {/* =========================================================
          BREADCRUMB
      ========================================================= */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-10">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-3 text-base font-bold sm:text-lg"
          >
            <Link
              href="/"
              className="font-bold text-slate-500 transition-colors duration-200 hover:text-[#F04D02]"
            >
              Home
            </Link>

            <span className="font-extrabold text-[#17245C]">/</span>

            <span className="font-extrabold text-[#17245C]">
              Careers
            </span>
          </nav>
        </div>
      </section>

      {/* =========================================================
          JOIN OUR TEAM + JOB OPENINGS + STICKY IMAGE
      ========================================================= */}
      <section
        id="open-positions"
        className="bg-slate-50 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-start gap-10 lg:grid-cols-[1.8fr_1.05fr] lg:gap-12 xl:gap-16">
            {/* =====================================================
                LEFT SIDE - JOB OPENINGS
            ===================================================== */}
            <div className="min-w-0">
              {/* Heading */}
              <div>
                <p className="whitespace-nowrap text-base font-extrabold uppercase tracking-[0.12em] text-[#F04D02] sm:text-lg">
                  Join Our Team
                </p>

                <h2 className="mt-2 whitespace-nowrap text-2xl font-extrabold leading-tight text-[#17245C] sm:text-3xl lg:text-4xl">
                  We are always looking for talents…
                </h2>
              </div>

              {/* Job Cards */}
              <div className="mt-8 space-y-4">
                {careers.map((career) => (
                  <div key={career.id}>
                    <CareerCard
                      career={career}
                      isOpen={openCareer === career.id}
                      onClick={() => handleCareerClick(career.id)}
                    />

                    {openCareer === career.id && (
                      <CareerDetails career={career} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* =====================================================
                RIGHT SIDE - STICKY IMAGE
            ===================================================== */}
            <aside className="relative self-start lg:-mr-[calc((100vw-100%)/2)]">
              <div className="lg:sticky lg:top-28">
                <div className="relative w-full overflow-hidden bg-white">
                  <div className="relative h-[420px] w-full sm:h-[460px] lg:h-[500px]">
                    <Image
                      src="/images/careers.webp"
                      alt="Join the GenMax IT Solution team"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}