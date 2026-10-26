// Site-wide settings. Values in [BRACKETS] are TODO placeholders:
// replace them with the real value and the page updates everywhere.

export const SITE_URL = "https://timothyhales.com";
export const SITE_TITLE = "Timothy Hales | Educator, Author, and Innovator";
export const SITE_DESCRIPTION =
  "Twenty years in the GIS industry, developing training that helps people learn GIS software. Author of ABCs of GIS.";

export const EMAIL = "timothyehales@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/timothyhales/";

// TODO: replace with the Amazon Author Central page once it exists.
export const AMAZON_AUTHOR_URL = "[AMAZON_AUTHOR_URL]";

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
  readingAge: string;
  amazonUrl: string;
  /** Path under /public, e.g. "/images/books/abcs-of-gis.jpg", or a [PLACEHOLDER]. */
  cover: string;
  /** Paths under /public, or a single [PLACEHOLDER]. */
  samplePages: string[];
  /** Book-page accent colors; swap for the cover's real colors. */
  colors: { bg: string; ink: string; accent: string };
  faq: { q: string; a: string }[];
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
      "Parents and homeschool families looking for a fresh way to learn about the world",
      "Teachers and librarians introducing geography and technology",
      "GIS professionals who want to share what they do with their own kids",
    ],
    readingAge: "[READING_AGE]",
    amazonUrl: "[AMAZON_BOOK_URL]",
    cover: "[COVER_IMAGE]",
    samplePages: ["[SAMPLE_PAGES]"],
    colors: { bg: "#E9EFE3", ink: "#25201A", accent: "#6E7B53" },
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
        q: "Can libraries and bookstores order it?",
        a: "Yes. For library, bookstore, or classroom orders, email " + EMAIL + ".",
      },
    ],
  },
];

export const getBook = (slug: string) => books.find((b) => b.slug === slug);
