import QuickBooksCloudHostingHero from "@/sections/QuickBooksCloudHosting/QuickBooksCloudHostingHero";
import QuickBooksCloudHostingIntro from "@/sections/QuickBooksCloudHosting/QuickBooksCloudHostingIntro";
import QuickBooksCloudHostingConsiderations from "@/sections/QuickBooksCloudHosting/QuickBooksCloudHostingConsiderations";
import QuickBooksCloudHostingFeatures from "@/sections/QuickBooksCloudHosting/QuickBooksCloudHostingFeatures";

export default function QuickBooksCloudHostingPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#06142F]">
      {/* =====================================================
          QUICKBOOKS CLOUD HOSTING - BLUE THEME
      ===================================================== */}

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-[#06142F] via-[#0A2454] to-[#123F86]">
        <QuickBooksCloudHostingHero />
      </section>

      {/* ================= INTRO ================= */}
      <section className="bg-[#F2F7FF]">
        <QuickBooksCloudHostingIntro />
      </section>

      {/* ================= CONSIDERATIONS ================= */}
      <section className="bg-gradient-to-br from-[#EAF3FF] via-[#F5F9FF] to-[#E2EEFF]">
        <QuickBooksCloudHostingConsiderations />
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-[#06142F]">
        <QuickBooksCloudHostingFeatures />
      </section>
    </main>
  );
}