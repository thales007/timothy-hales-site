import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";

// Personal About page, in first person. The printed book bio lives in the
// books themselves; keep this page about Timothy, not the book.

export const metadata: Metadata = {
  title: "About",
  description:
    "Geospatial educator and author of ABCs of GIS. Husband, father of four, ultrarunner, and lover of Snoopy.",
};

const interests = [
  {
    cls: "pcard--a",
    letters: "FA",
    name: "Family",
    desc: "I'm married to the love of my life, and we have four kids who keep life exciting and full of adventure.",
  },
  {
    cls: "pcard--b",
    letters: "UR",
    name: "Ultra running",
    desc: "I love running long distances, especially ultramarathons.",
  },
  {
    cls: "pcard--c",
    letters: "SN",
    name: "Snoopy",
    desc: "I'm a lover of Snoopy.",
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="section">
        <div className="wrap about">
          <div className="about--simple reveal">
            <p className="sec-eyebrow">About</p>
            <h1 className="sec-title">Hi, I&apos;m Timothy.</h1>
            <div className="about__body">
              <p>
                I love helping people learn technology. I&apos;ve spent more
                than twenty years working with GIS, and most of my career has
                been about making it easier to understand.
              </p>
              <p>
                I didn&apos;t discover GIS until after college. Now I&apos;m
                writing books so kids can discover it much sooner, starting
                with <Link href="/books/abcs-of-gis">ABCs of GIS</Link>.
              </p>
              <p>
                I&apos;ve always liked building things. As a kid I turned a
                container of Legos into a carnival, using the pieces as currency
                and charging my friends to play the games I invented. In high
                school I built a greenhouse and sold plants at the
                farmer&apos;s market.
              </p>
            </div>
          </div>
          <div className="about__photo reveal">
            <Image
              src="/images/Timothy-Office.jpg"
              alt="Timothy Hales"
              width={480}
              height={480}
              className="hero__portrait"
            />
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="sec-eyebrow">Outside of work</p>
            <h2 className="sec-title">A few things I love</h2>
          </div>
          <div className="projects">
            {interests.map((i) => (
              <div key={i.name} className={`pcard pcard--static ${i.cls} reveal`}>
                <div className="pcard__top">
                  <div className="pcard__badge">{i.letters}</div>
                </div>
                <h3 className="pcard__name">{i.name}</h3>
                <p className="pcard__desc">{i.desc}</p>
              </div>
            ))}
          </div>
          <p className="about__close reveal">
            <Link href="/books">Look for more books from me →</Link>
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
