"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">Portfolio</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <a href="#home" className="hover:text-orange-500 transition font-medium">
            Home
          </a>
          <a href="#about" className="hover:text-orange-500 transition font-medium">
            About
          </a>
          <a href="#projects" className="hover:text-orange-500 transition font-medium">
            Projects
          </a>
          <a href="#contact" className="hover:text-orange-500 transition font-medium">
            Contact
          </a>
        </div>

        <div className="hidden md:block">
          <Image
            src="/profile.jpg"
            alt="Muhammad Zohaib"
            width={40}
            height={40}
            className="rounded-full border-2 border-orange-500"
          />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <a href="#home" className="hover:text-orange-500 transition font-medium">
                Home
              </a>
              <a href="#about" className="hover:text-orange-500 transition font-medium">
                About
              </a>
              <a href="#projects" className="hover:text-orange-500 transition font-medium">
                Projects
              </a>
              <a href="#contact" className="hover:text-orange-500 transition font-medium">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
