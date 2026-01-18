import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import TA from '../assets/TA-portfolio.jpg';
import Construction from '../assets/construction.jpg';
import BK from '../assets/banking.jpg';

function Projects() {
  const myProjects = [
    {
  id: 5, // Yedi mathi 4 ota chhan bhane 5 rakha
  title: "Banking Khabar Portal",
  desc: "A dynamic financial news platform that delivers real-time banking updates by fetching data from a REST API. It features a clean UI for reading financial news and market trends.",
  tech: ["React", "REST API", "Axios", "Bootstrap"],
  link: "https://banking-khabar-portfolio.vercel.app/", // Live link yaha hala
  github: "#", // Github link yaha hala
  image: BK // Aafno screenshot import garera yaha rakha
},
    {
      id: 2,
      title: "Travel Agency Portal",
      desc: "Modern landing page for a travel company with booking inquiry forms.",
      tech: ["React", "CSS3", "Framer Motion"],
      link: "https://travel-agency-sandy-ten.vercel.app/",
      github: "#",
      image: TA
    },
    {
      id: 3,
      title: "Construction Portfolio",
      desc: "Professional site for a construction firm showcasing their machinery.",
      tech: ["HTML5", "JavaScript", "Bootstrap"],
      link: "https://rumba-construction.vercel.app/",
      github: "#",
      image: Construction
    }
    
  ];

  // Container Variant
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 } // Cards load huda 0.3s ko gap hunchha
    }
  };

  // Card Variant
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section id="projects" className="py-5 bg-light overflow-hidden">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center fw-bold mb-5"
        >
          Featured Projects
        </motion.h2>

        <motion.div 
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {myProjects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -10 }} // Hover garda mathi lift hune
                className="card h-100 border-0 shadow-sm overflow-hidden"
              >
                {/* Image Hover Zoom Effect */}
                <div className="overflow-hidden">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={project.image} 
                    className="card-img-top" 
                    alt={project.title} 
                  />
                </div>

                <div className="card-body p-4 text-start">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text text-muted small">{project.desc}</p>
                  
                  <div className="mb-3">
                    {project.tech.map((t, i) => (
                      <span key={i} className="badge bg-secondary me-1 fw-light" style={{ fontSize: '0.75rem' }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="d-flex gap-2">
                    <motion.a 
                      whileTap={{ scale: 0.9 }}
                      href={project.link} 
                      className="btn btn-primary btn-sm d-flex align-items-center gap-1 px-3"
                    >
                      <FaExternalLinkAlt size={12} /> Live
                    </motion.a>
                    
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects