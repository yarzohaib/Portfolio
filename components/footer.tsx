import { Linkedin, Mail, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-orange-500">Muhammad Zohaib</h3>
            <p className="text-muted-foreground">Software Engineering Student</p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-orange-500">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#home" className="hover:text-primary transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-orange-500">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/zohaib-yar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Linkedin size={20} />
              </a>
              <a href="mailto:zohaib242004@gmail.com" className="text-muted-foreground hover:text-primary transition">
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/yarzohaib"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Muhammad Zohaib Yar Khan. All rights reserved.</p>
        </div> */}
      </div>
    </footer>
  )
}
