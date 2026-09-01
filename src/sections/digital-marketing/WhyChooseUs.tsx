import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <>
      {/* WHY CHOOSE US SECTION */}
      <section className="w-full bg-white py-10 sm:py-12 lg:py-14 xl:py-16">
        <div className="mx-auto grid w-full max-w-[1400px] items-center gap-8 px-5 sm:px-8 md:grid-cols-2 lg:gap-12 lg:px-12 xl:px-16">
          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="absolute -bottom-3 -right-3 z-0 hidden h-[100px] w-[100px] border-b-4 border-r-4 border-[#F04D02] lg:block" />

            <Image
              src="/images/digital-marketing/why-choose-digital-marketing.jpg"
              alt="Why Choose GenMax IT Solution as Your Digital Marketing Partner"
              width={750}
              height={650}
              className="relative z-10 h-[400px] w-full object-cover object-center shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:h-[440px] md:h-[460px] lg:h-[500px] xl:h-[520px]"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-[680px]">
            <h2 className="text-[28px] font-medium uppercase leading-[1.2] text-[#17245C] sm:text-[32px] md:text-[36px] lg:text-[40px]">
              Why Choose Us as Your Digital Marketing Partner
            </h2>

            <p className="mt-5 text-[14px] leading-[1.8] text-[#555] sm:text-[15px] lg:text-[16px]">
              GenMax IT Solution is your all-in-one digital marketing partner,
              helping businesses grow through strategic and data-driven digital
              solutions. We focus on understanding your business goals,
              identifying the right opportunities, and creating effective
              strategies that improve brand visibility and support quality lead
              generation. Our expertise covers Digital Marketing, Search Engine
              Optimization, Social Media Marketing, Paid Ads Management, Online
              Reputation Management, Email Marketing, Google Ads, Branding,
              Content Marketing, and more. By combining the right strategies
              and digital channels, we help your business build a stronger
              online presence and connect with the right audience.
            </p>
          </div>
        </div>
      </section>

      {/* ADDITIONAL CONTENT */}
      <section className="w-full bg-white pb-10 sm:pb-12 lg:pb-14 xl:pb-16">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <p className="w-full text-[14px] leading-[1.8] text-[#555] sm:text-[15px] lg:text-[16px]">
            With a deep understanding of your market, we design strategies
            tailored to your industry and target audience. We have separate
            teams for each digital marketing service, who stay ahead of
            digital trends and work with innovative tools and technologies.
            GenMax IT Solution prioritizes transparency, creativity, and
            performance-driven marketing to help you drive real business
            success.
          </p>
        </div>
      </section>
    </>
  );
}