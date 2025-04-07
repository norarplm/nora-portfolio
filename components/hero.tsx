"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ArrowDown, Linkedin, Mail, Github } from "lucide-react"
import useSound from "use-sound"

export default function Hero() {
  const [playClick] = useSound("/sounds/click.mp3", { volume: 0.5 })

  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    playClick()

    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="section-container">
        <div className="flex flex-col items-center md:items-start">
          {/* Mobile-first layout - Image appears first on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="relative mb-8 md:hidden"
          >
            <div className="w-64 h-64 mx-auto bg-accent/10 rounded-full overflow-hidden shadow-lg">
              <img src="/images/nora.jpg" alt="Nora Wang" className="w-full h-full object-cover" />
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent-light rounded-full flex items-center justify-center overflow-hidden shadow-md"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <img src="/images/cat.jpg" alt="Nora's cat" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-dark-brown mb-4">
                Hi, I'm{" "}
                <span className="text-accent">
                  Nora <br className="hidden md:block" />
                  Wang
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-medium-brown mb-6">Software Developer</h2>
              <p className="text-light-brown mb-8 max-w-md mx-auto md:mx-0">
                I create elegant solutions to complex problems with a focus on user experience and clean code.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    playClick()
                    const contactSection = document.getElementById("contact")
                    if (contactSection) {
                      window.scrollTo({
                        top: contactSection.offsetTop,
                        behavior: "smooth",
                      })
                    }
                  }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#ffffff",
                    color: "#e6a4b4",
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-accent text-white rounded-full transition-all duration-200 shadow-md"
                >
                  Get in Touch
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault()
                    playClick()
                    window.open("/resume.pdf", "_blank")
                  }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#e6a4b4",
                    color: "#ffffff",
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border border-accent text-accent rounded-full transition-all duration-200 shadow-md"
                >
                  View Resume
                </motion.a>
              </div>
              
              {/* Social links for mobile */}
              <div className="flex justify-center md:hidden space-x-6 mb-8">
                <a
                  href="https://linkedin.com/in/nora-wang-31aa201b4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-medium-brown hover:text-accent transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:norawrp@gmail.com"
                  className="text-medium-brown hover:text-accent transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-medium-brown hover:text-accent transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
              </div>
            </motion.div>

            {/* Desktop image - hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative hidden md:block"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-accent/10 rounded-full overflow-hidden shadow-lg">
                <img src="/images/nora.jpg" alt="Nora Wang" className="w-full h-full object-cover" />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent-light rounded-full flex items-center justify-center overflow-hidden shadow-md"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <img src="/images/cat.jpg" alt="Nora's cat" className="w-full h-full object-cover" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.a
        href="#about"
        onClick={handleScrollDown}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-medium-brown hover:text-accent transition-colors duration-300"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  )
}
