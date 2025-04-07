"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Briefcase, Code, Cpu, Mail, X } from 'lucide-react'
import useSound from "use-sound"

const navItems = [
  { name: "Home", href: "#home", icon: <Home size={20} /> },
  { name: "About", href: "#about", icon: <User size={20} /> },
  { name: "Experience", href: "#experience", icon: <Briefcase size={20} /> },
  { name: "Projects", href: "#projects", icon: <Code size={20} /> },
  { name: "Skills", href: "#skills", icon: <Cpu size={20} /> },
  { name: "Contact", href: "#contact", icon: <Mail size={20} /> },
]

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
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
    setIsOpen(false)

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
    <>
      {/* Mobile Nav Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-accent text-white p-3 rounded-full shadow-lg md:hidden"
        onClick={() => {
          playClick()
          setIsOpen(!isOpen)
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle navigation"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <CatPaw className="w-6 h-6" />
        )}
      </motion.button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-6 z-50 bg-white rounded-lg shadow-xl p-4 md:hidden"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`flex items-center space-x-3 p-2 rounded-md ${
                    activeSection === item.href.substring(1) 
                      ? "bg-accent text-white" 
                      : "text-medium-brown hover:bg-accent/10"
                  }`}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function CatPaw({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
      fill="currentColor"
    >
      <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z" />
    </svg>
  )
}