"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="py-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center"
      >
        <div className="w-16 h-px bg-medium-brown/50 mr-4"></div>
        <p className="text-medium-brown text-sm">Nora Wang</p>
        <div className="w-16 h-px bg-medium-brown/50 ml-4"></div>
      </motion.div>
    </footer>
  )
}