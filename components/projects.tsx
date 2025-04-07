"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, Gamepad2 } from 'lucide-react'

const projects = [
  {
    title: "Chamber Crawler 3000+ Game",
    type: "Team Project",
    tech: "C++",
    period: "Jul 2024 - Aug 2024",
    icon: <Gamepad2 size={24} />,
    description: [
      "Implemented a modular item system using C++ with a focus on scalability and flexibility, allowing dynamic interaction with in-game items including potions, treasures, and special items.",
      "Collaborated in a team environment, utilizing Git for version control, conducting code reviews, and managing project tasks to ensure high code quality and continuous integration.",
    ],
  },
  {
    title: "News Project",
    type: "Personal Project",
    tech: "Java",
    period: "Mar 2023 - Jun 2023",
    icon: <Database size={24} />,
    description: [
      "Developed a news article management system with a scalable backend using microservices architecture, enabling efficient storage, retrieval, and updating of news content.",
      "Implemented a search feature using Elasticsearch for fast and accurate retrieval of news articles based on keywords and metadata.",
      "Designed a system for viewing news articles with MySQL as the database, ensuring efficient data storage and management. Utilized MinIO for handling object storage, enhancing the flexibility and performance of the system.",
      "Integrated Kafka to manage and update the status of news articles in real-time, improving the reliability and scalability of content updates.",
    ],
  },
  {
    title: "Food Ordering System",
    type: "Personal Project",
    tech: "Java",
    period: "Aug 2022 - Oct 2022",
    icon: <Code size={24} />,
    description: [
      "Developed a responsive web page for restaurant staff to efficiently manage dishes, combos, and customer orders with HTML, CSS.",
      "Implemented a mobile mini-program enabling customers to browse the menu, add items to a shopping cart, place and pay for orders, track order status, cancel orders, and receive notifications for order updates.",
      "Utilized SpringBoot, Spring MVC, and MyBatis frameworks to create a robust, scalable backend architecture, supporting seamless interaction between the frontend and backend.",
      "Leveraged Nginx for efficient frontend-backend communication and Git for version control, ensuring smooth deployment and consistent application updates.",
    ],
  },
]

export default function Projects() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="section-container">
      <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants}>
        <h2 className="section-title">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-light-cream rounded-lg shadow-md overflow-hidden hover:shadow-xl"
            >
              <div className="bg-accent p-4 text-white flex justify-between items-center">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <motion.div whileHover={{ rotate: 15 }} className="bg-white p-2 rounded-full text-accent shadow-md">
                  {project.icon}
                </motion.div>
              </div>
              <div className="p-6">
                <div className="flex justify-between mb-4">
                  <p className="text-accent font-medium">{project.type}</p>
                  <p className="text-light-brown">{project.tech}</p>
                </div>
                <p className="text-light-brown mb-4">{project.period}</p>
                <ul className="space-y-2">
                  {project.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 * i }}
                      className="text-medium-brown text-sm flex gap-2"
                    >
                      <span className="text-accent">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}