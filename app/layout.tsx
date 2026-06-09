import type { Metadata } from "next";
import { Schibsted_Grotesk, Figtree } from "next/font/google";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-schibsted",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Timothy Hales — Husband, Father, Entrepreneur",
  description:
    "Timothy Hales builds tools and content for everyday shoe resellers — and shares what he learns along the way. Home base for SoleScore, Reselling Shoes, and SteelBlue Kitchen.",
  openGraph: {
    title: "Timothy Hales — Husband, Father, Entrepreneur",
    description:
      "I build tools and content for everyday shoe resellers — and share what I learn along the way.",
    url: "https://timothyhales.com",
    siteName: "Timothy Hales",
    type: "website",
    images: [{ url: "https://timothyhales.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://timothyhales.com/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon-180.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${schibsted.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}
