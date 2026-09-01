import BrandingHero from "@/sections/Branding/BrandingHero";
import BrandingIntro from "@/sections/Branding/BrandingIntro";
import BrandingServices from "@/sections/Branding/BrandingServices";
import BrandingStrategy from "@/sections/Branding/BrandingStrategy";
import BrandingProcess from "@/sections/Branding/BrandingProcess";
import BrandingFaq from "@/sections/Branding/BrandingFaq";

export default function BrandingPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      {/* ================= HERO ================= */}
      <BrandingHero />

      {/* ================= INTRO ================= */}
      <BrandingIntro />

      {/* ================= WHAT WE DO ================= */}
      <BrandingServices />

      {/* ================= TRANSFORM YOUR BUSINESS ================= */}
      <BrandingStrategy />

      {/* ================= OUR PROCESS ================= */}
      <BrandingProcess />

      {/* ================= FAQ ================= */}
      <BrandingFaq />
    </main>
  );
}