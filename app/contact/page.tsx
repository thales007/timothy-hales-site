import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import { EMAIL, LINKEDIN_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Timothy Hales by email or on LinkedIn.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="section">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="sec-eyebrow">Get in touch</p>
            <h1 className="sec-title">Contact</h1>
            <p className="sec-sub">
              Have a question about the books or GIS training? I&apos;d love to
              hear from you.
            </p>
          </div>

          <div className="btn-row reveal">
            <a href={`mailto:${EMAIL}`} className="btn btn--primary">
              Send me an email →
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              LinkedIn
            </a>
          </div>
          <p className="contact__email reveal">{EMAIL}</p>
        </div>
      </section>
    </SiteShell>
  );
}
