import Link from "next/link";
import { LINKEDIN_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-foot">
      <div className="wrap site-foot__inner">
        <span className="site-foot__copy">
          © {new Date().getFullYear()} Timothy Hales. All rights reserved.
        </span>
        <nav className="site-foot__links">
          <Link href="/books">Books</Link>
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
