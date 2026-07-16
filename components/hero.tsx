"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/Zohaib_ASE.pdf"
    link.download = "Zohaib_ASE.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <p className="text-muted-foreground text-sm md:text-base mb-2">Hi, I am</p>

            <h1 className="text-4xl md:text-5xl font-bold mb-2">Muhammad Zohaib Yar Khan</h1>

            <h2 className="text-2xl md:text-3xl font-medium text-orange-500 mb-4">
              I build AI-powered, full-stack web and mobile applications.
            </h2>

            <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed max-w-lg">
              Fresh SE graduate from COMSATS University Lahore passionate about Next.js, Flutter, and integrating
              cutting-edge AI into real products. I turn ideas into shipped software.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              <a
                href="https://github.com/yarzohaib"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://linkedin.com/in/zohaib-yar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:zohaib242004@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="bg-orange-500 text-white px-7 py-3 rounded-lg hover:bg-orange-400 transition-colors font-semibold"
              >
                View My Work
              </a>
              <button
                onClick={handleDownloadCV}
                className="border border-border text-orange-500 px-7 py-3 rounded-lg hover:border-orange-500 transition-colors font-semibold cursor-pointer"
              >
                Download Resume
              </button>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-72 h-72 md:w-88 md:h-88">
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-orange-500/20 to-orange-900/10 blur-2xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border border-border/40 shadow-2xl">
                <Image
                  src="/profile-hero.jpg"
                  alt="Muhammad Zohaib"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
