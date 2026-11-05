import type { MetadataRoute } from "next";
import { SITE_URL, books } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/books", "/about", "/work", "/contact"].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
  const bookPages = books.map((book) => ({
    url: `${SITE_URL}/books/${book.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));
  return [...pages, ...bookPages];
}
