"use client";

import { useState } from "react";
import { KIT_FORM_ID, isTodo } from "@/lib/site";

// "New book" email signup, sent to Kit. Hidden until KIT_FORM_ID is set.

type Status = "idle" | "sending" | "done" | "error";

export default function BookNews() {
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
    <div className="news reveal">
      <div>
        <h2 className="h3">Get an email when a new book comes out</h2>
        <p className="news__note">Only new books. No regular newsletter.</p>
      </div>
      {status === "done" ? (
        <p className="news__done">Thanks! Check your inbox to confirm.</p>
      ) : (
        <form className="news__form" onSubmit={onSubmit}>
          <label htmlFor="news-email" className="sr-only">Email address</label>
          <input
            id="news-email"
            name="email_address"
            type="email"
            required
            placeholder="you@example.com"
            autoComplete="email"
            className="news__input"
          />
          <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Notify me"}
          </button>
          {status === "error" && (
            <p className="news__error">That didn&apos;t go through. Please try again.</p>
          )}
        </form>
      )}
    </div>
  );
}
