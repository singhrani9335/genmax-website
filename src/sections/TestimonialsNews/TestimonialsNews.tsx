import TestimonialCard from "./TestimonialCard";
import NewsCard from "./NewsCard";

export default function TestimonialsNews() {
  return (
    <section className="w-full overflow-hidden bg-white py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-start
            gap-16
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-12
            xl:gap-20
          "
        >
          {/* Client Testimonials */}
          <div className="min-w-0 w-full">
            <TestimonialCard />
          </div>

          {/* Latest News */}
          <div className="min-w-0 w-full">
            <NewsCard />
          </div>
        </div>
      </div>
    </section>
  );
}