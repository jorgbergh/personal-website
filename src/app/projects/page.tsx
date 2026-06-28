import Link from "next/link";

export const metadata = {
  title: "Projects & Research — Jorgen Bergh",
};

const projects = [
  {
    title: "Carbon-Aware Re-ranking for E-commerce Recommendations",
    tags: ["Research", "RecSys", "Sustainability"],
    period: "2026",
    desc: "Course project for COMPSCI 294 (Designing Algorithmic Media) at UC Berkeley that became a co-authored arXiv preprint. Explores trade-offs between user engagement and carbon emissions in e-commerce recommendation systems.",
    link: "https://arxiv.org/abs/2606.04550",
    linkLabel: "arXiv:2606.04550",
  },
  {
    title: "Convex Reformulations for Interpretable Acoustic-to-Articulatory Inversion",
    tags: ["Research", "NLP", "CS 288"],
    period: "2026",
    desc: "Paper written as part of COMPSCI 288 (Advanced Natural Language Processing) at UC Berkeley. Explores convex reformulations to improve interpretability in acoustic-to-articulatory inversion models.",
    link: "https://github.com/jorgbergh/convex-aai",
    linkLabel: "GitHub",
    pdf: "/convex-aai.pdf",
  },
  {
    title: "ATLAS Trigger VAE — CERN Openlab",
    tags: ["Research", "Hardware ML", "Physics"],
    period: "2026",
    desc: "FPGA implementation of a variational autoencoder encoder for the ATLAS detector trigger at CERN, using hls4ml and quantization-aware training (HGQ2). Tuned fixed-point precision and bit-level operations to meet strict latency and on-chip resource budgets.",
    link: null,
    linkLabel: null,
  },
  {
    title: "Hydropower Anomaly Detection — Å Energy",
    tags: ["Time Series", "PyTorch", "CV"],
    period: "2025",
    desc: "ML models in PyTorch for digital monitoring and anomaly detection across 82 hydropower plants. Combined time series modelling with computer vision and language models for decision support.",
    link: null,
    linkLabel: null,
  },
  {
    title: "Sonar Industry Market Forecasting — ReLU NTNU",
    tags: ["NLP", "LLM", "Finance"],
    period: "2024–2025",
    desc: "Scraped and analysed ~5,000 news articles using LLM-based sentiment analysis to identify key market drivers and predict next-year trends in the sonar industry.",
    link: null,
    linkLabel: null,
  },
  {
    title: "CogniView — Railtracks Multimodal Hackathon",
    tags: ["Hackathon", "Multimodal", "AI"],
    period: "2024",
    desc: "1st place (best use of Railtracks). Multimodal AI application built together with Noah at the Railtracks Multimodal Hackathon.",
    link: "https://github.com/jorgbergh/cogniview",
    linkLabel: "GitHub",
  },
  {
    title: "Energy Consumption Anomaly Detection — ReLU NTNU",
    tags: ["Time Series", "Anomaly Detection"],
    period: "2024",
    desc: "Anomaly detection on energy consumption time series from ~200 buildings, using five years of hourly readings.",
    link: null,
    linkLabel: null,
  },
  {
    title: "Stratum — AI Automation for ESG Reporting",
    tags: ["Startup", "AI", "ESG"],
    period: "2026",
    desc: "Built as a course project for ENGIN 183E (Technology Entrepreneurship) at UC Berkeley. Stratum automates ESG reporting using AI — we pitched it to VCs and industry guests with professor Naeem Zafar.",
    link: "https://stratum-esg.netlify.app/",
    linkLabel: "stratum-esg.netlify.app",
  },
  {
    title: "VibeFuzz — AI-Automated Fuzz Tester",
    tags: ["Hackathon", "Cybersecurity", "AI Agents"],
    period: "2025",
    desc: "Built at Hacktober SF (DigitalOcean). An AI-powered fuzz testing system with multiple autonomous agents — a scanning agent, a fuzzing agent, and a testing agent — that automatically discover and probe vulnerabilities in web APIs.",
    link: "https://github.com/jorgbergh/hacktober_sf",
    linkLabel: "GitHub",
  },
  {
    title: "Blueprint — JetBrains & OpenAI Hackathon",
    tags: ["Hackathon", "AI", "OpenAI"],
    period: "2026",
    desc: "Built with my team at the JetBrains & OpenAI (Codex) Hackathon at Berkeley.",
    link: "https://github.com/jorgbergh/blueprint",
    linkLabel: "GitHub",
  },
  {
    title: "Personal Website",
    tags: ["Next.js", "Tailwind"],
    period: "2025",
    desc: "This site — built with Next.js, Tailwind CSS, and MDX.",
    link: "https://github.com/jorgbergh",
    linkLabel: "GitHub",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16">
      <div className="mb-16 flex items-end justify-between">
        <div className="space-y-2">
          <p className="font-[family-name:var(--font-geist-mono)] text-xs text-[#b8b6af]">(04)</p>
          <h1 className="text-2xl font-semibold tracking-tight">Projects & Research</h1>
          <p className="text-sm text-[#888780]">Selected work and research.</p>
        </div>
        <Link href="/" className="text-sm text-[#888780] hover:text-[#111110] transition-colors">
          ← Back
        </Link>
      </div>

      <div className="space-y-0">
        {projects.map((p, i) => (
          <div key={i}>
            <div className="py-8 grid grid-cols-1 md:grid-cols-[1fr_120px] gap-4 items-start">
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag}
                      className={`text-[11px] font-[family-name:var(--font-geist-mono)] px-2 py-0.5 ${
                        tag === "Research"
                          ? "bg-[#111110] text-[#fafaf8]"
                          : "text-[#999890] border border-[#e8e6e0]"
                      }`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="font-medium text-[#111110]">{p.title}</p>
                <p className="text-sm text-[#666560] leading-relaxed max-w-xl">{p.desc}</p>
                <div className="flex gap-4">
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer"
                      className="inline-block text-xs text-[#888780] hover:text-[#111110] transition-colors underline underline-offset-2">
                      {p.linkLabel} →
                    </a>
                  )}
                  {"pdf" in p && p.pdf && (
                    <a href={p.pdf} target="_blank" rel="noopener noreferrer"
                      className="inline-block text-xs text-[#888780] hover:text-[#111110] transition-colors underline underline-offset-2">
                      PDF →
                    </a>
                  )}
                </div>
              </div>
              <div className="hidden md:block text-right">
                <p className="text-xs text-[#b8b6af] font-[family-name:var(--font-geist-mono)]">{p.period}</p>
              </div>
            </div>
            {i < projects.length - 1 && <hr className="border-t border-[#f0ede6]" />}
          </div>
        ))}
      </div>
    </div>
  );
}
