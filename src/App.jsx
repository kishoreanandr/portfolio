import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import ScrollingSkills from './components/ScrollingSkills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { personal } from './data'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

export default function App(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Close menu when clicking on nav links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside
    const handleClickOutside = (event) => {
      const navbar = document.querySelector('.navbar');
      const toggler = document.querySelector('.navbar-toggler');
      
      if (isMenuOpen && navbar && !navbar.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', closeMenu);
      });
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="text-white p-2 sticky-top shadow-sm">
        <nav className="container navbar navbar-expand-md">
          <a className="navbar-brand d-flex align-items-center" href="#hero">
            <span className="fw-bold">Portfolio</span>
          </a>
          <button 
            className={`navbar-toggler ${isMenuOpen ? '' : 'collapsed'}`} 
            type="button" 
            onClick={toggleMenu}
            aria-controls="navMenu" 
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navMenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section id="hero"><Hero /></section>
        <section id="about" className="container"><About /></section>
        <section id="skills" className="container"><Skills /></section>
        <ScrollingSkills />
        <section id="projects" className="container"><Projects /></section>
        <section id="contact" className="container"><Contact /></section>
      </main>

      <Footer />
    </>
  )
}
