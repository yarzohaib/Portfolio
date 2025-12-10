import ProjectCard from "./project-card"
import { Globe, Zap, ListTodo, Smartphone, Brain, Gamepad2, Cable as Cube } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Starbucks Clone",
    description:
      "Website built using Next.js v15, Strapi v5, and Tailwind CSS v4 with 95+ performance on PageSpeed Insights. Efficiently implemented modern data fetching techniques.",
    tag: "95+ Performance",
    icon: Globe,
    tech: ["Next.js", "Strapi", "Tailwind CSS"],
    link: "https://clone-starbucks-2xex.vercel.app/",
  },
  {
    id: 2,
    title: "Formulated - F1 App",
    description:
      "Mobile application featuring F1 schedule management and community engagement. Implemented API integration, authentication, and real-time data handling.",
    tag: "Mobile App Development",
    icon: Zap,
    tech: ["Flutter", "Firebase", "Dart"],
  },
  {
    id: 3,
    title: "Geography Quiz",
    description:
      "Interactive web-based quiz platform using Next.js v15 where users guess countries based on neighboring nations. Features engaging UI and smooth interactions.",
    tag: "Web Development",
    icon: ListTodo,
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://clone-starbucks-2xex.vercel.app/",
  },
  {
    id: 4,
    title: "Fitlog - Fitness App",
    description:
      "Comprehensive Flutter mobile application for tracking workouts, diet, and fitness progress. Features intuitive UI and robust data management.",
    tag: "Mobile App Development",
    icon: Smartphone,
    tech: ["Flutter", "Firebase", "Dart"],
  },
  {
    id: 5,
    title: "RAG System",
    description:
      "Built and fine-tuned Hugging Face open-source LLMs and integrated them with a robust, indexed knowledge base to create an intelligent RAG system. This system is capable of personalized recommendations and dynamic FAQ handling by grounding the LLM's responses with relevant retrieved documents.",
    tag: "AI Integration",
    icon: Brain,
    tech: ["Hugging Face", "LLM", "Vector DB"],
  },
  {
    id: 6,
    title: "Flappy Bird Web Game",
    description:
      "Developed a Flappy Bird clone in Unity using C#, implementing core mechanics like randomized pipe generation, precise collision detection, scoring, and intuitive touch controls.",
    tag: "Game Development",
    icon: Gamepad2,
    tech: ["Unity", "C#", "Game Dev"],
  },
  {
    id: 7,
    title: "Planets AR App",
    description:
      "Developed an interactive Planets Augmented Reality (AR) mobile application using Unity 6 and the ARCore XR Plugin. Implemented plane detection and raycasting to anchor dynamically scaled 3D models of the solar system onto real-world surfaces.",
    tag: "Augmented Reality",
    icon: Cube,
    tech: ["Unity 6", "ARCore", "C#"],
  },
  {
    id: 8,
    title: "CNN Clone",
    description:
      "Responsive web interface replicating CNN's layout and design using HTML, CSS, and JavaScript. Focused on UI consistency and accessibility.",
    tag: "Web Development",
    icon: Globe,
    tech: ["HTML", "CSS", "JavaScript"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A selection of my recent work showcasing expertise in{" "}
          <span className="text-orange-500 font-semibold">web, mobile, game, and AR development</span>
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
