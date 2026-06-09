import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#F0EDEA] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="w-full md:w-auto flex-shrink-0">
            <Image
              src="/images/Timothy-Office.jpg"
              alt="Timothy Hales"
              width={380}
              height={380}
              className="rounded-xl object-cover w-full md:w-[380px] md:h-[380px]"
            />
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#2A9090] mb-3">
              A Little About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6 leading-snug">
              I built the tool I wished I had.
            </h2>
            <div className="space-y-4 text-[#555555] leading-relaxed">
              <p>
                I&apos;m a husband and dad who got hooked on shoe reselling and
                never really looked back. What started as a side hustle sourcing
                shoes from thrift stores turned into a full obsession with
                building tools that make the work easier for everyday resellers.
              </p>
              <p>
                SoleScore came out of a problem I kept running into at the thrift
                store — no quick way to know if a shoe was actually worth buying.
                I built the tool I wished I had, and it turns out a lot of other
                people wanted it too.
              </p>
              <p>
                I also run ResellingShoes.com, where I write practical guides for
                people sourcing everyday shoes from thrift stores and yard sales,
                and SteelBlue Kitchen, where I review kitchen knives and cooking
                gear.
              </p>
              <p>
                I share what works, what doesn&apos;t, and what I&apos;m learning
                as I build — no hype, just honest content from someone doing the
                work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
