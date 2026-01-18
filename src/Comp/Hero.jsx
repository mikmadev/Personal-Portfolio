import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  // Animation settings for reusable delay logic
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Harek element 0.2s ko gap ma load hunchha
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="home" className="py-5 d-flex align-items-center" style={{ minHeight: '80vh' }}>
      <div className="container">
        <motion.div
          className="row align-items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <div className="col-lg-7 mt-2">
            <motion.h6
              variants={itemVariants}
              className="text-primary fw-bold text-uppercase mb-3"
              style={{ letterSpacing: '2px' }}
            >
              Available for projects
            </motion.h6>

            <motion.h3
              variants={itemVariants}
              className="display-3 fw-bolder mb-4" // fw-bold बाट fw-bolder (800 weight)
              style={{
                lineHeight: '1.1',
                letterSpacing: '-2px' // Typography लाई High-end बनाउन
              }}
            >
              Crafting <span className="text-primary">Web-Solutions</span> <br className="d-none d-md-block" />
              That Drive Business Growth.
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="lead text-secondary mb-5 pe-lg-5"
              style={{ minHeight: '80px' }} // Text type huda layout nahlini gari height fix gareko
            >
              <TypeAnimation
                sequence={[
                  1000, // 1. Screen load bhayeko 2 second pachi balla start hunchha
                  "Hi, I’m Mikma. I help businesses grow by building digital solutions that bridge the gap between your ideas and your goals. If you need someone who understands your vision as much as the technology, let’s make it happen.", // 2. Purai text type hunchha
                ]}
                speed={75} // Typing speed (slow/fast yaha bata milau)
                cursor={true} // Last ma blink hune cursor dekhaucha
                wrapper="span"
              />
            </motion.p>

            <motion.div variants={itemVariants} className="d-flex gap-3">
              <a href="#projects" className="btn btn-dark btn-lg rounded-pill px-4 shadow-sm hover-up">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline-dark btn-lg rounded-pill px-4">
                Let's Talk
              </a>
            </motion.div>
          </div>

          {/* Right Side Visual */}
         <motion.div
  // d-none ra d-lg-block hataidye, aba mobile ma pani dekhinchha
  // mb-5 thapidye jasle mobile ma button haru bhanda tala space rakhchha
  className="col-lg-5 col-12 mb-5 mb-lg-0 mt-3" 
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }} // Mobile ma scroll garda load hos bhanera
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <div className="p-5 bg-light rounded-4 shadow-sm border text-center">
    <motion.div
      animate={{ rotate: [0, 5, -5, 0] }}
      transition={{ repeat: Infinity, duration: 4 }}
      className="display-1 text-primary mb-3"
    >
      {/* Icon size mobile ma ali thulo bhayo bhane fs-1 class thapna sakincha */}
      <i className="bi bi-code-slash">&lt;/&gt;</i>
    </motion.div>
    <h5 className="fw-bold">Frontend Developer</h5>
    <p className="small text-muted mb-0">React • Bootstrap • JavaScript</p>
  </div>
</motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;