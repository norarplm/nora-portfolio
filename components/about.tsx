"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Briefcase, Heart, Coffee, Code, Music, Dog, Utensils, Globe } from 'lucide-react'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="section-container">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-medium-brown space-y-6"
          >
            <p>
              I'm Nora Wang, a passionate Software Developer with a strong
              foundation in Java, C++, and web technologies. Currently pursuing
              my Bachelor's degree in Software Engineering at the University of
              Waterloo, I combine academic knowledge with practical experience
              to create efficient and user-friendly applications.
            </p>
            <p>
              My experience at Avocado Mobile Inc. allowed me to develop and
              enhance features for children's educational games, where I led the
              porting of games from iOS to Android platforms. I'm passionate
              about creating software that makes a positive impact on users'
              lives.
            </p>
            <p>
              When I'm not coding, I enjoy spending time with my pets, exploring
              new technologies, and contributing to open-source projects.
            </p>
          </motion.div>

          <div>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <motion.div 
                  whileHover={{ rotate: 10 }}
                  className="bg-accent p-3 rounded-full text-white shadow-md mr-3"
                >
                  <GraduationCap size={24} />
                </motion.div>
                <h3 className="text-xl font-bold text-dark-brown">Education</h3>
              </div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="ml-12 pl-4 border-l-2 border-accent/30"
              >
                <h4 className="text-medium-brown font-medium">B.A. in Software Engineering</h4>
                <p className="text-light-brown">University of Waterloo</p>
                <p className="text-accent text-sm">2021 - 2026</p>
              </motion.div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <motion.div 
                  whileHover={{ rotate: 10 }}
                  className="bg-accent p-3 rounded-full text-white shadow-md mr-3"
                >
                  <Briefcase size={24} />
                </motion.div>
                <h3 className="text-xl font-bold text-dark-brown">Experience</h3>
              </div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="ml-12 pl-4 border-l-2 border-accent/30"
              >
                <h4 className="text-medium-brown font-medium">Java Software Developer</h4>
                <p className="text-light-brown">Avocado Mobile Inc.</p>
                <p className="text-accent text-sm">Sep 2023 - Apr 2024</p>
              </motion.div>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <motion.div 
                  whileHover={{ rotate: 10 }}
                  className="bg-accent p-3 rounded-full text-white shadow-md mr-3"
                >
                  <Heart size={24} />
                </motion.div>
                <h3 className="text-xl font-bold text-dark-brown">Interests</h3>
              </div>
              <div className="ml-12 grid grid-cols-4 gap-3">
                <motion.div 
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-white p-3 rounded-full shadow-sm mb-1">
                    <Coffee size={20} className="text-accent" />
                  </div>
                  <span className="text-xs text-medium-brown">Coffee</span>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-white p-3 rounded-full shadow-sm mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                      <path d="M5 17h14v4H5z"/>
                      <path d="M6 13v4"/>
                      <path d="M18 13v4"/>
                      <path d="M8 6h8"/>
                      <path d="M9 6v7"/>
                      <path d="M15 6v7"/>
                      <path d="M12 6v13"/>
                      <path d="M10 13h4"/>
                    </svg>
                  </div>
                  <span className="text-xs text-medium-brown">Skateboarding</span>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-white p-3 rounded-full shadow-sm mb-1">
                    <Code size={20} className="text-accent" />
                  </div>
                  <span className="text-xs text-medium-brown">Coding</span>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-white p-3 rounded-full shadow-sm mb-1">
                    <Music size={20} className="text-accent" />
                  </div>
                  <span className="text-xs text-medium-brown">Music</span>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-white p-3 rounded-full shadow-sm mb-1">
                    <Dog size={20} className="text-accent" />
                  </div>
                  <span className="text-xs text-medium-brown">Pets</span>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-white p-3 rounded-full shadow-sm mb-1">
                    <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 11V15M18 9V13M12 4V8M12 16V20M5.2 9H7.2C8.96731 9 9.85097 9 10.5528 8.63201C11.1634 8.31089 11.6568 7.81736 11.9779 7.20677C12.3459 6.50494 12.3459 5.62128 12.3459 3.85397V3.2C12.3459 2.0799 12.3459 1.51984 12.0623 1.09202C11.8123 0.715695 11.4302 0.42875 10.9878 0.270853C10.4857 0.0908118 9.88347 0.18856 8.67895 0.383057L5.2 1M5.2 15H7.2C8.96731 15 9.85097 15 10.5528 15.368C11.1634 15.6891 11.6568 16.1826 11.9779 16.7932C12.3459 17.4951 12.3459 18.3787 12.3459 20.146V20.8C12.3459 21.9201 12.3459 22.4802 12.0623 22.908C11.8123 23.2843 11.4302 23.5713 10.9878 23.7291C10.4857 23.9092 9.88347 23.8114 8.67895 23.6169L5.2 23M18.8 13H16.8C15.0327 13 14.149 13 13.4472 12.632C12.8366 12.3109 12.3432 11.8174 12.0221 11.2068C11.6541 10.5049 11.6541 9.62128 11.6541 7.85397V7.2C11.6541 6.0799 11.6541 5.51984 11.9377 5.09202C12.1877 4.7157 12.5698 4.42875 13.0122 4.27085C13.5143 4.09081 14.1165 4.18856 15.3211 4.38306L18.8 5M18.8 19H16.8C15.0327 19 14.149 19 13.4472 18.632C12.8366 18.3109 12.3432 17.8174 12.0221 17.2068C11.6541 16.5049 11.6541 15.6213 11.6541 13.854V13.2C11.6541 12.0799 11.6541 11.5198 11.9377 11.092C12.1877 10.7157 12.5698 10.4287 13.0122 10.2709C13.5143 10.0908 14.1165 10.1886 15.3211 10.3831L18.8 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-xs text-medium-brown">Gaming</span>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-white p-3 rounded-full shadow-sm mb-1">
                    <Globe size={20} className="text-accent" />
                  </div>
                  <span className="text-xs text-medium-brown">Travel</span>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-white p-3 rounded-full shadow-sm mb-1">
                    <Utensils size={20} className="text-accent" />
                  </div>
                  <span className="text-xs text-medium-brown">Cooking</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}