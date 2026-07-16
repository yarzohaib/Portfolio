import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import DomaShowcase from "@/components/doma-showcase"
import Footer from "@/components/footer"
import SectionFadeIn from "@/components/section-fade-in"
import BackToTop from "@/components/back-to-top"

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Hero />
      <SectionFadeIn>
        <About />
      </SectionFadeIn>
      <Projects />
      <SectionFadeIn>
        <DomaShowcase />
      </SectionFadeIn>
      <SectionFadeIn>
        <Footer />
      </SectionFadeIn>
      <BackToTop />
    </main>
  )
}
