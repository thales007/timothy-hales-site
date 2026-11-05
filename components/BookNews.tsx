"use client";

import { useState } from "react";
import { AMAZON_AUTHOR_URL, KIT_FORM_ID, isTodo } from "@/lib/site";

// New-book email signup, sent to Kit. Hidden until KIT_FORM_ID is set.
// `bare` drops the card styling so it can sit inside a book's hero.

type Status = "idle" | "sending" | "done" | "error";

export default function BookNews({
  title = "Want to know when the next book is out?",
  eyebrow,
  bare = false,
}: {
  title?: string;
  eyebrow?: string;
  bare?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");

  if (isTodo(KIT_FORM_ID)) return null;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });
      // Kit answers 200 even when it rejects a signup, so check its status field.
      const data = await res.json().catch(() => null);
      setStatus(res.ok && data?.status === "success" ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={`news${bare ? " news--bare" : ""} reveal`}>
      <div>
        {eyebrow && <p className="sec-eyebrow">{eyebrow}</p>}
        <h2 className="news__title">{title}</h2>
        <p className="news__note">
          Leave your email and I&apos;ll send a few notes about new books and launches. No spam,
          no weekly newsletter.
        </p>
      </div>
      <div>
        {status === "done" ? (
          <p className="news__done">Thanks! Check your inbox to confirm.</p>
        ) : (
          <form className="news__form" onSubmit={onSubmit}>
            <label htmlFor={bare ? "news-email-hero" : "news-email"} className="sr-only">
              Email address
            </label>
            <input
              id={bare ? "news-email-hero" : "news-email"}
              name="email_address"
              type="email"
              required
              placeholder="you@example.com"
              autoComplete="email"
              className="news__input"
            />
            <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Let me know"}
            </button>
            {status === "error" && (
              <p className="news__error">That didn&apos;t go through. Please try again.</p>
            )}
          </form>
        )}
        {!bare && !isTodo(AMAZON_AUTHOR_URL) && (
          <p className="news__follow">
            Or{" "}
            <a href={AMAZON_AUTHOR_URL} target="_blank" rel="noopener noreferrer">
              follow me on Amazon
            </a>
            .
          </p>
        )}
      </div>
    </div>
  );
}
