import React from 'react'
import { FaReact, FaJs, FaBootstrap, FaHtml5, FaCss3, FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';

function Skills() {
  const techStack = [
    { name: 'React.js', icon: <FaReact className="text-info" /> },
    { name: 'JavaScript', icon: <FaJs className="text-warning" /> },
    { name: 'Bootstrap', icon: <FaBootstrap style={{ color: '#7952b3' }} /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-danger" /> },
    { name: 'CSS3', icon: <FaCss3 className="text-primary" /> },
    { name: 'Git/GitHub', icon: <FaGithub className="text-dark" /> }
  ];

  // Container variant jasle garda bhitra ko cards haru liney ma layered animation ma aauchan
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Harek icon card 0.1s ko gap ma aaune
      }
    }
  };

  // Harek single card ko animation
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100 } 
    }
  };

  return (
    <section id="skills" className="py-5 bg-white overflow-hidden">
      <div className="container">
        {/* Header Section Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="row justify-content-center"
        >
          <div className="col-lg-8 text-center mb-5">
            <h2 className="fw-bold mb-3">My Tech Stack</h2>
            <p className="text-muted">These are the tools and technologies I use to bring your ideas to life on the web.</p>
          </div>
        </motion.div>
        
        {/* Icons Grid Animation */}
        <motion.div 
          className="row g-4 justify-content-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // 20% section dekhiyepachi animation suru hunchha
        >
          {techStack.map((tech, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="col-6 col-md-4 col-lg-2 text-center"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 2 }} // Mouse lada halka zoom ra rotate hune
                whileTap={{ scale: 0.95 }} // Click garda halka thichine
                className="p-4 border rounded-4 h-100 shadow-sm bg-white transition-all"
                style={{ cursor: 'pointer' }}
              >
                <div className="display-5 mb-3 d-flex justify-content-center">
                   {tech.icon}
                </div>
                <span className="fw-semibold d-block">{tech.name}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills