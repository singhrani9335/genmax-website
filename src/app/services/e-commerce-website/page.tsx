import EcommerceHero from "@/sections/Ecommerce/EcommerceHero";
import EcommerceIntro from "@/sections/Ecommerce/EcommerceIntro";
import EcommerceServices from "@/sections/Ecommerce/EcommerceServices";
import EcommerceStrategy from "@/sections/Ecommerce/EcommerceStrategy";
import EcommerceTools from "@/sections/Ecommerce/EcommerceTools";
import EcommerceProcess from "@/sections/Ecommerce/EcommerceProcess";
import EcommerceFaq from "@/sections/Ecommerce/EcommerceFaq";

export default function EcommercePage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      {/* ================= HERO ================= */}
      <EcommerceHero />

      {/* ================= INTRO ================= */}
      <EcommerceIntro />

      {/* ================= WHAT WE DO ================= */}
      <EcommerceServices />

      {/* ================= TRUSTED PARTNER / STRATEGY ================= */}
      <EcommerceStrategy />

      {/* ================= ECOMMERCE TOOLS ================= */}
      <EcommerceTools />

      {/* ================= OUR PROCESS ================= */}
      <EcommerceProcess />

      {/* ================= FAQ ================= */}
      <EcommerceFaq />
    </main>
  );
}