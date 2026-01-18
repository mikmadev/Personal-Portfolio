import React from 'react'
import Navbar from './Comp/Navbar';
import Hero from './Comp/Hero';
import Skills from './Comp/Skills';
import Projects from './Comp/Projects';
import Contact from './Comp/Contact';
import Footer from './Comp/Footer';
import DotNav from './Comp/DotNav';
function App() {
  return (
    <>
     <Navbar />
      <DotNav /> {/* Yo yaha basxa */}
      <div id="home"><Hero /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  )
}

export default App
