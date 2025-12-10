import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <p className="text-gray-600 text-sm md:text-base mb-2">Hi I am</p>

            <h1 className="text-4xl md:text-5xl font-bold mb-2">Muhammad Zohaib</h1>

            <h2 className="text-3xl md:text-3xl font-medium font-serif text-orange-500 mb-6">Software Engineer</h2>

            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed max-w-lg">
              Passionate about building modern, user-friendly web and mobile applications with Next.js, Flutter and Unity.
              Currently studying at COMSATS University Lahore.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              <a
                href="https://github.com/yarzohaib"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/zohaib-yar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:zohaib242004@gmail.com"
                className="text-gray-600 hover:text-primary transition"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:opacity-90 transition font-semibold flex items-center gap-2"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-gray-300 text-orange-500 px-8 py-3 rounded-lg hover:border-primary hover:text-primary transition font-semibold"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full" />
              <Image
                src="/profile-hero.jpg"
                alt="Muhammad Zohaib"
                fill
                className="object-cover rounded-full shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
