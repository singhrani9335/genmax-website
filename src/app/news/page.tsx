"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NewsPage() {
  const router = useRouter();

  return (
    <main className="flex h-screen flex-col items-center justify-center overflow-hidden bg-white px-6">
      {/* 404 Image */}
      <div className="relative -mt-28 h-[340px] w-[520px] max-w-full sm:-mt-32 sm:h-[380px] sm:w-[580px] lg:h-[400px] lg:w-[620px]">
        <Image
          src="/images/404.svg"
          alt="404 Not Found"
          fill
          priority
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 620px"
          className="object-contain"
        />
      </div>

      {/* Back to Home Button */}
      <button
        type="button"
        onClick={() => router.push("/")}
        className="-mt-4 inline-flex h-[54px] min-w-[205px] items-center justify-center rounded-[2px] border-2 border-[#F04D02] bg-white px-8 text-[13px] font-bold uppercase tracking-[0.9px] text-[#222222] shadow-[0_6px_18px_rgba(0,0,0,0.08)] outline-none transition-all duration-300 hover:bg-gradient-to-r hover:from-[#F04D02] hover:to-[#FE8302] hover:text-white hover:shadow-[0_8px_22px_rgba(240,77,2,0.25)] focus:bg-gradient-to-r focus:from-[#F04D02] focus:to-[#FE8302] focus:text-white focus:outline-none focus:ring-0 active:bg-gradient-to-r active:from-[#F04D02] active:to-[#FE8302] active:text-white"
      >
        Back to Home
      </button>
    </main>
  );
}