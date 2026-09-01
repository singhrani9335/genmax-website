import GoogleAdsHero from "@/sections/GoogleAds/GoogleAdsHero";
import GoogleAdsIntro from "@/sections/GoogleAds/GoogleAdsIntro";
import GoogleAdsServices from "@/sections/GoogleAds/GoogleAdsServices";
import GoogleAdsStrategy from "@/sections/GoogleAds/GoogleAdsStrategy";
import GoogleAdsProcess from "@/sections/GoogleAds/GoogleAdsProcess";
import GoogleAdsFaq from "@/sections/GoogleAds/GoogleAdsFaq";

export default function GoogleAdsPage() {
  return (
    <main className="w-full bg-white">
      {/* ================= HERO ================= */}
      <GoogleAdsHero />

      {/* ================= INTRO ================= */}
      <GoogleAdsIntro />

      {/* ================= WHAT WE DO ================= */}
      <GoogleAdsServices />

      {/* ================= SMART ADS STRATEGY ================= */}
      <GoogleAdsStrategy />

      {/* ================= OUR PROCESS ================= */}
      <GoogleAdsProcess />

      {/* ================= FAQ ================= */}
      <GoogleAdsFaq />
    </main>
  );
}