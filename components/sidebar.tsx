"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Home, User, Briefcase, Code, Cpu, Mail } from 'lucide-react'
import useSound from "use-sound"

const navItems = [
  { name: "Home", href: "#home", icon: <Home size={20} /> },
  { name: "About", href: "#about", icon: <User size={20} /> },
  { name: "Experience", href: "#experience", icon: <Briefcase size={20} /> },
  { name: "Projects", href: "#projects", icon: <Code size={20} /> },
  { name: "Skills", href: "#skills", icon: <Cpu size={20} /> },
  { name: "Contact", href: "#contact", icon: <Mail size={20} /> },
]

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home")
  const [playClick] = useSound("/sounds/click.mp3", { volume: 0.5 })

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 200

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = section.clientHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    playClick()

    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-10 right-10 z-50 hidden md:block"
    >
      <div className="flex flex-col items-center space-y-8 p-4 rounded-full">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className={`relative group ${
              activeSection === item.href.substring(1) ? "text-accent" : "text-medium-brown"
            }`}
            aria-label={item.name}
          >
            <div className="p-2 rounded-full transition-all duration-200 group-hover:bg-accent/10">{item.icon}</div>
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-dark-cream text-dark-brown text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </motion.div>
  )
}