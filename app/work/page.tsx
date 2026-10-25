import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";

// Sourced from Timothy's resume. Public-facing only: no internal project
// names, systems, or confidential details. Do not list GISP.

export const metadata: Metadata = {
  title: "Work",
  description:
    "Over 20 years with Esri software and 16 years at Esri: GIS software training, Esri Community management, and technical support.",
};

const employers = [
  {
    org: "Esri · Charlotte, North Carolina",
    roles: [
      {
        title: "Senior Education Specialist",
        points: [
          "Develop and maintain instructor-led and web-based ArcGIS training",
          "Author courses on Python, Arcade, AI in ArcGIS, ArcGIS StoryMaps, ArcGIS Dashboards, ArcGIS Urban, CityEngine, 3D, and spatial analysis",
          "Plan and scope new courses with development teams, then review content, visuals, and assessments for accuracy and clarity",
          "Create visual assets and record voiceovers for course delivery",
          "Mentor new authors as they learn the course development process",
          "Explore responsible ways to use AI to design, document, and evaluate training content",
          "Test AI assistants in ArcGIS with software and services teams and share feedback on accuracy",
        ],
      },
      {
        title: "Enterprise Community Manager",
        points: [
          "Managed Esri Community, Esri's online user community, as it grew past 225,000 registered users",
          "Led the transition from Esri Forums to Esri Community",
          "Advocated for community members and helped make their voices heard",
          "Helped move the ArcGIS Ideas program into Esri Community",
          "Enhanced the existing MVP program as it moved from the forums to Esri Community",
          "Automated community reporting with Python and REST APIs",
          "Represented the community at the Esri User Conference",
        ],
      },
      {
        title: "Education Specialist",
        points: [
          "Wrote web-based ArcGIS training",
          "Validated course structure and exercises for quality and consistency",
          "Helped standardize Esri technical certification exams",
          "Worked with the 3D development team on 3D city model height tools",
        ],
      },
      {
        title: "Senior Support Analyst",
        points: [
          "Helped ArcGIS users around the world solve software problems by phone, email, and chat",
          "Handled escalated cases for colleagues",
          "Wrote knowledge base articles, blog posts, and forum answers",
          "Gave university talks on 3D analysis, CityEngine, Python, and social media mapping",
        ],
      },
    ],
  },
  {
    org: "Union County Public Schools · North Carolina",
    roles: [
      {
        title: "Planning Project Manager",
        points: [
          "Used GIS to support school system planning",
          "Helped develop a GIS course for high school students",
        ],
      },
    ],
  },
];

// Personal AI-assisted builds (no links).
const builds = [
  { cls: "pcard--a", letters: "TT", name: "Time Tracker", desc: "A desktop tool for tracking time spent on tasks and projects." },
  { cls: "pcard--b", letters: "GB", name: "GUI Button Builder", desc: "A desktop tool for extracting interface buttons from images." },
  { cls: "pcard--c", letters: "RA", name: "Resale Value Analyst", desc: "A web application that assesses the resell value of shoes." },
  { cls: "pcard--a", letters: "LM", name: "eBay Listing and Photo Manager", desc: "A web application that manages eBay listings and product photos." },
];

const certs = [
  "Esri Certified ArcGIS Desktop Professional",
  "Esri Certified Subject Matter Expert",
  "Esri Certified ArcGIS Desktop Developer Associate",
];

const education = [
  { degree: "B.S. Business Education (Information Technology)", school: "East Carolina University" },
  { degree: "A.A.S. Geospatial Technology", school: "Central Piedmont Community College" },
  { degree: "Business Diploma", school: "Southeastern Free Will Baptist College" },
];

export default function WorkPage() {
  return (
    <SiteShell>
      <section className="section">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="sec-eyebrow">Work</p>
            <h1 className="sec-title">Twenty years of helping people learn GIS</h1>
            <p className="sec-sub">
              I&apos;ve worked with Esri software for over 20 years, 16 of them
              at Esri. Along the way I&apos;ve supported users, built a
              community, and written training that turns complex ArcGIS
              workflows into clear lessons.
            </p>
          </div>

          {employers.map((e) => (
            <div key={e.org}>
              <p className="org reveal">{e.org}</p>
              <ol className="roles">
                {e.roles.map((r) => (
                  <li key={r.title} className="role reveal">
                    <h2 className="role__title">{r.title}</h2>
                    <ul className="ticks">
                      {r.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
        <div className="wrap cred cred--after">
          <div className="reveal">
            <h2 className="h3">Certifications</h2>
            <ul className="plain">
              {certs.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="reveal">
            <h2 className="h3">Education</h2>
            <ul className="plain">
              {education.map((e) => (
                <li key={e.degree}>
                  <strong>{e.degree}</strong>
                  <span>{e.school}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="sec-eyebrow">Experimenting</p>
            <h2 className="sec-title">Exploring AI</h2>
            <p className="sec-sub">
              Beyond AI in training development, I&apos;m always experimenting
              with AI to build tools that solve everyday problems. A few
              things I&apos;ve built:
            </p>
          </div>
          <div className="projects projects--four">
            {builds.map((b) => (
              <div key={b.name} className={`pcard pcard--static ${b.cls} reveal`}>
                <div className="pcard__top">
                  <div className="pcard__badge">{b.letters}</div>
                </div>
                <h3 className="pcard__name">{b.name}</h3>
                <p className="pcard__desc">{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="btn-row reveal">
            <Link href="/contact" className="btn btn--ghost">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
