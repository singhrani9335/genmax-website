import DigitalMarketingHero from "@/sections/digital-marketing/DigitalMarketingHero";
import DigitalMarketingIntro from "@/sections/digital-marketing/DigitalMarketingIntro";
import DigitalMarketingServices from "@/sections/digital-marketing/DigitalMarketingServices";
import WhyPartner from "@/sections/digital-marketing/WhyPartner";
import WhyChooseUs from "@/sections/digital-marketing/WhyChooseUs";
import WhatWeDo from "@/sections/digital-marketing/WhatWeDo";
import DigitalMarketingProcess from "@/sections/digital-marketing/DigitalMarketingProcess";
import DigitalMarketingFaq from "@/sections/digital-marketing/DigitalMarketingFaq";

export default function DigitalMarketingPage() {
  return (
    <main className="w-full overflow-hidden bg-white text-[#17120F]">
      <DigitalMarketingHero />

      <DigitalMarketingIntro />

      <DigitalMarketingServices />

      <WhyPartner />

      <WhyChooseUs />

      <WhatWeDo />

      <DigitalMarketingProcess />

      <DigitalMarketingFaq />
    </main>
  );
}