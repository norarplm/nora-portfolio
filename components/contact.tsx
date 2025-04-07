"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, Send } from "lucide-react"
import { useInView } from "react-intersection-observer"
import useSound from "use-sound"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [playClick] = useSound("/sounds/click.mp3", { volume: 0.5 })

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    playClick()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" className="section-container relative">
      {/* Removed full-section background image */}

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h2 className="section-title">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column: Contact Info */}
          <motion.div variants={formVariants} transition={{ delay: 0.2 }}>
            <h3 className="text-2xl font-bold text-dark-brown mb-6">Get In Touch</h3>
            <p className="text-medium-brown mb-8">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>

            <div className="space-y-6">
              <motion.div className="flex items-center gap-4" whileHover={{ x: 5 }}>
                <motion.div
                  className="bg-accent p-3 rounded-full text-white"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone size={20} />
                </motion.div>
                <div>
                  <h4 className="text-dark-brown font-medium">Phone</h4>
                  <p className="text-medium-brown">(+1) 437-881-2273</p>
                </div>
              </motion.div>

              <motion.div className="flex items-center gap-4" whileHover={{ x: 5 }}>
                <motion.div
                  className="bg-accent p-3 rounded-full text-white"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail size={20} />
                </motion.div>
                <div>
                  <h4 className="text-dark-brown font-medium">Email</h4>
                  <p className="text-medium-brown">norawrp@gmail.com</p>
                </div>
              </motion.div>

              <motion.div className="flex items-center gap-4" whileHover={{ x: 5 }}>
                <motion.div
                  className="bg-accent p-3 rounded-full text-white"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Linkedin size={20} />
                </motion.div>
                <div>
                  <h4 className="text-dark-brown font-medium">LinkedIn</h4>
                  <a
                    href="https://linkedin.com/in/nora-wang-31aa201b4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    nora-wang-31aa201b4
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form with Background Image */}
          <motion.div variants={formVariants} transition={{ delay: 0.4 }}>
  <div className="relative p-8 rounded-lg shadow-md hover:shadow-lg overflow-hidden bg-light-cream">
    {/* Background overlay with low opacity */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
      style={{ backgroundImage: "url('/images/toronto.jpg')" }}
    />
    <div className="relative z-10">
      {submitted ? (
        <div className="text-center py-8">
          <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-4">
            Thank you for your message! I'll get back to you soon.
          </div>
          <button onClick={() => setSubmitted(false)} className="text-accent hover:underline">
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-medium-brown mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-white/50 px-4 py-2 border border-dark-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-medium-brown mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-white/50 px-4 py-2 border border-dark-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-medium-brown mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-white/50 px-4 py-2 border border-dark-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{
              scale: 1.02,
              backgroundColor: "#ffffff",
              color: "#e6a4b4",
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-accent text-white py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md"
          >
            {isSubmitting ? "Sending..." : <>
              Send Message <Send size={16} />
            </>}
          </motion.button>
        </form>
      )}
    </div>
  </div>
</motion.div>

        </div>
      </motion.div>
    </section>
  )
}
