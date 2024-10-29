import React from 'react';
import '../styles/HamburgerMenu.css';

function HamburgerMenu({ onClose }) {
    return (
      <div className="hamburger-menu">
        <ul>
          <li><a href="/" onClick={onClose}>Home</a></li>
          <li><a href="/emotion-analysis" onClick={onClose}>Emotion Analysis</a></li>
          <li><a href="/crisis-detection" onClick={onClose}>Crisis Detection</a></li>
          <li><a href="/settings" onClick={onClose}>Settings</a></li>
        </ul>
      </div>
    );
  }
  
  export default HamburgerMenu;