import Image from "next/image";
import { AMAZON_AUTHOR_URL, isTodo, type Book } from "@/lib/site";

/** Visible marker for a value that still needs filling in. */
export function Todo({ token }: { token: string }) {
  return <span className="todo" title="Placeholder: replace in lib/site.ts">{token}</span>;
}

export function BookCover({ book, priority }: { book: Book; priority?: boolean }) {
  if (isTodo(book.cover)) {
    return (
      <div className="cover cover--todo" style={{ background: book.colors.accent }}>
        <span className="cover__title">{book.title}</span>
        <span className="cover__by">Timothy Hales</span>
        <Todo token={book.cover} />
      </div>
    );
  }
  return (
    <Image
      src={book.cover}
      alt={`${book.title} cover`}
      width={600}
      height={600}
      className="cover"
      priority={priority}
    />
  );
}

/** Amazon button; while the URL is a placeholder it renders inert with the TODO shown. */
export function AmazonButton({
  url,
  label,
  variant = "primary",
}: {
  url: string;
  label: string;
  variant?: "primary" | "ghost";
}) {
  if (isTodo(url)) {
    return (
      <span className={`btn btn--${variant} btn--todo`} aria-disabled="true">
        {label} <Todo token={url} />
      </span>
    );
  }
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`btn btn--${variant}`}>
      {label} →
    </a>
  );
}

export function BuyButtons({ book }: { book: Book }) {
  return (
    <div className="btn-row">
      <AmazonButton url={book.amazonUrl} label="Buy on Amazon" />
      <AmazonButton url={AMAZON_AUTHOR_URL} label="Follow me on Amazon" variant="ghost" />
    </div>
  );
}

export function SamplePages({ book }: { book: Book }) {
  if (book.samplePages.length === 1 && isTodo(book.samplePages[0])) {
    return (
      <div className="samples samples--todo">
        <Todo token={book.samplePages[0]} />
      </div>
    );
  }
  return (
    <div className="samples">
      {book.samplePages.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${book.title} sample page ${i + 1}`}
          width={600}
          height={600}
          className="samples__img"
        />
      ))}
    </div>
  );
}
