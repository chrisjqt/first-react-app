import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; 
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (!sectionId) return;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    const initialHash = window.location.hash?.replace('#', '');
    if (initialHash) {
      setActiveSection(initialHash);
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setIsOpen(false);
    setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">Chris Jaylord Lacre</div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a
          href="#home"
          aria-current={activeSection === 'home' ? 'page' : undefined}
          className={activeSection === 'home' ? 'active' : ''}
          onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}
        >
          Home
        </a>
        <a
          href="#about"
          aria-current={activeSection === 'about' ? 'page' : undefined}
          className={activeSection === 'about' ? 'active' : ''}
          onClick={(e) => { e.preventDefault(); handleLinkClick('about'); }}
        >
          About
        </a>
        <a
          href="#projects"
          aria-current={activeSection === 'projects' ? 'page' : undefined}
          className={activeSection === 'projects' ? 'active' : ''}
          onClick={(e) => { e.preventDefault(); handleLinkClick('projects'); }}
        >
          Projects
        </a>
        <a
          href="#contact"
          aria-current={activeSection === 'contact' ? 'page' : undefined}
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }}
        >
          Contact
        </a>
      </div>

      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Navbar;
