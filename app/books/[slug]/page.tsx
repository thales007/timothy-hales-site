import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import { BookCover, BuyButtons, SamplePages, Todo } from "@/components/BookBits";
import { books, getBook, isTodo } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const book = getBook((await params).slug);
  if (!book) return {};
  return { title: book.title, description: book.short };
}

export default async function BookPage({ params }: { params: Promise<{ slug: string }> }) {
  const book = getBook((await params).slug);
  if (!book) notFound();

  const vars = {
    "--book-bg": book.colors.bg,
    "--book-ink": book.colors.ink,
    "--book-accent": book.colors.accent,
  } as React.CSSProperties;

  return (
    <SiteShell>
      <div style={vars}>
        <section className="section book-hero">
          <div className="wrap">
            <p className="crumb reveal">
              <Link href="/books">← All books</Link>
            </p>
            <div className="feature reveal">
              <div className="feature__cover">
                <BookCover book={book} priority />
              </div>
              <div>
                <p className="sec-eyebrow book-eyebrow">By Timothy Hales</p>
                <h1 className="sec-title">{book.title}</h1>
                {book.description.map((p) => (
                  <p key={p} className="sec-sub">{p}</p>
                ))}
                <p className="book-row__meta">
                  Reading age:{" "}
                  {isTodo(book.readingAge) ? <Todo token={book.readingAge} /> : book.readingAge}
                </p>
                <BuyButtons book={book} />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap book-detail">
            <div className="reveal">
              <h2 className="h3">Who it&apos;s for</h2>
              <ul className="ticks">
                {book.whoFor.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </div>

            <div className="reveal">
              <h2 className="h3">Peek inside</h2>
              <SamplePages book={book} />
            </div>

            <div className="reveal">
              <h2 className="h3">Questions</h2>
              <dl className="faq">
                {book.faq.map((f) => (
                  <div key={f.q} className="faq__item">
                    <dt>{f.q}</dt>
                    <dd>{f.a}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <p className="publisher reveal">
              Published by{" "}
              <a href="https://selahcreativemedia.com" target="_blank" rel="noopener noreferrer">
                Selah Creative Media
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
