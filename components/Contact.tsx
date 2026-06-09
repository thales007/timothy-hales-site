const links = [
  { label: "SoleScore", href: "https://solescore.app" },
  { label: "Reselling Shoes", href: "https://resellingshoes.com" },
  { label: "SteelBlue Kitchen", href: "https://steelbluekitchen.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#2A9090] mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl font-bold text-[#333333] mb-4">Contact</h2>
          <p className="text-[#666666] leading-relaxed mb-8">
            Have a question, collaboration idea, or just want to say hi? I&apos;d
            love to hear from you.
          </p>

          <a
            href="mailto:timothyehales@gmail.com"
            className="inline-block bg-[#2A9090] text-white font-semibold px-7 py-3.5 rounded-lg text-base hover:bg-[#238080] transition-colors duration-200 mb-12"
          >
            Send me an email →
          </a>

          <div>
            <p className="text-sm font-semibold text-[#333333] mb-4">
              Or visit one of my projects:
            </p>
            <div className="flex flex-wrap gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#2A9090] text-[#2A9090] text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#E8F5F5] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
