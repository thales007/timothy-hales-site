import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import Hero from "@/components/Hero";
import BookNews from "@/components/BookNews";
import { BookActions, BookCover } from "@/components/BookBits";
import { books } from "@/lib/site";

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
              <BookActions book={featured} />
            </div>
          </div>

          <BookNews eyebrow="More books on the way" />
        </div>
      </section>
    </SiteShell>
  );
}
