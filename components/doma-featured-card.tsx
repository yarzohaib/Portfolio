const features = [
  { emoji: "🤖", label: "AI Interior Designer", detail: "Upload a room, get a redesign with real products" },
  { emoji: "🪑", label: "AR Furniture Placement", detail: "Place and compare furniture in your real space" },
  { emoji: "💬", label: "RAG Assistant", detail: "AI-powered product recommendations via vector search" },
  { emoji: "🏪", label: "Multi-Vendor Marketplace", detail: "Vendors, customers, and seamless checkout" },
]

const tech = ["Next.js", "Flutter", "AI", "AR", "MongoDB", "Qdrant", "Unity"]

export default function DomaFeaturedCard() {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-orange-950 text-white shadow-2xl mb-6">
      {/* Subtle decorative glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-orange-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-orange-600/10 blur-2xl pointer-events-none" />

      <div className="relative p-8 md:p-10">
        {/* Top badges row */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <span className="inline-flex items-center gap-1.5 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
            ★ Featured Project
          </span>
          <span className="inline-flex items-center bg-white/10 border border-white/20 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
            Final Year Project
          </span>
        </div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-5 gap-8">
          {/* Left — title, description, features */}
          <div className="md:col-span-3">
            <h3 className="text-2xl md:text-3xl font-bold mb-1">DOMA – Design &amp; Buy</h3>
            <p className="text-orange-400 font-semibold text-base mb-4">
              AI &amp; AR Powered Multi-Vendor E-Commerce Platform
            </p>
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              A full-stack platform that lets users redesign their room with AI, visualize furniture in AR before
              buying, and shop from multiple vendors. Built with Next.js, Flutter, MongoDB, Payload CMS, Anthropic
              LLMs, Replicate, Qdrant vector database, Unity and ARCore.
            </p>

            {/* Feature highlights */}
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                >
                  <span className="text-xl leading-none mt-0.5">{f.emoji}</span>
                  <div>
                    <p className="text-white font-semibold text-sm">{f.label}</p>
                    <p className="text-white/55 text-xs leading-snug mt-0.5">{f.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — tech stack */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="bg-white/10 border border-white/15 text-white/85 text-xs font-medium px-3 py-1.5 rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
