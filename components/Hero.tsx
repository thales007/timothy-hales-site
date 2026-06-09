export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-[#FAFAF8] pt-[120px] pb-[120px] md:pt-[160px] md:pb-[160px] px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
          <span className="text-[#333333]">Husband. Father. </span>
          <span className="text-[#2A9090]">Builder.</span>
        </h1>

        <p
          className="text-xl leading-relaxed text-[#666666] mb-10 max-w-[540px]"
          style={{ fontSize: "20px" }}
        >
          I build tools and content for everyday shoe resellers — and share what
          I learn along the way.
        </p>

        <a
          href="https://solescore.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#2A9090] text-white font-semibold px-7 py-3.5 rounded-lg text-base hover:bg-[#238080] transition-colors duration-200"
        >
          Explore SoleScore →
        </a>
      </div>
    </section>
  );
}
