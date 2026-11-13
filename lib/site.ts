// Site-wide settings. Values in [BRACKETS] are TODO placeholders:
// replace them with the real value and the page updates everywhere.

export const SITE_URL = "https://www.timothyhales.com";
export const SITE_TITLE = "Timothy Hales | Educator, Author, and Innovator";
export const SITE_DESCRIPTION =
  "Twenty years in the GIS industry, developing training that helps people learn GIS software. Author of ABCs of GIS.";

export const EMAIL = "hello@timothyhales.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/timothyhales/";

// TODO: replace with the Amazon Author Central page once it exists.
export const AMAZON_AUTHOR_URL = "[AMAZON_AUTHOR_URL]";

// Kit form "New book alerts" (the number in the form's embed code). The signup form stays hidden while this is a placeholder.
export const KIT_FORM_ID = "10146221";

/** True while a value is still a [PLACEHOLDER]. */
export const isTodo = (value: string) => value.startsWith("[") && value.endsWith("]");

export type Book = {
  slug: string;
  title: string;
  /** One or two sentences for cards. */
  short: string;
  /** Longer copy for the book page. */
  description: string[];
  whoFor: string[];
  /** Who the book is for, shown as-is (not a reading level). */
  audience: string;
  /** Shown before launch, e.g. "November 2026"; reads after "Coming" and "out in". */
  releaseDate: string;
  amazonUrl: string;
  /** Path under /public, e.g. "/images/books/abcs-of-gis.jpg", or a [PLACEHOLDER]. */
  cover: string;
  /** Paths under /public, or a single [PLACEHOLDER]. */
  samplePages: string[];
  /** Book-page accent colors, taken from the cover. */
  colors: { bg: string; ink: string; accent: string };
  /** Reader quotes, shown on the book page. Only add ones the person agreed to share. */
  praise?: { quote: string; name: string; role: string }[];
  /** `link` is appended to the answer as an inline link. */
  faq: { q: string; a: string; link?: { href: string; label: string } }[];
};

export const books: Book[] = [
  {
    slug: "abcs-of-gis",
    title: "ABCs of GIS",
    short:
      "An A-to-Z book that introduces kids to maps, data, and the technology that connects them.",
    description: [
      "ABCs of GIS walks young readers through the alphabet, one mapping idea for every letter.",
      "Timothy didn't discover GIS until after college. This book is his way of helping kids discover it much sooner.",
    ],
    whoFor: [
      "Kids who love maps, puzzles, and asking how things work",
      "Parents and homeschool families who want to explore maps and technology together",
      "Teachers and librarians introducing geography and technology",
      "GIS professionals who want to share what they do with the kids in their life",
    ],
    praise: [
      {
        quote:
          "I love this book! What a smart and fun way to teach our children the alphabet and map skills. The book is simply written using colorful symbols and definitions.",
        name: "Deanna C.",
        role: "Elementary Teacher",
      },
    ],
    audience: "A read-aloud for ages 3–5, and fun for anyone learning GIS.",
    releaseDate: "November 2026",
    amazonUrl: "[AMAZON_BOOK_URL]",
    cover: "/covers/abcs-of-gis.jpg",
    samplePages: [
      "/books/abcs-of-gis/b-is-for-buffer.jpg",
      "/books/abcs-of-gis/c-is-for-clip.jpg",
    ],
    colors: { bg: "#FFF3D1", ink: "#1E1E1E", accent: "#2D6BE4" },
    faq: [
      {
        q: "What is GIS?",
        a: "GIS stands for Geographic Information System. It's technology that puts information on a map so people can see patterns, answer questions, and make better decisions.",
      },
      {
        q: "Do I need to know GIS to read this with my kids?",
        a: "Not at all. Each letter explains its idea in plain language, so grown-ups can learn right alongside young readers.",
      },
      {
        q: "Does it work in a classroom?",
        a: "Yes. The A-to-Z format makes it easy to read one letter a day or use a page as a starting point for a map activity.",
      },
      {
        q: "Can I get copies for a classroom or group?",
        a: "Yes.",
        link: { href: "/contact", label: "Get in touch and we'll work it out." },
      },
    ],
  },
];

export const getBook = (slug: string) => books.find((b) => b.slug === slug);

/** A book counts as released once its real Amazon link is in. */
export const isReleased = (book: Book) => !isTodo(book.amazonUrl);
