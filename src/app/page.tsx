import Link from "next/link";
import Image from "next/image";

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="font-[family-name:var(--font-geist-mono)] text-xs text-[#b8b6af]">({n})</span>
      <span className="text-xs font-medium tracking-widest uppercase text-[#888780]">{label}</span>
    </div>
  );
}

function Divider() {
  return <hr className="border-t border-[#e8e6e0] my-20" />;
}

function ImagePlaceholder({ label, aspect = "square" }: { label: string; aspect?: "square" | "wide" | "tall" }) {
  const heights: Record<string, string> = {
    square: "aspect-square",
    wide: "aspect-[4/3]",
    tall: "aspect-[3/4]",
  };
  return (
    <div
      className={`w-full ${heights[aspect]} border border-dashed border-[#c8c6bf] bg-[#f2f0eb] flex flex-col items-center justify-center gap-2`}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b8b6af" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span className="text-xs text-[#b8b6af] font-[family-name:var(--font-geist-mono)] text-center px-4">
        {label}
      </span>
    </div>
  );
}

const experience = [
  {
    company: "Edda AI",
    link: "https://www.edda.ai/",
    role: "AI Engineer Intern",
    period: "Aug–Sep 2026",
    location: "Oslo, Norway",
    bullets: [],
  },
  {
    company: "CERN Openlab",
    link: "https://openlab.cern/",
    role: "ML Intern",
    period: "Jun–Aug 2026",
    location: "Geneva, Switzerland",
    bullets: [
      "FPGA implementation of a VAE encoder for the ATLAS trigger using hls4ml and quantization-aware training (HGQ2), meeting strict latency and on-chip resource budgets.",
      "Chose this position over an offer from [Rystad Energy](https://www.rystadenergy.com/) as an Analysis/AI Intern.",
    ],
  },
  {
    company: "Å Energy",
    link: "https://www.aenergi.no/",
    role: "AI/ML Intern",
    period: "Jun–Aug 2025",
    location: "Drammen, Norway",
    image: { src: "/a-energy.png", caption: "From my summer at Å Energy in Drammen." },
    bullets: [
      "Built PyTorch models for digital monitoring and anomaly detection across 82 hydropower plants.",
      "Applied language models and computer vision to enhance decision support in hydropower operations.",
    ],
  },
  {
    company: "ReLU NTNU",
    link: "https://reluntnu.no/",
    role: "Project Lead → Data Scientist",
    period: "Jan 2024–Aug 2025",
    location: "Trondheim, Norway",
    bullets: [
      "Led market forecasting for the sonar industry by analyzing ~5,000 scraped news articles with LLM-based sentiment.",
      "Built anomaly detection model on energy time series from ~200 buildings with five years of hourly readings.",
    ],
  },
  {
    company: "His Majesty the King's Guard",
    role: "Second-in-Command",
    period: "Oct 2022–Sep 2023",
    location: "Oslo, Norway",
    bullets: [
      "Responsible for overseeing up to 30 soldiers during active duty and military training.",
    ],
  },
];

const education = [
  {
    school: "NTNU — Norwegian University of Science and Technology",
    degree: "M.Sc. Industrial Economics and Technology Management",
    period: "2023–2028",
    note: "Computer Science (AI/ML) + Economics/Finance. GPA: 4.4/5.0",
  },
  {
    school: "University of California, Berkeley",
    degree: "Visiting Student",
    period: "2025–2026",
    note: "GPA: 3.97/4.0",
    courses: [
      {
        semester: "Fall 2025",
        list: [
          "COMPSCI 188 — Introduction to Artificial Intelligence",
          "DATA C100 — Principles & Techniques of Data Science",
          "INDENG 221 — Introduction to Financial Engineering",
          "UGBA 101A — Microeconomic Analysis for Business Decisions",
          "BUSADM 460.1 — Marketing Management",
          "INDENG 198 — Introduction to Quantitative Finance",
          "SOCIOL 198 — Directed Group Study for Undergraduates",
        ],
      },
      {
        semester: "Spring 2026",
        list: [
          "COMPSCI 189 — Introduction to Machine Learning",
          "COMPSCI 288 — Advanced Natural Language Processing",
          "COMPSCI 294 — Designing Algorithmic Media (A+) — course project published as arXiv:2606.04550",
          "ECON 141 — Econometrics (Quantitative) (A+, best final exam score)",
          "ENGIN 183E — Technology Entrepreneurship",
        ],
      },
    ],
  },
];

const selectedWork = [
  {
    title: "Carbon-Aware Re-ranking for E-commerce Recommendations",
    desc: "Course project for COMPSCI 294 (Designing Algorithmic Media) at UC Berkeley, which became a co-authored arXiv preprint. Explores trading user engagement for sustainability in e-commerce recommendation systems.",
    link: "https://arxiv.org/abs/2606.04550",
    tag: "CS 294 — Designing Algorithmic Media",
  },
  {
    title: "ATLAS Trigger VAE — CERN Openlab",
    desc: "FPGA implementation of a variational autoencoder for real-time particle physics event selection using hls4ml.",
    link: null,
    tag: "Hardware ML",
  },
  {
    title: "Hydropower Anomaly Detection — Å Energy",
    desc: "PyTorch models for digital monitoring of 82 hydropower plants using time series and computer vision.",
    link: null,
    tag: "Time Series",
  },
  {
    title: "CogniView — Railtracks Multimodal Hackathon",
    desc: "1st place (best use of Railtracks). Multimodal AI application built at the Railtracks Hackathon with Noah.",
    link: "https://github.com/jorgbergh/cogniview",
    tag: "Hackathon",
  },
];

const hackathons = [
  { place: "1st", event: "DigitalOcean Hackathon" },
  { place: "1st", event: "Railtracks Multimodal Hackathon" },
  { place: "Best model", event: "Rystad Energy Case Competition" },
  { place: "2nd", event: "Tzafon Hackathon" },
  { place: "5th (U23 team)", event: "Norwegian AI Championship" },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* ── HERO ── */}
      <section className="pt-20 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-12 md:gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-5">
              <h1 className="text-[2.6rem] md:text-[3.4rem] leading-[1.05] font-semibold tracking-tight">
                Jorgen Bergh
              </h1>
              <p className="text-[1.15rem] leading-relaxed text-[#555450] max-w-md">
                ML engineer and student at NTNU and UC Berkeley, building systems
                where machine learning meets real-world constraints.
              </p>
            </div>
            <div className="space-y-2 text-sm text-[#888780] font-[family-name:var(--font-geist-mono)]">
              <p>Trondheim / Oslo / Berkeley</p>
              <p>
                <a href="mailto:jrg.bergh@gmail.com" className="hover:text-[#111110] transition-colors">
                  jrg.bergh@gmail.com
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://github.com/jorgbergh" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium bg-[#111110] text-[#fafaf8] px-5 py-2.5 hover:bg-[#333230] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/jørgen-bergh" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium border border-[#e0ddd6] bg-white text-[#111110] px-5 py-2.5 hover:bg-[#f2f0eb] hover:border-[#c8c6bf] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://arxiv.org/abs/2606.04550" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm border border-[#e0ddd6] px-5 py-2.5 text-[#555450] hover:text-[#111110] hover:border-[#c8c6bf] transition-colors">
                arXiv paper →
              </a>
            </div>
          </div>

          <div className="w-full relative aspect-[3/4] overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Jorgen Bergh"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 380px"
              priority
            />
          </div>
        </div>
      </section>

      <Divider />

      {/* ── ABOUT ── */}
      <section>
        <SectionLabel n="01" label="About" />
        <div className="space-y-5 text-[#444340] leading-relaxed max-w-xl">
          <p>
            I study Industrial Economics and Technology Management at NTNU, specialising in
            Computer Science with a focus on AI and ML. In 2025–26 I spent a year as a
            visiting student at UC Berkeley, where I took courses in machine learning,
            economics and financial engineering.
          </p>
          <p>
            My work spans industries with high stakes and hard constraints — particle physics
            trigger systems at CERN, real-time monitoring across Norway&apos;s hydropower grid,
            and sustainable AI for e-commerce. As part of COMPSCI 294 at Berkeley, I co-authored a{" "}
            <a href="https://arxiv.org/abs/2606.04550" target="_blank" rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[#111110] transition-colors">
              preprint on carbon-aware recommendation re-ranking
            </a>{" "}
            that was published on arXiv.
          </p>
          <p>
            Outside of work I enjoy staying active through weight training, endurance
            training, and basketball. I competed in both athletics and basketball through
            upper secondary school.
          </p>
        </div>
      </section>

      <Divider />

      {/* ── EXPERIENCE ── */}
      <section>
        <SectionLabel n="02" label="Experience" />
        <div className="space-y-10">
          {experience.map((exp) => (
            <div key={exp.company + exp.period} className={"image" in exp && exp.image ? "grid grid-cols-1 md:grid-cols-[1fr_310px] gap-2 md:gap-8" : "grid grid-cols-1 md:grid-cols-[1fr_180px] gap-2 md:gap-8"}>
              <div className="space-y-2">
                <div>
                  {exp.link ? (
                    <a href={exp.link} target="_blank" rel="noopener noreferrer"
                      className="font-medium text-[#111110] hover:underline underline-offset-2 transition-colors inline-flex items-center gap-1">
                      {exp.company}
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="text-[#b8b6af]">
                        <path d="M2 10L10 2M10 2H4M10 2v6"/>
                      </svg>
                    </a>
                  ) : (
                    <p className="font-medium text-[#111110]">{exp.company}</p>
                  )}
                  <p className="text-sm text-[#666560]">{exp.role}</p>
                </div>
                {exp.bullets.length > 0 && (
                  <ul className="space-y-1 mt-3">
                    {exp.bullets.map((b, i) => {
                      const parts = b.split(/\[([^\]]+)\]\(([^)]+)\)/);
                      return (
                        <li key={i} className="text-sm text-[#555450] leading-relaxed flex gap-2">
                          <span className="text-[#c8c6bf] mt-[3px] shrink-0">—</span>
                          <span>{parts.map((p, j) =>
                            j % 3 === 1 ? (
                              <a key={j} href={parts[j + 1]} target="_blank" rel="noopener noreferrer"
                                className="underline underline-offset-2 hover:text-[#111110] transition-colors">{p}</a>
                            ) : j % 3 === 0 ? p : null
                          )}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
              <div className="hidden md:block space-y-3">
                <div className="text-right">
                  <p className="text-xs text-[#888780] font-[family-name:var(--font-geist-mono)]">{exp.period}</p>
                  <p className="text-xs text-[#aaa89e] font-[family-name:var(--font-geist-mono)]">{exp.location}</p>
                </div>
                {"image" in exp && exp.image && (
                  <figure className="space-y-1.5">
                    <Image src={exp.image.src} alt={exp.image.caption} width={310} height={230} className="w-full h-auto" />
                    <figcaption className="text-xs text-[#999890] font-[family-name:var(--font-geist-mono)]">{exp.image.caption}</figcaption>
                  </figure>
                )}
              </div>
              <div className="md:hidden text-xs text-[#aaa89e] font-[family-name:var(--font-geist-mono)] -mt-1">
                {exp.period} · {exp.location}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── EDUCATION ── */}
      <section>
        <SectionLabel n="03" label="Education" />
        <div className="space-y-10">
          {education.map((ed) => (
            <div key={ed.school} className="grid grid-cols-1 md:grid-cols-[1fr_120px] gap-2 md:gap-8">
              <div className="space-y-3">
                <div className="space-y-1">
                  <p className="font-medium text-[#111110]">{ed.school}</p>
                  <p className="text-sm text-[#666560]">{ed.degree}</p>
                  <p className="text-sm text-[#888780]">{ed.note}</p>
                </div>
                {"courses" in ed && ed.courses && (
                  <div className="space-y-8 pt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {ed.courses.map((sem) => (
                        <div key={sem.semester}>
                          <p className="text-xs font-medium text-[#888780] uppercase tracking-wider mb-2">{sem.semester}</p>
                          <ul className="space-y-1">
                            {sem.list.map((course) => (
                              <li key={course} className={`text-xs font-[family-name:var(--font-geist-mono)] leading-relaxed ${course.includes("(A+") ? "text-[#111110] font-semibold" : "text-[#666560]"}`}>
                                {course}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <figure className="space-y-3">
                      <Image
                        src="/183.JPEG"
                        alt="Jorgen and his group pitching Stratum at ENGIN 183E"
                        width={1200}
                        height={800}
                        className="w-full h-auto max-w-lg"
                      />
                      <figcaption className="text-xs text-[#999890] font-[family-name:var(--font-geist-mono)] leading-relaxed">
                        Me and my group after pitching <a href="https://stratum-esg.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-[#666560] underline underline-offset-2 hover:text-[#111110] transition-colors">Stratum</a> — our AI automation platform for ESG reporting — in front of VCs and industry guests as part of ENGIN 183E (Technology Entrepreneurship). Also pictured: our professor <span className="text-[#666560]">Naeem Zafar</span>.
                      </figcaption>
                    </figure>
                  </div>
                )}
              </div>
              <div className="text-right hidden md:block">
                <p className="text-xs text-[#888780] font-[family-name:var(--font-geist-mono)]">{ed.period}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── SELECTED WORK ── */}
      <section>
        <SectionLabel n="04" label="Selected Work" />
        <div className="space-y-0">
          {selectedWork.map((work, i) => (
            <div key={i}>
              <div className="py-7 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8 items-start group">
                <span className="font-[family-name:var(--font-geist-mono)] text-xs text-[#c8c6bf] mt-1 shrink-0">
                  {work.tag}
                </span>
                <div className="space-y-1">
                  {work.link ? (
                    <a href={work.link} target="_blank" rel="noopener noreferrer"
                      className="font-medium text-[#111110] hover:underline underline-offset-2 transition-colors block">
                      {work.title} →
                    </a>
                  ) : (
                    <p className="font-medium text-[#111110]">{work.title}</p>
                  )}
                  <p className="text-sm text-[#666560] leading-relaxed">{work.desc}</p>
                </div>
              </div>
              {i < selectedWork.length - 1 && (
                <hr className="border-t border-[#f0ede6]" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/projects" className="text-sm text-[#888780] hover:text-[#111110] transition-colors">
            All projects & research →
          </Link>
        </div>
      </section>

      <Divider />

      {/* ── HACKATHONS / COMPETITIONS ── */}
      <section>
        <SectionLabel n="05" label="Competitions" />
        <div className="grid grid-cols-1 md:grid-cols-[1fr_520px] gap-12 items-start">
          <ul className="space-y-4">
            {hackathons.map((h, i) => (
              <li key={i} className="flex items-baseline gap-6">
                <span className="font-[family-name:var(--font-geist-mono)] text-xs text-[#b8b6af] w-24 shrink-0">
                  {h.place}
                </span>
                <span className="text-sm text-[#444340]">{h.event}</span>
              </li>
            ))}
          </ul>

          <figure className="w-full space-y-2">
            <Image
              src="/hackathon3.JPG"
              alt="Railtracks Multimodal Hackathon"
              width={800}
              height={600}
              className="w-full h-auto"
            />
            <figcaption className="text-xs text-[#999890] font-[family-name:var(--font-geist-mono)]">
              From left: Noah (my teammate), me, and Logan (Railtracks representative) — after Noah and I won best use of Railtracks at the Railtracks Multimodal Hackathon.
            </figcaption>
          </figure>
        </div>
      </section>

      <Divider />

      {/* ── WRITING ── */}
      <section>
        <SectionLabel n="06" label="Writing" />
        <div className="flex items-start justify-between gap-8">
          <p className="text-sm text-[#666560] max-w-sm leading-relaxed">
            Occasional posts on machine learning, things I&apos;m learning, and whatever
            else I find worth writing about.
          </p>
          <Link href="/blog" className="text-sm text-[#888780] hover:text-[#111110] transition-colors shrink-0">
            Read the blog →
          </Link>
        </div>
      </section>

      <Divider />

      {/* ── INTERESTS ── */}
      <section>
        <SectionLabel n="07" label="Interests" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-5">
            <p className="text-sm text-[#444340] leading-relaxed">
              Training and health have been a core part of my life for as long as I can remember.
              I stay active through weight training, endurance work, and basketball — and I track
              my progress with regular benchmark tests.
            </p>
            <p className="text-sm text-[#444340] leading-relaxed">
              Outside of training I&apos;m into poker, philosophy, dog training, and small game hunting.
              I&apos;ve also been part of Poker@Berkeley (Berkeley&apos;s poker club), NTNUI Basketball, and NTNUI Volleyball.
            </p>
            <div className="pt-2">
              <Link href="/training"
                className="inline-flex items-center gap-1.5 text-sm border border-[#e0ddd6] px-4 py-2 text-[#555450] hover:text-[#111110] hover:border-[#c8c6bf] transition-colors">
                Training & results →
              </Link>
            </div>
          </div>

          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <Image
              src="/basketball.jpeg"
              alt="Jorgen playing basketball"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <Divider />

      {/* ── SKILLS ── */}
      <section>
        <SectionLabel n="08" label="Skills" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="space-y-4">
            <p className="text-xs font-medium text-[#888780] uppercase tracking-wider">Technical</p>
            <p className="text-sm text-[#444340] leading-relaxed">
              Python, PyTorch, TensorFlow, SkLearn, Pandas, C++, Java, SQL, KQL, Azure, HLS, Linux
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-xs font-medium text-[#888780] uppercase tracking-wider">Languages</p>
            <p className="text-sm text-[#444340] leading-relaxed">
              Norwegian (native) · English (fluent) · Spanish (conversational)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
