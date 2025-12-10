export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-card rounded-lg">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-muted-foreground mb-4">
            I'm a Software Engineering student at COMSATS University Islamabad with a strong foundation in full-stack
            development. I have hands-on experience building production-ready applications with modern technologies.
          </p>
          <p className="text-muted-foreground mb-6">
            My journey includes developing mobile apps published on the Play Store, creating high-performance websites
            with 95+ performance scores, and collaborating with teams on real-world projects.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-orange-500">Skills & Technologies</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Flutter",
              "Tailwind CSS",
              "SQL",
              "MongoDB",
              "Firebase",
              "Strapi",
              "Payload CMS",
              "Game Development",
              "Augmented Reality",
              "AI Integration",
              "Unity",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-background p-3 rounded-lg border border-border hover:border-orange-500 hover:bg-orange-50 transition"
              >
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
