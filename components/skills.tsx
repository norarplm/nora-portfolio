"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skillCategories = [
  {
    name: "Programming",
    skills: [
      { name: "Java", icon: "/images/skills/java.png" },
      { name: "C++", icon: "/images/skills/cpp.png" },
      { name: "HTML", icon: "/images/skills/html.png" },
      { name: "CSS", icon: "/images/skills/css.png" },
      { name: "SQL", icon: "/images/skills/sql.png" },
    ],
  },
  {
    name: "DevOps",
    skills: [
      { name: "Linux", icon: "/images/skills/linux.png" },
      { name: "Nginx", icon: "/images/skills/nginx.png" },
      { name: "Docker", icon: "/images/skills/docker.png" },
      { name: "MySQL", icon: "/images/skills/mysql.png" },
      { name: "Maven", icon: "/images/skills/maven.png" },
    ],
  },
  {
    name: "Technologies",
    skills: [
      { name: "Tomcat", icon: "/images/skills/tomcat.png" },
      { name: "Android SDK", icon: "/images/skills/android.png" },
      { name: "Cross-Platform", icon: "/images/skills/cross-platform.png" },
    ],
  },
  {
    name: "Developer Tools",
    skills: [
      { name: "VSCode", icon: "/images/skills/vscode.png" },
      { name: "Intellij IDEA", icon: "/images/skills/intellij.png" },
      { name: "Clion", icon: "/images/skills/clion.png" },
      { name: "Android Studio", icon: "/images/skills/android-studio.png" },
      { name: "Git", icon: "/images/skills/git.png" },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="section-container">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <h2 className="section-title">Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="p-6"  
            >
              <h3 className="text-xl font-bold text-dark-brown mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.05 * i }}
                    whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-14 h-14  flex items-center justify-center  p-2 mb-1  transition-all duration-200">
                      <img src={skill.icon || "/placeholder.svg"} alt={skill.name} className="w-10 h-10" />
                    </div>
                    <span className="text-medium-brown text-xs">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
