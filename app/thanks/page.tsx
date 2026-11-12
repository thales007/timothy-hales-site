import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { BookCover } from "@/components/BookBits";
import { books, isReleased } from "@/lib/site";

// Where Kit sends new subscribers after they confirm their email.
// Not linked anywhere on the site, and kept out of search and the sitemap.
export const metadata: Metadata = {
  title: "You're on the list",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  const book = books[0];
  const out = isReleased(book);

  return (
    <SiteShell>
      <section className="hero">
        <div className="wrap hero__grid">
          <div className="reveal">
            <p className="sec-eyebrow">Email confirmed</p>
            <h1 className="sec-title">Thanks! You&apos;re on the list.</h1>
            <p className="hero__lede">
              {out
                ? `${book.title} is out now. I'll email you when the next book is on the way.`
                : `I'll email you when ${book.title} is out in ${book.releaseDate}.`}{" "}
              Just a few notes about new books and launches. No spam, no weekly newsletter.
            </p>
            <div className="btn-row" style={{ marginTop: 28 }}>
              <Link href={`/books/${book.slug}`} className="btn btn--primary">
                {out ? "See the book →" : "Take a look inside →"}
              </Link>
              <Link href="/" className="btn btn--ghost">
                Back to home
              </Link>
            </div>
          </div>
          <div className="reveal" style={{ maxWidth: 380, width: "100%", justifySelf: "center" }}>
            <BookCover book={book} priority />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
