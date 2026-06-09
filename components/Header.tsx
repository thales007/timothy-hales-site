"use client";

import { useState } from "react";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="nav" id="nav">
      <div className="wrap nav__inner">
        <a href="#top" className="wm nav__wm" onClick={() => handleClick("#top")}>
          Timothy <span className="last">Hales</span>
        </a>

        {/* Desktop nav */}
        <nav className="nav__links">
          {navLinks.map((link) => (
            <button key={link.href} onClick={() => handleClick(link.href)}>
              {link.label}
            </button>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="nav__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span style={{ transform: menuOpen ? "translateY(7px) rotate(45deg)" : undefined }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : undefined }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`nav__mobile${menuOpen ? " open" : ""}`}>
        {navLinks.map((link) => (
          <button key={link.href} onClick={() => handleClick(link.href)}>
            {link.label}
          </button>
        ))}
      </div>
    </header>
  );
}
