import React, { useEffect, useState } from 'react';

const DotNav = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Check for each section's position
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });

      // Special Case: Yedi user footer ma pugeko chha bhane 'contact' dot active garne
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (isAtBottom) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to set active section on load
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="dot-nav-container d-flex">
      {sections.map((section) => (
        <a key={section.id} href={`#${section.id}`} className="dot-nav-item">
          <span className={`dot ${activeSection === section.id ? 'active' : ''}`}></span>
          <span className="dot-label">{section.label}</span>
        </a>
      ))}
    </div>
  );
};

export default DotNav;