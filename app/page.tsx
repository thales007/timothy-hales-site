import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import Hero from "@/components/Hero";
import { AmazonButton, BookCover } from "@/components/BookBits";
import { AMAZON_AUTHOR_URL, books } from "@/lib/site";

export default function Home() {
  const featured = books[0];

  return (
    <SiteShell>
      <Hero />

      <section className="section section--sand">
        <div className="wrap">
          <div className="feature reveal">
            <Link href={`/books/${featured.slug}`} className="feature__cover">
              <BookCover book={featured} />
            </Link>
            <div>
              <p className="sec-eyebrow">New book</p>
              <h2 className="sec-title">{featured.title}</h2>
              <p className="sec-sub">{featured.short}</p>
              <div className="btn-row">
                <AmazonButton url={featured.amazonUrl} label="Buy on Amazon" />
                <Link href={`/books/${featured.slug}`} className="btn btn--ghost">
                  About the book
                </Link>
              </div>
            </div>
          </div>

          <div className="more reveal">
            <p className="more__line">More books on the way.</p>
            <AmazonButton url={AMAZON_AUTHOR_URL} label="Follow me on Amazon" variant="ghost" />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
