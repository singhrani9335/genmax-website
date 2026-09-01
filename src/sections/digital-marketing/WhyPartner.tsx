import Image from "next/image";

export default function WhyPartner() {
  return (
    <section className="w-full bg-[#f7f8fb] py-8 sm:py-10 lg:py-12">
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-8 px-5 sm:px-8 md:grid-cols-2 lg:gap-12 lg:px-12 xl:px-16">
        {/* LEFT CONTENT */}
        <div className="max-w-[650px]">
          <h2 className="text-[28px] font-medium uppercase leading-[1.2] text-[#17245C] sm:text-[32px] md:text-[36px] lg:text-[40px]">
            Why Partner With a Digital Marketing Agency?
          </h2>

          <p className="mt-5 text-[14px] font-normal leading-[1.8] text-[#555] sm:text-[15px] lg:text-[16px]">
            With businesses of all sizes moving online, a strong digital
            presence has become essential for sustainable growth. In
            today&apos;s competitive market, partnering with a professional
            digital marketing agency can help your business stay visible,
            relevant, and ahead of the competition. GenMax IT Solution
            provides comprehensive digital marketing solutions with a
            strategic and data-focused approach. Our team works to understand
            your business goals and uses effective digital strategies to
            maximize your brand&apos;s online visibility and reach the right
            audience. By outsourcing your digital marketing needs to
            experienced professionals, you gain access to specialized
            expertise, effective tools, and measurable strategies. This allows
            you to focus more on your core business while we work on building
            your digital presence and supporting long-term business growth.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex w-full justify-start md:justify-end">
          {/* Decorative Corner */}
          <div className="absolute -left-3 -top-3 z-0 hidden h-[90px] w-[90px] border-l-4 border-t-4 border-[#F04D02] lg:block" />

          <div className="relative z-10 w-full max-w-[560px] overflow-hidden">
            <Image
              src="/images/digital-marketing/digital-marketing-partner.jpg"
              alt="Why Partner With GenMax IT Solution"
              width={750}
              height={650}
              className="h-[400px] w-full object-cover object-center sm:h-[430px] md:h-[450px] lg:h-[480px] xl:h-[500px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}