"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"

export default function FeaturedProject() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="section-container">
      <h2 className="section-title">Featured Project</h2>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="flex flex-col md:flex-row items-center gap-6 bg-light-cream rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl"
        onClick={() => setIsOpen(true)}
      >
        <img
          src="/images/coinscope.png"
          alt="CoinScope Thumbnail"
          className="w-full md:w-1/2 rounded-lg object-cover"
        />

        <div className="flex flex-col justify-between w-full md:w-1/2">
          <div>
            <h3 className="text-2xl font-bold text-accent mb-2">CoinScope</h3>
            <p className="text-light-brown mb-4">
              A futuristic AI-based cryptocurrency analytics platform that offers real-time market data, investment simulations, and sleek dark/light mode visuals in a cyberpunk UI.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-sm text-medium-brown">
            <span className="bg-light-gray px-2 py-1 rounded">Next.js</span>
            <span className="bg-light-gray px-2 py-1 rounded">Tailwind CSS</span>
            <span className="bg-light-gray px-2 py-1 rounded">Radix UI</span>
            <span className="bg-light-gray px-2 py-1 rounded">Framer Motion</span>
            <span className="bg-light-gray px-2 py-1 rounded">CoinGecko API</span>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="mt-4 bg-accent text-white px-4 py-2 rounded shadow hover:bg-accent-dark transition self-start"
          >
            View Details
          </button>
        </div>
      </motion.div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-xl max-w-4xl w-full p-6 relative overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>

            <div className="aspect-w-16 aspect-h-9 mb-4">
              <iframe
                className="w-full h-64 md:h-96 rounded-lg"
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7342944068403941377?compact=1"
                title="CoinScope Promo"
                height="399"
                width="504"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            <h3 className="text-2xl font-bold text-accent mb-2">CoinScope: AI-Powered Crypto Analytics</h3>
            <p className="text-light-brown mb-4">
              CoinScope is a cutting-edge platform designed to deliver real-time cryptocurrency insights, AI-powered investment simulations, and advanced comparison tools—all in a sleek, responsive, cyberpunk-inspired UI.
            </p>

            <ul className="list-disc list-inside text-medium-brown mb-4">
              <li>Real-time crypto market data</li>
              <li>AI-powered investment simulations</li>
              <li>Interactive comparison charts</li>
              <li>Favorites and price tracking</li>
              <li>Dark/light mode switching</li>
              <li>Responsive cyberpunk design</li>
            </ul>

            <div className="mb-6 flex flex-wrap gap-2 text-sm text-medium-brown">
              <span className="bg-light-gray px-2 py-1 rounded">Next.js</span>
              <span className="bg-light-gray px-2 py-1 rounded">Tailwind CSS</span>
              <span className="bg-light-gray px-2 py-1 rounded">Radix UI</span>
              <span className="bg-light-gray px-2 py-1 rounded">Framer Motion</span>
              <span className="bg-light-gray px-2 py-1 rounded">CoinGecko API</span>
              <span className="bg-light-gray px-2 py-1 rounded">Chart.js</span>
            </div>

            <a
              href="https://coinscope-crypto.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-white px-5 py-2 rounded-md shadow hover:bg-accent-dark transition"
            >
              View Live Demo
            </a>
          </motion.div>
        </div>
      )}
    </section>
  )
}
