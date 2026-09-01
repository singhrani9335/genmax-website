import SeoHero from "@/sections/seo/SeoHero";
import SeoIntro from "@/sections/seo/SeoIntro";
import SeoRoi from "@/sections/seo/SeoRoi";
import SeoTools from "@/sections/seo/SeoTools";
import SeoWhyChooseUs from "@/sections/seo/SeoWhyChooseUs";
import SeoStrategies from "@/sections/seo/SeoStrategies";
import SeoConsultant from "@/sections/seo/SeoConsultant";
import SeoProcess from "@/sections/seo/SeoProcess";
import SeoFaq from "@/sections/seo/SeoFaq";


export default function SeoPage() {
  return (
    <main className="w-full overflow-hidden bg-white text-[#17120F]">
      <SeoHero />

      <SeoIntro />

      <SeoRoi />

      {/* Screenshot wala Tools Section */}
      <SeoTools />

      <SeoWhyChooseUs />

      <SeoStrategies />

      <SeoConsultant />

      <SeoProcess />

      <SeoFaq />

      
    </main>
  );
}