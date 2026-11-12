import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import BookNews from "@/components/BookNews";

// Personal About page, in first person. The printed book bio lives in the
// books themselves; keep this page about Timothy, not the book.

export const metadata: Metadata = {
  title: "About",
  description:
    "Geospatial educator and author of ABCs of GIS. Husband, father of four, ultrarunner, and lover of Snoopy.",
};

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
                I love helping people learn, and my path to doing that
                wasn&apos;t a straight line.
              </p>
              <p>
                After earning a business diploma, I set out to become a high
                school teacher. I started a teaching degree focused on
                business, math and computer science. Then life went a different
                direction. I got married, we started a family, and my career
                took me through a few different industries.
              </p>
              <p>
                Then I discovered GIS, and it stuck. I started working in it
                while going back to college, first for a degree in geospatial
                technology, then to finish my bachelor&apos;s in business
                education.
              </p>
              <p>
                That was more than twenty years ago. I&apos;ve worked in GIS as
                a practitioner using it every day for a county school system,
                and at Esri, the leader in GIS software, helping users around
                the world. I&apos;ve solved software problems, managed
                Esri&apos;s online community, and today I write the courses
                professionals use to learn ArcGIS. So I became a teacher after
                all, just not quite how I envisioned it.
              </p>
              <p>
                Now I&apos;m writing books so kids can discover GIS much sooner
                than I did, starting with{" "}
                <Link href="/books/abcs-of-gis">
                  <em>ABCs of GIS</em>
                </Link>
                .
              </p>
              <p>
                Away from work, I&apos;m a husband and a dad of four, and for
                over a decade I&apos;ve supported my wife as she homeschools
                our kids.
              </p>
              <p>
                I enjoy running ultramarathons. What started with Spartan Races
                grew into ultra distances, with my longest yet at 40.5 miles in
                12 hours.
              </p>
              <p>
                I&apos;ve been starting little businesses since high school,
                from cutting grass to a greenhouse to the shoe reselling
                business I run today.
              </p>
              <p>
                And I&apos;m a lifelong Snoopy fan. It started with a simple
                stuffed animal when I was a baby, made it onto our wedding day
                with Snoopy and Belle figurines on my groom&apos;s cake, and
                has grown into a small collection of modern and antique
                collectibles.
              </p>
              <p>
                Whether it&apos;s a GIS course, a picture book, a lesson at the
                kitchen table or being the family&apos;s go-to tech support,
                I&apos;m still doing what I set out to do: helping people
                learn.
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
              priority
            />
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="wrap">
          <BookNews eyebrow="More books on the way" />
        </div>
      </section>
    </SiteShell>
  );
}
