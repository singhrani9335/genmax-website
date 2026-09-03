import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Blogs | GenMax IT Solution",
  description:
    "Read the latest blogs from GenMax IT Solution covering SEO, digital marketing, web development, AI, technology, and online business growth.",
};

export default function BlogsPage() {
  return (
    <main className="bg-white">
      {/* ========================================
          HERO / BANNER
      ======================================== */}
      <section className="relative h-[300px] overflow-hidden sm:h-[360px] lg:h-[420px]">
        <Image
          src="/images/blogs-banner.jpg"
          alt="GenMax IT Solution Blogs"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-white/10" />

        {/* Heading */}
        <div className="relative z-10 flex h-full items-center justify-end px-6 sm:px-10 lg:px-20 xl:px-28">
          <h1 className="text-right text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-[#F04D02]">Our</span>{" "}
            <span className="text-black">Blogs</span>
          </h1>
        </div>
      </section>

      {/* ========================================
          BREADCRUMB
      ======================================== */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8 lg:px-10">
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
              Blogs
            </span>
          </nav>
        </div>
      </section>

      {/* ========================================
          PLEASE WAIT
      ======================================== */}
      <section className="flex min-h-[300px] items-center justify-center bg-white px-5 py-16">
        <button
          type="button"
          disabled
          className="cursor-not-allowed rounded-full bg-gradient-to-r from-[#F04D02] to-[#FE8302] px-8 py-3 text-base font-bold text-white shadow-lg sm:px-10 sm:py-4 sm:text-lg"
        >
          Please Wait...
        </button>
      </section>
    </main>
  );
}