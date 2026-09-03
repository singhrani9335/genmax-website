import TestimonialCard from "./TestimonialCard";
import NewsCard from "./NewsCard";

export default function TestimonialsNews() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-10 sm:py-14 lg:py-16 xl:py-18">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-0">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[620px_1fr] lg:gap-20 xl:gap-24">
          {/* LEFT SIDE */}
          <div className="min-w-0">
            <TestimonialCard />
          </div>

          {/* RIGHT SIDE */}
          <div className="min-w-0">
            <NewsCard />
          </div>
        </div>
      </div>
    </section>
  );
}