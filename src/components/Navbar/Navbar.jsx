import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img className="navbar-logo-img" src="/logo/Logo.png" alt="Logo" />
          <span className="navbar-logo-text">Mon Portfolio</span>
        </Link>

        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Accueil</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;