import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`navbar navbar-expand-lg fixed-top transition-all ${scrolled || isOpen ? 'bg-white shadow-sm py-2' : 'bg-transparent py-3'
        } navbar-light`}
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#home">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="text-primary"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
          </motion.div>
          <span className="fw-bold fs-4 tracking-tighter">
            Rumba<span className="text-primary">.</span>dev
          </span>
        </a>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto text-center align-items-center">
            {navLinks.map((link, index) => (
              <li className="nav-item position-relative mx-1" key={index}>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="nav-link fw-semibold text-dark px-3 custom-nav-link"
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              </li>
            ))}
            <li className="nav-item ms-lg-3 py-2 py-lg-0">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(13, 110, 253, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="btn btn-primary rounded-pill px-4 fw-bold shadow-sm"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </motion.a>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;