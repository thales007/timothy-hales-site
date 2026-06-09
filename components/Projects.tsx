interface Project {
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    badge: "Live",
    badgeColor: "#2A9090",
    title: "SoleScore",
    description:
      "A mobile-first web app that helps shoe resellers decide whether to buy in seconds. Search any shoe, see real sold data, and get a Buy/Maybe/Pass score on the spot.",
    link: "https://solescore.app",
  },
  {
    badge: "Active",
    badgeColor: "#4A9070",
    title: "Reselling Shoes",
    description:
      "Guides, strategies, and resources for everyday shoe resellers sourcing from thrift stores and yard sales — not hype drops.",
    link: "https://resellingshoes.com",
  },
  {
    badge: "Ongoing",
    badgeColor: "#888880",
    title: "SteelBlue Kitchen",
    description:
      "Honest reviews of kitchen knives and cooking gear I've tested myself. Focused on what actually holds up in a real kitchen.",
    link: "https://steelbluekitchen.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#2A9090] mb-3">
          What I&apos;m Building
        </p>
        <h2 className="text-4xl font-bold text-[#333333] mb-12">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white border border-[#E8E8E8] rounded-xl p-6 flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <span
                className="inline-block self-start text-white text-xs font-semibold px-3 py-1 rounded-full mb-4"
                style={{ backgroundColor: project.badgeColor }}
              >
                {project.badge}
              </span>

              <h3 className="text-[18px] font-bold text-[#333333] mb-2">
                {project.title}
              </h3>

              <p className="text-[14px] text-[#666666] leading-relaxed flex-1 mb-6">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2A9090] text-sm font-semibold hover:underline"
              >
                Visit →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
