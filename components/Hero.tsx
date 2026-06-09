import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero__grid">
          {/* Left: text */}
          <div className="reveal">
            <h1 className="hero__h1">
              Husband. Father.<br />
              <em>Entrepreneur.</em>
            </h1>
            <p className="hero__lede">
              I build tools and content for everyday shoe resellers — and share
              what I learn along the way.
            </p>
            <div className="hero__cta">
              <a href="#projects" className="btn btn--primary">
                See what I&apos;m building →
              </a>
              <a href="#about" className="btn btn--ghost">
                My story
              </a>
            </div>
          </div>

          {/* Right: portrait */}
          <div className="hero__media reveal">
            <Image
              src="/images/Timothy-Office.jpg"
              alt="Timothy Hales"
              width={480}
              height={480}
              className="hero__portrait"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
