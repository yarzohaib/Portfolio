const skillCategories = [
  {
    label: "Mobile",
    items: ["Flutter", "Dart", "Firebase", "ARCore", "Unity"],
  },
  {
    label: "Web",
    items: ["Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    label: "Backend & APIs",
    items: ["REST APIs", "Payload CMS", "Strapi", "Node.js"],
  },
  {
    label: "Databases",
    items: ["MongoDB", "SQL", "Firebase", "Qdrant"],
  },
  {
    label: "AI & ML",
    items: ["HuggingFace", "Anthropic API", "Replicate", "RAG Systems", "Prompt Engineering"],
  },
  {
    label: "Tools",
    items: ["Git", "Jira", "Figma", "Cursor IDE", "GitHub Copilot", "Claude Code"],
  },
]

const stats = [
  { value: "3.39", label: "CGPA" },
  { value: "5+", label: "Projects Shipped" },
  { value: "3", label: "Domains (Web, Mobile, AI)" },
]

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-card rounded-lg">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left — bio + stats */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">About Me</h2>
          <div className="h-1 w-14 rounded-full bg-linear-to-r from-orange-500 to-amber-400 mb-6" />

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I am a Software Engineering graduate from COMSATS University Islamabad, Lahore Campus with a CGPA of
              3.39. I build full-stack web and mobile applications with a strong focus on AI integrations and
              real-world impact.
            </p>
            <p>
              My Final Year Project, <span className="text-foreground font-semibold">DOMA</span>, pushed me to work
              across Flutter, Next.js, MongoDB, Anthropic LLMs, Replicate, Qdrant vector search, Unity and ARCore —
              all in a single platform. I do not just learn technologies, I ship them.
            </p>
            <p>
              I use <span className="text-orange-500 font-medium">Cursor IDE</span>,{" "}
              <span className="text-orange-500 font-medium">GitHub Copilot</span>, and{" "}
              <span className="text-orange-500 font-medium">Claude Code</span> daily. I believe the best developers
              are the ones who combine strong fundamentals with the ability to adapt and build fast.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="border border-border rounded-xl p-4 text-center bg-background">
                <p className="text-2xl font-bold text-orange-500">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — skills */}
        <div id="skills">
          <h3 className="text-xl font-bold mb-3">Skills &amp; Technologies</h3>
          <div className="h-1 w-14 rounded-full bg-linear-to-r from-orange-500 to-amber-400 mb-6" />
          <div className="flex flex-col gap-5">
            {skillCategories.map((category) => (
              <div key={category.label}>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  {category.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm font-medium px-3 py-1 rounded-full border border-border bg-background hover:border-orange-500 hover:text-orange-500 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
