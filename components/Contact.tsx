const pills = [
  { label: "SoleScore", href: "https://shoes.timothyhales.com" },
  { label: "Reselling Shoes", href: "https://resellingshoes.com" },
  { label: "SteelBlue Kitchen", href: "https://steelbluekitchen.com" },
];

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="sec-head reveal">
          <p className="sec-eyebrow">Get in touch</p>
          <h2 className="sec-title">Contact</h2>
          <p className="sec-sub">
            Have a question, collaboration idea, or just want to say hi? I&apos;d
            love to hear from you.
          </p>
        </div>

        <div className="reveal">
          <div className="contact__cta">
            <a href="mailto:timothyehales@gmail.com" className="btn btn--primary">
              Send me an email →
            </a>
          </div>
          <p className="contact__or">Or visit one of my projects:</p>
          <div className="pills">
            {pills.map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="pill"
              >
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
