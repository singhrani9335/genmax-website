import { digitalMarketingProcess } from "@/data/digitalMarketing";

export default function DigitalMarketingProcess() {
  const steps = [
    {
      lineY: 55,
      top: 31,
    },
    {
      lineY: 235,
      top: 211,
    },
    {
      lineY: 415,
      top: 391,
    },
    {
      lineY: 610,
      top: 586,
    },
  ];

  const MAIN_LINE_X = 560;
  const CIRCLE_X = 625;

  const LEFT_DOT_X = 330;
  const LEFT_VERTICAL_X = 410;

  const TOP_DOT_Y = 140;
  const BOTTOM_DOT_Y = 410;

  return (
    <section className="w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-16 xl:py-20">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* ================= HEADING ================= */}
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="text-[30px] font-normal text-[#17245C] sm:text-[36px] lg:text-[40px]">
            Our Process
          </h2>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="relative mx-auto hidden h-[720px] w-full max-w-[1200px] lg:block">
          {/* ================= BACKGROUND SVG LINES ================= */}
          <svg
            className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            viewBox="0 0 1200 720"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <style>
                {`
                  .process-line {
                    stroke: #17245C;
                    stroke-width: 1.5;
                    stroke-dasharray: 5 5;
                    fill: none;
                  }
                `}
              </style>
            </defs>

            {/* ================= LEFT SIDE STRUCTURE ================= */}
            <path
              className="process-line"
              d={`
                M ${LEFT_DOT_X} ${TOP_DOT_Y} 
                H ${LEFT_VERTICAL_X} 
                V ${BOTTOM_DOT_Y} 
                H ${LEFT_DOT_X}
              `}
            />

            {/* LEFT STRUCTURE TO MAIN LINE */}
            <path
              className="process-line"
              d={`
                M ${LEFT_VERTICAL_X} 275 
                H ${MAIN_LINE_X}
              `}
            />

            {/* ================= MAIN VERTICAL LINE ================= */}
            <path
              className="process-line"
              d={`M ${MAIN_LINE_X} ${steps[0].lineY} V ${steps[3].lineY}`}
            />

            {/* ================= STEP LINES ================= */}
            {steps.map((step, index) => (
              <path
                key={`step-line-${index}`}
                className="process-line"
                d={`M ${MAIN_LINE_X} ${step.lineY} H ${CIRCLE_X}`}
              />
            ))}
          </svg>

          {/* ================= LEFT IMAGE CIRCLE ================= */}
          <div className="absolute left-[20px] top-[140px] z-10 flex h-[280px] w-[280px] items-center justify-center overflow-hidden rounded-full border-[8px] border-[#17245C]/10 bg-[#f7f8fb] shadow-[0_15px_40px_rgba(23,36,92,0.10)]">
            <img
              src="/images/genmax-logo.png"
              alt="GenMax IT Solution"
              className="h-full w-full object-cover"
            />
          </div>

          {/* ================= LEFT DOTS ================= */}
          <svg
            className="pointer-events-none absolute inset-0 z-20 h-full w-full"
            viewBox="0 0 1200 720"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            {/* TOP DOT */}
            <circle
              cx={LEFT_DOT_X}
              cy={TOP_DOT_Y}
              r="8"
              fill="#F04D02"
            />

            {/* BOTTOM DOT */}
            <circle
              cx={LEFT_DOT_X}
              cy={BOTTOM_DOT_Y}
              r="8"
              fill="#F04D02"
            />
          </svg>

          {/* ================= PROCESS STEPS ================= */}
          {digitalMarketingProcess.map((step, index) => {
            const position = steps[index];

            if (!position) return null;

            return (
              <div
                key={step.number}
                className="absolute z-30"
                style={{
                  left: `${CIRCLE_X}px`,
                  top: `${position.top}px`,
                }}
              >
                <div className="grid grid-cols-[48px_minmax(0,1fr)] gap-5">
                  {/* NUMBER CIRCLE */}
                  <div className="relative z-10 flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full border border-[#8b939d] bg-white text-[21px] font-normal text-[#505964]">
                    {step.number}
                  </div>

                  {/* CONTENT */}
                  <div className="w-[510px] xl:w-[540px]">
                    <h3 className="text-[19px] font-normal uppercase leading-[1.35] tracking-[1px] text-[#17245C] xl:text-[21px]">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-[14px] leading-[1.8] text-[#56606B] xl:text-[15px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= MOBILE / TABLET ================= */}
        <div className="relative lg:hidden">
          <div className="absolute bottom-[30px] left-[24px] top-[20px] border-l-[1.5px] border-dashed border-[#17245C]" />

          <div className="relative space-y-10">
            {digitalMarketingProcess.map((step) => (
              <div
                key={step.number}
                className="relative grid grid-cols-[65px_minmax(0,1fr)] gap-3"
              >
                {/* NUMBER CIRCLE */}
                <div className="relative z-10 flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#8b939d] bg-white text-[20px] text-[#505964]">
                  {step.number}
                </div>

                {/* CONTENT */}
                <div>
                  <h3 className="text-[17px] font-normal uppercase leading-[1.4] tracking-[0.8px] text-[#17245C] sm:text-[19px]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-[1.8] text-[#56606B] sm:text-[15px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}