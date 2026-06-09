const projects = [
  {
    cls: "pcard--a",
    letters: "SS",
    name: "SoleScore",
    desc: "A mobile-first web app that helps shoe resellers decide whether to buy in seconds. Search any shoe, see real sold data, and get a Buy/Maybe/Pass score on the spot.",
    linkLabel: "shoes.timothyhales.com →",
    href: "https://shoes.timothyhales.com",
  },
  {
    cls: "pcard--b",
    letters: "RS",
    name: "Reselling Shoes",
    desc: "Guides, strategies, and resources for everyday shoe resellers sourcing from thrift stores and yard sales — not hype drops.",
    linkLabel: "resellingshoes.com →",
    href: "https://resellingshoes.com",
  },
  {
    cls: "pcard--c",
    letters: "SK",
    name: "SteelBlue Kitchen",
    desc: "Honest reviews of kitchen knives and cooking gear I've tested myself. Focused on what actually holds up in a real kitchen.",
    linkLabel: "steelbluekitchen.com →",
    href: "https://steelbluekitchen.com",
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="sec-head reveal">
          <p className="sec-eyebrow">What I&apos;m building</p>
          <h2 className="sec-title">Projects</h2>
        </div>
        <div className="projects">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`pcard ${p.cls} reveal`}
            >
              <div className="pcard__top">
                <div className="pcard__badge">{p.letters}</div>
              </div>
              <h3 className="pcard__name">{p.name}</h3>
              <p className="pcard__desc">{p.desc}</p>
              <span className="pcard__foot">{p.linkLabel}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
