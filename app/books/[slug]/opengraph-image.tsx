import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";
import { books, getBook, isReleased, isTodo } from "@/lib/site";

// Link-preview image for a book page: the cover as a paperback, with title and byline.
export const alt = "Book cover and title, by Timothy Hales";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const book = getBook((await params).slug)!;
  const cover = isTodo(book.cover)
    ? null
    : await readFile(join(process.cwd(), "public", book.cover), "base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: book.colors.bg,
          padding: "0 80px",
          gap: 72,
        }}
      >
        {cover && (
          <div
            style={{
              display: "flex",
              position: "relative",
              borderRadius: 2,
              boxShadow: "6px 0 0 -2px #FFFFFF, 8px 0 0 -2px #D3DAE4, 0 30px 50px -20px rgba(15,25,45,0.45)",
            }}
          >
            <img
              src={`data:image/jpeg;base64,${cover}`}
              width={460}
              height={460}
              style={{ borderRadius: 2 }}
              alt=""
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 18,
                height: 460,
                background:
                  "linear-gradient(90deg, rgba(0,0,0,0.14) 0%, rgba(255,255,255,0.10) 35%, rgba(0,0,0,0.12) 55%, rgba(0,0,0,0) 100%)",
              }}
            />
          </div>
        )}
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 26, fontWeight: 700, color: book.colors.accent, letterSpacing: 3 }}>
            BY TIMOTHY HALES
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: book.colors.ink,
              lineHeight: 1.02,
              marginTop: 16,
              letterSpacing: -2,
            }}
          >
            {book.title}
          </div>
          <div style={{ fontSize: 30, color: "#4A5260", marginTop: 22, lineHeight: 1.35 }}>
            {book.audience}
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, color: book.colors.accent, marginTop: 26 }}>
            {isReleased(book) ? "Available on Amazon" : `Coming ${book.releaseDate}`}
          </div>
        </div>
      </div>
    ),
    size
  );
}
