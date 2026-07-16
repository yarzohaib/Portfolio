"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Wand2, Box, MessageSquare, Store, ExternalLink } from "lucide-react"

const features = [
  {
    icon: Wand2,
    title: "AI Interior Designer",
    description:
      "Upload a photo of your room and receive a fully redesigned version with real, purchasable products from the DOMA inventory — powered by vision-capable LLMs and image generation.",
    tech: ["Anthropic", "Replicate", "Next.js"],
    accent: "from-violet-500/20 to-purple-600/10",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/15",
  },
  {
    icon: Box,
    title: "AR Furniture Placement",
    description:
      "Point your phone at any surface and place true-to-scale 3D furniture models in your real space. Move, rotate, and compare pieces before you buy.",
    tech: ["Unity", "ARCore", "Flutter"],
    accent: "from-orange-500/20 to-amber-600/10",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/15",
  },
  {
    icon: MessageSquare,
    title: "RAG Product Assistant",
    description:
      "An intelligent chatbot that retrieves semantically relevant products from a Qdrant vector index and grounds its answers in your actual inventory — no hallucinations, just real recommendations.",
    tech: ["Qdrant", "HuggingFace", "LLM"],
    accent: "from-emerald-500/20 to-teal-600/10",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/15",
  },
  {
    icon: Store,
    title: "Multi-Vendor Marketplace",
    description:
      "A complete e-commerce ecosystem — vendors list products, customers browse and buy, and payments are handled end-to-end with SafePay integration and real-time order tracking.",
    tech: ["MongoDB", "Payload CMS", "SafePay"],
    accent: "from-sky-500/20 to-blue-600/10",
    iconColor: "text-sky-400",
    iconBg: "bg-sky-500/15",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function DomaShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="bg-gray-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={ref}
          className="text-center mb-14"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          <span className="inline-block bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Final Year Project
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            DOMA &mdash; My Most Ambitious Project
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto">
            An end-to-end AI and AR powered ecommerce ecosystem
          </p>
          <a
            href="https://www.thedoma.shop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors"
          >
            Visit thedoma.shop <ExternalLink size={14} />
          </a>
        </motion.div>

        {/* Scrollable cards */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <motion.div
            className="flex gap-5 min-w-max lg:min-w-0 lg:grid lg:grid-cols-4"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  variants={cardVariants}
                  className={`relative w-72 lg:w-auto flex-shrink-0 lg:flex-shrink rounded-2xl border border-white/10 bg-gradient-to-br ${feature.accent} backdrop-blur-sm p-6 flex flex-col`}
                >
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${feature.iconBg} mb-5`}>
                    <Icon className={`${feature.iconColor}`} size={22} />
                  </div>

                  {/* Title + description */}
                  <h3 className="text-white font-bold text-base mb-2">{feature.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed flex-grow">{feature.description}</p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {feature.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/8 border border-white/12 text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
