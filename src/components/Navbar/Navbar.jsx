// src/components/Navbar/Navbar.js
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/svgs/icon.svg';
import horizontalName from '../../assets/svgs/horizontalname.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 70; // Height of fixed navbar in pixels
      const offsetPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" className={styles.logo} style={{filter: 'invert(1)'}} />
        <img src={horizontalName} alt="logo" className={styles.logoName} />
      </div>

      <button 
        className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
        <li><a href="#overview" onClick={(e) => { e.preventDefault(); handleScroll('overview'); }}>Overview</a></li>
        <li><a href="#services" onClick={(e) => { e.preventDefault(); handleScroll('services'); }}>Services</a></li>
        <li><a href="#vision-mission" onClick={(e) => { e.preventDefault(); handleScroll('vision-mission'); }}>Vision & Mission</a></li>
        <li><a href="#machinery" onClick={(e) => { e.preventDefault(); handleScroll('machinery'); }}>Machinery</a></li>
        <li><a href="#workers" onClick={(e) => { e.preventDefault(); handleScroll('workers'); }}>Workers</a></li>
        <li><a href="#projects" onClick={(e) => { e.preventDefault(); handleScroll('projects'); }}>Projects</a></li>
        <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}>Contact</a></li>
        <li><a href="/careers">Careers</a></li>
        <li><a href="/profile">Profile</a></li>

      </ul>
    </nav>
  );
};

export default Navbar;
