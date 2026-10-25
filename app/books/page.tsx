import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { AmazonButton, BookCover, SamplePages, Todo } from "@/components/BookBits";
import { AMAZON_AUTHOR_URL, books, isTodo } from "@/lib/site";

// /books is printed in the books' author bio. Keep this URL permanent.

export const metadata: Metadata = {
  title: "Books",
  description: "Books by Timothy Hales, starting with ABCs of GIS.",
};

export default function BooksPage() {
  return (
    <SiteShell>
      <section className="section">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="sec-eyebrow">Books</p>
            <h1 className="sec-title">Books by Timothy Hales</h1>
            <p className="sec-sub">
              Books that help young readers discover GIS, and the world around
              them, much sooner than I did.
            </p>
          </div>

          <div className="books">
            {books.map((book) => (
              <article key={book.slug} className="book-row reveal">
                <Link href={`/books/${book.slug}`} className="book-row__cover">
                  <BookCover book={book} />
                </Link>
                <div>
                  <h2 className="book-row__title">
                    <Link href={`/books/${book.slug}`}>{book.title}</Link>
                  </h2>
                  <p className="book-row__meta">
                    Reading age:{" "}
                    {isTodo(book.readingAge) ? <Todo token={book.readingAge} /> : book.readingAge}
                  </p>
                  <p className="book-row__desc">{book.short}</p>
                  <div className="btn-row">
                    <AmazonButton url={book.amazonUrl} label="Buy on Amazon" />
                    <Link href={`/books/${book.slug}`} className="btn btn--ghost">
                      About the book
                    </Link>
                  </div>
                  <p className="book-row__sub">Peek inside</p>
                  <SamplePages book={book} />
                </div>
              </article>
            ))}
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
