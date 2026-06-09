import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-[#FAFAF8] pt-[120px] pb-[120px] md:pt-[160px] md:pb-[160px] px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        {/* Left: text */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
            <span className="text-[#333333]">Husband. Father. </span>
            <span className="text-[#2A9090]">Entrepreneur.</span>
          </h1>

          <p
            className="text-xl leading-relaxed text-[#666666] mb-10 max-w-[540px]"
            style={{ fontSize: "20px" }}
          >
            I build tools and content for everyday shoe resellers — and share what
            I learn along the way.
          </p>

          <a
            href="#projects"
            className="inline-block bg-[#2A9090] text-white font-semibold px-7 py-3.5 rounded-lg text-base hover:bg-[#238080] transition-colors duration-200"
          >
            See what I&apos;m building →
          </a>
        </div>

        {/* Right: headshot — hidden on mobile */}
        <div className="hidden md:block flex-shrink-0 w-[380px] h-[460px]">
          <Image
            src="/images/Timothy-Office.jpg"
            alt="Timothy Hales"
            width={380}
            height={460}
            className="rounded-xl object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
