import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__toggle" onClick={toggleMenu}>
        <div className={`navbar__hamburger ${isOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`navbar__list ${isOpen ? 'open' : ''}`}>
        <li className="navbar__item">
          <Link to="/" className="navbar__link" onClick={handleLinkClick}>Personajes</Link>
        </li>
        <li className="navbar__item">
          <Link to="/chapters" className="navbar__link" onClick={handleLinkClick}>Capítulos</Link>
        </li>
        <li className="navbar__item">
          <Link to="/locations" className="navbar__link" onClick={handleLinkClick}>Ubicaciones</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
