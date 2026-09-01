import Image from "next/image";

export default function DigitalMarketingIntro() {
  return (
    <>
      {/* INTRO SECTION */}
      <section className="w-full bg-white py-4 sm:py-6 lg:py-8 xl:py-10">
        <div className="mx-auto grid w-full max-w-[1400px] items-center gap-8 px-5 sm:px-8 md:grid-cols-2 lg:gap-14 lg:px-12 xl:px-16">
          {/* IMAGE */}
          <div className="relative w-full overflow-hidden">
            <Image
              src="/images/digital-marketing/digital-marketing-content.jpg"
              alt="Digital Marketing Services"
              width={700}
              height={750}
              className="h-[420px] w-full object-cover sm:h-[480px] md:h-[520px] lg:h-[570px] xl:h-[600px]"
            />
          </div>

          {/* SIDE CONTENT */}
          <div className="max-w-[650px]">
            <h2 className="text-[30px] font-medium uppercase leading-[1.2] tracking-[1px] text-[#1D1D1D] sm:text-[36px] md:text-[40px] lg:text-[44px]">
              Digital Marketing
              <br />
              Solutions
            </h2>

            {/* CONTINUOUS TEXT BLOCK */}
            <p className="mt-5 text-[14px] font-normal leading-[1.85] text-[#555] sm:text-[15px] lg:text-[16px]">
              GenMax IT Solution is a digital marketing company focused on
              helping businesses build a strong online presence and achieve
              sustainable growth. We provide customized digital marketing
              solutions based on your business goals, audience, and industry
              requirements. Our team develops personalized strategies designed
              to reach the right audience and generate meaningful leads for
              your business. We continuously monitor, test, optimize, and
              improve campaigns to deliver better performance and
              cost-effective results. From search engines and social media to
              content and paid advertising, GenMax IT Solution uses the right
              digital channels to improve visibility, strengthen brands, and
              support business growth. We combine creative thinking with
              data-driven insights to develop marketing campaigns that are
              relevant, engaging, and aligned with your business objectives.
              Our approach focuses on building meaningful connections with
              your audience, improving brand recognition, increasing qualified
              traffic, and creating opportunities for long-term business
              success in an increasingly competitive digital marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* DIGITAL MARKETING OVERVIEW */}
      <section className="w-full bg-white pb-8 pt-0 sm:pb-10 lg:pb-12">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <p className="w-full text-[14px] font-normal leading-[1.85] text-[#555] sm:text-[15px] lg:text-[16px]">
            GenMax IT Solution is a premier digital marketing agency dedicated
            to providing businesses with a wide range of digital marketing
            solutions that help build a strong online presence and support
            sustainable business growth. Our approach is focused on
            understanding your business objectives, target audience, industry,
            and specific requirements so that we can create personalized
            strategies that deliver meaningful and measurable results. We
            continuously monitor, test, modify, and optimize marketing campaigns
            to ensure they remain effective and cost-efficient. By combining
            different digital channels and strategies, we help businesses reach
            the right audience, increase online visibility, strengthen their
            brand presence, generate quality leads, and achieve sustainable
            growth in the competitive digital landscape.
          </p>
        </div>
      </section>
    </>
  );
}