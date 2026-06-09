import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Timothy Hales — Builder",
  description:
    "I build tools and content for everyday shoe resellers — and share what I learn along the way.",
  openGraph: {
    title: "Timothy Hales — Builder",
    description:
      "I build tools and content for everyday shoe resellers — and share what I learn along the way.",
    url: "https://timothyhales.com",
    siteName: "Timothy Hales",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
