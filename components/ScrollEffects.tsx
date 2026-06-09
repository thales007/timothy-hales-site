"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    // Add .js class so reveal CSS activates
    document.documentElement.classList.add("js");

    // Nav hairline on scroll
    const nav = document.getElementById("nav");
    const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Reveal on scroll
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const reveal = (el: HTMLElement) => el.classList.add("in");
    const revealInstant = (el: HTMLElement) => {
      el.style.transition = "none";
      el.classList.add("in");
    };

    const showIfVisible = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      revealEls.forEach((el) => {
        if (el.classList.contains("in")) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.95 && r.bottom > 0) revealInstant(el);
      });
    };

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              reveal(e.target as HTMLElement);
              io.unobserve(e.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
      );
      revealEls.forEach((el) => io.observe(el));
    } else {
      revealEls.forEach(revealInstant);
    }

    showIfVisible();
    window.addEventListener("load", showIfVisible);
    window.addEventListener("scroll", showIfVisible, { passive: true });

    // Safety fallback — never leave content hidden
    const timeout = setTimeout(() => revealEls.forEach(revealInstant), 1400);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("load", showIfVisible);
      window.removeEventListener("scroll", showIfVisible);
      clearTimeout(timeout);
    };
  }, []);

  return null;
}
