import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero__grid">
          {/* Left: text */}
          <div className="hero__text reveal">
            {/* Each phrase stays on one line; size scales with the column. */}
            <h1 className="hero__h1 hero__h1--lines">
              <span>Geospatial educator.</span>
              <span>Children&apos;s author.</span>
              <em>Curious innovator.</em>
            </h1>
            <p className="hero__lede">
              Twenty years in the GIS industry. I develop training that helps
              people learn GIS software, and now a book that introduces GIS to
              kids. Along the way, I&apos;m always experimenting with new ways
              to teach, build, and solve problems.
            </p>
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
