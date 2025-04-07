"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Java Software Developer",
    company: "Avocado Mobile Inc.",
    period: "Sep 2023 - Apr 2024",
    description: [
      "Developed and enhanced new features for children's educational and entertainment games, contributing to the creation of engaging and interactive experiences for young users.",
      "Led the porting of games from Apple iOS to Android platforms, ensuring seamless functionality and performance across multiple devices and operating systems.",
      "Conducted rigorous testing and debugging to ensure high performance, reliability, and stability across both iOS and Android platforms, addressing platform-specific issues effectively.",
      "Collaborated with cross-functional teams including designers, QA testers, and product managers to implement game mechanics, improve user interfaces, and enhance overall user experience.",
      "Optimized game performance by refining Java code and ensuring compatibility with various Android devices, improving load times and reducing crashes.",
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="experience" className="section-container">
      <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants}>
        <h2 className="section-title">Experience</h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="p-8"  // Removed background card styling
            >
              <div className="flex items-start gap-4">
                <motion.div whileHover={{ rotate: 10 }} className="bg-accent p-3 rounded-full text-white shadow-md">
                  <Briefcase size={24} />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-dark-brown">{exp.title}</h3>
                  <p className="text-accent font-medium">{exp.company}</p>
                  <p className="text-light-brown mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="text-medium-brown flex gap-2"
                      >
                        <span className="text-accent">•</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
