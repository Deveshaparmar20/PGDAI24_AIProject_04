import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import '../styles/Navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);
  
    return (
      <nav className="navbar">
        <h1 className="navbar-logo">EmotiCare</h1>
        <button onClick={toggleMenu} className="hamburger-button">☰</button>
        {menuOpen && <HamburgerMenu onClose={closeMenu} />}
      </nav>
    );
  }
  
  export default Navbar;